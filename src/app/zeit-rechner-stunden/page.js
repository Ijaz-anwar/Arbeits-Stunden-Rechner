import Link from "next/link";
import { ChevronRight, ArrowLeft, Sparkles } from "lucide-react";
import ZeitRechnerStunden from "@/components/calculators/ZeitRechnerStunden";
import ZeitRechnerContent from "@/components/ZeitRechnerContent";
import ZeitRechnerFaq from "@/components/ZeitRechnerFaq";
import { zeitRechnerFaqs } from "@/lib/zeit-rechner-data";

export const metadata = {
  title: "Zeit Rechner Stunden – Stunden und Minuten einfach berechnen",
  description:
    "Mit dem Zeit Rechner Stunden und Minuten einfach berechnen. Arbeitszeiten ermitteln, Pausen abziehen und Zeitangaben in Dezimalstunden umwandeln.",
  alternates: {
    canonical: "/zeit-rechner-stunden",
  },
  openGraph: {
    title: "Zeit Rechner Stunden – Stunden und Minuten einfach berechnen",
    description:
      "Mit dem Zeit Rechner Stunden und Minuten einfach berechnen. Arbeitszeiten ermitteln, Pausen abziehen und Zeitangaben in Dezimalstunden umwandeln.",
    url: "https://arbeitsstundenrechner.de/zeit-rechner-stunden",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeit Rechner Stunden – Stunden und Minuten einfach berechnen",
    description:
      "Mit dem Zeit Rechner Stunden und Minuten einfach berechnen. Arbeitszeiten ermitteln, Pausen abziehen und Zeitangaben in Dezimalstunden umwandeln.",
  },
};

export default function ZeitRechnerStundenPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Zeit Rechner Stunden",
      url: "https://arbeitsstundenrechner.de/zeit-rechner-stunden",
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
        "Mit dem Zeit Rechner Stunden und Minuten einfach berechnen. Arbeitszeiten ermitteln, Pausen abziehen und Zeitangaben in Dezimalstunden umwandeln.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: zeitRechnerFaqs.map((faq) => ({
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
          <span className="font-semibold text-slate-800">Zeit Rechner Stunden</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Kostenloser Online-Zeitrechner</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Zeit Rechner Stunden – Stunden und Minuten einfach berechnen
          </h1>

          <div className="mt-4 space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            <p>
              Ein <strong>Zeit Rechner für Stunden</strong> ist ein praktisches Hilfsmittel, um
              Zeitangaben schnell und unkompliziert zu berechnen. Ob Arbeitsstunden, Pausenzeiten,
              die Dauer eines Termins oder die Zeit zwischen zwei Uhrzeiten – mit einem
              Online-Zeitrechner lassen sich Stunden und Minuten in wenigen Sekunden ermitteln.
              Statt komplizierte Berechnungen selbst durchzuführen, kannst du deine Zeitangaben
              eingeben und erhältst direkt das passende Ergebnis.
            </p>
            <p>
              Besonders im Berufsalltag spielt eine genaue Zeiterfassung eine wichtige Rolle.
              Arbeitnehmer möchten wissen, wie viele Stunden sie gearbeitet haben, Selbstständige
              müssen ihre Arbeitszeit für Kunden dokumentieren und Unternehmen benötigen
              verlässliche Angaben für die Personalplanung. Auch im privaten Alltag kann ein Zeit
              Rechner für Stunden hilfreich sein, beispielsweise bei der Planung von Reisen,
              Lernzeiten oder täglichen Aufgaben.
            </p>
            <p>
              In diesem Artikel erfährst du, wie ein Zeitrechner funktioniert, wie du Stunden und
              Minuten berechnest und welche Vorteile ein Online-Rechner bietet.
            </p>
          </div>
        </header>

        {/* Dedicated Calculator */}
        <section aria-label="Zeit Rechner Stunden Tool" className="relative z-10 mb-10">
          <ZeitRechnerStunden />
        </section>

        {/* Educational Content Sections */}
        <ZeitRechnerContent />

        {/* FAQ Section */}
        <div className="mt-10 sm:mt-12">
          <ZeitRechnerFaq />
        </div>
      </div>
    </main>
  );
}
