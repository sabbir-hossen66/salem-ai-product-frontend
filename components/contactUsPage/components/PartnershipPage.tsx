"use client";
import Image from 'next/image';
import { useLang } from '@/context/LanguageContext';

export default function PartnershipPage() {
  const { t, lang } = useLang();
  const isRtl = lang === 'ar';

  // Common Golden Gradient Style
  const goldenGradient = {
    background: 'linear-gradient(105deg, #745B00 0%, #FFC300 100%)'
  };

  return (
    <div className={`${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* SECTION 1: HERO PARTNERSHIP */}
      {/* ব্যাকগ্রাউন্ড কালার ডার্ক রাখা হয়েছে */}
      <section className="relative w-full bg-[#0A0A0A] overflow-hidden">
        
        {/* BACKGROUND IMAGE - image_7.png এর মতো */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://i.ibb.co.com/gZbV4XTc/2905325c07ca002f78c284eab5faed9a2d20675b.png" // image_7.png এর ব্যাকগ্রাউন্ড ইমেজ (ইন্টারনেট থেকে সংগৃহীত একটি উদাহরণ)
            alt="Partnership Background"
            fill
            className="object-cover"
            priority // দ্রুত লোড হওয়ার জন্য priority দেওয়া হয়েছে
          />
          {/* DARK OVERLAY - টেক্সট ক্লিয়ার করার জন্য ১টি কালো লেয়ার */}
          <div className="absolute inset-0 bg-black/90 z-10"></div>
        </div>

        {/* content container - z-20 দেওয়া হয়েছে যাতে এটি ওভারলের উপরে থাকে */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <span className="text-[#C5A028] text-xs font-bold tracking-[0.2em] uppercase block mb-4">
                  {t("partner.hero_overline")}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                  {t("partner.hero_title")}
                </h1>
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl">
                {t("partner.hero_desc")}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  style={goldenGradient}
                  className="cursor-pointer px-8 py-3 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-3 hover:shadow-lg transition-all"
                >
                  {t("partner.btn_explore")}
                  <svg className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
                <button className="cursor-pointer px-8 py-3 border border-[#C5A028] text-[#C5A028] font-bold text-xs uppercase tracking-wider hover:bg-[#C5A028] hover:text-white transition-all flex items-center gap-3">
                   {t("partner.btn_work")}
                   <svg className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </div>

            {/* Right Image with Yellow Border */}
            <div className="relative group">
              <div className={`relative aspect-square md:aspect-video lg:aspect-square overflow-hidden border-t-4 border-l-4 border-[#C5A028] ${isRtl ? 'border-l-0 border-r-4' : ''}`}>
                <Image 
                  src="https://i.ibb.co.com/GvDJJpwF/f565157879f3a2a6d7fcb502b98c74e6b371456e.jpg" // হ্যান্ডশেক ইমেজ (image_8.png থেকে)
                  alt="Handshake"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* SECTION 2: PARTNER WITH US (Light) */}
<section className="w-full bg-[#FDFBF7] py-24 text-center">
  <div className="max-w-4xl mx-auto px-4">
    {/* এখানে max-w-2xl এবং mx-auto ব্যবহার করে টাইটেলটিকে ব্রেক করা হয়েছে */}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-8 tracking-tight max-w-[600px] mx-auto leading-tight">
      {t("partner.bottom_title")}
    </h2>
    
    <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-12 max-w-2xl mx-auto">
      {t("partner.bottom_desc")}
    </p>

    <div className="flex flex-wrap justify-center gap-4">
      <button 
        style={goldenGradient}
        className= "cursor-pointer px-10 py-4 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-3 hover:shadow-xl transition-all active:scale-95 group"
      >
        {t("partner.btn_portfolio")}
        <svg 
          className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} 
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>

      <button className="px-10 py-4 border cursor-pointer border-[#C5A028] text-[#745B00] font-bold text-xs uppercase tracking-wider hover:bg-[#F9F5EB] transition-all flex items-center gap-3 shadow-sm group">
         {t("partner.btn_contact")}
         <svg 
           className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRtl ? 'rotate-180 group-hover:-translate-x-1' : ''}`} 
           fill="none" stroke="currentColor" viewBox="0 0 24 24"
         >
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
         </svg>
      </button>
    </div>
  </div>
</section>

    </div>
  );
}