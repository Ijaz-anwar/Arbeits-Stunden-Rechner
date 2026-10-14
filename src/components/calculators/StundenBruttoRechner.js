"use client";

import { useState } from "react";
import {
  Coins,
  Sparkles,
  RotateCcw,
  Check,
  Copy,
  Plus,
  Percent,
  Euro,
  Calculator,
  ArrowRightLeft,
} from "lucide-react";

export default function StundenBruttoRechner() {
  const [activeTab, setActiveTab] = useState("salaryToRate"); // "salaryToRate" | "rateToSalary"

  // -------------------------------------------------------------
  // TAB 1: MONATSGEHALT → BRUTTOSTUNDENLOHN
  // -------------------------------------------------------------
  const [monthlySalary, setMonthlySalary] = useState("3200");
  const [weeklyHours, setWeeklyHours] = useState("40");
  const [copiedSalary, setCopiedSalary] = useState(false);

  const cleanSalary = parseFloat(String(monthlySalary).replace(/,/g, ".")) || 0;
  const cleanWeeklyH = parseFloat(String(weeklyHours).replace(/,/g, ".")) || 0;

  // Monthly hours = (weeklyHours * 52) / 12
  const calcMonthlyHours = cleanWeeklyH > 0 ? (cleanWeeklyH * 52) / 12 : 0;
  const calcHourlyRate = calcMonthlyHours > 0 ? cleanSalary / calcMonthlyHours : 0;
  const calcYearlySalary = cleanSalary * 12;
  const calcDailyWage5 = cleanWeeklyH > 0 ? (cleanSalary / (calcMonthlyHours / (cleanWeeklyH / 5))) : 0;

  const handleCopySalary = () => {
    const lines = [
      "=== BRUTTOSTUNDENLOHN BERECHNUNG ===",
      `Monatliches Bruttogehalt: ${cleanSalary.toFixed(2).replace(".", ",")} €`,
      `Wochenarbeitszeit: ${cleanWeeklyH.toFixed(2).replace(".", ",")} Std./Woche`,
      `Monatliche Arbeitsstunden: ca. ${calcMonthlyHours.toFixed(2).replace(".", ",")} Std./Monat`,
      `Bruttostundenlohn: ${calcHourlyRate.toFixed(2).replace(".", ",")} € / Stunde`,
      `Jahresbruttogehalt: ${calcYearlySalary.toFixed(2).replace(".", ",")} €`,
      "\nBerechnet auf Arbeitsstundenrechner.de",
    ].join("\n");

    navigator.clipboard.writeText(lines).then(() => {
      setCopiedSalary(true);
      setTimeout(() => setCopiedSalary(false), 2000);
    });
  };

  // -------------------------------------------------------------
  // TAB 2: STUNDEN × STUNDENLOHN + ZUSCHLÄGE
  // -------------------------------------------------------------
  const [period, setPeriod] = useState("month"); // "month" | "week"
  const [hours, setHours] = useState("160");
  const [rate, setRate] = useState("20.00");

  const [hasOvertime, setHasOvertime] = useState(false);
  const [overtimeHours, setOvertimeHours] = useState("10");
  const [overtimeBonusPercent, setOvertimeBonusPercent] = useState("25");

  const [hasNight, setHasNight] = useState(false);
  const [nightHours, setNightHours] = useState("8");
  const [nightBonusPercent, setNightBonusPercent] = useState("25");

  const [hasSunday, setHasSunday] = useState(false);
  const [sundayHours, setSundayHours] = useState("6");
  const [sundayBonusPercent, setSundayBonusPercent] = useState("50");

  const [copiedPay, setCopiedPay] = useState(false);

  const numHours = parseFloat(String(hours).replace(/,/g, ".")) || 0;
  const numRate = parseFloat(String(rate).replace(/,/g, ".")) || 0;
  const baseGross = numHours * numRate;

  let overtimeExtra = 0;
  if (hasOvertime) {
    const otH = parseFloat(String(overtimeHours).replace(/,/g, ".")) || 0;
    const otPct = parseFloat(String(overtimeBonusPercent).replace(/,/g, ".")) || 0;
    overtimeExtra = otH * numRate * (otPct / 100);
  }

  let nightExtra = 0;
  if (hasNight) {
    const nH = parseFloat(String(nightHours).replace(/,/g, ".")) || 0;
    const nPct = parseFloat(String(nightBonusPercent).replace(/,/g, ".")) || 0;
    nightExtra = nH * numRate * (nPct / 100);
  }

  let sundayExtra = 0;
  if (hasSunday) {
    const sH = parseFloat(String(sundayHours).replace(/,/g, ".")) || 0;
    const sPct = parseFloat(String(sundayBonusPercent).replace(/,/g, ".")) || 0;
    sundayExtra = sH * numRate * (sPct / 100);
  }

  const totalSurcharges = overtimeExtra + nightExtra + sundayExtra;
  const totalGross = baseGross + totalSurcharges;

  const monthlyGross = period === "month" ? totalGross : totalGross * 4.3333;
  const yearlyGross = monthlyGross * 12;
  const effectiveHourlyRate =
    numHours > 0 ? (totalGross / numHours).toFixed(2).replace(".", ",") : "0,00";

  const handleCopyPay = () => {
    const lines = [
      "=== BRUTTOLOHN BERECHNUNG ===",
      `Arbeitszeit: ${numHours} Std. (${period === "month" ? "Monat" : "Woche"})`,
      `Stundenlohn: ${numRate.toFixed(2).replace(".", ",")} €/h`,
      `Grundbrutto: ${baseGross.toFixed(2).replace(".", ",")} €`,
      totalSurcharges > 0 ? `Zuschläge: +${totalSurcharges.toFixed(2).replace(".", ",")} €` : null,
      `Gesamter Bruttolohn: ${totalGross.toFixed(2).replace(".", ",")} €`,
      `Effektiver Stundensatz: ${effectiveHourlyRate} €/h`,
      `Jahreshochrechnung: ${yearlyGross.toFixed(2).replace(".", ",")} €`,
      "\nBerechnet auf Arbeitsstundenrechner.de",
    ]
      .filter(Boolean)
      .join("\n");

    navigator.clipboard.writeText(lines).then(() => {
      setCopiedPay(true);
      setTimeout(() => setCopiedPay(false), 2000);
    });
  };

  const handleReset = () => {
    setMonthlySalary("3200");
    setWeeklyHours("40");
    setPeriod("month");
    setHours("160");
    setRate("20.00");
    setHasOvertime(false);
    setHasNight(false);
    setHasSunday(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
      {/* Header with Tab Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-800 mb-2">
            <Coins className="w-3.5 h-3.5" />
            <span>Monatsgehalt ↔ Bruttostundenlohn &amp; Zuschläge</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Stunden Brutto Rechner
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Ermitteln Sie Ihren Bruttostundenlohn aus dem Gehalt oder berechnen Sie das Bruttogehalt aus Stunden und Zuschlägen.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="inline-flex p-1 bg-slate-100 rounded-xl gap-1 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setActiveTab("salaryToRate")}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              activeTab === "salaryToRate"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Gehalt → Stundenlohn
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("rateToSalary")}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              activeTab === "rateToSalary"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Stunden → Bruttolohn
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* TAB 1: GEHALT → STUNDENLOHN                               */}
      {/* ========================================================= */}
      {activeTab === "salaryToRate" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                Monatliches Bruttogehalt (€):
              </label>
              <input
                type="text"
                value={monthlySalary}
                onChange={(e) => setMonthlySalary(e.target.value)}
                placeholder="3200"
                className="w-full h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-blue-600 outline-none"
              />
              <div className="flex flex-wrap gap-1.5 mt-2">
                {["2500", "3000", "3200", "3500", "4000", "4500"].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setMonthlySalary(s)}
                    className="px-2 py-0.5 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-medium cursor-pointer"
                  >
                    {s} €
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                Wöchentliche Arbeitszeit (Std./Woche):
              </label>
              <input
                type="number"
                step="0.5"
                min="1"
                value={weeklyHours}
                onChange={(e) => setWeeklyHours(e.target.value)}
                placeholder="40"
                className="w-full h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-blue-600 outline-none"
              />
              <div className="flex flex-wrap gap-1.5 mt-2">
                {["40", "38.5", "38", "35", "30", "20"].map((h) => (
                  <button
                    key={h}
                    type="button"
                    onClick={() => setWeeklyHours(h)}
                    className="px-2 py-0.5 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-medium cursor-pointer"
                  >
                    {h.replace(".", ",")} Std.
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0b4870] to-slate-900 text-white shadow-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider text-blue-200 font-bold">
                Errechneter Bruttostundenlohn:
              </span>
              <button
                type="button"
                onClick={handleCopySalary}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                {copiedSalary ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSalary ? "Kopiert!" : "Kopieren"}</span>
              </button>
            </div>

            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {calcHourlyRate.toFixed(2).replace(".", ",")} <span className="text-xl text-emerald-300 font-bold">€ / Stunde</span>
            </div>
            <div className="text-blue-200 text-sm font-semibold mt-1">
              bei ca. {calcMonthlyHours.toFixed(2).replace(".", ",")} Arbeitsstunden pro Monat (Wochenstunden × 52 ÷ 12)
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-white/10 text-xs">
              <div>
                <span className="text-blue-300 block">Jahresgehalt (Brutto):</span>
                <span className="font-bold text-white text-sm">
                  {calcYearlySalary.toFixed(2).replace(".", ",")} € / Jahr
                </span>
              </div>
              <div>
                <span className="text-blue-300 block">Monatsarbeitsstunden (Ø):</span>
                <span className="font-bold text-white text-sm">
                  {calcMonthlyHours.toFixed(2).replace(".", ",")} Std./Monat
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-blue-300 block">Rechenweg:</span>
                <span className="font-bold text-white text-sm">
                  {cleanSalary} € ÷ {calcMonthlyHours.toFixed(2).replace(".", ",")}h = {calcHourlyRate.toFixed(2).replace(".", ",")} €/h
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 2: STUNDEN → BRUTTOLOHN (MIT ZUSCHLÄGEN)              */}
      {/* ========================================================= */}
      {activeTab === "rateToSalary" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                Berechnungszeitraum:
              </label>
              <div className="flex gap-1.5">
                <button
                  type="button"
                  onClick={() => {
                    setPeriod("month");
                    if (hours === "40") setHours("160");
                  }}
                  className={`flex-1 py-3 text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer ${
                    period === "month"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  Monatlich
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setPeriod("week");
                    if (hours === "160") setHours("40");
                  }}
                  className={`flex-1 py-3 text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer ${
                    period === "week"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  Wöchentlich
                </button>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                Arbeitsstunden ({period === "month" ? "Std./Monat" : "Std./Woche"}):
              </label>
              <input
                type="text"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                className="w-full h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-blue-600 outline-none"
                placeholder={period === "month" ? "160" : "40"}
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                Bruttostundenlohn (€/h):
              </label>
              <input
                type="text"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="w-full h-12 px-4 rounded-xl border border-slate-300 text-slate-900 text-base font-semibold focus:border-blue-600 outline-none"
                placeholder="20.00"
              />
            </div>
          </div>

          {/* Surcharges Section */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
              Optionale Zuschläge hinzufügen:
            </span>

            {/* Overtime */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-white rounded-xl border border-slate-200">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasOvertime}
                  onChange={(e) => setHasOvertime(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="text-xs sm:text-sm font-bold text-slate-800">Überstundenzuschlag</span>
              </label>
              {hasOvertime && (
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-500">Stunden:</span>
                  <input
                    type="text"
                    value={overtimeHours}
                    onChange={(e) => setOvertimeHours(e.target.value)}
                    className="w-16 h-8 px-2 rounded-lg border border-slate-300 text-center font-bold"
                  />
                  <span className="text-slate-500">Zuschlag:</span>
                  <input
                    type="text"
                    value={overtimeBonusPercent}
                    onChange={(e) => setOvertimeBonusPercent(e.target.value)}
                    className="w-16 h-8 px-2 rounded-lg border border-slate-300 text-center font-bold"
                  />
                  <span className="text-slate-600 font-bold">%</span>
                  <span className="text-emerald-700 font-bold ml-2">
                    +{overtimeExtra.toFixed(2).replace(".", ",")} €
                  </span>
                </div>
              )}
            </div>

            {/* Night Shift */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-white rounded-xl border border-slate-200">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasNight}
                  onChange={(e) => setHasNight(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  Nachtzuschlag (§ 3b EStG)
                </span>
              </label>
              {hasNight && (
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-500">Stunden:</span>
                  <input
                    type="text"
                    value={nightHours}
                    onChange={(e) => setNightHours(e.target.value)}
                    className="w-16 h-8 px-2 rounded-lg border border-slate-300 text-center font-bold"
                  />
                  <span className="text-slate-500">Zuschlag:</span>
                  <input
                    type="text"
                    value={nightBonusPercent}
                    onChange={(e) => setNightBonusPercent(e.target.value)}
                    className="w-16 h-8 px-2 rounded-lg border border-slate-300 text-center font-bold"
                  />
                  <span className="text-slate-600 font-bold">%</span>
                  <span className="text-emerald-700 font-bold ml-2">
                    +{nightExtra.toFixed(2).replace(".", ",")} €
                  </span>
                </div>
              )}
            </div>

            {/* Sunday / Holiday */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-white rounded-xl border border-slate-200">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasSunday}
                  onChange={(e) => setHasSunday(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  Sonntags-/Feiertagszuschlag
                </span>
              </label>
              {hasSunday && (
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-500">Stunden:</span>
                  <input
                    type="text"
                    value={sundayHours}
                    onChange={(e) => setSundayHours(e.target.value)}
                    className="w-16 h-8 px-2 rounded-lg border border-slate-300 text-center font-bold"
                  />
                  <span className="text-slate-500">Zuschlag:</span>
                  <input
                    type="text"
                    value={sundayBonusPercent}
                    onChange={(e) => setSundayBonusPercent(e.target.value)}
                    className="w-16 h-8 px-2 rounded-lg border border-slate-300 text-center font-bold"
                  />
                  <span className="text-slate-600 font-bold">%</span>
                  <span className="text-emerald-700 font-bold ml-2">
                    +{sundayExtra.toFixed(2).replace(".", ",")} €
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Result Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0b4870] to-slate-900 text-white shadow-md">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider text-blue-200 font-bold">
                Ergebnis: Gesamter Bruttolohn ({period === "month" ? "Monat" : "Woche"})
              </span>
              <button
                type="button"
                onClick={handleCopyPay}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                {copiedPay ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPay ? "Kopiert!" : "Kopieren"}</span>
              </button>
            </div>

            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {totalGross.toFixed(2).replace(".", ",")} €
            </div>
            <div className="text-emerald-300 text-sm font-semibold mt-1">
              Effektiver Stundensatz: {effectiveHourlyRate} € / Stunde
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-4 border-t border-white/10 text-xs">
              <div>
                <span className="text-blue-300 block">Grundbrutto:</span>
                <span className="font-bold text-white text-sm">
                  {baseGross.toFixed(2).replace(".", ",")} €
                </span>
              </div>
              <div>
                <span className="text-blue-300 block">Gesamte Zuschläge:</span>
                <span className="font-bold text-white text-sm">
                  +{totalSurcharges.toFixed(2).replace(".", ",")} €
                </span>
              </div>
              <div>
                <span className="text-blue-300 block">Monatsbrutto (Ø):</span>
                <span className="font-bold text-white text-sm">
                  {monthlyGross.toFixed(2).replace(".", ",")} €
                </span>
              </div>
              <div>
                <span className="text-blue-300 block">Jahresbrutto (12 M):</span>
                <span className="font-bold text-white text-sm">
                  {yearlyGross.toFixed(2).replace(".", ",")} €
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
