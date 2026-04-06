"use client";
import Image from 'next/image';
import React from 'react';
import { useLang } from '@/context/LanguageContext'; // সঠিক পাথ দিন

const HeroWithCards = () => {
  const { t } = useLang();

  return (
    <div className="w-full font-sans">
      
      {/* =========================================
          Top Section (Hero) - Exactly matching the image
      ========================================= */}
      <section className="relative w-full bg-[#111111] px-6 py-20 lg:px-24 lg:py-32 xl:py-40 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            // এখানে আপনার ব্যাকগ্রাউন্ড ইমেজের আসল পাথ দিন
            src="https://i.ibb.co.com/XxmsDvWP/6da230868cf47e5ec9bfe12ef54ed9ff69d08153.png"
            alt="Hero background"
            fill
            className="object-cover opacity-30" 
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* RTL এর জন্য টেক্সট অ্যালাইনমেন্ট ঠিক করা হয়েছে */}
          <div className="max-w-3xl text-left rtl:text-right">
            {/* Golden overline text */}
            <span className="text-[#C5A028] text-xs md:text-sm font-bold uppercase tracking-[0.15em] mb-4 block">
              {t("hero_cards.overline")}
            </span>

            {/* Main heading with exact line break */}
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              {t("hero_cards.title_part1")} <br className="hidden md:block" /> {t("hero_cards.title_part2")}
            </h1>

            {/* Paragraph matching exact text length and color */}
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
              {t("hero_cards.desc")}
            </p>

            {/* Small image/text block */}
            <div className="flex flex-row items-center gap-4 mt-8">
              {/* Flag Image */}
              <div className="relative w-24 h-16 rounded-sm overflow-hidden shrink-0 bg-green-900">
                <Image
                  // এখানে সৌদি পতাকার ইমেজের পাথ দিন
                  src="https://i.ibb.co.com/20nYBDWS/b974dc0b5e2ebcf2caef8532a4f4ebcf56a66a3c.jpg"
                  alt="Saudi Flag"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
              
              {/* Flag Text */}
              <div className="flex flex-col justify-center text-left rtl:text-right">
                <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1.5">
                  {t("hero_cards.flag_overline")}
                </span>
                <p className="text-gray-400 text-[10px] md:text-xs leading-relaxed max-w-xs">
                  {t("hero_cards.flag_desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          Bottom Section (Cards) - Kept as it was
      ========================================= */}
      <section className="relative bg-[#FAF8F5] px-6 py-24 lg:px-24 lg:py-32 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Large black heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-6 tracking-tight">
            {t("hero_cards.cta_title")}
          </h2>
          
          {/* Black description paragraph */}
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10">
            {t("hero_cards.cta_desc")}
          </p>
          
          {/* Side-by-side buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Solid Button */}
              <button className="cursor-pointer flex items-center gap-2 px-8 py-3.5 bg-[linear-gradient(105deg,#745B00_0%,#FFC300_100%)] text-white rounded-sm text-sm font-semibold transition duration-300 hover:bg-[#8B6E16] w-full sm:w-auto justify-center">
                  {t("hero_cards.btn_learn")}
                  {/* RTL এর জন্য আইকন ঘোরানো হয়েছে */}
                  <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
              </button>
              
              {/* Outline Button */}
              <button className="cursor-pointer flex items-center gap-2 px-6 py-3.5 border border-[#9F801C] text-[#9F801C] rounded-sm text-sm font-semibold transition duration-300 w-full sm:w-auto justify-center group">
                  {t("hero_cards.btn_contact")}
                  {/* RTL এর জন্য আইকন ঘোরানো হয়েছে */}
                  <svg className="w-4 h-4 text-[#9F801C]  rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
              </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroWithCards;