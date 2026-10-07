"use client";

import { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Coffee,
  DollarSign,
  Euro,
  RotateCcw,
  Calculator as CalcIcon,
  AlertCircle,
  Check,
  Copy,
  Printer,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Info,
  Plus,
  Trash2,
} from "lucide-react";
import {
  calculateWorkingTime,
  calculateWeeklyTimesheet,
  calculateMonthlyTimesheet,
  formatDecimalHours,
} from "@/lib/calculator";
import ResultCard from "@/components/ResultCard";
import DecimalConverter from "@/components/DecimalConverter";
import TimePicker from "@/components/TimePicker";

export default function Calculator() {
  const [calcMode, setCalcMode] = useState("weekly"); // default to "weekly", supports "daily" | "weekly" | "monthly"
  const [showInfoModal, setShowInfoModal] = useState(false);

  // -------------------------------------------------------------
  // 1. DAILY CALCULATOR STATE (German default)
  // -------------------------------------------------------------
  const [dailyStart, setDailyStart] = useState("08:00");
  const [dailyEnd, setDailyEnd] = useState("17:00");
  const [dailyBreak, setDailyBreak] = useState("45");
  const [dailyAdditionalBreaks, setDailyAdditionalBreaks] = useState([]);
  const [dailyHourlyRate, setDailyHourlyRate] = useState("");
  const [dailyCurrency, setDailyCurrency] = useState("€");
  const [showDailyPay, setShowDailyPay] = useState(false);
  const [dailyResult, setDailyResult] = useState(null);
  const [dailyError, setDailyError] = useState("");

  const breakPresets = [0, 15, 30, 45, 60];

  const handleAddDailyBreak = () => {
    setDailyAdditionalBreaks((prev) => [
      ...prev,
      {
        id: `break-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        label: `Pause ${prev.length + 2}`,
        minutes: "15",
      },
    ]);
  };

  const handleRemoveDailyBreak = (id) => {
    setDailyAdditionalBreaks((prev) => {
      const filtered = prev.filter((b) => b.id !== id);
      return filtered.map((b, idx) => ({
        ...b,
        label: `Pause ${idx + 2}`,
      }));
    });
  };

  const handleDailyBreakChange = (id, newMin) => {
    setDailyAdditionalBreaks((prev) =>
      prev.map((b) => (b.id === id ? { ...b, minutes: newMin } : b))
    );
  };

  const handleDailyCalculate = (e) => {
    if (e) e.preventDefault();
    setDailyError("");

    const res = calculateWorkingTime(
      dailyStart,
      dailyEnd,
      dailyBreak,
      dailyAdditionalBreaks,
      showDailyPay ? dailyHourlyRate : "",
      "de"
    );

    if (res.error) {
      setDailyError(res.error);
      setDailyResult(null);
      return;
    }

    setDailyResult({ ...res, currency: dailyCurrency });
  };

  const handleDailyReset = () => {
    setDailyStart("08:00");
    setDailyEnd("17:00");
    setDailyBreak("45");
    setDailyAdditionalBreaks([]);
    setDailyHourlyRate("");
    setShowDailyPay(false);
    setDailyResult(null);
    setDailyError("");
  };

  // Run daily calculate on initial render or mode switch to daily
  useEffect(() => {
    if (calcMode === "daily" && !dailyResult) {
      handleDailyCalculate();
    }
  }, [calcMode]);

  // -------------------------------------------------------------
  // 2. WEEKLY CALCULATOR STATE (German default)
  // -------------------------------------------------------------
  const [workingDaysPattern, setWorkingDaysPattern] = useState("5-mon-fri");
  const [typicalStart, setTypicalStart] = useState("08:00");
  const [typicalEnd, setTypicalEnd] = useState("17:00");
  const [typicalBreak, setTypicalBreak] = useState("60");
  const [showDetailedDays, setShowDetailedDays] = useState(false);
  const [weeklyOvertimeThreshold, setWeeklyOvertimeThreshold] = useState("40");
  const [weeklyHourlyRate, setWeeklyHourlyRate] = useState("");
  const [weeklyCurrency, setWeeklyCurrency] = useState("€");
  const [showWeeklyPay, setShowWeeklyPay] = useState(false);
  const [weeklyResult, setWeeklyResult] = useState(null);
  const [weeklyCopied, setWeeklyCopied] = useState(false);

  const initialWeeklySchedule = [
    { id: "mon", name: "Montag", active: true, startTime: "08:00", endTime: "17:00", breakMinutes: "60" },
    { id: "tue", name: "Dienstag", active: true, startTime: "08:00", endTime: "17:00", breakMinutes: "60" },
    { id: "wed", name: "Mittwoch", active: true, startTime: "08:00", endTime: "17:00", breakMinutes: "60" },
    { id: "thu", name: "Donnerstag", active: true, startTime: "08:00", endTime: "17:00", breakMinutes: "60" },
    { id: "fri", name: "Freitag", active: true, startTime: "08:00", endTime: "17:00", breakMinutes: "60" },
    { id: "sat", name: "Samstag", active: false, startTime: "08:00", endTime: "17:00", breakMinutes: "60" },
    { id: "sun", name: "Sonntag", active: false, startTime: "08:00", endTime: "17:00", breakMinutes: "60" },
  ];

  const [weeklySchedule, setWeeklySchedule] = useState(initialWeeklySchedule);

  const applyWorkingDaysPattern = (pattern, start = typicalStart, end = typicalEnd, brk = typicalBreak) => {
    setWorkingDaysPattern(pattern);
    setWeeklySchedule((prev) =>
      prev.map((d) => {
        let isActive = false;
        if (pattern === "5-mon-fri") {
          isActive = ["mon", "tue", "wed", "thu", "fri"].includes(d.id);
        } else if (pattern === "6-mon-sat") {
          isActive = ["mon", "tue", "wed", "thu", "fri", "sat"].includes(d.id);
        } else if (pattern === "7-mon-sun") {
          isActive = true;
        } else if (pattern === "4-mon-thu") {
          isActive = ["mon", "tue", "wed", "thu"].includes(d.id);
        } else if (pattern === "custom") {
          isActive = d.active;
        }

        return {
          ...d,
          active: isActive,
          startTime: start,
          endTime: end,
          breakMinutes: brk,
        };
      })
    );
  };

  const handleTypicalTimeChange = (type, value) => {
    let newStart = typicalStart;
    let newEnd = typicalEnd;
    let newBreak = typicalBreak;

    if (type === "start") {
      setTypicalStart(value);
      newStart = value;
    } else if (type === "end") {
      setTypicalEnd(value);
      newEnd = value;
    } else if (type === "break") {
      setTypicalBreak(value);
      newBreak = value;
    }

    setWeeklySchedule((prev) =>
      prev.map((d) =>
        d.active
          ? {
              ...d,
              startTime: newStart,
              endTime: newEnd,
              breakMinutes: newBreak,
            }
          : d
      )
    );
  };

  const handleToggleDayActive = (id) => {
    setWorkingDaysPattern("custom");
    setWeeklySchedule((prev) =>
      prev.map((d) => (d.id === id ? { ...d, active: !d.active } : d))
    );
  };

  const handleDayFieldChange = (id, field, value) => {
    setWorkingDaysPattern("custom");
    setWeeklySchedule((prev) =>
      prev.map((d) => (d.id === id ? { ...d, [field]: value } : d))
    );
  };

  const handleWeeklyCalculate = (e) => {
    if (e) e.preventDefault();
    const threshold = parseFloat(weeklyOvertimeThreshold) || 40;
    const rate = showWeeklyPay ? weeklyHourlyRate : "";
    const res = calculateWeeklyTimesheet(weeklySchedule, rate, threshold, "de");
    setWeeklyResult({ ...res, currency: weeklyCurrency });
  };

  const handleWeeklyReset = () => {
    setWorkingDaysPattern("5-mon-fri");
    setTypicalStart("08:00");
    setTypicalEnd("17:00");
    setTypicalBreak("60");
    setWeeklyOvertimeThreshold("40");
    setWeeklyHourlyRate("");
    setShowWeeklyPay(false);
    setShowDetailedDays(false);
    applyWorkingDaysPattern("5-mon-fri", "08:00", "17:00", "60");
  };

  // Run initial weekly calculate
  useEffect(() => {
    handleWeeklyCalculate();
  }, [weeklySchedule, weeklyOvertimeThreshold, weeklyHourlyRate, showWeeklyPay, weeklyCurrency]);

  const handleCopyWeeklySummary = () => {
    if (!weeklyResult) return;
    const lines = [
      "=== WOCHENARBEITSZEIT-ZUSAMMENFASSUNG ===",
      `Nettoarbeitszeit: ${weeklyResult.totalNetDuration} (${weeklyResult.totalDecimalHours} Stunden)`,
      `Bruttoschichtdauer: ${weeklyResult.totalGrossDuration}`,
      `Gesamte Pausen: ${weeklyResult.totalBreakDuration}`,
      `Aktive Arbeitstage: ${weeklyResult.activeDaysCount} Tage`,
      `Reguläre Stunden: ${weeklyResult.regularDecimalHours} Std.`,
      weeklyResult.hasOvertime ? `Überstunden: ${weeklyResult.overtimeDecimalHours} Std.` : null,
      weeklyResult.earnings ? `Geschätzter Bruttolohn: ${weeklyResult.earnings.totalEarnings} ${weeklyCurrency}` : null,
      "\nTagesübersicht:",
      ...weeklyResult.days
        .filter((d) => d.active)
        .map(
          (d) =>
            `- ${d.name}: ${d.startTime} - ${d.endTime} Uhr (${d.formattedNet}, Pause: ${d.breakMinutes} Min.)`
        ),
      "\nBerechnet mit Arbeitsstundenrechner.de (Online-Arbeitszeitrechner)",
    ]
      .filter(Boolean)
      .join("\n");

    navigator.clipboard.writeText(lines).then(() => {
      setWeeklyCopied(true);
      setTimeout(() => setWeeklyCopied(false), 2200);
    });
  };

  // -------------------------------------------------------------
  // 3. MONTHLY CALCULATOR STATE (German default)
  // -------------------------------------------------------------
  const [monthlyMethod, setMonthlyMethod] = useState("formula"); // "formula" | "weeks"
  const [formulaWeeklyHours, setFormulaWeeklyHours] = useState("40");
  const [formulaWeeksRatio, setFormulaWeeksRatio] = useState("4,3333");
  const [monthlyHourlyRate, setMonthlyHourlyRate] = useState("");
  const [monthlyCurrency, setMonthlyCurrency] = useState("€");
  const [showMonthlyPay, setShowMonthlyPay] = useState(false);

  // Weeks timesheet state
  const [monthlyWeeks, setMonthlyWeeks] = useState([
    { id: "w1", label: "Woche 1", hours: "40,00" },
    { id: "w2", label: "Woche 2", hours: "40,00" },
    { id: "w3", label: "Woche 3", hours: "40,00" },
    { id: "w4", label: "Woche 4", hours: "40,00" },
  ]);
  const [targetMonthlyHours, setTargetMonthlyHours] = useState("160");
  const [monthlyWeeksResult, setMonthlyWeeksResult] = useState(null);

  const handleWeekHoursChange = (id, newHours) => {
    setMonthlyWeeks((prev) =>
      prev.map((w) => (w.id === id ? { ...w, hours: newHours } : w))
    );
  };

  const handleAddWeek = () => {
    const nextIdx = monthlyWeeks.length + 1;
    setMonthlyWeeks((prev) => [
      ...prev,
      { id: `w${Date.now()}`, label: `Woche ${nextIdx}`, hours: "40,00" },
    ]);
  };

  const handleRemoveWeek = (id) => {
    if (monthlyWeeks.length <= 1) return;
    setMonthlyWeeks((prev) => prev.filter((w) => w.id !== id));
  };

  const handleMonthlyWeeksCalculate = () => {
    const rate = showMonthlyPay ? monthlyHourlyRate : "";
    const cleanWeeks = monthlyWeeks.map((w) => ({
      ...w,
      hours: String(w.hours).replace(/,/g, "."),
    }));
    const res = calculateMonthlyTimesheet(
      cleanWeeks,
      rate,
      parseFloat(String(targetMonthlyHours).replace(/,/g, ".")) || 160,
      "de"
    );
    setMonthlyWeeksResult({ ...res, currency: monthlyCurrency });
  };

  useEffect(() => {
    handleMonthlyWeeksCalculate();
  }, [monthlyWeeks, monthlyHourlyRate, targetMonthlyHours, showMonthlyPay, monthlyCurrency]);

  // Projected formula calculation
  const weeklyHoursNum = parseFloat(String(formulaWeeklyHours).replace(/,/g, ".")) || 0;
  const ratioNum = parseFloat(String(formulaWeeksRatio).replace(/,/g, ".")) || 4.3333;
  const formulaTotalMonthlyHours = Math.round(weeklyHoursNum * ratioNum * 100) / 100;
  const formulaMonthlyPay =
    showMonthlyPay && monthlyHourlyRate
      ? (formulaTotalMonthlyHours * parseFloat(String(monthlyHourlyRate).replace(/,/g, "."))).toFixed(2).replace(".", ",")
      : null;

  return (
    <div className="w-full">
      {/* ========================================================= */}
      {/* TOP FLOATING TABS SELECTOR (German)                       */}
      {/* [ 📅 Täglich ]  [ 📅 Wöchentlich ]  [ 📅 Monatlich ]      */}
      {/* ========================================================= */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center p-1.5 bg-white rounded-2xl shadow-sm border border-slate-200/90 gap-1.5">
          <button
            type="button"
            onClick={() => setCalcMode("daily")}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-all ${
              calcMode === "daily"
                ? "bg-[#0b4870] text-white shadow-sm"
                : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Täglich</span>
          </button>

          <button
            type="button"
            onClick={() => setCalcMode("weekly")}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-all ${
              calcMode === "weekly"
                ? "bg-[#0b4870] text-white shadow-sm"
                : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Wöchentlich</span>
          </button>

          <button
            type="button"
            onClick={() => setCalcMode("monthly")}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-all ${
              calcMode === "monthly"
                ? "bg-[#0b4870] text-white shadow-sm"
                : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Monatlich</span>
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MAIN TWO-COLUMN GRID: CALCULATOR (LEFT) + CONVERTER (RIGHT) */}
      {/* ========================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* LEFT COLUMN: ACTIVE CALCULATOR CARD */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-6">
          {/* ===================================================== */}
          {/* 1. WEEKLY CALCULATOR (Wöchentlich)                    */}
          {/* ===================================================== */}
          {calcMode === "weekly" && (
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
              {/* Card Header with Title and (i) Info icon */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Wöchentliche Arbeitszeit berechnen
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Wochenstunden, Überstunden und geschätzten Bruttolohn exakt ermitteln
                  </p>
                </div>

                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowInfoModal(!showInfoModal)}
                    className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                    title="Berechnung der Wochenarbeitszeit nach Arbeitszeitgesetz (ArbZG)"
                    aria-label="Informationen zur Berechnung"
                  >
                    <Info className="w-5 h-5" />
                  </button>

                  {showInfoModal && (
                    <div className="absolute right-0 top-10 w-72 sm:w-80 p-4 bg-slate-900 text-white text-xs rounded-xl shadow-xl z-30 border border-slate-800 leading-relaxed">
                      <div className="font-bold text-sm mb-1 text-blue-300">
                        So funktioniert die Wochenberechnung:
                      </div>
                      <p className="text-slate-300 mb-2">
                        Die Wochenarbeitszeit errechnet sich aus den täglichen Nettozeiten (Arbeitsende minus Beginn abzüglich Pausenzeiten).
                      </p>
                      <p className="text-slate-300">
                        Stunden über Ihrer festgelegten Wochenstundengrenze (z.B. 40 Stunden) werden automatisch als Überstunden erfasst.
                      </p>
                      <button
                        type="button"
                        onClick={() => setShowInfoModal(false)}
                        className="mt-3 text-[11px] font-bold text-blue-400 hover:underline block text-right"
                      >
                        Schließen
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Form Controls */}
              <div className="space-y-6">
                {/* 1. Working days per week dropdown */}
                <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/50 border border-blue-100">
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 mb-2.5">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>Arbeitstage pro Woche</span>
                  </label>
                  <select
                    value={workingDaysPattern}
                    onChange={(e) => applyWorkingDaysPattern(e.target.value)}
                    className="w-full h-12 px-4 rounded-xl border border-blue-200 bg-white text-slate-900 text-sm font-semibold focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none cursor-pointer transition-all shadow-xs"
                  >
                    <option value="5-mon-fri">5 Tage (Montag – Freitag)</option>
                    <option value="6-mon-sat">6 Tage (Montag – Samstag)</option>
                    <option value="7-mon-sun">7 Tage (Montag – Sonntag)</option>
                    <option value="4-mon-thu">4 Tage (Montag – Donnerstag)</option>
                    <option value="custom">Individueller Zeitplan (Jeden Tag anpassen)</option>
                  </select>
                </div>

                {/* 2. Typical Start and End Time with custom TimePicker */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                      <span>Typischer Arbeitsbeginn</span>
                    </label>
                    <TimePicker
                      value={typicalStart}
                      onChange={(val) => handleTypicalTimeChange("start", val)}
                      presets={["06:00", "07:00", "07:30", "08:00", "08:30", "09:00"]}
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                      <span>Typisches Arbeitsende</span>
                    </label>
                    <TimePicker
                      value={typicalEnd}
                      onChange={(val) => handleTypicalTimeChange("end", val)}
                      presets={["15:30", "16:00", "16:30", "17:00", "17:30", "18:00"]}
                    />
                  </div>
                </div>

                {/* 3. Break Duration */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700">
                      <Coffee className="w-4 h-4 text-amber-600" />
                      <span>Pausenzeit pro Tag (Minuten)</span>
                    </label>
                    <div className="flex gap-1.5">
                      {[0, 30, 45, 60].map((mins) => (
                        <button
                          key={mins}
                          type="button"
                          onClick={() => handleTypicalTimeChange("break", String(mins))}
                          className={`px-2.5 py-1 text-xs rounded-lg font-medium transition-colors cursor-pointer ${
                            typicalBreak === String(mins)
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
                    max="300"
                    step="5"
                    value={typicalBreak}
                    onChange={(e) => handleTypicalTimeChange("break", e.target.value)}
                    placeholder="z.B. 60"
                    className="w-full h-12 px-4 rounded-xl border border-slate-300 bg-white text-slate-900 text-base sm:text-sm font-semibold focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all shadow-xs"
                  />
                </div>

                {/* 4. Fine-Tune Individual Days (Collapsible accordion) */}
                <div className="border border-slate-200 rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setShowDetailedDays(!showDetailedDays)}
                    className="w-full p-4 bg-slate-50 hover:bg-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800 transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span>Einzelne Tage anpassen (Mo – So)</span>
                      <span className="text-xs font-normal text-slate-500">
                        ({weeklySchedule.filter((d) => d.active).length} Arbeitstage aktiv)
                      </span>
                    </span>
                    {showDetailedDays ? (
                      <ChevronUp className="w-4 h-4 text-slate-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-500" />
                    )}
                  </button>

                  {showDetailedDays && (
                    <div className="p-4 sm:p-5 divide-y divide-slate-100 bg-white">
                      {weeklySchedule.map((day) => (
                        <div
                          key={day.id}
                          className={`py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                            !day.active ? "opacity-50" : ""
                          }`}
                        >
                          <div className="flex items-center gap-3 w-36">
                            <input
                              type="checkbox"
                              id={`active-${day.id}`}
                              checked={day.active}
                              onChange={() => handleToggleDayActive(day.id)}
                              className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
                            />
                            <label
                              htmlFor={`active-${day.id}`}
                              className="text-xs sm:text-sm font-bold text-slate-800 cursor-pointer"
                            >
                              {day.name}
                            </label>
                          </div>

                          {day.active ? (
                            <div className="flex flex-wrap items-center gap-2 flex-1 sm:justify-end">
                              <div className="flex items-center gap-1 text-xs">
                                <span className="text-slate-400">Beginn:</span>
                                <input
                                  type="text"
                                  maxLength={5}
                                  placeholder="08:00"
                                  value={day.startTime}
                                  onChange={(e) =>
                                    handleDayFieldChange(day.id, "startTime", e.target.value)
                                  }
                                  className="w-16 h-8 px-1.5 rounded-lg border border-slate-200 text-xs text-slate-800 font-semibold text-center focus:border-blue-600 outline-none"
                                />
                              </div>

                              <div className="flex items-center gap-1 text-xs">
                                <span className="text-slate-400">Ende:</span>
                                <input
                                  type="text"
                                  maxLength={5}
                                  placeholder="17:00"
                                  value={day.endTime}
                                  onChange={(e) =>
                                    handleDayFieldChange(day.id, "endTime", e.target.value)
                                  }
                                  className="w-16 h-8 px-1.5 rounded-lg border border-slate-200 text-xs text-slate-800 font-semibold text-center focus:border-blue-600 outline-none"
                                />
                              </div>

                              <div className="flex items-center gap-1 text-xs">
                                <span className="text-slate-400">Pause:</span>
                                <input
                                  type="number"
                                  min="0"
                                  max="240"
                                  value={day.breakMinutes}
                                  onChange={(e) =>
                                    handleDayFieldChange(day.id, "breakMinutes", e.target.value)
                                  }
                                  className="w-14 h-8 px-2 rounded-lg border border-slate-200 text-xs text-slate-800 font-medium text-center"
                                />
                                <span className="text-slate-400">Min.</span>
                              </div>
                            </div>
                          ) : (
                            <span className="text-xs text-slate-400 italic">Frei (Kein Arbeitstag)</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* 5. Optional Overtime & Pay Rate Settings */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Wöchentliche Überstundengrenze
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        min="0"
                        max="100"
                        step="0.5"
                        value={weeklyOvertimeThreshold}
                        onChange={(e) => setWeeklyOvertimeThreshold(e.target.value)}
                        placeholder="z.B. 40"
                        className="w-full h-11 px-3.5 rounded-xl border border-slate-300 text-slate-900 text-sm font-medium focus:border-blue-600 outline-none"
                      />
                      <span className="absolute right-3.5 top-3 text-xs text-slate-400 font-medium">
                        Std./Woche
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-semibold text-slate-700">
                        Optionaler Stundenlohn
                      </label>
                      <button
                        type="button"
                        onClick={() => setShowWeeklyPay(!showWeeklyPay)}
                        className="text-[11px] text-blue-600 font-semibold hover:underline cursor-pointer"
                      >
                        {showWeeklyPay ? "Ausblenden" : "+ Lohn angeben"}
                      </button>
                    </div>

                    {showWeeklyPay ? (
                      <div className="flex gap-2">
                        <select
                          value={weeklyCurrency}
                          onChange={(e) => setWeeklyCurrency(e.target.value)}
                          className="w-20 h-11 px-2 rounded-xl border border-slate-300 bg-slate-50 text-xs font-bold text-slate-700 focus:border-blue-600 outline-none"
                        >
                          <option value="€">€ (EUR)</option>
                          <option value="CHF">CHF</option>
                          <option value="$">$ (USD)</option>
                        </select>
                        <input
                          type="number"
                          min="0"
                          step="0.01"
                          value={weeklyHourlyRate}
                          onChange={(e) => setWeeklyHourlyRate(e.target.value)}
                          placeholder="z.B. 25,00"
                          className="flex-1 h-11 px-3.5 rounded-xl border border-slate-300 text-slate-900 text-sm font-medium focus:border-blue-600 outline-none"
                        />
                      </div>
                    ) : (
                      <div className="h-11 px-3.5 rounded-xl border border-dashed border-slate-200 bg-slate-50 flex items-center text-xs text-slate-400">
                        Klicken Sie auf &ldquo;+ Lohn angeben&rdquo; für die Verdienstberechnung
                      </div>
                    )}
                  </div>
                </div>

                {/* 6. Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-5 pb-2">
                  <button
                    type="button"
                    onClick={handleWeeklyCalculate}
                    className="w-full sm:flex-1 py-4 px-6 min-h-[54px] bg-[#0b4870] hover:bg-[#083552] text-white font-bold text-base sm:text-sm rounded-xl flex items-center justify-center gap-2.5 shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-[0.99]"
                  >
                    <CalcIcon className="w-5 h-5 shrink-0" />
                    <span>Wochenarbeitszeit berechnen</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWeeklyReset}
                    className="w-full sm:w-auto py-3.5 px-5 min-h-[48px] border border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold text-sm rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer active:scale-[0.99]"
                  >
                    <RotateCcw className="w-4 h-4 shrink-0" />
                    <span>Zurücksetzen</span>
                  </button>
                </div>
              </div>

              {/* Weekly Result Section (2 cards per row) */}
              {weeklyResult && (
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Wochen-Zusammenfassung
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleCopyWeeklySummary}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        {weeklyCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">Kopiert!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Kopieren</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => window.print()}
                        className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>Drucken</span>
                      </button>
                    </div>
                  </div>

                  {/* Highlight Cards - 2 cards per row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                    <div className="p-5 rounded-2xl bg-blue-50/80 border border-blue-200/90 shadow-xs flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block">
                          Nettoarbeitszeit
                        </span>
                        <span className="text-2xl sm:text-3xl font-extrabold text-blue-950 mt-2 block">
                          {weeklyResult.totalNetDuration}
                        </span>
                      </div>
                      <span className="text-xs text-blue-600 font-medium mt-2 pt-2 border-t border-blue-100">
                        {weeklyResult.activeDaysCount} aktive Arbeitstage ({weeklyResult.totalGrossDuration} brutto)
                      </span>
                    </div>

                    <div className="p-5 rounded-2xl bg-indigo-50/80 border border-indigo-200/90 shadow-xs flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 block">
                          Dezimalstunden
                        </span>
                        <span className="text-2xl sm:text-3xl font-extrabold text-indigo-950 mt-2 block">
                          {weeklyResult.totalDecimalHours} <span className="text-sm font-semibold">Std.</span>
                        </span>
                      </div>
                      <span className="text-xs text-indigo-600 font-medium mt-2 pt-2 border-t border-indigo-100">
                        Für Stundenzettel &amp; Zeiterfassung
                      </span>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                          Reguläre Arbeitszeit vs. Überstunden
                        </span>
                        <span className="text-xl sm:text-2xl font-bold text-slate-900 mt-2 block">
                          {weeklyResult.regularDecimalHours} Std. reg
                          {weeklyResult.hasOvertime ? (
                            <span className="text-rose-600 ml-1.5 font-bold">
                              + {weeklyResult.overtimeDecimalHours} Std. ÜStd.
                            </span>
                          ) : (
                            <span className="text-slate-400 text-xs ml-1 font-normal">(0 Std. ÜStd.)</span>
                          )}
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 font-medium mt-2 pt-2 border-t border-slate-200/60">
                        Wochengrenze: {weeklyOvertimeThreshold} Stunden
                      </span>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                          Gesamte Pausenzeit
                        </span>
                        <span className="text-xl sm:text-2xl font-bold text-slate-900 mt-2 block">
                          {weeklyResult.totalBreakDuration}
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 font-medium mt-2 pt-2 border-t border-slate-200/60">
                        {weeklyResult.totalBreakMinutes} Minuten in der gesamten Woche
                      </span>
                    </div>
                  </div>

                  {/* Optional Pay Display */}
                  {weeklyResult.earnings && (
                    <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 mb-5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-emerald-100 text-emerald-800 rounded-xl">
                          <Euro className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
                            Geschätzter wöchentlicher Bruttolohn
                          </span>
                          <span className="text-xs text-emerald-700">
                            Berechnet bei {weeklyResult.hourlyRate} {weeklyCurrency} pro Stunde
                          </span>
                        </div>
                      </div>
                      <span className="text-3xl font-extrabold text-emerald-950">
                        {weeklyResult.earnings.totalEarnings} {weeklyCurrency}
                      </span>
                    </div>
                  )}

                  {/* Detailed Day List */}
                  <div className="overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                        <tr>
                          <th className="px-3 py-2.5">Wochentag</th>
                          <th className="px-3 py-2.5">Arbeitszeit</th>
                          <th className="px-3 py-2.5">Pause</th>
                          <th className="px-3 py-2.5 text-right">Nettoarbeitszeit</th>
                          <th className="px-3 py-2.5 text-right">Dezimalstunden</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {weeklyResult.days.map((day) => (
                          <tr
                            key={day.id}
                            className={day.active ? "hover:bg-slate-50/50" : "bg-slate-50/30 text-slate-400"}
                          >
                            <td className="px-3 py-2 font-semibold text-slate-800">
                              {day.name}
                            </td>
                            <td className="px-3 py-2">
                              {day.active ? `${day.startTime} – ${day.endTime} Uhr` : "—"}
                            </td>
                            <td className="px-3 py-2">
                              {day.active ? `${day.breakMinutes} Min.` : "—"}
                            </td>
                            <td className="px-3 py-2 text-right font-medium text-slate-800">
                              {day.active ? day.formattedNet : "0 Std. 00 Min."}
                            </td>
                            <td className="px-3 py-2 text-right font-bold text-blue-900">
                              {day.active ? `${day.decimalHours} Std.` : "0,00 Std."}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ===================================================== */}
          {/* 2. DAILY CALCULATOR (Täglich)                         */}
          {/* ===================================================== */}
          {calcMode === "daily" && (
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Tägliche Arbeitszeit berechnen
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Arbeitsbeginn, Arbeitsende und Pausen nach ArbZG eingeben
                  </p>
                </div>
                <div className="p-2 bg-blue-50 text-blue-700 rounded-xl">
                  <Clock className="w-5 h-5" />
                </div>
              </div>

              {dailyError && (
                <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span>{dailyError}</span>
                </div>
              )}

              <div className="space-y-6">
                {/* Time Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                      <span>Arbeitsbeginn</span>
                    </label>
                    <TimePicker
                      value={dailyStart}
                      onChange={(val) => setDailyStart(val)}
                      presets={["06:00", "07:00", "07:30", "08:00", "08:30", "09:00"]}
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                      <span>Arbeitsende</span>
                    </label>
                    <TimePicker
                      value={dailyEnd}
                      onChange={(val) => setDailyEnd(val)}
                      presets={["15:30", "16:00", "16:30", "17:00", "17:30", "18:00"]}
                    />
                  </div>
                </div>

                {/* Break Duration */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700">
                      <Coffee className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>Pausendauer (Minuten)</span>
                    </label>
                  </div>

                  {/* 5 Equal Columns: Perfectly fits on all mobile screens without overflowing */}
                  <div className="grid grid-cols-5 gap-1.5 sm:gap-2 mb-2.5 w-full">
                    {breakPresets.map((mins) => (
                      <button
                        key={mins}
                        type="button"
                        onClick={() => setDailyBreak(String(mins))}
                        className={`py-2 px-1 text-xs text-center rounded-xl font-semibold transition-all cursor-pointer flex items-center justify-center ${
                          dailyBreak === String(mins)
                            ? "bg-blue-600 text-white shadow-xs ring-2 ring-blue-600/20"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        {mins} Min.
                      </button>
                    ))}
                  </div>

                  <input
                    type="number"
                    min="0"
                    max="300"
                    step="5"
                    value={dailyBreak}
                    onChange={(e) => setDailyBreak(e.target.value)}
                    placeholder="z.B. 45"
                    className="w-full h-12 px-4 rounded-xl border border-slate-300 bg-white text-slate-900 text-base sm:text-sm font-semibold focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all shadow-xs"
                  />
                </div>

                {/* Additional Breaks */}
                {dailyAdditionalBreaks.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Weitere Pausen:
                    </span>
                    {dailyAdditionalBreaks.map((b) => (
                      <div key={b.id} className="flex items-center gap-2">
                        <input
                          type="number"
                          min="0"
                          max="240"
                          step="5"
                          value={b.minutes}
                          onChange={(e) => handleDailyBreakChange(b.id, e.target.value)}
                          className="flex-1 h-11 px-3.5 rounded-xl border border-slate-300 text-sm font-medium"
                          placeholder="Minuten"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveDailyBreak(b.id)}
                          className="p-2.5 text-slate-400 hover:text-rose-600 rounded-xl hover:bg-rose-50 transition-colors cursor-pointer"
                          title="Pause entfernen"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    onClick={handleAddDailyBreak}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Weitere Pause hinzufügen</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowDailyPay(!showDailyPay)}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                  >
                    {showDailyPay ? "Stundenlohn ausblenden" : "+ Stundenlohn angeben"}
                  </button>
                </div>

                {/* Optional Daily Pay Rate */}
                {showDailyPay && (
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Stundenlohn (Brutto)
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={dailyCurrency}
                        onChange={(e) => setDailyCurrency(e.target.value)}
                        className="w-20 h-11 px-2 rounded-xl border border-slate-300 bg-white text-xs font-bold"
                      >
                        <option value="€">€ (EUR)</option>
                        <option value="CHF">CHF</option>
                        <option value="$">$ (USD)</option>
                      </select>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={dailyHourlyRate}
                        onChange={(e) => setDailyHourlyRate(e.target.value)}
                        placeholder="z.B. 20,00"
                        className="flex-1 h-11 px-3.5 rounded-xl border border-slate-300 bg-white text-sm font-medium"
                      />
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-5 pb-2">
                  <button
                    type="button"
                    onClick={handleDailyCalculate}
                    className="w-full sm:flex-1 py-4 px-6 min-h-[54px] bg-[#0b4870] hover:bg-[#083552] text-white font-bold text-base sm:text-sm rounded-xl flex items-center justify-center gap-2.5 shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-[0.99]"
                  >
                    <CalcIcon className="w-5 h-5 shrink-0" />
                    <span>Arbeitszeit berechnen</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleDailyReset}
                    className="w-full sm:w-auto py-3.5 px-5 min-h-[48px] border border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold text-sm rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer active:scale-[0.99]"
                  >
                    <RotateCcw className="w-4 h-4 shrink-0" />
                    <span>Zurücksetzen</span>
                  </button>
                </div>
              </div>

              {/* Daily Result Display */}
              {dailyResult && (
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <ResultCard result={dailyResult} onReset={handleDailyReset} lang="de" />
                </div>
              )}
            </div>
          )}

          {/* ===================================================== */}
          {/* 3. MONTHLY CALCULATOR (Monatlich)                     */}
          {/* ===================================================== */}
          {calcMode === "monthly" && (
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
              <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Monatliche Arbeitszeit berechnen
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Monatsstunden über die Lohnabrechnungsformel oder 4–5 Monatswochen berechnen
                  </p>
                </div>
                <div className="p-2 bg-blue-50 text-blue-700 rounded-xl">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>

              {/* Method Switcher */}
              <div className="flex p-1 bg-slate-100 rounded-xl mb-6">
                <button
                  type="button"
                  onClick={() => setMonthlyMethod("formula")}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    monthlyMethod === "formula"
                      ? "bg-white text-blue-900 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Standard-Lohnformel (× 4,3333)
                </button>
                <button
                  type="button"
                  onClick={() => setMonthlyMethod("weeks")}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    monthlyMethod === "weeks"
                      ? "bg-white text-blue-900 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Summe der Monatswochen
                </button>
              </div>

              {/* Approach 1: Payroll Formula */}
              {monthlyMethod === "formula" ? (
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-blue-900 leading-relaxed">
                    <strong>Deutscher Lohnabrechnungs-Standard:</strong> In der Lohn- und Gehaltsabrechnung hat ein
                    Monat durchschnittlich <strong>4,3333 Wochen</strong> (52 Wochen ÷ 12 Monate = 4,3333). Eine
                    vollzeitübliche 40-Stunden-Woche entspricht somit exakt <strong>173,33 Monatsstunden</strong>.
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                        Wöchentliche Vertragsstunden
                      </label>
                      <input
                        type="text"
                        value={formulaWeeklyHours}
                        onChange={(e) => setFormulaWeeklyHours(e.target.value)}
                        placeholder="z.B. 40"
                        className="w-full h-12 px-4 rounded-xl border border-slate-300 text-slate-900 font-semibold text-base sm:text-sm focus:border-blue-600 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2">
                        Wochenfaktor pro Monat (52 ÷ 12)
                      </label>
                      <input
                        type="text"
                        value={formulaWeeksRatio}
                        onChange={(e) => setFormulaWeeksRatio(e.target.value)}
                        className="w-full h-12 px-4 rounded-xl border border-slate-300 text-slate-900 font-semibold text-base sm:text-sm focus:border-blue-600 outline-none"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-semibold text-slate-700">
                        Optionaler Stundenlohn
                      </label>
                      <button
                        type="button"
                        onClick={() => setShowMonthlyPay(!showMonthlyPay)}
                        className="text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
                      >
                        {showMonthlyPay ? "Ausblenden" : "+ Lohn angeben"}
                      </button>
                    </div>

                    {showMonthlyPay && (
                      <div className="flex gap-2">
                        <select
                          value={monthlyCurrency}
                          onChange={(e) => setMonthlyCurrency(e.target.value)}
                          className="w-20 h-11 px-2 rounded-xl border border-slate-300 bg-white text-xs font-bold"
                        >
                          <option value="€">€</option>
                          <option value="CHF">CHF</option>
                          <option value="$">$</option>
                        </select>
                        <input
                          type="text"
                          value={monthlyHourlyRate}
                          onChange={(e) => setMonthlyHourlyRate(e.target.value)}
                          placeholder="z.B. 25,00"
                          className="flex-1 h-11 px-3.5 rounded-xl border border-slate-300 text-sm font-medium"
                        />
                      </div>
                    )}
                  </div>

                  {/* Formula Result Card */}
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-900 to-slate-900 text-white mt-6 shadow-md">
                    <span className="text-xs uppercase tracking-wider text-blue-300 font-bold block mb-1">
                      Berechnete monatliche Arbeitszeit
                    </span>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                      <div>
                        <span className="text-3xl sm:text-4xl font-extrabold text-white">
                          {formulaTotalMonthlyHours.toFixed(2).replace(".", ",")}
                        </span>
                        <span className="text-base text-blue-200 ml-2 font-semibold">
                          Stunden / Monat
                        </span>
                      </div>

                      {formulaMonthlyPay && (
                        <div className="text-right">
                          <span className="text-xs text-blue-300 block">Geschätztes Bruttomonatsgehalt:</span>
                          <span className="text-2xl font-bold text-emerald-400">
                            {formulaMonthlyPay} {monthlyCurrency}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-blue-800/80 text-xs text-blue-200 flex items-center justify-between">
                      <span>Formel: {weeklyHoursNum} Std. × {ratioNum} = {formulaTotalMonthlyHours.toFixed(2).replace(".", ",")} Std.</span>
                      <span>~{(formulaTotalMonthlyHours / 21.67).toFixed(1).replace(".", ",")} Std./Arbeitstag (bei 21,67 Tagen)</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Approach 2: Weeks Sum */
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                      Stunden pro Monatswoche eingeben:
                    </label>

                    {monthlyWeeks.map((week) => (
                      <div key={week.id} className="flex items-center gap-3">
                        <span className="w-20 text-xs sm:text-sm font-bold text-slate-800">
                          {week.label}
                        </span>
                        <input
                          type="text"
                          value={week.hours}
                          onChange={(e) => handleWeekHoursChange(week.id, e.target.value)}
                          className="flex-1 h-11 px-3.5 rounded-xl border border-slate-300 text-slate-900 text-sm font-semibold focus:border-blue-600 outline-none"
                          placeholder="z.B. 40,00"
                        />
                        <span className="text-xs text-slate-400">Stunden</span>
                        {monthlyWeeks.length > 1 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveWeek(week.id)}
                            className="p-2 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                            title="Woche entfernen"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={handleAddWeek}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 cursor-pointer pt-2"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Weitere Woche hinzufügen</span>
                    </button>
                  </div>

                  {monthlyWeeksResult && (
                    <div className="p-5 rounded-2xl bg-blue-50/80 border border-blue-200 mt-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
                          Gesamte Monatsarbeitszeit
                        </span>
                        <span className="text-xs text-slate-500">
                          Ø {monthlyWeeksResult.averageWeeklyHours.replace(".", ",")} Std./Woche
                        </span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-extrabold text-blue-950">
                          {monthlyWeeksResult.totalDecimalHours}
                        </span>
                        <span className="text-sm font-semibold text-blue-700">Stunden</span>
                        <span className="text-xs text-slate-500 ml-2">
                          ({monthlyWeeksResult.totalDuration})
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: DECIMAL HOURS & INDUSTRIAL MINUTES WIDGET (German) */}
        <div className="lg:col-span-5 xl:col-span-4">
          <DecimalConverter />
        </div>
      </div>
    </div>
  );
}
