import Link from "next/link";
import {
  Factory,
  Clock,
  CalendarCheck,
  Calculator,
  AlertTriangle,
  CheckCircle2,
  Table as TableIcon,
  Sparkles,
  ArrowRight,
  Briefcase,
  Moon,
  Sun,
  Sunrise,
  Sunset,
  Scale,
  ShieldAlert,
  Percent,
} from "lucide-react";

export default function IndustrieStundenContent() {
  const practiceWeekRows = [
    { tag: "Montag", stunden: "8 Stunden" },
    { tag: "Dienstag", stunden: "7,5 Stunden" },
    { tag: "Mittwoch", stunden: "8 Stunden" },
    { tag: "Donnerstag", stunden: "7,5 Stunden" },
    { tag: "Freitag", stunden: "8 Stunden" },
  ];

  const decimalConversionRows = [
    { zeit: "1 Stunde 15 Minuten", dezimal: "1,25 Stunden" },
    { zeit: "2 Stunden 30 Minuten", dezimal: "2,50 Stunden" },
    { zeit: "4 Stunden 45 Minuten", dezimal: "4,75 Stunden" },
    { zeit: "6 Stunden 15 Minuten", dezimal: "6,25 Stunden" },
    { zeit: "7 Stunden 30 Minuten", dezimal: "7,50 Stunden" },
    { zeit: "8 Stunden 45 Minuten", dezimal: "8,75 Stunden" },
  ];

  return (
    <article className="mt-12 sm:mt-16 space-y-10 sm:space-y-12 text-slate-800 leading-relaxed">
      {/* 1. Was ist ein Industrie Stunden Rechner? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-indigo-100 text-indigo-700 rounded-xl">
            <Factory className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Was ist ein Industrie Stunden Rechner?
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Ein <strong>Industrie Stunden Rechner</strong> ist ein praktisches Hilfsmittel, um
          Arbeitszeiten in industriellen Betrieben schnell und übersichtlich zu berechnen. In
          Produktionshallen, Werkstätten, Lagerbereichen und technischen Unternehmen arbeiten viele
          Beschäftigte nach festen Schichtplänen. Dabei müssen Arbeitsbeginn, Arbeitsende, Pausen
          und tatsächlich geleistete Stunden zuverlässig erfasst werden.
        </p>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Die manuelle Berechnung kann besonders dann kompliziert werden, wenn eine Schicht über
          Mitternacht hinausgeht oder Beschäftigte unterschiedliche Arbeitszeiten an mehreren Tagen
          haben. Ein digitaler Rechner erleichtert diese Aufgabe und hilft dabei, Fehler bei der
          Ermittlung der täglichen und wöchentlichen Arbeitsstunden zu vermeiden.
        </p>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Mit einem Industrie Stunden Rechner können Mitarbeiter, Schichtleiter und
          Personalverantwortliche ihre Arbeitszeit besser nachvollziehen. Das ist sowohl für die
          persönliche Zeitplanung als auch für die betriebliche Arbeitszeiterfassung hilfreich.
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Typisches Praxisbeispiel:
          </span>
          <p className="text-sm text-slate-700 leading-relaxed">
            Wer beispielsweise um 06:00 Uhr mit der Arbeit beginnt, um 14:30 Uhr Feierabend macht
            und 30 Minuten Pause einlegt, kann die tatsächliche Arbeitszeit unkompliziert ermitteln.
            Aus der gesamten Anwesenheitszeit von 8 Stunden und 30 Minuten werden nach Abzug der
            Pause genau <strong>8 Arbeitsstunden</strong>.
          </p>
        </div>
      </section>

      {/* 2. Wie funktioniert ein Industrie Stunden Rechner? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-indigo-100 text-indigo-700 rounded-xl">
            <Calculator className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Wie funktioniert ein Industrie Stunden Rechner?
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Die Berechnung der industriellen Arbeitszeit basiert grundsätzlich auf drei Angaben:
          Arbeitsbeginn, Arbeitsende und Pausendauer. Aus diesen Werten lässt sich bestimmen, wie
          lange eine Person tatsächlich gearbeitet hat.
        </p>

        {/* Formula Box */}
        <div className="p-5 rounded-xl bg-indigo-50/70 border border-indigo-200 mb-6 font-mono">
          <span className="text-xs uppercase tracking-wider font-bold text-indigo-900 block font-sans mb-1">
            Die grundlegende Formel lautet:
          </span>
          <div className="text-lg sm:text-xl font-extrabold text-indigo-950">
            Nettoarbeitszeit = Arbeitsende − Arbeitsbeginn − Pausenzeit
          </div>
        </div>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6">
          <h3 className="text-sm font-bold text-slate-900 mb-3">
            Ein Beispiel aus der industriellen Produktion:
          </h3>
          <ul className="space-y-1.5 font-mono text-xs sm:text-sm bg-white p-4 rounded-xl border border-slate-200 text-slate-800">
            <li>• Arbeitsbeginn: 07:00 Uhr</li>
            <li>• Arbeitsende: 15:30 Uhr</li>
            <li>• Pause: 30 Minuten</li>
            <li>• Gesamte Anwesenheitszeit: 8 Stunden und 30 Minuten</li>
            <li className="font-bold text-indigo-700 pt-1 border-t border-slate-100">
              • Tatsächliche Arbeitszeit: 8 Stunden
            </li>
          </ul>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Ein Industrie Stunden Rechner übernimmt diese Berechnung und stellt das Ergebnis
          übersichtlich dar. Je nach Funktion können auch mehrere Schichten, unterschiedliche
          Arbeitstage und Wochenstunden berücksichtigt werden.
        </p>

        <p className="text-slate-600 text-sm leading-relaxed">
          Für Beschäftigte, die ihre Arbeitszeiten regelmäßig dokumentieren möchten, ist ein
          digitaler Stundenrechner besonders nützlich. Anstatt die Differenz zwischen zwei Uhrzeiten
          jedes Mal selbst auszurechnen, lassen sich die erforderlichen Werte direkt eingeben.
        </p>
      </section>

      {/* 3. Warum ist die genaue Arbeitszeitberechnung in der Industrie wichtig? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Warum ist die genaue Arbeitszeitberechnung in der Industrie wichtig?
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          In Industriebetrieben sind Arbeitszeiten häufig eng mit Produktionsabläufen, Personalplanung
          und Schichtwechseln verbunden. Bereits kleine Rechenfehler können dazu führen, dass die
          dokumentierten Stunden nicht mit der tatsächlich geleisteten Arbeit übereinstimmen. Eine
          zuverlässige Arbeitszeitberechnung unterstützt mehrere wichtige Aufgaben:
        </p>

        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-slate-900 text-base mb-1">
              1. Arbeitsstunden zuverlässig erfassen
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Mitarbeiter können nachvollziehen, wie viele Stunden sie täglich gearbeitet haben.
              Werden Beginn, Ende und Pausen korrekt eingetragen, lässt sich die Nettoarbeitszeit
              transparent bestimmen.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-slate-900 text-base mb-1">
              2. Schichtplanung verbessern
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Produktionsunternehmen arbeiten häufig mit Früh-, Spät- und Nachtschichten. Ein
              Stundenrechner erleichtert die Kontrolle der geplanten Arbeitsdauer und unterstützt
              Schichtleiter bei der Übersicht über die täglichen Einsatzzeiten.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-slate-900 text-base mb-1">
              3. Überstunden erkennen
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Werden die tatsächlich geleisteten Stunden mit der vereinbarten Arbeitszeit verglichen,
              können zusätzliche Arbeitsstunden leichter erkannt werden. Ob diese Stunden als
              Überstunden gelten und wie sie ausgeglichen oder vergütet werden, richtet sich nach den
              geltenden Vereinbarungen und rechtlichen Bestimmungen.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-slate-900 text-base mb-1">
              4. Fehler bei der Dokumentation reduzieren
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Manuelle Berechnungen sind fehleranfällig, insbesondere bei wechselnden Schichten oder
              Arbeitszeiten über Mitternacht. Ein digitaler Rechner reduziert den Rechenaufwand und
              erleichtert die regelmäßige Kontrolle.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-slate-900 text-base mb-1">
              5. Arbeitszeit besser organisieren
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Auch Beschäftigte selbst profitieren von einer übersichtlichen Erfassung. Sie können
              ihre täglichen Arbeitszeiten dokumentieren und feststellen, ob sie ihre vereinbarte
              Wochenarbeitszeit erreicht haben.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Industrie Arbeitszeit berechnen: Beispiele aus der Praxis */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
            <Clock className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Industrie Arbeitszeit berechnen: Beispiele aus der Praxis
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Die Berechnung von Arbeitsstunden ist in der Industrie nicht immer gleich. Unterschiedliche
          Schichtmodelle und Pausenregelungen führen zu verschiedenen Ergebnissen. Die folgenden
          Beispiele zeigen, wie sich typische Arbeitssituationen berechnen lassen:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Beispiel 1 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <Sunrise className="w-4 h-4 text-amber-600" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Beispiel 1: Frühschicht in der Produktion
              </h3>
            </div>
            <p className="text-xs text-slate-600 mb-2">
              Ein Mitarbeiter beginnt seine Schicht um 06:00 Uhr und beendet sie um 14:00 Uhr mit 30
              Minuten Pause.
            </p>
            <div className="space-y-1 font-mono text-xs text-slate-700 bg-white p-3 rounded-lg border border-slate-200 mb-2">
              <div>Anwesenheitszeit: 8 Stunden</div>
              <div>Pausenzeit: 30 Minuten</div>
              <div className="font-bold text-slate-900">Netto: 7 Stunden und 30 Minuten</div>
            </div>
            <p className="text-xs font-semibold text-emerald-700">
              Tatsächlich geleistet: 7,5 Stunden (Dezimal)
            </p>
          </div>

          {/* Beispiel 2 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <Sunset className="w-4 h-4 text-orange-600" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Beispiel 2: Spätschicht mit längerer Pause
              </h3>
            </div>
            <p className="text-xs text-slate-600 mb-2">
              Eine Mitarbeiterin arbeitet von 14:00 Uhr bis 22:30 Uhr mit 45 Minuten Pause.
            </p>
            <div className="space-y-1 font-mono text-xs text-slate-700 bg-white p-3 rounded-lg border border-slate-200 mb-2">
              <div>Anwesenheitszeit: 8 Stunden 30 Minuten</div>
              <div>Pausenzeit: 45 Minuten</div>
              <div className="font-bold text-slate-900">Netto: 7 Stunden und 45 Minuten</div>
            </div>
            <p className="text-xs font-semibold text-emerald-700">
              Das Ergebnis entspricht 7,75 Stunden in Dezimalform.
            </p>
          </div>

          {/* Beispiel 3 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <Moon className="w-4 h-4 text-indigo-600" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Beispiel 3: Nachtschicht über Mitternacht
              </h3>
            </div>
            <p className="text-xs text-slate-600 mb-2">
              Ein Beschäftigter beginnt um 22:00 Uhr und beendet seine Schicht am nächsten Morgen um
              06:00 Uhr (30 Minuten Pause).
            </p>
            <div className="space-y-1 font-mono text-xs text-slate-700 bg-white p-3 rounded-lg border border-slate-200 mb-2">
              <div>Anwesenheitszeit: 8 Stunden</div>
              <div>Pausenzeit: 30 Minuten</div>
              <div className="font-bold text-slate-900">Netto: 7 Stunden und 30 Minuten</div>
            </div>
            <p className="text-xs font-semibold text-indigo-700">
              Wichtig: Der Tageswechsel über Mitternacht muss korrekt erfasst werden.
            </p>
          </div>

          {/* Beispiel 4 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <CalendarCheck className="w-4 h-4 text-blue-600" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Beispiel 4: Arbeitstage zusammenrechnen
              </h3>
            </div>
            <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white mb-2">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-slate-700 font-bold">
                  <tr>
                    <th className="py-1.5 px-3">Arbeitstag</th>
                    <th className="py-1.5 px-3 text-right">Nettoarbeitszeit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {practiceWeekRows.map((r) => (
                    <tr key={r.tag}>
                      <td className="py-1 px-3 text-slate-700">{r.tag}</td>
                      <td className="py-1 px-3 text-right font-mono text-slate-900">{r.stunden}</td>
                    </tr>
                  ))}
                  <tr className="bg-slate-50 font-bold border-t border-slate-200">
                    <td className="py-1.5 px-3 text-slate-900">Gesamt</td>
                    <td className="py-1.5 px-3 text-right text-indigo-700 font-mono">39 Stunden</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs font-semibold text-emerald-700">
              Wochenarbeitszeit: 39 Stunden gesamt.
            </p>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Mit einem Industrie Stunden Rechner lassen sich solche Tageswerte einfacher addieren und
          mit der vereinbarten Wochenarbeitszeit vergleichen.
        </p>
      </section>

      {/* 5. Arbeitszeit in Dezimalstunden umrechnen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-indigo-100 text-indigo-700 rounded-xl">
            <Percent className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Arbeitszeit in Dezimalstunden umrechnen
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          In vielen Betrieben werden Arbeitszeiten nicht nur in Stunden und Minuten, sondern auch als
          Dezimalzahlen dokumentiert. Das ist beispielsweise bei Tabellen, Lohnabrechnungen und
          internen Auswertungen hilfreich.
        </p>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Dabei ist es wichtig, Minuten korrekt in Dezimalstunden umzuwandeln. Minuten werden durch 60
          geteilt, weil eine Stunde 60 Minuten hat.
        </p>

        {/* Formula Box */}
        <div className="p-5 rounded-xl bg-indigo-50/70 border border-indigo-200 mb-6 font-mono">
          <span className="text-xs uppercase tracking-wider font-bold text-indigo-900 block font-sans mb-1">
            Die Formel lautet:
          </span>
          <div className="text-lg sm:text-xl font-extrabold text-indigo-950">
            Dezimalstunden = Stunden + (Minuten ÷ 60)
          </div>
        </div>

        <h3 className="text-sm font-bold text-slate-900 mb-3">
          Typische Umrechnungen im Überblick:
        </h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs mb-6 max-w-lg">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                <th scope="col" className="py-3 px-4 sm:px-6">Stunden und Minuten</th>
                <th scope="col" className="py-3 px-4 sm:px-6 text-right">Dezimalstunden</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {decimalConversionRows.map((row, idx) => (
                <tr
                  key={row.zeit}
                  className={`hover:bg-indigo-50/50 transition-colors ${
                    idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"
                  }`}
                >
                  <td className="py-2.5 px-4 sm:px-6 font-semibold text-slate-900">{row.zeit}</td>
                  <td className="py-2.5 px-4 sm:px-6 text-right font-mono font-bold text-indigo-700">
                    {row.dezimal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm mb-4">
          <p className="font-bold mb-1">Typischer Rechenfehler zur Vorsicht:</p>
          <p>
            Ein häufiger Fehler besteht darin, 30 Minuten als 0,30 Stunden zu behandeln. Das ist
            mathematisch nicht korrekt! Dreißig Minuten entsprechen einer halben Stunde, also{" "}
            <strong>0,50 Stunden</strong>. Wenn beispielsweise 7 Stunden und 45 Minuten gearbeitet
            wurden, beträgt die Dezimalzeit <strong>7,75 Stunden</strong> und nicht 7,45 Stunden.
          </p>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Ein Industrie Stunden Rechner mit Dezimalumrechnung erleichtert diese Aufgabe und sorgt für
          eine einheitliche Darstellung der erfassten Arbeitszeiten.
        </p>
      </section>

      {/* 6. Industrie Stunden Rechner für verschiedene Schichtmodelle */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Briefcase className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Industrie Stunden Rechner für verschiedene Schichtmodelle
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Industrielle Arbeitsplätze unterscheiden sich hinsichtlich ihrer Betriebszeiten. Während
          manche Unternehmen ausschließlich tagsüber arbeiten, laufen andere Produktionsanlagen rund
          um die Uhr:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-1.5">
              <Sunrise className="w-4 h-4 text-amber-600" />
              <h3 className="font-bold text-slate-900 text-sm">Frühschicht</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Die Frühschicht beginnt häufig am frühen Morgen. Ein Rechner hilft dabei, die
              Anwesenheitsdauer und die tatsächlichen Arbeitsstunden nach Abzug der Pause zu
              bestimmen.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-1.5">
              <Sunset className="w-4 h-4 text-orange-600" />
              <h3 className="font-bold text-slate-900 text-sm">Spätschicht</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Bei der Spätschicht liegen Arbeitsbeginn und Arbeitsende am Nachmittag und Abend.
              Durch eine genaue Berechnung lassen sich auch wechselnde Schichtlängen übersichtlich
              dokumentieren.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-1.5">
              <Moon className="w-4 h-4 text-indigo-600" />
              <h3 className="font-bold text-slate-900 text-sm">Nachtschicht</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nachtschichten beginnen am Abend und enden am folgenden Morgen. Die Berechnung muss
              den Tageswechsel berücksichtigen. Zusätzlich können besondere tarifliche Regelungen
              gelten.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-1.5">
              <Clock className="w-4 h-4 text-blue-600" />
              <h3 className="font-bold text-slate-900 text-sm">Wechselschicht</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Bei Wechselschichten ändern sich die Arbeitszeiten regelmäßig. Ein Rechner hilft, die
              Stunden für jeden einzelnen Arbeitstag zu bestimmen und zusammenzurechnen.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-1.5">
              <Briefcase className="w-4 h-4 text-emerald-600" />
              <h3 className="font-bold text-slate-900 text-sm">Teilzeit in Industriebetrieben</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Auch Beschäftigte in Teilzeit profitieren von einer digitalen Arbeitszeitberechnung.
              Mit einem Stundenrechner lässt sich prüfen, wie viele Stunden tatsächlich geleistet
              wurden und wie diese mit dem vereinbarten Arbeitszeitmodell übereinstimmen.
            </p>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Unabhängig vom Schichtmodell sollte die Erfassung stets auf den tatsächlichen
          Arbeitszeiten und den geltenden betrieblichen Regelungen beruhen.
        </p>
      </section>

      {/* 7. Pausen bei der industriellen Arbeitszeit berücksichtigen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-amber-100 text-amber-700 rounded-xl">
            <Clock className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Pausen bei der industriellen Arbeitszeit berücksichtigen
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Pausen haben einen direkten Einfluss auf die berechnete Nettoarbeitszeit. Deshalb sollten
          sie bei der Erfassung nicht vergessen werden.
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Rechenbeispiel mit Pause:
          </span>
          <p className="text-sm text-slate-700 mb-3">
            Angenommen, eine Schicht dauert von 07:00 Uhr bis 16:00 Uhr. Die gesamte Anwesenheitszeit
            beträgt neun Stunden. Werden 45 Minuten Pause abgezogen, ergibt sich folgende
            Nettoarbeitszeit:
          </p>
          <div className="font-mono text-sm bg-white p-3 rounded-lg border border-slate-200 text-slate-800 space-y-1">
            <div>Anwesenheitszeit: 9 Stunden 00 Minuten</div>
            <div>Pausenabzug: − 45 Minuten</div>
            <div className="font-bold text-amber-800 pt-1 border-t border-slate-100">
              Nettoarbeitszeit: 8 Stunden und 15 Minuten (in Dezimalform: 8,25 Stunden)
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-slate-700 text-xs sm:text-sm leading-relaxed mb-4">
          <div className="flex items-center gap-2 mb-2 font-bold text-blue-900">
            <Scale className="w-4 h-4 text-blue-700" />
            <span>Gesetzliche Ruhepausen nach § 4 Arbeitszeitgesetz (ArbZG)</span>
          </div>
          <p className="mb-2">
            Für Beschäftigte in Deutschland enthält das Arbeitszeitgesetz Vorgaben zu Ruhepausen und
            zur täglichen Arbeitszeit:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-800">
            <li>
              Bei einer Arbeitszeit von <strong>mehr als 6 bis zu 9 Stunden</strong>: mindestens{" "}
              <strong>30 Minuten</strong> Ruhepause.
            </li>
            <li>
              Bei einer Arbeitszeit von <strong>mehr als 9 Stunden</strong>: mindestens{" "}
              <strong>45 Minuten</strong> Ruhepause.
            </li>
          </ul>
          <p className="mt-2 text-xs text-slate-600">
            Die Pausen können unter den gesetzlichen Voraussetzungen in Abschnitte von mindestens 15
            Minuten aufgeteilt werden. Tarifverträge oder betriebliche Vereinbarungen können
            zusätzliche Regelungen vorsehen.
          </p>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Ein Stundenrechner berechnet die eingegebenen Zeiten, ersetzt jedoch keine rechtliche
          Prüfung der Arbeitszeitregelungen.
        </p>
      </section>

      {/* 8. Überstunden mit einem Industrie Stunden Rechner kontrollieren */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
            <Scale className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Überstunden mit einem Industrie Stunden Rechner kontrollieren
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Überstunden spielen in vielen Industriebetrieben eine wichtige Rolle. Bei erhöhtem
          Produktionsbedarf, kurzfristigen Aufträgen oder personellen Engpässen kann zusätzliche
          Arbeitszeit anfallen. Um zusätzliche Stunden zu erkennen, müssen die tatsächliche
          Arbeitszeit und die vereinbarte Arbeitszeit miteinander verglichen werden.
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Beispiel: Täglicher Soll-Ist-Vergleich
          </span>
          <p className="text-sm text-slate-700 mb-3">
            Ein Mitarbeiter hat eine tägliche Sollarbeitszeit von 8 Stunden. An einem bestimmten Tag
            arbeitet er netto 9 Stunden und 15 Minuten:
          </p>
          <div className="space-y-1.5 font-mono text-xs sm:text-sm bg-white p-3 rounded-lg border border-slate-200 mb-3">
            <div>Tatsächliche Arbeitszeit: 9,25 Stunden (9 Std. 15 Min.)</div>
            <div>Vereinbarte Arbeitszeit: 8,00 Stunden</div>
            <div className="font-bold text-emerald-700 pt-1 border-t border-slate-100">
              Differenz: 1,25 Stunden (1 Stunde und 15 Minuten)
            </div>
          </div>
          <p className="text-xs text-slate-600">
            Die Differenz beträgt eine Stunde und 15 Minuten. Ob sie rechtlich oder vertraglich als
            Überstunden anzusehen ist, hängt von den maßgeblichen Vereinbarungen und Umständen ab.
          </p>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Für eine verlässliche Kontrolle sollten Beschäftigte ihre Arbeitszeiten regelmäßig
          dokumentieren. Dabei sind auch mögliche Zuschläge, Ausgleichsregelungen und tarifliche
          Bestimmungen zu beachten.
        </p>
      </section>

      {/* 9. Vorteile eines digitalen Industrie Stunden Rechners */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-indigo-100 text-indigo-700 rounded-xl">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Vorteile eines digitalen Industrie Stunden Rechners
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Ein digitaler Rechner bietet verschiedene praktische Vorteile für Arbeitnehmer und
          Unternehmen:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Schnelle Ergebnisse:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Arbeitszeiten lassen sich ohne aufwendige manuelle Berechnungen bestimmen.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Einfache Bedienung:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              In der Regel reichen Arbeitsbeginn, Arbeitsende und Pausendauer aus.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Bessere Übersicht:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Einzelne Schichten und tägliche Arbeitszeiten können leichter nachvollzogen werden.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Weniger Rechenfehler:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Besonders bei Minutenumrechnungen und Schichten über Mitternacht hilft eine automatisierte Berechnung.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Dezimalumrechnung:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Die Ergebnisse können direkt als Dezimalstunden (100er-Teilung) dargestellt werden.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Flexible Nutzung:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Ein browserbasierter Rechner kann auf PCs, Tablets und Smartphones verwendet werden.
            </p>
          </div>
        </div>

        <p className="text-slate-600 text-sm mt-6 leading-relaxed">
          Wichtig ist, die Möglichkeiten des jeweiligen Tools zu berücksichtigen. Nicht jeder
          Stundenrechner speichert Arbeitszeitdaten, berechnet Überstunden automatisch oder erstellt
          Berichte für die Lohnabrechnung.
        </p>
      </section>

      {/* 10. Häufige Fehler bei der Berechnung industrieller Arbeitsstunden */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-rose-100 text-rose-700 rounded-xl">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Häufige Fehler bei der Berechnung industrieller Arbeitsstunden
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Auch bei einer einfachen Arbeitszeitberechnung können Fehler entstehen. Mit einigen
          grundlegenden Regeln lassen sie sich vermeiden:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Pausen vergessen:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Wenn die Pause nicht abgezogen wird, ist die berechnete Nettoarbeitszeit zu hoch.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Minuten falsch umrechnen:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              45 Minuten entsprechen 0,75 Stunden und nicht 0,45 Stunden.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Mitternacht übersehen:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Bei einer Nachtschicht muss berücksichtigt werden, dass das Arbeitsende am nächsten Kalendertag liegt.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Soll- und Ist-Zeit verwechseln:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Die vereinbarte Arbeitszeit und die tatsächlich geleisteten Stunden sind unterschiedliche Werte.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Rundungsfehler verursachen:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Werden einzelne Zeitabschnitte zu früh gerundet, können sich Abweichungen bei der Wochen- oder Monatsberechnung ergeben.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Sonderregelungen ignorieren:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Nachtarbeit, Feiertage, tarifliche Zuschläge und besondere Schichtmodelle können zusätzliche Berechnungen erfordern.
            </p>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Wer diese Punkte berücksichtigt, kann die Ergebnisse eines Industrie Stunden Rechners
          besser überprüfen und zuverlässiger dokumentieren.
        </p>
      </section>

      {/* 11. Fazit: Arbeitszeiten in der Industrie einfach berechnen */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 sm:p-10 text-white shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-indigo-500/20 text-indigo-300 rounded-xl border border-indigo-400/30">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Fazit: Arbeitszeiten in der Industrie einfach berechnen
          </h2>
        </div>

        <p className="text-slate-200 mb-4 leading-relaxed">
          Ein <strong>Industrie Stunden Rechner</strong> ist eine praktische Unterstützung für alle,
          die Arbeitszeiten in Produktionsbetrieben, Werkstätten oder anderen industriellen Bereichen
          zuverlässig ermitteln möchten. Mit wenigen Angaben lassen sich die tägliche Nettoarbeitszeit,
          die Wochenstunden und die Dauer einzelner Schichten berechnen.
        </p>

        <p className="text-slate-200 mb-6 leading-relaxed">
          Besonders hilfreich ist ein digitaler Rechner bei wechselnden Schichten, Nachtdiensten und
          der Umrechnung von Stunden und Minuten in Dezimalwerte. Dadurch werden manuelle
          Berechnungen einfacher und mögliche Fehler lassen sich reduzieren.
        </p>

        <p className="text-slate-200 mb-6 leading-relaxed">
          Wenn du deine Arbeitszeiten schnell kontrollieren möchtest, nutze einen passenden
          Stundenrechner und trage Arbeitsbeginn, Arbeitsende sowie Pausen sorgfältig ein. So erhältst
          du eine übersichtliche Grundlage für deine persönliche Arbeitszeitdokumentation und den
          Vergleich mit deiner vereinbarten Arbeitszeit.
        </p>

        <div className="p-5 rounded-xl bg-white/10 border border-white/10 text-slate-100 text-sm leading-relaxed mb-6">
          <strong className="text-indigo-300 block mb-1">Tipp:</strong>
          Auf diesem Arbeitsstundenrechner kannst du auch weitere Zeitberechnungen durchführen,
          beispielsweise Stunden und Minuten addieren, Arbeitszeiten in Dezimalstunden umwandeln oder
          die tägliche Arbeitsdauer ermitteln. Wähle dafür die passende Rechnerfunktion und
          überprüfe deine Eingaben, bevor du die Ergebnisse für deine Dokumentation verwendest.
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-sm transition-colors"
          >
            <span>Zum Hauptrechner</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/stunden-dezimal-rechner"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors"
          >
            <span>Stunden Dezimal Rechner</span>
          </Link>
          <Link
            href="/stunden-minuten-rechner"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors"
          >
            <span>Stunden Minuten Rechner</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
