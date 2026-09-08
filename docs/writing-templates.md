# Writing Templates

Ten skeletons for the assets B2B marketing teams produce most, plus the length
target for each one. They carry structure and length, nothing else. Every word
of content comes from `brand-kit/`.

This file is the shared reference for template shape and asset length.
`house-style` reads it to pick and check a template, `content-writer` reads it
to build one, and `social-generator` and `transcript-to-article` take the
LinkedIn post spec and their length targets from it. None of the four restates a
template here, so changing one in this file changes it for all of them.

For pillar articles, cluster pages, and anything written for answer-engine
extraction, `docs/aeo-style-guide.md` owns the structure. Their length targets
still live in the table below.

A template is a starting shape, not a contract. Drop a beat that does not apply
rather than padding it with filler. What you should not do is reorder them, as
the order is doing most of the work.

---

## Length targets

One figure per asset type. This table is the only place these numbers are set.
Every skill and every other doc points here rather than restating them.

| Asset | Target |
|---|---|
| Article or blog post | 900 to 1,400 words |
| Cluster or supporting article | 900 to 1,400 words |
| Pillar article | 1,900 to 3,500 words |
| LinkedIn post | 120 to 220 words |
| Email body | Under 150 words |
| Cold outreach | Under 90 words |
| Case study | 600 to 900 words |
| Executive brief | One screen, no scrolling |
| Whitepaper | Set by the argument. Longer than an article, shorter than a pillar guide |

A landing page carries no word target. Each section holds one idea and stops.

---

## 1. Article

The default long-form shape. Length is in the table above. For pillar-length
pieces and answer-engine structure, use `docs/aeo-style-guide.md` instead, which
supersedes this template.

1. **Hook.** A blunt truth or a direct question. One or two sentences.
2. **Stakes.** What it costs the reader to leave this alone.
3. **Misconception.** What the market currently believes.
4. **Reality.** What is actually true, and why the misconception persists.
5. **Framework.** The mechanism, as a sequence or a comparison.
6. **Example.** One concrete scenario, followed all the way through.
7. **Transformation.** What changes for the reader, stated as before and after.
8. **CTA.** One next step.

Pull the hook from a named trap in `Named Traps` in `brand-kit/positioning.md`.
Pull the CTA from `Calls to Action` in `brand-kit/brand.md`.

The example is where most drafts fail. One scenario carried to its conclusion
beats three sketched and abandoned.

---

## 2. LinkedIn post

One idea. Line breaks between beats, not paragraphs. Length is in the table
above, and it is a word count rather than a character budget for one reason: a
600-character post cannot carry the seven beats below plus the steps, and the
beats are what make a post argue instead of announce.

1. **Hook.** One line. It has to survive being read alone, because the rest is
   behind a "see more."
2. **Problem.** The situation the reader is in.
3. **Consequence.** What it costs, specifically.
4. **Why the common approach fails.** One or two lines. Fair to the approach.
5. **Your framing.** The reframe, the named trap, or the mechanism.
6. **Steps or examples.** Three to four short lines.
7. **CTA.** A link, a question, or nothing. Nothing is a valid choice.

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

No hashtag walls. No "thoughts?" as a closer.

---

## 3. Landing page or feature page

- **Headline.** Eight words or fewer.
- **Subhead.** One sentence expanding the headline.
- **Direct value statement.** What the reader gets, above the fold, in one
  sentence. Not a tagline, unless the tagline happens to say it.
- **Pain.** Two or three lines naming the situation. Use the buyer's words.
- **Solution.** The mechanism, not the feature list.
- **Use cases.** Three, each one sentence, each naming a role.
- **Differentiator.** The separating line from `Categories We Are Not` in
  `brand-kit/positioning.md`.
- **Proof.** Whatever is real: a metric from `Headline Stats` in
  `brand-kit/positioning.md` with its source, the `Proof` line in the relevant
  `What We Do` block in `brand-kit/capabilities.md`, a named customer who agreed
  to be named, or a demonstrated behavior. If there is none, cut the section
  rather than filling it.
- **CTA.** One primary action, repeated at most twice on the page.

Pull the CTA wording verbatim from `Calls to Action` in `brand-kit/brand.md`. A
page that invents its own CTA has just created a second one to maintain.

---

## 4. Email

Length is in the table above.

- **Subject under 6 words**, and under fifty characters. No stacked clauses.
- **State the point.** First sentence.
- **State why it matters** to this reader specifically.
- **Give one example.** One.
- **Invite the next step.** A single ask.

One idea, three to five short paragraphs, one CTA. No preamble, no recap of a
previous email, no "as promised."

---

## 5. Cold outreach

Length is in the table above. Nothing here is optional.

1. **Open with the recipient's current state.** One sentence, specific to their
   role, using a title from `Buying Committee` in `brand-kit/icp.md`. If it
   would be true of anyone with that title at any company, it is not specific
   enough.
2. **Name the failure pattern they are already living.** This is where a named
   trap earns its keep.
3. **Contrast your approach in one line.** One. Use the separating line from
   `Categories We Are Not` in `brand-kit/positioning.md`.
4. **Propose a short conversation with a specific outcome.** Not "to connect."
   Say what they will know at the end of it. Fifteen minutes is the default ask.
5. **No "I hope this finds you well." No throat-clearing.** Delete every sentence
   that exists to soften the ask.

---

## 6. Executive brief

Fits on a single screen. If it scrolls, it is a different document.

- **One-line thesis.**
- **Three bullets of evidence.** Each one sourced.
- **One bullet of risk.** The strongest argument against the thesis, stated
  fairly. Omitting it is the fastest way to lose an executive reader.
- **One bullet of recommendation.** A decision, not a direction.

Written for someone who will read it once, in a hallway, on a phone. Every
number carries its source.

---

## 7. Whitepaper

The long argument, for a reader who has to justify a decision to someone else.
Length is in the table above. The argument comes from `The Manifesto` in
`brand-kit/positioning.md`. A whitepaper that only inventories capabilities
gives the reader nothing to decide.

1. **Executive summary.** The argument in three sentences.
2. **Market context.** What changed and why it matters now. Use `Why now` from
   `The Frame`.
3. **The problem.** Detailed analysis, every number sourced.
4. **The approach.** Map to the qualities naturally, never as branded section
   headers.
5. **Technical depth.** Architecture, integrations, deployment.
6. **ROI framing.** Tie to revenue, cost, or risk.
7. **Recommendation.** One paragraph, one decision.

---

## 8. Case study

Length is in the table above.

- **Buyer name and role.** With permission, on the record. Name a customer only
  if `brand-kit/capabilities.md` says that name is cleared for external use.
  Otherwise describe them by industry and headcount band.
- **The trigger event.** What forced the change. Not "they wanted to improve
  efficiency." Something happened.
- **The workflow before.** Concrete, with the steps and the people in it.
- **The workflow after.** Same level of detail. The contrast is the whole asset.
- **One quantified outcome.** One, with a baseline and a measurement window.
- **One quote from the buyer.** Verbatim, uncut.

Check every claim against `What We Do` in `brand-kit/capabilities.md`. Customer
stories are where product claims drift furthest, because the customer said it
and it feels safe to repeat.

---

## 9. Webinar registration

- **Specific promise.** What attendees will leave knowing. A sentence starting
  with "you will leave knowing how to."
- **Three named takeaways.** Each a capability the attendee gains, not a topic
  covered.
- **Who should attend.** By role.
- **Who should not attend.** Name them. Disqualifying readers raises attendance
  quality and it reads as confidence. The line is doing real work. Keep it
  honest.
- **Time, date, CTA.**

---

## 10. Subject line patterns

Four that hold up. Under six words and under fifty characters each. No colons
stacking two clauses.

- **Numeric.** A count of things the reader will get. "Three traps in field
  scheduling."
- **Correction.** Reverse a belief the reader holds. Only if the body delivers.
- **Provocation.** Name a tool the reader relies on and say what it is not.
  Indict the situation, not the person. "Your dispatch board is a plan."
- **Mirror.** Repeat back the exact question the recipient is already asking.
  The strongest of the four when you actually know the question.

No brackets, no emoji, no "quick question," no false re-send prefixes.
