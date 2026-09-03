# Calibrating Voice

`docs/positioning-framework.md` covers the argument: what you believe and why a
competitor cannot simply agree with it. This file covers the other half of
sounding like yourself, which is the writing itself. Same problem, different
layer. Nobody can hand you a competitive argument, and nobody can hand you a
voice either.

The difference is that this repo ships a voice anyway. `brand-kit/voice.md`
arrives with real rules under `Tone`, `Grammar Constraints`, `Pacing`,
`Clarity`, `Banned Words and Phrases`, and `AI Tells to Avoid`, while every
other kit file arrives mostly blank. The scoring version of those rules, the 25
weighted patterns in `The Humanizer Rubric` inside `skills/house-style/SKILL.md`,
ships filled in too. That is a deliberate choice and it comes with an
obligation: to say whose voice it is, how it was built, and how to replace it.

The worked example throughout is Ampfield, the fictional field operations
platform for solar and HVAC contractors documented in `examples/ampfield/`.

---

## Where the rubric came from

Scott King wrote the 25 patterns by hand, one at a time, over roughly a year of
editing machine-drafted B2B marketing copy against his own published articles.
There was no source list. The method was repetition: draft, edit, notice that
the same repair was being made for the fourth time that week, stop and name it.

Naming was the actual work. "This sounds like AI" is not usable by a scoring
panel. "A final paragraph that restates what was just said" is, because a reader
can find it, a writer can cut it, and a model can flag it. Most of the 25
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

The weights are not frequency counts. If they were, filler phrases and title
case would dominate, because those are the most common things in any machine
draft. The weights measure damage: how much credibility a single instance costs
with a technical B2B reader who is deciding whether the writer knows the
subject.

Two contrasts make the scale legible.

**Scaffolding exposure costs 10.** Pattern 25 fires when internal structure
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

**Title case in headings costs 3.** It is a house convention, it appears
constantly, and a reader who notices it thinks the writer used a different style
sheet, not that the writer is a machine. Cheap to fix, low damage, low weight.

The pattern holds across the table. Entries that make a reader doubt the author
is a person at all sit at 8 to 10: the contrast formula, generic positive
conclusions, "in today's" openers, collaborative artifacts left in the asset.
Entries that are stylistic irritants sit at 3 to 5: copula avoidance, elegant
variation, false ranges, question-as-opening.

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
phrases your own team overuses.

**Keep, unless you have a real reason: the structural tells.** Most of patterns
16 through 25, and most of `AI Tells to Avoid`, are close to universal. The contrast
formula is hollow in every market. A concluding paragraph that restates the
article wastes the last position on the page whoever you sell to. Assistant
chatter surviving into a published asset is never acceptable. These are not
matters of taste, and lowering their weights usually means you have decided you
would rather ship than revise.

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
score it. This is the honest test and it is the only one that matters.

It should score well. If your own best writing fails your own rubric, the rubric
is wrong, not the writing. Find the entries that fired and ask, one at a time,
whether that pattern actually damages you or whether you copied it in from
someone else's list. Delete or reweight the ones that do not survive the
question.

If it scores well, run three more pieces before you trust it. A single pass can
be luck.

The failure mode to guard against is the opposite one: tuning until the rubric
flatters you. Every deletion should be justified by a reason you could say out
loud to an editor. "This penalty fired on my best paragraph and my best
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
