import { ReactNode } from "react";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  children?: ReactNode;
}

const SectionHeading = ({ subtitle, title, description, centered = true }: SectionHeadingProps) => (
  <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
    {subtitle && (
      <span className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3 block">
        {subtitle}
      </span>
    )}
    <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
      {title}
    </h2>
    <div className={centered ? "gold-line-center" : "gold-line"} />
    {description && (
      <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed mx-auto">
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
