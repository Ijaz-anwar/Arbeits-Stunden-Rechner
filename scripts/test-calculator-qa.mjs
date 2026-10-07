import { calculateWorkingTime, formatDecimalHours, formatDuration } from "../src/lib/calculator.js";

console.log("=========================================");
console.log("   CALCULATOR QA: DUAL LANGUAGE SUITE");
console.log("=========================================\n");

let passed = 0;
let total = 0;

function assert(condition, testName, details = "") {
  total++;
  if (condition) {
    console.log(`[PASS] ${testName}`);
    passed++;
  } else {
    console.error(`[FAIL] ${testName} - ${details}`);
    process.exitCode = 1;
  }
}

// 1. Normal working day (English)
const s1_en = calculateWorkingTime("08:00", "17:00", 60, [], "", "en");
assert(
  s1_en.success &&
  s1_en.netDuration === "8 hrs 00 mins" &&
  s1_en.grossDuration === "9 hrs 00 mins" &&
  s1_en.breakDuration === "1 hrs 00 mins" &&
  s1_en.decimalHours === "8.00",
  "Scenario 1 (EN): Normal working day (08:00 -> 17:00, 60m break)",
  `Got net: ${s1_en.netDuration}, decimal: ${s1_en.decimalHours}`
);

// 1b. Normal working day (German)
const s1_de = calculateWorkingTime("08:00", "17:00", 60, [], "", "de");
assert(
  s1_de.success &&
  s1_de.netDuration === "8 Std. 00 Min." &&
  s1_de.grossDuration === "9 Std. 00 Min." &&
  s1_de.breakDuration === "1 Std. 00 Min." &&
  s1_de.decimalHours === "8,00",
  "Scenario 1 (DE): Normaler Arbeitstag (08:00 -> 17:00, 60m Pause)",
  `Got net: ${s1_de.netDuration}, decimal: ${s1_de.decimalHours}`
);

// 2. Overnight shift (English)
const s2_en = calculateWorkingTime("22:00", "06:00", 30, [], "", "en");
assert(
  s2_en.success &&
  s2_en.isOverMidnight === true &&
  s2_en.grossDuration === "8 hrs 00 mins" &&
  s2_en.netDuration === "7 hrs 30 mins" &&
  s2_en.decimalHours === "7.50",
  "Scenario 2 (EN): Overnight shift (22:00 -> 06:00, 30m break)",
  `Got gross: ${s2_en.grossDuration}, net: ${s2_en.netDuration}`
);

// 3. Optional Hourly Rate calculation
const s3_pay = calculateWorkingTime("08:00", "16:30", 30, [], "25.00", "en");
assert(
  s3_pay.success &&
  s3_pay.netDuration === "8 hrs 00 mins" &&
  s3_pay.decimalHours === "8.00" &&
  s3_pay.earnings === "200.00",
  "Scenario 3 (EN): Optional Pay calculation (8 hrs @ $25/hr = $200.00)",
  `Got earnings: $${s3_pay.earnings}`
);

// 4. Multiple breaks
const s4_breaks = calculateWorkingTime("08:00", "17:00", 30, [{ id: "b2", minutes: 30 }], "", "en");
assert(
  s4_breaks.success &&
  s4_breaks.totalBreakMinutes === 60 &&
  s4_breaks.netDuration === "8 hrs 00 mins",
  "Scenario 4 (EN): Multiple breaks (30m + 30m = 60m)",
  `Total breaks: ${s4_breaks.totalBreakMinutes}`
);

// 5. Break > Gross duration validation
const s5_error = calculateWorkingTime("08:00", "10:00", 150, [], "", "en");
assert(
  s5_error.error && s5_error.error.includes("cannot exceed gross work duration"),
  "Scenario 5 (EN): Break exceeding gross shift rejected gracefully",
  `Error: "${s5_error.error}"`
);

// 6. Decimal format conversions
assert(
  formatDecimalHours(30, "en") === "0.50" &&
  formatDecimalHours(45, "en") === "0.75" &&
  formatDecimalHours(90, "en") === "1.50" &&
  formatDecimalHours(30, "de") === "0,50" &&
  formatDecimalHours(45, "de") === "0,75",
  "Scenario 6: Decimal conversions in both EN (0.50) and DE (0,50)",
  `Conversions verified`
);

console.log("\n=========================================");
console.log(`SUMMARY: ${passed} of ${total} tests passed.`);
console.log("=========================================\n");
