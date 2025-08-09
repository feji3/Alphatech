import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { MessageSquare, Search, FileText, CheckCircle } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      step: "01",
      title: "Confidential Consultation",
      description: "Share your concerns in a secure, private environment. We discuss your situation and determine the best investigation approach.",
      duration: "30-60 minutes"
    },
    {
      icon: Search,
      step: "02", 
      title: "Investigation Planning",
      description: "Our experts create a customized investigation strategy tailored to your specific case and requirements.",
      duration: "1-2 days"
    },
    {
      icon: FileText,
      step: "03",
      title: "Evidence Collection",
      description: "Professional investigators gather evidence using legal, ethical methods while maintaining complete discretion.",
      duration: "1-4 weeks"
    },
    {
      icon: CheckCircle,
      step: "04",
      title: "Detailed Report",
      description: "Receive a comprehensive report with all findings, evidence, and recommendations for your next steps.",
      duration: "2-3 days"
    }
  ];

  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Our Investigation</span>
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We follow a proven, systematic approach that ensures thorough investigation while 
            maintaining the highest standards of confidentiality and professionalism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-trust-gold to-trust-gold/30 z-0" 
                     style={{ width: 'calc(100% - 2rem)', left: '2rem' }} />
              )}
              
              <Card className="relative z-10 bg-gradient-card border-border hover:border-trust-gold/30 transition-all duration-300 hover:shadow-glow text-center group">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 relative">
                    <div className="p-4 rounded-full bg-trust-gold/10 border-2 border-trust-gold/20 group-hover:border-trust-gold/40 group-hover:bg-trust-gold/20 transition-all duration-300">
                      <step.icon className="h-8 w-8 text-trust-gold" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-trust-gold text-primary-foreground text-sm font-bold flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">{step.title}</CardTitle>
                  <p className="text-sm text-trust-gold font-medium">{step.duration}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-card rounded-2xl p-8 border border-trust-gold/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Uncover the Truth?</h3>
            <p className="text-muted-foreground mb-6 text-lg">
              All consultations are completely confidential and protected by attorney-client privilege. 
              Your privacy is our priority.
            </p>
            <div className="flex justify-center">
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => window.open('https://api.whatsapp.com/send?phone=%2B14085208691', '_blank')}
              >
                Start Investigation Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;