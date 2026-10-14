import Link from "next/link";
import { ChevronRight, ArrowLeft, Sparkles } from "lucide-react";
import StundenReduzierenRechner from "@/components/calculators/StundenReduzierenRechner";
import StundenReduzierenContent from "@/components/StundenReduzierenContent";
import StundenReduzierenFaq from "@/components/StundenReduzierenFaq";
import { stundenReduzierenFaqs } from "@/lib/stunden-reduzieren-data";

export const metadata = {
  title: "Stunden Reduzieren Rechner – Arbeitszeit schnell berechnen",
  description:
    "Mit dem Stunden Reduzieren Rechner Arbeitszeit einfach reduzieren, Wochenstunden vergleichen und die neue Arbeitszeit berechnen. Jetzt kostenlos ausprobieren!",
  alternates: {
    canonical: "/stunden-reduzieren-rechner",
  },
  openGraph: {
    title: "Stunden Reduzieren Rechner – Arbeitszeit schnell berechnen",
    description:
      "Mit dem Stunden Reduzieren Rechner Arbeitszeit einfach reduzieren, Wochenstunden vergleichen und die neue Arbeitszeit berechnen. Jetzt kostenlos ausprobieren!",
    url: "https://arbeitsstundenrechner.de/stunden-reduzieren-rechner",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stunden Reduzieren Rechner – Arbeitszeit schnell berechnen",
    description:
      "Mit dem Stunden Reduzieren Rechner Arbeitszeit einfach reduzieren, Wochenstunden vergleichen und die neue Arbeitszeit berechnen. Jetzt kostenlos ausprobieren!",
  },
};

export default function StundenReduzierenRechnerPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Stunden Reduzieren Rechner",
      url: "https://arbeitsstundenrechner.de/stunden-reduzieren-rechner",
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
        "Mit dem Stunden Reduzieren Rechner Arbeitszeit einfach reduzieren, Wochenstunden vergleichen und die neue Arbeitszeit berechnen. Jetzt kostenlos ausprobieren!",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: stundenReduzierenFaqs.map((faq) => ({
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
          <span className="font-semibold text-slate-800">Stunden Reduzieren Rechner</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200/60 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>Kostenloser Online-Rechner</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Stunden Reduzieren Rechner: Arbeitszeit einfach berechnen und vergleichen
          </h1>

          <div className="mt-4 space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            <p>
              Die Arbeitszeit zu reduzieren, ist für viele Arbeitnehmer in Deutschland ein wichtiges
              Thema. Ob aus familiären Gründen, wegen einer Weiterbildung, zur besseren
              Work-Life-Balance oder aufgrund einer neuen beruflichen Situation – eine Verringerung
              der wöchentlichen Arbeitsstunden kann den Alltag deutlich verändern. Mit einem Stunden
              Reduzieren Rechner lässt sich schnell ermitteln, wie viele Stunden nach einer
              Arbeitszeitreduzierung übrig bleiben und wie groß die Differenz zur bisherigen
              Arbeitszeit ist.
            </p>
            <p>
              Statt die Stunden mühsam selbst auszurechnen, können Sie einen digitalen Rechner
              verwenden, um Ihre bisherige Arbeitszeit mit der gewünschten neuen Arbeitszeit zu
              vergleichen. So erkennen Sie auf einen Blick, wie viele Stunden Sie künftig weniger
              arbeiten und wie hoch die prozentuale Reduzierung ausfällt.
            </p>
            <p>
              Auf dieser Seite erfahren Sie, wie ein Stunden Reduzieren Rechner funktioniert, welche
              Berechnungen möglich sind und worauf Sie bei der Anpassung Ihrer Arbeitszeit achten
              sollten.
            </p>
          </div>
        </header>

        {/* Dedicated Calculator */}
        <section aria-label="Stunden Reduzieren Rechner Tool" className="relative z-10 mb-10">
          <StundenReduzierenRechner />
        </section>

        {/* Educational Content Sections */}
        <StundenReduzierenContent />

        {/* FAQ Section */}
        <div className="mt-10 sm:mt-12">
          <StundenReduzierenFaq />
        </div>
      </div>
    </main>
  );
}
