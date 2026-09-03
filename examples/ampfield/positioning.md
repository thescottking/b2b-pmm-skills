# Positioning

The source of truth for what your company says. No customer-facing asset should
make a claim that does not trace back to this file.

When a fact or a wording changes, change it here first, then let the skills
propagate it. Changing it in a draft and not here is how two versions of your
story start circulating.

---

## The Frame

- **Canonical noun:** the field record

- **Canonical definition:** The field record is the timestamped account of what
  actually happened on a job, captured at the point of work: who was there, what
  was installed or repaired, which parts came off the truck, what condition the
  site was left in, and what the customer was told.

- **What it replaces:** Reconstruction. Today the office rebuilds yesterday from
  photos, texts, voicemails, a paper packet dropped in a bin, and a technician's
  memory. Every downstream system, dispatch, parts, warranty, invoicing, and
  customer service, is fed by that reconstruction and inherits its errors.

- **Why now:** Three things changed. Residential and commercial electrification
  work pulled solar, HVAC, and storage crews onto the same job sites, so a
  single service call now touches equipment from four manufacturers with four
  warranty processes. Contractors that ran 80 techs in 2022 run 400 today
  through acquisition, and the branch-level tribal knowledge that made
  reconstruction survivable does not survive a roll-up. And manufacturers
  tightened documentation requirements on warranty claims, which turned a
  paperwork annoyance into a margin line.

---

## Naming and Usage Rules

Absolute rules. Skills treat these as non-negotiable.

**Always say:**
- "Ampfield." One word, capital A, lowercase f. It is the subject of the
  sentence, not a modifier: "Ampfield captures the job," not "the Ampfield
  platform captures the job."
- "the field record," lowercase, with the definite article. It is a thing that
  exists in the world, not a product feature we branded.
- "field technicians," "crews," "dispatchers," "the parts room," "the warranty
  desk." Use the job title, not a category abstraction.
- "second truck roll" when we mean a return visit that the first visit could
  have prevented. "Callback" when we mean a customer-initiated return because
  the work did not hold. These are different numbers on an ops leader's report.
- "it" for the product, every time.

**Never say:**
- "AmpField," "Amp Field," "AMPFIELD," "amp field."
- "the Ampfield solution," "the Ampfield suite," "the Ampfield ecosystem."
- "field service management platform" as a self-description in body copy. It is
  a search term. Use it in titles and comparison pages only.
- "single source of truth." It is the correct idea and a dead phrase. We say
  "the field record" because we want the specific noun, not the generic one.
- "real time." Say the actual latency: the record reaches the office within
  about 90 seconds of the technician tapping done, or on the next signal if the
  site is dark.

**Capitalization and formatting:**
- "field record" is lowercase always, including at the start of a definition and
  inside headings written in sentence case.
- Capability names take title case and are used exactly as written in
  `capabilities.md`: Field Record Capture, Dispatch Board, Truck Stock Ledger,
  Claim Packet, Promise Timeline.
- Named traps take title case with the definite article: the Clipboard Gap, the
  Second Truck Roll. On first use in a piece, define the trap in one sentence.
- Technician counts are numerals with no space before the noun: 50 techs, 5,000
  techs. Use "techs" in short formats, "technicians" in long-form.

**Taglines**: the exact wording, in priority order. Skills use these verbatim
or not at all.

| Tagline | Use when |
|---|---|
| The field record, written where the work happens. | Primary brand line. Homepage hero, deck covers, trade show booth, anywhere the reader has never heard of us. |
| The office finds out now, not at six. | Paid social, display, and anything under 15 words. It is the fastest way to make an ops leader recognize the problem. |
| Every promise has a source. | Customer experience audience. VP CX, Director of Customer Care, and any piece about complaint volume or commitment accuracy. |
| One record from the roof to the invoice. | Partner and integration co-marketing, and anywhere the finance or ERP side of the house is in the room. |

**Elevator pitch**: three sentences maximum:

> Contractors running 50 to 5,000 technicians do the work in trucks and on
> roofs, and the office finds out hours later, which is why schedules, parts
> counts, warranty claims, and customer promises drift apart by Friday. Ampfield
> captures the field record at the point of work, offline when the site has no
> signal, and reconciles dispatch, truck stock, warranty documentation, and
> customer commitments against it within minutes. It is not an ERP and it is not
> a CRM: it is the record those systems should have been reading from all along.

---

## The Pillars

Two to four qualities that everything you say ladders up to. Named for internal
use only. They do not appear by name in customer-facing copy.

### Captured

- **What it means:** Data enters the record where the work happens, by the
  person doing it, at the moment it happens. Not typed at the end of the shift,
  not dictated to a dispatcher, not photographed and transcribed by someone in
  the office the next morning. Capture works with no signal and reconciles when
  the truck reaches coverage.
- **The proof:** The mobile capture flow is built around a technician wearing
  gloves on a pitched roof. Serial numbers scan, common failure codes are two
  taps, and the app writes locally first and syncs second, so a full day in a
  dead zone is not a lost day. In pilots we measure taps per job and refuse
  changes that raise it.
- **The failure it prevents:** Reconstruction. Anything the office rebuilds from
  memory is wrong at a rate nobody measures, and every downstream number
  inherits the error.
- **Vocabulary that signals it:** at the point of work, offline-first, on the
  truck, on the roof, taps per job, before the tailgate closes, the tech's own
  words, dead zone, first entry.

### Reconciled

- **What it means:** Scheduling, truck stock, warranty documentation, invoicing,
  and customer commitments all resolve against one record instead of against
  each other. When they disagree, the disagreement surfaces the same day and
  names the job it came from.
- **The proof:** Parts consumed on a job decrement truck stock the moment the
  technician records them, so the replenishment list for tomorrow is built from
  what actually came off the shelf. A dispatcher looking at the board sees the
  same completion state the warranty desk sees. There is no nightly batch that
  everyone waits for.
- **The failure it prevents:** Drift. Six systems each holding a slightly
  different version of the same job, with the difference discovered at
  month-end, or by a customer.
- **Vocabulary that signals it:** reconciled, the same record, agrees, drift,
  no nightly batch, one number, the parts room and the dispatch board, closes
  clean.

### Answerable

- **What it means:** Every commitment made to a customer and every claim made to
  a manufacturer traces to a person, a timestamp, and a piece of evidence. When
  someone asks "who told them that," there is an answer, and it takes seconds to
  find.
- **The proof:** Promise Timeline records who committed what to a customer and
  when, whether it came from the technician, the dispatcher, or the call center.
  Claim Packet assembles the manufacturer's required documentation from evidence
  captured during the job, and it will not let a job close without the fields a
  denied claim would have needed.
- **The failure it prevents:** The unanswerable escalation. A customer is angry,
  a claim is denied, an inspector asks a question, and the company has photos in
  three phones and nothing that constitutes a record.
- **Vocabulary that signals it:** traceable, who said it and when, evidence,
  defensible, the claim packet, sourced, on the record, an answer in seconds.

---

## Named Traps

Name the problem your category has, then reuse that name until buyers use it
back to you. A trap you have named is a trap your competitor has to answer.

| Trap name | The setup | Why it fails | Your difference | Use when |
|---|---|---|---|---|
| The Clipboard Gap | The job finishes at 2:40pm. The record of it reaches the office at 6:15pm, or the next morning, in whatever form the technician had time for. | Every decision made in that window, dispatching the next call, promising a customer, ordering a part, is made against a version of reality that is hours stale. The gap does not show up as an error. It shows up as a company that is always slightly behind itself. | Ampfield closes the job in the field. The record is written at the point of work and reaches the office within about 90 seconds, or on the next signal from a dead zone. | Opening piece for any first-touch audience. This is the trap that makes an ops leader nod before you have said anything about software. |
| The Second Truck Roll | A crew arrives, diagnoses, and cannot finish: wrong part, missing spec, no serial on file, no photo of the panel from the last visit. Someone books a return. | The return is priced as a new job internally and as a failure by the customer. It consumes a slot that had revenue in it, and the reason it happened is almost never recorded, so the same cause repeats next week. | Truck Stock Ledger tells dispatch what is actually on each truck before the job is assigned, and the field record from the previous visit travels with the job, so the second visit is not a first visit again. | Ops and finance audiences, ROI arguments, anything where the reader has to justify a spend. This is the trap with a dollar figure attached. |
| The Warranty Orphan | Equipment is installed or replaced. The serial number, the install date, and the failure photos live in a technician's phone, a paper packet, or nowhere. Months later a claim needs them. | The manufacturer denies the claim on documentation, and the contractor eats a part they were entitled to be reimbursed for. Nobody attributes the loss to the day the record was not written, because that day was eight months ago. | Claim Packet assembles the manufacturer's required evidence during the job and blocks close-out when a required field is missing. The claim is complete before anyone knows it will be needed. | Warranty administrators, service managers, and anyone whose margin is being quietly taxed. Also the strongest trap for manufacturer partner co-marketing. |
| Promise Drift | The technician tells the homeowner Thursday. The dispatcher tells them Tuesday. The call center says it is scheduled and cannot say for what. | Nobody lied. Three people made a reasonable commitment from three different views of the same job. The customer experiences it as an organization that does not talk to itself, and the complaint lands on a team that had no part in creating it. | Promise Timeline records every commitment against the job with its author and timestamp, so the next person to speak to the customer can see what was already said. | VP Customer Experience, Director of Customer Care, NPS and complaint-volume conversations. This is the trap that gets a CX leader into a deal that started in operations. |
| The Phantom Schedule | The dispatch board shows a full day. On the ground, two crews finished early, one is stuck waiting on an inspection, and a fourth never started. | Capacity is invisible in both directions. The company turns away work it could have done and overcommits work it cannot, and the correction happens by phone call, at the branch level, by whoever happens to notice. | The Dispatch Board reads job state from the field record instead of from the plan, so the board shows what is happening rather than what was intended. | Dispatch managers, regional operations, and any argument about revenue per truck or same-day capacity. |
| The Rebuild Tax | The first hours of every morning go to reconstructing yesterday: chasing photos, correcting counts, closing jobs the field considers finished, calling technicians to ask what happened. | It is invisible on any report because it is nobody's job title. It is simply what the operations team does before it starts working, and it scales linearly with headcount, so growth makes it worse. | The record arrives complete. Morning work becomes exception handling on the few jobs that did not close clean rather than data entry on all of them. | COO and executive audiences, and anything about scaling past a few hundred technicians or integrating an acquisition. |

---

## Categories We Are Not

| Category | What it does | Why we're confused with it | The separating line |
|---|---|---|---|
| Legacy field service management suites | Work order management, scheduling, invoicing, and a mobile app, usually built for a break-fix service business and extended outward for two decades. | We appear in the same searches and the same evaluation shortlists, and we do overlap on work orders and dispatch. | Those suites treat the mobile app as a way to deliver the office's plan to the field. Ampfield treats the field as the origin of the record and reconciles the office to it. |
| Scheduling and routing point tools | Optimize the sequence and route of a day's work, sometimes with drive-time and skill matching. | Buyers with a dispatch problem shop for a dispatch tool first, and the demo looks adjacent. | We do not do route optimization and we integrate with tools that do. A perfect route built from a stale job state is a well-organized wrong answer. |
| CRM field service add-ons | Extend an existing sales CRM with work orders, mobile forms, and a service console. | The contractor already owns the CRM, so the add-on looks free, and IT prefers one vendor. | A CRM add-on models the customer relationship and treats the job as an event attached to it. The field record is the wrong shape for a CRM object: it is evidence, not activity history. |
| Mobile forms and checklist apps | Digitize the paper packet: forms, photos, signatures, and a PDF at the end. | They solve the most visible symptom of the Clipboard Gap and cost a tenth as much. | A form produces a document. Ampfield produces a record that dispatch, truck stock, and warranty read from. A PDF nobody can query is a clipboard with a battery. |
| ERP and accounting systems | Financial system of record: invoicing, payroll, purchasing, and general ledger. | Both claim to be the place the job "lives," and both touch parts and labor. | The ERP is the financial system of record and stays that way. Ampfield feeds it a complete job instead of a reconstructed one. We integrate; we do not replace. |
| Fleet telematics and GPS tracking | Vehicle location, driving behavior, and fuel and maintenance data from hardware in the truck. | Both are described as "visibility into the field," and both put something in the vehicle. | Telematics knows where the truck is. It does not know what happened on the roof. We consume location data where a customer already has it. |

---

## External Validation Quotes

Third parties saying something that supports your argument.

Rules: quote verbatim, link the source, date it, and never edit for fit. A
paraphrased quote is not a quote.

**Read this before using this section.** Ampfield is a fictional company built
to demonstrate this toolkit, so it has no real third-party validation, and
inventing one would be exactly the failure this file exists to prevent. The row
below shows the required shape and is deliberately unusable. Delete it and
replace it with real, linked, dated quotes before any skill publishes from this
file.

| Quote | Who | Source URL | Date | Supports |
|---|---|---|---|---|
| Example row, replace with a real quote, copied verbatim, never trimmed to fit the argument. | Example row, the person's name and title as published at the source. | Example row, the canonical URL, not a screenshot or a secondhand roundup. | Example row, the publication date, not the date you found it. | Example row, which pillar or trap the quote supports. |

---

## Internal Quotes

Your own executives and subject-matter experts. Same rules, plus one: mark
anything that has not been cleared for external use.

**Note for this example.** Ampfield is fictional and this repository is public,
so these quotes are attributed to roles rather than to people. In a real brand
kit, use the person's name and title, and get the clearance recorded before a
skill can use the quote.

| Quote | Who | Title | Cleared for external use | Use when |
|---|---|---|---|---|
| "Nobody is trying to hide anything. The tech finished the job and the information had nowhere to go for four hours." | Role only in this example | Head of Field Operations | Yes | Opening any piece about the Clipboard Gap. It removes blame from the technician, which is the argument's foundation. |
| "The second visit is priced as a job and remembered as a failure. That is the whole economics of this business in one sentence." | Role only in this example | Chief Operating Officer | Yes | ROI and finance-facing content, deck closers, sales talk tracks. |
| "We rejected six versions of the capture flow because they added a tap. On a roof, in gloves, one extra tap is how software dies." | Role only in this example | VP Product | Yes | Product depth pieces, technician-adoption objections, competitive comparisons against mobile forms tools. |
| "Manufacturers did not get stricter to be difficult. They got stricter because claims documentation got worse across the whole trade." | Role only in this example | Director of Warranty Programs | Not cleared: legal review pending | Internal enablement and partner conversations only. Do not publish. |
| "Customer experience teams inherit a problem that was created at 2:40 in the afternoon by three people who all thought they were being helpful." | Role only in this example | VP Customer Experience | Yes | Anything targeting the CX buyer, complaint-volume arguments, Promise Drift content. |

---

## Headline Stats

Every number you are willing to publish, with its source. A stat without a
source column entry does not get used.

**Read this before using this section.** Every number below is invented for a
fictional company. They are marked as examples on purpose, so that a skill will
refuse to publish them and so that nobody clones this repository and ships a
fake statistic. Replace the entire table with numbers you can source before
running any content skill against it.

| Stat | Source | Date | Use when | Verified |
|---|---|---|---|---|
| Average delay between job completion in the field and the office having a usable record: 6.5 hours | Fictional example data, invented for this brand kit | 2026-01 | The Clipboard Gap, opening statistic for first-touch content | Example, replace with your own |
| 31% of second visits are caused by a part the first crew did not have on the truck | Fictional example data, invented for this brand kit | 2026-01 | The Second Truck Roll, ROI arguments, Truck Stock Ledger pages | Example, replace with your own |
| 1 in 9 manufacturer warranty claims is denied for incomplete documentation | Fictional example data, invented for this brand kit | 2026-01 | The Warranty Orphan, Claim Packet pages, manufacturer partner content | Example, replace with your own |
| Technicians spend 47 minutes per shift on paperwork and status reporting | Fictional example data, invented for this brand kit | 2026-01 | Technician adoption arguments, capture-flow depth pieces | Example, replace with your own |
| Contractors above 200 technicians touch an average of 6 systems to close one job | Fictional example data, invented for this brand kit | 2026-01 | Drift arguments, integration and ERP conversations | Example, replace with your own |
| 18% of a day's capacity is unaccounted for on the dispatch board at 9am | Fictional example data, invented for this brand kit | 2026-01 | The Phantom Schedule, revenue-per-truck arguments | Example, replace with your own |
| Operations teams spend the first 1.75 hours of the morning reconstructing the previous day | Fictional example data, invented for this brand kit | 2026-01 | The Rebuild Tax, COO and executive content, scaling arguments | Example, replace with your own |
| Companies that grew past 300 technicians through acquisition run an average of 2.4 dispatch processes | Fictional example data, invented for this brand kit | 2026-01 | Roll-up and integration content, private-equity-backed buyer conversations | Example, replace with your own |

**Rule:** mark anything unverified in the `Verified` column and skills will
refuse to publish it without a confirmation note. Do not delete the flag to make
a draft flow better.

---

## Where to Start

The lowest-friction entry point for a new buyer, and the path from there.

1. **One branch, 30 days, capture only.** Put Field Record Capture in front of
   20 to 40 technicians in a single branch or region on the work they already do.
   Nothing changes for the office in week one. The only question being answered
   is whether technicians will use it without being told to, which is the
   question that decides every field deployment.

2. **Turn on Truck Stock Ledger and let the parts room see it.** This is where
   the number moves fast enough for an operations leader to bring it to a COO.
   Second truck rolls caused by missing parts are visible within a few weeks,
   and the replenishment list stops being a guess.

3. **Connect Claim Packet and Promise Timeline, then reconcile to the ERP.**
   Warranty documentation and customer commitments only work once the record is
   trustworthy, which is why they come third and not first. Once they are on, the
   ERP receives a complete job instead of a reconstructed one, and the CX team
   gets an answer to "who told them that."

Do not sell the whole sequence in the first meeting. The buyer who commits to
step one is the buyer who reaches step three; the buyer who is sold step three
on day one asks for an implementation plan and disappears.

---

## Canonical Vocabulary

| Term | Definition | Never say instead |
|---|---|---|
| the field record | The timestamped account of what actually happened on a job, captured at the point of work. | job history, ticket log, activity feed, single source of truth |
| truck roll | One dispatched visit by one crew to one site. It is the unit of work and the unit of cost. | site visit, appointment, service event |
| second truck roll | A return visit caused by something the first visit could have resolved. | repeat visit, revisit, rework trip, callback |
| callback | A customer-initiated return because the completed work did not hold. Different from a second truck roll and tracked separately. | warranty visit, complaint call, redo |
| truck stock | Parts held on a vehicle and usable without a trip to a warehouse. | van inventory, mobile inventory, rolling stock |
| a promise | A dated commitment made to a customer by anyone at the company, from any channel. | expectation, ETA, customer touchpoint |
| the claim packet | The set of evidence a manufacturer requires to approve a warranty claim, assembled during the job. | warranty file, claim docs, submission bundle |
| first-visit resolution | The share of jobs closed on the first truck roll. | first time fix, FTF rate, one-and-done |
| field technician | The person doing the work. Also crew, installer, or tech depending on the trade. | field worker, resource, labor unit, deskless worker |
| dispatcher | The person assigning and sequencing work. | scheduler, coordinator, planner |
| close clean | A job that reached the office complete, with nothing for the operations team to chase. | fully documented, compliant, complete submission |
| drift | The divergence between systems describing the same job. | data silos, misalignment, integration debt |

---

## Anti-Patterns

**Banned product framings:**
- "Ampfield is an AI dispatcher." It does not assign work autonomously and we do
  not want a buyer expecting that in the demo.
- "Ampfield replaces your ERP" or "your accounting system." It does not, it will
  not, and saying so ends the deal with the finance stakeholder.
- "Ampfield is a CRM for contractors." Wrong object model, wrong buyer, wrong
  competitive set.
- "Ampfield is a mobile forms app." Technically containing forms is not the
  same as being one, and this framing prices us against tools that cost a tenth
  as much.
- "Ampfield optimizes routes." We do not do routing. This is a claim violation,
  not a stylistic preference.

**Banned market positioning:**
- "The operating system for the trades." Every vendor in adjacent categories has
  used it and it commits us to scope we do not have.
- "All-in-one platform for contractors." The whole argument is that we are one
  layer that makes the others agree. All-in-one contradicts the integration
  story and invites an unwinnable feature comparison.
- "The future of field service." Banned in `voice.md` as a phrase and banned
  here as a position. We are about what happened this afternoon.
- "Digital transformation for the trades." It flatters the buyer's board deck
  and describes nothing.
- Anything positioning us against technicians, including any framing where the
  product's value is reduced headcount. It is not our argument and it poisons
  the adoption story that the product depends on.

**Banned outcome language:**
- "Eliminates truck rolls." Truck rolls are the business. We reduce second truck
  rolls, and we say by how much or not at all.
- "Guarantees warranty approval" or "guarantees compliance." We assemble the
  documentation a manufacturer requires. The manufacturer decides.
- "Instant visibility" or "real-time visibility." Say the latency: about 90
  seconds after the technician taps done, or on the next signal from a dead
  zone.
- "Pays for itself in 30 days." We do not know that, and the 30-day pilot is a
  capture test, not a payback test.
- "Zero paperwork" or "goes paperless." Paper is not the problem and this
  promises a change we do not deliver.
- Any percentage improvement without a named baseline, a measurement window, and
  the customer's own before number.

*Voice-level bans live in `voice.md`. This section is for claims, not style.*

---

## Maintenance

- **Owner:** Head of Marketing, with the Head of Field Operations as reviewer on
  anything in The Frame, Named Traps, or Canonical Vocabulary.
- **Review cadence:** Full review quarterly. Headline Stats reviewed monthly,
  because a stat that ages out silently is the most dangerous line in this file.
- **Sign-off required for:** changing the canonical noun or its definition,
  adding or renaming a named trap, adding a headline stat or moving one out of
  the example state, changing a tagline, and any change to Categories We Are Not.
  Everything else is an edit, not a decision.

### Changelog

| Date | What changed | Why |
|---|---|---|
| 2026-03-02 | Published this file as the worked example in a public repository. All stats marked as examples. | The example exists to show the shape of a brand kit, not to circulate invented numbers. |
| 2026-02-18 | Renamed Warranty Assist to Claim Packet and Parts Sync to Truck Stock Ledger. Logged in `voice.md` under Superseded Names. | Both old names described a feature. The new names describe the object a customer holds. |
| 2026-01-27 | Added the Rebuild Tax as a named trap. | It kept coming up unprompted in COO conversations at companies above 300 technicians, and we had no name for it. |
| 2025-12-09 | Split "callback" and "second truck roll" into separate vocabulary entries with separate definitions. | We were using them interchangeably in content while our buyers track them as different numbers, which made us sound like outsiders. |
| 2025-11-14 | Retired "single source of truth" and adopted "the field record" as the canonical noun. | The generic phrase was doing no work. A specific noun gives buyers something to repeat back. |
| 2025-10-03 | Added the Promise Drift trap and the customer experience buyer to the ICP. | Deals kept expanding into customer care teams and we had nothing written for them. |
