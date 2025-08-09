import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { CreditCard, Shield, Smartphone, Users, Heart, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: CreditCard,
      title: "Credit Repair Services",
      description: "Comprehensive credit restoration and financial recovery solutions.",
      features: [
        "Credit report analysis",
        "Dispute management",
        "Score improvement strategies",
        "Financial consultation"
      ]
    },
    {
      icon: Shield,
      title: "Business & Family Protection",
      description: "Complete protection services for your business and family assets.",
      features: [
        "Identity theft protection",
        "Business security audits",
        "Asset protection planning",
        "Risk assessment"
      ]
    },
    {
      icon: Smartphone,
      title: "Cell Phone Security",
      description: "Advanced mobile device security and hack detection services.",
      features: [
        "Device security analysis",
        "Malware detection",
        "Privacy protection",
        "Security hardening"
      ]
    },
    {
      icon: Users,
      title: "Social Media Recovery",
      description: "Professional account recovery and digital identity restoration.",
      features: [
        "Account recovery assistance",
        "Identity verification",
        "Security enhancement",
        "Digital footprint cleanup"
      ]
    },
    {
      icon: Heart,
      title: "Relationship Investigation",
      description: "Discreet investigation services for relationship concerns and infidelity.",
      features: [
        "Digital forensics",
        "Surveillance services",
        "Evidence collection",
        "Confidential reporting"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-alpha-light">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-alpha-charcoal mb-4 sm:mb-6">
            Our Specialized Services
          </h2>
          <p className="text-lg sm:text-xl text-alpha-grey max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive digital protection and investigation solutions tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-alpha-white border-alpha-blue/10 hover:shadow-glow transition-all duration-300 hover:scale-105 h-full">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 sm:p-4 rounded-full bg-alpha-blue/10">
                    <service.icon className="h-8 w-8 sm:h-10 sm:w-10 text-alpha-blue" />
                  </div>
                </div>
                <CardTitle className="text-xl sm:text-2xl text-alpha-charcoal mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-alpha-grey text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 sm:space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-alpha-blue flex-shrink-0" />
                      <span className="text-alpha-grey text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-alpha-white rounded-2xl p-8 sm:p-12 shadow-elegant border border-alpha-blue/10">
          <h3 className="text-2xl sm:text-3xl font-bold text-alpha-charcoal mb-4 sm:mb-6">
            Ready to Protect What Matters Most?
          </h3>
          <p className="text-lg sm:text-xl text-alpha-grey mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Get a free consultation and discover how we can help secure your digital life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="cta" 
              size="xl" 
              className="px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg"
              onClick={() => window.open('https://api.whatsapp.com/send?phone=%2B14085208691', '_blank')}
            >
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;