// npm run setup   one-time setup on a new computer (for example after downloading the zip). Safe to re-run.
// Checks Node, Python, Pillow, zip; installs Playwright + Chromium if missing (used for previews and HTML export);
// Prints a short checklist.
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { P, ROOT } from './lib/util.mjs';
import { loadChromium } from './showcase.mjs';

const run = (cmd, argv, opts = {}) => spawnSync(cmd, argv, { encoding: 'utf8', cwd: ROOT, ...opts });
const ok = (b) => (b ? 'OK  ' : 'MISSING');
const rows = [];

const major = Number(process.versions.node.split('.')[0]);
rows.push([major >= 20, `Node ${process.versions.node} (need 20+)`]);

const py = run(process.platform === 'win32' ? 'python' : 'python3', ['--version']);
rows.push([py.status === 0, `Python 3 (${(py.stdout || py.stderr || '').trim() || 'not found'}) - photos and reference screenshots`]);
const pil = run(process.platform === 'win32' ? 'python' : 'python3', ['-c', 'import PIL']);
rows.push([pil.status === 0, 'Pillow (photos and screenshots)  pip install pillow']);
rows.push([run('zip', ['-v']).status === 0, 'zip (optional: zips the exported HTML)']);

let browser = await loadChromium().catch(() => null);
if (!browser) {
  console.log('Installing Playwright + Chromium (one time, ~150 MB)...');
  run('npm', ['install', '--no-save', '--no-audit', '--no-fund', 'playwright@1'], { stdio: 'inherit' });
  run('npx', ['playwright', 'install', 'chromium'], { stdio: 'inherit' });
  browser = await loadChromium().catch(() => null);
}
rows.push([!!browser, 'Chromium via Playwright (design review screenshots, contact sheets)']);
if (browser) await browser.close();

console.log('\nSetup check');
for (const [good, label] of rows) console.log(`  ${ok(good)}  ${label}`);
const blocking = rows.filter(([g, l]) => !g && !/optional|only needed/.test(l));
console.log(blocking.length ? '\nFix the MISSING items above, then run npm run setup again.' : '\nReady. Open this folder in Claude Code and say hi.');
process.exitCode = blocking.length ? 1 : 0;
