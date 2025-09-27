import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, PiggyBank, Landmark, TrendingUp, DollarSign, Building } from "lucide-react";

const products = [
  {
    title: "Checking Accounts",
    description: "Our alliance with U.S. Bank means offering simplified checking options to help meet your financial needs.",
    icon: CreditCard,
    link: "See U.S. Bank checking accounts",
  },
  {
    title: "Savings accounts", 
    description: "Meet your savings goals and earn interest with U.S. Bank savings and money market options that can help put your financial goals within reach.",
    icon: PiggyBank,
    link: "See U.S. Bank savings accounts",
  },
  {
    title: "CDs",
    description: "Save your money and watch it grow. Get certificate of deposit (CD) accounts with a range of minimum opening deposits and competitive returns.",
    icon: Landmark,
    link: "See U.S. Bank CD accounts",
  },
  {
    title: "Retirement CDs",
    description: "Take advantage of low-risk investing with an individual retirement account that invests in CDs and provides guaranteed returns with locked-in rates.",
    icon: TrendingUp,
    link: "See U.S. Bank retirement CD accounts",
  },
  {
    title: "Credit cards",
    description: "Get and do more with cards that feature enhanced and expanded benefits – designed for rewards, convenience, safeguards and more.",
    icon: CreditCard,
    link: "See U.S. Bank credit cards",
  },
  {
    title: "Personal loans",
    description: "Need additional money for a project or major purchase? A personal loan from U.S. Bank can help cover vacations, home renovations, medical bills or consolidate debts.",
    icon: DollarSign,
    link: "See U.S. Bank personal loans",
  },
];

export const BankingProducts = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-border">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{product.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 font-medium">
                  {product.link}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};