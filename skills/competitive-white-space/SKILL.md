---
name: competitive-white-space
description: >
  Competitive messaging analysis that separates saturated territory from white space.
  Researches a competitor set, maps what every one of them is already saying, finds
  what none of them are saying, and turns the gap into a positioning direction and
  stage-by-stage campaign hooks. Use whenever someone wants a competitive analysis,
  white space review, positioning study, messaging gap analysis, battlecard input, or
  a competitor comparison. Triggers include "competitive analysis," "white space,"
  "competitor review," "how do we compare to them," "what are competitors saying,"
  "positioning analysis," "messaging overlap," "where are the gaps," "who else sells
  this," or a list of competitor URLs pasted with no instructions. Also triggers on
  "now run the competitors" after a company recon.
---

# Competitive White Space

## Before you write anything

Read these first. They are the source of truth and this skill does not invent
around them.

1. `brand-kit/brand.md`: name, palette, fonts, CTAs
2. `brand-kit/voice.md`: house style and banned constructions
3. `brand-kit/positioning.md`: the frame, pillars, traps, stats, vocabulary
4. `brand-kit/icp.md`: who you sell to, and your competitor set
5. `brand-kit/capabilities.md`: read before making any product claim

If `brand-kit/` is missing or still has its template placeholders, stop and tell
the user to run `brand-kit-setup`. Do not proceed with invented positioning.

**One exception, and only one.** Sections 1 through 4 of this analysis describe
the market, not you. If the kit is empty and the user wants to proceed anyway,
you may run the market-level version: competitor profiles, comparison matrix,
saturation map, and white space. Say clearly which sections you are skipping and
why. Never fill Sections 5 through 8 from assumption. Those sections make claims
about a company, and a claim without the kit behind it is a guess with a
letterhead.

---

## What this produces

A competitive analysis that goes past "here is who else is out there." It maps
the crowded messaging territory, isolates the empty territory, and converts the
empty territory into a positioning direction and usable campaign language.

The pipeline is the point, and each stage feeds the next:

**Competitor research → saturation map → white space → UVP direction → stage hooks**

Skip a stage and the output degrades into a vendor list. The hooks are only
credible because they came from a gap, and the gap is only real because the
saturation map proved everyone else is standing somewhere else.

## When to use it

- Refining positioning against a known competitor set
- A list of competitor URLs or names arrives with a request for a gap analysis
- "Run the competitors" after a company recon
- Pre-work before building a campaign, a content plan, or a messaging refresh
- Sales enablement input for battlecards

## When not to use it

- A single company from a single URL. Use `company-recon`.
- Paid channel performance. Use `google-ads-audit` or `linkedin-ads-audit`.
- Writing the assets themselves. This skill produces the angle; `content-writer`
  and `social-generator` produce the copy.

---

## Where the competitor set comes from

In priority order:

1. **URLs the user provided.** Best input. Use them and skip discovery.
2. **Names the user provided.** Search, confirm you have the right company, then
   research. A one-line "confirming these are the right companies" is fine.
3. **The `Competitors` table in `brand-kit/icp.md`.** This is the default set
   when the user asks for a competitive analysis without naming anyone. Respect
   the tiers: tier one is who you lose deals to, tier two is who shows up in
   search and analyst coverage. They need different treatment, so do not blend
   them into one undifferentiated list.
4. **Discovery by search, when that table is empty.** Run the queries below,
   pick three to five, and then **tell the user what you found and why you
   picked it** before going deep. Something like: "Your `Competitors` table is
   empty, so I searched and found these five. I am analyzing the first three
   because they target the same buyer. Say the word and I will swap any of
   them." Do not invent a competitor set silently, and do not proceed with a set
   the user has not seen.

**Discovery queries.** Seed these with the `Category terms` and the
`Competitor and alternative terms` from `Search Terms` in `brand-kit/icp.md`:

- `[subject] competitors`
- `[subject] vs`
- `[subject] alternatives`
- `best [category term] platforms OR tools OR vendors`
- `[category term] vendor comparison OR shortlist`

**Selection criteria:**

- Direct ICP overlap. Same buyer, same problem, per `The Fit Matrix` in `icp.md`.
- Market proximity. Same category, or an adjacent one listed under
  `Categories We Are Not` in `positioning.md` that buyers confuse you with.
- Competitive reality. Not aspirational comparisons against companies a hundred
  times your size, unless the analysis is specifically about incumbents.

**Three to five competitors.** More than five dilutes the pattern. Fewer than
three means you cannot tell a saturated theme from a coincidence.

---

## Workflow

### Step 1: Establish subject context

If `company-recon` ran earlier in this conversation, use its findings as the
subject context. Do not re-research what you already have.

Otherwise gather what you need directly: read the subject's homepage,
positioning page, and pricing page, and read `The Frame`, `The Pillars`, and
`Naming and Usage Rules` in `brand-kit/positioning.md`.

If there is no subject at all, that is a valid mode. Frame the whole analysis at
market level and say so in the document's opening line.

### Step 2: Research each competitor

Per competitor, run these in parallel, and run competitors in parallel with each
other.

**Fetch:** homepage, about, product or services, pricing if public, case studies
or customers.

**Search:**

- `[competitor] G2 reviews` OR `[competitor] Capterra`: outside perception,
  named strengths, named complaints
- `[competitor] funding employees revenue`: scale signals
- `[competitor] competitors`: how they position against others, which is often
  more honest than how they position themselves
- `[competitor] [your named trap]`: for each trap in `Named Traps` in
  `positioning.md`, check whether the competitor has anything to say about it.
  Silence is the finding. A trap nobody answers is white space.

**Extract per competitor:**

- Self-description in their own words, from the hero or H1
- Primary hook and CTA
- Claimed differentiators
- Audience signals: firmographics, verticals, size, named buyer roles
- What they actually sell
- Pricing structure if visible
- Proof assets: case studies, logos, review scores, awards
- Visible limitations and gaps
- Support and service model signals
- Category posture: how they talk about the terms in `Category terms`, and
  whether they take a stance on any of your named traps

### Step 3: Apply the evaluation lens

Judge every competitor on the same dimensions, so the comparison holds.

**Four dimensions are constant, regardless of company:**

- **Positioning versus execution.** Do they deliver what they claim? Is the
  claim backed by proof, or is it a sentence?
- **Audience fit.** Where their ICP actually is, versus where they claim to play.
  Their case studies tell the truth their homepage does not.
- **Proof strength.** Named customers with numbers, or logos with adjectives.
- **Entanglement.** How hard are they to replace, and what creates the lock-in?

**The remaining dimensions come from your own pillars.** Read `The Pillars` in
`brand-kit/positioning.md`. Turn each pillar into a question you can ask of a
competitor's website, using that pillar's `Vocabulary that signals it` as the
search vocabulary and its `The failure it prevents` as the test.

For example, a pillar whose failure mode is "work stalls when it crosses a
system boundary" becomes the question: *does this competitor address what
happens at the handoff, or does their story stop at their own product edge?*

**Critical rule, from `positioning.md` itself:** pillars are internal
scaffolding. They can name your columns in the internal analysis. They never
appear by name in customer-facing copy, and Section 8's hooks must not contain
them.

**If pillars are not yet defined,** fall back to these four and say in the
document that they are generic defaults:

- **Scope.** Point solution or platform? How much of the buyer's problem do they
  actually cover?
- **Depth.** Is the capability real and demonstrated, or a feature list?
- **Trust.** Governance, security, compliance, reliability, and what happens
  when the product is wrong.
- **Time to value.** How long from purchase to the first outcome, and who has to
  do the work.

---

## Document sections

### Section 1: Competitor profiles

One card per competitor, roughly a page each, laid out as a two-column table
(Field, Detail). Page break between cards.

**The twelve fields:**

| Field | What to include |
|---|---|
| **Company** | Name, URL, one-line description |
| **Years in business** | Founded date or estimate. "Unknown" if not found. |
| **Positioning** | How they describe themselves, in their own language, kept short |
| **Primary hook** | Their main pitch line, slogan, or CTA |
| **Claimed differentiators** | Three to five bullets on what they say is unique |
| **Target audience** | Firmographics, verticals, size, buyer roles |
| **Core products or services** | What they actually sell |
| **Pricing** | Model and range if public. "Sales-led, custom" if not. |
| **Category posture** | Their stance on the terms in `Category terms`, and on any of your `Named Traps`. "Not a stated position" is a real answer and often the most useful one. |
| **Proof and presence** | Case studies, testimonials, review scores, awards, thought leadership. Note the source type. |
| **Visible limitations** | Gaps, constraints, and blind spots visible from outside |
| **Strategic take** | Two to three sentences applying the evaluation lens. Positioning versus execution reality. |

**Formatting:** field label column around 2400 DXA, detail column around 6960
DXA. Alternating row shading. One to three bullet lines per cell, prioritizing
what changes a buyer's mind. Cite evidence inline and briefly: (site), (G2),
(case study), (press). Unknown is "Unknown." Never invent a field.

### Section 2: Comparison matrix

Every competitor side by side. The at-a-glance page.

**Columns:** one per competitor, plus a label column.

**Rows:**

1. Positioning, one line
2. Primary audience
3. Pricing model
4. Key differentiator
5. **Proof strength**: Strong / Moderate / Weak, with the basis in four words
6. **Entanglement**: High / Medium / Low, with what creates the lock-in
7. **Pillar coverage**: which of your pillars they can credibly claim, using the
   pillar names from `The Pillars` as the row's sub-labels, or the four fallback
   dimensions if pillars are undefined

**Rubrics for rows 5 and 6:**

| Proof strength | Test |
|---|---|
| **Strong** | Named customers with numbers, third-party review volume, verifiable outcomes |
| **Moderate** | Logos and case studies without numbers, or numbers without attribution |
| **Weak** | Claims, testimonials without names, or nothing |

| Entanglement | Test |
|---|---|
| **High** | System of record, deep integration, migration would break workflows |
| **Medium** | Real switching cost in setup, training, or data, but survivable |
| **Low** | Point tool, month-to-month, replaceable in a quarter |

One to two lines per cell. This table fits on one page. Use landscape or
abbreviated text if it will not.

### Section 3: Messaging saturation map

**What everyone is already saying.** This is the territory where a buyer cannot
tell you apart, so competing in it means competing on budget.

**Discover saturation empirically. Do not seed it from a list.** The method:

1. Pull the exact hero line, subhead, and top three navigation labels from every
   competitor site you fetched. Add each one's primary hook and top claimed
   differentiator. That is your raw corpus.
2. Cluster the corpus by claim, not by wording. "Cut resolution time by half"
   and "faster resolution, less effort" are one theme wearing two outfits.
3. Count competitors per theme, not mentions per theme. A vendor saying the same
   thing on six pages is one competitor, not six.
4. Keep every theme claimed by two or more competitors. Discard the rest into
   Section 4's raw material.
5. Rate saturation: **High** is most of the set, **Medium** is roughly half, and
   anything under two competitors is not saturated, it is a data point.

Present four to seven themes:

| Saturated theme | Who says it | Example language | Saturation |
|---|---|---|---|
| | | | High / Medium |

**Worked example, in a neutral category.** Five field service scheduling vendors
were fetched. Their hero lines clustered into four themes: "cut windshield time"
(four of five, High), "AI-optimized routing" (four of five, High), "delight your
customers" (three of five, Medium), and "one app for every technician" (two of
five, Medium). One vendor claimed something nobody else did: guaranteed parts
availability before dispatch. Two vendors is not a theme, one vendor is not
saturation, so that last claim moved to Section 4 as candidate white space. The
useful output of this map was not the four crowded themes. It was learning that
every vendor competes on routing math and none of them competes on whether the
technician arrives with the right part.

After the table, write two to three sentences on what the saturation means:
these claims are table stakes now, and using one as primary positioning
guarantees the buyer hears you as interchangeable.

### Section 4: White space analysis

**What nobody is saying.** The most valuable section in the document. Spend the
most analytical effort here.

Sources for candidate gaps, in order of reliability:

- Claims made by exactly one competitor, from step 4 of the saturation method
- Complaints that appear in review sites across multiple vendors, which nobody
  answers in their marketing
- Your `Named Traps` from `positioning.md` that no competitor addresses
- The distance between what a category's buyers ask about and what its vendors
  lead with

Three to five gaps. For each:

- **The gap**: what is missing from the conversation, in one sentence
- **Why it matters**: the real buyer need or fear going unaddressed
- **Evidence**: what signals this is real: review complaints, search behavior,
  a competitor's conspicuous silence, an analyst note
- **Opportunity size**: rated by the rubric below
- **Pillar mapped**: which of your pillars this gap sits under, if any. A gap
  under no pillar is still worth naming; it may be telling you a pillar is
  missing.

| Opportunity size | Test |
|---|---|
| **High** | Most of the ICP feels it, it shows up unprompted in reviews and sales calls, and no competitor answers it |
| **Medium** | A real segment feels it, or one competitor has started to answer it |
| **Low** | A narrow segment, or a gap that exists because buyers do not care |

A gap you cannot back with evidence is a hypothesis. Label it as one or cut it.

### Section 5: UVP direction

Requires subject context. Without it, title this "Positioning opportunity" and
frame everything as market-level recommendation.

- **UVP statement.** One sentence, thirty-five words maximum, built from the
  white space rather than from existing copy. Check it against
  `Naming and Usage Rules` in `positioning.md` before writing it down: the
  always-say list, the never-say list, and the capitalization rules are binding. If an existing
  **tagline** in that section already says this, use the tagline verbatim rather
  than paraphrasing it. Taglines are used exactly or not at all.
- **Messaging to dial back.** Which of the subject's current claims land inside
  Section 3's saturated themes. Name the phrase and the theme it collides with.
- **True differentiators.** What is genuinely defensible, checked against
  `What We Do` in `brand-kit/capabilities.md`. A differentiator with no
  capability behind it is a promise the product will break. Check
  `What We Do Not Do` before writing any of them.

Land the direction on the pillars from `The Pillars` in `positioning.md`. Say
which pillar the white space strengthens and which one it exposes as thin. Use
pillar names in this internal section; strip them from anything customer-facing.

### Section 6: Pain points uniquely solvable

Requires subject context. Without it, title this "Underserved pain points in
market" and drop the ownership claim.

Draw the pains from `The Fit Matrix` and `Buying Committee` in
`brand-kit/icp.md`, filtered to the ones the white space actually covers.

- Functional pains: what breaks in the buyer's week
- Strategic pains: what the economic buyer is exposed to, taken from the
  `What kills the deal for them` column of the `Buying Committee` table
- For each pain, tie it back to the white space and explain **why competitors are
  not solving it.** Cannot, will not, or have not noticed. Those are three very
  different competitive situations and only one of them is durable.

### Section 7: Targeting priorities

Requires subject context. Without it, title this "Recommended targeting based on
white space."

Build the priority tiers from `The Fit Matrix` in `brand-kit/icp.md`, then
re-rank by white-space resonance. Fit tells you who can buy. White space tells
you who will listen.

- **Primary.** ICP-column matches who feel the Section 4 gaps most acutely. Name
  the seniority, function, size band, and industry using the platform taxonomy
  values in the Fit Matrix so the list is directly usable in a campaign.
- **Secondary.** Mixed-column matches, or ICP matches with lower urgency.
- **De-prioritize.** Non-ICP, plus any segment where a competitor's proof is
  genuinely stronger than yours. Say which competitor and why.

### Section 8: Messaging hooks by buying stage

Turn the UVP and the white space into language someone can put in an ad tomorrow.

**Generate these. Do not recite stored messaging.** Every hook must trace to a
specific gap in Section 4 and must avoid every theme in Section 3. A hook that
could appear on a competitor's homepage has failed the only test that matters.

- **Unaware (problem education).** Two to three hooks that name the problem in
  language the market is not using. Your `Named Traps` are the strongest raw
  material here, because a named trap is a problem statement the buyer can
  repeat back to you.
- **Aware (solution differentiation).** Two to three hooks that separate your
  approach from the saturated themes. Use the separating lines in
  `Categories We Are Not` when the confusion is with an adjacent category.
- **Engaged (conversion).** Two to three hooks tied to a specific offer, proof
  point, or removed risk. Use the exact CTA wording from `Calls to Action` in
  `brand-kit/brand.md`. Cite proof only from `Headline Stats` in
  `positioning.md`, and only rows marked verified.

Each hook is a crisp phrase for an ad, a headline, or a sales conversation. Not
a paragraph of copy. Run every hook through `brand-kit/voice.md` before it goes
in the document, and strip any pillar name that survived.

### Section 9: Key takeaways

Five to eight executive bullets:

- Where the messaging is most crowded, and therefore least effective
- The one or two biggest white space opportunities
- The clearest UVP angle
- Which competitors are most vulnerable, and on which dimension
- The single most important strategic move this analysis implies

Quotable in a strategy meeting. Written in the voice `brand-kit/voice.md`
describes.

---

## Writing rules

- **Tone:** executive, neutral, confident. No hype, no filler.
- **No em-dashes.** Commas, periods, colons.
- **No emojis.**
- **No links or full URLs in the body.** Cite briefly: (site), (G2), (case
  study), (press), (LinkedIn).
- **No code blocks.**
- **Paragraphs of two to three sentences,** or bullets.
- **Bold sparingly.**
- **Tables for anything comparative.**
- **Do not invent data.** Unknown is "Unknown."
- **Quote competitors sparingly.** Short quotes only, paraphrase by default, and
  never characterize a competitor's product beyond what you can evidence.
- **Every line clarifies focus or difference.** Who to target, or why to choose
  the subject. A line that does neither is cut.
- **No hedging.** Note the basis for an inference once, then move on.
- Apply the banned words and AI tells from `brand-kit/voice.md` before delivery.

---

## Output

Produce a Word document.

Use the bundled **`docx`** skill and let the host resolve it. Follow that skill's
own implementation rules rather than restating them here: explicit page size,
real bullet numbering rather than unicode characters, table widths declared on
both the table and its cells, cell margins for readability, heading styles
overridden by their built-in IDs, page breaks between competitor cards, and
separate paragraphs instead of newline characters inside a run. Validate the file
with whatever validation step that skill provides before presenting it.

**If no docx skill is available:** output the same nine sections as clean
markdown in the conversation, keep every table, and tell the user plainly that no
document skill was found so they got markdown instead. Do not silently downgrade.

**Styling comes from the brand kit, not from this file.** Read the `Palette`
table in `brand-kit/brand.md` and map it:

| Document element | Palette role |
|---|---|
| Title, section headers | Primary |
| Subsection headers, body text | Body text |
| Divider rules, table header fill | Accent, or Accent soft for fills |
| Table borders, secondary labels | Rule / border, Muted text |
| White space callouts | Positive tint |
| Saturation and risk callouts | Caution or Problem tint |

Use the fonts from `Typography` in the same file, falling back to a common
system font if they are not guaranteed on a recipient's machine, and note the
substitution once. The footer string is the `Document Footer` value from
`brand.md`, right-aligned in the muted text color.

Name the file after the subject and the analysis. Where it goes depends on the
host, so do not assume a path. If the session has a designated output or
deliverables folder, write it there. If it does not, which is the normal case in
a plain command line session on a laptop, write it to the current working
directory. Either way, say in one line where you put it. A file written to a
folder that does not exist on this machine is a silent failure, and the user
finds out by not finding it.

---

## Speed and quality notes

- **Do not ask clarifying questions when URLs are provided.** Go.
- If only names are given, confirm you have the right companies before deep
  research. One line, then proceed.
- Fetch and search in parallel, across competitors and within each one.
- Sections 3 and 4 are the product. Everything else is supporting evidence.
  Budget your effort accordingly.
- After the document exists, give a two to three sentence summary in chat: the
  top white space finding and what it implies. Do not reproduce the document.

---

## What comes next

Optional handoffs. Each runs on its own if the user goes straight to it.

- **`google-ads-audit`**: test whether paid search terms are buying saturated
  territory. The Section 3 themes are the ones to check for waste.
- **`linkedin-ads-audit`**: test whether paid social is reaching the Section 7
  primary targets. This analysis sharpens the ICP Fit Score that audit computes.
- **`content-writer`**: turn a Section 4 gap into a long-form asset.
- **`social-generator`**: turn Section 8 hooks into posts.

Each of those skills will use this analysis if it is in the conversation, and
gather what it needs directly if it is not.
