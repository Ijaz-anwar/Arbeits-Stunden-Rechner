import { AlertCircle, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Datenschutzerklärung",
  description:
    "Informationen zur Erhebung, Verarbeitung und zum Schutz personenbezogener Daten auf Arbeitsstundenrechner gemäß DSGVO.",
  alternates: {
    canonical: "/datenschutz",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DatenschutzPage() {
  return (
    <main className="py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
          Datenschutzerklärung
        </h1>
        <p className="text-sm text-slate-500 mb-8">
          Informationen zum Datenschutz und zur Verarbeitung Ihrer Daten gemäß DSGVO
        </p>

        {/* Hinweis zur Vorlage */}
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm mb-8 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold block">Rechtlicher Hinweis:</span>
            <span>
              Diese Datenschutzerklärung dient als strukturierte Vorlage für den Stundenrechner. Vor der
              Veröffentlichung sollten Sie die Angaben an Ihre tatsächliche Betreiberstruktur und Hosting-Umgebung anpassen.
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          {/* 1. Kernprinzip: Lokale clientseitige Berechnung */}
          <section className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200/80">
            <div className="flex items-center gap-2 mb-2 text-emerald-900 font-bold">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>Besonderer Datenschutz-Grundsatz des Stundenrechners</span>
            </div>
            <p className="text-xs sm:text-sm text-emerald-950">
              <strong>
                Sämtliche Eingaben zu Arbeitszeiten, Pausen und Stundensätzen werden ausschließlich lokal
                in Ihrem Webbrowser verarbeitet.
              </strong>{" "}
              Ihre Arbeitszeitdaten werden zu keinem Zeitpunkt an unsere Server übertragen oder bei Dritten
              gespeichert. Nach dem Neuladen oder Schließen des Browser-Tabs werden temporäre Sitzungsdaten
              vollständig verworfen.
            </p>
          </section>

          {/* 2. Verantwortliche Stelle */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              1. Name und Anschrift des Verantwortlichen
            </h2>
            <p className="text-slate-600 text-sm mb-3">
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <div className="space-y-1 bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono text-xs sm:text-sm text-slate-800">
              <p><strong>[Name des Webseitenbetreibers / Unternehmens]</strong></p>
              <p>[Vertretungsberechtigte Person / Geschäftsführer: Vor- und Nachname]</p>
              <p>[Straße und Hausnummer]</p>
              <p>[Postleitzahl, Ort, Land]</p>
              <p>E-Mail: [Ihre Kontakt-E-Mail-Adresse]</p>
            </div>
          </section>

          {/* 3. Server-Logdateien */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              2. Erfassung allgemeiner Informationen (Server-Logfiles)
            </h2>
            <p className="text-slate-600 text-sm">
              Beim Zugriff auf diese Website erfasst der Webserver des Hostinganbieters automatisch allgemeine
              Verbindungsdaten in sogenannten Server-Logdateien:
            </p>
            <ul className="list-disc pl-5 text-sm text-slate-600 mt-2 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer-URL (die zuvor besuchte Seite)</li>
              <li>Anonymisierte IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit der Serveranfrage</li>
            </ul>
            <p className="text-slate-600 text-sm mt-3">
              Diese Daten dienen ausschließlich der Gewährleistung eines reibungslosen Betriebs, der Sicherheit
              und der technischen Fehleranalyse unserer Website (Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          {/* 4. Kontaktaufnahme */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              3. Kontaktaufnahme per Formular oder E-Mail
            </h2>
            <p className="text-slate-600 text-sm">
              Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, werden Ihre angegebenen Daten
              (Name, E-Mail-Adresse sowie Ihre Nachricht) zur Bearbeitung der Anfrage und für den Fall von
              Anschlussfragen verarbeitet (Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO). Wir geben diese Daten
              niemals ohne Ihre ausdrückliche Einwilligung an Dritte weiter.
            </p>
          </section>

          {/* 5. Werbeflächen & Google AdSense */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              4. Werbeanzeigen &amp; Drittanbieterdienste (Vorbereitung)
            </h2>
            <p className="text-slate-600 text-sm">
              Auf dieser Website sind Bereiche für künftige konforme Werbeeinblendungen (z. B. Google AdSense)
              vorgesehen. Bei der etwaigen Aktivierung von Werbenetzwerken wird ein datenschutzkonformes
              Einwilligungs-Management (Consent Banner) eingesetzt, mit dem Sie Ihre Präferenzen bezüglich
              Cookies und Datenverarbeitung jederzeit transparent festlegen können (Art. 6 Abs. 1 lit. a DSGVO).
            </p>
          </section>

          {/* 6. Rechte der betroffenen Person */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              5. Ihre Rechte als betroffene Person
            </h2>
            <p className="text-slate-600 text-sm">
              Sie haben nach der DSGVO jederzeit das Recht auf Auskunft über Ihre gespeicherten personenbezogenen
              Daten (Art. 15 DSGVO), Berichtigung unrichtiger Daten (Art. 16 DSGVO), Löschung (Art. 17 DSGVO),
              Einschränkung der Verarbeitung (Art. 18 DSGVO) sowie das Recht auf Datenübertragbarkeit (Art. 20 DSGVO).
              Zudem steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu (Art. 77 DSGVO).
            </p>
          </section>

          {/* 7. SSL / TLS-Verschlüsselung */}
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              6. SSL- bzw. TLS-Verschlüsselung
            </h2>
            <p className="text-slate-600 text-sm">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine
              aktuelle SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die
              Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer
              Browserzeile.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
