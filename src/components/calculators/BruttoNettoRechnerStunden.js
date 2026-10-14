"use client";

import { useState } from "react";
import {
  Wallet,
  Sparkles,
  RotateCcw,
  Check,
  Copy,
  Percent,
  Euro,
  Info,
  Clock,
  ShieldCheck,
  TrendingDown,
  Building2,
} from "lucide-react";

export default function BruttoNettoRechnerStunden() {
  const [hourlyRate, setHourlyRate] = useState("20.00");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [taxClass, setTaxClass] = useState("1");
  const [hasChildren, setHasChildren] = useState(false);
  const [hasChurchTax, setHasChurchTax] = useState(false);
  const [churchTaxRate, setChurchTaxRate] = useState("9"); // 8% or 9%
  const [healthInsuranceAddon, setHealthInsuranceAddon] = useState("1.7"); // Zusatzbeitrag Ø 1.7%
  const [copied, setCopied] = useState(false);

  // Parse values
  const rateNum = parseFloat(String(hourlyRate).replace(/,/g, ".")) || 0;
  const hoursWeekNum = parseFloat(String(hoursPerWeek).replace(/,/g, ".")) || 0;
  
  // Monthly hours = Weekly hours * 4.3333 (approx 52 / 12)
  const monthlyHours = hoursWeekNum * (52 / 12);
  const monthlyGross = rateNum * monthlyHours;
  const yearlyGross = monthlyGross * 12;

  // Social Security Rates (Employee share)
  // Rentenversicherung: 9.3% (BBG 2024: 7.550 €/Monat West)
  const rvRate = 0.093;
  const rvBBG = 7550;
  const rvAssessable = Math.min(monthlyGross, rvBBG);
  const rvAmount = monthlyGross > 538 ? rvAssessable * rvRate : 0;

  // Arbeitslosenversicherung: 1.3% (BBG 2024: 7.550 €/Monat West)
  const alvRate = 0.013;
  const alvBBG = 7550;
  const alvAssessable = Math.min(monthlyGross, alvBBG);
  const alvAmount = monthlyGross > 538 ? alvAssessable * alvRate : 0;

  // Krankenversicherung: 7.3% base + half of addon (Ø 1.7% / 2 = 0.85%)
  const kvAddonNum = parseFloat(String(healthInsuranceAddon).replace(/,/g, ".")) || 1.7;
  const kvRate = 0.073 + (kvAddonNum / 100) / 2;
  const kvBBG = 5175; // 2024
  const kvAssessable = Math.min(monthlyGross, kvBBG);
  const kvAmount = monthlyGross > 538 ? kvAssessable * kvRate : 0;

  // Pflegeversicherung:
  // Mit Kind: 2.2% | Kinderlos ab 23: 2.8% (2.2% + 0.6% Kinderlosenzuschlag)
  const pvRate = hasChildren ? 0.022 : 0.028;
  const pvBBG = 5175;
  const pvAssessable = Math.min(monthlyGross, pvBBG);
  const pvAmount = monthlyGross > 538 ? pvAssessable * pvRate : 0;

  const totalSocialSecurity = rvAmount + alvAmount + kvAmount + pvAmount;

  // Wage Tax (Lohnsteuer) Approximation for Germany
  // Standard Grundfreibetrag ~11.784 € / Jahr
  let taxableAnnualIncome = Math.max(0, yearlyGross - (totalSocialSecurity * 12) - 1230); // 1230 € Arbeitnehmerpauschbetrag

  if (taxClass === "2") {
    // Entlastungsbetrag für Alleinerziehende ~4.260 €
    taxableAnnualIncome = Math.max(0, taxableAnnualIncome - 4260);
  } else if (taxClass === "3") {
    // Splitting advantage approximation
    taxableAnnualIncome = taxableAnnualIncome * 0.65;
  } else if (taxClass === "5") {
    // Class 5 has higher initial tax
    taxableAnnualIncome = taxableAnnualIncome * 1.35;
  } else if (taxClass === "6") {
    // Class 6: No basic tax-free allowance
    taxableAnnualIncome = yearlyGross * 0.95;
  }

  // Progressive tax formula approximation
  let annualTax = 0;
  const gfb = taxClass === "6" ? 0 : 11784;

  if (monthlyGross <= 538) {
    // Minijob: Tax free for employee
    annualTax = 0;
  } else if (taxableAnnualIncome > gfb) {
    const diff = taxableAnnualIncome - gfb;
    if (diff <= 5000) {
      annualTax = diff * 0.14;
    } else if (diff <= 20000) {
      annualTax = 700 + (diff - 5000) * 0.24;
    } else if (diff <= 55000) {
      annualTax = 4300 + (diff - 20000) * 0.35;
    } else {
      annualTax = 16550 + (diff - 55000) * 0.42;
    }
  }

  const monthlyWageTax = monthlyGross > 538 ? Math.max(0, annualTax / 12) : 0;

  // Kirchensteuer
  const churchRateNum = parseFloat(churchTaxRate) / 100 || 0.09;
  const monthlyChurchTax = hasChurchTax && monthlyGross > 538 ? monthlyWageTax * churchRateNum : 0;

  // Total deductions
  const totalDeductions = totalSocialSecurity + monthlyWageTax + monthlyChurchTax;
  const monthlyNet = Math.max(0, monthlyGross - totalDeductions);
  const yearlyNet = monthlyNet * 12;

  // Effective hourly net wage
  const effectiveNetHourly = monthlyHours > 0 ? (monthlyNet / monthlyHours) : 0;
  const netRatioPercent = monthlyGross > 0 ? ((monthlyNet / monthlyGross) * 100) : 0;

  const formatEuro = (val) =>
    val.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";

  const handleCopy = () => {
    const lines = [
      "=== BRUTTO-NETTO STUNDEN BERECHNUNG ===",
      `Brutto-Stundenlohn: ${formatEuro(rateNum)}/h`,
      `Wochenarbeitszeit: ${hoursWeekNum} Std./Woche (~${monthlyHours.toFixed(1)} Std./Monat)`,
      `Steuerklasse: ${taxClass}`,
      `Kinder: ${hasChildren ? "Ja" : "Nein"}`,
      `Kirchensteuer: ${hasChurchTax ? `Ja (${churchTaxRate}%)` : "Nein"}`,
      "----------------------------------",
      `Monatlicher Bruttolohn: ${formatEuro(monthlyGross)}`,
      `Lohnsteuer: -${formatEuro(monthlyWageTax)}`,
      hasChurchTax ? `Kirchensteuer: -${formatEuro(monthlyChurchTax)}` : null,
      `Rentenversicherung (9,3%): -${formatEuro(rvAmount)}`,
      `Krankenversicherung: -${formatEuro(kvAmount)}`,
      `Pflegeversicherung: -${formatEuro(pvAmount)}`,
      `Arbeitslosenversicherung (1,3%): -${formatEuro(alvAmount)}`,
      `Gesamtabzüge: -${formatEuro(totalDeductions)}`,
      "----------------------------------",
      `EFFEKTIVER NETTO-STUNDENLOHN: ${formatEuro(effectiveNetHourly)}/h`,
      `MONATLICHER NETTOLOHN: ${formatEuro(monthlyNet)}`,
      `Jährlicher Nettolohn: ${formatEuro(yearlyNet)}`,
      `Netto-Quote: ${netRatioPercent.toFixed(1)}%`,
      "\nBerechnet auf Arbeitsstundenrechner.de",
    ]
      .filter(Boolean)
      .join("\n");

    navigator.clipboard.writeText(lines).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleReset = () => {
    setHourlyRate("20.00");
    setHoursPerWeek("40");
    setTaxClass("1");
    setHasChildren(false);
    setHasChurchTax(false);
    setChurchTaxRate("9");
    setHealthInsuranceAddon("1.7");
  };

  // Preset hours for quick comparison
  const hourScenarios = [
    { label: "Teilzeit (20h)", h: 20 },
    { label: "Teilzeit (30h)", h: 30 },
    { label: "Vollzeit (35h)", h: 35 },
    { label: "Vollzeit (40h)", h: 40 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-indigo-100">
            <Wallet className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Brutto Netto Rechner Stunden
            </h2>
            <p className="text-sm text-gray-500">
              Ermitteln Sie Ihren effektiven Netto-Stundenlohn & monatliches Nettogehalt
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm font-medium text-gray-600 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors"
            title="Zurücksetzen"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Zurücksetzen</span>
          </button>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Kopiert!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Ergebnis kopieren</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Grid: Inputs & Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
        {/* Left Column: Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-gray-50/70 rounded-xl p-5 border border-gray-100 space-y-5">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider flex items-center gap-2">
              <Euro className="w-4 h-4 text-indigo-600" />
              1. Arbeitszeit & Stundenlohn
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Brutto-Stundenlohn (€)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.50"
                    min="0"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg font-semibold text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 pr-10 text-base"
                    placeholder="20,00"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium">
                    €/h
                  </span>
                </div>
                <div className="flex gap-1.5 mt-2">
                  {["13.50", "15.00", "20.00", "25.00", "30.00"].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setHourlyRate(preset)}
                      className={`px-2 py-1 text-xs rounded border transition-colors ${
                        hourlyRate === preset
                          ? "bg-indigo-600 text-white border-indigo-600"
                          : "bg-white text-gray-600 border-gray-200 hover:border-indigo-400"
                      }`}
                    >
                      {preset} €
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Wochenstunden (Std./Woche)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.5"
                    min="1"
                    max="80"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg font-semibold text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 pr-10 text-base"
                    placeholder="40"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium">
                    Std.
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Entspricht ca.{" "}
                  <strong className="text-gray-700">
                    {monthlyHours.toFixed(1).replace(".", ",")} Stunden
                  </strong>{" "}
                  pro Monat
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50/70 rounded-xl p-5 border border-gray-100 space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider flex items-center gap-2">
              <Building2 className="w-4 h-4 text-indigo-600" />
              2. Steuerklasse & Persönliche Angaben
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Steuerklasse
                </label>
                <select
                  value={taxClass}
                  onChange={(e) => setTaxClass(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 font-medium focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                >
                  <option value="1">Klasse 1: Ledig, geschieden, getrennt</option>
                  <option value="2">Klasse 2: Alleinerziehend</option>
                  <option value="3">Klasse 3: Verheiratet (Höherverdiener)</option>
                  <option value="4">Klasse 4: Verheiratet (Standard)</option>
                  <option value="5">Klasse 5: Verheiratet (Geringverdiener)</option>
                  <option value="6">Klasse 6: Zweitjob / Nebenjob</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Kinder (Pflegeversicherungs-Rabatt)
                </label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setHasChildren(false)}
                    className={`flex-1 py-2.5 px-3 text-xs md:text-sm font-medium rounded-lg border transition-colors ${
                      !hasChildren
                        ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    Nein (kinderlos)
                  </button>
                  <button
                    type="button"
                    onClick={() => setHasChildren(true)}
                    className={`flex-1 py-2.5 px-3 text-xs md:text-sm font-medium rounded-lg border transition-colors ${
                      hasChildren
                        ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    Ja (min. 1 Kind)
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-gray-200">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Kirchensteuer
                </label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setHasChurchTax(false)}
                    className={`flex-1 py-2 px-3 text-xs md:text-sm font-medium rounded-lg border transition-colors ${
                      !hasChurchTax
                        ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    Keine (0%)
                  </button>
                  <button
                    type="button"
                    onClick={() => setHasChurchTax(true)}
                    className={`flex-1 py-2 px-3 text-xs md:text-sm font-medium rounded-lg border transition-colors ${
                      hasChurchTax
                        ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    Ja ({churchTaxRate}%)
                  </button>
                </div>
              </div>

              {hasChurchTax && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kirchensteuersatz
                  </label>
                  <select
                    value={churchTaxRate}
                    onChange={(e) => setChurchTaxRate(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 text-sm focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="9">9% (Standard in den meisten Ländern)</option>
                    <option value="8">8% (Bayern & Baden-Württemberg)</option>
                  </select>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Hero Results Card (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-36 h-36 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="text-xs uppercase tracking-wider font-semibold text-indigo-300 mb-1">
              Ergebnis
            </div>
            <div className="text-sm font-medium text-slate-300">
              Effektiver Netto-Stundenlohn
            </div>

            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-4xl md:text-5xl font-black tracking-tight text-white">
                {formatEuro(effectiveNetHourly)}
              </span>
              <span className="text-indigo-300 text-lg font-medium">/ Stunde</span>
            </div>

            <div className="mt-4 pt-4 border-t border-indigo-700/60 grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs text-indigo-300">Monatlich Netto</div>
                <div className="text-xl font-bold text-emerald-400 mt-0.5">
                  {formatEuro(monthlyNet)}
                </div>
              </div>
              <div>
                <div className="text-xs text-indigo-300">Monatlich Brutto</div>
                <div className="text-xl font-bold text-white mt-0.5">
                  {formatEuro(monthlyGross)}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-indigo-700/60 flex items-center justify-between text-xs text-indigo-200">
              <span>Netto-Quote:</span>
              <span className="font-semibold text-white">
                {netRatioPercent.toFixed(1)}% des Bruttolohns
              </span>
            </div>
          </div>

          {/* Deductions Breakdown Card */}
          <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
              <TrendingDown className="w-4 h-4 text-rose-500" />
              Monatliche Abzüge im Detail
            </h4>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center py-1 border-b border-gray-100">
                <span className="text-gray-600">Lohnsteuer:</span>
                <span className="font-medium text-gray-900">
                  {monthlyWageTax > 0 ? `-${formatEuro(monthlyWageTax)}` : "0,00 €"}
                </span>
              </div>
              {hasChurchTax && (
                <div className="flex justify-between items-center py-1 border-b border-gray-100">
                  <span className="text-gray-600">Kirchensteuer ({churchTaxRate}%):</span>
                  <span className="font-medium text-gray-900">
                    -{formatEuro(monthlyChurchTax)}
                  </span>
                </div>
              )}
              <div className="flex justify-between items-center py-1 border-b border-gray-100">
                <span className="text-gray-600">Rentenversicherung (9,3%):</span>
                <span className="font-medium text-gray-900">
                  -{formatEuro(rvAmount)}
                </span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-gray-100">
                <span className="text-gray-600">Krankenversicherung:</span>
                <span className="font-medium text-gray-900">
                  -{formatEuro(kvAmount)}
                </span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-gray-100">
                <span className="text-gray-600">Pflegeversicherung ({pvRate * 100}%):</span>
                <span className="font-medium text-gray-900">
                  -{formatEuro(pvAmount)}
                </span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-gray-100">
                <span className="text-gray-600">Arbeitslosenvers. (1,3%):</span>
                <span className="font-medium text-gray-900">
                  -{formatEuro(alvAmount)}
                </span>
              </div>
              <div className="flex justify-between items-center pt-2 font-bold text-gray-900">
                <span>Gesamte Abzüge:</span>
                <span className="text-rose-600">-{formatEuro(totalDeductions)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Scenarios Table */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
          <Clock className="w-5 h-5 text-indigo-600" />
          Vergleich: Netto-Stundenlohn bei verschiedenen Arbeitszeitmodellen
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Hier sehen Sie, wie sich Ihr Nettoverdienst bei einem Stundenlohn von{" "}
          <strong>{formatEuro(rateNum)}</strong> je nach Wochenstunden verändert:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50 text-gray-700 text-xs uppercase">
              <tr>
                <th className="px-4 py-3 border-b">Arbeitszeitmodell</th>
                <th className="px-4 py-3 border-b">Monatsstunden</th>
                <th className="px-4 py-3 border-b">Brutto / Monat</th>
                <th className="px-4 py-3 border-b">Netto / Monat</th>
                <th className="px-4 py-3 border-b text-indigo-600 font-bold">
                  Netto-Stundenlohn
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {hourScenarios.map((sc) => {
                const scMonthlyH = sc.h * (52 / 12);
                const scGross = rateNum * scMonthlyH;
                const scRv = scGross > 538 ? Math.min(scGross, rvBBG) * rvRate : 0;
                const scAlv = scGross > 538 ? Math.min(scGross, alvBBG) * alvRate : 0;
                const scKv = scGross > 538 ? Math.min(scGross, kvBBG) * kvRate : 0;
                const scPv = scGross > 538 ? Math.min(scGross, pvBBG) * pvRate : 0;
                const scSoc = scRv + scAlv + scKv + scPv;
                const scTaxInc = Math.max(0, scGross * 12 - scSoc * 12 - 1230);
                let scTax = 0;
                if (scGross > 538 && scTaxInc > 11784) {
                  scTax = (scTaxInc - 11784) * 0.22 / 12;
                }
                const scNet = Math.max(0, scGross - scSoc - scTax);
                const scNetRate = scMonthlyH > 0 ? scNet / scMonthlyH : 0;

                const isCurrent = Math.abs(sc.h - hoursWeekNum) < 1;

                return (
                  <tr
                    key={sc.h}
                    className={`hover:bg-gray-50 transition-colors ${
                      isCurrent ? "bg-indigo-50/50 font-semibold" : ""
                    }`}
                  >
                    <td className="px-4 py-3">
                      {sc.label}{" "}
                      {isCurrent && (
                        <span className="ml-1 text-xs text-indigo-600 bg-indigo-100 px-1.5 py-0.5 rounded">
                          Aktuell
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      ~{scMonthlyH.toFixed(1)} Std.
                    </td>
                    <td className="px-4 py-3 text-gray-900">{formatEuro(scGross)}</td>
                    <td className="px-4 py-3 text-emerald-600 font-medium">
                      {formatEuro(scNet)}
                    </td>
                    <td className="px-4 py-3 text-indigo-600 font-bold">
                      {formatEuro(scNetRate)}/h
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info notice */}
      <div className="mt-6 p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-xs text-blue-800 flex items-start gap-3">
        <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <p>
          <strong>Hinweis:</strong> Die Berechnung basiert auf den gesetzlichen
          Sozialversicherungsbeiträgen (Renten-, Kranken-, Pflege- und
          Arbeitslosenversicherung) und einer fundierten Lohnsteuer-Näherung für
          Deutschland. Individuelle Freibeträge, betriebliche Altersvorsorge oder
          spezifische Krankenkassen-Zusatzbeiträge können das tatsächliche Nettogehalt
          leicht beeinflussen.
        </p>
      </div>
    </div>
  );
}
