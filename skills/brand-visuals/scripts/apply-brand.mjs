#!/usr/bin/env node
// Writes the brand into an HTML document built from assets/document.html:
// font links and color/type/spacing tokens between the brand markers, the
// logo into [data-brand="logo"], and the footer string into
// [data-brand="footer"]. The result is one self-contained file that can be
// opened, shared, or published as it is.
//
//   node scripts/apply-brand.mjs doc.html [--kit path] [--theme light|dark] [--dated]
//
// Run it again after the brand kit changes. It replaces its own block.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { requireBrand, args, brandHead, fail } from './lib/brand.mjs';

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function inlineLogo(file) {
  if (!file) return null;
  if (/\.svg$/i.test(file)) return fs.readFileSync(file, 'utf8').replace(/<\?xml[^>]*>/, '').replace(/<!DOCTYPE[^>]*>/i, '').trim();
  const ext = path.extname(file).slice(1).toLowerCase().replace('jpg', 'jpeg');
  return `<img alt="" src="data:image/${ext};base64,${fs.readFileSync(file).toString('base64')}">`;
}

export function footerText(brand, dated) {
  const choices = brand.footer;
  let f = (dated ? choices.find((s) => /\[Month Year\]/i.test(s)) : choices.find((s) => !/\[Month Year\]/i.test(s))) || choices[0] || '';
  const now = new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' });
  return f.replace(/\[Month Year\]/gi, now);
}

export function applyBrand(html, brand, { theme, dated } = {}) {
  const block = brandHead(brand);
  if (/<!-- brand:start[\s\S]*?<!-- brand:end -->/.test(html)) html = html.replace(/<!-- brand:start[\s\S]*?<!-- brand:end -->/, () => block);
  else if (/<\/head>/i.test(html)) html = html.replace(/<\/head>/i, () => block + '\n</head>');
  else html = block + '\n' + html;

  const light = inlineLogo(brand.logo.wordmarkLight || brand.logo.markLight);
  const dark = inlineLogo(brand.logo.wordmarkDark || brand.logo.markDark);
  const logo = light || dark
    ? `<span class="logo-light">${light || dark}</span><span class="logo-dark">${dark || light}</span>`
    : `<span class="name">${esc(brand.company.name)}</span>`;
  html = html.replace(/(<[a-z]+[^>]*data-brand="logo"[^>]*>)(?:<!--logo:start-->[\s\S]*?<!--logo:end-->|[\s\S]*?)(<\/[a-z]+>)/i, (_, a, b) => a + '<!--logo:start-->' + logo + '<!--logo:end-->' + b);
  html = html.replace(/(<[a-z]+[^>]*data-brand="footer"[^>]*>)[\s\S]*?(<\/[a-z]+>)/i, (_, a, b) => a + esc(footerText(brand, dated)) + b);
  html = html.replace(/(<[a-z]+[^>]*data-brand="company"[^>]*>)[\s\S]*?(<\/[a-z]+>)/gi, (_, a, b) => a + esc(brand.company.name) + b);

  if (theme === 'light' || theme === 'dark') {
    html = html.replace(/<html([^>]*?)\sdata-theme="[^"]*"/i, '<html$1');
    html = html.replace(/<html/i, `<html data-theme="${theme}"`);
  }
  return html;
}

// CLI
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const opt = args(process.argv.slice(2), { bool: ['dated'] });
  const file = opt._[0];
  if (!file) fail('Usage: node scripts/apply-brand.mjs doc.html [--kit path] [--theme light|dark] [--dated]');
  const brand = requireBrand(opt);
  const html = fs.readFileSync(file, 'utf8');
  fs.writeFileSync(file, applyBrand(html, brand, { theme: opt.theme, dated: opt.dated }));
  console.log(`Applied ${brand.company.name} to ${file}.`);
  if (brand.derived.length) console.log('Derived from Palette, not read from the kit: ' + brand.derived.join('; '));
}
