"use client";
import Image from 'next/image';
import React from 'react';
import { useLang } from '@/context/LanguageContext'; // সঠিক পাথ দিন

export default function AboutOverviewSection() {
    const { t } = useLang();

    return (
        <div className="w-full font-sans">
            
            {/* =========================================
                Top Section: Dark Hero / Header
            ========================================= */}
            <section className="relative w-full py-24 lg:py-32 bg-[#111111] overflow-hidden">
                {/* Background Image with Dark Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="https://i.ibb.co.com/gZbV4XTc/2905325c07ca002f78c284eab5faed9a2d20675b.png" 
                        alt="Office Background"
                        fill
                        className="object-cover opacity-5" 
                    />
                </div>
                
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
                    
                    {/* Overline with Side Lines */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <span className="w-8 sm:w-12 h-[1px] bg-white/60"></span>
                        <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">
                            {t("about_overview.hero_overline")}
                        </span>
                        <span className="w-8 sm:w-12 h-[1px] bg-white/60"></span>
                    </div>
                    
                    {/* Main Title */}
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
                        {t("about_overview.hero_title_part1")} <br className="hidden sm:block" /> {t("about_overview.hero_title_part2")}
                    </h1>
                    
                    {/* Subtitle / Description */}
                    <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                        {t("about_overview.hero_desc")}
                    </p>
                </div>
            </section>

            {/* =========================================
                Bottom Section: Overview & Features
            ========================================= */}
          <section className="relative w-full bg-[#FAF8F4] py-20 lg:py-32 overflow-hidden">
                
                {/* Giant Watermark Background Text */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
                    <span className="text-[100px] sm:text-[180px] lg:text-[250px] font-extrabold text-black/[0.03] tracking-tighter whitespace-nowrap">
                        {t("about_overview.watermark")}
                    </span>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* items-center পরিবর্তন করে items-stretch করা হয়েছে যাতে উভয় কলামের উচ্চতা সমান হয় */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                        
                        {/* Left Side: Image */}
                        {/* height সমান রাখার জন্য relative এবং flex-grow ব্যবহার করা হয়েছে */}
                        <div className="relative w-full min-h-[400px] lg:min-h-0 shadow-lg flex-grow">
                            <Image 
                                src="https://i.ibb.co.com/21sF5mjt/d8160850f479e385ee33c51aa065fcb8989682a2.jpg" 
                                alt="Company Office Logo Wall"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Right Side: Text Content */}
                        <div className="flex flex-col justify-center py-4 lg:py-8">
                            
                            <span className="text-[#9A7B26] text-xs font-bold tracking-[0.2em] uppercase mb-4">
                                {t("about_overview.overview_overline")}
                            </span>
                            
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15] mb-6">
                                {t("about_overview.overview_title")}
                            </h2>
                            
                            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-10">
                                {t("about_overview.overview_desc")}
                            </p>

                            {/* Two Columns Sub-features */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-0 mt-auto">
                                
                                {/* Feature 1 */}
                                {/* RTL এর জন্য প্যাডিং চেঞ্জ করা হয়েছে */}
                                <div className="flex flex-col sm:pr-6 rtl:sm:pr-0 rtl:sm:pl-6">
                                    <h4 className="text-[#9A7B26] font-bold text-base mb-2">
                                        {t("about_overview.feat1_title")}
                                    </h4>
                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                                        {t("about_overview.feat1_desc")}
                                    </p>
                                </div>
                                
                                {/* Feature 2 (With Left Border on larger screens) */}
                                {/* RTL এর জন্য বর্ডার এবং প্যাডিং চেঞ্জ করা হয়েছে */}
                                <div className="flex flex-col sm:border-l rtl:sm:border-l-0 rtl:sm:border-r sm:border-[#C5A028]/40 sm:pl-6 rtl:sm:pl-0 rtl:sm:pr-6">
                                    <h4 className="text-[#9A7B26] font-bold text-base mb-2">
                                        {t("about_overview.feat2_title")}
                                    </h4>
                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                                        {t("about_overview.feat2_desc")}
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}