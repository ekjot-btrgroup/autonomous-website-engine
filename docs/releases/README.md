# Release notes

Every time a chat finishes a task it runs `npm run release -- "summary"`. That merges the chat's branch into `main` (no approval needed, by your instruction) and writes one note here: `<date>-<time>-<summary>.md`. Where the environment allows it, the merge is also tagged (Claude cloud chats cannot push tags, so the notes always name the merge commit).

Each note lists:
- every commit in the release (one line per feature or fix);
- the merge commit on `main` (and its tag, when tags can be pushed);
- copy-paste commands to bring it back.

| Goal | Command |
|---|---|
| See all releases | `npm run releases` |
| Restore a whole release on a new branch | `git fetch origin && git checkout -b restore-x <merge commit>` |
| Bring one feature onto your branch | `git cherry-pick <commit>` |
| Undo a release on main | `git revert -m 1 <merge commit>` |

There is one file per release (no shared changelog), so parallel chats never conflict here.
