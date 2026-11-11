# Autonomous Website Engine (local edition)

> This branch delivers everything as HTML files: the 10-design shortlist and the 3 final designs open with a double click, ready to send to a client or host anywhere. No Lovable account needed. Run on your own computer: Node 20+, `npm run setup`, open the folder in Claude Code and say hi.

A library of coded **website sections** (React + Tailwind), kept in one Lovable **showcase** project. For each client brief, an algorithm picks the 10 best-matching designs with live links. You pick 3, and those 3 become a new Lovable project for the client, with your colours, animation choice and brand copy.

```
your designs ──▶ showcase (one Lovable project, every design live at /d/<id>)
brief (3 questions) ──▶ algorithm ranks all designs ──▶ top 10 + pick page /s/<slug>
you pick 3 ──▶ sites/<slug>/ (colours, animations, copy) ──▶ GitHub ──▶ the client's new Lovable project
your feedback + picks ──▶ memory ──▶ better, less repetitive shortlists next time
```

**How it works in 5 steps:** [INSTRUCTIONS.md](INSTRUCTIONS.md). **Run it on your own computer:** install Node 20+ (and Python 3 to import new templates), run `npm run setup`, open the folder in Claude Code and say hi.
**Start here:** [docs/USER-GUIDE.md](docs/USER-GUIDE.md) (what to say to Claude, step by step).
**Current state, what is paused, and the Lovable plan:** [docs/PROJECT-STATE.md](docs/PROJECT-STATE.md).
**End-to-end test script (fresh Sonnet chat):** [docs/TEST-RUN.md](docs/TEST-RUN.md).
**How matching and memory work:** [docs/ALGORITHM.md](docs/ALGORITHM.md).
**Admin dashboard (edit tags, notes, preferences in the showcase):** [docs/ADMIN-DASHBOARD.md](docs/ADMIN-DASHBOARD.md).
**What went to main and how to bring it back:** [docs/releases/](docs/releases/README.md).

## Design principles
- **Cheap on Claude:** scripts do the deterministic work (importing, testing, ranking, building, pushing). Claude spends tokens only on judgement: tagging a design once from a ~70-token summary, writing a brief, writing copy as a JSON list. Claude never re-reads component code in normal work.
- **No Lovable AI credits:** code moves through GitHub sync.
- **Style first:** designs are judged mainly by style and feel (layout, style, six feel axes, media, motion, goals, quality). The niche a design is currently built for counts as a small extra signal, so one layout still serves many industries.
- **You stay in control:** the admin dashboard in the showcase (grid, list, single-design editor) edits tags, hides or pins designs and adds notes. It saves as git commits at no cost, and your edits always win over Claude's.
- **Learns without repeating itself:**
  - Your notes, preferences and picks adjust rankings, within caps and fading over time.
  - Recently used designs lose points.
  - Every shortlist keeps room for designs you have not seen.
- **Many chats, one repo:** every site, brief, shortlist and memory entry is its own file, and IDs come from each design's contents. Parallel chats therefore never conflict.
- **Auto-release:**
  - Every finished task is merged into `main` without asking.
  - Each release note lists its commits, so any feature or whole release can be restored.
  - Every chat starts by pulling `main`.
- **Honest output:** every design is build-tested and render-tested in a headless browser. Broken ones are flagged and never shortlisted.

## What Claude does at each step
| Step | Work | Claude tokens |
|---|---|---|
| Add designs | import, fix imports, detect packages, dedupe, build test, render test | 0 (script) |
| Tag a design | traits from a short summary, once per design | small |
| Brief | 3 intake questions -> `briefs/<slug>.json` | small |
| Shortlist | rank the whole library, reasons, live links, pick page | 0 (script) |
| Build site | copy picks, apply colours/fonts/animations, record memory | 0 (script) |
| Copy | rewrite the site's text as a JSON list | small |
| Check + push | npm install, build, push to Lovable via GitHub | 0 (script) |

Parallel subagents run only when they save time: tagging more than 40 designs, or converting several non-React designs at once.

## Commands (Claude runs these; listed for reference)
| Command | Purpose |
|---|---|
| `npm run import:pages -- <dir> --group <name>` | Convert full-page HTML templates (one folder each) into page designs: JSX + scoped CSS + compressed images + template JS (zero tokens) |
| `npm run usage -- --out .. --in .. --cw .. --cr .. --cost ..` | Tokens and cost used by the last message (numbers from get_session) |
| `npm run add` | Import everything in `incoming/`; a zip or folder holding many designs becomes many designs (`--offline`, `--keep`, `--converted <id>`) |
| `npm run showcase:check -- --smoke` | Install + build the showcase, render every design, flag broken ones |
| `npm run tag -- queue / apply <file> / list` | Tagging round trip (`--limit 40 --offset 0` for batches) |
| `npm run shortlist -- <slug>` | Rank the library for `briefs/<slug>.json`; prints reasons and live links |
| `npm run shortlist -- <slug> --why <file>` | Save Claude's one-line reason per design (`{"id": "why"}`) |
| `npm run sheet -- <slug>` | Contact sheet: the shortlist rendered live (desktop + mobile) into `reports/<slug>/shortlist.png` |
| `npm run showcase:serve` | Build and serve the showcase locally (preview in the Claude app) |
| `npm run site -- new <slug> --pick a,b,c` | Build `sites/<slug>/` from the picks (`--fill` completes the page, `--force` rebuilds) |
| `npm run site -- switcher <slug>` | Add/refresh the floating "Designs" switcher (bottom right) that opens a full-screen picker of the site's options |
| `npm run site -- theme <slug> ...` | `--primary/--accent/--background/--foreground #hex`, `--heading/--body "Font"`, `--recolor blue:emerald`, `--motion off|on` |
| `npm run site -- copy <slug>` / `copy-apply <slug>` | Text round trip (Claude edits `.engine/copy.out.json`) |
| `npm run site -- check <slug>` | npm install + build |
| `npm run remember -- <id> --good "..." --bad "..."` | Note that a design suits / does not suit a use |
| `npm run remember -- --for "..." --prefer "..." --avoid "..."` | Save a taste for a kind of brief (omit `--for` for all) |
| `npm run remember -- list / forget <file>` | See or remove what was learned |
| `npm run push -- <showcase or sites/slug> --repo owner/name` | Push to the Lovable GitHub repo (repo remembered afterwards) |
| `npm run pull -- sites/<slug>` | Bring Lovable edits back before changing a site |
| `npm run setup` | One-time setup on a new computer: checks Node/Python, installs Chromium and the library packages |
| `npm run export -- <slug> [--shortlist]` | Client-ready HTML files: the final designs (`output/<slug>/final/`, with the Designs switcher) or the 10 shortlisted designs (`output/<slug>/shortlist/`), plus zips. Open with a double click |
| `npm run sync` | Pull the latest `main` into this chat's branch (dashboard edits, other chats) |
| `npm run release -- "summary"` | Merge this branch into `main`, write `docs/releases/<date>-<summary>.md` (names the merge commit) |
| `npm run releases` | List releases and their commits |
| `npm run status` | Overview of library, shortlists, sites |
| `npm test` | Engine tests |

## Folder map
| Path | Contents |
|---|---|
| `incoming/` | Drop zone (not committed) |
| `library/originals/<id>/` | Exact copies of your designs; never edited |
| `showcase/` | The showcase Lovable app (public pages + `/admin`). `src/designs/<id>/` holds `index.tsx`, `code/` and `meta.json` (traits); `src/overrides/<id>.json` holds your dashboard edits; `src/shortlists/<slug>.json` holds each shortlist |
| `briefs/<slug>.json` | Client briefs (`_template.json` lists every field) |
| `sites/<slug>/` | One Lovable app per client. `.engine/` holds the plan and sync state and is never pushed to Lovable |
| `memory/events/` | What the engine learned: notes, preferences, picks, usage. One file per event |
| `knowledge/` | `vocabulary.json` (allowed trait words, synonyms) and `niche-presets.json` (target feel per niche) |
| `engine/` | Scripts; `engine.config.json` holds the showcase URL and shortlist settings |
| `templates/` | Base Lovable app (Vite, React 18, TypeScript, Tailwind 3, shadcn/ui) and the showcase pages |
| `.claude/` | Skills (`add-designs`, `shortlist`, `build-site`; design guidance `apple-design` and `mobile-native` from emilkowalski/skills, MIT) and agents (`design-tagger`, `section-converter`) |
| `tests/` | Unit tests, a full pipeline test, and fixture designs |
| `docs/` | User guide, algorithm, admin dashboard, release notes (`docs/releases/`), and the original starter kit for reference |
| `.github/workflows/` | Optional auto-publish of the showcase to Lovable after edits |

## Known limits
- Designs that need props or data render blank. The render test flags them, and Claude adds default props once.
- Tailwind v4-only designs and custom `tailwind.config` snippets need a one-time merge (flagged automatically).
- HTML, Vue and Svelte designs need a one-time conversion before they can be shortlisted.
- Ranking quality depends on tag quality. Feel axes are Claude's judgement from a summary, without a screenshot. Use `remember` to correct mistakes.
- Recolouring swaps Tailwind palette classes and hex values. Colours drawn inside images or SVG files stay as they are.
- Pushing from a Claude cloud chat needs the Lovable repo added to that chat with push access.
- Lovable's GitHub sync behaviour (which branch, how fast) is controlled by Lovable.
