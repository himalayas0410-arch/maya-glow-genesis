import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import facialImg from "@/assets/treatment-facial.jpg";
import hydraImg from "@/assets/treatment-facial.jpg";
import vampireImg from "@/assets/vampire-facial.jpg";
import fibroImg from "@/assets/fibroblasting.jpg";
import beforeAfterEyesImg from "@/assets/before-after-eyes.jpg";
import beforeAfterUnderEyeImg from "@/assets/before-after-under-eye.jpg";
import clinicReceptionImg from "@/assets/clinic-reception.jpg";

const featuredTreatments = [
  { name: "HydraFacial MD", benefit: "Deep cleanse + instant glow", image: hydraImg },
  { name: "Vampire Facial", benefit: "Collagen boost and rejuvenation", image: vampireImg },
  { name: "Fibroblasting", benefit: "Non-surgical tightening and resurfacing", image: fibroImg },
  { name: "Skin Boosters", benefit: "Hydration-focused anti-aging support", image: facialImg },
  { name: "Chemical Peels", benefit: "Pigmentation and texture correction", image: beforeAfterUnderEyeImg },
  { name: "MNRF", benefit: "Acne scar and pore refinement", image: beforeAfterEyesImg },
];

const SkinServices = () => (
  <Layout>
    <PageHero
      title="Skin & Aesthetic Treatments"
      description="Medical-grade skin care and rejuvenation plans focused on glow, texture, and confidence."
      image="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=2000&q=80"
      badge="Personalized Skin Analysis"
    />

    <section className="section-padding max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
        <div className="rounded-2xl overflow-hidden shadow-elevated">
          <img src={beforeAfterEyesImg} alt="Before and after skin treatment result" loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div>
          <SectionHeading
            subtitle="Medical-Grade Skincare"
            title="Transformation backed by science"
            description="Short, effective plans designed around your skin type and concerns."
            centered={false}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["Hydration and glow", "Texture and pore refinement", "Pigmentation correction", "Minimal downtime options"].map((item) => (
              <div key={item} className="bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground/80">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredTreatments.map((t) => (
          <div key={t.name} className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={t.image} alt={t.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-5">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{t.name}</h3>
              <p className="text-sm text-muted-foreground">{t.benefit}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-secondary section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <SectionHeading
            subtitle="Clinic Experience"
            title="Premium setting, precise care"
            description="Your sessions are delivered in a calm, sterile, and modern clinic environment."
            centered={false}
          />
          <a href="https://wa.me/919827947023?text=Hi%2C%20I%20want%20to%20book%20a%20skin%20consultation" target="_blank" rel="noopener noreferrer" className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-gold inline-block">
            Book Skin Consultation
          </a>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-elevated">
          <img src={clinicReceptionImg} alt="Maya clinic reception and consultation area" loading="lazy" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>

    <section className="bg-foreground section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl font-semibold mb-4" style={{ color: 'hsl(40, 33%, 98%)' }}>Find Your Perfect Skin Treatment</h2>
        <p className="opacity-70 mb-8" style={{ color: 'hsl(40, 33%, 98%)' }}>Book a skin analysis session (₹499) to get a personalized treatment plan.</p>
        <a href="https://wa.me/919827947023?text=Hi%2C%20I%20would%20like%20to%20book%20a%20skin%20analysis" target="_blank" rel="noopener noreferrer" className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-gold inline-block">
          Book Skin Analysis — ₹499
        </a>
      </div>
    </section>
  </Layout>
);

export default SkinServices;
