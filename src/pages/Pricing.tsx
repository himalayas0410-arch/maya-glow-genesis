import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Gift, Clock, Sparkles } from "lucide-react";

const consultations = [
  { name: "General Consultation", price: "₹1,000" },
  { name: "Skin Analysis", price: "₹499" },
];

const facials = [
  { name: "MediFacial Classic", price: "₹1,999" },
  { name: "Monthly Facial", price: "₹2,500" },
  { name: "Pack of 10 Facials", price: "₹25,000", original: "₹40,000" },
];

const hairDrips = [
  { name: "Hair Growth IV Drip", price: "₹4,999" },
  { name: "Hair Growth Drip + LED", price: "₹6,499" },
  { name: "GFC PRP + Drip + LED Mega Combo", price: "₹9,999" },
];

const ivTherapy = [
  { name: "IV Drip Therapy (customized)", price: "From ₹3,499" },
];

const giftVouchers = [
  { pay: "₹4,000", get: "₹5,000" },
  { pay: "₹14,999", get: "₹20,000" },
];

const Pricing = () => (
  <Layout>
    <section className="bg-secondary section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Transparent Pricing" title="Investment in Your Confidence" description="All prices are indicative. Final treatment plans and costs are determined after a personalized consultation with Dr. Manya." />
      </div>
    </section>

    <section className="section-padding max-w-5xl mx-auto">
      {/* Consultations */}
      <div className="mb-12">
        <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">Consultations</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {consultations.map((c) => (
            <div key={c.name} className="bg-card rounded-xl p-5 shadow-card flex justify-between items-center">
              <span className="text-foreground/80">{c.name}</span>
              <span className="font-heading font-bold text-primary text-lg">{c.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Facials */}
      <div className="mb-12">
        <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">Facial Treatments</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {facials.map((f) => (
            <div key={f.name} className="bg-card rounded-xl p-5 shadow-card">
              <p className="text-foreground/80 mb-2">{f.name}</p>
              <div className="flex items-center gap-3">
                <span className="font-heading font-bold text-primary text-xl">{f.price}</span>
                {f.original && <span className="text-sm text-muted-foreground line-through">{f.original}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hair */}
      <div className="mb-12">
        <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">Hair Growth Packages</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {hairDrips.map((h) => (
            <div key={h.name} className="bg-card rounded-xl p-5 shadow-card">
              <p className="text-foreground/80 mb-2 text-sm">{h.name}</p>
              <span className="font-heading font-bold text-primary text-xl">{h.price}</span>
            </div>
          ))}
        </div>
      </div>

      {/* IV Therapy */}
      <div className="mb-12">
        <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">IV Therapy</h3>
        {ivTherapy.map((iv) => (
          <div key={iv.name} className="bg-card rounded-xl p-5 shadow-card flex justify-between items-center">
            <span className="text-foreground/80">{iv.name}</span>
            <span className="font-heading font-bold text-primary text-lg">{iv.price}</span>
          </div>
        ))}
      </div>

      {/* Gift Vouchers */}
      <div className="mb-12">
        <h3 className="font-heading text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
          <Gift className="w-6 h-6 text-primary" /> Gift Vouchers
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {giftVouchers.map((g) => (
            <div key={g.pay} className="bg-gradient-gold rounded-xl p-6 text-center shadow-gold">
              <p className="text-primary-foreground/80 text-sm mb-1">Pay</p>
              <p className="font-heading text-2xl font-bold text-primary-foreground mb-2">{g.pay}</p>
              <p className="text-primary-foreground/80 text-sm mb-1">Get Value</p>
              <p className="font-heading text-3xl font-bold text-primary-foreground">{g.get}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Happy Hours */}
      <div className="bg-secondary rounded-2xl p-8 text-center">
        <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">Happy Hours</h3>
        <p className="text-muted-foreground mb-2">11:00 AM – 3:00 PM Daily</p>
        <p className="text-sm text-muted-foreground">Enjoy special discounted rates during our happy hours. Ask about current offers!</p>
      </div>
    </section>

    <section className="bg-foreground section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <Sparkles className="w-8 h-8 mx-auto mb-4" style={{ color: 'hsl(var(--gold-light))' }} />
        <h2 className="font-heading text-3xl font-semibold mb-4" style={{ color: 'hsl(40, 33%, 98%)' }}>Custom Treatment Plans Available</h2>
        <p className="opacity-70 mb-8" style={{ color: 'hsl(40, 33%, 98%)' }}>Bridal packages, festive combos, and personalized treatment plans tailored to your needs and budget.</p>
        <a href="https://wa.me/919827947023?text=Hi%2C%20I%20would%20like%20to%20know%20about%20pricing%20and%20packages" target="_blank" rel="noopener noreferrer" className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-gold inline-block">
          Get Custom Quote
        </a>
      </div>
    </section>
  </Layout>
);

export default Pricing;
