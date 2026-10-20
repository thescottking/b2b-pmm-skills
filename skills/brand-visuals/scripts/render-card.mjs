#!/usr/bin/env node
// Renders branded cards (featured images, social graphics, banners, slides,
// avatars, and LinkedIn carousels) from a JSON spec and brand-kit/brand.md.
//
//   node scripts/render-card.mjs cards.json [--out output/brand-visuals] [--kit path] [--only name]
//                                           [--allow-fallback-fonts]
//
// Writes one PNG per card (plus a PDF per carousel) and manifest.json with the
// alt text and every check result. Exit code 1 when any card fails a check.

import fs from 'fs';
import path from 'path';
import { requireBrand, args, brandHead, fontAssets, fail, SKILL_DIR } from './lib/brand.mjs';
import { contrast, ensureContrast, bestOn, isDark, mix } from './lib/color.mjs';
import { launch, verifyFonts, FONT_HELP } from './lib/browser.mjs';

export const SIZES = {
  og: { w: 1200, h: 630, use: 'Link previews: LinkedIn, Open Graph, X, Slack, and the GitHub social preview' },
  square: { w: 1080, h: 1080, use: 'Feed posts on LinkedIn and Instagram' },
  portrait: { w: 1080, h: 1350, use: 'Taller feed posts, and LinkedIn carousel pages' },
  banner: { w: 1584, h: 396, use: 'LinkedIn personal profile banner' },
  slide: { w: 1920, h: 1080, use: '16:9 title slides, video thumbnails, and webinar cards' },
  avatar: { w: 400, h: 400, use: 'Profile pictures. The mark variant only' },
};
export const VARIANTS = ['article', 'tool', 'announcement', 'stat', 'quote', 'mark'];
const DEFAULT_GROUND = { article: 'Background', tool: 'Dark ground', announcement: 'Primary dark', stat: 'Background soft', quote: 'Background', mark: 'Primary' };

const opt = args(process.argv.slice(2), { bool: ['allow-fallback-fonts'] });
if (!opt._[0]) fail('Usage: node scripts/render-card.mjs cards.json [--out dir] [--kit path] [--only name]');
const brand = requireBrand(opt);
const P = brand.palette, D = brand.dark;
const outDir = path.resolve(opt.out || path.join('output', 'brand-visuals'));
fs.mkdirSync(outDir, { recursive: true });

let spec;
try { spec = JSON.parse(fs.readFileSync(opt._[0], 'utf8')); } catch (e) { fail(`Could not read ${opt._[0]}: ${e.message}`); }
const defaults = Array.isArray(spec) ? {} : spec.defaults || {};
let cards = (Array.isArray(spec) ? spec : spec.cards || []).map((c) => ({ ...defaults, ...c }));
if (opt.only) cards = cards.filter((c) => c.name === opt.only);
if (!cards.length) fail('No cards in the spec.');

// ---------- text ----------

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const countAccents = (s) => (String(s ?? '').match(/\*[^*\n]+\*/g) || []).length;
function markup(s, barMode) {
  if (s === undefined || s === null || s === '') return '';
  return esc(s)
    .replace(/\*([^*\n]+)\*/g, `<span class="hl${barMode ? ' bar' : ''}">$1</span>`)
    .replace(/\n/g, '<br>');
}

// ---------- color per ground ----------

const GROUNDS = {
  'background': P.bg, 'background soft': P.bgSoft, 'primary': P.primary, 'primary dark': P.primaryDark,
  'accent': P.accent, 'accent soft': P.accentSoft, 'success positive': P.success, 'body text': P.text,
  'muted text': P.muted, 'dark ground': D.ground, 'dark raised': D.raised,
};
const groundKey = (s) => String(s).toLowerCase().replace(/[^a-z]+/g, ' ').trim();

function colorsFor(variant, groundName) {
  const g = GROUNDS[groundKey(groundName)];
  if (!g) return { error: `Unknown ground "${groundName}". Use a Palette role name, or "Dark ground" / "Dark raised".` };
  const dark = isDark(g);
  const pick = (cand, min, fallback) => (contrast(cand, g) >= min ? cand : ensureContrast(cand, g, min) || fallback);
  const fg = dark ? bestOn(g, [D.text, P.bg, P.bgSoft]) : bestOn(g, [P.text, P.primaryDark, D.ground]);
  const muted = pick(dark ? D.muted : P.muted, 4.5, fg);
  const emph = pick(dark ? D.emphasis : P.primary, 4.5, fg);
  let acc = dark ? D.accent : P.accent, accMode = 'text';
  if (contrast(acc, g) < 3) {
    if (contrast(acc, g) >= 1.3) accMode = 'bar';
    else acc = pick(acc, 3, emph);
  }
  const onAcc = bestOn(acc, [P.primaryDark, P.text, P.bg, D.text]);
  const rule = g === P.bg || g === P.bgSoft ? P.rule : g === D.ground ? D.rule : mix(g, fg, 0.18);
  const raised = dark ? (g === D.ground ? D.raised : mix(g, fg, 0.06)) : P.bgSoft;
  const term = pick(D.terminal || D.emphasis, 4.5, fg);
  const band = dark ? D.raised : P.primary;
  const bandFg = bestOn(band, [P.bg, P.text, D.text]);
  return {
    dark, accMode, surfaceForLogo: variant === 'article' ? band : g,
    css: { g, fg, muted, emph, acc, 'on-acc': onAcc, rule, raised, term, 'term-dim': mix(term, g, 0.45),
      rail: dark ? emph : P.primary, band, 'band-fg': bandFg, 'radius-s': brand.space.radiusS },
  };
}

// ---------- logos ----------

const svgCache = {};
function logoMarkup(kind, onDarkSurface) {
  const L = brand.logo;
  const order = kind === 'mark'
    ? (onDarkSurface ? ['markDark', 'markLight', 'wordmarkDark'] : ['markLight', 'markDark', 'wordmarkLight'])
    : (onDarkSurface ? ['wordmarkDark', 'markDark'] : ['wordmarkLight', 'markLight']);
  const slot = order.find((k) => L[k]);
  if (!slot) return { kind: 'text', text: esc(brand.company.name) };
  const file = L[slot];
  if (/\.svg$/i.test(file)) {
    svgCache[file] ??= fs.readFileSync(file, 'utf8').replace(/<\?xml[^>]*>/, '').replace(/<!DOCTYPE[^>]*>/i, '');
    return { kind: 'svg', markup: svgCache[file], slot };
  }
  const ext = path.extname(file).slice(1).toLowerCase().replace('jpg', 'jpeg');
  return { kind: 'img', markup: `<img alt="" src="data:image/${ext};base64,${fs.readFileSync(file).toString('base64')}">`, slot };
}

// ---------- validation ----------

function validate(c) {
  const errs = [], warns = [];
  if (!c.name || /[\/\\]/.test(c.name)) errs.push('needs a "name" with no slashes; it becomes the file name');
  if (!VARIANTS.includes(c.variant)) errs.push(`"variant" must be one of ${VARIANTS.join(', ')}`);
  if (!SIZES[c.size]) errs.push(`"size" must be one of ${Object.keys(SIZES).join(', ')}`);
  if (c.size === 'avatar' && c.variant !== 'mark') errs.push('the avatar size only takes the mark variant');
  if (c.variant === 'mark' && !['avatar', 'square'].includes(c.size)) errs.push('the mark variant renders at avatar or square size');
  if (['article', 'tool', 'announcement'].includes(c.variant) && !c.title) errs.push(`the ${c.variant} variant needs a "title"`);
  if (c.variant === 'stat' && !(c.stat && c.label && c.source)) errs.push('the stat variant needs "stat", "label", and "source". A number without a source does not ship');
  if (c.variant === 'quote' && !(c.quote && c.source)) errs.push('the quote variant needs "quote" and "source" (who said it)');
  if (c.variant === 'announcement' && c.cta && countAccents([c.title, c.kicker, c.eyebrow].join(' '))) errs.push('an announcement with a "cta" already spends the accent on the button, so no *accent* words in the text');
  if (!c.alt || !String(c.alt).trim()) errs.push('needs "alt" text. Describe what the image says, not what it looks like');
  else if (String(c.alt).length > 250) warns.push('alt text is over 250 characters; most platforms truncate it');
  const accents = ['eyebrow', 'title', 'kicker', 'label', 'quote'].reduce((n, k) => n + countAccents(c[k]), 0);
  if (accents > 1) errs.push(`${accents} *accent* spans. One accent per view: mark the single phrase to read first`);
  if (c.variant === 'tool' && !c.command) warns.push('a tool card without a "command" loses its call to action');
  if (c.title && String(c.title).length > 90) warns.push('title is over 90 characters and will shrink hard to fit. Cut it');
  return { errs, warns };
}

// ---------- render ----------

const template = fs.readFileSync(path.join(SKILL_DIR, 'assets', 'card.html'), 'utf8').replace('<!-- BRAND_HEAD -->', brandHead(brand));
const families = fontAssets(brand).families;
const browser = await launch();
const page = await browser.newPage({ deviceScaleFactor: 1 });
let fontsChecked = false, fontsMissing = [];
const manifest = [];
let failed = 0;

async function renderOne(c, file, pageLabel) {
  const { errs, warns } = validate(c);
  const entry = { file: path.basename(file), name: c.name, variant: c.variant, size: c.size, alt: c.alt, errors: errs, warnings: [...warns], notes: [] };
  if (errs.length) return entry;
  const { w, h } = SIZES[c.size];
  const col = colorsFor(c.variant, c.ground || DEFAULT_GROUND[c.variant]);
  if (col.error) { entry.errors.push(col.error); return entry; }
  const bar = col.accMode === 'bar';
  if (bar && countAccents([c.title, c.kicker, c.quote, c.label].join(' '))) entry.notes.push('the Accent color is too light to carry text on this ground, so accent words are underlined in it instead');
  const footerSurfaceDark = isDark(col.surfaceForLogo);
  const data = {
    w, h, variant: c.variant, size: c.size, colors: col.css,
    eyebrow: markup(c.eyebrow, bar), title: markup(c.title, bar), kicker: markup(c.kicker, bar),
    command: esc(c.command), path: c.path ? esc(c.path) : '~', cta: esc(c.cta),
    stat: esc(c.stat), label: markup(c.label, bar), quote: markup(c.quote, bar),
    source: c.variant === 'quote' ? esc(c.source) : esc(c.source),
    meta: esc(pageLabel || c.meta || brand.company.domain || ''),
    logo: c.variant === 'mark' ? { kind: 'text', text: '' } : logoMarkup('wordmark', footerSurfaceDark),
    mark: c.variant === 'mark' ? logoMarkup('mark', isDark(col.css.g)) : { kind: 'text', text: '' },
  };
  if (c.variant === 'mark' && data.mark.kind === 'text') data.mark.text = esc((brand.company.name || '?').slice(0, 1));

  await page.setViewportSize({ width: w, height: h });
  await page.setContent(template, { waitUntil: 'networkidle' }).catch(() => page.setContent(template));
  if (!fontsChecked) { fontsMissing = await verifyFonts(page, families); fontsChecked = true; }
  if (fontsMissing.length) {
    const msg = 'fonts fell back to system fonts: ' + fontsMissing.join(', ');
    if (opt['allow-fallback-fonts']) entry.warnings.push(msg); else entry.errors.push(msg);
  }
  await page.evaluate((d) => window.buildCard(d), data);
  await page.evaluate(() => document.fonts.ready);
  const fit = await page.evaluate(() => window.fitCard());
  if (fit.steps.length) entry.fitted = fit.steps;
  fit.clipped.forEach((m) => entry.errors.push('overflow: ' + m + '. Shorten the copy'));
  if (fit.accents > 1) entry.errors.push('more than one accent element in view');

  // safe zone: every line of text stays clear of the outer 6% on each side
  const ix = w * 0.06, iy = h * 0.06;
  for (const r of fit.rects) {
    if (c.variant === 'mark') continue;
    if (r.x < ix - 1 || r.y < iy - 1 || r.x + r.w > w - ix + 1 || r.y + r.h > h - iy + 1)
      entry.warnings.push(`${r.cls} runs into the outer 6% of the frame, where platforms crop`);
    if (c.size === 'banner' && r.x < w * 0.3 && r.y + r.h > h * 0.35)
      entry.warnings.push(`${r.cls} sits where the profile photo covers the banner`);
  }
  await page.screenshot({ path: file });
  entry.width = w; entry.height = h;
  return entry;
}

for (const c of cards) {
  if (Array.isArray(c.slides)) {
    const { slides, ...base } = c;
    const size = base.size || 'portrait';
    const files = [];
    for (let i = 0; i < slides.length; i++) {
      const s = { ...base, size, alt: slides[i].alt || `${base.alt || ''} (page ${i + 1} of ${slides.length})`, ...slides[i], name: `${base.name}-${String(i + 1).padStart(2, '0')}` };
      const label = i < slides.length - 1 ? `${String(i + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}` : null;
      const file = path.join(outDir, s.name + '.png');
      const e = await renderOne(s, file, label);
      e.carousel = base.name;
      manifest.push(e);
      if (e.errors.length) failed++; else files.push(file);
    }
    if (files.length === slides.length) {
      const { w, h } = SIZES[size];
      const imgs = files.map((f) => `<div class="p"><img src="data:image/png;base64,${fs.readFileSync(f).toString('base64')}"></div>`).join('');
      await page.setContent(`<!doctype html><style>@page{size:${w}px ${h}px;margin:0}*{margin:0;padding:0}.p{width:${w}px;height:${h}px;break-after:page}.p:last-child{break-after:auto}img{width:100%;height:100%;display:block}</style>${imgs}`);
      const pdf = path.join(outDir, base.name + '.pdf');
      await page.pdf({ path: pdf, width: `${w}px`, height: `${h}px`, printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
      manifest.push({ file: path.basename(pdf), name: base.name, variant: 'carousel', size, alt: base.alt, pages: slides.length, errors: [], warnings: [] });
    }
    continue;
  }
  const e = await renderOne(c, path.join(outDir, c.name + '.png'));
  manifest.push(e);
  if (e.errors.length) failed++;
}
await browser.close();

// merge into an existing manifest so separate runs accumulate
const mfile = path.join(outDir, 'manifest.json');
let prior = [];
try { prior = JSON.parse(fs.readFileSync(mfile, 'utf8')); } catch {}
const names = new Set(manifest.map((m) => m.file));
fs.writeFileSync(mfile, JSON.stringify([...prior.filter((p) => !names.has(p.file)), ...manifest], null, 2));

console.log(`\nRendered into ${outDir}\n`);
for (const m of manifest) {
  const mark = m.errors.length ? 'FAILED' : m.warnings.length ? 'check' : 'ok';
  console.log(`[${mark}] ${m.file}  ${m.variant}, ${m.size}${m.pages ? `, ${m.pages} pages` : ''}`);
  if (m.alt) console.log(`        alt: ${m.alt}`);
  (m.fitted || []).forEach((s) => console.log(`        fitted: ${s}`));
  m.errors.forEach((s) => console.log(`        ERROR: ${s}`));
  [...new Set(m.warnings)].forEach((s) => console.log(`        warning: ${s}`));
  (m.notes || []).forEach((s) => console.log(`        note: ${s}`));
}
if (brand.derived.length) console.log('\nDerived from Palette, not read from the kit: ' + brand.derived.join('; '));
if (fontsMissing.length && !opt['allow-fallback-fonts']) console.log('\n' + FONT_HELP);
console.log(failed ? `\n${failed} card(s) failed. Nothing with ERROR should ship.` : '\nAll cards passed the automatic checks. Now look at every image before delivering it.');
process.exit(failed ? 1 : 0);
