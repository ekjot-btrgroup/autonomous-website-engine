"""Replace a site's template photos with on-brand photos from Openverse (Creative Commons / public domain).

  python3 -I engine/tools/images.py list  <site_dir>             -> JSON list of images (file, size, hint)
  python3 -I engine/tools/images.py apply <site_dir> <map.json>  -> map = {"<file>": "search words"}

Only licenses that allow commercial use are requested. Each photo is cropped to the original file's exact size
(so layouts do not shift), saved under the same file name, and credited in <site_dir>/.engine/image-credits.json.
Stdlib + optional Pillow (without Pillow photos are saved uncropped).
"""
import io, json, os, re, sys, time, urllib.parse, urllib.request
from concurrent.futures import ThreadPoolExecutor

try:
    from PIL import Image
except Exception:  # pragma: no cover
    Image = None

API = "https://api.openverse.org/v1/images/"
UA = {"User-Agent": "website-engine/1.0 (image fetcher)"}
EXT = (".webp", ".jpg", ".jpeg", ".png")

def get(url, binary=False, tries=4, timeout=45):
    last = None
    for i in range(tries):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=timeout) as r:
                data = r.read()
                return data if binary else json.loads(data)
        except Exception as e:  # 429/5xx/timeouts: back off and retry
            last = e
            time.sleep(2 * (i + 1))
    raise RuntimeError(f"{url[:80]}: {last}")

def images_in(site):
    root = os.path.join(site, "src", "sections")
    out = []
    for dp, _, files in os.walk(root):
        for f in sorted(files):
            if not f.lower().endswith(EXT): continue
            p = os.path.join(dp, f)
            w = h = None
            if Image:
                try:
                    with Image.open(p) as im: w, h = im.size
                except Exception: pass
            rel = os.path.relpath(p, root)
            hint = re.sub(r"[-_]+", " ", re.sub(r"-[A-Za-z0-9_]{6,}$", "", os.path.splitext(f)[0])).strip()
            if w and (w < 120 or h < 120): continue  # icons, logos, tiny decorations
            out.append({"file": rel, "w": w, "h": h, "hint": hint})
    return out

def cover(img_bytes, w, h, dest):
    if not Image or not w:
        open(dest, "wb").write(img_bytes); return
    im = Image.open(io.BytesIO(img_bytes)).convert("RGB")
    s = max(w / im.width, h / im.height)
    im = im.resize((max(w, round(im.width * s)), max(h, round(im.height * s))))
    l, t = (im.width - w) // 2, (im.height - h) // 3  # keep subjects a little above centre
    im = im.crop((l, t, l + w, t + h))
    fmt = {".webp": "WEBP", ".png": "PNG"}.get(os.path.splitext(dest)[1].lower(), "JPEG")
    im.save(dest, fmt, quality=80)

def image_url(r, meta):
    # Big hero/banner images need the original; cards, team photos and avatars are fine with the fast thumbnail.
    big = max(meta["w"] or 0, meta["h"] or 0) > 800
    return f"{API}{r['id']}/thumb/" + ("?full_size=true" if big else "")

def apply(site, mapping):
    root = os.path.join(site, "src", "sections")
    info = {i["file"]: i for i in images_in(site)}
    jobs = [(rel, q) for rel, q in mapping.items() if rel in info and q]
    queries = sorted({q for _, q in jobs})

    def search(q):
        p = urllib.parse.urlencode({"q": q, "license_type": "commercial", "page_size": 20, "mature": "false"})
        try: return q, get(f"{API}?{p}", tries=3, timeout=30).get("results", [])
        except Exception as e: print(f"search failed for '{q}' ({str(e)[:60]})", flush=True); return q, []
    with ThreadPoolExecutor(4) as ex: cache = dict(ex.map(search, queries))

    used, plan = set(), {}
    for rel, q in jobs:  # give every file its own ranked list of not-yet-used photos
        meta = info[rel]; want = (meta["w"] or 16) / (meta["h"] or 10)
        pool = [r for r in cache.get(q, []) if r.get("width") and r.get("height")]
        pool.sort(key=lambda r: (r["id"] in used, abs((r["width"] / r["height"]) - want) > 0.6, -r["width"]))
        plan[rel] = pool
        if pool: used.add(pool[0]["id"])

    credits, taken = [], set()
    def fetch(rel):
        meta, q = info[rel], mapping[rel]
        for r in plan[rel][:6]:
            if r["id"] in taken and r is not plan[rel][0]: continue
            try:
                cover(get(image_url(r, meta), binary=True, tries=2, timeout=30), meta["w"], meta["h"], os.path.join(root, rel))
            except Exception as e:
                print(f"  {rel}: trying another photo ({str(e)[:50]})", flush=True); continue
            taken.add(r["id"])
            c = {"file": rel, "query": q, "title": r.get("title"), "creator": r.get("creator"),
                 "license": f"{r.get('license', '').upper()} {r.get('license_version') or ''}".strip(),
                 "source": r.get("foreign_landing_url"), "provider": r.get("provider")}
            print(f"ok   {rel}  <- {(r.get('title') or '')[:40]} ({c['license']}, {r.get('creator') or 'unknown'})", flush=True)
            return c
        print(f"keep {rel} (no usable photo for '{q}')", flush=True)
        return None
    with ThreadPoolExecutor(4) as ex: credits = [c for c in ex.map(fetch, [rel for rel, _ in jobs]) if c]
    os.makedirs(os.path.join(site, ".engine"), exist_ok=True)
    cp = os.path.join(site, ".engine", "image-credits.json")
    old = [c for c in (json.load(open(cp)) if os.path.exists(cp) else []) if c["file"] not in mapping]
    json.dump(old + credits, open(cp, "w"), indent=2)
    print(f"\nReplaced {len(credits)}/{len(jobs)} photos. Credits: {os.path.relpath(cp, site)}", flush=True)

if __name__ == "__main__":
    a = sys.argv[1:]
    if len(a) >= 2 and a[0] == "list": print(json.dumps(images_in(a[1])))
    elif len(a) >= 3 and a[0] == "apply": apply(a[1], json.load(open(a[2])))
    else: print(__doc__); sys.exit(1)
