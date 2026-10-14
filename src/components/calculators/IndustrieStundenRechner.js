"use client";

import { useState } from "react";
import {
  Briefcase,
  ArrowRightLeft,
  Sparkles,
  RotateCcw,
  Check,
  Copy,
  Clock,
  HelpCircle,
} from "lucide-react";

export default function IndustrieStundenRechner() {
  const [activeTab, setActiveTab] = useState("convert"); // "convert" | "shift"

  // -------------------------------------------------------------
  // TAB 1: Umrechner Normalzeit ↔ Industriestunden
  // -------------------------------------------------------------
  const [direction, setDirection] = useState("realToInd"); // "realToInd" | "indToReal"
  const [realHours, setRealHours] = useState("7");
  const [realMinutes, setRealMinutes] = useState("36");

  const [indInput, setIndInput] = useState("7,60");

  const [copied, setCopied] = useState(false);

  // Calculation: Real -> Industrial
  const numRealH = parseInt(realHours, 10) || 0;
  const numRealM = parseInt(realMinutes, 10) || 0;
  const indMinFraction = (numRealM / 60) * 100;
  const indDecimal = numRealH + indMinFraction / 100;
  const indResultFormatted = indDecimal.toFixed(2).replace(".", ",");
  const indMinFormatted = Math.round(indMinFraction);

  // Calculation: Industrial -> Real
  const cleanInd = parseFloat(String(indInput).replace(/,/g, ".")) || 0;
  const convertedRealH = Math.floor(cleanInd);
  const indFraction = cleanInd - convertedRealH;
  const convertedRealM = Math.round(indFraction * 60);

  // -------------------------------------------------------------
  // TAB 2: Industrie-Schichtrechner
  // -------------------------------------------------------------
  const [shiftStart, setShiftStart] = useState("06:00");
  const [shiftEnd, setShiftEnd] = useState("14:30");
  const [shiftBreakInd, setShiftBreakInd] = useState("50"); // 50 Industrieminuten = 30 Normalminuten
  const [shiftHourlyRate, setShiftHourlyRate] = useState("");
  const [shiftResult, setShiftResult] = useState(null);

  const handleCalcShift = (e) => {
    if (e) e.preventDefault();
    const [h1, m1] = shiftStart.split(":").map(Number);
    const [h2, m2] = shiftEnd.split(":").map(Number);

    if (isNaN(h1) || isNaN(m1) || isNaN(h2) || isNaN(m2)) return;

    let startMins = h1 * 60 + m1;
    let endMins = h2 * 60 + m2;
    let isNight = false;

    let grossMins = endMins - startMins;
    if (grossMins < 0) {
      grossMins = 1440 - startMins + endMins;
      isNight = true;
    }

    // Break in Industrieminuten converted to normal minutes:
    // Normalminuten = IndMin / 100 * 60
    const breakIndNum = parseFloat(String(shiftBreakInd).replace(/,/g, ".")) || 0;
    const breakNormalMins = Math.round((breakIndNum / 100) * 60);

    const netMins = Math.max(0, grossMins - breakNormalMins);

    const grossInd = (grossMins / 60).toFixed(2).replace(".", ",");
    const netInd = (netMins / 60).toFixed(2).replace(".", ",");
    const breakIndFormatted = (breakNormalMins / 60).toFixed(2).replace(".", ",");

    let earnings = null;
    if (shiftHourlyRate) {
      const rate = parseFloat(String(shiftHourlyRate).replace(/,/g, "."));
      if (!isNaN(rate)) {
        earnings = ((netMins / 60) * rate).toFixed(2).replace(".", ",");
      }
    }

    setShiftResult({
      grossNormalDuration: `${Math.floor(grossMins / 60)} Std. ${grossMins % 60} Min.`,
      grossIndHours: grossInd,
      netNormalDuration: `${Math.floor(netMins / 60)} Std. ${netMins % 60} Min.`,
      netIndHours: netInd,
      breakIndHours: breakIndFormatted,
      breakNormalDuration: `${breakNormalMins} Min.`,
      earnings,
      isNight,
    });
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const indTableRows = [
    { min: "6 Min.", ind: "10 Ind.-Min. (0,10 Std.)" },
    { min: "12 Min.", ind: "20 Ind.-Min. (0,20 Std.)" },
    { min: "15 Min.", ind: "25 Ind.-Min. (0,25 Std.)" },
    { min: "18 Min.", ind: "30 Ind.-Min. (0,30 Std.)" },
    { min: "24 Min.", ind: "40 Ind.-Min. (0,40 Std.)" },
    { min: "30 Min.", ind: "50 Ind.-Min. (0,50 Std.)" },
    { min: "36 Min.", ind: "60 Ind.-Min. (0,60 Std.)" },
    { min: "42 Min.", ind: "70 Ind.-Min. (0,70 Std.)" },
    { min: "45 Min.", ind: "75 Ind.-Min. (0,75 Std.)" },
    { min: "48 Min.", ind: "80 Ind.-Min. (0,80 Std.)" },
    { min: "54 Min.", ind: "90 Ind.-Min. (0,90 Std.)" },
    { min: "60 Min.", ind: "100 Ind.-Min. (1,00 Std.)" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-50 text-indigo-700 mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Industrieminuten (100er-Teilung) &amp; Industriestunden</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Industrie Stunden Rechner
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Berechnen und konvertieren Sie Industriestunden für Zeiterfassungssysteme, Schichtbetriebe und SAP/DATEV.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="inline-flex p-1 bg-slate-100 rounded-xl gap-1 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setActiveTab("convert")}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              activeTab === "convert"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Industrie-Umrechner
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveTab("shift");
              if (!shiftResult) handleCalcShift();
            }}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              activeTab === "shift"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Industrie-Schichtrechner
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* TAB 1: INDUSTRIE-UMRECHNER                                */}
      {/* ========================================================= */}
      {activeTab === "convert" && (
        <div className="space-y-6">
          <div className="flex gap-2 p-1 bg-slate-50 border border-slate-200 rounded-xl">
            <button
              type="button"
              onClick={() => setDirection("realToInd")}
              className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors cursor-pointer ${
                direction === "realToInd"
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              Normalzeit → Industriestunden
            </button>
            <button
              type="button"
              onClick={() => setDirection("indToReal")}
              className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors cursor-pointer ${
                direction === "indToReal"
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              Industriestunden → Normalzeit
            </button>
          </div>

          {direction === "realToInd" ? (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                    Stunden:
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={realHours}
                    onChange={(e) => setRealHours(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-indigo-600 outline-none"
                    placeholder="7"
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
                    value={realMinutes}
                    onChange={(e) => setRealMinutes(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-indigo-600 outline-none"
                    placeholder="36"
                  />
                </div>
              </div>

              {/* Result Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900 to-slate-900 text-white shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-wider text-indigo-300 font-bold">
                    Ergebnis: Industriestunden
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(`${indResultFormatted} Industriestunden`)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Kopiert!" : "Kopieren"}</span>
                  </button>
                </div>

                <div className="text-4xl font-extrabold tracking-tight">
                  {indResultFormatted} <span className="text-xl text-indigo-300 font-bold">Ind.-Std.</span>
                </div>
                <div className="text-indigo-200 text-sm mt-1">
                  Entspricht: {numRealH} Std. und {indMinFormatted} Industrieminuten
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 text-xs text-indigo-200 font-mono">
                  Rechenweg: {numRealM} Min. ÷ 60 = {(numRealM / 60).toFixed(2).replace(".", ",")} Ind.-Std. → Gesamt: {indResultFormatted} Industriestunden
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                  Industriestunden eingeben (z. B. 7,60 oder 8,75):
                </label>
                <input
                  type="text"
                  value={indInput}
                  onChange={(e) => setIndInput(e.target.value)}
                  placeholder="z. B. 7,60"
                  className="w-full h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-indigo-600 outline-none"
                />
              </div>

              {/* Result Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900 to-slate-900 text-white shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-wider text-indigo-300 font-bold">
                    Ergebnis: Normalzeit
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(`${convertedRealH} Std. ${convertedRealM} Min.`)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Kopiert!" : "Kopieren"}</span>
                  </button>
                </div>

                <div className="text-4xl font-extrabold tracking-tight">
                  {convertedRealH} Std. {convertedRealM} Min.
                </div>
                <div className="text-indigo-200 text-sm mt-1">
                  Uhrzeitformat: {String(convertedRealH).padStart(2, "0")}:{String(convertedRealM).padStart(2, "0")} Uhr
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 text-xs text-indigo-200 font-mono">
                  Rechenweg: {(indFraction).toFixed(2).replace(".", ",")} × 60 = {convertedRealM} Normalminuten
                </div>
              </div>
            </div>
          )}

          {/* Quick Lookup Table */}
          <div className="pt-4 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-900 mb-3">
              Industrieminuten Referenztabelle (100er-Teilung)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
              {indTableRows.map((row) => (
                <div key={row.min} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="font-bold text-slate-900 block">{row.min}</span>
                  <span className="text-indigo-700 font-semibold">{row.ind}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 2: INDUSTRIE-SCHICHTRECHNER                           */}
      {/* ========================================================= */}
      {activeTab === "shift" && (
        <form onSubmit={handleCalcShift} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                Schichtbeginn (hh:mm):
              </label>
              <input
                type="time"
                value={shiftStart}
                onChange={(e) => setShiftStart(e.target.value)}
                className="w-full h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-indigo-600 outline-none"
                required
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                Schichtende (hh:mm):
              </label>
              <input
                type="time"
                value={shiftEnd}
                onChange={(e) => setShiftEnd(e.target.value)}
                className="w-full h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-indigo-600 outline-none"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                Pause in Industrieminuten (z.B. 50 = 30 Min.):
              </label>
              <input
                type="number"
                min="0"
                step="5"
                value={shiftBreakInd}
                onChange={(e) => setShiftBreakInd(e.target.value)}
                className="w-full h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-indigo-600 outline-none"
                placeholder="50"
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                Optional: Stundensatz (€/Ind.-Std.):
              </label>
              <input
                type="text"
                value={shiftHourlyRate}
                onChange={(e) => setShiftHourlyRate(e.target.value)}
                placeholder="z. B. 21,50"
                className="w-full h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-indigo-600 outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-sm text-sm sm:text-base flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Industrie-Schicht berechnen</span>
          </button>

          {shiftResult && (
            <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-900 to-slate-900 text-white shadow-md">
              <span className="text-xs uppercase tracking-wider text-indigo-300 font-bold block mb-1">
                Netto-Industriearbeitszeit:
              </span>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                <div>
                  <div className="text-4xl font-extrabold tracking-tight">
                    {shiftResult.netIndHours} <span className="text-xl text-indigo-300 font-bold">Industriestunden</span>
                  </div>
                  <div className="text-indigo-200 text-sm mt-1">
                    Entspricht in Echtzeit: {shiftResult.netNormalDuration}
                  </div>
                </div>

                {shiftResult.earnings && (
                  <div className="bg-white/10 p-3 rounded-xl border border-white/10 sm:text-right">
                    <span className="text-xs text-indigo-300 block">Lohnbetrag:</span>
                    <span className="text-2xl font-bold text-emerald-400">
                      {shiftResult.earnings} €
                    </span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-white/10 text-xs">
                <div>
                  <span className="text-indigo-300 block">Brutto-Anwesenheit:</span>
                  <span className="font-bold text-white text-sm">
                    {shiftResult.grossIndHours} Ind.-Std. ({shiftResult.grossNormalDuration})
                  </span>
                </div>
                <div>
                  <span className="text-indigo-300 block">Pausenabzug:</span>
                  <span className="font-bold text-white text-sm">
                    {shiftBreakInd} Ind.-Min. ({shiftResult.breakNormalDuration})
                  </span>
                </div>
                <div>
                  <span className="text-indigo-300 block">Schichttyp:</span>
                  <span className="font-bold text-white text-sm">
                    {shiftResult.isNight ? "Nachtschicht" : "Tagschicht"}
                  </span>
                </div>
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  );
}
