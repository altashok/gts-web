
"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { QualificationCard } from "@/components/affiliations/QualificationCard";

export default function AffiliationsPage() {
  const { t } = useLanguage();
  const syllabusCards = t('syllabus.cards');
  const cards = Array.isArray(syllabusCards) ? syllabusCards : [];
  const cardColorVariants = ["sky", "emerald", "amber", "rose"] as const;

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
            <h1 className="font-headline text-[29px] md:text-4xl font-black text-primary-foreground mb-2">{t('title')}</h1>
            <p className="text-[21px] md:text-base text-primary-foreground/80 max-w-2xl mx-auto font-medium">{t('subtitle')}</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Image src="/content/tamil-learning-roadmap.png" alt="Tamil Roadmap" width={786} height={100} className="mx-auto mb-8" />   
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mt-24 space-y-8">
            {(cards as Array<{
              tag: string;
              title: string;
              description: string;
              points: string[];
              ctaLabel: string;
              highlights: Array<{ label: string; value: string }>;
              logoSrc: string;
              logoAlt: string;
            }>).map((card, index) => (
              <ScrollReveal key={`${card.title}-${index}`} animation="fade-up">
                <QualificationCard
                  tag={card.tag}
                  title={card.title}
                  description={card.description}
                  points={card.points}
                  ctaLabel={card.ctaLabel}
                  highlights={card.highlights}
                  logoSrc={card.logoSrc}
                  logoAlt={card.logoAlt}
                  colorVariant={cardColorVariants[index % cardColorVariants.length]}
                />
              </ScrollReveal>
            ))}
          </section>
        </div>
    </div>
  );
}


