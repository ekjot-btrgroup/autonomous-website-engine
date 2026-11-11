// npm run usage -- --out <output_tokens> --in <input_tokens> --cw <cache_write_tokens> --cr <cache_read_tokens> --cost <usd>
// Feed it the session's cumulative usage (claude-code-remote get_session -> external_metadata.usage). It prints what
// the latest message used (difference from the previous call) and the session total. State: .cache/usage.json.
import fs from 'node:fs';
import path from 'node:path';
import { P, args, readJson, writeJson } from './lib/util.mjs';

const a = args();
const now = { out: +a.out || 0, in: +a.in || 0, cw: +a.cw || 0, cr: +a.cr || 0, cost: +a.cost || 0, at: new Date().toISOString() };
const file = path.join(P.cache, 'usage.json');
const prev = readJson(file, null);
const fmt = (n) => (n >= 1e6 ? `${(n / 1e6).toFixed(2)}M` : n >= 1e3 ? `${(n / 1e3).toFixed(1)}k` : String(n));
const usd = (n) => `$${n.toFixed(2)}`;
if (prev && now.out >= prev.out) {
  const d = { out: now.out - prev.out, in: now.in - prev.in, cw: now.cw - prev.cw, cr: now.cr - prev.cr, cost: now.cost - prev.cost };
  console.log(`This message: ${fmt(d.out)} output + ${fmt(d.in + d.cw)} new input + ${fmt(d.cr)} cached input tokens, about ${usd(d.cost)}.`);
} else console.log('This message: first measurement in this chat (no previous value to compare).');
console.log(`Session so far: ${fmt(now.out)} output + ${fmt(now.in + now.cw)} new input + ${fmt(now.cr)} cached input tokens, about ${usd(now.cost)}. Lovable credits: ${a.lovable ?? '0 (no Lovable AI used)'}.`);
fs.mkdirSync(P.cache, { recursive: true });
writeJson(file, now);
