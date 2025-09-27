import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const AgentSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Get an agent who gets you
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              A State Farm agent can provide you with information to help you choose the right products and options. And with thousands of agents throughout the U.S., chances are there's one near you.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Find a local State Farm agent near you
            </Button>
          </div>
          
          <Card className="bg-background shadow-lg">
            <CardHeader>
              <CardTitle>Want to know more about banking?</CardTitle>
            </CardHeader>
            <CardContent>
              <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80">
                Frequently asked questions
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};