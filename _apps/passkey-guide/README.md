# Passkey-Guide (React)

Interaktiver Lernguide unter **https://tuxo.ch/blog/passkeys/**.

- Quellcode: dieser Ordner (`_apps/…` wird von Jekyll ignoriert).
- Ausgeliefert wird der fertig gebaute Ordner **`/passkeys`** im Repository-Stamm. GitHub Pages kopiert ihn unverändert.
- Nach jeder Änderung am Quellcode neu bauen und `/passkeys` mitcommitten:

```bash
cd _apps/passkey-guide
npm ci          # einmalig
npm run dev     # lokale Vorschau
npm run build   # schreibt nach ../../passkeys
```

## Aufbau

| Pfad | Inhalt |
|---|---|
| `src/App.jsx` | Rahmen: Kopfzeile, Schritt-Leiste, Navigation über `#schritt-1` … `#schritt-6` |
| `src/components.jsx` | gemeinsame Bausteine (Schrittkopf, Kasten, Weiter/Zurück) |
| `src/steps/` | ein Lernschritt pro Datei |
| `src/data/` | reine Texte: Schrittnamen, Szenarien (Schritt 5), Checkliste (Schritt 6) |
| `src/webauthn.js` | Übungs-Passkey anlegen und anmelden – ohne Server, nichts wird übertragen |
| `src/styles.css` | Farben und Schriften im TUXO-Stil; Hell/Dunkel wie im Blog (`tuxo-theme`) |

Für die Texte gelten die Regeln aus [REDAKTION.md](../../REDAKTION.md): Sie-Form, «ss» statt «ß», keine Preise.
