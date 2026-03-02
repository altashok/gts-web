
"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function AffiliationsPage() {
  const { t } = useLanguage();

  const partners = [
    {
      name: t('affil.partner1.name'),
      role: t('affil.partner1.role'),
      image: "/logo/bteb-logo.png",
      hint: "educational foundation logo",
      desc: t('affil.partner1.desc')
    },
    {
      name: t('affil.partner2.name'),
      role: t('affil.partner2.role'),
      image: "/logo/tvu.png",
      hint: "cultural council logo",
      desc: t('affil.partner2.desc')
    },
    {
      name: t('affil.partner3.name'),
      role: t('affil.partner3.role'),
      image: "/logo/tala-logo.jpg",
      hint: "language academy logo",
      desc: t('affil.partner3.desc')
    }
  ];

  return (
    <div className="pb-24">
      {/* Header - Standardized to match Activities page */}
      <section className="bg-primary py-8 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid-affil" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid-affil)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal animation="fade-in">
            <h1 className="font-headline text-2xl md:text-4xl font-black text-primary-foreground mb-2">{t('affil.title')}</h1>
            <p className="text-base text-primary-foreground/80 max-w-2xl mx-auto font-medium">{t('affil.subtitle')}</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {partners.map((p, i) => (
            <ScrollReveal key={i} delay={i * 200} animation="fade-up">
              <div className="bg-card border-2 border-primary/10 rounded-3xl p-8 hover:border-primary transition-colors flex flex-col h-full shadow-sm hover:shadow-xl group text-center items-center">
                <div className="relative h-32 w-32 mb-8 bg-white p-4 rounded-2xl shadow-sm border border-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Image 
                    src={p.image} 
                    alt={p.name} 
                    fill 
                    className="object-contain p-4"
                    data-ai-hint={p.hint}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                <p className="text-primary font-bold text-xs uppercase tracking-widest mb-4">{p.role}</p>
                <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                  {p.desc}
                </p>
                <Button variant="outline" className="w-full group">
                  {t('affil.visit')} <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Accreditation Section */}
        <section className="mt-32 border-t pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="slide-in-left">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl border bg-muted group">
                <Image 
                  src="https://picsum.photos/seed/affil1/800/450" 
                  alt="Accreditation Certificate" 
                  fill 
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  data-ai-hint="official document"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal animation="slide-in-right">
              <div className="space-y-6">
                <h2 className="font-headline text-3xl font-bold">{t('affil.acc.title')}</h2>
                <div className="w-16 h-1 bg-primary rounded-full"></div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('affil.acc.desc')}
                </p>
                <div className="flex items-center space-x-4 grayscale opacity-60">
                  <div className="h-12 w-24 bg-foreground/20 rounded-md"></div>
                  <div className="h-12 w-24 bg-foreground/20 rounded-md"></div>
                  <div className="h-12 w-24 bg-foreground/20 rounded-md"></div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </div>
  );
}
