"use client";

import { useState } from "react";
import {
  Wallet,
  Sparkles,
  RotateCcw,
  Check,
  Copy,
  AlertCircle,
  HelpCircle,
  Clock,
  Euro,
  ShieldCheck,
} from "lucide-react";

export default function MinijobRechnerStunden() {
  const [activeTab, setActiveTab] = useState("maxHours"); // "maxHours" | "calcPay"

  // Mode 1: Max Hours
  const [earningsLimit, setEarningsLimit] = useState("603"); // 603 € Limit ab 2026
  const [wageRate, setWageRate] = useState("13.90"); // 13,90 € Mindestlohn ab 2026
  const [workdaysPerWeek, setWorkdaysPerWeek] = useState("2");

  // Mode 2: Calculate Pay from Hours
  const [workedHoursMonth, setWorkedHoursMonth] = useState("43.38");
  const [payRate, setPayRate] = useState("13.90");

  const [copied, setCopied] = useState(false);

  // Mode 1 Calculations
  const limitNum = parseFloat(String(earningsLimit).replace(/,/g, ".")) || 603;
  const wageNum = parseFloat(String(wageRate).replace(/,/g, ".")) || 13.9;
  const maxHoursMonth = wageNum > 0 ? limitNum / wageNum : 0;
  // Ø Wochenarbeitszeit über 52 Wochen / 12 Monate = 4,3333 Wochen/Monat
  const maxHoursWeek = (maxHoursMonth * 12) / 52;
  const daysNum = parseInt(workdaysPerWeek, 10) || 2;
  const maxHoursPerDay = daysNum > 0 ? maxHoursWeek / daysNum : 0;

  // Format hours & minutes
  const maxHoursInt = Math.floor(maxHoursMonth);
  const maxMinutesRem = Math.round((maxHoursMonth - maxHoursInt) * 60);

  // Mode 2 Calculations
  const hoursNum = parseFloat(String(workedHoursMonth).replace(/,/g, ".")) || 0;
  const rateNum = parseFloat(String(payRate).replace(/,/g, ".")) || 13.9;
  const calculatedMonthlyGross = hoursNum * rateNum;
  const isOverLimit = calculatedMonthlyGross > limitNum;
  const differenceToLimit = Math.abs(limitNum - calculatedMonthlyGross);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleReset = () => {
    setEarningsLimit("603");
    setWageRate("13.90");
    setWorkdaysPerWeek("2");
    setWorkedHoursMonth("43.38");
    setPayRate("13.90");
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-800 mb-2">
            <Wallet className="w-3.5 h-3.5" />
            <span>603 € Minijob-Grenze 2026 &amp; Mindestlohn 13,90 €</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Minijob Rechner Stunden
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Ermitteln Sie die maximal erlaubten Arbeitsstunden für einen Minijob oder berechnen Sie Ihren Verdienst.
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
          onClick={() => setActiveTab("maxHours")}
          className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors cursor-pointer ${
            activeTab === "maxHours"
              ? "bg-emerald-600 text-white shadow-xs"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Max. Minijob-Stunden ermitteln
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("calcPay")}
          className={`flex-1 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors cursor-pointer ${
            activeTab === "calcPay"
              ? "bg-emerald-600 text-white shadow-xs"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Verdienst aus Stunden berechnen
        </button>
      </div>

      {/* ========================================================= */}
      {/* MODE 1: MAX WORKING HOURS CALCULATION                     */}
      {/* ========================================================= */}
      {activeTab === "maxHours" ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                Monatliche Verdienstgrenze (€):
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={earningsLimit}
                  onChange={(e) => setEarningsLimit(e.target.value)}
                  placeholder="603"
                  className="flex-1 h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-emerald-600 outline-none"
                />
                <div className="flex items-center px-4 bg-slate-100 rounded-xl text-slate-600 font-bold text-sm">
                  € / Monat
                </div>
              </div>
              <div className="flex gap-1.5 mt-2">
                {["603", "538", "520"].map((lim) => (
                  <button
                    key={lim}
                    type="button"
                    onClick={() => setEarningsLimit(lim)}
                    className="px-2.5 py-1 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-medium cursor-pointer"
                  >
                    {lim} € {lim === "603" ? "(ab 2026)" : ""}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                Stundenlohn (€/h):
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={wageRate}
                  onChange={(e) => setWageRate(e.target.value)}
                  placeholder="13.90"
                  className="flex-1 h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-emerald-600 outline-none"
                />
                <div className="flex items-center px-4 bg-slate-100 rounded-xl text-slate-600 font-bold text-sm">
                  € / Stunde
                </div>
              </div>
              <div className="flex gap-1.5 mt-2">
                {["13.90", "14.00", "15.00", "16.00"].map((w) => (
                  <button
                    key={w}
                    type="button"
                    onClick={() => setWageRate(w)}
                    className="px-2.5 py-1 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-medium cursor-pointer"
                  >
                    {w.replace(".", ",")} € {w === "13.90" ? "(Mindestlohn)" : ""}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
              Geplante Arbeitstage pro Woche:
            </label>
            <div className="flex gap-2">
              {["1", "2", "3", "4", "5"].map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => setWorkdaysPerWeek(d)}
                  className={`flex-1 py-2 text-xs sm:text-sm rounded-xl font-bold transition-colors cursor-pointer ${
                    workdaysPerWeek === d
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {d} {d === "1" ? "Tag" : "Tage"}
                </button>
              ))}
            </div>
          </div>

          {/* Result Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-900 text-white shadow-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider text-emerald-300 font-bold">
                Maximal erlaubte Arbeitszeit ({limitNum} € Minijob):
              </span>
              <button
                type="button"
                onClick={() =>
                  handleCopy(
                    `Max. Minijob-Arbeitszeit: ${maxHoursMonth.toFixed(2).replace(".", ",")} Std./Monat (${maxHoursWeek.toFixed(2).replace(".", ",")} Std./Woche)`
                  )
                }
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "Kopiert!" : "Kopieren"}</span>
              </button>
            </div>

            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {maxHoursMonth.toFixed(2).replace(".", ",")} <span className="text-xl text-emerald-300 font-bold">Stunden / Monat</span>
            </div>
            <div className="text-emerald-200 text-sm font-semibold mt-1">
              entspricht ca. {maxHoursInt} Std. {maxMinutesRem} Min. pro Monat
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-white/10 text-xs">
              <div>
                <span className="text-emerald-300 block">Pro Woche (Ø):</span>
                <span className="font-bold text-white text-sm">
                  {maxHoursWeek.toFixed(2).replace(".", ",")} Std./Woche
                </span>
              </div>
              <div>
                <span className="text-emerald-300 block">Pro Arbeitstag ({daysNum} Tage/Woche):</span>
                <span className="font-bold text-white text-sm">
                  {maxHoursPerDay.toFixed(2).replace(".", ",")} Std./Tag
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-emerald-300 block">Rechenformel:</span>
                <span className="font-bold text-white text-sm">
                  {limitNum} € ÷ {wageNum.toFixed(2).replace(".", ",")} € = {maxHoursMonth.toFixed(2).replace(".", ",")}h
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* MODE 2: CALCULATE PAY FROM HOURS */
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                Geleistete Arbeitsstunden im Monat:
              </label>
              <input
                type="text"
                value={workedHoursMonth}
                onChange={(e) => setWorkedHoursMonth(e.target.value)}
                placeholder="43.38"
                className="w-full h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-emerald-600 outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                Stundenlohn (€/h):
              </label>
              <input
                type="text"
                value={payRate}
                onChange={(e) => setPayRate(e.target.value)}
                placeholder="13.90"
                className="w-full h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-emerald-600 outline-none"
              />
            </div>
          </div>

          {/* Result Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-900 text-white shadow-md">
            <span className="text-xs uppercase tracking-wider text-emerald-300 font-bold block mb-1">
              Errechneter Brutto-Monatsverdienst:
            </span>
            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {calculatedMonthlyGross.toFixed(2).replace(".", ",")} €
            </div>

            {/* Threshold indicator */}
            <div className="mt-3">
              {!isOverLimit ? (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                  <Check className="w-3.5 h-3.5" />
                  <span>Im Minijob-Rahmen (noch {differenceToLimit.toFixed(2).replace(".", ",")} € Puffer bis {limitNum} €)</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-500/20 text-rose-300 border border-rose-400/30">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Achtung: Überschreitet {limitNum} € um {differenceToLimit.toFixed(2).replace(".", ",")} € (Midijob / Sozialabgabenpflicht)</span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/10 text-xs">
              <div>
                <span className="text-emerald-300 block">Wöchentlicher Verdienst (Ø):</span>
                <span className="font-bold text-white text-sm">
                  {((calculatedMonthlyGross * 12) / 52).toFixed(2).replace(".", ",")} € / Woche
                </span>
              </div>
              <div>
                <span className="text-emerald-300 block">Jahresverdienst (12 Monate):</span>
                <span className="font-bold text-white text-sm">
                  {(calculatedMonthlyGross * 12).toFixed(2).replace(".", ",")} € / Jahr
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Legal & Info Box */}
      <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs space-y-1.5">
        <div className="flex items-center gap-1.5 font-bold">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          <span>Wichtige rechtliche Hinweise für Minijobber (Geringfügige Beschäftigung):</span>
        </div>
        <ul className="list-disc pl-5 space-y-1 text-slate-700">
          <li><strong>Gesetzlicher Mindestlohn:</strong> Seit dem 1. Januar 2026 beträgt der gesetzliche Mindestlohn 13,90 € pro Stunde.</li>
          <li><strong>Gleiche Arbeitsrechte:</strong> Minijobber haben vollen gesetzlichen Anspruch auf bezahlten Urlaub (BUrlG) sowie Lohnfortzahlung bei Krankheit (§ 3 EntgFG) und an Feiertagen.</li>
          <li><strong>Grenzüberschreitung:</strong> Wird die Verdienstgrenze von 603 € monatlich regelmäßig überschritten, greift der sozialversicherungspflichtige Übergangsbereich (Midijob).</li>
        </ul>
      </div>
    </div>
  );
}
