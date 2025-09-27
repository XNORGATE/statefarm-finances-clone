import partnershipLogos from "@/assets/partnership-logos.png";

export const PartnershipSection = () => {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center mb-8">
          <img 
            src={partnershipLogos} 
            alt="State Farm and US Bank Partnership" 
            className="h-16 w-auto"
          />
        </div>
        
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Achieve your financial goals
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're excited to introduce you to banking products that allow you to bank when, where, and how you want, thanks to an alliance between U.S. Bank® and State Farm®. Now, you'll be able to apply for U.S. Bank checking, savings, CDs and CD-IRAs online, or through your local{" "}
            <a href="#" className="text-primary hover:text-primary/80 underline">
              State Farm agent
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};