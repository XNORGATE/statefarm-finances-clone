export const FooterSection = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Vehicle loans originated by State Farm Bank
          </h3>
          <p className="text-muted-foreground mb-4">
            For information regarding vehicle loans originated by State Farm Bank, contact Loan Servicing at 866-207-9079, M – F 8 a.m. – 8 p.m. CT or view the{" "}
            <a href="#" className="text-primary hover:text-primary/80 underline">
              Vehicle loans FAQs
            </a>
            .
          </p>
        </div>

        <div className="space-y-4 text-sm text-muted-foreground">
          <p>
            Installment loans are offered by U.S. Bank National Association. Deposit products are offered by U.S. Bank National Association. Member FDIC.
          </p>
          <p>
            The creditor and issuer of State Farm Visa credit cards is U.S. Bank National Association, pursuant to a license from Visa U.S.A. Inc.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center border border-border">
              <span className="text-primary font-bold text-xs">🏠</span>
            </div>
            <span className="text-sm text-muted-foreground">Equal Housing Lender</span>
          </div>
          
          <div className="text-primary font-bold text-lg">
            State Farm®
          </div>
        </div>
      </div>
    </footer>
  );
};