import Link from "next/link";
import { ChevronRight, ArrowLeft, Sparkles } from "lucide-react";
import IndustrieStundenRechner from "@/components/calculators/IndustrieStundenRechner";
import IndustrieStundenContent from "@/components/IndustrieStundenContent";
import IndustrieStundenFaq from "@/components/IndustrieStundenFaq";
import { industrieStundenFaqs } from "@/lib/industrie-stunden-data";

export const metadata = {
  title: "Industrie Stunden Rechner – Arbeitszeit schnell berechnen",
  description:
    "Mit dem Industrie Stunden Rechner Arbeitszeiten, Schichtstunden und Pausen einfach berechnen. Entdecken Sie Tipps zur genauen Arbeitszeiterfassung.",
  alternates: {
    canonical: "/industrie-stunden-rechner",
  },
  openGraph: {
    title: "Industrie Stunden Rechner – Arbeitszeit schnell berechnen",
    description:
      "Mit dem Industrie Stunden Rechner Arbeitszeiten, Schichtstunden und Pausen einfach berechnen. Entdecken Sie Tipps zur genauen Arbeitszeiterfassung.",
    url: "https://arbeitsstundenrechner.de/industrie-stunden-rechner",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrie Stunden Rechner – Arbeitszeit schnell berechnen",
    description:
      "Mit dem Industrie Stunden Rechner Arbeitszeiten, Schichtstunden und Pausen einfach berechnen. Entdecken Sie Tipps zur genauen Arbeitszeiterfassung.",
  },
};

export default function IndustrieStundenRechnerPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Industrie Stunden Rechner",
      url: "https://arbeitsstundenrechner.de/industrie-stunden-rechner",
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
        "Mit dem Industrie Stunden Rechner Arbeitszeiten, Schichtstunden und Pausen einfach berechnen. Entdecken Sie Tipps zur genauen Arbeitszeiterfassung.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: industrieStundenFaqs.map((faq) => ({
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
          <span className="font-semibold text-slate-800">Industrie Stunden Rechner</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200/60 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Kostenloser Online-Rechner</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Industrie Stunden Rechner: Arbeitsstunden einfach berechnen und kontrollieren
          </h1>

          <div className="mt-4 space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            <p>
              In industriellen Betrieben, Produktionshallen und Schichtsystemen ist eine exakte
              Arbeitszeiterfassung unverzichtbar. Mit dem <strong>Industrie Stunden Rechner</strong>{" "}
              erfassen und berechnen Sie Schichtzeiten, Pausenabzüge und Netto-Arbeitszeiten schnell
              und zuverlässig.
            </p>
            <p>
              Dank der integrierten Unterstützung für Industriestunden (100er-Teilung) und
              Nachtschichten über Mitternacht vermeiden Sie manuelle Rechenfehler und behalten den
              Überblick über Ihre täglichen und wöchentlichen Arbeitszeiten.
            </p>
          </div>
        </header>

        {/* Dedicated Calculator */}
        <section aria-label="Industrie Stunden Rechner Tool" className="relative z-10 mb-10">
          <IndustrieStundenRechner />
        </section>

        {/* Educational Content Sections */}
        <IndustrieStundenContent />

        {/* FAQ Section */}
        <div className="mt-10 sm:mt-12">
          <IndustrieStundenFaq />
        </div>
      </div>
    </main>
  );
}
