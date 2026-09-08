---
name: linkedin-ads-audit
description: >
  A 35-point LinkedIn Ads audit scored against your own buyer definition, with a written pass
  criterion for every one of the 35 points. Reports an ICP Fit Profile: the share of paid
  social spend reaching the right seniority, the right function, and the right company size,
  each measured on its own because standard platform reporting cannot show the three
  together. Use when someone asks to "audit our LinkedIn ads," "review our
  LinkedIn campaigns," "check our paid social performance," "see how much of our LinkedIn
  spend is hitting the right buyers," "review our LinkedIn retargeting," "score our LinkedIn
  account," or "why is our LinkedIn CPA so high." Also triggers when someone uploads Campaign
  Manager exports or demographic breakdowns, or asks to pull paid social data from a
  reporting connector.
---

# LinkedIn Ads Audit

## Before you write anything

Read these first. They are the source of truth and this skill does not invent
around them.

1. `brand-kit/brand.md`: name, palette, fonts, CTAs
2. `brand-kit/icp.md`: the fit matrix, search terms, competitors, economics
3. `brand-kit/positioning.md`: the frame, pillars, traps, stats, vocabulary
4. `brand-kit/voice.md`: house style and banned constructions

If `brand-kit/icp.md` is missing or still has its template placeholders, stop.
These audits score spend against your buyer definition and produce meaningless
verdicts without one. Tell the user to run `brand-kit-setup`.

## What this produces

A formatted Word document that audits the campaign system rather than the metrics. Is the
funnel built correctly? Are the right audiences in the right campaigns? Is creative doing a
different job at each stage? Is budget flowing toward signal? And the demographic question:
how much of the spend reached the right seniority, how much reached the right function, and
how much reached the right company size?

Those last three are the headline, and they stay three numbers. Read
`The ICP Fit Profile` below before you compute anything, because the tempting move here is
to average them into one number and call it the share of spend that reached the right buyer.
That number would be wrong, and it is the single easiest way to hand an executive a figure
you cannot defend.

The scoring runs against `The Fit Matrix` in `brand-kit/icp.md`. Change that file and the
verdicts change with it. That is the design.

## When to use

- Quarterly review of a paid social account
- Before a budget increase, so the increase does not scale a leak
- When CPA is climbing and the demographic mix is the suspected cause
- Someone uploads Campaign Manager exports or demographic breakdown reports
- Someone wants to pull the account live through a reporting connector

## Optional context that improves the audit

Run this after `company-recon`, `competitive-white-space`, and `google-ads-audit` when you
can. Each adds a layer: recon supplies the market read, white space tells you whether the ad
creative is claiming what everyone else claims, and the Google audit supplies the demand gap
that paid social is supposed to fill.

None of them are required. Where a section below depends on one, it says so and tells you to
skip it if the prior work has not run.

## Guiding philosophy

- **Paid social amplifies what already works.** Position it to extend existing content,
  thought leadership, and channels. A net-new siloed experiment starves before it learns.
- **Warm before cold.** Thought leader ads, running from the personal accounts named in the
  thought leadership note in `Channel Economics`, are the strongest cold format for a
  founder-led or expert-led brand. They belong in month one, not deferred to a later phase.
  If that note is empty, say so in the audit and recommend naming someone, because the format
  cannot run without a person behind it.
- **Design audiences to the budget you have.** Read `Monthly paid budget` in
  `Channel Economics`. At a modest budget, a small number of tight, high-intent segments beats
  broad coverage across every plausible function. Spreading thin means nothing ever exits the
  learning phase.
- **Retarget on signal, not on assumption.** Build retargeting from observed behavior:
  Insight Tag traffic, video completion, document opens, page-level visits, CRM lists. Not
  from a guess about who saw something.
- **Frequency is a strategic lever, in three tiers.** A 90-day retarget at moderate
  frequency. A 180-day nurture at low frequency. A 30-day high-intent push at high frequency.
  Match the creative count to the projected frequency in each tier, or the tier fatigues.
- **Even distribution for retargeting.** Set retargeting campaigns to rotate ads evenly
  rather than optimize for performance. Optimization pushes two or three ads at everyone in a
  small audience and burns them within weeks.
- **Right-rail placements buy cheap frequency.** Text, spotlight, and follower ads accumulate
  many more impressions per user than in-feed formats at a lower cost per thousand. Use them
  to raise frequency without inflating in-feed CPMs, and take the actual ratio from this
  account's own CPM by format rather than from a remembered figure.
- **Think in small segments, not a vast ocean.** The platform is a set of small, manageable
  audiences. Be the most visible expert inside the two or three functions named in the ICP
  column of `The Fit Matrix`, then expand deliberately.

## Data input

### Option 1: A reporting connector

If the session has a connector or data integration that reads LinkedIn Ads, pull live. Ask which
one is available rather than assuming. The field names below are LinkedIn's own reporting
vocabulary and hold regardless of which tool fronts them.

**Pull 1: Campaign performance**

```
fields: ["campaign", "campaign_group_name", "campaign_status", "campaign_type",
         "objective_type", "spend", "clicks", "impressions", "conversions", "ctr", "cpc",
         "cpm", "engagement_rate", "landing_page_clicks", "approximate_unique_impressions"]
date_range: last 3 months
```

**Pull 2: Seniority demographics**

```
fields: ["member_seniority", "spend", "clicks", "impressions"]
filter: spend > 0
date_range: last 3 months
```

**Pull 3: Company size demographics**

```
fields: ["member_company_size", "spend", "clicks", "impressions"]
filter: spend > 0
date_range: last 3 months
```

**Pull 4: Job function demographics**

```
fields: ["member_job_function", "spend", "clicks", "impressions"]
filter: spend > 200
date_range: last 3 months
```

**Pull 5: Industry demographics**

```
fields: ["member_industry", "spend", "clicks", "impressions"]
filter: spend > 500
date_range: last 3 months
```

**Pull 6: Monthly trends**

```
fields: ["campaign_group_name", "month", "spend", "clicks", "impressions", "conversions"]
date_range: last 6 months
```

The spend filters on pulls 4 and 5 exist to cut the long tail of rows with a few dollars in
them. Lower them for a small account, or the demographic tables come back nearly empty.

**Pull 7: the joint breakdown check, run this before Section 2**

Pulls 2, 3, and 4 each return one demographic dimension on its own. Ask the connector for
one request that crosses two or more member demographics at once, for example:

```
fields: ["member_seniority", "member_job_function", "member_company_size", "spend"]
date_range: last 3 months
```

Three outcomes, and which one you got changes what Section 2 is allowed to say:

- **The request returns spend against combinations** of seniority and function and size. You
  have a genuine joint breakdown. Compute the real joint figure described under
  `The ICP Fit Profile`, name it the ICP Fit Score, and say in the document which pull
  produced it.
- **The request returns spend against two dimensions but not three.** Compute the joint
  figure for the pair you have, name exactly which pair it covers, and treat the third
  dimension as a separate marginal.
- **The request is rejected, or it silently returns single-dimension rows.** This is the
  normal case: member demographic reporting is built to pivot on one attribute at a time, so
  the crossed figure does not exist to be pulled. Report the profile, not a composite. Say in
  the document that a joint figure was checked for and is not available from the platform.

Do not assume the third outcome without asking. Do not simulate a joint breakdown by
multiplying the three marginals together, which assumes the dimensions are independent and
they are not.

### Option 2: CSV export or pasted data

Accept the files or pasted numbers, and map them onto the data sets above before analyzing.

**Check the demographic export for a spend column before you plan on one.** Campaign
Manager's demographics view is built around impressions and clicks, and the export most
users take from it carries reach and engagement columns against each member attribute
without attributing cost to those rows. Open the file and look. Do not assume the columns in
Pulls 2 through 4 are there because the connector vocabulary names them.

- **Spend is present against every demographic row.** Proceed exactly as with a connector.
  The fit numbers are spend-weighted.
- **Spend is absent, impressions are present.** The spend-weighted method cannot be computed
  from this file at all. Fall back to impression-weighted shares: replace spend with
  impressions in every fit calculation, label every resulting figure "impression-weighted"
  in the table header and in the tile subtitle, and carry this note in the document
  verbatim in substance: *impressions are a weaker proxy than spend. Cost per thousand
  varies by seniority, by function, and by company size, so a segment can hold a large share
  of impressions on a small share of budget and the reverse. These figures show who saw the
  ads, not where the money went.* Never present an impression-weighted figure next to a
  spend-weighted one from another period without saying which is which.
- **Neither is present, or the breakdowns are missing entirely.** The fit profile cannot be
  computed. Say that rather than estimating it, and offer to run the rest of the audit
  without Sections 1 and 2.

The same three-way check applies to the joint breakdown. A demographics export crosses no
dimensions, so on the CSV path the answer to Pull 7 is settled before you ask: report the
profile, and say the joint figure is not derivable from this export.

## Reading the fit matrix

`The Fit Matrix` in `brand-kit/icp.md` is a three-by-four grid: ICP, Mixed, and Non-ICP
across seniority, company size, job function, and industry. It is the only input that decides
whether a dollar was well spent on the dimension being read. Read one column of it at a
time. The grid does not tell you which dollars sat in the ICP column of two dimensions at
once, and neither does the platform.

- **ICP** is who the company wants. Spend here counts fully toward that dimension's fit
  figure.
- **Mixed** is worth reaching but not worth optimizing for: influencers on the deal, adjacent
  functions, companies at the edge of the size band. Half credit.
- **Non-ICP** is waste. Zero credit, and it goes in the audience waste figure.

**The matrix values have to match the ad platform's own taxonomy**, or the matching silently
fails and every score is wrong. Use LinkedIn's seniority labels, its job function list, its
company size brackets, and its industry taxonomy verbatim. If `The Fit Matrix` contains
plain-English descriptions rather than platform values, translate them once at the start of
the audit, show the user the translation you used, and note in the document that the mapping
was inferred.

Where a value returned by the platform appears in none of the three columns, treat it as
Mixed and list it in a short "unclassified" note under the relevant table. Do not quietly
score it as ICP.

## The 35-point audit framework

Six categories, 35 points. Every point carries a pass condition, a fail condition, the
evidence to cite in the report, and a weight. Score each point Pass, Partial, Fail, or Not
assessable, then aggregate with the arithmetic in `Scoring the 35 points`.

**Not assessable is a real verdict and you will use it often.** The six pulls above are
reporting data. Several points below need account configuration, ad-level URLs, or CRM
records that reporting does not carry. When the evidence is not in front of you, mark the
point Not assessable, name the one input that would make it assessable, and drop it out of
the arithmetic. Never score a point as a fail because you could not see it, and never score
it as a pass because nothing looked wrong.

**Three rules before the tables.**

- **Weight** is 1 unless the table says 2. Five points carry weight 2, because a failure
  there makes the points downstream of it unreliable rather than merely worse.
- **Partial** scores half the weight, and is available only on points whose pass condition
  has more than one named part. Where the pass condition is a single test, the point is Pass
  or Fail.
- **Every numeric cutoff in these tables is this instrument's own structural threshold, not
  market data.** No published benchmark is used anywhere in the scorecard, and none may be
  introduced. Where a comparison is needed, compare the account against its own distribution
  across the window.

### Signal Integrity (points 1 to 6)

| # | Point | W | Pass | Fail | Evidence to cite |
|---|---|---|---|---|---|
| 1 | Insight Tag installation and health | 2 | The tag is present on the site and shows a signal received inside the last 7 days, on the pages that feed retargeting and conversions | Tag absent, tag status inactive, or no signal in the last 30 days while campaigns were spending | Tag status and the date of the last signal received |
| 2 | Conversion event setup and hierarchy | 2 | At least one conversion action is defined, one is designated primary, and Pull 1 shows conversions greater than zero on at least one spending campaign | Spend across the window with zero recorded conversions everywhere, or every event treated as equally primary so no hierarchy exists | Conversions by campaign from Pull 1, plus the conversion action list if supplied |
| 3 | CRM integration and offline conversion sync | 1 | A CRM connection exists and has imported offline conversions inside the last 30 days | No connection, or a connection that has imported nothing in the window | The connection name and its most recent import date |
| 4 | UTM parameter discipline | 1 | Every active campaign's destination URL carries source, medium, and campaign, with consistent casing and values, and the campaign value is parseable back to the campaign | Any active campaign missing a parameter, or two spellings of the same source or medium in the account | Count of active campaigns fully tagged out of the total, plus two offending URLs quoted |
| 5 | Attribution model clarity and expectations | 1 | The attribution model and conversion window in force are stated, and every conversion figure in the audit is labeled with them | Conversion counts reported with no window named, or platform counts set against CRM counts without naming the difference in method | The model and window, written out once in the document |
| 6 | Revenue path traceability | 1 | At least one pipeline or closed record in the window traces back to a named campaign through the CRM | Spend runs with no record anywhere that traces to a campaign | The count of traceable records, or the exact link in the chain that is broken |

**Not assessable when:** points 1, 3, and 6 cannot be judged from the six reporting pulls.
Ask for tag status, the CRM connection detail, and one traced record. Point 4 needs the
ad-level destination URL export. Point 5 becomes assessable the moment the user states the
window, so ask before marking it.

### Architecture and Learning (points 7 to 14)

| # | Point | W | Pass | Fail | Evidence to cite |
|---|---|---|---|---|---|
| 7 | Campaign group logic and funnel stage separation | 2 | Every spending campaign sits in a group whose name identifies one funnel stage, and no group mixes cold prospecting with retargeting | Any group holds both cold and retargeting campaigns, or ungrouped campaigns hold more than 10% of spend | Spend by group from Pull 1, and the name of the mixed group |
| 8 | Objective selection per funnel stage | 1 | Each campaign's objective matches its stage: reach, engagement, or video views on cold, website conversions or lead generation at the bottom | A bottom-funnel campaign running an engagement objective, or a cold campaign running lead generation with no prior touch in the account | Campaign, objective, inferred stage, spend |
| 9 | Campaign naming convention clarity | 1 | One convention is in force and at least 90% of spending campaigns parse under it into stage, audience, and format | Below 90% conforming, or two conventions running in parallel | The convention you inferred, the conforming percentage, and two offenders |
| 10 | A/B test structure and isolation | 1 | Where a test is running, exactly one variable differs between the paired campaigns or ads, and both sides carry enough spend for the difference to be readable | Variants differing in more than one variable at once, or a test split across two different audiences | The pair, the variable under test, and spend on each side |
| 11 | Budget allocation by funnel stage | 1 | The split of spend across stages is deliberate and stated, and retargeting carries spend wherever a retargeting audience exists | Retargeting audiences exist and carry zero spend, or one stage holds nearly all budget with no stated reason | Percent of spend by group, from Pull 1 |
| 12 | Bid strategy appropriateness by objective | 1 | Bid strategy matches objective, and no campaign is capped below the CPM it actually achieves | Automated bidding on a campaign too small to feed it, or a manual cap under the achieved CPM with delivery collapsing as a result | Campaign, bid strategy, achieved CPM, impressions |
| 13 | Learning phase stability | 1 | Campaigns under evaluation have run without a budget or targeting edit long enough that their week to week CPM and CPA sit inside the account's own trailing variance | Edits inside the last 14 days on a campaign you are about to judge, or swings wider than the account's own variance that edit history explains | Trailing weekly or monthly figures from Pull 6, plus change history if supplied |
| 14 | Campaign consolidation versus fragmentation | 1 | Every active campaign holds a meaningful share of the budget in `Monthly paid budget` under `Channel Economics`, meaning fewer than a third of active campaigns sit under 5% of spend each | A third or more of active campaigns each hold under 5% of spend, so nothing accumulates enough delivery to stabilize | Count of campaigns under the 5% line and their combined spend |

**Not assessable when:** point 10 if no test is identifiable and the user confirms none is
running, which is not a failure. Point 12 if the export carries no bid strategy field. Point
13 if change history is unavailable and the trend data covers fewer than three periods.

### Audience Coverage (points 15 to 20)

| # | Point | W | Pass | Fail | Evidence to cite |
|---|---|---|---|---|---|
| 15 | Cold audience definition and alignment to `The Fit Matrix` | 2 | Every targeting facet on every cold campaign maps to a value in the ICP or Mixed column of `The Fit Matrix` | Any facet maps to a Non-ICP value, or a cold campaign runs with no seniority and no company size constraint at all | Campaign, the facets in use, and the matrix column each one maps to |
| 16 | Retargeting audience construction | 1 | At least one retargeting audience built from observed behavior, site visit, video view, document open, or a CRM list, is live and spending | No retargeting audiences, or retargeting built only from attribute targeting rather than behavior | Audience names, how each is defined, and spend against each |
| 17 | Retargeting segmentation by recency | 1 | Retargeting is split into at least two recency bands from 30, 90, and 180 days, and the shorter band carries the higher frequency or bid | One undifferentiated retargeting audience covering the whole window | Audience names, their windows, and spend by band |
| 18 | Warm audience signal quality | 1 | Each warm audience is defined by an action that carries intent: a pricing or demo page, a video watched to three quarters, a document opened | Audiences built from all site traffic or any page view, which reaches bounced visitors at the same weight as buyers | The rule behind each warm audience, written out |
| 19 | Lookalike usage appropriateness | 1 | Lookalikes are either absent, or seeded from a converter list and funded below the matrix-defined cold targeting | Lookalike campaigns carry more cold spend than matrix-defined targeting, or the seed list includes profiles in the Non-ICP column | Lookalike share of cold spend, and the seed list used |
| 20 | Audience overlap and frequency collision risk | 1 | No two live campaigns at the same stage target the same audience without an exclusion applied | Overlapping audiences with no exclusions, showing up as frequency above the tier's intent when you divide impressions by approximate unique impressions | Computed frequency per campaign from Pull 1, and the exclusion settings |

**Not assessable when:** points 16 through 19 need the audience definitions, which the
performance pulls do not carry. Ask for the matched audiences list. Point 20 needs
approximate unique impressions in Pull 1; without it, frequency cannot be computed and the
point drops out.

### Creative System (points 21 to 26)

| # | Point | W | Pass | Fail | Evidence to cite |
|---|---|---|---|---|---|
| 21 | Message-market alignment by funnel stage | 1 | Each stage's ads carry that stage's job: naming the problem cold, proving it in the middle, asking for the action at the bottom | A demo ask in a cold campaign with no prior touch, or a pure awareness message in a bottom-funnel campaign | One headline quoted per stage |
| 22 | Creative format mix | 1 | At least two formats live per stage, and at least one non-in-feed format where the tier needs frequency | Every campaign on a single format, or the mid tier carrying no video and no document | Spend and engagement rate by format |
| 23 | Proof density against claim density | 1 | Every quantified claim in a live ad traces to `Headline Stats` or `External Validation Quotes` in `brand-kit/positioning.md` | Any claim with no traceable source, or a stage where every ad claims and none proves | The claim quoted, and the source it traces to or the fact that none exists |
| 24 | Differentiation clarity against category noise | 1 | The primary cold message would not survive being run unchanged by a company in the `Competitors` table, and it does not sell the promise named in `Named Traps` | The message reads as the category default, or repeats a named trap as its own promise | The line quoted, against `Named Traps` and `The Pillars`, and against the white space analysis only if that skill has run |
| 25 | CTA appropriateness by audience temperature | 1 | Cold ads use a low-commitment CTA from `Calls to Action`, bottom-funnel ads use the high-commitment ones | A high-commitment CTA on a cold audience, or a low-commitment CTA on a high-intent retargeting push | The CTA used at each stage |
| 26 | Creative fatigue risk and refresh cadence | 1 | No live ad shows CTR falling across consecutive periods while its frequency rises, and each tier holds enough distinct creatives for its projected frequency | A named ad whose CTR declined across consecutive periods as frequency climbed, or a high-frequency tier running on a handful of creatives | The ad, its CTR by period, its frequency, and the period the decline started |

**Not assessable when:** points 21 through 25 need the ad copy, which no pull above returns.
Ask for a creative export or screenshots. Point 26 needs ad-level performance by period.
With campaign-level data only, say the fatigue analysis could not run and do not infer it
from a campaign-level CTR drift, which has other causes.

### Delivery and Spend Control (points 27 to 31)

| # | Point | W | Pass | Fail | Evidence to cite |
|---|---|---|---|---|---|
| 27 | CPM levels by campaign type and audience | 1 | Each campaign's CPM sits inside the spread of the account's own campaigns of that type, or the gap is explained by audience size or format | An outlier CPM against the account's own median for that type with no explanation offered | CPM by campaign against the account's median for the type. Never against an external benchmark unless the user supplied one |
| 28 | Frequency control and saturation thresholds | 1 | Computed frequency sits inside the band the user names for that tier: moderate on a 90-day retarget, low on a 180-day nurture, high on a 30-day push | Cold prospecting running at retargeting frequency, or a high-intent push running at nurture frequency | Impressions divided by approximate unique impressions, per campaign, against the stated tier |
| 29 | Ad scheduling and dayparting | 1 | Either dayparting is deliberately off, or it is on and the day and hour data supports the schedule in force | A schedule applied with no supporting data behind it | The schedule and the day or hour figures behind it |
| 30 | Budget distribution across funnel stages | 1 | Monthly spend by group is stable or ramping on purpose, and campaigns deliver close to the budget set against them | Campaigns persistently under-delivering their budgets, or a group's spend swinging month to month with no stated cause | Monthly spend by group from Pull 6, against the budgets set |
| 31 | Spend efficiency against learning stability | 1 | As spend scales, CPA and CPM stay inside the account's own trailing variance | Spend up and CPA up in the same period with no named cause | The month by month figures from Pull 6 |

**Not assessable when:** point 28 if the user has not stated an intended frequency for each
tier, which is a question to ask rather than an assumption to make. Point 29 if no day or
hour breakdown is available, which is the common case. Point 30 if campaign budgets were not
exported alongside spend.

### Funnel and Revenue Alignment (points 32 to 35)

| # | Point | W | Pass | Fail | Evidence to cite |
|---|---|---|---|---|---|
| 32 | Funnel handoff logic | 1 | Each campaign's destination matches its stage, and the page is live and consistent with the ad's promise | Every campaign pointing at the homepage, or a bottom-funnel ad landing on a blog post | The destination per campaign, against its stage |
| 33 | Retargeting depth and sequencing logic | 1 | Creative differs across recency bands and advances the argument rather than repeating it | The same creative running across every band | The creative in each band |
| 34 | Assisted conversion visibility and expectations | 1 | The document states which conversion counts are platform-reported last touch, and gives an assisted or multi-touch view where CRM data allows one | Last-touch counts presented as the full contribution of the channel | Both figures, or the plain statement that the second one is unavailable and why |
| 35 | Whether the math from spend to pipeline works | 2 | The chain from spend to conversions to pipeline closes using `Average deal size` and `Acceptable CPA band` in `Channel Economics`, with every input named and sourced, and blended CPA sits inside the band | Blended CPA above `CPA red line`, or the chain cannot be built because the recorded conversions are not the qualified leads those figures describe | The arithmetic written out in full, each input labeled with where it came from |

**Not assessable when:** point 32 needs destination URLs. Point 33 needs creative by
audience. Point 35 is not assessable when the account counts MQLs and no conversion to
qualified lead rate has been supplied. Say so plainly rather than inventing a rate, because
this point is the one an executive will check.

### Scoring the 35 points

```
Pass           = full weight
Partial        = half weight, only where the pass condition has more than one named part
Fail           = zero
Not assessable = excluded from both the earned total and the available total
```

Category score, and account health, both run on the same arithmetic:

```
category_score = earned weight in the category / assessable weight in the category x 100
account_health = total earned weight / total assessable weight x 100
```

Weighted, not averaged across categories. A category where four of six points were not
assessable carries less influence than one scored in full, which is the correct behavior:
the score should follow the evidence.

**Report the coverage with the score, every time.** Write it as "account health 68 out of
100, from 24 of 35 points assessable" and list the 11 that were not, with the input that
would make each one assessable. A score reported without its coverage is a claim about the
whole account built from part of it.

**Below 20 of 35 assessable, do not report a number at all.** Report the band, the points
that failed, and what to send so the rest can be scored. A composite built on a minority of
the instrument is not a measurement.

Bands, and the band is what travels:

- **85 to 100, Healthy.** Structural work is sound. Fix what failed and move on.
- **65 to 84, Needs work.** Something structural is wrong and it is costing money now.
- **Below 65, Critical.** The account is not built to the strategy. Rebuild before scaling.

Two auditors working this instrument on the same account can differ by ten points or more,
mostly on the points that need judgment about intent: 21, 24, and 27. Report the band and
the specific failed points, which are the actionable part. Never present the number as a
precise measurement to a third party.

## Document structure

### Document design

Read the `Palette`, `Typography`, and `Document Footer` sections of `brand-kit/brand.md`.
Never hardcode a color or a typeface.

| Element | Reads from |
|---|---|
| All text | `Body` under `Typography` |
| Title, 24pt bold | `Primary` |
| Section headers (H1), 16pt bold | `Primary` |
| Subsection headers (H2), 13pt bold | `Body text` |
| Body text, 11pt, 1.15 line spacing | `Body text` |
| Table header row fill | `Background soft` |
| Table borders | `Rule / border` |
| Captions and table notes | `Muted text` |
| ICP match / win fill | `Positive` tint, from the semantic report colors |
| Mixed / caution fill | `Caution` tint |
| Non-ICP / problem fill | `Problem` tint |
| Neutral highlight box | `Background soft` |
| Footer, right-aligned | `Document Footer`, in `Muted text` |

Page size US Letter, one-inch margins. If `Palette` still has blank placeholders, stop and
tell the user to fill it in.

### Section 1: Executive dashboard

Page one. A two-by-three grid of KPI tiles built as a table with colored cell backgrounds.
Each tile: metric value at 20pt bold, label at 9pt bold, subtitle at 8pt italic.

| Tile | Metric | Color logic |
|---|---|---|
| 1 | Total spend | Neutral |
| 2 | Conversions | Neutral |
| 3 | Blended CPA | Against `Acceptable CPA band` and `CPA red line` in `Channel Economics`: inside the band is positive, above the band is caution, above the red line is problem |
| 4 | **ICP fit profile**, three figures in one tile: seniority, function, company size | Color on the lowest of the three: positive at or above 70, caution from 50 to 69, problem below 50. The subtitle names the weakest dimension |
| 5 | Audience waste | Problem, as the dollar amount of spend on Non-ICP profiles. Report it per dimension, because a dollar can be Non-ICP on seniority and ICP on company size, and summing across dimensions double counts it |
| 6 | Account health | Score out of 100 with its coverage on the same line, for example "68 / 100, from 24 of 35 points", plus the one-word band from `Scoring the 35 points` |

Below the tiles, three or four sentences of narrative.

#### The ICP Fit Profile

Three numbers, reported side by side and never averaged into one.

For each dimension, compute the share of spend that landed in the ICP column of
`The Fit Matrix`, giving half credit to Mixed:

```
dimension_score = (ICP spend + 0.5 x Mixed spend) / total spend x 100
```

Run it three times:

- **Seniority fit**: spend reaching the seniority values in the ICP column
- **Function fit**: spend reaching the job functions in the ICP column
- **Company size fit**: spend reaching the size brackets in the ICP column

Spend weighting inside a dimension is the whole point: a segment holding 40% of the budget
moves that dimension four times as much as one holding 10%, and an unweighted average would
let a tiny well-targeted segment mask a large leaking one. On the CSV path, where the export
carries impressions and no spend, substitute impressions and label every figure
impression-weighted.

**Do not average the three.** The platform returns each demographic as its own breakdown of
the same spend. Each one is a marginal distribution: it tells you how the money split across
seniority, and separately how it split across function, and separately how it split across
company size. Nothing in those three tables says whether any given dollar cleared all three
at once. An account can score high on all three and still have put almost nothing in front of
a director in the right function at a company of the right size, because the seniority match
and the function match can sit in different segments of the audience.

So the three numbers are the deliverable. Each one answers its own question honestly:

- Seniority fit answers "how much of the money reached the right level."
- Function fit answers "how much of the money reached the right department."
- Company size fit answers "how much of the money reached companies of the right size."

None of them answers "how much of the money reached the right buyer," and the document must
not say that any of them does.

**If Pull 7 returned a genuine joint breakdown**, none of this applies. Compute the share of
spend that landed in the ICP column on all three dimensions at once, call it the ICP Fit
Score, name the pull it came from, and report the three marginals underneath it as the
dimension detail.

**Optional composite, and only in this form.** Where no joint breakdown exists, the joint
figure is still bounded by the three marginals, and the bounds are worth reporting because
they show how little the marginals pin down. Compute them on the strict ICP shares with no
half credit, since the arithmetic is about overlapping sets of dollars and half credit is a
scoring convention rather than a share of spend:

```
joint_upper = min(seniority_ICP_share, function_ICP_share, size_ICP_share)
joint_lower = max(0, seniority_ICP_share + function_ICP_share + size_ICP_share - 2)
```

Worked arithmetic, not data from any account: strict ICP shares of 80%, 70%, and 60% give an
upper bound of 60% and a lower bound of 10%. The true joint figure is somewhere in that
range and the marginals cannot narrow it further. Report the range as a range, label it
"joint ICP reach, bounded range," and state that it is arithmetic on the three marginals
rather than a measurement. If a reader wants one number from it, the honest answer is the
upper bound, described as a ceiling the account cannot have exceeded.

**Carry this sentence, or its substance, in the document under the tiles:** these three
figures are separate breakdowns of the same spend. A combined figure for spend that reached
the right seniority and the right function and the right company size at once is not
derivable from standard platform reporting, and none of these numbers should be read as one.

Industry is the fourth dimension in the matrix and it is reported in Section 2 but kept out
of the score. Industry classification on the platform is noisy, self-reported, and often
wrong at the account level, so folding it in adds variance without adding signal. Say this in
a footnote under the score so nobody assumes it was overlooked.

Exclude thought leadership campaigns from the audience waste figure but not from the fit
score. Their targeting still has to be right; only their CPA is exempt.

Present the score prominently. It is the single most quotable finding in the document.

### Section 2: ICP fit profile breakdown

Four sub-tables, one per dimension of `The Fit Matrix`. Open the section by naming what these
tables are: three independent breakdowns of the same spend, read one dimension at a time.

**Seniority fit:**

| Seniority | Spend | % of total | Fit | Verdict | Action |

**Company size fit:**

| Company size | Spend | % of total | Fit | Verdict | Action |

**Job function fit:**

| Function | Spend | % of total | Fit | Verdict | Action |

**Industry distribution (reported, not scored):**

| Industry | Spend | % of total | Fit | Note |

Color every row by its column in the matrix: `Positive` tint for ICP, `Caution` tint for
Mixed, `Problem` tint for Non-ICP. The Fit column carries the word ICP, Mixed, or Non-ICP so
the classification survives a black-and-white print.

Follow each table with a callout naming the one finding that matters for that dimension,
including the dollar amount at stake. Keep the dollar amounts inside their own dimension. A
sentence that adds seniority waste to function waste is counting the same dollars twice.

Close the section with the bounded joint range if you computed one, and with the plain
statement that the platform does not report the three dimensions crossed. If Pull 7 did
return a joint breakdown, say that instead and give the figure.

### Section 3: The 35-point scorecard

| Category | Score | Assessment |

Six rows: Signal Integrity, Architecture and Learning, Audience Coverage, Creative System,
Delivery and Spend, Funnel and Revenue. Assessment is one sentence, specific enough to act on.

Below the six rows, add the coverage line: how many of the 35 points were assessable, how
many were not, and the one input that would unlock the largest group of them. Then a
highlight box with account health out of 100 computed as `Scoring the 35 points` defines it,
its band, and a one-line verdict. Where fewer than 20 points were assessable, the box carries
the band and the failed points and no number, and says why.

Follow the box with the not-assessable list itself, as a short table:

| # | Point | What would make it assessable |

### Section 4: Performance trends, six months

| Month | Spend | Clicks | Conv | CPA | Trend | Notes |

Directional words in the Trend column: Baseline, Improving, Declining, Stable, Best Month,
Scaled Up. Notes carries the cause when one is visible. Two or three sentences below on the
trajectory.

### Section 5: Spend efficiency

**The benchmark column is conditional and it is never yours to fill.**

Before building this table, ask the user one question: do you have a benchmark source you
want this measured against, and can you give me the source name and its publication date?

- **They supply one.** Include the benchmark column, use their figures unchanged, and put
  the source name and date in a footnote line under the table. If they give figures with no
  source or no date, ask for both. If they still cannot give both, treat it as no benchmark.
- **They do not.** Omit the benchmark column entirely, drop the Verdict column with it, and
  write under the table: no external benchmark source was available, so these figures are
  reported against this account's own distribution across the window rather than against an
  outside reference. That sentence is not an apology. An account measured against itself
  over six months is a more defensible read than an account measured against a number
  nobody can source.

**You may not supply a benchmark figure or a citation from your own knowledge.** Not a CTR,
not a CPM, not a CPC, not an engagement rate, not "typical B2B is around," and not a source
name with a year attached. A remembered figure with a remembered citation is the exact
failure this document promises it does not commit, and it fails in front of the one reader
who will check.

**Metric table, always:**

| Metric | This account | Account median | Direction over the window |

Rows: in-feed image CTR, video CTR, in-feed CPC, in-feed CPM, right-rail CPM, text ad CPA,
spotlight ad CPA, engagement rate. Where the user supplied benchmarks, add their column and
a Verdict column beside it.

**Conversion performance by campaign type:**

| Campaign type | Spend | Conv | CPA | Role in the system |

Color efficient converters with the `Positive` tint and leave awareness and trust layers
neutral, because a neutral cell is a claim that the campaign is doing a different job, not a
worse one.

**Add this note under the table, every time:** thought leadership campaigns are not judged on
CPA. Their job is trust and familiarity ahead of the search, and last-click attribution
cannot see that work. Judging them on CPA reliably kills the campaigns that make everything
downstream cheaper. Evaluate them on engagement rate, video completion, follower growth, and
the branded search and direct traffic lift that follows them.

### Section 6: Campaign architecture review

| Group | Spend | Clicks | Conv | CPA | Role |

Then two bullet lists: what is working, and what needs attention. In the second list, lead
each bullet with the problem in bold, then the campaign it lives in, then the fix.

### Section 7: Creative system and frequency

- Format mix analysis with engagement rate by format
- A messaging check against `Named Traps` and `The Pillars` in `brand-kit/positioning.md`.
  Are the ads claiming what every competitor in the `Competitors` table claims, or are they
  saying something only this company can say? **Include the white space comparison only if
  `competitive-white-space` has run in this conversation.**
- Frequency assessment across the three tiers: prospecting, retargeting, high-intent push.
  Report actual frequency against the intended tier and name the gap.
- Creative count against projected frequency. A tier running at high frequency on three
  creatives is already fatigued.
- Fatigue risk callout, with the specific ads and the week they started declining.

### Section 8: Quick wins with projected impact

| Action | Est. savings / qtr | Est. impact | Effort | Confidence |

Seven to ten actions, each specific enough to execute without a follow-up question. Anchor
them to findings: exclude the company size brackets in the Non-ICP column from cold
campaigns, switch retargeting to even rotation, add right-rail placements to raise frequency
in the nurture tier, add a thought leader campaign under the person named in the thought
leadership note, refresh the creative in whichever tier the fatigue analysis flagged.

Below the table, a `Positive`-tinted callout with the combined projection: savings range,
additional conversions, and the estimated improvement to each fit dimension the actions
touch, named dimension by dimension. Excluding a company size bracket moves company size fit
and leaves seniority fit where it was.

### Section 9: Cross-channel integration summary

**Include this section only if a Google Ads audit has been run in the same conversation.**
Otherwise skip it and renumber. Do not invent search findings.

| Dimension | Google Ads | LinkedIn Ads |

Rows: primary role, biggest strength, biggest gap, retargeting, total waste, priority fix.

Below, a unified paragraph with the combined recoverable figure. The argument to make: search
captures demand that exists and cannot qualify who is behind the click, while paid social
qualifies the audience precisely and cannot capture demand at the moment of intent. Each one
covers the other's structural blind spot. Where the Google audit found a demand gap, this is
the channel that closes it.

### Section 10: Key takeaways

Five to seven executive bullets: account health score with its coverage, the three fit
dimensions and which one is leaking most, which campaign types quietly outperform, the six-month trajectory, the combined
cross-channel impact if a Google audit ran, and the single most important next move.

## Writing rules

Follow `brand-kit/voice.md` in full. Audit-specific additions:

- Tie every demographic finding back to `The Fit Matrix` by name.
- Tie every messaging finding back to `The Pillars` and `Named Traps`, without naming the
  frameworks in the document. Internal scaffolding stays internal.
- Quantify everything. A leak described without a dollar amount does not get fixed.
- No hedging on findings. State it or cut it.
- Short paragraphs, two or three sentences. Tables for data.
- **Never invent a number.** Every figure traces to the account data or to the brand kit.
  Label estimates as estimates in the same sentence.
- **Never supply a benchmark from memory.** No CTR, CPM, CPC, CPA, conversion rate, or
  engagement rate presented as an industry, platform, or category norm may come from your own
  knowledge, and no citation may be attached to one. Benchmarks enter this document only when
  the user hands you the figure, the source, and the date. Otherwise the comparison is
  against this account's own history, and the document says so.
- Never present the three fit dimensions as one combined figure, in any section, in any
  sentence, including the executive summary and the chat message.
- Bold sparingly.

## Word document output

Generate the document with the `docx` skill available in the session. Reference it by name
and let the host resolve it. Follow its rules in full: US Letter page size, real bullet list
formatting rather than typed characters, tables with both column widths and per-cell widths
in DXA, cell margins of 80 top and bottom and 120 left and right, overridden Heading1 and
Heading2 styles, no newline characters inside paragraphs. Validate the file after generating
it.

**If no docx skill is available in the session,** output the full audit as clean markdown
with every table preserved, and tell the user plainly that a Word document could not be
generated and why.

## Output notes

- After generating the document, write three or four sentences in chat: the three fit
  dimensions as three numbers, the one leaking the most spend, and the top recommendation.
  Then present the file. Do not compress the three into one figure in chat either.
- Do not reproduce the document in the chat.
- If demographic data is missing, run the audit without Sections 1 and 2 and say why they are
  absent. A fit figure computed from partial demographics is worse than no fit figure.
- If the demographic export carried impressions and no spend, say so in chat as well as in
  the document. The user should know the headline figures changed weighting before they
  forward the file.
- If the account is small or newly launched, compress. Ten sections forced out of a thin
  account reads as padding.
