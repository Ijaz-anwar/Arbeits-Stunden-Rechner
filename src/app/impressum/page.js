import { AlertCircle } from "lucide-react";

export const metadata = {
  title: "Impressum",
  description: "Gesetzliche Anbieterkennzeichnung und rechtliche Hinweise gemäß § 5 Digitale-Dienste-Gesetz (DDG).",
  alternates: {
    canonical: "/impressum",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ImpressumPage() {
  return (
    <main className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Impressum
        </h1>
        <p className="text-sm text-slate-500 mb-8">
          Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
        </p>

        {/* Hinweis zur Vorlage */}
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm mb-8 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold block">Rechtlicher Hinweis:</span>
            <span>
              Dieses Impressum dient als strukturierte Vorlage für die Bereitstellung des Stundenrechners.
              Vor dem produktiven Einsatz sollten die in eckigen Klammern gesetzten Platzhalter durch Ihre
              tatsächlichen Betreiberdaten ersetzt werden.
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          {/* Diensteanbieter */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              1. Diensteanbieter / Webseitenbetreiber
            </h2>
            <div className="space-y-1 bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono text-xs sm:text-sm text-slate-800">
              <p><strong>[Name des Webseitenbetreibers / Unternehmens]</strong></p>
              <p>[Rechtsform, z. B. Einzelunternehmen, GbR, GmbH]</p>
              <p>[Vertretungsberechtigter / Geschäftsführer: Vor- und Nachname]</p>
              <p>[Straße und Hausnummer]</p>
              <p>[Postleitzahl und Ort]</p>
              <p>[Land: Deutschland]</p>
            </div>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              2. Kontaktmöglichkeiten
            </h2>
            <div className="space-y-1 bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono text-xs sm:text-sm text-slate-800">
              <p>E-Mail: [Ihre Kontakt-E-Mail-Adresse, z. B. kontakt@ihre-domain.de]</p>
              <p>Telefon: [Ihre Telefonnummer, z. B. +49 (0) 123 456789]</p>
              <p>Webseite: https://arbeitsstundenrechner.de</p>
            </div>
          </section>

          {/* Registereintrag */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              3. Registereintrag (falls zutreffend)
            </h2>
            <p className="text-slate-600 text-sm">
              Eintragung im Handelsregister (falls eingetragen):<br />
              Registergericht: [z. B. Amtsgericht Musterstadt]<br />
              Registernummer: [z. B. HRB 123456]
            </p>
          </section>

          {/* Umsatzsteuer-ID */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              4. Umsatzsteuer-Identifikationsnummer
            </h2>
            <p className="text-slate-600 text-sm">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              <span className="font-mono text-slate-800">[z. B. DE 123456789 oder Entfällt bei Kleinunternehmerregelung nach § 19 UStG]</span>
            </p>
          </section>

          {/* Verantwortlich für den Inhalt */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              5. Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono text-xs sm:text-sm text-slate-800">
              <p>[Vorname, Nachname]</p>
              <p>[Straße und Hausnummer]</p>
              <p>[Postleitzahl, Ort, Land]</p>
            </div>
          </section>

          {/* Haftung für Inhalte */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              6. Haftung für Inhalte
            </h2>
            <p className="text-slate-600 text-sm">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
              zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          {/* Haftung für Links */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              7. Haftung für externe Links
            </h2>
            <p className="text-slate-600 text-sm">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
              haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
              der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          {/* Urheberrecht */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              8. Urheberrecht
            </h2>
            <p className="text-slate-600 text-sm">
              Die durch die Seitenbetreiber erstellten Inhalte, Rechentools und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
              außerhalb der Grenzen des Urheberrechtes bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen
              Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
