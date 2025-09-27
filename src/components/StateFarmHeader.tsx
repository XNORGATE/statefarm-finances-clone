import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import stateFarmLogo from "@/assets/state-farm-logo.png";

export const StateFarmHeader = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={stateFarmLogo} 
            alt="State Farm" 
            className="h-8 w-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Insurance</a>
          <a href="#" className="text-primary font-semibold text-sm">Banking</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Investments</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Claims</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Get a Quote</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Pay a Bill</a>
          <a href="#" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Find an Agent</a>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center space-x-2">
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-xs">Search</Button>
            <Button variant="ghost" size="sm" className="text-xs">Help</Button>
            <Button variant="ghost" size="sm" className="text-xs">Español</Button>
            <Button variant="outline" size="sm" className="text-xs text-primary border-primary hover:bg-primary hover:text-white">Log in</Button>
          </div>
          
          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-2 text-sm text-muted-foreground">
        <span>Finances</span> <span className="mx-2">›</span> <span className="text-foreground">Banking</span>
      </div>
    </header>
  );
};