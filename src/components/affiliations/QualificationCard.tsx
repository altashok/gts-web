import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QualificationHighlight {
  label: string;
  value: string;
}

interface QualificationCardProps {
  tag: string;
  title: string;
  description: string;
  points: string[];
  ctaLabel: string;
  ctaHref?: string;
  highlights: QualificationHighlight[];
  logoSrc?: string;
  logoAlt?: string;
  colorVariant?: "sky" | "emerald" | "amber" | "rose";
}

export function QualificationCard({
  tag,
  title,
  description,
  points,
  ctaLabel,
  ctaHref = "/enroll",
  highlights,
  logoSrc = "/logo/bteb-logo.png",
  logoAlt = "Qualification logo",
  colorVariant = "sky",
}: QualificationCardProps) {
  const variantStyles = {
    sky: {
      card: "border-sky-200 outline-sky-100",
      panel: "from-sky-50 via-background to-background",
      tag: "border-sky-200 bg-sky-50 text-sky-700",
      logo: "border-sky-100",
      icon: "text-sky-600",
      button: "bg-sky-600 text-white hover:bg-sky-700 hover:shadow-sky-100",
      highlight: "bg-sky-600 text-white",
    },
    emerald: {
      card: "border-emerald-200 outline-emerald-100",
      panel: "from-emerald-50 via-background to-background",
      tag: "border-emerald-200 bg-emerald-50 text-emerald-700",
      logo: "border-emerald-100",
      icon: "text-emerald-600",
      button: "bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-emerald-100",
      highlight: "bg-emerald-600 text-white",
    },
    amber: {
      card: "border-amber-200 outline-amber-100",
      panel: "from-amber-50 via-background to-background",
      tag: "border-amber-200 bg-amber-50 text-amber-700",
      logo: "border-amber-100",
      icon: "text-amber-600",
      button: "bg-amber-500 text-white hover:bg-amber-600 hover:shadow-amber-100",
      highlight: "bg-amber-500 text-white",
    },
    rose: {
      card: "border-rose-200 outline-rose-100",
      panel: "from-rose-50 via-background to-background",
      tag: "border-rose-200 bg-rose-50 text-rose-700",
      logo: "border-rose-100",
      icon: "text-rose-600",
      button: "bg-rose-600 text-white hover:bg-rose-700 hover:shadow-rose-100",
      highlight: "bg-rose-600 text-white",
    },
  }[colorVariant];

  return (
    <div className={`overflow-hidden rounded-[2rem] border outline outline-1 bg-card shadow-sm ${variantStyles.card}`}>
      <div className={`bg-gradient-to-br p-8 md:p-10 ${variantStyles.panel}`}>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1 min-w-0 lg:pr-8">
            
            <div className={`inline-flex rounded-full border px-4 py-1.5 text-xs font-black uppercase tracking-[0.3em] ${variantStyles.tag}`}>
              {tag}
            </div>
            <h3 className="mt-5 font-headline text-2xl md:text-3xl font-black text-foreground">{title}</h3>
            <div className="flex">
              <p className="mt-4 pr-2 text-base leading-relaxed text-muted-foreground">{description}</p>
              <div className={`flex-none relative h-32 w-32 rounded-2xl border bg-white shadow-sm md:h-40 md:w-40 ${variantStyles.logo}`}>
                <Image
                  src={logoSrc}
                  alt={logoAlt}
                  fill
                  className="object-contain p-2"
                  data-ai-hint="exam board logo"
                />
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm md:text-base text-foreground/90">
                  <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${variantStyles.icon}`} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button asChild className={`font-black px-6 py-5 hover:shadow-lg ${variantStyles.button}`}>
                <Link href={ctaHref}>
                  {ctaLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          
        </div>
      </div>

      <div className={`px-6 py-6 md:px-8 ${variantStyles.highlight}`}>
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-2xl bg-white/15 p-4 text-center backdrop-blur-sm">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-white/80">{item.label}</p>
              <p className="mt-2 text-lg font-black">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
