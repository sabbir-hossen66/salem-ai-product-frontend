"use client";
import React from 'react';
import Image from 'next/image';
import { useLang } from '@/context/LanguageContext'; // সঠিক পাথ দিন

const ApproachAndCommitment = () => {
  const { t } = useLang();

  return (
    <div className="w-full font-sans">
      
      {/* =========================================
          TOP SECTION: Our Approach
      ========================================= */}
      <section className="bg-[#FAF8F5] py-20 lg:py-32 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Area */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16">
            {/* Left Header */}
            <div className="lg:w-1/2">
              <span className="text-[#A48639] text-xs font-bold uppercase tracking-[0.15em] block mb-3">
                {t("approach.overline")}
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight tracking-tight">
                {t("approach.title_part1")} <br className="hidden md:block" /> {t("approach.title_part2")}
              </h2>
            </div>
            
            {/* Right Header Description */}
            {/* RTL এর জন্য বর্ডার এবং প্যাডিং ফ্লিপ করা হয়েছে */}
            <div className="lg:w-1/2 lg:border-l-2 rtl:lg:border-l-0 rtl:lg:border-r-2 lg:border-gray-200 lg:pl-10 rtl:lg:pl-0 rtl:lg:pr-10">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {t("approach.desc")}
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* Card 1 */}
            <div className="p-4 md:p-6">
              <span className="text-[#A48639] font-bold text-sm mb-4 block">
                {t("approach.card1_num")}
              </span>
              <Image 
                src="https://i.ibb.co.com/tMVyq4L7/312ff40b5cc7e72af91106456a784f3cddf7d4a4.jpg"
                alt={t("approach.card1_title")} 
                className="w-full h-48 object-cover mb-6 rounded-sm"
                width={500}
                height={192}
              />
              <h3 className="text-xl font-extrabold text-black uppercase mb-3">
                {t("approach.card1_title")}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t("approach.card1_desc")}
              </p>
            </div>

            {/* Card 2 (Highlighted) */}
            <div className="bg-white p-6 shadow-xl border-t-4 border-[#A48639] transform md:-translate-y-4">
              <span className="text-[#A48639] font-bold text-sm mb-4 block">
                {t("approach.card2_num")}
              </span>
              <Image 
                src="https://i.ibb.co.com/4RTbdS7C/2dafa3b9ed18b296382ebd6ae2da90d6327e90ca-1.jpg"
                alt={t("approach.card2_title")} 
                className="w-full h-48 object-cover mb-6 rounded-sm"
                width={500}
                height={192}
              />
              <h3 className="text-xl font-extrabold text-black uppercase mb-3">
                {t("approach.card2_title")}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t("approach.card2_desc")}
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-4 md:p-6">
              <span className="text-[#A48639] font-bold text-sm mb-4 block">
                {t("approach.card3_num")}
              </span>
              <Image 
                src="https://i.ibb.co.com/Q3vQX7LR/655c0082a387b9ae047329fbbd70eac12c778706.jpg"
                alt={t("approach.card3_title")} 
                className="w-full h-48 object-cover mb-6 rounded-sm"
                width={500}
                height={192}
              />
              <h3 className="text-xl font-extrabold text-black uppercase mb-3">
                {t("approach.card3_title")}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t("approach.card3_desc")}
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================
          BOTTOM SECTION: Our Commitment
      ========================================= */}
      <section className="bg-[#111111] py-20 lg:py-32 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side (Image) */}
          <div className="w-full lg:w-1/2 relative">
            {/* RTL এর জন্য লাইনটি বাম থেকে ডানে ফ্লিপ করা হয়েছে */}
            <div className="absolute top-0 left-0 rtl:left-auto rtl:right-0 w-2 h-full bg-[#A48639] z-10 -ml-4 lg:-ml-8 rtl:-ml-0 rtl:-mr-4 rtl:lg:-mr-8 hidden md:block"></div>
            <Image 
              src="https://i.ibb.co.com/5gDCqzKX/a2943aa1ffa1c19b0ff1ad719a5ca78c642ba3fd.jpg"
              alt="Commitment Box" 
              className="w-full h-auto object-cover rounded-sm shadow-2xl"
              width={500}
              height={400}
            />
          </div>

          {/* Right Side (Content) */}
          <div className="w-full lg:w-1/2 text-white">
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
              {/* RTL এর জন্য বর্ডার এবং প্যাডিং ফ্লিপ করা হয়েছে */}
              <div className="border-l-[3px] rtl:border-l-0 rtl:border-r-[3px] border-[#A48639] pl-4 rtl:pl-0 rtl:pr-4">
                <h4 className="text-lg font-bold mb-2">{t("commitment.point1_title")}</h4>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  {t("commitment.point1_desc")}
                </p>
              </div>
              
              {/* Point 2 */}
              <div className="border-l-[3px] rtl:border-l-0 rtl:border-r-[3px] border-[#A48639] pl-4 rtl:pl-0 rtl:pr-4">
                <h4 className="text-lg font-bold mb-2">{t("commitment.point2_title")}</h4>
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