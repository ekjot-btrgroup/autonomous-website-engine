# Overtake  (agency-marketing)
A growth and paid-media agency site that wants to look like a confident product company. Big blunt headlines, highlight-chip keywords and dashboard-style stat cards make "performance" visible, while bright people photography keeps it human.

## Type
- Display: Switzer 600 for H1 82px/1.2 (70 tablet, 52 phone), extra-large H2 variants at 80 and 100px for stat and step numbers; regular H2 52px/1.1 weight 500; all at -0.02em.
- Body: Stack Sans Headline 400 at 14-18px, grey #6a6e6e, tight 1.1 to 1.2 leading.
- The H1 embeds a pill graphic mid-sentence; supporting lines wrap keywords in coloured chips. Hierarchy is loud and short.

## Colour
- White page with a soft grey #f0f0f0 inset hero panel; big rounded black (#0b0b0c) and deep-teal (#122020) panels carry the darker sections.
- Lime #9efc65 is the hero accent: dot grids, check icons, the "us" column header, highlight chips. Pink #ffbcfc as a secondary chip and accent strip; yellow appears rarely.
- Buttons: black pills with a white circular arrow badge; outline pills for secondary.

## Layout and spacing
- 1200 canvas, 30px outer padding; key sections sit inside 30px-radius inset panels that stop 30px short of the viewport edges.
- 200px vertical spacing between light sections gives the heavy type room.
- Dot "badge" eyebrows (small white pill with bullet dots either side) above every H2, centred.
- Radii: 30px panels and image cards, 10px small elements, 300px pills; faint vertical grid lines visible on dark panels.

## Sections (homepage, in order)
1. Hero: centred badge, two-line H1 with inline coin pill, keyword-chip subline, black and outline pill CTAs; below, a big rounded lifestyle photo beside a deep-teal metrics card (lime dot grid, ROAS figure, CAC change, mini bars); logo ticker underneath.
2. About and services: black panel with a statement paragraph where one clause is lime, avatar trio, then a services selector list on the left and an office photo on the right; pink ticker of channel names at the base.
3. Growth counter: bento of small stat cards (yellow, grey, dark) with bar visuals and a photo tile.
4. Selected work: stacked full-width case-study cards (photo left, dark info panel right with stat and tag chips) that stick and scale to 0.7 with -6deg rotation as you scroll.
5. Counter strip: three huge figures with captions.
6. How it works: photo card, giant step numeral and a lime circular step card.
7. Compare: black panel, centred H2, two-column versus table (grey "typical" header, lime brand header, cross and check lists), founder quote card.
8. Testimonials: carousel card with portrait and quote.
9. Blog: one wide image card plus two smaller cards.
10. CTA and footer: deep-teal panel with huge two-line H2 and a pill sticker, newsletter field, link columns and an oversized wordmark.

## Motion
- Appear: fade-up 40px, tween 0.45s ease [0.44,0,0.56,1], on mount and in view.
- Tickers at velocity 15 for logos and channel names.
- Scroll-target style transform on case-study cards: scale 1 to 0.7, rotate 0 to -6deg, spring stiffness 500 damping 60, with sticky stacking (4 sticky nodes).

## Phone
Single column with 16-20px padding; H1 52px over four lines with the pill kept inline; bento cards stack; case studies stack photo over info; compare table becomes two stacked lists.

## Signature moments
- The inline icon pill inside the headline.
- Highlighted keyword chips in body copy.
- Case studies that tilt and shrink away as the next card stacks on top.

## Borrow
- Inline graphic token inside display type to make a headline ownable.
- Light page with inset rounded dark panels for rhythm without full-bleed bands.
- Versus comparison block with a brand-coloured column header.

## Avoid
- Many accents at once (lime, pink, yellow) can feel busy; keep one primary.
- The 200px gaps plus very long page make the middle sag.
- Stat-heavy bento needs real figures; placeholders look fake.
