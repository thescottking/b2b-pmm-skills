#!/usr/bin/env node
// Lists every color literal in an HTML or CSS file that is not in the brand.
// The generated brand block is skipped, since it is the brand.
//
//   node scripts/lint-colors.mjs file.html [--kit path]
//
// Exit code 1 when anything off-palette is found.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { requireBrand, args, brandColors, fail } from './lib/brand.mjs';
import { findColors, deltaE } from './lib/color.mjs';

export function lintColors(text, brand) {
  const known = [...brandColors(brand)];
  // the brand block and the inlined logo are the brand, so they are masked out
  const body = text.replace(/<!-- brand:start[\s\S]*?<!-- brand:end -->|<!--logo:start-->[\s\S]*?<!--logo:end-->/g, (m) => m.replace(/[^\n]/g, ' '));
  const off = [];
  for (const c of findColors(body)) {
    if (!c.hex) continue;
    const near = known.reduce((best, k) => Math.min(best, deltaE(k, c.hex)), Infinity);
    if (near > 1.5) {
      const line = body.slice(0, c.index).split('\n').length;
      off.push({ line, color: c.raw, hex: c.hex, nearest: known.reduce((a, k) => (deltaE(k, c.hex) < deltaE(a, c.hex) ? k : a)) });
    }
  }
  return off;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const opt = args(process.argv.slice(2), {});
  if (!opt._[0]) fail('Usage: node scripts/lint-colors.mjs file.html [--kit path]');
  const brand = requireBrand(opt);
  const off = lintColors(fs.readFileSync(opt._[0], 'utf8'), brand);
  if (!off.length) { console.log('Every color in the file comes from the brand kit.'); process.exit(0); }
  console.log(`${off.length} color(s) not in the brand kit:\n`);
  off.forEach((o) => console.log(`  line ${o.line}: ${o.color}  (nearest brand color ${o.nearest})`));
  console.log('\nReplace each with the token for its role, or add the color to brand-kit/brand.md if it belongs there.');
  process.exit(1);
}
