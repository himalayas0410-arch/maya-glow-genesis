import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import { CheckCircle, Award, BookOpen, Users, Clock } from "lucide-react";
import academyImg from "@/assets/academy.jpg";
import workshopImg from "@/assets/workshop-poster.jpg";
import fellowshipCertImg from "@/assets/fellowship-cert.jpg";
import awardStageImg from "@/assets/award-stage.jpg";
import teamGroupImg from "@/assets/team-group.jpg";

const curriculum = [
  "Botox & Neuromodulators",
  "Dermal Fillers (Lips, Jawline, Chin)",
  "PRP Therapy",
  "HIFU (Face & Body)",
  "Thread Lifts",
  "Liquid Rhinoplasty",
  "Nonsurgical Blepharoplasty",
  "Fibroblasting",
  "Dermaplaning",
  "Laser Treatments",
  "Mesotherapy",
  "Microneedling RF",
];

const certs = [
  { name: "UK Board Aesthetics", desc: "UK-accredited certification" },
  { name: "AAAM", desc: "American Academy of Aesthetic Medicine" },
  { name: "IABDEC", desc: "International certification body" },
  { name: "ISFPRS", desc: "International Society of Facial Plastic & Reconstructive Surgery" },
];

const Academy = () => (
  <Layout>
    <PageHero
      eyebrow="For Medical Professionals"
      title="Aesthetic Fellowship Program"
      description="5-day intensive with live demonstrations, guided hands-on practice, and international-aligned certifications."
      image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2000&q=80"
      badge="Limited Seats • Next Batch Open"
    />

    <section className="section-padding max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
        <div className="rounded-2xl overflow-hidden shadow-elevated">
          <img src={workshopImg} alt="Aesthetic workshop poster" loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div>
          <SectionHeading subtitle="Master Aesthetics" title="Built for practical mastery" description="This is not lecture-only training. It is procedural learning with supervised practice and real-case focus." centered={false} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["Live demonstrations", "Hands-on guided sessions", "Procedure protocols", "Business setup insights"].map((item) => (
              <div key={item} className="bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground/80">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

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

      <h3 className="font-heading text-2xl font-semibold text-foreground mb-6 text-center">Core Curriculum</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto mb-16">
        {curriculum.map((c) => (
          <div key={c} className="flex items-center gap-2 text-sm text-foreground/80">
            <CheckCircle className="w-4 h-4 text-primary shrink-0" />
            {c}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
        <div className="grid grid-cols-2 gap-4">
          <img src={fellowshipCertImg} alt="Fellowship certificate ceremony" loading="lazy" className="rounded-xl shadow-card w-full" />
          <img src={awardStageImg} alt="Award stage moment" loading="lazy" className="rounded-xl shadow-card w-full" />
          <img src={teamGroupImg} alt="Team and fellowship participants" loading="lazy" className="rounded-xl shadow-card w-full col-span-2" />
        </div>
        <div>
          <SectionHeading subtitle="Certifications Awarded" title="Internationally aligned credentials" centered={false} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certs.map((c) => (
              <div key={c.name} className="bg-card rounded-xl p-5 shadow-card">
                <Award className="w-5 h-5 text-primary mb-2" />
                <h4 className="font-semibold text-foreground text-sm mb-1">{c.name}</h4>
                <p className="text-xs text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h3 className="font-heading text-2xl font-semibold text-foreground mb-6 text-center">Certifications Awarded</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
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
        <p className="opacity-70 mb-4 text-sm" style={{ color: 'hsl(40, 33%, 98%)' }}>Inclusive of tax · 5-day intensive · Hands-on practice · 4 certifications</p>
        <div className="inline-flex items-center gap-2 text-sm mb-8 px-4 py-2 rounded-full border border-primary-foreground/20" style={{ color: "hsl(40, 33%, 98%)" }}>
          <Clock className="w-4 h-4" />
          Limited seats available for upcoming batch
        </div>
        <br />
        <a href="https://wa.me/919827947023?text=Hi%2C%20I%20am%20interested%20in%20the%20Aesthetic%20Fellowship%20Program" target="_blank" rel="noopener noreferrer" className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-gold inline-block">
          Enquire About Fellowship
        </a>
      </div>
    </section>
  </Layout>
);

export default Academy;
