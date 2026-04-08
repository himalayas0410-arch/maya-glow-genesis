interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  badge?: string;
}

const PageHero = ({ eyebrow = "Our Services", title, description, image, badge }: PageHeroProps) => (
  <section className="relative min-h-[56vh] flex items-center overflow-hidden">
    <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
    <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-16">
      <span className="text-sm tracking-[0.2em] uppercase font-semibold mb-3 block" style={{ color: "hsl(var(--gold-light))" }}>
        {eyebrow}
      </span>
      <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 max-w-3xl" style={{ color: "hsl(40, 33%, 98%)" }}>
        {title}
      </h1>
      <p className="max-w-2xl text-sm md:text-base opacity-90" style={{ color: "hsl(40, 33%, 98%)" }}>
        {description}
      </p>
      {badge && (
        <div className="mt-7 inline-flex items-center rounded-full border border-primary-foreground/20 px-4 py-2 text-xs md:text-sm" style={{ color: "hsl(40, 33%, 98%)" }}>
          {badge}
        </div>
      )}
    </div>
  </section>
);

export default PageHero;
