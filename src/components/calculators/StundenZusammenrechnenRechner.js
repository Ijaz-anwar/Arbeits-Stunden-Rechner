"use client";

import { useState } from "react";
import {
  PlusCircle,
  Plus,
  Trash2,
  Sparkles,
  Copy,
  Check,
  RotateCcw,
  Calendar,
  Euro,
} from "lucide-react";

export default function StundenZusammenrechnenRechner() {
  const initialRows = [
    { id: "1", label: "Montag", hours: "7", minutes: "30" },
    { id: "2", label: "Dienstag", hours: "8", minutes: "00" },
    { id: "3", label: "Mittwoch", hours: "7", minutes: "45" },
    { id: "4", label: "Donnerstag", hours: "8", minutes: "15" },
    { id: "5", label: "Freitag", hours: "6", minutes: "30" },
  ];

  const [rows, setRows] = useState(initialRows);
  const [hourlyRate, setHourlyRate] = useState("");
  const [copied, setCopied] = useState(false);

  const handleAddRow = () => {
    const nextIdx = rows.length + 1;
    setRows((prev) => [
      ...prev,
      {
        id: `row-${Date.now()}`,
        label: `Eintrag ${nextIdx}`,
        hours: "8",
        minutes: "00",
      },
    ]);
  };

  const handleRemoveRow = (id) => {
    if (rows.length <= 1) return;
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  const handleRowChange = (id, field, value) => {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, [field]: value } : r))
    );
  };

  const handleReset = () => {
    setRows(initialRows);
    setHourlyRate("");
  };

  // Calculations
  let totalHoursSum = 0;
  let totalMinutesSum = 0;

  rows.forEach((r) => {
    const h = parseInt(r.hours, 10) || 0;
    const m = parseInt(r.minutes, 10) || 0;
    totalHoursSum += h;
    totalMinutesSum += m;
  });

  const additionalHoursFromMinutes = Math.floor(totalMinutesSum / 60);
  const finalMinutes = totalMinutesSum % 60;
  const finalTotalHours = totalHoursSum + additionalHoursFromMinutes;
  const totalAllMinutes = finalTotalHours * 60 + finalMinutes;
  const finalDecimalHours = (totalAllMinutes / 60).toFixed(2).replace(".", ",");

  const averageMinutesPerEntry =
    rows.length > 0 ? Math.round(totalAllMinutes / rows.length) : 0;
  const avgHours = Math.floor(averageMinutesPerEntry / 60);
  const avgMins = averageMinutesPerEntry % 60;

  let totalPay = null;
  if (hourlyRate) {
    const rate = parseFloat(String(hourlyRate).replace(/,/g, "."));
    if (!isNaN(rate)) {
      totalPay = ((totalAllMinutes / 60) * rate).toFixed(2).replace(".", ",");
    }
  }

  const handleCopy = () => {
    const lines = [
      "=== STUNDEN ZUSAMMENRECHNEN ===",
      `Gesamtarbeitszeit: ${finalTotalHours} Std. ${String(finalMinutes).padStart(2, "0")} Min.`,
      `Dezimalstunden: ${finalDecimalHours} Std.`,
      `Gesamtminuten: ${totalAllMinutes.toLocaleString("de-DE")} Min.`,
      `Einträge: ${rows.length} Tage (Ø ${avgHours} Std. ${avgMins} Min./Tag)`,
      totalPay ? `Geschätzter Lohn: ${totalPay} €` : null,
      "\nAufschlüsselung:",
      ...rows.map(
        (r) =>
          `- ${r.label}: ${r.hours || 0} Std. ${r.minutes || 0} Min.`
      ),
      "\nBerechnet auf Arbeitsstundenrechner.de",
    ]
      .filter(Boolean)
      .join("\n");

    navigator.clipboard.writeText(lines).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-700 mb-2">
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Mehrere Arbeitszeiten &amp; Stunden addieren</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Stunden Zusammenrechnen Rechner
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Addieren Sie einzelne Arbeitszeiten für Ihren Stundenzettel oder die gesamte Arbeitswoche.
          </p>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors self-start sm:self-center cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Zurücksetzen</span>
        </button>
      </div>

      {/* Row Inputs */}
      <div className="space-y-3">
        <div className="hidden sm:grid grid-cols-12 gap-3 text-xs font-bold text-slate-500 uppercase tracking-wider px-2">
          <div className="col-span-5">Bezeichnung / Tag</div>
          <div className="col-span-3">Stunden</div>
          <div className="col-span-3">Minuten</div>
          <div className="col-span-1 text-right">Löschen</div>
        </div>

        <div className="space-y-2.5">
          {rows.map((row) => (
            <div
              key={row.id}
              className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-3 p-3 bg-slate-50/70 border border-slate-200/80 rounded-xl items-center"
            >
              <div className="sm:col-span-5">
                <input
                  type="text"
                  value={row.label}
                  onChange={(e) => handleRowChange(row.id, "label", e.target.value)}
                  className="w-full h-10 px-3 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm font-semibold text-slate-900 focus:border-blue-600 outline-none"
                  placeholder="z. B. Montag"
                />
              </div>

              <div className="sm:col-span-3 flex items-center gap-1.5">
                <input
                  type="number"
                  min="0"
                  max="24"
                  value={row.hours}
                  onChange={(e) => handleRowChange(row.id, "hours", e.target.value)}
                  className="w-full h-10 px-2.5 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm font-semibold text-center text-slate-900 focus:border-blue-600 outline-none"
                  placeholder="0"
                />
                <span className="text-xs text-slate-400 font-medium sm:hidden">Std.</span>
              </div>

              <div className="sm:col-span-3 flex items-center gap-1.5">
                <input
                  type="number"
                  min="0"
                  max="59"
                  step="5"
                  value={row.minutes}
                  onChange={(e) => handleRowChange(row.id, "minutes", e.target.value)}
                  className="w-full h-10 px-2.5 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm font-semibold text-center text-slate-900 focus:border-blue-600 outline-none"
                  placeholder="0"
                />
                <span className="text-xs text-slate-400 font-medium sm:hidden">Min.</span>
              </div>

              <div className="sm:col-span-1 text-right">
                <button
                  type="button"
                  onClick={() => handleRemoveRow(row.id)}
                  disabled={rows.length <= 1}
                  className="p-2 text-slate-400 hover:text-rose-600 disabled:opacity-30 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                  title="Eintrag entfernen"
                >
                  <Trash2 className="w-4 h-4 inline" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={handleAddRow}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer pt-1"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Weiteren Zeiteintrag hinzufügen</span>
        </button>
      </div>

      {/* Optional Wage */}
      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4">
        <div className="w-full sm:w-64">
          <label className="text-xs font-bold text-slate-700 block mb-1">
            Optional: Stundenlohn (€/h)
          </label>
          <input
            type="text"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
            placeholder="z. B. 20,00"
            className="w-full h-10 px-3 rounded-lg border border-slate-300 text-sm font-semibold text-slate-900 focus:border-blue-600 outline-none"
          />
        </div>
      </div>

      {/* Result Card */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900 to-slate-900 text-white shadow-md">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs uppercase tracking-wider text-blue-200 font-bold">
            Ergebnis: Gesamtarbeitszeit
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Kopiert!" : "Zusammenfassung kopieren"}</span>
          </button>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {finalTotalHours} Std. {String(finalMinutes).padStart(2, "0")} Min.
            </div>
            <div className="text-blue-200 text-sm font-semibold mt-1">
              = {finalDecimalHours} Dezimalstunden ({totalAllMinutes.toLocaleString("de-DE")} Minuten gesamt)
            </div>
          </div>

          {totalPay && (
            <div className="bg-white/10 p-3 rounded-xl border border-white/10 sm:text-right">
              <span className="text-xs text-blue-200 block">Gesamtbetrag (Brutto):</span>
              <span className="text-2xl font-bold text-emerald-400">{totalPay} €</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-4 border-t border-white/10 text-xs">
          <div>
            <span className="text-blue-300 block">Anzahl Einträge:</span>
            <span className="font-bold text-white text-sm">{rows.length} Tage/Schichten</span>
          </div>
          <div>
            <span className="text-blue-300 block">Durchschnitt pro Eintrag:</span>
            <span className="font-bold text-white text-sm">
              {avgHours} Std. {String(avgMins).padStart(2, "0")} Min.
            </span>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="text-blue-300 block">Stunden + Minuten Addition:</span>
            <span className="font-bold text-white text-sm">
              {totalHoursSum}h + {totalMinutesSum}m = {finalTotalHours}h {finalMinutes}m
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
