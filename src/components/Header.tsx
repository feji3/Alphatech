import { Button } from "@/components/ui/enhanced-button";
import { Shield, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-trust-gold" />
          <span className="text-xl font-bold text-foreground">TruthSeeker Investigations</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="premium" size="sm" className="hidden sm:flex">
            <Phone className="h-4 w-4" />
            24/7 Confidential
          </Button>
          <Button variant="cta" size="sm">
            Free Consultation
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;