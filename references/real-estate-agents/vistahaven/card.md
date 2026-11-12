# VistaHaven  (real-estate-agents)
A full-service property agency homepage that sells trust through order: white space, crisp uppercase headlines and a big twilight hero inside a rounded frame. The one playful device is the notched corner, where a card or chip appears to be cut into the photo, which gives a plain corporate layout a crafted, architectural feel.

## Type
- Geist only. H1 80px weight 600 uppercase, leading 1.0 (64px tablet, 36px phone). H2 36px 600 uppercase (32/22).
- Body M 18px weight 300 leading 1.5; card titles 26px 600; big stats in Body XL 48px weight 300 with a raised light "+" at 36px.
- Hierarchy is heavy-uppercase headline vs very light body: strong contrast without a second family.
- Pill badges (outlined, small sentence case) above every section heading.

## Colour
- White page, #f3f3f3 card fills, #2c2c2c ink, greys 100 to 300 for lines and muted text.
- Black for the main pill CTA with a white circular arrow icon; green dot as a live/online signal in the nav button.
- One coloured band: the contact section in a dusty blue (#6e99c2) with a white form card.
- Yellow only for star ratings.

## Layout and spacing
- 1280px with 80px side padding and 80px vertical section padding; 160px between subsections inside one section.
- Hero is an inset photo card (not edge to edge) with 32px radius and a cut-out corner (32px 32px 0 32px radius on the chip).
- Cards: 32px radius, flat grey fill, no shadows, icon in a white circle top-left.
- Listings: 3-column grid, image ~4:3 with 24 to 32px radius and a small status pill in the image corner, meta row with icons, price below.
- About: 2-column with image left of a stats + vision/mission card grid.

## Sections (homepage, in order)
1. Hero: rounded inset twilight photo, three-line uppercase headline left, paragraph, white pill button with black arrow circle; three stats along the bottom; agent avatars with star rating sit in a notch cut into the bottom-right corner.
2. Offer: badge, headline, intro; then a horizontal accordion: text left, active image centre with a numbered caption notched into its corner, inactive items as tall rotated uppercase labels with large outline numerals.
3. Services: centred two-line headline, 3x2 grid of grey icon cards.
4. Listings: badge + headline, 3x2 property cards with status pills, location, beds/baths/sqft icons, price.
5. About: headline and paragraph left, team photo right, stats, vision and mission cards.
6. Agents: centred headline and a ticker of agent portrait cards.
7. Testimonials: sticky left column (badge, headline, paragraph) with a 2-column masonry of review cards on the right.
8. FAQ: sticky left heading, accordion rows separated by hairlines on the right.
9. Contact: blue band, centred badge and headline, white rounded form card, house photo bleeding off the bottom.
10. Footer: dark-on-white, logo, contact lines, round social icons.

## Motion
- Hero headline uses a word-by-word text effect: each word rises 10px from 3px blur, spring 0.7s, 0.07s stagger, on mount.
- Hero image enters from scale 2 and rotate 6deg to rest, spring 2s with no bounce: a dramatic zoom-settle.
- 22 appear effects across cards (fade/rise on view), 9 text effects on headings, sticky side columns for testimonials and FAQ, agent tickers.

## Phone
Single column; hero card keeps its radius with the headline at 36px; the service accordion becomes a vertical list with an image per item; listings and testimonials stack; nav collapses into a menu.

## Signature moments
- The notched corners that hold avatars and numbered captions inside photos.
- Rotated vertical labels for collapsed accordion items.
- Word-by-word blur-rise headline over a zoom-settling hero.

## Borrow
- Inset rounded hero with a cut-out corner chip for social proof.
- Sticky left heading column with scrolling cards on the right for testimonials and FAQ.
- Light-weight giant numerals for stats next to heavy uppercase headings.

## Avoid
- Floating template-seller widgets (new release preview, get template button) are not part of the design.
- The agents ticker renders empty in static captures; provide a fallback grid.
- Copy-heavy service grid is generic; vary card sizes or add imagery if reused.
