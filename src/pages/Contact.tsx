import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contact = () => (
  <Layout>
    <section className="bg-secondary section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Get in Touch" title="Visit Maya Aesthetic Clinic" description="We'd love to hear from you. Reach out to book your appointment or ask any questions." />
      </div>
    </section>

    <section className="section-padding max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center shrink-0 shadow-gold">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Address</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">19/3, Geetanjali Nagar, Avanti Vihar Road,<br />near SBI Bank, Gayatri Nagar, Shankar Nagar,<br />Raipur, Chhattisgarh 492004</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center shrink-0 shadow-gold">
              <Phone className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Phone</h3>
              <a href="tel:+919827947023" className="text-muted-foreground text-sm hover:text-primary transition-colors block">+91 98279 47023</a>
              <a href="tel:07717966656" className="text-muted-foreground text-sm hover:text-primary transition-colors block">0771-7966656</a>
              <a href="tel:+918962741100" className="text-muted-foreground text-sm hover:text-primary transition-colors block">+91 89627 41100</a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center shrink-0 shadow-gold">
              <Mail className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Email</h3>
              <a href="mailto:aestheticmayaclinic@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">aestheticmayaclinic@gmail.com</a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center shrink-0 shadow-gold">
              <Clock className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">Operating Hours</h3>
              <p className="text-muted-foreground text-sm">Monday – Saturday: 11:00 AM – 7:30 PM</p>
              <p className="text-muted-foreground text-sm">Sunday: 11:00 AM – 4:00 PM</p>
            </div>
          </div>

          <div className="bg-secondary rounded-2xl p-6 space-y-3">
            <h4 className="font-heading text-base font-semibold text-foreground">Facilities</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>✓ Paid parking available</li>
              <li>✓ Restrooms available</li>
              <li>✓ NFC / Tap-to-pay accepted</li>
              <li>✓ LGBTQ+ friendly</li>
              <li>✓ Women-owned business</li>
            </ul>
          </div>

          <a
            href="https://wa.me/919827947023?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-primary-foreground w-full py-4 rounded-full font-semibold hover:opacity-90 transition-opacity text-lg"
          >
            <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
          </a>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-elevated h-[500px] lg:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.1234567!2d81.6234567!3d21.2345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dde1e1e1e1e1%3A0x1234567890abcdef!2sMaya%20Aesthetic%20Clinic!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '500px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Maya Aesthetic Clinic Location"
          />
        </div>
      </div>
    </section>

    {/* JSON-LD */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: "Maya Aesthetic Clinic",
          alternateName: "माया एस्थेटिक क्लिनिक",
          url: "https://www.macclinics.com",
          telephone: "+919827947023",
          email: "aestheticmayaclinic@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "19/3, Geetanjali Nagar, Avanti Vihar Road",
            addressLocality: "Raipur",
            addressRegion: "Chhattisgarh",
            postalCode: "492004",
            addressCountry: "IN",
          },
          geo: { "@type": "GeoCoordinates", latitude: 21.2345, longitude: 81.6234 },
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "11:00", closes: "19:30" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "11:00", closes: "16:00" },
          ],
          medicalSpecialty: ["Otolaryngology", "PlasticSurgery", "Dermatology"],
          founder: {
            "@type": "Person",
            name: "Dr. Manya Thakur",
            jobTitle: "ENT Specialist & Facial Aesthetic Surgeon",
            description: "MBBS, MS ENT, Fellow in Rhinoplasty & Facial Aesthetic Surgery",
          },
        }),
      }}
    />
  </Layout>
);

export default Contact;
