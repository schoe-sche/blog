---
title: "Nextcloud: Die eigene Cloud für Dateien, Kalender und Videocalls"
description: "Nextcloud bündelt Dateiablage, Kalender, Kontakte und Videokonferenzen auf einem Server, den Sie kontrollieren. Was das System kann – und worauf es im Betrieb ankommt."
tags: [Cloud, Open Source, Souveränität]
image: /assets/img/posts/nextcloud-eigene-cloud.jpg
image_alt: "Cloud-Symbol mit Pfeil auf dunklem Netzwerk-Hintergrund"
---

Dateien im Browser öffnen, Ordner mit Kunden teilen, Termine im Team abstimmen, kurz per Video telefonieren: Für viele KMU erledigen das heute Microsoft 365 oder Google Workspace. Das funktioniert gut – nur liegen dabei sämtliche Firmendaten bei einem grossen US-Anbieter.

[Nextcloud](https://nextcloud.com) ist die bekannteste Open-Source-Alternative. Die Software wird von der Nextcloud GmbH in Stuttgart entwickelt und von einer grossen Community mitgetragen. Der Unterschied zu den grossen Plattformen ist grundlegend: Nextcloud läuft auf einem Server, den **Sie** bestimmen – bei Ihnen im Büro oder in einem Schweizer Rechenzentrum.

## Was Nextcloud kann

Nextcloud ist kein einzelnes Programm, sondern eine Plattform mit vielen Bausteinen. Für ein KMU stehen meist diese im Vordergrund:

- **Dateien:** Ablage, Synchronisation auf Computer und Smartphone, Versionsverlauf und Papierkorb. Ordner lassen sich intern oder per Link nach aussen teilen – auf Wunsch mit Passwort und Ablaufdatum.
- **Kalender und Kontakte:** gemeinsame Kalender, Ressourcen wie Sitzungszimmer und Kontaktbücher, die sich mit iPhone, Android und Outlook abgleichen lassen.
- **Talk:** Chat sowie Audio- und Videocalls, auch mit externen Gästen, die nur einen Browser brauchen.
- **Office im Browser:** Mit einer angebundenen Office-Suite bearbeiten Sie Word-, Excel- und PowerPoint-Dateien direkt in der Cloud, auch gemeinsam.
- **Terminbuchung:** Kunden buchen freie Zeitfenster direkt in Ihrem Kalender – inklusive Link zum Videocall.

Dazu kommen Hunderte von Erweiterungen, etwa für Formulare, Aufgaben oder Notizen. Hier gilt: weniger ist mehr. Jede zusätzliche App ist ein weiterer Baustein, der gepflegt werden will.

## Was «eigene Cloud» konkret bedeutet

Der wichtigste Vorteil ist nicht eine einzelne Funktion, sondern die **Kontrolle**:

- **Sie wissen, wo die Daten liegen.** Das erleichtert den Nachweis gegenüber dem Schweizer Datenschutzgesetz und gegenüber Kunden, die danach fragen.
- **Keine Abhängigkeit von Lizenzmodellen.** Die Software ist Open Source. Kosten entstehen für Server, Betrieb und auf Wunsch für einen Supportvertrag – nicht pro Funktion, die ein Hersteller freischaltet.
- **Offene Formate.** Ihre Dateien bleiben normale Dateien. Ein Umzug auf einen anderen Server oder zu einem anderen Betreuer ist jederzeit möglich.
- **Eine Anmeldung für alles.** Nextcloud lässt sich an eine zentrale Anmeldelösung mit Passkeys anbinden, etwa [Pocket ID](https://pocket-id.org) oder Authentik.

Für besonders heikle Ordner bietet Nextcloud zusätzlich eine **Ende-zu-Ende-Verschlüsselung**: Die Daten werden schon auf dem Gerät verschlüsselt, sodass selbst der Server sie nicht lesen kann. Das ist eine Option für einzelne Ordner, nicht der Normalfall – denn verschlüsselte Ordner lassen sich zum Beispiel nicht im Browser bearbeiten.

## Worauf es im Betrieb ankommt

Eine eigene Cloud ist nur so gut wie ihr Betrieb. Vier Punkte entscheiden darüber, ob Nextcloud zuverlässig und sicher läuft:

1. **Updates.** Nextcloud erscheint regelmässig in neuen Versionen, dazu kommen Sicherheitsupdates für Server und Apps. Diese sollten zeitnah eingespielt werden – geplant und mit Backup davor.
2. **Backups.** Täglich, verschlüsselt, mindestens eine Kopie ausser Haus – und regelmässig getestet. Die Installationsvariante [Nextcloud All-in-One](https://github.com/nextcloud/all-in-one) bringt dafür bereits eine integrierte Sicherung mit.
3. **Wenige, bewusst gewählte Apps.** Jede Erweiterung vergrössert die Angriffsfläche. Installieren Sie nur, was Sie wirklich nutzen, und entfernen Sie, was nicht mehr gebraucht wird.
4. **Überwachung.** Die Verwaltungsoberfläche zeigt Warnungen und Sicherheitshinweise an. Jemand sollte sie regelmässig lesen.

<div class="box" markdown="1">
**Hinweis aus der Praxis**

Bei der Anmeldung mit Passkeys über eine zentrale Anmeldelösung kommt nicht jede Smartphone-App gleich gut zurecht. Für solche Fälle erstellt man in Nextcloud ein **App-Passwort**, das nur für ein Gerät gilt und sich jederzeit einzeln widerrufen lässt. Am bequemsten geht das per QR-Code.
</div>

## Für wen eignet sich Nextcloud?

Nextcloud passt besonders gut, wenn

- Sie sensible Daten verwalten, etwa als Treuhänder, Arztpraxis, Anwaltskanzlei oder Ingenieurbüro,
- Sie Dateien regelmässig mit Kunden oder Partnern austauschen,
- Sie Lizenzkosten pro Benutzer satt haben,
- oder Sie schlicht wissen möchten, wo Ihre Daten liegen.

Weniger geeignet ist sie, wenn Ihr Betrieb tief in Spezialsoftware eines grossen Anbieters steckt, die nur mit dessen Cloud funktioniert. Dann lohnt sich ein schrittweiser Umstieg, oft beginnend mit der Dateiablage.

## So gelingt der Einstieg

1. **Ausgangslage klären:** Welche Daten liegen heute wo? Wer arbeitet mit wem zusammen?
2. **Standort wählen:** eigener Server im Büro oder Schweizer Rechenzentrum – oft ergänzt durch ein Backup am jeweils anderen Ort.
3. **Klein anfangen:** zuerst Dateien und Kalender, danach Talk und Office.
4. **Mitarbeitende mitnehmen:** eine kurze Einführung spart viele Rückfragen.

Nextcloud ist kein Allheilmittel, aber für viele KMU der naheliegendste Schritt zu einer IT, die ihnen selbst gehört.

## Quellen

- [Nextcloud – offizielle Website](https://nextcloud.com)
- [Nextcloud All-in-One auf GitHub](https://github.com/nextcloud/all-in-one)
- [Nextcloud 13: Einführung von Ende-zu-Ende-Verschlüsselung und Talk (Medienmitteilung, 2018)](https://nextcloud.com/blog/press_releases/pr20180206/)
- [Pocket ID – Anbindung an Nextcloud (Dokumentation)](https://pocket-id.org/docs/client-examples/nextcloud)
