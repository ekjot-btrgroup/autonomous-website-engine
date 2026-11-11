---
name: shortlist
description: Turn a brand brief into the 10 most relevant designs from the library, each with a one-line reason, then let the user pick 3. Handles the brief and the 3 questions (animations, colours, typography) in strict order. Use when the user gives a brief or asks for a website.
---
# Shortlist

Follow CLAUDE.md "Talking to the user". Steps run in order; keep anything the user gives early.

0. Silently: `npm run -s sync`.
1. **Brief received** (name, what they do, audience, feel; anything else is a bonus). Reply only:
   "I have noted the company brief and have last 3 questions."
   **Requirements**
   - Animations: none, subtle or rich?
   - Colours: your brand colours, "choose for me", or "keep the designs' colours"?
   - Typography: font names, "choose for me", or "keep the designs' fonts"?
   (List only the ones still unanswered. If the brief is missing something essential such as what the business does, ask for it in Requirements instead.)
2. **Answers received.** Write `briefs/<slug>.json` (fields in `briefs/_template.json`; short values; never invent facts):
   - `niche`: closest word from `niches` in `knowledge/vocabulary.json`.
   - `profile`: your 1-5 reading of tone, energy, luxury, density, warmth, modernity (most important field for matching).
   - `style`, `goals`, `scheme` (light/dark/omit), `animations` (none/subtle/rich), `avoid`, `sections` (page order; default `navbar, hero, features, about, testimonials, cta, footer` adapted to the business).
   - `colors`: `{primary, accent}` hex if given; "choose for me" -> pick 2 that fit; "keep" -> omit.
   - `fonts`: `{heading, body}` Google Fonts if given; "choose for me" -> pick a fitting pair; "keep" -> omit.
3. `npm run -s shortlist -- <slug>`. If it reports untagged designs, run `/add-designs` step 5, then repeat.
4. One line per design: write `.cache/why-<slug>.json` `{"<id>": "<why it suits THIS client, max ~20 words>"}` for all 10 (honest about weaker fits), then `npm run -s shortlist -- <slug> --why .cache/why-<slug>.json`.
5. Show the 10:
   - `npm run -s sheet -- <slug>` and send `reports/<slug>/shortlist.png` with SendUserFile (render) if that tool exists. Do not read the image yourself.
   - `delivery` html: also `npm run -s export -- <slug> --shortlist`; send `output/<slug>/<slug>-shortlist.zip` with SendUserFile if available, otherwise say "Open output/<slug>/shortlist/index.html".
   Then silently commit + release.
6. Reply: one line per design, `1. <Name>: <why line>` (10 lines), nothing else, then
   **Requirements**
   - Your 3 picks: reply with their numbers (for example 2, 5, 7)
7. Feedback at any time (one command each): "X is great for bakeries" -> `npm run -s remember -- <id> --good "bakeries"`; "not for law firms" -> `--bad "law firms"`; a taste -> `npm run -s remember -- --for "luxury" --prefer "serif, dark" --avoid "gradient"` (omit `--for` for all briefs). Reply "Noted." plus Requirements.
