import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import img from "@/assets/treatment-hair.jpg";

const treatments = [
  { name: "PRP Hair Therapy", desc: "Platelet-Rich Plasma from your own blood injected into the scalp to stimulate dormant hair follicles, increase density, and promote natural hair regrowth.", who: "Early-stage hair thinning, male & female pattern hair loss.", process: "45-60 minutes, 4-6 sessions recommended." },
  { name: "GFC (Growth Factor Concentrate)", desc: "Next-generation PRP alternative with concentrated growth factors for superior hair follicle stimulation and faster results.", who: "Moderate hair loss, thinning hair.", process: "30-45 minutes, minimal discomfort." },
  { name: "QR678 Injections", desc: "Patented, evidence-based injectable formula specifically designed for hair regrowth. Clinically proven to reduce hair fall and stimulate new growth.", who: "Androgenetic alopecia, diffuse hair loss.", process: "6-8 sessions over 6 months." },
  { name: "Hair Growth IV Drips", desc: "Dermalight Fusion infusions containing Biotin, Vitamin B-Complex, Vitamin C, Amino Acids, Collagen Boosters, and Zinc for systemic hair nourishment.", who: "Nutritional deficiency-related hair loss, overall hair health.", process: "60 minutes per session, starts at ₹4,999." },
  { name: "Hair Threads", desc: "A revolutionary non-surgical hair restoration technique. PDO threads placed in the scalp to stimulate blood flow and promote follicle regeneration.", who: "Non-surgical candidates, early to moderate hair loss.", process: "Painless procedure with minimal downtime." },
  { name: "Hair Transplant Surgery", desc: "Surgical hair restoration using the latest FUE/FUT techniques for permanent, natural-looking results in cases of significant hair loss.", who: "Significant baldness, receding hairline.", process: "Full-day procedure, results visible in 6-12 months." },
  { name: "Celluma LED for Scalp", desc: "LED light therapy to reduce scalp inflammation, stimulate follicle activity, and enhance the results of other hair treatments.", who: "Adjunct therapy for all hair restoration treatments.", process: "20-30 minutes, painless." },
];

const HairServices = () => (
  <Layout>
    <section className="relative h-[40vh] flex items-center">
      <img src={img} alt="Hair Restoration Treatments" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <span className="text-sm tracking-[0.2em] uppercase font-semibold mb-3 block" style={{ color: 'hsl(var(--gold-light))' }}>Our Services</span>
        <h1 className="font-heading text-4xl md:text-5xl font-semibold" style={{ color: 'hsl(40, 33%, 98%)' }}>Hair Restoration</h1>
      </div>
    </section>

    <section className="section-padding max-w-7xl mx-auto">
      <SectionHeading subtitle="Restore Your Confidence" title="Advanced Hair Treatments" description="From PRP and growth factor therapies to surgical transplants, we offer a full spectrum of hair restoration solutions backed by medical expertise." />
      <div className="space-y-6">
        {treatments.map((t) => (
          <div key={t.name} className="bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-shadow">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{t.name}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">{t.desc}</p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div><span className="text-primary font-medium">Ideal for: </span><span className="text-muted-foreground">{t.who}</span></div>
              <div><span className="text-primary font-medium">Process: </span><span className="text-muted-foreground">{t.process}</span></div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-secondary section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Hair Growth Drip Packages" subtitle="Special Pricing" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Hair Growth Drip", price: "₹4,999", desc: "Single IV drip session" },
            { name: "Drip + LED Therapy", price: "₹6,499", desc: "IV drip with Celluma LED" },
            { name: "Mega Combo", price: "₹9,999", desc: "GFC PRP + Drip + LED" },
          ].map((p) => (
            <div key={p.name} className="bg-card rounded-2xl p-6 shadow-card text-center">
              <h4 className="font-heading text-lg font-semibold text-foreground mb-2">{p.name}</h4>
              <p className="text-3xl font-heading font-bold text-primary mb-2">{p.price}</p>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-foreground section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl font-semibold mb-4" style={{ color: 'hsl(40, 33%, 98%)' }}>Start Your Hair Restoration Journey</h2>
        <p className="opacity-70 mb-8" style={{ color: 'hsl(40, 33%, 98%)' }}>A personalized scalp analysis will help us determine the best treatment plan for you.</p>
        <a href="https://wa.me/919827947023?text=Hi%2C%20I%20would%20like%20to%20book%20a%20hair%20consultation" target="_blank" rel="noopener noreferrer" className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-gold inline-block">
          Book Hair Consultation
        </a>
      </div>
    </section>
  </Layout>
);

export default HairServices;
