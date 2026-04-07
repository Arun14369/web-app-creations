import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded gold-gradient flex items-center justify-center">
            <span className="font-heading font-bold text-primary-foreground text-lg">A</span>
          </div>
          <div>
            <span className={`font-heading font-bold text-xl tracking-tight ${isScrolled ? "text-primary" : "text-primary-foreground"}`}>
              Apex Industries
            </span>
            <span className={`block text-[10px] tracking-[0.2em] uppercase ${isScrolled ? "text-muted-foreground" : "text-primary-foreground/70"}`}>
              Government Contractors
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                isScrolled ? "text-foreground" : "text-primary-foreground/90"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact">
            <Button className="gold-gradient text-primary font-semibold hover:opacity-90 transition-opacity">
              <Phone className="w-4 h-4 mr-2" />
              Get Quote
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2"
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
        <div className="lg:hidden bg-card/95 backdrop-blur-md border-t border-border shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="block text-foreground font-medium py-2 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMobileOpen(false)}>
              <Button className="w-full gold-gradient text-primary font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                Get Quote
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
