"use client";

import { useState } from "react";
import Image from "next/image";
import { LangSwitcher } from "./LangSwitcher";

interface NavStrings {
  services: string;
  pricing: string;
  fleet: string;
  partners: string;
  contact: string;
  book: string;
}

interface NavHeaderProps {
  lang: "fr" | "en";
  nav: NavStrings;
  waUrl: string;
  phoneDisplay: string;
}

export function NavHeader({ lang, nav, waUrl, phoneDisplay }: NavHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const homePrefix = lang === "fr" ? "/" : "/en/";
  const navItems = [
    { href: `${homePrefix}#services`, label: nav.services },
    { href: `${homePrefix}#tarifs`, label: nav.pricing },
    { href: `${homePrefix}#flotte`, label: nav.fleet },
    { href: `${homePrefix}#partenaires`, label: nav.partners },
    { href: `${homePrefix}#contact`, label: nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(10,10,10,0.78)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href={homePrefix} className="flex items-center">
          <Image
            src="/logo.png"
            alt="Dakar Fleet"
            width={150}
            height={56}
            className="h-14 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 text-[0.78rem] uppercase tracking-[0.12em] text-white/70 md:flex">
          {navItems.map(({ href, label }) => (
            <a key={href} href={href} className="transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitcher lang={lang} />
          <a
            href={`tel:${phoneDisplay.replace(/\s/g, "")}`}
            className="hidden text-sm text-[#C9A84C] transition hover:text-[#E8C97A] sm:block"
          >
            {phoneDisplay}
          </a>
          <a
            href={waUrl}
            className="rounded-full bg-[#C9A84C] px-5 py-2.5 text-[0.78rem] font-medium uppercase tracking-[0.1em] text-black transition hover:scale-[1.02] hover:bg-[#E8C97A]"
          >
            {nav.book}
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span className={`block h-px w-6 bg-[#F7F3EE] transition-all duration-300 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-[#F7F3EE] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-[#F7F3EE] transition-all duration-300 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <div className={`overflow-hidden transition-all duration-300 md:hidden ${menuOpen ? "max-h-80" : "max-h-0"}`}>
        <nav className="flex flex-col border-t border-white/10 bg-[rgba(10,10,10,0.97)]">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/5 px-6 py-4 text-sm uppercase tracking-[0.12em] text-white/70 transition hover:text-white"
            >
              {label}
            </a>
          ))}
          <a href={`tel:${phoneDisplay.replace(/\s/g, "")}`} className="px-6 py-4 text-sm text-[#C9A84C]">
            {phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
