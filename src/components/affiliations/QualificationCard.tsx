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
}: QualificationCardProps) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-primary/10 outline outline-1 outline-primary bg-card shadow-sm">
      <div className="bg-gradient-to-br from-primary/10 via-background to-background p-8 md:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex-1">
            <div className="inline-flex rounded-full border border-primary/20 bg-background/80 px-4 py-1.5 text-xs font-black uppercase tracking-[0.3em] text-primary">
              {tag}
            </div>
            <h3 className="mt-5 font-headline text-2xl md:text-3xl font-black text-foreground">{title}</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>

            <ul className="mt-6 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm md:text-base text-foreground/90">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button asChild className="bg-primary text-primary-foreground font-black px-6 py-5 hover:shadow-lg hover:shadow-primary/20">
                <Link href={ctaHref}>
                  {ctaLabel}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative h-32 w-32 rounded-2xl border border-primary/10 bg-white p-4 shadow-sm md:h-40 md:w-40">
              <Image
                src={logoSrc}
                alt={logoAlt}
                fill
                className="object-contain p-2"
                data-ai-hint="exam board logo"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary px-6 py-6 text-primary-foreground md:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-2xl bg-background/15 p-4 text-center backdrop-blur-sm">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-primary-foreground/80">{item.label}</p>
              <p className="mt-2 text-lg font-black">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
