"use client"
import Image from 'next/image';
import React from 'react';

export default function AboutOverviewSection() {
    return (
        <div className="w-full font-sans">
            
            {/* =========================================
                Top Section: Dark Hero / Header
            ========================================= */}
            <section className="relative w-full py-24 lg:py-32 bg-[#111111] overflow-hidden">
                {/* Background Image with Dark Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop" 
                        alt="Office Background"
                        fill
                        className="object-cover opacity-30" 
                    />
                </div>
                
                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
                    
                    {/* Overline with Side Lines */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <span className="w-8 sm:w-12 h-[1px] bg-white/60"></span>
                        <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">
                            About Us
                        </span>
                        <span className="w-8 sm:w-12 h-[1px] bg-white/60"></span>
                    </div>
                    
                    {/* Main Title */}
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
                        Building Strong Foundations <br className="hidden sm:block" /> for Sustainable Growth
                    </h1>
                    
                    {/* Subtitle / Description */}
                    <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                        A diversified Saudi holding group focused on acquiring, developing, and scaling businesses across strategic sectors to create long-term value and economic impact.
                    </p>
                </div>
            </section>

            {/* =========================================
                Bottom Section: Overview & Features
            ========================================= */}
            <section className="relative w-full bg-[#FAF8F4] py-20 lg:py-32 overflow-hidden">
                
                {/* Giant Watermark Background Text ("GROWTH") */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
                    <span className="text-[100px] sm:text-[180px] lg:text-[250px] font-extrabold text-black/[0.03] tracking-tighter">
                        GROWTH
                    </span>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        
                        {/* Left Side: Image */}
                        <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[3/4] shadow-lg">
                            <Image 
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop" 
                                alt="Company Office Logo Wall"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Right Side: Text Content */}
                        <div className="flex flex-col">
                            
                            <span className="text-[#9A7B26] text-xs font-bold tracking-[0.2em] uppercase mb-4">
                                Overview
                            </span>
                            
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.15] mb-6">
                                A Diversified Investment Group
                            </h2>
                            
                            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-10">
                                We are a Saudi-based investment holding group focused on acquiring, developing, and managing businesses across key strategic sectors. Our approach combines strong governance, operational excellence, and innovation to build sustainable growth. By enhancing company performance and unlocking new opportunities, we create long-term value for stakeholders. We aim to contribute to economic development by building a diversified portfolio that supports resilience, scalability, and continuous expansion in a dynamic market environment.
                            </p>

                            {/* Two Columns Sub-features */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-0">
                                
                                {/* Feature 1 */}
                                <div className="flex flex-col sm:pr-6">
                                    <h4 className="text-[#9A7B26] font-bold text-base mb-2">
                                        Integrated Strategy
                                    </h4>
                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                                        Combining investment, operations, and innovation to build scalable businesses.
                                    </p>
                                </div>
                                
                                {/* Feature 2 (With Left Border on larger screens) */}
                                <div className="flex flex-col sm:border-l sm:border-[#C5A028]/40 sm:pl-6">
                                    <h4 className="text-[#9A7B26] font-bold text-base mb-2">
                                        Sustainable Growth
                                    </h4>
                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                                        Focusing on long-term value creation across all sectors consistently.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}