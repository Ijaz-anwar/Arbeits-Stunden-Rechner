import Link from "next/link";
import { ChevronRight, ArrowLeft, Sparkles } from "lucide-react";
import MinutenStundenCalculator from "@/components/calculators/MinutenStundenCalculator";
import MinutenStundenContent from "@/components/MinutenStundenContent";
import MinutenStundenFaq from "@/components/MinutenStundenFaq";
import { minutenStundenFaqs } from "@/lib/minuten-stunden-data";

export const metadata = {
  title: "Minuten Stunden Rechner – Minuten in Stunden umwandeln",
  description:
    "Nutzen Sie unseren Minuten Stunden Rechner, um Minuten schnell in Stunden umzurechnen. Erfahren Sie mehr über Formeln, Beispiele und die Berechnung von Arbeitszeiten.",
  alternates: {
    canonical: "/minuten-stunden-rechner",
  },
  openGraph: {
    title: "Minuten Stunden Rechner – Minuten in Stunden umwandeln",
    description:
      "Nutzen Sie unseren Minuten Stunden Rechner, um Minuten schnell in Stunden umzurechnen. Erfahren Sie mehr über Formeln, Beispiele und die Berechnung von Arbeitszeiten.",
    url: "https://arbeitsstundenrechner.de/minuten-stunden-rechner",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minuten Stunden Rechner – Minuten in Stunden umwandeln",
    description:
      "Nutzen Sie unseren Minuten Stunden Rechner, um Minuten schnell in Stunden umzurechnen. Erfahren Sie mehr über Formeln, Beispiele und die Berechnung von Arbeitszeiten.",
  },
};

export default function MinutenStundenRechnerPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Minuten Stunden Rechner",
      url: "https://arbeitsstundenrechner.de/minuten-stunden-rechner",
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
        "Nutzen Sie unseren Minuten Stunden Rechner, um Minuten schnell in Stunden umzurechnen. Erfahren Sie mehr über Formeln, Beispiele und die Berechnung von Arbeitszeiten.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: minutenStundenFaqs.map((faq) => ({
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
          <span className="font-semibold text-slate-800">Minuten Stunden Rechner</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200/60 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Kostenloser Online-Rechner</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Minuten Stunden Rechner: Zeit schnell und einfach umrechnen
          </h1>

          <div className="mt-4 space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            <p>
              Ein Minuten Stunden Rechner ist ein praktisches Hilfsmittel, wenn Sie Minuten in
              Stunden umwandeln oder verschiedene Zeitangaben miteinander vergleichen möchten. Ob im
              Beruf, in der Schule, bei der Planung von Terminen oder bei der Berechnung Ihrer
              täglichen Arbeitszeit – eine zuverlässige Umrechnung spart Zeit und verhindert
              Rechenfehler.
            </p>
            <p>
              Auf <strong>arbeitsstundenrechner.de</strong> können Sie Zeitangaben besser verstehen
              und Ihre Arbeitsstunden übersichtlich berechnen. Besonders dann, wenn Sie mehrere
              Zeitabschnitte addieren oder Arbeitszeiten für eine Abrechnung dokumentieren müssen, ist
              die Umrechnung von Minuten in Stunden hilfreich.
            </p>
            <p>
              Die Berechnung selbst ist unkompliziert: Eine Stunde besteht aus 60 Minuten. Deshalb
              müssen Sie die Anzahl der Minuten durch 60 teilen, um den entsprechenden Stundenwert zu
              erhalten. Beispielsweise entsprechen 120 Minuten genau zwei Stunden, während 90 Minuten
              eine Stunde und 30 Minuten ergeben.
            </p>
            <p>
              In diesem Ratgeber erfahren Sie, wie ein Minuten Stunden Rechner funktioniert, welche
              Formel Sie verwenden können und wie Sie unterschiedliche Zeitangaben im Alltag richtig
              umrechnen.
            </p>
          </div>
        </header>

        {/* Dedicated Calculator */}
        <section aria-label="Minuten Stunden Rechner Tool" className="relative z-10 mb-10">
          <MinutenStundenCalculator />
        </section>

        {/* Educational Content Sections */}
        <MinutenStundenContent />

        {/* FAQ Section */}
        <div className="mt-10 sm:mt-12">
          <MinutenStundenFaq />
        </div>
      </div>
    </main>
  );
}
