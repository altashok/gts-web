
"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";

export default function AffiliationsPage() {
  const { t } = useLanguage();

  return (
    <div className="pb-24">
      {/* Header - Standardized to match Activities page */}
      <section className="bg-primary py-8 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid-tamil" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid-tamil)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal animation="fade-in">
            <h1 className="font-headline text-[29px] md:text-4xl font-black text-primary-foreground mb-2">{t('FREE Summer Classes 2026')}</h1>
            <p className="text-[21px] md:text-base text-primary-foreground/80 max-w-2xl mx-auto font-medium">{t('Edinburgh - Scotland')}</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Image src="/posters/free-summer-classes-scotland-2026.png" alt="Tamil Roadmap" width={612} height={100} className="mx-auto mb-8" />      
      </div>
      <ScrollReveal animation="fade-up" delay={600} className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6">
        <Button asChild size="lg" className="bg-white text-foreground font-black text-xl px-12 py-8 rounded-2xl shadow-2xl hover:scale-110 active:scale-95 transition-all hover:bg-white/90">
          <Link href="/enroll">{t('cta.enroll')}</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="border-4 border-white/40 text-primary-foreground bg-white/10 backdrop-blur-sm font-black text-xl px-12 py-8 rounded-2xl hover:bg-white hover:text-primary transition-all active:scale-95">
          <Link href="/contact">{t('cta.enquire')}</Link>
        </Button>
      </ScrollReveal>
    </div>
  );
}


