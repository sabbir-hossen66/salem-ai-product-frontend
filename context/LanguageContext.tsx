"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language, translations } from "./translations";

type LanguageContextType = {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language | null>(null);

  // ✅ শুধু client-side এ run হবে — typeof window check দিয়ে
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("lang") as Language | null;
      setLang(saved === "en" || saved === "ar" ? saved : "en");
    }
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === "en" ? "ar" : "en";
      if (typeof window !== "undefined") {
        localStorage.setItem("lang", next);
      }
      return next;
    });
  };

  const t = (key: string) => translations[key]?.[lang ?? "en"] ?? key;

  // Loader — localStorage load হওয়ার আগে
  if (lang === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-[#C5A028] border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-semibold text-[#745B00] tracking-widest uppercase">
            Loading...
          </p>
        </div>
      </div>
    );
  }

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