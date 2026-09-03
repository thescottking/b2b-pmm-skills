---
name: linkedin-ads-audit
description: >
  A 35-point LinkedIn Ads audit scored against your own buyer definition. Calculates an ICP
  Fit Score, the share of paid social spend that actually reached the right seniority,
  function, and company size. Use when someone asks to "audit our LinkedIn ads," "review our
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
different job at each stage? Is budget flowing toward signal? And the question that produces
the headline number: are the ads reaching decision-makers at target-size companies, or
leaking spend on solopreneurs, students, and job seekers?

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
- **Right-rail placements buy cheap frequency.** Text, spotlight, and follower ads deliver
  15 to 30 impressions per user at a fraction of in-feed cost. Use them to raise frequency
  without inflating in-feed CPMs.
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

### Option 2: CSV export or pasted data

Campaign Manager exports the same breakdowns from the demographics view. Accept the files or
pasted numbers, and map them onto the six data sets above before analyzing. If the
demographic breakdowns are missing, the ICP Fit Score cannot be computed. Say that rather
than estimating it, and offer to run the rest of the audit without Sections 1 and 2.

## Reading the fit matrix

`The Fit Matrix` in `brand-kit/icp.md` is a three-by-four grid: ICP, Mixed, and Non-ICP
across seniority, company size, job function, and industry. It is the only input that decides
whether a dollar was well spent.

- **ICP** is who the company wants. Spend here counts fully toward the fit score.
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

Six categories. Score each as a percentage and present the scorecard in Section 3.

### Signal Integrity (points 1 to 6)

1. Insight Tag installation and health
2. Conversion event setup and hierarchy
3. CRM integration and offline conversion sync
4. UTM parameter discipline
5. Attribution model clarity and expectations
6. Revenue path traceability

### Architecture and Learning (points 7 to 14)

7. Campaign group logic and funnel stage separation
8. Objective selection per funnel stage
9. Campaign naming convention clarity
10. A/B test structure and isolation
11. Budget allocation by funnel stage
12. Bid strategy appropriateness by objective
13. Learning phase stability
14. Campaign consolidation versus fragmentation balance

### Audience Coverage (points 15 to 20)

15. Cold audience definition and alignment to `The Fit Matrix`
16. Retargeting audience construction: site, video, engagement, CRM
17. Retargeting segmentation by recency, at 30, 90, and 180 days
18. Warm audience signal quality
19. Lookalike usage appropriateness, which at most budgets means sparingly
20. Audience overlap and frequency collision risk

### Creative System (points 21 to 26)

21. Message-market alignment by funnel stage
22. Creative format mix: single image, video, document, thought leader, text, dynamic
23. Proof density against claim density
24. Differentiation clarity against category noise, checked against `Named Traps` and
    `The Pillars` in `brand-kit/positioning.md`, and against the white space analysis if one
    has been run
25. CTA appropriateness by audience temperature, using the CTAs in `Calls to Action`
26. Creative fatigue risk and refresh cadence

### Delivery and Spend Control (points 27 to 31)

27. CPM levels by campaign type and audience
28. Frequency control and saturation thresholds
29. Ad scheduling and dayparting, where the data exists to support it
30. Budget distribution across funnel stages
31. Spend efficiency against learning stability

### Funnel and Revenue Alignment (points 32 to 35)

32. Funnel handoff logic, from ad to site to nurture to sales
33. Retargeting depth and sequencing logic
34. Assisted conversion visibility and expectations
35. Whether the math from spend to pipeline actually works, using `Average deal size` and
    `Acceptable CPA band` from `Channel Economics`

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
| 4 | **ICP Fit Score** | Positive at or above 70, caution from 50 to 69, problem below 50 |
| 5 | Audience waste | Problem, as the dollar amount of spend on Non-ICP profiles |
| 6 | Account health | Score out of 100 plus a one-word rating |

Below the tiles, three or four sentences of narrative.

#### The ICP Fit Score

A spend-weighted average across three sub-scores. Spend-weighted is the whole point: a
segment holding 40% of the budget moves the score four times as much as one holding 10%, and
an unweighted average would let a tiny well-targeted segment mask a large leaking one.

For each dimension, compute the share of spend that landed in the ICP column of
`The Fit Matrix`, giving half credit to Mixed:

```
dimension_score = (ICP spend + 0.5 × Mixed spend) / total spend × 100
```

Run it three times:

- **Seniority fit**: spend reaching the seniority values in the ICP column
- **Function fit**: spend reaching the job functions in the ICP column
- **Company size fit**: spend reaching the size brackets in the ICP column

Then average the three:

```
ICP Fit Score = (seniority_fit + function_fit + company_size_fit) / 3
```

Industry is the fourth dimension in the matrix and it is reported in Section 2 but kept out
of the score. Industry classification on the platform is noisy, self-reported, and often
wrong at the account level, so folding it in adds variance without adding signal. Say this in
a footnote under the score so nobody assumes it was overlooked.

Exclude thought leadership campaigns from the audience waste figure but not from the fit
score. Their targeting still has to be right; only their CPA is exempt.

Present the score prominently. It is the single most quotable finding in the document.

### Section 2: ICP Fit Score breakdown

Four sub-tables, one per dimension of `The Fit Matrix`.

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
including the dollar amount at stake.

### Section 3: The 35-point scorecard

| Category | Score | Assessment |

Six rows: Signal Integrity, Architecture and Learning, Audience Coverage, Creative System,
Delivery and Spend, Funnel and Revenue. Assessment is one sentence, specific enough to act on.

Below it, a highlight box with the overall score out of 100 and a one-line verdict.

### Section 4: Performance trends, six months

| Month | Spend | Clicks | Conv | CPA | Trend | Notes |

Directional words in the Trend column: Baseline, Improving, Declining, Stable, Best Month,
Scaled Up. Notes carries the cause when one is visible. Two or three sentences below on the
trajectory.

### Section 5: Spend efficiency and benchmarking

**Benchmark comparison:**

| Metric | This account | B2B benchmark | Verdict |

Rows: in-feed image CTR, video CTR, in-feed CPC, in-feed CPM, right-rail CPM, text ad CPA,
spotlight ad CPA, engagement rate. The benchmark column holds published paid social
benchmarks for B2B, which are external platform reference points rather than company targets.
Cite the source and date under the table. Verdict is a short bold call.

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
additional conversions, and the estimated ICP Fit Score improvement if every action ships.

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

Five to seven executive bullets: account health score, the ICP Fit Score and the dimension
leaking most, which campaign types quietly outperform, the six-month trajectory, the combined
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

- After generating the document, write three or four sentences in chat: the ICP Fit Score,
  the dimension leaking the most spend, and the top recommendation. Then present the file.
- Do not reproduce the document in the chat.
- If demographic data is missing, run the audit without Sections 1 and 2 and say why they are
  absent. A fit score computed from partial demographics is worse than no fit score.
- If the account is small or newly launched, compress. Ten sections forced out of a thin
  account reads as padding.
