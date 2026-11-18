# TUXO Blog

Quelle des Blogs unter **https://tuxo.ch/blog/**.

- Gebaut mit Jekyll über **GitHub Pages** (Branch `main`, Ordner `/`).
- Ausgeliefert unter `tuxo.ch/blog/` über den Cloudflare Worker `tuxo-blog` (Route `tuxo.ch/blog*`), der die Anfragen an `schoe-sche.github.io/blog/` weiterreicht. Besucher sehen nur tuxo.ch; GitHub erhält keine Besucher-IP-Adressen.
- In den GitHub-Pages-Einstellungen bleibt «Custom domain» leer.
- Neue Artikel: Markdown-Datei in `_posts/` – siehe [REDAKTION.md](REDAKTION.md).
- Interaktiver Passkey-Guide unter `tuxo.ch/blog/passkeys/`: Quellcode in `_apps/passkey-guide/` (React/Vite), ausgelieferter Build in `passkeys/` – siehe [README dort](_apps/passkey-guide/README.md).
- Artikel-Vorschläge kommen als Pull Request. **Merge = veröffentlichen.** Nach ca. 1–2 Minuten ist der Artikel online.

Lokal ansehen (optional): `bundle exec jekyll serve --baseurl /blog`
