import {
  calculateWorkingTime,
  calculateWeeklyTimesheet,
  calculateMonthlyTimesheet,
  formatDecimalHours,
  formatDuration,
} from "../src/lib/calculator.js";

console.log("=========================================");
console.log("   DEUTSCHER QA-TEST: STUNDENRECHNER");
console.log("=========================================\n");

let passed = 0;
let total = 0;

function assert(condition, name, details = "") {
  total++;
  if (condition) {
    console.log(`[PASS] ${name}`);
    passed++;
  } else {
    console.error(`[FAIL] ${name} - ${details}`);
    process.exitCode = 1;
  }
}

// 1. Normal working day
const t1 = calculateWorkingTime("08:00", "17:00", 60);
assert(
  t1.success && t1.netDuration === "8 Std. 00 Min." && t1.decimalHours === "8,00" && t1.grossDuration === "9 Std. 00 Min." && t1.breakDuration === "1 Std. 00 Min.",
  "1. Normaler Arbeitstag: 08:00 - 17:00, 60 Min. Pause -> Netto: 8 Std. 00 Min., 8,00 Std."
);

// 2. No break
const t2 = calculateWorkingTime("08:00", "16:00", 0);
assert(
  t2.success && t2.netDuration === "8 Std. 00 Min." && t2.totalBreakMinutes === 0,
  "2. Keine Pause: 08:00 - 16:00, 0 Min. Pause -> Netto: 8 Std. 00 Min."
);

// 3. Multiple breaks
const t3 = calculateWorkingTime("08:00", "17:00", 30, [{ id: "b2", minutes: 30 }]);
assert(
  t3.success && t3.totalBreakMinutes === 60 && t3.netDuration === "8 Std. 00 Min.",
  "3. Mehrere Pausen: 30 + 30 = 60 Min. -> Netto: 8 Std. 00 Min."
);

// 4. Overnight shift
const t4 = calculateWorkingTime("22:00", "06:00", 30);
assert(
  t4.success && t4.isOverMidnight && t4.grossDuration === "8 Std. 00 Min." && t4.netDuration === "7 Std. 30 Min." && t4.decimalHours === "7,50",
  "4. Nachtschicht: 22:00 - 06:00, 30 Min. Pause -> Netto: 7 Std. 30 Min., 7,50 Std."
);

// 5. Midnight shift (00:00 - 08:00)
const t5 = calculateWorkingTime("00:00", "08:00", 45);
assert(
  t5.success && t5.grossDuration === "8 Std. 00 Min." && t5.netDuration === "7 Std. 15 Min." && t5.decimalHours === "7,25",
  "5. Mitternacht: 00:00 - 08:00, 45 Min. Pause -> Netto: 7 Std. 15 Min., 7,25 Std."
);

// 6. Near midnight shift (23:30 - 00:30)
const t6 = calculateWorkingTime("23:30", "00:30", 0);
assert(
  t6.success && t6.isOverMidnight && t6.grossMinutes === 60 && t6.netDuration === "1 Std. 00 Min.",
  "6. Um Mitternacht: 23:30 - 00:30, 0 Pause -> 1 Std. 00 Min."
);

// 7. Invalid/missing inputs
const t7a = calculateWorkingTime("", "17:00", 30);
const t7b = calculateWorkingTime("08:00", "", 30);
const t7c = calculateWorkingTime("25:00", "17:00", 30);
assert(
  t7a.error && t7b.error && t7c.error,
  "7. Ungültige/fehlende Eingaben ordnungsgemäß abgefangen"
);

// 8. Break longer than shift
const t8 = calculateWorkingTime("08:00", "10:00", 150);
assert(
  t8.error && t8.error.includes("darf nicht länger sein als die Bruttoarbeitszeit"),
  "8. Pause länger als Arbeitszeit ordnungsgemäß abgelehnt"
);

// 9. Decimal formatting checks
assert(
  formatDecimalHours(30, "de") === "0,50" &&
  formatDecimalHours(45, "de") === "0,75" &&
  formatDecimalHours(90, "de") === "1,50" &&
  formatDecimalHours(510, "de") === "8,50",
  "9. Dezimalstunden mit deutschem Komma (30m=0,50, 45m=0,75, 90m=1,50, 510m=8,50)"
);

// 10. Weekly timesheet calculation
const weekDays = [
  { day: "Montag", startTime: "08:00", endTime: "16:30", breakMinutes: 30, active: true },
  { day: "Dienstag", startTime: "08:00", endTime: "16:30", breakMinutes: 30, active: true },
  { day: "Mittwoch", startTime: "08:00", endTime: "16:30", breakMinutes: 30, active: true },
  { day: "Donnerstag", startTime: "08:00", endTime: "16:30", breakMinutes: 30, active: true },
  { day: "Freitag", startTime: "08:00", endTime: "16:30", breakMinutes: 30, active: true },
  { day: "Samstag", startTime: "", endTime: "", breakMinutes: 0, active: false },
  { day: "Sonntag", startTime: "", endTime: "", breakMinutes: 0, active: false },
];
const weekResult = calculateWeeklyTimesheet(weekDays, "20", 40, "de");
assert(
  weekResult.success &&
  weekResult.totalNetMinutes === 2400 &&
  weekResult.totalNetDuration === "40 Std. 00 Min." &&
  weekResult.totalDecimalHours === "40,00" &&
  weekResult.earnings === "800,00",
  "10. Wochenrechner: 5 Tage x 8 Std. = 40,00 Std. @ 20 € = 800,00 €"
);

// 11. Monthly timesheet calculation
const weeks = [
  { id: "w1", label: "Woche 1", hours: "40" },
  { id: "w2", label: "Woche 2", hours: "40" },
  { id: "w3", label: "Woche 3", hours: "40" },
  { id: "w4", label: "Woche 4", hours: "40" },
];
const monthResult = calculateMonthlyTimesheet(weeks, "20", 160, "de");
assert(
  monthResult.success &&
  monthResult.totalDecimalHoursNumber === 160 &&
  monthResult.earnings === "3.200,00",
  "11. Monatsrechner: 4 Wochen x 40 Std. = 160,00 Std. @ 20 € = 3.200,00 €"
);

console.log("\n=========================================");
console.log(`ERGEBNIS: ${passed} von ${total} Tests erfolgreich bestanden.`);
console.log("=========================================\n");
