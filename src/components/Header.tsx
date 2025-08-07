import { Button } from "@/components/ui/enhanced-button";
import { Shield, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border px-4 sm:px-0">
      <div className="container mx-auto px-4 h-14 sm:h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <img src="/lovable-uploads/cba1914c-ea9c-4aa2-9469-0a9e79259b1c.png" alt="ALPHATECH Logo" className="h-8 w-8 sm:h-10 sm:w-10" />
          <span className="text-lg sm:text-2xl font-bold text-alpha-charcoal tracking-tight">ALPHATECH</span>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <a href="#services" className="text-alpha-grey hover:text-alpha-charcoal transition-colors text-sm xl:text-base">
            Services
          </a>
          <a href="#process" className="text-alpha-grey hover:text-alpha-charcoal transition-colors text-sm xl:text-base">
            How It Works
          </a>
          <a href="#about" className="text-alpha-grey hover:text-alpha-charcoal transition-colors text-sm xl:text-base">
            About
          </a>
          <a href="#contact" className="text-alpha-grey hover:text-alpha-charcoal transition-colors text-sm xl:text-base">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button variant="premium" size="sm" className="hidden sm:flex text-xs sm:text-sm px-3 sm:px-4">
            <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
            24/7 Confidential
          </Button>
          <Button variant="cta" size="sm" className="text-xs sm:text-sm px-3 sm:px-4">
            Free Consultation
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;