import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { CheckCircle, Award, BookOpen, Users } from "lucide-react";
import academyImg from "@/assets/academy.jpg";

const curriculum = [
  "Botox & Neuromodulators", "Dermal Fillers (Lips, Jawline, Chin)", "PRP Therapy",
  "HIFU (Face & Body)", "Thread Lifts", "Liquid Rhinoplasty",
  "Nonsurgical Blepharoplasty", "Chin Augmentation", "Jawline Definition",
  "Neck Lift", "Fibroblasting", "Dermaplaning",
  "Medifacials", "Chemical Peels", "Laser Treatments",
  "Mesotherapy", "LED Therapy", "Microneedling RF",
  "Practice Setup Guidance", "Marketing Training",
];

const certs = [
  { name: "UK Board Aesthetics", desc: "UK-accredited certification" },
  { name: "AAAM", desc: "American Academy of Aesthetic Medicine" },
  { name: "IABDEC", desc: "International certification body" },
  { name: "ISFPRS", desc: "International Society of Facial Plastic & Reconstructive Surgery" },
];

const Academy = () => (
  <Layout>
    <section className="relative h-[50vh] flex items-center">
      <img src={academyImg} alt="Maya Aesthetic Academy" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <span className="text-sm tracking-[0.2em] uppercase font-semibold mb-3 block" style={{ color: 'hsl(var(--gold-light))' }}>For Medical Professionals</span>
        <h1 className="font-heading text-4xl md:text-5xl font-semibold mb-4" style={{ color: 'hsl(40, 33%, 98%)' }}>Aesthetic Fellowship Program</h1>
        <p className="text-lg opacity-80 max-w-xl" style={{ color: 'hsl(40, 33%, 98%)' }}>5-Day Intensive Hands-On Training in 20+ Aesthetic Procedures</p>
      </div>
    </section>

    <section className="section-padding max-w-7xl mx-auto">
      <SectionHeading subtitle="Master Aesthetics" title="5-Day Intensive Fellowship" description="Learn from Dr. Manya Thakur and international faculty. Master 20+ procedures with hands-on practice, using South Korea & Singapore protocols." />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-card rounded-2xl p-8 shadow-card text-center">
          <BookOpen className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="font-heading text-xl font-semibold mb-2">20+ Procedures</h3>
          <p className="text-sm text-muted-foreground">Comprehensive curriculum covering all major aesthetic treatments</p>
        </div>
        <div className="bg-card rounded-2xl p-8 shadow-card text-center">
          <Users className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="font-heading text-xl font-semibold mb-2">Expert Faculty</h3>
          <p className="text-sm text-muted-foreground">Dr. Manya Thakur & Dr. Rajat Bhandari (International Certified Injector)</p>
        </div>
        <div className="bg-card rounded-2xl p-8 shadow-card text-center">
          <Award className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="font-heading text-xl font-semibold mb-2">4 Certifications</h3>
          <p className="text-sm text-muted-foreground">UK Board, AAAM, IABDEC & ISFPRS accredited</p>
        </div>
      </div>

      <h3 className="font-heading text-2xl font-semibold text-foreground mb-6 text-center">Full Curriculum</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto mb-16">
        {curriculum.map((c) => (
          <div key={c} className="flex items-center gap-2 text-sm text-foreground/80">
            <CheckCircle className="w-4 h-4 text-primary shrink-0" />
            {c}
          </div>
        ))}
      </div>

      <h3 className="font-heading text-2xl font-semibold text-foreground mb-6 text-center">Certifications Awarded</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {certs.map((c) => (
          <div key={c.name} className="bg-card rounded-xl p-5 shadow-card text-center">
            <Award className="w-6 h-6 text-primary mx-auto mb-3" />
            <h4 className="font-semibold text-foreground text-sm mb-1">{c.name}</h4>
            <p className="text-xs text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-foreground section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl font-semibold mb-2" style={{ color: 'hsl(40, 33%, 98%)' }}>Enroll Now</h2>
        <p className="text-4xl font-heading font-bold mb-2" style={{ color: 'hsl(var(--gold-light))' }}>₹1,80,000</p>
        <p className="opacity-70 mb-8 text-sm" style={{ color: 'hsl(40, 33%, 98%)' }}>Inclusive of tax · 5-day intensive · Hands-on practice · 4 certifications</p>
        <a href="https://wa.me/919827947023?text=Hi%2C%20I%20am%20interested%20in%20the%20Aesthetic%20Fellowship%20Program" target="_blank" rel="noopener noreferrer" className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-gold inline-block">
          Enquire About Fellowship
        </a>
      </div>
    </section>
  </Layout>
);

export default Academy;
