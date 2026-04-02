"use client";
import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full bg-[#111111] text-white border-t-[3px] border-[#C5A028] font-sans pt-16 sm:pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main Footer Content */}
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 mb-16 sm:mb-20">
                    
                    {/* Left Section - Brand & About */}
                    <div className="lg:max-w-[420px]">
                        <h3 className="text-white text-base sm:text-lg font-bold tracking-wider uppercase mb-6">
                            SALEM -AL GROUP
                        </h3>
                        <p className="text-gray-400 text-sm leading-loose">
                            Salem Al-Subaie Group Holding is a Saudi-based investment company focused on building, developing, and managing businesses across multiple sectors. Through a structured approach to investment and operations, the group delivers sustainable growth, long-term value, and meaningful economic impact.
                        </p>
                    </div>

                    {/* Right Section - Navigation Links */}
                    <div className="flex flex-wrap sm:flex-nowrap gap-12 sm:gap-20 lg:gap-28 w-full lg:w-auto">
                        
                        {/* Column 1: Home */}
                        <div className="flex flex-col">
                            <h4 className="text-[#C5A028] text-xs font-bold tracking-[0.15em] uppercase mb-6">
                                Home
                            </h4>
                            <ul className="flex flex-col gap-4">
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Overview</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Directions</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Values</a></li>
                            </ul>
                        </div>

                        {/* Column 2: Explore */}
                        <div className="flex flex-col">
                            <h4 className="text-[#C5A028] text-xs font-bold tracking-[0.15em] uppercase mb-6">
                                Explore
                            </h4>
                            <ul className="flex flex-col gap-4">
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">About</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Sectors</a></li>
                            </ul>
                        </div>

                        {/* Column 3: Social */}
                        <div className="flex flex-col">
                            <h4 className="text-[#C5A028] text-xs font-bold tracking-[0.15em] uppercase mb-6">
                                Social
                            </h4>
                            <ul className="flex flex-col gap-4">
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Facebook</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">LinkedIn</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Instagram</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>

            {/* Bottom Copyright Section */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
                    <p className="text-gray-400 text-xs sm:text-sm tracking-wide">
                        © 2024 Salem Al-Subaie Group. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}
