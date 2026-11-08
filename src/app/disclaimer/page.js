import Link from "next/link";
import {
  AlertTriangle,
  Scale,
  ShieldAlert,
  FileText,
  ExternalLink,
  ChevronRight,
  ArrowLeft,
  Mail,
  Info,
} from "lucide-react";

export const metadata = {
  title: "Disclaimer – Haftungsausschluss & Rechtshinweise",
  description:
    "Rechtlicher Haftungsausschluss für Arbeitsstundenrechner.de: Wichtige Hinweise zur Genauigkeit der Berechnungen, Haftung für Inhalte, Links und Ausschluss von Rechts- oder Steuerberatung.",
  alternates: {
    canonical: "/disclaimer",
  },
  openGraph: {
    title: "Disclaimer – Haftungsausschluss | Arbeitsstundenrechner.de",
    description:
      "Wichtige rechtliche Hinweise und Haftungsausschluss für die Nutzung unserer kostenlosen Online-Arbeitszeitrechner.",
    url: "https://arbeitsstundenrechner.de/disclaimer",
    type: "website",
    locale: "de_DE",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DisclaimerPage() {
  return (
    <main className="py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors inline-flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Hauptrechner</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">Disclaimer</span>
        </nav>

        {/* Hero Section */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-200/80 mb-3">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-700" />
            Rechtlicher Hinweis
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Disclaimer / Haftungsausschluss
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
            Wichtige rechtliche Rahmenbedingungen und Haftungsbeschränkungen für die Nutzung der
            kostenlosen Online-Rechentools, Tabellen und redaktionellen Inhalte auf{" "}
            <strong>arbeitsstundenrechner.de</strong>.
          </p>
        </div>

        {/* Central Disclaimer Warning Box */}
        <div className="p-5 rounded-2xl bg-amber-50/90 border border-amber-200 text-amber-950 mb-10 shadow-sm flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1.5 text-xs sm:text-sm leading-relaxed">
            <span className="font-bold block text-amber-900 text-sm sm:text-base">
              Wesentlicher Grundsatz: Keine Rechts- oder Steuerberatung
            </span>
            <p>
              Sämtliche auf dieser Website bereitgestellten Online-Rechner (u. a. Stundenrechner,
              Dezimalrechner, Brutto-Netto-Rechner, Minijob-Rechner und Pausenrechner) dienen
              ausschließlich der unverbindlichen Orientierung und persönlichen Information. Sie stellen
              ausdrücklich keine Rechtsberatung im Sinne des Rechtsdienstleistungsgesetzes (RDG) und
              keine steuerliche oder betriebswirtschaftliche Lohnberatung dar.
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
          {/* Section 1: Accuracy of Calculations */}
          <section className="space-y-3">
            <div className="flex items-center gap-2.5 text-slate-900">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">
                Genauigkeit der Berechnungsergebnisse
              </h2>
            </div>
            <p>
              Die auf <em>arbeitsstundenrechner.de</em> integrierten mathematischen Formeln und
              Berechnungsmodelle wurden mit größtmöglicher Sorgfalt programmiert und orientieren sich an
              den allgemein gültigen arbeitszeitrechtlichen Richtwerten (z. B. § 4 Arbeitszeitgesetz
              ArbZG, Standard-Formel 4,33 Wochen pro Monat bzw. 52 Wochen geteilt durch 12 Monate).
            </p>
            <p>
              Dennoch übernehmen wir <strong>keine Garantie oder Gewährleistung</strong> für die
              vollständige Richtigkeit, Aktualität oder Genauigkeit der ermittelten Ergebnisse im
              Einzelfall. Abweichungen können insbesondere entstehen durch:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-xs sm:text-sm">
              <li>
                Spezifische Regelungen in Tarifverträgen, Betriebs- oder Dienstvereinbarungen
              </li>
              <li>
                Abweichende individuelle Vereinbarungen in Arbeitsverträgen (z. B. bei Überstundenabgeltung,
                Pausenregelungen oder Zeiterfassungssystemen)
              </li>
              <li>
                Besonderheiten bei Schichtarbeit, Nachtzuschlägen, Sonn- und Feiertagszuschlägen
              </li>
              <li>
                Rundungsdifferenzen zwischen verschiedenen Zeiterfassungssystemen (z. B. Industrieminuten
                vs. Echtzeitminuten)
              </li>
              <li>
                Dynamische Änderungen gesetzlicher Bemessungsgrenzen, Mindestlohnsätze oder Beitragssätze
                der Sozialversicherungsträger
              </li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-500 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <strong>Eigenverantwortung:</strong> Bitte vergleichen Sie alle Berechnungen stets mit Ihren
              offiziellen Gehaltsabrechnungen, Stundenzetteln oder Arbeitszeitnachweisen Ihres Arbeitgebers.
            </p>
          </section>

          {/* Section 2: No Legal Advice */}
          <section className="space-y-3 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2.5 text-slate-900">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">
                Ausschluss juristischer und steuerlicher Beratung
              </h2>
            </div>
            <p>
              Die Nutzung unseres Angebots begründet zu keinem Zeitpunkt ein Mandats-, Beratungs- oder
              Auskunftsverhältnis. Die redaktionellen Beiträge, Rechenbeispiele und Erläuterungen stellen
              lediglich allgemeine Informationsangebote dar.
            </p>
            <p>
              Für verbindliche Rechtsauskünfte zu arbeitsrechtlichen Streitigkeiten, Kündigungsfristen,
              Überstundenvergütungen oder tariflichen Einstufungen wenden Sie sich bitte an eine
              zugelassene Rechtsanwältin bzw. einen Rechtsanwalt für Arbeitsrecht, an Ihre zuständige
              Gewerkschaft oder an die Arbeitnehmerkammer. Für steuerliche Detailfragen zur
              Lohnsteuerabrechnung oder Sozialversicherungspflicht konsultieren Sie bitte eine Steuerberaterin
              oder einen Steuerberater.
            </p>
          </section>

          {/* Section 3: Liability for Own Content */}
          <section className="space-y-3 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2.5 text-slate-900">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">
                Haftung für eigene Inhalte nach § 7 Abs. 1 DDG
              </h2>
            </div>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 Digitale-Dienste-Gesetz (DDG) für eigene Inhalte
              auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir bemühen uns stets,
              alle Inhalte korrekt und auf dem aktuellen Rechtsstand zu halten.
            </p>
            <p>
              Eine Haftung für materielle oder ideelle Schäden, die durch die Nutzung oder Nichtnutzung der
              dargebotenen Informationen bzw. durch die Nutzung fehlerhafter oder unvollständiger
              Berechnungen verursacht wurden, ist grundsätzlich ausgeschlossen, sofern unsererseits kein
              nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt.
            </p>
          </section>

          {/* Section 4: Liability for Links */}
          <section className="space-y-3 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2.5 text-slate-900">
              <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-sm">
                4
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">
                Haftung für externe Links (§§ 8 bis 10 DDG)
              </h2>
            </div>
            <p>
              Unsere Website enthält unter Umständen Links zu externen Websites Dritter, auf deren Inhalte
              wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
              Betreiber der Seiten verantwortlich.
            </p>
            <p>
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
              permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
              einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
              derartige Links umgehend entfernen.
            </p>
          </section>

          {/* Section 5: Availability & Technical Errors */}
          <section className="space-y-3 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2.5 text-slate-900">
              <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center font-bold text-sm">
                5
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">
                Verfügbarkeit und technische Fehlerfreiheit
              </h2>
            </div>
            <p>
              Wir gewährleisten keine ununterbrochene, störungsfreie oder fehlerlose Verfügbarkeit der
              Website. Wir behalten uns ausdrücklich das Recht vor, Teile der Seiten, Rechentools oder das
              gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die
              Veröffentlichung zeitweise oder endgültig einzustellen.
            </p>
            <p>
              Es wird keine Haftung für Datenverluste übernommen, die durch das Schließen oder Neuladen des
              Browsers oder durch technische Inkompatibilitäten auf Endgeräten des Nutzers entstehen.
            </p>
          </section>

          {/* Section 6: Copyright */}
          <section className="space-y-3 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2.5 text-slate-900">
              <div className="w-8 h-8 rounded-lg bg-violet-100 text-violet-800 flex items-center justify-center font-bold text-sm">
                6
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">
                Urheberrecht und geistiges Eigentum
              </h2>
            </div>
            <p>
              Die durch die Betreiber dieser Website erstellten Inhalte, Rechner-Oberflächen, Designs,
              Skripte und Dokumentationen unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
              Urheberrechtes bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen Autors bzw.
              Erstellers.
            </p>
            <p>
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
              gestattet. Automatisierte Zugriffe (z. B. Scraping, Bots, Crawling zur massenhaften
              Datenextraktion) auf unsere Rechentools ohne ausdrückliche schriftliche Erlaubnis sind
              untersagt.
            </p>
          </section>

          {/* Section 7: Contact */}
          <section className="space-y-3 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-2.5 text-slate-900">
              <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                7
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">
                Hinweise &amp; Kontakt
              </h2>
            </div>
            <p>
              Sollten Sie auf fehlerhafte Berechnungslogiken, veraltete gesetzliche Angaben oder
              fragwürdige Inhalte stoßen, bitten wir um eine kurze Benachrichtigung, damit wir diese
              schnellstmöglich prüfen und korrigieren können.
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-600 shrink-0" />
              <div className="text-xs sm:text-sm">
                <span className="font-semibold block text-slate-900">Kontakt per E-Mail:</span>
                <a
                  href="mailto:contact@arbeitsstundenrechner.de"
                  className="text-blue-600 hover:underline font-mono"
                >
                  contact@arbeitsstundenrechner.de
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
