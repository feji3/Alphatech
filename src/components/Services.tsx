import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Monitor, Camera, FileSearch, UserCheck, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Digital Forensics",
      description: "Comprehensive analysis of phones, computers, and digital devices to uncover hidden communications and deleted data.",
      features: ["Text message recovery", "Social media investigation", "App usage analysis", "Location tracking"]
    },
    {
      icon: Monitor,
      title: "Online Surveillance",
      description: "Professional monitoring of online activities, dating profiles, and social media presence.",
      features: ["Dating app monitoring", "Social media tracking", "Email investigation", "Online behavior analysis"]
    },
    {
      icon: Camera,
      title: "Physical Surveillance",
      description: "Discreet observation and documentation of activities with professional surveillance techniques.",
      features: ["Photo documentation", "Video evidence", "Activity logs", "Pattern analysis"]
    },
    {
      icon: FileSearch,
      title: "Background Checks",
      description: "Thorough investigation of personal history, relationships, and financial activities.",
      features: ["Criminal background", "Employment verification", "Financial investigation", "Reference checks"]
    },
    {
      icon: UserCheck,
      title: "Loyalty Testing",
      description: "Professional assessment of relationship commitment through controlled scenarios.",
      features: ["Integrity testing", "Temptation scenarios", "Behavioral analysis", "Detailed reporting"]
    },
    {
      icon: Globe,
      title: "International Cases",
      description: "Global investigation services for cases involving multiple countries or international travel.",
      features: ["Cross-border tracking", "International partnerships", "Multi-language support", "Global databases"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-steel-blue/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Professional Investigation</span>
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive suite of investigation services uses cutting-edge technology and proven methodologies 
            to provide you with the truth you seek.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card border-border hover:border-trust-gold/30 transition-all duration-300 hover:shadow-glow group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-trust-gold/10 border border-trust-gold/20 group-hover:bg-trust-gold/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-trust-gold" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-trust-gold mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="premium" className="w-full mt-6">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="cta" size="xl">
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;