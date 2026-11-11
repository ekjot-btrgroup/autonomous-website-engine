// Static (no React) copy of the "Designs" switcher for exported HTML files: bottom-right pill + full-screen picker.
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const WORDS = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

export function switcherSnippet({ options, current, brand, accent = '#6ee7d2', kind = 'homepage' }) {
  if (!options || options.length < 2) return '';
  const INK = '#0e1013', PAPER = '#f4f1ea';
  const cur = options[current] || options[0];
  const count = String(options.length).padStart(2, '0');
  const rows = options.map((o, i) => `
      <li><a class="osw-row" href="${esc(o.href)}"${i === current ? ' aria-current="page"' : ''}>
        <span class="osw-num">${i + 1}</span>
        <span class="osw-txt"><span class="osw-name">${esc(o.name)}${i === current ? ' <span class="osw-badge">&#10003; Viewing</span>' : ''}</span><span class="osw-tag">${esc(o.tagline)}</span></span>
        <span class="osw-sw" aria-hidden="true">${(o.swatches || []).slice(0, 3).map((c) => `<i style="background:${esc(c)}"></i>`).join('')}</span>
        <span class="osw-arrow" aria-hidden="true">&rarr;</span></a></li>`).join('');
  return `
<!-- Designs switcher (website engine export) -->
<style>
.osw-pill{position:fixed;right:max(16px,env(safe-area-inset-right));bottom:max(16px,env(safe-area-inset-bottom));z-index:2147483000;display:flex;align-items:center;gap:12px;height:48px;padding:0 16px 0 6px;border-radius:999px;border:1px solid rgba(244,241,234,.14);background:${INK};color:${PAPER};font:500 13px/1 Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;box-shadow:0 18px 44px -18px rgba(0,0,0,.6),0 2px 6px rgba(0,0,0,.18);cursor:pointer;-webkit-tap-highlight-color:transparent;touch-action:manipulation;transition:transform .15s ease}
@media (hover:hover){.osw-pill:hover{transform:translateY(-2px)}}
.osw-pill:active{transform:scale(.97)}
.osw-dot{display:grid;place-items:center;width:36px;height:36px;border-radius:999px;background:${accent};color:${INK};font-size:15px}
.osw-full{display:flex;flex-direction:column;align-items:flex-start}
.osw-full small{font:500 9.5px/1 ui-monospace,Menlo,monospace;letter-spacing:.18em;text-transform:uppercase;color:rgba(244,241,234,.5);margin-bottom:5px}
.osw-short{display:none;font:500 11px/1 ui-monospace,Menlo,monospace;letter-spacing:.12em;color:rgba(244,241,234,.8)}
@media (max-width:640px){.osw-pill{height:44px;gap:8px;padding:0 12px 0 5px}.osw-full{display:none}.osw-short{display:inline}}
.osw-ov{position:fixed;inset:0;z-index:2147483001;overflow-y:auto;overscroll-behavior:contain;background:${INK} radial-gradient(60% 45% at 85% 0%,${accent}55,transparent 70%);color:${PAPER};font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;display:none}
.osw-ov.open{display:block;animation:osw-in .22s ease both}
@keyframes osw-in{from{opacity:0;transform:scale(.985)}to{opacity:1;transform:none}}
.osw-wrap{max-width:1240px;margin:0 auto;padding:28px 20px 48px}
.osw-head{display:flex;justify-content:space-between;align-items:center;gap:16px}
.osw-kicker{margin:0;font:500 11px/1.4 ui-monospace,Menlo,monospace;letter-spacing:.18em;text-transform:uppercase;color:${accent}}
.osw-x{width:44px;height:44px;border-radius:999px;border:1px solid rgba(244,241,234,.2);background:transparent;color:${PAPER};font-size:20px;cursor:pointer}
.osw-body{display:grid;gap:40px;margin-top:44px}
.osw-title{margin:0;font-size:clamp(2.4rem,5vw,4.2rem);line-height:.98;font-weight:500;letter-spacing:-.03em}
.osw-title em{font-family:"Iowan Old Style","Palatino Linotype",Palatino,Georgia,serif;font-weight:400;color:${accent}}
.osw-desc{margin:20px 0 0;max-width:380px;font-size:16px;line-height:1.55;color:rgba(244,241,234,.6)}
.osw-tip{margin:32px 0 0;font:400 11px/1.4 ui-monospace,Menlo,monospace;color:rgba(244,241,234,.4)}
.osw-list{list-style:none;margin:0;padding:0 0 40px;display:grid;gap:12px}
.osw-row{display:flex;align-items:center;gap:22px;padding:22px 24px;border-radius:22px;border:1px solid rgba(244,241,234,.1);background:rgba(244,241,234,.03);color:inherit;text-decoration:none;transition:background .15s,border-color .15s}
@media (hover:hover){.osw-row:hover{border-color:rgba(244,241,234,.3);background:rgba(244,241,234,.06)}}
.osw-row[aria-current]{border-color:${accent}99;background:${accent}1f}
.osw-num{width:56px;flex-shrink:0;font:italic 46px/1 "Iowan Old Style",Palatino,Georgia,serif;color:${accent}}
.osw-txt{flex:1;min-width:0}.osw-name{display:block;font-size:22px;font-weight:500}
.osw-badge{display:inline-block;margin-left:8px;border-radius:999px;background:${accent};color:${INK};padding:2px 8px;font:500 10px/1.4 ui-monospace,Menlo,monospace;vertical-align:middle}
.osw-tag{display:block;margin-top:6px;font-size:14px;line-height:1.5;color:rgba(244,241,234,.62)}
.osw-sw{display:flex}.osw-sw i{width:36px;height:36px;border-radius:999px;margin-left:-8px;box-shadow:0 0 0 2px ${INK}}.osw-sw i:first-child{margin-left:0}
.osw-arrow{color:rgba(244,241,234,.4);font-size:20px}
@media (min-width:1024px){.osw-wrap{padding:40px 32px 56px}.osw-body{grid-template-columns:.9fr 1.4fr;gap:64px;margin-top:64px}.osw-side{position:sticky;top:40px;align-self:start}}
@media (max-width:640px){.osw-row{gap:14px;padding:16px}.osw-sw{display:none}}
</style>
<button type="button" class="osw-pill" id="osw-pill" aria-label="Switch design. Current: ${esc(cur.name)}, ${String(current + 1).padStart(2, '0')} of ${count}">
  <span class="osw-dot" aria-hidden="true">&#9638;</span>
  <span class="osw-short">${String(current + 1).padStart(2, '0')}/${count}</span>
  <span class="osw-full"><small>Design ${String(current + 1).padStart(2, '0')} / ${count}</small>${esc(cur.name)}</span>
</button>
<div class="osw-ov" id="osw-ov" role="dialog" aria-modal="true" aria-label="Design picker">
  <div class="osw-wrap">
    <div class="osw-head"><p class="osw-kicker">${esc(brand)} &middot; ${esc(kind)} directions</p><button type="button" class="osw-x" id="osw-x" aria-label="Close design picker">&times;</button></div>
    <div class="osw-body">
      <div class="osw-side">
        <h2 class="osw-title">${WORDS[options.length - 1] || options.length} directions. <em>One ${esc(brand)}.</em></h2>
        <p class="osw-desc">Same brief, ${options.length} art directions chosen for this ${esc(kind)}. Each is its own page.</p>
        <p class="osw-tip">Tip: press 1&ndash;${options.length} to switch, Esc to close</p>
      </div>
      <ul class="osw-list">${rows}
      </ul>
    </div>
  </div>
</div>
<script>
(function(){var p=document.getElementById('osw-pill'),o=document.getElementById('osw-ov'),x=document.getElementById('osw-x'),h=${JSON.stringify(options.map((x) => x.href))},prev='';
function open(){prev=document.documentElement.style.overflow;document.documentElement.style.overflow='hidden';o.classList.add('open');var c=o.querySelector('[aria-current]')||o.querySelector('a');c&&c.focus()}
function close(){o.classList.remove('open');document.documentElement.style.overflow=prev;p.focus()}
p.addEventListener('click',open);x.addEventListener('click',close);
document.addEventListener('keydown',function(e){if(!o.classList.contains('open'))return;if(e.key==='Escape'){e.preventDefault();close();return}var t=h[Number(e.key)-1];if(t){e.preventDefault();location.href=t}});})();
</script>
`;
}
