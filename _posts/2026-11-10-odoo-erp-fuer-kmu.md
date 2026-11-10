---
title: "Odoo: ERP für KMU – von der Offerte bis zur Rechnung"
description: "Offerten in Word, Kunden in Excel, Rechnungen in einem dritten Programm? Odoo bringt alles in ein System. Was die Open-Source-Ausgabe kann – und wo ihre Grenzen liegen."
tags: [Open Source, Souveränität]
image: /assets/img/posts/odoo-erp-fuer-kmu.jpg
image_alt: "Server-Symbol auf dunklem Netzwerk-Hintergrund"
---

Die Offerte entsteht in Word, die Kundenliste liegt in Excel, die Rechnung kommt aus einem dritten Programm, und die Arbeitsstunden stehen auf einem Zettel. So sieht der Alltag in vielen KMU aus. Jedes Werkzeug funktioniert für sich – aber niemand sieht auf einen Blick, welche Offerte noch offen ist, was schon verrechnet wurde und wer wie viel Zeit in ein Projekt gesteckt hat.

Ein **ERP** (Enterprise Resource Planning) löst genau das: eine einzige Software für Kunden, Offerten, Aufträge, Lager und Rechnungen. [Odoo](https://www.odoo.com) ist eines der bekanntesten Systeme dieser Art – und in der Community-Ausgabe Open Source.

## Was ist Odoo?

Odoo wird vom belgischen Unternehmen Odoo S.A. entwickelt. Die Software entstand 2005 unter dem Namen TinyERP, hiess später OpenERP und trägt seit 2014 den heutigen Namen. Sie ist modular aufgebaut: Sie installieren nur die Bausteine, die Sie brauchen, und ergänzen später weitere.

Für ein KMU sind meist diese Bausteine interessant:

- **CRM:** Anfragen und Kontakte an einem Ort, mit dem Stand jeder Verkaufschance.
- **Verkauf:** Offerten erstellen, per E-Mail versenden und mit einem Klick in einen Auftrag umwandeln.
- **Rechnungen:** Aus dem Auftrag wird die Rechnung, ohne dass jemand etwas abtippt.
- **Lager und Einkauf:** Bestände, Lieferanten und Bestellungen.
- **Projekte und Zeiterfassung:** Aufgaben planen, Stunden erfassen und auf Wunsch verrechnen.
- **Website und Onlineshop:** direkt mit Produkten und Lager verbunden.

Der eigentliche Gewinn liegt in der Verbindung: Ein Kontakt wird einmal erfasst und steht danach überall zur Verfügung.

## Von der Offerte bis zur Rechnung

So kann ein typischer Ablauf aussehen:

1. Eine Anfrage kommt per E-Mail oder über das Formular auf der Website und landet im CRM.
2. Sie erstellen daraus eine Offerte mit Ihren Produkten oder Dienstleistungen.
3. Der Kunde bestätigt. Aus der Offerte wird ein Auftrag – und, wenn Sie das möchten, gleich ein Projekt mit Aufgaben.
4. Ihre Mitarbeitenden erfassen ihre Stunden auf dem Projekt.
5. Am Ende erstellen Sie die Rechnung aus dem Auftrag oder aus den erfassten Stunden.

Niemand überträgt Daten von Hand von einem Programm ins andere. Das spart Zeit und vermeidet Fehler.

## Zwei Ausgaben: Community und Enterprise

Hier lohnt sich ein genauer Blick, denn Odoo ist nicht einfach «gratis und offen».

- **Odoo Community** ist Open Source (Lizenz LGPL-3.0). Sie betreiben sie auf einem eigenen Server und zahlen keine Lizenzgebühr.
- **Odoo Enterprise** baut auf der Community-Ausgabe auf und ergänzt sie um zusätzliche Anwendungen und Dienstleistungen des Herstellers. Diese Erweiterungen stehen unter einer herstellereigenen Lizenz und werden im Abonnement pro Benutzer verrechnet.

Dieses Modell nennt man «Open Core»: Der Kern ist offen, ein Teil der Funktionen nicht. Welche Funktionen in welcher Ausgabe enthalten sind, kann sich von Version zu Version ändern. Prüfen Sie den Funktionsumfang deshalb immer für die Version, die Sie einsetzen wollen.

Der wichtigste Unterschied für ein KMU betrifft die **Buchhaltung**. Die Community-Ausgabe bringt die Rechnungsstellung mit, die vollständige Finanzbuchhaltung gehört zum Umfang von Enterprise. In der Praxis gibt es drei Wege:

1. **Rechnungen in Odoo, Buchhaltung beim Treuhänder.** Für viele kleine Betriebe ist das die einfachste Lösung.
2. **Community mit Erweiterungen.** Die [Odoo Community Association (OCA)](https://odoo-community.org) pflegt frei verfügbare Zusatzmodule, auch für die Buchhaltung.
3. **Enterprise.** Sinnvoll, wenn Sie den vollen Umfang und den Support des Herstellers wünschen.

Keiner dieser Wege ist grundsätzlich richtig oder falsch. Entscheidend ist, dass Sie die Wahl bewusst treffen.

## Odoo in der Schweiz

Für die Schweiz gibt es eine Länderanpassung, unter anderem mit einem Schweizer Kontenrahmen und der QR-Rechnung. Zusätzliche Schweizer Module pflegt die Community in einem eigenen Projekt. Was davon in Ihrer Version und Ausgabe enthalten ist, gehört zu den ersten Punkten, die Sie vor einem Entscheid klären sollten – am besten mit einer echten Testrechnung.

<div class="box" markdown="1">
**Bevor Sie die Buchhaltung umstellen**

Sprechen Sie mit Ihrer Treuhänderin oder Ihrem Treuhänder: Welche Auswertungen und Exporte werden gebraucht? Wie sollen Mehrwertsteuer und Jahresabschluss ablaufen? Diese Abklärung ersetzt dieser Artikel nicht.
</div>

## Die ehrliche Kehrseite

Ein ERP ist kein Programm, das man installiert und dann vergisst. Drei Punkte sollten Sie kennen:

- **Ein ERP ist ein Projekt.** Die Einführung verändert Abläufe. Planen Sie Zeit ein, um Ihre Prozesse zu klären, bevor Sie sie in der Software abbilden.
- **Anpassungen kosten später.** Odoo lässt sich fast beliebig anpassen. Jede Sonderlösung muss aber bei einem Versionswechsel mitgezogen werden. Bleiben Sie so nah wie möglich am Standard.
- **Versionswechsel wollen geplant sein.** Odoo veröffentlicht regelmässig neue Hauptversionen, ältere erhalten irgendwann keine Sicherheitsupdates mehr. Beim Eigenbetrieb der Community-Ausgabe liegt der Umstieg in Ihrer Verantwortung oder bei Ihrem Betreuer.

Dazu kommt, was für jedes eigene System gilt: tägliche, geprüfte [Backups](/blog/backup-3-2-1-regel/), zeitnahe Updates und eine sichere Anmeldung. Odoo lässt sich an eine zentrale Anmeldelösung anbinden, etwa an [Pocket ID](/blog/pocket-id-anmeldung-mit-passkey/).

## Für wen eignet sich Odoo?

Odoo passt gut, wenn

- Sie heute mit mehreren Insellösungen arbeiten und Daten doppelt erfassen,
- Offerten, Aufträge und Rechnungen bei Ihnen eng zusammenhängen,
- Sie wachsen und Abläufe vereinheitlichen möchten,
- Sie Ihre Geschäftsdaten auf einem eigenen Server haben wollen.

Weniger geeignet ist Odoo, wenn Sie nur ein paar Rechnungen im Monat schreiben. Dann genügt ein einfaches Rechnungsprogramm. Auch wer auf eine Branchenlösung mit sehr speziellen Funktionen angewiesen ist, sollte genau prüfen, ob Odoo diese abdeckt.

## So gelingt der Einstieg

1. **Abläufe aufschreiben:** Wie entsteht heute aus einer Anfrage eine bezahlte Rechnung? Wo wird doppelt erfasst?
2. **Ausgabe wählen:** Community oder Enterprise – und wie die Buchhaltung gelöst wird.
3. **Klein anfangen:** zuerst Kontakte, Offerten und Rechnungen. Lager, Projekte und Shop folgen später.
4. **Mit echten Daten testen:** eine Handvoll Kunden, drei Produkte, eine Rechnung mit QR-Code.
5. **Mitarbeitende einbeziehen:** Wer täglich damit arbeitet, erkennt Stolpersteine am schnellsten.

Odoo ist kein Werkzeug für einen Nachmittag. Wer die Einführung aber Schritt für Schritt angeht, bekommt ein System, in dem das ganze Geschäft an einem Ort zusammenläuft – auf einem Server, den Sie selbst bestimmen.

## Quellen

- [Odoo – offizielle Website](https://www.odoo.com)
- [Odoo auf GitHub (Quellcode und Lizenz der Community-Ausgabe)](https://github.com/odoo/odoo)
- [Odoo – Vergleich der Ausgaben Community und Enterprise](https://www.odoo.com/page/editions)
- [Odoo Community Association (OCA)](https://odoo-community.org)
- [OCA: Schweizer Module für Odoo (l10n-switzerland)](https://github.com/OCA/l10n-switzerland)
