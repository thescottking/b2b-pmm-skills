# Voice

How your company writes. The `house-style` skill enforces this file; every other
skill defers to it for the final pass.

Unlike the other brand-kit files, this one ships with real defaults rather than
blanks. They are opinionated B2B house rules that work for most companies. Edit
what you disagree with, but edit deliberately, because every rule here exists
to prevent a specific failure.

---

## Tone

- Write to one person, not an audience.
- Confident without hype. Claims are specific or they are cut.
- Explain the mechanism, not just the outcome. Buyers trust what they understand.
- Assume the reader is smart and busy. Never both flatter and explain.

**Ampfield additions:**

- Write like someone who has stood in a parts room at 6am. Use the reader's
  nouns: truck roll, dispatch board, truck stock, callback, punch list, serial,
  claim packet. Getting a trade word wrong costs more credibility than a weak
  argument does.
- Never write about technicians as a cost to be reduced. They are the people
  the product asks to do something differently, and every ops leader we sell to
  used to be one. Describe them as the source of the record, not as a problem.
- Numbers are hours, trucks, jobs, and parts. Not "efficiency gains." If a
  sentence cannot be checked against a dispatch board, cut it.
- Say what breaks before saying what we fix. Ops buyers recognize themselves in
  the failure, not in the feature.

---

## Grammar Constraints

- **No em-dashes.** Use a period, a comma, or a colon. This is the single most
  reliable AI tell in B2B copy.
- **No appositives that restate the subject.** Not "Acme, a workflow platform,
  does X." Say what it does.
- **Active voice.** If the actor is missing, the sentence is hiding something.
- **No weak verbs.** Cut "enables," "empowers," "leverages," "facilitates,"
  "helps you to," "allows you to." Say what happens.
- **No sentence-initial "Additionally," "Furthermore," "Moreover."**
- **Serial comma.** Consistency matters more than the choice; pick one. Ampfield
  uses it.

**Ampfield additions:**

- The product is "it," always. Never "they," never "she," never "the Ampfield
  platform" when "Ampfield" will do.
- "Field record" is lowercase in running text, even at the start of a
  definition. Capability names take title case: Field Record Capture, Truck
  Stock Ledger, Claim Packet, Promise Timeline.
- Numerals for anything a dispatcher would say aloud: 3 techs, 50 trucks, 6
  hours. Words only for zero and one at the start of a sentence.

---

## Pacing

- Paragraphs run one to four sentences. Never longer.
- Vary sentence length deliberately. Three medium sentences in a row reads as
  machine output.
- One idea per paragraph. If a paragraph needs a "but," it is two paragraphs.
- Sections break every 150 to 250 words in long-form.

---

## Clarity

- State the point in the first sentence, then support it. Never build to a
  reveal.
- Replace every adjective you can with a number. "Fast" is nothing; "under two
  seconds" is a claim.
- Define a term the first time you use it, or do not use it.
- Cut any sentence that would still be true if you deleted your company from it.

---

## Formatting Preferences

House defaults for how a page looks on the screen. These are preferences, not
tells, and they carry no score. A draft that breaks them is off house format,
which is a find-and-replace, not evidence that anything was machine-assembled.

- **Sentence case in headings.** "What the second truck roll costs," not "What
  The Second Truck Roll Costs." The exceptions are capability names and named
  traps, which keep the title case set in `Naming and Usage Rules` wherever they
  appear, including inside a sentence-case heading.
- **No run-in bold headers on bullets.** Prefer a bullet that starts with the
  claim over one that starts with a **Bold Header:** and then explains it. Use
  the run-in form where a list is genuinely a set of defined terms, which for us
  is usually a capability list or a glossary.
- **Numerals for anything an operations reader would compare.** Technician
  counts, truck counts, job counts, minutes, percentages, and dollar figures are
  numerals at every value: 3 techs, 90 seconds, 4 percent. Spell out numbers
  only in idiom, as in "the second truck roll."
- **Link text is the destination, not the invitation.** "See what a field record
  looks like," never "click here" and never a bare URL in running text.
- **Tables for anything with more than three parallel facts.** An operations
  leader reads a table and skims a paragraph. If a passage compares branches,
  crews, or line items, it is a table.
- **Screenshots and diagrams get a caption that states the finding**, not one
  that names the object. "Dispatch board at 2:40pm, before the field record
  arrives" beats "Dispatch board."

---

## Banned Words and Phrases

Each of these costs points in the quality panel. They are banned because they
are simultaneously overused by AI models and empty of meaning.

**Verbs:** delve, unlock, unleash, harness, leverage, empower, elevate,
streamline, supercharge, revolutionize, transform (as a standalone claim),
navigate (metaphorically), foster, embark, spearhead

**Nouns:** landscape, realm, tapestry, journey, game-changer, powerhouse,
cornerstone, testament, treasure trove, deep dive, synergy, paradigm

**Adjectives:** seamless, robust, cutting-edge, world-class, best-in-class,
state-of-the-art, unparalleled, myriad, bespoke, holistic, transformative

**Phrases:** "in today's fast-paced world," "it's not just X, it's Y," "the
future of," "at the end of the day," "when it comes to," "that's where X comes
in," "closes that gap," "look no further," "let's dive in," "the bottom line is"

**Ampfield additions.** These are either category noise, phrases our own team
overuses, or wording we have retired.

- "Boots on the ground." Every field service vendor writes it. It says nothing
  about the product and it borrows military language for installing heat pumps.
- "Single pane of glass." Dashboard vendors burned this to the ground. Say what
  the person sees and when they see it.
- "Digital transformation," "going paperless," "paperless workflows." Paper is
  not the problem. Delay is the problem, and a contractor with a tablet can
  still be six hours behind.
- "Mobile workforce," "deskless workers," "frontline workers." Say technicians,
  crews, dispatchers, or installers. Those are the actual jobs.
- "End-to-end visibility," "360-degree view," "complete visibility." We are
  precise about latency, so we say how fast a record reaches the office, not
  that everything is visible.
- "Truck rolls" used as a synonym for waste. A truck roll is the business. A
  *second* truck roll is the waste, and the distinction is the whole argument.
- "Optimize routes." Ampfield does not do routing. Writing this creates a claim
  we cannot support, which makes it a `capabilities.md` violation as well as a
  voice one.
- "AI-powered." If a model does something specific, name what it does. If it
  does not, do not decorate the sentence with it.
- "Field service management software" as a self-description in long-form. It is
  a search term, not a sentence. Use it in titles, meta descriptions, and
  comparison pages, and write plainly everywhere else.

---

## AI Tells to Avoid

Structural patterns, not individual words. These are the ones that make a
competent draft read as generated.

1. **The rule-of-three list** where the third item adds nothing. "Faster,
   cheaper, and more reliable", check whether item three is load-bearing.
2. **The contrast formula.** "Most companies do X. Winners do Y." Also "It's not
   about X. It's about Y." Both are structurally hollow.
3. **The negation opener.** Starting a sentence with what something is not.
4. **Symmetrical paragraphs.** Every section the same length with the same shape
   is the clearest signal of machine assembly.
5. **The summarizing closer.** A final paragraph that restates the article
   without adding anything. End on the strongest point instead.
6. **Hedged claims.** "Can help," "may enable," "often leads to." Either the
   claim is true or it is cut.
7. **Scaffolding exposure.** Naming your own framework inside customer-facing
   copy, "our three pillars," "the four Cs," "our messaging framework." The
   reader should absorb the qualities without seeing the structure.
8. **Rhetorical questions as transitions.** "So what does this mean for you?"
9. **The em-dash aside** used to add a thought the sentence did not need.
10. **Uniform enthusiasm.** Every paragraph equally excited flattens emphasis.

**Ampfield addition, number 11: the invented job site.** Do not write a scene
you have not been told about. "Picture a technician on a rooftop in Phoenix in
August" is set dressing, and any operator who has been on that roof can tell you
made it up. Name a real trap instead and describe the mechanism.

**Number 12: the trap-name pileup.** Our named traps work because they are used
sparingly. One named trap per piece, twice at most. A page that stacks four of
them reads like a glossary of things we invented, which is exactly what it is.

---

## Superseded Names

Names you have retired, and what replaced them. Skills check this before writing
any product name, so a rename here propagates everywhere.

| Old name | Current name | Retired |
|---|---|---|
| Ampfield Mobile | Field Record Capture | 2025-04 |
| Job Log | the field record | 2025-04 |
| Ampfield Dispatch Pro | Dispatch Board | 2025-11 |
| Parts Sync | Truck Stock Ledger | 2026-02 |
| Warranty Assist | Claim Packet | 2026-02 |
