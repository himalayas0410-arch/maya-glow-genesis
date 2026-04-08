import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import img from "@/assets/treatment-injectables.jpg";

const treatments = [
  { name: "Botox (Neuromodulators)", desc: "Precisely administered botulinum toxin to smooth forehead lines, crow's feet, and frown lines. Also treats hyperhidrosis (excessive sweating) in underarms, feet, and face.", who: "Fine lines, wrinkles, or excessive sweating.", process: "15-20 minute procedure, results visible in 3-7 days, lasts 4-6 months." },
  { name: "Dermal Fillers", desc: "Hyaluronic acid-based fillers for lip augmentation, jawline contouring, chin sculpting, under-eye hollows, and facial volume restoration.", who: "Volume loss, thin lips, jawline definition, under-eye hollows.", process: "30-45 minutes, instant results, lasts 12-18 months." },
  { name: "Thread Lifts (South Korean)", desc: "Premium South Korean PDO threads for non-surgical face and neck lifting. Provides instant lift and stimulates collagen production over time.", who: "Sagging skin, jowls, undefined jawline (ages 30+).", process: "30-minute procedure, 24-48 hrs downtime, results last 2-2.5 years." },
  { name: "PRP Vampire Facial", desc: "Your own platelet-rich plasma micro-needled into the skin to stimulate collagen, reduce fine lines, and create a youthful glow.", who: "Fine lines, dull skin, acne scars, overall rejuvenation.", process: "60-minute procedure, mild redness for 24-48 hrs." },
  { name: "HIFU (Non-Surgical Facelift)", desc: "High-Intensity Focused Ultrasound for deep skin tightening and lifting without surgery. Effective for face, neck, and body.", who: "Skin laxity, post-weight loss, ages 30+.", process: "45-60 minutes, no downtime, progressive results over 3-6 months." },
  { name: "Injection Lipolysis", desc: "Targeted fat-dissolving injections for double chin reduction and localized fat deposits. Non-surgical body contouring.", who: "Double chin, localized fat deposits.", process: "15 minutes, no downtime, 3-4 sessions required." },
  { name: "Exosomes + PDRN", desc: "Cutting-edge regenerative treatment using exosomes and salmon DNA (PDRN) for deep tissue repair, anti-aging, and skin rejuvenation.", who: "Advanced anti-aging, skin repair, regeneration.", process: "45-60 minutes, minimal downtime." },
  { name: "Endospheres Lymphatic Drainage", desc: "Advanced lymphatic drainage therapy for detoxification, cellulite reduction, and body contouring.", who: "Cellulite, water retention, body detox.", process: "Multiple sessions recommended." },
];

const InjectablesServices = () => (
  <Layout>
    <section className="relative h-[40vh] flex items-center">
      <img src={img} alt="Injectables & Anti-Aging" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <span className="text-sm tracking-[0.2em] uppercase font-semibold mb-3 block" style={{ color: 'hsl(var(--gold-light))' }}>Our Services</span>
        <h1 className="font-heading text-4xl md:text-5xl font-semibold" style={{ color: 'hsl(40, 33%, 98%)' }}>Injectables & Anti-Aging</h1>
      </div>
    </section>

    <section className="section-padding max-w-7xl mx-auto">
      <SectionHeading subtitle="Turn Back Time" title="Advanced Anti-Aging Solutions" description="From subtle enhancements to transformative rejuvenation, our injectable treatments are performed with surgical precision by Dr. Manya Thakur." />
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
