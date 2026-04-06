"use client";
import React from 'react';
import Image from 'next/image';
import { useLang } from '@/context/LanguageContext';

const ApproachAndCommitment = () => {
  const { t } = useLang();

  // Common styles for all 3 cards to keep them uniform
  // Default: transparent border, no background, no shadow
  // Hover: white background, top border colored, shadow, translate upwards
  const cardContainerClass = "p-4 md:p-6 group cursor-pointer rounded-sm border-t-4 border-transparent transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-[#A48639] hover:-translate-y-4";

  return (
    <div className="w-full font-sans">

      {/* =========================================
          TOP SECTION: Our Approach
      ========================================= */}
      <section className="bg-[#FAF8F5] py-20 lg:py-32 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">

          {/* Header Area */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
            <div className="lg:w-1/2">
              <span className="text-[#A48639] text-xs font-bold uppercase tracking-[0.15em] block mb-3">
                {t("approach.overline")}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight tracking-tight">
                {t("approach.title_part1")} <br className="hidden md:block" /> {t("approach.title_part2")}
              </h2>
            </div>
            <div className="lg:w-1/2 lg:border-l-2 rtl:lg:border-l-0 rtl:lg:border-r-2 lg:border-gray-200 lg:pl-10 rtl:lg:pl-0 rtl:lg:pr-10">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {t("approach.desc")}
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

            {/* Card 1 */}
            <div className={cardContainerClass}>
              <span className="text-[#A48639] font-bold text-sm mb-4 block transition-colors duration-300">
                {t("approach.card1_num")}
              </span>
              <div className="overflow-hidden rounded-sm mb-6">
                <Image
                  src="https://i.ibb.co.com/tMVyq4L7/312ff40b5cc7e72af91106456a784f3cddf7d4a4.jpg"
                  alt={t("approach.card1_title")}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  width={500}
                  height={192}
                />
              </div>
              <h3 className="text-xl font-extrabold text-black uppercase mb-3 group-hover:text-[#A48639] transition-colors duration-300">
                {t("approach.card1_title")}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t("approach.card1_desc")}
              </p>
              {/* Bottom gold line */}
              <div className="mt-4 h-[2px] w-0 bg-[#A48639] transition-all duration-500 group-hover:w-full" />
            </div>

            {/* Card 2 */}
            <div className={cardContainerClass}>
              <span className="text-[#A48639] font-bold text-sm mb-4 block transition-colors duration-300">
                {t("approach.card2_num")}
              </span>
              <div className="overflow-hidden rounded-sm mb-6">
                <Image
                  src="https://i.ibb.co.com/4RTbdS7C/2dafa3b9ed18b296382ebd6ae2da90d6327e90ca-1.jpg"
                  alt={t("approach.card2_title")}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  width={500}
                  height={192}
                />
              </div>
              <h3 className="text-xl font-extrabold text-black uppercase mb-3 group-hover:text-[#A48639] transition-colors duration-300">
                {t("approach.card2_title")}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t("approach.card2_desc")}
              </p>
              {/* Bottom gold line */}
              <div className="mt-4 h-[2px] w-0 bg-[#A48639] transition-all duration-500 group-hover:w-full" />
            </div>

            {/* Card 3 */}
            <div className={cardContainerClass}>
              <span className="text-[#A48639] font-bold text-sm mb-4 block transition-colors duration-300">
                {t("approach.card3_num")}
              </span>
              <div className="overflow-hidden rounded-sm mb-6">
                <Image
                  src="https://i.ibb.co.com/Q3vQX7LR/655c0082a387b9ae047329fbbd70eac12c778706.jpg"
                  alt={t("approach.card3_title")}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  width={500}
                  height={192}
                />
              </div>
              <h3 className="text-xl font-extrabold text-black uppercase mb-3 group-hover:text-[#A48639] transition-colors duration-300">
                {t("approach.card3_title")}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t("approach.card3_desc")}
              </p>
              {/* Bottom gold line */}
              <div className="mt-4 h-[2px] w-0 bg-[#A48639] transition-all duration-500 group-hover:w-full" />
            </div>

          </div>
        </div>
      </section>


      {/* =========================================
          BOTTOM SECTION: Our Commitment
      ========================================= */}
      <section className="bg-[#111111] py-20 lg:py-32 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">

          {/* Left Side (Image) */}
          <div className="w-full lg:w-1/2 relative group cursor-pointer flex flex-col min-h-[350px] lg:min-h-0">
            <div className="absolute top-0 left-0 rtl:left-auto rtl:right-0 w-2 h-full bg-[#A48639] z-10 -ml-4 lg:-ml-8 rtl:-ml-0 rtl:-mr-4 rtl:lg:-mr-8 hidden md:block transition-all duration-300 group-hover:w-3" />
            
            {/* Used relative and flex-grow so the wrapper takes full height */}
            <div className="relative w-full flex-grow overflow-hidden rounded-sm shadow-2xl">
              <Image
                src="https://i.ibb.co.com/5gDCqzKX/a2943aa1ffa1c19b0ff1ad719a5ca78c642ba3fd.jpg"
                alt="Commitment Box"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Gold overlay on hover */}
            <div className="absolute inset-0 bg-[#A48639]/0 group-hover:bg-[#A48639]/10 transition-all duration-500 rounded-sm pointer-events-none" />
          </div>

          {/* Right Side (Content) */}
          <div className="w-full lg:w-1/2 text-white flex flex-col justify-center py-4 lg:py-8">
            <span className="text-[#A48639] text-xs font-bold uppercase tracking-[0.15em] block mb-3">
              {t("commitment.overline")}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
              {t("commitment.title")}
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10">
              {t("commitment.desc")}
            </p>

            {/* Bottom Sub-points */}
            <div className="flex flex-col md:flex-row gap-8 mt-8">

              {/* Point 1 */}
              <div className="group/point border-l-[3px] rtl:border-l-0 rtl:border-r-[3px] border-[#A48639] pl-4 rtl:pl-0 rtl:pr-4 cursor-pointer transition-all duration-300 hover:pl-6 rtl:hover:pl-0 rtl:hover:pr-6 hover:border-l-[5px]">
                <h4 className="text-lg font-bold mb-2 group-hover/point:text-[#A48639] transition-colors duration-300">
                  {t("commitment.point1_title")}
                </h4>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  {t("commitment.point1_desc")}
                </p>
              </div>

              {/* Point 2 */}
              <div className="group/point border-l-[3px] rtl:border-l-0 rtl:border-r-[3px] border-[#A48639] pl-4 rtl:pl-0 rtl:pr-4 cursor-pointer transition-all duration-300 hover:pl-6 rtl:hover:pl-0 rtl:hover:pr-6 hover:border-l-[5px]">
                <h4 className="text-lg font-bold mb-2 group-hover/point:text-[#A48639] transition-colors duration-300">
                  {t("commitment.point2_title")}
                </h4>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  {t("commitment.point2_desc")}
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ApproachAndCommitment;