# Answer Engine Style Guide

How to structure content so answer engines can extract it, quote it, and cite
it. This file owns the structural rules. It does not own voice: that lives in
`brand-kit/voice.md` and is enforced by `house-style`.

`content-writer` and `transcript-to-article` both read this file. Neither one
restates these rules, so this is the only place to change them.

---

## Why structure decides citation

An answer engine does not read your article the way a person does. It looks for
a self-contained passage that answers the question it was asked, lifts that
passage, and attributes it. Everything below exists to make sure such a passage
exists, is easy to find, and says what you want said.

The failure mode is not bad writing. It is good writing whose answer is spread
across four paragraphs, so nothing can be quoted without a human editing it
first.

---

## The 100-word rule

Answer the primary question of the article inside the first 100 words. Not a
setup, not a scene, not a preamble about why the topic matters. The answer.

Everything after that is support. If a reader stops at word 100 they should
already have the point, and an answer engine that stops there should have
something worth quoting.

---

## The atomic answer rule

Under every question-based H2, the first paragraph is a standalone answer of 40
to 60 words. It must make complete sense with no other sentence in the article
present, because that is exactly the condition under which it will be quoted.

Rules for the atomic answer:

- No pronouns pointing backward. Not "this means," not "as described above."
- Name the subject explicitly, even when it feels repetitive in context.
- No hedges. "Can help" and "may reduce" get dropped or misquoted.
- Then expand: explanation, mechanism, a list, a table, an example.

Write the atomic answer first and the section around it second. Writing it last
produces a summary of the section rather than an answer to the heading.

---

## Question-based headings

Answer engines match headings against the queries people type. Phrase H2s and
H3s as the question a real buyer or a real model would ask.

Test each heading by asking whether someone would type it into a search box. "A
better approach to scheduling" fails. "Why do field crews miss the second
appointment?" passes.

Use the vocabulary your buyers use, which means the terms in `Canonical
Vocabulary` in `brand-kit/positioning.md`, not internal shorthand.

---

## The Key Takeaways block

Every article carries a Key Takeaways block immediately after the introduction,
before the first H2. Three to five bullets, each answering part of the core
question.

Place it high. It sits where an extraction pass looks first, and it is the
single highest-citation element in a well-structured article. Each bullet
should survive being read alone.

Do not use it as a table of contents. Bullets state conclusions, not topics.

---

## Comparison tables

When a piece argues that one approach beats another, put the contrast in a
Markdown table. Tables extract cleanly and they force specificity: a vague claim
does not fit in a cell.

| Dimension | The common approach | The approach you are arguing for |
|---|---|---|
| What it captures | | |
| When it captures it | | |
| What it produces | | |

Two columns, or three at most. Every claim in your own column has to trace to
`What We Do` in `brand-kit/capabilities.md`. A table is where unsupported claims
hide most easily, because the format makes them look verified.

Never write a competitor's column from assumption. Quote their own site or leave
the row out.

---

## The FAQ section

Every published guide ends with a Frequently Asked Questions section of 8 to 12
questions. Use H3s phrased as the exact question. Answers run 40 to 80 words and
follow the atomic answer rules.

Source the questions from real inputs: sales call objections, search console
queries, the questions listeners asked during a recording, support tickets. An
invented FAQ reads like one.

Mark the section up with FAQPage schema. The schema is what makes the section
eligible for extraction as a discrete answer rather than as body text.

---

## Publication checklist

Before anything ships:

- [ ] A visible "Last updated" date with the month, day, and year, at the top or
      bottom of the page. Freshness signals are read literally.
- [ ] An author bio box at the end, with a real person and a real credential.
- [ ] 3 to 5 internal links using exact-match anchor text. Choose the targets
      from the `Link Map` in `brand-kit/capabilities.md`, which is the only
      place link destinations are defined. Do not invent a URL pattern.
- [ ] The first 100 words answer the H1.
- [ ] Every question H2 opens with a 40 to 60 word atomic answer.
- [ ] Key Takeaways sits above the first H2.
- [ ] The FAQ has at least 8 questions and carries FAQPage schema.
- [ ] Every statistic appears in `Headline Stats` in `brand-kit/positioning.md`
      with a source, and none carry an unverified flag.

---

## Standard article template

For a normal article, 900 to 1,400 words:

1. **H1 hook.** A blunt truth or a direct question.
2. **Intro.** The answer to the H1, inside 100 words.
3. **Key Takeaways.** Three to five bullets.
4. **The stakes.** Why the status quo fails, in the reader's terms.
5. **The contrast.** A table or a list separating the common approach from
   yours.
6. **The sequence.** How it works, step by step.
7. **CTA.** One next step, specific and measurable.

---

## Pillar guide template

Target length 1,900 to 3,500 words. Use this for the anchor piece of a topic
cluster, where cluster articles link up to it and it links back down.

1. **H1 hook.** A blunt truth or a direct question.
2. **Intro.** The direct answer to the H1, inside the first 100 words.
3. **Key Takeaways block.** Three to five bullets.
4. **The stakes.** Why the status quo fails.
5. **The contrast.** A table separating the common approach from yours.
6. **Main body.** Eight to fifteen H2s, each phrased as a real question. The
   first 40 to 60 words under each is the atomic answer. Then the explanation,
   the quotes, the steps, or the data.
7. **FAQ.** Eight to twelve questions with FAQPage schema.
8. **Conclusion and CTA.** One measurable next step.
9. **Author bio box and last-updated date.**

A pillar guide earns its length through the number of questions it answers, not
through longer paragraphs. If you cannot find ten real questions, you have a
1,200-word article, and that is fine.

---

## Recording to pillar workflow

The highest-yield source for a pillar guide is a recording you already have: a
podcast episode, a webinar, a customer panel, a long interview. `transcript-to-article`
automates the first pass of this. The method is worth understanding anyway.

1. Pull the full transcript.
2. Identify the ten to fifteen biggest questions the conversation actually
   answers. Not the topics it covers. The questions.
3. Turn each one into an H2, phrased the way a person would ask it.
4. For each H2, write the 40 to 60 word atomic answer first. Only then weave in
   the strongest quotes and examples from the transcript underneath it.
5. Add the comparison tables the conversation implies but never drew.
6. Build the FAQ from the questions the audience asked, or from the ones the
   conversation raised and did not answer.

The result is one authoritative, citable guide instead of a flat transcript with
headings dropped into it. The reordering is the work. A transcript is organized
by what came up; an answer-engine guide is organized by what gets asked.

---

## Hook patterns

Two that hold up:

- **Blunt insight.** State the thing everyone in the category knows and nobody
  writes down. Short sentences. No windup.
- **Risk warning.** Name a failure the reader is currently exposed to, then say
  why it happens. This only works if the failure is real and specific.

Both are covered further in `docs/messaging-patterns.md`.

---

## Rewriting prompt

Paste this when asking a model to restructure an existing draft for answer
engines:

> Rewrite the following content for answer-engine extraction. Direct language,
> active voice, no appositives, no em-dashes, strong verbs. Apply the 100-word
> rule: the first 100 words answer the title. Use question-based H2 headings
> phrased the way a real buyer would ask them. Under every H2, open with a 40 to
> 60 word standalone answer that makes sense in isolation, then expand.
> Paragraphs run one to three sentences. Use tables for contrasts. Add a Key
> Takeaways block of 3 to 5 bullets after the intro. End with an FAQ of 8 to 12
> questions and one clear CTA. Do not introduce any statistic that is not
> already in the draft. Target 1,900 to 3,500 words for pillar content.

Run `house-style` after this prompt, not instead of it. This one fixes
structure. That one fixes voice.
