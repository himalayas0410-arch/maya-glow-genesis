import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    slug: "summer-skincare-tips",
    title: "8 Summer Skincare Tips to Stay Safe in the Sun",
    excerpt: "From sunscreen essentials to hydration hacks, discover dermatologist-approved tips to protect your skin this summer. Learn why Botox might be your answer to excessive sweating.",
    date: "2025-06-15",
    category: "Skincare",
    content: `Summer brings its own set of skin challenges. Here are Dr. Manya Thakur's expert recommendations:\n\n**1. Carry Sunscreen SPF 40+ Always**\nReapply every 2-3 hours when outdoors. Choose waterproof formulas for outdoor activities.\n\n**2. Consider Botox for Excessive Sweating**\nIf you suffer from hyperhidrosis, Botox injections in underarms, feet, or face can provide 6 months of relief.\n\n**3. Apply Aloe Vera or Cucumber**\nAfter prolonged sun exposure, soothe skin with natural cooling agents.\n\n**4. Maintain Your Skincare Routine**\nConsistency prevents sunburn, heat stroke, heat rash, and acne breakouts.\n\n**5. Stay Hydrated**\nDrink lemon water, coconut water, buttermilk, and detox water with Vitamin C.\n\n**6. Wear Protective Clothing**\nHats, sunglasses, loose-fitting full sleeves, cloths, and scarves.\n\n**7. Use Lightweight Products**\nFor oily skin, switch to water-based or gel-based products.\n\n**8. Dry Skin? Use Ceramide Products**\nCeramide and peptide-containing creams with Hyaluronic Acid and waterproof SPF 40+ sunscreen.`,
  },
  {
    slug: "botox-for-sweating",
    title: "Botox: Not Just for Beauty — How It Treats Excessive Sweating",
    excerpt: "Hyperhidrosis affects millions. Discover how Botox injections can provide lasting relief from excessive sweating in underarms, feet, and face.",
    date: "2025-05-23",
    category: "Treatments",
    content: `Many people don't realize that Botox has powerful medical applications beyond cosmetic wrinkle reduction.\n\n**What is Hyperhidrosis?**\nExcessive sweating that goes beyond what's needed for temperature regulation. It can affect underarms, palms, feet, and face.\n\n**How Does Botox Help?**\nBotulinum toxin blocks the nerve signals that trigger sweat glands. The result? Dramatically reduced sweating in treated areas.\n\n**The Procedure**\n- 15-20 minutes\n- Minimal discomfort\n- Results in 3-7 days\n- Lasts 4-6 months\n\n**Who Is It For?**\nAnyone who experiences embarrassing sweat patches, constantly wet palms, or facial sweating that affects confidence.\n\nAt Maya Aesthetic Clinic, Dr. Manya Thakur performs precise Botox injections for both cosmetic and medical purposes.`,
  },
  {
    slug: "facial-aftercare",
    title: "Facial Aftercare: 7 Essential Instructions for Best Results",
    excerpt: "Just had a facial treatment? Follow these dermatologist-recommended aftercare steps to maximize your results and protect your skin.",
    date: "2025-05-15",
    category: "Aftercare",
    content: `Proper aftercare ensures your facial treatment delivers maximum results.\n\n**1. Wear Sunscreen (SPF 30+)**\nYour skin is more sensitive after a facial. Sun protection is non-negotiable.\n\n**2. Avoid Makeup for 24 Hours**\nLet your pores breathe and absorb the treatment benefits.\n\n**3. Drink Plenty of Water**\nHydration from within enhances the hydrating effects of your facial.\n\n**4. Use a Gentle Moisturizer**\nAvoid heavy or fragranced products for the first few days.\n\n**5. Avoid Hot Water on Your Face**\nFor 24-48 hours, use lukewarm water to cleanse.\n\n**6. Follow Your Aesthetician's Advice**\nEvery treatment has specific aftercare — follow it precisely.\n\n**7. Book Your Next Appointment**\nFor best results, facials should be done every 21 days.\n\nAt Maya Aesthetic Clinic, we provide detailed aftercare instructions specific to every treatment.`,
  },
  {
    slug: "acne-open-pores-treatment",
    title: "Acne & Open Pores: Medical Treatments That Actually Work",
    excerpt: "Tired of home remedies? Learn about medical-grade treatments like MNRF, Chemical Peels, and LED Therapy that deliver real results for acne and open pores.",
    date: "2025-04-20",
    category: "Skin Concerns",
    content: `Acne and open pores are among the most common skin concerns we treat at Maya Aesthetic Clinic.\n\n**Why Home Remedies Aren't Enough**\nWhile good skincare helps, stubborn acne and enlarged pores often need medical intervention.\n\n**Effective Treatments**\n\n**MNRF (Microneedling RF):** Combines microneedling with radiofrequency to remodel collagen deep within the skin. Excellent for acne scars and pore reduction.\n\n**Chemical Peels:** Medical-grade peels that accelerate cell turnover, unclog pores, and reduce active acne.\n\n**Celluma LED Therapy:** Blue light kills acne-causing bacteria, while red light reduces inflammation and promotes healing.\n\n**HydraFacial MD:** Deep extraction of impurities combined with hydration and antioxidant protection.\n\n**The Right Approach**\nDr. Manya creates personalized treatment plans combining multiple modalities for the best results.`,
  },
  {
    slug: "bridal-skincare-preparation",
    title: "The 40-Day Bridal Skincare Protocol: Your Pre-Wedding Glow Plan",
    excerpt: "Planning your wedding? Start your skin preparation 40 days before the big day with this comprehensive medical skincare protocol.",
    date: "2025-03-10",
    category: "Bridal",
    content: `Every bride deserves to glow on her wedding day. At Maya Aesthetic Clinic, we've perfected a 40-day protocol that ensures you look absolutely radiant.\n\n**The MAC Glow Protocol**\n\n**Week 1-2: Foundation**\n- Skin analysis and assessment\n- Cosmelan Peel for pigmentation correction\n- Customized homecare routine\n\n**Week 2-3: Treatment Phase**\n- HydraFacial MD for deep hydration\n- LED therapy for skin healing\n- Targeted treatments for specific concerns\n\n**Week 3-4: Enhancement**\n- Glutathione boosters for luminosity\n- PRP facial for natural glow\n- Dermal fillers if desired\n\n**Week 5-6: Final Glow**\n- Final medifacial\n- Skin polishing\n- Pre-event peel\n\n**Important:** Allow 15 days of downtime for some treatments. Start 40 days before your event.\n\nBook your bridal consultation today and let us create your personalized glow plan.`,
  },
];

const Blog = () => (
  <Layout>
    <section className="bg-secondary section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Expert Insights" title="The Maya Aesthetic Blog" description="Expert skincare tips, treatment guides, and wellness advice from Dr. Manya Thakur." />
      </div>
    </section>

    <section className="section-padding max-w-5xl mx-auto">
      <div className="space-y-8">
        {posts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="block bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-all group">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">{post.category}</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                {new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
            <h2 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
            <span className="text-primary text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
              Read More <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  </Layout>
);

export default Blog;

export { posts };
