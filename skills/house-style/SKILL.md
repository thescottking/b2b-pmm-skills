---
name: house-style
description: >-
  Rewrite, edit, audit, or score any draft against the house style defined in
  the brand kit. Use when the user says "rewrite this," "edit this," "apply the
  style guide," "match our voice," "make this sound like us," "tighten this
  copy," "clean up this draft," "remove the AI tells," "does this sound like
  AI," "de-AI this," "humanize this," "check for banned words," "cut the em
  dashes," "audit this draft," or "list the style violations." Also triggers on
  scoring and review requests: "score this," "panel this," "run the expert
  panel," "quality check this," "rate this draft," "humanizer check," "is this
  good enough to ship," "what would you change." Use it whenever the user
  pastes text and asks what is wrong with it, and use it as the final voice
  pass after any other skill produces a draft. For generating a new long-form
  asset from scratch, prefer `content-writer`. For short social posts, prefer
  `social-generator`.
---

# House Style

## Before you write anything

Read these first. They are the source of truth and this skill does not invent
around them.

1. `brand-kit/brand.md`: name, palette, fonts, CTAs
2. `brand-kit/voice.md`: house style and banned constructions
3. `brand-kit/positioning.md`: the frame, pillars, traps, stats, vocabulary
4. `brand-kit/capabilities.md`: read before making any product claim

Two shared references carry the structure this skill applies. Read the one the
task needs:

5. `docs/writing-templates.md`: the ten asset skeletons and every length target
6. `docs/messaging-patterns.md`: the eight structural patterns

If `brand-kit/` is missing or still has its template placeholders, stop and tell
the user to run `brand-kit-setup`. Do not proceed with invented positioning.

---

## What this skill owns

This skill owns the **how**: voice, structure, pacing, patterns, and the quality
bar. The brand kit owns the **what**: names, claims, stats, vocabulary, and the
buyer. When the two appear to conflict, the kit wins and you tell the user which
file needs updating.

Nothing in this file names a company, a product, a competitor, or a statistic.
If you catch yourself about to write one from memory, stop and go read the kit.

---

## Modes

When invoked, do one of:

1. **Rewrite mode.** Take the user's draft and rewrite it to match the kit and
   the rules below. End with the one-line score summary from `Rewrite mode tail`.
2. **Audit mode.** Read the draft and list every violation, AI tells, banned
   words, structural problems, unsourced claims, then propose a specific fix
   for each. Do not rewrite unless asked.
3. **Reference mode.** Answer questions about the style, or pull the right
   template or pattern for the user's task without producing an asset.
4. **Quality panel mode.** Run the full panel in `The Quality Panel` below.
   Score, revise, rescore. Triggered by "score this," "panel this," "expert
   panel," "quality check," "is this AI-sounding."

**Default to rewrite mode** unless the user asks otherwise.

Before any mode: if the draft makes a product or capability claim, check it
against `What We Do` and `What We Do Not Do` in `brand-kit/capabilities.md`. An
unsupported claim is a rewrite, not a style note.

---

## 1. The Style Manual

The rules live in `brand-kit/voice.md`. This section tells you how to apply
them. Read the kit for the content; read this for the procedure.

### 1.1 Tone

Apply the `Tone` section of `brand-kit/voice.md`. The house defaults are: write
to one person, stay confident without hype, explain the mechanism rather than
only the outcome, and assume a smart, busy reader.

**How to apply it.** Read the draft's first paragraph aloud in your head. If it
addresses "organizations" or "teams," rewrite it to address one person doing one
job. If a sentence flatters the reader and then explains something obvious, cut
the flattery and keep the explanation.

### 1.2 Grammar

Apply the `Grammar Constraints` section of `brand-kit/voice.md`. The house
defaults ban em-dashes, appositives that restate the subject, passive voice,
weak verbs, and sentence-initial "Additionally / Furthermore / Moreover."

**How to apply it, in order:**

1. Delete every `, ` and every `--` used as one. Replace with a period, a comma,
   or a colon. Recheck the sentence still parses.
2. Find every appositive. If the clause between commas restates who the subject
   is, delete it and let the sentence say what the subject does.
3. Find every "is / are / was" followed by a past participle. Name the actor or
   cut the sentence.
4. Replace weak verbs with the specific action. "Enables faster onboarding"
   becomes "cuts onboarding from nine days to two."
5. Move the action early. Subject, verb, object. Keep subjects and verbs close.

### 1.3 Pacing

Apply the `Pacing` section of `brand-kit/voice.md`: one to four sentences per
paragraph, deliberate variation in sentence length, one idea per paragraph, a
section break every 150 to 250 words in long-form.

**How to apply it.** Count sentences per paragraph and split anything over four.
Look for three consecutive sentences of similar length and break the rhythm with
a short one. If a paragraph contains a "but," it is two paragraphs.

Use numbered lists for processes and sequences. Use bullets for parallel options
or contrasts. Use prose everywhere else, a bulleted list where prose belongs is
its own tell.

### 1.4 Clarity

Apply the `Clarity` section of `brand-kit/voice.md`: state the point first,
replace adjectives with numbers, define terms on first use, and cut any sentence
that stays true when you delete the company from it.

**How to apply it.** Take the last sentence of each section and ask whether it
belongs first. Circle every adjective of degree, fast, many, expensive, modern,
significant, and replace it with a number, a role title, or a named system, or
delete it. Every number needs a source in `Headline Stats` in
`brand-kit/positioning.md`; a number without one does not ship.

### 1.5 AI Tells

Apply the `AI Tells to Avoid` section of `brand-kit/voice.md`. Those are the
structural patterns. The scoring version, with weights, is in the humanizer
rubric below, use the rubric when you need a number and the kit when you need
the reasoning.

Two rules to internalize because they get violated most often:

- **The contrast formula is banned.** "Most companies do X. Winners do Y." and
  "It's not about X, it's about Y." are hollow regardless of how true the
  content is. Never write one, never prescribe one, and flag any you find. If
  the underlying contrast is real, state the failure and its consequence
  directly.
- **Never expose the scaffolding.** Your internal qualities, pillars, or
  framework live in `brand-kit/positioning.md` for your team. They do not appear
  by name in customer-facing copy. Write so the reader absorbs the quality
  without seeing the structure that produced it.

---

## 2. Writing Templates

The ten skeletons live in `docs/writing-templates.md`, together with the length
target for every asset type. Read that file for the shape. This section covers
what this skill does with it: pick the right template, then hold the draft to
it.

**Picking one.** Match the draft to a template before you touch a sentence. A
draft that fits no template is usually two assets fused together, and saying so
is the most useful note you can give.

| What the user brought you | Template in `docs/writing-templates.md` |
|---|---|
| A blog post, an article, a topic essay | Article |
| A caption for LinkedIn | LinkedIn post |
| Website copy for a product, a solution, or a campaign | Landing page or feature page |
| A nurture email or an announcement | Email |
| A prospecting message to one named person | Cold outreach |
| A one-screen argument for a decision maker | Executive brief |
| A long argument a buyer will forward internally | Whitepaper |
| A customer story | Case study |
| Event copy | Webinar registration |
| A subject line, alone or in a set | Subject line patterns |

For a pillar article, a cluster page, or anything written to be quoted by an
answer engine, the structure comes from `docs/aeo-style-guide.md` instead. Say
so and switch guides rather than forcing the Article shape onto it.

**Holding the draft to it.** In audit and rewrite mode, run the template's beats
in order against the draft and report three things: which beats are missing,
which sit out of order, and which are padded. Length comes from the
`Length targets` table in the same file. A draft outside its range is a note
rather than an automatic rewrite: say by how much, and say what comes out.

**The kit still owns the substance.** Every reference in a template to a hook, a
trap, a stat, a quote, a separating line, or a CTA means go get it from
`brand-kit/`. A beat filled from memory is the most common way an unsupported
claim reaches a reader.

---

## 3. Messaging Patterns

The eight patterns live in `docs/messaging-patterns.md`, each with what it is,
when it works, when it backfires, and a worked example. Read that file for the
pattern. This section covers what this skill does with them.

**The bar.** At least one pattern is visible in any customer-facing asset. Two
stacked in the same short asset is one too many. The Pattern Checker expert in
`The Quality Panel` scores exactly this, and a draft carrying no pattern falls
back on generic explanation, which is what a low Pattern score measures.

**Picking one.** Choose by what the draft is trying to do, not by what sounds
strongest.

| What the draft is trying to do | Pattern |
|---|---|
| Explain the mechanism to a technical reader | Sequence |
| Interrupt a reader who thinks they know the category | Correction |
| Open cold, on social or in a first email | Provoke |
| Carry a positioning argument end to end | Trap |
| Answer a reader who has already said no once | Reframe |
| Give an unnamed problem a label that travels | Naming |
| Replace an adjective the reader cannot argue with | Specificity |
| Close a piece aimed at a buyer in an active evaluation | Sales Question |

**Everything the patterns operate on comes from the kit.** Traps come from
`Named Traps` in `brand-kit/positioning.md`, numbers from `Headline Stats` with
their sources, and separating lines from `Categories We Are Not`. If you coin a
new trap while rewriting, say so in the delivery note and tell the user to add
it to `Named Traps`, so the name stays consistent across every asset. Do not
leave a coined name in the copy without flagging it.

### 3.1 A note on external validation

Sourced third-party voices carry weight your own claims cannot. Use them
verbatim, with attribution and a link, and only from
`External Validation Quotes` in `brand-kit/positioning.md`. Never paraphrase a
quote to make it fit, never quote someone who is not in the kit, and never
invent an attribution. A quote you cannot link is a quote you cannot use.

---

## 4. Prompt Block

When another tool or a teammate needs the style compressed into a prompt, use
this. Fill the bracketed parts from the kit.

```
Write in our house style.
Direct and action-led. Active voice. No appositive phrases. No em-dashes.
Short sentences. Put the action early.
Never use the contrast formula ("Most companies do X. Winners do Y." or
"It's not about X, it's about Y.").
No "it's not just X, it's Y." No "in today's..." openers. No "let's dive in."
No triple parallel lists in every paragraph. No concluding summary paragraph.
Banned vocabulary: [paste the Banned Words and Phrases list from voice.md]

Anchor the content to [canonical noun from The Frame in positioning.md] and use
its canonical definition verbatim on first mention.

Our qualities are [names, internal use only]. They are qualities, not section
headers. Never write their names or the word "pillars" or "framework" into
customer-facing copy.

Use these named traps where they fit: [from Named Traps]
Use these taglines verbatim or not at all: [from Naming and Usage Rules]
Only use numbers that appear in [Headline Stats], with their sources.
Close with the CTA for this context from [Calls to Action].
```

---

## 5. The Quality Panel

The panel is the final gate before anything goes out. Six experts score the
draft 0-100. Target is 90 or above aggregate. Maximum three rounds.

### 5.1 When to run it

- **Always** in quality panel mode.
- **Automatically** at the end of rewrite mode. Produce the rewrite, then append
  the one-line tail. If the aggregate is below 90, offer the full panel.
- **On request** in audit mode, if the user wants a number after the violation
  list.

### 5.2 The six experts

| # | Expert | Weight | Lens |
|---|---|---|---|
| 1 | **Voice Match** | 1.0x | Does this read like the house wrote it? Direct, action-led, short sentences, no hedging, no em-dashes, no appositives. Checks against every section of `brand-kit/voice.md`. |
| 2 | **Positioning Enforcer** | 1.0x | Checks the draft against `brand-kit/positioning.md`. Does it sit inside `The Frame`? Does every claim trace to a section of that file? Are the qualities in `The Pillars` conflated with each other, or worse, exposed by name in the copy? Are taglines used verbatim? Is any stat used that is not in `Headline Stats` with a source? |
| 3 | **Target Buyer** | 1.0x | Reads as the tier-one buyer defined in `brand-kit/icp.md`: the ICP column of `The Fit Matrix`, at the seniority and company size it names. Would that person find this credible, specific, and worth their time, or does it read like vendor marketing aimed at no one? |
| 4 | **AI Humanizer** | **1.5x** | Scores conformance to the house style, which is what most machine output fails. Mandatory. Uses the rubric in `The Humanizer Rubric`. Below 70 forces a revision regardless of aggregate. |
| 5 | **Pattern Checker** | 1.0x | Is at least one pattern from `Messaging Patterns` present, a named trap, a reframe, a correction, a naming? Or does the piece fall back on generic explanation? |
| 6 | **Specificity Auditor** | 1.0x | Are adjectives replaced with numbers, role titles, and named systems? Are the numbers sourced? Anything left as "fast," "many," "expensive," or "modern" costs points. |

Experts 2 and 3 are parameterized by the kit. If `positioning.md` or `icp.md`
still has template placeholders, those two experts cannot score. Say so and stop
rather than inventing a standard.

### 5.3 The loop

```
Round 1: Score all 6 experts -> aggregate (Humanizer x 1.5)
  |- >= 90 -> output PASS, show summary, done
  |- <  90 -> identify top 3 weaknesses -> AUTO-REVISE -> Round 2

Round 2: Re-score the revised draft
  |- >= 90 -> output PASS with the iteration trail, done
  |- <  90 -> STOP and ASK: "Round 2 scored [X]/100. Top weaknesses: [list].
              Want me to run round 3, take the best version as-is,
              or change approach?"

Round 3 (only if the user approves): final attempt, then output the best
version with an honest score. Never run a fourth round.
```

**Hard rule:** if the Humanizer scores below 70, revise regardless of the
aggregate. Copy that sounds generated is worse than no copy.

### 5.4 Aggregate math

```
weighted_total = (Voice + Positioning + Buyer + Pattern + Specificity)
                 + (Humanizer x 1.5)
divisor        = 5 + 1.5 = 6.5
aggregate      = round(weighted_total / 6.5)
```

If Humanizer < 70, force revision regardless of aggregate.

### 5.5 What to revise on

When the aggregate is below 90, take the three lowest raw scores and address
each one:

- **Voice Match low?** Cut em-dashes, kill hedging, shorten sentences, lead with
  the verb, split paragraphs over four sentences.
- **Positioning Enforcer low?** Re-read `brand-kit/positioning.md`. Confirm the
  canonical noun and definition are present. Confirm each claim maps to the
  right quality and that no quality's name, "pillars," or "framework" appears in
  the copy. Strip any stat missing from `Headline Stats`.
- **Target Buyer low?** Add role titles from `Buying Committee`, name real
  systems, add real metrics. Cut every sentence that could appear in any
  competitor's blog unchanged.
- **Humanizer low?** Sweep the banned vocabulary first, then work the pattern
  table in order.
- **Pattern Checker low?** Apply Trap, Reframe, Correction, or Naming. At least
  one must be present.
- **Specificity Auditor low?** Replace every adjective of degree with a number,
  a role title, or a named system.

---

## 6. The Humanizer Rubric

Scott King wrote the 23 patterns below by hand while editing AI-drafted B2B
marketing copy against his own published articles, naming each failure as it
recurred. The weights measure damage to credibility with a technical reader
rather than how often a pattern appears, which is why scaffolding exposure costs
10 and copula avoidance costs 5. `docs/voice-calibration.md` carries the
reasoning and the method for recalibrating these weights against your own
audience.

**This is a house-style conformance score, not an AI detector.** It is
hand-built and deliberately opinionated, and it catches most machine output as a
side effect, because machine output is unstyled by default. It does not identify
machine authorship. A human draft written outside this house style scores low,
and a machine draft edited into the house style scores high. Say "off style,"
never "written by AI."

Start at 100 and deduct per pattern detected. The full arithmetic, including
how repeated patterns stack, is in `6.3 Scoring and reporting`. Read it before
you score anything.

### 6.1 Banned vocabulary, minus 5 per distinct term, capped at minus 25

Deduct 5 for every distinct offending term, drawn from the `Banned Words and
Phrases` section of `brand-kit/voice.md` plus every term below. Count a term
once no matter how many times it repeats: three uses of "leverage" cost 5, not
15. The two lists overlap on purpose, so a term sitting on both lists still
counts once.

**Cap the total vocabulary deduction at minus 25**, however many distinct terms
appear. The cap exists because the weighted patterns in `Patterns to flag` are
tuned relative to each other, and an uncapped word count overrides them.

delve, tapestry, landscape (abstract use), leverage, multifaceted, nuanced,
pivotal, realm, robust, seamless, testament, transformative, underscore (verb),
utilize, whilst, keen, embark, comprehensive, intricate, commendable,
meticulous, paramount, groundbreaking, innovative, cutting-edge, synergy,
holistic, paradigm, ecosystem, Additionally (as a paragraph starter), align
with, crucial, enduring, enhance, fostering, garner, highlight (verb),
interplay, intricacies, showcase, vibrant, valuable, profound, renowned,
breathtaking, nestled, stunning, dive into, game-changer, unlock

### 6.2 Patterns to flag

| # | Pattern | Penalty | Tell |
|---|---|---|---|
| 1 | Significance inflation | -10 | "stands as," "is a testament," "pivotal moment," "underscores its importance," "marks a turning point" |
| 2 | Vague attributions | -8 | "Experts believe," "industry reports," "studies show," "many companies are saying", with no named source. Every claim of this shape needs an entry in `Headline Stats` or `External Validation Quotes`. |
| 3 | Superficial -ing analyses | -8 | Tacked-on "highlighting," "showcasing," "underscoring," "reflecting," "ensuring," "fostering" clauses that add nothing to the sentence |
| 4 | Promotional language | -8 | "boasts," "vibrant," "rich" (figurative), "in the heart of," "must-have," "world-class" |
| 5 | Formulaic challenges/future | -10 | "Despite these challenges, X continues to..." or "The future looks bright for..." |
| 6 | Copula avoidance | -5 | "serves as," "stands as," "represents," "marks," "boasts," "features", when "is" or "has" would do |
| 7 | Negative parallelism | -5 | "It's not just X, it's Y." Banned in `brand-kit/voice.md`; double-flag it here |
| 8 | Rule-of-three overuse | -8 | Every paragraph forced into triple adjectives, triple nouns, or triple parallel clauses |
| 9 | Elegant variation | -5 | Synonym cycling for the same noun: "the CEO... the executive... the business leader..." |
| 10 | False ranges | -5 | "From X to Y" where X and Y are not on the same scale: "from content to compliance, from ROI to ethics" |
| 11 | Em-dash overuse | -5 | More than one em-dash per 200 words. Em-dashes are banned outright in `brand-kit/voice.md`; penalize on sight here |
| 12 | Excessive hedging | -8 | "could potentially," "might possibly," "may perhaps," "it could be argued," "can help" |
| 13 | Filler phrases | -5 each | "in order to" (use "to"), "due to the fact that" (use "because"), "at this point in time" (use "now"), "it is important to note that" (just state it) |
| 14 | Generic positive conclusions | -10 | "The future looks bright," "exciting times ahead," "stay tuned," "the possibilities are endless" |
| 15 | Sycophantic openers | -8 | "Great question!" "You're absolutely right!" "That's an excellent point!" |
| 16 | Knowledge-cutoff disclaimers | -10 | "As of [date]," "while specific details are limited," "based on available information" |
| 17 | Collaborative artifacts | -10 | "I hope this helps," "Of course!" "Certainly!" "Let me know if you'd like...", assistant chatter that survived into the asset |
| 18 | "In today's..." openers | -10 | "In today's fast-paced world," "in the current landscape," "in an era of..." |
| 19 | The contrast formula | -10 | "Most companies do X. Winners do Y." and "It's not about X, it's about Y." Structurally hollow. Never write one, never prescribe one |
| 20 | Dive/unpack/imagine openers | -8 | "Let's dive in," "let's unpack," "picture this," "imagine if" |
| 21 | Concluding summaries | -8 | A final paragraph that restates what was just said. End on the CTA, a question, or the sharpest line, never on a recap |
| 22 | Question-as-opening | -5 | Repeating the user's question back as the first line, or a rhetorical "Ever wonder why...?" hook |
| 23 | Scaffolding exposure | -10 | **Your own** internal structure surfacing in customer-facing copy: your qualities named as a set, "our pillars," "our framework," or your framework used as section headers. See the scope note below before firing this. Automatic revision trigger |


**Scope note on pattern 23.** This pattern fires only on the writer's own
scaffolding: the qualities in `The Pillars`, the frame in `The Frame`, or any
internal messaging structure from `brand-kit/positioning.md` appearing by name in
copy meant for a reader. It does not fire on a framework the piece is *about*.

- Fires: "Our three pillars are speed, trust, and scale." The reader is being
  shown the scaffolding behind the writing.
- Does not fire: "The four pillars of agentic governance are identity, audit,
  approval, and spend control." That is the subject matter. A piece is allowed
  to organize an argument.

The test is ownership, not the word "pillar." If the structure belongs to the
argument, it is content. If it belongs to how you decided what to say, it is
scaffolding. At minus 10 with an automatic revision trigger attached, firing
this one wrongly is expensive: in the calibration study a scorer who applied it
to subject-matter frameworks scored one piece 74 points below a scorer who did
not.

### 6.3 Scoring and reporting

- **90-100:** Reads like the house wrote it. Ship it.
- **70-89:** Minor tells. Fixable in one revision pass.
- **50-69:** Obvious pattern damage. Significant rewrite needed.
- **0-49:** Off style entirely. Rewrite from the source idea, not from the draft.

**Stacking.** A pattern that fires more than once deducts up to twice its base
penalty, and no further. A pattern firing eight times costs the same as one
firing twice. Apply stacking first, then the vocabulary cap, then clamp. This
rule is easy to skip and it materially changes a score: in the calibration
study, a scorer who missed it ranked the same nine pieces in a different order.

**Compute the arithmetic in full, then clamp.** Total every deduction first, the
capped vocabulary penalty plus every weighted pattern, subtract it from 100, and
only then clamp the result into the 0 to 100 range. Never clamp an intermediate
step. A draft carrying 92 points of deductions scores 8, not 0.

**Report deduction density.** Alongside the score, give the total deduction per
thousand words. Distinct patterns accumulate with length even though each one
stacks no higher than twice its base, so a long piece trips more of them than a
short one on the same prose habits. The density figure is diagnostic only and
does not change the score. Never compare the raw scores of two pieces of very
different length without it.

**Report both numbers.** Give the clamped score and the raw total beside it:
"Humanizer: 0/100, raw minus 31, total deduction minus 131." A draft at a raw minus 31
and a draft at a raw minus 5 both clamp to 0, and the clamped number on its own
hides the 26 points between them.

**Use the band, not the number.** The band and the ranking are what this
instrument produces reliably. The raw score is a diagnostic that travels with
them, and it moves from reader to reader more than the band does.

- The band and the relative ranking are the reliable outputs. The raw score is
  diagnostic: it says how much damage the patterns did, not what the piece is
  worth to the point.
- Never report a score to a third party as a precise measurement. Report the
  band, and report the specific patterns that fired, which is the actionable
  part anyway. "Scored 72" claims a precision this rubric does not have.
- Two scorers reading this rubric on the same draft can differ by twenty points
  or more. That is a property of the instrument, not a failure of either reader.
- A score within ten points of a band boundary decides nothing until a second
  independent pass agrees with it. Band edges are exactly where a difference in
  scorer severity flips the verdict.
- Patterns 1 and 5 carry the loosest tells on the table and are where severity
  diverges most. Fire them only when the tell is unmistakable, never when it is
  merely arguable.

---

## 7. Output Formats

### 7.1 Quality panel mode

```
## Result: [SCORE]/100, [PASS | NEEDS WORK]

[Final draft here]

**Iterations:** [N] round(s)
**Panel:** Voice Match, Positioning Enforcer, Target Buyer,
AI Humanizer (1.5x), Pattern Checker, Specificity Auditor

---

<details>
<summary>Scoring rounds</summary>

### Round 1, Aggregate: [X]/100

| Expert | Score | Key feedback |
|---|---|---|
| Voice Match | 87 | Two em-dashes in paragraph 3, hedging in the opener |
| Positioning Enforcer | 92 | Canonical definition present and verbatim |
| Target Buyer | 78 | No role named. Reads as marketing, not analysis |
| AI Humanizer (1.5x) | 81, raw minus 19 | "leverage" once, "robust" once, one significance-inflation tell |
| Pattern Checker | 65 | No named trap. Generic explanation throughout |
| Specificity Auditor | 88 | Good numbers mid-piece, vague closer |

**Top 3 weaknesses:** [ranked]
**Changes made:** [specific edits]

### Round 2, Aggregate: [X]/100
[same format]

</details>
```

### 7.2 Rewrite mode tail

After producing the rewrite, append one line:

```
---
**Quality check:** [SCORE]/100, Voice [X], Positioning [X], Buyer [X],
Humanizer [X] (raw [Y]), Pattern [X], Specificity [X]. [Pass | Want the full
panel?]
```

Below 90, offer the panel. At 90 or above, ship the rewrite as-is.

### 7.3 Audit mode

A table of violations, most severe first: the quoted text, which rule it breaks,
which brand-kit heading covers it, and the specific replacement. No score unless
the user asks.

---

## 8. Cross-References

All optional. This skill works alone.

- `brand-kit-setup`: run it if the kit is missing or still has placeholders.
- `content-writer`: if it is installed, use it to generate a long-form asset,
  then run this skill as the final pass.
- `social-generator`: if it is installed, prefer it for short social posts;
  this skill still scores the output.
- `transcript-to-article`: if it is installed, it produces the draft and this
  skill grades it.

Anything not in `skills/` does not exist. Do not reference it.
