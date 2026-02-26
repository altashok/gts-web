
"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Youtube } from 'lucide-react';

export default function YouTubeGallery() {
  const { t } = useLanguage();
  
  // Example video IDs from Global Tamil School context or generic educational ones
  const videoIds = [
    "dQw4w9WgXcQ", // Replace with real IDs as needed
    "V-qZ_y_8-pM",
    "fC6YVB_5q8c",
    "4A3fUj-H3mE",
    "XqZsoesa55w",
    "3tmd-ClpJKA",
    "_GuOjXYl5ew",
    "6L3ID8uT-64"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoIds.map((id, index) => (
            <ScrollReveal key={index} delay={index * 100} animation="scale-in">
              <div className="aspect-video w-full rounded-[1.5rem] overflow-hidden shadow-lg border border-primary/10 bg-muted group hover:shadow-2xl transition-all duration-300">
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
    </section>
  );
}
