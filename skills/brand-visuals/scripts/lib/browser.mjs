// Finds Playwright wherever it is installed and launches Chromium,
// with an error that says exactly what to run when either is missing.

import { createRequire } from 'module';
import { execSync } from 'child_process';
import path from 'path';
import { fail, SKILL_DIR } from './brand.mjs';

const SETUP = `Playwright is not installed. From the skill folder, run:

  cd ${path.relative(process.cwd(), SKILL_DIR) || '.'}
  npm install
  npx playwright install chromium

Node 18 or newer is required.`;

export function loadPlaywright() {
  const req = createRequire(path.join(SKILL_DIR, 'package.json'));
  try { return req('playwright'); } catch {}
  try { return createRequire(import.meta.url)('playwright'); } catch {}
  try {
    const root = execSync('npm root -g', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
    return req(path.join(root, 'playwright'));
  } catch {}
  fail(SETUP);
}

export async function launch() {
  const pw = loadPlaywright();
  try {
    return await pw.chromium.launch();
  } catch (e) {
    if (/Executable doesn't exist|browserType.launch/.test(e.message)) {
      fail('Chromium for Playwright is missing. Run:\n\n  npx playwright install chromium\n');
    }
    throw e;
  }
}

// Wait for fonts, then confirm each brand family actually loaded.
// document.fonts.ready resolves even when a web font fails, so it is not proof.
export async function verifyFonts(page, families) {
  await page.evaluate(() => document.fonts.ready);
  const missing = [];
  for (const { family, weights } of families) {
    for (const w of weights) {
      const loaded = await page.evaluate(async ({ family, w }) => {
        try {
          const faces = await document.fonts.load(`${w} 24px "${family}"`, 'AaBb0123');
          return faces.some((f) => f.status === 'loaded');
        } catch { return false; }
      }, { family, w });
      if (!loaded) missing.push(`${family} ${w}`);
    }
  }
  return missing;
}

export const FONT_HELP = `Some brand fonts did not load, so the render fell back to a system font and
its metrics are wrong. Either the session has no network access to Google Fonts,
or a family name in \`Typography\` is misspelled. Fixes, in order:

  1. Check the spelling against the font's own page.
  2. Run \`node scripts/fetch-fonts.mjs\` somewhere with network access. It saves
     the fonts into brand-kit/fonts/ and every later render uses those files.
  3. Pass --allow-fallback-fonts to render anyway, and say so when you deliver.`;
