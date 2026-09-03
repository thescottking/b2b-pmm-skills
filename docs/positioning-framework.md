# Building a Positioning Framework

Every other file in this repository assumes you already have a competitive
argument. This one is about building it.

Four sections of `brand-kit/positioning.md` carry that argument: `The Frame`,
`The Manifesto`, `The Pillars`, and `Named Traps`. Everything else in the kit is
recall: product names, buyer, banned phrases, publishable numbers, all knowable
in an afternoon. Those four are the ones nobody can answer cold, and they are
the four every skill in this repo leans on hardest.

`brand-kit-setup` walks you through them live, drafting candidates from what you
have already told it. This document is for the other case: you would rather
think it through properly, on your own time, and arrive with answers instead of
raw material.

This file covers how to build the framework. `docs/messaging-patterns.md` covers
how to deploy one in copy once it exists: how to structure a trap in a post,
when to open with a provocation, how to close with a question a buyer can carry
into a vendor call. Neither restates the other.

The worked example throughout is Ampfield, a fictional field operations platform
for solar and HVAC contractors, documented in full in `examples/ampfield/`. It
does not exist and its statistics are invented. It is here because abstract
advice about positioning is worthless and specific advice about a real company
is somebody else's property.

---

## Nobody can hand you a framework

If you arrived at a template repository expecting to be handed a differentiation
framework, this is the part worth reading twice.

A framework is not a container you pour a company into. It is the residue of a
particular set of tradeoffs. Ampfield's three qualities exist because Ampfield
refused to add taps to a technician's job, shipped offline capture that cost
real engineering time, and declined to build route optimization. Keep those
words, apply them to a company that made none of those choices, and you have a
set of adjectives.

The failure mode is subtle, which is why it is common. Borrowed frameworks do
not produce obviously bad copy. They produce copy that reads fine: clean
sentences, sound structure, a reasonable reviewer approves it, and it argues for
nothing. Nobody catches it because no individual line is wrong. What is missing
is the thing a framework is for: a position a competent competitor would have to
answer and could not simply agree with.

The test is cheap. Ask whether your nearest competitor could adopt your
framework verbatim, change the logo, and ship it. If they could, you have
described your category rather than your place in it. Most first-pass frameworks
fail this, including ones that took a quarter and an agency to produce.

The templates in `brand-kit/` tell you the shape. `examples/ampfield/` shows you
the depth. Neither gives you the argument. That part is yours.

---

## Four artifacts, one argument

`The Frame`, `The Manifesto`, `The Pillars`, and `Named Traps` look like four
independent sections in a file. They are not. They are one argument seen from
four angles.

- **The manifesto is the argument.** What you believe about how this work should
  be done, and why the way it is done today is wrong.
- **The frame is the noun that argument needs.** Every argument is about
  something. The frame is the something, named precisely enough that a buyer can
  repeat it without you.
- **The pillars are the qualities that argument implies.** If the argument
  holds, certain things are required of any real solution. Those are the
  pillars.
- **The traps are the failures that argument predicts.** If the argument holds,
  specific and expensive things go wrong in the buyer's week. Naming them is how
  the argument becomes usable by people who never read it.

This is why order matters, and why most attempts stall. The common approach
starts with pillars, because pillars feel like the deliverable: three words on a
slide, presentable to a board. But a pillar is a quality of something, and if
you have not said what the something is or why it matters, you are choosing
adjectives. That is how teams end up with Fast, Flexible, and Secure and a
nagging sense that the workshop accomplished nothing.

The order that works: manifesto first, written at length and badly, too long and
too angry, which is fine. Then the frame, found by reading the manifesto back
and locating the noun it keeps circling. Then the pillars, derived from the
argument plus what you deliberately gave up. Then the traps, which name the
failures the argument predicts and are the point where the whole thing becomes
portable. Then rewrite the manifesto, because by the fourth step you will know
what you actually believe. Two passes is normal.

---

## Start with the manifesto

`The Manifesto` in `brand-kit/positioning.md` asks five questions. Answer them
in order, in prose, without editing for polish.

**The status quo we reject.** What most companies in your category do today.
Describe the behavior, not the vendors. Ampfield: the office reconstructs the
working day after it is over, from paperwork, memory, and phone calls.

**Why it persists.** The beat that separates a manifesto from a complaint, and
the one most drafts skip. If your answer is that the market is behind or that
buyers do not understand yet, you have written a grievance. Find the incentive,
the constraint, or the historical accident that keeps the status quo alive, and
describe it fairly enough that someone living inside it would agree with your
description.

Ampfield's answer: capture at the point of work has always cost the technician
time, every system that asked for that time got routed around, and the party
asking for the data was never the party paying to enter it. That is a rational
response to a real cost, not stupidity. Because it is fair, the technician
reading it does not get defensive and the operations leader recognizes their own
history with the last three rollouts. A manifesto that treats the status quo as
dumb persuades nobody currently living in it, which is your entire market.

**What we believe instead.** One proposition. Ampfield: the record should be
created where the work happens, by the person doing it, in less time than
reconstructing it later would take.

**What has to change.** A specific behavior, not a vague outcome. "Companies
need better visibility" is not a change. "Stop evaluating field software by what
the office can see and start evaluating it by what a technician will do on a
roof in August, one-handed, with a customer standing there" is, because someone
could go do it on Monday.

**What we would still argue if we sold nothing.** The test that decides whether
you have a manifesto at all. Delete your product from every sentence and read
what survives. If nothing survives, you wrote a brochure with paragraph breaks.

What survives for Ampfield: the gap between when work happens and when the
business learns about it is the root cost in field service, and closing it is a
capture problem rather than a reporting problem. A competitor could disagree
with that, and so could an analyst. That is what makes it an argument rather
than a description.

Then write it as three to six sentences of prose, in the voice you would use on
stage, and put it in the blockquote. Never publish it under a heading that says
Manifesto. It is the argument you make repeatedly in different clothes, not a
page on your website.

---

## Find the frame

The frame is one noun and one sentence. `The Frame` asks for the canonical noun,
the canonical definition, what it replaces, and why now.

Read the manifesto and find the thing it keeps talking about. It is usually
already there, unnamed or named three different ways. Ampfield's manifesto
circles the same object in every paragraph: the account of what happened. The
frame names it. The field record.

Three tests before you commit.

**Can two people define it identically?** Write the definition, then ask two
colleagues to define the term without looking. Two different sentences means you
have a word, not a frame. Ampfield's definition is long on purpose and never
varies: the timestamped account of what actually happened on a job, captured at
the point of work.

**Does it name something the buyer already feels but has no word for?** A frame
is a handle for an existing experience. Contractors already know the difference
between what happened on the roof and what the office thinks happened, and they
have no name for it. That is the opening. If the buyer has to be taught the
thing exists before they can care, you are running an education campaign, and
those are expensive and slow.

**Is it a category you can lead, or one you would be ranked inside?** The test
that kills the most candidates. Ampfield's alternatives were "field visibility,"
abstract, worn out, and a term every competitor would happily also use, and "the
work order," a real object with real history that the incumbents own outright.
Choose the work order and you spend three years being compared feature by
feature inside a category somebody else defined. The field record is adjacent,
narrower, and unclaimed.

Two places drafts go soft. `What it replaces` is a behavior your buyer performs
today, not a competitor's product: Ampfield replaces reconstruction. And
`Why now` is events with dates, not a trend. "The market is shifting" is not a
why now. Three specific changes in the last eighteen months is.

---

## Derive pillars from sacrifice

`The Pillars` states the rule: do not start from your feature list. Start from
`What We Do Not Do` in `capabilities.md` and from the failures your traps
describe. It then gives three tests, worth walking with failing candidates
attached, because the failures teach more than the successes.

**Inversion.** Would a competent competitor claim the opposite? Ampfield's first
pass produced Mobile, Integrated, and Intuitive. No vendor in any category has
claimed to be immobile, siloed, or confusing. All three are table stakes wearing
pillar costumes. Cut them. This test eliminates almost every first-pass
candidate, which is the expected result rather than a sign the session went
badly.

**Proof.** Can you demonstrate it rather than assert it? Name the demo, the
metric, or the customer behavior. "Scalable" fails here for most companies: the
proof offered is usually a list of large customers, which demonstrates sales
history rather than a property of the product. Ampfield's Reconciled survives
because there is something to point at: parts consumed on a job decrement truck
stock the moment the technician records them, and there is no nightly batch that
everyone waits for. You can watch that happen in a demo. You can measure it in a
pilot.

**Sacrifice.** What did you give up to have it? A quality that cost nothing is a
description, not a differentiator. "Comprehensive" costs nothing to claim, and
for Ampfield it fails twice, because `Categories We Are Not` commits the company
to not doing route optimization and not replacing the ERP. Claiming
comprehensiveness would contradict the competitive boundary the rest of the file
rests on.

Captured passes all three. A competitor would genuinely claim the opposite,
because the opposite is defensible: let the office structure the data properly
rather than trust a rushed field entry. The proof is measurable, since taps per
job is tracked in pilots and changes that raise it get rejected. And the
sacrifice is specific. Offline-first sync is hard engineering no buyer asks for
by name, refusing features that add taps means shipping less, and building
around a technician on a roof rather than an operations director in a chair
makes the demo harder to sell to the person holding the budget.

That is what a pillar looks like: a quality you have because of a choice that
cost you something a competitor was not willing to lose.

Three pillars is the usual answer. Two is fine. Four is the ceiling, and a
fourth that overlaps the third should be merged rather than kept.

---

## Name the traps

Naming is the highest-leverage move available in B2B positioning. An unnamed
problem is a complaint that takes four sentences to describe and sounds like a
personal grievance by sentence two. A named problem is a thing that exists. It
goes on a slide. It survives a meeting you are not in.

`docs/messaging-patterns.md` covers deploying a trap in copy. This section is
about deriving one, performed end to end on an Ampfield trap, from nothing.

**Step 1: find a loss the buyer absorbs without tracing it to a cause.** A
warranty administrator mentions in passing that the company ate the cost of a
compressor last quarter because the claim was denied on documentation. It is
told as an anecdote, not raised as a problem. That is the tell. Problems people
have named get raised. Problems people have not named get mentioned.

**Step 2: separate the moment of creation from the moment of discovery.** The
loss surfaced eight months after installation, at claim time. It was created on
install day, when the serial number and the condition photos went into a
technician's phone and nowhere else. Nobody connects the two, because eight
months is longer than any organization's memory for a Tuesday. That distance is
what makes a trap invisible, and naming it is what makes it visible.

**Step 3: name the object, not the process.** Candidates, and why each one
fails or works:

- *Warranty Leakage.* Abstract, finance-flavored, no picture in it. You cannot
  see leakage. Cut.
- *The Documentation Gap.* Generic, and it collides with the Clipboard Gap,
  which is already in the table. Two traps sharing a shape means one of them is
  redundant. Cut.
- *The Denied Claim.* Names the moment of discovery, which is the manufacturer's
  view, not the buyer's problem. It also names an outcome everyone already has a
  word for. Cut.
- *The Claim Packet Gap.* Names the absence of an Ampfield capability. This is
  the most common failure in trap naming: a feature gap wearing a costume.
  Buyers can tell. Cut.
- *The Warranty Orphan.* A piece of equipment out there with no parent record.
  Concrete enough to picture, two words, sayable in a meeting without wincing.
  Keep.

**Step 4: check that your own product does not fall into it.** Easy to skip and
expensive to skip. If Ampfield let a technician close a job without the serial
number, the Warranty Orphan would be a trap Ampfield creates too, and naming it
would hand a competitor a loaded weapon. The name forced a product decision:
Claim Packet blocks close-out when a manufacturer-required field is missing.
This test improves roadmaps, not just copy.

**Step 5: write the four beats** into the `Named Traps` table: the setup, why it
fails, your difference, and use when. Ampfield's finished row: equipment
installed, serial number and failure photos living in a phone or a paper packet
or nowhere, a claim needing them months later, the manufacturer denying on
documentation, and the contractor eating a part they were entitled to be
reimbursed for.

The rules that generalize: name the failure, not the fix. Make it concrete
enough to picture, which usually means a physical object is in it. Keep it short
enough to say twice in a meeting. Name the category's failure rather than one
competitor's, since a trap that names a vendor dies the moment the prospect
evaluates a different one. And never name a trap you fall into.

Aim for four to eight. Past a dozen, none of them stick and your vocabulary
starts reading as a private language rather than a shared one.

---

## The discipline afterwards

The framework is the easy part. What follows is where most of the value is
either collected or lost.

**Repetition past the point of boredom.** A name becomes currency only through
repetition. The cost is saying the same words for eighteen months, long after
you are sick of them, because you have heard them a thousand times and your
market has heard them twice. The common failure is naming four things, using
each once, and quietly replacing them in month three with fresher language. That
is the same as never having named anything, except it also burned the time.
Boredom on your side is the leading indicator that it is starting to work.

**Never name the framework in customer-facing copy.** The rule the whole toolkit
enforces. `The Pillars` states it, `house-style` penalizes any draft that breaks
it, and `The Manifesto` carries the same rule for the same reason.

The reason is what the reader is doing while reading. Writing that argues its
case puts the reader inside the argument, weighing whether it is true. The
moment you write "our three pillars" or publish a page titled Our Manifesto, the
reader steps outside and starts evaluating your marketing instead. They stop
thinking about whether the office really does find out at six and start thinking
about the fact that a marketing team held a workshop, and everything after that
is discounted accordingly.

The scaffolding works because it is invisible. A reader should finish a piece
having absorbed that you are unusually serious about capture at the point of
work, without ever reading the word Captured. `The Pillars` provides a
`Vocabulary that signals it` field for exactly this. The one exception is
internal: enablement, onboarding, and the brand kit itself should name
everything explicitly.

---

## How to know it is working

Positioning has slow feedback, which makes it easy to declare victory or defeat
on the wrong evidence. Traffic is not the signal, and neither is internal
enthusiasm in the week after the workshop.

Signals that it is working:

- **Prospects use your words back to you, unprompted.** An inbound email using
  your trap name, from someone you have never spoken to, is the strongest signal
  available. The language traveled without you.
- **Competitors start answering your argument.** A page that rebuts your premise
  or quietly adopts your noun means you set the terms. Both are wins. Ignoring
  you was the response that cost you nothing.
- **Sales calls start in your frame.** The measurable version: what the prospect
  says in the first two minutes when asked what prompted the call. Your
  vocabulary rather than the incumbent's means the frame has taken.
- **The language appears where you did not put it.** A job description, a
  conference abstract, a forum thread, an analyst note. Internally, reps use the
  traps without being reminded.

Counter-signals, which are more useful and less pleasant:

- **Your language appears only in your own copy.** Six months of consistent use
  and nobody outside the company has repeated a single term. The words are not
  wrong so much as unnecessary: they name something the buyer does not feel.
- **Every trap needs a paragraph of setup.** If you cannot invoke a name in a
  clause and be understood, it is a concept rather than a trap, and the
  compounding that makes naming worthwhile never arrives.
- **The copy stops making sense when you remove the pillar names.** The labels
  were doing the work the writing was supposed to do.
- **You keep adding traps instead of repeating the ones you have.** Usually the
  repetition problem in disguise: bored before the market is aware.
- **Inbound is rising and sales calls still open in a competitor's frame.** You
  are winning attention inside somebody else's category. Real result, not
  positioning.

When something genuinely stops working, delete it rather than rewriting it into
something vaguer, and log the change in `Maintenance`. A framework that never
changes over several years is usually not disciplined, it is unexamined. The
difference is whether changes come from evidence in the market or from fatigue
on your side.

---

## Where this plugs in

Once the four sections are filled in, the rest of the toolkit runs on them.
`content-writer` reads `The Manifesto` when a piece needs a point of view rather
than a feature list, uses `The Frame` as the spine of a pillar article, and
pulls from `Named Traps` in almost every asset. `social-generator` lives on the
traps. `competitive-white-space` measures the market against your frame.
`house-style` enforces the rule that none of the scaffolding shows.

Run `brand-kit-setup` and bring what you built here into it. To see the finished
shape first, read `examples/ampfield/positioning.md` end to end: fictional,
filled in to the depth a real kit needs, and the fastest way to calibrate how
specific this has to be before a skill can use it.
