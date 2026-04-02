"use client";

const deliverySteps = [
  {
    number: "01",
    title: "IDENTIFY",
    description: "We identify high-potential opportunities aligned with market demand, long-term growth, and strategic investment value.",
  },
  {
    number: "02",
    title: "DEVELOP",
    description: "We enhance operations, improve performance, and build strong foundations for scalable and sustainable business growth.",
  },
  {
    number: "03",
    title: "EXPAND",
    description: "We scale businesses into new markets and sectors to maximize reach, impact, and long-term value.",
  }
];

const HowWeDeliverValue = () => {
  return (
    <section className="relative w-full bg-[#FAF8F4] py-20 lg:py-32 overflow-hidden font-sans">
      
      {/* =========================================
          Background Watermark Text ("INNOVAT")
      ========================================= */}
      <div className="absolute top-10 left-0 w-full flex justify-center z-0 pointer-events-none select-none overflow-hidden">
        <span className="text-[#F0ECE1] text-[20vw] md:text-[18vw] font-black uppercase tracking-tighter whitespace-nowrap opacity-80 leading-none">
          INNOVAT
        </span>
      </div>

      {/* =========================================
          Main Content Container
      ========================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Left Side (Heading) */}
        <div className="lg:w-2/5 lg:pt-10">
          <span className="text-[#A48639] text-xs font-bold uppercase tracking-[0.2em] block mb-4">
            OUR ADVANTAGE
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight tracking-tight">
            How We Deliver Value
          </h2>
        </div>

        {/* Right Side (Cards) */}
        <div className="lg:w-3/5 flex flex-col gap-8">
          {deliverySteps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-[#F5F3EC] p-8 md:p-10 border-l-[3px] border-[#BCA55D]"
            >
              {/* Large Number Background inside Card */}
              <span className="block text-5xl md:text-6xl font-extrabold text-[#E5DFCE] mb-4 leading-none">
                {step.number}
              </span>
              
              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-[#111111] uppercase mb-3">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default HowWeDeliverValue;