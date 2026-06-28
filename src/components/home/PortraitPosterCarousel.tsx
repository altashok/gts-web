"use client";

import React from 'react';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { useLanguage } from '@/context/LanguageContext';

const postersImages = [
  '/posters/barathi-program23.jpg',
  '/posters/barathi-program24.jpg',
  '/posters/gts-award1.jpg',
  '/posters/Handwriting_Competition-10-10-2021.png',
  '/posters/kalari-classes.jpg',
  '/posters/my-ad24.jpg',
  '/posters/my-ad25.jpg',
  '/posters/online-speech-competition.jpg',
  '/posters/reading-competition.jpg',
  '/posters/scotland-ad24.jpg',
  '/posters/scotland-ad25.jpg',
  '/posters/story-telling-competition.jpg',
  '/posters/tholpavai-event.jpg',
  '/posters/tirukkural-classes.jpg',
  '/posters/tirukural-classes1.jpg',
  '/posters/tvu-collab.png',
  '/posters/uk-ad22.jpg',
  '/posters/uk-ad23.jpg',
  '/posters/uk-ad24.jpg',
  '/posters/uk-ad24.png',
];

export default function PortraitPosterCarousel() {
  const { t } = useLanguage();

  return (
    <section className="bg-primary max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal className="text-center space-y-4 mb-8">
        <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-black text-xs uppercase tracking-widest mb-2">
          {t('posterSection.tag')}
        </div>
        <h2 className="font-headline text-3xl md:text-5xl font-black">
          {t('posterSection.title')}
        </h2>
        <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        <p className="text-muted-foreground max-w-2xl mx-auto font-medium">
          {t('posterSection.desc')}
        </p>
      </ScrollReveal>

      <div className="overflow-hidden rounded-[2rem] border border-primary/10 bg-white/5 shadow-xl group">
        <div
          className="flex gap-2 py-6 px-6 min-w-max animate-marquee will-change-transform group-hover:[animation-play-state:paused]"
          style={{ touchAction: 'none', pointerEvents: 'none' }}
        >
          {postersImages.concat(postersImages).map((image, idx) => (
            <div
              key={idx}
              className="relative h-[24rem] w-56 sm:w-60 md:w-64 shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-muted"
            >
              <Image src={image} alt={`Event poster ${idx}`} fill className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
