import Link from "next/link";
import { ChevronRight, ArrowLeft, Sparkles } from "lucide-react";
import BruttoNettoRechnerStunden from "@/components/calculators/BruttoNettoRechnerStunden";
import BruttoNettoContent from "@/components/BruttoNettoContent";
import BruttoNettoFaq from "@/components/BruttoNettoFaq";
import { bruttoNettoFaqs } from "@/lib/brutto-netto-rechner-data";

export const metadata = {
  title: "Brutto Netto Rechner Stunden – Stundenlohn und Nettogehalt berechnen",
  description:
    "Mit dem Brutto Netto Rechner Stunden berechnen Sie Ihren Stundenlohn, Ihr monatliches Nettogehalt und den Unterschied zwischen Brutto und Netto einfach und schnell.",
  alternates: {
    canonical: "/brutto-netto-rechner-stunden",
  },
  openGraph: {
    title: "Brutto Netto Rechner Stunden – Stundenlohn und Nettogehalt berechnen",
    description:
      "Mit dem Brutto Netto Rechner Stunden berechnen Sie Ihren Stundenlohn, Ihr monatliches Nettogehalt und den Unterschied zwischen Brutto und Netto einfach und schnell.",
    url: "https://arbeitsstundenrechner.de/brutto-netto-rechner-stunden",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brutto Netto Rechner Stunden – Stundenlohn und Nettogehalt berechnen",
    description:
      "Mit dem Brutto Netto Rechner Stunden berechnen Sie Ihren Stundenlohn, Ihr monatliches Nettogehalt und den Unterschied zwischen Brutto und Netto einfach und schnell.",
  },
};

export default function BruttoNettoRechnerStundenPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Brutto Netto Rechner Stunden",
      url: "https://arbeitsstundenrechner.de/brutto-netto-rechner-stunden",
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
        "Mit dem Brutto Netto Rechner Stunden berechnen Sie Ihren Stundenlohn, Ihr monatliches Nettogehalt und den Unterschied zwischen Brutto und Netto einfach und schnell.",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: bruttoNettoFaqs.map((faq) => ({
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
          <span className="font-semibold text-slate-800">Brutto Netto Rechner Stunden</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/60 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Kostenloser Online-Rechner</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Brutto Netto Rechner Stunden: Stundenlohn berechnen und Nettogehalt ermitteln
          </h1>

          <div className="mt-4 space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            <p>
              Ein Brutto Netto Rechner für Stunden hilft Ihnen dabei, Ihren Verdienst auf
              Stundenbasis besser zu verstehen. Wenn Sie wissen möchten, wie viel Sie pro
              Arbeitsstunde verdienen und welcher Betrag nach Steuern und Sozialversicherungsbeiträgen
              übrig bleibt, ist ein solcher Rechner eine praktische Unterstützung. Besonders
              Arbeitnehmer, Teilzeitbeschäftigte, Minijobber und Personen mit wechselnden Arbeitszeiten
              können davon profitieren.
            </p>
            <p>
              In Deutschland wird zwischen Bruttolohn und Nettolohn unterschieden. Der Bruttolohn ist
              der vereinbarte Verdienst vor den gesetzlichen Abzügen. Der Nettolohn ist dagegen der
              Betrag, der nach den entsprechenden Abzügen tatsächlich ausgezahlt wird. Deshalb kann
              der Unterschied zwischen dem Stundenlohn im Arbeitsvertrag und dem tatsächlichen
              Verdienst auf dem Bankkonto erheblich sein.
            </p>
            <p>
              Mit einem <strong>Brutto Netto Rechner Stunden</strong> können Sie Ihren Stundenlohn,
              Ihre monatliche Arbeitszeit und Ihren voraussichtlichen Nettolohn besser einschätzen.
              Dafür benötigen Sie in der Regel Angaben zu Ihrem Bruttolohn, Ihrer Arbeitszeit und den
              persönlichen Voraussetzungen für die Berechnung. Ein solcher Rechner eignet sich
              außerdem, wenn Sie ein Jobangebot vergleichen, eine Gehaltserhöhung bewerten oder Ihre
              monatlichen Einnahmen planen möchten.
            </p>
          </div>
        </header>

        {/* Dedicated Calculator */}
        <section aria-label="Brutto Netto Rechner Stunden Tool" className="relative z-10 mb-10">
          <BruttoNettoRechnerStunden />
        </section>

        {/* Educational Content Sections */}
        <BruttoNettoContent />

        {/* FAQ Section */}
        <div className="mt-10 sm:mt-12">
          <BruttoNettoFaq />
        </div>
      </div>
    </main>
  );
}
