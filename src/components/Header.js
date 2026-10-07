"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock, Menu, X, Calculator, BookOpen, Mail } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Stundenrechner", href: "/", icon: Calculator },
    { name: "Ratgeber & Blog", href: "/blog", icon: BookOpen },
    { name: "Kontakt", href: "/kontakt", icon: Mail },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

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
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    active
                      ? "bg-blue-50 text-blue-700 font-bold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  <Icon className={`w-4 h-4 ${active ? "text-blue-600" : "text-slate-400"}`} />
                  {link.name}
                </Link>
              );
            })}
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

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg animate-in fade-in duration-150">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  active
                    ? "bg-blue-50 text-blue-700 font-semibold"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <Icon className={`w-5 h-5 ${active ? "text-blue-600" : "text-slate-400"}`} />
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
