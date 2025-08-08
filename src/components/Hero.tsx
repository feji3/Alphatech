import { Button } from "@/components/ui/enhanced-button";
import { Shield, Lock } from "lucide-react";
import HeroBackground from "@/components/HeroBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-alpha-light via-background to-alpha-light overflow-hidden px-4 sm:px-6">
      <HeroBackground />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto text-center max-w-6xl">
        
        {/* Brand Name */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-alpha-charcoal mb-2 sm:mb-4 tracking-tight">
            ALPHATECH
          </h1>
          <div className="w-20 sm:w-32 h-0.5 sm:h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </div>
        
        {/* Main Headline */}
        <h2 className="text-xl sm:text-3xl md:text-5xl font-light text-alpha-charcoal mb-6 sm:mb-8 leading-tight max-w-4xl mx-auto px-4">
          Digital Protection & Investigation Services
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-alpha-grey mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-light px-4">
          Credit repair, business protection, device security, social media recovery, 
          and relationship investigation services. Complete digital forensics solutions.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-4">
          <Button variant="cta" size="xl" className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg">
            Start Investigation
          </Button>
          <Button variant="premium" size="xl" className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg">
            <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
            Free Consultation
          </Button>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4">
          <a 
            href="https://api.whatsapp.com/send?phone=%2B14085208691" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 py-2.5 text-sm sm:text-base bg-green-600/10 border-green-600/30 text-green-700 hover:bg-green-600/20 dark:text-green-400">
              📱 WhatsApp Chat
            </Button>
          </a>
          <a 
            href="https://www.facebook.com/share/1ApYaWefaQ/?mibextid=wwXIfr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 py-2.5 text-sm sm:text-base bg-blue-600/10 border-blue-600/30 text-blue-700 hover:bg-blue-600/20 dark:text-blue-400">
              📘 Facebook
            </Button>
          </a>
          <a 
            href="mailto:frankcustomerservice80@gmail.com" 
            className="w-full sm:w-auto"
          >
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 py-2.5 text-sm sm:text-base bg-alpha-blue/10 border-alpha-blue/30 text-alpha-blue hover:bg-alpha-blue/20">
              ✉️ Email Support
            </Button>
          </a>
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto px-4">
          <div className="flex flex-col items-center space-y-3 sm:space-y-4 p-6 sm:p-8 rounded-xl bg-alpha-white/80 backdrop-blur border border-alpha-blue/10 shadow-elegant hover:shadow-glow transition-smooth">
            <Lock className="h-8 w-8 sm:h-10 sm:w-10 text-alpha-blue" />
            <h3 className="text-base sm:text-lg font-semibold text-alpha-charcoal">Bank-Level Security</h3>
            <p className="text-alpha-grey text-center text-xs sm:text-sm">256-bit encrypted communications</p>
          </div>
          <div className="flex flex-col items-center space-y-3 sm:space-y-4 p-6 sm:p-8 rounded-xl bg-alpha-white/80 backdrop-blur border border-alpha-blue/10 shadow-elegant hover:shadow-glow transition-smooth">
            <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-alpha-blue" />
            <h3 className="text-base sm:text-lg font-semibold text-alpha-charcoal">Licensed Experts</h3>
            <p className="text-alpha-grey text-center text-xs sm:text-sm">Certified digital forensics team</p>
          </div>
          <div className="flex flex-col items-center space-y-3 sm:space-y-4 p-6 sm:p-8 rounded-xl bg-alpha-white/80 backdrop-blur border border-alpha-blue/10 shadow-elegant hover:shadow-glow transition-smooth sm:col-span-2 lg:col-span-1">
            <img src="/lovable-uploads/cba1914c-ea9c-4aa2-9469-0a9e79259b1c.png" alt="24/7 Support" className="h-8 w-8 sm:h-10 sm:w-10 opacity-80" />
            <h3 className="text-base sm:text-lg font-semibold text-alpha-charcoal">24/7 Support</h3>
            <p className="text-alpha-grey text-center text-xs sm:text-sm">Round-the-clock availability</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;