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
} from "lucide-react";

export default function StundenBruttoContent() {
  const salaryTableRows = [
    { woche: "20 Stunden", monat: "86,67 Std.", lohn: "34,62 €" },
    { woche: "25 Stunden", monat: "108,33 Std.", lohn: "27,69 €" },
    { woche: "30 Stunden", monat: "130,00 Std.", lohn: "23,08 €" },
    { woche: "35 Stunden", monat: "151,67 Std.", lohn: "19,78 €" },
    { woche: "38 Stunden", monat: "164,67 Std.", lohn: "18,22 €" },
    { woche: "40 Stunden", monat: "173,33 Std.", lohn: "17,31 €" },
  ];

  return (
    <article className="mt-12 sm:mt-16 space-y-10 sm:space-y-12 text-slate-800 leading-relaxed">
      {/* 1. Was ist ein Stunden Brutto Rechner? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Calculator className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Was ist ein Stunden Brutto Rechner?
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Ein <strong>Stunden Brutto Rechner</strong> ist ein Online-Rechentool, mit dem Sie Ihren
          Bruttolohn pro Arbeitsstunde ermitteln können. Dafür benötigen Sie in der Regel Ihr
          monatliches oder jährliches Bruttogehalt sowie die Anzahl Ihrer regelmäßigen Arbeitsstunden.
        </p>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Das Ergebnis zeigt Ihnen, welchen Betrag Sie vor Abzug von Steuern und
          Sozialversicherungsbeiträgen durchschnittlich pro Stunde verdienen.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-6">
          <h3 className="font-semibold text-slate-900 mb-3 text-sm sm:text-base flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            Der Rechner eignet sich für verschiedene Beschäftigungsformen:
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
              <span>Vollzeitbeschäftigungen mit festem Monatsgehalt</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
              <span>Teilzeitjobs mit reduzierter Wochenarbeitszeit</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
              <span>Minijobs und Nebenbeschäftigungen</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
              <span>Stundenbasierte Arbeitsverhältnisse</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
              <span>Befristete Arbeitsverträge</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
              <span>Gehaltsvergleiche bei einem Jobwechsel</span>
            </li>
            <li className="flex items-start gap-2 sm:col-span-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
              <span>Die Berechnung des durchschnittlichen Stundenlohns bei unterschiedlichen Arbeitszeiten</span>
            </li>
          </ul>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Ein solcher Rechner ist besonders hilfreich, wenn Sie ein monatliches Gehaltsangebot mit
          einem Stundenlohn vergleichen möchten. Dadurch erkennen Sie leichter, welches Angebot bei
          vergleichbarer Arbeitszeit finanziell attraktiver ist.
        </p>
      </section>

      {/* 2. Wie berechnet man den Bruttostundenlohn? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl">
            <Coins className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Wie berechnet man den Bruttostundenlohn?
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Die Berechnung des Bruttostundenlohns ist grundsätzlich unkompliziert. Sie müssen
          lediglich das Bruttogehalt durch die Anzahl der Arbeitsstunden im entsprechenden Zeitraum
          teilen.
        </p>

        {/* Formula Box */}
        <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200 mb-6">
          <span className="text-xs uppercase tracking-wider font-bold text-emerald-900 block font-sans mb-1.5">
            Grundformel für den Bruttostundenlohn:
          </span>
          <div className="text-base sm:text-xl font-extrabold text-emerald-950 font-mono">
            Bruttostundenlohn = Bruttogehalt ÷ Arbeitsstunden
          </div>
        </div>

        {/* Example Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Praxis-Beispiel:
          </h4>
          <p className="text-slate-700 text-sm leading-relaxed mb-3">
            Wenn Sie beispielsweise monatlich <strong>3.000 Euro brutto</strong> verdienen und
            durchschnittlich <strong>160 Stunden</strong> arbeiten, ergibt sich folgende Rechnung:
          </p>
          <div className="p-3 bg-white rounded-lg border border-slate-200 font-mono text-xs sm:text-sm text-slate-800">
            3.000 € ÷ 160 Stunden = <span className="font-bold text-emerald-700">18,75 € brutto pro Stunde</span>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            Ihr rechnerischer Bruttostundenlohn beträgt in diesem Beispiel 18,75 Euro.
          </p>
        </div>

        <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl text-xs sm:text-sm text-amber-900 flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p>
            <strong>Wichtig:</strong> Gehalt und Arbeitsstunden müssen denselben Zeitraum abdecken.
            Wenn Sie ein Monatsgehalt verwenden, benötigen Sie die monatlichen Arbeitsstunden. Bei
            einem Jahresgehalt müssen Sie dagegen die jährlichen Arbeitsstunden berücksichtigen.
          </p>
        </div>
      </section>

      {/* 3. Bruttostundenlohn aus dem Monatsgehalt berechnen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-indigo-100 text-indigo-700 rounded-xl">
            <Calendar className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Bruttostundenlohn aus dem Monatsgehalt berechnen
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Viele Arbeitnehmer in Deutschland erhalten ihr Gehalt monatlich. Der Stundenlohn lässt
          sich aus diesem Betrag ermitteln, wenn die regelmäßige Arbeitszeit bekannt ist.
        </p>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Bei einer üblichen Fünf-Tage-Woche können Sie die durchschnittlichen monatlichen
          Arbeitsstunden anhand Ihrer wöchentlichen Arbeitszeit berechnen. Da ein Monat nicht genau
          vier Wochen hat, sondern durchschnittlich rund 4,33 Wochen, nutzen Sie folgende Formel:
        </p>

        {/* Formula Box */}
        <div className="p-5 rounded-xl bg-indigo-50/70 border border-indigo-200 mb-6">
          <span className="text-xs uppercase tracking-wider font-bold text-indigo-900 block font-sans mb-1.5">
            Monatliche Arbeitsstunden berechnen:
          </span>
          <div className="text-base sm:text-xl font-extrabold text-indigo-950 font-mono">
            Monatliche Arbeitsstunden = Wochenstunden × 52 ÷ 12
          </div>
        </div>

        {/* Step-by-step 40h example */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4">
          <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-3">
            Rechenbeispiel bei 40 Stunden pro Woche und 3.200 € Bruttogehalt:
          </h3>
          <ol className="space-y-2 text-xs sm:text-sm text-slate-700">
            <li className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-200">
              <span>1. Wöchentliche Arbeitszeit:</span>
              <strong className="font-mono text-slate-900">40 Stunden</strong>
            </li>
            <li className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-200">
              <span>2. Durchschnittliche Monatsstunden (40 × 52 ÷ 12):</span>
              <strong className="font-mono text-slate-900">173,33 Stunden</strong>
            </li>
            <li className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-slate-200">
              <span>3. Monatliches Bruttogehalt:</span>
              <strong className="font-mono text-slate-900">3.200,00 Euro</strong>
            </li>
            <li className="flex items-center justify-between p-2.5 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-950">
              <span className="font-semibold">4. Bruttostundenlohn (3.200 ÷ 173,33):</span>
              <strong className="font-mono text-emerald-800 text-base">rund 18,46 Euro</strong>
            </li>
          </ol>
          <p className="text-xs text-slate-500 mt-3">
            Der durchschnittliche Bruttostundenlohn liegt somit bei etwa 18,46 Euro.
          </p>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Diese Methode ist für regelmäßige Arbeitszeiten geeignet. Bei Schichtarbeit, schwankenden
          Wochenstunden oder unregelmäßigen Einsätzen sollten Sie die tatsächlichen beziehungsweise
          vertraglich relevanten Arbeitsstunden berücksichtigen.
        </p>
      </section>

      {/* 4. Bruttostundenlohn bei verschiedenen Arbeitszeiten */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-sky-100 text-sky-700 rounded-xl">
            <Clock className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Bruttostundenlohn bei verschiedenen Arbeitszeiten
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Der Stundenlohn hängt nicht nur vom Gehalt, sondern auch von der vereinbarten Arbeitszeit
          ab. Zwei Personen können dasselbe Monatsgehalt erhalten und trotzdem einen unterschiedlichen
          Bruttostundenlohn haben.
        </p>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Die folgende Tabelle zeigt beispielhafte Berechnungen bei einem festen Monatsgehalt von{" "}
          <strong>3.000 Euro brutto</strong>:
        </p>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs mb-4">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-900 border-b border-slate-200">
                <th className="py-3 px-4 font-semibold">Wochenarbeitszeit</th>
                <th className="py-3 px-4 font-semibold text-right">Arbeitsstunden pro Monat (ca.)</th>
                <th className="py-3 px-4 font-semibold text-right">Bruttostundenlohn</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {salaryTableRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4 font-medium text-slate-900">{row.woche}</td>
                  <td className="py-3 px-4 text-slate-600 text-right font-mono">{row.monat}</td>
                  <td className="py-3 px-4 text-right font-mono font-bold text-emerald-700">
                    {row.lohn}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-slate-500 mb-4">
          * Die Werte basieren auf einer durchschnittlichen Monatsberechnung von 52 Wochen pro Jahr
          geteilt durch zwölf Monate. Rundungsabweichungen sind möglich.
        </p>

        <p className="text-slate-600 text-sm leading-relaxed">
          Die Tabelle verdeutlicht, dass bei gleichbleibendem Gehalt weniger Arbeitsstunden zu einem
          höheren rechnerischen Stundenlohn führen. Deshalb lohnt es sich, bei Teilzeitangeboten nicht
          nur das Monatsgehalt, sondern auch die wöchentliche Arbeitszeit zu vergleichen.
        </p>
      </section>

      {/* 5. Unterschied zwischen Brutto- und Nettostundenlohn */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-amber-100 text-amber-800 rounded-xl">
            <Scale className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Unterschied zwischen Brutto- und Nettostundenlohn
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Bei der Berechnung des Stundenlohns ist es wichtig, zwischen Brutto und Netto zu
          unterscheiden.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-5 rounded-xl bg-blue-50/60 border border-blue-200">
            <h3 className="font-bold text-blue-950 mb-2 flex items-center gap-2 text-sm sm:text-base">
              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
              Bruttostundenlohn
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Der <strong>Bruttostundenlohn</strong> ist der Verdienst pro Stunde vor den
              gesetzlichen Abzügen. Er bildet in der Regel die Grundlage für Arbeitsverträge,
              Tarifverträge und Gehaltsverhandlungen.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-emerald-50/60 border border-emerald-200">
            <h3 className="font-bold text-emerald-950 mb-2 flex items-center gap-2 text-sm sm:text-base">
              <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
              Nettostundenlohn
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Der <strong>Nettostundenlohn</strong> beschreibt dagegen den Betrag, der nach den
              persönlichen Abzügen rechnerisch pro Arbeitsstunde auf Ihrem Bankkonto verbleibt –
              nach Steuern und Sozialabgaben.
            </p>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-6">
          <h4 className="font-semibold text-slate-900 text-sm mb-2">
            Beispiel: 20 Euro brutto pro Stunde (160 Std. = 3.200 € Brutto)
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 mb-3">
            Wie hoch der tatsächliche Nettolohn ausfällt, hängt von vielen individuellen Faktoren ab:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Steuerklasse (I bis VI)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Höhe des gesamten Jahreseinkommens</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Kranken- und Pflegeversicherung (Zusatzbeitrag)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Gesetzliche Rentenversicherung</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Arbeitslosenversicherung</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Kirchensteuerpflicht & Kinderfreibeträge</span>
            </li>
          </ul>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Deshalb lässt sich der Nettostundenlohn nicht zuverlässig allein aus dem Bruttostundenlohn
          ohne Berücksichtigung der persönlichen Besteuerungsmerkmale bestimmen. Dafür ist eine
          gesonderte Nettolohnberechnung erforderlich.
        </p>
      </section>

      {/* 6. Stundenlohn aus dem Jahresgehalt berechnen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-violet-100 text-violet-700 rounded-xl">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Stundenlohn aus dem Jahresgehalt berechnen
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Wenn Sie ein jährliches Bruttogehalt erhalten oder ein entsprechendes Jobangebot vergleichen
          möchten, können Sie den Stundenlohn auch auf Grundlage des Jahresgehalts berechnen.
        </p>

        {/* Formula Box */}
        <div className="p-5 rounded-xl bg-violet-50/70 border border-violet-200 mb-6">
          <span className="text-xs uppercase tracking-wider font-bold text-violet-900 block font-sans mb-1.5">
            Jahresformel für den Bruttostundenlohn:
          </span>
          <div className="text-base sm:text-xl font-extrabold text-violet-950 font-mono">
            Bruttostundenlohn = Jahresbruttogehalt ÷ jährliche Arbeitsstunden
          </div>
        </div>

        {/* 45k Example */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4">
          <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-2">
            Berechnung bei 45.000 Euro Jahresbrutto und 40 Wochenstunden:
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm mb-3">
            Bei 40 Stunden pro Woche ergeben sich rechnerisch <strong>2.080 Stunden pro Jahr</strong>{" "}
            (40 Stunden × 52 Wochen).
          </p>
          <div className="p-3 bg-white rounded-lg border border-slate-200 font-mono text-xs sm:text-sm text-slate-800">
            45.000 € ÷ 2.080 Stunden = <span className="font-bold text-violet-700">rund 21,63 € brutto pro Stunde</span>
          </div>
          <p className="text-xs text-slate-500 mt-2">
            Der rechnerische Bruttostundenlohn beträgt damit ungefähr 21,63 Euro.
          </p>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Beachten Sie, dass diese Rechnung die vereinbarten Wochenstunden auf 52 Wochen hochrechnet.
          Wenn Sie den effektiven Verdienst pro tatsächlich geleisteter Arbeitsstunde ermitteln
          möchten, können Urlaub, Feiertage, Krankheitstage, unbezahlte Pausen und weitere Faktoren
          eine Rolle spielen. Außerdem sollten Sonderzahlungen wie Weihnachtsgeld oder Urlaubsgeld
          bei einem Gehaltsvergleich einheitlich berücksichtigt werden.
        </p>
      </section>

      {/* 7. Bruttostundenlohn im Minijob berechnen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl">
            <Coins className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Bruttostundenlohn im Minijob berechnen
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Auch für Minijobber ist ein Stunden Brutto Rechner nützlich. Beschäftigte können damit
          überprüfen, wie hoch ihr rechnerischer Stundenlohn bei einer bestimmten monatlichen
          Vergütung und Arbeitszeit ausfällt.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4">
          <h4 className="font-semibold text-slate-900 text-sm mb-2">
            Beispiel: 600 Euro Verdienst bei 40 Monatsstunden
          </h4>
          <div className="p-3 bg-white rounded-lg border border-slate-200 font-mono text-xs sm:text-sm text-slate-800 mb-2">
            600 € ÷ 40 Stunden = <span className="font-bold text-emerald-700">15,00 € brutto pro Stunde</span>
          </div>
          <p className="text-xs text-slate-500">
            Der rechnerische Stundenlohn beträgt in diesem Beispiel genau 15 Euro.
          </p>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Bei einem Minijob müssen jedoch zusätzlich die jeweils geltende Verdienstgrenze, die
          vertragliche Arbeitszeit und der gesetzliche Mindestlohn beachtet werden. Die zulässige
          monatliche Arbeitszeit hängt unter anderem von der Höhe des Stundenlohns ab.
        </p>

        <p className="text-slate-600 text-sm leading-relaxed">
          Die Minijob-Grenze wird in Deutschland regelmäßig an die Entwicklung des Mindestlohns
          angepasst. Informieren Sie sich deshalb über die aktuell geltenden Werte, bevor Sie
          Arbeitszeiten oder monatliche Einnahmen verbindlich planen. Bei der Beurteilung des
          Minijob-Status können außerdem weitere Beschäftigungen und besondere persönliche Umstände
          relevant sein.
        </p>
      </section>

      {/* 8. Mindestlohn und Bruttostundenlohn in Deutschland */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-rose-100 text-rose-700 rounded-xl">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Mindestlohn und Bruttostundenlohn in Deutschland
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Der gesetzliche Mindestlohn legt fest, welchen Mindestbetrag Arbeitgeber grundsätzlich für
          jede tatsächlich geleistete Arbeitsstunde zahlen müssen, soweit das Mindestlohngesetz
          Anwendung findet und keine gesetzliche Ausnahme greift.
        </p>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Für Arbeitnehmer ist es deshalb sinnvoll, den vereinbarten Stundenlohn regelmäßig mit dem
          geltenden Mindestlohn zu vergleichen. Besonders bei Teilzeit, kurzfristigen Beschäftigungen,
          Minijobs und Arbeitsverhältnissen mit schwankenden Arbeitszeiten kann diese Kontrolle
          hilfreich sein.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4">
          <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600" />
            Checkliste zur Mindestlohnprüfung:
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
              <span><strong>Tatsächliche Stunden ermitteln:</strong> Erfassen Sie alle geleisteten Arbeitsstunden inklusive Mehrarbeit.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
              <span><strong>Vertraglichen Stundenlohn prüfen:</strong> Entspricht der Basissatz mindestens dem gesetzlichen Mindestlohn?</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
              <span><strong>Gesetzliche Bestimmungen beachten:</strong> Prüfen Sie branchenspezifische Tarifverträge, die über dem Mindestlohn liegen können.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
              <span><strong>Brutto und Netto trennen:</strong> Der Mindestlohn gilt als Bruttobetrag vor Abzug von Steuern und Abgaben.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
              <span><strong>Sonderzahlungen prüfen:</strong> Achten Sie darauf, ob und wie Einmalzahlungen rechtlich auf den Mindestlohn angerechnet werden dürfen.</span>
            </li>
          </ul>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Der Mindestlohn kann sich im Laufe der Zeit ändern. Verwenden Sie daher für eine aktuelle
          Prüfung offizielle Informationen, beispielsweise vom Bundesministerium für Arbeit und
          Soziales (BMAS).
        </p>
      </section>

      {/* 9. Welche Faktoren beeinflussen den tatsächlichen Stundenlohn? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Layers className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Welche Faktoren beeinflussen den tatsächlichen Stundenlohn?
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Der rechnerische Bruttostundenlohn ist ein wichtiger Vergleichswert. Dennoch gibt es
          weitere Faktoren, die bei der Bewertung einer Beschäftigung berücksichtigt werden sollten:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1.5 flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600" />
              Bezahlte und unbezahlte Pausen
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Nicht jede Pause zählt als bezahlte Arbeitszeit. Wenn Sie beispielsweise acht Stunden
              im Betrieb anwesend sind, aber eine unbezahlte Pause einlegen, kann die vergütete
              Arbeitszeit geringer sein als die gesamte Anwesenheitszeit.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1.5 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              Überstunden
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Überstunden können den effektiven Stundenlohn beeinflussen. Wenn Sie regelmäßig länger
              arbeiten, ohne dass sich Ihre Vergütung entsprechend erhöht, sinkt der rechnerische
              Verdienst pro tatsächlich geleisteter Stunde.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1.5 flex items-center gap-2">
              <Coins className="w-4 h-4 text-amber-600" />
              Zuschläge
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Nachtarbeit, Sonntagsarbeit oder Feiertagsarbeit können unter bestimmten
              Voraussetzungen mit steuerfreien oder steuerbegünstigten Zuschlägen vergütet werden.
              Auch tarifliche Vereinbarungen spielen eine Rolle.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1.5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              Sonderzahlungen
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Weihnachtsgeld, Urlaubsgeld, Prämien und Gewinnbeteiligungen erhöhen die jährliche
              Gesamtvergütung. Für einen aussagekräftigen Vergleich sollten Sie festlegen, ob Sie nur
              das Grundgehalt oder die Gesamtvergütung heranziehen.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 sm:col-span-2">
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1.5 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-rose-600" />
              Urlaub und Feiertage
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Urlaub und gesetzliche Feiertage beeinflussen die Zahl der tatsächlich geleisteten
              Arbeitsstunden. Gleichzeitig bleibt das Gehalt bei bezahltem Urlaub grundsätzlich
              bestehen. Daher kann der Stundenlohn je nach Berechnungsmethode (vertraglich vs.
              effektiv geleistet) unterschiedlich ausfallen.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Wie hilft ein Stunden Brutto Rechner beim Gehaltsvergleich? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-teal-100 text-teal-800 rounded-xl">
            <Briefcase className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Wie hilft ein Stunden Brutto Rechner beim Gehaltsvergleich?
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Ein Stunden Brutto Rechner erleichtert den Vergleich verschiedener Stellenangebote.
          Während ein Unternehmen ein monatliches Gehalt nennt, bietet ein anderes möglicherweise
          einen festen Stundenlohn. Ohne Umrechnung sind diese Angaben nur schwer direkt miteinander
          vergleichbar.
        </p>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Mit einem Rechner können Sie beispielsweise folgende konkrete Fragen beantworten:
        </p>

        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 mb-6">
          <li className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
            <HelpCircle className="w-4 h-4 text-teal-600 shrink-0" />
            <span>Wie hoch ist mein Stundenlohn bei 3.500 Euro Monatsgehalt?</span>
          </li>
          <li className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
            <HelpCircle className="w-4 h-4 text-teal-600 shrink-0" />
            <span>Wie viel verdiene ich pro Stunde bei einer Reduzierung auf 35 Wochenstunden?</span>
          </li>
          <li className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
            <HelpCircle className="w-4 h-4 text-teal-600 shrink-0" />
            <span>Ist ein Stundenlohn von 22 Euro höher als mein derzeitiges Festgehalt?</span>
          </li>
          <li className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
            <HelpCircle className="w-4 h-4 text-teal-600 shrink-0" />
            <span>Wie verändert sich mein Stundenlohn bei einer Arbeitszeitreduzierung?</span>
          </li>
          <li className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
            <HelpCircle className="w-4 h-4 text-teal-600 shrink-0" />
            <span>Wie hoch ist mein rechnerischer Stundenverdienst bei einem Jahresgehalt von 48.000 Euro?</span>
          </li>
        </ul>

        <p className="text-slate-600 text-sm leading-relaxed">
          Die Ergebnisse unterstützen Sie dabei, finanzielle Entscheidungen besser vorzubereiten.
          Für einen vollständigen Vergleich sollten Sie zusätzlich Arbeitsweg, Urlaubstage,
          betriebliche Leistungen, Arbeitsbelastung und Entwicklungsmöglichkeiten berücksichtigen.
        </p>
      </section>

      {/* 11. Häufige Fehler bei der Berechnung des Bruttostundenlohns */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-rose-100 text-rose-700 rounded-xl">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Häufige Fehler bei der Berechnung des Bruttostundenlohns
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Bei der Berechnung des Stundenlohns entstehen häufig Fehler, weil unterschiedliche
          Zeiträume miteinander verglichen werden oder wichtige Arbeitsstunden unberücksichtigt
          bleiben.
        </p>

        <div className="p-4 bg-rose-50/70 border border-rose-200 rounded-xl mb-6 text-xs sm:text-sm text-rose-950">
          <p className="font-semibold mb-1">
            Der häufigste Rechenfehler: Ein Monat hat nicht genau 4 Wochen!
          </p>
          <p className="text-rose-900 leading-relaxed">
            Ein Jahr hat 52 Wochen. Deshalb entspricht ein durchschnittlicher Monat etwa 4,33 Wochen
            (52 ÷ 12). Wer mit nur 4 Wochen rechnet, unterschätzt die monatlichen Arbeitsstunden
            deutlich und ermittelt einen fälschlicherweise zu hohen Stundenlohn.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-4">
          <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-3">
            Weitere typische Stolperfallen in der Praxis:
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
              <span><strong>Mischen von Zeiträumen:</strong> Monatsgehalt und Jahresarbeitsstunden miteinander zu kombinieren.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
              <span><strong>Unbezahlte Überstunden ignorieren:</strong> Regelmäßige Mehrarbeit senkt den tatsächlichen Stundenlohn.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
              <span><strong>Brutto- und Nettowerte verwechseln:</strong> Netto-Beträge dürfen nicht durch Gesamtstunden geteilt werden, um Bruttosätze zu vergleichen.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
              <span><strong>Uneinheitliche Sonderzahlungen:</strong> Weihnachtsgeld bei einem Angebot einrechnen, beim anderen weglassen.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
              <span><strong>Anwesenheitszeit mit Arbeitszeit verwechseln:</strong> Unbezahlte Pausenzeiten müssen von der Betriebszeit abgezogen werden.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
              <span><strong>Veraltete Grenzwerte bei Minijobs:</strong> Die Verdienstgrenzen dynamisch anpassen und gesetzliche Fristen beachten.</span>
            </li>
          </ul>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Ein sorgfältiger Vergleich setzt voraus, dass alle Berechnungsgrundlagen eindeutig
          festgelegt sind. Verwenden Sie deshalb möglichst genaue Angaben aus Ihrem Arbeitsvertrag
          oder Ihrer Arbeitszeiterfassung.
        </p>
      </section>

      {/* 12. Fazit */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 sm:p-10 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
          Fazit: Bruttostundenlohn schnell und einfach berechnen
        </h2>

        <p className="text-slate-300 mb-4 leading-relaxed text-sm sm:text-base">
          Ein Stunden Brutto Rechner ist ein hilfreiches Werkzeug für Arbeitnehmer, Minijobber,
          Teilzeitkräfte und alle, die verschiedene Gehaltsangebote vergleichen möchten. Mit wenigen
          Angaben können Sie ermitteln, wie viel Sie durchschnittlich pro Arbeitsstunde verdienen.
        </p>

        <p className="text-slate-300 mb-4 leading-relaxed text-sm sm:text-base">
          Für eine zuverlässige Berechnung müssen Bruttogehalt und Arbeitszeit denselben Zeitraum
          abdecken. Bei regelmäßigen Arbeitszeiten eignet sich die Umrechnung über 52 Wochen und zwölf
          Monate. Zusätzliche Faktoren wie Überstunden, unbezahlte Pausen, Zuschläge und
          Sonderzahlungen sollten Sie je nach Fragestellung gesondert berücksichtigen.
        </p>

        <p className="text-slate-300 mb-8 leading-relaxed text-sm sm:text-base">
          Nutzen Sie den Stunden Brutto Rechner, um Ihren Stundenlohn besser einzuschätzen, Ihre
          Arbeitszeit zu planen und fundierte Entscheidungen bei Gehaltsverhandlungen oder einem
          Jobwechsel zu treffen. Wenn Sie zusätzlich Ihren Nettolohn ermitteln möchten, benötigen Sie
          eine separate Berechnung, die Ihre persönlichen steuerlichen und
          sozialversicherungsrechtlichen Voraussetzungen berücksichtigt.
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
              Tägliche und wöchentliche Arbeitszeit mit Pausen erfassen.
            </p>
          </Link>

          <Link
            href="/minijob-rechner-stunden"
            className="group p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors"
          >
            <div className="flex items-center justify-between text-xs font-semibold text-emerald-400 mb-1">
              <span>Minijob</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
            <div className="font-bold text-white text-sm">Minijob Rechner</div>
            <p className="text-slate-400 text-xs mt-1">
              Maximal erlaubte Stunden und Verdienstgrenzen berechnen.
            </p>
          </Link>

          <Link
            href="/stunden-reduzieren-rechner"
            className="group p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors"
          >
            <div className="flex items-center justify-between text-xs font-semibold text-indigo-400 mb-1">
              <span>Teilzeit & Reduktion</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
            <div className="font-bold text-white text-sm">Stunden Reduzieren</div>
            <p className="text-slate-400 text-xs mt-1">
              Wochenstunden vergleichen und Differenzen ermitteln.
            </p>
          </Link>
        </div>
      </section>
    </article>
  );
}
