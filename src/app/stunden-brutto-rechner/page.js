import Link from "next/link";
import { ChevronRight, ArrowLeft, Sparkles } from "lucide-react";
import StundenBruttoRechner from "@/components/calculators/StundenBruttoRechner";
import StundenBruttoContent from "@/components/StundenBruttoContent";
import StundenBruttoFaq from "@/components/StundenBruttoFaq";
import { stundenBruttoFaqs } from "@/lib/stunden-brutto-data";

export const metadata = {
  title: "Stunden Brutto Rechner – Bruttostundenlohn berechnen",
  description:
    "Mit dem Stunden Brutto Rechner berechnen Sie Ihren Bruttostundenlohn schnell und einfach. Erfahren Sie, wie Sie Monatsgehalt, Arbeitszeit und Stundenlohn richtig umrechnen.",
  alternates: {
    canonical: "/stunden-brutto-rechner",
  },
  openGraph: {
    title: "Stunden Brutto Rechner – Bruttostundenlohn berechnen",
    description:
      "Mit dem Stunden Brutto Rechner berechnen Sie Ihren Bruttostundenlohn schnell und einfach. Erfahren Sie, wie Sie Monatsgehalt, Arbeitszeit und Stundenlohn richtig umrechnen.",
    url: "https://arbeitsstundenrechner.de/stunden-brutto-rechner",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stunden Brutto Rechner – Bruttostundenlohn berechnen",
    description:
      "Mit dem Stunden Brutto Rechner berechnen Sie Ihren Bruttostundenlohn schnell und einfach. Erfahren Sie, wie Sie Monatsgehalt, Arbeitszeit und Stundenlohn richtig umrechnen.",
  },
};

export default function StundenBruttoRechnerPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Stunden Brutto Rechner",
      url: "https://arbeitsstundenrechner.de/stunden-brutto-rechner",
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
        "Mit dem Stunden Brutto Rechner berechnen Sie Ihren Bruttostundenlohn schnell und einfach. Erfahren Sie, wie Sie Monatsgehalt, Arbeitszeit und Stundenlohn richtig umrechnen.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: stundenBruttoFaqs.map((faq) => ({
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
          <span className="font-semibold text-slate-800">Stunden Brutto Rechner</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200/60 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Kostenloser Online-Rechner</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Stunden Brutto Rechner: So berechnen Sie Ihren Bruttostundenlohn
          </h1>

          <div className="mt-4 space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            <p>
              Wer wissen möchte, wie viel er pro Arbeitsstunde verdient, kann einen Stunden Brutto
              Rechner verwenden. Dieses praktische Hilfsmittel ermöglicht es Arbeitnehmern,
              Arbeitgebern, Minijobbern und Selbstständigen, den Bruttostundenlohn auf Grundlage des
              Gehalts und der geleisteten Arbeitszeit zu berechnen. Besonders in Deutschland ist die
              Berechnung des Stundenlohns wichtig, um Gehaltsangebote zu vergleichen, die eigene
              Arbeitszeit zu planen und den Wert der geleisteten Arbeit besser einzuschätzen.
            </p>
            <p>
              Viele Beschäftigte erhalten ein festes Monatsgehalt. Andere werden nach Stunden bezahlt
              oder arbeiten in Teilzeit, im Minijob oder auf Grundlage eines befristeten
              Arbeitsvertrags. Deshalb ist es nicht immer einfach, unterschiedliche Gehaltsmodelle
              miteinander zu vergleichen. Ein Stunden Brutto Rechner hilft dabei, das monatliche
              Bruttogehalt in einen verständlichen Stundenlohn umzurechnen.
            </p>
            <p>
              In diesem Artikel erfahren Sie, wie Sie Ihren Bruttostundenlohn berechnen, welche Formel
              dafür benötigt wird und worin sich Brutto- und Nettostundenlohn unterscheiden. Außerdem
              erhalten Sie praktische Rechenbeispiele und hilfreiche Informationen für den deutschen
              Arbeitsmarkt.
            </p>
          </div>
        </header>

        {/* Dedicated Calculator */}
        <section aria-label="Stunden Brutto Rechner Tool" className="relative z-10 mb-10">
          <StundenBruttoRechner />
        </section>

        {/* Educational Content Sections */}
        <StundenBruttoContent />

        {/* FAQ Section */}
        <div className="mt-10 sm:mt-12">
          <StundenBruttoFaq />
        </div>
      </div>
    </main>
  );
}
