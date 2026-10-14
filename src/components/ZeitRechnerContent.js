import Link from "next/link";
import {
  Clock,
  ArrowRightLeft,
  Percent,
  Calculator,
  AlertTriangle,
  CheckCircle2,
  Table as TableIcon,
  Sparkles,
  ArrowRight,
  Briefcase,
  Users,
  Moon,
  Smartphone,
  Zap,
  ShieldCheck,
  PlusCircle,
  MinusCircle,
  HelpCircle,
} from "lucide-react";

export default function ZeitRechnerContent() {
  const decimalTable = [
    { zeit: "15 Minuten", dezimal: "0,25 Stunden" },
    { zeit: "30 Minuten", dezimal: "0,50 Stunden" },
    { zeit: "45 Minuten", dezimal: "0,75 Stunden" },
    { zeit: "1 Stunde 15 Minuten", dezimal: "1,25 Stunden" },
    { zeit: "1 Stunde 30 Minuten", dezimal: "1,50 Stunden" },
    { zeit: "2 Stunden 45 Minuten", dezimal: "2,75 Stunden" },
    { zeit: "7 Stunden 30 Minuten", dezimal: "7,50 Stunden" },
    { zeit: "8 Stunden 15 Minuten", dezimal: "8,25 Stunden" },
  ];

  return (
    <article className="mt-12 sm:mt-16 space-y-10 sm:space-y-12 text-slate-800 leading-relaxed">
      {/* 1. Was ist ein Zeit Rechner für Stunden? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
            <Calculator className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Was ist ein Zeit Rechner für Stunden?
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Ein <strong>Zeit Rechner für Stunden</strong> ist ein Online-Tool, mit dem du verschiedene
          Zeitangaben addieren, subtrahieren oder in andere Zeiteinheiten umwandeln kannst. Je nach
          Funktion kannst du beispielsweise die Dauer zwischen zwei Uhrzeiten bestimmen, mehrere
          Zeitintervalle zusammenrechnen oder deine tägliche Arbeitszeit ermitteln.
        </p>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Ein solcher Rechner ist besonders hilfreich, wenn eine Berechnung über mehrere Stunden oder
          Minuten erfolgt. Da eine Stunde <strong>60 Minuten und nicht 100 Minuten</strong> hat, können
          manuelle Berechnungen schnell unübersichtlich werden.
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Anschauliches Alltagsbeispiel:
          </span>
          <p className="text-sm text-slate-700 mb-2">
            Angenommen, du möchtest wissen, wie lange du von <strong>08:15 Uhr bis 16:45 Uhr</strong> gearbeitet
            hast. Die gesamte Zeitspanne beträgt <strong>8 Stunden und 30 Minuten</strong>.
          </p>
          <p className="text-sm text-emerald-700 font-semibold">
            Wenn du zusätzlich eine Pause von 30 Minuten abziehst, ergibt sich eine Nettoarbeitszeit von exakt 8 Stunden.
          </p>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Mit einem Zeitrechner kannst du solche Aufgaben schnell erledigen, ohne die einzelnen
          Rechenschritte selbst ausführen zu müssen.
        </p>
      </section>

      {/* 2. Wie funktioniert ein Online-Zeitrechner? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <ArrowRightLeft className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Wie funktioniert ein Online-Zeitrechner?
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Die Bedienung eines Zeit Rechners für Stunden ist in der Regel einfach. Je nach gewünschter
          Berechnung gibst du Start- und Endzeiten, Stunden und Minuten oder mehrere Zeitintervalle ein.
        </p>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Anschließend berechnet das Tool das Ergebnis automatisch oder nach einem Klick auf die
          entsprechende Schaltfläche.
        </p>

        <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            Typische Funktionen eines Zeitrechners sind:
          </h3>
          <ul className="space-y-2.5 text-sm text-slate-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Zeitdifferenz berechnen:</strong> Ermittle die exakte Zeit zwischen zwei Uhrzeiten.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Stunden addieren:</strong> Fasse mehrere Arbeitszeiten oder Zeitintervalle zusammen.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Zeit abziehen:</strong> Ziehe Pausen oder andere Zeitabschnitte von einer Gesamtzeit ab.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Stunden und Minuten umrechnen:</strong> Wandle Zeitangaben in Minuten oder Dezimalstunden um.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Arbeitszeit berechnen:</strong> Bestimme die tägliche Nettoarbeitszeit anhand von Beginn, Ende und Pause.</span>
            </li>
          </ul>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Je nach Rechner stehen unterschiedliche Funktionen zur Verfügung. Für eine einfache
          Berechnung der Arbeitsdauer reicht häufig die Eingabe von Startzeit und Endzeit aus. Für
          eine vollständige Arbeitszeitübersicht sind zusätzliche Angaben zu Pausen sinnvoll.
        </p>
      </section>

      {/* 3. Stunden und Minuten berechnen: Einfache Beispiele */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
            <Clock className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Stunden und Minuten berechnen: Einfache Beispiele
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Um die Funktionsweise eines Zeitrechners besser zu verstehen, helfen einige praktische
          Beispiele aus dem Alltag:
        </p>

        <div className="space-y-4 mb-6">
          {/* Beispiel 1 */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-100 text-blue-800">
                Beispiel 1
              </span>
              <h3 className="text-sm font-bold text-slate-900">
                Die Dauer zwischen zwei Uhrzeiten berechnen
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mb-2">
              Du beginnst eine Aufgabe um 09:20 Uhr und beendest sie um 14:50 Uhr. Wie viel Zeit ist vergangen?
            </p>
            <div className="font-mono text-sm font-bold text-blue-700 bg-white p-3 rounded-lg border border-slate-200 mb-2">
              14:50 Uhr − 09:20 Uhr = 5 Stunden und 30 Minuten
            </div>
            <p className="text-xs text-slate-500">
              Ein Zeit Rechner für Stunden liefert dir dieses Ergebnis direkt. Du kannst die Methode beispielsweise für Arbeitszeiten, Unterrichtsstunden oder Termine verwenden.
            </p>
          </div>

          {/* Beispiel 2 */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-800">
                Beispiel 2
              </span>
              <h3 className="text-sm font-bold text-slate-900">
                Mehrere Zeitintervalle addieren
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mb-2">
              Du arbeitest am Vormittag 3 Stunden und 45 Minuten und am Nachmittag weitere 4 Stunden und 30 Minuten:
            </p>
            <div className="font-mono text-sm font-bold text-emerald-700 bg-white p-3 rounded-lg border border-slate-200 mb-2">
              3 Stunden 45 Minuten + 4 Stunden 30 Minuten = 8 Stunden 15 Minuten
            </div>
            <p className="text-xs text-slate-500">
              Die Minuten ergeben zusammen 75 Minuten. Das entspricht einer zusätzlichen Stunde und 15 Minuten. Deshalb beträgt die Gesamtzeit 8 Stunden und 15 Minuten.
            </p>
          </div>

          {/* Beispiel 3 */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-800">
                Beispiel 3
              </span>
              <h3 className="text-sm font-bold text-slate-900">
                Eine Pause von der Arbeitszeit abziehen
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mb-2">
              Du arbeitest von 08:00 Uhr bis 16:30 Uhr und machst eine Pause von 45 Minuten:
            </p>
            <div className="space-y-1.5 font-mono text-xs sm:text-sm bg-white p-3 rounded-lg border border-slate-200 mb-2">
              <div className="text-slate-600">1. Gesamtzeit: 16:30 Uhr − 08:00 Uhr = 8 Stunden 30 Minuten</div>
              <div className="text-amber-800 font-bold">2. Pause abziehen: 8 Std. 30 Min. − 45 Min. = 7 Stunden 45 Minuten</div>
            </div>
            <p className="text-xs text-slate-600 font-medium">
              Deine Nettoarbeitszeit beträgt somit <strong>7 Stunden und 45 Minuten</strong> (7,75 Dezimalstunden).
            </p>
          </div>
        </div>
      </section>

      {/* 4. Arbeitszeit mit einem Zeit Rechner berechnen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Briefcase className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Arbeitszeit mit einem Zeit Rechner berechnen
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Die Berechnung der Arbeitszeit gehört zu den häufigsten Anwendungsfällen eines Zeitrechners.
          Arbeitnehmer können damit überprüfen, wie lange sie an einem bestimmten Tag gearbeitet haben.
          Auch Freelancer und Selbstständige profitieren davon, wenn sie ihre Arbeitsstunden für
          Projekte oder Kunden dokumentieren möchten.
        </p>

        <p className="text-slate-600 mb-3 leading-relaxed">
          Für die Berechnung der täglichen Arbeitszeit benötigst du normalerweise drei Angaben:
        </p>
        <ol className="list-decimal pl-5 space-y-1 text-sm text-slate-700 mb-6">
          <li>Deine Startzeit (Kommen).</li>
          <li>Deine Endzeit (Gehen).</li>
          <li>Die Dauer deiner Pause.</li>
        </ol>

        <p className="text-slate-600 mb-3 leading-relaxed">
          Die Nettoarbeitszeit ergibt sich aus der Differenz zwischen Endzeit und Startzeit
          abzüglich der Pausenzeit.
        </p>

        {/* Formula Box */}
        <div className="p-5 rounded-xl bg-blue-50/70 border border-blue-200 mb-6 font-mono">
          <span className="text-xs uppercase tracking-wider font-bold text-blue-900 block font-sans mb-1">
            Formel:
          </span>
          <div className="text-lg sm:text-xl font-extrabold text-blue-950">
            Nettoarbeitszeit = Endzeit − Startzeit − Pausenzeit
          </div>
        </div>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
            Berechnungsbeispiel:
          </span>
          <p className="text-sm text-slate-700 leading-relaxed">
            Du beginnst um <strong>07:30 Uhr</strong>, beendest deine Arbeit um <strong>16:00 Uhr</strong> und
            machst insgesamt <strong>60 Minuten Pause</strong>.
          </p>
          <div className="mt-3 p-3 bg-white rounded-lg border border-slate-200 font-mono text-xs sm:text-sm text-slate-800">
            <div>Anwesenheit: 16:00 − 07:30 = 8 Stunden und 30 Minuten</div>
            <div className="text-emerald-700 font-bold mt-1">
              Nach Abzug der Pause: 8:30 − 1:00 = 7 Stunden und 30 Minuten Nettoarbeitszeit
            </div>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Wenn du deine Arbeitszeit regelmäßig erfasst, hilft dir ein Zeit Rechner für Stunden dabei,
          tägliche und wöchentliche Arbeitszeiten übersichtlich zusammenzurechnen.
        </p>
      </section>

      {/* 5. Zeit in Dezimalstunden umrechnen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-indigo-100 text-indigo-700 rounded-xl">
            <Percent className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Zeit in Dezimalstunden umrechnen
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          In vielen Unternehmen werden Arbeitszeiten nicht nur in Stunden und Minuten, sondern auch als
          Dezimalzahlen angegeben. Das ist beispielsweise bei Stundenzetteln, Projektabrechnungen oder
          der Berechnung von Arbeitskosten üblich.
        </p>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Dabei ist es wichtig, Minuten korrekt in Dezimalstunden umzuwandeln.
        </p>

        {/* Formula Box */}
        <div className="p-5 rounded-xl bg-indigo-50/70 border border-indigo-200 mb-6 font-mono">
          <span className="text-xs uppercase tracking-wider font-bold text-indigo-900 block font-sans mb-1">
            Formel:
          </span>
          <div className="text-lg sm:text-xl font-extrabold text-indigo-950">
            Dezimalstunden = Minuten ÷ 60
          </div>
        </div>

        <h3 className="text-base font-bold text-slate-900 mb-3">
          Häufig verwendete Umrechnungen:
        </h3>

        {/* Decimal Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs mb-6 max-w-xl">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                <th scope="col" className="py-3 px-4 sm:px-6">Stunden und Minuten</th>
                <th scope="col" className="py-3 px-4 sm:px-6 text-right">Dezimalstunden</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {decimalTable.map((row, idx) => (
                <tr
                  key={row.zeit}
                  className={`hover:bg-indigo-50/50 transition-colors ${
                    idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"
                  }`}
                >
                  <td className="py-2.5 px-4 sm:px-6 font-semibold text-slate-900">
                    {row.zeit}
                  </td>
                  <td className="py-2.5 px-4 sm:px-6 text-right font-mono font-bold text-indigo-700">
                    {row.dezimal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm mb-4 flex items-start gap-2.5">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <p>
            <strong>Wichtig:</strong> Beachte, dass 30 Minuten einer halben Stunde entsprechen. Sie
            werden deshalb als <strong>0,50 Stunden angegeben und nicht als 0,30 Stunden</strong>.
          </p>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Dieser Unterschied ist besonders bei der Berechnung von Löhnen, Stundensätzen und
          Projektkosten wichtig. Ein Zeitrechner kann dabei helfen, Umrechnungsfehler zu vermeiden.
        </p>
      </section>

      {/* 6. Stunden in Minuten und Minuten in Stunden umrechnen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
            <ArrowRightLeft className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Stunden in Minuten und Minuten in Stunden umrechnen
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Neben der Berechnung von Zeitspannen ist die Umrechnung zwischen Stunden und Minuten eine
          wichtige Funktion. Eine Stunde entspricht 60 Minuten. Daraus ergeben sich zwei einfache
          Formeln:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200">
            <span className="text-xs uppercase tracking-wider font-bold text-emerald-900 block mb-1">
              Stunden in Minuten:
            </span>
            <div className="font-mono text-base font-bold text-emerald-950 mb-2">
              Stunden × 60 = Minuten
            </div>
            <p className="text-xs text-emerald-800">
              Beispiel: 4 Stunden × 60 = <strong>240 Minuten</strong>.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-blue-50/70 border border-blue-200">
            <span className="text-xs uppercase tracking-wider font-bold text-blue-900 block mb-1">
              Minuten in Stunden:
            </span>
            <div className="font-mono text-base font-bold text-blue-950 mb-2">
              Minuten ÷ 60 = Stunden
            </div>
            <p className="text-xs text-blue-800">
              Beispiel: 180 Minuten ÷ 60 = <strong>3 Stunden</strong>.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 mb-6">
          Wenn du <strong>135 Minuten in Stunden</strong> umrechnen möchtest, erhältst du{" "}
          <strong>2 Stunden und 15 Minuten</strong>. Als Dezimalzahl entspricht das{" "}
          <strong>2,25 Stunden</strong>.
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Mit einem Online-Zeitrechner kannst du diese Umrechnungen schnell durchführen, ohne jedes
          Mal die Formeln anwenden zu müssen.
        </p>
      </section>

      {/* 7. Zeit über Mitternacht berechnen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-slate-100 text-slate-700 rounded-xl">
            <Moon className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Zeit über Mitternacht berechnen
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Eine besondere Herausforderung entsteht, wenn eine Arbeitszeit am Abend beginnt und am
          nächsten Morgen endet. Das betrifft beispielsweise Nachtarbeit, Schichtarbeit oder bestimmte
          Dienstleistungen.
        </p>

        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 mb-6 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
            Nachtschicht-Praxisbeispiel:
          </span>
          <p className="text-sm text-slate-700">
            Angenommen, du beginnst deine Schicht um <strong>22:00 Uhr</strong> und beendest sie am
            nächsten Tag um <strong>06:00 Uhr</strong>. Die Zeitspanne beträgt insgesamt <strong>8 Stunden</strong>.
          </p>
          <div className="p-3 bg-white rounded-lg border border-slate-200 font-mono text-xs sm:text-sm text-slate-800">
            Wenn du während dieser Schicht eine Pause von 30 Minuten machst, ergibt sich eine Nettoarbeitszeit von <strong>7 Stunden und 30 Minuten</strong>.
          </div>
        </div>

        <p className="text-slate-600 text-sm mb-4 leading-relaxed">
          Bei solchen Berechnungen muss berücksichtigt werden, dass das Enddatum nach dem Startdatum
          liegt. Ein geeigneter Zeit Rechner für Stunden sollte deshalb auch Zeitintervalle über
          Mitternacht korrekt behandeln können.
        </p>

        <p className="text-slate-600 text-sm leading-relaxed">
          Bei längeren Zeiträumen über mehrere Tage ist es außerdem wichtig, das Datum einzubeziehen,
          damit das Ergebnis stimmt.
        </p>
      </section>

      {/* 8. Vorteile eines Online-Zeitrechners */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Vorteile eines Online-Zeitrechners
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Ein digitaler Zeitrechner bietet verschiedene Vorteile gegenüber einer manuellen Berechnung:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-2 text-emerald-700 font-bold text-sm">
              <Zap className="w-4 h-4" />
              <h3>Schnelle Ergebnisse</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Du musst keine komplizierten Rechenschritte durchführen. Du erhältst das Ergebnis unmittelbar nach der Eingabe.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-2 text-blue-700 font-bold text-sm">
              <ShieldCheck className="w-4 h-4" />
              <h3>Weniger Rechenfehler</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Da das Zeitsystem auf 60 Minuten pro Stunde basiert, reduziert ein zuverlässiger Rechner typische Dezimal- und Rundungsfehler.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-2 text-indigo-700 font-bold text-sm">
              <CheckCircle2 className="w-4 h-4" />
              <h3>Einfache Bedienung</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Keine mathematischen Vorkenntnisse nötig. Auch wer nur gelegentlich Zeiten erfasst, kommt sofort zurecht.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 mb-2 text-amber-700 font-bold text-sm">
              <Briefcase className="w-4 h-4" />
              <h3>Vielseitige Einsatzmöglichkeiten</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Für Beruf und Alltag: Arbeitszeiten, Lernphasen, Pausen, Trainingszeiten oder die Dauer von Terminen exakt ermitteln.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-2 text-purple-700 font-bold text-sm">
              <Smartphone className="w-4 h-4" />
              <h3>Praktisch auf mobilen Geräten</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Unser browserbasierter Zeitrechner lässt sich reaktionsschnell am Computer, Smartphone oder Tablet nutzen – perfekt für unterwegs auf der Baustelle oder im Homeoffice.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Wer benötigt einen Zeit Rechner für Stunden? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Users className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Wer benötigt einen Zeit Rechner für Stunden?
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Ein Zeitrechner ist für unterschiedliche Personengruppen nützlich:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">Arbeitnehmer:</strong>
            <p className="text-slate-600 text-xs sm:text-sm">
              Sie können ihre tägliche Arbeitszeit berechnen und nachvollziehen, wie lange sie tatsächlich gearbeitet haben.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">Selbstständige und Freelancer:</strong>
            <p className="text-slate-600 text-xs sm:text-sm">
              Sie können Projektstunden erfassen und abrechenbare Arbeitszeiten für Kunden präzise zusammenstellen.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">Arbeitgeber und Personalverantwortliche:</strong>
            <p className="text-slate-600 text-xs sm:text-sm">
              Sie können Zeitangaben für die Arbeitsplanung und interne Übersichten berechnen. Für verbindliche Arbeitszeitnachweise sind die jeweiligen Vorgaben zu beachten.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">Schüler und Studierende:</strong>
            <p className="text-slate-600 text-xs sm:text-sm">
              Sie können Lernzeiten planen, Unterrichtszeiten berechnen oder die Dauer einzelner Aufgaben ermitteln.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">Schichtarbeiter:</strong>
            <p className="text-slate-600 text-xs sm:text-sm">
              Sie können Arbeitsintervalle berechnen, die am Abend beginnen und am nächsten Tag enden.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">Privatpersonen:</strong>
            <p className="text-slate-600 text-xs sm:text-sm">
              Auch bei Reisen, Sport, Freizeitaktivitäten und alltäglichen Terminen kann ein Zeitrechner hilfreich sein.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Häufige Fehler bei der Zeitberechnung vermeiden */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-rose-100 text-rose-700 rounded-xl">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Häufige Fehler bei der Zeitberechnung vermeiden
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Bei der Berechnung von Stunden und Minuten treten immer wieder ähnliche Fehler auf.
          Mit ein paar einfachen Regeln lassen sie sich vermeiden:
        </p>

        <div className="space-y-3.5">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
              1
            </span>
            <div>
              <strong className="text-slate-900 block text-sm">Minuten nicht als Dezimalzahlen behandeln:</strong>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                1 Stunde und 30 Minuten entsprechen 1,5 Stunden und nicht 1,30 Stunden.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
              2
            </span>
            <div>
              <strong className="text-slate-900 block text-sm">Pausen berücksichtigen:</strong>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Wenn du deine tatsächliche Arbeitszeit berechnen möchtest, musst du die entsprechenden Pausen von der Anwesenheitszeit abziehen.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
              3
            </span>
            <div>
              <strong className="text-slate-900 block text-sm">Tageswechsel beachten:</strong>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Bei Arbeitszeiten über Mitternacht muss der folgende Kalendertag berücksichtigt werden.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
              4
            </span>
            <div>
              <strong className="text-slate-900 block text-sm">Rundungen vermeiden:</strong>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Runde Zeitangaben nicht unnötig früh, wenn du ein möglichst genaues Ergebnis benötigst.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
              5
            </span>
            <div>
              <strong className="text-slate-900 block text-sm">Ergebnis richtig interpretieren:</strong>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Stunden und Minuten sind nicht dasselbe wie Dezimalstunden. Prüfe deshalb, in welchem Format dein Ergebnis angezeigt wird.
              </p>
            </div>
          </div>
        </div>

        <p className="text-slate-600 text-sm mt-6 leading-relaxed">
          Wenn du diese Punkte beachtest, kannst du deine Zeitangaben genauer berechnen und
          Missverständnisse bei der Arbeitszeiterfassung vermeiden.
        </p>
      </section>

      {/* 11. Fazit: Zeit Rechner Stunden für schnelle und genaue Ergebnisse */}
      <section className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 rounded-2xl p-6 sm:p-10 text-white shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-emerald-500/20 text-emerald-300 rounded-xl border border-emerald-400/30">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Fazit: Zeit Rechner Stunden für schnelle und genaue Ergebnisse
          </h2>
        </div>

        <p className="text-slate-200 mb-4 leading-relaxed">
          Ein <strong>Zeit Rechner für Stunden</strong> ist ein hilfreiches Werkzeug, um Zeitspannen,
          Arbeitsstunden und Minuten unkompliziert zu berechnen. Ob du deine tägliche Arbeitszeit
          ermitteln, mehrere Zeitintervalle addieren oder Minuten in Dezimalstunden umwandeln möchtest –
          ein Online-Rechner spart Zeit und erleichtert die Berechnung.
        </p>

        <p className="text-slate-200 mb-6 leading-relaxed">
          Besonders bei der Arbeitszeiterfassung, Projektplanung und täglichen Organisation ist es
          sinnvoll, auf korrekte Zeitangaben zu achten. Mit den passenden Funktionen lassen sich auch
          Pausen und Arbeitszeiten über Mitternacht berücksichtigen.
        </p>

        <div className="p-5 rounded-xl bg-white/10 border border-white/10 text-slate-100 text-sm leading-relaxed mb-6">
          Nutze einen Zeit Rechner für Stunden, um deine Berechnungen schnell durchzuführen und deine
          Zeit effizienter zu planen.
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-colors"
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
