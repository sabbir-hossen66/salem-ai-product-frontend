"use client";
import Image from 'next/image';
import React from 'react';
import { useLang } from '@/context/LanguageContext'; // সঠিক পাথ দিন

export default function ValueAndStrengths() {
    const { t } = useLang();

    return (
        <div className="w-full font-sans">
            
            {/* =========================================
                Section 1: How We Create Value (Dark Overlay)
            ========================================= */}
            <section className="relative w-full py-20 lg:py-28 overflow-hidden">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                        alt="Office Background"
                        fill
                        className="object-cover object-center"
                    />
                    {/* Dark gradient/solid overlay to make text readable */}
                    <div className="absolute inset-0 bg-black/80"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16 flex flex-col items-center">
                        <span className="text-[#C5A028] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                            {t("value.overline")}
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                            {t("value.title")}
                        </h2>
                    </div>

                    {/* 4-Column Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                        
                        {/* Step 1 */}
                        <div className="flex flex-col">
                            <div className="w-16 h-16 bg-[#9A7B26] flex items-center justify-center text-white text-xl font-bold mb-6 shadow-lg">
                                01
                            </div>
                            <h3 className="text-[#C5A028] text-xl font-bold mb-3">{t("value.step1_title")}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {t("value.step1_desc")}
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col">
                            <div className="w-16 h-16 bg-[#9A7B26] flex items-center justify-center text-white text-xl font-bold mb-6 shadow-lg">
                                02
                            </div>
                            <h3 className="text-[#C5A028] text-xl font-bold mb-3">{t("value.step2_title")}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {t("value.step2_desc")}
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col">
                            <div className="w-16 h-16 bg-[#9A7B26] flex items-center justify-center text-white text-xl font-bold mb-6 shadow-lg">
                                03
                            </div>
                            <h3 className="text-[#C5A028] text-xl font-bold mb-3">{t("value.step3_title")}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {t("value.step3_desc")}
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="flex flex-col">
                            <div className="w-16 h-16 bg-[#9A7B26] flex items-center justify-center text-white text-xl font-bold mb-6 shadow-lg">
                                04
                            </div>
                            <h3 className="text-[#C5A028] text-xl font-bold mb-3">{t("value.step4_title")}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {t("value.step4_desc")}
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* =========================================
                Section 2: Why Choose Us (Cards Section)
            ========================================= */}
            <section className="bg-[#fbfaf8] py-20 lg:py-28 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Header Area */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 gap-6">
                        <div>
                            <span className="text-[#C5A028] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                                {t("strengths.overline")}
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                                {t("strengths.title")}
                            </h2>
                        </div>
                        <a href="#" className="flex items-center text-gray-900 font-bold hover:text-[#C5A028] transition-colors group">
                            {t("strengths.learn_more")}
                            <svg className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 transform rtl:-scale-x-100 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    {/* 4-Column Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow flex flex-col h-full border border-gray-50/50">
                            <div className="text-[#A67C00] mb-8">
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-extrabold text-gray-900 mb-4">{t("strengths.card1_title")}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-8">
                                {t("strengths.card1_desc")}
                            </p>
                            <span className="text-[#A67C00] text-[10px] font-bold tracking-[0.15em] uppercase">
                                {t("strengths.card_tag")}
                            </span>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow flex flex-col h-full border border-gray-50/50">
                            <div className="text-[#A67C00] mb-8">
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 15l-2 5l9-4l-3-8" opacity="0.3"/>
                                    <circle cx="12" cy="8" r="6" />
                                    <path d="M8.21 13.89L7 23l5-3l5 3l-1.21-9.11" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-extrabold text-gray-900 mb-4">{t("strengths.card2_title")}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-8">
                                {t("strengths.card2_desc")}
                            </p>
                            <span className="text-[#A67C00] text-[10px] font-bold tracking-[0.15em] uppercase">
                                {t("strengths.card_tag")}
                            </span>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow flex flex-col h-full border border-gray-50/50">
                            <div className="text-[#A67C00] mb-8">
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 18h6" />
                                    <path d="M10 22h4" />
                                    <path d="M12 2a7 7 0 0 0-7 7c0 2 1.5 4 2.5 5.5A2.5 2.5 0 0 1 8 16h8a2.5 2.5 0 0 1 .5 1.5C17.5 13 19 11 19 9a7 7 0 0 0-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-extrabold text-gray-900 mb-4">{t("strengths.card3_title")}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-8">
                                {t("strengths.card3_desc")}
                            </p>
                            <span className="text-[#A67C00] text-[10px] font-bold tracking-[0.15em] uppercase">
                                {t("strengths.card_tag")}
                            </span>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow flex flex-col h-full border border-gray-50/50">
                            <div className="text-[#A67C00] mb-8">
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-extrabold text-gray-900 mb-4">{t("strengths.card4_title")}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-8">
                                {t("strengths.card4_desc")}
                            </p>
                            <span className="text-[#A67C00] text-[10px] font-bold tracking-[0.15em] uppercase">
                                {t("strengths.card_tag")}
                            </span>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}