"use client";
import Image from 'next/image';
import React from 'react';
import { useLang } from '@/context/LanguageContext'; // সঠিক পাথ দিন

export default function SectorsAndIndustries() {
    const { t } = useLang();

    return (
        <div className="w-full font-sans">
            
            {/* =========================================
                Top Section: OUR SECTORS (Dark Background)
            ========================================= */}
            <section className="relative w-full bg-[#111111] py-24 lg:py-32 overflow-hidden">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
                        alt="Office Background"
                        fill
                        className="object-cover opacity-20" 
                    />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                    
                    {/* Overline */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-8 h-[1px] bg-gray-400"></div>
                        <span className="text-gray-300 text-xs font-bold tracking-[0.2em] uppercase">
                            {t("sectors.top_overline")}
                        </span>
                        {/* RTL লেআউটে লাইন দুইদিকে ব্যালেন্স করার জন্য ডান দিকেও একটি লাইন রাখতে পারেন, তবে Center layout এ এটি ঐচ্ছিক */}
                        <div className="w-8 h-[1px] bg-gray-400"></div>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        {t("sectors.top_title_part1")} <br className="hidden md:block" /> {t("sectors.top_title_part2")}
                    </h2>

                    {/* Paragraph */}
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                        {t("sectors.top_desc")}
                    </p>
                </div>
            </section>

            {/* =========================================
                Bottom Section: WHERE WE OPERATE (Light Background)
            ========================================= */}
            <section className="relative w-full bg-[#FAF8F4] py-20 lg:py-28 overflow-hidden">
                
                {/* Background Watermark (GROWTH) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none select-none z-0 w-full overflow-hidden h-[300px]">
                    <h1 className="text-[10rem] md:text-[16rem] lg:text-[22rem] font-black text-[#F0EBE1] opacity-60 tracking-widest leading-none">
                        {t("sectors.watermark")}
                    </h1>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Header Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-20">
                        {/* Left Side: Titles */}
                        <div className="text-left rtl:text-right">
                            <span className="text-[#C5A028] text-xs font-bold tracking-[0.2em] uppercase block mb-4">
                                {t("sectors.bot_overline")}
                            </span>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                                {t("sectors.bot_title")}
                            </h2>
                        </div>
                        
                        {/* Right Side: Description with vertical border */}
                        {/* RTL এর জন্য বর্ডার এবং প্যাডিং ফ্লিপ করা হয়েছে */}
                        <div className="pl-6 rtl:pl-0 rtl:pr-6 border-l rtl:border-l-0 rtl:border-r border-gray-300 text-left rtl:text-right">
                            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-lg rtl:max-w-none">
                                {t("sectors.bot_desc")}
                            </p>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="flex flex-col gap-6">
                        
                        {/* Top Row: 2 Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            
                            {/* Card 1: Digital Marketing */}
                            <div className="relative h-[350px] lg:h-[400px] w-full group overflow-hidden bg-black text-left rtl:text-right">
                                <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" alt="Digital Marketing" fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full">
                                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">{t("sectors.card1_title")}</h3>
                                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                                        {t("sectors.card1_desc")}
                                    </p>
                                    <span className="text-[#C5A028] text-[10px] font-bold tracking-[0.15em] uppercase">
                                        {t("sectors.card1_footer")}
                                    </span>
                                </div>
                            </div>

                            {/* Card 2: Hajj & Umrah */}
                            <div className="relative h-[350px] lg:h-[400px] w-full group overflow-hidden bg-black text-left rtl:text-right">
                                <Image src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=800&auto=format&fit=crop" alt="Hajj & Umrah" fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end h-full">
                                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">{t("sectors.card2_title")}</h3>
                                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                                        {t("sectors.card2_desc")}
                                    </p>
                                    <span className="text-[#C5A028] text-[10px] font-bold tracking-[0.15em] uppercase">
                                        {t("sectors.card2_footer")}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Row: 3 Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            
                            {/* Card 3: Contracting */}
                            <div className="relative h-[350px] lg:h-[450px] w-full group overflow-hidden bg-black text-left rtl:text-right">
                                <Image src="https://i.ibb.co.com/FLbC6y9G/6ab6a9e9c17b7e9c839ac8e52bb5643a2840bd4c-1.jpg" alt="Contracting" fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 flex flex-col justify-end h-full">
                                    <h3 className="text-lg lg:text-xl font-bold text-white mb-3">{t("sectors.card3_title")}</h3>
                                    <p className="text-gray-300 text-xs leading-relaxed mb-5 line-clamp-3 lg:line-clamp-none">
                                        {t("sectors.card3_desc")}
                                    </p>
                                    <span className="text-[#C5A028] text-[9px] font-bold tracking-[0.15em] uppercase">
                                        {t("sectors.card3_footer")}
                                    </span>
                                </div>
                            </div>

                            {/* Card 4: E-Commerce */}
                            <div className="relative h-[350px] lg:h-[450px] w-full group overflow-hidden bg-black text-left rtl:text-right">
                                <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop" alt="E-Commerce" fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 flex flex-col justify-end h-full">
                                    <h3 className="text-lg lg:text-xl font-bold text-white mb-3">{t("sectors.card4_title")}</h3>
                                    <p className="text-gray-300 text-xs leading-relaxed mb-5 line-clamp-3 lg:line-clamp-none">
                                        {t("sectors.card4_desc")}
                                    </p>
                                    <span className="text-[#C5A028] text-[9px] font-bold tracking-[0.15em] uppercase">
                                        {t("sectors.card4_footer")}
                                    </span>
                                </div>
                            </div>

                            {/* Card 5: Technology */}
                            <div className="relative h-[350px] lg:h-[450px] w-full group overflow-hidden bg-black text-left rtl:text-right">
                                <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" alt="Technology" fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 flex flex-col justify-end h-full">
                                    <h3 className="text-lg lg:text-xl font-bold text-white mb-3">{t("sectors.card5_title")}</h3>
                                    <p className="text-gray-300 text-xs leading-relaxed mb-5 line-clamp-3 lg:line-clamp-none">
                                        {t("sectors.card5_desc")}
                                    </p>
                                    <span className="text-[#C5A028] text-[9px] font-bold tracking-[0.15em] uppercase">
                                        {t("sectors.card5_footer")}
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}