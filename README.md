# Arbeitsstundenrechner – Arbeitszeit, Stunden und Minuten einfach berechnen

Ein moderner, responsiver und suchmaschinenoptimierter Online-Arbeitszeitrechner nach deutschem Arbeitsrecht (§ 4 ArbZG, § 3 ArbZG).

🌐 **Live-Website:** [https://arbeitsstundenrechner.de/](https://arbeitsstundenrechner.de/)

---

## 🚀 Hauptfunktionen

- **Tagesrechner (Täglich):**
  - Schnelle Erfassung von Arbeitsbeginn und Arbeitsende (mit benutzerfreundlichem 24h-Zeitpicker).
  - Gesetzliche Pausenerfassung mit Ein-Klick-Schnellauswahl (0, 15, 30, 45, 60 Min.) und beliebig vielen Zusatzpausen.
  - Automatische Erkennung von Nachtschichten / Schichten über Mitternacht.
  - Anzeige von Nettoarbeitszeit, Bruttoarbeitszeit, Pausenzeit, Dezimalstunden und geschätztem Bruttolohn.
  - Gesetzliche Pausenprüfungen nach § 4 ArbZG (> 6 Std. mind. 30 Min., > 9 Std. mind. 45 Min.) und Höchstarbeitszeit-Warnungen nach § 3 ArbZG (> 10 Std.).

- **Wochenrechner (Wöchentlich):**
  - Komplette 7-Tage-Wochenübersicht (Montag bis Sonntag) mit Schnellvorlagen (z. B. 5-Tage-Woche Mo–Fr).
  - Flexible Überstundengrenze (z. B. ab 40 Wochenstunden) mit getrennter Ausweisung von Regulär- und Überstunden sowie 1,5-fachem Überstundenzuschlag.

- **Monatsrechner (Monatlich):**
  - Formelbasierte Monatsstundenermittlung (Wochenstunden × 4,348) oder Wochensummen-Erfassung (Woche 1–5 mit Zielstunden-Soll/Ist-Vergleich).

- **Dezimalstunden & Industrieminuten Umrechner:**
  - Bidirektionale Umrechnung von Echtzeit (HH:MM) in Dezimalstunden / Industrieminuten und umgekehrt.
  - Deutsche Kommadarstellung (z. B. `8,50` statt `8.50`).

- **Ratgeber & Blog:**
  - Ausführliche Fachartikel zur Arbeitszeitberechnung, Pausenregelung nach § 4 ArbZG, Schichten über Mitternacht und Dezimalstunden.

- **SEO & Performance:**
  - 100 % statischer Export (`output: 'export'`) mit blitzschnellen Ladezeiten.
  - Valide Schema.org-Strukturdaten (`WebSite`, `WebApplication`, `BlogPosting`, `FAQPage`).
  - Automatisch generierte `robots.txt` und `sitemap.xml`.
  - Vorbereitete `.htaccess` mit HTTPS-Erzwingung, Gzip-Kompression und Browser-Caching für Apache / cPanel.

---

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI & Styling:** React 19, Tailwind CSS v4, Lucide React
- **Bereitstellung:** Statischer Export (kompatibel mit cPanel, Apache, Nginx, GitHub Pages, Vercel, Netlify)

---

## 💻 Lokale Entwicklung

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Produktions-Build erstellen (generiert den Ordner out/)
npm run build
```

---

## 📦 Deployment auf cPanel / Webhosting

1. `npm run build` ausführen.
2. Den Inhalt des generierten Ordners `out/` direkt in das Hauptverzeichnis (`public_html`) Ihrer Domain hochladen.
