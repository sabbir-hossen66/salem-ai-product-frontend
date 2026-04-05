"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { useLang } from '@/context/LanguageContext';

const navLinks = [
  { key: "nav.home",        href: "/" },
  { key: "nav.about",       href: "/about" },
  { key: "nav.sectors",     href: "/sectors" },
  { key: "nav.whychooseus", href: "/why-choose-us" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { lang, toggleLang, t } = useLang();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`
      w-full bg-white border-b border-[#745B00]
      sticky top-0 z-50
      transition-shadow duration-300
      ${isScrolled ? "shadow-lg" : "shadow-sm"}
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="https://i.ibb.co/JFWh92qD/99d7b72a2edc7a5cb8f1657d389128687301fb3c.png"
              alt="Salem AI Logo" width={240} height={80}
              className="w-40 md:w-52 h-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href} href={link.href}
                className={`font-bold text-sm tracking-wide transition-colors pb-1 ${
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

            {/* Language Toggle — Flag + Label */}
            <button
              onClick={toggleLang}
              className="group flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:border-[#C5A028] bg-gray-50 hover:bg-[#fffbf0] transition-all duration-300"
            >
              <span className="text-lg leading-none">
                {lang === "en" ? "🇸🇦" : "🇬🇧"}
              </span>
              <span className="text-sm font-bold text-gray-700 group-hover:text-[#C5A028] transition-colors">
                {lang === "en" ? "AR" : "EN"}
              </span>
            </button>

            {/* Contact Button */}
            {/* <button className="bg-linear-to-r from-[#745B00] to-[#FFC300] text-white px-6 py-3.5 flex items-center font-semibold hover:opacity-90 transition-opacity">
              {t("nav.contact")}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button> */}
          </div>

          {/* Mobile Right Side */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 border border-gray-200 rounded-full px-3 py-1.5 bg-gray-50 hover:border-[#C5A028] transition-all"
            >
              <span className="text-base leading-none">
                {lang === "en" ? "🇸🇦" : "🇬🇧"}
              </span>
              <span className="text-xs font-bold text-gray-700">
                {lang === "en" ? "AR" : "EN"}
              </span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-[#C5A028] focus:outline-none p-1"
            >
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
              className={`block px-3 py-2.5 font-bold rounded-md transition-colors ${
                pathname === link.href
                  ? "text-[#C5A028] bg-yellow-50"
                  : "text-gray-800 hover:text-[#C5A028] hover:bg-yellow-50"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
          {/* <button className="w-full mt-3 bg-linear-to-r from-[#745B00] to-[#FFC300] text-white px-6 py-3 flex items-center justify-center font-semibold hover:opacity-90 transition-opacity">
            {t("nav.contact")}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button> */}
        </div>
      )}
    </nav>
  );
}