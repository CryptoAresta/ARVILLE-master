import FAQsFour from "@/components/faqs-4";
import Features from "@/components/features-3";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-3";
import StatsSection from "@/components/stats-3";
import TeamSection from "@/components/team";
import { Stats } from "fs";
import { Feature } from "motion";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <IntegrationsSection />
      <StatsSection/>
      <TeamSection/>
      <FAQsFour/>
      <FooterSection/>
    </div>
  );
}

