# Brand

Identity, visual system, and the strings that appear on every deliverable.

---

## Company

- **Name:** Ampfield
- **What we sell:** A field operations platform for solar, HVAC, and energy
  services contractors. It captures what happens on a job while the crew is
  still on site, then reconciles scheduling, parts, warranty claims, and
  customer commitments against that record.
- **Category we compete in:** Field service management, specifically the
  operations layer for distributed energy and mechanical trades. Buyers usually
  arrive searching for "field service software" and leave with a narrower
  problem: their office does not know what happened today.
- **Website:** https://ampfield.example
- **Pronoun for the product:** it

---

## Hallway Pitch

Ampfield is software for contractors who send 50 to 5,000 technicians out every
morning. The work happens in trucks and on roofs, but the office finds out hours
later, usually from a photo texted at 6pm, so schedules, parts counts, warranty
paperwork, and whatever the tech promised the customer all drift apart by the
end of the week. Ampfield puts one record at the point of work: the tech
captures the job as it happens, offline if the site has no signal, and dispatch,
the parts room, the warranty desk, and the customer service team all read from
the same record within minutes instead of reconstructing it the next morning.
It does not replace accounting or design software. It is the thing that finally
makes the rest of them agree.

---

## Personification

A branch operations manager who came up through the trucks. They know the
difference between a callback and a second truck roll, and they will correct you
if you use the wrong one. They are unbothered by software demos, deeply
skeptical of anything that adds taps for a technician, and they will tell you
plainly when a number is not measurable. They talk about work, not
transformation.

---

## Logo

| Asset | File | Use on |
|---|---|---|
| Wordmark, light grounds | `logo/wordmark-light.svg` | `Background` and `Background soft` grounds |
| Wordmark, dark grounds | `logo/wordmark-dark.svg` | `Primary`, `Primary dark`, and `Dark Surfaces` grounds |
| Mark, light grounds | `logo/mark-light.svg` | Avatars and favicons, and anywhere the wordmark would fall below its minimum size |
| Mark, dark grounds | `logo/mark-dark.svg` | The same, on dark grounds |

The mark is an A built from two strokes, with the crossbar in `Accent`. The
crossbar is the field record: the one horizontal line everything else rests on.
It is the only place the accent appears inside the logo, and it stays `Accent`
on every ground.

- **Clear space:** half the height of the mark on every side. Nothing enters it,
  including the edge of the frame.
- **Minimum size:** 20px tall for the wordmark on screen, 0.2in in print. Below
  that, use the mark alone.
- **Never:** recolor the strokes to anything but `Primary dark` or
  `Background soft`, recolor the crossbar, set the wordmark in live type, put
  the logo on a photo, add a shadow or an outline, or lock it up with a product
  name. Product names are set in type next to the logo, never inside it.

---

## Palette

Hex values, with the role each color plays. Skills use these for document
styling, image prompts, and slide design, so the roles matter more than the
names.

| Role | Hex | Used for |
|---|---|---|
| Primary | `#0d1b2a` | Headings, primary buttons |
| Primary dark | `#132a3e` | Dark backgrounds, footers |
| Accent | `#ffb52e` | Highlights, one thing per view |
| Accent soft | `#ffcf6b` | Hover states, tints |
| Success / positive | `#2ec4a6` | Wins, upward trends |
| Body text | `#0d1b2a` | Running text |
| Muted text | `#5b6b7a` | Captions, labels, secondary |
| Rule / border | `#e7edf2` | Dividers, table lines |
| Background | `#ffffff` | Page ground |
| Background soft | `#f5f8fb` | Cards, sunken panels |

**Semantic colors for reports**: these are separate from your accent and should
stay recognizable as good / caution / bad regardless of brand:

| Meaning | Hex | Tint |
|---|---|---|
| Positive | `#0d7b67` | `#e4f6f2` |
| Caution | `#a15d02` | `#fff2dc` |
| Problem | `#b23a35` | `#fbe8e7` |

Notes on the semantic set. The accent `#ffb52e` is a wayfinding color, not a
status color, so caution uses the much darker `#a15d02` to stay legible as text
and to stop a reader from reading every highlight as a warning. All three status
colors are dark enough to hold 4.5:1 as text on their own tint, because a status
pill is small text on a tinted ground and that is where status colors usually
fail. The brighter `#2ec4a6` stays the `Success / positive` fill for large
surfaces and never carries text.

Usage rules the skills should follow:

- One accent per view. If two things are yellow, neither is important.
- Never put `#ffb52e` behind body text. It fails contrast against `#0d1b2a` at
  small sizes and looks like a highlighter.
- Dark sections use `#0d1b2a` ground with `#f5f8fb` text and `#ffcf6b` for
  emphasis.
- Charts take their colors from `Chart Colors`, never from this table. The
  accent fails 3:1 on white, so it cannot be a data series as it stands.

---

## Dark Surfaces

Ampfield's primary is already a dark navy, so the dark ground is the primary
itself and the work is in `Emphasis`, which is a field-blue lifted until it
reads on that navy.

| Role | Hex | Used for |
|---|---|---|
| Ground | `#0d1b2a` | The dark page or card |
| Raised | `#132a3e` | Panels, table headers on dark, slide footers |
| Rule | `#24405a` | Dividers on dark |
| Text | `#f5f8fb` | Running text and headlines on dark |
| Muted text | `#9fb0c0` | Captions and labels on dark |
| Emphasis | `#6fa3d8` | Links, eyebrows, and the stat number on dark |
| Accent | `#ffb52e` | The one thing per view, on dark |
| Terminal | not used | Ampfield ships no developer tooling, so no card ever shows a command |

---

## Chart Colors

| Series | Hex | Notes |
|---|---|---|
| 1 | `#0d1b2a` | Ampfield's own number, always |
| 2 | `#b07400` | The compared series. The accent, darkened until it holds 3:1 on white |
| 3 | `#0d7b67` | |
| 4 | `#3d7ab8` | |
| 5 | `#7a4fa3` | Optional. Close to series 4 for a red-green color-blind reader, so never put them side by side without labels |
| 6 | `#a1453a` | Optional |
| Context | `#8895a0` | Industry benchmarks, prior periods, and every "all others" bar |
| Sequential low | `#e3edf6` | Heat maps by branch or by hour |
| Sequential high | `#0d1b2a` | |

Charts in Ampfield material usually compare Ampfield with the way things work
now, so most charts need only series 1 and `Context`. Reach for series 2 and
beyond only when there are genuinely several things being compared. Label bars
and lines directly at their ends rather than in a legend.

---

## Typography

- **Display / headings:** Sora, weights 600 and 700. Tight tracking at large
  sizes, minus 0.02em above 32px.
- **Body:** Inter, weights 400 and 500. Body copy at 16px minimum, 1.6 line
  height.
- **Monospace / data:** JetBrains Mono, weight 400. Job IDs, serial numbers,
  part numbers, timestamps, and anything a person might read aloud to a
  dispatcher.
- **Where to get them:** All three are on Google Fonts. Fallback stacks:
  `Sora, "Segoe UI", system-ui, sans-serif` for display,
  `Inter, system-ui, -apple-system, sans-serif` for body,
  `"JetBrains Mono", ui-monospace, "SFMono-Regular", monospace` for data.

---

## Type Scale

| Role | Font | Size px | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Display | Display | 56 | 700 | 1.05 | -0.025em |
| H1 | Display | 40 | 700 | 1.1 | -0.02em |
| H2 | Display | 28 | 600 | 1.2 | -0.01em |
| H3 | Display | 21 | 600 | 1.3 | 0 |
| Body | Body | 16 | 400 | 1.6 | 0 |
| Small | Body | 14 | 400 | 1.5 | 0 |
| Caption | Body | 12.5 | 500 | 1.4 | 0.01em |
| Eyebrow | Mono | 11.5 | 400 | 1.2 | 0.14em |
| Data | Mono | 14 | 400 | 1.4 | 0 |

- **Measure:** 68 characters for running text. Tables and stat rows may run the
  full width.
- **Numerals:** tabular everywhere numbers sit in a column or a row of stats.
  Job IDs and part numbers are always set in `Data`.

---

## Spacing and Shape

| Token | Value | Notes |
|---|---|---|
| Base unit | 4px | |
| Spacing scale | 4, 8, 12, 16, 24, 32, 48, 64, 96 | |
| Radius small | 4px | Status pills and tags |
| Radius large | 10px | Cards, stat tiles, callouts |
| Border width | 1px | |
| Shadow | none | Ampfield separates surfaces with `Rule / border` and `Background soft`, never with depth |

---

## Illustration Style

**Style:** Technical monoline drawing, the way a service manual diagrams a
piece of equipment. One continuous thin stroke, uniform weight, no fills and no
shading. Subjects are the objects of the work: a rooftop array, a service van, a
parts bin, a clipboard, a tablet on a truck seat. Objects are drawn accurately
enough that a technician would recognize them, then stripped of every detail
that is not load bearing. One element per image carries the accent color, and it
is always the element the caption is about. Compositions bleed off the bottom
right edge so the drawing reads as a fragment of a larger system.

**Line color:** `Primary dark` on light grounds, `Background soft` on dark
grounds. Accent element in `Accent`. Never more than two line colors in one
image.

**Never include:** photorealism, gradients, drop shadows, 3D rendering, glossy
surfaces, lens flare, stock-photo people, handshakes, generic circuit-board or
neural-network motifs, floating holographic interfaces, text or watermarks
baked into the image.

---

## Hashtags

The tags social posts are allowed to use. Nothing outside this table ships.

**Branded:** two, spelled exactly this way. `#Ampfield` is the company.
`#TheFieldRecord` is the frame, and it is the one worth building, because a tag
that carries the canonical noun does work that a company name cannot.

**Topical:** the terms contractors and field operations leaders already follow.
Pulled from `Search Terms` in `icp.md`. Deliberately absent: `#AI`,
`#DigitalTransformation`, `#Innovation`, and `#SaaS`. They reach everyone and
therefore nobody, and none of them describe what Ampfield does.

Counts per platform:

| Platform | Count | Mix |
|---|---|---|
| LinkedIn | 3 to 4 | `#Ampfield` or `#TheFieldRecord`, then two or three topical |
| X | 1 to 2 | Topical, branded only when the post is company news |
| Instagram | 6 to 8 | Both branded, then four to six topical |

| Kind | Tag | Use when |
|---|---|---|
| Branded | `#Ampfield` | Company news, product releases, hiring, event presence |
| Branded | `#TheFieldRecord` | Anything arguing the frame. The default branded tag on thought leadership |
| Topical | `#FieldService` | Broadest topical tag we allow. Use when the post is not solar or HVAC specific |
| Topical | `#FieldServiceManagement` | Category posts and anything aimed at a buyer comparing platforms |
| Topical | `#SolarOandM` | Solar operations and maintenance audiences |
| Topical | `#HVACContractors` | HVAC service and mechanical contractor audiences |
| Topical | `#Dispatch` | Scheduling, capacity, and Dispatch Board posts |
| Topical | `#TruckStock` | Parts, inventory, and Truck Stock Ledger posts |
| Topical | `#WarrantyClaims` | Claim Packet posts and manufacturer partner co-marketing |
| Topical | `#FirstTimeFix` | Second Truck Roll posts and anything with a callback rate in it |
| Topical | `#FieldOperations` | COO and multi-branch operations audiences |

**Never use:** `#FSM` (it reads as an acronym nobody outside the category
follows), `#SingleSourceOfTruth` (banned in copy under
`Naming and Usage Rules`, so it is banned here), `#RealTime` (we state the
actual latency instead), and any tag naming a competitor.

---

## Document Footer

The string that appears at the bottom of generated reports and decks.

> `Prepared by Ampfield | ampfield.example`

Dated variant for anything with numbers in it:

> `Prepared by Ampfield | ampfield.example | [Month Year]`

---

## Calls to Action

The CTAs skills should use, by context. Write the exact words, a skill that has
to invent a CTA will invent a bad one.

| Context | CTA text | Destination |
|---|---|---|
| Blog / article close | See what a field record looks like | https://ampfield.example/product/field-record |
| Landing page primary | Book a 20-minute walkthrough | https://ampfield.example/demo |
| Social post | Read why the second truck roll keeps happening | The specific article, never the homepage |
| Email | Pick a time with an operations engineer | https://ampfield.example/demo |
| Report / deck close | Run the 30-day branch pilot | https://ampfield.example/pilot |

Rules for CTAs:

- Never "Learn more." It tells the reader nothing about what happens next.
- Never "Get started" on a product that requires a rollout plan. It is a lie
  about the effort involved.
- The walkthrough is 20 minutes and it is with an operations engineer, not a
  sales development rep. If that changes, change it here first.
