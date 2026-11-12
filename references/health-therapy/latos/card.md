# Latos  (health-therapy)
A one-therapist or small-practice counselling site that sells safety before services. It opens on a dark, sun-flared face video, then drops into a long cream page where the type does the comforting: tight grotesk headings with one serif italic word in brown, and a slow pinned statement that makes the visitor read a single sentence about emotional weight before anything is offered.

## Type
- Hero only: Playfair Display 400 at 90px, tracking -0.04em, leading 1.1 (72 tablet, 58 phone), white over the video.
- Section headings: Manrope 400 at 60px (54 / 46), tracking -0.05em, leading 1.1, in warm charcoal; one word swapped for Playfair italic in brand brown (#925737), always the emotional word.
- Card titles and pricing plan names: Playfair 400 at 32px in brand brown ("H3 - Sm"); prices in Manrope 600 at 42px with -0.05em.
- Body: Manrope 500 at 18px / 1.4 with -0.02em for intros, 16px for card text; labels 14px.
- Small rounded badge above every heading (Manrope 600, 14px, on a slightly darker cream chip).
- PT Serif appears in two minor spots; the system is really two families.

## Colour
- Page cream #fdf6ee; cards one step darker (#f7f0e8 and #f5ede4); a third tone #f2eae1 for badges and secondary buttons. Depth comes only from these tonal steps.
- Ink is warm charcoal #383230, subtext #695f5a, placeholder beige #baa287 (also used for inactive list items).
- Brand brown #925737 is the single accent: primary buttons, italic heading words, plan names, active slider dot.
- The hero and the philosophy photo bring all the saturated orange; the UI itself never goes brighter than the brown.

## Layout and spacing
- Full 1200px canvas with only a 24px gutter, so cards and photos run almost edge to edge; centred headings sit above them.
- Fixed transparent header: thin light wordmark left, five plain links right; no CTA in the bar.
- Cards: 16 to 28px radius, no borders, no shadows; 12px gaps; inner padding about 32px.
- Big image blocks: the philosophy split pairs a square photo (radius 16) with a text panel inside one larger rounded tonal container.
- Pricing: three columns inside one tonal tray; the middle column lifts onto a lighter card; hairline divider under each plan description.

## Sections (homepage, in order)
1. Hero: full-bleed 800px video of a sunlit face, dark grade; bottom-left Playfair headline, one sentence, a brown solid button and a cream secondary button side by side.
2. Problem: a 3500px pinned stage; a centred two-line statement in Manrope with the closing words in brown italic reveals as you scroll while three small rounded photos drift at staggered positions around it.
3. Philosophy: one large rounded tray, photo left, text right with badge, heading with italic word, four short paragraphs and a light wordmark sign-off.
4. Services: centred heading, then a two-column block: left a stack of tonal rows with Playfair labels (active one in brown with a paragraph, inactive ones faded to beige), right a tall photo that changes with the active row.
5. Process: centred heading; a wide rounded video panel with a large centred sentence and a CTA; below it three numbered step cards with Playfair numerals in brown.
6. Social proof: tonal band with three stat figures, then a testimonial slideshow of cream cards with avatar, name, role and quote, and pill dot pagination.
7. Pricing: three plans in one tray, free trial, mid and premium; check-circle lists, one brown button and two cream buttons; a small "not sure" bar below with a secondary CTA.
8. FAQ: centred heading and a single column of tonal accordion rows.
9. Articles: heading left and a "view all" button right, three image-topped article cards with category, title and excerpt.
10. Footer: centred wordmark, Playfair headline with italic word, inline email field and brown button, link rows.

## Motion
- Hero text reveal by word on mount: rise 10px from opacity 0 with 10px blur, spring stiffness 150 damping 80, 0.4s delay and 0.05s per word.
- 32 appear effects: fade up 20px, spring stiffness 100 damping 100, delays around 0.8s on the hero buttons and staggered on cards.
- Problem stage: sticky container 3500px tall with three scroll-target variant switches (Animated Text) that step the statement and photos as sections pass, replay on.
- Services rows switch on hover or click with a cross-fading photo; testimonial slideshow auto-advances.

## Phone
- Hero headline drops to 58px and stays bottom-left over the video; header collapses to wordmark and menu.
- All splits stack: photo above text in philosophy, service rows above their photo, pricing plans one per row.
- Problem stage shortens but keeps the centred statement with photos tucked above and below.

## Signature moments
- The pinned statement with photos drifting around it, a calm way to make the visitor stop and read.
- The one-italic-word heading system in brown, applied with total consistency.
- The faded beige service list that brightens to brown on the active item.

## Borrow
- Grotesk heading plus one serif italic word in the accent colour as a site-wide voice.
- Tonal-only surfaces (three cream steps, no borders or shadows) for a soft, trustworthy health brand.
- A single long pinned statement section between hero and offer to slow the pace.
- Active-row list paired with a swapping photo for services.

## Avoid
- The 3500px pinned stage is very long for one sentence; shorten or tie it to real content.
- The process video panel sets white text on a pale cream fallback; it is unreadable when the video has not loaded, so always give such panels a dark fallback.
- Two serif families (Playfair and PT Serif) is one too many; keep one.
- Section crops after the hero are offset upward because the pinned stage renders at a different height in the static capture; use the full-page thumb for exact positions.
