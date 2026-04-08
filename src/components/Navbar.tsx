import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Services",
    children: [
      { label: "Skin & Aesthetics", to: "/services/skin" },
      { label: "Injectables & Anti-Aging", to: "/services/injectables" },
      { label: "Hair Restoration", to: "/services/hair" },
      { label: "ENT & Surgery", to: "/services/ent" },
    ],
  },
  { label: "Academy", to: "/academy" },
  { label: "Pricing", to: "/pricing" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Maya Aesthetic Clinic" className="h-14 w-14 rounded-full object-cover" />
          <div className="hidden sm:block">
            <span className="font-heading text-lg font-semibold text-foreground">Maya Aesthetic</span>
            <span className="block text-xs text-muted-foreground tracking-widest uppercase">Clinic</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors tracking-wide uppercase">
                  {link.label}
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-background border border-border rounded-lg shadow-elevated p-2 min-w-[220px]">
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-secondary rounded-md transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to!}
                className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                  location.pathname === link.to ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919827947023"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            +91 98279 47023
          </a>
          <a
            href="https://wa.me/919827947023?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-gold text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-gold"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground/80 uppercase tracking-wide"
                  >
                    {link.label}
                  </button>
                  {servicesOpen &&
                    link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        onClick={() => setOpen(false)}
                        className="block pl-8 py-2.5 text-sm text-muted-foreground hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to!}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-foreground/80 uppercase tracking-wide hover:text-primary"
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-4 border-t border-border">
              <a
                href="https://wa.me/919827947023?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-gradient-gold text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
