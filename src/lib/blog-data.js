/**
Redaktionelle Ratgeber und Fachartikel auf Deutsch für den Stundenrechner.
Praxisnahe Anleitungen für Arbeitnehmer, Arbeitgeber, Lohnbuchhaltung und Freiberufler.
 */

export const blogPosts = [
  {
    slug: "wie-berechnet-man-arbeitszeit",
    title: "Wie berechnet man Arbeitszeit? Formel, Schritte & Praxisbeispiele",
    seoTitle: "Wie berechnet man Arbeitszeit? Formel, Schritte & Beispiele",
    metaDescription:
      "Erfahren Sie, wie Sie Ihre tägliche Arbeitszeit korrekt berechnen: Schritt-für-Schritt-Anleitung, Grundformel (Brutto minus Pausen) und Beispiele für Vollzeit und Teilzeit.",
    date: "10. Februar 2026",
    readingTime: "5 Min. Lesezeit",
    category: "Grundlagen",
    author: "Arbeitsstundenrechner Redaktion",
    excerpt:
      "Die präzise Erfassung der täglichen Arbeitszeit ist die Basis jedes Stundenzettels. Erfahren Sie, wie Brutto- und Nettoarbeitszeit Schritt für Schritt ermittelt werden.",
    relatedSlugs: [
      "arbeitszeit-mit-pause-berechnen",
      "was-sind-dezimalstunden",
      "arbeitszeit-ueber-mitternacht-berechnen",
    ],
    content: `
Ob im Büro, auf der Baustelle, im Krankenhaus, in der Gastronomie oder im Homeoffice: Das korrekte Erfassen und Berechnen der täglichen Arbeitsstunden ist essenziell für einen stimmigen Stundenzettel und die pünktliche Lohnabrechnung. Dennoch schleichen sich beim manuellen Umrechnen von Minuten, Abziehen mehrerer Pausen oder Schichten über Mitternacht schnell Rechenfehler ein.

In diesem Ratgeber erklären wir die Grundformel und zeigen praxisnah, wie Sie Ihre Arbeitszeit rechtssicher und unkompliziert berechnen.

---

### Bruttoarbeitszeit vs. Nettoarbeitszeit

Vor der eigentlichen Berechnung ist es wichtig, die beiden zentralen Begriffe des deutschen Arbeitsrechts zu unterscheiden:

1. **Bruttoarbeitszeit (Anwesenheitszeit):**
   Die gesamte Zeitspanne zwischen Arbeitsbeginn („Kommen“) und Arbeitsende („Gehen“).
2. **Nettoarbeitszeit (Vergütungspflichtige Arbeitszeit):**
   Die tatsächliche Arbeitsleistung, die vom Arbeitgeber bezahlt wird. Unbezahlte Ruhepausen nach § 4 ArbZG werden von der Bruttoarbeitszeit abgezogen.

---

### Die Grundformel der Arbeitszeitberechnung

Die mathematische Formel lautet:

$$\\text{Nettoarbeitszeit} = (\\text{Arbeitsende} - \\text{Arbeitsbeginn}) - \\text{Gesamte Pausenzeiten}$$

Da eine Stunde 60 Minuten hat, empfiehlt sich bei manuellen Berechnungen die Umrechnung in Minuten:

- **Schritt 1:** Ermitteln Sie die Bruttominuten zwischen Beginn und Ende (z. B. 08:00 bis 17:00 Uhr = 9 Stunden = 540 Minuten).
- **Schritt 2:** Addieren Sie alle genommenen Ruhepausen (z. B. 45 Minuten).
- **Schritt 3:** Subtrahieren Sie die Pausenminuten von den Bruttominuten (540 − 45 = 495 Nettominuten).
- **Schritt 4:** Teilen Sie das Ergebnis durch 60: 495 ÷ 60 = **8 Stunden und 15 Minuten** bzw. **8,25 Dezimalstunden**.

---

### Praxisbeispiel: Typischer Vollzeit-Arbeitstag

- **Arbeitsbeginn:** 07:30 Uhr
- **Arbeitsende:** 16:30 Uhr
- **Mittagspause:** 45 Minuten

**Berechnung:**
1. Von 07:30 bis 16:30 Uhr vergehen genau **9 Stunden** (= 540 Bruttominuten).
2. Abzug von 45 Minuten gesetzlicher Pause = **495 Nettominuten**.
3. 495 Minuten entsprechen **8 Stunden und 15 Minuten**.
4. Als Dezimalwert für den Stundenzettel ergibt dies **8,25 Dezimalstunden** (da 15 Min. ÷ 60 = 0,25).

---

### Arbeitszeit sofort online berechnen

Sparen Sie sich das manuelle Kopfrechnen und nutzen Sie unseren kostenlosen [Stundenrechner](/). Geben Sie einfach Beginn, Ende und Pause ein – das Tool liefert Ihnen sofort die exakte Nettoarbeitszeit, Dezimalstunden und Ihren geschätzten Verdienst.
    `,
  },
  {
    slug: "arbeitszeit-mit-pause-berechnen",
    title: "Arbeitszeit mit Pause berechnen: Gesetzliche Vorgaben nach § 4 ArbZG",
    seoTitle: "Arbeitszeit mit Pause berechnen: Pausenregelung § 4 ArbZG",
    metaDescription:
      "Arbeitszeit mit gesetzlicher Pause berechnen: Gesetzliche Mindestpausen nach § 4 ArbZG, Pausenabzug, Höchstarbeitszeit (§ 3 ArbZG) und Pausenteilung verständlich erklärt.",
    date: "14. Februar 2026",
    readingTime: "6 Min. Lesezeit",
    category: "Arbeitsrecht",
    author: "Arbeitsstundenrechner Redaktion",
    excerpt:
      "Ruhepausen sind gesetzlich vorgeschrieben und schützen die Gesundheit. Erfahren Sie, wann wie viel Pause Pflicht ist und wie Pausen korrekt von der Arbeitszeit abgezogen werden.",
    relatedSlugs: [
      "wie-berechnet-man-arbeitszeit",
      "was-sind-dezimalstunden",
      "arbeitszeit-ueber-mitternacht-berechnen",
    ],
    content: `
Das deutsche Arbeitszeitgesetz (ArbZG) regelt präzise, wie lange Beschäftigte arbeiten dürfen und wann Pausen zwingend einzulegen sind. Wer seine Arbeitsstunden erfasst, muss wissen, wie Pausenzeiten berücksichtigt werden und welche Mindestdauern gelten.

---

### Gesetzliche Pausenzeiten nach § 4 ArbZG

Das Gesetz schreibt gestaffelte Mindestpausen vor, die von der täglichen Gesamtarbeitszeit abhängen:

| Tägliche Arbeitszeit | Gesetzliche Mindestpause | Aufteilung |
| :--- | :--- | :--- |
| **Bis zu 6 Stunden** | Keine gesetzliche Pause Pflicht | Freiwillig |
| **Mehr als 6 bis 9 Stunden** | Mindestens **30 Minuten** | In Abschnitte von mind. 15 Min. |
| **Mehr als 9 Stunden** | Mindestens **45 Minuten** | In Abschnitte von mind. 15 Min. |

> **Wichtig:** Länger als 6 Stunden hintereinander dürfen Arbeitnehmer in Deutschland nicht ohne Ruhepause beschäftigt werden!

---

### Zählen Pausen als Arbeitszeit?

Im Regelfall sind Ruhepausen **unbezahlte Freizeit**. Beschäftigte sind während der Pause von jeder Dienstverpflichtung freigestellt und dürfen den Arbeitsplatz verlassen. Daher werden Pausen von der Bruttoanwesenheitszeit abgezogen.

Ausnahmen gelten nur, wenn ein Tarifvertrag, eine Betriebsvereinbarung oder der individuelle Arbeitsvertrag ausdrücklich eine bezahlte Pause (z. B. Kurzpausen in Wechselschicht) vorsieht.

---

### Die 15-Minuten-Regel bei Pausenteilung

Nach § 4 Satz 2 ArbZG können die vorgeschriebenen Ruhepausen in Zeitabschnitte von **mindestens 15 Minuten** aufgeteilt werden. Kürzere Unterbrechungen (wie ein 5-minütiger Gang zur Kaffeemaschine oder zur Toilette) gelten rechtlich nicht als gesetzliche Ruhepause, sondern zählen zur bezahlten Arbeitszeit.

**Zulässige Aufteilungen:**
- Bei 8 Stunden Arbeit: 2× 15 Minuten oder 1× 30 Minuten.
- Bei 9,5 Stunden Arbeit: 1× 30 Minuten Mittagspause + 1× 15 Minuten Nachmittagspause.

---

### Was passiert bei automatischer Pausenabzug?

Viele elektronische Zeiterfassungssysteme ziehen nach 6 bzw. 9 Stunden automatisch 30 bzw. 45 Minuten Pause ab, selbst wenn der Arbeitnehmer durchgearbeitet hat. Dies dient dem Arbeitgeberschutz zur Einhaltung des ArbZG. Um Unstimmigkeiten zu vermeiden, sollten Sie vorgeschriebene Pausen stets tatsächlich einlegen und mit dem [Stundenrechner](/) gegenprüfen.
    `,
  },
  {
    slug: "arbeitszeit-ueber-mitternacht-berechnen",
    title: "Arbeitszeit über Mitternacht berechnen: Nachtschichten exakt erfassen",
    seoTitle: "Arbeitszeit über Mitternacht berechnen: Nachtschichten Rechner",
    metaDescription:
      "Arbeitszeit über Mitternacht berechnen: So erfassen Sie Nachtschichten und Schichten über den Datumswechsel ohne mathematische Vorzeichenfehler nach § 6 ArbZG.",
    date: "18. Februar 2026",
    readingTime: "5 Min. Lesezeit",
    category: "Schichtarbeit",
    author: "Arbeitsstundenrechner Redaktion",
    excerpt:
      "Bei Nachtschichten liegt das Schichtende am nächsten Kalendertag. Erfahren Sie, wie Schichten über Mitternacht richtig berechnet und Nachtzuschläge ermittelt werden.",
    relatedSlugs: [
      "wie-berechnet-man-arbeitszeit",
      "arbeitszeit-mit-pause-berechnen",
      "was-sind-dezimalstunden",
    ],
    content: `
In Pflegeberufen, Industrie, Gastronomie, Bewachung und Logistik gehört Nachtarbeit zum Alltag. Wenn eine Schicht um 22:00 Uhr beginnt und am nächsten Morgen um 06:00 Uhr endet, scheitern viele Tabellenkalkulationen: Da 06:00 numerisch kleiner ist als 22:00, ergibt eine einfache Subtraktion einen negativen Wert (−16 Stunden).

Hier erfahren Sie, wie Nachtschichten über den Datumswechsel mathematisch und arbeitsrechtlich korrekt berechnet werden.

---

### Die 24-Stunden-Methode für Schichten über Mitternacht

Um die Arbeitszeit über Mitternacht manuell zu berechnen, teilt man die Schicht in zwei Abschnitte auf:

1. **Teil 1 (Vor Mitternacht):**
   $$\\text{Zeit bis 24:00 Uhr} = 24:00 - \\text{Arbeitsbeginn}$$
   Beispiel: 24:00 − 22:00 Uhr = **2 Stunden**.
2. **Teil 2 (Nach Mitternacht):**
   $$\\text{Zeit ab 00:00 Uhr} = \\text{Arbeitsende} - 00:00$$
   Beispiel: 06:00 − 00:00 Uhr = **6 Stunden**.
3. **Gesamtdauer:**
   $$2\\text{ Std.} + 6\\text{ Std.} = 8\\text{ Bruttostunden}$$
   Abzüglich 30 Minuten Pause verbleiben **7,50 Nettoarbeitsstunden** (7 Std. 30 Min.).

---

### Gesetzliche Nachtarbeitszeit nach § 2 und § 6 ArbZG

Im deutschen Arbeitszeitgesetz gilt die Zeit von **23:00 bis 06:00 Uhr** (in Bäckereien von 22:00 bis 05:00 Uhr) als gesetzliche Nachtzeit. Wer mehr als 2 Stunden in diesem Zeitraum arbeitet, leistet rechtlich Nachtarbeit.

- **Nachtarbeitszuschlag oder Freizeitausgleich:** Nach § 6 Abs. 5 ArbZG haben Nachtarbeitnehmer Anspruch auf eine angemessene Zahl bezahlter freier Tage oder einen angemessenen Zuschlag auf das Bruttoarbeitsentgelt (üblicherweise 25 % bis 30 %).
- **Gesundheitsuntersuchungen:** Nachtarbeitnehmer haben das Recht auf regelmäßige arbeitsmedizinische Vorsorgeuntersuchungen.

---

### Automatische Nachtschicht-Berechnung im Stundenrechner

Unser kostenloser [Stundenrechner](/) erkennt Arbeitszeiten über Mitternacht vollautomatisch. Geben Sie beispielsweise einfach Beginn „22:00“ und Ende „06:00“ ein – das System rechnet über den Datumswechsel hinweg und weist das Ergebnis sofort fehlerfrei aus.
    `,
  },
  {
    slug: "was-sind-dezimalstunden",
    title: "Was sind Dezimalstunden? Umrechnung von Industrieminuten für den Stundenzettel",
    seoTitle: "Was sind Dezimalstunden? Industrieminuten Tabelle & Formel",
    metaDescription:
      "Was sind Dezimalstunden und Industrieminuten? Formel zur Umrechnung, vollständige Umrechnungstabelle von 1 bis 60 Minuten und Anwendung in Lohnabrechnung & Stundenzettel.",
    date: "22. Februar 2026",
    readingTime: "5 Min. Lesezeit",
    category: "Lohn & Zeiterfassung",
    author: "Arbeitsstundenrechner Redaktion",
    excerpt:
      "In der Lohnbuchhaltung und Zeiterfassung wird Arbeitszeit in Dezimalstunden angegeben. Erfahren Sie, warum Industrieminuten unverzichtbar sind und wie man sie umrechnet.",
    relatedSlugs: [
      "wie-berechnet-man-arbeitszeit",
      "arbeitszeit-mit-pause-berechnen",
      "arbeitszeit-ueber-mitternacht-berechnen",
    ],
    content: `
Wer seinen Stundenzettel ausfüllt oder die monatliche Lohnabrechnung prüft, stolpert häufig über Angaben wie „38,75 Stunden“ anstelle von „38 Stunden und 45 Minuten“. Hierbei handelt es sich um **Dezimalstunden**, in der Industrie und im Personalwesen auch als **Industrieminuten** bezeichnet.

In diesem Ratgeber erfahren Sie, warum die Industrie Dezimalstunden verwendet, wie die Umrechnungsformel lautet und finden eine praktische Schnellübersicht.

---

### Warum werden Dezimalstunden verwendet?

Das Dilemma zwischen Uhrzeit und Geld liegt im mathematischen System:
- **Die Uhr** basiert auf dem **Sexagesimalsystem (Basis 60)**: 1 Stunde = 60 Minuten.
- **Währungen und Löhne** basieren auf dem **Dezimalsystem (Basis 100)**: 1 Euro = 100 Cent.

Würde man einen Stundenlohn von 20,00 € direkt mit „8,30“ multiplizieren, erhielte man ein falsches Rechenergebnis (166,00 €). Richtig ist jedoch: 30 Minuten sind eine halbe Stunde (0,50 Stunden). 8,50 Stunden × 20,00 € ergibt den korrekten Lohn von **170,00 €**.

Softwareprogramme wie DATEV, SAP, Personio oder Excel benötigen zwingend Dezimalstunden, um Löhne, Überstundenzuschläge und Urlaubstage mathematisch exakt zu berechnen.

---

### Die Umrechnungsformel

Die Umrechnung von normalen Minuten in Dezimalstunden ist denkbar einfach:

$$\\text{Dezimalwert} = \\frac{\\text{Minuten}}{60}$$

**Beispiele:**
- 15 Minuten = $15 \\div 60$ = **0,25 Stunden**
- 30 Minuten = $30 \\div 60$ = **0,50 Stunden**
- 45 Minuten = $45 \\div 60$ = **0,75 Stunden**
- 6 Minuten = $6 \\div 60$ = **0,10 Stunden** (eine Zehntelstunde)

Umgekehrt rechnet man Dezimalminuten in echte Minuten um, indem man die Nachkommastellen mit 60 multipliziert (z. B. $0,75 \\times 60 = 45\\text{ Minuten}$).

---

### Industrieminuten-Tabelle (Auszug)

| Minuten | Industrieminuten (Dezimal) | Minuten | Industrieminuten (Dezimal) |
| :--- | :--- | :--- | :--- |
| **5 Min.** | 0,08 Std. | **35 Min.** | 0,58 Std. |
| **10 Min.** | 0,17 Std. | **40 Min.** | 0,67 Std. |
| **15 Min.** | 0,25 Std. | **45 Min.** | 0,75 Std. |
| **20 Min.** | 0,33 Std. | **50 Min.** | 0,83 Std. |
| **25 Min.** | 0,42 Std. | **55 Min.** | 0,92 Std. |
| **30 Min.** | 0,50 Std. | **60 Min.** | 1,00 Std. |

---

### Direkte Dezimalumrechnung im Stundenrechner

Nutzen Sie unseren kostenlosen [Dezimalstunden-Rechner](/) auf der Startseite: Geben Sie eine beliebige Uhrzeit (z. B. 7:48) oder einen Dezimalwert (z. B. 7,80) ein, um das jeweilige Äquivalent sofort sekundenschnell zu konvertieren.
    `,
  },
];

export function getAllPosts() {
  return blogPosts;
}

export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug) {
  const current = getPostBySlug(currentSlug);
  if (!current || !current.relatedSlugs) return [];
  return blogPosts.filter((p) => current.relatedSlugs.includes(p.slug));
}
