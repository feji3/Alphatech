import { Button } from "@/components/ui/enhanced-button";
import { Shield, Eye, Lock, Search } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-alpha-light via-background to-alpha-light overflow-hidden">
      {/* Modern geometric background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-alpha-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-alpha-blue rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-6xl">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-12">
          <div className="relative p-6 rounded-2xl bg-alpha-blue/10 border border-alpha-blue/20 backdrop-blur-sm">
            <Search className="h-16 w-16 text-alpha-blue" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-alpha-blue rounded-full animate-pulse"></div>
          </div>
        </div>
        
        {/* Brand Name */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-alpha-charcoal mb-4 tracking-tight">
            ALPHATECH
          </h1>
          <div className="w-32 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>
        
        {/* Main Headline */}
        <h2 className="text-3xl md:text-5xl font-light text-alpha-charcoal mb-8 leading-tight max-w-4xl mx-auto">
          Professional Digital Investigation Services
        </h2>
        
        <p className="text-lg md:text-xl text-alpha-grey mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Discreet, confidential, and comprehensive digital investigations. 
          Get the truth you need with our advanced forensics and surveillance technology.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button variant="cta" size="xl" className="w-full sm:w-auto px-12 py-4 text-lg">
            Start Investigation
          </Button>
          <Button variant="premium" size="xl" className="w-full sm:w-auto px-12 py-4 text-lg">
            <Shield className="h-5 w-5" />
            Free Consultation
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center space-y-4 p-8 rounded-xl bg-alpha-white/80 backdrop-blur border border-alpha-blue/10 shadow-elegant hover:shadow-glow transition-smooth">
            <Lock className="h-10 w-10 text-alpha-blue" />
            <h3 className="text-lg font-semibold text-alpha-charcoal">Bank-Level Security</h3>
            <p className="text-alpha-grey text-center text-sm">256-bit encrypted communications</p>
          </div>
          <div className="flex flex-col items-center space-y-4 p-8 rounded-xl bg-alpha-white/80 backdrop-blur border border-alpha-blue/10 shadow-elegant hover:shadow-glow transition-smooth">
            <Shield className="h-10 w-10 text-alpha-blue" />
            <h3 className="text-lg font-semibold text-alpha-charcoal">Licensed Experts</h3>
            <p className="text-alpha-grey text-center text-sm">Certified digital forensics team</p>
          </div>
          <div className="flex flex-col items-center space-y-4 p-8 rounded-xl bg-alpha-white/80 backdrop-blur border border-alpha-blue/10 shadow-elegant hover:shadow-glow transition-smooth">
            <Eye className="h-10 w-10 text-alpha-blue" />
            <h3 className="text-lg font-semibold text-alpha-charcoal">24/7 Support</h3>
            <p className="text-alpha-grey text-center text-sm">Round-the-clock availability</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;