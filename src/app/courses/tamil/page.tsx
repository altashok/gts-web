
"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { QualificationCard } from "@/components/affiliations/QualificationCard";

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
            <h1 className="font-headline text-[29px] md:text-4xl font-black text-primary-foreground mb-2">{t('title')}</h1>
            <p className="text-[21px] md:text-base text-primary-foreground/80 max-w-2xl mx-auto font-medium">{t('subtitle')}</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Image src="/content/tamil-learning-roadmap.png" alt="Tamil Roadmap" width={612} height={100} className="mx-auto mb-8" />
        <section className="mt-12 space-y-8 md:space-y-12">
          <ScrollReveal animation="fade-up">
            <QualificationCard
              tag={t('qualification.uk.tag')}
              title={t('qualification.uk.title')}
              description={t('qualification.uk.desc')}
              points={[
                t('qualification.uk.point1'),
                t('qualification.uk.point2'),
                t('qualification.uk.point3'),
                t('qualification.uk.point4'),
                t('qualification.uk.point5'),
              ]}
              ctaLabel={t('qualification.cta')}
              highlights={[
                { label: t('qualification.uk.highlight1.label'), value: t('qualification.uk.highlight1.value') },
                { label: t('qualification.uk.highlight2.label'), value: t('qualification.uk.highlight2.value') },
                { label: t('qualification.uk.highlight3.label'), value: t('qualification.uk.highlight3.value') },
              ]}
              logoSrc="/logo/bteb-logo.png"
              logoAlt="British Tamil Examination Board"
            />
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <QualificationCard
              tag={t('qualification.tag')}
              title={t('qualification.title')}
              description={t('qualification.desc')}
              points={[
                t('qualification.point1'),
                t('qualification.point2'),
                t('qualification.point3'),
                t('qualification.point4'),
              ]}
              ctaLabel={t('qualification.cta')}
              highlights={[
                { label: t('qualification.highlight1.label'), value: t('qualification.highlight1.value') },
                { label: t('qualification.highlight2.label'), value: t('qualification.highlight2.value') },
                { label: t('qualification.highlight3.label'), value: t('qualification.highlight3.value') },
              ]}
              logoSrc="/logo/cambridge-univ.png"
              logoAlt="University of Cambridge"
            />
          </ScrollReveal>
        </section>        
      </div>
    </div>
  );
}


