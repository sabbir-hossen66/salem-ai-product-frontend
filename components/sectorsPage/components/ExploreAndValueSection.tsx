"use client"
import Image from 'next/image';
import React from 'react';
import { useLang } from '@/context/LanguageContext'; // সঠিক পাথ দিন

export default function ExploreAndValueSection() {
    const { t } = useLang();

    return (
        <div className="w-full font-sans">
            
            {/* =========================================
                Top Section: Explore New Opportunities (Dark)
            ========================================= */}
            <section className="relative w-full bg-[#111111] py-16 lg:py-20 overflow-hidden">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        // Replace with your actual background image
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop"
                        alt="Background Pattern"
                        fill
                        className="object-cover opacity-30" 
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                        
                        {/* Left Side: Text */}
                        <div className="max-w-3xl text-left rtl:text-right">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
                                {t("explore.title")}
                            </h2>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                {t("explore.desc")}
                            </p>
                        </div>

                        {/* Right Side: Button */}
                        <div className="shrink-0">
                            <button className="px-8 py-3.5 bg-linear-to-r from-[#745B00] to-[#FFC300] hover:bg-[#A88822] transition-colors duration-300 text-white text-sm font-semibold flex items-center justify-center gap-2 rounded-sm shadow-lg">
                                {t("explore.btn_contact")}
                                {/* RTL এর জন্য অ্যারো ঘোরানো হয়েছে */}
                                <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================
                Bottom Section: Building Value (Light)
            ========================================= */}
            <section className="w-full bg-[#FAF8F4] py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        
                        {/* Left Column: Content */}
                        <div className="text-left rtl:text-right">
                            {/* Overline */}
                            <span className="text-[#C5A028] text-xs font-bold tracking-[0.2em] uppercase block mb-4">
                                {t("value.overline")}
                            </span>
                            
                            {/* Heading */}
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
                                {t("value.title")}
                            </h2>

                            {/* Paragraph */}
                            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-10 text-justify">
                                {t("value.desc")}
                            </p>

                            {/* Sub-items with Divider */}
                            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 lg:pt-0">
                                {/* Vertical Divider for Desktop */}
                                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gray-300 transform -translate-x-1/2"></div>

                                {/* Item 1 */}
                                {/* RTL এর জন্য প্যাডিং ফ্লিপ করা হয়েছে */}
                                <div className="pr-0 md:pr-6 rtl:md:pr-0 rtl:md:pl-6">
                                    <h4 className="text-[#C5A028] text-base lg:text-lg font-bold mb-2">
                                        {t("value.item1_title")}
                                    </h4>
                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                                        {t("value.item1_desc")}
                                    </p>
                                </div>

                                {/* Item 2 */}
                                {/* RTL এর জন্য প্যাডিং ফ্লিপ করা হয়েছে */}
                                <div className="pl-0 md:pl-6 rtl:md:pl-0 rtl:md:pr-6 border-t border-gray-200 pt-6 md:border-t-0 md:pt-0">
                                    <h4 className="text-[#C5A028] text-base lg:text-lg font-bold mb-2">
                                        {t("value.item2_title")}
                                    </h4>
                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                                        {t("value.item2_desc")}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Image */}
                        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] shadow-xl rounded-sm overflow-hidden">
                            <Image 
                                // Replace with actual plant/coins image
                                src="https://images.unsplash.com/photo-1533421821268-87e42c1d70b0?q=80&w=1000&auto=format&fit=crop" 
                                alt="Plant growing from coins" 
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                    </div>
                </div>
            </section>
            
        </div>
    );
}