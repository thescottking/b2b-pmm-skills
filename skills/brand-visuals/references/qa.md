# Checking a render

The scripts check what a script can measure. You check what it cannot. Do both
before anything goes to the user.

---

## What the scripts already checked

| Check | Where | Result if it fails |
|---|---|---|
| Every text and ground pairing meets WCAG contrast | `check-brand.mjs` | `FAIL` with a passing value |
| Status colors and chart series survive color blindness | `check-brand.mjs` | Listed under `Color vision` |
| Every brand font and weight actually loaded | all three render scripts | `ERROR`, unless `--allow-fallback-fonts` |
| Text fits the card | `render-card.mjs` | `fitted` when it shrank, `ERROR` when it still overflows |
| Text stays out of the outer 6% and off the banner photo | `render-card.mjs` | `warning` |
| One accent per view | `render-card.mjs` | `ERROR` |
| Alt text, stat sources, and quote attributions exist | `render-card.mjs` | `ERROR` |
| No color outside the brand kit | `render-pdf.mjs`, `lint-colors.mjs` | `warning` with the nearest brand color |
| No clipped tables or containers in print | `render-pdf.mjs` | `warning` |
| No leftover placeholders or template title | `render-pdf.mjs` | `warning` |

## What you check by eye

Open every PNG and every page of every PDF with your file reader. Then:

**Cards**

- [ ] The headline breaks where a person would break it. No orphaned last word,
      no split product name.
- [ ] The accent lands on the phrase that matters, and nothing else competes.
- [ ] Shrunk text is still comfortable at thumbnail size. Squint at it at a
      quarter of full size: the headline should still read.
- [ ] The logo is the right version for the ground, light or dark.
- [ ] Every number, quote, and CTA matches the brand kit word for word.
- [ ] A series of cards does not use the same ground for every post.
- [ ] Carousel pages read in order and the last page carries the one action.

**Documents**

- [ ] No heading sits alone at the bottom of a page.
- [ ] Tables repeat their header row on every page they cross.
- [ ] Status pills, callouts, and tiles kept their background colors.
- [ ] The page footer shows the right `Document Footer` string and page numbers.
- [ ] The PDF title, shown in the reader's tab, is the real title.
- [ ] The self-contained HTML looks right in both light and dark mode, and on a
      phone width without sideways scrolling.

## Alt text

Every card ships with it, and the user pastes it into the platform by hand, so
deliver it beside each file.

- Say what the image says. Every word on the card, headline first, verbatim.
- Name the kind of image when it matters: statistic card, quote, bar chart,
  logo.
- Under 250 characters. Most platforms truncate after that.
- Never start with "Image of" or "Picture of". Screen readers already say it is
  an image.
- For a carousel, write one sentence for the document as a whole, and one for
  each page with that page's words. The script requires both.

## The delivery note

Short. Say what was made, one line of context per file, the alt text, and
anything the user has to know:

- Values derived from `Palette` because a heading is missing.
- Any contrast `FAIL` they chose to render through.
- Any warning you did not fix, and why.
- Any stat that is not verified in `Headline Stats`.
