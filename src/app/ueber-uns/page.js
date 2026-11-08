import Link from "next/link";
import {
  Clock,
  ShieldCheck,
  Calculator,
  Users,
  Target,
  Heart,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  Award,
  CheckCircle2,
  FileCheck2,
  ArrowRight,
  Mail,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "Über uns – Mission, Transparenz & Qualität",
  description:
    "Erfahren Sie mehr über Arbeitsstundenrechner.de: Unsere Mission für transparente, präzise und 100 % private Arbeitszeitberechnung in Deutschland.",
  alternates: {
    canonical: "/ueber-uns",
  },
  openGraph: {
    title: "Über uns | Arbeitsstundenrechner.de",
    description:
      "Unsere Mission: Faire, transparente und kostenlose Werkzeuge zur Arbeitszeitberechnung nach deutschem Arbeitsrecht.",
    url: "https://arbeitsstundenrechner.de/ueber-uns",
    type: "website",
    locale: "de_DE",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function UeberUnsPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "100 % Lokaler Datenschutz",
      desc: "Ihre Arbeitszeiten, Pausen und Gehaltsangaben werden ausschließlich lokal in Ihrem Webbrowser berechnet. Es erfolgt kein Upload auf Server und kein Tracking persönlicher Zeiterfassungsdaten.",
      color: "emerald",
    },
    {
      icon: Target,
      title: "Mathematische & rechtliche Präzision",
      desc: "Unsere Algorithmen basieren exakt auf den Vorgaben des deutschen Arbeitsrechts (z. B. § 4 ArbZG, Standard-Berechnungen mit 4,33 Wochen/Monat und 52 Wochen ÷ 12 Monate).",
      color: "blue",
    },
    {
      icon: Zap,
      title: "Schnelligkeit & Barrierefreiheit",
      desc: "Schlankes, modernes Design ohne Registrierungszwang, optimiert für Smartphone, Tablet und Desktop mit 1-Klick-Kopierfunktion für Stundenzettel.",
      color: "indigo",
    },
    {
      icon: Heart,
      title: "Dauerhaft kostenlos",
      desc: "Alle Rechentools und Ratgeberartikel stehen Nutzern dauerhaft frei und ohne versteckte Abonnements oder Gebühren zur Verfügung.",
      color: "amber",
    },
  ];

  const targetGroups = [
    {
      title: "Arbeitnehmer & Angestellte",
      desc: "Gleichen Sie Ihren monatlichen Stundenzettel ab, berechnen Sie geleistete Überstunden und prüfen Sie, ob die gesetzlichen Ruhepausen korrekt abgezogen wurden.",
    },
    {
      title: "Schicht- & Industriearbeiter",
      desc: "Nutzen Sie unseren Industrie-Stunden-Rechner zur fehlerfreien Umwandlung in die 100er-Teilung (Industrieminuten) für ERP- und Lohnsysteme (z. B. SAP oder DATEV).",
    },
    {
      title: "Teilzeitkräfte & Minijobber",
      desc: "Ermitteln Sie präzise, wie viele Stunden Sie bei Ihrem Stundenlohn maximal arbeiten dürfen, um innerhalb der Minijob-Grenze zu bleiben.",
    },
    {
      title: "Freiberufler & Selbstständige",
      desc: "Wandeln Sie geleistete Arbeitsstunden und Minuten sekundenschnell in Dezimalstunden um, um transparente Kundenrechnungen zu erstellen.",
    },
  ];

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
          <span className="font-semibold text-slate-800">Über uns</span>
        </nav>

        {/* Hero Section */}
        <div className="mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-900 border border-blue-200/80 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            Unsere Mission &amp; Vision
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Über Arbeitsstundenrechner.de
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            Wir machen die Arbeitszeitberechnung in Deutschland transparent, unkompliziert und verlässlich.
            Von täglichen Arbeitszeiten und gesetzlichen Pausen bis hin zu Dezimalstunden und Lohnberechnungen.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base mb-10">
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Warum es Arbeitsstundenrechner.de gibt
            </h2>
            <p>
              Die Dokumentation und Berechnung von Arbeitszeiten gehört für Millionen Beschäftigte in
              Deutschland zum Alltag. Ob beim Ausfüllen des wöchentlichen Stundenzettels, beim Kontrollieren
              der Gehaltsabrechnung oder beim Erfassen von Projektzeiten für Kunden: Häufig entstehen
              Rechenfehler oder Verwirrung durch unterschiedliche Zeitformate.
            </p>
            <p>
              Besonders die Umrechnung zwischen der klassischen <strong>60-Minuten-Uhrzeit</strong>,{" "}
              <strong>Dezimalstunden</strong> und <strong>Industrieminuten (100er-Teilung)</strong> stellt viele
              vor Herausforderungen. Hinzu kommen gesetzliche Vorgaben nach dem{" "}
              <strong>Arbeitszeitgesetz (§ 4 ArbZG)</strong> mit vorgeschriebenen Mindestruhepausen von 30 bzw.
              45 Minuten sowie komplexe Berechnungen bei Teilzeit- und Minijob-Verhältnissen.
            </p>
            <p>
              Viele existierende Online-Tools im Internet sind entweder mit unübersichtlicher Werbung
              überfrachtet, erfordern eine Benutzerregistrierung oder übertragen sensible Daten auf
              Server. Mit <strong>arbeitsstundenrechner.de</strong> haben wir eine saubere, moderne und
              verlässliche Alternative geschaffen: <em>Kostenlos, ohne Anmeldung und mit 100 % lokalem Datenschutz.</em>
            </p>
          </section>

          {/* Core Values Grid */}
          <section className="pt-6 border-t border-slate-100 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Unsere 4 Grundwerte
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-white border border-slate-200 text-blue-600 shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-base">{v.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Calculator Suite Overview */}
          <section className="pt-6 border-t border-slate-100 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Eine vollständige Rechner-Suite für jede Anforderung
            </h2>
            <p>
              Unser Angebot umfasst neben unserem flexiblen Hauptrechner zehn spezialisierte Werkzeuge,
              die gezielt auf typische Fragestellungen des deutschen Arbeitsalltags eingehen:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm pt-2">
              <Link
                href="/stunden-minuten-rechner"
                className="p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all flex items-center justify-between group"
              >
                <div>
                  <span className="font-bold block text-slate-900 group-hover:text-blue-700">
                    Stunden Minuten Rechner
                  </span>
                  <span className="text-slate-500 text-xs">Arbeitsbeginn bis Arbeitsende mit Pause</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors shrink-0" />
              </Link>

              <Link
                href="/stunden-dezimal-rechner"
                className="p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all flex items-center justify-between group"
              >
                <div>
                  <span className="font-bold block text-slate-900 group-hover:text-blue-700">
                    Stunden Dezimal Rechner
                  </span>
                  <span className="text-slate-500 text-xs">Minuten in Dezimalstunden (z. B. 45 min = 0,75 h)</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors shrink-0" />
              </Link>

              <Link
                href="/industrie-stunden-rechner"
                className="p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all flex items-center justify-between group"
              >
                <div>
                  <span className="font-bold block text-slate-900 group-hover:text-blue-700">
                    Industrie Stunden Rechner
                  </span>
                  <span className="text-slate-500 text-xs">100er-Industrieminuten für Schicht &amp; Produktion</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors shrink-0" />
              </Link>

              <Link
                href="/brutto-netto-rechner-stunden"
                className="p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all flex items-center justify-between group"
              >
                <div>
                  <span className="font-bold block text-slate-900 group-hover:text-blue-700">
                    Brutto Netto Rechner Stunden
                  </span>
                  <span className="text-slate-500 text-xs">Netto-Stundenlohn &amp; monatliche Abzüge schätzen</span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors shrink-0" />
              </Link>
            </div>
          </section>

          {/* Target Audience Section */}
          <section className="pt-6 border-t border-slate-100 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Für wen wir das Portal entwickeln
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {targetGroups.map((tg) => (
                <div key={tg.title} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 mb-1.5 text-slate-900 font-bold text-sm sm:text-base">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    {tg.title}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{tg.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Quality & Editorial Standards */}
          <section className="pt-6 border-t border-slate-100 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Qualität, Aktualität &amp; Unabhängigkeit
            </h2>
            <p>
              Unsere redaktionellen Inhalte und mathematischen Formeln werden kontinuierlich überprüft
              und an aktuelle gesetzliche Änderungen in Deutschland angepasst (z. B. Anpassungen des
              gesetzlichen Mindestlohns oder der Minijob-Verdienstgrenzen).
            </p>
            <p>
              Wir arbeiten unabhängig von Lohnabrechnungssoftware-Herstellern oder Werbenetzwerken, um
              Ihnen stets eine neutrale, objektive Orientierungshilfe an die Hand zu geben.
            </p>
          </section>

          {/* Contact Box */}
          <section className="pt-6 border-t border-slate-100 space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Haben Sie Feedback oder Wünsche?
            </h2>
            <p className="text-sm text-slate-600">
              Wir entwickeln Arbeitsstundenrechner.de kontinuierlich weiter. Haben Sie einen Fehler entdeckt,
              einen Verbesserungsvorschlag oder eine Idee für ein neues Zeiterfassungs-Feature? Wir freuen
              uns auf Ihre Nachricht!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Kontaktformular öffnen</span>
              </Link>
              <a
                href="mailto:contact@arbeitsstundenrechner.de"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-all font-mono"
              >
                contact@arbeitsstundenrechner.de
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
