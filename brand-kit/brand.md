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

## Typography

- **Display / headings:**
- **Body:**
- **Monospace / data:** (optional)
- **Where to get them:** (Google Fonts, licensed, system)

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
