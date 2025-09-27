import { Button } from "@/components/ui/button";

export const StateFarmHeader = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-primary text-2xl font-bold">State Farm</div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors">Insurance</a>
          <a href="#" className="text-primary font-medium">Banking</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Investments</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Claims</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Get a Quote</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Pay a Bill</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">Find an Agent</a>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">Search</Button>
          <Button variant="ghost" size="sm">Help</Button>
          <Button variant="ghost" size="sm">Español</Button>
          <Button variant="outline" size="sm">Log in</Button>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-2 text-sm text-muted-foreground">
        <span>Finances</span> <span className="mx-2">›</span> <span className="text-foreground">Banking</span>
      </div>
    </header>
  );
};