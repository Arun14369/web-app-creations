import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="navy-gradient text-primary-foreground relative overflow-hidden texture-overlay">
      {/* Decorative top line */}
      <div className="h-[2px] gold-gradient" />

      <div className="container-max px-6 sm:px-8 lg:px-12 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-lg gold-gradient flex items-center justify-center shadow-glow">
                <span className="font-heading font-bold text-primary text-lg">A</span>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">Apex Industries</span>
            </div>
            <p className="text-primary-foreground/45 text-sm leading-[1.8]">
              India's trusted government contractor and manpower supply partner
              for AAC block plant operations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-accent text-xs tracking-[0.2em] uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Why Us", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/45 text-sm hover:text-accent transition-colors duration-300 hover:pl-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-accent text-xs tracking-[0.2em] uppercase mb-6">
              Services
            </h4>
            <ul className="space-y-3 text-primary-foreground/45 text-sm">
              <li>Government Tenders</li>
              <li>Manpower Supply</li>
              <li>AAC Plant Operations</li>
              <li>Project Management</li>
              <li>Workforce Training</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-accent text-xs tracking-[0.2em] uppercase mb-6">
              Contact
            </h4>
            <div className="space-y-4 text-primary-foreground/45 text-sm">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent/70" />
                <span>Plot No. 42, Industrial Area Phase-II, New Delhi</span>
              </div>
              <div className="flex gap-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent/70" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex gap-3">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent/70" />
                <span>info@apexindustries.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/8 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/30 text-sm">
            © 2024 Apex Industries. All rights reserved.
          </p>
          <div className="flex gap-8 text-primary-foreground/30 text-sm">
            <a href="#" className="hover:text-primary-foreground/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
