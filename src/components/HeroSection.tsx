import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              <span className="text-primary">Banking</span>, your way
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground">
              When, where, and how you want
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              When you're looking for help to achieve your financial goals, our banking alliances offer great financial options for business and everyday life.
            </p>
            
            <div className="space-y-3">
              <p className="font-medium text-foreground">Learn more about:</p>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-primary hover:text-primary/80 underline">
                    Business banking
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary hover:text-primary/80 underline">
                    Checking, savings, CDs, and credit cards
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary hover:text-primary/80 underline">
                    Personal loans
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Happy family - mother and child"
                className="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};