# Reference library: 64 templates, accurate section crops

- Released: 2026-11-12 15:50 UTC
- Merge commit on main: `3fd3b30`
- From branch: `claude/laughing-planck-rph3e0`
- Changed: 563 files changed, 23365 insertions(+), 750 deletions(-)
- Areas: engine, references, sites

## Commits (each one can be brought back on its own)
| Commit | What |
|---|---|
| `ada462d` | Reference crops: drop overlaying sticky-header offset, spread pinned-section height; re-crop 23 references |
| `a37155a` | Import references group B (10 templates) |
| `94332a5` | Trial design 2: fix round 2 |
| `63a055f` | Import references group F (10 templates) |
| `2465cef` | Trial design 1: fix round 2; reference import progress |

## Bring it back
- Whole release on a new branch: `git fetch origin && git checkout -b restore-reference-library-64-tem 3fd3b30`
- One feature onto your current branch: `git cherry-pick <commit from the table>`
- Undo the whole release on main: `git revert -m 1 3fd3b30`
