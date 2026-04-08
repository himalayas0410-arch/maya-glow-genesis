import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="max-w-7xl mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img src={logo} alt="Maya Aesthetic Clinic" className="h-12 w-12 rounded-full" />
            <div>
              <span className="font-heading text-lg font-semibold">Maya Aesthetic</span>
              <span className="block text-xs tracking-widest uppercase opacity-70">Clinic</span>
            </div>
          </div>
          <p className="text-sm opacity-70 leading-relaxed mb-6">
            Where medical precision meets aesthetic artistry. Serving Raipur since 2022 with internationally trained expertise.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/mayaaestheticclinic/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-base font-semibold mb-6">Quick Links</h4>
          <div className="space-y-3">
            {[
              { label: "About Dr. Manya", to: "/about" },
              { label: "Skin & Aesthetics", to: "/services/skin" },
              { label: "Hair Restoration", to: "/services/hair" },
              { label: "ENT Services", to: "/services/ent" },
              { label: "Aesthetic Academy", to: "/academy" },
              { label: "Pricing", to: "/pricing" },
            ].map((l) => (
              <Link key={l.to} to={l.to} className="block text-sm opacity-70 hover:opacity-100 transition-opacity">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-base font-semibold mb-6">Contact</h4>
          <div className="space-y-4 text-sm opacity-70">
            <div className="flex gap-3">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>19/3, Geetanjali Nagar, Avanti Vihar Road, Raipur, CG 492004</span>
            </div>
            <div className="flex gap-3">
              <Phone className="w-4 h-4 mt-0.5 shrink-0" />
              <div>
                <a href="tel:+919827947023" className="hover:opacity-100 block">+91 98279 47023</a>
                <a href="tel:07717966656" className="hover:opacity-100 block">0771-7966656</a>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail className="w-4 h-4 mt-0.5 shrink-0" />
              <a href="mailto:aestheticmayaclinic@gmail.com" className="hover:opacity-100">aestheticmayaclinic@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-heading text-base font-semibold mb-6">Hours</h4>
          <div className="space-y-3 text-sm opacity-70">
            <div className="flex gap-3">
              <Clock className="w-4 h-4 mt-0.5 shrink-0" />
              <div>
                <p>Mon – Sat: 11 AM – 7:30 PM</p>
                <p>Sun: 11 AM – 4 PM</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <a
              href="https://wa.me/919827947023?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-gold text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50">
        <p>© {new Date().getFullYear()} Maya Aesthetic Clinic. All rights reserved.</p>
        <p>LGBTQ+ Friendly · Women-Owned Business</p>
      </div>
    </div>
  </footer>
);

export default Footer;
