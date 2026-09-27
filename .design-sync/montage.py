# Compact review montage of capture sheets (collapses empty space) - usage:
#   python3 .design-sync/montage.py out.png Name1 Name2 ...
import sys
from PIL import Image
out_path, names = sys.argv[1], sys.argv[2:]
parts = []
for n in names:
    rgb = Image.open(f"ds-bundle/_screenshots/review/general__{n}.png").convert("RGB")
    im = rgb.convert("L"); w, h = im.size; px = im.load(); keep = []; gap = 0
    for y in range(h):
        r = any(px[x, y] < 235 for x in range(0, 70, 2)) or any(px[x, y] < 250 for x in range(160, w, 2))
        if r: keep.append(y); gap = 0
        else:
            gap += 1
            if gap <= 40: keep.append(y)
    W = min(w, 760); strip = Image.new("RGB", (W, len(keep)), "white")
    for i, y in enumerate(keep): strip.paste(rgb.crop((0, y, W, y + 1)), (0, i))
    parts.append(strip)
H = sum(p.height for p in parts) + 10 * len(parts); W = max(p.width for p in parts)
out = Image.new("RGB", (W, H), "white"); y = 0
for p in parts: out.paste(p, (0, y)); y += p.height + 10
out.save(out_path); print(out.size)
