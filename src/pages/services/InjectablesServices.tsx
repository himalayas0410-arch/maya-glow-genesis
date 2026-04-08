import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import img from "@/assets/treatment-injectables.jpg";
import beforeAfterUnderEyeImg from "@/assets/before-after-under-eye.jpg";
import beforeAfterEyesImg from "@/assets/before-after-eyes.jpg";
import dimpleImg from "@/assets/dimple-creation.jpg";
import vampireImg from "@/assets/vampire-facial.jpg";

const treatments = [
  { name: "Botox", line: "Softens lines and controls excessive sweating", image: img },
  { name: "Dermal Fillers", line: "Adds volume and facial definition", image: beforeAfterUnderEyeImg },
  { name: "Thread Lift", line: "Non-surgical lift with collagen stimulation", image: dimpleImg },
  { name: "PRP Vampire Facial", line: "Regenerative glow and skin revival", image: vampireImg },
  { name: "HIFU", line: "Deep tightening without surgery", image: beforeAfterEyesImg },
  { name: "Lipolysis", line: "Targeted reduction for double chin", image: img },
];

const InjectablesServices = () => (
  <Layout>
    <PageHero
      title="Injectables & Anti-Aging"
      description="Subtle enhancement, facial harmony, and natural results with precision protocols."
      image="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2000&q=80"
      badge="Consultation-First Planning"
    />

    <section className="section-padding max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14">
        <div className="rounded-2xl overflow-hidden shadow-elevated">
          <img src={beforeAfterUnderEyeImg} alt="Under eye filler before after" loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div>
          <SectionHeading subtitle="Turn Back Time" title="Advanced anti-aging solutions" description="Designed for subtle refinement, symmetry, and long-lasting confidence." centered={false} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["Consultation-first planning", "Facial harmony approach", "Safe protocols", "Minimal downtime"].map((item) => (
              <div key={item} className="bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground/80">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {treatments.map((t) => (
          <div key={t.name} className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={t.image} alt={t.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-5">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{t.name}</h3>
              <p className="text-sm text-muted-foreground">{t.line}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-foreground section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl font-semibold mb-4" style={{ color: 'hsl(40, 33%, 98%)' }}>Book Your Anti-Aging Consultation</h2>
        <p className="opacity-70 mb-8" style={{ color: 'hsl(40, 33%, 98%)' }}>Discuss your goals with Dr. Manya and receive a personalized treatment plan.</p>
        <a href="https://wa.me/919827947023?text=Hi%2C%20I%20would%20like%20to%20book%20an%20anti-aging%20consultation" target="_blank" rel="noopener noreferrer" className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-gold inline-block">
          Book Consultation
        </a>
      </div>
    </section>
  </Layout>
);

export default InjectablesServices;
