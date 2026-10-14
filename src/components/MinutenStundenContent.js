import Link from "next/link";
import {
  Clock,
  ArrowRightLeft,
  Calculator,
  AlertTriangle,
  CheckCircle2,
  Table as TableIcon,
  Sparkles,
  ArrowRight,
  Briefcase,
  Users,
  GraduationCap,
  Layers,
  Percent,
} from "lucide-react";

export default function MinutenStundenContent() {
  const tableData = [
    { min: "10", dez: "0,1667", stdMin: "0 Std. 10 Min." },
    { min: "15", dez: "0,25", stdMin: "0 Std. 15 Min." },
    { min: "20", dez: "0,3333", stdMin: "0 Std. 20 Min." },
    { min: "30", dez: "0,5", stdMin: "0 Std. 30 Min." },
    { min: "40", dez: "0,6667", stdMin: "0 Std. 40 Min." },
    { min: "45", dez: "0,75", stdMin: "0 Std. 45 Min." },
    { min: "60", dez: "1,0", stdMin: "1 Std. 0 Min." },
    { min: "75", dez: "1,25", stdMin: "1 Std. 15 Min." },
    { min: "90", dez: "1,5", stdMin: "1 Std. 30 Min." },
    { min: "105", dez: "1,75", stdMin: "1 Std. 45 Min." },
    { min: "120", dez: "2,0", stdMin: "2 Std. 0 Min." },
    { min: "150", dez: "2,5", stdMin: "2 Std. 30 Min." },
    { min: "180", dez: "3,0", stdMin: "3 Std. 0 Min." },
    { min: "240", dez: "4,0", stdMin: "4 Std. 0 Min." },
    { min: "300", dez: "5,0", stdMin: "5 Std. 0 Min." },
    { min: "360", dez: "6,0", stdMin: "6 Std. 0 Min." },
    { min: "480", dez: "8,0", stdMin: "8 Std. 0 Min." },
    { min: "600", dez: "10,0", stdMin: "10 Std. 0 Min." },
  ];

  return (
    <article className="mt-12 sm:mt-16 space-y-10 sm:space-y-12 text-slate-800 leading-relaxed">
      {/* 1. Was ist ein Minuten Stunden Rechner? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-amber-100 text-amber-800 rounded-xl">
            <Clock className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Was ist ein Minuten Stunden Rechner?
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Ein <strong>Minuten Stunden Rechner</strong> ist ein digitales Werkzeug, mit dem Sie
          Minutenangaben in Stunden umwandeln können. Statt die Berechnung jedes Mal manuell
          durchzuführen, erhalten Sie mit einem geeigneten Rechner schnell das gewünschte Ergebnis.
        </p>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Das Werkzeug eignet sich für unterschiedliche Situationen. Arbeitnehmer können damit ihre
          Arbeitszeiten kontrollieren, Schüler können mathematische Aufgaben lösen und Unternehmen
          können Zeitangaben für die interne Planung aufbereiten.
        </p>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Minuten und Stunden werden häufig gemeinsam verwendet, obwohl sie unterschiedliche
          Einheiten zur Messung von Zeit darstellen. Bei kurzen Zeiträumen sind Minuten oft
          übersichtlicher. Für längere Zeitabschnitte werden dagegen meistens Stunden bevorzugt.
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
            Typische Umrechnungsbeispiele im Überblick:
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm font-mono text-slate-800">
            <li>• 30 Minuten = 0,5 Stunden (halbe Stunde)</li>
            <li>• 60 Minuten = 1,0 Stunde (ganze Stunde)</li>
            <li>• 90 Minuten = 1 Stunde und 30 Minuten (1,5 Std.)</li>
            <li>• 180 Minuten = 3,0 Stunden</li>
            <li>• 240 Minuten = 4,0 Stunden</li>
          </ul>
        </div>
      </section>

      {/* 2. Wie funktioniert die Umrechnung von Minuten in Stunden? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Calculator className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Wie funktioniert die Umrechnung von Minuten in Stunden?
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Die Grundlage jeder Umrechnung ist die feste Beziehung zwischen Minuten und Stunden. Eine
          Stunde hat immer 60 Minuten. Um aus einer Minutenangabe einen Stundenwert zu berechnen,
          teilen Sie die Minutenanzahl durch 60.
        </p>

        {/* Formula */}
        <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200 mb-6 font-mono">
          <span className="text-xs uppercase tracking-wider font-bold text-amber-900 block font-sans mb-1">
            Die grundlegende Formel lautet:
          </span>
          <div className="text-lg sm:text-xl font-extrabold text-amber-950">
            Stunden = Minuten ÷ 60
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Beispiel 1: 150 Minuten
            </span>
            <div className="font-mono text-sm font-bold text-slate-900 mb-1">150 ÷ 60 = 2,5 Stunden</div>
            <p className="text-xs text-slate-600">
              Entspricht in klassischer Schreibweise <strong>2 Stunden und 30 Minuten</strong>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Beispiel 2: 45 Minuten
            </span>
            <div className="font-mono text-sm font-bold text-slate-900 mb-1">45 ÷ 60 = 0,75 Stunden</div>
            <p className="text-xs text-slate-600">
              Entspricht genau <strong>0,75 Dezimalstunden</strong> (drei Viertelstunden).
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm">
          <strong>Vorsicht bei Dezimalwerten:</strong> Während 2,5 Dezimalstunden genau zwei Stunden
          und 30 Minuten bedeuten, stehen 2,30 Dezimalstunden rechnerisch für zwei Stunden und 18
          Minuten (0,30 × 60 = 18).
        </div>
      </section>

      {/* 3. Tabelle mit Beispielen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <TableIcon className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Minuten in Stunden umrechnen: Tabelle mit Beispielen
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Die folgende Tabelle zeigt häufig verwendete Minutenwerte und ihre entsprechenden
          Stundenangaben:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs mb-6 max-w-2xl">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                <th scope="col" className="py-3 px-4 text-right">Minuten</th>
                <th scope="col" className="py-3 px-4 text-right">Stunden als Dezimalzahl</th>
                <th scope="col" className="py-3 px-4">Stunden und Minuten</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {tableData.map((row, idx) => (
                <tr
                  key={row.min}
                  className={`hover:bg-amber-50/40 transition-colors ${
                    idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"
                  }`}
                >
                  <td className="py-2.5 px-4 text-right font-mono font-bold text-slate-900">
                    {row.min} Min.
                  </td>
                  <td className="py-2.5 px-4 text-right font-mono font-bold text-amber-700">
                    {row.dez} Std.
                  </td>
                  <td className="py-2.5 px-4 font-semibold text-slate-800">{row.stdMin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Die Tabelle eignet sich als schnelle Orientierung, wenn Sie häufig mit Zeitangaben
          arbeiten. Für andere Werte können Sie dieselbe Formel anwenden oder unseren Online-Rechner
          nutzen.
        </p>
      </section>

      {/* 4. Minuten Stunden Rechner für die Arbeitszeit */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Briefcase className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Minuten Stunden Rechner für die Arbeitszeit
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Die Umrechnung von Minuten in Stunden spielt besonders bei der Arbeitszeiterfassung eine
          wichtige Rolle. Viele Beschäftigte dokumentieren ihre tägliche Arbeitszeit in Stunden und
          Minuten, während Lohnabrechnungen, Tabellen oder betriebliche Auswertungen teilweise
          Dezimalstunden verwenden.
        </p>

        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Beispiel 1: 7 Stunden und 45 Minuten
            </span>
            <div className="font-mono text-xs sm:text-sm text-slate-800 space-y-1">
              <div>45 ÷ 60 = 0,75 Stunden</div>
              <div className="font-bold text-amber-800">7 + 0,75 = 7,75 Dezimalstunden</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Beispiel 2: 8 Stunden und 20 Minuten
            </span>
            <div className="font-mono text-xs sm:text-sm text-slate-800 space-y-1">
              <div>20 ÷ 60 ≈ 0,3333 Stunden</div>
              <div className="font-bold text-amber-800">8 + 0,3333 ≈ 8,3333 Dezimalstunden</div>
            </div>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Beachten Sie dabei, dass Pausen je nach betrieblicher Regelung und rechtlichen Vorgaben
          gesondert behandelt werden müssen. Die Umrechnung selbst bestimmt nicht, welche Zeiten als
          vergütungspflichtige Arbeitszeit gelten.
        </p>
      </section>

      {/* 5. Dezimalstunden und Stunden-Minuten-Format verstehen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-rose-100 text-rose-700 rounded-xl">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Dezimalstunden und Stunden-Minuten-Format verstehen
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Ein häufiger Fehler bei der Zeitberechnung entsteht durch die Verwechslung von
          Dezimalstunden und der klassischen Schreibweise mit Stunden und Minuten.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs sm:text-sm font-mono">
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            1 Stunde 15 Minuten = <strong className="text-slate-900">1,25 Dezimalstunden</strong>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            1 Stunde 30 Minuten = <strong className="text-slate-900">1,50 Dezimalstunden</strong>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            1 Stunde 45 Minuten = <strong className="text-slate-900">1,75 Dezimalstunden</strong>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
            2 Stunden 20 Minuten ≈ <strong className="text-slate-900">2,3333 Dezimalstunden</strong>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm">
          <strong>Warum ist diese Unterscheidung wichtig?</strong> Das Dezimalsystem basiert auf
          Zehnteln und Hundertsteln. Eine Stunde besteht jedoch aus 60 Minuten. Die Angabe{" "}
          <strong>4,30 Stunden</strong> bedeutet beispielsweise vier Stunden und 18 Minuten, nicht
          vier Stunden und 30 Minuten!
        </div>
      </section>

      {/* 6. Stunden wieder in Minuten umrechnen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
            <ArrowRightLeft className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Stunden wieder in Minuten umrechnen
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Die Umrechnung funktioniert auch in die entgegengesetzte Richtung. Wenn Sie eine
          Stundenangabe in Minuten umwandeln möchten, multiplizieren Sie die Stunden mit 60.
        </p>

        {/* Formula */}
        <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200 mb-6 font-mono">
          <span className="text-xs uppercase tracking-wider font-bold text-emerald-900 block font-sans mb-1">
            Umkehrformel:
          </span>
          <div className="text-lg sm:text-xl font-extrabold text-emerald-950">
            Minuten = Stunden × 60
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 text-xs sm:text-sm">
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 font-mono">
            3 Std. × 60 = <strong>180 Minuten</strong>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 font-mono">
            2,5 Std. × 60 = <strong>150 Minuten</strong>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 font-mono">
            1,75 Std. × 60 = <strong>105 Minuten</strong>
          </div>
        </div>
      </section>

      {/* 7. Mehrere Minutenwerte zusammenrechnen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Layers className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Mehrere Minutenwerte zusammenrechnen
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Manchmal müssen Sie nicht nur einen einzelnen Zeitwert umwandeln, sondern mehrere
          Minutenangaben addieren, beispielsweise bei Aufgabenblöcken, Trainingseinheiten oder Terminen:
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Beispielrechnung mit drei Aufgaben:
          </span>
          <ul className="space-y-1 font-mono text-xs sm:text-sm text-slate-800 mb-3">
            <li>• Aufgabe 1: 35 Minuten</li>
            <li>• Aufgabe 2: 50 Minuten</li>
            <li>• Aufgabe 3: 40 Minuten</li>
            <li className="font-bold text-amber-800 pt-1 border-t border-slate-200">
              Summe: 35 + 50 + 40 = 125 Minuten
            </li>
          </ul>
          <p className="text-xs text-slate-600 font-mono">
            125 ÷ 60 = 2,0833 Stunden (entspricht 2 Stunden und 5 Minuten).
          </p>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Wenn Sie mehrere Zeitabschnitte regelmäßig erfassen müssen, empfiehlt es sich, die
          einzelnen Werte zunächst in Minuten zu addieren und erst danach in Stunden umzuwandeln.
          Dadurch vermeiden Sie Rundungsfehler.
        </p>
      </section>

      {/* 8. Vorteile eines digitalen Minuten Stunden Rechners */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-amber-100 text-amber-800 rounded-xl">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Vorteile eines digitalen Minuten Stunden Rechners
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">1. Schnelle Berechnung:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Keine manuelle Formelanwendung bei jeder Rechnung nötig.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">2. Weniger Rechenfehler:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Verhindert Verwechslungen zwischen 60er- und 100er-Teilung.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">3. Zeiterfassung:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Minutenwerte mühelos in Dezimalstunden für Stundenzettel wandeln.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">4. Einfache Anwendung:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Keine komplizierten Vorkenntnisse erforderlich.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">5. Schule &amp; Alltag:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Praktisch für Matheaufgaben, Trainingszeiten und Terminplanung.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">6. Flexible Zeitwerte:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Funktioniert bei 15 Minuten ebenso wie bei 1.000 Minuten.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Häufige Fehler bei der Umrechnung */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-rose-100 text-rose-700 rounded-xl">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Häufige Fehler bei der Minuten-Stunden-Umrechnung
          </h2>
        </div>

        <div className="space-y-3 mb-2">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Minuten durch 100 statt durch 60 teilen:</strong>
            <p className="text-xs text-slate-600">Eine Stunde hat 60 Minuten. Immer durch 60 teilen.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Nachkommastellen falsch interpretieren:</strong>
            <p className="text-xs text-slate-600">0,5 Stunden sind 30 Minuten, 0,25 Stunden sind 15 Minuten.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Zu früh runden:</strong>
            <p className="text-xs text-slate-600">Bei mehreren Zeitabschnitten erst das Gesamtergebnis runden.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Pausenzeiten nicht berücksichtigen:</strong>
            <p className="text-xs text-slate-600">Anwesenheitszeit ist nicht immer gleich Nettoarbeitszeit.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Unterschiedliche Zeitformate vermischen:</strong>
            <p className="text-xs text-slate-600">Dezimalstunden und hh:mm strikt getrennt halten.</p>
          </div>
        </div>
      </section>

      {/* 10. Wann ist ein Minuten Stunden Rechner besonders sinnvoll? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Users className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Wann ist ein Minuten Stunden Rechner besonders sinnvoll?
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Ein Minuten Stunden Rechner eignet sich für viele alltägliche und berufliche Situationen:
          Arbeitnehmer prüfen Stundenzettel, Selbstständige dokumentieren Projektaufwände, Schüler
          lösen Rechenaufgaben und Sportler vergleichen Trainingszeiten.
        </p>

        <p className="text-slate-600 text-sm leading-relaxed">
          Entscheidend ist, dass die Umrechnung eine einheitliche Grundlage für die weitere Berechnung
          schafft. Sobald alle Zeitangaben im richtigen Format vorliegen, lassen sie sich leichter
          vergleichen und dokumentieren.
        </p>
      </section>

      {/* 11. Fazit: Minuten einfach in Stunden umwandeln */}
      <section className="bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 rounded-2xl p-6 sm:p-10 text-white shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-amber-500/20 text-amber-300 rounded-xl border border-amber-400/30">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Fazit: Minuten einfach in Stunden umwandeln
          </h2>
        </div>

        <p className="text-slate-200 mb-4 leading-relaxed">
          Ein <strong>Minuten Stunden Rechner</strong> ist ein nützliches Werkzeug, wenn Sie
          Zeitangaben schnell und zuverlässig umrechnen möchten. Die wichtigste Regel lautet: Teilen
          Sie die Minutenanzahl durch 60, um den entsprechenden Stundenwert zu erhalten.
        </p>

        <p className="text-slate-200 mb-6 leading-relaxed">
          Ob Sie Arbeitszeiten dokumentieren, mehrere Zeitabschnitte zusammenrechnen oder Minuten in
          Dezimalstunden umwandeln möchten – mit der richtigen Formel lassen sich die meisten
          Berechnungen unkompliziert durchführen.
        </p>

        <div className="p-5 rounded-xl bg-white/10 border border-white/10 text-slate-100 text-sm leading-relaxed mb-6">
          Besuchen Sie arbeitsstundenrechner.de, um weitere hilfreiche Informationen rund um
          Arbeitsstunden, Zeitberechnung und die Umrechnung verschiedener Zeiteinheiten zu entdecken.
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-sm transition-colors"
          >
            <span>Zum Hauptrechner</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/stunden-minuten-rechner"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors"
          >
            <span>Stunden Minuten Rechner</span>
          </Link>
          <Link
            href="/stunden-dezimal-rechner"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors"
          >
            <span>Stunden Dezimal Rechner</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
