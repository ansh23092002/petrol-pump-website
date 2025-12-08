import { HardHat, Phone, MapPin, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { label: "Find Workers", href: "#workers" },
    { label: "For Contractors", href: "#contractors" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    { label: "Skilled Masons", href: "#" },
    { label: "Electricians", href: "#" },
    { label: "Plumbers", href: "#" },
    { label: "Helpers & Coolies", href: "#" },
  ];

  return (
    <footer className="bg-foreground text-background py-16" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <HardHat className="h-8 w-8 text-primary" />
              <span className="font-heading text-xl font-bold tracking-wide uppercase">
                Sharma Enterprises
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for verified construction labor in Raipur and surrounding areas.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              data-testid="link-job-seekers"
            >
              <ExternalLink className="h-4 w-4" />
              For Job Seekers
            </a>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold uppercase tracking-wide mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-primary transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold uppercase tracking-wide mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a 
                    href={service.href} 
                    className="text-gray-400 hover:text-primary transition-colors"
                    data-testid={`link-footer-${service.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold uppercase tracking-wide mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400" data-testid="text-address">
                  123 Industrial Area, Raipur, Chhattisgarh 492001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+919876543210" 
                  className="text-gray-400 hover:text-primary transition-colors"
                  data-testid="link-phone"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:info@sharmaenterprises.in" 
                  className="text-gray-400 hover:text-primary transition-colors"
                  data-testid="link-email"
                >
                  info@sharmaenterprises.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm" data-testid="text-copyright">
              2024 Sharma Enterprises. All rights reserved.
            </p>
            <div className="flex items-center gap-6 flex-wrap">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm" data-testid="link-privacy">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm" data-testid="link-terms">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
