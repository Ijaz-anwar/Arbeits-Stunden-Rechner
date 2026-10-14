"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Clock,
  Menu,
  X,
  Calculator,
  BookOpen,
  Mail,
  ChevronDown,
  Layers,
  ArrowRightLeft,
  Percent,
  Briefcase,
  PlusCircle,
  MinusCircle,
  Coins,
  Wallet,
  ShieldCheck,
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calcDropdownOpen, setCalcDropdownOpen] = useState(false);
  const [mobileCalcOpen, setMobileCalcOpen] = useState(true);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  const calculatorLinks = [
    {
      name: "Stunden Minuten Rechner",
      href: "/stunden-minuten-rechner",
      desc: "Zeitspanne von Arbeitsbeginn bis Ende",
      icon: Clock,
    },
    {
      name: "Zeit Rechner Stunden",
      href: "/zeit-rechner-stunden",
      desc: "Minuten in Stunden & Zeitdifferenzen",
      icon: ArrowRightLeft,
    },
    {
      name: "Stunden Dezimal Rechner",
      href: "/stunden-dezimal-rechner",
      desc: "Stunden & Minuten in Dezimalstunden",
      icon: Percent,
    },
    {
      name: "Industrie Stunden Rechner",
      href: "/industrie-stunden-rechner",
      desc: "Industrieminuten (100er-Teilung)",
      icon: Briefcase,
    },
    {
      name: "Stunden Zusammenrechnen Rechner",
      href: "/stunden-zusammenrechnen-rechner",
      desc: "Mehrere Arbeitszeiten & Tage addieren",
      icon: PlusCircle,
    },
    {
      name: "Stunden Reduzieren Rechner",
      href: "/stunden-reduzieren-rechner",
      desc: "Pausen & Minusstunden abziehen",
      icon: MinusCircle,
    },
    {
      name: "Minuten Stunden Rechner",
      href: "/minuten-stunden-rechner",
      desc: "Minuten schnell in Stunden umrechnen",
      icon: Clock,
    },
    {
      name: "Minijob Rechner Stunden",
      href: "/minijob-rechner-stunden",
      desc: "538 € Grenze & monatliche Höchstzeit",
      icon: Coins,
    },
    {
      name: "Stunden Brutto Rechner",
      href: "/stunden-brutto-rechner",
      desc: "Bruttolohn aus Stunden & Zuschlägen",
      icon: Wallet,
    },
    {
      name: "Brutto Netto Rechner Stunden",
      href: "/brutto-netto-rechner-stunden",
      desc: "Effektiver Netto-Stundenlohn & Abzüge",
      icon: ShieldCheck,
    },
  ];

  const isCalculatorActive = calculatorLinks.some((l) => pathname === l.href);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCalcDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/30 group-hover:bg-blue-700 transition-colors">
              <Clock className="w-5 h-5" strokeWidth={2.2} />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                Stundenrechner
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wide uppercase">
                Arbeitszeitrechner Online
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5" aria-label="Hauptnavigation">
            {/* Main Calculator */}
            <Link
              href="/"
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                pathname === "/"
                  ? "bg-blue-50 text-blue-700 font-bold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <Calculator className={`w-4 h-4 ${pathname === "/" ? "text-blue-600" : "text-slate-400"}`} />
              <span>Hauptrechner</span>
            </Link>

            {/* Rechner Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setCalcDropdownOpen(!calcDropdownOpen)}
                onMouseEnter={() => setCalcDropdownOpen(true)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                  isCalculatorActive || calcDropdownOpen
                    ? "bg-blue-50 text-blue-700 font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
                aria-expanded={calcDropdownOpen}
              >
                <Layers className={`w-4 h-4 ${isCalculatorActive ? "text-blue-600" : "text-slate-400"}`} />
                <span>Rechner</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    calcDropdownOpen ? "rotate-180 text-blue-600" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Dropdown Menu Card */}
              {calcDropdownOpen && (
                <div
                  onMouseLeave={() => setCalcDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-[580px] bg-white rounded-2xl shadow-xl border border-slate-200/90 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-2">
                    Spezialisierte Online-Rechner (10 Tools)
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {calculatorLinks.map((item) => {
                      const Icon = item.icon;
                      const active = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setCalcDropdownOpen(false)}
                          className={`flex items-start gap-2.5 p-2.5 rounded-xl transition-all ${
                            active
                              ? "bg-blue-50 text-blue-700"
                              : "hover:bg-slate-50 text-slate-700 hover:text-slate-900"
                          }`}
                        >
                          <div
                            className={`p-1.5 rounded-lg shrink-0 mt-0.5 ${
                              active ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold leading-snug">{item.name}</div>
                            <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Blog Link */}
            <Link
              href="/blog"
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                pathname.startsWith("/blog")
                  ? "bg-blue-50 text-blue-700 font-bold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <BookOpen className={`w-4 h-4 ${pathname.startsWith("/blog") ? "text-blue-600" : "text-slate-400"}`} />
              <span>Ratgeber &amp; Blog</span>
            </Link>

            {/* Kontakt Link */}
            <Link
              href="/kontakt"
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                pathname === "/kontakt"
                  ? "bg-blue-50 text-blue-700 font-bold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <Mail className={`w-4 h-4 ${pathname === "/kontakt" ? "text-blue-600" : "text-slate-400"}`} />
              <span>Kontakt</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Navigationsmenü öffnen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-2 shadow-lg max-h-[85vh] overflow-y-auto animate-in fade-in duration-150">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
              pathname === "/"
                ? "bg-blue-50 text-blue-700"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            <Calculator className="w-5 h-5 text-blue-600" />
            <span>Hauptrechner</span>
          </Link>

          {/* Mobile Calculator Group */}
          <div className="pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setMobileCalcOpen(!mobileCalcOpen)}
              className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-900"
            >
              <span>Alle Rechner (10 Online-Tools)</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${mobileCalcOpen ? "rotate-180" : ""}`}
              />
            </button>

            {mobileCalcOpen && (
              <div className="space-y-1 pl-2 pt-1">
                {calculatorLinks.map((item) => {
                  const Icon = item.icon;
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        active
                          ? "bg-blue-50 text-blue-700 font-bold"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${active ? "text-blue-600" : "text-slate-400"}`} />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-1">
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                pathname.startsWith("/blog")
                  ? "bg-blue-50 text-blue-700 font-semibold"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <BookOpen className="w-5 h-5 text-slate-500" />
              <span>Ratgeber &amp; Blog</span>
            </Link>

            <Link
              href="/kontakt"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                pathname === "/kontakt"
                  ? "bg-blue-50 text-blue-700 font-semibold"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Mail className="w-5 h-5 text-slate-500" />
              <span>Kontakt</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
