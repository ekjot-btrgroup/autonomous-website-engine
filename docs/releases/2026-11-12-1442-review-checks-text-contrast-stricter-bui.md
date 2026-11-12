# Review checks text contrast; stricter builder rules

- Released: 2026-11-12 14:42 UTC
- Merge commit on main: `6dd2d60`
- From branch: `claude/laughing-planck-rph3e0`
- Changed: 188 files changed, 7582 insertions(+), 666 deletions(-)
- Areas: .claude, engine, references, sites

## Commits (each one can be brought back on its own)
| Commit | What |
|---|---|
| `8eea29b` | Review: text contrast check; builder rules for team photos, section order, distinct forms; fix-round limit |
| `ab64e57` | Trial design 4: critic fixes |
| `badc3a4` | Work in progress: reference import and trial design 4 fixes |
| `edf46c8` | Imported references (in progress) |
| `d42fe17` | Trial design 1: critic fixes |
| `87a63f8` | Trial design 2: critic fixes |
| `d05c905` | Work in progress: references being imported and trial design fixes |

## Bring it back
- Whole release on a new branch: `git fetch origin && git checkout -b restore-review-checks-text-contr 6dd2d60`
- One feature onto your current branch: `git cherry-pick <commit from the table>`
- Undo the whole release on main: `git revert -m 1 6dd2d60`
