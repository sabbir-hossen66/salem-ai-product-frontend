"use client";
import React from 'react';
import Image from 'next/image';

const ApproachAndCommitment = () => {
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
                OUR APPROACH
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight tracking-tight">
                Delivering More Than <br className="hidden md:block" /> Investment
              </h2>
            </div>
            
            {/* Right Header Description */}
            <div className="lg:w-1/2 lg:border-l-2 lg:border-gray-200 lg:pl-10">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                We go beyond capital by actively supporting our companies, strengthening operations, and enabling long-term growth through strategic direction and expertise.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* Card 1 */}
            <div className="p-4 md:p-6">
              <span className="text-[#A48639] font-bold text-sm mb-4 block">
                01. Active Management
              </span>
              <Image 
                src="https://i.ibb.co.com/tMVyq4L7/312ff40b5cc7e72af91106456a784f3cddf7d4a4.jpg"
                alt="Active Management" 
                className="w-full h-48 object-cover mb-6 rounded-sm"
                width={500}
                height={192}
              />
              <h3 className="text-xl font-extrabold text-black uppercase mb-3">
                HANDS-ON INVOLVEMENT
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We actively support our companies by guiding operations, improving structures, and ensuring alignment with long-term strategic objectives.
              </p>
            </div>

            {/* Card 2 (Highlighted) */}
            <div className="bg-white p-6 shadow-xl border-t-4 border-[#A48639] transform md:-translate-y-4">
              <span className="text-[#A48639] font-bold text-sm mb-4 block">
                02. Strategic Growth
              </span>
              <Image 
                src="https://i.ibb.co.com/4RTbdS7C/2dafa3b9ed18b296382ebd6ae2da90d6327e90ca-1.jpg"
                alt="Strategic Growth" 
                className="w-full h-48 object-cover mb-6 rounded-sm"
                width={500}
                height={192}
              />
              <h3 className="text-xl font-extrabold text-black uppercase mb-3">
                OPERATIONAL EXCELLENCE
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We prioritize sustainable expansion by identifying opportunities, optimizing performance, and building strong foundations that support continuous and scalable business growth.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-4 md:p-6">
              <span className="text-[#A48639] font-bold text-sm mb-4 block">
                03. Market Adaptability
              </span>
              <Image 
                src="https://i.ibb.co.com/Q3vQX7LR/655c0082a387b9ae047329fbbd70eac12c778706.jpg"
                alt="Market Adaptability" 
                className="w-full h-48 object-cover mb-6 rounded-sm"
                width={500}
                height={192}
              />
              <h3 className="text-xl font-extrabold text-black uppercase mb-3">
                FLEXIBLE APPROACH
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We adapt to changing market conditions by evolving strategies, exploring new sectors, and maintaining flexibility to ensure resilience and ongoing success.
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
            <div className="absolute top-0 left-0 w-2 h-full bg-[#A48639] z-10 -ml-4 lg:-ml-8 hidden md:block"></div>
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
              OUR COMMITMENT
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
              Focused on Long-Term Success
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10">
              We are committed to building strong, sustainable businesses that deliver long-term value. Through disciplined investment strategies, operational excellence, and continuous innovation, we support our companies in achieving consistent growth and performance. Our focus remains on creating a balanced portfolio that adapts to market changes while maintaining stability. By aligning our goals with economic development, we contribute to building a stronger and more resilient business environment.
            </p>

            {/* Bottom Sub-points */}
            <div className="flex flex-col md:flex-row gap-8 mt-8">
              {/* Point 1 */}
              <div className="border-l-[3px] border-[#A48639] pl-4">
                <h4 className="text-lg font-bold mb-2">Sustainable Value</h4>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  Focused on long-term growth and consistent value creation across sectors.
                </p>
              </div>
              
              {/* Point 2 */}
              <div className="border-l-[3px] border-[#A48639] pl-4">
                <h4 className="text-lg font-bold mb-2">Strong Foundations</h4>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  Building resilient businesses with structured operations and clear strategic direction.
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