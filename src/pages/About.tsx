import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Award, BookOpen, GraduationCap, Mic, Shield, Stethoscope } from "lucide-react";
import drImg from "@/assets/dr-manya.jpg";
import mediaImg from "@/assets/dr-manya-media.jpg";

const qualifications = [
  "MBBS",
  "MS in ENT (Otorhinolaryngology) — SAIMS DAVV, 2014",
  "Fellow in Rhinoplasty & Facial Aesthetic Surgery",
  "Anti-Aging & Stem Cell Expert (Trained in South Korea)",
  "Associate Professor — Pt. JNM Medical College, Raipur",
  "CG Medical Council Reg. No. 3750",
];

const research = [
  "Septoplasty outcomes with and without spreader grafts",
  "Non-surgical nasal rejuvenation techniques",
  "Cervical schwannoma: minimally invasive transcervical approach",
  "Xerosis & keratosis pilaris treatment protocols",
  "Pediatric head-and-neck tumor patterns",
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-secondary section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3 block">About the Founder</span>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4">Dr. Manya Thakur</h1>
          <div className="gold-line mb-6" />
          <p className="text-primary font-medium mb-6">ENT Specialist · Facial Plastic Surgeon · Cosmetic Surgeon</p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            With over 12 years of clinical and surgical experience, Dr. Manya Thakur is one of Central India's most trusted names in facial aesthetics and ENT surgery. As an Associate Professor at Pt. Jawahar Lal Nehru Memorial Medical College, she combines academic rigor with hands-on surgical expertise.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Trained in South Korea in advanced anti-aging and stem cell techniques, Dr. Manya brings internationally acclaimed methods to Raipur. Her philosophy is simple yet powerful: enhance natural beauty through science, never compromise on safety.
          </p>
          <blockquote className="border-l-2 border-primary pl-4 italic text-foreground/70">
            "Aesthetic procedures are meant to enhance your natural features, not to make someone else happy."
          </blockquote>
        </div>
        <div className="flex justify-center">
          <img src={drImg} alt="Dr. Manya Thakur - ENT Specialist & Aesthetic Surgeon, Raipur" className="rounded-2xl shadow-elevated max-w-md w-full" />
        </div>
      </div>
    </section>

    {/* Qualifications */}
    <section className="section-padding max-w-7xl mx-auto">
      <SectionHeading subtitle="Credentials" title="Qualifications & Training" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {qualifications.map((q, i) => (
          <div key={i} className="flex items-start gap-4 bg-card rounded-xl p-6 shadow-card">
            <GraduationCap className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p className="text-foreground/80 text-sm">{q}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Awards */}
    <section className="bg-secondary section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Recognition" title="Awards & Achievements" />
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-card text-center">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Best Research Award</h3>
            <p className="text-muted-foreground text-sm">Mid Career Consultant Category — IAOHNS Conference</p>
          </div>
        </div>
      </div>
    </section>

    {/* Research */}
    <section className="section-padding max-w-7xl mx-auto">
      <SectionHeading subtitle="Published Research" title="Academic Contributions" description="Dr. Manya's commitment to advancing medical knowledge ensures her patients benefit from the latest evidence-based techniques." />
      <div className="space-y-4 max-w-3xl mx-auto">
        {research.map((r, i) => (
          <div key={i} className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-card">
            <BookOpen className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <p className="text-foreground/80 text-sm">{r}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Media */}
    <section className="bg-secondary section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="In the Media" title="Featured & Recognized" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          <img src={mediaImg} alt="Dr. Manya Thakur featured in newspaper" loading="lazy" className="rounded-2xl shadow-card w-full" />
          <div className="space-y-6">
            {[
              { icon: Mic, text: "LCAGT Podcast — discussing dimple creation, Botox & fillers" },
              { icon: Mic, text: "Tathastu Talks — the future of aesthetic care" },
              { icon: Stethoscope, text: "IAOHNS Conference speaker on non-surgical rhinoplasty" },
              { icon: Shield, text: "Featured in regional press on hearing health awareness" },
            ].map((m, i) => (
              <div key={i} className="flex items-start gap-4">
                <m.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-foreground/80 text-sm">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-foreground section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4" style={{ color: 'hsl(40, 33%, 98%)' }}>Consult with Dr. Manya Thakur</h2>
        <p className="opacity-70 mb-8" style={{ color: 'hsl(40, 33%, 98%)' }}>Experience the difference of research-driven, internationally trained aesthetic care.</p>
        <a href="https://wa.me/919827947023?text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Dr.%20Manya" target="_blank" rel="noopener noreferrer" className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-gold inline-block">
          Book Consultation
        </a>
      </div>
    </section>
  </Layout>
);

export default About;
