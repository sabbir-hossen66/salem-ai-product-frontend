"use client"
import Image from 'next/image';
import React from 'react';
import { useLang } from '@/context/LanguageContext'; // সঠিক পাথ দিন

const TrustedPartnerSection = () => {
  const { t } = useLang();

  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 flex items-center justify-center overflow-hidden bg-[#111111] font-sans">
      
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          // এখানে আপনার আসল ব্যাকগ্রাউন্ড ইমেজের পাথ দিন (যেমন: /trusted-partner-bg.jpg)
          src="https://i.ibb.co.com/767bb4k/35fd41fb2dbace30a32af0055fdf0ddc19281379.png"
          alt="Trusted Partner Background"
          fill
          className="object-cover opacity-40" 
        />
        {/* ছবির ওপর একটি গাঢ় কালো শ্যাডো দেওয়া হয়েছে যাতে টেক্সট ভালোভাবে ফুটে ওঠে */}
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        
        {/* Overline with Horizontal Line */}
        <div className="flex items-center gap-4 mb-5">
          <span className="w-8 md:w-10 h-[2px] bg-white"></span>
          <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
            {t("trusted.overline")}
          </span>
          {/* RTL লেআউটে ব্যালেন্স ঠিক রাখার জন্য ডানপাশেও একটি লাইন দিতে পারেন, অথবা এভাবেই রাখতে পারেন (Tailwind flex-row অটোমেটিক RTL হ্যান্ডেল করবে) */}
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
          {t("trusted.title_part1")} <br className="hidden sm:block" /> {t("trusted.title_part2")}
        </h2>

        {/* Description Paragraph */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          {t("trusted.desc")}
        </p>
        
      </div>
    </section>
  );
};

export default TrustedPartnerSection;