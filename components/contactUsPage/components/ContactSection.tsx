"use client";
import Image from 'next/image';
import { useLang } from '@/context/LanguageContext';

export default function ContactSection() {
  const { t, lang } = useLang();
  const isRtl = lang === 'ar';

  return (
    <section className={`w-full bg-[#FDFBF7] ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      
      {/* Top Banner Section (Dark) */}
      <div className="relative w-full py-20 lg:py-32 bg-[#0A0A0A] text-white overflow-hidden text-center">
        <div className="absolute inset-0 opacity-15">
          {/* Replace with your background image */}
          <div className="w-full h-full bg-[url('https://i.ibb.co.com/TM0P7NWp/ae4aaff686c47e302296fe8bd1c2b7e92f5f0e02.jpg')] bg-cover bg-center" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-white" />
            <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">
                {t("contact.hero_subtitle")}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            {t("contact.hero_title")}
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            {t("contact.hero_desc")}
          </p>
        </div>
      </div>

    {/* Main Contact Details Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 overflow-hidden">
        
        {/* Background Watermark Text (image_9d2424.jpg এর মতো) */}
        <div className={`absolute top-10 ${isRtl ? 'right-0' : 'left-0'} z-0 select-none pointer-events-none`}>
          <span className="text-[150px] md:text-[250px] font-black text-gray-100/60 leading-none tracking-tighter uppercase">
            Connect
          </span>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-12">
            <div>
              <span className="text-[#745B00] text-xs font-bold tracking-[0.15em] uppercase block mb-4">
                {t("contact.get_in_touch")}
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                {t("contact.h3_title")}
              </h2>
            </div>

            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-5">
                <div className="text-[#745B00] mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-[#745B00] text-[10px] font-bold tracking-widest uppercase mb-1">{t("contact.address_label")}</h4>
                  <p className="text-gray-800 font-bold text-lg">{t("contact.address_val")}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-5">
                <div className="text-[#745B00] mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="text-[#745B00] text-[10px] font-bold tracking-widest uppercase mb-1">{t("contact.phone_label")}</h4>
                  <p className="text-gray-800 font-bold text-lg">0559105459</p>
                  <p className="text-gray-400 text-xs mt-1">{t("contact.phone_time")}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5">
                <div className="text-[#745B00] mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="text-[#745B00] text-[10px] font-bold tracking-widest uppercase mb-1">{t("contact.email_label")}</h4>
                  <p className="text-gray-800 font-bold text-lg">info@salemgp.com</p>
                </div>
              </div>

              {/* Gold Divider Line */}
              <div className="w-24 h-1.5 bg-[#745B00]" />
            </div>
          </div>

          {/* Right Side: Image Card */}
          <div className="relative group z-10">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-2xl border-2 border-white/50">
              <Image 
                src="https://i.ibb.co.com/M5SPKJcb/53e7ed976205ca5c16086f7b706308f146ada001.png" // আপলোড করা ইমেজের মতো অফিস মিটিং রুমের ছবি
                alt="Office Meeting Room"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Card (Matches Image 9978f3.png style) */}
              <div className={`absolute bottom-6 ${isRtl ? 'left-6' : 'right-6'} bg-white p-6 md:p-8 max-w-[280px] md:max-w-[320px] shadow-2xl border-l-4 border-[#C5A028]`}>
                 <span className="text-[#745B00] text-[9px] font-bold tracking-widest uppercase block mb-3">
                    {t("contact.visit_title")}
                 </span>
                 <p className="text-gray-700 text-xs md:text-sm leading-relaxed font-medium">
                    {t("contact.visit_desc")}
                 </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}