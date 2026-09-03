# Example brand kit: Ampfield

**Ampfield is not a real company.** It is a fictional field operations platform,
invented so this toolkit has something to write about on a fresh clone. There is
no product, no customer, no website. Every URL in these files uses the reserved
`.example` domain and resolves to nothing, every competitor is invented, every
quote is attributed to a role rather than a person, and every number in
`Headline Stats` is marked `Example, replace with your own` so no skill will
publish it.

## What it is for

Two things.

**Seeing the toolkit work before you have filled anything in.** Copy these files
into `brand-kit/` and every skill in the repo has enough to run: the ads audits
can score a campaign against a real fit matrix, the content skills have a frame,
named traps, and a vocabulary to write from, and the competitive skills have a
competitive set. Run one, read what comes out, then decide whether this toolkit
is worth your afternoon.

**Seeing what "filled in" actually means.** The blank templates in `brand-kit/`
tell you what each section is. This folder shows you the depth a section needs
before a skill can do anything useful with it. The difference between a brand
kit that produces good copy and one that produces slop is almost entirely in how
specific these files are, and that is easier to see than to describe.

## The company, in one paragraph

Ampfield sells a field operations platform to solar, HVAC, and energy services
contractors running 50 to 5,000 field technicians. The frame it owns is **the
field record**: the timestamped account of what actually happened on a job,
captured at the point of work instead of reconstructed in the office the next
morning. Its buyers are the VP of Operations, the Director of Field Service, the
COO, and increasingly a VP of Customer Experience. Its named traps are the
Clipboard Gap, the Second Truck Roll, the Warranty Orphan, Promise Drift, the
Phantom Schedule, and the Rebuild Tax.

## Using it

```
cp examples/ampfield/*.md brand-kit/
```

That overwrites the blank templates. Note that `*.md` includes this file, so it
also replaces `brand-kit/README.md` with the Ampfield explainer. Restore the real
one with `git checkout brand-kit/README.md`, or copy the five files by name
instead:

```
cp examples/ampfield/{brand,voice,positioning,icp,capabilities}.md brand-kit/
```

Then edit. In roughly this order, because later sections depend on earlier ones:

1. `brand.md`. Name, pitch, palette, fonts, CTAs. Fastest to change and it
   affects every deliverable's appearance.
2. `positioning.md`. The Frame first. Everything else in the file, and most of
   what the content skills produce, ladders off the canonical noun and its
   definition.
3. `icp.md`. Use your ad platform's own taxonomy values, not your own phrasing.
   The ICP Fit Score is computed by matching these strings against a campaign
   export.
4. `capabilities.md`. Write `What We Do Not Do` before `What We Do`. The
   exclusions are what stop a model from inventing features, and they are harder
   to write, so do them while you are fresh.
5. `voice.md`. Keep the shipped defaults, add your own banned phrases and your
   superseded product names. See how the Ampfield version does it: the generic
   rules are untouched and the company-specific entries sit under them.

## Two things worth copying from this example

**The stats discipline.** Every number in `positioning.md` carries
`Example, replace with your own` in the `Verified` column, and the skills
refuse to publish anything carrying that flag. Ampfield is fictional so all of
its stats are examples, but the mechanism is the point: a real brand kit uses
the same column for any number you have not personally traced to a source. The
flag is cheap to add and expensive to have skipped.

**The exclusions.** `capabilities.md` lists eleven things Ampfield does not do,
each with a reason. That list is longer than most companies write and it is the
single highest-leverage part of a brand kit. A model asked to write about a
field operations platform will assume route optimization, because everything in
that category does it. Writing the exclusion down is what stops the claim.

## Do not ship Ampfield

If you fork this repo and forget to replace these files, the toolkit will
confidently write about a company that does not exist, using traps it invented
and statistics that came from nowhere. Replace them, or run `brand-kit-setup`
and let it interview you.
