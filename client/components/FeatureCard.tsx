import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
  href: string;
  color: "voice" | "gesture" | "collab" | "overlay";
}

export default function FeatureCard({
  title,
  description,
  icon,
  features,
  href,
  color,
}: FeatureCardProps) {
  const colorMap = {
    voice: "hsl(280 95% 50%)",
    gesture: "hsl(180 100% 45%)",
    collab: "hsl(60 100% 50%)",
    overlay: "hsl(20 100% 55%)",
  };

  return (
    <Link
      to={href}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 hover:border-primary transition-all duration-300"
    >
      {/* Gradient background on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
        style={{ backgroundColor: colorMap[color] }}
      />

      {/* Icon */}
      <div className="relative z-10 mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10">
        <div style={{ color: colorMap[color] }} className="w-7 h-7">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features list */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="text-sm text-muted-foreground flex items-start gap-2"
            >
              <span
                className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                style={{ backgroundColor: colorMap[color] }}
              />
              {feature}
            </li>
          ))}
        </ul>

        {/* Learn more link */}
        <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300">
          <span>Learn more</span>
          <span>→</span>
        </div>
      </div>

      {/* Glow effect */}
      <div
        className="absolute -inset-1 opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"
        style={{ backgroundColor: colorMap[color] }}
      />
    </Link>
  );
}
