"use client";
import React from 'react';

const strengthsData = [
  {
    title: "Diversification",
    description: "We operate across multiple sectors to reduce risk, enhance stability, and ensure consistent growth through a well-balanced investment portfolio.",
    footer: "STRATEGIC BUSINESS UNIT",
    // Custom SVG matching the first icon
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4H10V20H4V4Z" />
        <path d="M12 4H20V11H12V4Z" />
        <path d="M12 13H20V20H12V13Z" />
      </svg>
    )
  },
  {
    title: "Expertise",
    description: "Strong experience in managing, developing, and scaling businesses across industries with a focus on performance and long-term value creation.",
    footer: "STRATEGIC BUSINESS UNIT",
    // Custom SVG matching the second icon (Medal/Ribbon)
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
        <path d="M9 8h6" />
        <path d="M12 5v6" />
      </svg>
    )
  },
  {
    title: "Innovation",
    description: "We embrace innovation and digital transformation to improve efficiency, create opportunities, and stay competitive in evolving market environments.",
    footer: "STRATEGIC BUSINESS UNIT",
    // Custom SVG matching the third icon (Lightbulb)
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2v1" />
        <path d="M15.09 4.91l-.71.71" />
        <path d="M22 12h-1" />
        <path d="M18.91 19.09l-.71-.71" />
        <path d="M12 21v1" />
        <path d="M4.91 19.09l.71-.71" />
        <path d="M2 12h1" />
        <path d="M4.91 4.91l.71.71" />
        <path d="M8 12a4 4 0 118 0c0 2.21-1.79 4-4 4s-4-1.79-4-4z" />
      </svg>
    )
  },
  {
    title: "Partnerships",
    description: "We build strong partnerships to expand capabilities, access new markets, and create mutually beneficial long-term business relationships.",
    footer: "STRATEGIC BUSINESS UNIT",
    // Custom SVG matching the fourth icon (Handshake/Deal)
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 14v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
        <rect x="3" y="14" width="18" height="6" rx="2" />
        <path d="M12 14v6" />
        <path d="M8 10h8" />
      </svg>
    )
  }
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-[#FAF8F5] py-20 lg:py-32 px-6 lg:px-24 font-sans text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[#A48639] text-xs md:text-sm font-bold uppercase tracking-[0.15em] block mb-3">
            OUR STRENGTHS
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">
            Why Choose Us
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {strengthsData.map((item, index) => (
            <div 
              key={index} 
              // দ্বিতীয় কার্ডটিতে ডিফল্ট শ্যাডো দেওয়া হয়েছে ছবির মতো, তবে হোভার করলে সবগুলোতে শ্যাডো আসবে
              className={`flex flex-col bg-[#F6F4EE] p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                index === 1 ? 'shadow-lg' : 'shadow-none'
              }`}
            >
              {/* Icon */}
              <div className="text-[#A48639] mb-8">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                {item.description}
              </p>

              {/* Footer Text */}
              <span className="text-[#A48639] text-[10px] font-bold uppercase tracking-widest mt-auto">
                {item.footer}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;