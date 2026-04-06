"use client";
import Image from 'next/image';
import React from 'react';
import { useLang } from '@/context/LanguageContext'; // সঠিক পাথ দিন

export default function ImpactAndPartnership() {
    const { t } = useLang();

    return (
        <div className="w-full font-sans">
            {/* Top Section: Our Impact (Dark Background) */}
            <section className="relative w-full bg-[#111111] py-20 lg:py-28 overflow-hidden">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                    {/* Note: Replace the src with your actual background image */}
                    <Image
                        src="https://i.ibb.co.com/p6qL9JWn/c3a8ead1973e08ff79f0df876e10b1cadf3467cd.png"
                        alt="Cityscape Background"
                        fill
                        className="object-cover opacity-10" 
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        
                        {/* Left Content */}
                        <div className="text-left rtl:text-right">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-[#C5A028] text-xs font-bold tracking-[0.2em] uppercase">
                                    {t("impact.overline")}
                                </span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                                {t("impact.title_part1")} <br className="hidden md:block" /> {t("impact.title_part2")}
                            </h2>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg rtl:max-w-none lg:rtl:max-w-lg">
                                {t("impact.desc")}
                            </p>
                        </div>

                        {/* Right Content: Stats */}
                        <div className="flex flex-row gap-12 lg:justify-end items-center">
                            {/* Stat 1 */}
                            <div className="text-left rtl:text-right">
                                <h3 className="text-5xl sm:text-6xl font-bold text-white mb-2">
                                    6+
                                </h3>
                                <p className="text-[#C5A028] text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                                    {t("impact.stat1_label")}
                                </p>
                            </div>
                            
                            {/* Stat 2 */}
                            <div className="text-left rtl:text-right">
                                <h3 className="text-5xl sm:text-6xl font-bold text-white mb-2">
                                    10+
                                </h3>
                                <p className="text-[#C5A028] text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                                    {t("impact.stat2_label")}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Bottom Section: Strategic Partnerships (Light Background) */}
            <section className="w-full bg-[#FAF8F4] py-20 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                    
                    <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-gray-900 mb-6 leading-tight">
                        {t("partnership.title_part1")} <br className="hidden md:block" /> {t("partnership.title_part2")}
                    </h2>
                    
                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-10 max-w-2xl">
                        {t("partnership.desc")}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        {/* Solid Button */}
                        <button className="cursor-pointer w-full sm:w-auto px-8 py-3.5 bg-[linear-gradient(105deg,#745B00_0%,#FFC300_100%)] transition-colors duration-300 text-white text-sm font-semibold flex items-center justify-center gap-2">
                            {t("partnership.btn_explore")}
                            {/* RTL এর জন্য আইকন ঘোরানো হয়েছে */}
                            <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                        
                        {/* Outline Button */}
                        <button className="cursor-pointer w-full sm:w-auto px-8 py-3.5 bg-white border border-[#9E801C] text-[#9E801C] hover:bg-gray-50 transition-colors duration-300 text-sm font-semibold flex items-center justify-center gap-2">
                            {t("partnership.btn_contact")}
                            {/* RTL এর জন্য আইকন ঘোরানো হয়েছে */}
                            <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>

                </div>
            </section>
        </div>
    );
}