"use client";
import React from 'react';
import { useLang } from '@/context/LanguageContext'; // আপনার সঠিক পাথ দিন

export default function CallToAction() {
    const { t } = useLang();

    return (
        <section className="w-full bg-[#fbfaf8] py-20 lg:py-28 border-b-[8px] border-[#9A7B26] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-3xl mx-auto text-center">
                
                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-6 leading-[1.2]">
                    {t("cta.title_part1")} <br className="hidden sm:block" /> {t("cta.title_part2")}
                </h2>
                
                {/* Subheading / Description */}
                <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                    {t("cta.desc")}
                </p>
                
                {/* Buttons Container */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
                    
                    {/* Solid Button */}
                    <a 
                        href="#" 
                        className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 bg-[linear-gradient(105deg,#745B00_0%,#FFC300_100%)] text-white text-sm font-bold tracking-wide hover:bg-[#856920] transition-colors shadow-sm"
                    >
                        {t("cta.portfolio")}
                        <svg className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                    
                    {/* Outline Button */}
                    <a 
                        href="contact-us" 
                        className="w-full sm:w-auto flex items-center justify-center px-8 py-3.5 border border-[#9A7B26] text-[#9A7B26] text-sm font-bold tracking-wide transition-colors"
                    >
                        {t("cta.contact")}
                        <svg className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>

                </div>

            </div>
        </section>
    );
}