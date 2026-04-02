"use client"
import Image from 'next/image';
import React from 'react';

export default function DirectionAndValuesSection() {
    return (
        <div className="w-full font-sans">
            
            {/* =========================================
                Top Section: OUR DIRECTION
            ========================================= */}
            <section className="relative w-full py-20 lg:py-32 bg-[#111111] overflow-hidden">
                {/* Dark Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
                        alt="Office Background"
                        fill
                        className="object-cover opacity-20" 
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="text-[#C5A028] text-xs font-bold tracking-[0.2em] uppercase">
                            Our Direction
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
                            Driven by Purpose and Vision
                        </h2>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
                        
                        {/* Card 1: Our Mission */}
                        <div className="bg-white p-8 lg:p-10 flex flex-col justify-between shadow-xl">
                            <div>
                                {/* Target Icon */}
                                <svg className="w-10 h-10 text-[#C5A028] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                                <h3 className="text-xl font-extrabold text-gray-900 mb-4 uppercase tracking-wide">Our Mission</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    To develop and manage high-performing businesses that deliver value, innovation, and sustainable growth across key industries and evolving market opportunities.
                                </p>
                            </div>
                            <div className="w-12 h-1.5 bg-[#C5A028] mt-10"></div>
                        </div>

                        {/* Card 2: Our Vision (Highlighted Dark Card) */}
                        <div className="bg-[#1a1a1a] border border-[#C5A028] p-8 lg:p-10 flex flex-col justify-between shadow-2xl scale-100 lg:scale-105 z-10">
                            <div>
                                {/* Eye Icon */}
                                <svg className="w-10 h-10 text-[#C5A028] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                <h3 className="text-xl font-extrabold text-white mb-4 uppercase tracking-wide">Our Vision</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    To become a leading investment group recognized for building strong companies, driving diversification, and contributing to long-term economic growth.
                                </p>
                            </div>
                            <div className="w-12 h-1.5 bg-[#C5A028] mt-10"></div>
                        </div>

                        {/* Card 3: Our Goals */}
                        <div className="bg-white p-8 lg:p-10 flex flex-col justify-between shadow-xl">
                            <div>
                                {/* Flag Icon */}
                                <svg className="w-10 h-10 text-[#C5A028] mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                                </svg>
                                <h3 className="text-xl font-extrabold text-gray-900 mb-4 uppercase tracking-wide">Our Goals</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    To expand into high-potential sectors, diversify our portfolio, and build strategic partnerships that drive growth, innovation, and long-term business resilience.
                                </p>
                            </div>
                            <div className="w-12 h-1.5 bg-[#C5A028] mt-10"></div>
                        </div>

                    </div>
                </div>
            </section>

            {/* =========================================
                Bottom Section: OUR VALUES
            ========================================= */}
            <section className="w-full bg-[#FAF8F4] py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="text-[#C5A028] text-xs font-bold tracking-[0.2em] uppercase">
                            Our Values
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 tracking-tight">
                            The Principles That Guide Us
                        </h2>
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        
                        {/* Value 1 */}
                        <div className="bg-[#F5F3ED] p-8 lg:p-10 flex flex-col shadow-sm">
                            <div className="text-[#C5A028] mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Integrity</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                                We operate with transparency, accountability, and strong ethical standards across all business activities, ensuring trust and long-term relationships.
                            </p>
                            <span className="text-[#C5A028] text-[10px] font-bold tracking-[0.15em] uppercase mt-auto">Built on trust and responsibility</span>
                        </div>

                        {/* Value 2 */}
                        <div className="bg-[#F5F3ED] p-8 lg:p-10 flex flex-col shadow-sm">
                            <div className="text-[#C5A028] mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Excellence</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                                We strive for high performance, quality, and continuous improvement in every aspect of our operations and decision-making processes across all sectors.
                            </p>
                            <span className="text-[#C5A028] text-[10px] font-bold tracking-[0.15em] uppercase mt-auto">Committed to high standards</span>
                        </div>

                        {/* Value 3 */}
                        <div className="bg-[#F5F3ED] p-8 lg:p-10 flex flex-col shadow-sm">
                            <div className="text-[#C5A028] mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Innovation</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                                We embrace new ideas, technologies, and strategies to enhance efficiency, unlock opportunities, and remain competitive in evolving business environments.
                            </p>
                            <span className="text-[#C5A028] text-[10px] font-bold tracking-[0.15em] uppercase mt-auto">Driven by forward thinking</span>
                        </div>

                        {/* Value 4 */}
                        <div className="bg-[#F5F3ED] p-8 lg:p-10 flex flex-col shadow-sm">
                            <div className="text-[#C5A028] mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Partnerships</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                                We build strong collaborations that create mutual value, expand capabilities, and support sustainable growth across our network of companies.
                            </p>
                            <span className="text-[#C5A028] text-[10px] font-bold tracking-[0.15em] uppercase mt-auto">Stronger together</span>
                        </div>

                        {/* Value 5 (Highlighted with border) */}
                        <div className="bg-[#Fdfbf7] border border-[#C5A028] p-8 lg:p-10 flex flex-col shadow-md">
                            <div className="text-[#C5A028] mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Teamwork</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                                We foster collaboration, shared responsibility, and collective success by empowering our teams and encouraging open communication.
                            </p>
                            <span className="text-[#C5A028] text-[10px] font-bold tracking-[0.15em] uppercase mt-auto">Empowering our people</span>
                        </div>

                        {/* Value 6 */}
                        <div className="bg-[#F5F3ED] p-8 lg:p-10 flex flex-col shadow-sm">
                            <div className="text-[#C5A028] mb-6">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Sustainability</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                                We focus on long-term financial stability, responsible growth, and creating lasting value that supports both business success and economic development.
                            </p>
                            <span className="text-[#C5A028] text-[10px] font-bold tracking-[0.15em] uppercase mt-auto">Growth with responsibility</span>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}