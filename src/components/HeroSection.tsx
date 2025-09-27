import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-foreground">
              <span className="text-primary">Banking</span>, your way
            </h1>
            <h2 className="text-2xl text-muted-foreground">
              When, where, and how you want
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When you're looking for help to achieve your financial goals, our banking alliances offer great financial options for business and everyday life.
            </p>
            
            <div className="space-y-3">
              <p className="font-medium text-foreground">Learn more about:</p>
              <ul className="space-y-2">
                <li>
                  <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80">
                    Business banking
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80">
                    Checking, savings, CDs, and credit cards
                  </Button>
                </li>
                <li>
                  <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80">
                    Personal loans
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-full w-96 h-96 mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Happy family - mother and child"
                className="rounded-full w-96 h-96 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};