import { Shield, Phone, Mail, Clock, Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-deep-navy text-platinum py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-trust-gold" />
              <span className="text-xl font-bold">TruthSeeker Investigations</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Professional investigation services with over 15 years of experience. 
              Licensed, insured, and committed to your privacy.
            </p>
            <div className="flex items-center space-x-2 text-trust-gold">
              <Lock className="h-4 w-4" />
              <span className="text-sm font-medium">100% Confidential & Secure</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-trust-gold transition-colors">Digital Forensics</a></li>
              <li><a href="#" className="hover:text-trust-gold transition-colors">Online Surveillance</a></li>
              <li><a href="#" className="hover:text-trust-gold transition-colors">Physical Surveillance</a></li>
              <li><a href="#" className="hover:text-trust-gold transition-colors">Background Checks</a></li>
              <li><a href="#" className="hover:text-trust-gold transition-colors">Loyalty Testing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-trust-gold" />
                <span className="text-muted-foreground">(555) 123-TRUTH</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-trust-gold" />
                <span className="text-muted-foreground">contact@truthseeker.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-trust-gold" />
                <span className="text-muted-foreground">24/7 Emergency Line</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-trust-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-trust-gold transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-trust-gold transition-colors">Licensing</a></li>
              <li><a href="#" className="hover:text-trust-gold transition-colors">Certifications</a></li>
            </ul>
            <div className="text-sm text-muted-foreground">
              <p className="mb-2">Licensed Private Investigator</p>
              <p>License #PI-2024-7891</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-steel-blue pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 TruthSeeker Investigations. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Fully Licensed & Insured</span>
              <span>•</span>
              <span>Attorney-Client Privilege</span>
              <span>•</span>
              <span>ISO 27001 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;