import Link from "next/link";
import { ChevronRight, ArrowLeft, Sparkles } from "lucide-react";
import StundenDezimalRechner from "@/components/calculators/StundenDezimalRechner";
import StundenDezimalContent from "@/components/StundenDezimalContent";
import StundenDezimalFaq from "@/components/StundenDezimalFaq";
import { stundenDezimalFaqs } from "@/lib/stunden-dezimal-data";

export const metadata = {
  title: "Stunden Dezimal Rechner – Stunden in Dezimalzahlen umrechnen",
  description:
    "Mit dem Stunden Dezimal Rechner Arbeitszeit einfach in Dezimalstunden umrechnen. Erfahre, wie du Minuten in Dezimalzahlen umwandelst und Arbeitsstunden berechnest.",
  alternates: {
    canonical: "/stunden-dezimal-rechner",
  },
  openGraph: {
    title: "Stunden Dezimal Rechner – Stunden in Dezimalzahlen umrechnen",
    description:
      "Mit dem Stunden Dezimal Rechner Arbeitszeit einfach in Dezimalstunden umrechnen. Erfahre, wie du Minuten in Dezimalzahlen umwandelst und Arbeitsstunden berechnest.",
    url: "https://arbeitsstundenrechner.de/stunden-dezimal-rechner",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stunden Dezimal Rechner – Stunden in Dezimalzahlen umrechnen",
    description:
      "Mit dem Stunden Dezimal Rechner Arbeitszeit einfach in Dezimalstunden umrechnen. Erfahre, wie du Minuten in Dezimalzahlen umwandelst und Arbeitsstunden berechnest.",
  },
};

export default function StundenDezimalRechnerPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Stunden Dezimal Rechner",
      url: "https://arbeitsstundenrechner.de/stunden-dezimal-rechner",
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
        "Mit dem Stunden Dezimal Rechner Arbeitszeit einfach in Dezimalstunden umrechnen. Erfahre, wie du Minuten in Dezimalzahlen umwandelst und Arbeitsstunden berechnest.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: stundenDezimalFaqs.map((faq) => ({
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
          <span className="font-semibold text-slate-800">Stunden Dezimal Rechner</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Kostenloser Online-Rechner</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Stunden Dezimal Rechner: Stunden und Minuten einfach in Dezimalzahlen umrechnen
          </h1>

          <div className="mt-4 space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            <p>
              Die Berechnung der Arbeitszeit gehört zum Alltag vieler Arbeitnehmer, Selbstständiger und
              Unternehmen. Besonders bei der Zeiterfassung, der Lohnabrechnung und der Projektplanung
              müssen Stunden und Minuten häufig in Dezimalzahlen umgerechnet werden. Genau dabei hilft
              ein <strong>Stunden Dezimal Rechner</strong>. Mit diesem praktischen Hilfsmittel kannst du
              Zeitangaben schnell und unkompliziert in Dezimalstunden umwandeln, ohne jede Berechnung
              manuell durchführen zu müssen.
            </p>
            <p>
              Während die klassische Zeitangabe aus Stunden und Minuten besteht, wird die Dezimalzeit
              als Zahl mit Nachkommastellen dargestellt. Beispielsweise entsprechen 30 Minuten genau 0,5
              Stunden. Wer diese Umrechnung regelmäßig benötigt, kann mit einem Online-Rechner Zeit
              sparen und Rechenfehler vermeiden.
            </p>
            <p>
              In diesem Artikel erfährst du, wie ein Stunden Dezimal Rechner funktioniert, wie du
              Minuten in Dezimalstunden umrechnest und warum diese Berechnung für die tägliche Arbeitszeit
              so wichtig ist.
            </p>
          </div>
        </header>

        {/* Dedicated Calculator */}
        <section aria-label="Stunden Dezimal Rechner Tool" className="relative z-10 mb-10">
          <StundenDezimalRechner />
        </section>

        {/* Educational Content Sections */}
        <StundenDezimalContent />

        {/* FAQ Section */}
        <div className="mt-10 sm:mt-12">
          <StundenDezimalFaq />
        </div>
      </div>
    </main>
  );
}
