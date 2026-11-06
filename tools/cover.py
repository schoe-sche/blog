#!/usr/bin/env python3
"""Titelbild für einen Blogartikel im TUXO-Stil erzeugen (1200 × 630 px, JPEG).

Aufruf (im Repository-Hauptordner):
    python3 tools/cover.py <slug> <motiv> "<Tag>"

Beispiel:
    python3 tools/cover.py passkeys-statt-passwoerter passkey "Sicherheit"

Ergebnis: assets/img/posts/<slug>.jpg
Im Front Matter des Artikels dann eintragen:
    image: /assets/img/posts/<slug>.jpg
    image_alt: "Kurze Bildbeschreibung"

Motive: siehe MOTIFS unten (python3 tools/cover.py --list).
Benötigt: Python 3 mit Playwright (Chromium).
"""
import hashlib, math, pathlib, random, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "assets" / "img" / "posts"
FONTS = ROOT / "assets" / "fonts"

# Symbole im 24er-Raster, nur Linien (stroke). Eigene, generische Formen.
MOTIFS = {
    "passkey":  '<circle cx="8" cy="9" r="4.2"/><path d="M11.2 11.6 20 20.4M16.6 17l2.2-2.2M18.4 18.8l1.6-1.6"/><circle cx="8" cy="9" r="1.2"/>',
    "key":      '<circle cx="7.5" cy="12" r="4"/><path d="M11.5 12H21M17.5 12v3.5M20 12v2.5"/>',
    "lock":     '<rect x="5" y="10.5" width="14" height="10" rx="2.2"/><path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7M12 14.5v2.5"/>',
    "shield":   '<path d="M12 3 19.5 6v5.6c0 4.6-3.1 8.2-7.5 9.9-4.4-1.7-7.5-5.3-7.5-9.9V6z"/><path d="m8.8 12.2 2.3 2.3 4.3-4.6"/>',
    "alert":    '<path d="M12 3.5 21.5 20H2.5z"/><path d="M12 10v4.6M12 17.4v.1"/>',
    "backup":   '<ellipse cx="12" cy="5.8" rx="7" ry="2.6"/><path d="M5 5.8v5.4c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V5.8M5 11.2v5.4c0 1.4 3.1 2.6 7 2.6 1 0 2-.1 2.8-.2"/><path d="M17.5 15.5a3 3 0 1 1-.9 4.3M17.4 13.8v1.9h1.9"/>',
    "cloud":    '<path d="M7 18.5h10.2a4.3 4.3 0 0 0 .6-8.6A5.8 5.8 0 0 0 6.6 11.4 3.6 3.6 0 0 0 7 18.5z"/><path d="M12 11.5v5M9.8 14.3 12 16.5l2.2-2.2"/>',
    "mail":     '<rect x="3" y="5.5" width="18" height="13" rx="2.2"/><path d="m3.6 7 8.4 6.2L20.4 7"/>',
    "document": '<path d="M6 3h8.5L19 7.5V21H6z"/><path d="M14.5 3v4.5H19M9 11.5h7M9 14.5h7M9 17.5h4.5"/>',
    "server":   '<rect x="4" y="4" width="16" height="6.5" rx="1.6"/><rect x="4" y="13.5" width="16" height="6.5" rx="1.6"/><path d="M7.5 7.2h.1M7.5 16.7h.1M11 7.2h5.5M11 16.7h5.5"/>',
    "home":     '<path d="M3.5 11 12 4l8.5 7"/><path d="M5.8 9.2V20h12.4V9.2"/><rect x="9" y="12" width="6" height="5.2" rx="1"/><path d="M10.6 14.6h2.8"/>',
    "migrate":  '<rect x="2.5" y="6" width="7" height="12" rx="1.6"/><rect x="14.5" y="6" width="7" height="12" rx="1.6"/><path d="M10.5 10h3.6M12.6 8.4l1.6 1.6-1.6 1.6M13.5 14H9.9M11.4 12.4 9.8 14l1.6 1.6"/>',
    "users":    '<circle cx="9" cy="8.5" r="3.2"/><path d="M3.5 19.5c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5"/><circle cx="16.8" cy="9.5" r="2.5"/><path d="M15.6 14.6c2.6-.3 4.4 1.4 4.9 4.4"/>',
    "update":   '<path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><path d="M19.6 4.3v4.2h-4.2"/><path d="m8.8 12.3 2.2 2.2 4.2-4.4"/>',
    "phishing": '<path d="M12 3v8.5a3.5 3.5 0 1 1-3.5-3.5"/><rect x="11.2" y="15.3" width="9.3" height="6.2" rx="1.2"/><path d="m11.6 15.9 4.25 3 4.25-3"/>',
    "eye":      '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/><path d="M4 20 20 4"/>',
}


def build_html(slug, motif, tag):
    rnd = random.Random(int(hashlib.sha256(slug.encode()).hexdigest()[:12], 16))
    # Netzwerk im Hintergrund (pro Artikel anders, aber reproduzierbar)
    pts = [(rnd.uniform(-40, 1240), rnd.uniform(-40, 670)) for _ in range(46)]
    lines, dots = [], []
    for i, (x1, y1) in enumerate(pts):
        for x2, y2 in pts[i + 1:]:
            d = math.hypot(x1 - x2, y1 - y2)
            if d < 190:
                col = "101,169,139" if (i % 2) else "99,142,173"
                lines.append(f'<line x1="{x1:.0f}" y1="{y1:.0f}" x2="{x2:.0f}" y2="{y2:.0f}" stroke="rgba({col},{(1 - d / 190) * .28:.3f})" stroke-width="1.4"/>')
    for i, (x, y) in enumerate(pts):
        col = "127,209,170" if i % 2 else "122,169,214"
        dots.append(f'<circle cx="{x:.0f}" cy="{y:.0f}" r="{rnd.choice((2.2, 2.8, 3.4))}" fill="rgba({col},.55)"/>')
    gx, gy = rnd.uniform(8, 30), rnd.uniform(10, 40)
    icon = MOTIFS[motif]
    tag = (tag or "").upper()
    return f"""<!DOCTYPE html><html><head><meta charset="utf-8"><style>
@font-face{{font-family:Mono;src:url({(FONTS / 'jetbrains-mono-400.woff2').as_uri()})}}
@font-face{{font-family:Sora;font-weight:600;src:url({(FONTS / 'sora-600.woff2').as_uri()})}}
html,body{{margin:0;width:1200px;height:630px;overflow:hidden;background:#081018}}
.bg{{position:absolute;inset:0;background:
 radial-gradient(48% 70% at {gx:.0f}% {gy:.0f}%,rgba(101,169,139,.30),transparent 70%),
 radial-gradient(50% 75% at {100 - gx:.0f}% {100 - gy / 2:.0f}%,rgba(99,142,173,.32),transparent 70%)}}
svg.net{{position:absolute;inset:0}}
.vig{{position:absolute;inset:0;background:radial-gradient(80% 80% at 50% 50%,transparent 55%,rgba(0,0,0,.55))}}
.disc{{position:absolute;left:600px;top:315px;width:330px;height:330px;margin:-165px 0 0 -165px;border-radius:50%;
 background:radial-gradient(circle at 35% 30%,#1a2731,#0c151d 65%);
 border:2px solid rgba(255,255,255,.14);box-shadow:0 40px 90px -30px rgba(0,0,0,.7),inset 0 1px 0 rgba(255,255,255,.12)}}
.ring{{position:absolute;left:600px;top:315px;border-radius:50%;border:1.5px dashed rgba(255,255,255,.12)}}
.icon{{position:absolute;left:600px;top:315px;width:180px;height:180px;margin:-90px 0 0 -90px}}
.brand{{position:absolute;left:56px;top:48px;display:flex;align-items:center;gap:14px;font-family:Mono;font-size:17px;letter-spacing:.32em;color:rgba(231,237,240,.75)}}
.brand b{{font-family:Sora;font-weight:600;font-size:26px;letter-spacing:.14em;color:#fff}}
.brand i{{width:1px;height:22px;background:rgba(255,255,255,.25)}}
.tag{{position:absolute;left:56px;bottom:48px;font-family:Mono;font-size:16px;letter-spacing:.28em;color:#65a98b;padding:9px 16px;border:1px solid rgba(101,169,139,.45);border-radius:999px;background:rgba(8,16,24,.55)}}
</style></head><body>
<div class="bg"></div>
<svg class="net" width="1200" height="630">{''.join(lines)}{''.join(dots)}</svg>
<div class="vig"></div>
<div class="ring" style="width:470px;height:470px;margin:-235px 0 0 -235px"></div>
<div class="ring" style="width:610px;height:610px;margin:-305px 0 0 -305px;opacity:.6"></div>
<div class="disc"></div>
<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="url(#g)" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round">
 <defs><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="3" y1="3" x2="21" y2="21"><stop offset="0" stop-color="#7fd1aa"/><stop offset="1" stop-color="#7aa9d6"/></linearGradient></defs>{icon}</svg>
<div class="brand"><b>TUXO</b><i></i>BLOG</div>
{f'<div class="tag">{tag}</div>' if tag else ''}
</body></html>"""


def render(slug, motif, tag):
    from playwright.sync_api import sync_playwright
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    tmp = OUT_DIR / f".{slug}.html"
    tmp.write_text(build_html(slug, motif, tag), encoding="utf-8")
    out = OUT_DIR / f"{slug}.jpg"
    with sync_playwright() as p:
        b = p.chromium.launch()
        pg = b.new_page(viewport={"width": 1200, "height": 630})
        pg.goto(tmp.as_uri())
        pg.wait_for_timeout(400)
        pg.screenshot(path=str(out), type="jpeg", quality=84)
        b.close()
    tmp.unlink()
    return out


if __name__ == "__main__":
    if len(sys.argv) == 2 and sys.argv[1] == "--list":
        print("\n".join(MOTIFS)); sys.exit(0)
    if len(sys.argv) < 3 or sys.argv[2] not in MOTIFS:
        print(__doc__); print("Motive:", ", ".join(MOTIFS)); sys.exit(1)
    print(render(sys.argv[1], sys.argv[2], sys.argv[3] if len(sys.argv) > 3 else ""))
