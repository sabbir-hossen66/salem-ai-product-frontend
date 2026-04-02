import Image from 'next/image';
import React from 'react';

export default function WhoAre() {
    return (
        <section className="bg-[#fbfaf8] py-20 lg:py-32 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* =========================================
                        1. Left Side: Overlapping Images 
                    ========================================= */}
                    <div className="relative w-full max-w-lg mx-auto lg:max-w-none lg:mx-0">
                        {/* Main Large Image */}
                        <div className="relative w-[80%] sm:w-[75%] aspect-[4/5] shadow-xl">
                            <Image 
                                // এখানে আপনার "Salem Al-Subaie Holding Group" এর ছবিটির লিংক দিন
                                src="https://i.ibb.co.com/xqZbMyxg/b49ef04c3a50cb35f02748f0d2cfb4c2e53f8538.png" 
                                alt="Salem Al-Subaie Holding Group Logo on Wall"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                        
                        {/* Smaller Overlapping Image */}
                        {/* border-8 এবং border-[#fbfaf8] দিয়ে ব্যাকগ্রাউন্ডের সাথে মিলিয়ে সাদা ফ্রেম তৈরি করা হয়েছে */}
                        <div className="absolute -bottom-10 sm:-bottom-16 right-0 sm:-right-4 w-[55%] aspect-[1/1] border-[10px] border-[#fbfaf8] shadow-2xl z-10 bg-white">
                            <Image 
                                // এখানে আপনার "Arabic Calligraphy" এর ছবিটির লিংক দিন
                                src="https://i.ibb.co.com/d0DPYkjG/8cb352a980d0be4cf410170ee98268d61b697a4f-1.png" 
                                alt="Arabic Calligraphy on Wall"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>

                    {/* =========================================
                        2. Right Side: Text Content 
                    ========================================= */}
                    <div className="flex flex-col pt-12 sm:pt-16 lg:pt-0">
                        
                        {/* Overline Text */}
                        <span className="text-[#C5A028] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-5 block">
                            Who We Are
                        </span>
                        
                        {/* Main Heading */}
                        <h2 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.15] mb-8 tracking-tight">
                            A Strong Foundation for Sustainable Growth
                        </h2>
                        
                        {/* Golden Quote Block */}
                        <div className="border-l-4 border-[#C5A028] pl-6 mb-12">
                            <p className="text-gray-500 text-lg sm:text-xl italic leading-relaxed font-medium">
                                "We build value-driven businesses through innovation, strategic investment, and a long-term vision focused on growth and economic impact."
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
                            
                            {/* Feature 1 */}
                            <div>
                                <h4 className="text-gray-900 font-bold text-lg mb-3">
                                    Integrated Approach
                                </h4>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    We combine strategy, operations, and innovation to build scalable businesses.
                                </p>
                            </div>
                            
                            {/* Feature 2 */}
                            <div>
                                <h4 className="text-gray-900 font-bold text-lg mb-3">
                                    Long-Term Focus
                                </h4>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    We prioritize sustainable growth and lasting value over short-term gains.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}