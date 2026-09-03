---
name: company-recon
description: >
  Fast strategic recon on any B2B company from a single URL. Use this skill whenever
  someone pastes a company website and wants to understand the business quickly.
  Triggers include "run recon on this company," "what can you tell me about [URL],"
  "give me a snapshot of [company]," "research this prospect," "pull up this website,"
  "company overview," "scout this account," "who are these people," "break down this
  company," "check out this vendor," or any variation where a URL arrives and the
  reader wants to know what the company does, who it sells to, how it is positioned,
  what marketing it is running, and whether it matters to us. This is the fast
  pre-call read, not a deep multi-company study. Trigger it even when the user pastes
  a bare URL with no other words.
---

# Company Recon

## Before you write anything

Read these first. They are the source of truth and this skill does not invent
around them.

1. `brand-kit/brand.md`: name, palette, fonts, CTAs
2. `brand-kit/voice.md`: house style and banned constructions
3. `brand-kit/positioning.md`: the frame, pillars, traps, stats, vocabulary
4. `brand-kit/icp.md`: who you sell to, and your competitor set
5. `brand-kit/capabilities.md`: read before making any product claim

If `brand-kit/` is missing or still has its template placeholders, stop and tell
the user to run `brand-kit-setup`. Do not proceed with invented positioning.

---

## What this produces

A seven-section strategic snapshot of any B2B company, built from public sources
in about five minutes, delivered as a formatted Word document.

The reader should finish it knowing what the company does, who it sells to, how
it is positioned, what marketing it is actually running, where its funnel is
thin, and whether it is a prospect, a partner, a competitor, or noise.

## When to use it

- Pre-call research before a sales, partner, or investor conversation
- Scouting an inbound lead, an event contact, or a name from a campaign list
- A quick read on one player in your category before deciding to study it further
- Partner evaluation: reseller, systems integrator, or technology alliance
- Any time the only input is a URL

## When not to use it

- Three to five companies compared against each other. Use `competitive-white-space`.
- A paid-channel performance review. Use `google-ads-audit` or `linkedin-ads-audit`.
- Long-form content built from the findings. Recon first, then `content-writer`.

---

## Workflow

### Step 1: Fetch the website, in parallel

Fire these fetches simultaneously. Do not ask the user which pages to visit.

From the base URL:

1. **Homepage** (the URL provided)
2. **About or company page**: try `/about`, `/about-us`, `/company`
3. **Product or services page**: try `/products`, `/services`, `/solutions`, `/platform`
4. **Pricing**: try `/pricing`, `/plans`. Often absent, which is itself a signal.
5. **Blog or resources index**: try `/blog`, `/resources`, `/insights`. Index only, for content themes.
6. **Customers or case studies**: try `/customers`, `/case-studies`, `/success-stories`

If a page 404s or bounces to the homepage, drop it and move on. Do not retry.

### Step 2: Run targeted searches, in parallel

Four to six searches to fill the gaps a website will never admit to:

1. `[company] LinkedIn company page`: follower count, posting cadence
2. `[company] reviews` OR `[company] G2` OR `[company] Capterra`: outside perception
3. `[company] competitors`: who the market compares them against
4. `[company] funding OR revenue OR employees`: scale signals
5. `site:[company domain] [category terms]`: run this probe using the **Category
   terms** from `Search Terms` in `brand-kit/icp.md`. This is what tells you
   whether the company plays in your market at all. If that list is empty, use
   the category named in `brand.md` under `Company` and say in the document that
   the probe was approximate.
6. `"[company]" case study OR testimonial`: what proof they have in market

### Step 3: Produce the document

Build the seven sections below, then hand off to the document step.

---

## Document sections

### Section 1: What they do

Two to three sentences. The problem they solve, who has it, and the business
model: software, services, marketplace, platform, agency. Frame it around the
buyer's problem, not their feature list.

### Section 2: Who they sell to

A tight table or bullet list:

- **Industries**: verticals visible in case studies, logos, and copy
- **Company size**: enterprise, mid-market, SMB, or a mix. Infer from pricing,
  logo wall, and the vocabulary of the site.
- **Buyer roles**: who signs. Infer from messaging, demo CTAs, content topics.
- **Geography**: footer, office locations, currency, case studies

### Section 3: How they are positioned

- **Core value proposition**: one sentence, pulled from the hero or H1
- **Claimed differentiators**: three to five bullets on what they say is unique
- **Proof in market**: logos, case studies, certifications, awards, data claims
- **Pricing signal**: model and range if public. "Sales-led, custom pricing" if
  not, which tells you about deal size and cycle.

### Section 4: What marketing they are running

Walk every visible channel:

- **Website and SEO**: content depth, blog volume, resource library, site
  quality, visible conversion paths
- **LinkedIn**: followers, posting frequency and themes, whether leadership posts
- **Paid**: evidence of paid search or paid social from search results and
  public ad libraries
- **Content and thought leadership**: webinars, podcasts, reports, ebooks, video
- **Email**: newsletter signup, gated assets, lead magnets
- **Outbound and events**: conference presence, partner directories, sponsorships

Close the section with a **Marketing Maturity Rating**, bolded so it stands out:

| Rating | What it looks like |
|---|---|
| **Early** | Thin content, no visible paid, no funnel |
| **Building** | Some content, first paid experiments, one conversion path |
| **Established** | Consistent content, multi-channel paid, a clear funnel |
| **Advanced** | Attribution, personalization, full-funnel coverage, segmented offers |

State the rating and give the one-line basis for it.

### Section 5: Messaging by buying stage

Map what they have, and what they are missing, at each stage:

- **Unaware (problem education)**: content that teaches the market before
  mentioning the product. If none exists, that is the finding.
- **Aware (solution differentiation)**: how they argue their approach is
  different. Comparison pages, methodology content, positioning pieces.
- **Engaged (conversion)**: what converts. Demo, trial, assessment,
  consultation, download. Note the primary CTA and whether there is more than
  one path for different intent levels.

Where a stage is thin, add one **[Suggestion]**: a concrete, realistic idea for
a company of that type and size. One per stage, maximum.

### Section 6: Relevance to you

The judgment section. Classify the company into exactly one bucket and defend it
in two to three sentences.

**Read before writing this section:**

- `The Fit Matrix` in `brand-kit/icp.md`: score the company against the ICP
  column on seniority, size, function, and industry. A company that clears three
  of four dimensions is a prospect. Two of four is mixed. One is not.
- `Categories We Are Not` in `brand-kit/positioning.md`: if the company lives in
  one of those adjacent categories, it is far more likely a partner or a
  non-competitor than a rival, no matter how similar the homepage sounds.
- `What We Do Not Do` in `brand-kit/capabilities.md`: the overlap test cuts both
  ways. A company doing something you explicitly do not do is not a competitor.

**The four buckets:**

| Classification | Test |
|---|---|
| **Prospect** | They match the ICP column of the Fit Matrix and show the problem you solve. Note which buying-committee role from `Buying Committee` is the entry point. |
| **Partner** | They sell to your ICP but solve an adjacent problem. Name the specific handoff or integration that would make the partnership real. |
| **Competitor** | They pitch your buyer on your problem with a comparable claim. Say whether they are the kind you lose deals to or the kind that shows up in search, using the tier language in `Competitors`. |
| **Not relevant** | Wrong buyer, wrong problem, or wrong scale. Say so in one line and stop. Do not stretch. |

Then add two short reads:

- **Category posture**: how they talk about the category your `Category terms`
  probe covers. Building in it, buying into it, or ignoring it entirely.
- **Trap exposure**: check `Named Traps` in `brand-kit/positioning.md`. Which
  named trap, if any, does this company's stack or messaging show symptoms of?
  Name the trap and the symptom. If none, say none. Do not force it.

Never name a competitor in this section who is not in the `Competitors` table or
found in your own research for this specific company.

### Section 7: Strategic observations

Five to seven bullets. This is the "so what."

- What is working that they should do more of
- The biggest gap or missed opportunity
- How a company with this model and market typically builds pipeline
- Red flags or headwinds visible from the outside
- One non-obvious insight from connecting dots across the research
- A restatement of the Section 6 classification in one line, with the reason

Write these the way `brand-kit/voice.md` says to write: direct, specific,
mechanism over outcome, no consulting filler. Every bullet should survive
someone asking "so what do I do with that?"

---

## Writing rules

- **Audience:** executive. Written for someone who will act on it today.
- **No em-dashes.** Commas, periods, colons.
- **No emojis.**
- **No links or URLs in the body.** The reader already has the URL.
- **No code blocks.**
- **Paragraphs of two to three sentences,** or bullets.
- **Bold sparingly,** for the rating, the classification, and nothing else.
- **Tables for anything comparative.**
- **Do not invent data.** Unknown is "Not visible from public research."
- **No hedging.** If it is an inference, say "signals suggest" once and move on.
- Apply the banned words and AI tells from `brand-kit/voice.md` before delivery.

---

## Output

Produce a Word document.

Use the bundled **`docx`** skill and let the host resolve it. Follow that skill's
own implementation rules rather than restating them here: explicit page size,
real bullet numbering rather than unicode characters, table widths declared on
both the table and its cells, cell margins for readability, heading styles
overridden by their built-in IDs, and separate paragraphs instead of newline
characters inside a run. Validate the file with whatever validation step that
skill provides before presenting it.

**If no docx skill is available:** output the same seven sections as clean
markdown in the conversation, keep the tables, and tell the user plainly that no
document skill was found so they got markdown instead. Do not silently downgrade.

**Styling comes from the brand kit, not from this file.** Read the `Palette`
table in `brand-kit/brand.md` and map it:

| Document element | Palette role |
|---|---|
| Title, section headers | Primary |
| Subsection headers, body text | Body text |
| Divider rules, table header fill | Accent, or Accent soft for fills |
| Table borders, secondary labels | Rule / border, Muted text |
| Callouts for good news / problems | Positive and Problem, with their tints |

Use the fonts from `Typography` in the same file. If those fonts are not
guaranteed on a recipient's machine, fall back to a common system font and note
the substitution once. The footer string is the `Document Footer` value from
`brand.md`, set right-aligned in the muted text color.

Name the file after the company and the analysis, and save it to the session's
output folder. In Claude environments that is `/mnt/user-data/outputs/`; on other
hosts, use whatever directory the host writes deliverables to.

---

## Speed notes

- **Do not ask clarifying questions.** The URL is the whole input.
- Run every fetch and every search in parallel. Serial research is why recon
  takes twenty minutes instead of five.
- If a page or search returns nothing, skip it silently. Absence is only worth
  reporting when it is strategic: "no case studies anywhere on the site" is a
  finding, "the /team page 404s" is not.
- After the document exists, give a two to three sentence summary in chat: the
  single most useful finding, and the Section 6 classification. Do not reproduce
  the document in chat.

---

## What comes next

Optional handoffs. Each one runs on its own if the user goes straight to it.

- **`competitive-white-space`**: if the recon turned up a competitive set worth
  studying, or the user says "now run the competitors." That skill will use this
  recon's findings if they are in the conversation, and gather its own if not.
- **`content-writer`**: if a gap in Section 5 is worth answering with an asset.
- **`google-ads-audit`** or **`linkedin-ads-audit`**: if the subject is your own
  company and Section 4 raised questions about paid spend.
