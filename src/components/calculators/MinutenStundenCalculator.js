"use client";

import { useState } from "react";
import {
  Clock,
  ArrowRightLeft,
  Sparkles,
  RotateCcw,
  Check,
  Copy,
  HelpCircle,
} from "lucide-react";

export default function MinutenStundenCalculator() {
  const [direction, setDirection] = useState("minToHours"); // "minToHours" | "hoursToMin"

  // Mode 1: Minutes -> Hours & Minutes
  const [minutesInput, setMinutesInput] = useState("150");

  // Mode 2: Hours & Minutes -> Minutes
  const [hoursInput, setHoursInput] = useState("2");
  const [minsInput, setMinsInput] = useState("30");

  const [copied, setCopied] = useState(false);

  // Calculations: Min -> Hours
  const numMinutes = Math.max(0, parseInt(minutesInput, 10) || 0);
  const resultHours = Math.floor(numMinutes / 60);
  const resultRemainingMins = numMinutes % 60;
  const resultDecimalHours = (numMinutes / 60).toFixed(2).replace(".", ",");
  const resultSeconds = numMinutes * 60;

  // Calculations: Hours & Mins -> Min
  const numH = Math.max(0, parseInt(hoursInput, 10) || 0);
  const numM = Math.max(0, parseInt(minsInput, 10) || 0);
  const totalCalculatedMinutes = numH * 60 + numM;
  const totalCalculatedSeconds = totalCalculatedMinutes * 60;
  const totalCalculatedDecHours = (totalCalculatedMinutes / 60).toFixed(2).replace(".", ",");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleReset = () => {
    setMinutesInput("150");
    setHoursInput("2");
    setMinsInput("30");
  };

  const tableRows = [
    { min: "15 Min.", std: "0 Std. 15 Min.", dec: "0,25 Std." },
    { min: "30 Min.", std: "0 Std. 30 Min.", dec: "0,50 Std." },
    { min: "45 Min.", std: "0 Std. 45 Min.", dec: "0,75 Std." },
    { min: "60 Min.", std: "1 Std. 00 Min.", dec: "1,00 Std." },
    { min: "75 Min.", std: "1 Std. 15 Min.", dec: "1,25 Std." },
    { min: "90 Min.", std: "1 Std. 30 Min.", dec: "1,50 Std." },
    { min: "120 Min.", std: "2 Std. 00 Min.", dec: "2,00 Std." },
    { min: "150 Min.", std: "2 Std. 30 Min.", dec: "2,50 Std." },
    { min: "180 Min.", std: "3 Std. 00 Min.", dec: "3,00 Std." },
    { min: "240 Min.", std: "4 Std. 00 Min.", dec: "4,00 Std." },
    { min: "300 Min.", std: "5 Std. 00 Min.", dec: "5,00 Std." },
    { min: "480 Min.", std: "8 Std. 00 Min.", dec: "8,00 Std." },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-50 text-amber-800 mb-2">
            <Clock className="w-3.5 h-3.5" />
            <span>Minuten in Stunden &amp; Minuten umrechnen</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Minuten Stunden Rechner
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Wandeln Sie reine Minutenbeträge in Stunden, Restminuten und Dezimalstunden um.
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

      {/* Mode Switcher */}
      <div className="flex gap-2 p-1 bg-slate-100 rounded-xl">
        <button
          type="button"
          onClick={() => setDirection("minToHours")}
          className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors cursor-pointer ${
            direction === "minToHours"
              ? "bg-amber-600 text-white shadow-xs"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Minuten → Stunden &amp; Minuten
        </button>
        <button
          type="button"
          onClick={() => setDirection("hoursToMin")}
          className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors cursor-pointer ${
            direction === "hoursToMin"
              ? "bg-amber-600 text-white shadow-xs"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Stunden &amp; Minuten → Gesamte Minuten
        </button>
      </div>

      {/* ========================================================= */}
      {/* MODE 1: MINUTES TO HOURS & MINUTES                        */}
      {/* ========================================================= */}
      {direction === "minToHours" ? (
        <div className="space-y-6">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
              Minuten eingeben:
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                min="0"
                value={minutesInput}
                onChange={(e) => setMinutesInput(e.target.value)}
                placeholder="z. B. 150"
                className="flex-1 h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-amber-600 outline-none"
              />
              <div className="flex items-center px-4 bg-slate-100 rounded-xl text-slate-600 font-bold text-sm">
                Minuten
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-2">
              {[15, 30, 45, 60, 90, 120, 150, 180, 240, 360, 480].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMinutesInput(String(m))}
                  className="px-2.5 py-1 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-medium cursor-pointer"
                >
                  {m} Min.
                </button>
              ))}
            </div>
          </div>

          {/* Result Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-950 via-slate-900 to-slate-900 text-white shadow-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider text-amber-300 font-bold">
                Ergebnis:
              </span>
              <button
                type="button"
                onClick={() => handleCopy(`${resultHours} Std. ${resultRemainingMins} Min.`)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Kopiert!" : "Kopieren"}</span>
              </button>
            </div>

            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {resultHours} Std. {String(resultRemainingMins).padStart(2, "0")} Min.
            </div>
            <div className="text-amber-200 text-sm font-semibold mt-1">
              = {resultDecimalHours} Dezimalstunden ({resultSeconds.toLocaleString("de-DE")} Sekunden)
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 text-xs text-amber-200 font-mono">
              Formel: {numMinutes} ÷ 60 = {resultHours} volle Stunden mit Rest {resultRemainingMins} Minuten
            </div>
          </div>
        </div>
      ) : (
        /* MODE 2: HOURS & MINUTES TO TOTAL MINUTES */
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                Stunden:
              </label>
              <input
                type="number"
                min="0"
                value={hoursInput}
                onChange={(e) => setHoursInput(e.target.value)}
                placeholder="2"
                className="w-full h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-amber-600 outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                Minuten:
              </label>
              <input
                type="number"
                min="0"
                max="59"
                value={minsInput}
                onChange={(e) => setMinsInput(e.target.value)}
                placeholder="30"
                className="w-full h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-amber-600 outline-none"
              />
            </div>
          </div>

          {/* Result Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-950 via-slate-900 to-slate-900 text-white shadow-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider text-amber-300 font-bold">
                Ergebnis: Reine Minuten
              </span>
              <button
                type="button"
                onClick={() => handleCopy(`${totalCalculatedMinutes} Minuten`)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Kopiert!" : "Kopieren"}</span>
              </button>
            </div>

            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {totalCalculatedMinutes.toLocaleString("de-DE")} Minuten
            </div>
            <div className="text-amber-200 text-sm font-semibold mt-1">
              = {totalCalculatedDecHours} Dezimalstunden ({totalCalculatedSeconds.toLocaleString("de-DE")} Sekunden)
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 text-xs text-amber-200 font-mono">
              Formel: ({numH} × 60) + {numM} = {totalCalculatedMinutes} Minuten
            </div>
          </div>
        </div>
      )}

      {/* Reference Table */}
      <div className="pt-4 border-t border-slate-100">
        <h3 className="text-sm font-bold text-slate-900 mb-3">
          Referenztabelle: Minuten in Stunden umrechnen
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 text-xs">
          {tableRows.map((r) => (
            <div key={r.min} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="font-bold text-slate-900 block">{r.min}</span>
              <span className="text-slate-600 block">{r.std}</span>
              <span className="text-amber-700 font-semibold">{r.dec}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
