"use client";

import AboutOverviewSection from "@/components/aboutPage/components/AboutOverviewSection";
import DirectionAndValuesSection from "@/components/aboutPage/components/DirectionAndValuesSection";
import ImpactAndPartnership from "@/components/aboutPage/components/ImpactAndPartnership";
import OverviewSection from "@/components/aboutPage/components/ImpactAndPartnership";

export default function AboutPage() {
  return (
    <div>
        <AboutOverviewSection />
        <DirectionAndValuesSection />
       <ImpactAndPartnership />
    </div>
  );
}