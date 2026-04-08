import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import img from "@/assets/treatment-ent.jpg";
import awardStageImg from "@/assets/award-stage.jpg";
import drImg from "@/assets/dr-manya.jpg";

const surgicalServices = [
  { cat: "Nose", items: [
    { name: "Rhinoplasty", desc: "Aesthetic and functional nose correction." },
    { name: "Non-Surgical Rhinoplasty", desc: "Liquid rhinoplasty with minimal downtime." },
    { name: "Septoplasty", desc: "Breathing-focused correction for deviated septum." },
  ]},
  { cat: "Sinus", items: [
    { name: "FESS", desc: "Endoscopic solution for chronic sinus disease." },
    { name: "Balloon Sinuplasty", desc: "Gentle opening of blocked sinuses." },
    { name: "Polypectomy", desc: "Removal of obstructive nasal polyps." },
    { name: "Turbinate Reduction", desc: "Improves airflow and reduces blockage." },
  ]},
  { cat: "Ear", items: [
    { name: "Tympanoplasty", desc: "Eardrum repair for better hearing and comfort." },
    { name: "Mastoidectomy", desc: "Treatment for chronic deep ear infection." },
    { name: "Myringotomy", desc: "Fluid drainage for pressure and pain relief." },
    { name: "Stapedectomy", desc: "Microsurgery for otosclerosis cases." },
    { name: "Ear Lobe Repair", desc: "Correction of torn or stretched lobes." },
    { name: "Cannula Ear Piercing", desc: "Safer medical ear piercing method." },
  ]},
  { cat: "Throat", items: [
    { name: "Tonsillectomy", desc: "For recurrent infection and airway concerns." },
    { name: "Adenoidectomy", desc: "Breathing and infection relief in children." },
  ]},
  { cat: "Pediatric ENT", items: [
    { name: "Pediatric ENT Care", desc: "Child-focused diagnosis and treatment." },
  ]},
];

const ENTServices = () => (
  <Layout>
    <PageHero
      title="ENT & Surgical Services"
      description="Comprehensive nose, sinus, ear, throat, and pediatric ENT care with a clear diagnosis-first approach."
      image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=2000&q=80"
      badge="12+ Years Surgical Experience"
    />

    <section className="section-padding max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
        <div className="rounded-2xl overflow-hidden shadow-elevated">
          <img src={drImg} alt="Dr Manya ENT surgeon" loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div>
          <SectionHeading subtitle="Comprehensive ENT Care" title="Expert surgical solutions" description="With 12+ years of ENT and facial surgical experience, each case is assessed with a clear treatment roadmap." centered={false} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["Nose, sinus, ear, throat", "Pediatric ENT care", "Medical and surgical options", "Post-op follow-up protocols"].map((item) => (
              <div key={item} className="bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground/80">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {surgicalServices.map((cat) => (
        <div key={cat.cat} className="mb-12">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-gradient-gold inline-block" />
            {cat.cat}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cat.items.map((t) => (
              <div key={t.name} className="bg-card rounded-2xl p-5 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-0.5 border border-border/60">
                <h4 className="font-heading text-lg font-semibold text-foreground mb-2">{t.name}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>

    <section className="bg-secondary section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <SectionHeading subtitle="Authority & Trust" title="Recognized clinical expertise" description="Conference recognition and research-backed protocols support every treatment decision." centered={false} />
          <a href="https://wa.me/919827947023?text=Hi%2C%20I%20would%20like%20to%20book%20an%20ENT%20consultation" target="_blank" rel="noopener noreferrer" className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-gold inline-block">
            Book ENT Consultation
          </a>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-elevated">
          <img src={awardStageImg} alt="Award and conference recognition" loading="lazy" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>

    <section className="bg-foreground section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl font-semibold mb-4" style={{ color: 'hsl(40, 33%, 98%)' }}>Schedule Your ENT Consultation</h2>
        <p className="opacity-70 mb-8" style={{ color: 'hsl(40, 33%, 98%)' }}>Get expert diagnosis and treatment from one of Raipur's most experienced ENT surgeons.</p>
        <a href="https://wa.me/919827947023?text=Hi%2C%20I%20would%20like%20to%20book%20an%20ENT%20consultation" target="_blank" rel="noopener noreferrer" className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-gold inline-block">
          Book ENT Consultation
        </a>
      </div>
    </section>
  </Layout>
);

export default ENTServices;
