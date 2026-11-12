# Lumora AI  (software-ai)
An AI automation studio pitching to serious operators. The page is built like a technical drawing: pure black, thin grey rails framing the content, hatched separator strips between sections, monospace labels and near-square corners, with one burnt orange used as signal light. It feels precise and engineered rather than glossy.

## Type
- Headlines: Schibsted Grotesk at weight 400, no tracking, H1 54/59 (43, 35 smaller), H2 44/53, H3 32/45; card titles 24-28. The light weight at large size is what makes it calm and expensive.
- Two-tone H2s: the first clause white, the continuation in 40-50% white.
- Body: Cabin 16/26 and 18/28, a humanist sans that softens the technical frame; Inter 13-14 for small UI copy.
- Labels and buttons: JetBrains Mono 14 uppercase, prefixed with a tiny four-dot grid glyph in orange (section labels) or set inside buttons. Mono 10px for data in UI panels.

## Colour
- Background pure #000000; surfaces only slightly lifted; strokes #1f1f1f at 1px everywhere.
- White text with a full opacity ladder (70, 60, 50, 40, 30... 4%) used for secondary copy, disabled states and hatch lines.
- Accent orange #ff6b35 for section labels, status squares, progress segments, connector lines and the halftone glow. White solid buttons provide the strongest contrast.

## Layout and spacing
- 1200 canvas, 30px outer padding; two vertical 1px rails frame the content column, and corner marks (small squares) sit where rails meet separators.
- Every section is separated by a 60px band filled with fine diagonal hatching, which acts like a ruler between chapters.
- Grids inside are bordered cells sharing hairlines (no gaps, no shadows), 2px radius maximum. Hero is a split: text column left with a divider rail, visual panel right.
- Buttons: white rectangles with mono label and a small dot-matrix arrow block on the right.

## Sections (homepage, in order)
1. Hero: mono availability label, two-line light headline top-left, body and button pinned bottom-left; right half is a halftone orange light field with a dark "workflow running" panel listing steps on a vertical timeline.
2. Stats: four bordered cells with large numbers and captions.
3. Pain points: two-tone statement headline, then three cells with animated dot squares and short captions.
4. Solution: headline with a checklist of four points on the left and an animated terminal on the right.
5. Services: two-tone H2, sticky left tab list (four mono tabs, active with orange underline) beside stacked service panels, each with copy, tag chips and a UI widget (node diagram, struck-through agent task list, segmented bars, app icon grid), separated by hatched strips.
6. Testimonial: large quote with avatar and three metric cells.
7. Use cases: slider of cards with step labels and app icons.
8. How it works: vertical list of three phases with mono step numbers.
9. About: black and white founder portrait left, statement headline and two stat cells right.
10. Pricing: two plan cells side by side plus an enterprise row with a subtle button.
11. FAQ: single-column bordered accordion.
12. CTA: small framed box with orange halftone glow and a button, then a dense link-column footer.

## Motion
- Few native effects: one sticky service nav with four scroll-target variant switches (threshold 0.5, replay) driving the active tab.
- Motion lives inside components: animated square dots, a typing terminal, a running agent task list, an animated workflow diagram, and the liquid-gradient shader seen through a halftone mask in the hero and CTA.
- Lenis smooth scroll in the template.

## Phone
- Rails remain as a narrow frame; hero stacks text above the halftone panel; stats become 2x2; service tabs disappear and panels stack; pricing stacks. H1 35px, H2 24px. Header becomes logo + menu icon with a full-screen menu.

## Signature moments
- The hatched separator bands and visible rails that make the page feel drafted.
- The halftone orange light behind a mono workflow panel.
- Dot-matrix arrows in square white buttons.

## Borrow
- A visible structural grid (rails, corner marks, hatch bands) as the main ornament.
- Light-weight large grotesk with two-tone clauses.
- UI widgets that show states (running, struck-through done items, segmented progress) instead of screenshots.
- Mono micro-typography for labels to signal engineering credibility.

## Avoid
- Remove the template promo card fixed in the corner.
- Pure black with hairlines can feel sparse; it relies on widgets for interest, so keep them.
- Orange on black for AI is common; change the accent if reusing for a similar brand.
