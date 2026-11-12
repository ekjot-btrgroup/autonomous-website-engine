# Trial run passes: 3 barbershop designs; consistent critic

- Released: 2026-11-12 16:58 UTC
- Merge commit on main: `2de67fe`
- From branch: `claude/laughing-planck-rph3e0`
- Changed: 72 files changed, 4185 insertions(+), 673 deletions(-)
- Areas: .claude, engine, references, sites

## Commits (each one can be brought back on its own)
| Commit | What |
|---|---|
| `28d6a9b` | Trial designs pass the critic; contact sheet title shows the real design count |
| `9d8f9cc` | Trial design 1: round 3 fixes |
| `7117deb` | Trial design 2: round 3 fixes |
| `ab4c2bc` | Work in progress: trial design fixes |
| `975eba7` | Work in progress: trial design fixes |
| `b1faae3` | Work in progress: reference import and trial design fixes |
| `fcf83f8` | Import references group G (11 templates); extract.js skips helper components and sticky headers in chromeTop |
| `1a6ece9` | Critic: consistent between rounds; blocking vs polish fixes; round-3 rule |

## Bring it back
- Whole release on a new branch: `git fetch origin && git checkout -b restore-trial-run-passes-3-barbe 2de67fe`
- One feature onto your current branch: `git cherry-pick <commit from the table>`
- Undo the whole release on main: `git revert -m 1 2de67fe`
