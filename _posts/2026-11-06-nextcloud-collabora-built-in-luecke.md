---
title: "Nextcloud: Kritische Lücke im eingebauten Office-Server – jetzt prüfen"
description: "Über die App «Collabora Online – Built-in CODE Server» wurden Nextcloud-Server angegriffen. So prüfen Sie rasch, ob Ihre Installation betroffen ist."
tags: [Sicherheit, Open Source, Cloud]
image: /assets/img/posts/nextcloud-collabora-built-in-luecke.jpg
image_alt: "Warnsymbol auf dunklem Netzwerk-Hintergrund"
---

Nextcloud ist für viele KMU der zentrale Ort für Dateien, Kalender und Kontakte. Wer Dokumente direkt im Browser bearbeiten möchte, aktiviert dafür oft eine bequeme Zusatz-App: den «Collabora Online – Built-in CODE Server». In genau dieser App wurde eine kritische Sicherheitslücke gefunden – und sie wurde bereits aktiv ausgenutzt, bevor sie offiziell bekannt war.

Seit dem 23. Oktober 2026 führt die US-Cybersicherheitsbehörde CISA die Lücke in ihrem Katalog der aktiv ausgenutzten Schwachstellen. Das ist ein deutliches Signal: Es handelt sich nicht um ein theoretisches Risiko, sondern um etwas, das Angreifer bereits in der Praxis tun.

Die gute Nachricht vorweg: Ein Update ist seit September verfügbar, und die Prüfung ist schnell erledigt. In diesem Artikel erfahren Sie, wer betroffen ist, was Sie konkret tun sollten und was der Fall über den Betrieb einer eigenen Cloud lehrt.

## Was ist passiert?

Collabora Online ist eine Office-Software, mit der Sie Word-, Excel- und PowerPoint-Dateien direkt in Nextcloud öffnen und bearbeiten können. Normalerweise läuft sie als eigener Dienst neben Nextcloud. Für kleinere Installationen gibt es zusätzlich die App «Built-in CODE Server» (technischer Name: `richdocumentscode`), die den Office-Server gleich in Nextcloud mitliefert – ohne separaten Server.

In dieser App steckte ein Fehler in der Datei `proxy.php`. Über eine präparierte Webadresse konnten Angreifer **ohne Anmeldung** Befehle auf dem Server ausführen, und zwar mit den Rechten des Webservers. Fachleute nennen das «Command Injection». Die Lücke trägt die Kennung CVE-2026-110447 und ist mit 9,2 von 10 Punkten als kritisch eingestuft.

Eine Einschränkung gibt es: Der Angriff funktioniert nur, solange der eingebaute Office-Server gerade nicht läuft – etwa nach einem Neustart, während eines Updates oder nach einem Absturz. Solche Momente kommen in der Praxis aber regelmässig vor.

## Der zeitliche Ablauf

- **9. September 2026:** Die Korrektur wird öffentlich im Quellcode hinterlegt.
- **10. September:** Erste beobachtete Angriffe.
- **11. September:** Die korrigierte Version 26.4.303 erscheint.
- **3. Oktober:** Warnung im Nextcloud-Community-Forum, sofort zu aktualisieren.
- **14. Oktober:** Offizielle Sicherheitsmeldung von Collabora und Veröffentlichung der CVE-Kennung.
- **23. Oktober:** Aufnahme in den CISA-Katalog der aktiv ausgenutzten Schwachstellen.

Auffällig ist der Abstand: Zwischen Korrektur und offizieller Meldung lagen rund fünf Wochen. Wer nur auf Sicherheitsmeldungen gewartet hat, war in dieser Zeit ungeschützt.

## Was die Angreifer gemacht haben

Laut Berichten von Administratoren haben die Angreifer kleine Hintertüren hinterlegt, sogenannte Webshells. Das sind winzige PHP-Dateien, über die man später jederzeit wieder Befehle auf dem Server ausführen kann. Auf mindestens einem Server suchten die Angreifer anschliessend gezielt nach Passwort-Datenbanken, Dateien von Passwortmanagern und Krypto-Wallets.

Ob dabei tatsächlich Daten abgeflossen sind, ist nicht belegt. Fachleute empfehlen trotzdem, alles, was der Webserver lesen konnte, als möglicherweise offengelegt zu betrachten, falls eine solche Hintertür gefunden wird.

## Bin ich betroffen?

Betroffen ist nur, wer die App «Collabora Online – Built-in CODE Server» in einer Version **vor 26.4.303** installiert hat. Laut Collabora nicht betroffen sind Installationen mit einem eigenständigen Collabora-Server sowie Installationen, die nur die App «Nextcloud Office» (`richdocuments`) ohne den eingebauten Server verwenden.

Sie können das in Nextcloud selbst nachsehen: Als Administrator öffnen Sie oben rechts das Menü, wählen «Apps» und suchen nach «Built-in CODE Server». Dort sehen Sie, ob die App installiert ist und welche Version läuft.

<div class="box" markdown="1">
**Wichtig: Deaktivieren reicht nicht**

Collabora weist ausdrücklich darauf hin, dass das blosse Deaktivieren der App nicht schützt – die verwundbare Datei bleibt erreichbar. Aktualisieren Sie die App oder entfernen Sie sie vollständig.
</div>

## Was Sie jetzt tun sollten

1. **App aktualisieren** auf Version 26.4.303 oder neuer. Diese Versionen setzen Nextcloud 30 oder neuer voraus.
2. **Ältere Nextcloud-Versionen:** Läuft bei Ihnen noch Nextcloud 29 oder älter, erhalten Sie keine Sicherheitsupdates mehr. Aktualisieren Sie Nextcloud oder entfernen Sie die App.
3. **Spuren prüfen.** Ein Update schliesst die Lücke, entfernt aber keine bereits hinterlegte Hintertür. Lassen Sie im App-Verzeichnis nach unbekannten PHP-Dateien suchen (die bekannten Beispiele beginnen mit `shx` oder `shrf`) und die Zugriffsprotokolle des Webservers ab dem 10. September auf auffällige Anfragen an `proxy.php` prüfen. Auch die Integritätsprüfung von Nextcloud für diese App gibt Hinweise.
4. **Im Verdachtsfall:** Wird etwas gefunden, behandeln Sie den Server als kompromittiert. Ändern Sie Passwörter und Zugangsschlüssel, die auf dem Server gespeichert waren, und ziehen Sie eine Fachperson bei.

Wenn Sie Nextcloud nicht selbst betreuen, fragen Sie am besten direkt bei der Person oder Firma nach, die Ihren Server betreibt. Die Frage «Ist bei uns der Built-in CODE Server installiert, und in welcher Version?» ist in wenigen Minuten beantwortet.

## Was der Fall lehrt

Dieser Vorfall ist kein Argument gegen Nextcloud oder Open Source. Der Fehler wurde gefunden, öffentlich korrigiert und ist transparent dokumentiert – genau so, wie es sein soll. Er zeigt aber drei Dinge, die für jede eigene Cloud gelten:

- **Zusatz-Apps sind Teil der Angriffsfläche.** Es genügt nicht, nur Nextcloud selbst aktuell zu halten. Jede installierte App braucht ebenfalls Updates – und Apps, die niemand nutzt, sollten entfernt werden.
- **Updates nicht aufschieben.** Die Korrektur war Wochen vor der offiziellen Meldung verfügbar. Wer Updates regelmässig und zeitnah einspielt, war früh geschützt.
- **Bequem ist nicht immer robust.** Der eingebaute Office-Server ist praktisch für den Einstieg. Für den produktiven Betrieb ist ein eigenständiger, sauber getrennter Office-Server oft die solidere Wahl.

## Die Alternative: Euro-Office

Wer den eingebauten Office-Server entfernt, möchte Dokumente trotzdem im Browser bearbeiten. Neben einem eigenständigen Collabora-Server gibt es dafür seit diesem Jahr eine weitere Möglichkeit: **Euro-Office**. Die Open-Source-Office-Suite wurde am 9. Juni 2026 lanciert und ist seit Nextcloud Hub 26 Spring als Option in Nextcloud Office verfügbar. Entwickelt wird sie von einem europäischen Bündnis, zu dem unter anderem Nextcloud, IONOS und Open-Xchange gehören.

Euro-Office ist auf die Microsoft-Formate DOCX, XLSX und PPTX ausgerichtet, kann aber auch OpenDocument-Dateien öffnen. Für Teams, die viel mit Word- und Excel-Dateien von Kunden oder Lieferanten arbeiten, ist das ein praktischer Vorteil. Auch PDF-Dateien lassen sich direkt bearbeiten.

Für neue Installationen empfehlen wir bei TUXO Euro-Office. Wichtig zu wissen: Auch Euro-Office braucht einen eigenen Dokumentenserver, der neben Nextcloud läuft, und die Integration setzt Nextcloud 34 oder neuer voraus. Das ist etwas mehr Aufwand als eine Ein-Klick-App, trennt aber den Office-Dienst sauber von Nextcloud – genau die Trennung, die im vorliegenden Fall gefehlt hat.

Eine eigene Cloud bringt Ihnen Kontrolle über Ihre Daten. Diese Kontrolle bedeutet aber auch Verantwortung für Pflege und Überwachung. Wenn Sie unsicher sind, ob Ihre Nextcloud-Installation betroffen ist oder wie regelmässige Updates bei Ihnen organisiert sind, unterstützen wir Sie bei TUXO gerne bei der Prüfung.

## Quellen

- [BleepingComputer: Hackers exploit Collabora RCE flaw to backdoor Nextcloud servers (15.10.2026)](https://www.bleepingcomputer.com/news/security/hackers-exploit-collabora-rce-flaw-to-backdoor-nextcloud-servers/)
- [The Hacker News: Hackers Backdoor Nextcloud Servers Through Critical Flaw in Collabora's Built-in CODE App (14.10.2026)](https://thehackernews.com/2026/10/hackers-backdoor-nextcloud-servers.html)
- [CISA: CISA Adds One Known Exploited Vulnerability to Catalog (23.10.2026)](https://content.govdelivery.com/accounts/USDHSCISA/bulletins/4304abd)
- [Secure.com: CVE-2026-110447 – Zeitablauf und Hinweise zur Spurensuche (24.10.2026)](https://www.secure.com/news/collabora-nextcloud-cve-2026-110447-exploited)
- [Windows-FAQ: Nextcloud-Sicherheitslücke CVE-2026-110447 (24.10.2026)](https://www.windows-faq.de/2026/10/24/nextcloud-sicherheitsluecke-cve-2026-110447/)
- [Nextcloud: Nextcloud Office powered by Euro-Office](https://nextcloud.com/office/)
- [Nextcloud: Hub 26 Summer – Euro-Office kommt auf den Desktop (16.09.2026)](https://nextcloud.com/blog/press_releases/hub-26-summer/)
- [Euro-Office-Dokumentation: Integration in Nextcloud](https://euro-office.github.io/documentation/integration/nextcloud/)
