# Saro  (software-fintech)
A multi-product finance platform (payments, cards, treasury, payouts, AI) for modern teams. The idea is calm white space made lively by product objects: glossy app icons, coloured cards and small live widgets behave like toys around very tight, confident black type, so a serious money product feels friendly and current.

## Type
- Switzer throughout. Display 88/88 at 600 with -4% tracking (64, 42 smaller); H1 56 at -4%; H2 40; H3 28 at 500; card titles 20-22.
- Body Large 20/29 and Body 17/28 in grey #707070; Small 14.
- Statement style 56/62 at 500 for the manifesto line.
- Labels: Geist Mono 12px uppercase +4% for metadata, Switzer 14 medium for tags and pills.
- Emphasis by colour, not weight: one phrase of the headline in accent blue.

## Colour
- White #ffffff page with #f7f7f7 and #f0f0f0 card fills; hairlines #ebebeb.
- Ink #141414; inverse dark tiles #141414 / #262626 for the workspace mock and footer CTA.
- Accent electric blue #0066ff for emphasis words, active tags and primary product colour; subtle #ebf3ff behind blue chips.
- A bright product palette used only on icons and cards: green #00d64f, orange #ff6b1a, violet #635bff, mint, lime #ccff00. It never touches text or backgrounds.

## Layout and spacing
- 1200 canvas, 32px side padding, 128px vertical section padding (220px for the statement band).
- Section heads split: big left-aligned headline, grey intro paragraph right, with a numbered tag above.
- Bento cards of unequal widths (2/3 + 1/3, then 1/3 + 1/3 + tall 1/3) with soft grey fill, 24px radius, title top-left and a live widget pinned to the bottom edge, cropped by the card.
- Pill buttons (100px radius): black primary, grey secondary with chevron. Floating white nav bar with soft shadow and a round black logo mark.
- Shadows are soft and layered on floating objects only (icons, cards, nav), never on the main bento cards.

## Sections (homepage, in order)
1. Hero: floating pill nav, blue "New" chip with a lime badge, two-line centred display headline with blue second phrase, grey subhead, black and grey pill buttons; seven app-icon tiles hang from thin lines above, at different heights. Below, four product "folders" with photo cards peeking out and a caption pill each.
2. Statement: large centred sentence with small app icons inline between words, each word blurring up.
3. Features: four feature cards with numbered tag header.
4. Suite: bento of product cards (payments chips, stacked coloured cards with limit bar, account balances list, currency converter, treasury bars, AI chat answer).
5-7. Three split sections (AI, automations, payouts): text left, interactive UI right, each with a segmented control or flow diagram.
8. Product tour: sticky left feature nav with five showcase cards scrolling past; nav item switches via scroll targets.
9. Workspace scroll: a dark rounded dashboard (sidebar, currency balance tiles, photo team spaces) that slides 640px sideways as you scroll through a 1800px track.
10. Cards: phone mock with card designs on a soft panel.
11. Testimonials: two ticker rows moving in reverse.
12. Blog: three cards with mono date labels.
13. FAQ: sticky left intro with avatars and a CTA, accordion right.
14. Contact: dark "talk to a person" panel with a form.

## Motion
- 138 appear effects: fade up y 16 with scale 0.95, spring 0.9s bounce 0.1, delay 0.1s, on mount.
- Text effect on every headline: word by word, y 28 with 12px blur, spring 1.1s, 0.05s step, 0.2s delay.
- 13 loops: icons bob y -10 over 3.4s ease [0.45,0,0.55,1] mirror.
- Hover: chips change background over 0.35s.
- Sticky product tour with 5 scroll-target variants; workspace mock style transform x -640px (spring 120/30) on scroll; two reverse tickers at velocity 18.

## Phone
- Hero keeps the hanging icons but fewer and smaller; headline 42px; product folders become a 2x2 grid. Bento cards stack full width; split sections stack text above UI; product tour becomes sequential cards; the workspace scroll becomes a static mock. Pill nav becomes logo + menu.

## Signature moments
- App icons hanging on strings like a mobile above the headline.
- Inline icons inside the statement sentence.
- The dark workspace dashboard sliding sideways through a light page.

## Borrow
- Product widgets as illustration: real-looking UI fragments cropped by card edges.
- One accent for language, a separate bright palette only for objects.
- Numbered tags to give a long page a clear index.
- Word-by-word blur reveal on headings for a premium entrance.

## Avoid
- Very long (17k px) and effect-heavy; pick a few hero moments, not all.
- Bright toy palette can tip into childish if used on backgrounds or text.
- Several split sections in a row feel repetitive; vary their layout if reused.
