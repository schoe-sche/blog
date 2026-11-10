---
title: "Pocket ID: Eine Anmeldung mit Passkey für alle Firmen-Apps"
description: "Statt für jede Anwendung ein eigenes Passwort: Mit Pocket ID melden sich Ihre Mitarbeitenden einmal per Fingerabdruck an – und haben Zugriff auf alle freigegebenen Dienste."
tags: [Passkeys, Sicherheit, Open Source]
image: /assets/img/posts/pocket-id-anmeldung-mit-passkey.jpg
image_alt: "Symbol eines Schlüssels auf dunklem Netzwerk-Hintergrund"
---

Cloud, Passwortmanager, Dokumentenablage, Buchhaltung, Zeiterfassung: In einem modernen KMU kommen schnell zehn oder mehr Anwendungen zusammen. Jede hat ihr eigenes Konto, ihr eigenes Passwort und ihre eigenen Regeln. Das ist mühsam für die Mitarbeitenden – und ein Albtraum, wenn jemand die Firma verlässt und überall gesperrt werden muss.

Grosse Unternehmen lösen das mit einer **zentralen Anmeldung**, auch «Single Sign-on» genannt. Man meldet sich einmal an, und alle angebundenen Anwendungen vertrauen dieser Anmeldung. Mit [Pocket ID](https://pocket-id.org) gibt es dafür eine Lösung, die auch für kleine Betriebe überschaubar bleibt.

## Was ist Pocket ID?

Pocket ID ist eine Open-Source-Anmeldelösung (Lizenz BSD-2-Clause), die Sie auf Ihrem eigenen Server betreiben. Das Besondere: Sie funktioniert **ausschliesslich mit Passkeys**. Es gibt kein Passwort, das gestohlen, erraten oder in einer Phishing-Mail abgefragt werden könnte. Wie Passkeys funktionieren, erklärt der Artikel [Passkeys statt Passwörter](/blog/passkeys-statt-passwoerter/).

Technisch ist Pocket ID ein sogenannter OIDC-Anbieter. **OIDC** (OpenID Connect) ist ein offener Standard, den viele Anwendungen verstehen – darunter Nextcloud, Paperless-ngx, zahlreiche Webanwendungen und auch viele kommerzielle Dienste. Die Anwendung fragt nicht mehr selbst nach einem Passwort, sondern leitet zur Anmeldung an Pocket ID weiter.

Die Entwickler positionieren Pocket ID bewusst als **einfache** Lösung, im Gegensatz zu umfangreichen Identitätsplattformen. Für ein KMU ist das ein Vorteil: weniger Einstellungen, weniger Fehlerquellen.

## So sieht die Anmeldung im Alltag aus

1. Die Mitarbeiterin öffnet zum Beispiel die Firmen-Cloud.
2. Statt eines Passwortfelds erscheint «Anmelden mit Pocket ID».
3. Sie bestätigt mit Fingerabdruck, Gesichtserkennung oder Geräte-PIN.
4. Fertig – und für die nächsten Anwendungen ist sie bereits angemeldet.

Das ist nicht nur sicherer, sondern auch schneller als jede Passworteingabe.

## Wer darf was? Gruppen statt Einzelkonten

In Pocket ID legen Sie Benutzer und Gruppen an, zum Beispiel «Geschäftsleitung», «Buchhaltung» oder «Alle». Für jede angebundene Anwendung bestimmen Sie, welche Gruppen sich anmelden dürfen. Neue Anwendungen sind dabei zunächst für niemanden freigegeben – ein sicherer Standard.

Verlässt jemand die Firma, deaktivieren Sie **ein** Konto in Pocket ID. Bereits angemeldete Anwendungen verlieren den Zugriff spätestens bei der nächsten Erneuerung der Anmeldung. Kein Abarbeiten von zwanzig einzelnen Zugängen mehr.

Für grössere Umgebungen kann Pocket ID laut Dokumentation Benutzer auch aus einem bestehenden Verzeichnis (LDAP) übernehmen und an Anwendungen weiterreichen (SCIM).

## Beispiel: Nextcloud mit Pocket ID

Die Anbindung an [Nextcloud](/blog/nextcloud-eigene-cloud/) ist ein typischer Einstieg. In Nextcloud wird dafür die offizielle App «OpenID Connect user backend» (`user_oidc`) installiert, in Pocket ID ein passender Eintrag angelegt. Auf Wunsch übernimmt Nextcloud sogar die Gruppen aus Pocket ID, sodass Freigaben automatisch zur Teamstruktur passen.

<div class="box" markdown="1">
**Hinweis aus der Praxis**

Nicht jede Smartphone-App unterstützt die Anmeldung mit Passkey – je nach App und Betriebssystem bricht der Anmeldevorgang ab. Für solche Apps wird in der jeweiligen Anwendung ein **App-Passwort** erstellt, das nur für dieses eine Gerät gilt. Das ist sicher und lässt sich jederzeit widerrufen.
</div>

## Gut geplant ist halb gewonnen

Eine zentrale Anmeldung ist ein zentraler Baustein – entsprechend sorgfältig sollte sie eingeführt werden:

- **Mehrere Passkeys pro Person:** etwa auf Smartphone und Laptop, damit ein verlorenes Gerät niemanden aussperrt.
- **Notfallzugang für Administratoren:** Wie kommt man an die Verwaltung, wenn etwas schiefgeht? Das gehört dokumentiert und getestet.
- **Backups:** Pocket ID enthält alle Konten und Freigaben. Die Datenbank gehört ins tägliche, getestete Backup.
- **Schrittweise anbinden:** mit einer Anwendung beginnen, Erfahrungen sammeln, dann die nächste.

## Für wen lohnt sich das?

Schon ab drei, vier Mitarbeitenden und einer Handvoll Anwendungen spart eine zentrale Anmeldung spürbar Zeit – beim Einrichten neuer Mitarbeitender, beim Austritt und im Alltag. Vor allem aber schliesst sie das häufigste Einfallstor überhaupt: gestohlene Passwörter.

Wer schon eigene Systeme wie Nextcloud oder einen [Passwortmanager](/blog/vaultwarden-passwortmanager/) betreibt, macht mit Pocket ID den logischen nächsten Schritt.

## Quellen

- [Pocket ID – offizielle Website und Dokumentation](https://pocket-id.org)
- [Pocket ID: Anbindung an Nextcloud](https://pocket-id.org/docs/client-examples/nextcloud)
- [Pocket ID: Zugriff über Benutzergruppen steuern](https://pocket-id.org/docs/configuration/allowed-groups)
- [Pocket ID auf GitHub (Lizenz, Beschreibung)](https://github.com/pocket-id/pocket-id)
