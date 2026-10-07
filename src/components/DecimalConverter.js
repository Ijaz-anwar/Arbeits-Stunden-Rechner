"use client";

import { useState } from "react";
import { ArrowLeftRight, ArrowRight, Clock, HelpCircle, Check } from "lucide-react";

export default function DecimalConverter({ className = "" }) {
  // Time -> Decimal state
  const [timeInput, setTimeInput] = useState("8:30");
  const [timeResult, setTimeResult] = useState({
    decimal: "8,50",
    formula: "8 Std. + 30/60 = 8,50 Std.",
  });
  const [timeError, setTimeError] = useState("");

  // Decimal -> Time state
  const [decimalInput, setDecimalInput] = useState("8,50");
  const [decimalResult, setDecimalResult] = useState({
    formatted: "8 Std. 30 Min.",
    hhmm: "08:30",
    formula: "8 Std. + (0,50 × 60 = 30 Min.)",
  });
  const [decimalError, setDecimalError] = useState("");

  // Handler: Time to Decimal
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
      setTimeError("Bitte Format wie 8:30 oder 7:45 eingeben");
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
      formula: `${hours} Std. + ${minutes}/60 = ${decFormatted} Std.`,
    });
  };

  // Handler: Decimal to Time
  const handleConvertDecimalToTime = (val = decimalInput) => {
    setDecimalError("");
    if (!val || !val.trim()) {
      setDecimalResult(null);
      return;
    }

    const clean = val.trim().replace(/,/g, ".");
    const num = parseFloat(clean);
    if (isNaN(num) || num < 0) {
      setDecimalError("Bitte eine gültige Zahl eingeben (z.B. 8,50)");
      return;
    }

    const hours = Math.floor(num);
    const frac = num - hours;
    const minutes = Math.round(frac * 60);

    // Roll over if minutes rounds to 60
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

  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7 flex flex-col justify-between ${className}`}
      aria-label="Dezimalstunden und Industrieminuten Umrechner"
    >
      <div>
        {/* Title */}
        <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 mb-5">
          <div className="p-2 bg-blue-50 text-blue-700 rounded-xl">
            <ArrowLeftRight className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
              Dezimalstunden &amp; Industrieminuten
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Schnelle Umrechnung für Zeiterfassung &amp; Lohnabrechnung
            </p>
          </div>
        </div>

        {/* 1. Time -> Decimal */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-slate-700 mb-2">
            Uhrzeit → Dezimalstunden (Industrieminuten)
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={timeInput}
                onChange={(e) => {
                  setTimeInput(e.target.value);
                  handleConvertTimeToDecimal(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleConvertTimeToDecimal(timeInput);
                }}
                placeholder="z.B. 8:30"
                className="w-full h-11 px-3.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400"
              />
            </div>
            <button
              type="button"
              onClick={() => handleConvertTimeToDecimal(timeInput)}
              className="h-11 px-4 bg-[#0b4870] hover:bg-[#083552] text-white rounded-xl font-bold flex items-center justify-center transition-colors cursor-pointer shrink-0"
              title="In Dezimalstunden umrechnen"
              aria-label="In Dezimalstunden umrechnen"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {timeError && (
            <p className="mt-1.5 text-xs text-rose-600 font-medium">{timeError}</p>
          )}

          {timeResult && (
            <div className="mt-2.5 p-2.5 bg-blue-50/70 border border-blue-100 rounded-xl flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700">Ergebnis:</span>
              <span className="font-bold text-blue-900 text-sm">
                {timeResult.decimal} <span className="text-xs font-medium text-blue-700">Industriestunden</span>
              </span>
            </div>
          )}
        </div>

        {/* 2. Decimal -> Time */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-slate-700 mb-2">
            Dezimalstunden → Uhrzeit umrechnen
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={decimalInput}
                onChange={(e) => {
                  setDecimalInput(e.target.value);
                  handleConvertDecimalToTime(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleConvertDecimalToTime(decimalInput);
                }}
                placeholder="z.B. 8,50"
                className="w-full h-11 px-3.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all placeholder:text-slate-400"
              />
            </div>
            <button
              type="button"
              onClick={() => handleConvertDecimalToTime(decimalInput)}
              className="h-11 px-4 bg-[#0b4870] hover:bg-[#083552] text-white rounded-xl font-bold flex items-center justify-center transition-colors cursor-pointer shrink-0"
              title="In Uhrzeit umrechnen"
              aria-label="In Uhrzeit umrechnen"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {decimalError && (
            <p className="mt-1.5 text-xs text-rose-600 font-medium">{decimalError}</p>
          )}

          {decimalResult && (
            <div className="mt-2.5 p-2.5 bg-emerald-50/70 border border-emerald-100 rounded-xl flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-700">Ergebnis:</span>
              <div className="text-right">
                <span className="font-bold text-emerald-900 text-sm">
                  {decimalResult.hhmm} Uhr
                </span>
                <span className="text-[11px] text-emerald-700 block">
                  ({decimalResult.formatted})
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quick Reference Chips */}
      <div className="pt-4 border-t border-slate-100">
        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-2">
          Typische Industrieminuten-Werte:
        </span>
        <div className="grid grid-cols-2 gap-1.5 text-xs">
          <button
            type="button"
            onClick={() => {
              setTimeInput("0:15");
              handleConvertTimeToDecimal("0:15");
            }}
            className="p-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/70 rounded-lg text-slate-700 text-center transition-colors cursor-pointer"
          >
            <strong>15 Min.</strong> = 0,25 Std.
          </button>
          <button
            type="button"
            onClick={() => {
              setTimeInput("0:30");
              handleConvertTimeToDecimal("0:30");
            }}
            className="p-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/70 rounded-lg text-slate-700 text-center transition-colors cursor-pointer"
          >
            <strong>30 Min.</strong> = 0,50 Std.
          </button>
          <button
            type="button"
            onClick={() => {
              setTimeInput("0:45");
              handleConvertTimeToDecimal("0:45");
            }}
            className="p-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/70 rounded-lg text-slate-700 text-center transition-colors cursor-pointer"
          >
            <strong>45 Min.</strong> = 0,75 Std.
          </button>
          <button
            type="button"
            onClick={() => {
              setTimeInput("1:00");
              handleConvertTimeToDecimal("1:00");
            }}
            className="p-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200/70 rounded-lg text-slate-700 text-center transition-colors cursor-pointer"
          >
            <strong>60 Min.</strong> = 1,00 Std.
          </button>
        </div>
      </div>
    </div>
  );
}
