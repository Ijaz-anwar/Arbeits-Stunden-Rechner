"use client";

import { useState } from "react";
import { Check, Copy, Clock, Coffee, Sparkles, Moon, AlertTriangle, Info, Printer, Euro } from "lucide-react";

export default function ResultCard({ result }) {
  const [copied, setCopied] = useState(false);

  if (!result || !result.success) return null;

  const handleCopy = async () => {
    let summaryText = `Arbeitszeitberechnung (Arbeitsstundenrechner.de):
- Arbeitsbeginn: ${result.startTime} Uhr
- Arbeitsende: ${result.endTime} Uhr${result.isOverMidnight ? " (Nachtschicht / über Mitternacht)" : ""}
- Bruttoarbeitszeit: ${result.grossDuration}
- Gesamte Pausen: ${result.breakDuration} (${result.totalBreakMinutes} Min.)
- Nettoarbeitszeit: ${result.netDuration}
- Dezimalstunden: ${result.decimalHoursFormatted} Stunden`;

    if (result.earnings) {
      summaryText += `\n- Geschätzter Bruttolohn: ${result.earnings} ${result.currency || "€"} (bei ${result.hourlyRate} ${result.currency || "€"}/Std.)`;
    }

    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="calculation-result"
      className="mt-8 rounded-2xl bg-white border-2 border-blue-500/20 shadow-xl shadow-blue-500/5 p-5 sm:p-8 transition-all animate-in fade-in slide-in-from-top-4 duration-300 print:border-none print:shadow-none"
      aria-live="polite"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
              Berechnung abgeschlossen
            </span>
            {result.isOverMidnight && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800">
                <Moon className="w-3 h-3" />
                Nachtschicht / Über Mitternacht
              </span>
            )}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
            Berechnungsergebnis
          </h2>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto print:hidden">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            title="Berechnung in die Zwischenablage kopieren"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Kopiert!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-500" />
                <span>Kopieren</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            title="Ergebnis drucken oder als PDF speichern"
          >
            <Printer className="w-4 h-4 text-slate-500" />
            <span className="hidden sm:inline">Drucken</span>
          </button>
        </div>
      </div>

      {/* Main Results Grid - Exactly 2 cards per row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 my-6">
        {/* Card 1: Net Working Time (Primary Highlight) */}
        <div className="bg-emerald-50/70 border border-emerald-200/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Nettoarbeitszeit
              </span>
              <div className="p-1.5 bg-emerald-100/80 text-emerald-700 rounded-lg">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-950 mt-3 tracking-tight">
              {result.netDuration}
            </div>
          </div>
          <p className="text-xs text-emerald-700 font-medium mt-3 pt-2 border-t border-emerald-100">
            Tatsächliche Arbeitszeit ({result.decimalHoursFormatted} Stunden)
          </p>
        </div>

        {/* Card 2: Decimal Hours (Secondary Highlight) */}
        <div className="bg-blue-50/70 border border-blue-200/90 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
                Dezimalstunden
              </span>
              <div className="p-1.5 bg-blue-100/80 text-blue-700 rounded-lg">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-950 mt-3 tracking-tight">
              {result.decimalHoursFormatted} <span className="text-base font-semibold">Std.</span>
            </div>
          </div>
          <p className="text-xs text-blue-700 font-medium mt-3 pt-2 border-t border-blue-100">
            Für Stundenzettel &amp; Lohnabrechnung
          </p>
        </div>

        {/* Card 3: Gross Working Time */}
        <div className="bg-slate-50/80 border border-slate-200 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Bruttoarbeitszeit
              </span>
              <div className="p-1.5 bg-slate-200/60 text-slate-500 rounded-lg">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-800 mt-3 tracking-tight">
              {result.grossDuration}
            </div>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-3 pt-2 border-t border-slate-200/60">
            {result.startTime} bis {result.endTime} Uhr
          </p>
        </div>

        {/* Card 4: Total Breaks */}
        <div className="bg-slate-50/80 border border-slate-200 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xs">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Gesamte Pausenzeit
              </span>
              <div className="p-1.5 bg-slate-200/60 text-slate-500 rounded-lg">
                <Coffee className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-800 mt-3 tracking-tight">
              {result.breakDuration}
            </div>
          </div>
          <p className="text-xs text-slate-500 font-medium mt-3 pt-2 border-t border-slate-200/60">
            {result.totalBreakMinutes} Minuten Pause gesamt
          </p>
        </div>

        {/* Card 5: Estimated Earnings (Spanning both columns if present) */}
        {result.earnings && (
          <div className="sm:col-span-2 bg-amber-50/80 border border-amber-200 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-xs">
            <div className="flex items-center gap-3.5">
              <div className="p-2.5 bg-amber-100 text-amber-800 rounded-xl shrink-0">
                <Euro className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
                  Geschätzter Bruttolohn
                </span>
                <span className="text-xs text-amber-700">
                  Berechnet bei {result.hourlyRate} {result.currency || "€"} pro Stunde
                </span>
              </div>
            </div>
            <div className="text-3xl font-extrabold text-amber-950">
              {result.earnings} {result.currency || "€"}
            </div>
          </div>
        )}
      </div>

      {/* Multiple Breaks Detail List if user added more than one */}
      {result.breakList && result.breakList.length > 1 && (
        <div className="mt-4 p-4 rounded-xl bg-slate-50/80 border border-slate-200">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
            Pausen-Aufteilung:
          </h3>
          <div className="flex flex-wrap gap-2 text-xs">
            {result.breakList.map((b, idx) => (
              <span
                key={b.id || idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-700"
              >
                <Coffee className="w-3.5 h-3.5 text-slate-400" />
                <span className="font-medium">{b.label}:</span>
                <span className="font-semibold">{b.minutes} Min.</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Statutory / General Guidelines Advice */}
      {result.breakInfo && (
        <div className="mt-5 space-y-2">
          {result.breakInfo.status === "warning" ? (
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block">Hinweis zu Pausenzeiten (§ 4 ArbZG):</span>
                <span>{result.breakInfo.message}</span>
              </div>
            </div>
          ) : (
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-xs flex items-center gap-2.5">
              <Info className="w-4 h-4 text-blue-500 shrink-0" />
              <span>{result.breakInfo.message}</span>
            </div>
          )}

          {result.breakInfo.maxWorkWarning && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs sm:text-sm flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block">Höchstarbeitszeit (§ 3 ArbZG):</span>
                <span>{result.breakInfo.maxWorkWarning}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
