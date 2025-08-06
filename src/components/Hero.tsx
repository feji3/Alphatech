import { Button } from "@/components/ui/enhanced-button";
import { Shield, Eye, Lock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex justify-center mb-8">
          <div className="p-4 rounded-full bg-trust-gold/10 border border-trust-gold/20">
            <Eye className="h-12 w-12 text-trust-gold" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-foreground">Uncover The</span>
          <br />
          <span className="bg-gradient-accent bg-clip-text text-transparent">Truth</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Professional, discreet, and confidential investigation services. 
          Get the answers you need with our expert digital forensics and surveillance team.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="cta" size="xl" className="w-full sm:w-auto">
            Start Your Investigation
          </Button>
          <Button variant="premium" size="xl" className="w-full sm:w-auto">
            <Shield className="h-5 w-5" />
            100% Confidential
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-card/50 backdrop-blur border border-border">
            <Lock className="h-6 w-6 text-trust-gold" />
            <span className="text-foreground font-medium">Encrypted & Secure</span>
          </div>
          <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-card/50 backdrop-blur border border-border">
            <Shield className="h-6 w-6 text-trust-gold" />
            <span className="text-foreground font-medium">Licensed Professionals</span>
          </div>
          <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-card/50 backdrop-blur border border-border">
            <Eye className="h-6 w-6 text-trust-gold" />
            <span className="text-foreground font-medium">24/7 Availability</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;