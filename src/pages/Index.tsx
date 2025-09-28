import { StateFarmHeader } from "@/components/StateFarmHeader";
import { HeroSection } from "@/components/HeroSection";
import { PartnershipSection } from "@/components/PartnershipSection";
import { BankingProducts } from "@/components/BankingProducts";
import { AgentSection } from "@/components/AgentSection";
import { FooterSection } from "@/components/FooterSection";
import { CookieConsent } from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StateFarmHeader />
      <main>
        <HeroSection />
        <PartnershipSection />
        <BankingProducts />
        <AgentSection />
      </main>
      <FooterSection />
      <CookieConsent />
    </div>
  );
};

export default Index;
