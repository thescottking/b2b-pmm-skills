# B2B CMO Skills

Nine Claude skills for B2B marketing teams: voice and quality scoring, long-form
content, transcript to article, social, company recon, competitive white space,
and Google and LinkedIn ads audits. All nine read one shared brand kit, so you
define your positioning once and everything writes as your company.

---

## The idea

Skills own **method**. The brand kit owns **content**. A skill knows how to run a
white space analysis, how to score a draft for AI tells, or how to classify a
search term by buyer intent. It does not know your company name, your named
traps, your buyer, your palette, or the four things your product deliberately
does not do. Those live in five markdown files in `brand-kit/`, and every skill
reads them before it writes a word.

That separation is the only reason a marketing skill is reusable by anyone other
than the person who wrote it. Without it you get the two failure modes everyone
who has tried this has hit. Either the skill is generic, in which case it
produces competent copy about no company in particular and you rewrite all of
it. Or the positioning is baked into the prompt, in which case it works
beautifully for one company and is worthless to the next, and updating a tagline
means editing nine files and missing three.

Put the positioning in one place and the skills stay portable, the copy stays
consistent, and changing your frame is a single edit that propagates everywhere.
When a skill needs a fact it does not have, it stops and says so rather than
inventing one. That is the design.

One consequence worth stating plainly: this repo does not hand you a
differentiation framework. It cannot. A set of pillars derived from one
company's tradeoffs is a set of adjectives applied to any other, and borrowed
frameworks produce copy that reads fine and argues for nothing. What the repo
gives you is the method for building your own, plus the skills that run on it
once it exists. `docs/positioning-framework.md` is that method.

---

## Quick start

**1. Install the plugin.**

```
/plugin marketplace add thescottking/b2b-cmo-skills
/plugin install b2b-cmo-skills
```

Or clone the repo and point Claude Code at it as a local plugin directory. The
skills are plain markdown; there is nothing to build.

**2. Fill in the brand kit.**

```
brand-kit-setup
```

It interviews you and writes the five files. Budget 30 to 45 minutes, and expect
to leave parts blank on the first pass. The sections that most affect output
quality are `The Frame` and `Named Traps` in `positioning.md`, `The Fit Matrix`
in `icp.md`, and `What We Do Not Do` in `capabilities.md`. The exclusions are the
hardest to write and the highest leverage, so do them while you are fresh.

If you would rather see the toolkit work before filling anything in, copy the
worked example instead:

```
cp examples/ampfield/{brand,voice,positioning,icp,capabilities}.md brand-kit/
```

**3. Run something.**

```
Run a company recon on https://example.com
```

Or paste a draft and say "score this," or paste a transcript and say "turn this
into an article." Every skill checks the kit first and will tell you to run
`brand-kit-setup` if it finds template placeholders.

---

## The skills

| Skill | What it does | What it reads |
|---|---|---|
| `brand-kit-setup` | Interviews you and writes the five brand-kit files. Run this first. | Writes the kit rather than reading it |
| `house-style` | Rewrites, audits, or scores any draft against your voice. Catches AI tells, banned words, and unsupported claims. Runs as the final pass after any other skill. | `voice.md`, plus `capabilities.md` to check claims |
| `content-writer` | Long-form assets from the kit: articles, landing pages, feature pages, emails, case studies, whitepapers, executive briefs, pillar and cluster pages. | `positioning.md`, `voice.md`, `brand.md`, `capabilities.md` |
| `transcript-to-article` | Turns a podcast, webinar, interview, or messy meeting notes into a clean transcript, a finished article, a distribution package, social assets, and a scan report. | The four above, plus `docs/aeo-style-guide.md` |
| `social-generator` | Platform-native captions plus the text overlay, graphic headline, and paired image prompts that ship with them. | `brand.md` for palette and CTAs, `voice.md`, `positioning.md`, `capabilities.md` |
| `company-recon` | A seven-section strategic read on any B2B company from a single URL, in about five minutes. Prospect, partner, competitor, or noise. | All five, for the read on whether the company matters to you |
| `competitive-white-space` | Maps what every competitor is already saying, isolates what none of them are saying, and turns the gap into a positioning direction and stage-by-stage campaign hooks. | `icp.md` for the competitor set, `positioning.md` for the frame, all five for sections 5 through 8 |
| `google-ads-audit` | Classifies every search term by buyer intent as KEEP, WATCH, or CUT, quantifies wasted spend, and flags high-intent terms that are budget-constrained. | `icp.md`: `The Fit Matrix`, `Search Terms`, `Channel Economics` |
| `linkedin-ads-audit` | A 35-point audit that computes an ICP Fit Score: the share of paid social spend that actually reached the right seniority, function, and company size. | `icp.md`: `The Fit Matrix`, `Buying Committee`, `Channel Economics` |

Every skill works on its own. Cross-references between them are optional.

---

## The chain

Four of the skills are designed to run in sequence, and each one is measurably
sharper with the previous one's context in the conversation.

```
company-recon  ->  competitive-white-space  ->  google-ads-audit  ->  linkedin-ads-audit
```

**Recon** establishes what a company actually sells, who it sells to, and how it
is positioned, from public sources.

**White space** takes that read across a competitor set, maps the saturated
messaging territory, and isolates the territory nobody is standing on. It runs
better after recon because it starts with a grounded read of at least one player
instead of building every profile from scratch.

**The Google audit** then judges search terms against a market it understands. A
term is not high intent in the abstract. It is high intent given what you sell
and which category language is contested, and those are exactly the two things
the first two steps established. Recon makes "high intent" a specific judgment.
White space tells you which category terms are worth paying for and which are
crowded ground.

**The LinkedIn audit** runs last because it inherits all of it, plus the demand
gap the search audit found. Paid social is supposed to create the demand that
search captures, and you can only score it against that job if you know what
search is already catching.

None of this is required. Each skill reads the same brand kit and produces a
valid audit on its own. The chain just removes the guesswork at every step, and
a full pass takes an afternoon rather than a quarter.

---

## The brand kit

Five files in `brand-kit/`. `brand.md` for identity, palette, and CTAs.
`voice.md` for house style and banned constructions. `positioning.md` for the
frame, the pillars, the named traps, and every number you are willing to
publish. `icp.md` for who you sell to, in three tiers precise enough to score a
campaign against. `capabilities.md` for what you do, what you do not do, and
which page to link when.

Skills cite these files by heading name, never by section number, so you can
reorder freely. Do not rename or delete a heading: a skill looking for
`What We Do Not Do` and finding nothing will make claims you did not authorize.

`voice.md` is the exception to the blank-template rule: it ships filled in. Those
defaults and the 23 weighted patterns in the humanizer rubric are hand-built from
one working editor's judgment about what damages credibility with a technical B2B
reader, not scraped from generic writing advice. They are one writer's voice, and
they are meant to be replaced with yours. The rubric is a house-style conformance
score, not an AI detector: it is deliberately opinionated, it catches most machine
output as a side effect because machine output is unstyled by default, and it does
not identify machine authorship. `docs/voice-calibration.md` explains how it was
built, how a blind calibration study on nine articles tested it, and how to
rebuild it from your own published work.

Read `brand-kit/README.md` for how to fill them in, and `examples/ampfield/` for
a worked example. Ampfield is a fictional field operations platform for solar
and HVAC contractors, filled in to the depth a real kit needs. The templates
tell you what a section is. The example shows you how specific it has to be
before a skill can do anything useful with it.

---

## Docs

Five references in `docs/`. Skills read them; so can you.

- **`positioning-framework.md`** How to build the competitive argument the rest
  of the toolkit runs on: the manifesto, the frame, the pillars, and the named
  traps. Start here if you do not yet have a positioning framework, or if the
  one you have could be adopted by a competitor unchanged.
- **`voice-calibration.md`** The voice-side companion to the file above. Where
  the humanizer rubric and the shipped voice defaults came from, what the
  penalty weights encode, what a blind calibration study on nine articles showed
  about what the rubric actually measures, and how to derive your own rules from
  your own published writing instead of inheriting somebody else's.
- **`messaging-patterns.md`** Eight structural patterns for deploying that
  framework in copy, each with when it works, when it backfires, and a worked
  example.
- **`aeo-style-guide.md`** How to structure content so answer engines can
  extract, quote, and cite it. Structure only; voice lives in `brand-kit/`.
- **`writing-templates.md`** Nine skeletons for the assets B2B teams produce
  most, carrying structure and length targets and nothing else.

---

## What is not here

A short list, so you know what you are getting:

- **No SEO tooling.** No keyword research, no rank tracking, no Search Console
  integration. `docs/aeo-style-guide.md` covers content structure for answer
  engines, which is a different problem.
- **No CMS page builder.** The skills produce copy and formatted documents. They
  do not publish to WordPress, HubSpot, or anything else.
- **No workflow or diagram generation.** Nothing here animates, visualizes, or
  renders a process.
- **No CRM or marketing automation integration.** No list building, no lead
  scoring, no sequence deployment.
- **No image generation.** `social-generator` writes image prompts. You run them
  wherever you run them.
- **No analytics or attribution reporting.** The two ads audits read campaign
  exports and judge them against your ICP. They are not a reporting layer.

Some of these may show up later. None of them are in this release.

---

## Who built this

**Scott King.** Independent consultant working with technology companies on AI
go-to-market messaging, positioning, and executive thought leadership.
Previously ran marketing for an enterprise AI platform.

The work is usually one of three things: fixing positioning that stopped
matching the product, building the messaging system a growing team can actually
run without him, or writing the executive-level content a founder does not have
time to write. This repo is the systematized version of the third one.

[LinkedIn](https://www.linkedin.com/in/thescottking/)

---

## Contributing

See `CONTRIBUTING.md`. The one architectural rule: if you find yourself typing a
company name, a product name, a competitor, a statistic, a hex value, or a job
title into a `SKILL.md`, it belongs in `brand-kit/` instead.

## License

MIT. See `LICENSE`.
