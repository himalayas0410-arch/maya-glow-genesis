import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import img from "@/assets/treatment-ent.jpg";

const surgicalServices = [
  { cat: "Nose", items: [
    { name: "Rhinoplasty", desc: "Surgical reshaping of the nose for aesthetic enhancement or functional correction. Dr. Manya is a published researcher in advanced rhinoplasty techniques." },
    { name: "Non-Surgical Rhinoplasty", desc: "Liquid rhinoplasty using dermal fillers to reshape the nose without surgery — instant results with minimal downtime." },
    { name: "Septoplasty", desc: "Surgical correction of a deviated nasal septum to improve breathing and nasal function." },
  ]},
  { cat: "Sinus", items: [
    { name: "FESS (Functional Endoscopic Sinus Surgery)", desc: "Minimally invasive endoscopic surgery for chronic sinusitis, polyps, and sinus obstructions." },
    { name: "Balloon Sinuplasty", desc: "A gentle, minimally invasive procedure to open blocked sinuses using a small balloon catheter." },
    { name: "Polypectomy", desc: "Surgical removal of nasal polyps causing breathing difficulties and chronic congestion." },
    { name: "Turbinate Reduction", desc: "Reduces enlarged turbinates to improve nasal airflow and relieve chronic nasal obstruction." },
  ]},
  { cat: "Ear", items: [
    { name: "Tympanoplasty", desc: "Surgical repair of perforated eardrums to restore hearing and prevent infections." },
    { name: "Mastoidectomy", desc: "Removal of infected mastoid bone cells behind the ear to treat chronic ear infections." },
    { name: "Myringotomy", desc: "Small incision in the eardrum to drain fluid and relieve pressure, often with tube placement." },
    { name: "Stapedectomy", desc: "Microsurgery to treat otosclerosis and restore hearing by replacing the stapes bone." },
    { name: "Ear Lobe Repair", desc: "Repair of torn or stretched earlobes caused by heavy earrings or trauma." },
    { name: "Cannula Ear Piercing", desc: "Medical-grade, safe ear piercing using a cannula — reduces trauma, pain, and infection risk compared to piercing guns." },
  ]},
  { cat: "Throat", items: [
    { name: "Tonsillectomy", desc: "Surgical removal of tonsils for recurrent tonsillitis, sleep apnea, or breathing difficulties." },
    { name: "Adenoidectomy", desc: "Removal of enlarged adenoids, particularly in children, to improve breathing and reduce infections." },
  ]},
  { cat: "Pediatric ENT", items: [
    { name: "Pediatric ENT Care", desc: "Specialized diagnosis and treatment for children's ear, nose, and throat conditions including adenoid surgery, tonsil problems, and hearing issues." },
  ]},
];

const ENTServices = () => (
  <Layout>
    <section className="relative h-[40vh] flex items-center">
      <img src={img} alt="ENT & Surgical Services" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <span className="text-sm tracking-[0.2em] uppercase font-semibold mb-3 block" style={{ color: 'hsl(var(--gold-light))' }}>Our Services</span>
        <h1 className="font-heading text-4xl md:text-5xl font-semibold" style={{ color: 'hsl(40, 33%, 98%)' }}>ENT & Surgical Services</h1>
      </div>
    </section>

    <section className="section-padding max-w-7xl mx-auto">
      <SectionHeading subtitle="Comprehensive ENT Care" title="Expert Surgical Solutions" description="With an MS in ENT and over 12 years of surgical experience, Dr. Manya Thakur provides comprehensive ear, nose, and throat care from diagnosis to complex surgeries." />
      {surgicalServices.map((cat) => (
        <div key={cat.cat} className="mb-12">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <span className="w-8 h-0.5 bg-gradient-gold inline-block" />
            {cat.cat}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cat.items.map((t) => (
              <div key={t.name} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow">
                <h4 className="font-heading text-lg font-semibold text-foreground mb-3">{t.name}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
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
