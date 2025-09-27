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
        <div className="grid md:grid-cols-2 gap-16">
          {products.map((product, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <product.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">{product.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  <a href="#" className="text-primary hover:text-primary/80 underline font-medium">
                    {product.link}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};