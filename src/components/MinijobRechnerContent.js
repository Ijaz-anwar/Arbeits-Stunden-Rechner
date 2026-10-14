import Link from "next/link";
import {
  Wallet,
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
  Scale,
  Coins,
  ShieldCheck,
} from "lucide-react";

export default function MinijobRechnerContent() {
  const wageTableRows = [
    { lohn: "13,90 Euro (Mindestlohn 2026)", std: "43,38 Stunden" },
    { lohn: "14,00 Euro", std: "43,07 Stunden" },
    { lohn: "15,00 Euro", std: "40,20 Stunden" },
    { lohn: "16,00 Euro", std: "37,69 Stunden" },
    { lohn: "18,00 Euro", std: "33,50 Stunden" },
    { lohn: "20,00 Euro", std: "30,15 Stunden" },
  ];

  const shiftDocRows = [
    { tag: "Montag", zeit: "09:00–13:00 Uhr", dauer: "4 Stunden" },
    { tag: "Mittwoch", zeit: "14:00–18:00 Uhr", dauer: "4 Stunden" },
    { tag: "Freitag", zeit: "10:00–14:00 Uhr", dauer: "4 Stunden" },
  ];

  return (
    <article className="mt-12 sm:mt-16 space-y-10 sm:space-y-12 text-slate-800 leading-relaxed">
      {/* 1. Was ist ein Minijob Rechner für Stunden? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl">
            <Wallet className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Was ist ein Minijob Rechner für Stunden?
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Ein <strong>Minijob Rechner für Stunden</strong> ist ein praktisches Hilfsmittel, mit dem
          Arbeitnehmer ihre Arbeitszeit planen und die monatlich geleisteten Stunden übersichtlich
          berechnen können. Besonders für Beschäftigte in Deutschland ist es wichtig, die
          Arbeitsstunden und den Verdienst im Blick zu behalten. Ob du in einem Supermarkt, in einem
          Restaurant, im Büro oder als Aushilfe arbeitest – eine genaue Berechnung hilft dir dabei,
          deine Arbeitszeit besser zu organisieren.
        </p>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Mit einem Minijob Rechner Stunden zu berechnen, ist besonders sinnvoll, wenn du einen
          festen Stundenlohn erhältst und wissen möchtest, wie viele Stunden du innerhalb eines
          Monats arbeiten kannst. Du kannst beispielsweise deinen Stundenlohn eingeben, die gewünschte
          monatliche Arbeitszeit festlegen und deinen voraussichtlichen Verdienst ermitteln.
        </p>

        <p className="text-slate-600 text-sm leading-relaxed">
          Ein solcher Rechner eignet sich sowohl für Personen, die bereits einen Minijob haben, als
          auch für Menschen, die eine geringfügige Beschäftigung beginnen möchten. Er unterstützt
          dich bei der Planung deiner Schichten und hilft dir, deine Arbeitszeit mit anderen
          Verpflichtungen wie Studium, Schule, Familie oder einer Hauptbeschäftigung abzustimmen.
        </p>
      </section>

      {/* 2. Wie funktioniert der Minijob Rechner Stunden? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Calculator className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Wie funktioniert der Minijob Rechner Stunden?
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Die Berechnung der Arbeitszeit ist unkompliziert. Grundsätzlich benötigst du dafür zwei
          wichtige Angaben: deinen <strong>Stundenlohn</strong> und den <strong>Betrag</strong>, den
          du monatlich verdienen möchtest:
        </p>

        {/* Formulas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200 font-mono">
            <span className="text-xs uppercase tracking-wider font-bold text-emerald-900 block font-sans mb-1">
              Benötigte Arbeitsstunden ermitteln:
            </span>
            <div className="text-sm sm:text-base font-extrabold text-emerald-950">
              Arbeitsstunden = gewünschter Monatsverdienst ÷ Stundenlohn
            </div>
          </div>

          <div className="p-5 rounded-xl bg-blue-50/70 border border-blue-200 font-mono">
            <span className="text-xs uppercase tracking-wider font-bold text-blue-900 block font-sans mb-1">
              Monatsverdienst aus Stunden ermitteln:
            </span>
            <div className="text-sm sm:text-base font-extrabold text-blue-950">
              Monatsverdienst = Arbeitsstunden × Stundenlohn
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Beispiel 1: 400 € Zielverdienst bei 13,90 € Mindestlohn
            </span>
            <div className="font-mono text-xs sm:text-sm text-slate-800 space-y-1">
              <div>400 € ÷ 13,90 € ≈ 28,78 Stunden</div>
              <div className="font-bold text-emerald-700">
                Ergebnis: ca. 28 Stunden und 47 Minuten monatlich.
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Beispiel 2: 30 Arbeitsstunden bei 13,90 €
            </span>
            <div className="font-mono text-xs sm:text-sm text-slate-800 space-y-1">
              <div>30 Stunden × 13,90 € = 417,00 €</div>
              <div className="font-bold text-emerald-700">
                Ergebnis: 417,00 Euro rechnerischer Bruttoverdienst.
              </div>
            </div>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Ein Minijob Rechner Stunden erleichtert diese Berechnungen und spart dir Zeit. Statt die
          Zahlen jedes Mal selbst auszurechnen, kannst du unterschiedliche Stundenlöhne und
          Arbeitszeitmodelle miteinander vergleichen.
        </p>
      </section>

      {/* 3. Wie viele Stunden darf man bei einem Minijob arbeiten? */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl">
            <Clock className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Wie viele Stunden darf man bei einem Minijob arbeiten?
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Die mögliche Arbeitszeit hängt vor allem vom vereinbarten Stundenlohn und von der geltenden
          Verdienstgrenze ab. Für Minijobs mit einer Verdienstgrenze ist nicht allein die Anzahl der
          Stunden entscheidend. Wichtig ist vielmehr, dass der regelmäßige monatliche Verdienst die
          gesetzliche Grenze grundsätzlich nicht überschreitet.
        </p>

        <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200 mb-6">
          <div className="flex items-center gap-2 font-bold text-emerald-950 text-sm sm:text-base mb-2">
            <ShieldCheck className="w-5 h-5 text-emerald-700" />
            <span>Gesetzliche Minijob-Grenze ab 2026: 603 Euro monatlich</span>
          </div>
          <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed mb-3">
            Seit dem 1. Januar 2026 liegt die monatliche Verdienstgrenze für einen Minijob in
            Deutschland bei <strong>603 Euro</strong> (Koppelung an den Mindestlohn von 13,90 Euro).
          </p>
          <div className="font-mono text-sm font-bold text-emerald-950 bg-white p-3 rounded-lg border border-emerald-200">
            603 Euro ÷ 13,90 Euro/Std. = rund 43,38 Stunden im Monat (ca. 10,85 Std./Woche)
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Das entspricht ungefähr <strong>43 Stunden und 23 Minuten monatlich</strong>. Bei einem
          höheren Stundenlohn erreichst du die Verdienstgrenze bereits mit weniger Arbeitsstunden.
          Beachte außerdem, dass für bestimmte Sonderzahlungen, schwankende Verdienste und
          unvorhersehbare Überschreitungen besondere Regeln der Minijob-Zentrale gelten.
        </p>
      </section>

      {/* 4. Minijob Stunden pro Monat berechnen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <TableIcon className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Minijob Stunden pro Monat berechnen
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Die folgende Tabelle zeigt beispielhaft, wie sich verschiedene Stundenlöhne auf die
          maximale Arbeitszeit bei der monatlichen 603-Euro-Grenze auswirken:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs mb-6 max-w-lg">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                <th scope="col" className="py-3 px-4 sm:px-6">Stundenlohn</th>
                <th scope="col" className="py-3 px-4 sm:px-6 text-right">
                  Rechnerische Stunden pro Monat
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {wageTableRows.map((row, idx) => (
                <tr
                  key={row.lohn}
                  className={`hover:bg-emerald-50/40 transition-colors ${
                    idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"
                  }`}
                >
                  <td className="py-2.5 px-4 sm:px-6 font-semibold text-slate-900">{row.lohn}</td>
                  <td className="py-2.5 px-4 sm:px-6 text-right font-mono font-bold text-emerald-700">
                    {row.std}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Anhand dieser Übersicht wird deutlich, dass Beschäftigte mit einem höheren Stundenlohn
          weniger Stunden arbeiten müssen, um denselben Betrag zu erreichen. Achte beim Vergleich von
          Minijobs daher stets sowohl auf die Stundenzahl als auch auf den Stundenlohn.
        </p>
      </section>

      {/* 5. Minijob Verdienst mit dem Stundenlohn berechnen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl">
            <Coins className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Minijob Verdienst mit dem Stundenlohn berechnen
          </h2>
        </div>

        <p className="text-slate-600 mb-6 leading-relaxed">
          Wenn du deinen Stundenlohn kennst, kannst du deinen monatlichen Verdienst relativ einfach
          berechnen. Dafür multiplizierst du die bezahlten Monatsstunden mit dem vereinbarten
          Stundenlohn:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Beispiel 1: 8 Stunden / Woche bei 14 Euro
            </span>
            <div className="space-y-1 font-mono text-xs sm:text-sm text-slate-800">
              <div>8 Std. × 52 Wochen ÷ 12 Monate = 34,67 Std./Monat</div>
              <div className="font-bold text-emerald-700 pt-1 border-t border-slate-200">
                34,67 Std. × 14 € = 485,38 € Brutto
              </div>
            </div>
            <p className="text-xs text-slate-600 mt-2">
              Bleibt sicher unter der 603-Euro-Grenze.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Beispiel 2: 10 Stunden / Woche bei 15 Euro
            </span>
            <div className="space-y-1 font-mono text-xs sm:text-sm text-slate-800">
              <div>10 Std. × 52 Wochen ÷ 12 Monate = 43,33 Std./Monat</div>
              <div className="font-bold text-rose-700 pt-1 border-t border-slate-200">
                43,33 Std. × 15 € = 650,00 € Brutto
              </div>
            </div>
            <p className="text-xs text-rose-600 font-semibold mt-2">
              Achtung: Liegt über der 603-Euro-Grenze (Midijob)!
            </p>
          </div>
        </div>
      </section>

      {/* 6. Unterschied zwischen Bruttoverdienst und Nettolohn */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <Scale className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Unterschied zwischen Bruttoverdienst und Nettolohn
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Wenn du mit einem Minijob Rechner Stunden und Verdienst ermittelst, solltest du zwischen
          Bruttoverdienst und Nettolohn unterscheiden. Der Bruttoverdienst ist der Betrag vor
          möglichen Abzügen; der Nettolohn ist der Betrag, der dir tatsächlich ausgezahlt wird.
        </p>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2 mb-4">
          <p>
            <strong>Rentenversicherungspflicht:</strong> Im Minijob besteht grundsätzlich eine
            Rentenversicherungspflicht (Eigenanteil von 3,6 %). Minijobber können sich jedoch auf
            schriftlichen Antrag beim Arbeitgeber davon befreien lassen.
          </p>
          <p>
            <strong>Steuern:</strong> Die Versteuerung erfolgt in der Regel pauschal durch den
            Arbeitgeber mit 2 % Pauschsteuer.
          </p>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Berechne zunächst deinen Bruttoverdienst und prüfe anschließend, ob für dich
          Rentenversicherungsbeiträge anfallen, um deinen echten monatlichen Auszahlungsbetrag zu
          kennen.
        </p>
      </section>

      {/* 7. Wöchentliche Arbeitszeit planen */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl">
            <CalendarCheck className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Wie planst du deine wöchentliche Arbeitszeit im Minijob?
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Eine gute Arbeitszeitplanung hilft dir, deine Aufgaben und privaten Verpflichtungen
          miteinander zu vereinbaren. Beginne mit deinem gewünschten Monatsverdienst und teile diesen
          durch deinen Stundenlohn:
        </p>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 font-mono mb-4">
          500 Euro ÷ 14 Euro/Std. = rund 35,71 Stunden / Monat (ca. 8,24 bis 8,93 Std./Woche)
        </div>

        <p className="text-slate-600 text-sm leading-relaxed">
          Du könntest deine Arbeitszeit beispielsweise auf zwei Schichten pro Woche verteilen (z. B.
          zweimal 4,5 Stunden). Achte darauf, vereinbarte Pausen, bezahlte Arbeitszeiten und mögliche
          zusätzliche Schichten sorgfältig zu dokumentieren.
        </p>
      </section>

      {/* 8. Minijob Stunden richtig dokumentieren */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Minijob Stunden richtig dokumentieren
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Eine genaue Zeiterfassung ist für Minijobber gesetzlich vorgeschrieben (Aufzeichnungspflicht
          nach dem Mindestlohngesetz). Notiere für jede Schicht das Datum, die Startzeit, die Endzeit
          und die tatsächliche Arbeitsdauer:
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs mb-4 max-w-lg">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-xs">
              <tr>
                <th className="py-2 px-3">Arbeitstag</th>
                <th className="py-2 px-3">Arbeitszeit</th>
                <th className="py-2 px-3 text-right">Dauer</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {shiftDocRows.map((r) => (
                <tr key={r.tag}>
                  <td className="py-2 px-3 font-semibold text-slate-800">{r.tag}</td>
                  <td className="py-2 px-3 text-slate-600 font-mono">{r.zeit}</td>
                  <td className="py-2 px-3 text-right font-mono font-bold text-slate-900">{r.dauer}</td>
                </tr>
              ))}
              <tr className="bg-slate-50 font-bold border-t border-slate-200">
                <td colSpan={2} className="py-2 px-3 text-slate-900">
                  Gesamt (Woche)
                </td>
                <td className="py-2 px-3 text-right text-emerald-700 font-mono">12 Stunden</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
          Bei 12 Wochenstunden und 14 € Stundenlohn ergibt sich ein rechnerischer Bruttoverdienst von{" "}
          <strong>168 Euro pro Woche</strong>.
        </p>
      </section>

      {/* 9. Studenten und Schüler */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-xl">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Minijob Rechner Stunden für Studenten und Schüler
          </h2>
        </div>

        <p className="text-slate-600 mb-4 leading-relaxed">
          Für Studenten und Schüler ist ein Minijob eine hervorragende Möglichkeit, nebenbei Geld zu
          verdienen und flexibel zu bleiben. Studenten sollten dabei prüfen, ob ihre Beschäftigung
          Auswirkungen auf die studentische Krankenversicherung oder BAföG-Freibeträge hat. Bei
          Schülern gelten besondere Regelungen des Jugendarbeitsschutzgesetzes (JArbSchG).
        </p>

        <p className="text-slate-600 text-sm leading-relaxed">
          Der Minijob Rechner Stunden bietet eine verlässliche mathematische Orientierung zur Planung
          Ihrer Monatsstunden.
        </p>
      </section>

      {/* 10. Häufige Fehler */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-rose-100 text-rose-700 rounded-xl">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Häufige Fehler bei der Berechnung der Minijob-Stunden
          </h2>
        </div>

        <div className="space-y-3">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">
              1. Die Monatslänge falsch einschätzen:
            </strong>
            <p className="text-xs text-slate-600">
              Ein Monat hat im Schnitt 4,33 Wochen (52 Wochen ÷ 12 Monate). Rechnen Sie nicht starr mit
              nur 4 Wochen.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">
              2. Zusätzliche Arbeitsstunden vergessen:
            </strong>
            <p className="text-xs text-slate-600">
              Zusatzschichten oder Vertretungen können die 603-Euro-Grenze schnell überschreiten.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">
              3. Den Stundenlohn nicht überprüfen:
            </strong>
            <p className="text-xs text-slate-600">
              Bei Mindestlohnerhöhungen sinkt die maximal erlaubte Stundenzahl entsprechend.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">
              4. Brutto und Netto verwechseln:
            </strong>
            <p className="text-xs text-slate-600">
              Mögliche Rentenversicherungsbeiträge (3,6 %) verringern die tatsächliche Nettoauszahlung.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block text-sm mb-1">
              5. Die geltende Verdienstgrenze ignorieren:
            </strong>
            <p className="text-xs text-slate-600">
              Achten Sie stets auf die aktuelle Minijob-Grenze (603 Euro seit 2026).
            </p>
          </div>
        </div>
      </section>

      {/* 11. Fazit */}
      <section className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 rounded-2xl p-6 sm:p-10 text-white shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-emerald-500/20 text-emerald-300 rounded-xl border border-emerald-400/30">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Fazit: Mit dem Minijob Rechner Stunden und Verdienst im Blick behalten
          </h2>
        </div>

        <p className="text-slate-200 mb-4 leading-relaxed">
          Ein <strong>Minijob Rechner Stunden</strong> erleichtert die Planung deiner Arbeitszeit und
          unterstützt dich dabei, deinen monatlichen Verdienst realistisch einzuschätzen. Mit wenigen
          Angaben kannst du herausfinden, wie viele Stunden du für einen bestimmten Betrag arbeiten
          musst und wie sich unterschiedliche Stundenlöhne auf deinen Verdienst auswirken.
        </p>

        <p className="text-slate-200 mb-6 leading-relaxed">
          Besonders wichtig sind eine korrekte Zeiterfassung, die Berücksichtigung möglicher Pausen
          und die Einhaltung der aktuellen gesetzlichen Verdienstgrenze von 603 Euro. Wenn du
          regelmäßig deine Arbeitsstunden kontrollierst, kannst du deinen Minijob besser organisieren
          und unerwartete Abweichungen vermeiden.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-colors"
          >
            <span>Zum Hauptrechner</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/stunden-brutto-rechner"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors"
          >
            <span>Stunden Brutto Rechner</span>
          </Link>
          <Link
            href="/brutto-netto-rechner-stunden"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors"
          >
            <span>Brutto Netto Rechner</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
