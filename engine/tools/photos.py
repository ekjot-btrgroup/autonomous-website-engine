"""Fetch photos for one design folder.

  python3 -I engine/tools/photos.py <design_dir> <map.json>

map.json: [{"file": "hero.jpg", "w": 1600, "h": 1000, "url": "https://images.unsplash.com/...", "credit": "Unsplash"},
           {"file": "team.jpg", "w": 800, "h": 1000, "query": "barber portrait"}]
- "url": download it (Unsplash links from Framer's image search, or any image the user supplied).
- "query" only: search Openverse for a commercial-use Creative Commons photo.
Each photo is cover-cropped to w x h (subject kept slightly above centre) and saved to <design_dir>/img/<file>
as an optimised JPEG/WebP. Credits go to <design_dir>/img/credits.json. Stdlib + Pillow.
"""
import io, json, os, sys, time, urllib.parse, urllib.request
from concurrent.futures import ThreadPoolExecutor
from PIL import Image

UA = {"User-Agent": "website-engine/1.0 (photo fetcher)"}
OV = "https://api.openverse.org/v1/images/"

def get(url, binary=True, tries=3, timeout=45):
    last = None
    for i in range(tries):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=timeout) as r:
                d = r.read(); return d if binary else json.loads(d)
        except Exception as e:
            last = e; time.sleep(1.5 * (i + 1))
    raise RuntimeError(f"{url[:90]}: {last}")

def sized(url, w):
    if "images.unsplash.com" in url:
        p = urllib.parse.urlsplit(url); q = dict(urllib.parse.parse_qsl(p.query))
        q.update({"w": str(min(2400, max(400, int(w * 1.5)))), "fit": "max", "q": "80", "fm": "jpg"})
        return urllib.parse.urlunsplit((p.scheme, p.netloc, p.path, urllib.parse.urlencode(q), ""))
    return url

def cover(data, w, h, dest):
    im = Image.open(io.BytesIO(data)).convert("RGB")
    s = max(w / im.width, h / im.height)
    im = im.resize((max(w, round(im.width * s)), max(h, round(im.height * s))), Image.LANCZOS)
    l, t = (im.width - w) // 2, max(0, (im.height - h) // 3)
    im = im.crop((l, t, l + w, t + h))
    if dest.lower().endswith(".webp"): im.save(dest, "WEBP", quality=80, method=5)
    else: im.save(dest, "JPEG", quality=82, optimize=True, progressive=True)

def openverse(q, used):
    p = urllib.parse.urlencode({"q": q, "license_type": "commercial", "page_size": 20, "mature": "false"})
    res = get(f"{OV}?{p}", binary=False).get("results", [])
    for r in res:
        if r["id"] in used or not r.get("width"): continue
        used.add(r["id"]); return r
    return None

def main(d, mp):
    items = json.load(open(mp)); out = os.path.join(d, "img"); os.makedirs(out, exist_ok=True)
    used, credits = set(), []
    def one(it):
        f, w, h = it["file"], int(it.get("w", 1600)), int(it.get("h", 1000))
        try:
            if it.get("url"):
                cover(get(sized(it["url"], w)), w, h, os.path.join(out, f))
                return {"file": f, "source": it["url"].split("?")[0], "credit": it.get("credit") or ("Unsplash" if "unsplash" in it["url"] else "supplied"), "license": "Unsplash License" if "unsplash" in it["url"] else it.get("license", "supplied by client")}
            r = openverse(it["query"], used)
            if not r: print(f"none  {f}: no photo for '{it['query']}'"); return None
            big = max(w, h) > 800
            cover(get(f"{OV}{r['id']}/thumb/" + ("?full_size=true" if big else "")), w, h, os.path.join(out, f))
            return {"file": f, "source": r.get("foreign_landing_url"), "credit": r.get("creator"), "license": f"{r.get('license','').upper()} {r.get('license_version') or ''}".strip(), "title": r.get("title")}
        except Exception as e:
            print(f"fail  {f}: {str(e)[:80]}"); return None
    with ThreadPoolExecutor(4) as ex: credits = [c for c in ex.map(one, items) if c]
    cp = os.path.join(out, "credits.json")
    old = [c for c in (json.load(open(cp)) if os.path.exists(cp) else []) if c["file"] not in {i["file"] for i in items}]
    json.dump(old + credits, open(cp, "w"), indent=1)
    print(f"{len(credits)}/{len(items)} photos saved in {os.path.relpath(out)}")

if __name__ == "__main__":
    if len(sys.argv) != 3: print(__doc__); sys.exit(1)
    main(sys.argv[1], sys.argv[2])
