#!/usr/bin/env node
// Renders a brand-visuals HTML document to a print-ready PDF with page numbers
// and the brand's document footer.
//
//   node scripts/render-pdf.mjs doc.html [--out output/brand-visuals/doc.pdf] [--page Letter|A4]
//                                        [--kit path] [--dated] [--allow-fallback-fonts]
//
// The HTML stays the source. Revise it and render again rather than editing a
// PDF, or the copy a client holds stops matching the one that can be updated.

import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import { requireBrand, args, fontAssets, fail, SKILL_DIR } from './lib/brand.mjs';
import { launch, verifyFonts, FONT_HELP } from './lib/browser.mjs';
import { applyBrand, footerText } from './apply-brand.mjs';
import { lintColors } from './lint-colors.mjs';

const opt = args(process.argv.slice(2), { bool: ['dated', 'allow-fallback-fonts'] });
const src = opt._[0];
if (!src || !fs.existsSync(src)) fail('Usage: node scripts/render-pdf.mjs doc.html [--out file.pdf] [--page Letter|A4] [--kit path] [--dated]');
const page = (opt.page || 'Letter').toLowerCase() === 'a4' ? 'A4' : 'Letter';
const brand = requireBrand(opt);
const out = path.resolve(opt.out || path.join('output', 'brand-visuals', path.basename(src).replace(/\.html?$/i, '') + '.pdf'));
fs.mkdirSync(path.dirname(out), { recursive: true });

const errors = [], warnings = [];
const original = fs.readFileSync(src, 'utf8');
lintColors(original, brand).forEach((o) => warnings.push(`line ${o.line}: ${o.color} is not a brand color (nearest ${o.nearest})`));
for (const [re, what] of [[/\[Month Year\]|\bTODO\b|\bTBD\b|lorem ipsum/i, 'a placeholder'], [/<title>\s*Document title\s*<\/title>/i, 'the template title (it becomes the PDF title)']])
  if (re.test(original)) warnings.push(`the document still contains ${what}`);

// Brand a temporary copy beside the source so relative image paths resolve.
const tmp = path.join(path.dirname(path.resolve(src)), `.${path.basename(src)}.brand-render.html`);
fs.writeFileSync(tmp, applyBrand(original, brand, { theme: 'light', dated: opt.dated }));

const browser = await launch();
try {
  const p = await browser.newPage();
  await p.goto(pathToFileURL(tmp).href, { waitUntil: 'networkidle' }).catch(() => {});
  const missing = await verifyFonts(p, fontAssets(brand).families);
  if (missing.length) (opt['allow-fallback-fonts'] ? warnings : errors).push('fonts fell back to system fonts: ' + missing.join(', '));
  await p.addStyleTag({ path: path.join(SKILL_DIR, 'assets', 'print.css') });
  await p.emulateMedia({ media: 'print' });
  await p.evaluate(() => document.fonts.ready);

  const found = await p.evaluate(() => {
    const issues = [];
    const width = document.body.getBoundingClientRect().width;
    for (const el of document.querySelectorAll('body *')) {
      const cs = getComputedStyle(el);
      if (cs.display === 'none') continue;
      if (/(hidden|auto|scroll|clip)/.test(cs.overflowX) && el.scrollWidth > el.clientWidth + 2)
        issues.push(`${el.tagName.toLowerCase()}${el.className ? '.' + String(el.className).split(' ')[0] : ''} clips content horizontally`);
      if (el.tagName === 'TABLE' && el.getBoundingClientRect().width > width + 2) issues.push('a table is wider than the page');
      if (el.tagName === 'IMG' && !el.hasAttribute('alt')) issues.push('an image has no alt attribute');
    }
    return [...new Set(issues)];
  });
  found.forEach((f) => warnings.push(f));

  const title = (await p.title()) || path.basename(src);
  const foot = footerText(brand, opt.dated).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const footerColor = brand.palette.muted;
  await p.pdf({
    path: out, format: page, printBackground: true, displayHeaderFooter: true,
    margin: page === 'A4' ? { top: '16mm', right: '14mm', bottom: '19mm', left: '14mm' } : { top: '0.62in', right: '0.55in', bottom: '0.72in', left: '0.55in' },
    headerTemplate: '<div></div>',
    footerTemplate: `<div style="width:100%;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;font-size:7.5pt;color:${footerColor};
      padding:0 ${page === 'A4' ? '14mm' : '0.55in'};display:flex;justify-content:space-between;">
      <span>${foot}</span><span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>`,
  });
  const pages = (fs.readFileSync(out, 'latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
  console.log(`\nWrote ${out}\n  ${pages} page(s), ${page}, title "${title}"`);
} finally {
  await browser.close();
  fs.rmSync(tmp, { force: true });
}

errors.forEach((e) => console.log('  ERROR: ' + e));
warnings.forEach((w) => console.log('  warning: ' + w));
if (brand.derived.length) console.log('\nDerived from Palette, not read from the kit: ' + brand.derived.join('; '));
if (errors.some((e) => e.startsWith('fonts'))) console.log('\n' + FONT_HELP);
console.log(errors.length ? '\nThe PDF has problems that should not ship.' : '\nAutomatic checks done. Now open the PDF and look at every page.');
process.exit(errors.length ? 1 : 0);
