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
5. **Apply the asset template** from `Asset Templates` below.
6. **Apply voice.** Follow `Compact Voice Rules`. If `house-style` is installed,
   run it as the final pass.
7. **Deliver.** End with a short note naming the lead quality and the target
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

Each template says what to include, what to pull from the kit, and how long the
asset should run.

### 4.1 Blog post / article

**Pull from:** the sections of `brand-kit/positioning.md` relevant to the topic.
Always include at least one entry from `Named Traps`, at least one tagline or
signature line from `Naming and Usage Rules`, and one quote from
`External Validation Quotes` when the audience warrants it.

**Structure:**

1. Hook, a bold claim, a sourced stat, or the named trap itself.
2. Problem, the pain the reader already knows. Use `Categories We Are Not` for
   competitive contrast without naming competitors gratuitously.
3. Bridge, why the current approach fails.
4. Solution, the right approach. Sell the idea, then let the product be the
   answer.
5. Proof, concrete examples and numbers from `Headline Stats`.
6. CTA, the blog close from `Calls to Action` in `brand-kit/brand.md`.

**Length:** 800 to 1,400 words.

### 4.2 Landing page / feature page

**Pull from:** the relevant quality's block in `The Pillars`, `Named Traps`,
`Categories We Are Not`, `Headline Stats`, and the matching `What We Do` block
in `brand-kit/capabilities.md`.

**Structure:**

1. Headline, benefit-driven, eight words or fewer.
2. Subhead, one sentence expanding the headline.
3. Problem, two or three short paragraphs on the pain.
4. Solution, what the product does, in bullets grounded in `What We Do`.
5. Differentiator, the separating line from `Categories We Are Not`.
6. Social proof, a cleared quote, or the placeholder
   `[Customer quote / case study reference]`.
7. CTA block, the landing-page primary from `Calls to Action`.

### 4.3 Email

**Pull from:** the topic-relevant sections of `brand-kit/positioning.md` and the
email CTA from `Calls to Action`.

**Structure:**

1. Subject line, under fifty characters, curiosity or urgency, no stacked
   clauses.
2. Opening line, personal and direct. No throat-clearing.
3. Core message, one idea, three to five short paragraphs.
4. CTA, a single action.

### 4.4 Case study

**Pull from:** the customer data the user provides, plus the matching
capability block in `brand-kit/capabilities.md` for an accurate description of
what was deployed.

**Structure:**

1. Customer context, industry, size, situation. Name the customer only if
   `brand-kit/capabilities.md` says the name is cleared; otherwise describe them
   by industry and headcount band.
2. The problem, specific and quantified.
3. The solution, what was deployed and how it works.
4. Results, hard numbers. Time saved, cost reduced, throughput increased,
   cycle time cut.
5. Quote, from the buyer, verbatim, or a clearly marked placeholder.

### 4.5 Executive brief / whitepaper

**Pull from:** `The Manifesto`, `The Frame`, `Named Traps`, `Headline Stats`,
and the relevant blocks of `The Pillars`. The manifesto is what the executive
summary and the recommendation argue from. A brief that only inventories
capabilities gives the reader nothing to decide.

**Structure:**

1. Executive summary, the argument in three sentences.
2. Market context, what changed and why it matters now. Use `Why now` from
   `The Frame`.
3. The problem, detailed analysis, every number sourced.
4. The approach, map to the qualities naturally, never as branded section
   headers.
5. Technical depth, architecture, integrations, deployment.
6. ROI framing, tie to revenue, cost, or risk.
7. Recommendation, one paragraph, one decision.

### 4.6 Pillar article / long-form thought leadership

**Pull from:** `brand-kit/positioning.md` broadly, and `The Manifesto` first.
The pillar piece is definitional: `The Manifesto` supplies the argument and
`The Frame` is its spine. Thought leadership that does not carry the manifesto's
point of view is a summary of the category, which every competitor has already
published.

**Structure:**

1. Opening provocation or a concrete scene the reader has lived.
2. The problem at scale, a sourced headline stat and a named trap.
3. The category definition, the canonical noun and its canonical definition
   from `The Frame`, used verbatim.
4. The criteria, the qualities as the standard any real solution must meet,
   described without their internal names.
5. Demonstration, vignettes and proof points.
6. The path forward, the sequence in `Where to Start`.
7. CTA.

**Length:** 1,200 to 1,800 words.

### 4.7 Supporting article (cluster page)

**Pull from:** the topic's coverage in `brand-kit/positioning.md`, plus explicit
cross-links to the pillar article and sibling cluster pieces.

**Structure:** the blog post template, with inline links to the pillar and to
the pages listed in `Link Map` in `brand-kit/capabilities.md`.

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
6. **Length:** short (300 to 500 words), medium (500 to 1,000), long (1,000 to
   2,000), or let the topic decide.

If the user gives a URL, read it first and extract the core argument, the usable
numbers, and the intended audience before writing a word.

### Step 2, Check the canon and the guardrail

Confirm, before drafting:

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

Use the right template from `Asset Templates` and pull exactly what its
**Pull from** line names. Do not substitute memory for the file.

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
7. Any bare "learn more: URL" link.

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
