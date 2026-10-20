# Brand

Identity, visual system, and the strings that appear on every deliverable.

---

## Company

- **Name:**
- **What we sell:**
- **Category we compete in:**
- **Website:**
- **Pronoun for the product:** (it / they / she, pick one and never mix. Most
  companies should use "it." Only personify if the brand genuinely does.)

---

## Hallway Pitch

> One paragraph. What you would say to someone who asked what your company does,
> in a hallway, with thirty seconds and no slides. No jargon, no framework
> names, no adjectives you cannot prove.

---

## Personification

> If your brand were a person at work, who are they? Two or three sentences.
> This is what makes voice decisions easy later: "would they say that?" is a
> faster test than a rulebook.
>
> Skip this if it feels forced. A generic personification is worse than none.

---

## Logo

The files that go in the footer of every rendered visual, and the rules for
placing them. `brand-visuals` reads this section. Put the files in
`brand-kit/logo/` and write their paths relative to `brand-kit/`.

SVG is strongly preferred: it stays sharp at every size and renders in the same
pass as the page. A PNG works if it is at least 1000px wide on a transparent
background. Outline any text in the SVG, or it will render in whatever font the
viewing machine happens to have.

| Asset | File | Use on |
|---|---|---|
| Wordmark, light grounds | `logo/______.svg` | `Background` and `Background soft` grounds |
| Wordmark, dark grounds | `logo/______.svg` | `Primary`, `Primary dark`, and `Dark Surfaces` grounds |
| Mark, light grounds | `logo/______.svg` | Avatars and favicons, and anywhere the wordmark would fall below its minimum size |
| Mark, dark grounds | `logo/______.svg` | The same, on dark grounds |

- **Clear space:** (the empty margin around the logo, as a fraction of its
  height. Half the height is a common answer.)
- **Minimum size:** (the smallest height the wordmark may render at, in pixels)
- **Never:** (recolor it, stretch it, add a shadow, set it on a busy photo,
  rebuild it in a font. Write your own list.)

*If you have no logo files yet, write that here in one line. `brand-visuals`
will set the company name from `Company` in the display face instead, which is
honest and looks intentional. It will never draw a logo for you.*

---

## Palette

Hex values, with the role each color plays. Skills use these for document
styling, image prompts, and slide design, so the roles matter more than the
names.

| Role | Hex | Used for |
|---|---|---|
| Primary | `#______` | Headings, primary buttons |
| Primary dark | `#______` | Dark backgrounds, footers |
| Accent | `#______` | Highlights, one thing per view |
| Accent soft | `#______` | Hover states, tints |
| Success / positive | `#______` | Wins, upward trends |
| Body text | `#______` | Running text |
| Muted text | `#______` | Captions, labels, secondary |
| Rule / border | `#______` | Dividers, table lines |
| Background | `#______` | Page ground |
| Background soft | `#______` | Cards, sunken panels |

**Semantic colors for reports**: these are separate from your accent and should
stay recognizable as good / caution / bad regardless of brand:

| Meaning | Hex | Tint |
|---|---|---|
| Positive | `#______` | `#______` |
| Caution | `#______` | `#______` |
| Problem | `#______` | `#______` |

---

## Dark Surfaces

The colors for dark grounds: developer and terminal cards, dark slides, and the
dark theme of generated documents. A brand that only ever appears on white still
needs this table, because the first time a dark slide is needed someone picks
these values by eye and gets them wrong.

The rule people miss: a primary color that passes easily on white usually fails
on a dark ground. A navy that reads 8:1 on white can drop under 3:1 on
near-black. `Emphasis` is your primary lifted until it passes, never the primary
itself.

| Role | Hex | Used for |
|---|---|---|
| Ground | `#______` | The dark page or card |
| Raised | `#______` | Panels, terminal chrome, table headers on dark |
| Rule | `#______` | Dividers on dark |
| Text | `#______` | Running text and headlines on dark |
| Muted text | `#______` | Captions and labels on dark |
| Emphasis | `#______` | Your primary, lifted for dark grounds. Links and eyebrows |
| Accent | `#______` | The one thing per view, on dark |
| Terminal | `#______` | Command text in developer cards, and nowhere else |

If you never show a command line, write `not used` in the `Terminal` row.
Developer cards will set commands in `Emphasis` instead.

If this whole table is empty, `brand-visuals` derives every value from `Palette`
and says so each time it renders. Derived values pass contrast, and they are
still a guess about your brand. Write the real ones here.

---

## Chart Colors

The order data series take in charts, colored tables, and anything that
compares numbers. This is separate from `Palette` because a chart needs more
distinguishable colors than a brand does, and because the accent should mark
the one series the reader is meant to look at rather than whichever came first.

| Series | Hex | Notes |
|---|---|---|
| 1 | `#______` | The primary series, usually your own number |
| 2 | `#______` | The series it is compared against |
| 3 | `#______` | |
| 4 | `#______` | |
| 5 | `#______` | Optional |
| 6 | `#______` | Optional |
| Context | `#______` | Everything that is not the point: benchmarks, prior periods, all others |
| Sequential low | `#______` | Lightest step of a one-hue scale, for heat maps and intensity |
| Sequential high | `#______` | Darkest step of the same scale |

Every series has to hold at least 3:1 against `Background`, and series 1 to 4
have to stay distinguishable for a reader with red-green color blindness.
`brand-visuals` checks both and prints a passing value when one fails. Never let
color carry meaning on its own: label series directly, and pair every status
color with a word or a symbol.

---

## Typography

Write the family name first, spelled exactly the way its source spells it, then
the weights you use. `brand-visuals` loads fonts from these lines, and a
misspelled family falls back to a system font without any visible error.

- **Display / headings:**
- **Body:**
- **Monospace / data:** (optional)
- **Where to get them:** (Google Fonts, licensed, system)

Fonts that are not on Google Fonts go in `brand-kit/fonts/`, one file per
weight, named `FamilyName-Weight.woff2` with the spaces removed from the family
name: `AcmeSans-700.woff2`. Check the license before you commit font files to a
public fork. Most commercial licenses do not allow it.

---

## Type Scale

Sizes for each text role, in pixels at screen size. Print and image renders
scale from these, so set them once here rather than per deliverable. `Font`
names a family from `Typography` by its role: `Display`, `Body`, or `Mono`.

| Role | Font | Size px | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display | Display | | | | |
| H1 | Display | | | | |
| H2 | Display | | | | |
| H3 | Display | | | | |
| Body | Body | | | | |
| Small | Body | | | | |
| Caption | Body | | | | |
| Eyebrow | Mono | | | | |
| Data | Mono | | | | |

- **Measure:** (the longest a line of running text may run, in characters.
  60 to 75 is the readable range.)
- **Numerals:** (whether figures that line up in columns use tabular figures.
  They should.)

If you have never written a type scale, a ratio of about 1.25 between steps
from a 16px body is a safe start: 16, 20, 25, 31, 39, 49. Tracking goes
negative as size goes up, around minus 0.02em above 32px, and eyebrows set in
capitals need positive tracking, around 0.14em.

---

## Spacing and Shape

The rhythm and the edges of every layout. Small numbers with large effects: a
brand with 2px corners and a brand with 16px corners read as different companies
before anyone reads a word.

| Token | Value | Notes |
|---|---|---|
| Base unit | | Every space is a multiple of this. Usually 4px or 8px |
| Spacing scale | | Comma separated, in pixels, smallest first |
| Radius small | | Pills, tags, inputs |
| Radius large | | Cards, panels, callouts |
| Border width | | Rules and outlines |
| Shadow | | A CSS shadow value, or `none` |

---

## Illustration Style

How images made for this brand look. `social-generator` reads this to build
image prompts, so write it as instructions a stranger could follow, not as
adjectives.

Answer four questions:

- **Line weight:** heavy and graphic, thin and technical, or no visible line at all?
- **Fill:** outlines only, flat blocks of color, or rendered with depth?
- **Subject treatment:** literal objects, abstracted symbols, or people at work?
- **Edge behavior:** contained inside the frame, or bleeding off one edge?

Then write two or three sentences describing the result, plus a short list of
what to exclude. The exclusion list matters more than the description, because
image models default to stock-photo realism and gradient soup.

> **Style:**
>
> **Never include:**

*If you do not have a house illustration style yet, say so here rather than
leaving it blank. The social skill will help you write one on first run.*

---

## Hashtags

The tags social posts are allowed to use. `social-generator` and
`transcript-to-article` read this section and are forbidden from inventing a
tag, so an empty heading here means every social deliverable arrives without
hashtags or stops to ask you for them.

Two kinds, doing two different jobs:

- **Branded tags.** Your company name, your product names, and any campaign or
  series tag you own. Almost nobody outside your orbit searches these, so they
  buy consistency and attribution rather than reach. Keep it to one or two, and
  spell them the same way every time. A branded tag written three ways is three
  tags.
- **Topical tags.** The subject terms your buyer already follows. These are the
  ones that carry reach. Harvest them from `Search Terms` in `icp.md` and from
  `Canonical Vocabulary` in `positioning.md` so the tags use the words your
  market actually uses. Skip the firehose tags that describe a whole industry,
  and skip the ones so specific that nobody follows them.

How many per platform. These are the counts the social skills apply:

| Platform | Count | Mix |
|---|---|---|
| LinkedIn | 3 to 4 | One branded, the rest topical |
| X | 1 to 2 | Topical, branded only when the post is company news |
| Instagram | 6 to 8 | One or two branded, the rest topical |

| Kind | Tag | Use when |
|---|---|---|
| Branded | `#______` | |
| Branded | `#______` | |
| Topical | `#______` | |
| Topical | `#______` | |
| Topical | `#______` | |
| Topical | `#______` | |
| Topical | `#______` | |
| Topical | `#______` | |

**Never use:** tags you have retired, tags that belong to somebody else's
campaign, and any tag that states a claim you could not defend in body copy.

*If your company does not use hashtags at all, write that here in one line
rather than leaving the table blank. The social skills will then ship posts
without them instead of stopping.*

---

## Document Footer

The string that appears at the bottom of generated reports and decks.

> Example shape: `Prepared by [Company] | [domain]`

---

## Calls to Action

The CTAs skills should use, by context. Write the exact words, a skill that has
to invent a CTA will invent a bad one.

| Context | CTA text | Destination |
|---|---|---|
| Blog / article close | | |
| Landing page primary | | |
| Social post | | |
| Email | | |
| Report / deck close | | |
