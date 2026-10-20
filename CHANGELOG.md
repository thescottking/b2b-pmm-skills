# Changelog

## 1.1.0

### Added

- **`brand-visuals`, the tenth skill.** Renders featured images, Open Graph
  cards, feed graphics, profile banners, avatars, title slides, and LinkedIn
  carousels at each platform's size, in six variants: article, tool,
  announcement, stat, quote, and mark. Turns reports into self-contained HTML
  with light and dark themes, and into print-ready Letter or A4 PDFs with page
  numbers and the brand footer. Every color, font, size, and logo comes from
  `brand-kit/brand.md`.
- **Checks that run before anything ships.** WCAG contrast for every text and
  ground pairing, with a passing value printed beside each failure. Color-vision
  simulation for status colors and chart series. Proof that every brand font
  actually loaded, rather than trusting `document.fonts.ready`. Overflow and
  crop-zone checks on every card. One accent per view. Required alt text, stat
  sources, and quote attributions. A lint for colors that are not in the kit.
- **Five headings in `brand-kit/brand.md`:** `Logo`, `Dark Surfaces`,
  `Chart Colors`, `Type Scale`, and `Spacing and Shape`. Kits without them keep
  working: `brand-visuals` derives the values from `Palette` and says so on
  every render.
- **The visual system in the Ampfield example**, with logo files and a
  `renders/` folder showing every variant, size, a carousel, and a PDF report.
- **`CHANGELOG.md`.**

### Changed

- `brand-kit-setup` proposes the new visual headings from the palette and fonts
  instead of asking for them cold, runs the contrast check during validation,
  and reports failing pairs alongside thin sections.
- `social-generator` marks accent words with asterisks so a graphic headline
  renders as written, and offers to render it.
- `company-recon`, `competitive-white-space`, `google-ads-audit`, and
  `linkedin-ads-audit` offer a branded PDF when they fall back to markdown.
- `content-writer` points to `brand-visuals` for featured images and PDFs.
- The Ampfield semantic colors are darker, so each passes 4.5:1 as text on its
  own tint. The originals failed as status-pill text.
- README, `CONTRIBUTING.md`, and `SECURITY.md` cover the new skill, its
  dependencies, and the rule that templates contain no color values either.

## 1.0.0

- Nine skills reading one shared brand kit, the Ampfield worked example, and the
  docs on positioning, voice calibration, messaging patterns, answer-engine
  structure, and writing templates.
