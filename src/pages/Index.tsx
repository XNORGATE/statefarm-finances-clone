import { StateFarmHeader } from "@/components/StateFarmHeader";
import { HeroSection } from "@/components/HeroSection";
import { PartnershipSection } from "@/components/PartnershipSection";
import { BankingProducts } from "@/components/BankingProducts";
import { AgentSection } from "@/components/AgentSection";
import { FooterSection } from "@/components/FooterSection";

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
    </div>
  );
};

export default Index;
