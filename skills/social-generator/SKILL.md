---
name: social-generator
description: >
  Write social captions and matching image prompts from an article, a URL, or a topic
  brief. Use whenever someone asks for a LinkedIn post, an X post, an Instagram caption,
  a text overlay for a graphic, or an AI image prompt for a social graphic. Triggers on
  "write a LinkedIn post about this", "turn this article into social", "make an Instagram
  caption", "generate a Midjourney prompt for this post", "I need a week of social from
  this blog", "give me a text overlay for the graphic", or any request pairing a piece of
  content with a platform name.
---

# Social Generator

Produce a complete social package from one source: platform-native captions, the bold
text overlay that goes on the graphic, the graphic headline, and paired image prompts
for Midjourney and DALL-E.

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

If `house-style` is installed, run it as the final voice pass over every caption
before delivery. Do not hand-copy voice rules into this skill.

---

## Two rules that get broken most often

**Never name the framework.** The qualities in `The Pillars` in
`brand-kit/positioning.md` are internal scaffolding. Pick one to lean on and let
it shape which claim you lead with, then throw the label away. A caption that
says "our three pillars", "our messaging framework", or any pillar name by
title has failed. `AI Tells to Avoid` in `brand-kit/voice.md` calls this
scaffolding exposure and the quality panel penalizes it.

**Hashtags come from the brand kit.** Never invent one. Use the tags the brand
kit defines. If the brand kit defines none, ask the user for the set once and
tell them to add it, rather than guessing at a branded tag that may not exist.

---

## Step 1: Gather inputs

Seven questions. Ask for anything the user has not already given you. If they
gave you a URL and nothing else, ask the rest in one message rather than one at
a time.

1. **Source.** An article URL, a pasted draft, or a topic brief. If it is a URL,
   read it and pull the title, the core argument, the target reader, and every
   concrete number.
2. **Platforms.** LinkedIn, X, Instagram, or any combination.
3. **Angle.** Which quality from `The Pillars` or which entry from `Named Traps`
   in `brand-kit/positioning.md` this post leans on. Internal answer only.
4. **Tone.** Authoritative, pragmatic, contrarian, or plain. Stays inside
   `Tone` in `brand-kit/voice.md` either way.
5. **Background.** Which palette role grounds the image. See the table in Step 3.
6. **Subject.** What the illustration depicts. Name the actual objects, not a
   category.
7. **CTA.** Lift it from `Calls to Action` in `brand-kit/brand.md`, social
   context row. Optional on X and Instagram, expected on LinkedIn.

Surface the numbers you found from the source and confirm which one leads. A
real statistic outperforms a general claim on every platform. Check any number
you plan to state as a house claim against `Headline Stats` in
`brand-kit/positioning.md`. If it is not there, attribute it to the source
instead of asserting it.

---

## Step 2: Write the captions

### LinkedIn

- Around 600 characters. 3 to 5 sentences.
- Lead with a real statistic from the source. Not a question, not a setup line.
- One idea. A LinkedIn post that makes two arguments makes neither.
- Name the company once, naturally, and never as the subject of the sentence.
- Article link at the end.
- 3 to 4 hashtags from the brand kit.
- **Text overlay:** a bold 3 to 7 word phrase for the graphic.

### X

- Under 280 characters, counted. State the count.
- One sharp claim or one number. Nothing survives compression except the point.
- 1 to 2 hashtags from the brand kit.
- Link optional and it costs characters, so earn it.
- No text overlay needed.

### Instagram

- Hook on the first line. It is the only line most readers see before the fold.
- Around 400 characters total.
- 2 to 3 sentences of substance after the hook, then the CTA.
- 6 to 8 hashtags from the brand kit, mixing branded and topical.
- **Text overlay:** a bold 3 to 7 word phrase for the graphic.

### Text overlay and graphic headline

These are two different things and both get delivered.

- **Text overlay** is 3 to 7 words. It sits on the image. It is the claim, not
  the topic. It reads at thumbnail size on a phone.
- **Graphic headline** is 4 to 8 words. It is the punchier editorial line that
  can run above or below the art in a carousel or a link card. Mark which one or
  two words take the accent treatment, using the `Accent` role from `Palette` in
  `brand-kit/brand.md`.

Both obey `Banned Words and Phrases` in `brand-kit/voice.md`. Short copy is
where banned words hide best, so scan them specifically.

---

## Step 3: Write the image prompts

Produce a Midjourney prompt and a DALL-E prompt for every graphic. They are not
interchangeable. Midjourney takes comma-separated fragments and flags. DALL-E
takes plain declarative sentences and ignores flags entirely.

### Read the illustration style from the brand kit

Read `Illustration Style` in `brand-kit/brand.md` and build both prompts from it.
That description, not this skill, defines what the picture looks like.

If the brand kit has no `Illustration Style` section, stop and help the user
write one using the guide below, then add it to `brand-kit/brand.md` under its
own heading. Do not substitute a house style of your own invention. Two
different graphics generated from two different guesses is worse than waiting.

### How to write an Illustration Style

Four decisions. Write two or three sentences on each and the description is done.

1. **Line weight.** Thin and precise, medium and even, or heavy and confident.
   Is there hand-drawn wobble or is every line mechanically straight.
2. **Fill.** Outlines only, flat single-color fills, two-tone blocking, or full
   tonal rendering. This single choice does more to define a visual signature
   than any other.
3. **Subject treatment.** What the picture shows and how literal it is.
   Diagrammatic icons, isometric objects, abstract shapes, human figures,
   photographic composition. Say what is never depicted too.
4. **Edge behavior.** How the art meets the frame. Bleeds off one edge,
   contained with a margin, vignetted, or full-bleed edge to edge.

Three contrasting worked examples. Any of these is a valid answer, and the point
is that they are visibly different from each other.

> **Example A: technical line diagram.**
> Thin, precise pen lines with slight hand-drawn imperfection, roughly uniform
> weight throughout. Outlines only, no fills, no gradients, no shading. Subject
> is an interconnected system diagram in isometric perspective: nodes, arrows,
> gears, documents, servers, queues. Never people, never photographic objects.
> The drawing bleeds off the lower-right edge with no border or frame.

> **Example B: flat editorial shapes.**
> No outlines at all. Form comes from flat, hard-edged color blocks in two
> palette colors plus the background, with no line work anywhere. Subject is a
> single oversized metaphorical object per graphic, cropped tight, rendered as
> simplified geometry. Human figures appear as silhouettes only, never with
> facial features. The composition sits inside a generous even margin on all
> four sides.

> **Example C: rendered dimensional objects.**
> No visible outlines. Soft-shadowed three-dimensional forms with matte surfaces
> and a single consistent light source from the upper left. Subject is one
> abstract sculptural object per graphic: stacked planes, tubes, spheres,
> nothing that names a real product. No text inside the art. The object floats
> centered with clear space around it, full-bleed background behind it.

### Background, line color, and text color

Pick a background role, then take the line and text colors from the same row.
Every value here is a **role** from `Palette` in `brand-kit/brand.md`. Look up
the hex there at generation time. Never hardcode a hex into this skill or into
a saved prompt.

| Background role | Line colors | Text colors |
|---|---|---|
| `Background` | `Body text` primary, `Accent` secondary | `Body text` headline, `Accent` highlight |
| `Background soft` | `Body text` primary, `Primary` secondary | `Body text` headline, `Primary` highlight |
| `Primary dark` | `Accent` primary, `Accent soft` secondary | `Background` headline, `Accent` highlight |
| `Primary` | `Background` primary, `Accent soft` secondary | `Background` headline, `Accent soft` highlight |
| `Accent` | `Primary dark` primary, `Background` secondary | `Primary dark` headline, `Background` body |
| `Accent soft` | `Primary dark` primary, `Primary` secondary | `Primary dark` headline, `Primary` highlight |
| `Muted text` as a mid-tone ground | `Background` primary, `Accent` secondary | `Background` headline, `Accent` highlight |
| `Success / positive` | `Primary dark` primary, `Background` secondary | `Primary dark` headline, `Background` body |

Two rules on top of the table:

- Two line colors maximum. A third reads as decoration.
- Check contrast before you commit. If the text color and the background role
  resolve to similar values in the brand kit, pick a different row rather than
  shipping an unreadable overlay.

### Midjourney prompt structure

Fill the brackets from the brand kit and the user's answers.

```
[background role color], [illustration style summary from the brand kit],
[line color roles resolved to their hex], [fill rule from the style],
[subject: name the actual objects], [edge behavior from the style],
[composition notes] --ar 1:1 --style raw --stylize 450 --no photography, gradients, text, watermark, logo
```

**What the flags do.** Get these right or the output drifts.

- `--ar` sets aspect ratio. `--ar 1:1` for a feed square, `--ar 4:5` for the
  taller LinkedIn and Instagram portrait crop, `--ar 16:9` for a link card or a
  video thumbnail. Set it per platform, not once.
- `--style raw` turns off Midjourney's default aesthetic pass. Use it for any
  graphic that has to match an existing brand look. Omit it only when you want
  the model's own taste, which for brand work is almost never.
- `--stylize` controls how far the model may depart from the prompt, from 0 to
  1000. Low values follow the words literally and look plainer. High values look
  better and obey less. Around 400 to 500 keeps a defined illustration style
  intact while still producing a usable image. Move it down when the model keeps
  adding elements you did not ask for.
- `--no` lists what to exclude. Always exclude `text` and `watermark`, because
  generated lettering is unusable and you are adding real type in the overlay.
  Add exclusions that contradict the style: `gradients` and `color fills` for a
  line style, `outlines` for a flat-shape style, `photography` for both.

These flags use a double hyphen. That is Midjourney syntax, not punctuation, and
it is the one place the no-em-dash scan should not flag a double hyphen.

### DALL-E prompt structure

Plain sentences. No flags, no comma-fragment stacking, no weights. State the
constraints positively where you can, because negations are followed loosely.

```
[Background role color] background. [Illustration style described in full
sentences from the brand kit.] [Line colors named by their resolved hex and
what each is used for.] [Fill rule stated as a positive instruction.]
[Subject: the actual objects and their arrangement.] [Edge behavior.]
[Two or three exclusions at the end, phrased simply.]
```

Set the size in the request rather than the prompt: square for a feed post,
portrait for LinkedIn and Instagram, wide for a link card.

---

## Output Format

Group by platform, then the image section.

```
## LinkedIn
**Text overlay:** [3 to 7 words]
**Caption:** [~600 chars, 3 to 5 sentences]
**Hashtags:** [3 to 4 from the brand kit]

## X
**Caption:** [under 280 chars] (count: __ / 280)
**Hashtags:** [1 to 2 from the brand kit]

## Instagram
**Text overlay:** [3 to 7 words]
**Caption:** [~400 chars, hook first]
**Hashtags:** [6 to 8 from the brand kit]

## Image
**Graphic headline:** [4 to 8 words, accent words marked]
**Palette row:** [background role, line roles, text roles, with resolved hex]
**Midjourney:** [prompt with flags]
**DALL-E:** [prompt in sentences]
```

---

## Notes

- A real number from the source is the strongest opening line on every platform.
  Confirm which one leads before writing anything.
- Name specific icons in the image prompt. "Systems" produces mush. "Ticket
  queue, routing arrows, headset, timer" produces a picture.
- Regenerate the palette row per graphic. A campaign that reuses one background
  for six posts reads as one post seen six times.
- Every claim traces to `What We Do` in `brand-kit/capabilities.md`. Short copy
  is where unsupported claims slip through, because there is no room for the
  qualifier that would have made them true.
- Check `Superseded Names` in `brand-kit/voice.md` before writing any product
  name into a caption.
