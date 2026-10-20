#!/usr/bin/env node
// Downloads the Google Fonts named in `Typography` into brand-kit/fonts/, so
// renders work without network access and never fall back to a system font.
// Run it once wherever the network is open; every render after that reads the
// local files first.
//
//   node scripts/fetch-fonts.mjs [--kit path]
//
// Fonts on Google Fonts are under the SIL Open Font License, which permits
// redistribution, so committing these files to a fork is fine. Licensed fonts
// are not fetched here: put those files in brand-kit/fonts/ by hand.

import fs from 'fs';
import path from 'path';
import { requireBrand, args, fontAssets, fail } from './lib/brand.mjs';
import { launch } from './lib/browser.mjs';

const opt = args(process.argv.slice(2), {});
const brand = requireBrand(opt);
const fams = fontAssets(brand).families;
if (!fams.length) fail('`Typography` names no fonts, so there is nothing to fetch.');

const dir = path.join(brand.kitDir, 'fonts');
fs.mkdirSync(dir, { recursive: true });
const browser = await launch();
const page = await browser.newPage();
// Fetch from inside Chromium: it sends a browser user agent, so Google returns
// woff2, and it uses the same network path that renders use.
await page.goto('https://fonts.googleapis.com/', { waitUntil: 'domcontentloaded' }).catch(() => {});

let saved = 0;
for (const { family, weights } of fams) {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family).replace(/%20/g, '+')}:wght@${weights.join(';')}&display=block`;
  const css = await page.evaluate(async (u) => { const r = await fetch(u); return r.ok ? r.text() : null; }, url).catch(() => null);
  if (!css) { console.log(`  could not fetch ${family}. Is it on Google Fonts, and is the spelling exact?`); continue; }
  // Keep the latin subset only: one file per weight.
  const blocks = css.split('/* ').filter((b) => b.startsWith('latin */'));
  for (const b of blocks) {
    const weight = (b.match(/font-weight:\s*(\d+)/) || [])[1];
    const style = (b.match(/font-style:\s*(\w+)/) || [])[1];
    const src = (b.match(/url\((https:[^)]+\.woff2)\)/) || [])[1];
    if (!weight || !src || style === 'italic') continue;
    const bytes = await page.evaluate(async (u) => {
      const r = await fetch(u); const buf = new Uint8Array(await r.arrayBuffer());
      let s = ''; for (let i = 0; i < buf.length; i += 0x8000) s += String.fromCharCode(...buf.subarray(i, i + 0x8000));
      return btoa(s);
    }, src);
    const file = path.join(dir, `${family.replace(/\s+/g, '')}-${weight}.woff2`);
    fs.writeFileSync(file, Buffer.from(bytes, 'base64'));
    console.log(`  saved ${path.relative(process.cwd(), file)}`);
    saved++;
  }
}
await browser.close();
console.log(saved ? `\n${saved} file(s) in ${dir}. Renders now use these instead of Google Fonts.` : '\nNothing saved.');
process.exit(saved ? 0 : 1);
