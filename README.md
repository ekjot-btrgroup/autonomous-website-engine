# Autonomous Website Engine

Your Framer templates are the **reference library**. For each client brief the system creates **10 new,
clearly different homepage designs** (colours, fonts, style and layout all differ), you pick 3, and those 3 are
polished into client-ready designs: HTML files (local edition) or a new Lovable project (online edition).

```
Framer "Moodboard" workspace ──read-only──▶ references/<industry>/<template>/  (design rules, screenshots, detailed notes)
brief + 3 questions ──▶ industry recipe (research if new) ──▶ 10 art directions (variety check)
   ──▶ 10 homepages built in parallel ──▶ review at 1440 / 820 / 390 + independent critic ──▶ fixes
you pick 3 ──▶ polish + second review ──▶ HTML files or Lovable project (Designs switcher on every page)
your picks and tastes ──▶ memory ──▶ better matches next time
```

**How it works in 5 steps:** [INSTRUCTIONS.md](INSTRUCTIONS.md). **Run it on your own computer:** install Node 20+
and Python 3, run `npm run setup`, open the folder in Claude Code and say hi.

- [docs/USER-GUIDE.md](docs/USER-GUIDE.md): what to say to Claude, step by step.
- [docs/DESIGN-QUALITY.md](docs/DESIGN-QUALITY.md): the quality bar and critic checklist every design must pass.
- [docs/REFERENCE-IMPORT.md](docs/REFERENCE-IMPORT.md): how Framer templates become references.
- [docs/PROJECT-STATE.md](docs/PROJECT-STATE.md) and [docs/PLAN-V2.md](docs/PLAN-V2.md): current state and plan.
- [docs/releases/](docs/releases/README.md): what went to main and how to bring any part back.

## Principles
- **Quality first:** every design starts from a written art direction, is built by its own agent, checked by
  scripts (layout, accessibility, slop) and scored by a separate critic before you see it.
- **References, not templates:** templates teach proportion, rhythm, type, colour and motion. Their text,
  images and code are never copied. Framer projects are only read, never changed.
- **No AI slop:** banned phrases and AI tells (`knowledge/anti-slop.json`), no invented numbers, reviews or awards.
- **Real photos:** Unsplash photos through Framer's image search (free for commercial use), Creative Commons
  photos as a fallback, all credited.
- **No Lovable AI credits:** finished designs reach Lovable through GitHub sync.
- **Auto-release:** every finished task merges into `main` (online) or `autonomous-website-engine-local` (local)
  with a release note listing every commit.

## Scripts (Claude runs these)
| Script | What it does |
|---|---|
| `npm run refs -- save/list/coverage/match` | store a Framer reference; list; coverage per industry; rank references for a brief with variety |
| `npm run directions -- check <slug>` | validate the 10 art directions and their variety (colour, fonts, style, hero, section order, contrast) |
| `npm run photos -- <design-dir> <map.json>` | download, crop and credit photos for a design |
| `npm run slop -- <path>` | anti-slop check (generic copy, fake claims, emoji icons, AI gradients, default fonts) |
| `npm run review -- <slug> [--only n] [--gallery]` | screenshots and checks at 3 sizes; contact sheet and browsable designs |
| `npm run final -- <slug> --picks a,b,c [--single]` | final delivery (HTML, zip, self-contained files; Lovable folder when delivery is lovable) |
| `npm run capture -- <url>` | capture a live website as a reference (when it is not in Framer) |
| `npm run remember`, `status`, `sync`, `release`, `push`, `pull`, `setup`, `test` | memory, overview, git flow, Lovable sync, setup, tests |
