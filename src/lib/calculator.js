/**
 * Helper utilities for working time and duration calculations (Daily, Weekly, and Monthly)
 */

/**
 * Parses a "HH:MM" string into minutes from midnight (0 to 1439).
 * Returns NaN if invalid.
 */
export function timeStringToMinutes(timeStr) {
  if (!timeStr || typeof timeStr !== "string") return NaN;
  const parts = timeStr.trim().split(":");
  if (parts.length !== 2) return NaN;

  const hours = parseInt(parts[0], 10);
  const minutes = parseInt(parts[1], 10);

  if (
    isNaN(hours) ||
    isNaN(minutes) ||
    hours < 0 ||
    hours > 23 ||
    minutes < 0 ||
    minutes > 59
  ) {
    return NaN;
  }

  return hours * 60 + minutes;
}

/**
 * Formats total minutes into strict "X hrs YY mins" (English) or "X Std. YY Min." (German) format
 */
export function formatDuration(totalMinutes, lang = "de") {
  if (isNaN(totalMinutes) || totalMinutes < 0) {
    return lang === "de" ? "0 Std. 00 Min." : "0 hrs 00 mins";
  }
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  const minsStr = mins.toString().padStart(2, "0");

  if (lang === "de") {
    return `${hours} Std. ${minsStr} Min.`;
  }
  return `${hours} hrs ${minsStr} mins`;
}

// Backward compatibility alias
export function formatStdMin(totalMinutes) {
  return formatDuration(totalMinutes, "de");
}

/**
 * Converts minutes to decimal hours (e.g. 510 mins -> 8,50)
 */
export function formatDecimalHours(totalMinutes, lang = "de") {
  if (isNaN(totalMinutes) || totalMinutes < 0) return lang === "de" ? "0,00" : "0.00";
  const decimal = totalMinutes / 60;
  const rounded = Math.round(decimal * 100) / 100;
  
  if (lang === "de") {
    return rounded.toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  return rounded.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/**
 * Calculates earnings based on decimal hours and hourly rate
 */
export function calculateEarnings(totalMinutes, hourlyRate, lang = "de") {
  if (!hourlyRate) return null;
  const cleanRate = typeof hourlyRate === "string" ? hourlyRate.replace(/,/g, ".") : hourlyRate;
  if (isNaN(cleanRate) || parseFloat(cleanRate) <= 0) return null;
  const rate = parseFloat(cleanRate);
  const decimalHours = totalMinutes / 60;
  const total = decimalHours * rate;
  if (lang === "de") {
    return total.toLocaleString("de-DE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  return total.toFixed(2);
}

/**
 * Statutory break guidelines advice
 */
export function evaluateBreakRules(grossMinutes, totalBreakMinutes, lang = "de") {
  const grossHours = grossMinutes / 60;
  const netHours = (grossMinutes - totalBreakMinutes) / 60;

  let legalRequirement = 0;
  let status = "ok";
  let message = "";

  if (grossHours > 9) {
    legalRequirement = 45;
    if (totalBreakMinutes < 45) {
      status = "warning";
      message =
        lang === "de"
          ? `Hinweis nach § 4 ArbZG: Bei über 9 Std. Arbeitszeit sind mind. 45 Min. Pause vorgeschrieben (aktuell: ${totalBreakMinutes} Min.).`
          : `Break Reminder: For shifts over 9 hours, at least 45 minutes of break time is recommended/statutory (currently: ${totalBreakMinutes} mins).`;
    } else {
      status = "compliant";
      message =
        lang === "de"
          ? `Gesetzliche Vorgabe erfüllt: Bei über 9 Std. Arbeitszeit sind mind. 45 Min. Pause eingehalten.`
          : `Break requirements met: Over 45 minutes of breaks included for 9+ hours of work.`;
    }
  } else if (grossHours > 6) {
    legalRequirement = 30;
    if (totalBreakMinutes < 30) {
      status = "warning";
      message =
        lang === "de"
          ? `Hinweis nach § 4 ArbZG: Bei über 6 Std. Arbeitszeit sind mind. 30 Min. Pause vorgeschrieben (aktuell: ${totalBreakMinutes} Min.).`
          : `Break Reminder: For shifts over 6 hours, at least 30 minutes of break time is recommended/statutory (currently: ${totalBreakMinutes} mins).`;
    } else {
      status = "compliant";
      message =
        lang === "de"
          ? `Gesetzliche Vorgabe erfüllt: Bei über 6 Std. Arbeitszeit sind mind. 30 Min. Pause eingehalten.`
          : `Break requirements met: Over 30 minutes of breaks included for 6+ hours of work.`;
    }
  } else {
    status = "info";
    message =
      lang === "de"
        ? `Bis 6 Stunden Arbeitszeit ist gesetzlich keine Ruhepause zwingend vorgeschrieben.`
        : `For shifts under 6 hours, statutory breaks are generally optional.`;
  }

  const exceedsMaxDaily = netHours > 10;
  let maxWorkWarning = null;
  if (exceedsMaxDaily) {
    maxWorkWarning =
      lang === "de"
        ? `Achtung: Die Nettoarbeitszeit überschreitet 10 Stunden (${formatDuration(
            grossMinutes - totalBreakMinutes,
            "de"
          )}).`
        : `Notice: Net work time exceeds 10 hours (${formatDuration(
            grossMinutes - totalBreakMinutes,
            "en"
          )}). Make sure this complies with your local maximum daily working hour limits.`;
  }

  return {
    legalRequirement,
    status,
    message,
    maxWorkWarning,
  };
}

/**
 * Calculates a single day's working time
 */
export function calculateWorkingTime(
  startTime,
  endTime,
  mainBreakMinutes,
  additionalBreaks = [],
  hourlyRate = "",
  lang = "de"
) {
  if (!startTime || !startTime.trim()) {
    return {
      error:
        lang === "de"
          ? "Bitte geben Sie einen Arbeitsbeginn ein (z. B. 08:00)."
          : "Please enter a start time (e.g. 08:00).",
    };
  }
  if (!endTime || !endTime.trim()) {
    return {
      error:
        lang === "de"
          ? "Bitte geben Sie ein Arbeitsende ein (z. B. 17:00)."
          : "Please enter an end time (e.g. 17:00).",
    };
  }

  const startMinutes = timeStringToMinutes(startTime);
  const endMinutes = timeStringToMinutes(endTime);

  if (isNaN(startMinutes)) {
    return {
      error:
        lang === "de"
          ? "Der eingegebene Arbeitsbeginn ist ungültig (Format: HH:MM)."
          : "The entered start time is invalid (expected format: HH:MM).",
    };
  }
  if (isNaN(endMinutes)) {
    return {
      error:
        lang === "de"
          ? "Das eingegebene Arbeitsende ist ungültig (Format: HH:MM)."
          : "The entered end time is invalid (expected format: HH:MM).",
    };
  }

  // Parse main break
  const mainBreakStr =
    typeof mainBreakMinutes === "string" ? mainBreakMinutes.trim() : mainBreakMinutes;
  const mainBreak = mainBreakStr === "" ? 0 : parseInt(mainBreakStr, 10);
  if (isNaN(mainBreak) || mainBreak < 0) {
    return {
      error:
        lang === "de"
          ? "Die Pausenzeit darf nicht negativ sein (z. B. 0, 30, 45, 60 Minuten)."
          : "Break time cannot be negative (e.g. 0, 30, 45, 60 minutes).",
    };
  }

  // Parse additional breaks
  let extraBreakTotal = 0;
  for (let i = 0; i < additionalBreaks.length; i++) {
    const rawVal = additionalBreaks[i].minutes;
    const strVal = typeof rawVal === "string" ? rawVal.trim() : rawVal;
    const extraVal = strVal === "" ? 0 : parseInt(strVal, 10);
    if (isNaN(extraVal) || extraVal < 0) {
      return {
        error:
          lang === "de"
            ? `Pause ${i + 2} darf nicht negativ sein.`
            : `Break ${i + 2} cannot be negative.`,
      };
    }
    extraBreakTotal += extraVal;
  }

  const totalBreakMinutes = mainBreak + extraBreakTotal;

  // Handle Gross Duration calculation (including midnight rollover)
  let grossMinutes = 0;
  let isOverMidnight = false;

  if (endMinutes > startMinutes) {
    grossMinutes = endMinutes - startMinutes;
  } else if (endMinutes < startMinutes) {
    // Continues past midnight: e.g. 22:00 to 06:00
    grossMinutes = 1440 - startMinutes + endMinutes;
    isOverMidnight = true;
  } else {
    // startMinutes === endMinutes
    return {
      error:
        lang === "de"
          ? "Arbeitsbeginn und Arbeitsende sind identisch. Bei einer 24-Stunden-Schicht teilen Sie die Buchung bitte auf oder prüfen Sie Ihre Zeiteingabe."
          : "Start time and end time are identical. For a 24-hour shift, please split the entry or check your time inputs.",
    };
  }

  // Validation: Break cannot exceed Gross duration
  if (totalBreakMinutes > grossMinutes) {
    return {
      error:
        lang === "de"
          ? `Die gesamte Pausenzeit (${totalBreakMinutes} Min.) darf nicht länger sein als die Bruttoarbeitszeit (${formatDuration(
              grossMinutes,
              "de"
            )}).`
          : `Total break time (${totalBreakMinutes} mins) cannot exceed gross work duration (${formatDuration(
              grossMinutes,
              "en"
            )}).`,
    };
  }

  const netMinutes = grossMinutes - totalBreakMinutes;
  const decimalHours = formatDecimalHours(netMinutes, lang);
  const decimalHoursNumber = Math.round((netMinutes / 60) * 100) / 100;
  const earnings = calculateEarnings(netMinutes, hourlyRate, lang);
  const breakInfo = evaluateBreakRules(grossMinutes, totalBreakMinutes, lang);

  return {
    success: true,
    startTime,
    endTime,
    isOverMidnight,
    grossMinutes,
    grossDuration: formatDuration(grossMinutes, lang),
    grossStdMin: formatDuration(grossMinutes, "de"), // keep German compatibility
    totalBreakMinutes,
    breakDuration: formatDuration(totalBreakMinutes, lang),
    breakStdMin: formatDuration(totalBreakMinutes, "de"),
    netMinutes,
    netDuration: formatDuration(netMinutes, lang),
    netStdMin: formatDuration(netMinutes, "de"),
    decimalHours,
    decimalHoursFormatted: `${decimalHours} ${lang === "de" ? "Stunden" : "hours"}`,
    decimalHoursNumber,
    hourlyRate: hourlyRate ? parseFloat(hourlyRate) : null,
    earnings,
    breakInfo,
    breakList: [
      {
        id: "main",
        label: lang === "de" ? "Hauptpause" : "Main Break",
        minutes: mainBreak,
      },
      ...additionalBreaks.map((b, idx) => ({
        id: b.id,
        label: b.label || (lang === "de" ? `Pause ${idx + 2}` : `Break ${idx + 2}`),
        minutes: parseInt(b.minutes, 10) || 0,
      })),
    ],
  };
}

/**
 * Calculates a complete 7-day Weekly Timesheet
 * 
 * @param {Array<{ id: string, name: string, active: boolean, startTime: string, endTime: string, breakMinutes: string|number }>} days
 * @param {string|number} hourlyRate
 * @param {number} overtimeThresholdHours (default 40 hours)
 * @param {string} lang
 */
export function calculateWeeklyTimesheet(
  days,
  hourlyRate = "",
  overtimeThresholdHours = 40,
  lang = "de"
) {
  let totalGrossMinutes = 0;
  let totalBreakMinutes = 0;
  let totalNetMinutes = 0;
  let activeDaysCount = 0;

  const processedDays = days.map((day) => {
    if (!day.active || !day.startTime || !day.endTime) {
      return {
        ...day,
        grossMinutes: 0,
        breakMinutes: 0,
        netMinutes: 0,
        decimalHours: lang === "de" ? "0,00" : "0.00",
        formattedNet: lang === "de" ? "0 Std. 00 Min." : "0 hrs 00 mins",
        isOverMidnight: false,
        error: null,
      };
    }

    const startMin = timeStringToMinutes(day.startTime);
    const endMin = timeStringToMinutes(day.endTime);

    if (isNaN(startMin) || isNaN(endMin)) {
      return {
        ...day,
        grossMinutes: 0,
        breakMinutes: 0,
        netMinutes: 0,
        decimalHours: lang === "de" ? "0,00" : "0.00",
        formattedNet: lang === "de" ? "Ungültige Zeit" : "Invalid time",
        error: lang === "de" ? "Ungültiges Zeitformat" : "Invalid time format",
      };
    }

    let gross = 0;
    let isOverMidnight = false;
    if (endMin > startMin) {
      gross = endMin - startMin;
    } else if (endMin < startMin) {
      gross = 1440 - startMin + endMin;
      isOverMidnight = true;
    }

    const breakMin = parseInt(day.breakMinutes, 10) || 0;
    const cleanBreak = Math.max(0, breakMin);
    const net = Math.max(0, gross - cleanBreak);

    totalGrossMinutes += gross;
    totalBreakMinutes += cleanBreak;
    totalNetMinutes += net;
    if (net > 0) activeDaysCount++;

    return {
      ...day,
      grossMinutes: gross,
      breakMinutes: cleanBreak,
      netMinutes: net,
      decimalHours: formatDecimalHours(net, lang),
      formattedNet: formatDuration(net, lang),
      isOverMidnight,
      error: cleanBreak > gross ? (lang === "de" ? "Pause überschreitet Arbeitszeit" : "Break exceeds shift") : null,
    };
  });

  const totalDecimalHours = formatDecimalHours(totalNetMinutes, lang);
  const totalDecimalHoursNumber = Math.round((totalNetMinutes / 60) * 100) / 100;
  const thresholdMinutes = overtimeThresholdHours * 60;
  
  const regularMinutes = Math.min(totalNetMinutes, thresholdMinutes);
  const overtimeMinutes = Math.max(0, totalNetMinutes - thresholdMinutes);

  const earnings = calculateEarnings(totalNetMinutes, hourlyRate, lang);
  const regularEarnings = calculateEarnings(regularMinutes, hourlyRate, lang);
  const overtimeEarnings = overtimeMinutes > 0 ? calculateEarnings(overtimeMinutes, hourlyRate ? parseFloat(hourlyRate) * 1.5 : null, lang) : null;

  return {
    success: true,
    days: processedDays,
    activeDaysCount,
    totalGrossMinutes,
    totalGrossDuration: formatDuration(totalGrossMinutes, lang),
    totalBreakMinutes,
    totalBreakDuration: formatDuration(totalBreakMinutes, lang),
    totalNetMinutes,
    totalNetDuration: formatDuration(totalNetMinutes, lang),
    totalDecimalHours,
    totalDecimalHoursNumber,
    regularMinutes,
    regularDuration: formatDuration(regularMinutes, lang),
    regularDecimalHours: formatDecimalHours(regularMinutes, lang),
    overtimeMinutes,
    overtimeDuration: formatDuration(overtimeMinutes, lang),
    overtimeDecimalHours: formatDecimalHours(overtimeMinutes, lang),
    hasOvertime: overtimeMinutes > 0,
    hourlyRate: hourlyRate ? parseFloat(hourlyRate) : null,
    earnings,
    regularEarnings,
    overtimeEarnings,
  };
}

/**
 * Calculates a Monthly Timesheet / Summary from weekly hours
 * 
 * @param {Array<{ id: string, label: string, hours: string|number }>} weeks
 * @param {string|number} hourlyRate
 * @param {number} targetMonthlyHours (default 160 or 173.33)
 * @param {string} lang
 */
export function calculateMonthlyTimesheet(
  weeks,
  hourlyRate = "",
  targetMonthlyHours = 160,
  lang = "de"
) {
  let totalDecimalHoursNumber = 0;
  const processedWeeks = weeks.map((w) => {
    const val = parseFloat(w.hours) || 0;
    totalDecimalHoursNumber += val;
    return {
      ...w,
      decimalValue: val,
      formattedHours: val.toLocaleString(lang === "de" ? "de-DE" : "en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    };
  });

  const totalMinutes = Math.round(totalDecimalHoursNumber * 60);
  const totalDecimalHours = totalDecimalHoursNumber.toLocaleString(
    lang === "de" ? "de-DE" : "en-US",
    { minimumFractionDigits: 2, maximumFractionDigits: 2 }
  );

  const earnings = calculateEarnings(totalMinutes, hourlyRate, lang);
  const difference = totalDecimalHoursNumber - targetMonthlyHours;
  const differenceFormatted = Math.abs(difference).toLocaleString(
    lang === "de" ? "de-DE" : "en-US",
    { minimumFractionDigits: 2, maximumFractionDigits: 2 }
  );

  return {
    success: true,
    weeks: processedWeeks,
    totalMinutes,
    totalDuration: formatDuration(totalMinutes, lang),
    totalDecimalHours,
    totalDecimalHoursNumber,
    targetMonthlyHours,
    difference,
    differenceFormatted,
    isAboveTarget: difference > 0,
    isBelowTarget: difference < 0,
    isExactTarget: Math.abs(difference) < 0.01,
    earnings,
    hourlyRate: hourlyRate ? parseFloat(hourlyRate) : null,
    averageWeeklyHours: (totalDecimalHoursNumber / Math.max(1, weeks.length)).toFixed(2),
  };
}
