# Redaktionsleitfaden TUXO Blog

Dieser Leitfaden gilt für alle Artikel – auch für die, die automatisch als Vorschlag erstellt werden.
Jeder Artikel wird vor der Veröffentlichung von Jorge Botelho geprüft (Pull Request → Merge).

## Zielgruppe und Ziel

- **Wer liest:** Inhaberinnen, Geschäftsführer und Büro-Verantwortliche von Schweizer KMU (1–50 Mitarbeitende) sowie interessierte Privatpersonen. Keine IT-Profis.
- **Ziel:** Vertrauen aufbauen und zeigen, dass sichere, souveräne IT mit Open Source machbar ist. Leserinnen sollen nach dem Artikel einen konkreten nächsten Schritt kennen.
- **Kein Werbetext.** TUXO wird höchstens im Schlussabschnitt erwähnt; der Call-to-Action unter jedem Artikel kommt automatisch aus dem Layout.

## Sprache und Ton

- Schweizer Hochdeutsch: **immer «ss», nie «ß»**. Anführungszeichen «…».
- Sie-Form, klar, ruhig, freundlich. Kein Alarmismus, keine Angstmacherei.
- Fachbegriffe beim ersten Auftreten kurz erklären.
- Kurze Absätze, aussagekräftige Zwischentitel (`##`), Listen nur, wo sie das Lesen erleichtern.
- Länge: 700–1200 Wörter.

## Themenfelder

Datenschutz (Schweizer DSG), IT-Sicherheit im Alltag (Phishing, Passwörter, Passkeys, Updates, Backups),
digitale Souveränität, Open-Source-Lösungen (Nextcloud, Mailcow, Paperless-ngx, Bitwarden/Vaultwarden,
Authentik, Pocket ID, Odoo), Anbieterwechsel und Migration, Betrieb vor Ort oder im Schweizer Rechenzentrum.

Aktuelle Anlässe (neue Sicherheitslücken mit Relevanz für KMU, Gesetzesänderungen, grössere Releases der genannten
Software) sind willkommen, wenn sie für KMU praktisch relevant sind.

## Themenvorrat

Gibt es keinen aktuellen Anlass, wähle das erste noch nicht behandelte Thema aus dieser Liste (vorher `_posts/` und offene Pull Requests prüfen). Behandelte Themen hier abhaken (`- [x]`) – im selben Pull Request wie der Artikel.

- [ ] Phishing erkennen: Die häufigsten Maschen und wie Sie sich schützen
- [ ] Microsoft 365 oder eigene Cloud? Eine ehrliche Entscheidungshilfe
- [x] Odoo: ERP für KMU – von der Offerte bis zur Rechnung
- [ ] Vor Ort oder im Schweizer Rechenzentrum? Die zwei Betriebsarten im Vergleich
- [ ] Mitarbeitende verlassen die Firma: Die Checkliste für den IT-Austritt
- [ ] Das Datenschutzgesetz (DSG) im KMU-Alltag: Die wichtigsten Pflichten
- [ ] Updates: Warum «später» die teuerste Antwort ist
- [ ] Datenpanne – was jetzt? Erste Schritte und Meldepflichten
- [ ] Der Umzug in die eigene Cloud in 5 Schritten
- [ ] Authentik oder Pocket ID: Welche Anmeldelösung passt?
- [ ] Das Firmen-WLAN richtig absichern
- [ ] Was kostet eine eigene IT wirklich? (ohne konkrete Preise)
- [ ] Termine online buchen mit Nextcloud – ohne Doodle & Co.
- [ ] Unraid als Server für kleine Büros (Hinweis: Unraid selbst ist kein Open Source)

## Themen und Übersicht

- Die Tags steuern die Themenseiten (`/blog/thema/<thema>/`) und die Filter in der Übersicht. Nur Tags aus der Liste verwenden; die Themen sind in `_data/themen.yml` definiert.
- Der Tag an **erster** Stelle ist das Hauptthema: Danach richten sich die «Mehr zum Thema»-Vorschläge unter dem Artikel.
- `grundlagen: true` im Front Matter setzt einen Artikel in den Bereich «Einstieg: Die Grundlagen» (max. 3). **Nicht** selbst setzen – das entscheidet Jorge.

## Regeln

- **Fakten belegen.** Zahlen, Daten, Gesetzesartikel und Versionsangaben nur mit verlässlicher Quelle (Hersteller, Behörden wie NCSC/BACS, EDÖB, admin.ch, seriöse Fachmedien). Quellen am Ende unter `## Quellen` verlinken.
- **Keine Preise** von TUXO oder Mitbewerbern, keine Namen von Mitbewerbern, keine Kundennamen.
- **Keine Rechtsberatung.** Bei rechtlichen Themen auf Fachleute bzw. den EDÖB verweisen.
- **Keine erfundenen Zitate, Fallbeispiele oder Statistiken.** Beispiele als Beispiele kennzeichnen («So kann es aussehen: …»).
- Herstellerneutral formulieren; Open Source wird empfohlen, aber ohne andere Lösungen schlechtzumachen.
- Keine Bilder von Personen; keine fremden Bilder ohne Lizenz.
- Themen nicht wiederholen: vorher `_posts/` durchsehen.

## Technisches Format

Dateiname: `_posts/JJJJ-MM-TT-kurzer-slug.md` (Slug klein, ohne Umlaute: ae/oe/ue).

```markdown
---
title: "Prägnanter Titel (max. ca. 70 Zeichen)"
description: "Ein bis zwei Sätze, die neugierig machen (max. ca. 160 Zeichen) – erscheint in der Übersicht und bei Google."
tags: [Sicherheit, Datenschutz]   # 1–3 Tags aus: Sicherheit, Datenschutz, Souveränität, Open Source, Backup, Passkeys, Migration, E-Mail, Cloud – Hauptthema zuerst
image: /assets/img/posts/<slug>.jpg
image_alt: "Kurze Beschreibung des Titelbilds"
---

Einleitung (2–3 Absätze, ohne Zwischentitel) …

## Zwischentitel
…

<div class="box" markdown="1">
**Hinweis aus der Praxis**

Optionaler hervorgehobener Kasten.
</div>

## Quellen
- [Titel der Quelle](https://…)
```

Der Kasten (`<div class="box" markdown="1">`) und Tabellen sind erlaubt. Keine eigenen Stile, kein JavaScript.

Verweise auf andere Artikel des Blogs so schreiben: `[Linktext](/blog/<slug>/)`.

## Titelbild (Pflicht)

Jeder Artikel bekommt ein Titelbild im TUXO-Stil. Es wird mit dem Skript im Repository erzeugt – keine Fotos oder fremden Bilder:

```bash
python3 tools/cover.py <slug> <motiv> "<Tag>"
# Beispiel: python3 tools/cover.py backup-3-2-1-regel backup "Backup"
python3 tools/cover.py --list   # verfügbare Motive
```

- `<slug>` = Teil des Dateinamens nach dem Datum (ohne `.md`).
- `<motiv>` passend zum Thema wählen: passkey, key, lock, shield, alert, backup, cloud, mail, document, server, home, migrate, users, update, phishing, eye.
- `<Tag>` = wichtigster Tag des Artikels (erscheint klein unten links im Bild).
- Das Bild landet in `assets/img/posts/<slug>.jpg` und wird zusammen mit dem Artikel committet.
- Im Front Matter `image` und `image_alt` eintragen (siehe Vorlage oben).

