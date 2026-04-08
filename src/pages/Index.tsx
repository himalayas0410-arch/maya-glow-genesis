import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Award, GraduationCap, Heart, Shield, Star, Sparkles, Stethoscope, Scissors } from "lucide-react";
import heroImg from "@/assets/hero-woman.jpg";
import clinicImg from "@/assets/clinic-interior.jpg";
import drImg from "@/assets/dr-manya.jpg";
import facialImg from "@/assets/treatment-facial.jpg";
import hairImg from "@/assets/treatment-hair.jpg";
import entImg from "@/assets/treatment-ent.jpg";
import injectImg from "@/assets/treatment-injectables.jpg";

const services = [
  { title: "Skin & Aesthetics", desc: "HydraFacial MD, OxyGeneo, Chemical Peels, Dermaplaning & advanced skin rejuvenation.", img: facialImg, to: "/services/skin", icon: Sparkles },
  { title: "Injectables & Anti-Aging", desc: "Botox, Dermal Fillers, Thread Lifts, PRP Vampire Facials & regenerative treatments.", img: injectImg, to: "/services/injectables", icon: Heart },
  { title: "Hair Restoration", desc: "PRP, GFC, QR678, Hair Threads, IV Drips & transplant solutions for lasting results.", img: hairImg, to: "/services/hair", icon: Scissors },
  { title: "ENT & Surgery", desc: "Rhinoplasty, Septoplasty, FESS, Tympanoplasty & comprehensive ENT care.", img: entImg, to: "/services/ent", icon: Stethoscope },
];

const usps = [
  { icon: Shield, title: "Medical Precision", desc: "Every treatment backed by 12+ years of surgical & clinical expertise." },
  { icon: GraduationCap, title: "International Training", desc: "Advanced techniques from South Korea in anti-aging & stem cell therapy." },
  { icon: Award, title: "Research-Driven", desc: "Published researcher with award-winning contributions to medical science." },
  { icon: Star, title: "Premium Technology", desc: "Alma Soprano Platinum, HydraFacial MD, HIFU & other world-class devices." },
];

const testimonials = [
  { name: "Priya S.", text: "Dr. Manya is incredibly skilled. My HydraFacial results were visible from day one. The clinic feels so premium and welcoming.", rating: 5 },
  { name: "Anita M.", text: "I came for a bridal package and left feeling like a completely new person. The MAC Glow treatment is absolutely magical.", rating: 5 },
  { name: "Rahul K.", text: "Best ENT specialist in Raipur. Dr. Manya resolved my sinus issues that I'd been dealing with for years. Highly recommended.", rating: 5 },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Maya Aesthetic Clinic - Premium Aesthetic Treatments in Raipur" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-24">
        <div className="max-w-2xl">
          <span className="inline-block text-sm tracking-[0.25em] uppercase text-gold-light mb-6 font-medium">Raipur's Premier Aesthetic Clinic</span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] mb-6" style={{ color: 'hsl(40, 33%, 98%)' }}>
            Where Science Meets <span className="italic text-gold-light">Aesthetic Artistry</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-10 opacity-80" style={{ color: 'hsl(40, 33%, 98%)' }}>
            Experience internationally trained precision in cosmetic surgery, aesthetic treatments & ENT care — all under one roof.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/919827947023?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-wide uppercase hover:opacity-90 transition-opacity shadow-gold"
            >
              Book Consultation
            </a>
            <Link
              to="/services/skin"
              className="border border-primary-foreground/30 px-8 py-4 rounded-full text-sm font-semibold tracking-wide uppercase hover:bg-primary-foreground/10 transition-colors"
              style={{ color: 'hsl(40, 33%, 98%)' }}
            >
              Explore Treatments
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Trust Bar */}
    <section className="bg-secondary py-6 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 text-sm text-muted-foreground">
        <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-primary" /> 12+ Years Experience</span>
        <span className="flex items-center gap-2"><GraduationCap className="w-4 h-4 text-primary" /> South Korea Trained</span>
        <span className="flex items-center gap-2"><Award className="w-4 h-4 text-primary" /> Award-Winning Research</span>
        <span className="flex items-center gap-2"><Star className="w-4 h-4 text-primary" /> 4.8★ Google Rating</span>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding max-w-7xl mx-auto">
      <SectionHeading subtitle="Our Expertise" title="Comprehensive Aesthetic & Medical Care" description="From advanced skin rejuvenation to complex ENT surgeries, we deliver results with medical precision and artistic finesse." />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((s) => (
          <Link key={s.to} to={s.to} className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elevated transition-all duration-500">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                <s.icon className="w-5 h-5 text-gold-light" />
                <h3 className="font-heading text-xl md:text-2xl font-semibold" style={{ color: 'hsl(40, 33%, 98%)' }}>{s.title}</h3>
              </div>
              <p className="text-sm opacity-80 leading-relaxed" style={{ color: 'hsl(40, 33%, 98%)' }}>{s.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>

    {/* Doctor Highlight */}
    <section className="bg-secondary section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img src={drImg} alt="Dr. Manya Thakur" loading="lazy" className="rounded-2xl shadow-elevated w-full max-w-md mx-auto" />
          <div className="absolute -bottom-4 -right-4 bg-gradient-gold rounded-xl p-4 shadow-gold hidden md:block">
            <p className="font-heading text-2xl font-bold text-primary-foreground">12+</p>
            <p className="text-xs text-primary-foreground/80">Years Experience</p>
          </div>
        </div>
        <div>
          <span className="text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3 block">Meet Your Doctor</span>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">Dr. Manya Thakur</h2>
          <div className="gold-line mb-6" />
          <p className="text-sm text-primary font-medium mb-4">MBBS · MS (ENT) · Fellow in Rhinoplasty & Facial Aesthetic Surgery</p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            An Associate Professor at Pt. JNM Medical College and an internationally trained anti-aging & stem cell expert from South Korea, Dr. Manya brings a rare combination of surgical precision and aesthetic artistry to every patient.
          </p>
          <blockquote className="border-l-2 border-primary pl-4 italic text-foreground/70 mb-8">
            "Aesthetic procedures are meant to enhance your natural features, not to make someone else happy."
          </blockquote>
          <Link to="/about" className="bg-gradient-gold text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-gold inline-block">
            Learn More About Dr. Manya
          </Link>
        </div>
      </div>
    </section>

    {/* USPs */}
    <section className="section-padding max-w-7xl mx-auto">
      <SectionHeading subtitle="Why Choose Us" title="The Maya Aesthetic Difference" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {usps.map((u) => (
          <div key={u.title} className="text-center p-6 rounded-2xl bg-card shadow-card hover:shadow-elevated transition-shadow">
            <div className="w-14 h-14 mx-auto bg-gradient-gold rounded-xl flex items-center justify-center mb-5 shadow-gold">
              <u.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{u.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Clinic Interior */}
    <section className="relative">
      <img src={clinicImg} alt="Maya Aesthetic Clinic Interior" loading="lazy" width={1280} height={720} className="w-full h-[50vh] object-cover" />
      <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4" style={{ color: 'hsl(40, 33%, 98%)' }}>
            State-of-the-Art Facility
          </h2>
          <p className="text-sm max-w-lg mx-auto mb-8 opacity-80" style={{ color: 'hsl(40, 33%, 98%)' }}>
            Our clinic features world-class technology in a luxurious, calming environment designed for your comfort.
          </p>
          <Link to="/contact" className="bg-gradient-gold text-primary-foreground px-8 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-gold inline-block">
            Visit Us
          </Link>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="section-padding max-w-7xl mx-auto">
      <SectionHeading subtitle="Patient Stories" title="Trusted by Hundreds" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-shadow">
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground/80 leading-relaxed mb-6 italic">"{t.text}"</p>
            <p className="text-sm font-semibold text-foreground">{t.name}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="bg-foreground section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4" style={{ color: 'hsl(40, 33%, 98%)' }}>
          Ready to Begin Your Transformation?
        </h2>
        <p className="opacity-70 mb-8 max-w-xl mx-auto" style={{ color: 'hsl(40, 33%, 98%)' }}>
          Book a consultation with Dr. Manya Thakur and discover the perfect treatment plan tailored to your unique needs.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/919827947023?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-gold"
          >
            Book on WhatsApp
          </a>
          <a href="tel:+919827947023" className="border border-primary-foreground/30 px-8 py-4 rounded-full font-semibold hover:bg-primary-foreground/10 transition-colors" style={{ color: 'hsl(40, 33%, 98%)' }}>
            Call +91 98279 47023
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
