"use client";
import { useLang } from '@/context/LanguageContext';

export default function ContactForm() {
  const { t, lang } = useLang();
  const isRtl = lang === 'ar';

  return (
    <section className={`w-full py-20 bg-white ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
      {/* Header Section */}
<div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
  <div className="max-w-md">
    <span className="text-[#745B00] text-[10px] font-bold tracking-[0.2em] uppercase block mb-4">
      {t("contact.form_overline")}
    </span>
    {/* whitespace-pre-line এবং max-width ব্যবহার করে Our Team কে নিচে নামানো হয়েছে */}
    <h2 className="text-4xl font-black text-gray-900 leading-tight whitespace-pre-line max-w-[280px] md:max-w-[350px]">
      {t("contact.form_title")}
    </h2>
  </div>
  
  <div className={`md:max-w-sm pt-4 border-gray-200 ${isRtl ? 'md:border-r-2 md:pr-8' : 'md:border-l-2 md:pl-8'}`}>
    <p className="text-gray-500 text-sm leading-relaxed">
      {t("contact.form_subtitle")}
    </p>
  </div>
</div>

        {/* Form Section */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10" onSubmit={(e) => e.preventDefault()}>
          
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label className="text-[#745B00] text-[10px] font-bold tracking-widest uppercase">
              {t("contact.label_name")}
            </label>
            <input 
              type="text" 
              placeholder={t("contact.placeholder_name")}
              className="bg-[#EAE8E4] border-none p-4 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#C5A028] outline-none transition-all"
            />
          </div>

          {/* Corporate Email */}
          <div className="flex flex-col gap-2">
            <label className="text-[#745B00] text-[10px] font-bold tracking-widest uppercase">
              {t("contact.label_email")}
            </label>
            <input 
              type="email" 
              placeholder="corporate@company.com"
              className="bg-[#EAE8E4] border-none p-4 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#C5A028] outline-none transition-all"
            />
          </div>

          {/* Contact Number */}
          <div className="flex flex-col gap-2">
            <label className="text-[#745B00] text-[10px] font-bold tracking-widest uppercase">
              {t("contact.label_phone")}
            </label>
            <input 
              type="text" 
              placeholder="+000 00 000 0000"
              className="bg-[#EAE8E4] border-none p-4 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#C5A028] outline-none transition-all"
            />
          </div>

          {/* Nature of Inquiry */}
          <div className="flex flex-col gap-2">
            <label className="text-[#745B00] text-[10px] font-bold tracking-widest uppercase">
              {t("contact.label_inquiry")}
            </label>
            <div className="relative">
              <select className="w-full bg-[#EAE8E4] border-none p-4 text-gray-800 focus:ring-2 focus:ring-[#C5A028] outline-none appearance-none cursor-pointer">
                <option>Institutional Investment</option>
                <option>Partnership Inquiry</option>
                <option>General Inquiry</option>
              </select>
              <div className={`absolute inset-y-0 ${isRtl ? 'left-4' : 'right-4'} flex items-center pointer-events-none text-gray-500`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>

          {/* Message / Strategic Objective */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-[#745B00] text-[10px] font-bold tracking-widest uppercase">
              {t("contact.label_message")}
            </label>
            <textarea 
              rows={6}
              placeholder="Briefly outline your strategic objective..."
              className="bg-[#EAE8E4] border-none p-4 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-[#C5A028] outline-none transition-all resize-none"
            />
          </div>

         {/* Submit Button Section */}
<div className="md:col-span-2 flex justify-center mt-8">
  <button 
    className="cursor-pointer relative flex items-center gap-3 px-10 py-4 font-bold text-sm text-white transition-all duration-300 hover:shadow-[0_10px_20px_rgba(116,91,0,0.3)] active:scale-95 group overflow-hidden"
    style={{
      background: 'linear-gradient(105deg, #745B00 0%, #FFC300 100%)'
    }}
  >
    {/* Button Text */}
    <span className="relative z-10">
        {t("contact.btn_submit")}
    </span>

    {/* Arrow Icon */}
    <svg 
      className={`w-4 h-4 relative z-10 transition-transform duration-300 ${
        isRtl 
          ? 'rotate-180 group-hover:-translate-x-2' 
          : 'group-hover:translate-x-2'
      }`} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>

    {/* Subtle Hover Overlay */}
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
  </button>
</div>

        </form>
      </div>
    </section>
  );
}