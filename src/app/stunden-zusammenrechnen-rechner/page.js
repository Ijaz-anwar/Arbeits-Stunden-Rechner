import Link from "next/link";
import { ChevronRight, ArrowLeft, Sparkles } from "lucide-react";
import StundenZusammenrechnenRechner from "@/components/calculators/StundenZusammenrechnenRechner";
import StundenZusammenrechnenContent from "@/components/StundenZusammenrechnenContent";
import StundenZusammenrechnenFaq from "@/components/StundenZusammenrechnenFaq";
import { stundenZusammenrechnenFaqs } from "@/lib/stunden-zusammenrechnen-data";

export const metadata = {
  title: "Stunden Zusammenrechnen Rechner – Arbeitszeit online addieren",
  description:
    "Mit unserem Stunden Zusammenrechnen Rechner können Sie Arbeitsstunden, Minuten und Zeitspannen einfach addieren. Jetzt Arbeitszeit kostenlos online berechnen!",
  alternates: {
    canonical: "/stunden-zusammenrechnen-rechner",
  },
  openGraph: {
    title: "Stunden Zusammenrechnen Rechner – Arbeitszeit online addieren",
    description:
      "Mit unserem Stunden Zusammenrechnen Rechner können Sie Arbeitsstunden, Minuten und Zeitspannen einfach addieren. Jetzt Arbeitszeit kostenlos online berechnen!",
    url: "https://arbeitsstundenrechner.de/stunden-zusammenrechnen-rechner",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stunden Zusammenrechnen Rechner – Arbeitszeit online addieren",
    description:
      "Mit unserem Stunden Zusammenrechnen Rechner können Sie Arbeitsstunden, Minuten und Zeitspannen einfach addieren. Jetzt Arbeitszeit kostenlos online berechnen!",
  },
};

export default function StundenZusammenrechnenRechnerPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Stunden Zusammenrechnen Rechner",
      url: "https://arbeitsstundenrechner.de/stunden-zusammenrechnen-rechner",
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
        "Mit unserem Stunden Zusammenrechnen Rechner können Sie Arbeitsstunden, Minuten und Zeitspannen einfach addieren. Jetzt Arbeitszeit kostenlos online berechnen!",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: stundenZusammenrechnenFaqs.map((faq) => ({
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
          <span className="font-semibold text-slate-800">Stunden Zusammenrechnen Rechner</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Kostenloser Online-Rechner</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Stunden Zusammenrechnen Rechner: Arbeitsstunden einfach und schnell addieren
          </h1>

          <div className="mt-4 space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            <p>
              Wer regelmäßig arbeitet, kennt das Problem: Mehrere Zeitspannen müssen addiert werden,
              um die gesamte Arbeitszeit eines Tages, einer Woche oder eines Monats zu ermitteln.
              Besonders bei unterschiedlichen Stunden- und Minutenangaben kann die Berechnung schnell
              unübersichtlich werden. Ein <strong>Stunden Zusammenrechnen Rechner</strong> hilft
              Ihnen dabei, einzelne Zeitwerte unkompliziert zu addieren und die gesamte Dauer
              zuverlässig zu ermitteln.
            </p>
            <p>
              Mit einem Online-Rechner können Sie beispielsweise 7 Stunden und 35 Minuten mit
              weiteren Arbeitszeiten kombinieren, Pausenzeiten bei Bedarf berücksichtigen und das
              Ergebnis übersichtlich darstellen lassen. Sie müssen keine komplizierten Formeln anwenden
              oder jede Minute manuell umrechnen.
            </p>
            <p>
              Auf arbeitsstundenrechner.de finden Sie hilfreiche Informationen rund um Arbeitszeit,
              Stundenberechnung und den Umgang mit Zeitangaben. Ob Sie Ihre tägliche Arbeitszeit
              kontrollieren, Wochenstunden ermitteln oder mehrere Zeitspannen zusammenzählen möchten:
              Mit der richtigen Berechnung behalten Sie Ihre Zeit zuverlässig im Blick.
            </p>
          </div>
        </header>

        {/* Dedicated Calculator */}
        <section aria-label="Stunden Zusammenrechnen Rechner Tool" className="relative z-10 mb-10">
          <StundenZusammenrechnenRechner />
        </section>

        {/* Educational Content Sections */}
        <StundenZusammenrechnenContent />

        {/* FAQ Section */}
        <div className="mt-10 sm:mt-12">
          <StundenZusammenrechnenFaq />
        </div>
      </div>
    </main>
  );
}
