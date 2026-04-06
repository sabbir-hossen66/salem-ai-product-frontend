"use client";
import React from 'react';
import { useLang } from '@/context/LanguageContext';

const WhyChooseUs = () => {
  const { t, lang } = useLang(); // lang সংগ্রহ করা হলো
  const isRtl = lang === 'ar'; // অ্যারাবিক কি না চেক করা হলো

  const strengthsData = [
    {
      title: t("strengths.card1_title"),
      description: t("strengths.card1_desc"),
      footer: t("strengths.card_footer"),
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4H10V20H4V4Z" />
          <path d="M12 4H20V11H12V4Z" />
          <path d="M12 13H20V20H12V13Z" />
        </svg>
      )
    },
    {
      title: t("strengths.card2_title"),
      description: t("strengths.card2_desc"),
      footer: t("strengths.card_footer"),
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
          <path d="M9 8h6" />
          <path d="M12 5v6" />
        </svg>
      )
    },
    {
      title: t("strengths.card3_title"),
      description: t("strengths.card3_desc"),
      footer: t("strengths.card_footer"),
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M12 2v1" />
          <path d="M15.09 4.91l-.71.71" />
          <path d="M22 12h-1" />
          <path d="M18.91 19.09l-.71-.71" />
          <path d="M12 21v1" />
          <path d="M4.91 19.09l.71-.71" />
          <path d="M2 12h1" />
          <path d="M4.91 4.91l.71.71" />
          <path d="M8 12a4 4 0 118 0c0 2.21-1.79 4-4 4s-4-1.79-4-4z" />
        </svg>
      )
    },
    {
      title: t("strengths.card4_title"),
      description: t("strengths.card4_desc"),
      footer: t("strengths.card_footer"),
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 14v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
          <rect x="3" y="14" width="18" height="6" rx="2" />
          <path d="M12 14v6" />
          <path d="M8 10h8" />
        </svg>
      )
    }
  ];

  return (
    <section 
      className={`w-full bg-[#FAF8F5] py-20 lg:py-32 px-6 lg:px-24 font-sans ${isRtl ? 'text-right' : 'text-left'}`} 
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className={`mb-12 flex flex-col ${isRtl ? 'items-start lg:items-start' : 'items-start'}`}>
          <span className="text-[#A48639] text-xs md:text-sm font-bold uppercase tracking-[0.15em] block mb-3">
            {t("strengths.overline")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">
            {t("strengths.title")}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {strengthsData.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col bg-[#F6F4EE] p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                index === 1 ? 'shadow-lg' : 'shadow-none'
              } ${isRtl ? 'items-start' : 'items-start'}`}
            >
              {/* Icon - flex justify-start অ্যারাবিক মোডে অটোমেটিক ডান দিকে চলে যাবে dir="rtl" এর কারণে */}
              <div className="text-[#A48639] mb-8 flex justify-start">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                {item.description}
              </p>

              {/* Footer Text */}
              <span className="text-[#A48639] text-[10px] font-bold uppercase tracking-widest mt-auto block">
                {item.footer}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;