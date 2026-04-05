"use client";
import React from 'react';
import { useLang } from '@/context/LanguageContext'; // আপনার সঠিক পাথ অনুযায়ী ইম্পোর্ট আপডেট করে নিন

export default function Footer() {
    const { t } = useLang();

    return (
        <footer className="w-full bg-[#111111] text-white border-t-[3px] border-[#C5A028] font-sans pt-16 sm:pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main Footer Content */}
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 mb-16 sm:mb-20">
                    
                    {/* Left Section - Brand & About */}
                    <div className="lg:max-w-[420px]">
                        <h3 className="text-white text-base sm:text-lg font-bold tracking-wider uppercase mb-6">
                            {t("footer.brand")}
                        </h3>
                        <p className="text-gray-400 text-sm leading-loose">
                            {t("footer.desc")}
                        </p>
                    </div>

                    {/* Right Section - Navigation Links */}
                    <div className="flex flex-wrap sm:flex-nowrap gap-12 sm:gap-20 lg:gap-28 w-full lg:w-auto">
                        
                        {/* Column 1: Home */}
                        <div className="flex flex-col">
                            <h4 className="text-[#C5A028] text-xs font-bold tracking-[0.15em] uppercase mb-6">
                                {t("footer.col_home")}
                            </h4>
                            <ul className="flex flex-col gap-4">
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t("footer.overview")}</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t("footer.directions")}</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t("footer.values")}</a></li>
                            </ul>
                        </div>

                        {/* Column 2: Explore */}
                        <div className="flex flex-col">
                            <h4 className="text-[#C5A028] text-xs font-bold tracking-[0.15em] uppercase mb-6">
                                {t("footer.col_explore")}
                            </h4>
                            <ul className="flex flex-col gap-4">
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t("footer.about")}</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t("footer.sectors")}</a></li>
                            </ul>
                        </div>

                        {/* Column 3: Social */}
                        <div className="flex flex-col">
                            <h4 className="text-[#C5A028] text-xs font-bold tracking-[0.15em] uppercase mb-6">
                                {t("footer.col_social")}
                            </h4>
                            <ul className="flex flex-col gap-4">
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t("footer.facebook")}</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t("footer.linkedin")}</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">{t("footer.instagram")}</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>

            {/* Bottom Copyright Section */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
                    <p className="text-gray-400 text-xs sm:text-sm tracking-wide">
                        {t("footer.copyright")}
                    </p>
                </div>
            </div>
        </footer>
    );
}