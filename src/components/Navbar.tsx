import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Services", href: "services" },
  { label: "Why Us", href: "why-us" },
  { label: "Contact", href: "contact" },
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-card shadow-premium py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-max flex items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Logo */}
        <button onClick={() => scrollTo("home")} className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-lg gold-gradient flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform duration-300">
            <span className="font-heading font-bold text-primary text-lg">A</span>
          </div>
          <div className="leading-tight">
            <span className={`font-heading font-bold text-lg tracking-tight block transition-colors duration-300 ${isScrolled ? "text-primary" : "text-primary-foreground"}`}>
              Apex Industries
            </span>
            <span className={`text-[9px] tracking-[0.25em] uppercase font-medium transition-colors duration-300 ${isScrolled ? "text-muted-foreground" : "text-primary-foreground/50"}`}>
              Government Contractors
            </span>
          </div>
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`text-[13px] font-medium tracking-wide uppercase transition-all duration-300 hover:text-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full ${
                isScrolled ? "text-foreground/80" : "text-primary-foreground/80"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button onClick={() => scrollTo("contact")} className="btn-premium text-primary text-sm px-6 py-2.5 rounded-lg flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Get Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-lg transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden glass-card mt-2 mx-4 rounded-xl shadow-premium overflow-hidden">
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => { scrollTo(link.href); setIsMobileOpen(false); }}
                className="block w-full text-left text-foreground/80 font-medium py-3 text-sm tracking-wide uppercase hover:text-accent hover:pl-2 transition-all border-b border-border/50 last:border-0"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3">
              <button
                onClick={() => { scrollTo("contact"); setIsMobileOpen(false); }}
                className="w-full btn-premium text-primary font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Get Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
