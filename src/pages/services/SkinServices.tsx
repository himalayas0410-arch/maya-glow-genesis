import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import facialImg from "@/assets/treatment-facial.jpg";

const treatments = [
  { name: "HydraFacial MD", desc: "Deep cleanse, exfoliate & hydrate in one luxurious session. Removes blackheads, reduces fine lines, and delivers instant glow with zero downtime.", who: "All skin types seeking radiant, hydrated skin." },
  { name: "OxyGeneo Facial", desc: "A 3-in-1 super facial that oxygenates, exfoliates, and infuses nutrients for a youthful glow.", who: "Dull, tired skin needing a boost." },
  { name: "Pollogen Super Facial", desc: "Advanced lifting and skin tightening using radiofrequency technology for firmer, smoother skin.", who: "Ages 30+ experiencing mild skin laxity." },
  { name: "Fire & Ice Facial", desc: "A 30-minute 'red carpet' treatment combining intensive resurfacing with deep hydration.", who: "Pre-event glow or monthly skin maintenance." },
  { name: "Dermaplaning", desc: "Gentle physical exfoliation that removes dead skin and peach fuzz, revealing a smoother, brighter complexion.", who: "Anyone wanting smoother skin texture." },
  { name: "Chemical Peels", desc: "Medical-grade peels targeting pigmentation, acne scars, melasma, and uneven skin tone for dramatic improvement.", who: "Pigmentation, acne scars, uneven skin tone." },
  { name: "Glutathione Injections", desc: "Powerful antioxidant therapy that brightens skin from within, detoxifies, and promotes a natural luminous glow.", who: "Those seeking overall skin brightening." },
  { name: "Mesotherapy", desc: "Micro-injections of vitamins, minerals & hyaluronic acid directly into the skin for deep nourishment.", who: "Dehydrated, aging, or dull skin." },
  { name: "Celluma LED Therapy", desc: "FDA-cleared LED light therapy that treats acne, reduces inflammation, and stimulates collagen production.", who: "Acne-prone skin, anti-aging, wound healing." },
  { name: "MyoLift Facial", desc: "Microcurrent technology that lifts, tones, and firms facial muscles — a non-invasive facelift alternative.", who: "Loss of facial definition and tone." },
  { name: "Fibroblasting", desc: "Scarless, bloodless removal of warts, skin tags, scars, and stretch marks using plasma technology.", who: "Warts, skin tags, age spots, stretch marks." },
  { name: "MNRF", desc: "Microneedling with radiofrequency for deep collagen remodeling. Treats acne scars, large pores, and fine lines.", who: "Stubborn acne scars, open pores, aging skin." },
  { name: "Laser Skin Rejuvenation", desc: "Advanced laser treatments for acne scar reduction, pigmentation, and overall skin renewal.", who: "Acne scars, pigmentation, sun damage." },
  { name: "Tattoo Removal", desc: "Safe and effective laser tattoo removal with minimal scarring and downtime.", who: "Anyone seeking tattoo removal." },
  { name: "Laser Hair Removal", desc: "Alma Soprano Platinum — virtually painless, gold-standard laser hair removal for all skin types.", who: "All skin types, all body areas." },
];

const SkinServices = () => (
  <Layout>
    <section className="relative h-[40vh] flex items-center">
      <img src={facialImg} alt="Skin & Aesthetic Treatments" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <span className="text-sm tracking-[0.2em] uppercase font-semibold mb-3 block" style={{ color: 'hsl(var(--gold-light))' }}>Our Services</span>
        <h1 className="font-heading text-4xl md:text-5xl font-semibold" style={{ color: 'hsl(40, 33%, 98%)' }}>Skin & Aesthetic Treatments</h1>
      </div>
    </section>

    <section className="section-padding max-w-7xl mx-auto">
      <SectionHeading subtitle="Medical-Grade Skincare" title="Transform Your Skin" description="From signature HydraFacials to advanced laser treatments, every procedure is performed under Dr. Manya's expert supervision using premium, internationally sourced technology." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {treatments.map((t) => (
          <div key={t.name} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow group">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{t.name}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.desc}</p>
            <p className="text-xs text-primary font-medium">Ideal for: {t.who}</p>
          </div>
        ))}
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
