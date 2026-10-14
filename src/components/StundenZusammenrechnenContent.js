import Link from "next/link";
import {
  PlusCircle,
  Clock,
  CalendarCheck,
  Calculator,
  AlertTriangle,
  CheckCircle2,
  Table as TableIcon,
  Sparkles,
  ArrowRight,
  Briefcase,
  Users,
  GraduationCap,
  Percent,
} from "lucide-react";

export default function StundenZusammenrechnenContent() {
  const threeDayRows = [
    { tag: "Montag", dauer: "7 Std. 20 Min." },
    { tag: "Dienstag", dauer: "8 Std. 10 Min." },
    { tag: "Mittwoch", dauer: "6 Std. 45 Min." },
  ];

  const decimalConversionRows = [
    { zeit: "1 Stunde 15 Minuten", dezimal: "1,25" },
    { zeit: "2 Stunden 30 Minuten", dezimal: "2,50" },
    { zeit: "3 Stunden 45 Minuten", dezimal: "3,75" },
    { zeit: "6 Stunden 20 Minuten", dezimal: "6,33" },
    { zeit: "8 Stunden 10 Minuten", dezimal: "8,17" },
  ];

  return (
    <article className="mt-12 sm:mt-16 space-y-10 sm:space-y-12 text-slate-800 leading-relaxed">
      {/* 1. Was ist ein Stunden Zusammenrechnen Rechner? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <PlusCircle className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Was ist ein Stunden Zusammenrechnen Rechner?
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Ein <strong>Stunden Zusammenrechnen Rechner</strong> ist ein digitales Werkzeug, mit dem
          sich mehrere Zeitangaben zu einer Gesamtdauer addieren lassen. Dabei können sowohl volle
          Stunden als auch Minuten berücksichtigt werden. Je nach Rechner können Sie einzelne
          Zeitwerte eingeben und erhalten anschließend die Summe Ihrer Angaben.
        </p>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Die Berechnung ist besonders nützlich, wenn Sie Arbeitszeiten aus verschiedenen Tagen
          zusammenfassen möchten. Auch für Schüler, Studierende, Selbstständige, Freiberufler und
          Unternehmen kann ein solcher Rechner hilfreich sein.
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Ein einfaches Beispiel:
          </span>
          <ul className="space-y-1 font-mono text-xs sm:text-sm text-slate-800 mb-3">
            <li>• Montag: 7 Stunden und 30 Minuten</li>
            <li>• Dienstag: 8 Stunden und 15 Minuten</li>
            <li>• Mittwoch: 6 Stunden und 45 Minuten</li>
            <li className="font-bold text-blue-700 pt-1 border-t border-slate-200">
              • Gesamtaddition: 22 Stunden und 30 Minuten
            </li>
          </ul>
          <p className="text-xs text-slate-600">
            Die Addition ergibt insgesamt <strong>22 Stunden und 30 Minuten</strong>.
          </p>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Ohne einen geeigneten Rechner müssten Sie die Minuten zunächst addieren und anschließend
          in Stunden umwandeln. Ein Online-Tool übernimmt diese Aufgabe automatisch und reduziert das
          Risiko von Rechenfehlern.
        </p>
      </section>

      {/* 2. Wie funktioniert das Stunden Zusammenrechnen? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Calculator className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Wie funktioniert das Stunden Zusammenrechnen?
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Das Prinzip ist einfach: Alle eingegebenen Zeitspannen werden addiert. Sobald die Summe der
          Minuten 60 erreicht oder überschreitet, werden diese Minuten in zusätzliche Stunden
          umgerechnet.
        </p>

        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm mb-6">
          <p className="font-semibold mb-1">Besonderheit des 60-Minuten-Systems:</p>
          <p>
            Eine Stunde besteht aus 60 Minuten. Deshalb müssen Zeitangaben anders behandelt werden
            als Dezimalzahlen. Beispielsweise entsprechen 2 Stunden und 45 Minuten nicht 2,45
            Stunden, sondern <strong>2,75 Stunden</strong>.
          </p>
        </div>

        <h3 className="text-sm font-bold text-slate-900 mb-3">
          Schritt-für-Schritt-Vorgehensweise:
        </h3>
        <ol className="space-y-2.5 text-xs sm:text-sm text-slate-700">
          <li className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
            <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              1
            </span>
            <span>Erfassen Sie alle Zeitangaben, die Sie addieren möchten.</span>
          </li>
          <li className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
            <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              2
            </span>
            <span>Trennen Sie Stunden und Minuten voneinander.</span>
          </li>
          <li className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
            <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              3
            </span>
            <span>Addieren Sie zunächst sämtliche Stunden.</span>
          </li>
          <li className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
            <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              4
            </span>
            <span>Addieren Sie anschließend sämtliche Minuten.</span>
          </li>
          <li className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
            <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              5
            </span>
            <span>Wandeln Sie jeweils volle 60 Minuten in eine zusätzliche Stunde um.</span>
          </li>
          <li className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
            <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              6
            </span>
            <span>Fassen Sie das Ergebnis zu einer Gesamtdauer zusammen.</span>
          </li>
        </ol>

        <p className="text-slate-600 text-sm mt-4 leading-relaxed">
          Ein Stundenrechner erledigt diese Schritte automatisch. Dadurch können Sie auch längere
          Listen mit Arbeitszeiten schneller bearbeiten.
        </p>
      </section>

      {/* 3. Stunden und Minuten zusammenrechnen: Beispiele */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
            <Clock className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Stunden und Minuten zusammenrechnen: Beispiele
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Um die Funktionsweise besser zu verstehen, helfen einige praktische Beispiele aus dem
          Alltag:
        </p>

        <div className="space-y-4 mb-6">
          {/* Beispiel 1 */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Beispiel 1: Zwei Zeitspannen addieren
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 mb-3">
              Sie möchten 3 Stunden und 25 Minuten mit 2 Stunden und 40 Minuten zusammenrechnen.
            </p>
            <div className="space-y-1 font-mono text-xs sm:text-sm bg-white p-3 rounded-lg border border-slate-200 text-slate-800">
              <div>Stunden: 3 + 2 = 5 Stunden</div>
              <div>Minuten: 25 + 40 = 65 Minuten (entspricht 1 Stunde und 5 Minuten)</div>
              <div className="font-bold text-emerald-700 pt-1 border-t border-slate-100">
                Gesamtergebnis: 5 Stunden + 1 Stunde 5 Minuten = 6 Stunden und 5 Minuten
              </div>
            </div>
          </div>

          {/* Beispiel 2 */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Beispiel 2: Mehrere Arbeitszeiten addieren
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 mb-3">
              Ein Mitarbeiter arbeitet an drei Tagen unterschiedlich lange:
            </p>
            <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white mb-3 max-w-md">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-slate-700 font-bold">
                  <tr>
                    <th className="py-2 px-3">Arbeitstag</th>
                    <th className="py-2 px-3 text-right">Arbeitszeit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {threeDayRows.map((r) => (
                    <tr key={r.tag}>
                      <td className="py-1.5 px-3 font-medium text-slate-800">{r.tag}</td>
                      <td className="py-1.5 px-3 text-right font-mono text-slate-900">{r.dauer}</td>
                    </tr>
                  ))}
                  <tr className="bg-slate-50 font-bold border-t border-slate-200">
                    <td className="py-2 px-3 text-slate-900">Gesamt</td>
                    <td className="py-2 px-3 text-right text-blue-700 font-mono">
                      22 Std. 15 Min.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600">
              In diesem Beispiel ergeben die drei Arbeitszeiten zusammen 22 Stunden und 15 Minuten.
              Diese Summe lässt sich anschließend mit weiteren Tagen ergänzen, um beispielsweise die
              Wochenarbeitszeit zu ermitteln.
            </p>
          </div>

          {/* Beispiel 3 */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
              Beispiel 3: Minuten ohne volle Stunde addieren
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 mb-2">
              Sie haben die Zeitspannen 1 Stunde und 50 Minuten, 2 Stunden und 35 Minuten sowie 45
              Minuten:
            </p>
            <div className="space-y-1 font-mono text-xs sm:text-sm bg-white p-3 rounded-lg border border-slate-200 text-slate-800">
              <div>Stunden: 1 + 2 = 3 Stunden</div>
              <div>Minuten: 50 + 35 + 45 = 130 Minuten (entspricht 2 Stunden und 10 Minuten)</div>
              <div className="font-bold text-emerald-700 pt-1 border-t border-slate-100">
                Endergebnis: 3 + 2 Stunden 10 Minuten = 5 Stunden und 10 Minuten
              </div>
            </div>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Diese Beispiele zeigen, warum ein Stunden Zusammenrechnen Rechner bei der täglichen
          Zeitplanung besonders praktisch ist.
        </p>
      </section>

      {/* 4. Arbeitsstunden zusammenrechnen für die tägliche Arbeit */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Briefcase className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Arbeitsstunden zusammenrechnen für die tägliche Arbeit
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Für Arbeitnehmer gehört die Erfassung der Arbeitszeit in vielen Berufen zum Alltag. Dabei
          müssen häufig mehrere Arbeitsblöcke berücksichtigt werden. Beispielsweise beginnt die
          Arbeit am Morgen, wird durch eine Pause unterbrochen und am Nachmittag fortgesetzt.
        </p>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Wenn Sie Ihre Arbeitsstunden selbst dokumentieren, sollten Sie zunächst die tatsächlich
          geleisteten Arbeitsintervalle erfassen. Anschließend können Sie diese addieren und mit
          Ihrer vorgesehenen Arbeitszeit vergleichen.
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Praxisbeispiel mit zwei Arbeitsblöcken:
          </span>
          <p className="text-sm text-slate-700 mb-2">
            Angenommen, Sie arbeiten vormittags 4 Stunden und 15 Minuten und nachmittags weitere 3
            Stunden und 30 Minuten:
          </p>
          <div className="font-mono text-sm font-bold text-blue-700 bg-white p-3 rounded-lg border border-slate-200">
            4 Std. 15 Min. + 3 Std. 30 Min. = 7 Stunden und 45 Minuten
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          Ein Rechner unterstützt Sie dabei, diese Summe schnell zu ermitteln. Das ist besonders
          hilfreich, wenn Sie mehrere Arbeitsblöcke pro Tag haben oder Ihre Zeiten für einen
          Stundenzettel vorbereiten möchten.
        </p>

        <p className="text-slate-600 text-sm leading-relaxed">
          Beachten Sie, dass die Addition der Zeitspannen allein noch nicht automatisch bestimmt,
          welche Zeiten arbeitsrechtlich als Arbeitszeit gelten. Dafür müssen gegebenenfalls Pausen,
          betriebliche Vereinbarungen und die geltenden gesetzlichen Regelungen berücksichtigt werden.
        </p>
      </section>

      {/* 5. Wochenarbeitszeit berechnen und zusammenfassen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-indigo-100 text-indigo-700 rounded-xl">
            <CalendarCheck className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Wochenarbeitszeit berechnen und zusammenfassen
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Wer eine regelmäßige Wochenarbeitszeit hat, muss häufig die Arbeitsstunden mehrerer Tage
          addieren. Das betrifft sowohl Vollzeitbeschäftigte als auch Teilzeitkräfte und Personen mit
          wechselnden Dienstzeiten.
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Wochenbeispiel (38 Stunden):
          </span>
          <ul className="space-y-1 font-mono text-xs sm:text-sm text-slate-700 mb-3">
            <li>• Montag: 8 Stunden</li>
            <li>• Dienstag: 7 Stunden und 30 Minuten</li>
            <li>• Mittwoch: 8 Stunden und 15 Minuten</li>
            <li>• Donnerstag: 7 Stunden und 45 Minuten</li>
            <li>• Freitag: 6 Stunden und 30 Minuten</li>
            <li className="font-bold text-indigo-700 pt-1 border-t border-slate-200">
              • Gesamt: 38 Stunden Wochenarbeitszeit
            </li>
          </ul>
        </div>

        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
          Mit einem Stundenrechner können Sie diese Werte einzeln eingeben und die Summe überprüfen.
          Wenn sich Ihre Arbeitszeiten jede Woche verändern, müssen Sie keine neue Berechnungsmethode
          lernen. Sie tragen lediglich die aktuellen Zeitangaben ein.
        </p>

        <p className="text-slate-600 text-sm leading-relaxed">
          Für eine bessere Übersicht empfiehlt es sich, die Arbeitszeiten täglich zu notieren und am
          Ende der Woche zusammenzurechnen. Dadurch erkennen Sie leichter, wie viele Stunden Sie
          insgesamt gearbeitet haben.
        </p>
      </section>

      {/* 6. Arbeitszeit mit Pausen richtig berechnen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-amber-100 text-amber-700 rounded-xl">
            <Clock className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Arbeitszeit mit Pausen richtig berechnen
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Bei der Berechnung der täglichen Arbeitszeit spielt die Pause eine wichtige Rolle.
          Entscheidend ist, ob Sie die reine Anwesenheitsdauer oder die tatsächliche Arbeitszeit
          ermitteln möchten.
        </p>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Die Anwesenheitsdauer beschreibt den Zeitraum zwischen Arbeitsbeginn und Arbeitsende. Die
          tatsächliche Arbeitszeit kann dagegen kürzer sein, wenn unbezahlte Pausen abzuziehen sind.
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Pausen-Berechnungsbeispiel:
          </span>
          <div className="space-y-1 font-mono text-xs sm:text-sm text-slate-800">
            <div>• Arbeitsbeginn: 08:00 Uhr</div>
            <div>• Arbeitsende: 16:30 Uhr</div>
            <div>• Pause: 30 Minuten</div>
            <div className="font-bold text-amber-800 pt-1 border-t border-slate-200">
              Zwischen 08:00 Uhr und 16:30 Uhr liegen 8 Stunden und 30 Minuten. Nach Abzug der
              30-minütigen Pause verbleiben genau 8 Stunden Arbeitszeit.
            </div>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Wenn Sie mehrere solcher Zeitspannen addieren, sollten Sie darauf achten, nicht dieselbe
          Pause zweimal abzuziehen. Erfassen Sie entweder bereits bereinigte Arbeitszeiten oder
          berechnen Sie zunächst die Anwesenheitsdauer und ziehen Sie die anrechenbaren Pausen
          anschließend ab.
        </p>
      </section>

      {/* 7. Stunden in Dezimalzahlen umrechnen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Percent className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Stunden in Dezimalzahlen umrechnen
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Manchmal reicht die Angabe in Stunden und Minuten nicht aus. Für Lohnabrechnungen,
          Tabellenkalkulationen oder bestimmte Zeiterfassungssysteme wird die Arbeitszeit häufig als
          Dezimalzahl benötigt.
        </p>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Dazu müssen die Minuten durch 60 geteilt werden. Das Ergebnis wird anschließend zu den
          vollen Stunden addiert.
        </p>

        {/* Formula Box */}
        <div className="p-5 rounded-xl bg-blue-50/70 border border-blue-200 mb-6 font-mono">
          <span className="text-xs uppercase tracking-wider font-bold text-blue-900 block font-sans mb-1">
            Die Formel lautet:
          </span>
          <div className="text-lg sm:text-xl font-extrabold text-blue-950">
            Dezimalstunden = Stunden + Minuten ÷ 60
          </div>
        </div>

        <h3 className="text-sm font-bold text-slate-900 mb-3">Beispiele im Überblick:</h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs mb-6 max-w-lg">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                <th scope="col" className="py-3 px-4 sm:px-6">Zeitangabe</th>
                <th scope="col" className="py-3 px-4 sm:px-6 text-right">Dezimalstunden</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {decimalConversionRows.map((row, idx) => (
                <tr
                  key={row.zeit}
                  className={`hover:bg-blue-50/50 transition-colors ${
                    idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"
                  }`}
                >
                  <td className="py-2.5 px-4 sm:px-6 font-semibold text-slate-900">{row.zeit}</td>
                  <td className="py-2.5 px-4 sm:px-6 text-right font-mono font-bold text-blue-700">
                    {row.dezimal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
          Wichtig ist die Unterscheidung zwischen Zeitformat und Dezimalformat. Eine Arbeitszeit von
          7 Stunden und 30 Minuten entspricht <strong>7,5 Dezimalstunden</strong> und nicht 7,30
          Stunden.
        </p>

        <p className="text-slate-600 text-sm leading-relaxed">
          Wenn Sie Arbeitszeiten für eine Abrechnung vorbereiten, sollten Sie außerdem prüfen,
          welche Rundungsregeln Ihr Arbeitgeber oder Ihr verwendetes System verlangt.
        </p>
      </section>

      {/* 8. Wer profitiert von einem Stundenrechner? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Users className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Wer profitiert von einem Stundenrechner?
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Ein Stunden Zusammenrechnen Rechner ist für viele unterschiedliche Nutzergruppen geeignet:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Arbeitnehmer:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Beschäftigte können ihre täglichen Arbeitszeiten addieren und ihre Wochenstunden
              kontrollieren.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Teilzeitkräfte:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Bei wechselnden Schichten hilft die Berechnung dabei, die insgesamt geleisteten Stunden
              zu ermitteln.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">
              Selbstständige &amp; Freiberufler:
            </strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Wer nach Stunden abrechnet, kann den Zeitaufwand verschiedener Projekte oder Kunden
              zusammenfassen.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Unternehmen:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Betriebe können die manuelle Kontrolle von Zeitaufzeichnungen und Stundenzetteln
              vereinfachen.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Schüler &amp; Studierende:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Lernzeiten, Praktikumsstunden oder die Dauer verschiedener Aufgaben lassen sich
              problemlos addieren.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Projektteams:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Bei der Planung von Aufgaben kann die Summe einzelner Zeitblöcke helfen, den gesamten
              Aufwand einzuschätzen.
            </p>
          </div>
        </div>

        <p className="text-slate-600 text-sm mt-6 leading-relaxed">
          Die Anwendung ist nicht auf berufliche Zwecke beschränkt. Sie eignet sich überall dort, wo
          mehrere Zeitangaben zu einer Gesamtdauer zusammengeführt werden sollen.
        </p>
      </section>

      {/* 9. Häufige Fehler beim Zusammenrechnen von Stunden */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-rose-100 text-rose-700 rounded-xl">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Häufige Fehler beim Zusammenrechnen von Stunden
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Obwohl die Addition von Arbeitszeiten einfach erscheint, entstehen bei manuellen
          Berechnungen immer wieder typische Fehler:
        </p>

        <div className="space-y-4 mb-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-slate-900 text-sm mb-1">
              1. Minuten wie Dezimalzahlen behandeln
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Ein häufiger Fehler besteht darin, 2 Stunden und 45 Minuten als 2,45 Stunden zu
              notieren. Tatsächlich entsprechen 45 Minuten drei Vierteln einer Stunde. Der korrekte
              Dezimalwert lautet deshalb 2,75 Stunden.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-slate-900 text-sm mb-1">
              2. Die Umrechnung von 60 Minuten vergessen
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Wenn mehrere Zeitspannen addiert werden, können mehr als 60 Minuten entstehen. Diese
              müssen in volle Stunden umgerechnet werden.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-slate-900 text-sm mb-1">3. Pausen nicht berücksichtigen</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Wer die Anwesenheitsdauer als Arbeitszeit übernimmt, ohne gegebenenfalls abzuziehende
              Pausen zu berücksichtigen, erhält möglicherweise ein falsches Ergebnis.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-slate-900 text-sm mb-1">4. Einzelne Zeitangaben übersehen</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Bei längeren Arbeitswochen können einzelne Tage oder Arbeitsblöcke leicht vergessen
              werden. Eine strukturierte Liste oder ein Online-Rechner hilft dabei, die Eingaben
              übersichtlich zu halten.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-slate-900 text-sm mb-1">5. Falsche Rundungen verwenden</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Bei der Umrechnung in Dezimalstunden können Rundungen kleine Unterschiede verursachen. Es
              ist sinnvoll, zunächst mit den exakten Minutenwerten zu rechnen und erst am Ende zu
              runden.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Vorteile eines Online-Stundenrechners */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Vorteile eines Online-Stundenrechners
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Ein Online-Rechner bietet gegenüber der manuellen Berechnung mehrere Vorteile. Er spart
          Zeit, erleichtert die Addition zahlreicher Zeitangaben und hilft, typische Umrechnungsfehler
          zu vermeiden:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Schnelle Addition:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Mehrere Stunden- und Minutenwerte werden sofort summiert.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Übersichtliche Darstellung:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Gesamtarbeitszeit und Dezimalstunden werden klar aufgeschlüsselt.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Weniger Rechenaufwand:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Kein mühsames Umrechnen von 60-Minuten-Überträgen per Hand.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Wochenstunden-Kontrolle:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Praktische Unterstützung beim Abgleich mit Ihrer vertraglichen Sollarbeitszeit.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Stundenzettel &amp; Projekte:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Ideal für die Vorbereitung von Zeitnachweisen, Abrechnungen und Projektberichten.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Keine Formeln nötig:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Einfache Eingabe direkt im Browser ohne Formelkenntnisse.
            </p>
          </div>
        </div>
      </section>

      {/* 11. Fazit: Stunden schnell und zuverlässig zusammenrechnen */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-2xl p-6 sm:p-10 text-white shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-500/20 text-blue-300 rounded-xl border border-blue-400/30">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Fazit: Stunden schnell und zuverlässig zusammenrechnen
          </h2>
        </div>

        <p className="text-slate-200 mb-4 leading-relaxed">
          Ein <strong>Stunden Zusammenrechnen Rechner</strong> ist ein praktisches Hilfsmittel, wenn
          Sie mehrere Zeitspannen addieren und Ihre gesamte Arbeitszeit ermitteln möchten. Er
          erleichtert die Berechnung von Stunden und Minuten, unterstützt die Kontrolle täglicher
          Arbeitszeiten und hilft bei der Ermittlung der Wochenarbeitszeit.
        </p>

        <p className="text-slate-200 mb-6 leading-relaxed">
          Besonders bei wechselnden Schichten, mehreren Arbeitsblöcken oder umfangreichen Zeitlisten
          spart ein Online-Rechner wertvolle Zeit. Wenn Sie zusätzlich auf die korrekte
          Berücksichtigung von Pausen und die Unterscheidung zwischen Zeit- und Dezimalformat achten,
          erhalten Sie eine verlässliche Grundlage für Ihre persönliche Zeitübersicht.
        </p>

        <div className="p-5 rounded-xl bg-white/10 border border-white/10 text-slate-100 text-sm leading-relaxed mb-6">
          Nutzen Sie arbeitsstundenrechner.de, um sich über Arbeitszeitberechnungen zu informieren
          und passende Rechenmethoden für Ihren Alltag kennenzulernen. So behalten Sie Ihre Stunden im
          Blick und können Ihre Zeitangaben einfacher und übersichtlicher zusammenfassen.
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-colors"
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
