import Link from "next/link";
import { ChevronRight, ArrowLeft, Sparkles } from "lucide-react";
import MinijobRechnerStunden from "@/components/calculators/MinijobRechnerStunden";
import MinijobRechnerContent from "@/components/MinijobRechnerContent";
import MinijobRechnerFaq from "@/components/MinijobRechnerFaq";
import { minijobRechnerFaqs } from "@/lib/minijob-rechner-data";

export const metadata = {
  title: "Minijob Rechner Stunden – Arbeitszeit und Verdienst berechnen",
  description:
    "Mit dem Minijob Rechner Stunden und Arbeitszeit einfach berechnen. Erfahre, wie viele Stunden du arbeiten darfst und wie du deinen Minijob planst.",
  alternates: {
    canonical: "/minijob-rechner-stunden",
  },
  openGraph: {
    title: "Minijob Rechner Stunden – Arbeitszeit und Verdienst berechnen",
    description:
      "Mit dem Minijob Rechner Stunden und Arbeitszeit einfach berechnen. Erfahre, wie viele Stunden du arbeiten darfst und wie du deinen Minijob planst.",
    url: "https://arbeitsstundenrechner.de/minijob-rechner-stunden",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minijob Rechner Stunden – Arbeitszeit und Verdienst berechnen",
    description:
      "Mit dem Minijob Rechner Stunden und Arbeitszeit einfach berechnen. Erfahre, wie viele Stunden du arbeiten darfst und wie du deinen Minijob planst.",
  },
};

export default function MinijobRechnerStundenPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Minijob Rechner Stunden",
      url: "https://arbeitsstundenrechner.de/minijob-rechner-stunden",
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
        "Mit dem Minijob Rechner Stunden und Arbeitszeit einfach berechnen. Erfahre, wie viele Stunden du arbeiten darfst und wie du deinen Minijob planst.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: minijobRechnerFaqs.map((faq) => ({
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
          <span className="font-semibold text-slate-800">Minijob Rechner Stunden</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/60 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Kostenloser Online-Rechner</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Minijob Rechner Stunden: Arbeitszeit einfach berechnen und den Verdienst planen
          </h1>

          <div className="mt-4 space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            <p>
              Ein Minijob Rechner für Stunden ist ein praktisches Hilfsmittel, mit dem Arbeitnehmer
              ihre Arbeitszeit planen und die monatlich geleisteten Stunden übersichtlich berechnen
              können. Besonders für Beschäftigte in Deutschland ist es wichtig, die Arbeitsstunden
              und den Verdienst im Blick zu behalten. Ob du in einem Supermarkt, in einem Restaurant,
              im Büro oder als Aushilfe arbeitest – eine genaue Berechnung hilft dir dabei, deine
              Arbeitszeit besser zu organisieren.
            </p>
            <p>
              Mit einem Minijob Rechner Stunden zu berechnen, ist besonders sinnvoll, wenn du einen
              festen Stundenlohn erhältst und wissen möchtest, wie viele Stunden du innerhalb eines
              Monats arbeiten kannst. Du kannst beispielsweise deinen Stundenlohn eingeben, die
              gewünschte monatliche Arbeitszeit festlegen und deinen voraussichtlichen Verdienst
              ermitteln.
            </p>
            <p>
              Ein solcher Rechner eignet sich sowohl für Personen, die bereits einen Minijob haben,
              als auch für Menschen, die eine geringfügige Beschäftigung beginnen möchten. Er
              unterstützt dich bei der Planung deiner Schichten und hilft dir, deine Arbeitszeit mit
              anderen Verpflichtungen wie Studium, Schule, Familie oder einer Hauptbeschäftigung
              abzustimmen.
            </p>
          </div>
        </header>

        {/* Dedicated Calculator */}
        <section aria-label="Minijob Rechner Stunden Tool" className="relative z-10 mb-10">
          <MinijobRechnerStunden />
        </section>

        {/* Educational Content Sections */}
        <MinijobRechnerContent />

        {/* FAQ Section */}
        <div className="mt-10 sm:mt-12">
          <MinijobRechnerFaq />
        </div>
      </div>
    </main>
  );
}
