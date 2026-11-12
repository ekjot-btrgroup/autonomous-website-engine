# Stillhour  (health-wellness)
A therapy and restorative-ritual studio site for people who are tired rather than ill. The whole page is graded like late-afternoon sun: cream paper, amber highlights, rust and espresso blocks, faces with closed eyes. Condensed serif headlines with a single italic phrase do the emotional work while small sans labels keep it credible and clinical enough to trust.

## Type
- Instrument Serif 400 for all display: Display 104px, tracking -0.02em, leading 0.96 (88 / 80 / 56 on smaller breakpoints); H1 72px at -0.015em; H2 48px; H3 32px. The narrow serif lets two-line headlines sit very tall and tight.
- Every major headline swaps one word or phrase to italic ("calm", "care", "quiet", "truly", "gently"); in the manifesto block the italic run also changes colour from ink to muted.
- Geist for everything functional: Body Large 18px / 1.55, Body 16px, Body Small 14px, Label 14px 500, Button 15px 500.
- Overline 11px Geist 500 uppercase at +0.1em, always preceded by a 6px amber dot, centred or left depending on the section.
- Text reveals split by word, so the serif headlines feel like they are being exhaled line by line.

## Colour
- Page cream #fbf8f3 alternates with muted sand #f3ece2 bands; white #ffffff only for active cards and form panels.
- Espresso #1f140d is both ink and the dark band colour (7-day section, footer, featured price card).
- Rust #7a3418 appears once as a solid feature card in the approach grid: a single deep warm block against cream.
- Amber #f2a541 is the only bright accent: primary pill buttons, overline dots, the active step circle, the arrow square in the nav button, the ring around the centre portrait.
- Hairlines in #e7dccb and #d6c6af, used for card outlines, accordion columns and the arc connecting the process steps.

## Layout and spacing
- Hero is inset 8px from the viewport with a 28px radius, so the cream page frames it like a print.
- Content sections use 64px side padding and generous 140px top / 160px bottom padding; headings sit left with a short muted paragraph pushed to the far right on the same baseline.
- Cards: 20 to 28px radius, image cards with dark bottom gradient and serif title over Geist description, small glass pill tags at top-left (duration, format).
- Arch masks (999px 999px 0 0) for portraits; 999px pills for buttons, tags and the avatar cluster.
- Very few shadows: one warm amber glow under the active process card; everything else is tone and hairline.

## Sections (homepage, in order)
1. Hero: inset full-bleed close-up portrait; floating nav row with a cream Menu pill left, sun-icon serif wordmark centred, cream "book" pill right with an amber arrow square. Thin vertical and horizontal hairlines cross the image and a small outlined focus box with a tiny label marks the eyes. Bottom-left: amber-dot overline, two-line display headline with italic word, one sentence, amber pill CTA. Bottom-right: a translucent glass card with a video thumbnail, play badge and two lines of text.
2. Approach: centred overline and a three-line manifesto headline with an inline pill photo and an overlapping avatar trio set inside the sentence; below, a 3-card row (sand text card with a large serif number, full-image card with a round icon badge, solid rust card with a serif statement).
3. Before and after: tall pinned scroll band in sand with a "worry release" interaction (words drifting away from a central portrait).
4. Services: left headline plus right paragraph, then three tall image cards with duration pills and serif titles over a dark gradient.
5. 7-day reset (dark): heading row, then a horizontal accordion: one wide open card with photo, day tag, serif title and amber-dot meta, plus six narrow outlined columns showing a serif number, a plus button and the day name set vertically.
6. How it works: pinned sand band, headline with italic phrase, a thin amber arc connecting three numbered circles (active one filled amber with a soft halo) above three step cards; the active card is white with an amber outline, the others faded.
7. Practitioners: centred heading, arched portrait triptych with the middle portrait larger and ringed, names and roles under each, a credentials line and a dark pill button.
8. Member stories: centred heading and a slider of video testimonial cards with peeking neighbours and a round progress control.
9. Pricing (sand): three cards, white, white and espresso; the dark card carries an amber badge and an amber CTA; serif prices, checklist in Body Small.
10. FAQ: left column with heading, paragraph and a small practitioner contact chip; right column of six pill-shaped accordion rows.
11. Final CTA: full-width rounded image of a smiling woman, display headline top-left in cream with italic phrase, and a white booking form card overlapping the lower-left.
12. Footer (template): espresso block with wordmark, newsletter field, link columns.

## Motion
- 54 appear effects: fade up 8px from opacity 0, tween 0.7s, ease [0.22, 1, 0.36, 1], triggered in view at 50%, no replay.
- 14 word-by-word text reveals: each word rises 14px from opacity 0 and 8px blur, 0.9s with 0.05s delay, same ease.
- Two 2400px pinned scroll stages (sticky "Pin" frames) drive the worry-release and the process arc, which gives the page its slow, breathing pace.
- Hover: cards and pills respond softly; the day accordion opens on click.

## Phone
- Hero becomes a tall portrait card with the headline stacked at the bottom; nav stays as Menu pill, wordmark and book button.
- All 3-card rows stack to one column; the day accordion turns into a vertical list of rows with the open day on top.
- Display steps down to 56px and H1 to 42px; overlines and dots stay identical, keeping the rhythm.

## Signature moments
- The crosshair hairlines and the small labelled focus box over the hero face: clinical precision laid over a soft photograph.
- The manifesto line with a photo pill and avatar trio embedded in the type.
- The dark 7-day accordion with vertical serif day names.
- The amber arc linking the three process steps.

## Borrow
- One italic phrase per serif headline, plus an amber dot on every overline, as a site-wide voice system.
- Inset hero with an 8px cream frame and radius instead of a raw edge-to-edge image.
- Horizontal accordion with one open media card and narrow vertical-label columns for any day, step or module list.
- Single deep accent block (rust) used once in a grid to anchor it.
- Arc-connected numbered steps with one active state rather than three equal cards.

## Avoid
- The two 2400px pinned stages are heavy; on a lighter brand use one at most and keep its content readable without scrolling tricks.
- Closed-eye portrait after closed-eye portrait becomes repetitive; vary poses and subjects.
- Section crops after the hero are offset because the pinned sticky stages render at a different height in the static capture; judge them from the full-page thumb.
- The faded inactive process cards drop to very low contrast; keep inactive states readable.
