"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Language, translations } from "./translations";
// import { translations, Language } from "./translation"; // translation.ts থেকে ইম্পোর্ট

type LanguageContextType = {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const toggleLang = () => setLang((prev) => (prev === "en" ? "ar" : "en"));

  // translation ফাইল থেকে ডেটা নিয়ে আসা হচ্ছে
  const t = (key: string) => translations[key]?.[lang] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      <div dir={lang === "ar" ? "rtl" : "ltr"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}