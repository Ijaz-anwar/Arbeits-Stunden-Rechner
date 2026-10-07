"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Wie berechnet der Stundenrechner meine Arbeitszeit?",
    answer:
      "Die Berechnung folgt der Grundformel: Aus der Differenz von Arbeitsbeginn und Arbeitsende ergibt sich zunächst die Bruttoarbeitszeit. Davon werden alle eingetragenen unbezahlten Pausenzeiten abgezogen. Die verbleibende Nettoarbeitszeit wird sowohl im klassischen Format (z. B. 8 Std. 30 Min.) als auch in Dezimalstunden (8,50 Std.) für Ihren Stundenzettel ausgegeben.",
  },
  {
    question: "Zählen gesetzliche Pausen als bezahlte Arbeitszeit?",
    answer:
      "Nach § 4 des deutschen Arbeitszeitgesetzes (ArbZG) sind Ruhepausen im Voraus feststehende Arbeitsunterbrechungen, in denen Beschäftigte frei über ihre Zeit verfügen können. Sie zählen grundsätzlich nicht zur vergütungspflichtigen Arbeitszeit und werden von der Bruttoarbeitszeit abgezogen, sofern kein abweichender Tarif- oder Arbeitsvertrag vorliegt.",
  },
  {
    question: "Was sind Dezimalstunden und warum braucht man sie für den Stundenzettel?",
    answer:
      "Dezimalstunden stellen die Arbeitszeit als Dezimalzahl dar (z. B. 8 Stunden und 30 Minuten = 8,50 Stunden). Da Währungen und Stundenlöhne im 100er-Dezimalsystem berechnet werden, eine Stunde aber 60 Minuten hat, ermöglichen Dezimalstunden die direkte Multiplikation mit dem Stundenlohn (z. B. 8,50 Std. × 20,00 € = 170,00 €) und werden in Lohnprogrammen wie DATEV oder SAP verlangt.",
  },
  {
    question: "Wie berechnet der Stundenrechner Schichten über Mitternacht (Nachtarbeit)?",
    answer:
      "Wenn das Arbeitsende numerisch vor dem Arbeitsbeginn liegt (z. B. Beginn um 22:00 Uhr, Ende um 06:00 Uhr am Folgetag), erkennt das Tool automatisch den Datumswechsel. Es berechnet die Stunden vor Mitternacht (24:00 − 22:00 = 2 Std.) und addiert die Stunden nach Mitternacht (00:00 bis 06:00 = 6 Std.), sodass Sie die korrekte Bruttoarbeitszeit von 8 Stunden erhalten.",
  },
  {
    question: "Kann ich mehrere Pausen an einem Arbeitstag eintragen?",
    answer:
      "Ja. Über den Button „+ Weitere Pause hinzufügen“ können Sie beliebig viele zusätzliche Pausenintervalle ergänzen (z. B. 15 Minuten Frühstückspause und 45 Minuten Mittagspause). Alle Pausenzeiten werden automatisch summiert und von der Bruttoarbeitszeit abgezogen.",
  },
  {
    question: "Wie wird die monatliche Arbeitszeit aus der Wochenarbeitszeit berechnet?",
    answer:
      "In der deutschen Lohnabrechnung gilt die bundesweite Standardformel: Wochenstunden × 52 Wochen ÷ 12 Monate = Wochenstunden × 4,3333. Bei einer regulären 40-Stunden-Woche ergeben sich dadurch exakt 173,33 Monatsstunden.",
  },
  {
    question: "Werden meine eingegebenen Arbeitszeiten auf einem Server gespeichert?",
    answer:
      "Nein. Alle Berechnungen laufen zu 100 % lokal in Ihrem Browser (Client-side JavaScript). Es werden zu keinem Zeitpunkt Arbeitszeiten, Löhne oder personenbezogene Eingaben an externe Server übertragen oder in Datenbanken gespeichert.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <section className="mt-16 sm:mt-24" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Häufig gestellte Fragen (FAQ)
          </div>
          <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold text-slate-900">
            Fragen &amp; Antworten zur Arbeitszeitberechnung
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Wissenswertes zu Pausenregelungen nach ArbZG, Dezimalstunden, Nachtschichten und Lohnabrechnung.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base leading-snug">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
