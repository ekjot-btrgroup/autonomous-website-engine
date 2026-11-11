# Project state and plan (handover file)

Last updated: 2026-11-11. Read this first in any new chat. Keep it current: update it at the end of every task that changes the plan.

## 1. Key facts
| Item | Value |
|---|---|
| Engine repo (main GitHub) | `ekjot-btrgroup/autonomous-website-engine`, work branch `claude/laughing-planck-rph3e0`, releases merge into `main` |
| Showcase Lovable project | "Website Creation using Automation", id `298119cd-d245-44e5-8846-d184187036cb`, workspace "Better" (`workspace_01kbyfsspkfwgsw2jawqa2errr`) |
| Showcase GitHub repo (Lovable's) | `bettermarketingdev-coder/website-creation-using-automation` (branch `main`) |
| Showcase live URL | https://automated-website-system.lovable.app (saved as `showcase_url` in `engine.config.json`) |
| Lovable Cloud (Supabase) project ref | `rrdfyukhrwdqpbusmbtc` (`https://rrdfyukhrwdqpbusmbtc.supabase.co`) |
| Claude cloud environment | "Website Engine" (`env_0163aep5uJh7T6WUyNSJB5vh`): Default + hosts `rrdfyukhrwdqpbusmbtc.supabase.co`, `automated-website-system.lovable.app` |
| GitHub accounts | Claude connector signs in as `bettermarketingdev-coder`; engine repo owned by org `ekjot-btrgroup` |

## 2. User decisions (do not re-ask)
- Sites end up in Lovable; shortlist of 10, user picks about 3; the picks become a new Lovable project per client.
- Very low Claude credit use: scripts do deterministic work; Claude only judges (tags, briefs, copy, one-line reasons).
- Designs are judged mainly by style and feel; the niche a design currently targets (`origin`) is a small extra signal.
- Memory: user notes, preferences and picks adjust ranking, capped and fading; repeats are penalised; fresh designs get 2 slots.
- Intake asks only 3 things: animations, colours, brand brief.
- Only change colours/typography lightly. Site = only the picks by default (`--fill` completes the page).
- Release to `main` automatically at the end of each task, with a release note in `docs/releases/` (user authorised).
- Admin data must live in Lovable's own backend (Lovable Cloud/Supabase), not in GitHub. Team members + auth wanted.
- Every shortlisted design gets ONE line from Claude: why this design suits this client and brief.

## 3. Done and working (on `main` unless noted)
- Engine: `npm run add` (folders, single files, zips; dedupe by content hash; React/Tailwind normalised into `showcase/src/designs/<id>/`; originals kept in `library/originals/`), `showcase:check -- --smoke` (build + headless render test), `tag` (niche-neutral traits + origin), `shortlist` (deterministic ranking with reasons, live links), `site` (new/theme/copy/copy-apply/check), `remember` (notes/prefs), `push`/`pull` (Lovable GitHub repos, overwrite guard), `sync`/`release`/`releases`, `status`. 9 tests pass (`npm test`).
- Docs: README, docs/USER-GUIDE.md, docs/ALGORITHM.md, docs/ADMIN-DASHBOARD.md (describes the v1 GitHub-token admin), docs/releases/.
- Showcase v1 (public library, design pages, shortlist pick pages, admin v1 with GitHub-token saving) pushed to the Lovable repo on 2026-11-11 12:32 UTC.
- Also on main: engine data snapshot (`engine/lib/snapshot.mjs` -> `showcase/src/showcase/engine-data.json`), showcase URL saved, paused admin v2 in `wip/` (not used by any build).

## 4. Lovable: current state
- Lovable Cloud is enabled; Lovable Auth enabled ("Sign in with Lovable" provider). Lovable's AI committed after our push: re-added `src/integrations/supabase/{client.ts,types.ts,previewAuthStorage.ts}`, `.env` (public URL + publishable key), `supabase/config.toml`, dev deps `@lovable.dev/vite-plugin-dev-server-bridge`, `@lovable.dev/vite-plugin-hmr-gate`, `lovable-tagger`, tsconfig without `baseUrl`, `roadmap.md`. Storage bucket blocked by workspace policy (not needed).
- Database schema APPLIED (via the Lovable connector, SQL saved in `templates/showcase-backend/supabase/migrations/`):
  - team: `profiles`, `user_roles` (`app_role` owner/admin/editor/viewer), `invitations`, triggers (first sign-up = owner; invited email gets its role; last owner protected), `has_min_role()`, `my_role()`.
  - data: `designs` (full details from the engine), `design_overrides` (team edits), `memory_events` (note/pref/shown/pick/used, `ext_id` for idempotent engine sync), `design_comments`, `shortlists` (items with Claude's `why`, `picked` saved by editors), `sites`, `activity_log` (triggers).
  - engine access: `engine_tokens` (hash only; `kind` owner|session, `expires_at`), `engine_token_ok()`, `engine_export()` (read), `engine_sync(payload)` (write), `rotate_engine_token()` (owner, from dashboard).
  - RLS on every table; realtime on designs, design_overrides, design_comments, memory_events, activity_log, shortlists, sites.
  - Tables are EMPTY. Nothing in the live app uses them yet.
- Network: the "Website Engine" environment can reach the database host; the Default environment cannot.
- Admin v2 redesign (premium UI: sidebar, command palette, light/dark, Overview, Designs, design editor, Coverage, Briefs, Sites, Memory, Match Lab, Releases, Team, Settings) was PAUSED by the user. Partial code is in `wip/admin-v2-partial/` (shell, UI kit, Supabase auth/live layer, client-side scoring).

## 5. Lovable plan (resume in this order when the user says so)
1. Before pushing anything to the Lovable repo: pull its current state into `showcase/` (`npm run pull -- showcase`), keep Lovable's files (`src/integrations/**`, `.env`, `supabase/**`, dev deps, tsconfig), and stop `showcase:init --refresh` from overwriting `tsconfig*.json`, `vite.config.ts`, `src/integrations/**`, `supabase/**`, `bun.lock`, `roadmap.md`.
2. Engine <-> Lovable DB bridge: `engine/lib/backend.mjs` calling `engine_sync` / `engine_export` over HTTPS with header `x-engine-token` + `apikey` (publishable key). Session token: Claude generates a random token, stores only its sha256 in `engine_tokens` (kind `session`, `expires_at` now()+1 day) via the Lovable connector, keeps the plaintext in `.cache/engine-token` (gitignored). `npm run sync` pulls overrides/notes/prefs/picks from the DB; `add`/`tag`/`shortlist`/`site new` push designs, shortlists (+why), sites and events. If the DB is unreachable, warn and continue from git.
3. Admin UI (move `wip/admin-v2-partial/` back into `templates/showcase-overlay/src/admin/`): priority order from the user:
   a. Designs page: all designs from the `designs` table, grid/list, STICKY filter bar with the algorithm parameters (section, layout, style, scheme, motion, typography, media, goals, origin, quality, status, pinned/hidden, six feel ranges, sort).
   b. Single design page like Framer CMS: real working live preview (iframe of `/raw/<id>`, viewport switch), every trait editable (saved to `design_overrides`), per-field reset, "Use this design": copy live link, copy code (raw source via `import.meta.glob(...?raw)`), copy instruction for Claude (same project or new Lovable project), copy JSON; tabs: comments, notes, usage (shortlists with the why line, sites), info.
   c. Shortlists: the 10 with Claude's one-line why, live mini previews, pick toggles saved to the DB (Claude reads picks).
   d. Auth (email + password, magic link, reset), roles (viewer read-only; editor edits; admin manages team; owner all), Team page (invite, roles, approve waiting users), Profile, Settings (backend status, owner engine token).
   e. Then Overview, Coverage, Sites, Memory, Match Lab, Releases.
4. Verify with a mocked Supabase in Playwright, build, then push the showcase (additive), confirm the Lovable build, release to main, update this file and docs/ADMIN-DASHBOARD.md (v2 replaces the GitHub-token v1).
5. The user enables Lovable credits first and tests basics before steps 2-4.

## 5b. Library now (2026-11-11)
- 120 full-page designs (kind `page`) from the uiuxlabz templates, converted by `engine/tools/html_page.py` (script), originals in `test-templates/uiuxlabz/`, tagged by 3 parallel Sonnet taggers (~95k tokens total), all 120 build and render (smoke test), detected sections avg 6.2 per page.
- `lovable.showcase` false (showcase never pushed), `lovable.sites` true (client sites go to their own new Lovable project via GitHub, 0 credits).
- Usage reporting after every reply: `npm run usage` (CLAUDE.md rule). Test script for a fresh Sonnet chat: `docs/TEST-RUN.md`; reports go to `docs/test-runs/`.

## 5c. Test run 1 (Sonnet chat, 2026-11-11): form-and-function-studio
- Shortlist + site built and released (pages: architecture-studio, carpenter, interior-design). Not pushed to Lovable (no sync record).
- The new Lovable project "Website Automation Testing" (Borderless workspace) uses Lovable's newer TanStack Start stack; our sites are Vite + React: pushing over it is untested.
- Added after review: floating "Designs" switcher in every multi-option site (`site -- switcher <slug>`), modelled on the "Design Testing" project's DesignSwitcher; template runtime now cleans up script listeners/intervals on page switch.
- Known issue: copy rewriting works per text node, so headlines split across styled spans can mix old/new words, and some template brand names stay (seen on option 2: "Craft & Grain", "Homes designed around you pieces"). Next fix: group a heading's inline text into one copy item.

## 5d. Conversation, HTML export, local edition (2026-11-11)
- CLAUDE.md now fixes the conversation: exact welcome message, strict order (brief -> animations/colours/typography -> 10 designs -> 3 picks by number -> final), "I have noted the company brief and have last 3 questions.", Requirements bullets at the end of every reply, instructions = INSTRUCTIONS.md, no talk of git/scripts/tokens. Usage reporting removed from chats (npm run usage still exists).
- `npm run export -- <slug> [--shortlist]`: static HTML (captured from the built app, template script re-attached, images copied, static Designs switcher), opens via file://; zips in output/<slug>/.
- `engine.config.json`: `delivery` (lovable | html), `release_target` (branch releases merge into). Sync/release work without git (zip download). `npm run setup` for new computers.
- Branch `autonomous-website-engine-local`: same code with delivery html and release_target = that branch. Keep it in step by merging main into it.

## 6. Now: testing without Lovable (user will test in a new chat with 10-20 designs in zips)
Built and tested for this (released to main): multi-design zips split into designs (also nested zips and flat zips of separate component files), `shortlist --why`, `npm run sheet` contact sheet, `npm run showcase:serve`, Lovable switches (now `lovable.showcase` / `lovable.sites`) honoured by the skills. 10 tests pass.
Flow in the test chat (see docs/TEST-RUN.md; the showcase is never pushed while `lovable.showcase` is false):
1. User uploads zip(s). Claude copies them into `incoming/` and runs `/add-designs` (a zip with many design folders becomes many designs).
2. `/shortlist`: 3 intake questions -> brief -> ranking -> Claude writes one "why" line per design (`npm run shortlist -- <slug> --why <file>`) -> `npm run sheet -- <slug>` renders a contact sheet image of the 10 (live renders, desktop + mobile) and Claude sends it to the user. Optional live preview: `npm run showcase:serve` + report the port.
3. User replies with picks -> `/build-site` builds `sites/<slug>/` and checks the build; the Lovable push is skipped while Lovable is parked.

## 7. Open items / risks
- Pushing to the engine repo was refused once (HTTP 403) and recovered; if it recurs, reconnect GitHub at claude.ai/connect-github.
- Tag pushes are blocked from cloud chats; release notes use the merge commit.
- Lovable AI may edit files our scripts own; decide ownership before giving it credits.
- `docs/ADMIN-DASHBOARD.md` still describes the v1 GitHub-token admin until v2 ships.
