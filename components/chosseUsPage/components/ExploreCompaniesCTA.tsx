"use client";
import React from 'react';
import { useLang } from '@/context/LanguageContext'; // সঠিক পাথ দিন

const ExploreCompaniesCTA = () => {
  const { t } = useLang();

  return (
    <section className="w-full bg-[#FAF8F5] py-20 md:py-28 px-6 font-sans flex justify-center items-center">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-4 tracking-tight">
          {t("explore_cta.title")}
        </h2>
        
        {/* Description */}
        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-10 max-w-2xl">
          {t("explore_cta.desc")}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          
          {/* Primary Button */}
          <button className="bg-[#A48639] hover:bg-[#8e7331] text-white px-8 py-3 text-sm md:text-base font-bold transition-colors duration-300 flex items-center justify-center gap-2">
            {t("explore_cta.btn_explore")}
            {/* RTL এর জন্য আইকন ঘোরানো হয়েছে */}
            <svg 
              className="w-4 h-4 rtl:rotate-180" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>

          {/* Secondary Button */}
          <button className="border border-[#A48639] text-[#A48639] hover:bg-[#A48639] hover:text-white px-8 py-3 text-sm md:text-base font-bold transition-colors duration-300 flex items-center justify-center gap-2">
            {t("explore_cta.btn_contact")}
            {/* RTL এর জন্য আইকন ঘোরানো হয়েছে */}
            <svg 
              className="w-4 h-4 rtl:rotate-180" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>

        </div>

      </div>
    </section>
  );
};

export default ExploreCompaniesCTA;