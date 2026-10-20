// Reads brand-kit/brand.md and turns it into render tokens.
// Everything visual comes from the kit. When an optional section is missing,
// a value is derived from Palette and recorded in brand.derived so every
// script can say what it guessed.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { normHex, contrast, ensureContrast, mix, bestOn, isDark, toOklab, fromOklab } from './color.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
export const SKILL_DIR = path.resolve(HERE, '..', '..');

// ---------- locating the kit ----------

export function findKit(explicit) {
  const tried = [];
  const ok = (dir) => { tried.push(dir); return fs.existsSync(path.join(dir, 'brand.md')); };
  if (explicit) {
    const dir = path.resolve(explicit);
    if (ok(dir)) return dir;
    if (ok(path.join(dir, 'brand-kit'))) return path.join(dir, 'brand-kit');
    throw new Error(`No brand.md at ${dir}.`);
  }
  let dir = process.cwd();
  for (;;) {
    if (ok(path.join(dir, 'brand-kit'))) return path.join(dir, 'brand-kit');
    const up = path.dirname(dir);
    if (up === dir) break;
    dir = up;
  }
  const beside = path.resolve(SKILL_DIR, '..', '..', 'brand-kit');
  if (ok(beside)) return beside;
  throw new Error(
    'Could not find brand-kit/brand.md. Run from the repository root, or pass --kit <path to brand-kit>.\n' +
      'Looked in:\n  ' + tried.join('\n  ')
  );
}

// ---------- markdown helpers ----------

export function sections(md) {
  const out = {};
  const parts = md.split(/^## +(.+?)\s*$/m);
  for (let i = 1; i < parts.length; i += 2) out[parts[i].trim()] = parts[i + 1] || '';
  return out;
}

const clean = (cell) => cell.replace(/`/g, '').replace(/\*\*/g, '').trim();

export function tables(text) {
  const result = [];
  let cur = null;
  for (const line of text.split('\n')) {
    if (/^\s*\|/.test(line)) {
      const cells = line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(clean);
      if (cells.every((c) => /^:?-{2,}:?$/.test(c) || c === '')) continue;
      if (!cur) { cur = { head: cells, rows: [] }; result.push(cur); } else cur.rows.push(cells);
    } else cur = null;
  }
  return result;
}

const hexIn = (cell) => {
  const m = (cell || '').match(/#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b/);
  return m ? normHex(m[0]) : null;
};
const isPlaceholder = (cell) => /#_{2,}|_{4,}/.test(cell || '');
const key = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

function roleTable(text, roles) {
  // roles: { 'normalized role name': 'tokenKey' }
  const found = {}, placeholders = [];
  for (const t of tables(text)) {
    for (const row of t.rows) {
      const k = roles[key(row[0])];
      if (!k) continue;
      const hex = hexIn(row[1]);
      if (hex) found[k] = hex;
      else if (isPlaceholder(row[1]) || row[1] === '') placeholders.push(row[0]);
      else if (/not used/i.test(row[1])) found[k] = null;
      if (row[2] !== undefined && hexIn(row[2])) found[k + 'Tint'] = hexIn(row[2]);
    }
  }
  return { found, placeholders };
}

// ---------- parsing ----------

const PALETTE = {
  'primary': 'primary', 'primary dark': 'primaryDark', 'accent': 'accent', 'accent soft': 'accentSoft',
  'success positive': 'success', 'body text': 'text', 'muted text': 'muted', 'rule border': 'rule',
  'background': 'bg', 'background soft': 'bgSoft',
};
const PALETTE_LABEL = {
  primary: 'Primary', primaryDark: 'Primary dark', accent: 'Accent', accentSoft: 'Accent soft',
  success: 'Success / positive', text: 'Body text', muted: 'Muted text', rule: 'Rule / border',
  bg: 'Background', bgSoft: 'Background soft',
};
const SEMANTIC = { positive: 'positive', caution: 'caution', problem: 'problem' };
const DARK = {
  ground: 'ground', raised: 'raised', rule: 'rule', text: 'text', 'muted text': 'muted',
  emphasis: 'emphasis', accent: 'accent', terminal: 'terminal',
};
const CHART = {
  '1': 's1', '2': 's2', '3': 's3', '4': 's4', '5': 's5', '6': 's6', context: 'context',
  'sequential low': 'seqLow', 'sequential high': 'seqHigh',
};

const TYPE_ROLES = ['display', 'h1', 'h2', 'h3', 'body', 'small', 'caption', 'eyebrow', 'data'];
const DEFAULT_SCALE = {
  display: ['display', 56, 700, 1.05, '-0.025em'], h1: ['display', 40, 700, 1.1, '-0.02em'],
  h2: ['display', 28, 600, 1.2, '-0.01em'], h3: ['display', 21, 600, 1.3, '0'],
  body: ['body', 16, 400, 1.6, '0'], small: ['body', 14, 400, 1.5, '0'],
  caption: ['body', 12.5, 500, 1.4, '0.01em'], eyebrow: ['mono', 11.5, 500, 1.2, '0.14em'],
  data: ['mono', 14, 400, 1.4, '0'],
};
const FALLBACK_STACK = {
  display: 'system-ui, -apple-system, "Segoe UI", sans-serif',
  body: 'system-ui, -apple-system, "Segoe UI", sans-serif',
  mono: 'ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace',
};

function parseFont(text, label) {
  const m = text.match(new RegExp('\\*\\*' + label + '[^*]*:\\*\\*[ \\t]*([^\\n]*(?:\\n(?!\\s*-\\s)(?!\\s*$)[^\\n]*)*)', 'i'));
  if (!m) return null;
  const line = m[1].trim();
  if (!line || /^\(/.test(line)) return null;
  const family = line.split(/[,.(]/)[0].replace(/[`"*]/g, '').trim();
  if (!family) return null;
  const weights = [...new Set((line.match(/\b[1-9]00\b/g) || []).map(Number))];
  return { family, weights: weights.length ? weights : [400, 700] };
}

function parseTypeScale(text) {
  const out = {};
  let filled = 0;
  for (const t of tables(text)) {
    for (const r of t.rows) {
      const role = key(r[0]);
      if (!TYPE_ROLES.includes(role)) continue;
      const size = parseFloat(r[2]);
      if (!size) continue;
      filled++;
      out[role] = {
        font: (key(r[1] || '') || DEFAULT_SCALE[role][0]).replace('monospace', 'mono'),
        size,
        weight: parseInt(r[3], 10) || DEFAULT_SCALE[role][2],
        lineHeight: parseFloat(r[4]) || DEFAULT_SCALE[role][3],
        tracking: (r[5] || '').trim() || DEFAULT_SCALE[role][4],
      };
    }
  }
  return { scale: out, filled };
}

function bullet(text, label) {
  const m = text.match(new RegExp('\\*\\*' + label + ':\\*\\*[ \\t]*([^\\n]+)', 'i'));
  if (!m) return null;
  const v = m[1].trim();
  return v.startsWith('(') ? null : v;
}

export function loadBrand(kitDir) {
  const file = path.join(kitDir, 'brand.md');
  const md = fs.readFileSync(file, 'utf8');
  const sec = sections(md);
  const brand = { kitDir, file, derived: [], errors: [], warnings: [], sectionsFound: Object.keys(sec) };

  // Company
  const company = sec['Company'] || '';
  const name = bullet(company, 'Name');
  const website = bullet(company, 'Website');
  brand.company = {
    name: name && !/_{3,}/.test(name) ? name : null,
    website: website || null,
    domain: website ? website.replace(/^https?:\/\//, '').replace(/\/$/, '') : null,
  };
  if (!brand.company.name) brand.errors.push('`Company` has no `Name`. Run `brand-kit-setup`.');

  // Palette (required)
  const pal = roleTable(sec['Palette'] || '', PALETTE);
  brand.palette = pal.found;
  const missingCore = Object.keys(PALETTE_LABEL).filter((k) => !brand.palette[k]);
  if (!sec['Palette']) brand.errors.push('`brand.md` has no `Palette` heading. Run `brand-kit-setup`.');
  else if (missingCore.length)
    brand.errors.push('`Palette` is missing ' + missingCore.map((k) => '`' + PALETTE_LABEL[k] + '`').join(', ') + '. Run `brand-kit-setup` to fill it.');

  // Semantic (in the Palette section)
  const sem = roleTable(sec['Palette'] || '', SEMANTIC);
  brand.semantic = {};
  for (const k of Object.keys(SEMANTIC)) {
    if (sem.found[k]) brand.semantic[k] = { hex: sem.found[k], tint: sem.found[k + 'Tint'] || null };
  }

  if (brand.errors.length) return brand;
  const P = brand.palette;

  for (const k of Object.keys(SEMANTIC)) {
    if (!brand.semantic[k]) {
      brand.errors.push('`Palette` has no `' + k[0].toUpperCase() + k.slice(1) + '` row in the semantic table. Status pills need all three.');
    } else if (!brand.semantic[k].tint) {
      brand.semantic[k].tint = mix(P.bg, brand.semantic[k].hex, 0.12);
      brand.derived.push(`Semantic ${k} tint (derived from its color)`);
    }
  }
  if (brand.errors.length) return brand;

  // Dark Surfaces (derived from Palette when missing)
  const dk = roleTable(sec['Dark Surfaces'] || '', DARK);
  const D = { ...dk.found };
  const needDerive = (k) => !(k in D) || (D[k] === undefined);
  const deriveNote = [];
  if (needDerive('ground')) {
    D.ground = isDark(P.primaryDark) ? P.primaryDark : fromOklab([0.18, ...toOklab(P.primaryDark).slice(1).map((v) => v * 0.6)]);
    deriveNote.push('Ground');
  }
  if (needDerive('raised')) { D.raised = mix(D.ground, P.bg, 0.06); deriveNote.push('Raised'); }
  if (needDerive('rule')) { D.rule = mix(D.ground, P.bg, 0.16); deriveNote.push('Rule'); }
  if (needDerive('text')) { D.text = bestOn(D.ground, [P.bg, P.bgSoft]); deriveNote.push('Text'); }
  if (needDerive('muted')) { D.muted = ensureContrast(mix(D.text, D.ground, 0.4), D.ground, 4.5); deriveNote.push('Muted text'); }
  if (needDerive('emphasis')) { D.emphasis = ensureContrast(P.primary, D.ground, 4.5) || D.text; deriveNote.push('Emphasis'); }
  if (needDerive('accent')) { D.accent = ensureContrast(P.accent, D.ground, 3) || D.text; deriveNote.push('Accent'); }
  if (!('terminal' in D)) D.terminal = null;
  if (deriveNote.length) brand.derived.push('`Dark Surfaces`: ' + deriveNote.join(', ') + (sec['Dark Surfaces'] ? '' : ' (heading missing)'));
  brand.dark = D;

  // Chart Colors
  const ch = roleTable(sec['Chart Colors'] || '', CHART);
  const C = ch.found;
  const series = ['s1', 's2', 's3', 's4', 's5', 's6'].map((k) => C[k]).filter(Boolean);
  if (series.length < 2) {
    const base = [P.primary, P.accent, P.success, P.primaryDark, P.muted];
    brand.chart = {
      series: base.map((c) => ensureContrast(c, P.bg, 3)).filter(Boolean),
      context: ensureContrast(mix(P.muted, P.bg, 0.35), P.bg, 3) || P.muted,
      seqLow: mix(P.bg, P.primary, 0.12),
      seqHigh: P.primaryDark,
    };
    brand.derived.push('`Chart Colors`: all series (heading ' + (sec['Chart Colors'] ? 'empty' : 'missing') + ')');
  } else {
    brand.chart = {
      series,
      context: C.context || ensureContrast(mix(P.muted, P.bg, 0.35), P.bg, 3) || P.muted,
      seqLow: C.seqLow || mix(P.bg, series[0], 0.12),
      seqHigh: C.seqHigh || series[0],
    };
  }

  // Typography
  const ty = sec['Typography'] || '';
  brand.fonts = {
    display: parseFont(ty, 'Display'),
    body: parseFont(ty, 'Body'),
    mono: parseFont(ty, 'Mono'),
  };
  if (!brand.fonts.display && !brand.fonts.body) brand.warnings.push('`Typography` names no fonts. Renders will use system fonts.');
  if (!brand.fonts.display) brand.fonts.display = brand.fonts.body;
  if (!brand.fonts.body) brand.fonts.body = brand.fonts.display;

  // Type Scale
  const ts = parseTypeScale(sec['Type Scale'] || '');
  brand.type = {};
  for (const r of TYPE_ROLES) {
    const d = DEFAULT_SCALE[r];
    brand.type[r] = ts.scale[r] || { font: d[0], size: d[1], weight: d[2], lineHeight: d[3], tracking: d[4] };
  }
  if (ts.filled < TYPE_ROLES.length) {
    const missing = TYPE_ROLES.filter((r) => !ts.scale[r]);
    brand.derived.push('`Type Scale`: ' + (ts.filled ? missing.join(', ') : 'every role') + ' (defaults)');
  }
  // make sure every weight the scale uses is loaded
  for (const r of TYPE_ROLES) {
    const f = brand.fonts[brand.type[r].font];
    if (f && !f.weights.includes(brand.type[r].weight)) f.weights.push(brand.type[r].weight);
  }
  const measure = bullet(sec['Type Scale'] || '', 'Measure');
  brand.measure = measure ? parseInt(measure, 10) || 68 : 68;

  // Spacing and Shape
  const sp = {};
  for (const t of tables(sec['Spacing and Shape'] || '')) for (const r of t.rows) sp[key(r[0])] = (r[1] || '').trim();
  const px = (v, d) => (v && /\d/.test(v) ? v.match(/[\d.]+\s*(px|rem|em)?/)[0].replace(/\s/g, '').replace(/^([\d.]+)$/, '$1px') : d);
  const scale = (sp['spacing scale'] || '').match(/[\d.]+/g);
  brand.space = {
    base: px(sp['base unit'], '4px'),
    scale: scale ? scale.map(Number) : [4, 8, 12, 16, 24, 32, 48, 64, 96],
    radiusS: px(sp['radius small'], '4px'),
    radiusL: px(sp['radius large'], '8px'),
    border: px(sp['border width'], '1px'),
    shadow: sp['shadow'] && !/^none\b/i.test(sp['shadow']) ? sp['shadow'] : 'none',
  };
  if (!sp['base unit'] && !sp['spacing scale']) brand.derived.push('`Spacing and Shape`: every value (defaults)');

  // Logo
  const lg = {};
  for (const t of tables(sec['Logo'] || '')) {
    for (const r of t.rows) {
      const f = (r[1] || '').trim();
      if (!f || isPlaceholder(f)) continue;
      const k = key(r[0]);
      const kind = k.includes('wordmark') ? 'wordmark' : k.includes('mark') ? 'mark' : null;
      if (!kind) { brand.warnings.push(`\`Logo\` row "${r[0]}" is not a wordmark or a mark, so it was skipped.`); continue; }
      const slot = kind + (k.includes('dark') ? 'Dark' : 'Light');
      const abs = path.resolve(kitDir, f);
      if (fs.existsSync(abs)) lg[slot] = abs;
      else brand.warnings.push(`\`Logo\` lists ${f} but no file exists at ${abs}.`);
    }
  }
  brand.logo = lg;
  if (!Object.keys(lg).length) brand.warnings.push('`Logo` has no files. Cards will set the company name in the display face.');

  // Document Footer
  const foot = (sec['Document Footer'] || '').match(/`([^`]+)`/g) || [];
  brand.footer = foot.map((s) => s.replace(/`/g, '')).filter((s) => !/\[Company\]|\[domain\]/.test(s));
  if (!brand.footer.length && brand.company.name)
    brand.footer = [brand.company.name + (brand.company.domain ? ' | ' + brand.company.domain : '')];

  computeRoles(brand);
  return brand;
}

// ---------- derived roles every template uses ----------

function computeRoles(brand) {
  const P = brand.palette, D = brand.dark;
  const R = {};
  R.primaryText = ensureContrast(P.primary, P.bg, 4.5) || P.text; // primary when used as small text on light
  R.onPrimary = bestOn(P.primary, [P.bg, P.text, D.text]);
  R.onPrimaryDark = bestOn(P.primaryDark, [P.bg, P.text, D.text]);
  R.onAccent = bestOn(P.accent, [P.primaryDark, P.text, P.bg]);
  R.accentText = ensureContrast(P.accent, P.bg, 4.5) || P.text; // accent as small text on light
  for (const k of ['positive', 'caution', 'problem']) {
    const s = brand.semantic[k];
    R[k + 'Ink'] = ensureContrast(s.hex, s.tint, 4.5) || P.text; // text inside a pill on its tint
    R[k + 'DarkTint'] = mix(D.raised, s.hex, 0.22);
    R[k + 'DarkInk'] = ensureContrast(s.hex, R[k + 'DarkTint'], 4.5) || D.text;
  }
  brand.roles = R;
}

// ---------- CSS output ----------

const stack = (f, role) => (f ? `"${f.family}", ${FALLBACK_STACK[role]}` : FALLBACK_STACK[role]);

export function tokensCss(brand) {
  const P = brand.palette, D = brand.dark, R = brand.roles, S = brand.semantic, T = brand.type, C = brand.chart;
  const body = T.body.size;
  const lines = [];
  const v = (n, val) => lines.push(`  --${n}: ${val};`);
  v('c-primary', P.primary); v('c-primary-dark', P.primaryDark); v('c-accent', P.accent); v('c-accent-soft', P.accentSoft);
  v('c-success', P.success); v('c-text', P.text); v('c-muted', P.muted); v('c-rule', P.rule); v('c-bg', P.bg); v('c-bg-soft', P.bgSoft);
  v('c-primary-text', R.primaryText); v('c-on-primary', R.onPrimary); v('c-on-primary-dark', R.onPrimaryDark);
  v('c-on-accent', R.onAccent); v('c-accent-text', R.accentText);
  for (const k of ['positive', 'caution', 'problem']) {
    v(`c-${k}`, S[k].hex); v(`c-${k}-tint`, S[k].tint); v(`c-${k}-ink`, R[k + 'Ink']);
    v(`d-${k}-tint`, R[k + 'DarkTint']); v(`d-${k}-ink`, R[k + 'DarkInk']);
  }
  v('d-ground', D.ground); v('d-raised', D.raised); v('d-rule', D.rule); v('d-text', D.text); v('d-muted', D.muted);
  v('d-emphasis', D.emphasis); v('d-accent', D.accent); v('d-terminal', D.terminal || D.emphasis);
  C.series.forEach((c, i) => v(`chart-${i + 1}`, c));
  for (let i = C.series.length; i < 6; i++) v(`chart-${i + 1}`, C.series[i % C.series.length]);
  v('chart-context', C.context); v('chart-seq-low', C.seqLow); v('chart-seq-high', C.seqHigh);
  v('font-display', stack(brand.fonts.display, 'display'));
  v('font-body', stack(brand.fonts.body, 'body'));
  v('font-mono', stack(brand.fonts.mono, 'mono'));
  v('base-px', body + 'px');
  for (const r of TYPE_ROLES) {
    const t = T[r];
    v(`ff-${r}`, `var(--font-${t.font === 'mono' ? 'mono' : t.font === 'display' ? 'display' : 'body'})`);
    v(`fs-${r}`, +(t.size / body).toFixed(4) + 'rem');
    v(`fw-${r}`, t.weight); v(`lh-${r}`, t.lineHeight); v(`tr-${r}`, t.tracking === '0' ? '0' : t.tracking);
  }
  v('measure', brand.measure + 'ch');
  brand.space.scale.forEach((s, i) => v(`space-${i + 1}`, +(s / body).toFixed(4) + 'rem'));
  v('radius-s', brand.space.radiusS); v('radius-l', brand.space.radiusL);
  v('border', brand.space.border); v('shadow', brand.space.shadow);
  return `:root{\n${lines.join('\n')}\n}\nhtml{font-size:var(--base-px)}`;
}

// ---------- fonts ----------

const compact = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

export function fontAssets(brand) {
  const fams = new Map();
  for (const f of [brand.fonts.display, brand.fonts.body, brand.fonts.mono]) {
    if (!f) continue;
    const cur = fams.get(f.family) || new Set();
    f.weights.forEach((w) => cur.add(w));
    fams.set(f.family, cur);
  }
  const localDir = path.join(brand.kitDir, 'fonts');
  const local = fs.existsSync(localDir) ? fs.readdirSync(localDir) : [];
  const faces = [], google = [], families = [];
  for (const [family, ws] of fams) {
    const weights = [...ws].sort((a, b) => a - b);
    families.push({ family, weights });
    const mine = local.filter((f) => /\.(woff2?|ttf|otf)$/i.test(f) && compact(f.split('-')[0]) === compact(family));
    if (mine.length) {
      for (const file of mine) {
        const w = parseInt((file.match(/-(\d{3})/) || [])[1] || '400', 10);
        const italic = /italic/i.test(file);
        const data = fs.readFileSync(path.join(localDir, file)).toString('base64');
        const fmt = /woff2$/i.test(file) ? 'woff2' : /woff$/i.test(file) ? 'woff' : /otf$/i.test(file) ? 'opentype' : 'truetype';
        faces.push(`@font-face{font-family:"${family}";font-weight:${w};font-style:${italic ? 'italic' : 'normal'};font-display:block;src:url(data:font/${fmt};base64,${data}) format("${fmt}")}`);
      }
    } else {
      google.push(`family=${encodeURIComponent(family).replace(/%20/g, '+')}:wght@${weights.join(';')}`);
    }
  }
  return {
    families,
    css: faces.join('\n'),
    googleUrl: google.length ? `https://fonts.googleapis.com/css2?${google.join('&')}&display=block` : null,
  };
}

export function fontHead(brand) {
  const f = fontAssets(brand);
  return [
    f.googleUrl ? `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="${f.googleUrl}">` : '',
    f.css ? `<style>${f.css}</style>` : '',
  ].join('');
}

export function brandHead(brand) {
  return `<!-- brand:start (generated by brand-visuals from brand-kit/brand.md; do not edit by hand) -->\n${fontHead(brand)}\n<style id="brand-tokens">\n${tokensCss(brand)}\n</style>\n<!-- brand:end -->`;
}

// Set of every hex the kit defines or the scripts derive. Used by the lint.
export function brandColors(brand) {
  const set = new Set();
  const add = (c) => c && set.add(normHex(c));
  Object.values(brand.palette).forEach(add);
  Object.values(brand.dark).forEach(add);
  Object.values(brand.roles).forEach(add);
  Object.values(brand.semantic).forEach((s) => { add(s.hex); add(s.tint); });
  brand.chart.series.forEach(add); add(brand.chart.context); add(brand.chart.seqLow); add(brand.chart.seqHigh);
  return set;
}

export function fail(msg) {
  console.error('\n' + msg + '\n');
  process.exit(1);
}

export function args(argv, spec) {
  // tiny flag parser: --name value, --flag
  const out = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a.startsWith('--')) {
      const k = a.slice(2);
      if (spec.bool && spec.bool.includes(k)) out[k] = true;
      else out[k] = argv[++i];
    } else out._.push(a);
  }
  return out;
}

export function requireBrand(opts = {}) {
  let kit;
  try { kit = findKit(opts.kit); } catch (e) { fail(e.message); }
  const brand = loadBrand(kit);
  if (brand.errors.length) fail('The brand kit is not ready:\n  - ' + brand.errors.join('\n  - '));
  return brand;
}

export { contrast };
