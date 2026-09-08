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

## What you need before anything works

Five of the nine skills read nothing but the brand kit and a text editor.
`house-style`, `content-writer`, `transcript-to-article`, `social-generator`,
and `brand-kit-setup` run in a plain Claude Code session on a laptop with no
tools attached. The other four have real dependencies, and each one fails in a
different way when the dependency is missing.

**Web fetch and web search.** `company-recon` and `competitive-white-space` are
built entirely on public sources. Without both tools available in the session
they have nothing to read and produce nothing. There is no offline mode and no
degraded mode: they are inert. You can hand them pasted page text instead, but
then you are doing the research and the skill is doing the analysis.

**A `docx` skill in the session.** `company-recon`, `competitive-white-space`,
`google-ads-audit`, and `linkedin-ads-audit` are written to deliver a formatted
Word document. They do that only when a `docx` skill is present in the session
to build the file. When one is not, all four fall back to clean markdown with
every table preserved, and say so. The analysis is identical either way. The
deliverable is not, which matters if you were planning to send it to a CFO.

**Campaign data for the ads audits.** Neither audit can invent numbers. Each
one needs one of two things:

- A marketing data connector in the session that reads the ad account: a data
  warehouse, an attribution tool, or the platform API fronted by something.
- Or CSV exports you pull yourself. `google-ads-audit` needs three from the
  Google Ads UI: the campaign report, the search terms report, and the keywords
  report, all over the same trailing period. `linkedin-ads-audit` needs the
  campaign performance export plus the demographic breakdowns by seniority,
  company size, and job function. Check the demographic export for a spend
  column before you rely on it. Campaign Manager's default demographics export
  often carries impressions and clicks without cost, and the ICP Fit Score is
  spend-weighted. The audit will fall back to impression-weighted figures and
  label them, which is a weaker answer honestly described.

Also worth stating: no skill here writes to an ad platform, a CMS, or a CRM.
Everything is read and analyze.

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

It interviews you and writes the five files. How long that takes depends
entirely on one thing: whether your positioning is already decided.

**If it is decided**, and the session is transcription rather than invention,
budget 45 to 90 minutes. You know your frame, you can name the failures your
buyers live with, and someone can pull your cost per acquisition and your
platform targeting values while you talk. That is a good afternoon's work in one
sitting.

**If it is not decided**, budget several sittings across a week or two, and
expect the positioning work to happen outside the interview. That is not a
defect in the skill. `docs/positioning-framework.md` is blunt about why: most
first-pass frameworks fail the test of whether a competitor could adopt them
unchanged, including ones that took a quarter and an agency to produce, and the
method it prescribes is to write the manifesto at length and badly, then derive
the frame, the pillars, and the traps from it, then rewrite the manifesto now
that you know what you believe. Two passes is normal. No interview compresses
that into an hour, and anything that claims to is giving you the first pass and
calling it finished.

Where the time actually goes:

- `The Manifesto`, `The Frame`, `The Pillars`, and `Named Traps` in
  `positioning.md`. These are one argument seen four ways, and they are the
  reason a kit takes a week rather than an hour. Work them in that order.
- `The Fit Matrix` in `icp.md`, written in your ad platform's own taxonomy
  values, spelled the way the platform spells them. `linkedin-ads-audit` matches
  those strings against a campaign export, so paraphrase costs you accuracy.
- `Channel Economics` in `icp.md`, with real figures: cost per acquisition band,
  the red line, sales cycle, average deal size, monthly budget.

The last two need someone with access to the ad platforms and to finance. If
that is not you, get them in the room or accept that both ads audits will report
cost and neither will be able to recommend a cut.

`What We Do Not Do` in `capabilities.md` is the highest-leverage section in the
kit and the one people write in three lines. Do it while you are fresh.

**What a half-filled kit produces.** Not errors, which is the problem. A missing
heading stops a skill and tells you so. A thin one does not. Three exclusions
under `What We Do Not Do` instead of ten means a draft will describe your
category's whole feature list as though you shipped it, because a model asked to
write about your category assumes the category. An empty `Headline Stats` makes
drafts read soft. A `Fit Matrix` with only an industry row makes an ICP Fit
Score impossible to compute. The failures that cost you are the silent ones, so
when `brand-kit-setup` reports which sections are thin at the end, that report
is the deliverable, not the ceremony.

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
| `house-style` | Rewrites, audits, or scores any draft against your voice. Catches AI tells, banned words, and unsupported claims. Runs as the final pass after any other skill. | `voice.md`, plus `capabilities.md` to check claims, `docs/writing-templates.md` for template shape and length, `docs/messaging-patterns.md` for the patterns it scores |
| `content-writer` | Long-form assets from the kit: articles, landing pages, feature pages, emails, case studies, whitepapers, executive briefs, pillar and cluster pages. | `positioning.md`, `voice.md`, `brand.md`, `capabilities.md`, plus `docs/writing-templates.md`, `docs/aeo-style-guide.md`, and `docs/messaging-patterns.md` |
| `transcript-to-article` | Turns a podcast, webinar, interview, or messy meeting notes into a clean transcript, a finished article, a distribution package, social assets, and a scan report. | The four above, plus `docs/aeo-style-guide.md` and `docs/writing-templates.md` |
| `social-generator` | Platform-native captions plus the text overlay, graphic headline, and paired image prompts that ship with them. | `brand.md` for palette and CTAs, `voice.md`, `positioning.md`, `capabilities.md`, plus `docs/writing-templates.md` for the LinkedIn spec and `docs/messaging-patterns.md` |
| `company-recon` | A seven-section read on any B2B company from a single URL, assembled in minutes from its public web presence: what it sells, who it says it sells to, how it is positioned, and what marketing it is visibly running. The prospect, partner, competitor, or noise call is a starting judgment for a human to confirm, drawn from a website. | All five, for the read on whether the company matters to you |
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
not identify machine authorship.

A blind calibration study ran three times, ending with twenty three pieces and a
third scorer. It did not validate the rubric. It partly disconfirmed it. Three
independent scorers reading the same drafts could not reproduce each other's
totals, disagreeing by a mean of 36 points on the eight hardest pieces, while
the band assignment and the rank ordering held. That makes the rubric a triage
instrument rather than a measuring one: it answers which band a draft is in and
whether this draft is better than that one, and it does not answer what a draft
scores. Treat a published figure like "scored 72" as false precision.
`docs/voice-calibration.md` carries the full study, including what it does not
show, and the method for rebuilding the rubric from your own published work.

Read `brand-kit/README.md` for how to fill them in, and `examples/ampfield/` for
a worked example. Ampfield is a fictional field operations platform for solar
and HVAC contractors, filled in to the depth a real kit needs. The templates
tell you what a section is. The example shows you how specific it has to be
before a skill can do anything useful with it.

---

## Docs

Five references in `docs/`. Each one is read by the skills named beside it
rather than restated inside them, so a change here reaches every skill at once.
You can read them directly too.

- **`positioning-framework.md`** How to build the competitive argument the rest
  of the toolkit runs on: the manifesto, the frame, the pillars, and the named
  traps. Start here if you do not yet have a positioning framework, or if the
  one you have could be adopted by a competitor unchanged. Read by
  `brand-kit-setup`.
- **`voice-calibration.md`** The voice-side companion to the file above. Where
  the humanizer rubric and the shipped voice defaults came from, what the
  penalty weights encode, and what three runs of a blind calibration study
  established about what the rubric actually measures: a triage instrument that
  produces bands and rankings, not reproducible scores. Also how to derive your
  own rules from your own published writing instead of inheriting somebody
  else's. Read by `house-style` and `brand-kit-setup`.
- **`messaging-patterns.md`** Eight structural patterns for deploying that
  framework in copy, each with when it works, when it backfires, and a worked
  example. Read by `content-writer`, `social-generator`, and `house-style`.
- **`aeo-style-guide.md`** How to structure content so answer engines can
  extract, quote, and cite it. Structure only; voice lives in `brand-kit/`. Read
  by `content-writer` and `transcript-to-article`.
- **`writing-templates.md`** Ten skeletons for the assets B2B teams produce
  most, carrying structure and nothing else, plus the `Length targets` table
  that is the only place any asset length is set. Read by `house-style`,
  `content-writer`, `social-generator`, and `transcript-to-article`.

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
- **Two channels, not eight.** A B2B marketing team runs paid search, paid
  social, organic search, email, the website, events and field marketing,
  partner and co-marketing, and community. This repo audits two of them, Google
  Ads and LinkedIn Ads, and writes copy that could run on several more. There is
  no email program here, no event motion, no partner marketing, no community
  work, and no organic search practice beyond structuring a page so an answer
  engine can quote it.
- **No planning layer.** Nothing here builds a campaign plan, a content
  calendar, a budget allocation, or a quarterly roadmap. The skills produce
  individual assets and individual analyses. Deciding what to make, in what
  order, against what number, is still yours.
- **No sales enablement output.** No battlecards, no objection handling
  documents, no one-pagers for a rep to carry, no discovery question sets, no
  call scripts. `positioning.md` holds most of the raw material a battlecard
  needs and no skill assembles one.

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
