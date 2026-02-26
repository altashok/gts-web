
"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Facebook } from 'lucide-react';

export default function FacebookFeed() {
  const { t } = useLanguage();
  const facebookUrl = "https://www.facebook.com/globaltamilschool";

  return (
    <section className="py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up" className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border shadow-sm">
            <Facebook className="h-4 w-4 text-[#1877F2] fill-[#1877F2]" />
            <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Facebook Feed</span>
          </div>
          <h2 className="font-headline text-3xl md:text-5xl font-black">{t('activities.facebook.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-medium">{t('activities.facebook.subtitle')}</p>
        </ScrollReveal>

        <ScrollReveal animation="scale-in" delay={200}>
          <div className="max-w-lg mx-auto relative bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border-4 border-white">
            <iframe 
              src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(facebookUrl)}&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`} 
              width="100%" 
              height="600" 
              style={{ border: 'none', overflow: 'hidden' }} 
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="Global Tamil School Facebook Page Feed"
              className="w-full min-h-[500px]"
            ></iframe>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
