---
title: "Eigener Mailserver mit Mailcow: Was KMU wissen sollten"
description: "Mailcow macht einen eigenen Mailserver so einfach wie nie. Trotzdem ist E-Mail die anspruchsvollste Disziplin im Eigenbetrieb. Ein ehrlicher Überblick."
tags: [E-Mail, Open Source, Souveränität]
image: /assets/img/posts/mailcow-eigener-mailserver.jpg
image_alt: "Briefumschlag-Symbol auf dunklem Netzwerk-Hintergrund"
---

E-Mail ist das Rückgrat der Geschäftskommunikation. Offerten, Rechnungen, Verträge, vertrauliche Absprachen – alles läuft darüber. Umso erstaunlicher, wie selten sich ein KMU fragt, **wo** diese Mails eigentlich liegen und wer darauf Zugriff hat.

Ein eigener Mailserver beantwortet diese Frage eindeutig. Mit [Mailcow](https://mailcow.email) ist er heute deutlich einfacher aufzusetzen als früher. Trotzdem gilt: E-Mail ist die anspruchsvollste Disziplin im Eigenbetrieb. Dieser Artikel zeigt beide Seiten.

## Was ist Mailcow?

Mailcow ist eine Open-Source-Komplettlösung für E-Mail (Lizenz GPL-3.0), die von der The Infrastructure Company GmbH in Deutschland gepflegt wird. Sie bündelt bewährte Bausteine, die einzeln seit vielen Jahren im Einsatz sind:

- **Postfix** für den Versand und Empfang von E-Mails,
- **Dovecot** für die Postfächer,
- **Rspamd** als Spam- und Virenfilter,
- **SOGo** als Webmail mit Kalender und Adressbuch,
- dazu eine Verwaltungsoberfläche für Domains, Postfächer, Weiterleitungen und Aliase.

Alles läuft in Containern und wird gemeinsam aktualisiert. Für Outlook, Apple Mail, Thunderbird und Smartphones richten Sie die Postfächer wie gewohnt ein.

## Die Vorteile

- **Volle Kontrolle:** Sie wissen, auf welchem Server Ihre Mails liegen, und niemand sonst wertet sie aus.
- **Beliebig viele Postfächer und Aliase:** keine Kosten pro Benutzer, Adressen wie `info@`, `offerte@` oder `rechnung@` sind schnell angelegt.
- **Saubere Spamfilterung:** Rspamd lernt mit und lässt sich fein einstellen.
- **Offene Standards:** Ein späterer Umzug ist ohne Datenverlust möglich.

## Die ehrliche Kehrseite

Bei E-Mail genügt es nicht, dass der Server läuft. Andere Mailserver müssen Ihrem Server auch **vertrauen** – sonst landen Ihre Mails im Spam oder werden abgelehnt. Dafür braucht es:

1. **Eine saubere, feste IP-Adresse.** Private Internetanschlüsse sind für den Mailversand praktisch ungeeignet: Ihre Adressbereiche stehen bei vielen Empfängern von vornherein auf Sperrlisten. Ein Mailserver gehört deshalb in ein Rechenzentrum.
2. **Einen passenden Reverse-DNS-Eintrag (PTR).** Die IP-Adresse muss auf den Namen des Mailservers zurückverweisen.
3. **SPF, DKIM und DMARC.** Diese DNS-Einträge belegen, dass Ihr Server im Namen Ihrer Domain senden darf, und schützen gleichzeitig davor, dass Betrüger Ihre Absenderadresse missbrauchen. Mailcow zeigt die nötigen Einträge in der Verwaltung an.
4. **Laufende Überwachung.** Steht der Server auf einer Sperrliste? Laufen die Zertifikate ab? Ist die Festplatte voll? Das muss jemand im Blick behalten.
5. **Verlässliche Backups.** Ein verlorenes Postfach ist oft unersetzlich. Wie eine solide Sicherung aussieht, zeigt der Artikel zur [3-2-1-Regel](/blog/backup-3-2-1-regel/).

<div class="box" markdown="1">
**Hinweis aus der Praxis**

Nutzen Sie für automatische Mails aus anderen Systemen – etwa Ihrer Cloud oder Ihrem ERP – ein eigenes Postfach wie `cloud@` oder `system@`. So bleiben die Zugangsdaten getrennt, und Antworten lassen sich per Weiterleitung gezielt an das richtige Postfach steuern.
</div>

## Lohnt sich das für mein KMU?

Ein eigener Mailserver passt gut, wenn

- Vertraulichkeit für Ihr Geschäft zentral ist,
- Sie viele Postfächer oder Domains verwalten,
- Sie ohnehin eigene Systeme betreiben und jemand den Betrieb verantwortet.

Weniger sinnvoll ist er, wenn niemand Zeit für Überwachung und Pflege hat. Dann ist ein seriöser E-Mail-Anbieter mit Rechenzentrum in der Schweiz oft die bessere Wahl – und immer noch deutlich souveräner als ein grosser US-Konzern.

Die wichtigste Frage ist also nicht «Können wir das?», sondern «Wer betreut das zuverlässig?». Mit einem klaren Betriebskonzept und einem Server im Rechenzentrum ist Mailcow eine solide Grundlage für E-Mail, die Ihnen gehört.

## So gehen Sie vor

1. **Bestandesaufnahme:** Domains, Postfächer, Weiterleitungen, Datenmenge.
2. **Server im Rechenzentrum** mit fester IP-Adresse und PTR-Eintrag.
3. **Mailcow installieren**, DNS-Einträge setzen, Zustellbarkeit testen.
4. **Postfächer migrieren** – idealerweise an einem ruhigen Tag mit kurzem Parallelbetrieb.
5. **Überwachung und Backup einrichten**, bevor der Alltagsbetrieb beginnt.

## Quellen

- [Mailcow – offizielle Website](https://mailcow.email)
- [mailcow-dockerized auf GitHub (Lizenz, Betreiber)](https://github.com/mailcow/mailcow-dockerized/)
- [Mailcow – Dokumentation](https://docs.mailcow.email)
