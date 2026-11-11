# How designs are described, matched and remembered

Everything on this page runs as plain scripts. No AI model is called while ranking, so a shortlist costs zero Claude tokens.
Code: `engine/lib/score.mjs` (matching), `engine/lib/memory.mjs` (learning), `engine/tag.mjs` (traits), `knowledge/` (word lists and presets).

## 1. Designs are judged mainly by style and feel

A hero with a big photo and calm serif type can serve a spa, a law firm or an architect. So the main traits describe the design itself. The niche its demo content is written for (`origin`) is recorded too, as a small signal. Each design gets these traits once, when it is added (and you can change any of them in the admin dashboard):

| Trait | Values | Who sets it |
|---|---|---|
| `category` (+ `also`) | navbar, hero, features, pricing, testimonials, footer ... (22 types) | Claude, from a 70-token summary |
| `layout` | centered, split, full-bleed, grid, bento, cards, carousel, marquee ... | Claude |
| `style` | minimal, editorial, luxury, bold, organic, futuristic, warm ... (24 words) | Claude |
| **feel axes** (1-5) | `tone` playful..formal, `energy` calm..energetic, `luxury` everyday..premium, `density` airy..dense, `warmth` cool..warm, `modernity` classic..cutting-edge | Claude |
| `media` | photo, illustration, product, video, icons, logos, 3d, pattern, none | Claude |
| `image_need` | 0 none, 1 optional, 2 required | code count, Claude can correct |
| `typography` | sans, serif, mono, mixed, expressive | read from code, Claude can correct |
| `motion` | none, subtle, heavy | read from code (framer-motion etc.), Claude can correct |
| `goals` | leads, sales, signup, booking, showcase, trust, info, contact, download | Claude |
| `scheme` | light, dark, mixed | read from code, Claude can correct |
| `origin` | up to 2 niches the demo copy targets (for example saas, ai) | Claude; minor ranking signal |
| `quality` | 1-5 | Claude |
| `hidden`, `pinned` | on/off | you, in the admin dashboard |

Allowed words live in `knowledge/vocabulary.json`; anything else is dropped when tags are saved, so the library stays consistent at 500+ designs. Niches are grouped into families (tech, hospitality, wellbeing, property, professional, creative, commerce, community) for the origin signal.

**Who wins:** your admin dashboard edits (`showcase/src/overrides/<id>.json`) are laid over Claude's tags field by field, so your values always win. Claude never overwrites them.

## 2. Briefs carry the niche, as a target feel

When you ask for a site, Claude asks three questions (animations, colours, brand brief) and writes `briefs/<slug>.json`. The most important part is the brand's **target feel** on the same six axes.

The target feel comes from three layers, strongest first:
1. **The brief's own `profile`**: Claude's reading of this brand (for example a spa: tone 3, energy 1, luxury 4, density 1, warmth 5, modernity 3).
2. **Niche preset** (`knowledge/niche-presets.json`, 30 niches): fills any axis the brief leaves out, and suggests styles and goals.
3. **Your past picks**: if you picked designs for similar briefs before, their average feel is blended in. The blend weight is 10% per picked design, capped at 30%, and halved on axes the brief set itself. Two picks are needed before it applies.

## 3. Scoring (per design, per brief)

| Part | Points | Rule |
|---|---|---|
| Section | +30 (+15 if untagged) | its category is a section the brief needs; +15 if it can serve one (`also`) |
| Feel | 0 to +30 | average closeness on the six axes: `1 - |design - target| / 4` |
| Style | up to +24 | +12 per brief style word it has, +6 per niche-preset style (style is a main signal) |
| Layout | up to +10 | +5 per layout the brief asks for |
| Goals | up to +12 | +6 per shared goal (for example booking) |
| Current niche | +8 / +4 | its `origin` is the brief's niche (+8) or in the same family (+4); deliberately small next to style and feel |
| Media | -10 | it needs photos/products/video the brand said it lacks |
| Scheme | +8 / -8 | light/dark matches or contradicts the brief |
| Animation | +8 / -8 | motion fits the answer (none: none; subtle: none or subtle; rich: subtle or heavy) |
| Quality | -8 to +8 | (quality - 3) x 4 |
| Avoid | -20 | has a trait the brief says to avoid |
| Memory | -20 to +15 | your notes and pick history (section 4) |
| Preferences | -15 to +10 | your stated tastes (section 4) |
| Repeat | 0 to -15 | -5 for each of the last 10 built sites that used it |
| Pinned | +10 | you pinned it in the admin dashboard |
| Open issues | -5 | design flagged but still renders |

Designs that need conversion, crashed in the render test, or that you hid in the dashboard are never shortlisted.

**What matters most:** with all parts present, section fit (30), feel (30) and style (24) make up most of a typical score. Goals (12), layout (10) and current niche (8) refine it; memory and preferences adjust it within their caps.

## 4. Memory: what the engine learns

Each event is one small file in `memory/events/`, so ten chats can learn at the same time without merge conflicts. Inspect it with `npm run remember -- list`, and remove an entry with `npm run remember -- forget <file>`.

| Event | Created by | Effect |
|---|---|---|
| `note` | you: "this hero is great for bakeries" -> `npm run remember -- <id> --good "bakeries"`, or the design's page in the admin dashboard | +10 for briefs whose context matches "bakeries" (`--bad`: -15). A `--rating` with no context: (rating-3) x 2 everywhere |
| `pref` | you: "for luxury brands use serif and dark, no gradients" -> `remember --for "luxury" --prefer "serif, dark" --avoid "gradient"`, or the admin Memory page | +4 per preferred trait, -8 per avoided trait, only for matching briefs (or all briefs without `--for`) |
| `shown` | automatic, each shortlist | marks designs as seen (for exploration, below) |
| `pick` | automatic, when a site is built | +6 next time for designs you picked for similar briefs; -1.5 for ones shown and skipped; feeds the learned feel (section 2) |
| `used` | automatic, when a site is built | anti-repetition penalty (section 3) |

**Context matching.** A note or pick applies when its words overlap the new brief's context (niche, audience, style words) by at least 34%. Niche and use-case words count fully. Generic words such as "minimal" count half, so a note does not fire on every brief.

**Nothing dominates forever:**
- Every learned effect has a cap (see the table).
- Effects fade with a half-life of 180 days.
- Recently used designs lose points.
- **Exploration:** each shortlist reserves 2 places for designs you have never been shown, if they score at least 60% of the best one.

## 5. Picking the 10

1. **Coverage:** the best design for each section of the brief, in page order.
2. **Fill:** the next best by score, at most 3 of any one section type.
3. **Fresh:** up to 2 never-shown designs swap in for the lowest non-coverage entries (rule above).

Each result lists its reasons (for example "fills the hero section; feel matches (88%); style: minimal; you picked it for 2 similar briefs") and a live link.

## 6. Settings

`engine.config.json`: `showcase_url` (for live links), `shortlist_size` (10), `fresh_slots` (2), `max_per_section_type` (3).
Weights: the `WEIGHTS` constant in `engine/lib/score.mjs`. Memory caps and fade: `LIMITS` and `HALF_LIFE_DAYS` in `engine/lib/memory.mjs`.
