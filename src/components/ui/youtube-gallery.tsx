
"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Youtube } from 'lucide-react';

export default function YouTubeGallery() {
  const { t } = useLanguage();
  
  // Recent uploads from youtube.com/globaltamilschool
  const videoIds = [
    "kIUHG4JrhN0",
    "vphbXExDQLs",
    "dSrWyKPbpC4",
    "VvqKC6KPHw8",
    "l7wgt8yxj_U",
    "RelOYj_qVh8",
    "PL920zcQf2Q",
    "q7pAGeQjZoY",
    "9VtPAEsy5yI",
    "AEMOnhmgFFE",
    "6JXFDEumZfI",
    "UykYVxQmwFA",
    "-14wD0VsGzE",
    "0ol5ENtQOpw",
    "uexsWoEjC6c",
    "me4izHAxZ50",
    "w8IJ_dnoeaM",
    "FyKe1IYbDmk",
    "qekDsaEzjWA",
    "T98Tv-M_LgY"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up" className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20 shadow-sm">
            <Youtube className="h-4 w-4 text-[#FF0000]" />
            <span className="text-xs font-black uppercase tracking-widest text-primary">YouTube Gallery</span>
          </div>
          <h2 className="font-headline text-3xl md:text-5xl font-black">{t('activities.youtube.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-medium">{t('activities.youtube.subtitle')}</p>
        </ScrollReveal>

        <div className="h-[24rem] overflow-y-auto pr-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoIds.map((id, index) => (
              <ScrollReveal key={index} delay={index * 60} animation="scale-in">
                <div className="h-44 w-full rounded-[1.5rem] overflow-hidden shadow-lg border border-primary/10 bg-muted group hover:shadow-2xl transition-all duration-300">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${id}`}
                    title={`YouTube video player ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
