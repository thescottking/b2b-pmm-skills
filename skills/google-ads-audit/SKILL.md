---
name: google-ads-audit
description: >
  Audit a Google Ads account against your own buyer definition. Classifies every search term
  by buyer intent (KEEP / WATCH / CUT), quantifies wasted spend, and flags high-intent terms
  that are budget-constrained. Use when someone asks to "audit our Google Ads," "review our
  search campaigns," "run a PPC audit," "do a search term waste analysis," "run an SQR
  audit," "do a keyword audit," "figure out why our search CPA is climbing," or "tell me
  which search terms to add as negatives." Also triggers when someone uploads Google Ads CSV
  exports (campaign, keyword, or search term reports), or asks to pull paid search data from
  a reporting connector.
---

# Google Ads Audit

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

A formatted Word document that goes past surface metrics to diagnose three things: where
search spend is going to people who will never buy, where genuine buyer-intent terms are
starved of budget, and how the account structure should change.

Every verdict in the document traces back to the brand kit. `The Fit Matrix` in
`brand-kit/icp.md` defines who counts as a buyer. `Search Terms` defines what they type.
`Channel Economics` supplies the numbers that turn "expensive" into "too expensive."

## When to use

- Monthly or quarterly review of a paid search account
- After a significant spend change, structure change, or campaign launch
- Pre-planning for a new budget cycle
- When search CPA trends look wrong and the cause is not obvious
- Someone uploads Google Ads CSV exports
- Someone wants to pull the account live through a reporting connector

## Optional context that improves the audit

Run this after `company-recon` and `competitive-white-space` when you can. Recon establishes
what the company sells and how it is positioned, which is what makes "high intent" a
specific judgment rather than a generic one. White space establishes which category terms
are contested and which are open.

If neither has run, the audit still works. It reads the same facts from the brand kit,
just without the market context around them.

## Guiding philosophy

Apply these throughout. They are the reason the output differs from a platform-generated
recommendations tab.

- **Intent beats volume.** A click from someone searching for a platform in your category
  is worth many multiples of a click from someone searching for a definition of it.
- **Favor searches that signal the buyer wants to buy something.** Terms carrying "platform,"
  "software," "vendor," "solution," "pricing," or "for enterprise" are the ones that convert
  in long B2B cycles. Read `Sales cycle length` in `Channel Economics` to know how long
  "long" is for this company.
- **Protect brand efficiently.** Every term in `Brand terms` under `Search Terms` should hold
  near-total impression share at the lowest achievable CPC. The floor is
  `Brand impression share floor` in `Channel Economics`.
- **Capture competitor demand deliberately, not reflexively.** Work from
  `Competitor and alternative terms` in `Search Terms` and the `Competitors` table. Fund
  these only once brand and core category coverage are solid, because they are the most
  expensive clicks in the account.
- **Structure and keyword hygiene matter more than clever ad copy.** A well-built account
  with average creative outperforms a badly built one with excellent creative.
- **Search captures demand that already exists. It cannot tell you who is behind the click.**
  That limit is not a flaw to fix inside the account. It is the reason a paid search audit
  has to end with a demand-creation question rather than a bid adjustment.

## Data input

Three ways in, in order of preference. All three produce the same three data sets.

### Option 1: A reporting connector

If the session has a connector or data integration that reads Google Ads (a marketing data
warehouse, an attribution tool, the Ads API directly), pull the data live. Ask which
connector is available rather than assuming one. Confirm the account ID before pulling.

The field names below are Google Ads API vocabulary and are the same regardless of which
tool fronts them. Adapt the request syntax to whatever connector is present.

**Pull 1: Campaign performance overview**

```
fields: ["campaign_name", "campaign_status", "advertising_channel_type", "spend", "clicks",
         "impressions", "conversions", "ctr", "average_cpc", "cost_per_conversion",
         "search_impression_share", "search_budget_lost_impression_share",
         "search_rank_lost_impression_share"]
date_range: last 3 months
```

**Pull 2: Search term report, this is where the waste lives**

```
fields: ["search_term", "campaign_name", "spend", "clicks", "impressions", "conversions", "ctr"]
date_range: last 3 months
filter: spend > 5
```

**Pull 3: Keyword performance**

```
fields: ["keyword_text", "campaign_name", "ad_group_name", "keyword_match_type", "spend",
         "clicks", "impressions", "conversions", "ctr", "average_cpc", "quality_score",
         "search_impression_share"]
date_range: last 3 months
filter: spend > 5
```

Also pull monthly totals across the trailing six months for the trend section.

### Option 2: CSV export

The user exports the campaign report, the search terms report, and the keywords report from
the Google Ads UI and uploads them. Parse with pandas or the csv module. Column headers vary
by locale and by which columns the user selected, so map headers to the field names above
before analyzing rather than assuming positions.

### Option 3: Pasted data

The user pastes numbers into the conversation. Structure them into the same three data sets
first. If a data set is missing, say which sections of the audit you cannot produce instead
of estimating around the gap.

## Analysis workflow

### Step 1: Establish the buyer context

Before touching a number, write down four things from the brand kit:

1. **What the company sells**, from `Hallway Pitch` and `What We Do`.
2. **Who the buyer is**, from `The Fit Matrix`: the ICP column across seniority, company
   size, job function, and industry.
3. **What high intent looks like**, from `Category terms` and `Competitor and alternative
   terms` in `Search Terms`. High intent means the searcher is trying to evaluate, pilot, or
   buy something in this category.
4. **What a non-buyer looks like**, from `Negative terms` in `Search Terms` plus the Non-ICP
   column of `The Fit Matrix`.

This context drives every verdict in the document. Without it the audit is arithmetic.

### Step 2: Campaign performance diagnosis

For each campaign, assess four things:

- **Spend efficiency.** Compare CPA against `Acceptable CPA band` and `CPA red line` in
  `Channel Economics`. Those numbers are for a sales-qualified lead, not an MQL, so check
  what the account is actually counting as a conversion before you compare.
- **Impression share gaps.** Separate budget-lost from rank-lost. Budget-lost is a funding
  decision. Rank-lost is a relevance or bid problem. They have different fixes and conflating
  them produces a wrong recommendation.
- **Intent alignment.** Does the campaign name and structure map to one clear intent tier:
  brand, competitor, category, or solution?
- **Status.** Active versus paused, and whether anything paused should be revived or killed
  outright.

### Step 3: Search term waste analysis

The highest-value section. Categorize every search term with meaningful spend.

**Terms taking money that should not be:**

- Informational and educational intent: definitions, "what is," "how does it work"
- Research-stage curiosity with no buying signal
- Job-seeker intent: anyone searching to *be* the role rather than to buy for it
- DIY intent where a platform purchase is unlikely: open-source, build-your-own, tutorials
- Navigational queries for other companies' products, including logins and support pages
- Misspellings, foreign language, and gibberish
- Anything matching `Negative terms` in `Search Terms`
- Tangential terms outside the category in `Category we compete in`

For each waste category: explain why it is misaligned, quantify the spend, and recommend a
negative keyword theme rather than a list of one-off exclusions.

**High-quality terms that budget is starving:**

- Terms carrying intent modifiers: platform, software, enterprise, solution, pricing,
  vendors, demo, comparison, "vs," "alternatives to"
- Terms with high CTR and low impression share
- Terms with a good conversion rate and a "limited by budget" signal
- Any term appearing in `Category terms` or `Competitor and alternative terms` that the
  account is either underfunding or missing entirely

### Step 4: Account structure assessment

- **What is working.** Clean intent separation, logical ad group grouping, brand isolated in
  its own campaign.
- **What is broken.** Mixed intent inside one campaign, core and exploratory keywords
  competing for the same budget, broad match doing too much work, brand cannibalizing
  non-brand, competitor terms buried inside generic campaigns.
- **Match type hygiene.** Whether exact, phrase, and broad are being used for the jobs they
  are good at.
- **Budget allocation.** Money should flow in this order: protect brand, fund
  solution-intent, then competitor, then category exploration. Check it against
  `Monthly paid budget` in `Channel Economics`.

### Step 5: Strategic recommendations

- Budget reallocation, stated as a from-and-to with a monthly dollar amount
- Negative keyword themes to add immediately
- Missing keyword classes, checked against `Category terms`, `Competitor and alternative
  terms`, and the trap names in `Named Traps` in `brand-kit/positioning.md`
- Structure changes: what to split, merge, or rebuild
- The demand gap, which is Section 9 below

## Document structure

Eleven sections. Do not force all eleven out of a thin account. If the account is small or
new, say so and compress.

### Document design

Read the `Palette`, `Typography`, and `Document Footer` sections of `brand-kit/brand.md` and
use them. Never hardcode a color or a typeface into the document.

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
| Win / working-spend fill | `Positive` tint, from the semantic report colors |
| Caution / watch fill | `Caution` tint |
| Waste / problem fill | `Problem` tint |
| Neutral highlight box | `Background soft` |
| Footer, right-aligned | `Document Footer`, in `Muted text` |

Page size US Letter, one-inch margins.

If `Palette` still has blank placeholders, stop and tell the user to fill it in. Do not
substitute defaults.

### Section 1: Executive dashboard

Page one, and it sets the tone for everything after it. Build a two-by-three grid of KPI
tiles as a table with colored cell backgrounds. Each tile carries one large metric value
(20pt bold), a label (9pt bold), and a one-line subtitle (8pt italic).

| Tile | Metric | Color logic |
|---|---|---|
| 1 | Total spend | Neutral |
| 2 | Conversions | Neutral |
| 3 | Blended CPA | Compare to `Acceptable CPA band` and `CPA red line` in `Channel Economics`. Inside the band is positive, above the band is caution, above the red line is problem. |
| 4 | Brand impression share | Compare to `Brand impression share floor`. At or above is positive, within ten points below is caution, further below is problem. |
| 5 | Recoverable waste | Problem, as a dollar amount |
| 6 | Account health | One word: Healthy, Needs Work, or Critical |

Below the tiles, three to four sentences summarizing the finding, not the method.

### Section 2: Performance trends, six months

| Month | Spend | Clicks | Conv | CPA | Trend | Notes |

The Trend column uses directional words: Baseline, Improving, Declining, Stable, Best Month,
Scaled Up. Bold the significant ones. Notes carries brief context: a structure change, a
match type shift, a seasonal effect.

Below the table, two or three sentences naming the single most important trend. Tie the
change to a cause when the data supports one, and say the cause is unclear when it does not.

### Section 3: Account overview

| Campaign | Status | Spend | Clicks | Conv | CPA | CTR | Imp Share |

Two or three sentences of interpretation below it.

**Benchmark comparison sub-table:**

| Metric | This account | B2B SaaS benchmark | Verdict |

Rows: brand CTR, non-brand CTR, brand CPC, non-brand CPC, brand impression share, conversion
rate. The benchmark column holds published paid search benchmarks for B2B software, which are
external reference points and not company-specific choices. Cite the benchmark source and its
date in a footnote line under the table so a reader can check it. The Verdict column is a
short bold call: "On track," "Above benchmark," "Critical gap."

### Section 4: Spend waste analysis

The money section. Lead with a **waste waterfall** that starts at total spend and strips each
waste category away layer by layer, ending at effective working spend.

| Layer | Amount | % of total | Running total |

Fill waste rows with the `Problem` tint, the final working-spend row with the `Positive`
tint, and the opening total row with `Background soft`.

Below the waterfall, a problem-colored callout with the total waste percentage and the
annualized figure. Annualizing is what makes a monthly number land with an executive.

Then list each waste category as a short block: the category name, the dollar amount, three
or four real search term examples from the data, and one line on why that intent does not
convert for this buyer.

### Section 5: Top 25 search terms

Sort by spend descending, take the top 25.

| # | Search term | Spend | Clicks | Conv | CPA | Conv % | Verdict |

Color the verdict cell: `Positive` tint for KEEP, `Caution` tint for WATCH, `Problem` tint
for CUT.

**Classification is intent-first, not conversion-first.**

The primary question for every term is this: *is the person behind this search plausibly
someone in the ICP column of `The Fit Matrix`, looking to evaluate, pilot, or buy in this
category?*

If yes, the term is KEEP regardless of whether it has converted in ninety days. Read
`Sales cycle length` in `Channel Economics`. When the cycle is measured in months, a
ninety-day window of zero conversions on a strong-intent term tells you nothing about the
term. It tells you to investigate the landing page, the offer, or the ad copy.

**KEEP, buyer intent is present:**

- Anything in `Brand terms` under `Search Terms`, including founder and executive names.
  Always KEEP, regardless of performance.
- Anything in `Category terms` carrying an enterprise or scale modifier.
- Terms combining "platform," "software," "vendor," "solution," "enterprise," or "for
  business" with the core category from `Category we compete in`.
- Terms combining "pricing," "demo," "alternative," "vs," "alternatives to," or "comparison"
  with a name from the `Competitors` table. This is comparison shopping and it is late-stage.
- Competitor navigational terms only when paired with a qualifier that signals switching
  intent, matching the patterns in `Competitor and alternative terms`.
- Any term with conversions at any CPA. Conversion validates intent.

**WATCH, ambiguous intent, monitor for six months:**

- Broad category terms with no platform or solution modifier. Could be buyer research, could
  be idle curiosity.
- Generic single-concept queries naming the technology without naming a need.
- How-to and troubleshooting terms. Frustrated practitioners sometimes become buyers and more
  often stay DIY.
- Anything where intent genuinely splits close to even between buyer and non-buyer.

**CUT, clearly not a buyer:**

- Navigational searches for other companies' products: logins, support portals, training
  sites, documentation.
- Foreign language, misspellings, gibberish.
- Job and hiring searches where the searcher *is* the role rather than buying for it.
- UTM strings and other technical artifacts leaking into the term report.
- DIY and build-it-yourself tooling searches.
- Purely academic intent: research papers, coursework, thesis topics.
- Anything matching `Negative terms` in `Search Terms`.

**The rule that matters most:** a term with heavy spend and zero conversions is not
automatically a CUT. If the intent behind it is "I am looking for a platform in this
category," that is a landing page problem or an offer problem, not a targeting problem.
Cutting it hides the real failure and removes the demand at the same time. Only cut when the
intent itself is wrong.

**Verdict summary table** below the term table:

| Category | Terms | Spend | Notes |

KEEP, WATCH, and CUT totals with the reasoning for each. Close with a paragraph on the intent
quality distribution and which WATCH terms to revisit in ninety days.

### Section 6: High-intent terms that are underserved

Terms that convert, or should, and cannot because of budget or absence:

- Terms below 50% impression share carrying a strong intent signal
- Terms converting at a high CPA because waste terms are bidding up the same auctions
- Missing keyword classes: solution-level and competitor-alternative terms absent from the
  account entirely
- A coverage check against `Named Traps` in `brand-kit/positioning.md`. A trap you have named
  is a phrase buyers eventually search. If the traps are not in the account as keywords, say
  which ones to test and at what match type.

### Section 7: Account structure assessment

- What is working, and should be left alone
- What is broken, with the specific campaign named
- Recommended structure changes
- Match type recommendations
- Budget reallocation:

| From | To | Amount / mo | Rationale |

### Section 8: Quick wins with projected impact

A table, not a numbered list. Seven to ten specific actions.

| Action | Est. savings / qtr | Est. add'l conv | Effort | Confidence |

Effort is a real estimate: "5 min," "Low," "Medium," "1 hour." Confidence is High, Medium, or
Low in bold. A quick win with Low confidence is still worth listing; hiding the uncertainty
is what makes an audit lose credibility on the second read.

Below the table, a `Positive`-tinted callout with the combined projected impact: total
savings range, total additional conversions range, and the note that none of it requires
additional spend.

### Section 9: The demand gap

Paid search captures demand that already exists. It cannot create it, and it cannot tell you
who is behind the click. This section quantifies both limits and says what follows from them.

Cover four things:

1. **How much of the traffic is out of ICP.** Estimate from the search term mix, since the
   platform will not tell you the searcher's title or company size. Say plainly that this is
   an estimate from intent signals rather than a measured figure.
2. **Whether the category has enough search demand to hit the pipeline target.** Take total
   available impressions on the terms in `Category terms`, apply realistic CTR and conversion
   rates, and compare the result against what `Channel Economics` implies the company needs.
   When the ceiling on search demand sits below the target, the gap is not a bidding problem.
   No budget increase closes it, because the searches do not exist yet.
3. **What that gap implies.** A demand gap is a demand-creation problem. The buyers exist,
   they have the problem described in `Named Traps`, and they are not yet searching for the
   category because they have not named their problem the way you name it. Reaching them
   requires targeting by who they are rather than by what they typed.
4. **Which awareness and consideration gaps search structurally cannot fill.** Name them
   against the pillars and traps in `brand-kit/positioning.md`.

Write this as analysis that follows from the data. It is a strategic conclusion, not a pitch
for another channel, and it should read as one.

### Section 10: Cross-channel integration summary

**Include this section only if a LinkedIn ads audit has been run in the same conversation.**
Otherwise skip it and renumber. Do not invent LinkedIn findings.

| Dimension | Google Ads | LinkedIn Ads |

Rows: primary role, biggest strength, biggest gap, retargeting, total waste, priority fix.

Below the table, a unified recommendations paragraph with the combined recoverable figure and
total projected additional conversions across both channels.

### Section 11: Key takeaways

Five to seven executive bullets: account health, total recoverable waste, the KEEP/WATCH/CUT
split across the top 25, the top structural change, the demand gap finding, and the next
three moves in order.

## Writing rules

Follow `brand-kit/voice.md` in full. It governs. These are the audit-specific additions:

- Confident and consultative. This is written for a CMO or a VP of Demand Gen.
- Quantify everything. Dollars, percentages, impression share points.
- No hedging on findings. If something is broken, say it is broken.
- Short paragraphs, two or three sentences, or bullets.
- Tables for anything data-heavy.
- **Never invent a number.** Every figure traces to the account data or to the brand kit. If
  a figure is an estimate, label it as one in the same sentence.
- No source links in the document body. Benchmarks get a footnote line under their table.
- Bold sparingly. Everything bold is nothing bold.

## Word document output

Generate the document with the `docx` skill available in the session. Reference it by name
and let the host resolve it. Follow its rules in full, and specifically:

- US Letter page size
- Real bullet list formatting, never unicode bullet characters typed into a paragraph
- Tables need both column widths and per-cell widths set, in DXA
- Cell margins: top 80, bottom 80, left 120, right 120
- Override the built-in Heading1 and Heading2 styles rather than styling headings inline
- Never put a newline character inside a paragraph. Use separate paragraphs.
- Validate the file after generating it, using whatever validation step the docx skill
  provides

**If no docx skill is available in the session,** output the full audit as clean markdown,
preserving every table, and tell the user plainly that a Word document could not be generated
and why. Do not silently downgrade the deliverable.

## Output notes

- After generating the document, write three or four sentences in chat: total waste found,
  the single biggest issue, and the top recommendation. Then present the file.
- Do not reproduce the document in the chat.
- If the account is small or newly launched, say so and shorten the audit. Eleven sections
  forced out of a thin account reads as padding and undermines the sections that matter.
