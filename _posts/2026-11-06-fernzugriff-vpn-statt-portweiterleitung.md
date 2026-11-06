---
title: "Fernzugriff ohne Risiko: VPN statt Portweiterleitung"
description: "Das BACS warnt: Über offene Ports und veraltete Dienste gelangen Kriminelle in private Netzwerke. So greifen Sie sicher von unterwegs auf Ihre Geräte zu."
tags: [Sicherheit]
image: /assets/img/posts/fernzugriff-vpn-statt-portweiterleitung.jpg
image_alt: "Symbol eines Hauses als Sinnbild für das geschützte Heim- und Büronetzwerk"
---

Die Fotos auf dem NAS, die Überwachungskamera, die Heizungssteuerung oder die Dateiablage im kleinen Büro: Vieles möchte man auch von unterwegs erreichen. Der schnellste Weg dorthin ist oft eine sogenannte Portweiterleitung im Router. Genau dieser Weg wird gerade zum Problem.

Das Bundesamt für Cybersicherheit (BACS) hat am 3. November 2026 in seinem Wochenrückblick berichtet, dass es mehrere Meldungen zu Schadsoftware in privaten Heimnetzwerken erhalten hat. Der Einstieg erfolgte jeweils über Geräte und Dienste, die aus dem Internet erreichbar waren und Sicherheitslücken hatten.

Was für Privathaushalte gilt, betrifft kleine Büros genauso: Dort stehen oft dieselben Geräte – ein NAS, ein Drucker, eine Kamera – und dieselben Router. Dieser Artikel erklärt, wo das Risiko liegt und wie ein sicherer Fernzugriff aussieht.

## Was eine Portweiterleitung macht

Die meisten Internet-Router arbeiten heute im sogenannten Router-Modus. Sie bilden ein privates Netzwerk, in dem Ihre Geräte für das Internet unsichtbar sind. Das ist ein wirksamer Grundschutz.

Mit einer Portweiterleitung (auch NAT genannt) durchbrechen Sie diesen Schutz gezielt: Sie öffnen einen einzelnen Dienst eines Geräts – etwa die Weboberfläche Ihres NAS – für das ganze Internet. Das ist bequem, denn Sie erreichen das Gerät dann von überall. Aber eben nicht nur Sie, sondern auch jeder andere.

Das BACS weist zudem darauf hin, dass manche Anbieter Geräte noch im «Bridge»-Modus ausliefern. Dann fehlt die Router-Funktion ganz, und die angeschlossenen Geräte hängen direkt am Internet.

## Warum veraltete Dienste so gefährlich sind

Ein offener Dienst allein ist noch kein Einbruch. Gefährlich wird es, wenn dieser Dienst eine bekannte Sicherheitslücke hat, die noch nicht geschlossen wurde. Laut BACS werden genau solche Kombinationen – nicht aktualisiert und aus dem Internet erreichbar – stark angegriffen.

Zwei aktuelle Beispiele nennt das BACS ausdrücklich:

- **PHP:** Eine weit verbreitete Programmiersprache für Webanwendungen. Viele Geräte und Dienste im Heim- oder Büronetz nutzen PHP, ohne dass man es merkt. Das BACS hat im Oktober vor kritischen Lücken gewarnt.
- **Plex:** Ein beliebter Medienserver. Laut BACS zeigen eingegangene Meldungen, dass die Lücken aktiv ausgenutzt werden und Angreifer die volle Kontrolle über nicht aktualisierte Geräte erlangen können.

## Was Angreifer damit anstellen

Ist ein Angreifer einmal mit Administratorrechten im Netzwerk, hat er laut BACS verschiedene Möglichkeiten:

- Daten verschlüsseln und Lösegeld verlangen (Ransomware)
- Daten stehlen und mit der Veröffentlichung drohen
- Ihre Hardware heimlich zum Schürfen von Kryptowährungen nutzen
- Ihren Internetanschluss als Tarnung für eigene Angriffe missbrauchen («Residential Proxy»)

Oft bemerken Betroffene den Angriff erst, wenn die Erpressung beginnt. Mögliche Anzeichen vorher sind ein Gerät, das plötzlich langsamer ist, oder ein Lüfter, der ungewöhnlich laut oder dauernd läuft.

## So sieht ein sicherer Fernzugriff aus

Die Empfehlungen des BACS lassen sich in fünf Punkten zusammenfassen:

1. **VPN statt offener Ports.** Ein VPN (virtuelles privates Netzwerk) ist ein verschlüsselter Tunnel in Ihr Netzwerk. Nur wer sich anmelden kann, kommt hinein – die einzelnen Dienste bleiben für das Internet unsichtbar. Verbreitete Verfahren sind WireGuard und OpenVPN, beides Open Source. Viele Router bieten eine VPN-Funktion bereits eingebaut an.
2. **Zwei-Faktor-Anmeldung.** Schützen Sie den VPN-Zugang und alle Dienste, die doch erreichbar sein müssen, zusätzlich mit einem zweiten Faktor.
3. **Updates und starke Passwörter.** Halten Sie alle Geräte im Netzwerk aktuell. Für erreichbare Dienste empfiehlt das BACS Passwörter mit mindestens 12 Zeichen aus Gross- und Kleinbuchstaben, Ziffern und Sonderzeichen.
4. **Netzwerk trennen.** Dienste, die aus dem Internet erreichbar sind, gehören idealerweise in einen eigenen Netzwerkbereich, getrennt von den übrigen Geräten. Manche Router bieten dafür eine sogenannte DMZ («demilitarisierte Zone»).
5. **Zugriff einschränken.** Wo möglich, lässt sich der Zugriff auf bestimmte Länder begrenzen (Geofencing). Zudem sollte ein Zugang nach mehreren Fehlversuchen gesperrt werden.

<div class="box" markdown="1">
**Kleine Inventur in zehn Minuten**

So kann es aussehen: Öffnen Sie die Oberfläche Ihres Routers und suchen Sie den Bereich «Portweiterleitung», «Portfreigabe» oder «NAT». Notieren Sie jede Freigabe und fragen Sie sich: Brauche ich das noch? Gibt es für dieses Gerät aktuelle Updates? Was Sie nicht mehr brauchen, löschen Sie.
</div>

## Wenn ein Gerät befallen ist

Im schlimmsten Fall muss ein befallenes Gerät komplett neu aufgesetzt werden. Das BACS empfiehlt zudem, auch die übrigen Geräte im gleichen Netzwerk zu prüfen – idealerweise durch eine Fachperson. Spätestens hier zeigt sich, wie wertvoll ein aktuelles Backup ist, das nicht dauerhaft am selben Netzwerk hängt.

## Fazit

Fernzugriff ist praktisch und im Alltag oft unverzichtbar. Er muss aber nicht über offene Türen laufen. Mit einem VPN, einem zweiten Faktor und regelmässigen Updates erreichen Sie Ihre Daten von unterwegs, ohne sie dem ganzen Internet zu zeigen.

Wenn Sie unsicher sind, welche Freigaben in Ihrem Router aktiv sind oder wie Sie einen VPN-Zugang einrichten, rät das BACS, eine erfahrene Person beizuziehen. Auch TUXO hilft Ihnen gerne dabei, Ihr Netzwerk im Büro oder zu Hause sauber aufzustellen.

## Quellen

- [BACS: Woche 44 – Wenn das Heimnetzwerk zum Einfallstor für Cyberkriminelle wird (03.11.2026)](https://www.bacs.admin.ch/de/26w44-de)
- [BACS: Kritische Schwachstellen in PHP – Sicherheitsupdates sofort einspielen (21.10.2026)](https://www.bacs.admin.ch/de/warnung-php-de)
- [Swisscybersecurity.net: Kriminelle hacken Heimnetzwerke über veraltete Dienste (04.11.2026)](https://www.swisscybersecurity.net/news/2026-11-04/kriminelle-hacken-heimnetzwerke-ueber-veraltete-dienste)
