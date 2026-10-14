import Link from "next/link";
import {
  Clock,
  ArrowRightLeft,
  Percent,
  Calculator,
  AlertTriangle,
  CheckCircle2,
  Table as TableIcon,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Info,
  CalendarCheck,
  Briefcase,
} from "lucide-react";

export default function StundenMinutenContent() {
  const conversionData = [
    { stunden: "0,25 Stunden", minuten: "15 Minuten", dezimal: "0,25" },
    { stunden: "0,5 Stunden", minuten: "30 Minuten", dezimal: "0,5" },
    { stunden: "0,75 Stunden", minuten: "45 Minuten", dezimal: "0,75" },
    { stunden: "1 Stunde", minuten: "60 Minuten", dezimal: "1,0" },
    { stunden: "1 Stunde 15 Minuten", minuten: "75 Minuten", dezimal: "1,25" },
    { stunden: "1 Stunde 30 Minuten", minuten: "90 Minuten", dezimal: "1,5" },
    { stunden: "1 Stunde 45 Minuten", minuten: "105 Minuten", dezimal: "1,75" },
    { stunden: "2 Stunden", minuten: "120 Minuten", dezimal: "2,0" },
    { stunden: "2 Stunden 30 Minuten", minuten: "150 Minuten", dezimal: "2,5" },
    { stunden: "3 Stunden", minuten: "180 Minuten", dezimal: "3,0" },
    { stunden: "4 Stunden", minuten: "240 Minuten", dezimal: "4,0" },
    { stunden: "6 Stunden", minuten: "360 Minuten", dezimal: "6,0" },
    { stunden: "7 Stunden 30 Minuten", minuten: "450 Minuten", dezimal: "7,5" },
    { stunden: "8 Stunden", minuten: "480 Minuten", dezimal: "8,0" },
    { stunden: "10 Stunden", minuten: "600 Minuten", dezimal: "10,0" },
    { stunden: "12 Stunden", minuten: "720 Minuten", dezimal: "12,0" },
    { stunden: "24 Stunden", minuten: "1.440 Minuten", dezimal: "24,0" },
  ];

  return (
    <article className="mt-12 sm:mt-16 space-y-10 sm:space-y-12 text-slate-800 leading-relaxed">
      {/* 1. Was ist ein Stunden Minuten Rechner? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Calculator className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Was ist ein Stunden Minuten Rechner?
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Ein <strong>Stunden Minuten Rechner</strong> ist ein digitales Werkzeug zur Umrechnung
          verschiedener Zeitangaben. Er hilft Ihnen dabei, Stunden in Minuten umzurechnen, Minuten
          als Stunden darzustellen oder Zeitwerte miteinander zu vergleichen.
        </p>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Die Grundlage jeder Berechnung ist einfach: <strong>Eine Stunde besteht aus 60 Minuten</strong>.
          Deshalb müssen Zeitangaben anders behandelt werden als gewöhnliche Dezimalzahlen.
        </p>

        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Je nach Anwendungsfall kann ein Zeitrechner beispielsweise folgende Aufgaben erleichtern:
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Stunden in Minuten umrechnen</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Minuten in Stunden und Minuten umwandeln</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Dezimalstunden berechnen</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Arbeitszeiten übersichtlich darstellen</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Zeitangaben für Termine und Aufgaben vergleichen</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Längere Zeiträume in Minuten oder Stunden ausdrücken</span>
            </li>
          </ul>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Ein zuverlässiger Rechner spart Zeit und hilft dabei, unnötige Rechenfehler zu vermeiden.
          Besonders bei vielen einzelnen Zeitwerten ist eine automatische Berechnung praktisch.
        </p>
      </section>

      {/* 2. Wie rechnet man Stunden in Minuten um? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
            <ArrowRightLeft className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Wie rechnet man Stunden in Minuten um?
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Die Umrechnung von Stunden in Minuten ist unkompliziert. Sie müssen lediglich die
          Anzahl der Stunden mit 60 multiplizieren.
        </p>

        {/* Formula Box */}
        <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200 mb-6 font-mono">
          <span className="text-xs uppercase tracking-wider font-bold text-emerald-900 block font-sans mb-1">
            Formel:
          </span>
          <div className="text-xl font-extrabold text-emerald-950">
            Minuten = Stunden × 60
          </div>
        </div>

        <p className="text-slate-600 mb-3 leading-relaxed">
          Wenn Sie beispielsweise wissen möchten, wie viele Minuten drei Stunden entsprechen, rechnen Sie:
        </p>
        <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 font-mono text-sm font-bold text-slate-900 mb-4 inline-block">
          3 × 60 = 180 Minuten
        </div>
        <p className="text-slate-600 mb-6 leading-relaxed">
          Drei Stunden entsprechen also <strong>180 Minuten</strong>.
        </p>

        <p className="text-slate-600 mb-3 leading-relaxed">
          Auch bei Dezimalstunden funktioniert diese Methode. Angenommen, Sie möchten 2,5 Stunden umrechnen:
        </p>
        <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 font-mono text-sm font-bold text-slate-900 mb-4 inline-block">
          2,5 × 60 = 150 Minuten
        </div>
        <p className="text-slate-600 mb-6 leading-relaxed">
          Das Ergebnis lautet <strong>150 Minuten</strong> beziehungsweise <strong>2 Stunden und 30 Minuten</strong>.
        </p>

        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
          Weitere praktische Beispiele:
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm mb-6">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-500 block text-xs">0,5 Stunden</span>
            <span className="font-bold text-slate-900">= 30 Minuten</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-500 block text-xs">1,25 Stunden</span>
            <span className="font-bold text-slate-900">= 75 Minuten</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-500 block text-xs">1,5 Stunden</span>
            <span className="font-bold text-slate-900">= 90 Minuten</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-500 block text-xs">2,75 Stunden</span>
            <span className="font-bold text-slate-900">= 165 Minuten</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-500 block text-xs">4 Stunden</span>
            <span className="font-bold text-slate-900">= 240 Minuten</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-500 block text-xs">8 Stunden</span>
            <span className="font-bold text-slate-900">= 480 Minuten</span>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Mit einem Stunden Minuten Rechner müssen Sie diese Werte nicht jedes Mal selbst ausrechnen.
          Geben Sie einfach den gewünschten Stundenwert ein und nutzen Sie das Ergebnis für Ihre weitere Planung.
        </p>
      </section>

      {/* 3. Wie rechnet man Minuten in Stunden um? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Clock className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Wie rechnet man Minuten in Stunden um?
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Manchmal liegt eine Zeitangabe in Minuten vor, obwohl Sie das Ergebnis in Stunden benötigen.
          Das ist beispielsweise bei Arbeitszeitaufzeichnungen, Unterrichtseinheiten oder Trainingsplänen
          häufig der Fall.
        </p>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Für die Umrechnung teilen Sie die Minutenanzahl durch 60.
        </p>

        {/* Formula Box */}
        <div className="p-5 rounded-xl bg-blue-50/70 border border-blue-200 mb-6 font-mono">
          <span className="text-xs uppercase tracking-wider font-bold text-blue-900 block font-sans mb-1">
            Formel:
          </span>
          <div className="text-xl font-extrabold text-blue-950">
            Stunden = Minuten ÷ 60
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Beispiel 1:
            </span>
            <p className="text-sm text-slate-700 mb-2">Sie möchten 180 Minuten in Stunden umrechnen:</p>
            <div className="font-mono text-sm font-bold text-blue-700">
              180 ÷ 60 = 3 Stunden
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Beispiel 2:
            </span>
            <p className="text-sm text-slate-700 mb-2">Bei 90 Minuten ergibt sich folgende Rechnung:</p>
            <div className="font-mono text-sm font-bold text-blue-700">
              90 ÷ 60 = 1,5 Stunden (1 Std. 30 Min.)
            </div>
          </div>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Wenn die Minutenzahl nicht ohne Rest durch 60 teilbar ist, können Sie das Ergebnis entweder
          als Dezimalzahl angeben oder in vollständige Stunden und verbleibende Minuten aufteilen.
        </p>

        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
          Typische Umrechnungsbeispiele:
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm mb-6">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-500 block text-xs">45 Minuten</span>
            <span className="font-bold text-slate-900">= 0,75 Stunden</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-500 block text-xs">75 Minuten</span>
            <span className="font-bold text-slate-900">= 1,25 Stunden</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-500 block text-xs">100 Minuten</span>
            <span className="font-bold text-slate-900">= 1 Std. 40 Min.</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-500 block text-xs">135 Minuten</span>
            <span className="font-bold text-slate-900">= 2 Std. 15 Min.</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-500 block text-xs">200 Minuten</span>
            <span className="font-bold text-slate-900">= 3 Std. 20 Min.</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-500 block text-xs">300 Minuten</span>
            <span className="font-bold text-slate-900">= 5 Stunden</span>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Diese Umrechnung ist besonders nützlich, wenn Sie längere Tätigkeiten dokumentieren
          oder mehrere Zeitabschnitte zusammenrechnen möchten.
        </p>
      </section>

      {/* 4. Stunden und Minuten in Dezimalstunden umrechnen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-amber-100 text-amber-700 rounded-xl">
            <Percent className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Stunden und Minuten in Dezimalstunden umrechnen
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Bei der Zeiterfassung werden Arbeitszeiten häufig als Dezimalstunden angegeben. Dabei
          handelt es sich um eine Darstellung, bei der Minuten als Bruchteil einer Stunde
          ausgedrückt werden.
        </p>

        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-sm mb-6 flex items-start gap-2.5">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>Wichtig:</strong> Eine Stunde hat 60 und nicht 100 Minuten! Deshalb dürfen Sie
            die Minuten nicht einfach als zwei Nachkommastellen an die Stundenzahl anhängen.
            Beispielsweise sind <strong>7 Stunden und 30 Minuten nicht 7,30 Stunden, sondern exakt 7,5 Stunden</strong>.
          </div>
        </div>

        <p className="text-slate-600 mb-3 leading-relaxed">
          Für die Umrechnung verwenden Sie diese Formel:
        </p>

        {/* Formula Box */}
        <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200 mb-6 font-mono">
          <span className="text-xs uppercase tracking-wider font-bold text-amber-900 block font-sans mb-1">
            Formel:
          </span>
          <div className="text-xl font-extrabold text-amber-950">
            Dezimalstunden = Stunden + (Minuten ÷ 60)
          </div>
        </div>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Ausführliches Rechenbeispiel: 5 Stunden und 45 Minuten
          </span>
          <div className="space-y-1.5 font-mono text-sm text-slate-800">
            <div>1. Schritt (Minuten teilen): 45 ÷ 60 = <strong>0,75</strong></div>
            <div>2. Schritt (Addieren): 5 + 0,75 = <strong>5,75 Stunden</strong></div>
          </div>
          <p className="text-xs text-slate-600 mt-2 font-sans">
            Die Zeitangabe 5 Stunden und 45 Minuten entspricht somit genau <strong>5,75 Dezimalstunden</strong>.
          </p>
        </div>

        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
          Weitere Dezimalbeispiele im Überblick:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm mb-6">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-500 block text-xs">2 Stunden und 15 Minuten</span>
            <span className="font-bold text-slate-900">= 2,25 Stunden</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-500 block text-xs">3 Stunden und 30 Minuten</span>
            <span className="font-bold text-slate-900">= 3,5 Stunden</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-500 block text-xs">4 Stunden und 20 Minuten</span>
            <span className="font-bold text-slate-900">= 4,3333 Stunden (gerundet)</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-500 block text-xs">6 Stunden und 45 Minuten</span>
            <span className="font-bold text-slate-900">= 6,75 Stunden</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-slate-500 block text-xs">8 Stunden und 15 Minuten</span>
            <span className="font-bold text-slate-900">= 8,25 Stunden</span>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Wenn Sie Dezimalstunden für eine Lohnabrechnung oder Rechnung verwenden, sollten Sie die
          geforderte Rundungsregel beachten. Bereits kleine Rundungsunterschiede können sich bei
          vielen Zeitwerten summieren.
        </p>
      </section>

      {/* 5. Umrechnungstabelle für Stunden und Minuten */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-indigo-100 text-indigo-700 rounded-xl">
            <TableIcon className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Umrechnungstabelle für Stunden und Minuten
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Mit der folgenden Tabelle können Sie häufig verwendete Zeitangaben schnell überprüfen.
          Die Werte eignen sich für die Arbeitsplanung, alltägliche Berechnungen und die
          Umrechnung von Dezimalstunden.
        </p>

        {/* Responsive Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs mb-6">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100/90 text-slate-700 text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                <th scope="col" className="py-3 px-4 sm:px-6">Stunden</th>
                <th scope="col" className="py-3 px-4 sm:px-6 text-right">Minuten</th>
                <th scope="col" className="py-3 px-4 sm:px-6 text-right">Dezimalstunden</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {conversionData.map((row, idx) => (
                <tr
                  key={row.stunden}
                  className={`hover:bg-blue-50/50 transition-colors ${
                    idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"
                  }`}
                >
                  <td className="py-2.5 px-4 sm:px-6 font-semibold text-slate-900">
                    {row.stunden}
                  </td>
                  <td className="py-2.5 px-4 sm:px-6 text-right font-mono text-slate-700">
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
          Die Tabelle zeigt, dass eine halbe Stunde immer 30 Minuten und eine Viertelstunde immer
          15 Minuten umfasst. Diese Werte sind besonders hilfreich, wenn Sie häufig mit
          Zeitintervallen arbeiten.
        </p>
      </section>

      {/* 6. Stunden Minuten Rechner für die Arbeitszeit nutzen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Briefcase className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Stunden Minuten Rechner für die Arbeitszeit nutzen
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Ein Stunden Minuten Rechner ist nicht nur für mathematische Umrechnungen geeignet.
          Er kann auch bei der täglichen Arbeitsorganisation helfen.
        </p>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Wenn Sie beispielsweise Ihre Arbeitszeit erfassen, müssen Sie häufig verschiedene
          Zeitabschnitte berücksichtigen. Dazu gehören der Arbeitsbeginn, das Arbeitsende und
          gegebenenfalls die Pausen.
        </p>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/30 border border-slate-200 mb-6">
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
            <CalendarCheck className="w-5 h-5 text-blue-600" />
            Praxisbeispiel: Regulärer Arbeitstag mit Pause
          </h3>
          <p className="text-sm text-slate-700 mb-4">
            Angenommen, Sie beginnen um <strong>08:00 Uhr</strong> mit der Arbeit und beenden Ihren
            Arbeitstag um <strong>16:30 Uhr</strong>. Zwischen diesen beiden Uhrzeiten liegen{" "}
            <strong>8 Stunden und 30 Minuten</strong>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
              <span className="text-slate-500 block text-xs">Schritt 1: Gesamtzeit</span>
              <span className="font-bold text-slate-900 block text-sm">
                08:00 bis 16:30 = 8 Std. 30 Min. (510 Min.)
              </span>
              <span className="text-slate-500 text-xs block">
                8 Stunden × 60 = 480 Minuten + 30 Min. = 510 Minuten
              </span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
              <span className="text-slate-500 block text-xs">Schritt 2: Pause abziehen</span>
              <span className="font-bold text-emerald-700 block text-sm">
                510 − 30 = 480 Min. = 8 Stunden
              </span>
              <span className="text-slate-500 text-xs block">
                Wenn Sie 30 Minuten Pause abziehen, bleiben 8 Stunden Nettoarbeitszeit.
              </span>
            </div>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Beachten Sie, dass ein reiner Stunden-Minuten-Umrechner nicht automatisch alle Besonderheiten
          einer Arbeitszeitabrechnung berücksichtigt. Dazu gehören beispielsweise unterschiedliche
          Pausenregelungen, Schichtwechsel und betriebliche Rundungsvorgaben.
        </p>
      </section>

      {/* 7. Häufige Fehler bei der Zeitumrechnung vermeiden */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-rose-100 text-rose-700 rounded-xl">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Häufige Fehler bei der Zeitumrechnung vermeiden
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Bei der Berechnung von Stunden und Minuten entstehen Fehler häufig durch die
          Verwechslung von Zeitformaten und Dezimalzahlen.
        </p>

        <div className="space-y-4">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-1.5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 text-xs font-black flex items-center justify-center shrink-0">
                1
              </span>
              <span>Stunden und Minuten als Dezimalzahl verwechseln</span>
            </h3>
            <p className="text-sm text-slate-600 pl-8 leading-relaxed">
              7 Stunden und 30 Minuten entsprechen <strong>7,5 Dezimalstunden, nicht 7,30 Stunden</strong>.
              Der Grund dafür ist die Einteilung einer Stunde in 60 Minuten.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-1.5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 text-xs font-black flex items-center justify-center shrink-0">
                2
              </span>
              <span>Mit 100 statt mit 60 rechnen</span>
            </h3>
            <p className="text-sm text-slate-600 pl-8 leading-relaxed">
              Bei der Umrechnung zwischen Stunden und Minuten müssen Sie den <strong>Faktor 60</strong> verwenden.
              Eine Multiplikation mit 100 führt zu einem falschen Ergebnis.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-1.5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 text-xs font-black flex items-center justify-center shrink-0">
                3
              </span>
              <span>Minuten nicht richtig zusammenfassen</span>
            </h3>
            <p className="text-sm text-slate-600 pl-8 leading-relaxed">
              Wenn Sie mehrere Zeitabschnitte addieren, können mehr als 60 Minuten entstehen.
              Beispielsweise ergeben 40 Minuten und 35 Minuten zusammen <strong>75 Minuten</strong>.
              Das entspricht <strong>1 Stunde und 15 Minuten</strong>.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-1.5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 text-xs font-black flex items-center justify-center shrink-0">
                4
              </span>
              <span>Pausen vergessen</span>
            </h3>
            <p className="text-sm text-slate-600 pl-8 leading-relaxed">
              Bei der Ermittlung der tatsächlichen Arbeitszeit muss eine abzuziehende Pause
              berücksichtigt werden. Die gesamte Anwesenheitsdauer ist nicht automatisch identisch
              mit der Nettoarbeitszeit.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-1.5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 text-xs font-black flex items-center justify-center shrink-0">
                5
              </span>
              <span>Falsch runden</span>
            </h3>
            <p className="text-sm text-slate-600 pl-8 leading-relaxed">
              Bei Dezimalstunden können Ergebnisse periodische Nachkommastellen enthalten. Wenn Sie
              mehrere Arbeitszeiten zusammenrechnen, sollten Sie möglichst mit den exakten Werten
              arbeiten und erst nach den geltenden Vorgaben runden.
            </p>
          </div>
        </div>

        <p className="text-slate-600 text-sm mt-6 leading-relaxed">
          Wenn Sie diese Punkte beachten, können Sie Zeitangaben deutlich zuverlässiger berechnen.
        </p>
      </section>

      {/* 8. Fazit: Stunden und Minuten schnell und korrekt berechnen */}
      <section className="bg-gradient-to-br from-slate-900 via-[#0b4870] to-slate-900 rounded-2xl p-6 sm:p-10 text-white shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-500/20 text-blue-300 rounded-xl border border-blue-400/30">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Fazit: Stunden und Minuten schnell und korrekt berechnen
          </h2>
        </div>

        <p className="text-slate-200 mb-4 leading-relaxed">
          Ein Stunden Minuten Rechner erleichtert die Umrechnung von Zeitangaben und unterstützt Sie
          bei zahlreichen Aufgaben im Alltag und Beruf. Mit der Grundregel von 60 Minuten pro Stunde
          können Sie Stunden in Minuten umwandeln, Minuten in Stunden berechnen und Dezimalstunden
          richtig bestimmen.
        </p>

        <p className="text-slate-200 mb-6 leading-relaxed">
          Besonders bei der Arbeitszeiterfassung ist es wichtig, zwischen Stunden-Minuten-Angaben
          und Dezimalstunden zu unterscheiden. Wer die passenden Formeln kennt und typische
          Rechenfehler vermeidet, kann seine Zeitwerte übersichtlich und nachvollziehbar dokumentieren.
        </p>

        <div className="p-5 rounded-xl bg-white/10 border border-white/10 text-slate-100 text-sm leading-relaxed mb-6">
          Nutzen Sie den Arbeitsstundenrechner, um Zeitberechnungen einfacher zu gestalten und
          Ihre Arbeitszeit besser im Blick zu behalten. So sparen Sie Zeit bei wiederkehrenden
          Berechnungen und erhalten eine klare Grundlage für Ihre tägliche Planung.
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
            href="/zeit-rechner-stunden"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors"
          >
            <span>Zeit Rechner Stunden</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
