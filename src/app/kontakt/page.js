"use client";

import { useState } from "react";
import { Mail, Send, Info, Clock, MessageSquare, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage({
        type: "error",
        text: "Bitte füllen Sie alle erforderlichen Pflichtfelder (*) aus.",
      });
      return;
    }

    // Ehrlicher Hinweis: Reines Frontend-Projekt ohne Mailserver-Backend
    setStatusMessage({
      type: "notice",
      text: "Vielen Dank für Ihre Nachricht! Hinweis: Da diese Website als statische/clientseitige Webanwendung ohne zwischengeschalteten Mailserver läuft, senden Sie Ihre Anfrage bitte direkt an [Ihre Kontakt-E-Mail-Adresse].",
    });
  };

  return (
    <main className="py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 mb-3">
            <Mail className="w-3.5 h-3.5" />
            Kontakt &amp; Feedback
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kontaktieren Sie uns
          </h1>
          <p className="mt-3 text-base text-slate-600">
            Haben Sie Fragen zur Berechnung Ihrer Arbeitszeit, Anregungen für neue Rechner-Funktionen oder Feedback?
            Wir freuen uns über Ihre Nachricht.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kontaktdaten */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-4">
                Kontaktdaten
              </h2>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">E-Mail-Adresse</span>
                    <span className="font-mono text-xs text-slate-700 bg-slate-100 px-2 py-0.5 rounded break-all">
                      [Ihre E-Mail-Adresse, z. B. kontakt@ihre-domain.de]
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Antwortzeit</span>
                    <span>Anfragen werden an Werktagen üblicherweise innerhalb von 24–48 Stunden beantwortet.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-slate-900">Impressum / Rechtliches</span>
                    <span>
                      Vollständige Angaben zum Diensteanbieter finden Sie in unserem{" "}
                      <Link href="/impressum" className="text-blue-600 hover:underline">
                        Impressum
                      </Link>
                      .
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Datenschutzhinweis Box */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 leading-relaxed">
              <span className="font-semibold block text-slate-700 mb-1">Datenschutzhinweis:</span>
              Ihre Angaben aus dem Anfrageformular werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
              Weitere Informationen finden Sie in unserer{" "}
              <Link href="/datenschutz" className="text-blue-600 hover:underline">
                Datenschutzerklärung
              </Link>
              .
            </div>
          </div>

          {/* Kontaktformular */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Nachricht senden
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Nutzen Sie unser Formular für Anfragen, Feedback zur Arbeitszeitberechnung oder technische Hinweise.
              </p>

              {statusMessage && (
                <div
                  className={`p-4 rounded-xl text-sm mb-6 flex items-start gap-3 ${
                    statusMessage.type === "error"
                      ? "bg-rose-50 border border-rose-200 text-rose-800"
                      : "bg-blue-50 border border-blue-200 text-blue-900"
                  }`}
                  role="alert"
                >
                  {statusMessage.type === "error" ? (
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  ) : (
                    <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <span className="font-semibold block">
                      {statusMessage.type === "error" ? "Eingabehinweis" : "Wichtiger Hinweis"}
                    </span>
                    <span>{statusMessage.text}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-slate-700">
                      Ihr Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="z. B. Max Mustermann"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-slate-700">
                      Ihre E-Mail-Adresse *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="name@beispiel.de"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-slate-700">
                    Betreff
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="z. B. Frage zum Stundenrechner oder Feature-Vorschlag"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-700">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Wie können wir Ihnen bei der Arbeitszeitberechnung behilflich sein?"
                  />
                </div>

                <p className="text-xs text-slate-500">
                  * Erforderliche Pflichtfelder. Keine Weitergabe an Dritte oder unerwünschte Werbung.
                </p>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Nachricht absenden
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
