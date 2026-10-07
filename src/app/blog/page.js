import Link from "next/link";
import { getAllPosts } from "@/lib/blog-data";
import { BookOpen, Calendar, Clock, ArrowRight, Calculator } from "lucide-react";

export const metadata = {
  title: "Ratgeber & Wissen rund um Arbeitszeit, Pausen & Zeiterfassung",
  description:
    "Praxisratgeber zur Arbeitszeitberechnung nach ArbZG, gesetzlichen Ruhepausen, Dezimalstunden-Umrechnung und Nachtschichten.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Ratgeber & Wissen rund um Arbeitszeit, Pausen & Zeiterfassung – Arbeitsstundenrechner",
    description:
      "Nützliche Ratgeberartikel und Hilfestellungen zur Arbeitszeiterfassung, gesetzlichen Pausenzeiten und Lohnabrechnung.",
    url: "https://arbeitsstundenrechner.de/blog",
    type: "website",
    locale: "de_DE",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Wissen &amp; Ratgeber
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Arbeitszeit, Pausen &amp; Zeiterfassung verstehen
          </h1>
          <p className="mt-3 text-base text-slate-600">
            Praxisnahe Ratgeber, fundierte Erklärungen zu gesetzlichen Pausenregelungen nach ArbZG,
            Dezimalstunden-Tabellen und nützliche Tipps für Ihren Stundenzettel.
          </p>
        </div>

        {/* Hero Card linking back to the Calculator */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-950 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs uppercase tracking-wider font-semibold text-blue-300">
              Interaktives Tool
            </span>
            <h2 className="text-xl font-bold text-white">
              Möchten Sie Ihre Arbeitszeit jetzt direkt berechnen?
            </h2>
            <p className="text-sm text-slate-300">
              Nutzen Sie unseren kostenlosen Stundenrechner mit automatischem Pausenabzug, Nachtschichterkennung und Verdienstkalkulation.
            </p>
          </div>
          <Link
            href="/"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-colors"
          >
            <Calculator className="w-4 h-4" />
            Zum Stundenrechner
          </Link>
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readingTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="mt-3 text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800"
                >
                  Artikel lesen
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
