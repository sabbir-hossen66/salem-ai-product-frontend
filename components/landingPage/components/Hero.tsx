import Image from 'next/image';
import React from 'react';
import { useLang } from '@/context/LanguageContext';

export default function Hero() {
    const { t, lang } = useLang();
    const isAr = lang === "ar";

    return (
        <section className="relative w-full bg-[#fbfaf8]">

            {/* =========================================
                1. Top Hero Section: Text + Image 
            ========================================= */}
            <div className="relative flex flex-col lg:flex-row w-full min-h-[600px] lg:min-h-[700px]">

                {/* Left Content Area — always stays LEFT, never flips */}
                <div className="relative z-10 w-full lg:w-[55%] flex items-center">
                    <div
                        dir={isAr ? "rtl" : "ltr"}
                        className="w-full px-4 sm:px-8 lg:px-16 pt-16 pb-32 lg:pt-32 lg:pb-48"
                    >
                        {/* Overline */}
                        <div className={`flex items-center gap-4 mb-6 ${isAr ? "flex-row-reverse" : ""}`}>
                            <div className="w-12 h-[2px] bg-[#C5A028]"></div>
                            <span className="text-xs sm:text-sm font-bold text-[#C5A028] tracking-widest uppercase">
                                {t("hero.subtitle")}
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
                            {t("hero.title")}
                        </h1>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
                            {t("hero.description")}
                        </p>

                        {/* Buttons */}
                        <div className={`flex flex-col sm:flex-row gap-4 ${isAr ? "sm:flex-row-reverse" : ""}`}>
                            <button className="bg-gradient-to-r from-[#745B00] to-[#FFC300] text-white px-8 py-3.5 flex justify-center items-center font-semibold hover:opacity-90 transition-opacity shadow-md">
                                {t("hero.btn1")}
                                <svg className={`w-5 h-5 ${isAr ? "mr-2 rotate-180" : "ml-2"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                            <button className="border border-[#C5A028] text-[#745B00] bg-white px-8 py-3.5 flex justify-center items-center font-semibold hover:bg-[#C5A028] hover:text-white transition-colors shadow-sm">
                                {t("hero.btn2")}
                                <svg className={`w-5 h-5 ${isAr ? "mr-2 rotate-180" : "ml-2"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Image — always stays RIGHT, no dir */}
                <div className="hidden lg:block lg:w-[45%] relative">
                    <Image
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop"
                        alt="Business Meeting"
                        fill
                        className="object-cover object-left"
                        priority
                    />
                </div>

                {/* Mobile Image */}
                <div className="block lg:hidden w-full h-[350px] sm:h-[450px] relative">
                    <Image
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop"
                        alt="Business Meeting"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>
            </div>


            {/* =========================================
                2. Overlapping Cards Section 
            ========================================= */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 lg:-mt-28 pb-16 lg:pb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

                    <div dir={isAr ? "rtl" : "ltr"} className="bg-white p-8 sm:p-10 shadow-xl border-b-4 border-transparent hover:border-[#C5A028] transition-colors duration-300">
                        <h3 className="text-[#745B00] text-xl font-bold mb-4">{t("hero.card1.title")}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{t("hero.card1.desc")}</p>
                    </div>

                    <div dir={isAr ? "rtl" : "ltr"} className="bg-white p-8 sm:p-10 shadow-xl border-b-4 border-transparent hover:border-[#C5A028] transition-colors duration-300">
                        <h3 className="text-[#745B00] text-xl font-bold mb-4">{t("hero.card2.title")}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{t("hero.card2.desc")}</p>
                    </div>

                    <div dir={isAr ? "rtl" : "ltr"} className="bg-white p-8 sm:p-10 shadow-xl border-b-4 border-transparent hover:border-[#C5A028] transition-colors duration-300">
                        <h3 className="text-[#745B00] text-xl font-bold mb-4">{t("hero.card3.title")}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{t("hero.card3.desc")}</p>
                    </div>

                </div>
            </div>


            {/* =========================================
                3. Statistics Section
            ========================================= */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 pt-16 z-0 overflow-hidden lg:overflow-visible">

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[90px] sm:text-[180px] lg:text-[260px] xl:text-[300px] font-black text-black/[0.03] select-none -z-20 pointer-events-none tracking-widest uppercase w-full text-center">
                    SUCCESS
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 lg:gap-12 relative z-10">

                    <div dir={isAr ? "rtl" : "ltr"} className="relative flex flex-col">
                        <span className="absolute -top-16 -left-4 sm:-left-8 text-[120px] sm:text-[150px] font-black text-black/[0.04] leading-none select-none -z-10 pointer-events-none">01</span>
                        <div className="relative z-10">
                            <h2 className="text-6xl sm:text-7xl font-extrabold text-gray-900 tracking-tighter">6<span className="text-[#C5A028]">+</span></h2>
                            <div className="w-10 h-1 bg-[#C5A028] mt-4 mb-6"></div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4">{t("hero.stat1.title")}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{t("hero.stat1.desc")}</p>
                        </div>
                    </div>

                    <div dir={isAr ? "rtl" : "ltr"} className="relative flex flex-col">
                        <span className="absolute -top-16 -left-4 sm:-left-8 text-[120px] sm:text-[150px] font-black text-black/[0.04] leading-none select-none -z-10 pointer-events-none">02</span>
                        <div className="relative z-10">
                            <h2 className="text-6xl sm:text-7xl font-extrabold text-gray-900 tracking-tighter">10<span className="text-[#C5A028]">+</span></h2>
                            <div className="w-10 h-1 bg-[#C5A028] mt-4 mb-6"></div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4">{t("hero.stat2.title")}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{t("hero.stat2.desc")}</p>
                        </div>
                    </div>

                    <div dir={isAr ? "rtl" : "ltr"} className="relative flex flex-col">
                        <span className="absolute -top-16 -left-4 sm:-left-8 text-[120px] sm:text-[150px] font-black text-black/[0.04] leading-none select-none -z-10 pointer-events-none">03</span>
                        <div className="relative z-10">
                            <h2 className="text-6xl sm:text-7xl font-extrabold text-gray-900 tracking-tighter">100%</h2>
                            <div className="w-10 h-1 bg-[#C5A028] mt-4 mb-6"></div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4">{t("hero.stat3.title")}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{t("hero.stat3.desc")}</p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}