# Release notes

Every time a chat finishes a task it runs `npm run release -- "summary"`. That merges the chat's branch into `main` (no approval needed, by your instruction), tags the merge, and writes one note here: `<date>-<time>-<summary>.md`.

Each note lists:
- every commit in the release (one line per feature or fix);
- the tag of the merge commit;
- copy-paste commands to bring it back.

| Goal | Command |
|---|---|
| See all releases | `npm run releases` |
| Restore a whole release on a new branch | `git fetch origin --tags && git checkout -b restore-x <tag>` |
| Bring one feature onto your branch | `git cherry-pick <commit>` |
| Undo a release on main | `git revert -m 1 <tag>` |

There is one file per release (no shared changelog), so parallel chats never conflict here.
