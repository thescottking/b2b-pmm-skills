# Capabilities

The claim guardrail. Any skill about to state what your product does reads this
file first.

The three-way split is the point. Most hallucinated marketing copy comes from a
model reasoning outward from what a product *sounds like* it should do. Writing
down the boundary is what stops that.

---

## What We Do

One block per capability or solution. Be specific enough that a claim can be
checked against it.

### Field Record Capture

- **What it does:** Technicians record the job on a phone or tablet while they
  are on site: equipment scanned by serial or barcode, failure and resolution
  codes chosen from a short list, photos tagged to the equipment they show,
  parts consumed off the truck, time on site, and site condition at departure.
  It writes to the device first and syncs when the truck reaches coverage, so a
  full day in a dead zone is captured and not lost.
- **Who it's for:** Field technicians and crew leads use it. The Director of
  Field Service or Service Manager owns whether it succeeds.
- **Proof:** Offline capture is demonstrated live in every walkthrough by
  putting the device in airplane mode mid-job and completing the job anyway.
  Taps per job is a tracked product metric and a release that increases it does
  not ship. Adoption is measured in pilots as the share of jobs closed in the
  field rather than in the office. Named-customer proof: none yet.
- **URL:** https://ampfield.example/product/field-record

### Dispatch Board

- **What it does:** Shows the day's work with job state read from the field
  record rather than from the plan, so a job that finished at 2:40pm shows as
  finished at 2:40pm. Dispatchers reassign, resequence, and split work, and each
  change is written to the record with its author. It exposes actual remaining
  capacity per crew instead of scheduled capacity.
- **Who it's for:** Dispatchers, Dispatch Managers, Regional and Branch
  Operations Managers.
- **Proof:** The board is driven by the same record the technician wrote, with
  no nightly batch between them. Demonstrable in a walkthrough by completing a
  job on a phone and watching the board change. Named-customer proof: none yet.
- **URL:** https://ampfield.example/product/dispatch-board

### Truck Stock Ledger

- **What it does:** Tracks parts held on each vehicle and decrements them when a
  technician records consumption on a job. Dispatch can see whether the truck it
  is about to assign carries the part the job needs. Replenishment lists are
  built from what actually came off the shelf, and variances between recorded
  and counted stock are surfaced per truck rather than per branch.
- **Who it's for:** Parts Managers, Warehouse Managers, Dispatch Managers, and
  the VP of Operations who is being asked why second visits keep happening.
- **Proof:** Parts consumption and dispatch assignment read the same record, so
  a part cannot be consumed on a job and still appear available for the next
  one. Purchase order handoff to the customer's ERP is a documented integration.
  Named-customer proof: none yet.
- **URL:** https://ampfield.example/product/truck-stock

### Claim Packet

- **What it does:** Assembles the evidence a manufacturer requires for a
  warranty claim while the job is happening: serial numbers, install and failure
  dates, fault codes, photos of the required views, and the technician's
  attestation. Required fields are enforced at job close per manufacturer and
  per equipment type, with a documented override that records who overrode it
  and why. The completed packet exports in the format the manufacturer accepts.
- **Who it's for:** Warranty Administrators, Warranty and Claims Managers,
  Service Managers, and the COO watching unreimbursed parts cost.
- **Proof:** Packet requirements are configured per manufacturer program and
  versioned, so a program change updates the requirement rather than the habit.
  Override rate is a reportable metric. We do not claim influence over approval
  decisions. Named-customer proof: none yet.
- **URL:** https://ampfield.example/product/claim-packet

### Promise Timeline

- **What it does:** Records every dated commitment made to a customer against
  the job, with who made it, when, and through which channel, whether that was a
  technician on site, a dispatcher on the phone, or an agent in the call center.
  Anyone about to speak to that customer sees what has already been promised.
  Conflicting promises on the same job are flagged to the branch the same day.
- **Who it's for:** VP of Customer Experience, Director of Customer Care,
  Customer Operations Managers, and dispatchers.
- **Proof:** Commitments are entered from the same three surfaces a promise is
  actually made from, which is what makes the timeline complete rather than
  partial. Conflict flagging is demonstrable in a walkthrough. Named-customer
  proof: none yet.
- **URL:** https://ampfield.example/product/promise-timeline

### Operations Reporting

- **What it does:** Reports the operating numbers this business runs on:
  first-visit resolution, second truck roll rate with recorded cause, callback
  rate, jobs closed in the field versus closed in the office, average delay
  between field completion and office visibility, truck stock variance, and
  claim packet completeness. Every figure drills to the jobs behind it.
- **Who it's for:** COO, VP of Operations, and the Director of Field Service who
  has to explain a number in a Monday meeting.
- **Proof:** Every metric resolves to a list of individual jobs and their field
  records, so a disputed number is checkable in a meeting rather than after it.
  Named-customer proof: none yet.
- **URL:** https://ampfield.example/product/reporting

### Integrations

- **What it does:** Sends completed jobs, labor, and parts consumption to the
  customer's ERP or accounting system, and reads customer, equipment, and
  pricing data back. Published REST API and webhooks on job state changes. SSO
  through SAML and OIDC. Full data export in a documented schema, on the
  customer's request, at any time.
- **Who it's for:** Director of IT, Director of Business Systems, Enterprise
  Applications Manager.
- **Proof:** The integration contract is written down: Ampfield is the system of
  record for the field record, the ERP remains the financial system of record,
  and Ampfield does not write back over financial data. Sync conflict behavior
  is documented rather than described in a meeting. Named-customer proof: none
  yet.
- **URL:** https://ampfield.example/product/integrations

---

## What We Do Not Do

Explicit exclusions, with a line of reasoning for each. These matter more than
the list above, because they are what a model will otherwise assume.

- **We are not an ERP or an accounting system.** We do not run the general
  ledger, accounts payable, purchasing, or payroll. We push completed jobs,
  labor, and parts into the system that does, and that system stays the
  financial system of record.

- **We are not a CRM.** We do not do lead capture, pipeline management, sales
  quoting, or marketing campaigns. We model the job and its evidence, not the
  customer relationship, and we integrate with the CRM that owns the latter.

- **We do not do route optimization.** No drive-time sequencing, no
  travel-minimizing solver. The Dispatch Board shows real capacity and real job
  state, and we integrate with routing tools where a customer already has one.
  This exclusion gets violated in drafts more than any other on this list.

- **We do not do system design or engineering.** No solar array design, no
  shading analysis, no HVAC load calculations, no equipment sizing. Design tools
  produce the specification; we carry it to the field and record what was
  actually installed against it.

- **We do not file permits, interconnection applications, or utility
  submissions.** We hold the documentation those processes need. A human
  submits them.

- **We do not run payroll or produce compliance filings.** We capture time on
  site and it is accurate enough to pay against, which is not the same as being
  a payroll system or a labor-compliance system of record.

- **We do not sell hardware, and we are not fleet telematics.** No GPS units, no
  dash cameras, no tablets, no engine diagnostics. We consume location data from
  a telematics provider where the customer has one.

- **We do not auto-dispatch.** Ampfield surfaces real capacity and flags
  conflicts. A person assigns the work. If a buyer wants autonomous assignment,
  say plainly that we do not do it.

- **We do not approve warranty claims and we do not influence approval rates.**
  We assemble the documentation a manufacturer requires. The manufacturer
  decides, and no piece of content may imply otherwise.

- **We do not monitor equipment telemetry.** No inverter feeds, no thermostat
  data, no remote diagnostics or predictive failure detection. The record starts
  when a person is dispatched.

- **We do not do customer scheduling self-service, marketing, or review
  collection.** Homeowner-facing booking portals, review requests, and campaign
  tools are a different product category.

*A good test: read your category's Gartner definition and write down every
capability in it that you do not have.*

---

## Link Map

Which page to link when a piece of content touches a topic. Skills use this for
internal linking, so keep it current.

| Solution / page | URL | Link when writing about |
|---|---|---|
| Field Record Capture | https://ampfield.example/product/field-record | The Clipboard Gap, offline capture, technician adoption, taps per job, what the field record is |
| Dispatch Board | https://ampfield.example/product/dispatch-board | The Phantom Schedule, capacity, same-day work, dispatcher workflow, reassignment |
| Truck Stock Ledger | https://ampfield.example/product/truck-stock | The Second Truck Roll, parts availability, replenishment, inventory variance, first-visit resolution |
| Claim Packet | https://ampfield.example/product/claim-packet | The Warranty Orphan, manufacturer claims, denied claims, documentation requirements, unreimbursed parts |
| Promise Timeline | https://ampfield.example/product/promise-timeline | Promise Drift, customer commitments, complaint volume, CX and customer care, call center handoffs |
| Operations Reporting | https://ampfield.example/product/reporting | The Rebuild Tax, operating metrics, revenue per truck, callback rate, executive reporting |
| Integrations | https://ampfield.example/product/integrations | ERP and accounting, API, SSO, data ownership, sync behavior, IT evaluation |
| Solar and storage contractors | https://ampfield.example/industries/solar | Solar O&M, storage service, multi-manufacturer sites, interconnection-adjacent topics |
| HVAC and mechanical contractors | https://ampfield.example/industries/hvac | Heat pumps, maintenance agreements, seasonal peak capacity, refrigerant documentation |
| Energy services companies | https://ampfield.example/industries/energy-services | Multi-trade crews, performance contracts, multi-site portfolios, roll-ups and acquisitions |
| The 30-day branch pilot | https://ampfield.example/pilot | How to start, pilot scoping, proving adoption, what to measure first |
| Book a walkthrough | https://ampfield.example/demo | Any primary CTA on a landing page or email |
| Comparison hub | https://ampfield.example/compare | Competitive content, alternatives, evaluation and switching-cost topics |

---

## Write About, Never Claim

Topics you cover for search and authority but where you do not sell a product.
The distinction keeps SEO ambition from turning into a false product claim.

| Topic | We can explain | We must not imply |
|---|---|---|
| Electrical code changes affecting installs | What changed, which install practices it touches, and what documentation an inspector is likely to ask for. | That Ampfield certifies code compliance, tracks code versions, or protects a contractor from a failed inspection. |
| Manufacturer warranty program requirements | How claim documentation requirements differ by manufacturer and equipment type, and why they tightened. | That we approve claims, guarantee reimbursement, or improve approval rates. We assemble documentation; the manufacturer decides. |
| Federal and state incentive programs | How incentive rules shape job volume, seasonality, and the documentation a customer will later need. | That Ampfield determines eligibility, calculates incentives, or files anything with any agency. |
| Interconnection and permitting delays | Why the queue slows projects and what it does to scheduling and crew utilization. | That we submit applications, track queue position, or shorten a utility's timeline. |
| Field technician labor shortage | Why hiring is hard in these trades, what turnover costs an operation, and how ramp time affects capacity. | That Ampfield recruits, staffs, trains, credentials, or reduces required headcount. Headcount reduction is a banned outcome claim in `positioning.md`. |
| Refrigerant and environmental reporting | What contractors are required to record and retain, and why field capture matters for it. | That we are a compliance system, produce regulatory filings, or accept liability for a reporting failure. |
| Safety programs and incident documentation | How field evidence supports an incident review and what teams typically capture. | That Ampfield is a safety management system, an EHS platform, or a substitute for a safety program. |
| Private equity roll-ups in the trades | Why acquisitions multiply dispatch processes and what integration usually costs an operations team. | That we perform systems integration, migrate an acquired company's data as a service, or replace an integration project. |
| Fleet and vehicle management | How truck stock and vehicle availability interact with dispatch decisions. | That we track vehicle location, monitor driving behavior, schedule vehicle maintenance, or supply telematics hardware. |
