#!/usr/bin/env node
// Audits brand-kit/brand.md before anything is rendered: what parsed, what had
// to be derived, every text and ground pairing against WCAG contrast, and
// whether status and chart colors survive color-vision deficiency.
//
//   node scripts/check-brand.mjs [--kit path/to/brand-kit] [--fonts] [--json]
//
// Exit code 1 when any pairing fails. Each failure prints a passing value.

import { requireBrand, args, fontAssets } from './lib/brand.mjs';
import { contrast, ensureContrast, simulate, deltaE, CVD_TYPES } from './lib/color.mjs';

const opt = args(process.argv.slice(2), { bool: ['fonts', 'json'] });
const brand = requireBrand(opt);
const P = brand.palette, D = brand.dark, S = brand.semantic, C = brand.chart;

// [label, foreground, ground, minimum, kind]
// kind: text (4.5), large (3, headlines and marks), fill (informational: a
// color used only as a fill may fail as text, which is reported, not failed)
const pairs = [
  ['Body text on Background', P.text, P.bg, 4.5, 'text'],
  ['Body text on Background soft', P.text, P.bgSoft, 4.5, 'text'],
  ['Muted text on Background', P.muted, P.bg, 4.5, 'text'],
  ['Muted text on Background soft', P.muted, P.bgSoft, 4.5, 'text'],
  ['Primary on Background (links, eyebrows)', P.primary, P.bg, 4.5, 'text'],
  ['Background on Primary (buttons, bands)', P.bg, P.primary, 4.5, 'text'],
  ['Background on Primary dark', P.bg, P.primaryDark, 4.5, 'text'],
  ['Accent on Background', P.accent, P.bg, 3, 'fill'],
  ['Text on Accent (CTA pills)', brand.roles.onAccent, P.accent, 4.5, 'text'],
  ...['positive', 'caution', 'problem'].map((k) => [`${cap(k)} on its tint (status pills)`, S[k].hex, S[k].tint, 4.5, 'text']),
  ...['positive', 'caution', 'problem'].map((k) => [`${cap(k)} on Background (marks, icons)`, S[k].hex, P.bg, 3, 'large']),
  ['Dark: Text on Ground', D.text, D.ground, 4.5, 'text'],
  ['Dark: Text on Raised', D.text, D.raised, 4.5, 'text'],
  ['Dark: Muted text on Ground', D.muted, D.ground, 4.5, 'text'],
  ['Dark: Emphasis on Ground', D.emphasis, D.ground, 4.5, 'text'],
  ['Dark: Accent on Ground', D.accent, D.ground, 3, 'large'],
  ...(D.terminal ? [['Dark: Terminal on Ground', D.terminal, D.ground, 4.5, 'text']] : []),
  ...C.series.map((c, i) => [`Chart series ${i + 1} on Background`, c, P.bg, 3, 'large']),
  ['Chart context on Background', C.context, P.bg, 3, 'large'],
];

function cap(s) { return s[0].toUpperCase() + s.slice(1); }

const rows = pairs.map(([label, fg, bg, min, kind]) => {
  const r = contrast(fg, bg);
  let status = r >= min ? 'PASS' : kind === 'fill' ? 'FILL ONLY' : 'FAIL';
  const fix = status === 'FAIL' ? ensureContrast(fg, bg, min) : null;
  return { label, fg, bg, ratio: +r.toFixed(2), min, status, fix };
});

// Color-vision checks: status colors against each other, and series 1 to 4.
const cvd = [];
const statusPairs = [['positive', 'problem'], ['positive', 'caution'], ['caution', 'problem']];
for (const t of CVD_TYPES) {
  for (const [a, b] of statusPairs) {
    const d = deltaE(simulate(S[a].hex, t), simulate(S[b].hex, t));
    if (d < 10) cvd.push({ type: t, what: `${a} vs ${b}`, deltaE: +d.toFixed(1), level: 'label' });
  }
  const first = C.series.slice(0, 4);
  for (let i = 0; i < first.length; i++)
    for (let j = i + 1; j < first.length; j++) {
      const d = deltaE(simulate(first[i], t), simulate(first[j], t));
      if (d < 8) cvd.push({ type: t, what: `chart series ${i + 1} vs ${j + 1}`, deltaE: +d.toFixed(1), level: 'warn' });
    }
}

let fontResult = null;
if (opt.fonts) {
  const { launch, verifyFonts } = await import('./lib/browser.mjs');
  const { fontHead } = await import('./lib/brand.mjs');
  const b = await launch();
  const page = await b.newPage();
  await page.setContent(`<!doctype html><html><head>${fontHead(brand)}</head><body>x</body></html>`, { waitUntil: 'networkidle' }).catch(() => {});
  fontResult = await verifyFonts(page, fontAssets(brand).families);
  await b.close();
}

const failures = rows.filter((r) => r.status === 'FAIL');

if (opt.json) {
  console.log(JSON.stringify({ company: brand.company, derived: brand.derived, warnings: brand.warnings, contrast: rows, colorVision: cvd, fontsMissing: fontResult }, null, 2));
  process.exit(failures.length ? 1 : 0);
}

const out = [];
out.push(`# Brand check: ${brand.company.name}`, '', `Kit: ${brand.file}`, '');
if (brand.derived.length) {
  out.push('## Derived, not read from the kit', '', 'These values were computed from `Palette` because the kit does not set them. They pass contrast and they are still guesses about the brand. Add the real ones with `brand-kit-setup`.', '');
  brand.derived.forEach((d) => out.push(`- ${d}`));
  out.push('');
}
if (brand.warnings.length) {
  out.push('## Warnings', '');
  brand.warnings.forEach((w) => out.push(`- ${w}`));
  out.push('');
}
out.push('## Contrast', '', '| Pair | Fg | Ground | Ratio | Needs | Result | Passing value |', '|---|---|---|---|---|---|---|');
for (const r of rows) out.push(`| ${r.label} | \`${r.fg}\` | \`${r.bg}\` | ${r.ratio} | ${r.min} | ${r.status} | ${r.fix ? '`' + r.fix + '`' : ''} |`);
out.push('', '`FILL ONLY` means the color is fine as a fill, a rule, or a highlight bar, and must never carry text on that ground. Templates handle that case automatically.', '');
out.push('## Color vision', '');
if (!cvd.length) out.push('Status colors and chart series 1 to 4 stay distinguishable under protanopia, deuteranopia, and tritanopia.');
else {
  out.push('Pairs that become hard to tell apart (OKLab distance under 10 for status, under 8 for chart series):', '');
  cvd.forEach((c) => out.push(`- ${c.type}: ${c.what}, distance ${c.deltaE}${c.level === 'label' ? '. Status pills already carry a word and a symbol, so this is covered as long as nobody strips them.' : '. Label these series directly in every chart.'}`));
}
out.push('', 'Status never relies on color alone in these templates: every pill carries a word and a symbol.', '');
if (fontResult) {
  out.push('## Fonts', '');
  out.push(fontResult.length ? `Did not load: ${fontResult.join(', ')}. Check the spelling in \`Typography\`, or run \`node scripts/fetch-fonts.mjs\`.` : 'Every family and weight loaded.');
  out.push('');
}
out.push(failures.length ? `**${failures.length} pairing(s) fail.** Update \`brand-kit/brand.md\` with the passing values above, or choose your own and run this again.` : '**Every required pairing passes.**');
console.log(out.join('\n'));
process.exit(failures.length || (fontResult && fontResult.length) ? 1 : 0);
