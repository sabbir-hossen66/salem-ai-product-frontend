"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { useLang } from '@/context/LanguageContext';

const navLinks = [
  { key: "nav.home",        href: "/" },
  { key: "nav.about",       href: "/about" },
  { key: "nav.sectors",     href: "/sectors" },
  { key: "nav.whychooseus", href: "/why-choose-us" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lang, toggleLang, t } = useLang();

  return (
    <nav className="w-full bg-white border-b border-[#745B00] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="https://i.ibb.co/JFWh92qD/99d7b72a2edc7a5cb8f1657d389128687301fb3c.png"
              alt="Salem AI Logo" width={240} height={80}
              className="w-48 md:w-60 h-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href} href={link.href}
                className={`font-bold transition-colors pb-1 ${
                  pathname === link.href
                    ? "text-[#C5A028] border-b-2 border-[#C5A028]"
                    : "text-gray-800 hover:text-[#C5A028]"
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          {/* Right Side: Lang Switch + Contact */}
          <div className="hidden md:flex items-center gap-3">

            {/* Language Toggle Button */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 border border-[#C5A028] rounded-full px-3 py-1.5 text-sm font-bold text-[#C5A028] hover:bg-[#C5A028] hover:text-white transition-all duration-300"
            >
              <span>{lang === "en" ? "AR" : "EN"}</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </button>

            {/* Contact Button */}
            <button className="bg-linear-to-r from-[#745B00] to-[#FFC300] text-white px-6 py-4 flex items-center font-semibold hover:opacity-90 transition-opacity">
              {t("nav.contact")}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="border border-[#C5A028] rounded-full px-2.5 py-1 text-xs font-bold text-[#C5A028]"
            >
              {lang === "en" ? "AR" : "EN"}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-[#C5A028] focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#745B00] px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-3 py-2 font-bold rounded-md transition-colors ${
                pathname === link.href
                  ? "text-[#C5A028] bg-yellow-50"
                  : "text-gray-800 hover:text-[#C5A028] hover:bg-yellow-50"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
          <button className="w-full mt-4 bg-linear-to-r from-[#745B00] to-[#FFC300] text-white px-6 py-3 flex items-center justify-center font-semibold hover:opacity-90 transition-opacity">
            {t("nav.contact")}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      )}
    </nav>
  );
}