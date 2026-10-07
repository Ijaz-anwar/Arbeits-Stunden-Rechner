import Link from "next/link";
import {
  Calculator,
  Clock,
  Shield,
  ArrowRight,
  CheckCircle2,
  PlusCircle,
  MinusCircle,
  Coins,
  Wallet,
  Percent,
  Briefcase,
  HelpCircle,
  Layers,
  ArrowRightLeft,
  Sparkles,
  BookOpen,
} from "lucide-react";

export default function ContentSections() {
  return (
    <article className="mt-16 sm:mt-24 space-y-12 sm:space-y-16 text-slate-800 leading-relaxed">
      {/* 1. Einführung & Überblick */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block">
              Online Ratgeber &amp; Anleitung
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Stunden Rechner Online – Arbeitszeit, Stunden und Minuten einfach berechnen
            </h2>
          </div>
        </div>

        <p className="text-base sm:text-lg text-slate-600 mb-4 leading-relaxed">
          Ein <strong>Stunden Rechner Online</strong> hilft dabei, Arbeitszeiten, Zeitspannen,
          Stunden und Minuten schnell und zuverlässig zu berechnen. Ob Sie Ihre tägliche Arbeitszeit
          ermitteln, mehrere Zeitangaben zusammenrechnen, Minuten in Stunden umwandeln oder eine
          Dezimalzahl in Stunden und Minuten umrechnen möchten – ein Online-Rechner spart wertvolle
          Zeit und vermeidet typische Rechenfehler.
        </p>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Besonders im Arbeitsalltag sind genaue Zeitberechnungen wichtig. Pausen, Überstunden,
          Minijobs, Arbeitszeitkonten und die Abrechnung von Arbeitsstunden können schnell unübersichtlich
          werden. Mit einem praktischen Stunden Rechner lassen sich solche Aufgaben einfacher
          nachvollziehen. Dabei können sowohl klassische Zeitangaben wie <strong>7 Stunden 30 Minuten</strong> als
          auch Dezimalwerte wie <strong>7,5 Stunden</strong> verwendet werden. Im Folgenden erfahren Sie,
          wie die wichtigsten Berechnungen in der Praxis funktionieren.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
              Klassisches Format
            </span>
            <span className="text-sm font-semibold text-slate-900 block">7 Std. 30 Min. (7:30)</span>
            <span className="text-xs text-slate-500 mt-1 block">Übliche Uhrzeit &amp; Stechuhr</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
              Dezimalformat
            </span>
            <span className="text-sm font-semibold text-blue-700 block">7,50 Dezimalstunden</span>
            <span className="text-xs text-slate-500 mt-1 block">Für Stundenzettel &amp; Lohn</span>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
              Industrieminuten
            </span>
            <span className="text-sm font-semibold text-emerald-700 block">30 Min. = 50 Ind.-Min.</span>
            <span className="text-xs text-slate-500 mt-1 block">Exakte 100er-Teilung</span>
          </div>
        </div>
      </section>

      {/* 2. Stunden Minuten Rechner */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Clock className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Stunden Minuten Rechner
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Mit einem <strong>Stunden Minuten Rechner</strong> können Sie zwei oder mehrere Zeitangaben
          miteinander vergleichen, addieren oder voneinander abziehen. Das ist beispielsweise hilfreich,
          wenn Sie Ihre Arbeitszeit von Beginn bis Ende eines Arbeitstages berechnen möchten.
        </p>

        {/* Praxisbeispiel Box */}
        <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200/90 mb-6">
          <h3 className="text-base font-bold text-blue-950 mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            Beispiel: Arbeitszeit berechnen
          </h3>
          <p className="text-sm text-blue-900 mb-4">
            Angenommen, Sie beginnen um <strong>08:00 Uhr</strong> mit der Arbeit und beenden Ihren
            Arbeitstag um <strong>16:30 Uhr</strong>.
          </p>

          <div className="space-y-3 font-mono text-sm bg-white p-4 rounded-xl border border-blue-200">
            <div className="flex justify-between items-center text-slate-700 flex-wrap gap-2">
              <span>Ohne Pause beträgt die Zeitspanne:</span>
              <span className="font-bold text-slate-900">16:30 − 08:00 = 8 Stunden 30 Minuten</span>
            </div>
            <div className="flex justify-between items-center text-slate-700 flex-wrap gap-2 pt-2 border-t border-slate-100">
              <span>Abzug einer 30-minütigen Pause:</span>
              <span className="font-bold text-blue-700">
                8 Stunden 30 Minuten − 30 Minuten = 8 Stunden Netto
              </span>
            </div>
          </div>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Der Rechner kann solche Berechnungen besonders praktisch durchführen, wenn mehrere
          Arbeitsintervalle oder Pausen berücksichtigt werden müssen.
        </p>

        <p className="text-slate-600 leading-relaxed">
          Auch bei <strong>Schichtarbeit</strong> ist ein Stunden-Minuten-Rechner nützlich:
          Start- und Endzeiten können über Mitternacht hinausgehen, beispielsweise bei einer
          Nachtschicht von <strong>22:00 Uhr bis 06:00 Uhr</strong>. Unser Rechner erkennt solche
          Mitternachtsüberschreitungen vollautomatisch und liefert ohne negative Vorzeichen die exakte
          Brutto- und Nettoarbeitszeit.
        </p>
      </section>

      {/* 3. Zeit Rechner Stunden */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
            <ArrowRightLeft className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Zeit Rechner Stunden
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Ein <strong>Zeit Rechner für Stunden</strong> wandelt verschiedene Zeitangaben ineinander um
          und unterstützt bei der präzisen Berechnung von Zeitdifferenzen.
        </p>

        <div className="mb-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
            Die wichtigsten Zeitumrechnungen im Überblick:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 font-medium text-slate-800">
              1 Stunde = <strong>60 Minuten</strong>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 font-medium text-slate-800">
              1 Minute = <strong>60 Sekunden</strong>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 font-medium text-slate-800">
              1 Tag = <strong>24 Stunden</strong>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 font-medium text-slate-800">
              1 Woche = <strong>7 Tage</strong>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-900 text-sm mb-6">
          <strong>Häufiges Missverständnis:</strong> 1 Stunde = 0,5 Stunden bei 30 Minuten? Nein:{" "}
          <strong>30 Minuten entsprechen exakt 0,5 Stunden</strong> (einer halben Stunde).
        </div>

        {/* Formeln Boxen */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Minuten in Stunden umrechnen
            </h4>
            <div className="font-mono text-base font-bold text-blue-700 mb-2">
              Stunden = Minuten ÷ 60
            </div>
            <p className="text-xs text-slate-600">
              Beispiel: 180 Minuten ÷ 60 = <strong>3 Stunden</strong>
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Stunden in Minuten umrechnen
            </h4>
            <div className="font-mono text-base font-bold text-emerald-700 mb-2">
              Minuten = Stunden × 60
            </div>
            <p className="text-xs text-slate-600">
              Beispiel: 4,5 Stunden × 60 = <strong>270 Minuten</strong>
            </p>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Ein Online-Zeitrechner ist besonders praktisch, wenn Sie im Beruf regelmäßig mit
          unterschiedlichen Zeitformaten wie Industrieminuten und Stempeluhr-Zeiten arbeiten.
        </p>
      </section>

      {/* 4. Stunden Dezimal Rechner */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Percent className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Stunden Dezimal Rechner
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Ein <strong>Stunden Dezimal Rechner</strong> wandelt normale Stunden und Minuten in
          Dezimalstunden um. Diese Darstellung wird häufig bei der Arbeitszeiterfassung, Lohnabrechnung
          (z. B. DATEV oder SAP) und modernen Zeiterfassungssystemen verwendet.
        </p>

        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-950 text-sm mb-6">
          <strong>Wichtiger Grundsatz:</strong> Minuten dürfen nicht einfach hinter das Komma
          geschrieben werden! Beispielsweise sind <strong>7 Stunden 30 Minuten nicht 7,30 Stunden</strong>,
          sondern exakt <strong>7,50 Stunden</strong> (da 30 von 60 Minuten genau die Hälfte ergeben).
        </div>

        {/* Formel Box */}
        <div className="p-5 rounded-xl bg-blue-50/70 border border-blue-200 mb-6 font-mono">
          <span className="text-xs uppercase tracking-wider font-bold text-blue-900 block font-sans mb-1">
            Die Umrechnungsformel:
          </span>
          <div className="text-lg font-bold text-blue-950">
            Dezimalstunden = Stunden + (Minuten ÷ 60)
          </div>
          <div className="text-xs text-blue-800 mt-2 font-sans">
            Beispiel: 7 Stunden 30 Minuten = 7 + (30 ÷ 60) = 7 + 0,5 = <strong>7,50 Stunden</strong>
          </div>
        </div>

        <h3 className="text-base font-bold text-slate-900 mb-3">
          Vergleichstabelle: Stunden und Minuten in Dezimalstunden
        </h3>

        <div className="overflow-x-auto border border-slate-200 rounded-xl shadow-xs mb-4">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="px-4 py-3">Stunden und Minuten</th>
                <th className="px-4 py-3">Dezimalstunden</th>
                <th className="px-4 py-3">Rechenweg</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700 font-mono text-xs sm:text-sm">
              <tr>
                <td className="px-4 py-2.5 font-bold font-sans">1:15 (1 Std. 15 Min.)</td>
                <td className="px-4 py-2.5 font-bold text-blue-700">1,25</td>
                <td className="px-4 py-2.5 text-slate-500 font-sans">1 + 15/60 = 1 + 0,25</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-2.5 font-bold font-sans">2:30 (2 Std. 30 Min.)</td>
                <td className="px-4 py-2.5 font-bold text-blue-700">2,50</td>
                <td className="px-4 py-2.5 text-slate-500 font-sans">2 + 30/60 = 2 + 0,50</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-bold font-sans">3:45 (3 Std. 45 Min.)</td>
                <td className="px-4 py-2.5 font-bold text-blue-700">3,75</td>
                <td className="px-4 py-2.5 text-slate-500 font-sans">3 + 45/60 = 3 + 0,75</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-2.5 font-bold font-sans">5:15 (5 Std. 15 Min.)</td>
                <td className="px-4 py-2.5 font-bold text-blue-700">5,25</td>
                <td className="px-4 py-2.5 text-slate-500 font-sans">5 + 15/60 = 5 + 0,25</td>
              </tr>
              <tr>
                <td className="px-4 py-2.5 font-bold font-sans">6:30 (6 Std. 30 Min.)</td>
                <td className="px-4 py-2.5 font-bold text-blue-700">6,50</td>
                <td className="px-4 py-2.5 text-slate-500 font-sans">6 + 30/60 = 6 + 0,50</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-2.5 font-bold font-sans">8:45 (8 Std. 45 Min.)</td>
                <td className="px-4 py-2.5 font-bold text-blue-700">8,75</td>
                <td className="px-4 py-2.5 text-slate-500 font-sans">8 + 45/60 = 8 + 0,75</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Diese Umrechnung ist besonders wichtig, wenn Arbeitszeiten für eine Lohnabrechnung oder eine
          digitale Zeiterfassung benötigt werden, da Stundensätze nur mit Dezimalwerten multipliziert
          werden können.
        </p>
      </section>

      {/* 5. Industrie Stunden Rechner */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-indigo-100 text-indigo-700 rounded-xl">
            <Briefcase className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Industrie Stunden Rechner
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Ein <strong>Industrie Stunden Rechner</strong> kann bei der Arbeitszeitberechnung in
          Unternehmen, Produktion und Schichtbetrieben hilfreich sein. In der betrieblichen Praxis
          werden Arbeitszeiten teilweise in Dezimalstunden oder sogenannten <em>Industrieminuten</em>{" "}
          dokumentiert, bei denen eine Stunde in 100 Industrieminuten anstelle von 60 Echtzeitminuten
          unterteilt wird.
        </p>

        {/* Rechenbeispiel */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6">
          <h3 className="text-sm font-bold text-slate-900 mb-2">
            Beispiel: Industriestunden umrechnen
          </h3>
          <p className="text-sm text-slate-600 mb-3">
            Eine Arbeitszeit von <strong>7 Stunden und 36 Minuten</strong> soll in Industrieform
            erfasst werden:
          </p>
          <div className="font-mono text-sm space-y-1 bg-white p-3.5 rounded-lg border border-slate-200">
            <div>36 Minuten ÷ 60 = 0,6 Industriestunden</div>
            <div className="font-bold text-indigo-700">
              Damit entsprechen: 7 Stunden 36 Minuten = 7,60 Industriestunden
            </div>
          </div>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Bei industriellen Arbeitszeiten können außerdem mehrere Schichten, Pausen und Überstunden
          berücksichtigt werden.
        </p>

        <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200 text-indigo-950 text-sm mb-4">
          <span className="font-bold block mb-1">Typisches industrielles Schichtbeispiel:</span>
          <ul className="list-disc pl-5 space-y-1">
            <li>Frühschicht: 06:00 – 14:00 Uhr</li>
            <li>Gesetzliche Pause: 30 Minuten</li>
            <li>Effektive Arbeitszeit: 7 Stunden 30 Minuten (7,50 Industriestunden)</li>
          </ul>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Bei mehreren Schichten können die einzelnen Arbeitszeiten anschließend addiert und als
          Gesamtstunden ausgegeben werden. Für die tatsächliche Lohn- oder Arbeitszeitabrechnung
          sollten jedoch die im jeweiligen Unternehmen geltenden Arbeitszeitregeln und das
          verwendete Zeiterfassungssystem berücksichtigt werden.
        </p>
      </section>

      {/* 6. Stunden Zusammenrechnen Rechner */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <PlusCircle className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Stunden Zusammenrechnen Rechner
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Ein <strong>Stunden Zusammenrechnen Rechner</strong> eignet sich dafür, mehrere Arbeitszeiten
          zu einer Gesamtarbeitszeit zu addieren – beispielsweise für einen wöchentlichen oder
          monatlichen Stundenzettel.
        </p>

        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
          <h3 className="text-sm font-bold text-slate-900 mb-3">
            Praxisbeispiel: Arbeitszeiten einer gesamten Arbeitswoche addieren
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 mb-4">
            <ul className="space-y-1.5 bg-white p-4 rounded-xl border border-slate-200">
              <li>• Montag: <strong>7 Stunden 30 Minuten</strong></li>
              <li>• Dienstag: <strong>8 Stunden</strong></li>
              <li>• Mittwoch: <strong>7 Stunden 45 Minuten</strong></li>
              <li>• Donnerstag: <strong>8 Stunden 15 Minuten</strong></li>
              <li>• Freitag: <strong>6 Stunden 30 Minuten</strong></li>
            </ul>
            <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col justify-center">
              <span className="font-bold text-slate-900 mb-2 block">Schritt-für-Schritt-Rechnung:</span>
              <p className="text-slate-600 text-xs mb-1">
                <strong>Stunden addieren:</strong> 7 + 8 + 7 + 8 + 6 = <strong>36 Stunden</strong>
              </p>
              <p className="text-slate-600 text-xs mb-1">
                <strong>Minuten addieren:</strong> 30 + 0 + 45 + 15 + 30 = <strong>120 Minuten</strong>
              </p>
              <p className="text-slate-600 text-xs mb-2">
                120 Minuten entsprechen genau <strong>2 vollen Stunden</strong>.
              </p>
              <div className="pt-2 border-t border-slate-200 font-bold text-blue-700 text-sm">
                Gesamtarbeitszeit: 36 + 2 = 38 Stunden
              </div>
            </div>
          </div>
          <p className="text-xs text-slate-500">
            Der Vorteil unseres Online-Rechners besteht darin, dass Sie nicht jedes Zeitintervall manuell
            umrechnen müssen, sondern Vorlagen und Wochensummen direkt digital erfassen können.
          </p>
        </div>
      </section>

      {/* 7. Stunden Reduzieren Rechner */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-rose-100 text-rose-700 rounded-xl">
            <MinusCircle className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Stunden Reduzieren Rechner
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Ein <strong>Stunden Reduzieren Rechner</strong> kann verwendet werden, wenn von einer
          bestehenden Anwesenheitszeit eine bestimmte Anzahl von Stunden oder Minuten abgezogen werden
          soll – beispielsweise zur Berücksichtigung von Pausenzeiten, Minusstunden oder Gleitzeitausgleich.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Beispiel 1: Pause von Anwesenheit abziehen
            </h3>
            <p className="text-xs text-slate-600 mb-2">
              Sie haben 9 Stunden 20 Minuten im Betrieb verbracht und möchten eine Pause von 45 Minuten abziehen:
            </p>
            <div className="font-mono text-sm font-bold text-rose-700 bg-white p-2.5 rounded border border-slate-200">
              9:20 − 0:45 = 8:35 Std.
            </div>
            <p className="text-xs text-slate-700 font-medium mt-2">
              Die tatsächliche Arbeitszeit beträgt <strong>8 Stunden 35 Minuten</strong>.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Beispiel 2: Planung von Soll-Arbeitszeiten
            </h3>
            <p className="text-xs text-slate-600 mb-2">
              Eine reguläre Schicht dauert 8 Stunden und davon sind 30 Minuten gesetzliche Pause abzuziehen:
            </p>
            <div className="font-mono text-sm font-bold text-blue-700 bg-white p-2.5 rounded border border-slate-200">
              8:00 − 0:30 = 7:30 Std.
            </div>
            <p className="text-xs text-slate-700 font-medium mt-2">
              Es verbleiben <strong>7 Stunden 30 Minuten</strong> (7,50 Dezimalstunden).
            </p>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Bei mehreren Abzügen sollten die einzelnen Zeitwerte möglichst genau eingegeben werden, damit
          das Ergebnis frei von Rundungsfehlern bleibt.
        </p>
      </section>

      {/* 8. Minuten Stunden Rechner */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-amber-100 text-amber-700 rounded-xl">
            <Clock className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Minuten Stunden Rechner
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Ein <strong>Minuten Stunden Rechner</strong> wandelt reine Minutenbeträge in Stunden und
          gegebenenfalls verbleibende Restminuten um.
        </p>

        {/* Formel Box */}
        <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200 mb-6 font-mono">
          <span className="text-xs uppercase tracking-wider font-bold text-amber-900 block font-sans mb-1">
            Grundlegende Formel:
          </span>
          <div className="text-lg font-bold text-amber-950">
            Stunden = Minuten ÷ 60
          </div>
          <div className="text-xs text-amber-800 mt-2 font-sans">
            Beispiel: 150 Minuten ÷ 60 = <strong>2,5 Stunden</strong> (entspricht 2 Stunden 30 Minuten).
          </div>
        </div>

        <h3 className="text-base font-bold text-slate-900 mb-3">
          Wichtige Referenzwerte: Minuten in Stunden
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm mb-6">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
            <span className="text-slate-500 block text-xs">60 Minuten</span>
            <span className="font-bold text-slate-900">= 1 Stunde</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
            <span className="text-slate-500 block text-xs">90 Minuten</span>
            <span className="font-bold text-slate-900">= 1 Std. 30 Min.</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
            <span className="text-slate-500 block text-xs">120 Minuten</span>
            <span className="font-bold text-slate-900">= 2 Stunden</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
            <span className="text-slate-500 block text-xs">150 Minuten</span>
            <span className="font-bold text-slate-900">= 2 Std. 30 Min.</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
            <span className="text-slate-500 block text-xs">180 Minuten</span>
            <span className="font-bold text-slate-900">= 3 Stunden</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
            <span className="text-slate-500 block text-xs">240 Minuten</span>
            <span className="font-bold text-slate-900">= 4 Stunden</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
            <span className="text-slate-500 block text-xs">300 Minuten</span>
            <span className="font-bold text-slate-900">= 5 Stunden</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center">
            <span className="text-slate-500 block text-xs">480 Minuten</span>
            <span className="font-bold text-slate-900">= 8 Stunden</span>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Für die Rückrechnung von Stunden in Minuten wird die Zahl einfach mit 60 multipliziert:
          Beispielsweise ergeben <strong>6 Stunden × 60 = 360 Minuten</strong>.
        </p>
      </section>

      {/* 9. Minijob Rechner Stunden */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
            <Coins className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Minijob Rechner Stunden
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Ein <strong>Minijob Rechner für Stunden</strong> kann dabei helfen, Arbeitsstunden und den
          daraus resultierenden Verdienst übersichtlich und transparent zu berechnen.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-2">
              Beispiel 1: Feste Monatsstunden
            </h3>
            <p className="text-xs text-emerald-950 mb-3">
              Bei einem angenommenen Stundenlohn von 13 € und 20 geleisteten Arbeitsstunden im Monat:
            </p>
            <div className="font-mono text-base font-bold text-emerald-900 bg-white p-3 rounded-lg border border-emerald-200">
              20 Stunden × 13 € = 260 €
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Beispiel 2: Schwankende Arbeitstage
            </h3>
            <p className="text-xs text-slate-600 mb-1">
              • Montag: 4 Std. | Mittwoch: 5 Std. | Freitag: 6 Std.
            </p>
            <p className="text-xs font-semibold text-slate-800 mb-2">
              Gesamt: 4 + 5 + 6 = 15 Arbeitsstunden
            </p>
            <div className="font-mono text-base font-bold text-blue-700 bg-white p-3 rounded-lg border border-slate-200">
              15 Stunden × 13 € = 195 €
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600">
          <strong className="text-slate-800 block mb-1">Rechtlicher Hinweis für Minijobs in Deutschland:</strong>
          Bei einem Minijob sollten immer die aktuell geltenden gesetzlichen Verdienstgrenzen (z. B.
          538-Euro-Grenze), gesetzliche Mindestlohnregelungen und individuellen Beschäftigungsbedingungen
          berücksichtigt werden. Ein Stundenrechner unterstützt die mathematische Berechnung, ersetzt aber
          keine rechtliche oder steuerliche Fachberatung.
        </div>
      </section>

      {/* 10. Stunden Brutto Rechner */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Wallet className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Stunden Brutto Rechner
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Ein <strong>Stunden Brutto Rechner</strong> berechnet den Bruttolohn anhand der geleisteten
          Arbeitsstunden und des vertraglich vereinbarten Stundenlohns.
        </p>

        {/* Formel Box */}
        <div className="p-5 rounded-xl bg-blue-50/70 border border-blue-200 mb-6 font-mono">
          <span className="text-xs uppercase tracking-wider font-bold text-blue-900 block font-sans mb-1">
            Die Grundformel für den Bruttolohn:
          </span>
          <div className="text-lg font-bold text-blue-950">
            Bruttolohn = Arbeitsstunden × Bruttostundenlohn
          </div>
        </div>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6 space-y-3">
          <h3 className="text-sm font-bold text-slate-900">
            Berechnungsbeispiel: Vollzeit mit Überstunden
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="bg-white p-3.5 rounded-lg border border-slate-200">
              <span className="font-semibold block text-slate-700">Reguläre Monatsstunden:</span>
              <span className="text-slate-600">160 Stunden × 18 € = <strong>2.880,00 €</strong></span>
            </div>
            <div className="bg-white p-3.5 rounded-lg border border-slate-200">
              <span className="font-semibold block text-slate-700">10 Überstunden:</span>
              <span className="text-slate-600">10 Stunden × 18 € = <strong>180,00 €</strong></span>
            </div>
          </div>
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 font-bold text-blue-900 text-sm">
            Gesamter Bruttobetrag: 2.880 € + 180 € = 3.060,00 €
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Zuschläge, Prämien, Nachtarbeit, Feiertagsarbeit oder tarifliche Überstundenzuschläge können die
          tatsächliche Vergütung zusätzlich erhöhen und müssen bei der Abrechnung gesondert ausgewiesen werden.
        </p>
      </section>

      {/* 11. Brutto Netto Rechner Stunden */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-indigo-100 text-indigo-700 rounded-xl">
            <Shield className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Brutto Netto Rechner Stunden
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Ein <strong>Brutto Netto Rechner für Stunden</strong> verbindet die Berechnung des
          Stundenlohns mit einer ungefähren Ermittlung des Nettolohns. Während der Bruttolohn vor
          Abzug von Steuern und Sozialabgaben steht, ist der Nettolohn der Betrag, der nach allen
          gesetzlichen Abzügen auf das Bankkonto überwiesen wird.
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6">
          <h3 className="text-sm font-bold text-slate-900 mb-2">
            Einfache Bruttoberechnung als Ausgangsbasis:
          </h3>
          <p className="font-mono text-sm font-bold text-slate-800 mb-3">
            160 Stunden × 20 € = 3.200 € Bruttolohn
          </p>
          <p className="text-xs sm:text-sm text-slate-600">
            Der tatsächliche Nettolohn kann jedoch nicht allein anhand der Arbeitsstunden bestimmt werden,
            da er von individuellen steuerlichen und sozialversicherungsrechtlichen Merkmalen abhängt:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 text-xs text-slate-700">
            <span className="p-2 bg-white rounded border border-slate-200">• Steuerklasse</span>
            <span className="p-2 bg-white rounded border border-slate-200">• Krankenversicherung</span>
            <span className="p-2 bg-white rounded border border-slate-200">• Rentenversicherung</span>
            <span className="p-2 bg-white rounded border border-slate-200">• Arbeitslosenversicherung</span>
            <span className="p-2 bg-white rounded border border-slate-200">• Pflegeversicherung</span>
            <span className="p-2 bg-white rounded border border-slate-200">• Kirchensteuer</span>
            <span className="p-2 bg-white rounded border border-slate-200">• Kinderfreibeträge</span>
            <span className="p-2 bg-white rounded border border-slate-200">• Individuelle Freibeträge</span>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Deshalb sollte ein detaillierter Brutto-Netto-Rechner stets die persönlichen Parameter berücksichtigen.
          Unser Stundenrechner liefert hierfür die verlässliche mathematische Grundlage für die exakten
          Brutto-Arbeitsstunden.
        </p>
      </section>

      {/* 12. Gesetzliche Pausenzeiten (§ 4 ArbZG) */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-amber-100 text-amber-700 rounded-xl">
              <Shield className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Gesetzliche Pausenzeiten nach dem Arbeitszeitgesetz (§ 4 ArbZG)
            </h2>
          </div>
          <Link
            href="/blog/arbeitszeit-mit-pause-berechnen"
            className="text-xs font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
          >
            Pausenratgeber lesen <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Ruhepausen dienen der Erholung und dem Gesundheitsschutz der Beschäftigten. Im deutschen
          Arbeitsrecht unterbricht die Pause die Arbeitszeit und zählt in der Regel nicht als bezahlte
          Arbeitszeit. Das Arbeitszeitgesetz (ArbZG) schreibt verbindliche Mindestpausen vor:
        </p>

        {/* Tabelle Pausenzeiten */}
        <div className="overflow-x-auto my-6 border border-slate-200 rounded-xl">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="px-4 py-3">Tägliche Arbeitszeit</th>
                <th className="px-4 py-3">Gesetzliche Mindestpause</th>
                <th className="px-4 py-3">Typische Praxis-Aufteilung</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-600">
              <tr>
                <td className="px-4 py-3 font-medium text-slate-800">Bis 6 Stunden</td>
                <td className="px-4 py-3">Keine gesetzliche Pflicht</td>
                <td className="px-4 py-3">Freiwillige kurze Pause</td>
              </tr>
              <tr className="bg-slate-50/50">
                <td className="px-4 py-3 font-medium text-slate-800">Mehr als 6 bis 9 Stunden</td>
                <td className="px-4 py-3 font-semibold text-blue-700">Mindestens 30 Minuten</td>
                <td className="px-4 py-3">z. B. 1× 30 Min. oder 2× 15 Min.</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-800">Mehr als 9 Stunden</td>
                <td className="px-4 py-3 font-semibold text-blue-700">Mindestens 45 Minuten</td>
                <td className="px-4 py-3">z. B. 30 Min. Mittag + 15 Min. Nachmittag</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-1.5">
          <p className="font-semibold text-slate-800">Wichtige Vorgaben nach § 4 ArbZG:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Pausen müssen im Voraus feststehen und dürfen in Abschnitte von mindestens 15 Minuten aufgeteilt werden.</li>
            <li>Länger als 6 Stunden hintereinander dürfen Arbeitnehmer nicht ohne Ruhepause beschäftigt werden.</li>
            <li>Die tägliche Höchstarbeitszeit beträgt nach § 3 ArbZG grundsätzlich 8 Stunden und darf nur vorübergehend auf maximal 10 Stunden verlängert werden.</li>
          </ul>
        </div>
      </section>

      {/* 13. Wie funktioniert ein Stunden Rechner? & Schnelle Online-Berechnung */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Wie funktioniert ein Stunden Rechner?
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Die meisten Berechnungen basieren auf einfachen mathematischen Regeln. Besonders wichtig
          ist die Unterscheidung zwischen dem klassischen <strong>Zeitformat</strong> und dem{" "}
          <strong>Dezimalformat</strong>:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Zeitformat (Sexagesimal, 60er-Basis)
            </span>
            <div className="text-lg font-bold text-slate-900 font-mono">8 Stunden 30 Minuten = 8:30</div>
            <p className="text-xs text-slate-500 mt-2">
              Basiert auf 60 Minuten pro Stunde. Typisch für Wanduhren, Termine und Zeiterfassungsterminals.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-blue-50/70 border border-blue-200">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-1">
              Dezimalformat (Industriestunden, 100er-Basis)
            </span>
            <div className="text-lg font-bold text-blue-950 font-mono">8 Stunden 30 Minuten = 8,50 Std.</div>
            <p className="text-xs text-blue-800 mt-2">
              Basiert auf 100 Dezimalschritten. Unerlässlich für die Multiplikation mit dem Stundenlohn.
            </p>
          </div>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Diese beiden Schreibweisen sehen ähnlich aus, bedeuten aber unterschiedliche mathematische Werte.
          Für Minuten gilt: <strong>Minuten ÷ 60 = Dezimalstunden</strong>. Für Dezimalstunden gilt:{" "}
          <strong>Dezimalstunden × 60 = Minuten</strong>.
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
          <h3 className="text-sm font-bold text-slate-900 mb-2">
            Stunden und Arbeitszeit schnell online berechnen
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            Ein Stunden Rechner Online ist ein praktisches Werkzeug für Arbeitnehmer, Arbeitgeber,
            Selbstständige, Minijobber und alle Personen, die regelmäßig mit Arbeitszeiten rechnen müssen.
            Ob Stunden und Minuten, Dezimalstunden, Arbeitszeit, Pausen, Überstunden oder Bruttolohn –
            die richtigen Formeln ermöglichen eine schnelle und nachvollziehbare Berechnung.
          </p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Besonders bei vielen einzelnen Zeitangaben lohnt sich die Verwendung unseres Online-Tools.
            Statt jede Minute einzeln umzurechnen, können Startzeit, Endzeit, Pausen oder Wochenstunden
            direkt eingegeben werden.
          </p>
        </div>
      </section>

      {/* 14. Wichtigste Formeln auf einen Blick */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">
              Zusammenfassung
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Wichtigste Formeln auf einen Blick
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
              1. Minuten in Stunden:
            </span>
            <div className="font-mono text-sm font-bold text-blue-700">
              Minuten ÷ 60 = Stunden
            </div>
            <span className="text-xs text-slate-500 mt-1 block">z. B. 45 ÷ 60 = 0,75 Std.</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
              2. Stunden in Minuten:
            </span>
            <div className="font-mono text-sm font-bold text-emerald-700">
              Stunden × 60 = Minuten
            </div>
            <span className="text-xs text-slate-500 mt-1 block">z. B. 2,5 × 60 = 150 Min.</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
              3. Dezimalstunden:
            </span>
            <div className="font-mono text-sm font-bold text-indigo-700">
              Stunden + (Minuten ÷ 60)
            </div>
            <span className="text-xs text-slate-500 mt-1 block">z. B. 7 + 30/60 = 7,50 Std.</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
              4. Bruttolohn:
            </span>
            <div className="font-mono text-sm font-bold text-amber-700">
              Arbeitsstunden × Stundenlohn
            </div>
            <span className="text-xs text-slate-500 mt-1 block">z. B. 160 × 20 € = 3.200 €</span>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 sm:col-span-2 lg:col-span-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
              5. Tatsächliche Arbeitszeit:
            </span>
            <div className="font-mono text-sm font-bold text-slate-900">
              Endzeit − Startzeit − Pausen = Tatsächliche Arbeitszeit
            </div>
            <span className="text-xs text-slate-500 mt-1 block">
              z. B. 17:00 − 08:00 (9h) − 60 Min. Pause = 8 Std. Nettoarbeitszeit
            </span>
          </div>
        </div>
      </section>

      {/* 15. Fazit */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-2xl p-6 sm:p-10 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-600/30 text-blue-300 rounded-xl border border-blue-400/30">
            <BookOpen className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Fazit
          </h2>
        </div>

        <p className="text-base text-slate-200 leading-relaxed mb-4">
          Der <strong>Stunden Rechner Online – Arbeitszeit, Stunden und Minuten einfach berechnen</strong> bietet
          eine schnelle Möglichkeit, unterschiedliche Zeitangaben übersichtlich und fehlerfrei zu berechnen.
          Besonders bei Arbeitszeiten, Schichten, Pausen, Minijobs und Lohnberechnungen können korrekte
          Zeitwerte entscheidend sein.
        </p>

        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          Ob Sie Stunden zusammenrechnen, Stunden reduzieren, Minuten in Stunden umwandeln oder Dezimalstunden
          berechnen möchten: Mit den richtigen Formeln lassen sich die meisten Aufgaben im Handumdrehen lösen.
          Für die tatsächliche Lohnabrechnung oder rechtlich relevante Arbeitszeitberechnung sollten zusätzlich
          die individuellen Arbeitsbedingungen und die jeweils geltenden gesetzlichen Regelungen berücksichtigt werden.
        </p>

        <div className="pt-4 border-t border-slate-700 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-slate-400">
            Kostenlos • Ohne Registrierung • DSGVO-konform im Browser verarbeitet
          </span>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-300 hover:text-white transition-colors"
          >
            Nach oben zum Rechner springen <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </article>
  );
}
