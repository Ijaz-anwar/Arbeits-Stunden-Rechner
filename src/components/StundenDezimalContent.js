import Link from "next/link";
import {
  Percent,
  Clock,
  ArrowRightLeft,
  Calculator,
  AlertTriangle,
  CheckCircle2,
  Table as TableIcon,
  Sparkles,
  ArrowRight,
  Briefcase,
  FileSpreadsheet,
  Coins,
  ShieldCheck,
  Zap,
  Smartphone,
  Check,
} from "lucide-react";

export default function StundenDezimalContent() {
  const decimalMinuteRows = [
    { minuten: "5 Minuten", dezimal: "0,0833 Stunden" },
    { minuten: "10 Minuten", dezimal: "0,1667 Stunden" },
    { minuten: "15 Minuten", dezimal: "0,25 Stunden" },
    { minuten: "20 Minuten", dezimal: "0,3333 Stunden" },
    { minuten: "25 Minuten", dezimal: "0,4167 Stunden" },
    { minuten: "30 Minuten", dezimal: "0,5 Stunden" },
    { minuten: "35 Minuten", dezimal: "0,5833 Stunden" },
    { minuten: "40 Minuten", dezimal: "0,6667 Stunden" },
    { minuten: "45 Minuten", dezimal: "0,75 Stunden" },
    { minuten: "50 Minuten", dezimal: "0,8333 Stunden" },
    { minuten: "55 Minuten", dezimal: "0,9167 Stunden" },
    { minuten: "60 Minuten", dezimal: "1,0 Stunde" },
  ];

  return (
    <article className="mt-12 sm:mt-16 space-y-10 sm:space-y-12 text-slate-800 leading-relaxed">
      {/* 1. Was ist ein Stunden Dezimal Rechner? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Calculator className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Was ist ein Stunden Dezimal Rechner?
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Ein <strong>Stunden Dezimal Rechner</strong> ist ein Online-Tool, mit dem du Stunden und
          Minuten in eine Dezimalzahl umwandeln kannst. Anstatt eine Zeitangabe wie 7 Stunden und 45
          Minuten zu verwenden, erhältst du einen numerischen Wert von <strong>7,75 Stunden</strong>.
        </p>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Diese Darstellung wird häufig verwendet, wenn Arbeitszeiten dokumentiert, Stundensätze
          berechnet oder Arbeitsstunden für die Lohnabrechnung zusammengerechnet werden müssen.
        </p>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Die Dezimaldarstellung macht Zeitangaben besonders praktisch, weil sich mehrere Zeitwerte
          einfacher addieren, subtrahieren und multiplizieren lassen. Unternehmen können dadurch
          Arbeitsstunden übersichtlicher erfassen und für weitere Berechnungen verwenden.
        </p>

        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Ein Online-Rechner eignet sich beispielsweise für:
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Arbeitnehmer, die ihre tägliche Arbeitszeit kontrollieren möchten.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Arbeitgeber, die Arbeitsstunden ihrer Mitarbeiter dokumentieren.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Selbstständige, die ihre Arbeitszeit für Kundenprojekte erfassen.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Freiberufler, die Stundenhonorare abrechnen.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Personalabteilungen, die Arbeitszeitdaten vorbereiten.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Studierende und Auszubildende, die Zeitberechnungen durchführen.</span>
            </li>
          </ul>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Mit einem geeigneten Rechner kannst du die Umrechnung in wenigen Sekunden erledigen.
        </p>
      </section>

      {/* 2. Wie funktioniert die Umrechnung von Stunden in Dezimalzahlen? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-indigo-100 text-indigo-700 rounded-xl">
            <Percent className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Wie funktioniert die Umrechnung von Stunden in Dezimalzahlen?
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Bei der Umrechnung von Zeit in Dezimalstunden werden die Minuten durch 60 geteilt.
          Anschließend addierst du das Ergebnis zu den vollständigen Stunden.
        </p>

        {/* Formula Box */}
        <div className="p-5 rounded-xl bg-indigo-50/70 border border-indigo-200 mb-6 font-mono">
          <span className="text-xs uppercase tracking-wider font-bold text-indigo-900 block font-sans mb-1">
            Grundlegende Formel:
          </span>
          <div className="text-xl font-extrabold text-indigo-950">
            Dezimalstunden = Stunden + (Minuten ÷ 60)
          </div>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Der Grund dafür ist einfach: Eine Stunde besteht aus 60 Minuten. Für die Dezimalberechnung
          wird die Stunde jedoch in 100 rechnerische Anteile dargestellt. Deshalb entsprechen 30
          Minuten nicht 0,30 Stunden, sondern <strong>0,5 Stunden</strong>.
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6">
          <h3 className="text-sm font-bold text-slate-900 mb-2">
            Beispiel: 4 Stunden und 30 Minuten umrechnen
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-3">
            Du möchtest 4 Stunden und 30 Minuten in Dezimalstunden umwandeln. Die Berechnung lautet:
          </p>
          <div className="space-y-1 font-mono text-sm bg-white p-3 rounded-lg border border-slate-200 text-slate-800">
            <div>30 ÷ 60 = 0,5</div>
            <div className="font-bold text-indigo-700">4 + 0,5 = 4,5 Dezimalstunden</div>
          </div>
          <p className="text-xs text-slate-700 mt-2">
            Das Ergebnis beträgt <strong>4,5 Dezimalstunden</strong>.
          </p>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Mit einem Stunden Dezimal Rechner kannst du diese Berechnung automatisch durchführen
          lassen. Du musst lediglich die Stunden und Minuten eingeben.
        </p>
      </section>

      {/* 3. Tabelle: Minuten in Dezimalstunden umrechnen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <TableIcon className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Tabelle: Minuten in Dezimalstunden umrechnen
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Die folgende Tabelle zeigt dir, wie viele Dezimalstunden verschiedenen Minutenwerten entsprechen.
        </p>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs mb-6 max-w-xl">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                <th scope="col" className="py-3 px-4 sm:px-6">Minuten</th>
                <th scope="col" className="py-3 px-4 sm:px-6 text-right">Dezimalstunden</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {decimalMinuteRows.map((row, idx) => (
                <tr
                  key={row.minuten}
                  className={`hover:bg-blue-50/50 transition-colors ${
                    idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"
                  }`}
                >
                  <td className="py-2.5 px-4 sm:px-6 font-semibold text-slate-900">
                    {row.minuten}
                  </td>
                  <td className="py-2.5 px-4 sm:px-6 text-right font-mono font-bold text-blue-700">
                    {row.dezimal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Die Werte sind teilweise auf vier Nachkommastellen gerundet. Für die meisten alltäglichen
          Arbeitszeitberechnungen reichen zwei Nachkommastellen aus. Bei der Lohnabrechnung solltest du
          jedoch die geltenden betrieblichen Regeln und Rundungsvorgaben beachten.
        </p>
      </section>

      {/* 4. Stunden und Minuten in Dezimalstunden umrechnen: Beispiele */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
            <Clock className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Stunden und Minuten in Dezimalstunden umrechnen: Beispiele
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Um die Funktionsweise besser zu verstehen, helfen einige praktische Beispiele aus dem Alltag:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Beispiel 1 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Beispiel 1: 2 Stunden und 15 Minuten
            </h3>
            <div className="space-y-1 font-mono text-xs text-slate-700 bg-white p-3 rounded-lg border border-slate-200 mb-2">
              <div>15 ÷ 60 = 0,25</div>
              <div>2 + 0,25 = 2,25</div>
            </div>
            <p className="text-xs font-semibold text-emerald-700">
              Ergebnis: 2 Stunden und 15 Minuten entsprechen 2,25 Dezimalstunden.
            </p>
          </div>

          {/* Beispiel 2 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Beispiel 2: 6 Stunden und 45 Minuten
            </h3>
            <div className="space-y-1 font-mono text-xs text-slate-700 bg-white p-3 rounded-lg border border-slate-200 mb-2">
              <div>45 ÷ 60 = 0,75</div>
              <div>6 + 0,75 = 6,75</div>
            </div>
            <p className="text-xs font-semibold text-emerald-700">
              Ergebnis: 6 Stunden und 45 Minuten entsprechen 6,75 Dezimalstunden.
            </p>
          </div>

          {/* Beispiel 3 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Beispiel 3: 8 Stunden und 20 Minuten
            </h3>
            <div className="space-y-1 font-mono text-xs text-slate-700 bg-white p-3 rounded-lg border border-slate-200 mb-2">
              <div>20 ÷ 60 = 0,3333</div>
              <div>8 + 0,3333 = 8,3333</div>
            </div>
            <p className="text-xs font-semibold text-emerald-700">
              Ergebnis: 8 Stunden und 20 Minuten entsprechen ungefähr 8,33 Dezimalstunden.
            </p>
          </div>

          {/* Beispiel 4 */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Beispiel 4: 7 Stunden und 50 Minuten
            </h3>
            <div className="space-y-1 font-mono text-xs text-slate-700 bg-white p-3 rounded-lg border border-slate-200 mb-2">
              <div>50 ÷ 60 = 0,8333</div>
              <div>7 + 0,8333 = 7,8333</div>
            </div>
            <p className="text-xs font-semibold text-emerald-700">
              Ergebnis: 7 Stunden und 50 Minuten entsprechen ungefähr 7,83 Dezimalstunden.
            </p>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Diese Beispiele zeigen, dass die Umrechnung mit einer einfachen Formel möglich ist.
          Wenn du unterschiedliche Zeitwerte häufig berechnen musst, ist ein Online-Rechner eine
          bequeme Alternative zur manuellen Berechnung.
        </p>
      </section>

      {/* 5. Warum sind Dezimalstunden bei der Arbeitszeit wichtig? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Briefcase className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Warum sind Dezimalstunden bei der Arbeitszeit wichtig?
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Dezimalstunden spielen besonders bei der Arbeitszeiterfassung und der Berechnung von
          Arbeitsentgelten eine wichtige Rolle. Viele Tabellen, Abrechnungssysteme und
          Projektmanagement-Anwendungen verwenden Dezimalzahlen, um Zeitwerte einheitlich zu
          speichern und weiterzuverarbeiten.
        </p>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Angenommen, ein Mitarbeiter arbeitet an einem Tag 7 Stunden und 30 Minuten. In der
          klassischen Zeitdarstellung wird dieser Wert als 7:30 angegeben. Für eine Berechnung mit
          einem Stundenlohn ist es häufig einfacher, mit <strong>7,5 Stunden</strong> zu rechnen.
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Beispiel: Multiplikation mit dem Stundenlohn
          </span>
          <p className="text-sm text-slate-700 mb-2">
            Bei einem beispielhaften Stundenlohn von 20 Euro ergibt sich folgende Rechnung:
          </p>
          <div className="font-mono text-base font-bold text-blue-700 bg-white p-3 rounded-lg border border-slate-200 mb-2">
            7,5 × 20 € = 150 €
          </div>
          <p className="text-xs text-slate-600">
            Damit lässt sich der rechnerische Betrag für die erfasste Arbeitszeit bestimmen. Ob dieser
            Betrag dem tatsächlichen Bruttolohn entspricht, hängt unter anderem von Pausen,
            Zuschlägen, vertraglichen Regelungen und weiteren Abrechnungsfaktoren ab.
          </p>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Ein Stunden Dezimal Rechner hilft dir dabei, den Zeitwert korrekt zu bestimmen, bevor du
          ihn für weitere Berechnungen verwendest.
        </p>
      </section>

      {/* 6. Arbeitszeit mit Pausen in Dezimalstunden berechnen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-amber-100 text-amber-700 rounded-xl">
            <Clock className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Arbeitszeit mit Pausen in Dezimalstunden berechnen
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Bei der täglichen Arbeitszeit müssen Pausen häufig separat berücksichtigt werden. Wenn du
          deine Anwesenheitszeit in Dezimalstunden umrechnen möchtest, solltest du zunächst die
          tatsächliche Arbeitsdauer bestimmen.
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Praxisbeispiel: Arbeitstag mit 30 Min. Pause
          </span>
          <p className="text-sm text-slate-700 mb-3">
            Nehmen wir an, du beginnst um 08:00 Uhr mit der Arbeit und beendest deinen Arbeitstag um
            16:30 Uhr. Deine gesamte Anwesenheitszeit beträgt 8 Stunden und 30 Minuten. Du hast eine
            Pause von 30 Minuten eingelegt, die nicht als Arbeitszeit angerechnet wird:
          </p>
          <ul className="space-y-1.5 font-mono text-xs sm:text-sm bg-white p-4 rounded-xl border border-slate-200 text-slate-800">
            <li>• Anwesenheitszeit: 8 Stunden und 30 Minuten</li>
            <li>• Pause: 30 Minuten</li>
            <li>• Tatsächliche Arbeitszeit: 8 Stunden</li>
            <li className="font-bold text-emerald-700 pt-1 border-t border-slate-100">
              • Dezimalwert: 8,00 Stunden
            </li>
          </ul>
        </div>

        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
          Wenn du diese Berechnung regelmäßig durchführst, kannst du zunächst deine tägliche
          Nettoarbeitszeit ermitteln und sie anschließend mit einem Stunden Dezimal Rechner umwandeln.
        </p>

        <p className="text-slate-600 text-sm leading-relaxed">
          Beachte, dass die Behandlung von Pausen von den jeweiligen Arbeitszeitregelungen abhängt.
          Für verbindliche Abrechnungen solltest du die geltenden gesetzlichen und betrieblichen
          Vorgaben berücksichtigen.
        </p>
      </section>

      {/* 7. Dezimalstunden für die Lohnabrechnung verwenden */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
            <Coins className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Dezimalstunden für die Lohnabrechnung verwenden
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Die Umrechnung in Dezimalstunden ist besonders dann hilfreich, wenn Arbeitszeit und
          Stundenlohn miteinander verrechnet werden müssen.
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Wochenabrechnungsbeispiel: 32 Stunden und 45 Minuten
          </span>
          <p className="text-sm text-slate-700 mb-3">
            Angenommen, du hast in einer Woche insgesamt 32 Stunden und 45 Minuten gearbeitet. Für
            die Umrechnung teilst du 45 Minuten durch 60:
          </p>
          <div className="space-y-1.5 font-mono text-xs sm:text-sm bg-white p-3 rounded-lg border border-slate-200 mb-3">
            <div>45 ÷ 60 = 0,75</div>
            <div>32 + 0,75 = 32,75 Stunden</div>
            <div className="font-bold text-emerald-700 pt-1 border-t border-slate-100">
              32,75 × 18 € = 589,50 €
            </div>
          </div>
          <p className="text-xs text-slate-600">
            Das Ergebnis ist ein rechnerischer Betrag auf Grundlage der angegebenen Arbeitszeit und des
            Stundenlohns. Steuern, Sozialabgaben, Zuschläge, Überstundenregelungen und andere
            Abrechnungsbestandteile sind dabei nicht berücksichtigt.
          </p>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Mit einem Stunden Dezimal Rechner kannst du die benötigte Zeit schnell umwandeln und den
          Wert anschließend für deine Berechnung verwenden.
        </p>
      </section>

      {/* 8. Unterschied zwischen Zeitformat und Dezimalformat */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-rose-100 text-rose-700 rounded-xl">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Unterschied zwischen Zeitformat und Dezimalformat
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Ein häufiger Fehler entsteht, wenn Zeitangaben im Stunden-Minuten-Format mit
          Dezimalzahlen verwechselt werden.
        </p>

        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm mb-6">
          <p className="mb-2">
            Die Angabe <strong>5:30</strong> bedeutet fünf Stunden und dreißig Minuten. Die
            Dezimalzahl <strong>5,30</strong> bedeutet dagegen fünf Stunden und drei Zehntel einer Stunde.
          </p>
          <p className="font-semibold">
            Da 0,30 Stunden genau 18 Minuten entsprechen, sind beide Angaben unterschiedlich! Die
            richtige Umrechnung lautet: 5 Stunden und 30 Minuten = 5,5 Dezimalstunden.
          </p>
        </div>

        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
          Weitere Beispiele verdeutlichen den Unterschied:
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm mb-6">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-500 block text-xs">1:15</span>
            <span className="font-bold text-slate-900">= 1,25 Stunden</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-500 block text-xs">2:30</span>
            <span className="font-bold text-slate-900">= 2,5 Stunden</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-500 block text-xs">3:45</span>
            <span className="font-bold text-slate-900">= 3,75 Stunden</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-500 block text-xs">6:30</span>
            <span className="font-bold text-slate-900">= 6,5 Stunden</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-500 block text-xs">9:15</span>
            <span className="font-bold text-slate-900">= 9,25 Stunden</span>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Wenn du Arbeitszeiten in Excel, einer Zeiterfassungssoftware oder einer Lohnabrechnung
          verwendest, solltest du deshalb immer prüfen, welches Zeitformat das jeweilige System erwartet.
        </p>
      </section>

      {/* 9. Stunden in Dezimalzahlen mit Excel berechnen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
            <FileSpreadsheet className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Stunden in Dezimalzahlen mit Excel berechnen
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Neben einem Online-Rechner kannst du Stunden und Minuten auch mit Excel umwandeln. Das ist
          hilfreich, wenn du größere Arbeitszeitlisten verwaltest oder mehrere Tage zusammenrechnen
          möchtest.
        </p>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Wenn eine Zelle die Arbeitszeit im Excel-Zeitformat enthält, kannst du die Zeit mit 24
          multiplizieren, um den entsprechenden Stundenwert als Dezimalzahl zu erhalten.
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Excel-Formel:
          </span>
          <p className="text-xs sm:text-sm text-slate-700 mb-2">
            Enthält die Zelle A1 beispielsweise den Zeitwert <strong>07:30</strong>:
          </p>
          <div className="font-mono text-base font-bold text-emerald-800 bg-white p-3 rounded-lg border border-slate-200 mb-2">
            =A1*24
          </div>
          <p className="text-xs text-slate-600">
            Das Ergebnis ist <strong>7,5</strong>, sofern die Ergebniszelle als „Zahl“ (Standard) formatiert ist.
          </p>
        </div>

        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
          Für eine korrekte Berechnung müssen die Zellen das passende Zeit- beziehungsweise
          Zahlenformat verwenden. Bei Arbeitszeiten über 24 Stunden können außerdem spezielle
          Formatierungen erforderlich sein.
        </p>

        <p className="text-slate-600 text-sm leading-relaxed">
          Für einzelne Berechnungen ist ein Online-Stunden-Dezimal-Rechner meist schneller. Excel
          eignet sich dagegen besonders gut, wenn du regelmäßig umfangreiche Zeitdaten verarbeiten
          möchtest.
        </p>
      </section>

      {/* 10. Vorteile eines Online-Stunden-Dezimal-Rechners */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Vorteile eines Online-Stunden-Dezimal-Rechners
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Ein Online-Rechner bietet zahlreiche Vorteile gegenüber der manuellen Umrechnung.
          Besonders bei wiederkehrenden Aufgaben kannst du deine Arbeitsabläufe vereinfachen:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Schnelle Ergebnisse:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Du gibst die gewünschte Zeit ein und erhältst den Dezimalwert unmittelbar ohne Wartezeit.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Weniger Rechenfehler:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Die automatische Berechnung reduziert typische Fehler beim Teilen und Addieren.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Einfache Bedienung:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Für die meisten Berechnungen benötigst du keine mathematischen Vorkenntnisse.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Flexible Nutzung:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Ein browserbasierter Rechner lässt sich auf Desktop-Computern, Tablets und Smartphones verwenden.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Praktisch für die Zeiterfassung:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Du kannst berechnete Werte direkt für Arbeitszeitübersichten, Stundenzettel und Projektberichte nutzen.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Keine Formeln erforderlich:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Der Rechner übernimmt die mathematische Umwandlung vollautomatisch für dich.
            </p>
          </div>
        </div>

        <p className="text-slate-600 text-sm mt-6 leading-relaxed">
          Wenn du nur gelegentlich Zeitangaben umrechnen möchtest oder täglich mit unterschiedlichen
          Arbeitszeiten arbeitest, ist ein solches Werkzeug eine praktische Unterstützung.
        </p>
      </section>

      {/* 11. Fazit: Stunden Dezimal Rechner für einfache Zeitberechnungen */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-2xl p-6 sm:p-10 text-white shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-500/20 text-blue-300 rounded-xl border border-blue-400/30">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Fazit: Stunden Dezimal Rechner für einfache Zeitberechnungen
          </h2>
        </div>

        <p className="text-slate-200 mb-4 leading-relaxed">
          Ein <strong>Stunden Dezimal Rechner</strong> ist ein nützliches Hilfsmittel, wenn du
          Stunden und Minuten schnell und zuverlässig in Dezimalzahlen umwandeln möchtest. Die
          Umrechnung ist besonders für die Arbeitszeiterfassung, die Projektplanung, die Berechnung
          von Stundenhonoraren und die Vorbereitung von Lohnabrechnungen hilfreich.
        </p>

        <p className="text-slate-200 mb-6 leading-relaxed">
          Mit der einfachen Formel <strong>Stunden + (Minuten ÷ 60)</strong> kannst du jede
          Zeitangabe selbst berechnen. Für 5 Stunden und 15 Minuten erhältst du beispielsweise 5,25
          Dezimalstunden. Bei 8 Stunden und 45 Minuten sind es 8,75 Stunden.
        </p>

        <div className="p-5 rounded-xl bg-white/10 border border-white/10 text-slate-100 text-sm leading-relaxed mb-6">
          Wenn du Zeit sparen und manuelle Berechnungen vereinfachen möchtest, nutze einen
          Online-Stunden-Dezimal-Rechner. So kannst du deine Zeitwerte schnell umwandeln und
          anschließend für deine täglichen Aufgaben verwenden.
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
            href="/stunden-minuten-rechner"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors"
          >
            <span>Stunden Minuten Rechner</span>
          </Link>
          <Link
            href="/industrie-stunden-rechner"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors"
          >
            <span>Industrie Stunden Rechner</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
