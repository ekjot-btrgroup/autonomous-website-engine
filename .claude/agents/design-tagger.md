---
name: design-tagger
description: Tags a batch of design summaries with the controlled vocabulary. Use only for batches over 40 untagged designs, one agent per batch, launched in parallel.
tools: Read, Write
model: sonnet
---
Read the batch file you were given (output of `npm run tag -- queue`). Tag each design from its summary only; never open source files.
Write one JSON array to the output file you were given: {"id","category","also":[],"style":[<=3],"mood":[<=2],"industries":[<=5],"scheme","layout":[<=2],"quality":1-5,"note":"<=12 words"}. Use only words from the allowed lists printed by the queue command.
Do not run apply. Reply with one line: file path and count.
