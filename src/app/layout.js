import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://arbeitsstundenrechner.de"),
  title: {
    default: "Stunden Rechner Online – Arbeitszeit, Stunden und Minuten einfach berechnen",
    template: "%s | Arbeitsstundenrechner",
  },
  description:
    "Stunden Rechner Online: Arbeitszeit, Stunden und Minuten einfach berechnen. Stunden zusammenrechnen, Dezimalstunden umwandeln, Pausen abziehen und Arbeitslohn berechnen.",
  applicationName: "Arbeitsstundenrechner",
  keywords: [
    "Stundenrechner",
    "Arbeitsstundenrechner",
    "Arbeitszeitrechner",
    "Arbeitszeit berechnen",
    "Arbeitsstunden berechnen",
    "Dezimalstunden berechnen",
    "Industrieminuten Rechner",
    "Arbeitszeit mit Pause",
    "Wochenarbeitszeit berechnen",
    "Monatsarbeitszeit berechnen",
    "Arbeitszeit über Mitternacht",
    "Stundenlohn Rechner",
  ],
  authors: [{ name: "Arbeitsstundenrechner Redaktion" }],
  creator: "Arbeitsstundenrechner",
  publisher: "Arbeitsstundenrechner",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "de-DE": "https://arbeitsstundenrechner.de",
    },
  },
  openGraph: {
    title: "Stunden Rechner Online – Arbeitszeit, Stunden und Minuten einfach berechnen",
    description:
      "Stunden Rechner Online: Arbeitszeit, Stunden und Minuten einfach berechnen. Stunden zusammenrechnen, Dezimalstunden umwandeln, Pausen abziehen und Arbeitslohn berechnen.",
    url: "https://arbeitsstundenrechner.de",
    siteName: "Arbeitsstundenrechner",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stundenrechner – Arbeitszeit einfach & präzise berechnen",
    description:
      "Arbeitszeit, Pausen, Dezimalstunden und Wochenstunden schnell und zuverlässig online berechnen.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="de"
      className="h-full bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white"
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
