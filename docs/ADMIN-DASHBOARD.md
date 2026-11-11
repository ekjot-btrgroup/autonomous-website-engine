# Admin dashboard

A CMS-style manager for every design, built into the Lovable showcase at **`<showcase URL>/admin`**. It works like Framer's CMS:
- **Grid or list view** of all designs, with search, filters, sorting and bulk actions.
- **Single design page:** a live preview at desktop, tablet and mobile sizes, next to a form with all its settings.
- **Memory page:** your preferences and use-case notes.
- **Settings page:** connection to GitHub.

It costs **no Lovable credits and no Claude tokens**, and works on the **free Lovable plan**.

## How it works

```
You edit in /admin ──(GitHub API, your token)──▶ commits in this engine repo (main)
                                                  ├─ showcase/src/overrides/<id>.json   (tag edits, hide, pin, rename)
                                                  └─ memory/events/*.json                (notes, preferences)
Claude chat starts ──npm run sync──▶ pulls main ──▶ ranking uses your edits immediately
Optional GitHub Action ──▶ republishes the showcase to Lovable, so public pages show the edits too
```

- **Your edits always win** over Claude's tags, field by field. Claude never overwrites them.
- **Every save is a git commit** (for example `admin: edit aurora-hero-6cf4`), so you have a full history and can undo anything.
- **Without a token** the dashboard is read-only browsing, so the public showcase stays safe.

## What you can change per design
| Group | Fields |
|---|---|
| Basics | name, hidden (never shortlisted), pinned (+10 in ranking) |
| What it is | category, also-usable-as, layout, style, media, goals, typography, motion, light/dark scheme |
| Feel | six sliders 1-5: playful..formal, calm..energetic, everyday..premium, airy..dense, cool..warm, classic..cutting-edge |
| Quality | 1-5, a short note |
| Current niche | up to 2 niches the design is currently built for (a small ranking signal) |
| Use-case memory | "good for", "not for", optional rating, comment |

"Reset to Claude's tags" removes your override file for that design.

On the **Memory** page you can add preferences such as "For: luxury; Prefer: serif, dark, split; Avoid: gradient". You can also delete any note or preference.

## One-time setup (5 minutes)
1. In GitHub, go to **Settings > Developer settings > Personal access tokens > Fine-grained tokens > Generate new token**.
   - **Repository access:** only `autonomous-website-engine`.
   - **Permissions:** Contents: Read and write.
   - **Expiry:** your choice (you can renew any time).
2. Open `<showcase URL>/admin/settings`, paste the token and press **Test connection**. The repo is pre-filled.
3. Done. The token stays in that browser only (localStorage). It is never in the code or the Lovable project.

**Optional: auto-publish the showcase.** This makes public pages update right after your edits, with no Claude needed.
- In this repo's GitHub settings, add a **variable** `SHOWCASE_REPO` (for example `your-org/design-showcase`).
- Add a **secret** `SHOWCASE_TOKEN`: a fine-grained token with Contents read/write on the showcase repo.
- The workflow `.github/workflows/publish-showcase.yml` then pushes `showcase/` to Lovable on every change.
- GitHub's free plan includes monthly Actions minutes for private repos; one publish takes about a minute. Without this setup, the showcase updates the next time Claude pushes it.

## Why not Lovable Cloud, Auth and AI?
They would work, but they don't fit "free and no credits" as well:

| Need | Lovable Cloud / Auth / AI | This dashboard |
|---|---|---|
| Building the backend | Lovable's agent sets up tables and auth, which costs Lovable credits; free-plan usage limits apply and can change | No backend; the code arrives via GitHub (0 credits) |
| Where edits live | A database outside git | Git commits next to the engine (history, undo, release notes) |
| Claude reading edits | Needs database keys and network access in every chat | `git pull`, which every chat already does |
| Login | Lovable Auth (email or Google) | A GitHub token pasted once; only token holders can save |
| AI help in the dashboard | Lovable AI usage is metered | Not needed: Claude tags designs once, you correct them by hand |

If you later want a proper email login or several team editors, Lovable Cloud and Auth can be added on top. The file formats stay the same: one override file per design, one memory file per event. I'm not sure what Lovable's free-plan allowances will be when you read this, so check their pricing page before choosing that route.

## Troubleshooting
| Message | Fix |
|---|---|
| 401 bad credentials | Token wrong or expired; paste a new one in Settings |
| 403 / no push permission | Token lacks Contents: Read and write on the engine repo |
| 404 not found | Repo name wrong in Settings, or the token does not include that repo |
| 409 conflict | Someone saved the same design at the same time; the dashboard retries once, then asks you to reload |
| Public page still shows old tags | Wait for the auto-publish Action, or ask Claude to push the showcase |
