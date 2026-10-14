"use client";

import { useState } from "react";
import {
  Clock,
  ArrowRightLeft,
  Calendar,
  Sparkles,
  RotateCcw,
  Check,
  Copy,
  ArrowRight,
  HelpCircle,
  PlusCircle,
  Coffee,
} from "lucide-react";

export default function ZeitRechnerStunden() {
  const [activeTab, setActiveTab] = useState("diff"); // "diff" | "convert" | "add"

  // -------------------------------------------------------------
  // TAB 1: ZEITDIFFERENZ & ARBEITSZEIT (UHRZEIT 1 BIS UHRZEIT 2)
  // -------------------------------------------------------------
  const [diffStart, setDiffStart] = useState("08:15");
  const [diffEnd, setDiffEnd] = useState("16:45");
  const [diffPause, setDiffPause] = useState("30");
  const [diffCopied, setDiffCopied] = useState(false);

  // Calculate Difference live
  const calculateDiff = () => {
    const [h1, m1] = diffStart.split(":").map(Number);
    const [h2, m2] = diffEnd.split(":").map(Number);
    const pauseM = parseInt(diffPause, 10) || 0;

    if (isNaN(h1) || isNaN(m1) || isNaN(h2) || isNaN(m2)) return null;

    let startMins = h1 * 60 + m1;
    let endMins = h2 * 60 + m2;
    let isNight = false;

    let grossDelta = endMins - startMins;
    if (grossDelta < 0) {
      grossDelta = 1440 - startMins + endMins;
      isNight = true;
    }

    const netDelta = Math.max(0, grossDelta - pauseM);
    const grossHrs = Math.floor(grossDelta / 60);
    const grossMins = grossDelta % 60;

    const netHrs = Math.floor(netDelta / 60);
    const netMins = netDelta % 60;
    const netDec = (netDelta / 60).toFixed(2).replace(".", ",");

    return {
      grossDelta,
      grossHrs,
      grossMins,
      grossFormatted: `${grossHrs} Std. ${String(grossMins).padStart(2, "0")} Min.`,
      pauseM,
      netDelta,
      netHrs,
      netMins,
      netFormatted: `${netHrs} Std. ${String(netMins).padStart(2, "0")} Min.`,
      netDecimal: netDec,
      seconds: netDelta * 60,
      isNight,
    };
  };

  const diffResult = calculateDiff();

  const handleCopyDiff = () => {
    if (!diffResult) return;
    const lines = [
      "=== ZEITDIFFERENZ BERECHNUNG ===",
      `Startzeit: ${diffStart} Uhr`,
      `Endzeit: ${diffEnd} Uhr ${diffResult.isNight ? "(Folgetag)" : ""}`,
      `Gesamte Zeitspanne: ${diffResult.grossFormatted}`,
      diffResult.pauseM > 0 ? `Pausenabzug: -${diffResult.pauseM} Minuten` : null,
      `Nettoarbeitszeit: ${diffResult.netFormatted} (${diffResult.netDecimal} Dezimalstunden)`,
      "\nBerechnet auf Arbeitsstundenrechner.de",
    ]
      .filter(Boolean)
      .join("\n");

    navigator.clipboard.writeText(lines).then(() => {
      setDiffCopied(true);
      setTimeout(() => setDiffCopied(false), 2000);
    });
  };

  // -------------------------------------------------------------
  // TAB 2: ZEITEINHEITEN UMRECHNEN
  // -------------------------------------------------------------
  const [calcDirection, setCalcDirection] = useState("minToHours"); // "minToHours" | "hoursToMin"
  const [minutesInput, setMinutesInput] = useState("180");
  const [hoursInput, setHoursInput] = useState("4");
  const [convCopied, setConvCopied] = useState(false);

  // Min -> Hours calculation
  const numMinutes = parseFloat(String(minutesInput).replace(/,/g, ".")) || 0;
  const convertedHours = Math.floor(numMinutes / 60);
  const convertedRemainingMinutes = Math.round(numMinutes % 60);
  const convertedDecimalHours = (numMinutes / 60).toFixed(2).replace(".", ",");

  // Hours -> Min calculation
  const numHours = parseFloat(String(hoursInput).replace(/,/g, ".")) || 0;
  const convertedTotalMinutes = Math.round(numHours * 60);
  const convertedTotalSeconds = convertedTotalMinutes * 60;

  const handleCopyConv = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setConvCopied(true);
      setTimeout(() => setConvCopied(false), 2000);
    });
  };

  // -------------------------------------------------------------
  // TAB 3: ZEITEN ADDIEREN
  // -------------------------------------------------------------
  const [addTime1H, setAddTime1H] = useState("3");
  const [addTime1M, setAddTime1M] = useState("45");
  const [addTime2H, setAddTime2H] = useState("4");
  const [addTime2M, setAddTime2M] = useState("30");
  const [addCopied, setAddCopied] = useState(false);

  const t1M = (parseInt(addTime1H, 10) || 0) * 60 + (parseInt(addTime1M, 10) || 0);
  const t2M = (parseInt(addTime2H, 10) || 0) * 60 + (parseInt(addTime2M, 10) || 0);
  const totalAddedM = t1M + t2M;
  const resAddH = Math.floor(totalAddedM / 60);
  const resAddM = totalAddedM % 60;
  const resAddDec = (totalAddedM / 60).toFixed(2).replace(".", ",");

  const handleCopyAdd = () => {
    const text = `${addTime1H} Std. ${addTime1M} Min. + ${addTime2H} Std. ${addTime2M} Min. = ${resAddH} Std. ${resAddM} Min. (${resAddDec} Dezimalstunden)`;
    navigator.clipboard.writeText(text).then(() => {
      setAddCopied(true);
      setTimeout(() => setAddCopied(false), 2000);
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-700 mb-2">
            <ArrowRightLeft className="w-3.5 h-3.5" />
            <span>Multifunktionaler Zeitrechner</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Zeit Rechner Stunden
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Zeitdifferenz ermitteln, Pausen abziehen, Zeiten addieren oder Zeiteinheiten umrechnen.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="inline-flex p-1 bg-slate-100 rounded-xl gap-1 self-start sm:self-auto flex-wrap">
          <button
            type="button"
            onClick={() => setActiveTab("diff")}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              activeTab === "diff"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Zeitdifferenz &amp; Pause
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("convert")}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              activeTab === "convert"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Zeiteinheiten umrechnen
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("add")}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              activeTab === "add"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Zeiten addieren
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 1. TAB: ZEITDIFFERENZ & PAUSE                             */}
      {/* ========================================================= */}
      {activeTab === "diff" && (
        <div className="mt-6 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                Startzeit (Uhrzeit 1):
              </label>
              <input
                type="time"
                value={diffStart}
                onChange={(e) => setDiffStart(e.target.value)}
                className="w-full h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-emerald-600 outline-none"
              />
              <div className="flex gap-1.5 mt-2">
                {["07:30", "08:00", "08:15", "09:20", "22:00"].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setDiffStart(t)}
                    className="px-2 py-0.5 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded font-medium cursor-pointer"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                Endzeit (Uhrzeit 2):
              </label>
              <input
                type="time"
                value={diffEnd}
                onChange={(e) => setDiffEnd(e.target.value)}
                className="w-full h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-emerald-600 outline-none"
              />
              <div className="flex gap-1.5 mt-2">
                {["14:50", "16:00", "16:30", "16:45", "06:00"].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setDiffEnd(t)}
                    className="px-2 py-0.5 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded font-medium cursor-pointer"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Pause deduction input */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <Coffee className="w-3.5 h-3.5 text-slate-500" />
                <span>Pausenzeit abziehen (Minuten):</span>
              </label>
              <div className="flex gap-1">
                {[0, 15, 30, 45, 60].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setDiffPause(String(m))}
                    className={`px-2 py-0.5 text-xs rounded font-medium transition-colors cursor-pointer ${
                      diffPause === String(m)
                        ? "bg-emerald-600 text-white"
                        : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {m} Min.
                  </button>
                ))}
              </div>
            </div>
            <input
              type="number"
              min="0"
              max="360"
              step="5"
              value={diffPause}
              onChange={(e) => setDiffPause(e.target.value)}
              placeholder="0"
              className="w-full h-10 px-3.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm font-semibold focus:border-emerald-600 outline-none"
            />
          </div>

          {diffResult && (
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white shadow-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-wider text-emerald-300 font-bold">
                  {diffResult.pauseM > 0 ? "Ergebnis: Nettoarbeitszeit" : "Ergebnis: Zeitdifferenz"}
                </span>
                <button
                  type="button"
                  onClick={handleCopyDiff}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
                >
                  {diffCopied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{diffCopied ? "Kopiert!" : "Kopieren"}</span>
                </button>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                {diffResult.netFormatted}
              </div>
              <div className="text-emerald-300 text-sm font-semibold mt-1">
                = {diffResult.netDecimal} Dezimalstunden ({diffResult.netDelta} Netto-Minuten)
              </div>

              {diffResult.isNight && (
                <div className="mt-3 text-xs bg-amber-500/20 border border-amber-400/30 px-3 py-1.5 rounded-lg inline-block text-amber-300 font-medium">
                  Schichtverlauf über Mitternacht erkannt (Folgetag)
                </div>
              )}

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-white/10 text-xs">
                <div>
                  <span className="text-emerald-300 block">Gesamte Zeitspanne:</span>
                  <span className="font-bold text-white text-sm">{diffResult.grossFormatted}</span>
                </div>
                <div>
                  <span className="text-emerald-300 block">Abgezogene Pause:</span>
                  <span className="font-bold text-white text-sm">{diffResult.pauseM} Minuten</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-emerald-300 block">Sekunden:</span>
                  <span className="font-bold text-white text-sm">
                    {diffResult.seconds.toLocaleString("de-DE")} Sek.
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================= */}
      {/* 2. TAB: ZEITEINHEITEN UMRECHNEN                           */}
      {/* ========================================================= */}
      {activeTab === "convert" && (
        <div className="mt-6 space-y-6">
          <div className="flex gap-2 p-1 bg-slate-50 border border-slate-200 rounded-xl">
            <button
              type="button"
              onClick={() => setCalcDirection("minToHours")}
              className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors cursor-pointer ${
                calcDirection === "minToHours"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              Minuten in Stunden
            </button>
            <button
              type="button"
              onClick={() => setCalcDirection("hoursToMin")}
              className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors cursor-pointer ${
                calcDirection === "hoursToMin"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              Stunden in Minuten
            </button>
          </div>

          {/* Sub Mode 1: Minuten in Stunden */}
          {calcDirection === "minToHours" && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                  Minuten eingeben:
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={minutesInput}
                    onChange={(e) => setMinutesInput(e.target.value)}
                    placeholder="z. B. 180"
                    className="flex-1 h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-emerald-600 outline-none"
                  />
                  <div className="flex items-center px-4 bg-slate-100 rounded-xl text-slate-600 font-bold text-sm">
                    Minuten
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-2">
                  {["15", "30", "45", "75", "90", "135", "180", "240", "480"].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMinutesInput(m)}
                      className="px-2.5 py-1 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-medium cursor-pointer"
                    >
                      {m} Min.
                    </button>
                  ))}
                </div>
              </div>

              {/* Result Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-wider text-emerald-300 font-bold">
                    Ergebnis ({numMinutes} Minuten ÷ 60):
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      handleCopyConv(
                        `${numMinutes} Minuten = ${convertedHours} Std. ${convertedRemainingMinutes} Min. (${convertedDecimalHours} Dezimalstunden)`
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
                  >
                    {convCopied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{convCopied ? "Kopiert!" : "Kopieren"}</span>
                  </button>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  {convertedHours} Std. {convertedRemainingMinutes > 0 ? `${convertedRemainingMinutes} Min.` : "00 Min."}
                </div>
                <div className="text-emerald-200 text-sm font-semibold mt-1">
                  = {convertedDecimalHours} Dezimalstunden
                </div>
              </div>
            </div>
          )}

          {/* Sub Mode 2: Stunden in Minuten */}
          {calcDirection === "hoursToMin" && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                  Stunden eingeben (auch Dezimalwerte wie 1,5 oder 4):
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={hoursInput}
                    onChange={(e) => setHoursInput(e.target.value)}
                    placeholder="z. B. 4"
                    className="flex-1 h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-emerald-600 outline-none"
                  />
                  <div className="flex items-center px-4 bg-slate-100 rounded-xl text-slate-600 font-bold text-sm">
                    Stunden
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-2">
                  {["0.5", "1", "1.5", "2", "2.25", "4", "7.5", "8"].map((h) => (
                    <button
                      key={h}
                      type="button"
                      onClick={() => setHoursInput(h)}
                      className="px-2.5 py-1 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-medium cursor-pointer"
                    >
                      {h} Std.
                    </button>
                  ))}
                </div>
              </div>

              {/* Result Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-wider text-emerald-300 font-bold">
                    Ergebnis ({numHours} Stunden × 60):
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      handleCopyConv(`${numHours} Stunden = ${convertedTotalMinutes} Minuten`)
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
                  >
                    {convCopied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{convCopied ? "Kopiert!" : "Kopieren"}</span>
                  </button>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  {convertedTotalMinutes.toLocaleString("de-DE")} Minuten
                </div>
                <div className="text-emerald-200 text-sm font-semibold mt-1">
                  = {convertedTotalSeconds.toLocaleString("de-DE")} Sekunden
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================= */}
      {/* 3. TAB: ZEITEN ADDIEREN (MEHRERE INTERVALLE)              */}
      {/* ========================================================= */}
      {activeTab === "add" && (
        <div className="mt-6 space-y-6">
          <p className="text-xs sm:text-sm text-slate-600">
            Fasse mehrere Zeitintervalle schnell zusammen (z. B. Vormittags- und Nachmittagsschicht):
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-2">
                1. Zeitabschnitt:
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  min="0"
                  value={addTime1H}
                  onChange={(e) => setAddTime1H(e.target.value)}
                  placeholder="3"
                  className="flex-1 h-11 px-3 rounded-lg border border-slate-300 bg-white font-semibold text-sm"
                />
                <span className="self-center text-xs text-slate-500 font-medium">Std.</span>
                <input
                  type="number"
                  min="0"
                  max="59"
                  value={addTime1M}
                  onChange={(e) => setAddTime1M(e.target.value)}
                  placeholder="45"
                  className="flex-1 h-11 px-3 rounded-lg border border-slate-300 bg-white font-semibold text-sm"
                />
                <span className="self-center text-xs text-slate-500 font-medium">Min.</span>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-2">
                2. Zeitabschnitt:
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  min="0"
                  value={addTime2H}
                  onChange={(e) => setAddTime2H(e.target.value)}
                  placeholder="4"
                  className="flex-1 h-11 px-3 rounded-lg border border-slate-300 bg-white font-semibold text-sm"
                />
                <span className="self-center text-xs text-slate-500 font-medium">Std.</span>
                <input
                  type="number"
                  min="0"
                  max="59"
                  value={addTime2M}
                  onChange={(e) => setAddTime2M(e.target.value)}
                  placeholder="30"
                  className="flex-1 h-11 px-3 rounded-lg border border-slate-300 bg-white font-semibold text-sm"
                />
                <span className="self-center text-xs text-slate-500 font-medium">Min.</span>
              </div>
            </div>
          </div>

          {/* Result Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 text-white shadow-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider text-emerald-300 font-bold">
                Summe der Zeitabschnitte:
              </span>
              <button
                type="button"
                onClick={handleCopyAdd}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                {addCopied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{addCopied ? "Kopiert!" : "Kopieren"}</span>
              </button>
            </div>

            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {resAddH} Std. {resAddM > 0 ? `${resAddM} Min.` : "00 Min."}
            </div>
            <div className="text-emerald-200 text-sm font-semibold mt-1">
              = {resAddDec} Dezimalstunden ({totalAddedM} Minuten gesamt)
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
