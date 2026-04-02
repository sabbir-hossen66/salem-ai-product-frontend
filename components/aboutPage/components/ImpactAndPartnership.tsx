import Image from 'next/image';
import React from 'react';

export default function ImpactAndPartnership() {
    return (
        <div className="w-full font-sans">
            {/* Top Section: Our Impact (Dark Background) */}
            <section className="relative w-full bg-[#111111] py-20 lg:py-28 overflow-hidden">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                    {/* Note: Replace the src with your actual background image */}
                    <Image
                        src="https://images.unsplash.com/photo-1513628253939-010e64ac66cd?q=80&w=1920&auto=format&fit=crop"
                        alt="Cityscape Background"
                        fill
                        className="object-cover opacity-20" 
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                        
                        {/* Left Content */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-[#C5A028] text-xs font-bold tracking-[0.2em] uppercase">
                                    Our Impact
                                </span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                                Delivering Measurable <br className="hidden md:block" /> Results that Shine
                            </h2>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg">
                                Our performance is driven by consistent growth, operational strength, and a commitment to delivering measurable value across our investment portfolio.
                            </p>
                        </div>

                        {/* Right Content: Stats */}
                        <div className="flex flex-row gap-12 lg:justify-end items-center">
                            {/* Stat 1 */}
                            <div className="text-left">
                                <h3 className="text-5xl sm:text-6xl font-bold text-white mb-2">
                                    6+
                                </h3>
                                <p className="text-[#C5A028] text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                                    Active Sectors
                                </p>
                            </div>
                            
                            {/* Stat 2 */}
                            <div className="text-left">
                                <h3 className="text-5xl sm:text-6xl font-bold text-white mb-2">
                                    10+
                                </h3>
                                <p className="text-[#C5A028] text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                                    Companies Managed
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Bottom Section: Strategic Partnerships (Light Background) */}
            <section className="w-full bg-[#FAF8F4] py-20 lg:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                    
                    <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-gray-900 mb-6 leading-tight">
                        Build Strategic <br className="hidden md:block" /> Partnerships
                    </h2>
                    
                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-10 max-w-2xl">
                        Collaborate with us to explore new opportunities, expand capabilities, and create long-term value through strong and mutually beneficial partnerships.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        {/* Solid Button */}
                        <button className="w-full sm:w-auto px-8 py-3.5 bg-[#9E801C] hover:bg-[#8A6F18] transition-colors duration-300 text-white text-sm font-semibold flex items-center justify-center gap-2">
                            Explore Sectors
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                        
                        {/* Outline Button */}
                        <button className="w-full sm:w-auto px-8 py-3.5 bg-white border border-[#9E801C] text-[#9E801C] hover:bg-gray-50 transition-colors duration-300 text-sm font-semibold flex items-center justify-center gap-2">
                            Contact Our Team
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>

                </div>
            </section>
        </div>
    );
}