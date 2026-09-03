# Calibrating Voice

`docs/positioning-framework.md` covers the argument: what you believe and why a
competitor cannot simply agree with it. This file covers the other half of
sounding like yourself, which is the writing itself. Same problem, different
layer. Nobody can hand you a competitive argument, and nobody can hand you a
voice either.

The difference is that this repo ships a voice anyway. `brand-kit/voice.md`
arrives with real rules under `Tone`, `Grammar Constraints`, `Pacing`,
`Clarity`, `Formatting Preferences`, `Banned Words and Phrases`, and `AI Tells
to Avoid`, while every other kit file arrives mostly blank. The scoring version
of those rules, the 23 weighted patterns in `The Humanizer Rubric` inside
`skills/house-style/SKILL.md`, ships filled in too. That is a deliberate choice
and it comes with an obligation: to say whose voice it is, how it was built, and
how to replace it.

One thing the rubric is not: an AI detector. It is a house-style conformance
score, hand-built and deliberately opinionated, and it catches most machine
output as a side effect, because machine output is unstyled by default. It does
not identify machine authorship. The calibration study below is the evidence for
that, and it is also why the vocabulary penalty is now capped. That study has
been run twice, and the second run reversed the first on which half of the
rubric does the discriminating.

The worked example throughout is Ampfield, the fictional field operations
platform for solar and HVAC contractors documented in `examples/ampfield/`.

---

## Where the rubric came from

Scott King wrote the 23 patterns by hand, one at a time, over roughly a year of
editing machine-drafted B2B marketing copy against his own published articles.
There was no source list. The method was repetition: draft, edit, notice that
the same repair was being made for the fourth time that week, stop and name it.

Naming was the actual work. "This sounds like AI" is not usable by a scoring
panel. "A final paragraph that restates what was just said" is, because a reader
can find it, a writer can cut it, and a model can flag it. Most of the 23
started as a note in the margin of a draft and became a rubric entry only after
it recurred often enough to be a pattern rather than a bad day.

The style rules that sit alongside the rubric came from the opposite direction.
They were reverse-engineered out of already-published writing: paragraphs
measured, sentence openings counted, punctuation habits tallied. The em-dash
ban, the no-appositives rule, one to four sentence paragraphs, and
state-the-point-first are all descriptions of how the source writing already
worked, turned into constraints. That is why a draft that passes the panel reads
like the person the rules were derived from. The rubric removes the machine
tells and the style rules supply the replacement.

---

## What the weights encode

The weights are not frequency counts. If they were, filler phrases and copula
avoidance would dominate, because those are the most common things in any
machine draft. The weights measure damage: how much credibility a single instance costs
with a technical B2B reader who is deciding whether the writer knows the
subject.

Two contrasts make the scale legible.

**Scaffolding exposure costs 10.** Pattern 23 fires when internal structure
surfaces in customer-facing copy: naming your own qualities as a set, "our
pillars," "our framework," a section header that is really a slide title. It is
a maximum penalty and an automatic revision trigger because it tells the reader
that the piece was assembled from a template. Ampfield's three qualities exist
to shape what the copy argues, not to be listed in it. The moment a reader sees
the scaffolding, everything above it reads as filled-in rather than thought
through.

**Knowledge-cutoff disclaimers cost 10** for the same reason from the other
side. "As of this writing," "while specific details are limited," "based on
available information." Nothing marks a document as generated more precisely
than an author hedging about the boundaries of its own training. A human writer
with a gap in their knowledge either finds the number or cuts the sentence.

**Copula avoidance costs 5.** "Serves as," "stands as," "represents," "marks,"
wherever "is" or "has" would do the same job. It appears constantly, and a
reader who notices it thinks the writer was padding, not that the writer is a
machine. Cheap to fix, low damage, low weight.

The pattern holds across the table. Entries that make a reader doubt the author
is a person at all sit at 8 to 10: the contrast formula, generic positive
conclusions, "in today's" openers, collaborative artifacts left in the asset.
Entries that are stylistic irritants sit at 5: copula avoidance, elegant
variation, false ranges, question-as-opening. Nothing scores below 5 any more.
Two entries that did, title case in headings and inline-header bullets, were
retired after the first calibration run below and moved to `Formatting
Preferences` in `brand-kit/voice.md`, where they carry no score.

**Why the Humanizer carries 1.5x.** In `The Quality Panel` every expert scores
1.0x except the AI Humanizer, which scores 1.5x, and a Humanizer score below 70
forces a revision no matter what the aggregate says. The reason is that the
other five failures are recoverable and this one is not. Weak positioning
produces a piece that argues a bit less well. Thin specificity produces a piece
a buyer skims. Copy that reads as generated produces a reader who stops
believing the author, and once that happens the positioning and the specificity
do not get read at all. It is the only failure that invalidates the rest of the
work, so it is the only one weighted above the others, and it is the only one
with a floor.

---

## The calibration study

The weights above were argued from experience. They have now been tested twice,
and the second run overturned the main conclusion of the first.

### Design

Nine B2B articles were scored blind against the rubric. Provenance was stripped
before scoring, so a scorer saw text and nothing else. The sample: two recent
pieces written through the panel, four articles by the same author from 2024,
before the rubric existed, a research report from a large consultancy, and two
unstyled AI drafts written to the prompt with no house style applied. The last
two are the controls. If the rubric measures machine authorship, they should
finish last.

Run one used one scorer and the original rubric: an uncapped vocabulary
deduction and 25 rows in the pattern table. Run two used the revised rubric,
with the vocabulary deduction capped at minus 25 and counted per distinct term,
two formatting patterns retired, and the table renumbered to 23. It also used
two scorers, working independently and blind, on the same nine pieces. Every
number below is from run two unless it says otherwise.

### Results

Scores are raw, computed in full before clamping. Anything below zero clamps to
0 in normal use, which is why the raw figure is reported beside the clamped one.
The last column is the same arithmetic with every vocabulary point removed, so
it shows what the weighted patterns alone deduct, averaged across the two
scorers. Letters are assigned for this table and do not map to run one's
letters.

| Piece | Provenance | Scorer 1 | Scorer 2 | Pattern deduction, mean |
|---|---|---|---|---|
| A | Recent piece, written through the panel | 72 | 72 | minus 23 |
| B | Recent piece, written through the panel | 72 | 64 | minus 32 |
| C | Unstyled AI draft, control | 46 | 46 | minus 54 |
| D | Unstyled AI draft, control | 26 | 23 | minus 68 |
| E | Research report, large consultancy | 10 | 8 | minus 71 |
| F | Same author, 2024, before the rubric | minus 4 | minus 9 | minus 82 |
| G | Same author, 2024, before the rubric | 2 | minus 19 | minus 84 |
| H | Same author, 2024, before the rubric | minus 18 | minus 33 | minus 101 |
| I | Same author, 2024, before the rubric | minus 29 | minus 29 | minus 104 |

### Finding one: it is not an AI detector

This one survives run two unchanged, on stronger numbers. Both AI controls
outscored every human-written piece except the two written through the panel.
Piece C, an unstyled AI draft, scored 46 from both scorers. Piece E, the
research report from a large consultancy, averaged 9. The distance from the
higher AI control to the lowest human piece in the sample is 75 points.

That result is not a defect, but it does settle what the instrument is. The
rubric scores conformance to a house style. Machine output fails it because
machine output is unstyled by default, which is a side effect and not the
mechanism. A human writing outside the house style fails it the same way, and
the 2024 articles did. Every claim in this repo about the rubric was rewritten
to say that.

### Finding two: the patterns discriminate, and run one said the opposite

Run one concluded that the vocabulary penalty swamped the weighted patterns:
that the structural signal was real but buried under the word count, and that
the arithmetic had to be capped before anything else could be seen. That
conclusion was backwards. It was not a close reading that later looked
different. It was a scoring error, and run two found it.

The rubric's stacking rule, under `Scoring and reporting` in
`skills/house-style/SKILL.md`, says a pattern that fires more than once deducts
up to twice its base penalty. Run one's scorer never applied it. Every repeated
pattern was counted once, no matter how many times it fired, which compressed
every structural deduction in the study and left the uncapped vocabulary count
as the largest term in most of the scores. The vocabulary list looked dominant
because the thing it was competing against had been halved or worse. Both
run-two scorers applied stacking, and the picture inverted.

Strip every vocabulary point out of the run-two scores and the group ordering
does not change. Pattern deductions on their own average minus 28 for the two
panel pieces, minus 61 for the two AI drafts, and minus 93 for the four 2024
pieces: two gaps of roughly 30 points, in the same order as the full scores. The
weighted patterns do essentially all of the discriminating. The vocabulary
deduction confirms an ordering it did not produce.

The simplest form of the result is a count of distinct patterns fired. The two
panel pieces fire two and three. Every other piece in the sample fires five to
nine.

What costs the 2024 pieces is prose habit rather than word choice. Three
patterns account for most of their deductions, and all three fire at the doubled
ceiling: tacked-on participial clauses that restate the sentence they hang off,
promotional language, and rule-of-three constructions with a dead third item.
One piece fires the participial clause eleven times, four of them the same
"ensuring" construction. None of that is repairable by swapping words. It is
repairable by rewriting sentences.

The group order also moved between runs. In run one the consultancy report
placed above both AI controls. In run two it placed below both. Run one's raw
spread, 77 at the top to minus 31 at the bottom, was not far off run two's, so
the error was invisible in the headline numbers and showed up only in the
ranking and in the attribution of the cause.

Run one still produced three rubric changes, and all three survived run two:

- The vocabulary deduction is capped at minus 25 in total, and it counts
  distinct terms rather than repetitions. Run two demotes this from a fix for a
  live problem to insurance against one, since the patterns carry the signal
  either way, but an uncapped count could still drown them on a piece with a
  long ban list.
- Title case in headings and inline-header bullets were deleted from the scoring
  table. They fired on six and five of the nine pieces respectively. A pattern
  that fires on two thirds of a professional sample carries almost no
  information, and both are house formatting preferences rather than signals
  that a draft was assembled by a machine. They now live under `Formatting
  Preferences` in `brand-kit/voice.md`, where they carry no score.
- The score is reported clamped and raw, so a piece at a raw minus 31 is
  distinguishable from one at a raw minus 5.

Run two added a fourth. The stacking rule now carries a warning in
`Scoring and reporting` saying that it is easy to skip and that skipping it
changes the ranking, because that is exactly what happened here.

### Inter-rater agreement

Run two answers a question the earlier version of this document listed as
unknown: whether two people reading the same rubric arrive at the same number.
Roughly, and not everywhere.

Mean absolute difference between the two scorers was 6.0 points across nine
pieces. They agreed exactly on three. The widest gap was 21 points.

The disagreement is not spread evenly, and where it sits is what matters. It
concentrates in the basement, on the pieces scoring below zero, where the
verdict is "rewrite from the source idea" whichever number you take and a
21-point spread costs a reader nothing. On the two highest-scoring pieces the
scorers differed by 0 and by 8. That 8-point gap is the expensive one: 72 and 64
sit on either side of a band boundary, so one scorer called the piece fixable in
a single revision pass and the other called for a significant rewrite. The
instrument is steady where the answer is obvious and least steady near the
threshold where people actually consult it. Treat a score within a few points of
a band edge as a band edge, not as a verdict.

The two scorers also converged on a diagnosis without conferring. Asked for the
most expensive habit in the author's current best writing, both named the
two-beat negation: "This is not X. It's Y." They put it at four occurrences and
at six. They disagreed on the count and not on the finding.

### What the study does not show

Eighteen scores across nine pieces is more than run one had and still a small
sample. It supports a group ordering and a spread. It does not support a
confidence interval, and one more piece or one more scorer could move any of the
band-edge cases. More pieces is the cheapest fix available and the next thing to
do.

There is still exactly one external human control, and it is a firm's house
style rather than an individual writer, which makes it a weaker control than it
looks. The result at 9 says something about how one consultancy writes research
prose and nothing about professional B2B writing generally. Ten pieces by ten
outside authors, scored blind alongside everything else, would replace the
anecdote with a baseline.

Both AI controls were drafted by the same model family that scored them. A
scorer evaluating prose of the kind it would produce itself has an obvious
conflict, and nothing in the design rules out the controls being flattered or
punished by it. Drafting the controls with a different model, or having a person
score the controls independently, separates the two.

And there is nothing in the sample between 2024 and now. Four old pieces and two
recent ones establish that the writing changed. They cannot show whether it
changed gradually while the rubric was being built or at the point it started
being applied, which is the difference between the rubric recording a drift and
the rubric causing one. Two or three pieces from each intervening year would
settle it.

---

## What to override, and what to keep

The defaults in `brand-kit/voice.md` are one writer's judgment about what
damages credibility in enterprise software marketing. You are meant to disagree
with specific entries. Some are far more worth overriding than others.

**Override freely: house-specific bans and tone lines.** Everything under
`Banned Words and Phrases` that is category noise rather than machine noise, and
everything under `Tone`. "Ecosystem" is banned in the shipped rubric vocabulary,
and if you sell developer tooling to platform teams, ecosystem is the correct
word for the thing and banning it makes your copy worse. Ampfield keeps most of the shipped
list and adds nine of its own, including "boots on the ground" and "single pane
of glass," which are invisible to a general rubric and fatal in field service.
Your additions are worth more than the defaults, because only you know which
phrases your own team overuses. This list is also the safest thing in the kit to
change, because it is not what the score rests on. The calibration study found
the weighted patterns separating the sample almost entirely on their own, with
the vocabulary deduction as a secondary signal that confirms an ordering the
patterns already produce.

**Keep, unless you have a real reason: the structural tells.** These are the
entries doing the work. Most of patterns 14 through 23, and most of `AI Tells
to Avoid`, are close to universal. The contrast formula is hollow in every
market. A concluding paragraph that restates the article wastes the last
position on the page whoever you sell to. Assistant chatter surviving into a
published asset is never acceptable. These are not matters of taste, and
lowering their weights usually means you have decided you would rather ship
than revise. They are also where the separation between good and bad writing
actually showed up when the rubric was tested: strip every vocabulary point
out of the calibration scores and the ordering holds, and the two cleanest
pieces in the sample fire two and three of these patterns while everything
else fires five to nine.

**The middle ground is the punctuation and pacing rules.** The em-dash ban is
strict on purpose, and it is strict because in B2B copy the em-dash is the
single most reliable machine tell. If your house has used em-dashes well for a
decade, relax it. Just relax it on purpose, and be ready for it to cost you.

---

## Building your own voice profile

Five steps. The first one is the one people skip and it is the one that decides
whether the rest works.

### Assemble a corpus

Ten to twenty pieces you actually wrote, that you would be happy to be judged
by. Published work beats internal documents, because publishing applies an
editing pass and a consequence, and both of those move writing toward the voice
you want rather than the voice you default to at 4pm on a Thursday. Internal
memos are your habits. Published articles are your standards.

Cut anything ghostwritten, by you for someone else or by someone else for you.
A ghostwritten piece is a third voice averaged from two, and it will pull every
measurement you take toward the middle. Cut anything an AI has already touched,
for the obvious reason: you would be extracting the tells you are trying to
remove.

If you do not have ten pieces, use what you have and say so in the file. Six
real articles beat twenty padded ones.

### Extract the rules

Read for mechanics, not for content. What you are looking for:

- **Length.** Average sentence length and average paragraph length, in
  sentences. Count them. Most writers guess long.
- **Openings.** How the first sentence of a piece works, and how the first
  sentence of a section works. Claim first? Scene? Number? The pattern is
  usually consistent and usually invisible to the writer.
- **Closings.** Where pieces end. On the sharpest line, on a question, on a
  call to action, on a recap. If it is a recap, that is a habit to break rather
  than record.
- **Questions.** Whether you use them at all, and whether they are real
  questions or rhetorical transitions.
- **Punctuation.** Semicolons, parentheses, dashes, colons. Count them per
  thousand words. This is where individual voice hides.
- **Vocabulary.** The words you reach for repeatedly, and the ones that never
  appear. Both matter. The absences become bans.
- **Numbers and evidence.** Whether you cite, how you attribute, whether
  statistics carry a source in the sentence or in a link.
- **Transitions.** How you get from paragraph to paragraph. Connective words,
  a repeated noun, a hard cut with no bridge at all.

### Write it into the kit

Each finding has a home in `brand-kit/voice.md`:

- Sentence and paragraph length, section break frequency, and rhythm rules go
  in `Pacing`.
- Punctuation habits, appositives, voice, verb preferences, and capitalization
  go in `Grammar Constraints`.
- Openings, closings, how you handle evidence, and how you define terms go in
  `Clarity`.
- Who you write to, how much you assume, and what you refuse to sound like go
  in `Tone`.
- The words that never appear, plus your category noise and your team's tics,
  go in `Banned Words and Phrases`.

Keep the shipped defaults and put your entries under them, the way
`examples/ampfield/voice.md` does. Rewriting the defaults to match your
additions loses the reasoning, and the reasoning is what tells the next person
which rule to relax.

### Calibrate the penalties

Adjust weights against your audience, not against your preferences. A rubric
tuned for a technical buyer punishes vague attribution hard, because that reader
checks. A rubric tuned for a procurement audience might punish hedging less,
because hedging is the register they work in.

Add your own patterns as new numbered rows. The discipline is that a weight has
to mean something relative to the others. Before assigning one, ask which
existing entry it is equivalent to. If your new pattern is as damaging as
scaffolding exposure, it is a 10. If it is closer to elegant variation, it is a
5. A rubric where everything costs 8 is a checklist, and a checklist cannot
tell you what to fix first.

Ampfield's invented job site is worth a real penalty because a reader who has
been on that roof knows immediately that the writer has not. Its trap-name
pileup is worth less, because the failure is one of taste rather than
credibility.

### Validate it

Take a piece you wrote yourself, that has never been through the panel, and
score it. This is the honest test and it is the only one that matters. Score
four or five, not one, and sort them by date before you read the numbers,
because the date is what makes the result interpretable.

Have a second person score at least one of them independently. The first
calibration run here was single-scored and got its main conclusion backwards,
because one scorer silently skipped one arithmetic rule and nothing in a single
column of numbers can show you that. A second column is the cheapest error check
available.

**If your current writing fails, investigate.** Something is wrong, and it is
one of two things. Either the rubric is miscalibrated, carrying entries you
copied in from someone else's list that do not describe damage in your market,
or your own writing has drifted away from the standard you set. Find the entries
that fired and ask, one at a time, which of the two it is. Delete or reweight
the ones that do not survive the question, and fix the drift where the rubric
turns out to be right.

**If your older writing fails, that is the instrument working.** An earlier
draft of this document said that if your own best writing fails your own
rubric, the rubric is wrong. The calibration study above falsifies it. Four
articles by the author the rubric was derived from, written in 2024 before it
existed, scored between 2 and minus 33 across two independent scorers, and
what cost them was sentence construction rather than word choice. The rubric
is not wrong. His writing changed, and the rubric is a record of the change. A
style that your own past work fails is evidence the style is real rather than
decorative. A style that everything you have ever written passes is a
description of your habits, which is a different thing and a less useful one.

The failure mode to guard against is still the opposite one: tuning until the
rubric flatters you. Every deletion should be justified by a reason you could
say out loud to an editor. "This penalty fired on my best paragraph and my best
paragraph is fine" is a reason. "This penalty keeps firing" is not, and a rubric
that scores all of your drafts at 95 has stopped being a tool and become a
mirror.

### Maintain it

Voice drifts, and rubrics rot the same way positioning does. The maintenance
signal is specific: when you catch yourself editing the same thing out of every
draft, that edit is a new entry. Write it down the day you notice it, while you
can still name what was wrong.

Delete entries too. A ban you have not enforced in a year is either solved or
was never a real problem, and carrying it dilutes the ones that matter. Retired
product names belong in `Superseded Names` rather than in the ban list, where a
rename propagates through every skill on its own.

---

## Where this plugs in

`house-style` reads `brand-kit/voice.md` on every pass and scores against `The
Humanizer Rubric`. Every other skill defers to it for the final check, so a
change here reaches everything you write. `brand-kit-setup` writes `voice.md`
last, and will offer to derive your rules from your published work rather than
accepting the shipped defaults wholesale. Take that offer if you have the
corpus. It is the difference between copy that avoids sounding like a machine
and copy that sounds like you.
