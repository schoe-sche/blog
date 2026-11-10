---
title: "Vaultwarden: Ein Passwortmanager für das ganze Team – auf eigenem Server"
description: "Gemeinsame Zugänge in Excel-Listen oder auf Post-its? Mit Vaultwarden und den bewährten Bitwarden-Apps verwalten Sie Passwörter sicher und unter eigener Kontrolle."
tags: [Sicherheit, Open Source]
image: /assets/img/posts/vaultwarden-passwortmanager.jpg
image_alt: "Schloss-Symbol auf dunklem Netzwerk-Hintergrund"
---

In fast jedem KMU gibt es sie: die Liste mit den wichtigen Zugängen. Mal ist es eine Excel-Datei, mal ein Notizbuch in der Schublade, mal ein Zettel am Bildschirm. Der Router, das Firmenkonto beim Lieferanten, die Website, der Social-Media-Auftritt – alles steht drauf, und mehrere Leute kennen die Passwörter.

Das Problem ist nicht nur die Sicherheit. Es ist auch der Alltag: Wer hat das Passwort zuletzt geändert? Wo ist die aktuelle Version der Liste? Und was passiert, wenn jemand die Firma verlässt?

Ein **Passwortmanager** löst genau das. Er speichert alle Zugänge verschlüsselt, füllt sie auf Websites automatisch aus und erzeugt für jeden Dienst ein eigenes, starkes Passwort. Teams teilen Zugänge gezielt, statt sie herumzuschicken.

## Was ist Vaultwarden?

[Vaultwarden](https://github.com/dani-garcia/vaultwarden) ist ein schlanker Server für Passwortmanager, der mit den Apps von [Bitwarden](https://bitwarden.com) zusammenarbeitet. Sie installieren Vaultwarden auf Ihrem eigenen Server und verwenden dazu die offiziellen Bitwarden-Apps für Browser, Computer und Smartphone.

Wichtig für die Einordnung:

- Vaultwarden ist ein **inoffizielles, eigenständiges Open-Source-Projekt** (Lizenz AGPL-3.0). Es steht laut den Entwicklern in keiner Verbindung zur Bitwarden Inc.
- Es ist in der Programmiersprache Rust geschrieben und braucht deutlich weniger Rechenleistung als der offizielle Bitwarden-Server. Darum ist es besonders bei kleineren Installationen beliebt.
- Bitwarden selbst ist ebenfalls Open Source und bietet einen eigenen Server sowie einen Cloud-Dienst an. Welche Variante passt, hängt von Grösse, Supportbedarf und Betriebsmodell ab.

## Was Vaultwarden kann

Vaultwarden unterstützt die Funktionen, die ein KMU im Alltag braucht:

- **Organisationen und Sammlungen:** Zugänge werden in Sammlungen gruppiert – etwa «Buchhaltung», «Website» oder «IT» – und nur den Personen freigegeben, die sie brauchen.
- **Rollen und Gruppen:** Wer darf nur lesen, wer darf ändern, wer verwaltet?
- **Zwei-Faktor-Anmeldung:** unter anderem mit Authenticator-App, Sicherheitsschlüssel (FIDO2/WebAuthn) oder YubiKey.
- **Notfallzugriff:** Eine Vertrauensperson kann im Ernstfall nach einer Wartefrist Zugriff erhalten.
- **Dateianhänge und «Send»:** Dokumente sicher ablegen oder einmalig verschlüsselt mit jemandem teilen.

Für die Mitarbeitenden sieht das aus wie jeder andere moderne Passwortmanager. Sie bemerken nicht, dass im Hintergrund Ihr eigener Server arbeitet.

## Warum ein eigener Server?

Ein Passwortmanager enthält die Schlüssel zu Ihrem ganzen Betrieb. Die Daten sind zwar auch bei Cloud-Anbietern verschlüsselt, doch mit einem eigenen Server behalten Sie zusätzlich die volle Kontrolle darüber, **wo** dieser Tresor liegt und **wer** ihn betreibt. Für Betriebe, die ohnehin auf eigene Systeme setzen, fügt sich Vaultwarden nahtlos ein.

## Was Sie beim Betrieb beachten müssen

Gerade weil hier die wichtigsten Daten liegen, verdient der Betrieb besondere Sorgfalt:

1. **Nur über HTTPS.** Die Web-Oberfläche funktioniert ohnehin nur über eine verschlüsselte Verbindung. Ein sauber eingerichteter Reverse Proxy mit gültigem Zertifikat gehört dazu.
2. **Registrierung schliessen.** Neue Konten sollten nur auf Einladung entstehen, nicht durch freie Anmeldung.
3. **Verwaltungsseite schützen.** Die Admin-Oberfläche wird mit einem starken, getrennt aufbewahrten Token gesichert oder ganz deaktiviert.
4. **Backups, Backups, Backups.** Die Entwickler empfehlen ausdrücklich regelmässige Sicherungen von Dateien und Datenbank. Ein verlorener Passwort-Tresor ist der denkbar schlechteste Datenverlust. Mehr dazu im Artikel zur [3-2-1-Regel](/blog/backup-3-2-1-regel/).
5. **Updates zeitnah einspielen.** Wie bei jeder Software, die aus dem Internet erreichbar ist.

<div class="box" markdown="1">
**Das Master-Passwort ist nicht wiederherstellbar**

Die Daten werden mit dem Master-Passwort jeder Person verschlüsselt. Vergisst jemand dieses Passwort, kann es niemand zurücksetzen – auch der Administrator nicht. Planen Sie darum den Notfallzugriff oder eine Wiederherstellung über die Organisation ein, bevor Sie es brauchen.
</div>

## So führen Sie einen Passwortmanager ein

1. **Mit der Geschäftsleitung beginnen.** Wer vorangeht, überzeugt am meisten.
2. **Sammlungen festlegen:** Welche Zugänge gehören wem? Wer braucht was?
3. **Alte Listen übertragen** – und danach wirklich löschen, auch aus dem E-Mail-Postfach.
4. **Schwache und doppelte Passwörter ersetzen.** Die Bitwarden-Apps zeigen an, wo Handlungsbedarf besteht.
5. **Kurz schulen:** Browser-Erweiterung installieren, Autofill nutzen, starke Passwörter erzeugen lassen.

Ein Passwortmanager ist eine der wirksamsten und zugleich günstigsten Sicherheitsmassnahmen überhaupt. Mit Vaultwarden bleibt er dabei ganz in Ihrer Hand.

## Quellen

- [Vaultwarden auf GitHub (Projektbeschreibung, Funktionen, Hinweise zu HTTPS und Backups)](https://github.com/dani-garcia/vaultwarden)
- [Bitwarden – offizielle Website](https://bitwarden.com)
