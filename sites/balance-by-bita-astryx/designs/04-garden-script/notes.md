# 04 Garden Script (Astryx theme: Matcha)

Concept: Matcha's soft sage and the roundest Astryx radii, with a handwritten Playwrite US Trad heading that
echoes "by Bita". Fresh, natural, friendly; says "natural results" for newcomers to injectables.

## Section plan (direction order)
1. Hero: StatusDot "Chicago patient waitlist is open", centred script h1 "Your face, gently tended.", one-line
   what/who/how, primary "Book a consultation" + secondary "See treatments and pricing"; wide arch photo (eucalyptus
   leaves) with a pill caption: Sandy Springs, hours, by appointment.
2. About: dashed arch placeholder frame "Portrait to be supplied"; first-person founder story from the brief
   (acne, patient herself, aesthetic roles, trained alongside a renowned injector, own practice, every background),
   ruled credential rows.
3. Process: 4 rounded step cards (radius-page 42px) alternating sage surface/card tones, script numerals.
4. Services: tall arch eucalyptus photo + 3 ruled rows (neuromodulators, fillers, biostimulators/regenerative)
   naming only the brands in the brief.
5. Pricing: Astryx Table with group rows, per unit / syringe / vial / session; all amounts placeholders.
6. Testimonials: one sage panel, 3 quote slots divided by rules; placeholders only.
7. FAQ: left heading + help card (phone/email), right accordion (details/summary) with brief topics; answers
   not in the brief are placeholders.
8. Contact: ruled dl (address, hours, phone, email), CTA, olive arch photo.
9. Waitlist: the single soft rose (#f3d9d3) surface; mailto form (name, email, optional phone).
Footer: contact, links, legal placeholder, "results vary".

## Signature moments
- Centred script headline over a large rounded arch photo (hero).
- Process as 4 rounded steps on sage surfaces.
- Matcha green accent only on CTAs/key links; one rose band for the Chicago waitlist.
- "Larger text" toggle in the nav (aria-pressed) nods to the brief's low-vision accessibility menu.

## Motion
Animations: none. Only colour/marker state changes at --duration-fast (175ms) on buttons and the accordion
icon, inside prefers-reduced-motion: no-preference. Menu and accordion open instantly.

## Typography notes
Playwrite US Trad only for h1/h2 and step numerals (large). Script set at weight 300, letter-spacing 0 and
line-height 1.3: connected script breaks with negative tracking and its loops clip below ~1.25.

## Placeholders the client must supply
Portrait of Bita; licence number/state; street address; booking link and consultation fee; all prices and the
Radiesse pricing unit; payment/cancellation policy; patient quotes (with permission) and review source;
FAQ answers (weddings, peels/facials, lashes, Accutane) and aftercare notes; legal name, medical oversight,
privacy notice.

## Astryx mapping
- Tokens: all colour via --color-background-body/-surface/-card/-raised/-rose, --color-text-primary/-secondary/
  -accent, --color-accent/-accent-hover/-accent-muted, --color-on-accent, --color-border/-subtle/-emphasized,
  --color-success; spacing --spacing-0-5..12 plus --spacing-16/-20/-section (multiples); radius --radius-inner/
  -element/-container/-page/-full (Matcha 6/12/18/42) and --radius-arch built from them; --font-size-sm..8xl
  (1.2 scale) with clamp h1/h2; --duration-fast, --ease-standard; --focus-outline-*; --shadow-low/-med.
- Header: nav pills (--radius-full), Button primary/secondary, toggle button (aria-pressed), menu button
  (aria-expanded).
- Hero: StatusDot, Button, image with --radius-arch, caption pill with --shadow-med.
- About: placeholder frame (dashed --color-border-emphasized), List/Item ruled rows.
- Process: Card (--radius-page) on surface/card tones.
- Services: List/Item ruled rows, Button + Link.
- Pricing: Table with group rows, tabular numbers, --shadow-low.
- Testimonials: grouped panel (--radius-page), rules between quotes.
- FAQ: List rows as details/summary accordion, help Card (--radius-container).
- Contact: ruled dl rows, Buttons.
- Waitlist: StatusDot, TextInput (--radius-full, --size-button), Button, on --color-background-rose.
- Focus: :focus-visible uses --focus-outline-width/style/color/offset; hover only in @media (hover:hover).
