"use client";

import { useState } from "react";
import {
  MinusCircle,
  Plus,
  Trash2,
  RotateCcw,
  Sparkles,
  Check,
  Copy,
  Clock,
  Briefcase,
  TrendingDown,
  Calendar,
  Euro,
} from "lucide-react";

export default function StundenReduzierenRechner() {
  const [activeTab, setActiveTab] = useState("weekly"); // "weekly" | "daily"

  // -------------------------------------------------------------
  // TAB 1: WOCHENARBEITSZEIT REDUZIEREN (VOLLZEIT → TEILZEIT)
  // -------------------------------------------------------------
  const [currentWeeklyHours, setCurrentWeeklyHours] = useState("40");
  const [targetWeeklyHours, setTargetWeeklyHours] = useState("32");
  const [monthlyGrossSalary, setMonthlyGrossSalary] = useState("3200");
  const [copiedWeekly, setCopiedWeekly] = useState(false);

  const prevHoursNum = parseFloat(String(currentWeeklyHours).replace(/,/g, ".")) || 0;
  const targetHoursNum = parseFloat(String(targetWeeklyHours).replace(/,/g, ".")) || 0;

  const hoursSavedWeekly = Math.max(0, prevHoursNum - targetHoursNum);
  const percentReduction =
    prevHoursNum > 0 ? (hoursSavedWeekly / prevHoursNum) * 100 : 0;

  // Monthly conversions (x 52 / 12)
  const prevMonthlyHours = (prevHoursNum * 52) / 12;
  const targetMonthlyHours = (targetHoursNum * 52) / 12;
  const monthlyHoursSaved = (hoursSavedWeekly * 52) / 12;

  // Day distributions
  const daily5 = targetHoursNum > 0 ? (targetHoursNum / 5) : 0;
  const daily4 = targetHoursNum > 0 ? (targetHoursNum / 4) : 0;
  const daily3 = targetHoursNum > 0 ? (targetHoursNum / 3) : 0;

  const formatHoursAndMins = (decimalHours) => {
    const h = Math.floor(decimalHours);
    const m = Math.round((decimalHours - h) * 60);
    return `${h} Std. ${m > 0 ? `${m} Min.` : "00 Min."}`;
  };

  // Salary comparison
  let salaryResult = null;
  const cleanSalary = parseFloat(String(monthlyGrossSalary).replace(/,/g, ".")) || 0;
  if (cleanSalary > 0 && prevHoursNum > 0) {
    const newSalary = cleanSalary * (targetHoursNum / prevHoursNum);
    const salaryDiff = cleanSalary - newSalary;
    salaryResult = {
      newSalaryFormatted: newSalary.toFixed(2).replace(".", ","),
      diffFormatted: salaryDiff.toFixed(2).replace(".", ","),
    };
  }

  const handleCopyWeekly = () => {
    const lines = [
      "=== ARBEITSZEITREDUZIERUNG BERECHNUNG ===",
      `Bisherige Wochenarbeitszeit: ${prevHoursNum.toFixed(2).replace(".", ",")} Std./Woche (${prevMonthlyHours.toFixed(2).replace(".", ",")} Std./Monat)`,
      `Neue Wochenarbeitszeit: ${targetHoursNum.toFixed(2).replace(".", ",")} Std./Woche (${targetMonthlyHours.toFixed(2).replace(".", ",")} Std./Monat)`,
      `Ersparnis: ${hoursSavedWeekly.toFixed(2).replace(".", ",")} Std. weniger pro Woche (−${percentReduction.toFixed(2).replace(".", ",")} %)`,
      `Monatliche Zeitersparnis: ca. ${monthlyHoursSaved.toFixed(2).replace(".", ",")} Std. weniger`,
      "\nVerteilungsmöglichkeiten:",
      `- 5 Arbeitstage: ${daily5.toFixed(2).replace(".", ",")} Std./Tag (${formatHoursAndMins(daily5)})`,
      `- 4 Arbeitstage: ${daily4.toFixed(2).replace(".", ",")} Std./Tag (${formatHoursAndMins(daily4)})`,
      `- 3 Arbeitstage: ${daily3.toFixed(2).replace(".", ",")} Std./Tag (${formatHoursAndMins(daily3)})`,
      salaryResult
        ? `\nGehaltsvergleich (proportional Brutto): ${salaryResult.newSalaryFormatted} € (Differenz: −${salaryResult.diffFormatted} €)`
        : null,
      "\nBerechnet auf Arbeitsstundenrechner.de",
    ]
      .filter(Boolean)
      .join("\n");

    navigator.clipboard.writeText(lines).then(() => {
      setCopiedWeekly(true);
      setTimeout(() => setCopiedWeekly(false), 2000);
    });
  };

  // -------------------------------------------------------------
  // TAB 2: TAGESZEIT & PAUSEN ABZIEHEN (SUBTRAKTIONSRECHNER)
  // -------------------------------------------------------------
  const [baseHours, setBaseHours] = useState("9");
  const [baseMinutes, setBaseMinutes] = useState("20");
  const initialDeductions = [
    { id: "1", label: "Pause 1", hours: "0", minutes: "45" },
  ];
  const [deductions, setDeductions] = useState(initialDeductions);
  const [copiedDaily, setCopiedDaily] = useState(false);

  const handleAddDeduction = () => {
    const nextIdx = deductions.length + 1;
    setDeductions((prev) => [
      ...prev,
      {
        id: `ded-${Date.now()}`,
        label: `Abzug ${nextIdx}`,
        hours: "0",
        minutes: "15",
      },
    ]);
  };

  const handleRemoveDeduction = (id) => {
    if (deductions.length <= 1) return;
    setDeductions((prev) => prev.filter((d) => d.id !== id));
  };

  const handleDeductionChange = (id, field, value) => {
    setDeductions((prev) =>
      prev.map((d) => (d.id === id ? { ...d, [field]: value } : r))
    );
  };

  const handleResetDaily = () => {
    setBaseHours("9");
    setBaseMinutes("20");
    setDeductions(initialDeductions);
  };

  const baseH = parseInt(baseHours, 10) || 0;
  const baseM = parseInt(baseMinutes, 10) || 0;
  const baseTotalMinutes = baseH * 60 + baseM;

  let totalDeductionMinutes = 0;
  deductions.forEach((d) => {
    const h = parseInt(d.hours, 10) || 0;
    const m = parseInt(d.minutes, 10) || 0;
    totalDeductionMinutes += h * 60 + m;
  });

  const remainingMinutes = Math.max(0, baseTotalMinutes - totalDeductionMinutes);
  const remH = Math.floor(remainingMinutes / 60);
  const remM = remainingMinutes % 60;
  const remDecimal = (remainingMinutes / 60).toFixed(2).replace(".", ",");

  const dedH = Math.floor(totalDeductionMinutes / 60);
  const dedM = totalDeductionMinutes % 60;

  const handleCopyDaily = () => {
    const text = [
      "=== TAGESZEIT REDUZIEREN BERECHNUNG ===",
      `Ausgangszeit: ${baseH} Std. ${String(baseM).padStart(2, "0")} Min.`,
      `Gesamter Abzug: ${dedH} Std. ${String(dedM).padStart(2, "0")} Min.`,
      `Verbleibende Restzeit: ${remH} Std. ${String(remM).padStart(2, "0")} Min. (${remDecimal} Dezimalstunden)`,
      "\nAbzüge:",
      ...deductions.map(
        (d) => `- ${d.label}: ${d.hours || 0} Std. ${d.minutes || 0} Min.`
      ),
      "\nBerechnet auf Arbeitsstundenrechner.de",
    ]
      .filter(Boolean)
      .join("\n");

    navigator.clipboard.writeText(text).then(() => {
      setCopiedDaily(true);
      setTimeout(() => setCopiedDaily(false), 2000);
    });
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
      {/* Header with Tab Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-rose-50 text-rose-700 mb-2">
            <TrendingDown className="w-3.5 h-3.5" />
            <span>Arbeitszeit reduzieren &amp; vergleichen</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Stunden Reduzieren Rechner
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Vergleichen Sie Wochenstundenmodelle (Vollzeit $\rightarrow$ Teilzeit) oder ziehen Sie Pausen von Ihrer Arbeitszeit ab.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="inline-flex p-1 bg-slate-100 rounded-xl gap-1 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setActiveTab("weekly")}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              activeTab === "weekly"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Wochenstunden vergleichen
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("daily")}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
              activeTab === "daily"
                ? "bg-white text-slate-900 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Pausen / Abzüge abziehen
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* TAB 1: WOCHENSTUNDEN REDUZIEREN (VOLLZEIT → TEILZEIT)      */}
      {/* ========================================================= */}
      {activeTab === "weekly" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                Bisherige Wochenarbeitszeit (Std./Woche):
              </label>
              <input
                type="number"
                step="0.5"
                min="1"
                value={currentWeeklyHours}
                onChange={(e) => setCurrentWeeklyHours(e.target.value)}
                className="w-full h-11 px-3.5 rounded-xl border border-slate-300 bg-white text-base font-semibold text-slate-900 focus:border-rose-600 outline-none"
                placeholder="40"
              />
              <div className="flex flex-wrap gap-1.5 mt-2">
                {["40", "38.5", "38", "35"].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setCurrentWeeklyHours(val)}
                    className="px-2 py-0.5 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-medium cursor-pointer"
                  >
                    {val.replace(".", ",")} Std.
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                Neue Wochenarbeitszeit (Std./Woche):
              </label>
              <input
                type="number"
                step="0.5"
                min="0"
                value={targetWeeklyHours}
                onChange={(e) => setTargetWeeklyHours(e.target.value)}
                className="w-full h-11 px-3.5 rounded-xl border border-slate-300 bg-white text-base font-semibold text-slate-900 focus:border-rose-600 outline-none"
                placeholder="32"
              />
              <div className="flex flex-wrap gap-1.5 mt-2">
                {["35", "32", "30", "28", "25", "20"].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setTargetWeeklyHours(val)}
                    className="px-2 py-0.5 text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-medium cursor-pointer"
                  >
                    {val} Std.
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
              Optional: Bisheriges monatliches Bruttogehalt (€):
            </label>
            <div className="max-w-xs">
              <input
                type="text"
                value={monthlyGrossSalary}
                onChange={(e) => setMonthlyGrossSalary(e.target.value)}
                placeholder="z. B. 3200"
                className="w-full h-10 px-3 rounded-lg border border-slate-300 bg-white text-sm font-semibold text-slate-900 focus:border-rose-600 outline-none"
              />
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Errechnet die proportionale Bruttogehaltsanpassung (ohne individuelle Steuer- und Abzugsklassen).
            </p>
          </div>

          {/* Results Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-950 via-slate-900 to-slate-900 text-white shadow-md">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider text-rose-200 font-bold">
                Ergebnis: Arbeitszeitreduzierung
              </span>
              <button
                type="button"
                onClick={handleCopyWeekly}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                {copiedWeekly ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedWeekly ? "Kopiert!" : "Zusammenfassung kopieren"}</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  −{hoursSavedWeekly.toFixed(2).replace(".", ",")} Std. / Woche
                </div>
                <div className="text-rose-200 text-sm font-semibold mt-1">
                  Reduzierung um {percentReduction.toFixed(2).replace(".", ",")} % (neue Arbeitszeit: {targetHoursNum.toFixed(2).replace(".", ",")} Std./Woche)
                </div>
              </div>

              {salaryResult && (
                <div className="bg-white/10 p-3 rounded-xl border border-white/10 sm:text-right">
                  <span className="text-xs text-rose-200 block">Neues Brutto (proportional):</span>
                  <span className="text-2xl font-bold text-emerald-400">
                    {salaryResult.newSalaryFormatted} €
                  </span>
                  <span className="text-xs text-rose-300 block mt-0.5">
                    Differenz: −{salaryResult.diffFormatted} €
                  </span>
                </div>
              )}
            </div>

            {/* Detailed metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-4 border-t border-white/10 text-xs">
              <div>
                <span className="text-rose-300 block">Monatliche Ersparnis:</span>
                <span className="font-bold text-white text-sm">
                  ca. {monthlyHoursSaved.toFixed(2).replace(".", ",")} Std./Monat
                </span>
              </div>
              <div>
                <span className="text-rose-300 block">Neue Monatsstunden:</span>
                <span className="font-bold text-white text-sm">
                  ca. {targetMonthlyHours.toFixed(2).replace(".", ",")} Std./Monat
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-rose-300 block">Formel:</span>
                <span className="font-bold text-white text-sm">
                  {prevHoursNum}h − {targetHoursNum}h = {hoursSavedWeekly.toFixed(2).replace(".", ",")}h
                </span>
              </div>
            </div>

            {/* Day distribution options */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <span className="text-xs text-rose-300 uppercase tracking-wider font-bold block mb-2">
                Mögliche Verteilung auf Arbeitstage:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="bg-white/5 p-2.5 rounded-lg border border-white/10">
                  <span className="font-bold text-white block">5 Arbeitstage:</span>
                  <span className="text-rose-200">
                    {daily5.toFixed(2).replace(".", ",")} Std./Tag ({formatHoursAndMins(daily5)})
                  </span>
                </div>
                <div className="bg-white/5 p-2.5 rounded-lg border border-white/10">
                  <span className="font-bold text-white block">4 Arbeitstage:</span>
                  <span className="text-rose-200">
                    {daily4.toFixed(2).replace(".", ",")} Std./Tag ({formatHoursAndMins(daily4)})
                  </span>
                </div>
                <div className="bg-white/5 p-2.5 rounded-lg border border-white/10">
                  <span className="font-bold text-white block">3 Arbeitstage:</span>
                  <span className="text-rose-200">
                    {daily3.toFixed(2).replace(".", ",")} Std./Tag ({formatHoursAndMins(daily3)})
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 2: TAGESZEIT & PAUSEN ABZIEHEN (SUBTRAKTIONSRECHNER)   */}
      {/* ========================================================= */}
      {activeTab === "daily" && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">
              Ziehen Sie Pausen, Minusstunden oder Gleitzeitausgleich ab:
            </span>
            <button
              type="button"
              onClick={handleResetDaily}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Zurücksetzen</span>
            </button>
          </div>

          {/* Base Time Input */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
              1. Ausgangszeit / Gesamtanwesenheit:
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-xs text-slate-500 block mb-1">Stunden:</span>
                <input
                  type="number"
                  min="0"
                  value={baseHours}
                  onChange={(e) => setBaseHours(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-slate-300 bg-white text-base font-semibold text-slate-900 focus:border-rose-600 outline-none"
                  placeholder="9"
                />
              </div>
              <div>
                <span className="text-xs text-slate-500 block mb-1">Minuten:</span>
                <input
                  type="number"
                  min="0"
                  max="59"
                  value={baseMinutes}
                  onChange={(e) => setBaseMinutes(e.target.value)}
                  className="w-full h-11 px-3.5 rounded-xl border border-slate-300 bg-white text-base font-semibold text-slate-900 focus:border-rose-600 outline-none"
                  placeholder="20"
                />
              </div>
            </div>
          </div>

          {/* Deductions Input */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block">
              2. Abzuziehende Stunden &amp; Pausen:
            </label>

            {deductions.map((d) => (
              <div
                key={d.id}
                className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-3 p-3 bg-rose-50/40 border border-rose-200/80 rounded-xl items-center"
              >
                <div className="sm:col-span-5">
                  <input
                    type="text"
                    value={d.label}
                    onChange={(e) => handleDeductionChange(d.id, "label", e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm font-semibold text-slate-900 focus:border-rose-600 outline-none"
                    placeholder="z. B. Pause"
                  />
                </div>

                <div className="sm:col-span-3 flex items-center gap-1.5">
                  <input
                    type="number"
                    min="0"
                    value={d.hours}
                    onChange={(e) => handleDeductionChange(d.id, "hours", e.target.value)}
                    className="w-full h-10 px-2 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm font-semibold text-center text-slate-900 focus:border-rose-600 outline-none"
                    placeholder="0"
                  />
                  <span className="text-xs text-slate-500 font-medium">Std.</span>
                </div>

                <div className="sm:col-span-3 flex items-center gap-1.5">
                  <input
                    type="number"
                    min="0"
                    max="59"
                    value={d.minutes}
                    onChange={(e) => handleDeductionChange(d.id, "minutes", e.target.value)}
                    className="w-full h-10 px-2 rounded-lg border border-slate-300 bg-white text-xs sm:text-sm font-semibold text-center text-slate-900 focus:border-rose-600 outline-none"
                    placeholder="30"
                  />
                  <span className="text-xs text-slate-500 font-medium">Min.</span>
                </div>

                <div className="sm:col-span-1 text-right">
                  <button
                    type="button"
                    onClick={() => handleRemoveDeduction(d.id)}
                    disabled={deductions.length <= 1}
                    className="p-2 text-slate-400 hover:text-rose-600 disabled:opacity-30 rounded-lg hover:bg-rose-100 transition-colors cursor-pointer"
                    title="Abzug entfernen"
                  >
                    <Trash2 className="w-4 h-4 inline" />
                  </button>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={handleAddDeduction}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-800 transition-colors cursor-pointer pt-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Weiteren Abzug hinzufügen</span>
            </button>
          </div>

          {/* Daily Result */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-950 via-slate-900 to-slate-900 text-white shadow-md">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider text-rose-200 font-bold">
                Ergebnis: Verbleibende Arbeitszeit
              </span>
              <button
                type="button"
                onClick={handleCopyDaily}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                {copiedDaily ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedDaily ? "Kopiert!" : "Ergebnis kopieren"}</span>
              </button>
            </div>

            <div className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {remH} Std. {String(remM).padStart(2, "0")} Min.
            </div>
            <div className="text-rose-200 text-sm font-semibold mt-1">
              = {remDecimal} Dezimalstunden ({remainingMinutes} Minuten netto)
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 pt-4 border-t border-white/10 text-xs">
              <div>
                <span className="text-rose-300 block">Ausgangszeit:</span>
                <span className="font-bold text-white text-sm">
                  {baseH} Std. {String(baseM).padStart(2, "0")} Min.
                </span>
              </div>
              <div>
                <span className="text-rose-300 block">Gesamter Abzug:</span>
                <span className="font-bold text-white text-sm">
                  − {dedH} Std. {String(dedM).padStart(2, "0")} Min.
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-rose-300 block">Rechenweg:</span>
                <span className="font-bold text-white text-sm">
                  {baseTotalMinutes}m − {totalDeductionMinutes}m = {remainingMinutes}m
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
