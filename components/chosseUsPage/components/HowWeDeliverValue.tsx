"use client";
import React from 'react';
import { useLang } from '@/context/LanguageContext'; // আপনার প্রজেক্ট অনুযায়ী পাথ চেক করুন

const HowWeDeliverValue = () => {
  const { t } = useLang();

  const deliverySteps = [
    {
      number: t("deliver.step1_num"),
      title: t("deliver.step1_title"),
      description: t("deliver.step1_desc"),
    },
    {
      number: t("deliver.step2_num"),
      title: t("deliver.step2_title"),
      description: t("deliver.step2_desc"),
    },
    {
      number: t("deliver.step3_num"),
      title: t("deliver.step3_title"),
      description: t("deliver.step3_desc"),
    }
  ];

  return (
    <section className="relative w-full bg-[#FAF8F4] py-20 lg:py-32 overflow-hidden font-sans">
      
      {/* =========================================
          Background Watermark Text ("INNOVAT")
      ========================================= */}
      <div className="absolute top-10 left-0 w-full flex justify-center z-0 pointer-events-none select-none overflow-hidden">
        <span className="text-[#F0ECE1] text-[20vw] md:text-[18vw] font-black uppercase tracking-tighter whitespace-nowrap opacity-80 leading-none">
          {t("deliver.watermark")}
        </span>
      </div>

      {/* =========================================
          Main Content Container
      ========================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Left Side (Heading) */}
        <div className="lg:w-2/5 lg:pt-10 text-left rtl:text-right">
          <span className="text-[#A48639] text-xs font-bold uppercase tracking-[0.2em] block mb-4">
            {t("deliver.overline")}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight tracking-tight">
            {t("deliver.title")}
          </h2>
        </div>

        {/* Right Side (Cards) */}
        <div className="lg:w-3/5 flex flex-col gap-8">
          {deliverySteps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-[#F5F3EC] p-8 md:p-10 border-l-[3px] rtl:border-l-0 rtl:border-r-[3px] border-[#BCA55D] text-left rtl:text-right"
            >
              {/* Large Number Background inside Card */}
              <span className="block text-5xl md:text-6xl font-extrabold text-[#E5DFCE] mb-4 leading-none">
                {step.number}
              </span>
              
              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-[#111111] uppercase mb-3">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-lg rtl:max-w-none">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default HowWeDeliverValue;