import { Shield, Phone, Mail, Clock, Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-alpha-charcoal text-alpha-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-alpha-blue" />
              <span className="text-xl font-bold">ALPHATECH</span>
            </div>
            <p className="text-alpha-grey leading-relaxed">
              Advanced digital investigation services with over 15 years of experience. 
              Licensed, insured, and committed to your privacy.
            </p>
            <div className="flex items-center space-x-2 text-alpha-blue">
              <Lock className="h-4 w-4" />
              <span className="text-sm font-medium">100% Confidential & Secure</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-alpha-white">Services</h3>
            <ul className="space-y-2 text-alpha-grey">
              <li><a href="#" className="hover:text-alpha-blue transition-colors">Digital Forensics</a></li>
              <li><a href="#" className="hover:text-alpha-blue transition-colors">Online Surveillance</a></li>
              <li><a href="#" className="hover:text-alpha-blue transition-colors">Physical Surveillance</a></li>
              <li><a href="#" className="hover:text-alpha-blue transition-colors">Background Checks</a></li>
              <li><a href="#" className="hover:text-alpha-blue transition-colors">Loyalty Testing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-alpha-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-alpha-blue" />
                <a href="https://api.whatsapp.com/send?phone=%2B14085208691" className="text-alpha-grey hover:text-alpha-blue transition-colors">
                  +1 (408) 520-8691
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-alpha-blue" />
                <a href="mailto:frankcustomerservice80@gmail.com" className="text-alpha-grey hover:text-alpha-blue transition-colors">
                  frankcustomerservice80@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-4 w-4 text-alpha-blue" />
                <span className="text-alpha-grey">24/7 Emergency Line</span>
              </div>
              <div className="mt-4 pt-3 border-t border-alpha-blue/20">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <a 
                    href="https://www.facebook.com/share/1ApYaWefaQ/?mibextid=wwXIfr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                  >
                    📘 Facebook
                  </a>
                  <a 
                    href="https://api.whatsapp.com/send?phone=%2B14085208691" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors text-sm"
                  >
                    📱 WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-alpha-white">Legal</h3>
            <ul className="space-y-2 text-alpha-grey">
              <li><a href="#" className="hover:text-alpha-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-alpha-blue transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-alpha-blue transition-colors">Licensing</a></li>
              <li><a href="#" className="hover:text-alpha-blue transition-colors">Certifications</a></li>
            </ul>
            <div className="text-sm text-alpha-grey">
              <p className="mb-2">Licensed Private Investigator</p>
              <p>License #PI-2024-7891</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-alpha-blue/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-alpha-grey text-sm">
              © 2024 ALPHATECH. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-alpha-grey">
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