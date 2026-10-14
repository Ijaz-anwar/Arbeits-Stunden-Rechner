"use client";

import { useState } from "react";
import {
  Clock,
  Coffee,
  RotateCcw,
  Sparkles,
  Check,
  Copy,
  Plus,
  Trash2,
  Euro,
  DollarSign,
  AlertCircle,
  HelpCircle,
  ArrowRightLeft,
  Percent,
} from "lucide-react";
import { calculateWorkingTime, formatDecimalHours } from "@/lib/calculator";
import TimePicker from "@/components/TimePicker";

export default function StundenMinutenCalculator() {
  const [activeTab, setActiveTab] = useState("worktime"); // "worktime" | "converter"

  // -------------------------------------------------------------
  // TAB 1: WORKTIME CALCULATOR (VON - BIS)
  // -------------------------------------------------------------
  const [start, setStart] = useState("08:00");
  const [end, setEnd] = useState("16:30");
  const [mainBreak, setMainBreak] = useState("30");
  const [additionalBreaks, setAdditionalBreaks] = useState([]);
  const [hourlyRate, setHourlyRate] = useState("");
  const [currency, setCurrency] = useState("€");
  const [showPay, setShowPay] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const breakPresets = [0, 15, 30, 45, 60];

  const handleAddBreak = () => {
    setAdditionalBreaks((prev) => [
      ...prev,
      {
        id: `break-${Date.now()}`,
        label: `Pause ${prev.length + 2}`,
        minutes: "15",
      },
    ]);
  };

  const handleRemoveBreak = (id) => {
    setAdditionalBreaks((prev) => {
      const filtered = prev.filter((b) => b.id !== id);
      return filtered.map((b, idx) => ({
        ...b,
        label: `Pause ${idx + 2}`,
      }));
    });
  };

  const handleCalculate = (e) => {
    if (e) e.preventDefault();
    setError("");

    const res = calculateWorkingTime(
      start,
      end,
      mainBreak,
      additionalBreaks,
      showPay ? hourlyRate : "",
      "de"
    );

    if (res.error) {
      setError(res.error);
      setResult(null);
      return;
    }

    setResult({ ...res, currency });
  };

  const handleReset = () => {
    setStart("08:00");
    setEnd("16:30");
    setMainBreak("30");
    setAdditionalBreaks([]);
    setHourlyRate("");
    setShowPay(false);
    setError("");
    setResult(null);
  };

  const handleCopy = () => {
    if (!result) return;
    const text = [
      "=== STUNDEN MINUTEN BERECHNUNG ===",
      `Arbeitsbeginn: ${result.startTime} Uhr`,
      `Arbeitsende: ${result.endTime} Uhr ${result.isOverMidnight ? "(Folgetag)" : ""}`,
      `Bruttoanwesenheit: ${result.grossDuration}`,
      `Pausenzeit: ${result.breakDuration}`,
      `Nettoarbeitszeit: ${result.netDuration} (${result.decimalHours} Dezimalstunden)`,
      result.earnings ? `Bruttolohn: ${result.earnings} ${currency}` : null,
      "\nBerechnet auf Arbeitsstundenrechner.de",
    ]
      .filter(Boolean)
      .join("\n");

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // -------------------------------------------------------------
  // TAB 2: QUICK CONVERTER (HOURS <-> MINUTES <-> DECIMAL)
  // -------------------------------------------------------------
  const [convMode, setConvMode] = useState("hoursToMin"); // "hoursToMin" | "minToHours" | "timeToDec"
  const [inputHours, setInputHours] = useState("3");
  const [inputMinutes, setInputMinutes] = useState("180");
  const [decH, setDecH] = useState("5");
  const [decM, setDecM] = useState("45");
  const [convCopied, setConvCopied] = useState(false);

  // Hours -> Min
  const numInputH = parseFloat(String(inputHours).replace(",", ".")) || 0;
  const resFromHoursMins = Math.round(numInputH * 60);
  const resFromHoursSecs = resFromHoursMins * 60;

  // Min -> Hours
  const numInputM = parseFloat(String(inputMinutes).replace(",", ".")) || 0;
  const resHoursFull = Math.floor(numInputM / 60);
  const resRemainM = Math.round(numInputM % 60);
  const resDecHours = (numInputM / 60).toFixed(2).replace(".", ",");

  // Time -> Dec
  const numDecH = parseInt(decH, 10) || 0;
  const numDecM = parseInt(decM, 10) || 0;
  const resCombinedDec = (numDecH + numDecM / 60).toFixed(2).replace(".", ",");
  const resTotalMins = numDecH * 60 + numDecM;

  const handleCopyConv = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setConvCopied(true);
      setTimeout(() => setConvCopied(false), 2000);
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-700 mb-2">
            <Clock className="w-3.5 h-3.5" />
            <span>Zeitintervall &amp; Umrechner</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Stunden &amp; Minuten Rechner
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Arbeitszeit von Beginn bis Ende berechnen oder Stunden, Minuten und Dezimalwerte umwandeln.
          </p>
        </div>

        {activeTab === "worktime" && (
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors self-start sm:self-center cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Zurücksetzen</span>
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="flex bg-slate-100 p-1 rounded-xl mt-6 mb-6">
        <button
          type="button"
          onClick={() => setActiveTab("worktime")}
          className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors cursor-pointer ${
            activeTab === "worktime"
              ? "bg-blue-600 text-white shadow-xs"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Arbeitszeit berechnen (Von – Bis)
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("converter")}
          className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors cursor-pointer ${
            activeTab === "converter"
              ? "bg-blue-600 text-white shadow-xs"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Stunden ⇄ Minuten Schnellrechner
        </button>
      </div>

      {/* ========================================================= */}
      {/* TAB 1: WORKTIME CALCULATOR                                */}
      {/* ========================================================= */}
      {activeTab === "worktime" && (
        <>
          <form onSubmit={handleCalculate} className="space-y-6">
            {/* Error notification */}
            {error && (
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            {/* Start & End Times */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <TimePicker
                id="start-time"
                label="Arbeitsbeginn (Kommen)"
                value={start}
                onChange={setStart}
                presetOptions={["07:00", "07:30", "08:00", "08:30", "09:00", "22:00"]}
                required
              />

              <TimePicker
                id="end-time"
                label="Arbeitsende (Gehen)"
                value={end}
                onChange={setEnd}
                presetOptions={["16:00", "16:30", "17:00", "17:30", "18:00", "06:00"]}
                required
              />
            </div>

            {/* Break Input */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                  <Coffee className="w-3.5 h-3.5 text-slate-500" />
                  <span>Pause 1 (Minuten)</span>
                </label>
                <div className="flex gap-1">
                  {breakPresets.map((mins) => (
                    <button
                      key={mins}
                      type="button"
                      onClick={() => setMainBreak(String(mins))}
                      className={`px-2 py-0.5 text-xs rounded-md font-medium transition-colors cursor-pointer ${
                        mainBreak === String(mins)
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {mins} Min.
                    </button>
                  ))}
                </div>
              </div>

              <input
                type="number"
                min="0"
                max="360"
                step="5"
                value={mainBreak}
                onChange={(e) => setMainBreak(e.target.value)}
                placeholder="z. B. 30"
                className="w-full h-11 px-3.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-semibold focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all shadow-xs"
              />
            </div>

            {/* Additional Breaks */}
            {additionalBreaks.map((b) => (
              <div key={b.id} className="flex items-center gap-3">
                <span className="w-24 text-xs font-semibold text-slate-600">{b.label}:</span>
                <input
                  type="number"
                  min="0"
                  max="240"
                  step="5"
                  value={b.minutes}
                  onChange={(e) =>
                    setAdditionalBreaks((prev) =>
                      prev.map((item) => (item.id === b.id ? { ...item, minutes: e.target.value } : item))
                    )
                  }
                  className="flex-1 h-10 px-3 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:border-blue-600 outline-none"
                  placeholder="Minuten"
                />
                <span className="text-xs text-slate-400">Min.</span>
                <button
                  type="button"
                  onClick={() => handleRemoveBreak(b.id)}
                  className="p-2 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={handleAddBreak}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Weitere Pause hinzufügen</span>
            </button>

            {/* Optional Hourly Rate Toggle */}
            <div className="pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowPay(!showPay)}
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
              >
                <span>{showPay ? "− Stundenlohn ausblenden" : "+ Optional: Stundenlohn berechnen"}</span>
              </button>

              {showPay && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Stundenlohn (€/h)
                    </label>
                    <input
                      type="text"
                      placeholder="z. B. 18,50"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(e.target.value)}
                      className="w-full h-10 px-3 rounded-lg border border-slate-300 bg-white text-sm font-semibold text-slate-900 focus:border-blue-600 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Währung</label>
                    <div className="flex gap-2">
                      {["€", "CHF", "$"].map((curr) => (
                        <button
                          key={curr}
                          type="button"
                          onClick={() => setCurrency(curr)}
                          className={`flex-1 h-10 rounded-lg font-bold text-xs transition-colors cursor-pointer ${
                            currency === curr
                              ? "bg-blue-600 text-white"
                              : "bg-white border border-slate-300 text-slate-700 hover:bg-slate-100"
                          }`}
                        >
                          {curr}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-sm text-sm sm:text-base flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Stunden &amp; Minuten berechnen</span>
            </button>
          </form>

          {/* Result Display */}
          {result && (
            <div className="mt-8 pt-6 border-t border-slate-100 space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0b4870] to-slate-900 text-white shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-wider text-blue-200 font-bold">
                    Ergebnis: Nettoarbeitszeit
                  </span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Kopiert!" : "Ergebnis kopieren"}</span>
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                      {result.netDuration}
                    </div>
                    <div className="text-blue-200 text-sm font-semibold mt-1">
                      = {result.decimalHours} Dezimalstunden (für Stundenzettel)
                    </div>
                  </div>

                  {result.earnings && (
                    <div className="sm:text-right bg-white/10 p-3 rounded-xl border border-white/10">
                      <span className="text-xs text-blue-200 block">Geschätzter Bruttolohn:</span>
                      <span className="text-2xl font-bold text-emerald-400">
                        {result.earnings} {result.currency}
                      </span>
                    </div>
                  )}
                </div>

                {/* Breakdown Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-4 border-t border-white/10 text-xs">
                  <div>
                    <span className="text-blue-300 block">Bruttoanwesenheit:</span>
                    <span className="font-bold text-white text-sm">{result.grossDuration}</span>
                  </div>
                  <div>
                    <span className="text-blue-300 block">Gesamte Pausen:</span>
                    <span className="font-bold text-white text-sm">{result.breakDuration}</span>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span className="text-blue-300 block">Schichtverlauf:</span>
                    <span className="font-bold text-white text-sm">
                      {result.startTime} – {result.endTime} Uhr
                      {result.isOverMidnight && " (Nachtschicht)"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Statutory Break Reminder Note */}
              {result.breakInfo && (
                <div
                  className={`p-4 rounded-xl text-xs sm:text-sm flex items-start gap-2.5 ${
                    result.breakInfo.status === "warning"
                      ? "bg-amber-50 border border-amber-200 text-amber-900"
                      : "bg-emerald-50 border border-emerald-200 text-emerald-900"
                  }`}
                >
                  <HelpCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{result.breakInfo.message}</span>
                </div>
              )}
            </div>
          )}
        </>
      )}

      {/* ========================================================= */}
      {/* TAB 2: QUICK CONVERTER (HOURS <-> MINUTES <-> DECIMAL)    */}
      {/* ========================================================= */}
      {activeTab === "converter" && (
        <div className="space-y-6">
          {/* Sub Mode Switch */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setConvMode("hoursToMin")}
              className={`p-2.5 text-xs font-bold rounded-xl border text-center transition-colors cursor-pointer ${
                convMode === "hoursToMin"
                  ? "bg-blue-50 border-blue-600 text-blue-700"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              1. Stunden in Minuten
            </button>
            <button
              type="button"
              onClick={() => setConvMode("minToHours")}
              className={`p-2.5 text-xs font-bold rounded-xl border text-center transition-colors cursor-pointer ${
                convMode === "minToHours"
                  ? "bg-blue-50 border-blue-600 text-blue-700"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              2. Minuten in Stunden
            </button>
            <button
              type="button"
              onClick={() => setConvMode("timeToDec")}
              className={`p-2.5 text-xs font-bold rounded-xl border text-center transition-colors cursor-pointer ${
                convMode === "timeToDec"
                  ? "bg-blue-50 border-blue-600 text-blue-700"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
              }`}
            >
              3. In Dezimalstunden
            </button>
          </div>

          {/* Sub Mode 1: Hours to Min */}
          {convMode === "hoursToMin" && (
            <div className="space-y-5">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                  Stunden eingeben (auch Dezimalwerte wie 2,5):
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputHours}
                    onChange={(e) => setInputHours(e.target.value)}
                    placeholder="3"
                    className="flex-1 h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-blue-600 outline-none"
                  />
                  <div className="flex items-center px-4 bg-slate-100 rounded-xl text-slate-600 font-bold text-sm">
                    Stunden
                  </div>
                </div>
                <div className="flex gap-1.5 mt-2">
                  {["0.5", "1.5", "2.5", "3", "4", "8"].map((h) => (
                    <button
                      key={h}
                      type="button"
                      onClick={() => setInputHours(h)}
                      className="px-2.5 py-1 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-medium cursor-pointer"
                    >
                      {h} h
                    </button>
                  ))}
                </div>
              </div>

              {/* Result Hero */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0b4870] to-slate-900 text-white shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-wider text-blue-200 font-bold">
                    Ergebnis ({numInputH} Stunden × 60)
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopyConv(`${numInputH} Stunden = ${resFromHoursMins} Minuten`)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
                  >
                    {convCopied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{convCopied ? "Kopiert!" : "Kopieren"}</span>
                  </button>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  {resFromHoursMins} Minuten
                </div>
                <div className="text-xs text-blue-200 mt-2">
                  Entspricht <strong>{resFromHoursSecs.toLocaleString("de-DE")} Sekunden</strong>.
                </div>
              </div>
            </div>
          )}

          {/* Sub Mode 2: Min to Hours */}
          {convMode === "minToHours" && (
            <div className="space-y-5">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                  Minuten eingeben (z. B. 90 oder 180):
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputMinutes}
                    onChange={(e) => setInputMinutes(e.target.value)}
                    placeholder="180"
                    className="flex-1 h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-blue-600 outline-none"
                  />
                  <div className="flex items-center px-4 bg-slate-100 rounded-xl text-slate-600 font-bold text-sm">
                    Minuten
                  </div>
                </div>
                <div className="flex gap-1.5 mt-2">
                  {["45", "75", "90", "120", "150", "180", "480"].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setInputMinutes(m)}
                      className="px-2.5 py-1 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-medium cursor-pointer"
                    >
                      {m} Min.
                    </button>
                  ))}
                </div>
              </div>

              {/* Result Hero */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0b4870] to-slate-900 text-white shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-wider text-blue-200 font-bold">
                    Ergebnis ({numInputM} Minuten ÷ 60)
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      handleCopyConv(
                        `${numInputM} Minuten = ${resHoursFull} Std. ${resRemainM} Min. (${resDecHours} Dezimalstunden)`
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
                  >
                    {convCopied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{convCopied ? "Kopiert!" : "Kopieren"}</span>
                  </button>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  {resHoursFull} Std. {resRemainM > 0 ? `${resRemainM} Min.` : "00 Min."}
                </div>
                <div className="text-blue-200 text-sm font-semibold mt-1">
                  = {resDecHours} Dezimalstunden
                </div>
              </div>
            </div>
          )}

          {/* Sub Mode 3: Time to Dec */}
          {convMode === "timeToDec" && (
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                    Stunden:
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={decH}
                    onChange={(e) => setDecH(e.target.value)}
                    placeholder="5"
                    className="w-full h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-blue-600 outline-none"
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
                    value={decM}
                    onChange={(e) => setDecM(e.target.value)}
                    placeholder="45"
                    className="w-full h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-blue-600 outline-none"
                  />
                </div>
              </div>

              {/* Result Hero */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0b4870] to-slate-900 text-white shadow-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-wider text-blue-200 font-bold">
                    Dezimalstunden ({numDecH} + {numDecM}/60)
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      handleCopyConv(
                        `${numDecH} Std. ${numDecM} Min. = ${resCombinedDec} Dezimalstunden (${resTotalMins} Min.)`
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
                  >
                    {convCopied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{convCopied ? "Kopiert!" : "Kopieren"}</span>
                  </button>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-emerald-400">
                  {resCombinedDec} Dezimalstunden
                </div>
                <div className="text-xs text-blue-200 mt-2">
                  Entspricht <strong>{resTotalMins} Gesamtminuten</strong>.
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
