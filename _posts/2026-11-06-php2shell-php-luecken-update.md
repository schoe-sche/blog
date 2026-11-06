---
title: "PHP2Shell: Warum Ihre Website jetzt ein PHP-Update braucht"
description: "Zwei kritische Lücken in PHP betreffen fast jede Website und viele Firmen-Apps. Was das BACS empfiehlt und welche Fragen Sie Ihrem Hoster stellen sollten."
tags: [Sicherheit, Open Source]
image: /assets/img/posts/php2shell-php-luecken-update.jpg
image_alt: "Update-Symbol mit Pfeil und Häkchen"
---

PHP ist eine Programmiersprache, die Sie vermutlich nie bewusst gesehen haben – und die trotzdem täglich für Sie arbeitet. Viele Websites, Webshops und webbasierte Firmen-Anwendungen laufen mit PHP. Auch Nextcloud, die verbreitete Open-Source-Cloud für Dateien und Kalender, ist in PHP geschrieben.

Am 21. Oktober 2026 hat das PHP-Projekt zwei kritische Sicherheitslücken geschlossen, die unter dem Namen «PHP2Shell» bekannt wurden. Am gleichen Tag hat das Bundesamt für Cybersicherheit (BACS) eine Warnung veröffentlicht und dazu aufgerufen, die Updates ohne Verzögerung einzuspielen.

Dieser Artikel erklärt ohne Fachchinesisch, worum es geht, wer handeln muss und welche Fragen Sie Ihrem Hoster oder Ihrer IT-Betreuung stellen sollten.

## Was ist passiert?

Die beiden Lücken tragen die Kennungen CVE-2026-109618 und CVE-2026-109619. Das PHP-Projekt stuft beide mit 9,2 von 10 Punkten als kritisch ein. Über sie können Angreifer ohne Anmeldung eigenen Programmcode auf einem Server ausführen – also im Grunde die Kontrolle über die Website oder Anwendung übernehmen.

Besonders heikel: Laut PHP-Projekt wurde ein funktionierender Angriff vorgeführt, bei dem eine einzige Anfrage genügt – noch bevor die eigentliche Anwendung überhaupt zum Zug kommt. Es spielt also keine Rolle, wie gut Ihre Website selbst programmiert ist. Entscheidend ist allein, ob die PHP-Version darunter aktualisiert wurde.

Laut Help Net Security hat ein grosser Cloud-Anbieter bereits am 17. Oktober, vier Tage vor der Veröffentlichung, einen Angriffsversuch auf einem seiner Lockvogel-Systeme beobachtet.

## Wer ist betroffen?

Laut PHP-Projekt sind alle PHP-Installationen gefährdet, die Webanfragen beantworten – unabhängig davon, wie PHP auf dem Server eingebunden ist. Das betrifft typischerweise:

- Websites auf Basis verbreiteter Content-Management-Systeme
- Webshops
- selbst betriebene Anwendungen wie Nextcloud
- Geräte im Büro- oder Heimnetz mit Weboberfläche, die intern PHP verwenden

Das BACS weist ausdrücklich darauf hin, dass PHP oft auch in eingebetteten Komponenten und in Anwendungen steckt, die von Dritten betrieben werden.

## Welche Versionen sind sicher?

Die Korrekturen stecken in diesen Versionen:

| PHP-Zweig | Sichere Version ab |
|---|---|
| 8.5 | 8.5.12 |
| 8.4 | 8.4.27 |
| 8.3 | 8.3.36 |
| 8.2 | 8.2.35 |

Zwei wichtige Einschränkungen:

- **Versionsnummer allein sagt nicht alles.** Linux-Distributionen bauen Korrekturen oft in ihre bestehenden Pakete ein, ohne die Versionsnummer zu ändern. Eine scheinbar ältere Nummer kann also sicher sein – und umgekehrt. Massgebend ist die Sicherheitsinformation des jeweiligen Anbieters.
- **Alte PHP-Versionen.** PHP 8.1 und älter erhalten vom PHP-Projekt keine regulären Updates mehr. Und auch PHP 8.2 erreicht am 31. Dezember 2026 das Ende seiner Unterstützung. Wer noch auf einer dieser Versionen ist, sollte den Umstieg jetzt planen. Für Nextcloud empfiehlt der Hersteller aktuell PHP 8.5.

## Was das BACS empfiehlt

Die Warnung des BACS richtet sich an alle, die Systeme mit PHP verantworten. Zusammengefasst:

1. **Inventar erstellen:** Wo läuft bei Ihnen PHP, in welcher Version, ist es aus dem Internet erreichbar, und wer ist dafür zuständig?
2. **Aktualisieren:** Die korrigierte Version oder das gepatchte Paket des Anbieters einspielen. Bei gehosteten Websites oder Produkten beim Hoster bzw. Hersteller nachfragen.
3. **Neu starten:** PHP-Dienste und länger laufende Prozesse neu starten; Container wo nötig neu erstellen.
4. **Überprüfen:** Kontrollieren, dass tatsächlich die korrigierte Version läuft.
5. **Auf Spuren prüfen:** Ein Update entfernt keinen bereits erfolgten Einbruch. Protokolle und Systeme auf ungewöhnliche Anfragen, Abstürze, veränderte Dateien und unbekannte Prozesse prüfen.

Kann nicht sofort aktualisiert werden, empfiehlt das BACS, den Zugriff einzuschränken oder kritische Systeme vorübergehend vom Internet zu nehmen. Eine Web Application Firewall allein genügt laut BACS nicht.

<div class="box" markdown="1">
**Drei Fragen an Ihren Hoster oder Ihre IT-Betreuung**

1. Welche PHP-Version läuft auf unserer Website und unseren Anwendungen?
2. Sind die Korrekturen für CVE-2026-109618 und CVE-2026-109619 eingespielt – und seit wann?
3. Wurden die Systeme nach Spuren eines Angriffs überprüft?
</div>

## Was der Fall zeigt

PHP ist Open Source, und genau deshalb konnten Distributionen und Anbieter die Korrekturen bereits vor der öffentlichen Bekanntgabe vorbereiten. Das ist ein Vorteil eines offenen, gut organisierten Projekts. Es zeigt aber auch: Software, die im Hintergrund arbeitet, braucht genauso Pflege wie die sichtbare Anwendung darüber.

Bei einer gehosteten Website kümmert sich in der Regel der Hoster um PHP. Darauf verlassen sollten Sie sich trotzdem nicht blind: Eine kurze Rückfrage schafft Klarheit und kostet nichts. Wer seine Website oder Nextcloud selbst betreibt, sollte deshalb auch die «Unterbauten» – Betriebssystem, PHP, Datenbank – im Wartungsplan haben. Wenn Sie nicht sicher sind, wie das bei Ihnen geregelt ist, unterstützt Sie TUXO gerne bei der Bestandsaufnahme.

## Quellen

- [BACS: Kritische Schwachstellen in PHP – Sicherheitsupdates sofort einspielen (21.10.2026)](https://www.bacs.admin.ch/de/warnung-php-de)
- [PHP: News Archive 2026 – Sicherheitsreleases vom 21.10.2026](https://www.php.net/archive/2026.php)
- [Help Net Security: PHP2Shell – Critical PHP vulnerabilities patched, update now! (21.10.2026)](https://www.helpnetsecurity.com/2026/10/21/php2shell-php-vulnerabilities-patched-cve-2026-109618-cve-2026-109619/)
- [Nextcloud Administration Manual: System requirements](https://docs.nextcloud.com/server/stable/admin_manual/installation/system_requirements.html)
