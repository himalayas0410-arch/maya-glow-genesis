import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import PageHero from "@/components/PageHero";
import img from "@/assets/treatment-hair.jpg";
import beforeAfterHairImg from "@/assets/treatment-hair.jpg";
import clinicProcedureRoomImg from "@/assets/clinic-procedure-room.jpg";
import laserOfferImg from "@/assets/laser-offer-poster.jpg";
import teamImg from "@/assets/team-group.jpg";

const treatments = [
  { name: "PRP Hair Therapy", line: "Stimulates follicles and improves density" },
  { name: "GFC Therapy", line: "Concentrated growth factors for stronger roots" },
  { name: "QR678", line: "Evidence-based injectable hair protocol" },
  { name: "Hair Threads", line: "Non-surgical scalp stimulation support" },
  { name: "Hair Growth IV Drips", line: "Nutritional infusion for scalp health" },
  { name: "Hair Transplant Guidance", line: "Planning and referral-ready roadmap" },
];

const HairServices = () => (
  <Layout>
    <PageHero
      title="Hair Restoration"
      description="Structured scalp and hair regrowth plans from early thinning to advanced restoration support."
      image="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=2000&q=80"
      badge="Male & Female Protocols"
    />

    <section className="section-padding max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
        <div className="rounded-2xl overflow-hidden shadow-elevated">
          <img src={beforeAfterHairImg} alt="Hair restoration before and after" loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div>
          <SectionHeading subtitle="Restore Your Confidence" title="Advanced hair solutions" description="A mix of regenerative therapies, medical protocols, and procedural support." centered={false} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {["Scalp analysis first", "Male & female protocols", "Session-based planning", "Progress tracking"].map((item) => (
              <div key={item} className="bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground/80">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {treatments.map((t) => (
          <div key={t.name} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow">
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{t.name}</h3>
            <p className="text-sm text-muted-foreground">{t.line}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-secondary section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <SectionHeading title="Hair Growth Drip Packages" subtitle="Special Pricing" centered={false} />
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
        <div className="grid grid-cols-2 gap-4">
          <img src={clinicProcedureRoomImg} alt="Clinic procedure room" loading="lazy" className="rounded-xl shadow-card w-full" />
          <img src={laserOfferImg} alt="Hair and laser offer visual" loading="lazy" className="rounded-xl shadow-card w-full" />
          <img src={teamImg} alt="Clinic team visual" loading="lazy" className="rounded-xl shadow-card w-full col-span-2" />
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
