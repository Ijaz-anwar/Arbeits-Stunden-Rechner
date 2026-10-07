import Calculator from "@/components/Calculator";
import ContentSections from "@/components/ContentSections";
import FaqSection from "@/components/FaqSection";
import { Check, Shield, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Stunden Rechner Online – Arbeitszeit, Stunden und Minuten einfach berechnen",
  description:
    "Stunden Rechner Online: Arbeitszeit, Stunden und Minuten einfach berechnen. Stunden zusammenrechnen, Dezimalstunden umwandeln, Pausen abziehen und Arbeitslohn berechnen.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Stunden Rechner Online – Arbeitszeit, Stunden und Minuten einfach berechnen",
    description:
      "Stunden Rechner Online: Arbeitszeit, Stunden und Minuten einfach berechnen. Stunden zusammenrechnen, Dezimalstunden umwandeln, Pausen abziehen und Arbeitslohn berechnen.",
    url: "https://arbeitsstundenrechner.de",
    type: "website",
    locale: "de_DE",
  },
};

export default function HomePage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Arbeitsstundenrechner – Arbeitszeitrechner Online",
      url: "https://arbeitsstundenrechner.de",
      description:
        "Kostenloser Online-Stundenrechner zur präzisen Berechnung von Arbeitszeiten, Pausenzeiten, Nettoarbeitsstunden und Dezimalstunden.",
      inLanguage: "de-DE",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Arbeitsstundenrechner & Arbeitszeitrechner",
      url: "https://arbeitsstundenrechner.de",
      applicationCategory: "BusinessApplication",
      operatingSystem: "All",
      browserRequirements: "Requires JavaScript",
      inLanguage: "de-DE",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
      },
      description:
        "Interaktiver Stundenrechner zur Berechnung von Bruttoarbeitszeit, unbezahlten Ruhepausen nach ArbZG, Nettoarbeitszeit, Dezimalstunden und geschätztem Bruttolohn.",
    },
  ];

  return (
    <main className="py-8 sm:py-12 lg:py-16">
      {/* Schema.org WebSite & WebApplication Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60 mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Kostenloser Online-Stundenrechner &amp; Arbeitszeitrechner</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Stunden Rechner Online – Arbeitszeit, Stunden und Minuten einfach berechnen
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Nutzen Sie unseren kostenlosen <strong>Stundenrechner</strong>, um Ihre tägliche, wöchentliche
            oder monatliche Arbeitszeit schnell und exakt zu berechnen. Geben Sie einfach{" "}
            <strong>Arbeitsbeginn</strong>, <strong>Arbeitsende</strong> und <strong>Pausen</strong> ein –
            das Tool ermittelt sofort Ihre <strong>Nettoarbeitszeit</strong>, rechnet Minuten in{" "}
            <strong>Dezimalstunden</strong> für Ihren Stundenzettel um und kalkuliert Ihren geschätzten Lohn.
          </p>

          {/* Key Value Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs font-medium text-slate-600">
            <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-xs">
              <Check className="w-4 h-4 text-emerald-600" />
              Schichten über Mitternacht unterstützt
            </span>
            <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-xs">
              <Check className="w-4 h-4 text-emerald-600" />
              Mehrere Pausen (§ 4 ArbZG)
            </span>
            <span className="flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-xs">
              <Shield className="w-4 h-4 text-blue-600" />
              Dezimalstunden &amp; Lohnberechnung
            </span>
          </div>
        </section>

        {/* Main Calculator Tool (Visual Focus) */}
        <section aria-label="Arbeitszeitrechner Tool" className="relative z-10">
          <Calculator />
        </section>

        {/* Quick Topic Navigation Cards */}
        <section className="mt-12 max-w-4xl mx-auto" aria-label="Arbeitszeit Ratgeber">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 text-center sm:text-left">
            Hilfreiche Ratgeber &amp; Rechner-Themen:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <Link
              href="/blog/wie-berechnet-man-arbeitszeit"
              className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-xs transition-all group flex flex-col justify-between"
            >
              <span className="text-xs font-semibold text-slate-800 group-hover:text-blue-600 leading-snug">
                Wie berechnet man Arbeitszeit?
              </span>
              <span className="text-[11px] text-blue-600 font-medium inline-flex items-center gap-1 mt-2">
                Ratgeber lesen <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            <Link
              href="/blog/arbeitszeit-mit-pause-berechnen"
              className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-xs transition-all group flex flex-col justify-between"
            >
              <span className="text-xs font-semibold text-slate-800 group-hover:text-blue-600 leading-snug">
                Arbeitszeit mit Pause berechnen
              </span>
              <span className="text-[11px] text-blue-600 font-medium inline-flex items-center gap-1 mt-2">
                Pausenregeln (§ 4 ArbZG) <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            <Link
              href="/blog/arbeitszeit-ueber-mitternacht-berechnen"
              className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-xs transition-all group flex flex-col justify-between"
            >
              <span className="text-xs font-semibold text-slate-800 group-hover:text-blue-600 leading-snug">
                Arbeitszeit über Mitternacht
              </span>
              <span className="text-[11px] text-blue-600 font-medium inline-flex items-center gap-1 mt-2">
                Nachtschicht-Tipps <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            <Link
              href="/blog/was-sind-dezimalstunden"
              className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-xs transition-all group flex flex-col justify-between"
            >
              <span className="text-xs font-semibold text-slate-800 group-hover:text-blue-600 leading-snug">
                Was sind Dezimalstunden?
              </span>
              <span className="text-[11px] text-blue-600 font-medium inline-flex items-center gap-1 mt-2">
                Umrechnungstabelle <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
        </section>

        {/* Educational Content Sections */}
        <ContentSections />

        {/* FAQ Section */}
        <FaqSection />
      </div>
    </main>
  );
}
