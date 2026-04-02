import Image from 'next/image';
import React from 'react';

export default function Hero() {
    return (
        <section className="relative w-full bg-[#fbfaf8]">
            
            {/* =========================================
                1. Top Hero Section: Text + Image 
            ========================================= */}
            <div className="relative flex flex-col lg:flex-row w-full">
                
                {/* Left Content Area (Text) */}
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex">
                    <div className="w-full lg:w-[55%] pt-16 pb-32 lg:pt-32 lg:pb-48 pr-0 lg:pr-12 relative z-10">
                        
                        {/* Small Overline Text */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-[2px] bg-[#C5A028]"></div>
                            <span className="text-xs sm:text-sm font-bold text-[#C5A028] tracking-widest uppercase">
                                Strategic Investment Group
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
                            Building Sustainable <br className="hidden lg:block" /> Business Growth
                        </h1>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-lg leading-relaxed">
                            A diversified Saudi holding group focused on acquiring, developing, and scaling businesses across strategic sectors to create long-term value and economic impact.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-gradient-to-r from-[#745B00] to-[#FFC300] text-white px-8 py-3.5 flex justify-center items-center font-semibold hover:opacity-90 transition-opacity shadow-md">
                                Explore Our Business
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                            
                            <button className="border border-[#C5A028] text-[#745B00] bg-white px-8 py-3.5 flex justify-center items-center font-semibold hover:bg-[#C5A028] hover:text-white transition-colors shadow-sm">
                                Our Vision
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Image Area (Desktop) */}
                <div className="hidden lg:block absolute top-0 right-0 w-[45%] h-full z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop"
                        alt="Business Meeting"
                        fill
                        className="object-cover object-left"
                        priority
                    />
                </div>
                
                {/* Mobile Image Area */}
                <div className="block lg:hidden w-full h-[350px] sm:h-[450px] relative z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop"
                        alt="Business Meeting"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>
            </div>


            {/* =========================================
                2. Overlapping Cards Section 
            ========================================= */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 lg:-mt-28 pb-16 lg:pb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    
                    {/* Card 1 */}
                    <div className="bg-white p-8 sm:p-10 shadow-xl border-b-4 border-transparent hover:border-[#C5A028] transition-colors duration-300">
                        <h3 className="text-[#745B00] text-xl font-bold mb-4">Growth Focus</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            We identify high-potential opportunities and scale them through structured strategies and operational improvements
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-8 sm:p-10 shadow-xl border-b-4 border-transparent hover:border-[#C5A028] transition-colors duration-300">
                        <h3 className="text-[#745B00] text-xl font-bold mb-4">Diverse Sectors</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Operating across multiple industries, we build resilience through diversification, ensuring stability and adaptability
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-8 sm:p-10 shadow-xl border-b-4 border-transparent hover:border-[#C5A028] transition-colors duration-300">
                        <h3 className="text-[#745B00] text-xl font-bold mb-4">Strategic Vision</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Guided by clear direction and innovation, we align our investments with future opportunities to maximize value
                        </p>
                    </div>

                </div>
            </div>


            {/* =========================================
                3. Statistics / Success Section with Watermarks
            ========================================= */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 pt-16 z-0 overflow-hidden lg:overflow-visible">
                
                {/* Huge Background 'SUCCESS' Watermark */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[90px] sm:text-[180px] lg:text-[260px] xl:text-[300px] font-black text-black/[0.03] select-none -z-20 pointer-events-none tracking-widest uppercase w-full text-center">
                    SUCCESS
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 lg:gap-12 relative z-10">
                    
                    {/* Stat Item 1 */}
                    <div className="relative flex flex-col">
                        {/* '01' Watermark */}
                        <span className="absolute -top-16 -left-4 sm:-left-8 text-[120px] sm:text-[150px] font-black text-black/[0.04] leading-none select-none -z-10 pointer-events-none">
                            01
                        </span>
                        
                        <div className="relative z-10">
                            <h2 className="text-6xl sm:text-7xl font-extrabold text-gray-900 tracking-tighter">
                                6<span className="text-[#C5A028]">+</span>
                            </h2>
                            <div className="w-10 h-1 bg-[#C5A028] mt-4 mb-6"></div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4">Active Sectors</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Operating across diverse industries to ensure growth, resilience, and strong market positioning through strategic diversification and investment planning.
                            </p>
                        </div>
                    </div>

                    {/* Stat Item 2 */}
                    <div className="relative flex flex-col">
                        {/* '02' Watermark */}
                        <span className="absolute -top-16 -left-4 sm:-left-8 text-[120px] sm:text-[150px] font-black text-black/[0.04] leading-none select-none -z-10 pointer-events-none">
                            02
                        </span>
                        
                        <div className="relative z-10">
                            <h2 className="text-6xl sm:text-7xl font-extrabold text-gray-900 tracking-tighter">
                                10<span className="text-[#C5A028]">+</span>
                            </h2>
                            <div className="w-10 h-1 bg-[#C5A028] mt-4 mb-6"></div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4">Companies Managed</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                A growing portfolio of businesses developed and optimized to deliver performance, efficiency, and long-term value across multiple sectors.
                            </p>
                        </div>
                    </div>

                    {/* Stat Item 3 */}
                    <div className="relative flex flex-col">
                        {/* '03' Watermark */}
                        <span className="absolute -top-16 -left-4 sm:-left-8 text-[120px] sm:text-[150px] font-black text-black/[0.04] leading-none select-none -z-10 pointer-events-none">
                            03
                        </span>
                        
                        <div className="relative z-10">
                            <h2 className="text-6xl sm:text-7xl font-extrabold text-gray-900 tracking-tighter">
                                100%
                            </h2>
                            <div className="w-10 h-1 bg-[#C5A028] mt-4 mb-6"></div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4">Strategic Sectors</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Dedicated to excellence, innovation, and operational efficiency in every project, partnership, and investment we undertake across our portfolio.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}