import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog-data";
import { ArrowLeft, Calendar, Clock, Calculator, ArrowRight, UserCheck } from "lucide-react";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return {
      title: "Artikel nicht gefunden",
    };
  }

  const canonicalUrl = `https://arbeitsstundenrechner.de/blog/${post.slug}`;

  return {
    title: post.seoTitle || `${post.title} – Arbeitsstundenrechner`,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: canonicalUrl,
      type: "article",
      locale: "de_DE",
      publishedTime: "2026-02-15T08:00:00.000Z",
      authors: [post.author || "Redaktionsteam"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle || post.title,
      description: post.metaDescription || post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    url: `https://arbeitsstundenrechner.de/blog/${post.slug}`,
    inLanguage: "de-DE",
    datePublished: "2026-02-15T08:00:00+01:00",
    dateModified: "2026-02-22T10:00:00+01:00",
    author: {
      "@type": "Organization",
      name: post.author || "Redaktionsteam",
      url: "https://arbeitsstundenrechner.de",
    },
    publisher: {
      "@type": "Organization",
      name: "Arbeitsstundenrechner",
      url: "https://arbeitsstundenrechner.de",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://arbeitsstundenrechner.de/blog/${post.slug}`,
    },
  };

  return (
    <main className="py-10 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Back Link */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Übersicht
          </Link>
        </nav>

        {/* Article Header */}
        <header className="mb-10 pb-8 border-b border-slate-200">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-3">
            <span className="font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <UserCheck className="w-3.5 h-3.5 text-slate-400" />
              {post.author}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-lg text-slate-600 leading-relaxed font-normal">
            {post.excerpt}
          </p>
        </header>

        {/* Article Body */}
        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-6">
          {post.content.split("\n\n").map((paragraph, idx) => {
            const trimmed = paragraph.trim();

            if (trimmed === "---") {
              return <hr key={idx} className="my-8 border-slate-200" />;
            }

            if (trimmed.startsWith("### ")) {
              return (
                <h2 key={idx} className="text-xl sm:text-2xl font-bold text-slate-900 mt-8 mb-3">
                  {trimmed.replace("### ", "")}
                </h2>
              );
            }

            if (trimmed.startsWith("## ")) {
              return (
                <h2 key={idx} className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                  {trimmed.replace("## ", "")}
                </h2>
              );
            }

            if (trimmed.startsWith("> ")) {
              return (
                <blockquote
                  key={idx}
                  className="p-4 my-4 rounded-xl bg-blue-50/70 border-l-4 border-blue-600 text-sm text-blue-950"
                >
                  {trimmed.replace("> ", "").replace(/\*\*/g, "")}
                </blockquote>
              );
            }

            if (trimmed.startsWith("|")) {
              const rows = trimmed.split("\n");
              const headers = rows[0]
                .split("|")
                .map((c) => c.trim())
                .filter(Boolean);
              const dataRows = rows.slice(2).map((r) =>
                r
                  .split("|")
                  .map((c) => c.trim())
                  .filter(Boolean)
              );

              return (
                <div key={idx} className="overflow-x-auto my-6 border border-slate-200 rounded-xl shadow-xs">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                      <tr>
                        {headers.map((h, hIdx) => (
                          <th key={hIdx} className="px-4 py-2.5">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {dataRows.map((r, rIdx) => (
                        <tr key={rIdx} className={rIdx % 2 === 1 ? "bg-slate-50/50" : ""}>
                          {r.map((c, cIdx) => (
                            <td key={cIdx} className="px-4 py-2">
                              {c.replace(/\*\*/g, "")}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }

            if (trimmed.startsWith("- ")) {
              const items = trimmed.split("\n").filter((l) => l.startsWith("- "));
              return (
                <ul key={idx} className="list-disc pl-5 space-y-2 text-slate-700">
                  {items.map((item, iIdx) => (
                    <li key={iIdx}>{item.replace("- ", "").replace(/\*\*/g, "")}</li>
                  ))}
                </ul>
              );
            }

            if (trimmed.startsWith("1. ")) {
              const items = trimmed.split("\n").filter((l) => /^\d+\.\s/.test(l));
              return (
                <ol key={idx} className="list-decimal pl-5 space-y-2 text-slate-700">
                  {items.map((item, iIdx) => (
                    <li key={iIdx}>{item.replace(/^\d+\.\s/, "").replace(/\*\*/g, "")}</li>
                  ))}
                </ol>
              );
            }

            // Regular paragraph, checking for markdown links like [Hours Calculator](/)
            if (trimmed.includes("[") && trimmed.includes("](")) {
              const linkMatch = trimmed.match(/\[(.*?)\]\((.*?)\)/);
              if (linkMatch) {
                const [fullMatch, text, href] = linkMatch;
                const parts = trimmed.split(fullMatch);
                return (
                  <p key={idx} className="text-base text-slate-700 leading-relaxed">
                    {parts[0]}
                    <Link href={href} className="text-blue-600 font-semibold hover:underline">
                      {text}
                    </Link>
                    {parts[1]}
                  </p>
                );
              }
            }

            return (
              <p key={idx} className="text-base text-slate-700 leading-relaxed">
                {trimmed.replace(/\*\*/g, "")}
              </p>
            );
          })}
        </div>

        {/* CTA to Calculator */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-900 to-slate-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="text-xs uppercase font-semibold tracking-wider text-blue-300">
              Kostenloses Tool
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-1">
              Eigene Arbeitszeit jetzt genau berechnen
            </h3>
            <p className="text-sm text-slate-300 mt-1 max-w-md">
              Arbeitsbeginn, Ende und Pausen eingeben. Sofortige Nettoarbeitszeit, Dezimalstunden und Lohnberechnung nach deutschem Arbeitsrecht.
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

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-10 border-t border-slate-200" aria-labelledby="related-heading">
            <h2 id="related-heading" className="text-xl font-bold text-slate-900 mb-6">
              Ähnliche Ratgeber &amp; Artikel:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-xs transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                      {rel.category}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-2 leading-snug">
                      {rel.title}
                    </h3>
                  </div>
                  <span className="text-xs text-blue-600 font-semibold inline-flex items-center gap-1 mt-3">
                    Artikel lesen <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
