---
name: brand-visuals
description: >-
  Render on-brand visual assets from the brand kit: featured images and Open
  Graph cards, LinkedIn and Instagram feed graphics, profile banners, avatars,
  title slides, LinkedIn carousels, and print-ready PDF reports. Use when the
  user says "make a featured image," "OG card," "social card," "link preview
  image," "LinkedIn banner," "make a carousel," "stat card," "quote card,"
  "announcement graphic," "title slide," "render the graphic headline," "turn
  this into a PDF," "export this report to PDF," "brand this document," "make
  this look like us," "check our brand colors," "contrast check," or "is our
  palette accessible." Also use after `social-generator` writes a graphic
  headline or text overlay, and when an audit's markdown fallback should go out
  as a branded PDF.
---

# Brand Visuals

Two render pipelines and one brand. **Cards**: images at the exact sizes the
platforms want, from a 400px avatar to a 1920px title slide, plus multi-page
LinkedIn carousels. **Documents**: a component template that renders to a
self-contained HTML page and a print-ready PDF.

This skill owns layout, sizing, and checking. It owns no color, font, logo, or
copy. Every one of those comes from `brand-kit/`, and the scripts refuse to
guess at the ones that matter.

---

## Before you render anything

Read these first. They are the source of truth and this skill does not invent
around them.

1. `brand-kit/brand.md`: `Company`, `Logo`, `Palette`, `Dark Surfaces`,
   `Chart Colors`, `Typography`, `Type Scale`, `Spacing and Shape`,
   `Document Footer`, and `Calls to Action`
2. `brand-kit/voice.md`: house style for every word that goes on a card or a page
3. `brand-kit/positioning.md`: `Named Traps`, `Headline Stats`,
   `External Validation Quotes`, and `Internal Quotes`, which supply most card copy
4. `brand-kit/capabilities.md`: read before making any product claim

If `brand-kit/` is missing or still has its template placeholders, stop and tell
the user to run `brand-kit-setup`. Do not proceed with invented positioning.

If `house-style` is installed, run it as the final voice pass over every line of
copy before you render. Short copy is where banned words hide best, and a
rendered image is harder to correct than a draft.

**Kits written before the visual headings existed.** If `brand.md` has no
`Logo`, `Dark Surfaces`, `Chart Colors`, `Type Scale`, or `Spacing and Shape`,
the scripts derive those values from `Palette`, keep them above contrast
minimums, and print exactly what they derived. Render anyway, tell the user
which values were derived when you deliver, and offer to add the real ones with
`brand-kit-setup`. A derived value passes contrast and is still a guess about
their brand.

---

## Setup, once per machine

Node 18 or newer. From this skill's folder:

```
npm install
npx playwright install chromium
```

The scripts also find a Playwright that is installed globally, which is common
in hosted sandboxes, so check before installing: if
`node skills/brand-visuals/scripts/check-brand.mjs --fonts` runs and reports
on fonts, setup is done. Without `--fonts` it never starts the browser, so it
proves nothing about setup.

Every command below runs from the repository root, where `brand-kit/` lives.
If you run from somewhere else, pass `--kit <path to brand-kit>`. Output goes to
`output/brand-visuals/` under the current folder, which `.gitignore` already
covers. When the host gives you a folder for files the user downloads, pass
`--out` pointing at it.

---

## Step 1: check the kit

```
node skills/brand-visuals/scripts/check-brand.mjs --fonts
```

Run it once per session and again after any change to `brand.md`. It reports:

- **What was derived** rather than read, if any heading is missing.
- **Contrast** for every text and ground pairing the templates use, against
  WCAG: 4.5:1 for text, 3:1 for headlines, marks, and chart series. A `FAIL`
  prints a passing value next to it.
- **Color vision**: whether status colors and chart series 1 to 4 stay
  distinguishable under protanopia, deuteranopia, and tritanopia.
- **Fonts**: whether every family and weight in `Typography` actually loads.

What to do with the result:

- **A `FAIL`** is a brand-kit fix, not a render setting. Report the pair and the
  passing value, and ask the user to update `Palette` or `Dark Surfaces`. Render
  only if they say to go ahead, and say in the delivery note which pair fails.
- **`FILL ONLY`** is normal. It means a color, usually a bright accent, works as
  a fill or a highlight but must never carry text on that ground. The templates
  handle it: accent words on that ground are underlined in the accent instead of
  colored with it.
- **A font that does not load** means the session cannot reach Google Fonts or
  the family is misspelled. Run `node skills/brand-visuals/scripts/fetch-fonts.mjs`
  somewhere with network access to save the fonts into `brand-kit/fonts/`, or fix
  the spelling. Never ship a render that fell back to a system font without
  telling the user, because the metrics are wrong and the brand is not on it.

---

## Pipeline 1: cards

### Choosing the variant

This is the decision that matters. Get it right and the rest is mechanical.

| Variant | Use for | Default ground |
|---|---|---|
| `article` | An article, essay, audit, report, or anything a reader will read | `Background`, with a `Primary` rail and footer band |
| `tool` | Something a reader will type: an install command, a CLI, a repository | `Ground` from `Dark Surfaces`, with the command in `Terminal` |
| `announcement` | A launch, release, or event with one action to take | `Primary dark`, with the CTA as the accent |
| `stat` | One number from `Headline Stats` | `Background soft` |
| `quote` | One sentence from `External Validation Quotes` or a cleared `Internal Quotes` row | `Background` |
| `mark` | The logo mark alone, for avatars | `Primary` |

When in doubt: would the reader type something? `tool`. Is the point one
number? `stat`. One sentence somebody said? `quote`. Is there one action with a
reason to take it now? `announcement`. Everything else is `article`.

Any card can take a different ground with `"ground"`, named by `Palette` role
(`Primary`, `Primary dark`, `Accent`, `Accent soft`, `Background`,
`Background soft`, `Success / positive`, `Muted text`, `Body text`), or
`Dark ground` and `Dark raised` from `Dark Surfaces`. A `tool` card only takes a
dark ground, because the terminal color never sits on a light one. The
script picks text, muted, emphasis, and accent colors that pass contrast on
whatever ground you choose. Vary the ground across a series so six posts do not
read as one post seen six times.

### Choosing the size

| Size | Pixels | Use for |
|---|---|---|
| `og` | 1200 x 630 | Link previews on LinkedIn, X, Slack, and Open Graph, and the GitHub social preview |
| `square` | 1080 x 1080 | Feed posts on LinkedIn and Instagram |
| `portrait` | 1080 x 1350 | Taller feed posts, and LinkedIn carousel pages |
| `banner` | 1584 x 396 | LinkedIn personal profile banner. Text sits right, clear of the profile photo |
| `slide` | 1920 x 1080 | 16:9 title slides, video thumbnails, webinar cards |
| `avatar` | 400 x 400 | Profile pictures. The `mark` variant only |

### Writing the copy

The copy matters more than the layout, and it all comes from the kit.

- **Eyebrow:** two to five words. A trap name from `Named Traps`, a series
  name, or the content type. It sets in capitals automatically, so write it in
  sentence case.
- **Title:** the claim, not the topic. Aim under 60 characters for `og` and
  `square`. Past 90 the script warns, because the fitter will shrink it until it
  is small rather than make it good. Cut words instead.
- **Kicker:** one sentence that pays off the title.
- **The accent:** wrap exactly one phrase in asterisks, `*like this*`. That
  phrase takes the `Accent` color, or an accent underline when the accent is too
  light to read on that ground. The script refuses a card with two.
- **Line breaks:** `\n` in any field forces a break. Use it to keep a phrase
  like a product name from splitting across lines.
- **Stats:** only from `Headline Stats`. If the `Verified` column starts with
  `Unverified` or carries an example flag, do not render it without the user's
  explicit go-ahead, and put that status in the source line. The script refuses
  a stat card without `"source"`.
- **Quotes:** verbatim, from `External Validation Quotes` or from
  `Internal Quotes` where `Cleared for external use` says yes. `"source"` is the
  name, title, and company as the kit records them.
- **CTA:** the exact words from `Calls to Action`, on `announcement` cards only.
  The CTA button is that card's accent, so the text takes no asterisks.
- **Command:** exactly what to type, and you have checked that it works.

If `social-generator` already produced a graphic headline with accent words
marked, use it as the title as written.

### Writing the spec

Write a JSON file, one object per card. Shared fields go in `"defaults"`.

```json
{
  "defaults": { "size": "og" },
  "cards": [
    {
      "name": "launch-og",
      "variant": "announcement",
      "eyebrow": "Now available",
      "title": "The claim, with *one phrase* marked",
      "kicker": "One sentence that pays it off.",
      "cta": "Exact CTA from Calls to Action",
      "alt": "What the image says, including every word on it."
    }
  ]
}
```

| Field | Used by | Notes |
|---|---|---|
| `name` | all | Becomes the file name. No slashes |
| `variant`, `size` | all | From the tables above |
| `alt` | all | Required. See `Alt text` below |
| `eyebrow` | all but `mark` | |
| `title` | `article`, `tool`, `announcement` | Required for those three |
| `kicker` | `article`, `tool`, `announcement` | |
| `command`, `path` | `tool` | `path` is the folder shown in the terminal title bar |
| `cta` | `announcement` | |
| `stat`, `label`, `source` | `stat` | All three required |
| `quote`, `source` | `quote` | Both required |
| `ground` | all | Optional override, by role name |
| `meta` | all | Optional. Replaces the domain in the footer |

Then render:

```
node skills/brand-visuals/scripts/render-card.mjs cards.json
```

Each card becomes a PNG, and `manifest.json` beside them records the alt text
and every check. The script reports per card:

- **fitted**: which text it shrank and by how much. A small fit is fine. A big
  one means the copy is too long.
- **ERROR**: a card that must not ship. Overflow, a missing source or alt text,
  two accents, or fonts that fell back. Fix and re-render.
- **warning**: text in the outer 6% of the frame where platforms crop, or text
  where the profile photo covers a banner. Fix it or explain it.
- **note**: something the template handled for you, such as the underlined
  accent.

### Carousels

A LinkedIn carousel is a PDF uploaded as a document post. Give a card a
`"slides"` array instead of a title, and every slide inherits the card's fields
except `alt`. The card's `alt` is one sentence for the carousel as a whole, and
each slide needs its own `alt` with the words on that page. Carousels render at
`portrait` unless the card sets its own `size`, whatever `defaults` says:

```json
{
  "name": "traps-carousel",
  "size": "portrait",
  "alt": "Five-page carousel. One sentence saying what it argues.",
  "slides": [
    { "variant": "article", "title": "The hook, as a claim", "alt": "The words on page one" },
    { "variant": "stat", "stat": "3.2x", "label": "What the number means", "source": "Where it comes from", "alt": "Statistic: 3.2x, what it means" },
    { "variant": "announcement", "title": "The point", "cta": "Exact CTA", "alt": "The point. Call to action: Exact CTA" }
  ]
}
```

That renders one PNG per page plus `traps-carousel.pdf`. Pages carry a
`01 / 05` counter in the footer, and the last page shows the domain instead.
Five to ten pages. Page one is the hook, written as a claim rather than a cover.
The last page is the one action, from `Calls to Action`.

### Alt text

Every card ships with alt text, and the script will not render one without it.

- Say what the image says, not what it looks like. Include every word on the
  card, headline first, word for word.
- Name the type when it matters: "Statistic card", "Quote from", "Bar chart".
- Under 250 characters. Most platforms truncate after that.
- Never start with "Image of".

Deliver the alt text with each file, because the user pastes it into the
platform by hand. `manifest.json` has it for every card.

---

## Pipeline 2: documents and PDFs

For client deliverables, reports, and readouts.

1. **Copy `assets/document.html`** to a working file. Set `<title>`, because it
   becomes the PDF's title in every reader.
2. **Build the document from its components.** `references/components.md`
   lists each one with its markup and when to use it. Delete the components you
   do not use. Never add a color, a font, or a size inline. If you need one the
   kit does not have, the kit is missing something.
3. **Brand it:**
   ```
   node skills/brand-visuals/scripts/apply-brand.mjs report.html
   ```
   This writes the fonts, tokens, logo, and footer into the file, which is now
   one self-contained page that can be shared or published as it is. It follows
   the reader's light or dark preference. Run it again whenever the kit changes.
4. **Render the PDF:**
   ```
   node skills/brand-visuals/scripts/render-pdf.mjs report.html --page Letter
   ```
   Use `--page Letter` for readers in the US and Canada and `--page A4`
   everywhere else. If you cannot tell from the user's location or the kit's
   `Website`, ask. Add `--dated` to use the dated `Document Footer` variant when
   the document carries numbers.

`render-pdf.mjs` brands a temporary copy, so step 3 is only needed for the HTML
deliverable. It also fixes, every time, the four defects that broke earlier PDF
exports: it pins the light theme so nothing prints dark, opens scroll containers
so wide tables do not lose columns, keeps rows, tiles, and callouts from
splitting across pages with table headers repeating, and forces exact color so
status pills keep their backgrounds. It then warns about off-palette colors,
clipped content, images without alt text, and leftover placeholders.

**The HTML is the source. The PDF is a snapshot.** Revise the HTML and render
again. Never edit a PDF, or the version a client holds stops matching the one
that can be updated.

**Turning another skill's markdown into a document.** `company-recon`,
`competitive-white-space`, `google-ads-audit`, and `linkedin-ads-audit` fall
back to markdown when no `docx` skill is present. To send one as a PDF instead,
map it onto components: each `##` heading to an `h2` section, every table to a
table inside `.scroll`, headline numbers to `.stat` tiles, the words `KEEP`,
`WATCH`, and `CUT` (or any good, caution, problem judgment) to verdict pills,
caveats to `.note` callouts, and worked arithmetic to a `.calc` block. Keep every
number and every sentence. This is formatting, not editing.

---

## Last step: look at it

The automatic checks catch overflow, contrast, fonts, and crop zones. They do
not catch a headline that breaks in a silly place or a card that is technically
correct and dull. Open every PNG and every PDF page with your file reader before
you deliver, and run the checklist in `references/qa.md`.

Then check the work against `references/donts.md`. Misuse is easier to see in a
list of examples than in rules.

---

## After delivering

- **GitHub:** set the `og` card as the repository's social preview under the
  repository settings, so a link to the repo and a link to its page match.
- **LinkedIn:** after replacing a link preview image, run the page URL through
  LinkedIn's Post Inspector, or the old image keeps appearing on anything
  already shared.
- **Banners:** LinkedIn crops banners differently on phones and desktops. Look
  at the profile on both before calling it done.

---

## Rules

1. Every color, font, size, and logo comes from `brand-kit/brand.md`. Never type
   a color value into a spec, a template, or a document.
   `scripts/lint-colors.mjs` finds any that slipped in.
2. One accent per view, on the single thing to read first.
3. Status is never carried by color alone. Pills carry a symbol and a word, and
   chart series are labeled where they sit.
4. On dark grounds, text and emphasis come from `Dark Surfaces`. The primary
   that works on white usually fails on dark.
5. The `Terminal` color appears on `tool` cards only, and never on a light
   ground.
6. Fonts must actually load. A render that fell back to a system font does not
   ship without the user knowing.
7. Nothing marked `ERROR` ships. Every warning is fixed or explained in the
   delivery note.
8. No number without a source, no quote that is not cleared, and no logo you
   drew. If `Logo` is empty, the name is set in the display face, and that is the
   honest answer.
9. The HTML is the source. Revise it and re-render rather than editing a PDF.
10. Every word follows `brand-kit/voice.md`.

---

## Cross-references

All optional. This skill works alone.

- `brand-kit-setup` fills the visual headings this skill reads, and runs
  `check-brand.mjs` as part of its validation when this skill is installed.
- `house-style` runs the voice pass on card copy before rendering.
- `social-generator` writes graphic headlines and text overlays with the accent
  words already marked. Render them here as `square` or `portrait` cards.
- `content-writer` drafts the article a featured image goes with.
- `company-recon`, `competitive-white-space`, `google-ads-audit`, and
  `linkedin-ads-audit` produce markdown this skill can turn into a branded PDF.

Anything not in `skills/` does not exist. Do not reference it.
