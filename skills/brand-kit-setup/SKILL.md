---
name: brand-kit-setup
description: >-
  Fill in the shared brand kit that every other skill in this repo reads, then
  produce one real deliverable from it. Use when the user says "set up my brand
  kit," "configure this for my company," "onboard me," "fill in the brand kit,"
  "get started," "customize these skills for us," "I just cloned this," "make
  this write like my company," "import our positioning from our website,"
  "start from the example," "update our brand kit," "our positioning changed,"
  "add a named trap," "change our ICP," or "who are we again." Also use it
  whenever another skill reports that `brand-kit/` is missing, empty, or still
  full of template placeholders. It interviews the user, writes
  `brand-kit/brand.md`, `capabilities.md`, `icp.md`, `positioning.md`, and
  `voice.md`, validates its own output, and hands off to `content-writer` or
  `company-recon` for a first artifact.
---

# Brand Kit Setup

This is the first skill anyone runs. Someone cloned a repository of marketing
skills and none of them know anything about their company yet. By the end of
this session they should have five filled-in files and one artifact they would
actually send to a colleague.

Two failure modes to avoid, in order of severity. The first is inventing: a
statistic, a customer, a quote, or a capability that the user never gave you,
written into a file that nine other skills treat as fact. The second is
exhaustion: a forty-question survey that the user abandons at question twelve
with nothing on disk.

Everything below is designed against those two.

---

## 1. Start here

### 1.1 Read the templates before you ask anything

Read `brand-kit/README.md` and all five files in `brand-kit/`. They tell you
what each heading is for, and the guidance prose inside them is better than
anything you would improvise. Read `examples/ampfield/` too, at least
`positioning.md` and `capabilities.md`, so you know what depth looks like.
Ampfield is a fictional company that ships with this repository for exactly
this purpose.

### 1.2 Detect what state the kit is in

Check `brand-kit/` before you say hello.

| What you find | State | What to do |
|---|---|---|
| Files match the shipped templates, blanks and bracketed placeholders intact | Fresh | Offer the three paths in `Choosing a path` |
| Files contain real company content under every heading | Filled | Go to `Updating an existing kit` |
| Some files filled, others still template | Partial | Say which are done, offer to continue from the first unfilled one, and never touch the finished ones without asking |
| Files match `examples/ampfield/` | Example copied in | Treat as fresh, but say plainly that the kit currently describes a fictional company and any skill run now will write about it |

Never overwrite a file that has real content in it. That rule has no exceptions
in this skill.

### 1.3 Rules that hold on every path

State these to the user once, in your own words, near the start. They are the
reason the output is trustworthy.

- **Nothing gets invented.** No statistic, customer name, quote, analyst
  citation, or capability enters a file unless the user gave it to you or you
  read it on their own website with them watching. A number with no source is
  worse than a blank, because a blank stops a skill and a number does not.
- **Unsure gets written down as unsure.** The `Verified` column in
  `Headline Stats` exists for this. So does "none yet" in a `Proof` line. A
  hedge recorded in the file is a fact. A hedge smoothed away is a liability.
- **Honest placeholders, in these exact words**, so the other skills can
  recognize them:
  - `Verified` column: `Verified YYYY-MM` when the user has personally traced
    the number to its source, otherwise `Unverified: <reason>`. Anything
    beginning with `Unverified` is a publication stop.
  - Missing proof in a `What We Do` block: `Named-customer proof: none yet.`
  - An empty quote table: one row reading
    `No cleared quote yet. Do not publish from this table.`
  - A section that genuinely does not apply: keep the heading, write one line
    saying why it is empty.
- **Write early, write often.** Each file goes to disk the moment its answers
  are in. A user who quits after twenty minutes keeps everything they answered.
- **Their words, not yours.** When the user says something well, put their
  sentence in the file. This kit is going to be read back to them by nine
  skills for the next year. It should sound like the company.

---

## 2. Choosing a path

Offer all three in one short message, with the tradeoff visible. Do not
editorialize past two sentences each. Default to the interview if they do not
choose.

**1. Interview.** You ask, they answer, you write. Best when they know their
positioning and just need it captured, which is also the case that finishes in
one sitting.

**2. Start from the example.** Copy the Ampfield files in and swap them for
their company, section by section. Faster for people who would rather edit a
filled-in artifact than face a blank one, and it shows the target depth on every
line.

**3. Import from their website.** Fetch their own pages, pre-fill everything a
public site can honestly support, then interview only for the gaps. The fastest
path to something real, and the one to recommend when they have a site with more
than a homepage.

Paths mix. A website import that leaves `Channel Economics` empty is finished by
interview. Someone who starts from the example can still hand you a URL.

### 2.1 What to tell them about time

Give an honest range, not a single number, and say which case they are in as
soon as you can tell. Getting this wrong at the start is how a session ends with
a half-filled kit that nobody goes back to.

**Positioning already settled: 45 to 90 minutes.** They can say what they
believe, name the failures their buyers live with, and get someone to pull their
cost per acquisition and their platform targeting values. The session is
transcription. One sitting is realistic.

**Positioning not actually decided: several sittings across a week or two**, and
most of the work happens outside the interview. Say this plainly rather than
letting them discover it at question forty. `docs/positioning-framework.md`
carries the reason: most first-pass frameworks fail the test of whether a
competitor could adopt them unchanged, including ones that took a quarter and an
agency to produce, and the method it prescribes is to write the manifesto at
length and badly, derive the frame, the pillars, and the traps from it, then
rewrite the manifesto once they know what they believe. Two passes is normal.
Nothing you do in this session compresses that honestly.

Name the time sinks out loud so they can staff them:

- `The Manifesto`, `The Frame`, `The Pillars`, and `Named Traps` in
  `positioning.md`. One argument seen four ways, and the reason this is a week
  rather than an hour when the argument does not exist yet.
- `The Fit Matrix` in `icp.md`, in their ad platform's own taxonomy values,
  spelled the way the platform spells them.
- `Channel Economics` in `icp.md`, with real figures rather than estimates.

The last two need someone with ad platform access and someone with finance
numbers. Ask early whether that person is in the room. If not, mark both
sections for a follow-up rather than filling them with plausible guesses.

**Say what a half-filled kit produces.** Not errors. A missing heading stops a
skill and says so. A thin one does not: three exclusions under
`What We Do Not Do` instead of ten shows up as a draft claiming their category's
whole feature list, because a model asked to write about a category assumes the
category. That is why section 7.3 exists and why it is worth their attention at
the end.

---

## 3. Path 1: the interview

### 3.1 Order, and why it is this order

Do not go through the files in alphabetical order or in the order the README
lists them. Use this one.

1. **`brand.md`.** Concrete, factual, fast. Name, pitch, colors, CTAs. Nobody
   struggles here, and finishing a file in the first ten minutes changes how the
   rest of the session feels.
2. **`capabilities.md`.** Still factual. They know what their product does.
   Write `What We Do Not Do` before `What We Do`: exclusions are harder, they
   are the highest-leverage part of the whole kit, and they should get the
   fresher brain.
3. **`icp.md`.** Recall, not invention. Who buys, who blocks, what they search.
4. **`positioning.md`.** The hard one. By now they have described their product,
   their buyer, and their pitch out loud, which is the warm-up `The Frame`
   needs. Do not attempt this file cold.
5. **`voice.md`.** Mostly shipped defaults. Confirm, add three or four
   company-specific bans, capture retired names, done. A quick win to end on.

### 3.2 How to ask

- **Three to six questions per batch.** Number them so the user can answer "2
  and 4 only" and you can chase the rest.
- **Give an example answer with every abstract question.** "What is your
  category" gets a shrug. "What category do buyers think they are shopping for
  when they land on you, in the words they would type into a search box" gets an
  answer.
- **Accept partial answers and move.** Mark the gap, keep the momentum, return
  at the validation pass.
- **Never ask what you can read.** If they gave you a URL, fetch first and ask
  them to correct you. Correcting a draft is faster than composing from nothing,
  and the answers are better.
- **Say what you are about to write before you write it**, in one line, for
  anything the user did not phrase themselves.

### 3.3 Batches

#### `brand.md`, batch 1: identity

1. Company name, exactly as it should always be written, and any spellings you
   should treat as wrong.
2. What you sell, in two or three sentences. Mechanism, not benefit.
3. What category do buyers think they are shopping for when they find you.
4. Website, and the pronoun for the product. Most companies should use "it."
5. The hallway pitch: what you would say to someone who asked what your company
   does, thirty seconds, no slides, no framework names, no adjective you cannot
   prove.

If their hallway pitch comes out as marketing copy, ask it again as: "Say it the
way you would to a friend who does not work in your industry." Use the second
answer. Offer `Personification` and skip it without argument if it feels forced.
A generic personification is worse than an empty heading.

#### `brand.md`, batch 2: look and language

1. Brand colors as hex values, or a link to a brand page or stylesheet you can
   read them from.
2. Fonts for headings and body, and where they come from.
3. The exact CTA wording for a blog close, a landing page, social, email, and a
   report close, with destinations.
4. The footer string for generated documents.
5. How images made for the brand look: line weight, fill, what the subject is,
   and whether the art bleeds off the frame. Ask what they would never want to
   see in an image with their logo near it.
6. The hashtags social posts are allowed to use, split into branded and topical.

Fill the `Palette` table by role, not by name, because the skills use roles.
If they give you three colors, derive the tints and neutrals, show your work in
one line, and tell them to correct any that are wrong. Keep the semantic
positive, caution, and problem colors legible as status regardless of what the
accent is. If the accent is a yellow or a light green, say so and darken the
semantic version for text.

For `Calls to Action`, push for the exact words. "Learn more" tells the reader
nothing about what happens next. "Get started" on a product that needs a rollout
is a lie about the effort. If the CTA promises a meeting, ask how long it is and
who it is with, and write that down.

`Illustration Style` and `Hashtags` are the two headings people skip here, and
both of them stop a skill later. Do not skip them.

For `Illustration Style`, the four questions in the template are the whole
interview: line weight, fill, subject treatment, and edge behavior. Draft two or
three sentences from their answers and read it back as instructions a stranger
could follow, not as adjectives. Then push hardest on the exclusion list, which
is the half that actually controls the output, because image models default to
stock-photo realism and gradient soup unless told otherwise. If they have no
house style yet, write one line saying so under the heading rather than leaving
it blank, and offer to derive one on the first `social-generator` run.
`social-generator` stops outright when this heading is missing, so an empty
section with an honest line in it is strictly better than no section.

For `Hashtags`, ask for branded tags first, since those are just their own names
and take ten seconds, then harvest topical candidates from what they already
told you and offer them back for editing. `Search Terms` in `icp.md` is the
better source once that file exists, so it is fine to leave three or four
topical rows open and finish them after `icp.md`. Say out loud that
`social-generator` and `transcript-to-article` are forbidden from inventing a
tag: an empty table here means every social post ships without hashtags or stops
to ask. If the company genuinely does not use hashtags, record that in one line
under the heading, which is a different thing from an empty table and the skills
read it differently.

**Write `brand.md` now.** Show the user the `Company` and `Hallway Pitch`
sections as you wrote them and ask for one round of correction.

#### `capabilities.md`, batch 1: the exclusions

Open with the framing, because it is not obvious: a model asked to write about
their category will assume the whole category's feature list. The exclusions are
what stop that, and no other file can do it.

1. Name the adjacent categories you are not: the systems buyers already own and
   confuse you with. For each one, what stays theirs.
2. What do buyers ask for in demos that you do not do.
3. What does everyone in your category do that you deliberately do not.
4. What outcome do you never promise, even when a prospect asks you to.

Then apply the template's own test out loud: read the category's analyst
definition and write down every capability in it you do not have. Eight to
twelve exclusions is a strong list. Each one gets a reason, because the reason
is what a skill uses to write around the gap instead of into it.

#### `capabilities.md`, batch 2: what you do

For each capability or solution, in one pass per capability:

1. Name, exactly as it should be written.
2. What it does, one sentence, with the mechanism in it.
3. Who it is for, by role title.
4. The strongest verifiable proof: a sourced metric, a named customer who has
   agreed in writing to be named, or a behavior you can demonstrate live.
5. The URL.

If there is no proof, write `Named-customer proof: none yet.` and move on. Do
not upgrade a demo into a case study. Ask directly whether any named customer
has cleared their name for external use, and default to no.

Finish the file with `Link Map` and `Write About, Never Claim`. `Link Map` comes
straight from their site navigation. For `Write About, Never Claim`, ask what
topics they publish on for search where they do not sell anything. This is the
section that keeps SEO ambition from turning into a false product claim, and
most companies have never written it down.

**Write `capabilities.md` now.**

#### `icp.md`, batch 1: the fit matrix

1. Seniority you sell to, and the seniority that looks right and is not.
2. Company size band, and where the top and bottom edges fall.
3. Job function that owns the purchase, and the function that sits on the
   committee without ever starting the search.
4. Industries you win in, and the ones that look adjacent and never close.

Push for their ad platform's own taxonomy values here, spelled the way the
platform spells them. `linkedin-ads-audit` computes an ICP Fit Score by matching
these strings against a campaign export, so the user's own phrasing costs them
accuracy. If they do not run paid ads yet, use the platform values anyway and
say why.

Then ask for the paragraph under `Why these boundaries`. It is the single most
useful paragraph in the file, because it is what a skill reads when a real
campaign row does not match any row in the table. A good version explains what
the boundary is a proxy for.

#### `icp.md`, batch 2: committee, terms, competitors, economics

1. For each of the four role groups, the titles, what they care about, and what
   kills the deal for them. Ask about title fragmentation: the same job is one
   person at 600 employees and four people at 6,000.
2. Brand terms, category terms, competitor terms, and negative terms. Spend the
   most time on negatives. Job seekers, students, tutorials, free templates, and
   consumer versions of the same words sit directly next to category terms and
   quietly eat a paid budget.
3. Competitors, split into who they lose deals to and who merely shows up in
   search and analyst coverage. Ask what they lose to when they lose to nobody:
   spreadsheets, an internal build, or no decision. That answer belongs in the
   table and is usually the most common competitor in the list.
4. `Channel Economics`: acceptable cost per acquisition band, the red line,
   sales cycle, average deal size, monthly paid budget, brand impression share
   floor. Anything they do not know stays blank with a note, not a guess. An
   invented CPA band turns every audit verdict into fiction.
5. Whose personal accounts run thought leadership campaigns, if any. Those get
   exempted from cost per acquisition verdicts, and the skills need the exact
   account names to find them in an export.

**Write `icp.md` now.**

#### `positioning.md`: see the next section

This file gets its own treatment because three of its sections cannot be asked
for directly.

#### `voice.md`, last

1. Read them the shipped defaults in `Tone`, `Grammar Constraints`, `Pacing`,
   and `Clarity` in summary. Ask what they disagree with. Most companies change
   nothing, and that is a valid answer.
2. **Offer the better path.** Ask whether they have published writing: articles,
   newsletters, conference talks, anything with their name on it. If they do,
   offer to read three to five pieces they name or paste and derive their actual
   rules from them instead of accepting the shipped defaults wholesale. Measure
   sentence and paragraph length, how pieces open and close, punctuation habits,
   the words they reach for and the ones that never appear, and how they handle
   numbers and transitions. Then write those findings into `Tone`,
   `Grammar Constraints`, `Pacing`, `Clarity`, and `Banned Words and Phrases`.
   Skip ghostwritten pieces and anything an AI has already touched; both poison
   the sample. `docs/voice-calibration.md` has the full method, and it is worth
   pointing them at if they would rather do this properly on their own time. If
   they have nothing published, say so plainly and move on. The defaults are a
   reasonable starting point, not a standard.
3. Ask for two or three tone lines that are true of their company and not of
   their competitors. Generic tone lines are worse than none. If step 2 ran, the
   corpus usually answers this on its own.
4. Ask for the phrases their own team overuses, the category noise everybody in
   their market writes, and any wording they have retired. This is where
   `voice.md` earns its keep. The shipped ban list catches machine writing; only
   they can catch their own tics.
5. Ask for product names they have renamed, with the old name, the new name, and
   the month. Fill `Superseded Names`. A rename recorded here propagates through
   every skill.
6. Add any capitalization rules: which product names take title case, which
   terms stay lowercase in running text, and how they write numbers.

Keep the shipped defaults intact and put company-specific entries under them,
the way `examples/ampfield/voice.md` does. Do not rewrite the defaults to match
the additions. The one exception is a rule the user's own writing contradicts
outright: replace it, and say which default you replaced and why.

**Write `voice.md` now.** The kit is complete. Go to the validation pass.

---

## 4. The hard sections, and how to help

`The Manifesto`, `The Frame`, `The Pillars`, and `Named Traps` are where
onboarding sessions die. Nobody can answer them cold, and a user who is asked to
will either produce marketing copy or stall.

The move is the same in all four: **draft two or three options from what they
have already told you, show the options side by side, and let them pick and
edit.** They have already given you the hallway pitch, the exclusions, the
capabilities, and the buyer. That is enough raw material. Choosing between three
concrete drafts is a different task from composing from nothing, and it
produces better answers in a fifth of the time.

Say so when you do it. "Here are three, built from what you already told me.
Pick one and tell me what is wrong with it" is an honest and effective prompt.

**Work them in this order: manifesto, frame, pillars, traps.** They are one
argument seen four ways. The manifesto is the argument, the frame is the noun
the argument needs, the pillars are the qualities it implies, and the traps are
the failures it predicts. Starting with the pillars is the common instinct and
it is why these sessions stall: a pillar is a quality of something, and until
the argument exists there is nothing for it to be a quality of, so the user
produces adjectives.

**If the user would rather work this out properly than answer questions live**,
point them at `docs/positioning-framework.md` and offer to pick the interview up
when they come back. It walks the same four sections at length, with the
Ampfield example carried through and one trap derived from scratch. Some people do better
composing on their own time, and a user who arrives with a manifesto already
drafted turns the rest of this section into an edit rather than an invention.

### 4.1 The Manifesto

The argument underneath everything else: what they believe about how this work
should be done, and why the way it is done today is wrong. Do it first. Every
section after this one gets easier once it exists, and a user who cannot answer
`The Frame` can almost always answer "what is everyone in your market doing that
you think is wrong."

`The Manifesto` asks five things. Ask them in this order, conversationally, and
write their answers down in their words before you shape anything:

1. **The status quo we reject.** What most companies in their category do today.
   Push for the behavior, not the vendors.
2. **Why it persists.** The beat that separates a manifesto from a complaint,
   and the one they will skip. If their answer is that the market is behind or
   buyers do not understand yet, ask again for the incentive, the constraint, or
   the historical accident. Then check the answer is fair enough that someone
   currently doing it would agree with the description. An argument that treats
   the status quo as stupid persuades nobody living inside it.
3. **What we believe instead.** One proposition.
4. **What has to change.** A specific behavior someone could act on Monday, not
   a vague outcome. "Better visibility" is not a change.
5. **What we would still argue if we sold nothing.** Apply the test out loud:
   delete the product from every sentence and read back what survives. If
   nothing survives, say so plainly and go back to the second question, because
   what you have is a brochure rather than an argument.

Then draft the prose block yourself, three to six sentences, in the voice they
used when they answered rather than the voice they use on their website. Read it
back and ask what is wrong with it. Expect to redraft after the traps exist:
that is normal, and it is worth telling them so up front.

Two rules to state while you write it. It is never published under a heading
that says Manifesto: it is the argument they make repeatedly in different
clothes. And the content skills read it whenever a piece needs a point of view
rather than a feature list, which is most of the time, so a thin manifesto shows
up later as thin thought leadership.

### 4.2 The Frame

The canonical noun is the single word or short phrase they want to own, plus one
sentence defining it that never varies. Read the manifesto back first: the frame
is usually already in it, unnamed or named three different ways.

Ask two warm-up questions:

1. What does the office or the team do today, by hand, that would be
   unnecessary if you worked.
2. What changed in the last eighteen months that makes this urgent now.

Then draft. Give three candidate nouns with a one sentence definition each, and
label what each one costs:

- One drawn from the object their product creates or maintains.
- One drawn from the failure their product removes.
- One drawn from the moment in the workflow that they own.

Say plainly which you would pick and why, then let them overrule you. Test the
winner against three questions before writing it down:

- Would two people on their team define it the same way. If not, they do not
  have a frame yet, and the definition needs another pass.
- Is it a noun a buyer could repeat to their boss without your logo attached.
- Does it survive the `Never say` list, or is it a phrase the market has already
  burned out.

Write `What it replaces` as the thing buyers do today, not as a competitor.
Write `Why now` as events, not as a trend. "The market is shifting" is not a
why now. Three specific changes with dates attached is.

### 4.3 The Pillars

Two to four qualities that everything they say ladders up to. Internal names
only. They never appear in customer-facing copy, and `house-style` penalizes any
draft that exposes them.

Do not ask "what are your pillars." Instead, read back the capabilities and the
exclusions you have already written and say: "Three things keep recurring in
what you have told me. Here is what I would call them." Propose a set, with a
one line description each, and offer an alternative cut of the same material so
they can see there is a choice.

For each pillar the user accepts, fill four fields and check each one:

- **What it means.** One paragraph. If it could be said by a competitor
  unchanged, it is not a pillar, it is a category attribute.
- **The proof.** A mechanism, a demonstrable behavior, or a sourced number. If
  the proof is "we are really good at it," the pillar is aspiration and should
  be cut or renamed.
- **The failure it prevents.** Usually the sharpest of the four. It is also
  where named traps come from, so keep notes.
- **Vocabulary that signals it.** Six to ten words and phrases. These are what
  the content skills reach for when they need to sound like this quality without
  naming it.

Three pillars is the common answer. Two is fine. Four is the limit, and a fourth
that overlaps the third should be merged rather than kept.

### 4.4 Named Traps

The most portable technique in the kit, and the one people most need taught.

**Teach it in one line.** A trap is a two or three word noun phrase for a
routine failure your buyer already lives with, named precisely enough that they
recognize themselves before you have said anything about your product.

**Then demonstrate it.** Work one example end to end, out loud, so they can see
the mechanism. Use a neutral hypothetical rather than their business, so they
watch the move instead of arguing with the content:

> Say a company sells security review software. Its buyers fill out the same
> security questionnaire for a different customer every quarter, copying answers
> from the last one, which was itself copied from the one before. Nobody calls
> this anything. It is just what the week before a renewal looks like.
>
> Name it the Questionnaire Retread. Now write the four beats.
>
> **The setup:** a new questionnaire arrives with 240 questions, 200 of which
> were answered nine weeks ago for someone else.
> **Why it fails:** the answers are copied, so they age silently, and the one
> that went stale is discovered by an auditor rather than by the team.
> **The difference:** answers live in one reviewed place with a date on each
> one, so the retread is a review instead of a rewrite.
> **Use when:** the reader is the person who fills the thing out, not the person
> who signs it.
>
> Two things make it work. It names a failure the reader has lived through, and
> it does not mention the product until the third beat.

**Then draft theirs.** Propose three to five traps built from `The failure it
prevents` in each pillar and from the exclusions in `capabilities.md`. Give each
one a name and the four beats, filled in from what they told you. Ask them to
kill the ones that do not ring true, rename the ones that are close, and add any
they already say out loud in sales calls that you missed. The ones they already
say are the best ones in the table.

Test each candidate against four checks:

- Would a buyer recognize it before you explained it. If it needs a paragraph of
  setup, it is a concept, not a trap.
- Is it a failure, not a feature gap. "No API" is a complaint. A trap describes
  what goes wrong in the buyer's week.
- Does it belong to the category rather than to one competitor. Traps that name
  a specific vendor stop working the moment the prospect uses a different one.
- Can you say it twice in a conversation without wincing.

Aim for four to eight. More than a dozen and none of them stick, and the content
skills start stacking them, which reads like a glossary of things you invented.

### 4.5 The rest of `positioning.md`

The remaining sections are recall, not invention, and go quickly once the frame
exists.

- **`Naming and Usage Rules`.** Always say, never say, capitalization, taglines
  in priority order with a use case for each, and a three sentence elevator
  pitch. Skills use taglines verbatim or not at all, so get the exact words.
  Check the pitch and the taglines against `Grammar Constraints` in `voice.md`
  yourself: they are quoted verbatim into published copy, so a stray em-dash in
  a tagline ships.
- **`Categories We Are Not`.** Pull these from the exclusions you already wrote
  in `capabilities.md`, and ask only for the separating line. One sentence per
  category, said to a buyer who currently owns that category's product.
- **`External Validation Quotes` and `Internal Quotes`.** Verbatim, linked,
  dated, never edited for fit. If they have none, leave the placeholder row and
  say plainly that no skill will publish from an empty table. Ask separately
  about clearance for internal quotes and default to not cleared.
- **`Headline Stats`.** Ask for every number they are willing to publish, then
  for each one, ask where it came from. A number whose source is "I think I saw
  it in a deck" gets written down with `Unverified: source not traced` in the
  `Verified` column. Say out loud that you are flagging it and why. Never delete
  a flag to make a table look finished.
- **`Where to Start`.** The lowest friction entry point, then the path. Buyers
  do not buy the whole vision on day one, and the content skills need to know
  what step one is.
- **`Canonical Vocabulary`.** The terms, the definitions, and the words never to
  use instead. Harvest most of this from what they have already said in the
  session. When they corrected your word choice during the interview, that
  correction is a vocabulary row.
- **`Anti-Patterns`.** Banned product framings, banned market positioning,
  banned outcome language. Ask what a well-meaning new hire might write about
  them that would be wrong, and ask for the claim their legal or sales leader
  would object to.
- **`Maintenance`.** Owner, review cadence, what needs sign-off. Then open the
  `Changelog` with a dated first row recording that the kit was created.

**Write `positioning.md` now.**

---

## 5. Path 2: start from the example

For people who would rather edit than compose.

Copy the five files by name, so the example README does not replace the real
`brand-kit/README.md`:

```
cp examples/ampfield/{brand,voice,positioning,icp,capabilities}.md brand-kit/
```

Then say clearly, once: until these are replaced, every skill in the repository
will write confidently about a fictional field operations company. This is not a
warning to be polite about.

Walk the swap in the same order as the interview, one file at a time, using the
Ampfield version as the prompt rather than as a template to imitate:

1. `brand.md`. Name, pitch, palette, fonts, CTAs, `Illustration Style`, and
   `Hashtags`. Fastest to change and it changes how every deliverable looks.
   The two easiest to leave as Ampfield's are the last two, and both of them
   are read verbatim into image prompts and social posts.
2. `capabilities.md`. Replace `What We Do Not Do` first. Ampfield's eleven
   exclusions are the best demonstration in the repository of how specific this
   list should be, so read two of them out loud before asking for theirs.
3. `icp.md`. Replace `The Fit Matrix` with their taxonomy values, then the
   committee, then the search terms, then the whole `Competitors` table. Every
   competitor and URL in the example is invented and uses a reserved domain.
4. `positioning.md`. `The Manifesto` first, then `The Frame`. Then use section 4
   of this skill for the pillars and traps, with one difference: they have six
   worked traps in front of them, so ask which of the six has an equivalent in
   their business. That question works far better than a blank table.
5. `voice.md`. Keep the shipped defaults, replace the Ampfield additions, empty
   the `Superseded Names` table and refill it with their renames.

**The trap to avoid on this path** is leaving example content in place because
it reads well. After each file, grep for the example company name and for
`.example`, and check `Headline Stats` for any row still carrying the example
flag. A number that came from a fictional company is the worst possible thing
to inherit, and it will read as perfectly plausible.

---

## 6. Path 3: import from a website

The most impressive path, and the one with the most ways to go wrong. Fetch
their pages, pre-fill what a public site can honestly support, tell them exactly
what you inferred and from where, then interview only the gaps.

### 6.1 What to fetch

Ask for the domain and fetch five pages, in this order:

1. The home page.
2. The about or company page.
3. The pricing page, if there is one.
4. Two solution, product, or use case pages, chosen as the two most prominent in
   the main navigation.

Then, if they exist and are one click from those five: a comparison or
alternatives page, and a customers or case studies page. Both are unusually
high value and neither is guaranteed to exist.

If no web fetch tool is available in the session, ask the user to paste the
pages. The reading instructions below are the same either way.

### 6.2 What to read on which page

**Home page.**
- Hero headline and subhead: a candidate tagline, and the raw material for
  `Hallway Pitch`. Draft the pitch, do not paste the hero. A hero is written for
  a scroll, and the hallway pitch is written for a person.
- The primary button text and its destination: the landing page entry in
  `Calls to Action`. Take the words exactly as written.
- Main navigation labels: the capability names for `What We Do`, and the rows of
  `Link Map`. Navigation is the company's own list of what it sells.
- The problem section, if there is one: candidate named traps. Companies
  frequently describe a trap on the home page without naming it, which is the
  easiest trap draft you will ever get.
- Footer: legal entity name, and the shape for `Document Footer`.
- Colors and fonts: only if you can read the stylesheet or a brand page. Present
  any hex value you extracted as a proposal to confirm, never as a fact. Brand
  colors picked out of an image or a screenshot are guesses.

**About page.**
- Founding story and the "why we exist" paragraph: raw material for `Why now`
  in `The Frame`, and often the honest version of the pitch.
- Employee count, funding, office locations, and years in business: context for
  the interview, not content for the kit.
- Leadership titles: candidates for `Internal Quotes` and for thought leadership
  accounts. Titles only. Do not write a person's name into the kit without the
  user telling you to, and do not attribute a quote to someone based on a
  website bio.

**Pricing page.**
- The pricing unit: per seat, per user, per device, per transaction, per site.
  This tells you what the product actually meters, which is often a sharper
  description of what it is than the marketing copy is.
- Tier names and what separates them: the shape of `Where to Start`, since the
  entry tier is usually the low friction entry point.
- Published numbers only. Published prices are facts about the page. Deal size,
  contract value, and cost per acquisition are not on a pricing page and must
  never be derived from one.
- If pricing is hidden behind a form, that is itself useful: it tells you the
  sales cycle is human, and it goes in the interview list, not the kit.

**Solution and product pages.**
- One `What We Do` block per page: name, what it does with the mechanism, who it
  is for, and the URL. The mechanism sentence is usually two or three paragraphs
  down, under the benefit copy.
- The role named in the copy: rows for `Buying Committee`. Solution pages are
  usually written at one buyer, and the page will say which.
- Named problems and the language used for them: candidate entries for
  `Named Traps` and for `Canonical Vocabulary`.
- Any integration or "works with" list: raw material for the exclusions, because
  a company that integrates with a category usually does not compete with it.
  Confirm before writing it as an exclusion.
- Internal links: the rest of `Link Map`.

**Comparison or alternatives page, if it exists.**
- Named competitors: rows in `Competitors`. Take only the ones the company
  itself names. Tier them in the interview, because a page cannot tell you who
  they actually lose deals to.
- The differentiation claims: draft rows for `Categories We Are Not`, treated as
  candidate separating lines to confirm rather than as final wording.

**Customers or case studies page, if it exists.**
- Numbers with a named source: candidate rows for `Headline Stats`, each with
  the page URL in the source column and `Unverified: from own site, primary
  source not traced` in the `Verified` column until the user confirms otherwise.
- Quotes: only verbatim, only with the URL and the publication date, only if the
  attribution is printed on the page.
- Logos and named customers: list them for the user to confirm, and write none
  of them into the kit until they say the name is cleared for external use.
  A logo on a website is not clearance.

### 6.3 What must never be inferred

Ask for every one of these. None of them can be read off a website, and each one
is a place where a plausible guess becomes a published lie.

- **Any statistic that is not printed on the page.** Do not compute, scale,
  round, or reason toward a number. A number on the page is recorded as coming
  from the page, flagged unverified, and nothing else.
- **Customer names.** Not from a logo wall, not from a case study headline, not
  from a testimonial. Clearance is a decision a person makes.
- **Quotes.** Never reconstruct, never trim to fit, never attribute a marketing
  sentence to an executive because their photo is nearby.
- **`What We Do Not Do`.** The absence of a feature on a website means the
  website is short, not that the product lacks it. This entire section comes
  from the interview, always.
- **`Channel Economics`.** Cost per acquisition, red line, sales cycle, deal
  size, budget, impression share. None of these exist on a public site. Leave
  them blank with a note rather than modeling them from a pricing page.
- **`The Fit Matrix` boundaries.** A site tells you which industries a company
  talks to. It does not tell you the seniority, size bracket, or function that
  converts, and it never tells you what is `Mixed` versus `Non-ICP`. Draft only
  the industry row, mark it as a draft, ask for the rest.
- **Competitors the company does not name.** Inferring a competitive set from
  category resemblance produces a table the user will not trust, which
  contaminates everything downstream that reads it.
- **`Superseded Names`.** A live site shows current names. Retired names are
  interview only.
- **Internal quote clearance.** Default is not cleared.
- **Anything on a page you did not actually fetch.** If a fetch failed, say the
  fetch failed. Do not fill the gap from what the rest of the site implies.

### 6.4 How to hand the import back

Write the files, then show the user a single table: every section you filled,
where it came from, and your confidence. Three levels are enough.

| Confidence | Meaning |
|---|---|
| Quoted | Copied verbatim from a page. Their words. |
| Drafted | Written by you from page content. Needs their edit. |
| Asked | Not inferable. In the interview queue. |

Then interview the `Asked` rows in the batch order from section 3, skipping
everything already filled. A good import leaves ten to fifteen questions, which
is a fifteen minute conversation rather than a forty five minute one.

---

## 7. Validate your own output

Run this after the last file is written, on every path. Report it as a short
list, not a wall of checkmarks.

### 7.1 Structural checks

**Every heading present, in template order.** Compare against the shipped
templates. A skill looking for a heading and not finding it will make claims
nobody authorized.

- `brand.md`: `Company`, `Hallway Pitch`, `Personification`, `Palette`,
  `Typography`, `Illustration Style`, `Hashtags`, `Document Footer`,
  `Calls to Action`
- `voice.md`: `Tone`, `Grammar Constraints`, `Pacing`, `Clarity`,
  `Formatting Preferences`, `Banned Words and Phrases`, `AI Tells to Avoid`,
  `Superseded Names`
- `positioning.md`: `The Frame`, `The Manifesto`, `Naming and Usage Rules`,
  `The Pillars`, `Named Traps`, `Categories We Are Not`,
  `External Validation Quotes`, `Internal Quotes`, `Headline Stats`,
  `Where to Start`, `Canonical Vocabulary`, `Anti-Patterns`, `Maintenance`,
  and `Changelog` beneath it
- `icp.md`: `The Fit Matrix`, `Buying Committee`, `Search Terms`,
  `Competitors`, `Channel Economics`
- `capabilities.md`: `What We Do`, `What We Do Not Do`, `Link Map`,
  `Write About, Never Claim`

**No leftover template scaffolding.** Search every file for underscore blanks,
for bracketed placeholders such as a capability name in square brackets or a
pillar number in square brackets, for a hex value that is still underscores, and
for any square bracketed instruction that came from the template. Every hit is
either filled or converted into a written line explaining why the section is
empty.

**Every table has real rows.** An empty table is worse than a missing one,
because it looks answered. Any table that has to stay empty gets one row saying
so in plain words.

### 7.2 Content checks

**No stat without a source.** Walk `Headline Stats` and confirm every row has a
source column entry. A row with a number and an empty source gets removed or
sourced, never left.

**No unverified stat left unflagged.** Every row whose source the user did not
personally trace carries `Unverified:` and a reason. If any row still carries an
example flag copied from the Ampfield kit, it is example data and must be
deleted.

**No invented anything.** Re-read every named customer, quote, and analyst
citation and confirm the user gave it to you in this session. If you cannot
point to where it came from, cut it.

**Quoted strings obey the kit's own grammar.** Taglines, the elevator pitch, the
hallway pitch, and CTA text get quoted verbatim into published copy. Check them
against `Grammar Constraints` in `voice.md`, particularly the em-dash rule.

**One fact, one home.** If the differentiator appears in both `positioning.md`
and `capabilities.md` in different words, they will drift. Pick the file that
owns it and point the other at it.

**Cross-file consistency.** The product pronoun in `Company` matches every use
elsewhere. Capability names in `What We Do` match `Link Map`, match
`Naming and Usage Rules`, and are absent from `Superseded Names`. Traps
referenced in `Link Map` exist in `Named Traps`. Competitor names in `icp.md`
match the categories in `Categories We Are Not`.

### 7.3 Report what is thin, and why it matters

This is the part users remember. Do not report a gap as a gap. Report it as the
thing that will not work.

Name the heading, name the skill that reads it, and name what that skill cannot
do. For example:

- "`The Fit Matrix` has an industry row and nothing else, so `linkedin-ads-audit`
  cannot compute an ICP Fit Score. It will be able to tell you a campaign is
  expensive, and not whether it reached anyone who buys."
- "`Headline Stats` is empty, so `content-writer` will write around every number
  and the drafts will read softer than they should."
- "`External Validation Quotes` has only the placeholder row, so nothing can
  quote a third party. Your own claims will carry the whole argument."
- "`Channel Economics` has no red line, so both ads audits can report cost and
  neither can recommend a cut."
- "`What We Do Not Do` lists three exclusions. Three is thin for a category this
  crowded, and the gap shows up as invented features in drafts rather than as
  an error."
- "`Hashtags` has branded tags and no topical ones, so `social-generator` will
  ship LinkedIn posts carrying only your own name. It will not invent the rest."
- "`Illustration Style` is one line saying you do not have one, so
  `social-generator` will stop before writing an image prompt and ask you to
  write it with it."

Rank them by consequence, keep it to the five that matter, and offer to fix the
top one right now.

---

## 8. Finish with a real deliverable

Do not end on a validation report. The point of the session is getting from a
fresh clone to something usable in one sitting, and a filled-in kit is not yet
that.

Offer two, and pick for them if they hesitate:

**1. A short article.** Run `content-writer` for a 700 to 900 word piece built
on the strongest named trap in the kit, aimed at the tier one buyer in
`The Fit Matrix`, closing with the blog CTA from `Calls to Action`. Then run
`house-style` as the final pass and report the score. This is the better default
when the kit came out strong, because it exercises the frame, a trap, the
vocabulary, and the voice at once.

**2. Recon on a competitor.** Run `company-recon` against a URL from the
`Competitors` table in `icp.md`. Better when `positioning.md` is thin, because
it reads their competitor through their kit and usually surfaces two or three
things the interview missed. It also gives them something to react to, and
reacting is easier than composing.

When the deliverable lands, say which parts of the kit did the work and which
parts were noticeably empty. That connection, seen once on a real artifact, is
what makes someone go back and finish `Headline Stats`.

Close by telling them what to run next and what each skill needs:

- `house-style` on anything they paste, working from `voice.md`.
- `social-generator` for short posts, working from the traps, the taglines,
  `Illustration Style`, and `Hashtags`.
- `transcript-to-article` for a recorded call or podcast.
- `competitive-white-space` once `Competitors` in `icp.md` is filled.
- `google-ads-audit` and `linkedin-ads-audit` once `The Fit Matrix` and
  `Channel Economics` are complete.

---

## 9. Updating an existing kit

A filled-in kit is the common case after the first week. Positioning changes, a
product gets renamed, a stat gets sourced, a new trap starts landing in sales
calls. Handle it as an edit, never as a rerun.

**Never silently overwrite a filled-in file.** If the user asks to "redo the
brand kit," ask whether they mean edit the existing one or start over. If they
mean start over, say what will be lost and get an explicit yes.

The flow:

1. **Read the current kit first.** All five files, before asking anything. Then
   say what you found in two or three lines, so they know you are working from
   the real thing.
2. **Ask what changed.** One question. Let them describe it in their own words
   rather than picking from a menu of sections.
3. **Name the sections that change**, by heading, before you edit. A rename
   touches `Naming and Usage Rules`, the relevant `What We Do` block,
   `Link Map`, `Canonical Vocabulary`, and `Superseded Names` in `voice.md`. A
   new buyer touches `The Fit Matrix`, `Buying Committee`, and usually
   `Search Terms`. Say the full list and let them approve it, because the second
   order edits are the ones that get missed and then contradict each other for
   six months.
4. **Edit in place.** Change the lines that change. Leave the rest byte for
   byte. Do not reformat a table, rewrite a paragraph you find weak, or
   reorder sections while you are in there.
5. **Add a dated row to `Changelog`** under `Maintenance` in `positioning.md`,
   for every material change, including ones that happened in another file. The
   changelog is the kit's single history, and a rename recorded only in
   `voice.md` is invisible in six months. Write the date, what changed, and
   why. The why column is the one that will be read.
6. **Run the validation pass** from section 7 on the files you touched, with the
   cross-file consistency checks in full. Renames are where kits break.

Two specific updates worth handling well:

- **A stat gets verified.** Change the `Verified` column from `Unverified` to
  `Verified YYYY-MM`, add the real source, and log it. This is the most valuable
  edit anyone makes to a brand kit, and it takes ten seconds.
- **A trap stops working.** Delete it rather than rewriting it into something
  vague, and log why. A trap nobody repeats back is taking up room that a
  working one needs.

---

## 10. Cross-references

All optional. This skill works alone.

- `house-style` runs the final voice pass on anything the kit produces.
- `content-writer` writes the first long-form asset from the finished kit.
- `company-recon` reads a competitor URL through the kit.
- `competitive-white-space` needs `Competitors` in `icp.md`.
- `social-generator` needs `Named Traps`, `Calls to Action`,
  `Illustration Style`, and `Hashtags`.
- `transcript-to-article` needs `voice.md` and the frame.
- `google-ads-audit` needs `Search Terms` and `Channel Economics`.
- `linkedin-ads-audit` needs `The Fit Matrix` and `Channel Economics`.

Anything not in `skills/` does not exist. Do not reference it.
