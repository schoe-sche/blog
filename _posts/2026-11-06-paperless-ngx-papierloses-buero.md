---
title: "Paperless-ngx: Das papierlose Büro, das Ihnen gehört"
description: "Rechnungen, Verträge, Briefe: Paperless-ngx erkennt den Text, ordnet Dokumente automatisch zu und macht alles in Sekunden auffindbar – auf Ihrem eigenen Server."
tags: [Open Source, Datenschutz]
image: /assets/img/posts/paperless-ngx-papierloses-buero.jpg
image_alt: "Dokument-Symbol auf dunklem Netzwerk-Hintergrund"
---

Bundesordner im Regal, ein Stapel «noch ablegen» auf dem Pult und die ewige Suche nach dem einen Vertrag von 2019: Papier ist in vielen KMU immer noch Alltag. Gleichzeitig kommen immer mehr Dokumente als PDF per E-Mail – und landen irgendwo zwischen Posteingang, Desktop und Netzlaufwerk.

[Paperless-ngx](https://docs.paperless-ngx.com) bringt beides zusammen: Papier wird eingescannt, digitale Dokumente werden automatisch übernommen, und alles landet in einem durchsuchbaren Archiv auf Ihrem eigenen Server.

## Was ist Paperless-ngx?

Paperless-ngx ist eine Open-Source-Dokumentenverwaltung (Lizenz GPL-3.0), die von einer engagierten Community weiterentwickelt wird. Sie läuft auf einem eigenen Server – im Büro oder im Rechenzentrum – und wird über den Browser bedient.

Die wichtigsten Funktionen:

- **Texterkennung (OCR):** Auch reine Scans werden durchsuchbar. Die eingesetzte Texterkennung beherrscht über 100 Sprachen, natürlich auch Deutsch, Französisch und Italienisch.
- **Ordnung ohne Ordner:** Statt in Ordnern abzulegen, versehen Sie Dokumente mit **Tags**, **Korrespondenten** (wer hat es geschickt?) und **Dokumenttypen** (Rechnung, Vertrag, Offerte …).
- **Automatische Zuordnung:** Paperless-ngx lernt aus Ihren bisherigen Zuordnungen und schlägt sie bei neuen Dokumenten selbstständig vor.
- **Viele Formate:** PDFs, Bilder, Textdateien und Office-Dokumente.
- **Archiv und Original:** Jedes Dokument wird als langzeittaugliches PDF/A archiviert, **zusätzlich** bleibt das unveränderte Original erhalten.

## So sieht der Alltag aus

1. Die Post kommt, Sie scannen sie mit einem Dokumentenscanner oder dem Multifunktionsgerät direkt in einen Eingangsordner.
2. Rechnungen per E-Mail lassen sich automatisch aus einem Postfach abholen.
3. Paperless-ngx erkennt den Text, schlägt Korrespondent, Typ und Tags vor und legt das Dokument ab.
4. Wenn Sie etwas suchen, tippen Sie ein Stichwort ein – «Mietvertrag Lager» oder «Rechnung Elektriker 2025» – und haben das Dokument in Sekunden.

Das spart nicht nur Platz im Regal, sondern vor allem Zeit: bei der Suche, bei der Steuererklärung, bei Rückfragen von Kunden oder vom Treuhänder.

## Und die gesetzliche Aufbewahrung?

Für Schweizer Unternehmen gilt: Geschäftsbücher und Buchungsbelege sind **zehn Jahre** aufzubewahren, gerechnet ab dem Ende des Geschäftsjahres (Art. 958f OR). Geschäftsbücher und Buchungsbelege dürfen dabei auch **elektronisch** aufbewahrt werden, sofern sie mit den Geschäftsvorfällen übereinstimmen und jederzeit lesbar gemacht werden können. Die Einzelheiten regelt die Geschäftsbücherverordnung (GeBüV), etwa zur Integrität und Nachvollziehbarkeit der Ablage.

Paperless-ngx kann dafür eine gute technische Grundlage sein – die Software allein macht eine Ablage aber noch nicht gesetzeskonform. Entscheidend sind auch die Abläufe: Wer darf Dokumente löschen? Wie werden Änderungen nachvollzogen? Wo liegen die Backups? Ausnahmen gelten zudem für bestimmte Dokumente wie den Geschäftsbericht, der unterzeichnet aufzubewahren ist.

<div class="box" markdown="1">
**Bevor Sie Papier vernichten**

Klären Sie mit Ihrer Treuhänderin oder Ihrem Treuhänder, welche Dokumente Sie nach dem Scannen entsorgen dürfen und welche im Original aufbewahrt werden müssen. Diese Abklärung ersetzt dieser Artikel nicht.
</div>

## Worauf es im Betrieb ankommt

- **Backups:** Das Archiv enthält Ihre wichtigsten Dokumente über viele Jahre. Tägliche, verschlüsselte Sicherungen mit einer Kopie ausser Haus sind Pflicht.
- **Zugriffsrechte:** Nicht jede Person muss jeden Lohnausweis sehen. Paperless-ngx kennt Benutzer, Gruppen und Berechtigungen pro Dokument.
- **Zentrale Anmeldung:** Paperless-ngx lässt sich an eine Anmeldelösung mit Passkeys anbinden, etwa an [Pocket ID](/blog/pocket-id-anmeldung-mit-passkey/) – so entfällt ein weiteres Passwort.
- **Updates:** wie bei jeder Software regelmässig und mit Backup davor.

## So starten Sie

1. **Klein anfangen:** zuerst die laufende Post und die Eingangsrechnungen.
2. **Ordnung festlegen:** eine Handvoll Dokumenttypen und Tags genügen für den Anfang.
3. **Scanner bereitstellen**, der direkt in den Eingangsordner von Paperless-ngx speichert.
4. **Altbestände nach und nach digitalisieren** – oder bewusst im Papierarchiv lassen, bis die Fristen ablaufen.

Paperless-ngx ist eines dieser Werkzeuge, die man nach wenigen Wochen nicht mehr missen möchte. Und weil es auf Ihrem Server läuft, bleiben Ihre Verträge, Rechnungen und Briefe genau dort, wo sie hingehören: bei Ihnen.

## Quellen

- [Paperless-ngx – Dokumentation](https://docs.paperless-ngx.com)
- [Paperless-ngx auf GitHub (Funktionen, Lizenz)](https://github.com/paperless-ngx/paperless-ngx)
- [Art. 958f OR – Aufbewahrung und Edition (Fedlex)](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de#art_958_f)
- [KMU-Portal des Bundes: Elektronische Aufbewahrung der Geschäftsbücher](https://www.kmu.admin.ch/kmu/de/home/praktisches-wissen/finanzielles/buchhaltung-und-revision/elektronische-aufbewahrung-der-geschaeftsbuecher.html)
