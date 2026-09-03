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

Generic skeletons. They tell you the shape; the kit tells you the substance.
Every reference below to a frame, trap, stat, quote, separating line, or CTA
means: go get it from the brand kit.

### 2.1 Article

1. Hook
2. Stakes
3. Misconception
4. Reality
5. The mechanism
6. Example
7. What changes
8. CTA

Pull the hook from a named trap in `Named Traps` in `brand-kit/positioning.md`.
Pull the CTA from `Calls to Action` in `brand-kit/brand.md`.

### 2.2 Social Post

1. Hook
2. Problem
3. Consequence
4. Why the common approach fails
5. Your frame, applied
6. Steps or examples
7. CTA

**Hook patterns.** Blunt insight. Broken reality, one sentence naming something
the reader uses every day that does not do the job they think it does. Industry
myth, the received wisdom, stated plainly, before you dismantle it. Risk
warning. Numbers-first, open on the number, then say what it means. Reframe,
take a common objection and expose the concern underneath it. Real-situation,
one sentence describing a meeting, a ticket, or an invoice the reader has
actually lived through, with no abstractions.

**The "here's how it works" sub-formula.** After the framing, add three to five
numbered steps. Each step is a verb-led sentence under twelve words. Example
shape:

1. The system reads the request.
2. The classifier routes it by intent.
3. The agent pulls the account history.
4. The update lands in the system of record.
5. A person approves only the exceptions.

**Closing patterns.** A directive ("Here's the play"). A comment prompt. A
pointer to the full teardown. An invitation to disagree. Whatever you choose,
use the exact wording from `Calls to Action` in `brand-kit/brand.md` when a
destination is involved.

### 2.3 Landing Page

- Direct value statement
- Pain
- Solution
- Use cases
- Proof
- CTA

Headline is eight words or fewer. The differentiator section pulls from
`Categories We Are Not` in `brand-kit/positioning.md`. Proof pulls from
`Headline Stats` and from `Proof` in the relevant `What We Do` block in
`brand-kit/capabilities.md`.

### 2.4 Email

- Subject under six words
- State the point
- State why it matters
- Give one example
- Invite the next step

No throat-clearing. No "I hope this finds you well." One idea, three to five
short paragraphs, one CTA.

### 2.5 Cold Outreach

1. Open with the buyer's current state. One sentence, specific to their role,
   using a title from `Buying Committee` in `brand-kit/icp.md`.
2. Name the failure pattern they are already living. Use a named trap.
3. State your difference in one line. Use the separating line from
   `Categories We Are Not`.
4. Propose a fifteen-minute conversation with a specific outcome.
5. Cut everything else.

### 2.6 Executive Brief

- One-line thesis
- Three bullets of evidence
- One bullet of risk
- One bullet of recommendation

Fits on a single screen. Every number carries its source.

### 2.7 Case Study

- Buyer role and company shape (not the name unless cleared)
- The trigger event, what forced the change
- The workflow before
- The workflow after
- One quantified outcome
- One quote from the buyer

Only name a customer if `brand-kit/capabilities.md` says that name is cleared
for external use. Otherwise describe them by industry and size.

### 2.8 Webinar Registration

- Specific promise, what attendees leave knowing
- Three named takeaways
- Who should attend
- Who should not attend
- Time, date, CTA

The "who should not attend" line is doing real work. Keep it honest.

### 2.9 Subject Line Patterns

- **Numeric:** "3 traps in [category]"
- **Correction:** the received wisdom, contradicted in five words
- **Provocation:** name a tool the reader relies on and say what it is not
- **Mirror:** repeat back the question the prospect is already asking

Under fifty characters. No colons stacking two clauses.

---

## 3. Messaging Patterns

Eight patterns. At least one should be visible in any customer-facing asset. The
examples here are deliberately generic, swap in the real names, numbers, and
traps from `brand-kit/positioning.md`.

### 3.1 Sequence

Break the mechanism into four verbs. Ingest. Extract. Validate. Act. A reader
who can repeat your sequence can explain you to their boss.

### 3.2 Correction

State the belief the market holds, then contradict it flatly.

> "You DO want the model trained on your own data."

Works when the objection is common enough that the reader recognizes themselves
in it. Follow immediately with the reason.

### 3.3 Provoke

One sentence that indicts the reader's current state without insulting them.

> "Your company doesn't think. It reacts."

Use once per asset, near the top. Two provocations read as posturing.

### 3.4 Trap

The spine. Name the problem your category has, then run the three-beat.

1. **Name the trap.** Use one from `Named Traps` in
   `brand-kit/positioning.md`, or propose a new one and tell the user to add it
   to the kit.
2. **Limitation:** what the alternative approach does.
3. **Failure:** what breaks because of it.
4. **Your difference:** how your approach resolves it.

A trap you have named is a trap your competitor has to answer.

### 3.5 Reframe

Take a stated objection and expose the real concern underneath.

> "'I don't want it touching our data.' What they actually mean: 'I don't want
> to lose control.'"

Agree with the diagnosis, push back on the prescription. The reframe is how you
win an argument without telling the reader they were wrong.

### 3.6 Naming

Give the problem a memorable label. Once it has a name, the reader recognizes it
in their own organization and repeats it to colleagues. Two-word noun phrases
travel furthest.

Names belong in `Named Traps` in `brand-kit/positioning.md` so they stay
consistent across every asset. If you coin one while writing, say so in your
delivery note so the user can add it.

### 3.7 Specificity

Replace adjectives with numbers.

- Not "expensive." Give the multiple or the dollar figure.
- Not "fast." Give the elapsed time.
- Not "many." Give the count.
- Not "long." Give the cycle length in days.
- Not "a lot of duplicated work." Give the percentage.

Every number you use must exist in `Headline Stats` in
`brand-kit/positioning.md` with a source. If it does not, either find the source
or write around the number.

### 3.8 Sales Question

End with a question the reader can take into a vendor call.

> "Ask any vendor: what do my users log into, and where do I see their activity?"

The question makes the prospect the tester instead of the seller. One per asset,
at the close.

### 3.9 A note on external validation

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

Start at 100 and deduct per pattern detected. Multiple occurrences of the same
pattern stack up to 2x the base penalty, and no further.

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
| 23 | Scaffolding exposure | -10 | Internal structure surfacing in customer-facing copy: naming your own qualities as a set, "our pillars," "our framework," "our messaging framework," or using them as section headers. Automatic revision trigger |

### 6.3 Scoring bands

- **90-100:** Reads like the house wrote it. Ship it.
- **70-89:** Minor tells. Fixable in one revision pass.
- **50-69:** Obvious pattern damage. Significant rewrite needed.
- **0-49:** Off style entirely. Rewrite from the source idea, not from the draft.

**Compute the arithmetic in full, then clamp.** Total every deduction first, the
capped vocabulary penalty plus every weighted pattern, subtract it from 100, and
only then clamp the result into the 0 to 100 range. Never clamp an intermediate
step. A draft carrying 92 points of deductions scores 8, not 0.

**Report both numbers.** Give the clamped score and the raw total beside it:
"Humanizer: 0/100, raw minus 31, total deduction minus 131." A draft at a raw minus 31
and a draft at a raw minus 5 both clamp to 0, and the clamped number on its own
hides the 26 points between them.

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
