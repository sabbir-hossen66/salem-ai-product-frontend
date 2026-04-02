"use client";

import ApproachAndCommitment from "@/components/chosseUsPage/components/ApproachAndCommitment";
import ExploreCompaniesCTA from "@/components/chosseUsPage/components/ExploreCompaniesCTA";
import HowWeDeliverValue from "@/components/chosseUsPage/components/HowWeDeliverValue";
import WhyChooseUs from "@/components/chosseUsPage/components/strengthsData";
import TrustedPartnerSection from "@/components/chosseUsPage/components/TrustedPartnerSection";

export default function WhyChooseUsPage() {
  return (
    <div>
      <TrustedPartnerSection />
      <HowWeDeliverValue />
      <WhyChooseUs />
      <ApproachAndCommitment />
      <ExploreCompaniesCTA />
    </div>
  );
}