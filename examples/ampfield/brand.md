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
| Positive | `#1f9e86` | `#e4f6f2` |
| Caution | `#c47a12` | `#fff2dc` |
| Problem | `#c4443f` | `#fbe8e7` |

Notes on the semantic set. The accent `#ffb52e` is a wayfinding color, not a
status color, so caution uses the darker `#c47a12` to stay legible as text and
to stop a reader from reading every highlight as a warning. Positive reads as
`#1f9e86` in charts and small text because the brighter `#2ec4a6` loses contrast
below 16px. Use `#2ec4a6` for fills and large surfaces, `#1f9e86` for text,
strokes, and data marks.

Usage rules the skills should follow:

- One accent per view. If two things are yellow, neither is important.
- Never put `#ffb52e` behind body text. It fails contrast against `#0d1b2a` at
  small sizes and looks like a highlighter.
- Dark sections use `#0d1b2a` ground with `#f5f8fb` text and `#ffcf6b` for
  emphasis.
- Charts default to `#0d1b2a` for the primary series and `#ffb52e` for the
  compared series. Add `#5b6b7a` third, `#1f9e86` fourth.

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
