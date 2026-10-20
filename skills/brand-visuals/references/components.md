# Document components

Every component in `assets/document.html`, with its markup and when to reach
for it. The template itself renders each one with sample text, so opening it in
a browser after `apply-brand.mjs` is the fastest way to see them all.

None of these take a color, a font, or a size. Each reads its values from the
tokens that `apply-brand.mjs` writes from `brand-kit/brand.md`.

---

## Document header

The first thing on the page. The eyebrow names the document type, the title
states what the reader will know, and the deck answers the question the title
raises, so a reader who stops there still leaves with the point.

```html
<header class="doc-head">
  <span class="doc-logo" data-brand="logo"></span>
  <p class="eyebrow">Competitive white space</p>
  <h1>The title is a finding, not a topic</h1>
  <p class="deck">One sentence that answers the title.</p>
  <div class="doc-meta"><span>Prepared for ...</span><span>Month Year</span></div>
</header>
```

`data-brand="logo"` is filled with the wordmark from `Logo`, in a light and a
dark version that switch with the theme.

## Sections and running text

`h2` opens a section and draws a rule above it. `h3` is a subsection. Running
text stops at the `Measure` from `Type Scale`, so lines stay readable on a wide
screen. Do not skip heading levels.

## Stat tiles

Up to four headline numbers. The first tile with `is-lead` takes the primary
color. Every tile has a source line, and the source is the row's `Source` from
`Headline Stats`, or the data the user gave you.

```html
<div class="stats">
  <div class="stat is-lead">
    <span class="stat-value">42%</span>
    <span class="stat-label">What the number measures</span>
    <span class="stat-source">Where it comes from</span>
  </div>
</div>
```

## Callouts

`.note` for context the reader must not miss. Add `positive`, `caution`, or
`problem` for status, which takes the semantic colors, or `highlight` to give
the left edge the accent. A page gets one highlight at most.

```html
<div class="note caution">
  <span class="note-label">Caution</span>
  <p>The thing to watch, in one or two sentences.</p>
</div>
```

The label is required. It is what carries the meaning for a reader who cannot
tell the colors apart.

## Verdict pills

A judgment on a row: keep, watch, cut, fixed, at risk. Each class prints a
symbol before the word, so the meaning survives grayscale printing and color
blindness.

```html
<span class="verdict good">Keep</span>
<span class="verdict caution">Watch</span>
<span class="verdict bad">Cut</span>
<span class="verdict neutral">Unrelated</span>
```

Write the word that fits the document. The class decides the color and symbol.

## Tables

Always inside `.scroll`, so a wide table scrolls on a phone instead of breaking
the page. Number columns take `num` on both the `th` and the `td`, which right
aligns them and sets tabular figures. A total row takes `is-total`. Give every
table a `caption` saying what it compares and over what period.

```html
<div class="scroll">
  <table>
    <caption>What this compares, over what period.</caption>
    <thead><tr><th>Item</th><th class="num">Spend</th></tr></thead>
    <tbody>
      <tr><td>Row</td><td class="num">12,400</td></tr>
      <tr class="is-total"><td>Total</td><td class="num">12,400</td></tr>
    </tbody>
  </table>
</div>
```

## Worked calculation

Show the arithmetic behind any number the reader will repeat to someone else.
Each line is a label and a value. The result row takes the primary color.

```html
<div class="calc">
  <div class="row"><span>Spend on terms marked Cut</span><span>9,620</span></div>
  <div class="row"><span>Months in the period</span><span>&divide; 3</span></div>
  <div class="row result"><span>Monthly waste</span><span>3,207</span></div>
</div>
```

## Bar chart

A horizontal bar chart in plain HTML, colored from `Chart Colors`. The first
row takes series 1. Add `s2` through `s6` for other series, and `context` for
benchmarks, prior periods, and everything that is not the point. Widths are
percentages of the longest bar. Values sit at the end of each bar, so the chart
reads without a legend and without color.

```html
<figure class="bars" role="img" aria-label="Bar chart. Our number 64, benchmark 41.">
  <div class="bar-row"><span class="bar-label">Our number</span>
    <span class="bar-track"><span class="bar" style="width:100%"></span><span class="bar-value">64</span></span></div>
  <div class="bar-row context"><span class="bar-label">Benchmark</span>
    <span class="bar-track"><span class="bar" style="width:64%"></span><span class="bar-value">41</span></span></div>
  <figcaption>What is measured, the unit, and the source.</figcaption>
</figure>
```

Width is the only inline style allowed anywhere in a document. The
`aria-label` repeats every value, because a screen reader cannot read a bar.

Charts sit on a light panel in the dark theme too, because the chart colors are
chosen against `Background`.

## Pull quote

Verbatim from `External Validation Quotes`, or from `Internal Quotes` where
`Cleared for external use` says yes. Never trimmed to fit.

```html
<blockquote class="pull">
  <p>&ldquo;The quote, exactly as published.&rdquo;</p>
  <cite>Name, Title, Company</cite>
</blockquote>
```

## Accent

The accent marks the one thing to read first. In a document that is usually
the closing button, with the exact text from `Calls to Action`. If there is no
button, it can mark one phrase instead. Never both on one page.

```html
<a class="button" href="https://...">Exact CTA text</a>
<span class="mark-accent">the one phrase</span>
```

## Footer

`data-brand="footer"` is filled with the `Document Footer` string. In the PDF
the page footer carries it instead, with page numbers, so this element is hidden
in print.

---

## Turning markdown into components

| In the markdown | In the document |
|---|---|
| `# Title` and the first paragraph | `.doc-head`: `h1` and `.deck` |
| `## Heading` | `<section>` opening with `h2` |
| A list of three or four headline numbers | `.stats` with one `.stat` each |
| Any table | `table` inside `.scroll`, with `num` on number columns |
| KEEP, WATCH, CUT, or any good, caution, problem judgment | `.verdict` pills |
| A caveat, a warning, or a "note that" paragraph | `.note`, with `caution` for warnings |
| Arithmetic shown in steps | `.calc` |
| A comparison of a few quantities | `.bars` |
| A quote with attribution | `blockquote.pull` |
| The closing call to action | `.button` |

Keep every number and every sentence. This is formatting, not editing.
