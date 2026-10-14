"use client";

import { useState } from "react";
import {
  Percent,
  ArrowRightLeft,
  Sparkles,
  HelpCircle,
  Copy,
  Check,
  RotateCcw,
} from "lucide-react";

export default function StundenDezimalRechner() {
  const [activeTab, setActiveTab] = useState("timeToDec"); // "timeToDec" | "decToTime"

  // Mode 1: Time -> Decimal
  const [timeInput, setTimeInput] = useState("7:30");
  const [timeResult, setTimeResult] = useState({
    decimal: "7,50",
    hours: 7,
    minutes: 30,
    formula: "7 Std. + (30 ÷ 60) = 7 + 0,50 = 7,50 Std.",
  });
  const [timeError, setTimeError] = useState("");

  // Mode 2: Decimal -> Time
  const [decimalInput, setDecimalInput] = useState("8,25");
  const [decimalResult, setDecimalResult] = useState({
    formatted: "8 Std. 15 Min.",
    hhmm: "08:15",
    formula: "8 Std. + (0,25 × 60 = 15 Min.) = 8 Std. 15 Min.",
  });
  const [decimalError, setDecimalError] = useState("");

  const [copied, setCopied] = useState(false);

  const handleConvertTimeToDecimal = (val = timeInput) => {
    setTimeError("");
    if (!val || !val.trim()) {
      setTimeResult(null);
      return;
    }

    const clean = val.trim().replace(/,/g, ".");
    let hours = 0;
    let minutes = 0;

    if (clean.includes(":")) {
      const parts = clean.split(":");
      hours = parseInt(parts[0], 10) || 0;
      minutes = parseInt(parts[1], 10) || 0;
    } else if (clean.includes(".")) {
      const parts = clean.split(".");
      hours = parseInt(parts[0], 10) || 0;
      minutes = parseInt(parts[1], 10) || 0;
    } else if (/^\d+$/.test(clean)) {
      hours = parseInt(clean, 10);
      minutes = 0;
    } else {
      setTimeError("Bitte Format wie 7:30 oder 8:45 eingeben");
      return;
    }

    if (minutes >= 60 || minutes < 0 || hours < 0) {
      setTimeError("Minuten müssen zwischen 0 und 59 liegen");
      return;
    }

    const dec = hours + minutes / 60;
    const decFormatted = dec.toFixed(2).replace(".", ",");
    setTimeResult({
      decimal: decFormatted,
      hours,
      minutes,
      formula: `${hours} Std. + (${minutes} ÷ 60) = ${hours} + ${(minutes / 60)
        .toFixed(2)
        .replace(".", ",")} = ${decFormatted} Std.`,
    });
  };

  const handleConvertDecimalToTime = (val = decimalInput) => {
    setDecimalError("");
    if (!val || !val.trim()) {
      setDecimalResult(null);
      return;
    }

    const clean = val.trim().replace(/,/g, ".");
    const num = parseFloat(clean);
    if (isNaN(num) || num < 0) {
      setDecimalError("Bitte eine gültige Dezimalzahl eingeben (z. B. 7,50)");
      return;
    }

    const hours = Math.floor(num);
    const frac = num - hours;
    const minutes = Math.round(frac * 60);

    let finalHours = hours;
    let finalMinutes = minutes;
    if (finalMinutes >= 60) {
      finalHours += 1;
      finalMinutes = 0;
    }

    const hh = String(finalHours).padStart(2, "0");
    const mm = String(finalMinutes).padStart(2, "0");

    setDecimalResult({
      formatted: `${finalHours} Std. ${finalMinutes} Min.`,
      hhmm: `${hh}:${mm}`,
      formula: `${finalHours} Std. + (${frac.toFixed(2).replace(".", ",")} × 60 = ${finalMinutes} Min.)`,
    });
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const comparisonRows = [
    { time: "0:15 (15 Min.)", dec: "0,25", calc: "15/60 = 0,25" },
    { time: "0:30 (30 Min.)", dec: "0,50", calc: "30/60 = 0,50" },
    { time: "0:45 (45 Min.)", dec: "0,75", calc: "45/60 = 0,75" },
    { time: "1:00 (60 Min.)", dec: "1,00", calc: "60/60 = 1,00" },
    { time: "1:15 (1 Std. 15 Min.)", dec: "1,25", calc: "1 + 15/60 = 1,25" },
    { time: "2:30 (2 Std. 30 Min.)", dec: "2,50", calc: "2 + 30/60 = 2,50" },
    { time: "3:45 (3 Std. 45 Min.)", dec: "3,75", calc: "3 + 45/60 = 3,75" },
    { time: "7:30 (7 Std. 30 Min.)", dec: "7,50", calc: "7 + 30/60 = 7,50" },
    { time: "8:00 (8 Std. 00 Min.)", dec: "8,00", calc: "8 + 0/60 = 8,00" },
    { time: "8:15 (8 Std. 15 Min.)", dec: "8,25", calc: "8 + 15/60 = 8,25" },
    { time: "8:30 (8 Std. 30 Min.)", dec: "8,50", calc: "8 + 30/60 = 8,50" },
    { time: "8:45 (8 Std. 45 Min.)", dec: "8,75", calc: "8 + 45/60 = 8,75" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-700 mb-2">
            <Percent className="w-3.5 h-3.5" />
            <span>Stunden &amp; Minuten ↔ Dezimalstunden</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Stunden Dezimal Rechner
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Wandeln Sie Stunden und Minuten für Stundenzettel, DATEV und Lohnabrechnung in Dezimalstunden um.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="inline-flex p-1 bg-slate-100 rounded-xl gap-1 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setActiveTab("timeToDec")}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              activeTab === "timeToDec"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Zeit → Dezimal
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("decToTime")}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              activeTab === "decToTime"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Dezimal → Zeit
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MODE 1: TIME TO DECIMAL                                  */}
      {/* ========================================================= */}
      {activeTab === "timeToDec" && (
        <div className="space-y-6">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
              Stunden und Minuten eingeben (z. B. 7:30 oder 8:45):
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={timeInput}
                onChange={(e) => {
                  setTimeInput(e.target.value);
                  handleConvertTimeToDecimal(e.target.value);
                }}
                placeholder="z. B. 7:30"
                className="flex-1 h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none"
              />
              <button
                type="button"
                onClick={() => handleConvertTimeToDecimal(timeInput)}
                className="px-5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition-colors cursor-pointer"
              >
                Umrechnen
              </button>
            </div>

            {timeError && (
              <p className="text-xs text-rose-600 mt-1.5 font-medium">{timeError}</p>
            )}

            <div className="flex flex-wrap gap-1.5 mt-2">
              {["1:15", "2:30", "5:45", "7:30", "8:00", "8:15", "8:30", "8:45"].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => {
                    setTimeInput(preset);
                    handleConvertTimeToDecimal(preset);
                  }}
                  className="px-2.5 py-1 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-medium cursor-pointer"
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>

          {timeResult && (
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900 to-slate-900 text-white shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider text-blue-200 font-bold">
                  Ergebnis: Dezimalstunden
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(`${timeResult.decimal} Stunden`)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Kopiert!" : "Kopieren"}</span>
                </button>
              </div>

              <div className="text-4xl font-extrabold tracking-tight">
                {timeResult.decimal} <span className="text-xl text-blue-300 font-bold">Stunden</span>
              </div>
              <div className="text-blue-200 text-xs mt-2 font-mono">
                {timeResult.formula}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================= */}
      {/* MODE 2: DECIMAL TO TIME                                  */}
      {/* ========================================================= */}
      {activeTab === "decToTime" && (
        <div className="space-y-6">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
              Dezimalstunden eingeben (z. B. 7,50 oder 8,25):
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={decimalInput}
                onChange={(e) => {
                  setDecimalInput(e.target.value);
                  handleConvertDecimalToTime(e.target.value);
                }}
                placeholder="z. B. 8,25"
                className="flex-1 h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none"
              />
              <button
                type="button"
                onClick={() => handleConvertDecimalToTime(decimalInput)}
                className="px-5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition-colors cursor-pointer"
              >
                Umrechnen
              </button>
            </div>

            {decimalError && (
              <p className="text-xs text-rose-600 mt-1.5 font-medium">{decimalError}</p>
            )}

            <div className="flex flex-wrap gap-1.5 mt-2">
              {["1,25", "2,50", "4,75", "7,50", "8,00", "8,25", "8,50", "8,75"].map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => {
                    setDecimalInput(preset);
                    handleConvertDecimalToTime(preset);
                  }}
                  className="px-2.5 py-1 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-medium cursor-pointer"
                >
                  {preset} Std.
                </button>
              ))}
            </div>
          </div>

          {decimalResult && (
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900 to-slate-900 text-white shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider text-blue-200 font-bold">
                  Ergebnis: Stunden &amp; Minuten
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(decimalResult.formatted)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Kopiert!" : "Kopieren"}</span>
                </button>
              </div>

              <div className="text-4xl font-extrabold tracking-tight">
                {decimalResult.formatted}
              </div>
              <div className="text-blue-200 text-sm font-semibold mt-1">
                Uhrzeitformat: {decimalResult.hhmm}
              </div>
              <div className="text-blue-200 text-xs mt-2 font-mono">
                {decimalResult.formula}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Comparison Reference Table */}
      <div className="pt-4 border-t border-slate-100">
        <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
          <span>Umrechnungstabelle: Stunden &amp; Minuten in Dezimalstunden</span>
        </h3>

        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
              <tr>
                <th className="px-4 py-2.5">Stunden &amp; Minuten</th>
                <th className="px-4 py-2.5">Dezimalstunden</th>
                <th className="px-4 py-2.5">Rechenweg</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono text-xs">
              {comparisonRows.map((row, idx) => (
                <tr key={row.time} className={idx % 2 === 1 ? "bg-slate-50/50" : ""}>
                  <td className="px-4 py-2 font-sans font-bold text-slate-800">{row.time}</td>
                  <td className="px-4 py-2 font-bold text-blue-700">{row.dec}</td>
                  <td className="px-4 py-2 text-slate-500 font-sans">{row.calc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
