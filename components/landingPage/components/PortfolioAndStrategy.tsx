"use client";
import Image from 'next/image';
import React from 'react';

export default function PortfolioAndStrategy() {
    return (
        <div className="w-full font-sans">
            
            {/* =========================================
                Section 1: Our Companies (Portfolio)
            ========================================= */}
            <section className="bg-white py-20 lg:py-28 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Header Area */}
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-16 gap-8">
                        <div className="max-w-xl">
                            <span className="text-[#C5A028] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                                Our Companies
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                                A Portfolio Built for <br className="hidden sm:block" /> Growth
                            </h2>
                        </div>
                        
                        {/* Right side text with left border */}
                        <div className="lg:border-l-2 lg:border-gray-200 lg:pl-8 max-w-md">
                            <p className="text-gray-500 text-sm leading-relaxed">
                                A diverse group of companies working together to deliver value, innovation, and sustainable business growth.
                            </p>
                        </div>
                    </div>

                    {/* 3-Column Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-start">
                        
                        {/* Card 1 */}
                        <div className="flex flex-col group pt-4">
                            <h4 className="text-[#C5A028] font-bold text-sm mb-4">01. Diverse Operations</h4>
                            <div className="w-full aspect-[16/10] relative mb-6 overflow-hidden">
                                <Image 
                                    src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1632&auto=format&fit=crop" 
                                    alt="Cityscape"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-lg font-extrabold text-gray-900 mb-3 uppercase tracking-wide">Multi-Industry Presence</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Companies operating across sectors including technology, services, and infrastructure.
                            </p>
                        </div>

                        {/* Card 2 (Highlighted with Background and Top Border) */}
                        <div className="flex flex-col bg-[#FAF8F4] p-6 lg:p-8 border-t-4 border-[#C5A028] shadow-sm group">
                            <h4 className="text-[#C5A028] font-bold text-sm mb-4">02. Operational Excellence</h4>
                            <div className="w-full aspect-16/10 relative mb-6 overflow-hidden">
                                <Image 
                                    src="https://i.ibb.co.com/R47Ctrj2/81e094e712059e182faad87fa952c0e7dbbb9782.png" 
                                    alt="Office Flags"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-lg font-extrabold text-gray-900 mb-3 uppercase tracking-wide">Operational Excellence</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Each company is structured to achieve efficiency, performance, and long-term success.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col group pt-4">
                            <h4 className="text-[#C5A028] font-bold text-sm mb-4">03. Growth Driven</h4>
                            <div className="w-full aspect-[16/10] relative mb-6 overflow-hidden">
                                <Image 
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop" 
                                    alt="Business Meeting"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="text-lg font-extrabold text-gray-900 mb-3 uppercase tracking-wide">Growth Driven</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Focused on scaling operations and expanding into new opportunities and markets.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* =========================================
                Section 2: Strategic Direction (Dark Section)
            ========================================= */}
            <section className="relative w-full py-24 lg:py-32 overflow-hidden">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                        alt="Office Desk Background"
                        fill
                        className="object-cover object-center"
                    />
                    {/* Dark gradient/solid overlay */}
                    <div className="absolute inset-0 bg-black/80"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl">
                        
                        {/* Overline Text */}
                        <span className="text-[#C5A028] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-5 block">
                            Strategic Direction
                        </span>
                        
                        {/* Main Heading */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-8">
                            Driving Sustainable Growth Through Structured Investment
                        </h2>
                        
                        {/* Description */}
                        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10">
                            We adopt a disciplined investment approach focused on identifying high-potential opportunities, strengthening operational performance, and scaling businesses across strategic sectors.
                        </p>
                        
                        {/* Highlighted Feature Box */}
                        <div className="flex items-center gap-5">
                            {/* Small Image/Icon */}
                            <div className="w-20 h-16 sm:w-24 sm:h-20 relative shrink-0 border border-white/20">
                                <Image 
                                    src="https://i.ibb.co.com/20nYBDWS/b974dc0b5e2ebcf2caef8532a4f4ebcf56a66a3c.jpg" 
                                    alt="Saudi Flag Motif"
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                            
                            {/* Feature Text */}
                            <div>
                                <h4 className="text-white text-sm sm:text-base font-bold tracking-wider uppercase mb-1">
                                    Integrated Investment Model
                                </h4>
                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                    Combining acquisition, development, and operational excellence to maximize long-term business value.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}