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

const GlobeIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size} height={size} viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

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

          {/* Desktop Right Side: Lang Switch */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="group flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:border-[#C5A028] bg-gray-50 hover:bg-[#fffbf0] transition-all duration-300"
            >
              <span className="text-gray-500 group-hover:text-[#C5A028] transition-colors">
                <GlobeIcon size={18} />
              </span>
              <span className="text-sm font-bold text-gray-700 group-hover:text-[#C5A028] transition-colors">
                {lang === "en" ? "AR" : "EN"}
              </span>
            </button>
          </div>

          {/* Mobile Right Side */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 border border-gray-200 rounded-full px-3 py-1.5 bg-gray-50 hover:border-[#C5A028] transition-all text-gray-500"
            >
              <GlobeIcon size={15} />
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
        </div>
      )}
    </nav>
  );
}