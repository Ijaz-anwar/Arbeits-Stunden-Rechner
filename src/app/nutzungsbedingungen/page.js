import Link from "next/link";
import {
  FileText,
  Scale,
  ShieldCheck,
  AlertCircle,
  ChevronRight,
  ArrowLeft,
  Mail,
  CheckCircle2,
  Lock,
} from "lucide-react";

export const metadata = {
  title: "Nutzungsbedingungen (Terms and Conditions)",
  description:
    "Allgemeine Nutzungsbedingungen für die kostenfreie Inanspruchnahme der Online-Tools, Zeiterfassungsrechner und Informationsangebote auf Arbeitsstundenrechner.de.",
  alternates: {
    canonical: "/nutzungsbedingungen",
  },
  openGraph: {
    title: "Nutzungsbedingungen | Arbeitsstundenrechner.de",
    description:
      "Rechtliche Rahmenbedingungen und Nutzungsregeln für die kostenlosen Online-Rechentools auf Arbeitsstundenrechner.de.",
    url: "https://arbeitsstundenrechner.de/nutzungsbedingungen",
    type: "website",
    locale: "de_DE",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NutzungsbedingungenPage() {
  return (
    <main className="py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-blue-600 transition-colors inline-flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Hauptrechner</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">Nutzungsbedingungen</span>
        </nav>

        {/* Hero Section */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-900 border border-blue-200/80 mb-3">
            <Scale className="w-3.5 h-3.5 text-blue-700" />
            Terms &amp; Conditions
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Allgemeine Nutzungsbedingungen
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
            Willkommen auf <strong>arbeitsstundenrechner.de</strong>. Die nachfolgenden
            Nutzungsbedingungen regeln das Verhältnis zwischen Ihnen als Nutzer und dem Betreiber dieser
            Webseite bei der Inanspruchnahme unserer kostenlosen Rechentools und Ratgeberartikel.
          </p>
        </div>

        {/* Highlights Box */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider mb-1">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              100 % Kostenlos
            </div>
            <p className="text-xs text-slate-600">
              Alle Rechner stehen ohne Registrierung, Abonnement oder versteckte Kosten zur Verfügung.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-1">
              <Lock className="w-4 h-4 text-emerald-600" />
              Lokale Berechnung
            </div>
            <p className="text-xs text-slate-600">
              Ihre Arbeitszeiten und Gehaltsdaten verbleiben privat in Ihrem Browser.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wider mb-1">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              Ohne Gewähr
            </div>
            <p className="text-xs text-slate-600">
              Ergebnisse dienen als unverbindliche Orientierungshilfe für Ihren Alltag.
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-10 text-slate-700 leading-relaxed text-sm sm:text-base">
          {/* Section 1: Scope */}
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 inline-flex items-center justify-center font-bold text-sm shrink-0">
                1
              </span>
              Geltungsbereich &amp; Vertragsgegenstand
            </h2>
            <p>
              (1) Diese Nutzungsbedingungen gelten für den Besuch und die Nutzung sämtlicher Angebote,
              Funktionen, Ratgeberbeiträge und Online-Rechner auf der Website{" "}
              <strong>arbeitsstundenrechner.de</strong> sowie aller zugehörigen Subdomains.
            </p>
            <p>
              (2) Mit dem Zugriff auf diese Website und der Nutzung der bereitgestellten Rechner erklären
              Sie sich mit diesen Nutzungsbedingungen in vollem Umfang einverstanden. Sollten Sie mit
              diesen Bestimmungen nicht einverstanden sein, ist die Nutzung des Angebots zu unterlassen.
            </p>
          </section>

          {/* Section 2: Services Provided */}
          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 inline-flex items-center justify-center font-bold text-sm shrink-0">
                2
              </span>
              Leistungsumfang &amp; Kostenfreiheit
            </h2>
            <p>
              (1) Der Betreiber stellt dem Nutzer eine Suite spezialisierter Online-Tools zur Berechnung
              von Arbeitszeiten, Pausenzeiten, Dezimalwerten, Industriestunden, Minijob-Grenzen und
              Gehaltsumrechnungen kostenlos zur Verfügung.
            </p>
            <p>
              (2) Ein Anspruch auf dauerhafte, störungsfreie Bereitstellung oder Aufrechterhaltung
              bestimmter Rechner-Funktionen besteht nicht. Der Betreiber behält sich vor, Teile des
              Angebots jederzeit zu modifizieren, zu erweitern oder vorübergehend oder dauerhaft
              einzustellen.
            </p>
          </section>

          {/* Section 3: User Rights & Restrictions */}
          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 inline-flex items-center justify-center font-bold text-sm shrink-0">
                3
              </span>
              Zulässige Nutzung &amp; Verbote
            </h2>
            <p>
              (1) Das Angebot darf ausschließlich im Rahmen der geltenden Gesetze sowie der guten Sitten
              genutzt werden. Die Nutzung ist sowohl für private als auch berufliche Zwecke (z. B.
              Kontrolle des eigenen Stundenzettels durch Arbeitnehmer oder Freiberufler) gestattet.
            </p>
            <p>
              (2) Ausdrücklich <strong>untersagt</strong> sind:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-xs sm:text-sm">
              <li>
                Automatisierte Massenabfragen, Web-Scraping oder Crawler-Aktivitäten, die eine
                übermäßige Belastung unserer Server oder Netzwerkinfrastruktur verursachen.
              </li>
              <li>
                Der Einsatz von Mechanismen, Software oder Skripten, die das Funktionieren der Website
                stören oder verlangsamen können (z. B. Denial-of-Service-Angriffe).
              </li>
              <li>
                Die Dekompilierung, das Reverse Engineering oder das unbefugte Kopieren unseres
                Quellcodes zur Erstellung identischer Konkurrenzangebote.
              </li>
              <li>
                Das Einbinden unserer Rechner in Frames fremder Websites (Clickjacking) ohne vorherige
                schriftliche Genehmigung.
              </li>
            </ul>
          </section>

          {/* Section 4: Privacy & Client-side Execution */}
          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 inline-flex items-center justify-center font-bold text-sm shrink-0">
                4
              </span>
              Datenschutz &amp; Vertraulichkeit der Eingaben
            </h2>
            <p>
              (1) Der Schutz Ihrer Privatsphäre hat höchste Priorität. Sämtliche Berechnungsschritte
              werden clientseitig mit modernem JavaScript direkt auf Ihrem Endgerät ausgeführt.
            </p>
            <p>
              (2) Es erfolgt keine serverseitige Speicherung Ihrer erfassten Beginnzeiten, Endzeiten,
              Pausen oder Stundensätze. Weitere Informationen entnehmen Sie bitte unserer{" "}
              <Link href="/datenschutz" className="text-blue-600 hover:underline font-semibold">
                Datenschutzerklärung
              </Link>
              .
            </p>
          </section>

          {/* Section 5: Disclaimer & Calculation Accuracy */}
          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-900 inline-flex items-center justify-center font-bold text-sm shrink-0">
                5
              </span>
              Gewährleistungsausschluss &amp; Rechengenauigkeit
            </h2>
            <p>
              (1) Die Nutzung der Rechner erfolgt auf eigenes Risiko des Nutzers. Die Website wird
              „wie besehen“ (as is) und „wie verfügbar“ bereitgestellt.
            </p>
            <p>
              (2) Der Betreiber übernimmt keine Gewähr dafür, dass die Rechenergebnisse den Anforderungen
              des Nutzers entsprechen oder im Einzelfall fehlerfrei sind. Individuelle Tarifverträge,
              branchenspezifische Sondervereinbarungen oder abweichende betriebliche Zeiterfassungsvorgaben
              können zu abweichenden Ergebnissen führen.
            </p>
            <p>
              (3) Die Ergebnisse ersetzen keine offizielle Gehaltsabrechnung, keinen Stundennachweis und
              keine rechtliche oder steuerliche Fachberatung. Weitere Details entnehmen Sie bitte unserem{" "}
              <Link href="/disclaimer" className="text-blue-600 hover:underline font-semibold">
                Disclaimer / Haftungsausschluss
              </Link>
              .
            </p>
          </section>

          {/* Section 6: Limitation of Liability */}
          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-slate-100 text-slate-800 inline-flex items-center justify-center font-bold text-sm shrink-0">
                6
              </span>
              Haftungsbeschränkung
            </h2>
            <p>
              (1) Der Betreiber haftet uneingeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei
              Verletzung des Lebens, des Körpers oder der Gesundheit.
            </p>
            <p>
              (2) Bei leichter Fahrlässigkeit haftet der Betreiber nur bei Verletzung wesentlicher
              Vertragspflichten (Kardinalpflichten), deren Erfüllung die ordnungsgemäße Durchführung des
              Vertrages überhaupt erst ermöglicht und auf deren Einhaltung der Nutzer regelmäßig vertrauen
              darf. In diesem Fall ist die Haftung auf den vorhersehbaren, vertragstypischen Schaden
              begrenzt.
            </p>
            <p>
              (3) Da das Angebot dem Nutzer vollständig unentgeltlich überlassen wird, ist die Haftung für
              einfach fahrlässig verursachte Vermögensschäden, entgangenen Gewinn oder Betriebsunterbrechungen
              im gesetzlich zulässigen Rahmen ausgeschlossen.
            </p>
          </section>

          {/* Section 7: Intellectual Property */}
          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 inline-flex items-center justify-center font-bold text-sm shrink-0">
                7
              </span>
              Urheberrechte &amp; geistiges Eigentum
            </h2>
            <p>
              Alle auf dieser Website veröffentlichten Inhalte (Design, Texte, Logos, Rechner-Architektur,
              Illustrationen und Quellcodes) sind urheberrechtlich geschützt. Die Nutzung ist dem
              Besucher nur zur persönlichen Information und Berechnung im Rahmen des bestimmungsgemäßen
              Gebrauchs gestattet. Jede anderweitige Vervielfältigung, Verbreitung oder öffentliche
              Wiedergabe bedarf der vorherigen schriftlichen Zustimmung des Betreibers.
            </p>
          </section>

          {/* Section 8: Changes to Terms */}
          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 inline-flex items-center justify-center font-bold text-sm shrink-0">
                8
              </span>
              Änderungen der Nutzungsbedingungen
            </h2>
            <p>
              Der Betreiber behält sich das Recht vor, diese Nutzungsbedingungen jederzeit mit Wirkung
              für die Zukunft anzupassen, insbesondere bei Änderungen der Gesetzeslage, höchstrichterlicher
              Rechtsprechung oder der technischen Weiterentwicklung des Portals. Für die jeweilige
              Nutzung gilt stets die zum Zeitpunkt des Seitenabrufs online abrufbare Fassung.
            </p>
          </section>

          {/* Section 9: Governing Law & Jurisdiction */}
          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 inline-flex items-center justify-center font-bold text-sm shrink-0">
                9
              </span>
              Schlussbestimmungen
            </h2>
            <p>
              (1) Auf diese Nutzungsbedingungen sowie das gesamte Rechtsverhältnis zwischen dem Nutzer und
              dem Betreiber findet ausschließlich das Recht der Bundesrepublik Deutschland Anwendung.
            </p>
            <p>
              (2) Sollten einzelne Bestimmungen dieser Nutzungsbedingungen unwirksam oder undurchführbar
              sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt
              (Salvatorische Klausel). Anstelle der unwirksamen Bestimmung gilt diejenige wirksame Regelung
              als vereinbart, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
            </p>
          </section>

          {/* Section 10: Contact */}
          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Fragen zu den Nutzungsbedingungen?
            </h2>
            <p>
              Bei Unklarheiten oder Fragen zu unseren Nutzungsbedingungen können Sie uns jederzeit
              kontaktieren:
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-600 shrink-0" />
              <div className="text-xs sm:text-sm">
                <span className="font-semibold block text-slate-900">Kontakt per E-Mail:</span>
                <a
                  href="mailto:contact@arbeitsstundenrechner.de"
                  className="text-blue-600 hover:underline font-mono"
                >
                  contact@arbeitsstundenrechner.de
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
