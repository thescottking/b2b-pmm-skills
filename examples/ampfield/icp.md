# ICP

Who you sell to, precise enough to score a paid campaign against.

The three-tier structure is what makes the ads audits work. `linkedin-ads-audit`
computes an ICP Fit Score, the share of your spend that reached tier one, and
that number is only as good as this file.

---

## The Fit Matrix

Three tiers across four dimensions. **ICP** is who you want. **Mixed** is worth
reaching but not worth optimizing for. **Non-ICP** is wasted spend.

| Dimension | ICP | Mixed | Non-ICP |
|---|---|---|---|
| **Seniority** | Director, VP, CXO, Owner | Manager, Partner | Entry, Senior (individual contributor), Training, Unpaid, Student |
| **Company size** | 201-500, 501-1,000, 1,001-5,000, 5,001-10,000 | 51-200, 10,001+ | 1-10, 11-50 |
| **Job function** | Operations, Support, Program and Project Management | Information Technology, Business Development, Quality Assurance, Purchasing | Marketing, Human Resources, Finance, Legal, Sales, Engineering, Media and Communication, Education, Arts and Design, Research |
| **Industry** | Solar Electric Power Generation, Services for Renewable Energy, Utilities, Building Construction, Facilities Services, Consumer Services | HVAC and Refrigeration Equipment Manufacturing, Electrical Equipment Manufacturing, Renewable Energy Equipment Manufacturing, Real Estate, Oil and Gas | Software Development, IT Services and IT Consulting, Staffing and Recruiting, Higher Education, Government Administration, Financial Services, Retail |

These are LinkedIn Campaign Manager taxonomy values, spelled the way Campaign
Manager spells them. If you retarget on another platform, translate at the
platform boundary and leave this table alone.

**Why these boundaries:** The dividing line is not company size, it is whether
the company employs its own field technicians at a scale where the branch
manager can no longer hold the day in their head. Below about 50 technicians, a
single dispatcher knows every job and every truck, and reconstruction works
because the memory is one person's. Above about 5,000, the buyer is usually a
national services organization with a systems integration team, a multi-year
procurement cycle, and an existing legacy suite under contract; we can win there
but not through paid channels. The company-size brackets are a proxy for
technician count, and the proxy is imperfect: a 400-person contractor is usually
250 technicians and firmly ICP, while a 400-person equipment manufacturer has
none and is not. When the platform's size bracket and the industry disagree,
industry wins. Job function is where most waste happens. Field service is an
operations purchase, and Information Technology sits in Mixed rather than ICP
because IT is on the committee but almost never starts the search. The one
seniority edge case worth naming: at owner-operated contractors under 500
people, the economic buyer often carries the title Owner or President rather
than COO, which is why Owner sits in ICP even though it usually signals a
company too small to target.

---

## Buying Committee

| Role group | Titles | What they care about | What kills the deal for them |
|---|---|---|---|
| Economic buyer | COO; VP of Operations; General Manager; President; Owner (at contractors under 500 people); SVP Field Operations (at 2,000+) | Revenue per truck per day, gross margin per job, second truck roll rate, and whether the operation survives the next acquisition without adding back-office headcount. Wants the number that changes and the date it changes by. | A rollout that slows trucks down during peak season. Any answer to "what does this cost me in week one" that involves the word "depends." A pilot that cannot produce a number a board will accept. |
| Technical owner | Director of IT; IT Manager; Director of Business Systems; Systems Administrator; Enterprise Applications Manager; Head of Data (at 2,000+) | Integration with the ERP and accounting system, SSO, data ownership and export, offline behavior, and which system stays the system of record for what. Wants a written answer on sync conflicts. | No documented API, or a sync design that writes back over the ERP. A vendor who cannot say what happens when a truck is offline for nine hours. Anything that looks like a second system of record for financial data. |
| Operational owner | Director of Field Service; Service Manager; Dispatch Manager; Regional Operations Manager; Branch Manager; Warehouse Manager; Parts Manager; Fleet and Assets Manager | Whether technicians will actually use it, how fast the dispatch board redraws, whether truck stock counts can be trusted, and how many exceptions land on their desk each morning. This person runs the pilot and their verdict is usually the real decision. | Technicians rejecting it in week two. Added taps per job. A dispatch board that is slower than the one they have. Being told to change how the branch works to fit the software. |
| Influencer / blocker | VP Customer Experience; Director of Customer Care; Customer Operations Manager; Warranty Administrator; Warranty and Claims Manager; Safety Manager; EHS Director; lead technicians and crew leads; union stewards where crews are organized | Promise accuracy, complaint volume, claim approval rates, and whether documentation will hold up when someone asks a hard question months later. Lead technicians care about one thing: does this make the job longer. | Anything that reads as surveillance of technicians. A capture flow that adds time on site. Documentation requirements that block a job close in the field with no override path. A CX team discovering they were not consulted. |

**Note:** titles fragment as company size grows. A 600-person contractor has one
"Director of Operations" who owns dispatch, parts, and warranty. A
6,000-technician energy services company has a Director of Field Service per
region, a separate Director of Warranty Programs, a Parts and Logistics
Director, and a Customer Operations VP who has never met any of them. Target the
narrow titles above 2,000 employees and the broad ones below it, and never
assume the person you are talking to owns all three problems.

The VP of Customer Experience is the newest member of this committee and the
least expected. Deals increasingly start in operations and expand into customer
care once someone connects complaint volume to Promise Drift. Content for this
buyer should never lead with dispatch.

---

## Search Terms

**Brand terms**: always keep, regardless of performance:

ampfield, ampfield software, ampfield field service, ampfield app, ampfield
pricing, ampfield reviews, ampfield vs, ampfield demo, amp field software,
ampfield login, ampfield technician app, ampfield integration

**Category terms**: what buyers search when they have the problem but do not
know you:

field service management software, field service software for contractors,
solar O&M software, solar field service software, HVAC dispatch software, HVAC
service management software, technician scheduling software, work order
management software for contractors, truck stock inventory software, mobile
inventory management for field service, warranty claim management for
contractors, warranty documentation software, offline field service app, field
service app that works without signal, first time fix rate software, reduce
callbacks field service, reduce truck rolls software, dispatch board software,
field service ERP integration, energy services work order software,
multi-branch field operations software, field operations platform for
contractors, distributed energy service management software

**Competitor and alternative terms**: high intent, expensive, worth it:

legacy field service suite alternative, field service management comparison,
best field service software for solar contractors, best FSM for HVAC
contractors, replace spreadsheets field service, spreadsheet to field service
software migration, CRM field service add-on vs dedicated platform, mobile forms
vs field service platform, field service software switch cost, field service
software implementation time, plus the branded terms for each competitor named
in the Competitors table below

**Negative terms**: searches that look relevant and are not. Jobs, tutorials,
free tools, student research, unrelated homonyms:

jobs, careers, hiring, salary, resume, apprentice, apprenticeship, internship,
training, course, certification, exam, "how to become," union, free, template,
free work order template, excel work order template, google sheets work order,
open source, github, crack, torrent, download, nulled, coupon, definition,
"what is field service management" (pure research intent, no budget), field ops
military, field operations oil and gas seismic, field service engineer (a job
title search, not a buyer), solar panel installation cost, HVAC repair near me,
heat pump rebate, homeowner, DIY, residential customer, "hvac technician
salary," "solar installer training"

The last group matters more than it looks. Consumer and technician-career
searches sit directly adjacent to our category terms and will happily consume a
paid budget aimed at operations executives.

---

## Competitors

| Competitor | URL | Tier | Why they come up |
|---|---|---|---|
| Meridian Field Suite | https://meridianfieldsuite.example | 1 | The legacy field service management incumbent. Twenty years of feature surface, entrenched in multi-branch contractors, usually already under contract when we arrive. We lose to inertia and switching cost, not to capability. Their weakness is architectural: the mobile app delivers the office's plan to the field and syncs on a schedule, which is the Clipboard Gap with a login screen. |
| The spreadsheet stack | No URL. Shared spreadsheets, a group text thread, a whiteboard, and a paper packet. | 1 | The most common thing we actually lose to, and the hardest to displace, because it is free, it is nobody's decision to keep, and it works until roughly 120 technicians. Never mock it in content. It is the reader's current system and it got them this far. Argue from the point where it stops scaling. |
| RouteKeeper | https://routekeeper.example | 2 | Scheduling and route optimization point tool. Shows up early in any search that starts with a dispatch problem, demos well in 20 minutes, and costs a fraction of a platform. We are complementary in principle and competitive in the budget cycle. The line: a perfect route built from a stale job state is a well-organized wrong answer. |
| Northlake CRM, Field Service add-on | https://northlakecrm.example | 2 | The CRM the contractor already owns, extended with work orders and a service console. IT prefers one vendor and the add-on looks nearly free. Loses on object model: the field record is evidence, and a CRM stores activity history. |
| Ridgeline Mobile Forms | https://ridgelineforms.example | 2 | Mobile forms, photos, signatures, and a PDF at the end. Solves the most visible symptom of the Clipboard Gap for about a tenth of our price. Shows up in low-budget evaluations and in pilots that were scoped as "let us just digitize the packet first." |
| Cascade Service Cloud | https://cascadeservicecloud.example | 2 | Newer cloud field service platform aimed at commercial facilities and mechanical services. Appears in analyst coverage and in comparison content more than in our deals. Watch, do not chase. |

Every company in this table is invented for this example, and every URL uses the
reserved `.example` domain so nothing here resolves to a real business. Replace
the whole table with your real competitive set.

Tier 1 is who you lose deals to. Tier 2 is who shows up in search and analyst
coverage. Keep them separate, they need different responses.

---

## Channel Economics

Every number in this section is an example figure for a fictional company.
Replace all of them before an audit skill uses this file to judge a real
campaign, because these numbers are what turn "expensive" into "too expensive."

| Metric | Your number | Notes |
|---|---|---|
| Acceptable CPA band | $900 to $1,600 | Example figure. For a sales-qualified lead, meaning a scheduled walkthrough with a named operations owner at a company above 50 technicians. Not an MQL, and not a content download. |
| CPA red line | $2,400 | Example figure. Above this, cut the segment within one reporting cycle unless it is a named-account program. |
| Sales cycle length | 90 to 150 days below 500 technicians; 180 to 270 days above it | Example figure. Judge nothing on a 30-day window. Pipeline created in Q1 lands in Q3, which is why paid channels get judged on qualified meetings and cost per meeting first. |
| Average deal size | $86,000 annual contract value | Example figure. Priced per active technician per month, so deal size tracks technician count almost linearly. A 250-technician contractor is the median deal. |
| Monthly paid budget | $65,000 across LinkedIn, Google Search, and trade publication placements | Example figure. Roughly 55% LinkedIn, 30% search, 15% trade and event. Determines that we can afford about four active segments, not nine. |
| Brand impression share floor | 85% on exact-match brand terms | Example figure. Below this, competitors are buying our name and we are losing traffic we already earned. |

**Thought leadership:** Ampfield runs personal-account campaigns from two
executives, referred to here by role only because this example is public and
fictional: the CEO and the Head of Field Operations. Those campaigns exist to
build recognition with operations leaders who are 12 months from a purchase, and
they should be judged on follower growth in ICP job functions, engagement from
target accounts, and inbound branded search, never on CPA. Exempt them from
cost-per-acquisition verdicts. In a real brand kit, name the people, because a
skill needs the exact account names to identify their campaigns in an export.
