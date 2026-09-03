---
name: transcript-to-article
description: >
  Turn a raw transcript into a publishable article plus the distribution and social
  package that ships with it. Use whenever someone pastes a podcast transcript, a webinar
  recording, an interview, a customer call, or messy meeting notes and wants an article
  out of it. Triggers on "turn this podcast into an article", "clean up this transcript",
  "write an article from this interview", "make a blog post from this recording", "we
  recorded a webinar, what do we do with it", "draft show notes and a LinkedIn post from
  this", or any request that pairs a transcript with a request for publishable copy.
---

# Transcript to Article

Take a raw recording transcript and produce five things: a clean readable transcript,
a finished article, a distribution package, social assets, and a scan report proving
the output is safe to publish.

---

## Before you write anything

Read these first. They are the source of truth and this skill does not invent
around them.

1. `brand-kit/brand.md`: name, palette, fonts, CTAs
2. `brand-kit/voice.md`: house style and banned constructions
3. `brand-kit/positioning.md`: the frame, pillars, traps, stats, vocabulary
4. `brand-kit/capabilities.md`: read before making any product claim

If `brand-kit/` is missing or still has its template placeholders, stop and tell
the user to run `brand-kit-setup`. Do not proceed with invented positioning.

Also read `docs/aeo-style-guide.md`. It owns the answer-engine rules this skill
depends on: the opening-answer rule, atomic answers under question headings, the
key-takeaways block, comparison tables, and the FAQ section. This skill does not
restate those rules and does not override them.

If `house-style` is installed, run it as the final voice pass over every asset
before delivery. Do not hand-copy voice rules into this skill.

---

## Speaker Roster

A transcript is worthless until you know who is talking and what each person is
allowed to be an authority on. Establish the roster before Stage 1.

Get it from one of three places, in this order:

1. **The user supplies it inline.** Ask for it if the transcript labels are
   initials, "Speaker 1", or absent.
2. **The brand kit.** If `brand-kit/positioning.md` has entries under
   `Internal Quotes`, those names and titles are your roster for internal voices.
   Respect the `Cleared for external use` column: an uncleared speaker can inform
   the argument but does not get quoted by name.
3. **The transcript itself,** when speakers introduce each other on the recording.

Record the roster in this shape before you clean anything:

| Speaker | Role or title | Authority on | Quotable by name |
|---|---|---|---|
| | | | |

Rules the roster enforces:

- Attribute an insight only to a speaker whose `Authority on` column covers it.
  A finance lead does not get quoted on infrastructure because they mentioned it.
- Never invent a name, a title, or a company for an unlabeled speaker. Use
  "Speaker 2" and tell the user you need the identity.
- Guests from outside the company are external voices. Quote them verbatim and
  do not put your positioning language in their mouth.
- If the roster is empty and the user cannot supply one, write the article from
  the ideas only, with no attributed quotes, and say so in the delivery note.

---

## Workflow

### Stage 1: Clean the transcript

Produce a readable transcript that a human could publish as-is.

1. **Cut fillers.** Remove "um", "uh", "like", "you know", "actually",
   "basically", "right", "so" (as a sentence opener), "I mean", "kind of",
   "sort of", "obviously", "literally", and repeated false starts.
2. **Standardize speaker labels.** One bolded label per speaker, spelled the same
   way every time, matching the Speaker Roster exactly. Merge split turns from the
   same speaker into one block. Drop timestamps unless the user wants them kept
   for the video description in Stage 3, in which case park them in a separate list.
3. **Repair sentences.** Fix grammar and finish incomplete thoughts without
   changing what the speaker meant. When a sentence is unrecoverable, cut it
   rather than guessing.
4. **Strip crosstalk and logistics.** Scheduling, audio checks, and side
   conversations do not survive the clean.
5. **Flag the raw material.** Mark every quote, statistic, customer story, and
   sharp phrasing worth carrying into the article. List them at the end of the
   stage so Stage 2 has a shortlist rather than a re-read.
6. **Verify every number.** A statistic that appears in the transcript but not in
   `Headline Stats` in `brand-kit/positioning.md` is an unverified claim. Keep it
   attributed to the speaker who said it, or drop it. Never promote it to a
   house statistic.

Apply `brand-kit/voice.md` `Grammar Constraints` to the cleaned transcript too.
It is a published asset, not scratch work.

### Stage 2: Write the article

Default target is 1,200 words. For a pillar guide built from a long or
multi-episode recording, target the longer range in `docs/aeo-style-guide.md`.

Structure, in order:

1. **Hook.** A blunt claim, a real number, or a direct question. No setup, no
   throat-clearing, no "in this article we will".
2. **Opening answer.** Answer the article's core question inside the opening,
   at the length `docs/aeo-style-guide.md` prescribes. This is what an answer
   engine lifts.
3. **Key takeaways block.** Per `docs/aeo-style-guide.md`.
4. **The stakes.** Why the current approach fails, with the specific cost. Use
   numbers the transcript supplies. Where the failure has a name in
   `Named Traps` in `brand-kit/positioning.md`, use that name.
5. **The mechanism.** How the better approach actually works. Explain it well
   enough that a reader could argue for it in their own meeting.
6. **The proof.** Examples, scenarios, quotes, and numbers from the transcript,
   attributed per the Speaker Roster.
7. **The close.** The exact CTA from `Calls to Action` in `brand-kit/brand.md`
   for the blog and article context.

**Do not use the contrast formula.** "Most companies do X. Winners do Y." and
"It's not about X, it's about Y." are listed under `AI Tells to Avoid` in
`brand-kit/voice.md` and lose points in the quality panel. When you need to show
a gap between approaches, use a comparison table per `docs/aeo-style-guide.md`,
or state the better approach directly and let the contrast be implicit.

**Headings.** Question-based H2s that match how a buyer would actually phrase
the search, each opening with a standalone atomic answer per
`docs/aeo-style-guide.md`.

**Positioning discipline.**

- The qualities in `The Pillars` in `brand-kit/positioning.md` are invisible.
  The reader absorbs them. Never write the framework's name, "our pillars",
  or any internal label into the article.
- Every product claim traces to `What We Do` in `brand-kit/capabilities.md`.
  Anything in `What We Do Not Do` is off limits regardless of what a speaker
  said on the recording.
- Use `Canonical Vocabulary` in `brand-kit/positioning.md` for terminology and
  check `Superseded Names` in `brand-kit/voice.md` before writing any product name.
- Sell the idea, not the product. The company should read as the natural
  conclusion of a sound argument, not the subject of it.
- Link internally using `Link Map` in `brand-kit/capabilities.md`. Make a
  descriptive phrase the anchor text. Never write a bare "Learn more: URL".

### Stage 3: Distribution package

Produce all four, exactly to spec.

**Three title variations.** Label which is which.

1. **SEO.** Keyword-led, matches real search intent.
2. **Provocative.** Challenges the reader's current assumption.
3. **Direct.** States the core argument plainly.

**Meta description.** 155 characters maximum. Count them and state the count.
Action-oriented. Answers "why should I read this".

**Video description.** Roughly 200 words. Include timestamps for the key topics
(use the timestamps parked in Stage 1). Include the CTA link from
`Calls to Action` in `brand-kit/brand.md`. End with 3 to 5 tags.

**Show notes.** A 3 to 4 sentence summary, then 3 to 5 "What you'll learn"
bullets. Each bullet is a specific takeaway, not a topic label.

### Stage 4: Social and visual assets

If `social-generator` is installed, hand it the finished article and the chosen
title and let it produce this stage. It owns the per-platform specs, the
text overlay, and the image prompts. Do not duplicate its rules here.

If it is not installed, produce the minimum set:

- **LinkedIn post.** Lead with a real number or a real claim from the article.
  3 to 5 sentences. Article link at the end. Hashtags come from the brand kit,
  never invented here.
- **Short-form post.** Under 280 characters. One sharp idea. Link.
- **Thread.** Five posts: the problem, the cost, the mechanism, the proof, the CTA.
  Each under 280 characters.
- **Image prompt.** Built on the illustration style described in the brand kit,
  visualizing the article's central tension. Colors come from `Palette` in
  `brand-kit/brand.md`.

### Stage 5: Pre-delivery scan

Run this as a dedicated pass over every asset, including the cleaned transcript.
Report the result as a short checklist with a pass or fail per line. Fix and
re-scan before delivering. Do not deliver with a known failure.

| Check | Fails when |
|---|---|
| Em-dashes | Any em-dash character or double hyphen used as one appears anywhere |
| Banned words | Any entry from `Banned Words and Phrases` in `brand-kit/voice.md` survives |
| AI tells | Any pattern from `AI Tells to Avoid` in `brand-kit/voice.md`, especially the contrast formula and scaffolding exposure |
| Framework leakage | A pillar name or internal framework label appears in customer-facing copy |
| Claim safety | A claim has no home in `What We Do` in `brand-kit/capabilities.md`, or touches `What We Do Not Do` |
| Stat sourcing | A number is presented as a house statistic without an entry in `Headline Stats` in `brand-kit/positioning.md` |
| Attribution | A quote is attributed to a speaker outside their `Authority on` column, or to an uncleared internal speaker |
| Naming | A retired name from `Superseded Names` in `brand-kit/voice.md` appears |
| Character limits | Meta description over 155 characters, or a short-form post at or over 280 |
| CTA fidelity | The CTA is invented rather than lifted from `Calls to Action` in `brand-kit/brand.md` |
| Voice pass | `house-style` is installed and was not run |

---

## Output Format

Deliver in this order. It matches `references/article-template.md` exactly, so
the two never disagree.

```
## Speaker Roster
[the table, confirmed with the user]

## Stage 1: Cleaned Transcript
[cleaned transcript, then the flagged quotes and stats]

## Stage 2: Article
[article in markdown, ready for the CMS]

## Stage 3: Distribution Package
### Titles
### Meta Description
### Video Description
### Show Notes

## Stage 4: Social and Visual Assets
### LinkedIn Post
### Short-Form Post
### Thread
### Image Prompt

## Stage 5: Pre-Delivery Scan
[the checklist, pass or fail per line]
```

---

## Reference Files

`references/article-template.md` is the blank skeleton for the whole delivery.
Its section order is the Output Format order above. If you change one, change both.

---

## Notes

- A real number from the recording beats a generic claim every time. The flagged
  list from Stage 1 is the most valuable output of that stage.
- The atomic answer under each H2 is what an answer engine quotes. Write it
  first, then write the expansion around it.
- Long recordings are pillar guides, not long articles. Switch templates rather
  than padding.
- When the transcript contradicts the brand kit, the brand kit wins and you tell
  the user which claim you dropped and why.
