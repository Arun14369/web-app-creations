import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="navy-gradient text-primary-foreground">
      <div className="container-max section-padding py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded gold-gradient flex items-center justify-center">
                <span className="font-heading font-bold text-primary text-lg">A</span>
              </div>
              <span className="font-heading font-bold text-xl">Apex Industries</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              India's trusted government contractor and manpower supply partner
              for AAC block plant operations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-accent mb-4 text-sm tracking-widest uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Why Us", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/60 text-sm hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-accent mb-4 text-sm tracking-widest uppercase">
              Services
            </h4>
            <ul className="space-y-3 text-primary-foreground/60 text-sm">
              <li>Government Tenders</li>
              <li>Manpower Supply</li>
              <li>AAC Plant Operations</li>
              <li>Project Management</li>
              <li>Workforce Training</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-accent mb-4 text-sm tracking-widest uppercase">
              Contact
            </h4>
            <div className="space-y-3 text-primary-foreground/60 text-sm">
              <div className="flex gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>Plot No. 42, Industrial Area Phase-II, New Delhi</span>
              </div>
              <div className="flex gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>info@apexindustries.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © 2024 Apex Industries. All rights reserved.
          </p>
          <div className="flex gap-6 text-primary-foreground/40 text-sm">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
