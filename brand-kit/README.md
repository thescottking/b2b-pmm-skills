# Your brand kit

Five files. Every skill in this repo reads them before it writes a word.

Fill them in once and the whole toolkit writes as your company. Leave them
empty and the skills will tell you to run `brand-kit-setup`, which interviews
you and writes these files for you.

| File | Owns | Skills that read it |
|---|---|---|
| `brand.md` | Name, pitch, palette, fonts, CTAs | All of them |
| `voice.md` | House style, banned words, AI tells | `house-style` and everything that calls it |
| `positioning.md` | Frame, pillars, traps, stats, vocabulary | Content and competitive skills |
| `icp.md` | Who you sell to, in three tiers | Demand-gen and paid-channel skills |
| `capabilities.md` | What you do, what you don't, what you link to | Anything that makes a product claim |

## How to fill them in

**Three ways, in order of speed.** Run `brand-kit-setup` and answer the
questions. Or copy `examples/ampfield/` over this folder and edit it. Or write
them from scratch using the guidance in each file.

**Write what is true, not what is aspirational.** These files are the source of
truth for every claim the toolkit makes. A stat you cannot source becomes a stat
in a published article. The `Headline Stats` section has a source column for
exactly this reason, use it.

**One fact, one home.** If your differentiator appears in `positioning.md` and
again in `capabilities.md`, they will drift, and the skills will produce
contradictory copy. Put it in one file and let the other point at it.

## What the skills are allowed to assume

Skills cite these files by **heading name**, never by number, so you can reorder
sections freely. What you should not do is rename or delete a heading, a skill
looking for `What We Do Not Do` and finding nothing will make claims you did not
authorize.

If a section genuinely does not apply to you, keep the heading and write one
line saying so.

## Keeping it honest

Add a dated line to `Maintenance` in `positioning.md` whenever you change
something material. Six months from now, the question "when did we stop saying
that?" has an answer.

If you fork this repo publicly, your brand kit goes with it. Internal pricing,
unreleased roadmap, named customers who have not agreed to be named, and
competitor claims you cannot substantiate do not belong in a public file.
