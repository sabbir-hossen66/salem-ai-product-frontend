"use client";
import Image from 'next/image';
import React from 'react';
import { useLang } from '@/context/LanguageContext';

export default function DirectionAndValuesSection() {
    const { t } = useLang();

    return (
        <div className="w-full font-sans">

            {/* =========================================
                Top Section: OUR DIRECTION
            ========================================= */}
            <section className="relative w-full py-20 lg:py-32 bg-[#111111] overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
                        alt="Office Background"
                        fill
                        className="object-cover opacity-20"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="text-[#C5A028] text-xs font-bold tracking-[0.2em] uppercase">
                            {t("direction.overline")}
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
                            {t("direction.title")}
                        </h2>
                    </div>

                 {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch relative">

                        {/* Card 1: Our Mission */}
                        {/* হোভার স্টাইল: ছবির মতো ডার্ক ব্যাকগ্রাউন্ড, স্কেল ১০৫%, এবং কালার পরিবর্তন */}
                        <div className="group bg-white p-8 lg:p-10 flex flex-col justify-between shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-[#454747] hover:shadow-2xl z-20">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
                                    <g clipPath="url(#clip0_208_39)">
                                        {/* আইকন ডিফল্ট কালার: #745B00। হোভার কালার (requirement): #FFE180 */}
                                        <path d="M28.0817 6.88304C27.8885 6.87768 27.6946 6.875 27.5 6.875C16.1091 6.875 6.875 16.1091 6.875 27.5C6.875 38.8908 16.1091 48.125 27.5 48.125C38.8908 48.125 48.125 38.8908 48.125 27.5C48.125 27.3054 48.1222 27.1115 48.1171 26.9183L54.1894 20.8458C54.7188 22.9765 55 25.2054 55 27.5C55 42.6879 42.6879 55 27.5 55C12.3122 55 0 42.6879 0 27.5C0 12.3122 12.3122 0 27.5 0C29.7946 0 32.0235 0.281025 34.1542 0.810532L28.0817 6.88304Z" fill="currentColor" className="text-[#745B00] group-hover:text-[#FFE180] transition-colors duration-300" />
                                        <path d="M13.75 27.4999C13.75 21.0929 18.132 15.7094 24.0625 14.183V21.5446C22.0076 22.7333 20.625 24.9551 20.625 27.4999C20.625 31.2968 23.703 34.3749 27.5 34.3749C30.0447 34.3749 32.2665 32.9923 33.4553 30.9374H40.8169C39.2903 36.8679 33.9069 41.25 27.5 41.25C19.9061 41.25 13.75 35.0938 13.75 27.4999Z" fill="currentColor" className="text-[#745B00] group-hover:text-[#FFE180] transition-colors duration-300" />
                                        <path d="M48.125 6.875L44.6875 0L34.375 10.3125V15.7637L26.7881 23.3506L31.6495 28.2119L39.2363 20.625H44.6875L55 10.3125L48.125 6.875Z" fill="currentColor" className="text-[#745B00] group-hover:text-[#FFE180] transition-colors duration-300" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_208_39">
                                            <rect width="55" height="55" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <h3 className="text-xl font-extrabold text-gray-900 mb-4 uppercase tracking-wide group-hover:text-white transition-colors duration-300 mt-6">
                                    {t("direction.mission_title")}
                                </h3>
                                {/* প্যারাগ্রাফ হোভার কালার পরিবর্তন */}
                                <p className="text-gray-600 group-hover:text-gray-200 text-sm leading-relaxed transition-colors duration-300">
                                    {t("direction.mission_desc")}
                                </p>
                            </div>
                            {/* ডেকোরেশন ডিভ হোভার ব্যাকগ্রাউন্ড পরিবর্তন (requirement): #FFE180 */}
                            <div className="w-12 h-1.5 bg-[#745B00] mt-10 transition-all duration-500 group-hover:bg-[#FFE180]" />
                        </div>

                        {/* Card 2: Our Vision */}
                        {/* ডিফল্ট হাইলাইট সরিয়ে ১ এবং ৩ এর মতো করা হয়েছে। হোভার স্টাইল unified। ছবির মতো ডার্ক ব্যাকগ্রাউন্ড, স্কেল ১০৫%, এবং কালার পরিবর্তন */}
                        <div className="group bg-white p-8 lg:p-10 flex flex-col justify-between shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-[#454747] hover:shadow-2xl z-20 scale-100">
                            <div>
                                {/* আইকন ডিফল্ট কালার: #745B00। হোভার কালার (requirement): #FFE180 */}
                                <svg className="w-12 h-12 text-[#745B00] group-hover:text-[#FFE180] transition-colors duration-300 mb-6 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                {/* টাইটেল ডিফল্ট কালার text-gray-900। হোভার text-white */}
                                <h3 className="text-xl font-extrabold text-gray-900 mb-4 uppercase tracking-wide group-hover:text-white transition-colors duration-300">
                                    {t("direction.vision_title")}
                                </h3>
                                {/* প্যারাগ্রাফ হোভার কালার পরিবর্তন */}
                                <p className="text-gray-600 group-hover:text-gray-200 text-sm leading-relaxed transition-colors duration-300">
                                    {t("direction.vision_desc")}
                                </p>
                            </div>
                            {/* ডেকোরেশন ডিভ হোভার ব্যাকগ্রাউন্ড পরিবর্তন (requirement): #FFE180 */}
                            <div className="w-12 h-1.5 bg-[#745B00] mt-10 transition-all duration-500 group-hover:bg-[#FFE180]" />
                        </div>

                        {/* Card 3: Our Goals */}
                        {/* হোভার স্টাইল: ছবির মতো ডার্ক ব্যাকগ্রাউন্ড, স্কেল ১০৫%, এবং কালার পরিবর্তন */}
                        <div className="group bg-white p-8 lg:p-10 flex flex-col justify-between shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-[#454747] hover:shadow-2xl z-20">
                            <div>
                                {/* আইকন ডিফল্ট কালার: #745B00। হোভার কালার (requirement): #FFE180 */}
                                <svg className="w-12 h-12 text-[#745B00] group-hover:text-[#FFE180] transition-colors duration-300 mb-6 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                                </svg>
                                <h3 className="text-xl font-extrabold text-gray-900 mb-4 uppercase tracking-wide group-hover:text-white transition-colors duration-300">
                                    {t("direction.goals_title")}
                                </h3>
                                {/* প্যারাগ্রাফ হোভার কালার পরিবর্তন */}
                                <p className="text-gray-600 group-hover:text-gray-200 text-sm leading-relaxed transition-colors duration-300">
                                    {t("direction.goals_desc")}
                                </p>
                            </div>
                            {/* ডেকোরেশন ডিভ হোভার ব্যাকগ্রাউন্ড পরিবর্তন (requirement): #FFE180 */}
                            <div className="w-12 h-1.5 bg-[#745B00] mt-10 transition-all duration-500 group-hover:bg-[#FFE180]" />
                        </div>

                    </div>
                </div>
            </section>

            {/* =========================================
                Bottom Section: OUR VALUES
            ========================================= */}
            <section className="w-full bg-[#FAF8F4] py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="text-[#C5A028] text-xs font-bold tracking-[0.2em] uppercase">
                            {t("values.overline")}
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 tracking-tight">
                            {t("values.title")}
                        </h2>
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Value 1 */}
                        <div className="group bg-[#F5F3ED] p-8 lg:p-10 flex flex-col shadow-sm cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-white">
                            <div className="text-[#C5A028] mb-6 transition-transform duration-300 group-hover:scale-110 w-fit">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#C5A028] transition-colors duration-300">{t("values.val1_title")}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">{t("values.val1_desc")}</p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-[#C5A028] text-[10px] font-bold tracking-[0.15em] uppercase">{t("values.val1_tag")}</span>
                                <div className="w-0 h-[2px] bg-[#C5A028] transition-all duration-500 group-hover:w-8" />
                            </div>
                        </div>

                        {/* Value 2 */}
                        <div className="group bg-[#F5F3ED] p-8 lg:p-10 flex flex-col shadow-sm cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-white">
                            <div className="text-[#C5A028] mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 w-fit">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#C5A028] transition-colors duration-300">{t("values.val2_title")}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">{t("values.val2_desc")}</p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-[#C5A028] text-[10px] font-bold tracking-[0.15em] uppercase">{t("values.val2_tag")}</span>
                                <div className="w-0 h-[2px] bg-[#C5A028] transition-all duration-500 group-hover:w-8" />
                            </div>
                        </div>

                        {/* Value 3 */}
                        <div className="group bg-[#F5F3ED] p-8 lg:p-10 flex flex-col shadow-sm cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-white">
                            <div className="text-[#C5A028] mb-6 transition-transform duration-300 group-hover:scale-110 w-fit">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#C5A028] transition-colors duration-300">{t("values.val3_title")}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">{t("values.val3_desc")}</p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-[#C5A028] text-[10px] font-bold tracking-[0.15em] uppercase">{t("values.val3_tag")}</span>
                                <div className="w-0 h-[2px] bg-[#C5A028] transition-all duration-500 group-hover:w-8" />
                            </div>
                        </div>

                        {/* Value 4 */}
                        <div className="group bg-[#F5F3ED] p-8 lg:p-10 flex flex-col shadow-sm cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-white">
                            <div className="text-[#C5A028] mb-6 transition-transform duration-300 group-hover:scale-110 w-fit">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#C5A028] transition-colors duration-300">{t("values.val4_title")}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">{t("values.val4_desc")}</p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-[#C5A028] text-[10px] font-bold tracking-[0.15em] uppercase">{t("values.val4_tag")}</span>
                                <div className="w-0 h-[2px] bg-[#C5A028] transition-all duration-500 group-hover:w-8" />
                            </div>
                        </div>

                        {/* Value 5 (Highlighted) */}
                        <div className="group bg-[#Fdfbf7] border border-[#C5A028] p-8 lg:p-10 flex flex-col shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#FFC300] hover:bg-[#fffbf0]">
                            <div className="text-[#C5A028] mb-6 transition-transform duration-300 group-hover:scale-110 w-fit">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#C5A028] transition-colors duration-300">{t("values.val5_title")}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">{t("values.val5_desc")}</p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-[#C5A028] text-[10px] font-bold tracking-[0.15em] uppercase">{t("values.val5_tag")}</span>
                                <div className="w-0 h-[2px] bg-[#C5A028] transition-all duration-500 group-hover:w-8" />
                            </div>
                        </div>

                        {/* Value 6 */}
                        <div className="group bg-[#F5F3ED] p-8 lg:p-10 flex flex-col shadow-sm cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-white">
                            <div className="text-[#C5A028] mb-6 transition-transform duration-300 group-hover:scale-110 w-fit">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#C5A028] transition-colors duration-300">{t("values.val6_title")}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">{t("values.val6_desc")}</p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-[#C5A028] text-[10px] font-bold tracking-[0.15em] uppercase">{t("values.val6_tag")}</span>
                                <div className="w-0 h-[2px] bg-[#C5A028] transition-all duration-500 group-hover:w-8" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}