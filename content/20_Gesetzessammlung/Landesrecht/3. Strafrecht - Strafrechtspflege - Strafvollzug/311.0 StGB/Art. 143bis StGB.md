---
aliases: StGB 143bis
Gesetz: Schweizerisches Strafgesetzbuch vom 21. Dezember 1937
Abkürzung: StGB
Artikel: 143bis
Stand: 1. Januar 2026
Abteilung: ''
Teil: ''
Titel: 'Zweiter Titel: Strafbare Handlungen gegen das Vermögen'
Kapitel: ''
Abschnitt: ''
Marginalien: 1. Strafbare Handlungen gegen das Vermögen. > Unbefugtes Eindringen in
  ein Datenverarbeitungssystem
Status: 🔴 Ungeprüft
---

# I. Gesetzestext
> [!abstract] Art. 143bis StGB
> <sup>1</sup> Wer auf dem Wege von Datenübertragungseinrichtungen unbefugterweise in ein fremdes, gegen seinen Zugriff besonders gesichertes Datenverarbeitungssystem eindringt, wird, auf Antrag, mit Freiheitsstrafe bis zu drei Jahren oder Geldstrafe bestraft.
> 
> <sup>2</sup> Wer Passwörter, Programme oder andere Daten, von denen er weiss oder annehmen muss, dass sie zur Begehung einer strafbaren Handlung gemäss Absatz 1 verwendet werden sollen, in Verkehr bringt oder zugänglich macht, wird mit Freiheitsstrafe bis zu drei Jahren oder Geldstrafe bestraft.

https://www.fedlex.admin.ch/eli/cc/54/757_781_799/de#art_143_bis

# II. Tatbestand

> [!info] Geschütztes Rechtsgut
> - **Computerfrieden** (analog zum [[Art. 186 StGB|Hausfriedensbruch]]): die Freiheit des Berechtigten, darüber zu entscheiden, wer Zugang zu einem Datenverarbeitungssystem und dessen Datenbeständen haben darf
> - Sekundär: Schutz der Betreiber und Eigentümer von Datenverarbeitungssystemen vor möglichen Schädigungen → Art. 143bis weist auch Züge eines **konkreten Vermögensgefährdungsdelikts** auf
> 
> Der Tatbestand bestraft die **Vorstufe** der unbefugten Datenbeschaffung (Art. 143) – das Hacking selbst – weil davon Schädigungen, Störungen und vielfältige Gefahren ausgehen können.

## Übersicht der Tatbestandsvarianten

| Merkmal | **Abs. 1 – Hacking (Eindringen)** | **Abs. 2 – Verbreitung von Hackingmitteln** |
|---|---|---|
| **Tatobjekt** | Fremdes, besonders gesichertes Datenverarbeitungssystem | Passwörter, Programme oder Daten zur Abs.-1-Begehung |
| **Tathandlung** | Eindringen via Datenübertragungseinrichtungen | In Verkehr bringen oder zugänglich machen |
| **Subjektives Sondermerkmal** | – (Vorsatz genügt) | Wissen oder Annahmenmüssen des Verwendungszwecks |
| **Strafantrag** | Ja – Antragsdelikt | Nein – Offizialdelikt |
| **Strafrahmen** | FS bis 3 Jahre / Geldstrafe | FS bis 3 Jahre / Geldstrafe |
| **Verhältnis** | Haupttatbestand | Vorbereitungstatbestand; tritt beim selben Täter hinter Abs. 1 zurück |

---

## Variante 1: Unbefugtes Eindringen / Hacking (Abs. 1)

### Objektiver Tatbestand

**Täter:**
- Allgemeindelikt (jedermann)

**Tatobjekt – kumulativ:**

1. **[[Daten|Datenverarbeitungssystem]]**: Technische Einrichtungen, über welche Informationen in nicht direkt lesbarer, üblicherweise kodierter Form entgegengenommen, automatisiert bearbeitet und wieder abgegeben werden
   - Erfasst: passwortgeschützte Laptops, PCs, Mobiltelefone, digitale Kameras, Netzwerke, Server
   - **Nicht erfasst**: blosse Datenträger (USB-Sticks, CDs, DVDs) ohne eigene Verarbeitungslogik

2. **[[Fremdheit|Fremd]]**: Das System steht nicht im alleinigen Verfügungsrecht des Täters

3. **Besonders gesichert**: Der Berechtigte bringt durch **spezielle Zugangsschranken** seinen Ausschlusswillen nach aussen zum Ausdruck
   - Geeignete Sicherungen: Firewall, Zugangscode/Passwort, Verschlüsselung, Leseschutz
   - **Nicht** genügend: bloss physisches Verschliessen des Raums oder Behältnisses, in dem ein ungesicherter Computer aufbewahrt wird
   - Keine einheitlichen Anforderungen – massgeblich ist, was dem Berechtigten aufgrund der erkennbaren Gefahren zugemutet werden kann; auf die technischen Fähigkeiten des Täters kommt es nicht an

**Tathandlung – Eindringen «auf dem Wege von Datenübertragungseinrichtungen»:**
- Der Täter muss über drahtgebundene Wege (z.B. Telefonnetz, LAN) oder drahtlose Kanäle (WLAN, Bluetooth, Mobilfunk) unbefugt in das System eindringen
- Tatbestandsmässige Handlungen:
  - Ausschalten, Überwinden oder Ausnutzen von Sicherheitslücken (Codes, Verschlüsselungen)
  - Versenden von Computerviren oder Schadsoftware zur Verschaffung eines Zugangs
  - Eingabe eines unbefugt erlangten Passworts und damit Umgehung der Zugangssperre (BGer 6B_1207/2018, E. 2.2.2)
- Kein physisches «Einbrechen» in Räume erforderlich – der Tatbestand setzt einen **ferngesteuerten** Angriff voraus

### Subjektiver Tatbestand

- [[Art. 12 StGB|Vorsatz]] oder [[Art. 12 StGB|Eventualvorsatz]]
- Kein besonderes subjektives Merkmal (anders als Art. 143, der Bereicherungsabsicht voraussetzt)

### Rechtswidrigkeit
[[Allgemeine Rechtfertigungsgründe]]

### Schuld
[[Allgemeine Schuldausschlussgründe]]

### Strafantrag

> [!warning] Antragsdelikt (Abs. 1)
> Abs. 1 wird **nur auf [[Art. 301 StPO|Antrag]]** verfolgt.

---

## Variante 2: Verbreitung von Hackingmitteln (Abs. 2)

### Objektiver Tatbestand

**Täter:**
- Allgemeindelikt (jedermann)

**Tatobjekt:**
- **Passwörter**, **Programme** (z.B. Viren, Exploit-Tools, Cracking-Software) oder **andere Daten**,
  - die zur Begehung einer Handlung nach Abs. 1 geeignet und bestimmt sind
  - insbesondere: Verschlüsselungs- und Entschlüsselungssoftware, die ein Ausspähen oder Abfangen von Daten ermöglicht
  - Das Tatobjekt muss einen wesentlichen, kausalen Tatbeitrag zur Abs.-1-Handlung leisten können; generelle oder konkrete Eignung allein genügt nicht – es muss zusätzlich ein **objektiv illegaler Verwendungszweck** erkennbar sein

**Tathandlung (alternativ):**
- **In Verkehr bringen**: Verbreitung an einen unbestimmten Personenkreis (z.B. Veröffentlichung im Internet, Versand per E-Mail)
- **Zugänglich machen**: Weitergabe an eine oder mehrere bestimmte Personen – auch auf alltäglichem Weg (schriftliche Notiz, mündliche Weitergabe, persönliche Übergabe eines Datenträgers)

### Subjektiver Tatbestand

- [[Art. 12 StGB|Vorsatz]] oder [[Art. 12 StGB|Eventualvorsatz]]
- **Wissentlichkeit oder Annahmenmüssen** bezüglich des Verwendungszwecks: Der Täter **weiss** oder **muss annehmen**, dass die Tatobjekte zur Begehung einer Tat nach Abs. 1 verwendet werden sollen
  - «Annehmen müssen» entspricht einer qualifizierten Fahrlässigkeit / bewusster Inkaufnahme; Eventualvorsatz genügt
  - Der Vorsatz muss sich auf die Eignung und die geschaffene reelle Gefahr einer Abs.-1-Begehung durch Dritte beziehen

### Rechtswidrigkeit
[[Allgemeine Rechtfertigungsgründe]]

### Schuld
[[Allgemeine Schuldausschlussgründe]]

> [!warning] Offizialdelikt (Abs. 2)
> Abs. 2 ist **Offizialdelikt** – kein Strafantrag erforderlich.

# III. Rechtsfolge

> [!danger] Strafrahmen
> **Abs. 1 (Hacking):** Freiheitsstrafe bis zu **3 Jahren** oder Geldstrafe; nur auf **Antrag**
> 
> **Abs. 2 (Verbreitung von Hackingmitteln):** Freiheitsstrafe bis zu **3 Jahren** oder Geldstrafe; **Offizialdelikt**

# IV. Systematische Einordnung

> [!info] Normzweck
> Art. 143bis StGB schützt den **Computerfrieden** als digitales Pendant zum Hausfrieden (Art. 186 StGB). Abs. 1 erfasst den eigentlichen Hacking-Akt, Abs. 2 kriminalisiert vorgelagert die Verbreitung von Werkzeugen, die für das Hacking eingesetzt werden sollen (Vorbereitungsdelikt). Damit wird der strafrechtliche Schutz in den Bereich der **Tatvorbereitungshandlungen** vorverlagert.

> [!info] Verhältnis zu anderen Normen
> **Abs. 1 (Hacking):**
> - Grundsätzlich **subsidiär** gegenüber den anderen Computerdelikten: [[Art. 143 StGB|StGB 143]] (konsumiert Art. 143bis Abs. 1), [[Art. 144bis StGB|StGB 144bis]] Ziff. 1 (Datenbeschädigung), [[Art. 147 StGB|StGB 147]] (betrügerischer Missbrauch)
> - **Echte Konkurrenz** zu Art. 144bis Ziff. 1 und Art. 147, wenn neben der verletzten Datenberechtigten noch weitere Personen gefährdet sind (z.B. bei Grossrechnern)
> - **Echte Konkurrenz** zu [[Art. 144 StGB|StGB 144]] (Sachbeschädigung)
> - Auffangtatbestand gegenüber Art. 143, wenn **Bereicherungsabsicht fehlt**
> 
> **Abs. 2 (Hackingmittel):**
> - Beim **selben Täter** tritt Abs. 2 hinter Abs. 1 (und hinter Art. 143, Art. 144bis) zurück (mitbestrafte Vortat)
> - Gegenüber **Dritten**, die Abs. 2 begehen, ohne selbst zu hacken, bleibt Abs. 2 eigenständig anwendbar

# V. Bemerkungen & Lehrmeinungen

> [!question] Streitstand: Anforderungen an «besondere Sicherung» (Abs. 1)
> Die Lehre ist uneinig, wie stark die Zugangsschranke sein muss. Einigkeit besteht, dass es keine einheitlichen Mindestanforderungen gibt – massgeblich sind die für den Berechtigten **erkennbaren Gefahren** und was ihm zumutbar ist. Ein triviales Passwort (z.B. «1234») kann nach Teilen der Lehre bereits genügen, wenn der Berechtigte damit seinen Ausschlusswillen dokumentiert. Die Rechtsprechung hat diese Frage nicht abschliessend geklärt.

> [!question] Streitstand: «Annehmen müssen» in Abs. 2 – Vorsatz oder Fahrlässigkeit?
> Das Tatbestandsmerkmal «annehmen muss» wird in der Lehre kontrovers diskutiert. Die h.L. legt es als qualifizierte Fahrlässigkeit aus, die einer bewussten Inkaufnahme (Eventualvorsatz) nahekommt. Teile der Doktrin fordern Eventualvorsatz, andere halten echte Fahrlässigkeit für ausreichend. Die herrschende Auffassung verlangt, dass der Täter die reelle Gefahr einer Abs.-1-Begehung zumindest erkennen musste.

> [!hint] Abgrenzung Art. 143 / Art. 143bis Abs. 1
> Art. 143bis Abs. 1 ist der **Auffangtatbestand**: Er greift, wenn der Täter in ein System eindringt, aber **keine Bereicherungsabsicht** hat und keine Daten i.S.v. Art. 143 beschafft. Sobald Bereicherungsabsicht vorliegt und besonders gesicherte Daten beschafft werden, verdrängt Art. 143 den Art. 143bis Abs. 1.

> [!hint] Praxistipp: Erlangung des Passworts irrelevant für Tatbestandsmässigkeit
> Wie der Täter das Passwort erlangt hat (durch Hacking, zufälliges Auffinden, frühere Beziehung), ist für die Tatbestandsmässigkeit des Eindringens **irrelevant**. Entscheidend ist allein, dass er die Zugangsschranke **ohne Berechtigung** überwindet (BGer 6B_1207/2018, E. 2.2.2).

# VI. Relevante Rechtsprechung

> [!quote] BGer 6B_1207/2018, E. 2.2.2 (Urteil v. 17.05.2019) – Eindringen durch unbefugte Passworteingabe
> «Indem die Beschwerdeführerin die ihr nicht zustehende E-Mailadresse angewählt und das zugehörige Passwort über die Tastatur in den Computer eingegeben hat, über das zu verfügen sie nicht berechtigt war, ist sie in ein fremdes E-Mailkonto eingedrungen. Damit hat sie die elektronische Sicherung des Accounts des Beschwerdeführers umgangen und die Zugangsschranken des Datenverarbeitungssystems überwunden. Dass die Beschwerdeführerin das Passwort nicht durch aktives, auf die Überwindung der Zugangsschranken des Datenverarbeitungssystems gerichtetes Handeln erlangt, sondern dieses im früheren gemeinsamen Büro bloss zufällig aufgefunden hat, ändert daran nichts.»

# VII. Materialien

-
