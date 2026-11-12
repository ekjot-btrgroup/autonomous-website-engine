"""Download a Framer reference's screenshots and cut the desktop page into one image per section.

  python3 -I engine/tools/refshots.py <ref_dir>

Reads <ref_dir>/dna.json (screenshots.desktop / .phone URLs, screenshots.desktopWidth, sections[].y/.h) and writes:
  thumb.jpg      first 1200x900 of the desktop page (gallery card)
  phone.jpg      full phone page, 390 wide
  sections/NN-<name>.jpg   each homepage section at desktop width (max 2400px tall)
Stdlib + Pillow.
"""
import io, json, os, re, sys, urllib.request
from PIL import Image

UA = {"User-Agent": "website-engine/1.0 (reference capture)"}

def get(url):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
        return r.read()

def slug(s, n=32):
    return re.sub(r"-+", "-", re.sub(r"[^a-z0-9]+", "-", (s or "section").lower())).strip("-")[:n] or "section"

def main(d):
    dna = json.load(open(os.path.join(d, "dna.json")))
    shots = dna.get("screenshots") or {}
    done = []
    if shots.get("phone"):
        im = Image.open(io.BytesIO(get(shots["phone"]))).convert("RGB")
        if im.width > 390: im = im.resize((390, round(im.height * 390 / im.width)))
        im.crop((0, 0, im.width, min(im.height, 14000))).save(os.path.join(d, "phone.jpg"), "JPEG", quality=62, optimize=True)
        done.append("phone.jpg")
    if shots.get("desktop"):
        im = Image.open(io.BytesIO(get(shots["desktop"]))).convert("RGB")
        k = im.width / (shots.get("desktopWidth") or im.width)
        thumb = im.crop((0, 0, im.width, min(im.height, round(900 * k))))
        thumb.save(os.path.join(d, "thumb.jpg"), "JPEG", quality=70, optimize=True)
        done.append("thumb.jpg")
        sd = os.path.join(d, "sections"); os.makedirs(sd, exist_ok=True)
        for f in os.listdir(sd): os.remove(os.path.join(sd, f))
        secs = [s for s in dna.get("sections", []) if s.get("y") is not None and s.get("h")]
        off = dna.get("chromeTop") or 0  # sticky header from the layout template sits above the first section
        for i, s in enumerate(secs):
            top = round((s["y"] + off) * k); h = round(min(s["h"], 2400) * k)
            if top >= im.height or h < 20: continue
            name = f"{i + 1:02d}-{slug(s.get('name') or s.get('comp'))}.jpg"
            im.crop((0, top, im.width, min(im.height, top + h))).save(os.path.join(sd, name), "JPEG", quality=66, optimize=True)
            s["shot"] = f"sections/{name}"
        dna["screenshot_size"] = [im.width, im.height]
        json.dump(dna, open(os.path.join(d, "dna.json"), "w"), indent=1)
        done.append(f"{len(secs)} section crops")
    print("saved: " + ", ".join(done))

if __name__ == "__main__":
    if len(sys.argv) != 2: print(__doc__); sys.exit(1)
    main(sys.argv[1])
