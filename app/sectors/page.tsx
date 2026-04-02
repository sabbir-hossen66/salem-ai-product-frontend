"use client";

import ExploreAndValueSection from "@/components/sectorsPage/components/ExploreAndValueSection";
import HeroWithCards from "@/components/sectorsPage/components/HeroWithCards";
import SectorsAndIndustries from "@/components/sectorsPage/components/SectorsAndIndustries";
import StrategicInvestmentGroup from "@/components/sectorsPage/components/StrategicInvestmentGroup";

export default function SectorsPage() {
  return (
    <div>
        <SectorsAndIndustries />
       <ExploreAndValueSection />
       {/* <StrategicInvestmentGroup /> */}
       <HeroWithCards />
    </div>
  );
}