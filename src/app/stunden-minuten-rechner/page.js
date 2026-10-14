import Link from "next/link";
import { ChevronRight, ArrowLeft, Sparkles, Clock } from "lucide-react";
import StundenMinutenCalculator from "@/components/calculators/StundenMinutenCalculator";
import StundenMinutenContent from "@/components/StundenMinutenContent";
import StundenMinutenFaq from "@/components/StundenMinutenFaq";
import { stundenMinutenFaqs } from "@/lib/stunden-minuten-data";

export const metadata = {
  title: "Stunden Minuten Rechner – Stunden einfach umrechnen",
  description:
    "Mit dem Stunden Minuten Rechner rechnen Sie Stunden in Minuten und Minuten in Stunden um. Entdecken Sie einfache Formeln, Beispiele und hilfreiche Zeitumrechnungen.",
  alternates: {
    canonical: "/stunden-minuten-rechner",
  },
  openGraph: {
    title: "Stunden Minuten Rechner – Stunden einfach umrechnen",
    description:
      "Mit dem Stunden Minuten Rechner rechnen Sie Stunden in Minuten und Minuten in Stunden um. Entdecken Sie einfache Formeln, Beispiele und hilfreiche Zeitumrechnungen.",
    url: "https://arbeitsstundenrechner.de/stunden-minuten-rechner",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stunden Minuten Rechner – Stunden einfach umrechnen",
    description:
      "Mit dem Stunden Minuten Rechner rechnen Sie Stunden in Minuten und Minuten in Stunden um. Entdecken Sie einfache Formeln, Beispiele und hilfreiche Zeitumrechnungen.",
  },
};

export default function StundenMinutenRechnerPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Stunden Minuten Rechner",
      url: "https://arbeitsstundenrechner.de/stunden-minuten-rechner",
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
        "Mit dem Stunden Minuten Rechner rechnen Sie Stunden in Minuten und Minuten in Stunden um. Entdecken Sie einfache Formeln, Beispiele und hilfreiche Zeitumrechnungen.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: stundenMinutenFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <main className="py-8 sm:py-12">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors inline-flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Hauptrechner</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">Stunden Minuten Rechner</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Kostenloser Online Zeitrechner</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Stunden Minuten Rechner: Stunden und Minuten einfach umrechnen
          </h1>

          <div className="mt-4 space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            <p>
              Ein <strong>Stunden Minuten Rechner</strong> ist ein praktisches Hilfsmittel, wenn
              Sie Zeitangaben schnell und zuverlässig umrechnen möchten. Ob bei der täglichen
              Arbeitszeit, beim Lernen, beim Sport oder bei der Planung von Terminen – häufig
              müssen Stunden in Minuten oder Minuten in Stunden umgewandelt werden. Mit der
              richtigen Formel gelingt das in wenigen Sekunden.
            </p>
            <p>
              Besonders im Berufsalltag ist eine genaue Zeitberechnung wichtig. Wer seine
              Arbeitsstunden dokumentiert, Pausenzeiten berücksichtigt oder geleistete Stunden für
              eine Abrechnung vorbereitet, benötigt häufig sowohl die klassische
              Stunden-Minuten-Angabe als auch den entsprechenden Dezimalwert.
            </p>
            <p>
              Auf dieser Seite erfahren Sie, wie Sie Stunden und Minuten berechnen, welche
              Formeln Sie dafür benötigen und wie Sie typische Rechenfehler vermeiden. Außerdem
              finden Sie praktische Beispiele und eine Umrechnungstabelle, mit der Sie häufig
              verwendete Zeitwerte direkt nachschlagen können.
            </p>
          </div>
        </header>

        {/* Dedicated Calculator */}
        <section aria-label="Stunden Minuten Rechner Tool" className="relative z-10 mb-10">
          <StundenMinutenCalculator />
        </section>

        {/* Educational Content Sections */}
        <StundenMinutenContent />

        {/* FAQ Section */}
        <div className="mt-10 sm:mt-12">
          <StundenMinutenFaq />
        </div>
      </div>
    </main>
  );
}
