"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const navLinks = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "SECTORS", href: "/sectors" },
    { label: "WHY CHOOSE US", href: "/why-choose-us" },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="w-full bg-white border-b border-[#745B00] shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">

                    {/* Logo */}
                    <Link href="/" className="flex items-center shrink-0">
                        <Image
                            src="https://i.ibb.co/JFWh92qD/99d7b72a2edc7a5cb8f1657d389128687301fb3c.png"
                            alt="Salem AI Logo"
                            width={240}
                            height={80}
                            className="w-48 md:w-60 h-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`font-bold transition-colors pb-1 ${
                                    pathname === link.href
                                        ? "text-[#C5A028] border-b-2 border-[#C5A028]"
                                        : "text-gray-800 hover:text-[#C5A028]"
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Contact Us Button */}
                    <div className="hidden md:block">
                        <button className="bg-linear-to-r from-[#745B00] to-[#FFC300] text-white px-6 py-4 flex items-center font-semibold hover:opacity-90 transition-opacity">
                            Contact Us
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-800 hover:text-[#C5A028] focus:outline-none"
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
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block px-3 py-2 font-bold rounded-md transition-colors ${
                                pathname === link.href
                                    ? "text-[#C5A028] bg-yellow-50"
                                    : "text-gray-800 hover:text-[#C5A028] hover:bg-yellow-50"
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <button className="w-full mt-4 bg-linear-to-r from-[#745B00] to-[#FFC300] text-white px-6 py-3 flex items-center justify-center font-semibold hover:opacity-90 transition-opacity">
                        Contact Us
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            )}
        </nav>
    );
}