"use client"
import Image from 'next/image';

const STRATEGIC_INVESTMENT_GROUP_ITEMS = [
  {
    title: "Growth Focus",
    description: "We identify high-potential opportunities and scale them through structured strategies and operational improvements",
  },
  {
    title: "Diverse Sectors",
    description: "Operating across multiple industries, we build resilience through diversification, ensuring stability and adaptability",
  },
  {
    title: "Strategic Vision",
    description: "Guided by clear direction and innovation, we align our investments with future opportunities to maximize value",
  },
];

const StrategicInvestmentGroup = () => {
  return (
    <main className="relative flex flex-col min-h-screen bg-gray-50">
      <div className="flex-grow flex flex-col md:flex-row container mx-auto px-4 py-16 md:py-24">
        {/* Left Side (Text & Buttons) */}
        <div className="md:w-1/2 md:pr-12">
          <p className="text-gray-600 font-medium mb-2">STRATEGIC INVESTMENT GROUP</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight mb-6">
            Building Sustainable<br />
            Business Growth
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-2xl">
            A diversified Saudi holding group focused on acquiring, developing, and scaling businesses across strategic sectors to create long-term value and economic impact.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-20 md:mb-0">
            <button className="flex items-center space-x-2 bg-[#8c6239] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-[#7a5430] transition">
              <span>Explore Our Business</span>
              <span className="w-5 h-5 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-full h-full"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </button>
            <button className="flex items-center space-x-2 border border-[#8c6239] text-[#8c6239] px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
              <span>Our Vision</span>
              <span className="w-5 h-5 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-full h-full"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="md:w-1/2 relative mt-16 md:mt-0 flex items-center justify-center overflow-hidden h-[400px] md:h-auto rounded-xl">
          <Image
            src="/professional-team.jpg" // ছবির সঠিক পাথ ব্যবহার করুন
            alt="Professional team"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Cards (Overlapping) */}
      <div className="container mx-auto px-4 mt-[-100px] md:mt-[-150px] relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STRATEGIC_INVESTMENT_GROUP_ITEMS.map((item, index) => (
            <div key={index} className="bg-white p-10 rounded-xl shadow-lg border border-gray-100 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#8c6239] mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default StrategicInvestmentGroup;