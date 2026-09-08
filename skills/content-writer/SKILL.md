---
name: content-writer
description: >-
  Write long-form marketing and thought-leadership content from the brand kit:
  blog posts, articles, landing pages, feature pages, emails, case studies,
  whitepapers, executive briefs, pillar articles, and supporting cluster pages.
  Use when the user says "write a blog post about X," "draft an article,"
  "write a landing page," "build a feature page," "draft a nurture email,"
  "write a case study," "put together an executive brief," "write a
  whitepaper," "turn this topic into a pillar page," "write the cluster
  article," "expand this outline," "write copy for this launch," or "we need
  something for the site about X." Also fires when the user pastes a URL, a
  topic brief, or a rough outline and asks for a finished asset. Handles
  positioning questions directly when no asset is needed. For short social
  posts prefer `social-generator`; for a raw transcript prefer
  `transcript-to-article`; for scoring and the final voice pass prefer
  `house-style`.
---

# Content Writer

## Before you write anything

Read these first. They are the source of truth and this skill does not invent
around them.

1. `brand-kit/brand.md`: name, palette, fonts, CTAs
2. `brand-kit/voice.md`: house style and banned constructions
3. `brand-kit/positioning.md`: the frame, pillars, traps, stats, vocabulary
4. `brand-kit/capabilities.md`: read before making any product claim

Three shared references carry the structure this skill applies. Read the ones
the deliverable needs:

5. `docs/writing-templates.md`: the asset skeletons and every length target
6. `docs/aeo-style-guide.md`: how to structure anything meant to be quoted by an
   answer engine
7. `docs/messaging-patterns.md`: the eight structural patterns, one per asset

If `brand-kit/` is missing or still has its template placeholders, stop and tell
the user to run `brand-kit-setup`. Do not proceed with invented positioning.

---

## 1. How this skill works

1. **Read the canon.** `brand-kit/positioning.md` is the source of truth for the
   frame, the qualities, named traps, quotes, taglines, stats, and vocabulary.
   Every claim in the deliverable traces back to it.
2. **Read the guardrail.** `brand-kit/capabilities.md` defines what the product
   does and does not do. Check it before writing any capability claim. An
   inaccurate claim costs more credibility than a weak sentence.
3. **Identify the deliverable.** Blog post, landing page, email, case study,
   whitepaper, executive brief, feature page, pillar article, or supporting
   article.
4. **Pick the lead quality.** Most assets anchor one of the qualities in
   `The Pillars`, even when all of them show up. This is an internal decision.
   It shapes what you emphasize; it never appears in the copy.
5. **Apply the asset template** named in `Asset Templates` below. The shape and
   the length come from `docs/writing-templates.md`, and for anything written to
   be retrieved and quoted, `docs/aeo-style-guide.md` governs on top of it.
6. **Pick the pattern.** One structural pattern from `docs/messaging-patterns.md`
   carries the argument. Choose it before drafting, not after.
7. **Apply voice.** Follow `Compact Voice Rules`. If `house-style` is installed,
   run it as the final pass.
8. **Deliver.** End with a short note naming the lead quality and the target
   audience, kept outside the asset itself so it never ships to a reader.

If the user only asks a positioning question, "how do we differentiate against
platforms that do X?", answer straight from `brand-kit/positioning.md`. Do not
produce a full asset nobody asked for.

---

## 2. Naming and usage rules

Absolute. Violations are revision triggers, not style notes.

- **Never name the framework.** The qualities in `The Pillars` are internal
  scaffolding. "Our pillars," "our framework," and the qualities recited as a
  named set do not appear in customer-facing copy. The reader absorbs the
  qualities through the writing. This is also penalty 23 in the `house-style`
  humanizer rubric, so exposing it costs points twice.
- **Follow `Naming and Usage Rules`** in `brand-kit/positioning.md` for
  capitalization, always-say and never-say lists, and product-name formatting.
- **Use taglines verbatim or not at all.** They are in the same section.
- **Use the product pronoun** set in `Company` in `brand-kit/brand.md`. Never
  mix pronouns inside one asset.
- **Check `Superseded Names`** in `brand-kit/voice.md` before writing any
  product name. A rename in the kit propagates everywhere.
- **Quote verbatim with attribution** from `External Validation Quotes` or
  `Internal Quotes` in `brand-kit/positioning.md`. Never paraphrase a quote,
  never shorten one to make it fit, and never use an internal quote that is not
  marked cleared for external use.
- **Cite every stat** from `Headline Stats`. A number without a source-column
  entry does not ship. If `Verified` is flagged, say so in your delivery note
  and let the user decide.

---

## 3. Sell the idea, not the product

The core writing principle. The best content sells the **idea** that leads the
reader to you, rather than pushing you at the reader. Position the product as
the natural consequence of sound thinking.

In practice:

- Spend the first third of the asset on the reader's problem, with no product
  in it. If the opening still works with the company deleted, that is the
  correct opening for a reader who does not know you yet.
- Introduce the product where it answers a question the reader is now asking.
  Not before.
- Argue for the approach, not the vendor. A reader convinced of the approach
  will shortlist you. A reader pitched too early will not finish.
- Never resolve the argument with the contrast formula. "Most companies do X.
  Winners do Y." and "It's not about X, it's about Y." are banned outright in
  `brand-kit/voice.md`. State the failure and its consequence directly instead.

---

## 4. Asset Templates

The skeletons and the length targets live in `docs/writing-templates.md`. The
answer-engine rules live in `docs/aeo-style-guide.md`. This skill restates
neither. What follows is which template each deliverable uses, which guide
governs its structure, and what to pull from the kit for it.

| Deliverable | Template in `docs/writing-templates.md` | Also governed by |
|---|---|---|
| Blog post or article | Article | `docs/aeo-style-guide.md` |
| Cluster or supporting article | Article | `docs/aeo-style-guide.md` |
| Pillar article | Pillar guide template in `docs/aeo-style-guide.md` | that file throughout |
| Landing, feature, or solution page | Landing page or feature page | `docs/aeo-style-guide.md` |
| Email | Email | |
| Case study | Case study | |
| Executive brief | Executive brief | |
| Whitepaper | Whitepaper | |

Every length comes from `Length targets` in `docs/writing-templates.md`. Never
set a word count from memory.

### 4.1 The answer-engine rules, applied

Any row marked above as governed by `docs/aeo-style-guide.md` carries the
elements below on top of its template beats. The rules themselves are in that
file, under the headings named. Read them there and do not paraphrase them here.

1. **Answer the title inside the opening.** `The 100-word rule`.
2. **Question-based H2s.** `Question-based headings`. Phrase every major heading
   as a question a buyer would actually type, using the terms in
   `Canonical Vocabulary` in `brand-kit/positioning.md`.
3. **An atomic answer under every question heading.** `The atomic answer rule`.
   Write it first and the section around it second.
4. **A Key Takeaways block after the intro, above the first H2.**
   `The Key Takeaways block`.
5. **An FAQ section at the end.** `The FAQ section`. Source the questions from
   real sales objections and real search queries, never invent them.
6. **The `Publication checklist`** before delivery, including its internal
   linking rule, which matches the descriptive anchor rule in
   `Compact Voice Rules` below.

These do not apply to emails, case studies, executive briefs, or cold outreach.
A person opens those. An engine does not retrieve them.

### 4.2 Blog post or article

**Template:** Article.

**Pull from:** the sections of `brand-kit/positioning.md` relevant to the topic.
Always include at least one entry from `Named Traps`, at least one tagline or
signature line from `Naming and Usage Rules`, and one quote from
`External Validation Quotes` when the audience warrants it. Use
`Categories We Are Not` for competitive contrast without naming competitors
gratuitously. Proof comes from `Headline Stats`, and the close is the blog CTA
from `Calls to Action` in `brand-kit/brand.md`.

### 4.3 Landing, feature, or solution page

**Template:** Landing page or feature page.

**Pull from:** the relevant quality's block in `The Pillars`, `Named Traps`,
`Categories We Are Not`, `Headline Stats`, and the matching `What We Do` block
in `brand-kit/capabilities.md`. Social proof is a cleared quote or the
placeholder `[Customer quote / case study reference]`. The CTA is the
landing-page primary from `Calls to Action`.

### 4.4 Email

**Template:** Email.

**Pull from:** the topic-relevant sections of `brand-kit/positioning.md` and the
email CTA from `Calls to Action`. Subject line patterns are in
`docs/writing-templates.md` as well.

### 4.5 Case study

**Template:** Case study.

**Pull from:** the customer data the user provides, plus the matching capability
block in `brand-kit/capabilities.md` for an accurate description of what was
deployed. Results are hard numbers: time saved, cost reduced, throughput
increased, cycle time cut. The quote is verbatim or a clearly marked
placeholder.

### 4.6 Executive brief and whitepaper

**Templates:** Executive brief for the one-screen version, Whitepaper for the
long argument.

**Pull from:** `The Manifesto`, `The Frame`, `Named Traps`, `Headline Stats`,
and the relevant blocks of `The Pillars`. The manifesto is what the executive
summary and the recommendation argue from. A brief that only inventories
capabilities gives the reader nothing to decide. Market context uses `Why now`
from `The Frame`.

### 4.7 Pillar article

**Template:** the `Pillar guide template` in `docs/aeo-style-guide.md`, applied
in full, including the recording-to-pillar method when the source is a
transcript.

**Pull from:** `brand-kit/positioning.md` broadly, and `The Manifesto` first.
The pillar piece is definitional: `The Manifesto` supplies the argument and
`The Frame` is its spine. Use the canonical noun and its canonical definition
from `The Frame` verbatim, treat the qualities as the standard any real solution
must meet without naming them, and close on the sequence in `Where to Start`.
Thought leadership that does not carry the manifesto's point of view is a
summary of the category, which every competitor has already published.

### 4.8 Supporting article (cluster page)

**Template:** Article, with the answer-engine rules in 4.1 applied.

**Pull from:** the topic's coverage in `brand-kit/positioning.md`, plus explicit
cross-links to the pillar article and to the pages listed in `Link Map` in
`brand-kit/capabilities.md`.

---

## 5. Compact Voice Rules

The full rules live in `brand-kit/voice.md`, and `house-style` enforces them.
The rules below are the minimum that must hold in any output from this skill
even when it runs alone.

- No em-dashes. None. Not one.
- No appositive phrases that restate the subject.
- No passive voice.
- Action verbs early in the sentence.
- Paragraphs of one to four sentences.
- No banned vocabulary. The list is `Banned Words and Phrases` in
  `brand-kit/voice.md`.
- No contrast formula. "Most companies do X. Winners do Y." and "It's not about
  X, it's about Y." are both banned.
- No "in today's..." openers. No "imagine if." No "picture this."
- No concluding paragraph that summarizes what was just said. End on the CTA, a
  question, or the sharpest line in the piece.
- Numbers, not adjectives. Every number sourced from `Headline Stats`.
- One structural pattern from `docs/messaging-patterns.md` is visible in every
  customer-facing asset. Two stacked in a short asset is one too many.
- Vary section structure. If every section runs problem, solution, product,
  benefit, the piece reads as assembled. Open one section on a stat, one on a
  scene, one on a contradiction.
- Link inline with descriptive anchor text. Write "the platform
  [completes third-party risk assessments](URL) in minutes," never "learn more:
  URL." Destinations come from `Link Map` in `brand-kit/capabilities.md`.

---

## 6. Workflow

### Step 1, Gather inputs

Ask for anything you cannot infer:

1. **Content type:** blog post, landing page, email, case study, whitepaper,
   executive brief, feature page, pillar article, supporting article.
2. **Topic or source:** a URL to expand, a topic brief, an outline, or a
   specific capability.
3. **Lead quality:** which of the qualities in `The Pillars` anchors the piece.
   Internal only. It never appears in the copy.
4. **Target audience:** which role group from `Buying Committee` in
   `brand-kit/icp.md`, and which tier of `The Fit Matrix`.
5. **CTA:** which context from `Calls to Action` in `brand-kit/brand.md`.
6. **Length:** the default is the figure for this asset type in
   `Length targets` in `docs/writing-templates.md`. Ask only if the user wants
   to override it, and say what the default was.

If the user gives a URL, read it first and extract the core argument, the usable
numbers, and the intended audience before writing a word.

### Step 2, Check the canon and the guardrail

Confirm, before drafting:

- Which pattern from `docs/messaging-patterns.md` carries the argument. One per
  asset.
- Which entries in `Named Traps` fit this topic.
- Which quote from `External Validation Quotes` reinforces the angle, if any.
- Which tagline from `Naming and Usage Rules` belongs in this asset.
- Which numbers from `Headline Stats` apply, and whether each is verified.
- Which capabilities the asset will claim, and whether each one is accurate per
  `What We Do` and permitted by `What We Do Not Do` in
  `brand-kit/capabilities.md`.
- Whether the topic appears in `Write About, Never Claim`. If it does, explain
  the concept and stop there. Do not connect it to the product.

### Step 3, Apply the template

Use the row for this deliverable in `Asset Templates`, read the named template
in `docs/writing-templates.md`, and pull exactly what the **Pull from** line
names. Where the row names `docs/aeo-style-guide.md`, apply the elements in
`The answer-engine rules, applied`. Do not substitute memory for either file.

### Step 4, Write

Apply `Compact Voice Rules`. Check every paragraph against this list:

- Is the subject acting?
- Did I avoid appositives?
- Are there zero em-dashes?
- Is the verb strong and specific?
- Does this paragraph earn its place, or does it restate the one above?
- Does this section open differently from the previous one?
- Am I selling the idea and letting the product be the conclusion?
- Is every capability claim accurate per `brand-kit/capabilities.md`?
- Is every number in `Headline Stats` with a source?
- Have I named the framework, the pillars, or the qualities as a set anywhere?
  If yes, cut it.

Use the exact terms from `Canonical Vocabulary` in `brand-kit/positioning.md`.
Never the alternatives listed in its `Never say instead` column.

### Step 5, Pre-delivery scan

Before delivering, scan the entire output for:

1. The `, ` character.
2. The `--` sequence used as an em-dash.
3. Any term from `Banned Words and Phrases`.
4. Any number that is not in `Headline Stats`.
5. Any quality name, "pillars," or "framework" in the body copy.
6. Any claim that contradicts `What We Do Not Do`.
7. Any bare "learn more: URL" link, and any anchor that is a bare keyword
   rather than a descriptive phrase inside a sentence.
8. On an answer-engine asset: a heading that is not a question, a section whose
   first paragraph does not stand alone, a missing Key Takeaways block, or a
   missing FAQ.

Replace every instance. There are no exceptions to the em-dash rule.

### Step 6, Format and deliver

Clean markdown:

- H1 for the title, H2 for major sections, H3 sparingly.
- Sentence case in headings, not Title Case.
- Bold for key phrases, never whole sentences.
- Numbered lists for processes, bullets for parallel options, prose everywhere
  else.
- Zero em-dashes anywhere in the output.

Above the asset, in a delivery note the reader never sees, state the lead
quality, the target audience, the traps and stats used, and any stat that is
still flagged unverified.

If `house-style` is installed, run it as the final pass and report the score.

---

## 7. Notes

- Sourced numbers always outperform generic claims. If the source material has
  numbers, surface them early and cite them.
- The qualities are invisible scaffolding, not a checklist to recite.
- Do not overuse one tagline. A signature line that appears in every asset stops
  reading as a signature and starts reading as a tic.
- Always tie back to a business outcome: reduced cycle time, reduced cost,
  increased throughput, improved compliance, increased revenue.
- For search-driven educational content, some topics exist to earn traffic even
  though the product does not address them. Explain the concept and move on.
  Never write "we do not do this." The reader does not need the disclaimer, and
  `Write About, Never Claim` in `brand-kit/capabilities.md` already draws the
  line.
- When a topic needs a claim the kit does not support, stop and tell the user
  which brand-kit heading needs an entry. Do not write around the gap.

---

## 8. Cross-References

All optional. This skill works alone.

- `brand-kit-setup`: run it if the kit is missing or still has placeholders.
- `house-style`: if it is installed, run it as the final pass on any
  customer-facing asset, and use its quality panel before publishing.
- `social-generator`: if it is installed, use it for social posts instead of
  this skill.
- `transcript-to-article`: if it is installed, use it when the input is a raw
  transcript rather than a topic.
- `competitive-white-space`: if it is installed, use it to find the angle
  before writing a competitive piece.

Anything not in `skills/` does not exist. Do not reference it.
