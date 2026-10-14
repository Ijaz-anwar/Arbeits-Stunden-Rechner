import Link from "next/link";
import {
  TrendingDown,
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
  Coins,
  Scale,
  Calendar,
  Percent,
} from "lucide-react";

export default function StundenReduzierenContent() {
  const reductionExamples = [
    { bisher: "40 Stunden", neu: "35 Stunden", diff: "5 Stunden", pct: "12,5 %" },
    { bisher: "40 Stunden", neu: "32 Stunden", diff: "8 Stunden", pct: "20 %" },
    { bisher: "40 Stunden", neu: "30 Stunden", diff: "10 Stunden", pct: "25 %" },
    { bisher: "38 Stunden", neu: "30 Stunden", diff: "8 Stunden", pct: "21,05 %" },
    { bisher: "35 Stunden", neu: "28 Stunden", diff: "7 Stunden", pct: "20 %" },
    { bisher: "30 Stunden", neu: "24 Stunden", diff: "6 Stunden", pct: "20 %" },
    { bisher: "25 Stunden", neu: "20 Stunden", diff: "5 Stunden", pct: "20 %" },
  ];

  return (
    <article className="mt-12 sm:mt-16 space-y-10 sm:space-y-12 text-slate-800 leading-relaxed">
      {/* 1. Was ist ein Stunden Reduzieren Rechner? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-rose-100 text-rose-700 rounded-xl">
            <TrendingDown className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Was ist ein Stunden Reduzieren Rechner?
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Ein <strong>Stunden Reduzieren Rechner</strong> ist ein praktisches Online-Werkzeug, mit
          dem Sie eine bestehende Arbeitszeit verringern und die daraus entstehende Differenz
          berechnen können. Dazu geben Sie Ihre aktuellen Arbeitsstunden und die gewünschte neue
          Stundenzahl ein. Anschließend können Sie ermitteln, wie viele Stunden pro Woche oder Monat
          eingespart werden.
        </p>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Der Rechner eignet sich insbesondere für Arbeitnehmer, Teilzeitbeschäftigte, Vollzeitkräfte
          und Personen, die ihre Arbeitszeit künftig flexibler gestalten möchten.
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Praxisbeispiel:
          </span>
          <p className="text-sm text-slate-700 leading-relaxed">
            Sie arbeiten derzeit 40 Stunden pro Woche und möchten Ihre Arbeitszeit auf 32 Stunden
            reduzieren. Die Differenz beträgt <strong>acht Stunden pro Woche</strong>. Mit einem
            Rechner lässt sich außerdem feststellen, dass Ihre Arbeitszeit dadurch um{" "}
            <strong>20 Prozent</strong> sinkt.
          </p>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Die Berechnung ist hilfreich, wenn Sie verschiedene Arbeitszeitmodelle miteinander
          vergleichen oder Ihre berufliche und private Zeit besser planen möchten.
        </p>
      </section>

      {/* 2. Wie funktioniert der Stunden Reduzieren Rechner? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-rose-100 text-rose-700 rounded-xl">
            <Calculator className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Wie funktioniert der Stunden Reduzieren Rechner?
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Die Verwendung eines Stunden Reduzieren Rechners ist unkompliziert. Sie benötigen lediglich
          Ihre bisherige Arbeitszeit und die gewünschte neue Stundenzahl:
        </p>

        <ol className="space-y-3 text-xs sm:text-sm text-slate-700 mb-6">
          <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
            <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              1
            </span>
            <div>
              <strong className="text-slate-900 block">Bisherige Arbeitszeit eingeben:</strong>
              <span>Tragen Sie ein, wie viele Stunden Sie aktuell pro Woche arbeiten.</span>
            </div>
          </li>
          <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
            <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              2
            </span>
            <div>
              <strong className="text-slate-900 block">Neue Arbeitszeit festlegen:</strong>
              <span>Geben Sie die Stundenzahl ein, die Sie künftig arbeiten möchten.</span>
            </div>
          </li>
          <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
            <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              3
            </span>
            <div>
              <strong className="text-slate-900 block">Stundendifferenz berechnen:</strong>
              <span>Ziehen Sie die neue Arbeitszeit von der bisherigen Arbeitszeit ab.</span>
            </div>
          </li>
          <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
            <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              4
            </span>
            <div>
              <strong className="text-slate-900 block">Prozentuale Reduzierung ermitteln:</strong>
              <span>Berechnen Sie, um wie viel Prozent Ihre Arbeitszeit sinkt.</span>
            </div>
          </li>
          <li className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
            <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              5
            </span>
            <div>
              <strong className="text-slate-900 block">Ergebnis vergleichen:</strong>
              <span>Nutzen Sie die Ergebnisse, um unterschiedliche Arbeitszeitmodelle zu beurteilen.</span>
            </div>
          </li>
        </ol>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
          <strong className="block text-slate-900 mb-1">Rechenbeispiel (38,5 auf 30 Stunden):</strong>
          Wenn Sie beispielsweise Ihre Arbeitszeit von 38,5 auf 30 Stunden pro Woche reduzieren,
          ergibt sich eine Differenz von <strong>8,5 Stunden</strong>. Die prozentuale Reduzierung
          beträgt rund <strong>22,08 Prozent</strong>.
        </div>
      </section>

      {/* 3. Wie berechnet man die Reduzierung der Arbeitszeit? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-rose-100 text-rose-700 rounded-xl">
            <Percent className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Wie berechnet man die Reduzierung der Arbeitszeit?
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Die Berechnung der reduzierten Arbeitszeit basiert auf einfachen mathematischen Formeln:
        </p>

        {/* Formulas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-5 rounded-xl bg-rose-50/70 border border-rose-200 font-mono">
            <span className="text-xs uppercase tracking-wider font-bold text-rose-900 block font-sans mb-1">
              Formel für die Stundendifferenz:
            </span>
            <div className="text-sm sm:text-base font-extrabold text-rose-950">
              Stundenreduzierung = bisherige Arbeitszeit − neue Arbeitszeit
            </div>
          </div>

          <div className="p-5 rounded-xl bg-rose-50/70 border border-rose-200 font-mono">
            <span className="text-xs uppercase tracking-wider font-bold text-rose-900 block font-sans mb-1">
              Formel für die prozentuale Reduzierung:
            </span>
            <div className="text-sm sm:text-base font-extrabold text-rose-950">
              Prozent = (Stundenreduzierung ÷ bisherige Arbeitszeit) × 100
            </div>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-4">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
            Beispiel: 40 Stunden auf 35 Stunden reduzieren
          </h3>
          <ul className="space-y-1 font-mono text-xs sm:text-sm text-slate-800">
            <li>• Bisherige Arbeitszeit: 40 Stunden</li>
            <li>• Neue Arbeitszeit: 35 Stunden</li>
            <li>• Reduzierung: 40 − 35 = 5 Stunden</li>
            <li className="font-bold text-rose-700 pt-1 border-t border-slate-200">
              • Prozentuale Reduzierung: (5 ÷ 40) × 100 = 12,5 Prozent
            </li>
          </ul>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Ihre Arbeitszeit sinkt in diesem Fall um fünf Stunden pro Woche beziehungsweise 12,5
          Prozent. Wichtig ist, dass beide Arbeitszeitangaben auf derselben Grundlage beruhen,
          beispielsweise auf Wochenstunden.
        </p>
      </section>

      {/* 4. Beispiele für die Arbeitszeitreduzierung */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <TableIcon className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Beispiele für die Arbeitszeitreduzierung
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Die folgende Übersicht zeigt, wie sich typische Arbeitszeitmodelle rechnerisch verändern:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs mb-6 max-w-2xl">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                <th scope="col" className="py-3 px-4">Bisherige Wochenstunden</th>
                <th scope="col" className="py-3 px-4 text-center">Neue Wochenstunden</th>
                <th scope="col" className="py-3 px-4 text-center">Weniger Stunden</th>
                <th scope="col" className="py-3 px-4 text-right">Reduzierung</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {reductionExamples.map((row, idx) => (
                <tr
                  key={row.bisher + row.neu}
                  className={`hover:bg-rose-50/40 transition-colors ${
                    idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"
                  }`}
                >
                  <td className="py-2.5 px-4 font-semibold text-slate-900">{row.bisher}</td>
                  <td className="py-2.5 px-4 text-center text-slate-700 font-medium">{row.neu}</td>
                  <td className="py-2.5 px-4 text-center font-mono font-bold text-rose-600">
                    −{row.diff}
                  </td>
                  <td className="py-2.5 px-4 text-right font-mono font-bold text-slate-900">
                    {row.pct}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Diese Übersicht verdeutlicht, dass dieselbe prozentuale Reduzierung je nach bisheriger
          Arbeitszeit zu einer unterschiedlichen Anzahl eingesparter Stunden führt.
        </p>
      </section>

      {/* 5. Arbeitszeit reduzieren: Wie viele Stunden bleiben übrig? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
            <Clock className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Arbeitszeit reduzieren: Wie viele Stunden bleiben übrig?
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Viele Arbeitnehmer möchten wissen, wie sich eine bestimmte Reduzierung auf ihre bisherige
          Wochenarbeitszeit auswirkt. Wenn Sie beispielsweise 40 Stunden pro Woche arbeiten und Ihre
          Arbeitszeit um 10 Prozent verringern möchten, arbeiten Sie vier Stunden weniger (neue Zeit:
          36 Stunden). Bei 25 Prozent sind es 30 Stunden, bei 50 Prozent verbleiben 20 Stunden.
        </p>

        {/* Formula */}
        <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200 mb-6 font-mono">
          <span className="text-xs uppercase tracking-wider font-bold text-emerald-900 block font-sans mb-1">
            Formel für die neue Arbeitszeit:
          </span>
          <div className="text-sm sm:text-base font-extrabold text-emerald-950">
            Neue Arbeitszeit = bisherige Arbeitszeit × (1 − Reduzierung in Prozent ÷ 100)
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 mb-4">
          <strong>Beispiel bei 40 Stunden und 15 % Reduzierung:</strong>
          <div className="font-mono text-sm font-bold text-emerald-700 mt-1">
            40 × (1 − 15 ÷ 100) = 40 × 0,85 = 34 Stunden pro Woche
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Diese Berechnung ist besonders nützlich, wenn Sie bereits wissen, um welchen Prozentsatz
          Sie Ihre Arbeitszeit reduzieren möchten.
        </p>
      </section>

      {/* 6. Arbeitszeit von Vollzeit auf Teilzeit reduzieren */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Briefcase className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Arbeitszeit von Vollzeit auf Teilzeit reduzieren
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Der Wechsel von Vollzeit zu Teilzeit ist ein häufiger Grund, einen Stunden Reduzieren
          Rechner zu verwenden. Teilzeitarbeit kann mehr Zeit für Familie, persönliche Interessen oder
          eine berufliche Weiterbildung schaffen:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">40 auf 35 Stunden:</strong>
            <p className="text-xs text-slate-600">
              5 Stunden weniger pro Woche (−12,5 %). Schafft beispielsweise einen freien Freitagnachmittag.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">40 auf 32 Stunden:</strong>
            <p className="text-xs text-slate-600">
              8 Stunden weniger pro Woche (−20 %). Klassische 4-Tage-Woche bei 8 Stunden täglich.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">40 auf 30 Stunden:</strong>
            <p className="text-xs text-slate-600">
              10 Stunden weniger pro Woche (−25 %). 6 Stunden täglich an 5 Tagen oder 7,5h an 4 Tagen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">40 auf 20 Stunden:</strong>
            <p className="text-xs text-slate-600">
              20 Stunden weniger pro Woche (−50 %). Halbtagsbeschäftigung mit 4 Stunden täglich.
            </p>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Die tatsächliche Gestaltung der Teilzeit hängt unter anderem vom Arbeitsvertrag, den
          betrieblichen Voraussetzungen und der Vereinbarung mit dem Arbeitgeber ab.
        </p>
      </section>

      {/* 7. Arbeitszeit reduzieren und Gehalt vergleichen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
            <Coins className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Arbeitszeit reduzieren und Gehalt vergleichen
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Wenn Sie weniger Stunden arbeiten möchten, spielt neben der gewonnenen Freizeit auch das
          Einkommen eine wichtige Rolle. Bei einem gleichbleibenden Stundenlohn sinkt das Bruttogehalt
          bei einer proportionalen Reduzierung der Arbeitszeit grundsätzlich entsprechend.
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Beispiel: 40h auf 32h (−20 %) bei 3.200 € Brutto
          </span>
          <div className="space-y-1.5 font-mono text-xs sm:text-sm text-slate-800">
            <div>• Bisheriges Bruttogehalt: 3.200 Euro (bei 40h/Woche)</div>
            <div>• Arbeitszeitreduzierung: 20 Prozent (auf 32h/Woche)</div>
            <div>• Rechnerisches neues Bruttogehalt: 2.560 Euro</div>
            <div className="font-bold text-rose-700 pt-1 border-t border-slate-200">
              • Monatliche Bruttodifferenz: −640 Euro
            </div>
          </div>
        </div>

        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
          Diese Rechnung ist ein vereinfachtes Beispiel. Das tatsächliche Gehalt kann von Ihrem
          Arbeitsvertrag, tariflichen Regelungen, Zulagen und weiteren Vergütungsbestandteilen
          abhängen.
        </p>

        <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-slate-700 text-xs sm:text-sm">
          <strong>Wichtiger Hinweis zum Nettogehalt:</strong> Auch das Nettogehalt sinkt aufgrund der
          progressiven Einkommensteuer in Deutschland in der Regel <em>weniger stark</em> als das
          Bruttogehalt. Für eine fundierte Entscheidung sollten Sie zusätzlich einen
          Brutto-Netto-Rechner heranziehen.
        </div>
      </section>

      {/* 8. Wochenstunden in Monatsstunden umrechnen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-indigo-100 text-indigo-700 rounded-xl">
            <Calendar className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Wochenstunden in Monatsstunden umrechnen
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Wenn Sie Ihre Arbeitszeit reduzieren, kann es hilfreich sein, nicht nur die Wochenstunden,
          sondern auch die durchschnittlichen Monatsstunden zu berechnen.
        </p>

        {/* Formula */}
        <div className="p-5 rounded-xl bg-indigo-50/70 border border-indigo-200 mb-6 font-mono">
          <span className="text-xs uppercase tracking-wider font-bold text-indigo-900 block font-sans mb-1">
            Formel zur Monatsberechnung:
          </span>
          <div className="text-sm sm:text-base font-extrabold text-indigo-950">
            Durchschnittliche Monatsstunden = Wochenstunden × 52 ÷ 12
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs text-slate-500 font-bold block mb-1">Bei 40 Wochenstunden:</span>
            <div className="font-mono text-sm font-bold text-slate-900">
              40 × 52 ÷ 12 = 173,33 Stunden / Monat
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs text-slate-500 font-bold block mb-1">Bei 32 Wochenstunden:</span>
            <div className="font-mono text-sm font-bold text-indigo-700">
              32 × 52 ÷ 12 = 138,67 Stunden / Monat
            </div>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Die durchschnittliche monatliche Arbeitszeit verringert sich damit um rund{" "}
          <strong>34,66 Stunden</strong>. Diese Werte sind statistische Monatsmittelwerte.
        </p>
      </section>

      {/* 9. Arbeitszeit gleichmäßig auf die Arbeitstage verteilen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <CalendarCheck className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Arbeitszeit gleichmäßig auf die Arbeitstage verteilen
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Eine Arbeitszeitreduzierung bedeutet nicht automatisch, dass Sie an jedem Arbeitstag weniger
          Stunden leisten müssen. Bei einer Reduzierung auf beispielsweise 30 Wochenstunden ergeben
          sich verschiedene Aufteilungsmodelle:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-slate-900 text-sm mb-1">Variante 1: 5 Arbeitstage</h3>
            <p className="font-mono text-xs text-indigo-700 font-bold mb-1">
              30 Std. ÷ 5 Tage = 6,0 Std. täglich
            </p>
            <p className="text-xs text-slate-600">Kürzere tägliche Arbeitszeit an allen Werktagen.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-slate-900 text-sm mb-1">Variante 2: 4 Arbeitstage</h3>
            <p className="font-mono text-xs text-indigo-700 font-bold mb-1">
              30 Std. ÷ 4 Tage = 7,5 Std. täglich
            </p>
            <p className="text-xs text-slate-600">Ein ganzer freier Wochentag (z. B. 4-Tage-Woche).</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-bold text-slate-900 text-sm mb-1">Variante 3: 3 Arbeitstage</h3>
            <p className="font-mono text-xs text-indigo-700 font-bold mb-1">
              30 Std. ÷ 3 Tage = 10,0 Std. täglich
            </p>
            <p className="text-xs text-slate-600">
              Konzentrierte Tage unter Beachtung der 10-Stunden-Höchstgrenze laut ArbZG.
            </p>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Ob ein Modell umsetzbar ist, hängt von den betrieblichen Anforderungen und den
          arbeitsrechtlichen Vorschriften ab.
        </p>
      </section>

      {/* 10. Wer kann einen Stunden Reduzieren Rechner verwenden? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Users className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Wer kann einen Stunden Reduzieren Rechner verwenden?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Arbeitnehmer in Vollzeit:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Zur Vorbereitung von Teilzeitanträgen und Prüfung der Stundendifferenz.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Teilzeitbeschäftigte:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Zur weiteren Anpassung oder Neuausrichtung bestehender Arbeitszeiten.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Eltern &amp; Familien:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Zur besseren Abstimmung von Erwerbsarbeit, Kinderbetreuung und Pflege.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Studierende:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Zur Vereinbarkeit von Berufsausbildung, Studium und Arbeitsalltag.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Arbeitgeber &amp; HR:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Zur schnellen Kalkulation von Arbeitszeitwünschen der Mitarbeiter.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Selbstständige &amp; Freelancer:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Zur bewussten Begrenzung von Projektarbeitsstunden für mehr Freizeit.
            </p>
          </div>
        </div>
      </section>

      {/* 11. Welche Vorteile bietet ein Online-Rechner? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-rose-100 text-rose-700 rounded-xl">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Welche Vorteile bietet ein Online-Rechner?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Schnelle Ergebnisse:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Stundendifferenz und Restarbeitszeit ohne komplizierte Rechnungen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Prozentuale Berechnung:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Exakte prozentuale Verringerung der bisherigen Arbeitsleistung.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Bessere Vergleiche:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Modelle wie 35, 32 oder 30 Stunden direkt nebeneinander prüfen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">Planungsgrundlage:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Solide Zahlenbasis für das Gespräch mit dem Vorgesetzten oder HR.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 sm:col-span-2 lg:col-span-2">
            <strong className="text-slate-900 block text-sm mb-1">Fehlerfreie Kalkulation:</strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Automatische Umrechnung verhindert Rundungs- und Übertragungsfehler bei Wochen- und
              Monatsstunden.
            </p>
          </div>
        </div>
      </section>

      {/* 12. Was sollten Sie vor einer Arbeitszeitreduzierung beachten? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-amber-100 text-amber-700 rounded-xl">
            <Scale className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Was sollten Sie vor einer Arbeitszeitreduzierung beachten?
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Bevor Sie Ihre Arbeitszeit offiziell reduzieren, sollten Sie einige wichtige Punkte prüfen:
        </p>

        <div className="space-y-4 mb-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">
              1. Arbeitsorganisation &amp; Aufgaben:
            </strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Prüfen Sie, wie viele Stunden Sie tatsächlich für Ihre Aufgaben benötigen und ob
              Aufgaben umverteilt werden müssen.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">
              2. Finanzielle Auswirkungen:
            </strong>
            <p className="text-xs sm:text-sm text-slate-600">
              Vergleichen Sie Ihr bisheriges Brutto- und Nettoeinkommen mit Ihren laufenden Ausgaben
              und Vorsorgebeiträgen (Rente).
            </p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">
              3. Rechtliche Voraussetzungen (TzBfG &amp; Brückenteilzeit):
            </strong>
            <p className="text-xs sm:text-sm text-slate-600">
              In Deutschland besteht nach dem Teilzeit- und Befristungsgesetz (TzBfG) unter bestimmten
              Voraussetzungen ein Rechtsanspruch auf Teilzeit sowie auf zeitlich begrenzte
              Brückenteilzeit (mit Rückkehrrecht zur Vollzeit).
            </p>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Besprechen Sie Ihre Vorstellungen rechtzeitig mit Ihrem Arbeitgeber und halten Sie
          vereinbarte Änderungen stets schriftlich fest.
        </p>
      </section>

      {/* 13. Fazit: Arbeitszeit mit dem Stunden Reduzieren Rechner einfach planen */}
      <section className="bg-gradient-to-br from-slate-900 via-rose-950 to-slate-900 rounded-2xl p-6 sm:p-10 text-white shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-rose-500/20 text-rose-300 rounded-xl border border-rose-400/30">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Fazit: Arbeitszeit mit dem Stunden Reduzieren Rechner einfach planen
          </h2>
        </div>

        <p className="text-slate-200 mb-4 leading-relaxed">
          Mit einem <strong>Stunden Reduzieren Rechner</strong> können Sie Ihre bisherige Arbeitszeit
          mit einem neuen Arbeitszeitmodell vergleichen und die zeitlichen Auswirkungen einer
          Reduzierung schnell ermitteln. Sie sehen, wie viele Stunden pro Woche oder Monat wegfallen
          und wie hoch die prozentuale Veränderung ausfällt.
        </p>

        <p className="text-slate-200 mb-6 leading-relaxed">
          Ob Sie von Vollzeit auf Teilzeit wechseln, Ihre Wochenstunden aus familiären Gründen anpassen
          oder mehr Zeit für persönliche Projekte gewinnen möchten – eine übersichtliche Berechnung
          erleichtert die Planung.
        </p>

        <div className="p-5 rounded-xl bg-white/10 border border-white/10 text-slate-100 text-sm leading-relaxed mb-6">
          Nutzen Sie die Ergebnisse als Ausgangspunkt, um unterschiedliche Arbeitszeitmodelle zu
          vergleichen. Berücksichtigen Sie dabei auch Ihr Einkommen, Ihre beruflichen Aufgaben und die
          rechtlichen Rahmenbedingungen. So können Sie eine fundierte Entscheidung über Ihre
          zukünftige Arbeitszeit treffen.
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-sm transition-colors"
          >
            <span>Zum Hauptrechner</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/stunden-zusammenrechnen-rechner"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors"
          >
            <span>Stunden Zusammenrechnen</span>
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
