import Link from "next/link";
import {
  Calculator,
  Coins,
  Clock,
  Scale,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  Briefcase,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Calendar,
  Layers,
  HelpCircle,
  Building2,
  Users,
  Wallet,
} from "lucide-react";

export default function BruttoNettoContent() {
  const wageTableRows = [
    { rate: "12,50 €", hours: "160", monthly: "2.000 €" },
    { rate: "15,00 €", hours: "160", monthly: "2.400 €" },
    { rate: "18,00 €", hours: "160", monthly: "2.880 €" },
    { rate: "20,00 €", hours: "160", monthly: "3.200 €" },
    { rate: "25,00 €", hours: "160", monthly: "4.000 €" },
    { rate: "30,00 €", hours: "160", monthly: "4.800 €" },
  ];

  return (
    <article className="mt-12 sm:mt-16 space-y-10 sm:space-y-12 text-slate-800 leading-relaxed">
      {/* 1. Was ist ein Brutto Netto Rechner für Stunden? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Wallet className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Was ist ein Brutto Netto Rechner für Stunden?
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Ein <strong>Brutto Netto Rechner für Stunden</strong> hilft Ihnen dabei, Ihren Verdienst
          auf Stundenbasis besser zu verstehen. Wenn Sie wissen möchten, wie viel Sie pro
          Arbeitsstunde verdienen und welcher Betrag nach Steuern und Sozialversicherungsbeiträgen
          übrig bleibt, ist ein solcher Rechner eine praktische Unterstützung. Besonders
          Arbeitnehmer, Teilzeitbeschäftigte, Minijobber und Personen mit wechselnden Arbeitszeiten
          können davon profitieren.
        </p>

        <p className="text-slate-600 mb-4 leading-relaxed">
          In Deutschland wird grundsätzlich zwischen <strong>Bruttolohn</strong> und{" "}
          <strong>Nettolohn</strong> unterschieden. Der Bruttolohn ist der vereinbarte Verdienst vor
          den gesetzlichen Abzügen. Der Nettolohn ist dagegen der Betrag, der nach den
          entsprechenden Abzügen tatsächlich auf Ihrem Konto ankommt. Deshalb kann der Unterschied
          zwischen dem Stundenlohn im Arbeitsvertrag und dem tatsächlichen Verdienst auf dem Bankkonto
          erheblich sein.
        </p>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Mit einem Brutto Netto Rechner Stunden können Sie Ihren Stundenlohn, Ihre monatliche
          Arbeitszeit und Ihren voraussichtlichen Nettolohn besser einschätzen. Dafür benötigen Sie
          in der Regel Angaben zu Ihrem Bruttolohn, Ihrer Arbeitszeit und den persönlichen
          Voraussetzungen für die Berechnung.
        </p>

        <p className="text-slate-600 text-sm leading-relaxed">
          Ein solcher Rechner eignet sich außerdem, wenn Sie ein Jobangebot vergleichen, eine
          Gehaltserhöhung bewerten oder Ihre monatlichen Einnahmen verlässlich planen möchten.
        </p>
      </section>

      {/* 2. Wie funktioniert ein Brutto Netto Rechner Stundenlohn? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl">
            <Calculator className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Wie funktioniert ein Brutto Netto Rechner Stundenlohn?
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Ein Stundenlohnrechner verwendet Ihre Arbeitszeit und Ihren vereinbarten Bruttoverdienst,
          um den Verdienst pro Stunde oder Monat zu ermitteln. Für eine präzise Netto-Berechnung
          müssen zusätzlich die relevanten steuerlichen und sozialversicherungsrechtlichen Angaben
          berücksichtigt werden.
        </p>

        {/* 3 Step Process */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-sm mb-3">
              1
            </div>
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1">
              Bruttolohn ermitteln
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Bestimmen Sie Ihren vereinbarten Verdienst vor Steuern und Sozialabgaben pro Stunde oder Monat.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm mb-3">
              2
            </div>
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1">
              Arbeitsstunden berechnen
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Ermitteln Sie, wie viele Stunden Sie pro Woche oder im Monatsdurchschnitt leisten.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-800 font-bold flex items-center justify-center text-sm mb-3">
              3
            </div>
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1">
              Nettolohn schätzen
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Berücksichtigen Sie Steuerklasse, Kirchensteuer, Kranken-, Pflege- und Rentenversicherung.
            </p>
          </div>
        </div>

        {/* Calculation Example Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Beispiel: 18 Euro Stundenlohn bei 160 Monatsstunden
          </h4>
          <p className="text-slate-700 text-sm leading-relaxed mb-3">
            Wenn Sie beispielsweise einen Bruttostundenlohn von 18 Euro erhalten und durchschnittlich
            160 Stunden im Monat arbeiten, ergibt sich folgender monatlicher Bruttoverdienst:
          </p>
          <div className="p-3 bg-white rounded-lg border border-slate-200 font-mono text-xs sm:text-sm text-slate-800">
            18 Euro × 160 Stunden = <span className="font-bold text-emerald-700">2.880 Euro brutto im Monat</span>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            Dieser Betrag ist noch nicht Ihr Nettogehalt. Wie viel tatsächlich ausgezahlt wird,
            hängt unter anderem von Ihrer Steuerklasse, Ihrem Versicherungsstatus und weiteren
            persönlichen Faktoren ab.
          </p>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Ein einfacher Stundenrechner kann den Bruttoverdienst anhand der Arbeitszeit berechnen. Ein
          vollständiger Brutto-Netto-Rechner benötigt dagegen zusätzliche Angaben, um die gesetzlichen
          Abzüge möglichst realistisch einzuschätzen.
        </p>
      </section>

      {/* 3. Unterschied zwischen Brutto und Netto pro Stunde */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-amber-100 text-amber-800 rounded-xl">
            <Scale className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Unterschied zwischen Brutto und Netto pro Stunde
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Der Unterschied zwischen Brutto und Netto gehört zu den wichtigsten Grundlagen der
          Gehaltsberechnung in Deutschland:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-5 rounded-xl bg-blue-50/60 border border-blue-200">
            <h3 className="font-bold text-blue-950 mb-2 flex items-center gap-2 text-sm sm:text-base">
              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
              Was bedeutet Bruttostundenlohn?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
              Der <strong>Bruttostundenlohn</strong> bezeichnet den Betrag, den Sie für eine
              Arbeitsstunde vor Abzügen erhalten. Er wird häufig im Arbeitsvertrag festgelegt oder
              aus einem monatlichen Bruttogehalt abgeleitet.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Wenn Sie beispielsweise 20 Euro brutto pro Stunde verdienen, erhalten Sie nicht
              automatisch 20 Euro für jede Arbeitsstunde auf Ihr Bankkonto. Bei regulärer
              sozialversicherungspflichtiger Beschäftigung werden normalerweise Steuern und
              Arbeitnehmeranteile zur Sozialversicherung berücksichtigt.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-emerald-50/60 border border-emerald-200">
            <h3 className="font-bold text-emerald-950 mb-2 flex items-center gap-2 text-sm sm:text-base">
              <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
              Was bedeutet Nettostundenlohn?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-3">
              Der <strong>Nettostundenlohn</strong> beschreibt, wie viel von Ihrem Verdienst nach den
              relevanten Abzügen übrig bleibt, umgerechnet auf eine Arbeitsstunde.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Er stellt den tatsächlichen Wert Ihrer Arbeitszeit dar, der Ihnen zur freien Verfügung
              steht und für Miete, Lebenshaltung und Sparen verwendet werden kann.
            </p>
          </div>
        </div>

        {/* Formula Box */}
        <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200 mb-6">
          <span className="text-xs uppercase tracking-wider font-bold text-emerald-900 block font-sans mb-1.5">
            Vereinfachte Formel für den Nettostundenlohn:
          </span>
          <div className="text-base sm:text-xl font-extrabold text-emerald-950 font-mono">
            Nettostundenlohn = monatlicher Nettolohn ÷ monatliche Arbeitsstunden
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4">
          <h4 className="font-semibold text-slate-900 text-sm mb-2">Rechenbeispiel:</h4>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-3">
            Verdienen Sie beispielsweise <strong>2.100 Euro netto</strong> im Monat und arbeiten
            durchschnittlich <strong>140 Stunden</strong>, ergibt sich folgende Rechnung:
          </p>
          <div className="p-3 bg-white rounded-lg border border-slate-200 font-mono text-xs sm:text-sm text-slate-800">
            2.100 € ÷ 140 Stunden = <span className="font-bold text-emerald-700">15,00 € netto pro Stunde</span>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            Diese Rechnung dient der Veranschaulichung. Der tatsächliche Nettolohn muss anhand Ihrer
            individuellen Beschäftigungs- und Steuerdaten ermittelt werden.
          </p>
        </div>
      </section>

      {/* 4. Brutto Netto Rechner Stunden: Beispielrechnung */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-sky-100 text-sky-700 rounded-xl">
            <Clock className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Brutto Netto Rechner Stunden: Beispielrechnung
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Die folgende Tabelle zeigt, wie sich unterschiedliche Bruttostundenlöhne bei einer
          angenommenen monatlichen Arbeitszeit von <strong>160 Stunden</strong> auf den
          Bruttomonatsverdienst auswirken:
        </p>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs mb-4">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-900 border-b border-slate-200">
                <th className="py-3 px-4 font-semibold">Bruttostundenlohn</th>
                <th className="py-3 px-4 font-semibold text-right">Arbeitsstunden pro Monat</th>
                <th className="py-3 px-4 font-semibold text-right">Bruttomonatslohn</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {wageTableRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-900">{row.rate}</td>
                  <td className="py-3 px-4 text-slate-600 text-right font-mono">{row.hours} Std.</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-emerald-700">
                    {row.monthly}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-slate-500 mb-4">
          * Die Tabelle zeigt ausschließlich den Bruttoverdienst. Die jeweiligen Nettobeträge können
          nicht allein aus dem Stundenlohn abgeleitet werden, weil dafür weitere persönliche Angaben
          erforderlich sind.
        </p>

        <p className="text-slate-600 text-sm leading-relaxed">
          Wenn Sie Ihren Nettolohn kennen, können Sie anschließend berechnen, wie hoch Ihr
          tatsächlicher Verdienst pro Arbeitsstunde ist. Auf diese Weise lässt sich auch beurteilen,
          ob ein Jobangebot zu Ihren finanziellen Erwartungen passt.
        </p>
      </section>

      {/* 5. Welche Faktoren beeinflussen den Nettolohn pro Stunde? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-violet-100 text-violet-700 rounded-xl">
            <Layers className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Welche Faktoren beeinflussen den Nettolohn pro Stunde?
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Der Nettolohn hängt von verschiedenen Faktoren ab. Selbst zwei Personen mit demselben
          Bruttogehalt können spürbar unterschiedliche Nettobeträge erhalten:
        </p>

        <div className="space-y-4">
          {/* Factor 1 */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1.5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-blue-100 text-blue-800 text-xs font-bold flex items-center justify-center shrink-0">
                1
              </span>
              Steuerklasse (I bis VI)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Die Steuerklasse spielt bei der Berechnung des monatlichen Lohnsteuerabzugs eine
              wichtige Rolle. In Deutschland gibt es unterschiedliche Steuerklassen, die abhängig von
              der persönlichen Situation (z. B. ledig, verheiratet, alleinerziehend) angewendet werden.
              Die Steuerklasse beeinflusst insbesondere die Höhe des laufenden Lohnsteuerabzugs,
              bestimmt jedoch nicht allein die endgültige jährliche Einkommensteuer.
            </p>
          </div>

          {/* Factor 2 */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1.5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0">
                2
              </span>
              Einkommensteuer und Lohnsteuer
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Die Lohnsteuer wird bei Arbeitnehmern normalerweise direkt vom Arbeitgeber einbehalten
              und an das Finanzamt abgeführt. Ihre Höhe richtet sich nach dem steuerpflichtigen
              Arbeitslohn und dem progressiven Steuertarif. Ein höherer Bruttolohn führt zu höheren
              Steuerabzügen, aber eine Gehaltserhöhung führt niemals zu weniger Netto als zuvor.
            </p>
          </div>

          {/* Factor 3 */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1.5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-amber-100 text-amber-800 text-xs font-bold flex items-center justify-center shrink-0">
                3
              </span>
              Gesetzliche Krankenversicherung (GKV)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Bei gesetzlich versicherten Beschäftigten fallen Beiträge zur Krankenversicherung an
              (allgemeiner Satz von 14,6 % geteilt durch Arbeitnehmer und Arbeitgeber, plus der
              kassenspezifische Zusatzbeitrag). Bei bestimmten Beschäftigungsverhältnissen oder
              privater Versicherung gelten abweichende Regelungen.
            </p>
          </div>

          {/* Factor 4 */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1.5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-rose-100 text-rose-800 text-xs font-bold flex items-center justify-center shrink-0">
                4
              </span>
              Gesetzliche Rentenversicherung (GRV)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Die Rentenversicherung dient der Altersvorsorge (18,6 % Beitragssatz, je 9,3 %
              Arbeitnehmer- und Arbeitgeberanteil). Bei regulärer sozialversicherungspflichtiger
              Beschäftigung reduziert dieser Arbeitnehmeranteil das ausgezahlte Nettogehalt.
            </p>
          </div>

          {/* Factor 5 */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1.5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-indigo-100 text-indigo-800 text-xs font-bold flex items-center justify-center shrink-0">
                5
              </span>
              Arbeitslosenversicherung und Pflegeversicherung
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Auch Beiträge zur Arbeitslosenversicherung (2,6 %, je 1,3 %) und Pflegeversicherung
              werden vom Bruttolohn einbehalten. In der Pflegeversicherung gilt für kinderlose
              Arbeitnehmer ab Vollendung des 23. Lebensjahres ein zusätzlicher Beitragszuschlag.
            </p>
          </div>

          {/* Factor 6 */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1.5 flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-teal-100 text-teal-800 text-xs font-bold flex items-center justify-center shrink-0">
                6
              </span>
              Kirchensteuer und persönliche Freibeträge
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Bei Kirchensteuerpflicht fällt zusätzlich Kirchensteuer an (8 % in Bayern und
              Baden-Württemberg, 9 % in den übrigen Bundesländern). Kinderfreibeträge,
              Freibeträge auf der Lohnsteuerkarte und individuelle Sachbezüge können das Ergebnis
              weiter beeinflussen.
            </p>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mt-4">
          Ein guter Brutto Netto Rechner berücksichtigt deshalb möglichst viele relevante Angaben,
          statt lediglich einen pauschalen Prozentsatz vom Bruttolohn abzuziehen.
        </p>
      </section>

      {/* 6. Brutto Netto Rechner für Teilzeitbeschäftigte */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-indigo-100 text-indigo-700 rounded-xl">
            <Clock className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Brutto Netto Rechner für Teilzeitbeschäftigte
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Teilzeitbeschäftigte profitieren besonders von einem Stundenlohnrechner, weil die
          monatliche Arbeitszeit häufig unter der einer Vollzeitstelle liegt.
        </p>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Wenn Sie beispielsweise <strong>25 Stunden pro Woche</strong> arbeiten und einen
          Bruttostundenlohn von <strong>17 Euro</strong> erhalten, können Sie Ihren
          durchschnittlichen Monatsverdienst wie folgt berechnen:
        </p>

        {/* Calculation Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-5 rounded-xl bg-indigo-50/70 border border-indigo-200">
            <span className="text-xs uppercase tracking-wider font-bold text-indigo-900 block font-sans mb-1.5">
              1. Monatliche Arbeitszeit:
            </span>
            <div className="text-sm sm:text-base font-extrabold text-indigo-950 font-mono">
              25 Std. × 52 ÷ 12 = rund 108,33 Stunden
            </div>
          </div>

          <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200">
            <span className="text-xs uppercase tracking-wider font-bold text-emerald-900 block font-sans mb-1.5">
              2. Durchschnittlicher Bruttomonatslohn:
            </span>
            <div className="text-sm sm:text-base font-extrabold text-emerald-950 font-mono">
              108,33 Std. × 17 € = rund 1.841,61 Euro
            </div>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          Der tatsächliche Monatsverdienst kann je nach Kalendermonat, Urlaub, Krankheit, Feiertagen
          und vertraglich vereinbarter Vergütung leicht abweichen.
        </p>

        <p className="text-slate-600 text-sm leading-relaxed">
          Mit einem Brutto Netto Rechner Stunden können Teilzeitkräfte anschließend ihren
          voraussichtlichen Nettolohn ermitteln und verschiedene Arbeitszeitmodelle miteinander
          vergleichen.
        </p>
      </section>

      {/* 7. Brutto Netto Rechner für Minijobs */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl">
            <Coins className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Brutto Netto Rechner für Minijobs
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Auch Minijobber möchten häufig wissen, wie viel Geld ihnen von ihrem Verdienst tatsächlich
          bleibt. Bei einem Minijob gelten jedoch besondere gesetzliche Regeln.
        </p>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Entscheidend ist zunächst, ob die Beschäftigung als geringfügig entlohnter Minijob
          eingestuft wird und welche Abgabenregelungen gelten. Die Verdienstgrenze wird gesetzlich
          festgelegt und ist dynamisch an den gesetzlichen Mindestlohn gekoppelt.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4 space-y-3 text-xs sm:text-sm text-slate-700">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              <strong>Pauschale Besteuerung:</strong> Bei Minijobs kann die Besteuerung pauschal
              durch den Arbeitgeber übernommen werden oder individuell über die Lohnsteuerklasse
              erfolgen.
            </span>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              <strong>Rentenversicherungspflicht:</strong> Minijobber unterliegen grundsätzlich der
              Rentenversicherungspflicht (Eigenanteil von 3,6 %), können sich jedoch auf schriftlichen
              Antrag beim Arbeitgeber befreien lassen.
            </span>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-4">
          Deshalb entspricht der Nettolohn bei einem Minijob nicht immer der Berechnung einer
          regulären sozialversicherungspflichtigen Beschäftigung: Wer sich von der Rentenversicherung
          befreien lässt, erhält oft <em>Brutto gleich Netto</em> ausgezahlt.
        </p>

        <p className="text-slate-600 text-sm leading-relaxed">
          Wenn Sie einen Minijob annehmen möchten, sollten Sie sowohl den vereinbarten
          Bruttostundenlohn als auch die geltenden Abgabenregelungen genau prüfen.
        </p>
      </section>

      {/* 8. Stundenlohn aus dem Monatsgehalt berechnen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Briefcase className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Stundenlohn aus dem Monatsgehalt berechnen
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Nicht jeder Arbeitsvertrag enthält einen festen Stundenlohn. Viele Arbeitnehmer erhalten
          ein monatliches Festgehalt. In diesem Fall können Sie den rechnerischen Bruttostundenlohn
          aus Ihrem Monatsgehalt und Ihrer Arbeitszeit ermitteln.
        </p>

        {/* Formula Box */}
        <div className="p-5 rounded-xl bg-blue-50/70 border border-blue-200 mb-6">
          <span className="text-xs uppercase tracking-wider font-bold text-blue-900 block font-sans mb-1.5">
            Vereinfachte Formel für den Bruttostundenlohn:
          </span>
          <div className="text-base sm:text-xl font-extrabold text-blue-950 font-mono">
            Bruttostundenlohn = monatliches Bruttogehalt ÷ monatliche Arbeitsstunden
          </div>
        </div>

        {/* Example Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4">
          <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-2">Beispiel:</h3>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 mb-3">
            <li>Monatliches Bruttogehalt: <strong>3.000 Euro</strong></li>
            <li>Durchschnittliche monatliche Arbeitszeit: <strong>160 Stunden</strong></li>
            <li className="font-semibold text-blue-800">
              Rechnerischer Bruttostundenlohn: 3.000 € ÷ 160 = 18,75 Euro
            </li>
          </ul>
          <p className="text-xs text-slate-500">
            Diese Berechnung hilft Ihnen dabei, Ihr Festgehalt mit anderen Stellenangeboten und
            Stundensätzen objektiv zu vergleichen.
          </p>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Wenn Sie zusätzlich Ihren monatlichen Nettolohn kennen, können Sie den Nettostundenlohn
          nach derselben Methode bestimmen. Dabei sollten Sie beachten, dass bezahlter Urlaub,
          Feiertage, Sonderzahlungen und tatsächlich geleistete Arbeitsstunden den Vergleich
          beeinflussen können.
        </p>
      </section>

      {/* 9. Wie berechnet man den Nettolohn pro Stunde? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl">
            <Coins className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Wie berechnet man den Nettolohn pro Stunde?
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Für eine einfache Berechnung benötigen Sie zunächst Ihren monatlichen Nettolohn und Ihre
          durchschnittliche monatliche Arbeitszeit.
        </p>

        {/* Formula Box */}
        <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200 mb-6">
          <span className="text-xs uppercase tracking-wider font-bold text-emerald-900 block font-sans mb-1.5">
            Formel für den Nettostundenlohn:
          </span>
          <div className="text-base sm:text-xl font-extrabold text-emerald-950 font-mono">
            Nettolohn pro Stunde = monatlicher Nettolohn ÷ monatliche Arbeitsstunden
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4">
          <h4 className="font-semibold text-slate-900 text-sm mb-2">
            Beispiel bei 2.200 Euro Nettoeinkommen:
          </h4>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-3">
            Angenommen, Ihr monatliches Nettogehalt beträgt <strong>2.200 Euro</strong> und Sie
            arbeiten durchschnittlich <strong>160 Stunden</strong> im Monat:
          </p>
          <div className="p-3 bg-white rounded-lg border border-slate-200 font-mono text-xs sm:text-sm text-slate-800">
            2.200 Euro ÷ 160 Stunden = <span className="font-bold text-emerald-700">13,75 Euro netto pro Stunde</span>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            In diesem Beispiel beträgt der rechnerische Nettostundenlohn 13,75 Euro.
          </p>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Diese Methode eignet sich besonders für Arbeitnehmer, die ihr Nettogehalt aus ihrer
          Gehaltsabrechnung bereits kennen. Wenn Sie nur Ihren Bruttostundenlohn kennen, benötigen
          Sie dagegen unseren Rechner oben mit Angaben zu Ihrer steuerlichen und
          sozialversicherungsrechtlichen Situation.
        </p>
      </section>

      {/* 10. Warum lohnt sich ein Stundenlohnvergleich? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-teal-100 text-teal-800 rounded-xl">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Warum lohnt sich ein Stundenlohnvergleich?
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Der Stundenlohn allein sagt nicht immer aus, welches Jobangebot finanziell attraktiver ist.
          Ein scheinbar höheres Monatsgehalt kann beispielsweise mit einer deutlich längeren
          Arbeitszeit oder unbezahlten Überstunden verbunden sein.
        </p>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Vergleichen Sie bei Jobangeboten deshalb stets mehrere Faktoren:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <span><strong>Brutto- und Nettostundenlohn</strong> gegenüberstellen</span>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <span><strong>Monatliche und wöchentliche Arbeitszeit</strong> prüfen</span>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <span><strong>Bezahlte Urlaubstage und Feiertage</strong> berücksichtigen</span>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <span><strong>Zuschläge</strong> für Nacht-, Sonn- und Feiertagsarbeit</span>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <span><strong>Überstundenregelungen</strong> (Vergütung vs. Freizeitausgleich)</span>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <span><strong>Sonderzahlungen</strong> wie Weihnachts- oder Urlaubsgeld</span>
          </div>
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 sm:col-span-2">
            <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <span><strong>Fahrtkosten und arbeitsbedingte Ausgaben:</strong> Pendelzeiten und Mobilitätskosten schmälern das Realeinkommen</span>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Mit diesen Angaben können Sie besser einschätzen, welches Beschäftigungsverhältnis zu
          Ihren persönlichen und finanziellen Zielen passt. Ein Brutto Netto Rechner Stunden
          unterstützt Sie dabei, die finanziellen Auswirkungen verständlich zu machen.
        </p>
      </section>

      {/* 11. Häufige Fehler bei der Brutto-Netto-Berechnung */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-rose-100 text-rose-700 rounded-xl">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Häufige Fehler bei der Brutto-Netto-Berechnung
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Bei der Berechnung des Stundenlohns entstehen häufig Fehler, wenn wichtige Angaben fehlen
          oder unterschiedliche Werte miteinander verglichen werden:
        </p>

        <div className="space-y-3 mb-6">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-semibold text-rose-900 text-xs sm:text-sm mb-1">
              Brutto und Netto werden verwechselt
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Der Bruttolohn ist nicht mit dem Auszahlungsbetrag gleichzusetzen. Steuern und
              Sozialversicherungsbeiträge reduzieren den Nettolohn oft um 30 bis 45 Prozent.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-semibold text-rose-900 text-xs sm:text-sm mb-1">
              Die monatliche Arbeitszeit wird falsch angesetzt
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Eine Wochenarbeitszeit von 40 Stunden entspricht bei durchschnittlich 52 Wochen im
              Jahr rund <strong>173,33 Stunden pro Monat</strong>, nicht exakt 160 Stunden. Wer mit
              nur 160 Stunden rechnet, verfälscht den Stundensatz.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-semibold text-rose-900 text-xs sm:text-sm mb-1">
              Individuelle Steuermerkmale werden ignoriert
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Ohne Steuerklasse, Krankenversicherungs-Zusatzbeitrag und Kinderfreibeträge ist eine
              zuverlässige Netto-Schätzung nicht möglich.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-semibold text-rose-900 text-xs sm:text-sm mb-1">
              Minijobs werden wie reguläre Beschäftigungen behandelt
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Für Minijobs gelten besondere steuerliche und sozialversicherungsrechtliche Vorschriften
              (Pauschalabgaben durch den Arbeitgeber, Rentenversicherungsbefreiung).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-semibold text-rose-900 text-xs sm:text-sm mb-1">
              Sonderzahlungen werden nicht berücksichtigt
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Weihnachtsgeld, Urlaubsgeld, Boni oder steuerfreie Zuschläge können das reale
              Jahres-Nettogehalt spürbar erhöhen.
            </p>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Wenn Sie diese Punkte berücksichtigen, können Sie Ihren Stundenlohn realistischer bewerten
          und Ihre finanzielle Planung deutlich verbessern.
        </p>
      </section>

      {/* 12. Fazit */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 sm:p-10 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
          Fazit: Brutto Netto Rechner Stunden für eine bessere Gehaltsplanung
        </h2>

        <p className="text-slate-300 mb-4 leading-relaxed text-sm sm:text-base">
          Mit einem Brutto Netto Rechner Stunden können Sie Ihren Stundenlohn besser verstehen, den
          monatlichen Bruttoverdienst berechnen und Ihren voraussichtlichen Nettolohn einschätzen. Das
          ist besonders hilfreich, wenn Sie ein neues Jobangebot prüfen, Ihre Arbeitszeit reduzieren
          oder unterschiedliche Beschäftigungsmodelle vergleichen möchten.
        </p>

        <p className="text-slate-300 mb-4 leading-relaxed text-sm sm:text-base">
          Entscheidend ist, zwischen Bruttolohn und Nettolohn zu unterscheiden und die individuelle
          steuerliche Situation zu berücksichtigen. Während sich der Bruttostundenlohn mit einer
          einfachen Formel berechnen lässt, erfordert eine realistische Netto-Berechnung weitere
          Angaben.
        </p>

        <p className="text-slate-300 mb-8 leading-relaxed text-sm sm:text-base">
          Nutzen Sie einen Stundenlohnrechner, um Ihre Arbeitszeit und Ihren Verdienst übersichtlich
          zu vergleichen. So erhalten Sie eine verlässliche Grundlage für Ihre Gehaltsplanung und
          können fundiertere finanzielle Entscheidungen treffen.
        </p>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-700/80">
          <Link
            href="/"
            className="group p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors"
          >
            <div className="flex items-center justify-between text-xs font-semibold text-blue-400 mb-1">
              <span>Arbeitsstunden</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
            <div className="font-bold text-white text-sm">Hauptrechner</div>
            <p className="text-slate-400 text-xs mt-1">
              Arbeitszeiten, Pausen und Überstunden online erfassen.
            </p>
          </Link>

          <Link
            href="/stunden-brutto-rechner"
            className="group p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors"
          >
            <div className="flex items-center justify-between text-xs font-semibold text-emerald-400 mb-1">
              <span>Bruttostundenlohn</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
            <div className="font-bold text-white text-sm">Stunden Brutto Rechner</div>
            <p className="text-slate-400 text-xs mt-1">
              Bruttostundenlohn aus Gehalt und Zuschlägen berechnen.
            </p>
          </Link>

          <Link
            href="/minijob-rechner-stunden"
            className="group p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors"
          >
            <div className="flex items-center justify-between text-xs font-semibold text-indigo-400 mb-1">
              <span>Minijob</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
            <div className="font-bold text-white text-sm">Minijob Rechner</div>
            <p className="text-slate-400 text-xs mt-1">
              Arbeitszeit & Verdienstgrenzen für 600 € Jobs planen.
            </p>
          </Link>
        </div>
      </section>
    </article>
  );
}
