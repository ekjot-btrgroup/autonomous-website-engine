# Test templates

`uiuxlabz/`: 120 full-page HTML templates fetched from github.com/uiuxlabz/<name>-html-template (MIT, see each LICENSE).
Each folder keeps the ORIGINAL homepage text files (index.html, css, js), LICENSE and `source.json` (upstream repo + commit).
Original images stay in the upstream repo at that commit (kept out of git to save space; compressed copies live in the converted design).

Converted designs: `showcase/src/designs/<id>/` (kind `page`), made by `npm run import:pages -- <dir-with-template-folders> --group <name>`
(script, zero Claude tokens): JSX page + scoped CSS (`.tpl-<id>`), images compressed to webp, fonts linked, the template's own
JavaScript run after mount by `@/lib/template-runtime`.
