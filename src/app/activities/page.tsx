
"use client";

import Image from "next/image";
import { Book, Music, Palette, Trophy, Users, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import FacebookFeed from "@/components/ui/facebook-feed";
import YouTubeGallery from "@/components/ui/youtube-gallery";

export default function ActivitiesPage() {
  const { t } = useLanguage();

  const activities = [
    {
      title: t('activities.lang.title'),
      icon: Book,
      desc: t('activities.lang.desc'),
      img: "https://picsum.photos/seed/act1/800/500"
    },
    {
      title: t('activities.arts.title'),
      icon: Palette,
      desc: t('activities.arts.desc'),
      img: "https://picsum.photos/seed/act2/800/500"
    },
    {
      title: t('activities.music.title'),
      icon: Music,
      desc: t('activities.music.desc'),
      img: "https://picsum.photos/seed/act3/800/500"
    }
  ];

  return (
    <div className="pb-0">
      {/* Header - Compact Height consistent with other subpages */}
      <section className="bg-primary py-8 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid-activities" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid-activities)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal animation="fade-in">
            <h1 className="font-headline text-2xl md:text-4xl font-black text-primary-foreground mb-2">{t('activities.title')}</h1>
            <p className="text-base text-primary-foreground/80 max-w-2xl mx-auto font-medium">{t('activities.subtitle')}</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mb-24">
        {activities.map((act, i) => (
          <ScrollReveal key={i} animation={i % 2 === 0 ? "slide-in-left" : "slide-in-right"}>
            <section className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
              <div className="flex-1 space-y-6">
                <div className="bg-primary/10 p-3 rounded-2xl w-fit">
                  <act.icon className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold">{act.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">{act.desc}</p>
                <ul className="space-y-3 pt-4">
                  <li className="flex items-center space-x-3 text-sm font-bold text-muted-foreground">
                    <Star className="h-5 w-5 text-primary fill-primary" />
                    <span>{t('activities.feature.instructors')}</span>
                  </li>
                  <li className="flex items-center space-x-3 text-sm font-bold text-muted-foreground">
                    <Star className="h-5 w-5 text-primary fill-primary" />
                    <span>{t('activities.feature.allages')}</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 relative aspect-[16/10] w-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image 
                  src={act.img} 
                  alt={act.title} 
                  fill 
                  className="object-cover"
                  data-ai-hint="student activity"
                />
              </div>
            </section>
          </ScrollReveal>
        ))}

        {/* Highlights Banner */}
        <ScrollReveal animation="scale-in">
          <section className="bg-foreground text-background rounded-[3rem] p-12 lg:p-20 overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
              <div className="space-y-8">
                <h2 className="font-headline text-4xl font-black text-primary">{t('activities.events.title')}</h2>
                <p className="text-lg opacity-80 leading-relaxed font-medium">{t('activities.events.desc')}</p>
                <div className="flex flex-wrap gap-4">
                  {[t('activities.events.pongal'), t('activities.events.annual'), t('activities.events.poetry')].map((tag, idx) => (
                    <ScrollReveal key={idx} delay={400 + (idx * 100)} animation="fade-in">
                      <div className="bg-white/10 px-6 py-2 rounded-full border border-white/20 text-xs font-black uppercase tracking-widest">{tag}</div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <ScrollReveal delay={200} animation="fade-up">
                    <div className="bg-white/5 p-8 rounded-[2rem] text-center border border-white/10 hover:bg-white/10 transition-colors group">
                      <Trophy className="h-10 w-10 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                      <p className="font-black text-xs uppercase tracking-widest">{t('activities.highlights.awards')}</p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={300} animation="fade-up">
                    <div className="bg-white/5 p-8 rounded-[2rem] text-center border border-white/10 hover:bg-white/10 transition-colors group">
                       <Users className="h-10 w-10 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                       <p className="font-black text-xs uppercase tracking-widest">{t('activities.highlights.community')}</p>
                    </div>
                  </ScrollReveal>
                </div>
                <div className="pt-10">
                  <ScrollReveal delay={400} animation="scale-in" className="h-full">
                    <div className="bg-primary p-8 rounded-[2rem] text-center text-primary-foreground h-full flex flex-col justify-center shadow-xl group hover:scale-105 transition-transform">
                      <p className="text-5xl font-black mb-2">100%</p>
                      <p className="text-[10px] uppercase font-black tracking-[0.2em]">{t('activities.highlights.engagement')}</p>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>

      {/* YouTube Gallery Section */}
      <YouTubeGallery />

      {/* Facebook Feed Section */}
      <FacebookFeed />
    </div>
  );
}
