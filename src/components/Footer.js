import Link from "next/link";
import { Clock, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group inline-flex">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                Stundenrechner
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Ihr zuverlässiger, kostenloser Online-Stundenrechner für die präzise Berechnung von Arbeitszeiten,
              gesetzlichen Pausen nach § 4 ArbZG, Dezimalstunden für Stundenzettel und Bruttolohn.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100 % lokaler Datenschutz – Berechnungen erfolgen direkt im Browser ohne Server-Speicherung.</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Stundenrechner
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Ratgeber &amp; Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Kontakt &amp; Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Rechtliches
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/impressum"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Datenschutzerklärung
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer and Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; {currentYear} Arbeitsstundenrechner.de. Alle Rechte vorbehalten. | Auto Deployment Active
          </p>
          <p className="text-slate-400 text-center sm:text-right">
            Hinweis: Alle Berechnungen erfolgen ohne Gewähr und ersetzen keine Rechts- oder Lohnberatung.
          </p>
        </div>
      </div>
    </footer>
  );
}
