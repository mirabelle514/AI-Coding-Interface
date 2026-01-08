import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
  href: string;
  accent?: "primary" | "secondary";
}

export default function FeatureCard({
  title,
  description,
  icon,
  features,
  href,
  accent = "primary",
}: FeatureCardProps) {
  const accentColor = accent === "secondary" ? "hsl(var(--atelier-brand-secondary))" : "hsl(var(--atelier-brand-primary))";
  const accentBg = accent === "secondary" ? "hsl(var(--atelier-brand-secondary)) / 0.1" : "hsl(var(--atelier-brand-primary)) / 0.1";

  return (
    <Link
      to={href}
      className="group relative overflow-hidden rounded-md border border-atelier-border bg-atelier-surface p-6 hover:border-atelier-primary hover:bg-atelier-surface-elevated transition-all duration-300"
    >
      {/* Icon */}
      <div className="relative z-10 mb-4 inline-flex items-center justify-center w-12 h-12 rounded-md border border-atelier-border">
        <div style={{ color: accentColor }} className="w-6 h-6">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-lg font-semibold text-atelier-text mb-2">{title}</h3>
        <p className="text-sm text-atelier-text-muted mb-4 leading-relaxed">
          {description}
        </p>

        {/* Features list */}
        <ul className="space-y-1.5 mb-4">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="text-xs text-atelier-text-subtle flex items-start gap-2"
            >
              <span
                className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                style={{ backgroundColor: accentColor }}
              />
              {feature}
            </li>
          ))}
        </ul>

        {/* Learn more link */}
        <div className="flex items-center gap-2 text-atelier-primary font-semibold group-hover:gap-3 transition-all duration-300">
          <span className="text-xs">Learn more</span>
          <span>→</span>
        </div>
      </div>
    </Link>
  );
}
