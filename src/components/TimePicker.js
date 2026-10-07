"use client";

import { useState, useRef, useEffect } from "react";
import { Clock, ChevronDown, Check } from "lucide-react";

export default function TimePicker({
  value = "08:00",
  onChange,
  label = "",
  id = "",
  presets = [],
  className = "",
  placeholder = "HH:MM",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const containerRef = useRef(null);

  // Sync external value with local input
  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  // Parse hours and minutes from value
  const parseTime = (timeStr) => {
    if (!timeStr || !timeStr.includes(":")) return { h: "08", m: "00" };
    const [h, m] = timeStr.split(":");
    return {
      h: String(parseInt(h, 10) || 0).padStart(2, "0"),
      m: String(parseInt(m, 10) || 0).padStart(2, "0"),
    };
  };

  const { h: currentHour, m: currentMinute } = parseTime(value);

  // Normalize input on blur (e.g., "8" -> "08:00", "8:3" -> "08:30", "1700" -> "17:00")
  const handleBlur = () => {
    if (!inputValue || !inputValue.trim()) {
      setInputValue(value);
      return;
    }

    let clean = inputValue.trim().replace(/[.,]/g, ":");

    // Handle "800" or "1700"
    if (/^\d{3,4}$/.test(clean)) {
      if (clean.length === 3) {
        clean = "0" + clean[0] + ":" + clean.slice(1);
      } else {
        clean = clean.slice(0, 2) + ":" + clean.slice(2);
      }
    }

    // Handle single hour number "8" or "17"
    if (/^\d{1,2}$/.test(clean)) {
      const h = Math.min(23, Math.max(0, parseInt(clean, 10)));
      clean = `${String(h).padStart(2, "0")}:00`;
    }

    if (clean.includes(":")) {
      const parts = clean.split(":");
      let h = parseInt(parts[0], 10);
      let m = parseInt(parts[1], 10);

      if (isNaN(h)) h = 8;
      if (isNaN(m)) m = 0;

      h = Math.min(23, Math.max(0, h));
      m = Math.min(59, Math.max(0, m));

      const formatted = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
      setInputValue(formatted);
      if (onChange) onChange(formatted);
    } else {
      setInputValue(value);
    }
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const selectHour = (h) => {
    const formatted = `${h}:${currentMinute}`;
    setInputValue(formatted);
    if (onChange) onChange(formatted);
  };

  const selectMinute = (m) => {
    const formatted = `${currentHour}:${m}`;
    setInputValue(formatted);
    if (onChange) onChange(formatted);
  };

  const selectPreset = (presetTime) => {
    setInputValue(presetTime);
    if (onChange) onChange(presetTime);
    setIsOpen(false);
  };

  // Generate 24 hours list
  const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"));
  // Common 5-minute intervals for work timesheets
  const minutes = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      {label && (
        <label
          htmlFor={id}
          className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5"
        >
          {label}
        </label>
      )}

      {/* The Styled Text Input Box (NEVER triggers browser AM/PM popup) */}
      <div className="relative flex items-center">
        <input
          type="text"
          id={id}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={handleBlur}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleBlur();
              setIsOpen(false);
            }
          }}
          placeholder={placeholder}
          maxLength={5}
          className="w-full h-12 pl-4 pr-11 rounded-xl border border-slate-300 bg-white text-slate-900 text-base sm:text-sm font-bold tracking-wide focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition-all shadow-xs cursor-text"
        />

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="absolute right-1 top-1 bottom-1 px-2.5 text-slate-400 hover:text-slate-700 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Toggle time picker menu"
          tabIndex={-1}
        >
          <Clock className="w-4 h-4" />
        </button>
      </div>

      {/* Custom Dropdown Popover */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 p-3.5 animate-in fade-in zoom-in-95 duration-150">
          {/* Quick Presets row if provided */}
          {presets.length > 0 && (
            <div className="mb-3 pb-3 border-b border-slate-100">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block mb-1.5">
                Schnellauswahl:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {presets.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => selectPreset(p)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      value === p
                        ? "bg-[#0b4870] text-white shadow-xs"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Two-Column 24H Picker: Hours & Minutes */}
          <div className="grid grid-cols-2 gap-2">
            {/* Hours Column */}
            <div>
              <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5 px-1 flex items-center justify-between">
                <span>Stunde (24h)</span>
                <span className="text-blue-700 font-bold">{currentHour}:</span>
              </div>
              <div className="h-48 overflow-y-auto pr-1 space-y-1 rounded-xl bg-slate-50/70 p-1 border border-slate-100 scrollbar-thin">
                {hours.map((h) => {
                  const isSelected = h === currentHour;
                  return (
                    <button
                      key={h}
                      type="button"
                      onClick={() => selectHour(h)}
                      className={`w-full py-1.5 px-2.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-[#0b4870] text-white font-bold"
                          : "text-slate-700 hover:bg-white hover:text-slate-900"
                      }`}
                    >
                      <span>{h}:00</span>
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Minutes Column */}
            <div>
              <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5 px-1 flex items-center justify-between">
                <span>Minute</span>
                <span className="text-blue-700 font-bold">:{currentMinute}</span>
              </div>
              <div className="h-48 overflow-y-auto pr-1 space-y-1 rounded-xl bg-slate-50/70 p-1 border border-slate-100 scrollbar-thin">
                {minutes.map((m) => {
                  const isSelected = m === currentMinute;
                  return (
                    <button
                      key={m}
                      type="button"
                      onClick={() => selectMinute(m)}
                      className={`w-full py-1.5 px-2.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-[#0b4870] text-white font-bold"
                          : "text-slate-700 hover:bg-white hover:text-slate-900"
                      }`}
                    >
                      <span>:{m}</span>
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-medium">
              Ausgewählt: <strong className="text-slate-900">{value}</strong>
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="px-3 py-1 bg-[#0b4870] hover:bg-[#083552] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
            >
              Fertig
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
