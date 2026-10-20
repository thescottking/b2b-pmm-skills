# What not to do

Rules say what to do. This list shows what going wrong looks like, because a
mistake is easier to recognize than a rule is to remember. Check every render
against it before delivering.

Brand-specific rules live in `brand-kit/brand.md`, under `Palette` and `Logo`.
They win over anything here.

---

## Color

**Two accents in one view.** A highlighted word in the headline and an accent
button below it. When two things are emphasized, neither is. Pick the one thing
to read first. The card script refuses two; documents rely on you.

**The accent as text where it fails contrast.** A bright yellow or light green
headline word on white. `check-brand.mjs` marks these `FILL ONLY`, and the card
template underlines in the accent instead. Do not override it with a ground
that brings the problem back.

**The light-ground primary on a dark ground.** A deep navy eyebrow on near-black
is invisible. Dark grounds take `Emphasis` from `Dark Surfaces`.

**The terminal color outside developer cards.** Phosphor greens and similar
developer colors read as "code". On a light surface or an article card they read
as a mistake.

**Status by color alone.** A green number and a red number with no word next to
them. Roughly one reader in twelve cannot tell them apart. Every status carries
a word and a symbol.

**A color typed into a spec or a document.** It will be close to the brand and
not the brand, and it will not change when the brand does. `lint-colors.mjs`
finds them.

## Type

**More than the three families.** Display, body, and mono. A fourth font is
always a mistake, including the system font a render falls back to when a brand
font fails to load.

**Headlines in capitals.** Capitals are for eyebrows and labels, set small with
open tracking. A capitalized headline is shouting and is slower to read.

**Shrinking copy until it fits.** The fitter will do it, and the result is a
small headline on a big card. When the report says a title shrank by more than
a step or two, cut words.

**A headline that breaks in a bad place.** A product name split across lines,
or one short word alone on the last line. Force the break with `\n`.

**Centered paragraphs.** Anything longer than two lines reads left aligned.

## Imagery

**Effects.** Drop shadows, outer glows, bevels, gradient text, and gradients
behind type, unless `Spacing and Shape` sets a shadow and `Illustration Style`
asks for depth. The brand decides; the default is none.

**Stock imagery and AI clichés.** Handshakes, glowing brains, robots, circuit
boards, floating holographic screens, and anything in `Never include` under
`Illustration Style`.

**Emoji in a headline.** They render differently on every platform and turn a
claim into a caption.

**Interface screenshots of features that do not exist.** A mock screen is a
product claim. It has to trace to `What We Do` in `brand-kit/capabilities.md`.

## Logo

**A logo you drew or rebuilt.** If `Logo` lists no files, the card sets the
name in the display face. That is honest. A logo redrawn in a font, recolored,
stretched, or outlined is not.

**A logo inside its clear space.** Nothing touches the margin `Logo` sets,
including the edge of the frame.

## Layout

**Text in the crop zone.** The outer 6% of a card gets cut by some platform
somewhere. The script warns. Believe it.

**Text under the profile photo.** On a LinkedIn banner, the lower left belongs
to the photo.

**A carousel cover with nothing on it.** Page one of a carousel is the hook,
written as a claim. A logo and a title like "Insights" loses the scroll.

## Honesty

**A number without a source, or with an example flag.** Example data in a
shipped asset reads as perfectly plausible, which is what makes it the worst
thing to inherit. The stat card refuses a number without a source line.

**A quote that is not cleared, or that was trimmed.** Verbatim and cleared, or
not at all.

**Editing the PDF.** The HTML is the source. A hand-edited PDF is a version that
cannot be regenerated, and it will drift from the one that can.
