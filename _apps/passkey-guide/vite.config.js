import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// Die Seite läuft unter tuxo.ch/blog/passkeys/ (der Cloudflare Worker leitet nur /blog* an GitHub Pages weiter).
// «npm run build» schreibt das fertige Ergebnis nach /passkeys im Repository – diesen Ordner liefert GitHub Pages aus.
// SINGLE=1 erzeugt stattdessen eine einzige HTML-Datei (nur für Vorschauen).
export default defineConfig({
  base: '/blog/passkeys/',
  build: process.env.SINGLE ? {} : { outDir: '../../passkeys', emptyOutDir: true },
  plugins: [react(), ...(process.env.SINGLE ? [viteSingleFile()] : [])],
});
