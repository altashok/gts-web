
"use client";

import Image from "next/image";
import { Book, Music, Palette, Trophy, Users, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

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
    <div className="pb-24">
      {/* Header */}
      <section className="bg-primary py-24 mb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid-affil" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid-affil)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-headline text-4xl md:text-6xl font-black text-primary-foreground mb-6">{t('activities.title')}</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto font-medium">{t('activities.subtitle')}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {activities.map((act, i) => (
          <section key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
            <div className="flex-1 space-y-6">
              <div className="bg-primary/10 p-3 rounded-2xl w-fit">
                <act.icon className="h-8 w-8 text-primary" />
              </div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold">{act.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{act.desc}</p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 text-primary fill-primary" />
                  <span>{t('activities.feature.instructors')}</span>
                </li>
                <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 text-primary fill-primary" />
                  <span>{t('activities.feature.allages')}</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src={act.img} 
                alt={act.title} 
                fill 
                className="object-cover"
                data-ai-hint="student activity"
              />
            </div>
          </section>
        ))}

        {/* Highlights Banner */}
        <section className="bg-secondary rounded-3xl p-12 lg:p-20 text-secondary-foreground">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-headline text-4xl font-bold">{t('activities.events.title')}</h2>
              <p className="text-lg opacity-90">{t('activities.events.desc')}</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 px-4 py-2 rounded-full border border-white/20 text-sm font-bold">{t('activities.events.pongal')}</div>
                <div className="bg-white/10 px-4 py-2 rounded-full border border-white/20 text-sm font-bold">{t('activities.events.annual')}</div>
                <div className="bg-white/10 px-4 py-2 rounded-full border border-white/20 text-sm font-bold">{t('activities.events.poetry')}</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/10 p-6 rounded-2xl text-center">
                  <Trophy className="h-10 w-10 mx-auto mb-2" />
                  <p className="font-bold">{t('activities.highlights.awards')}</p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl text-center">
                   <Users className="h-10 w-10 mx-auto mb-2" />
                   <p className="font-bold">{t('activities.highlights.community')}</p>
                </div>
              </div>
              <div className="pt-8">
                <div className="bg-primary p-6 rounded-2xl text-center text-primary-foreground h-full flex flex-col justify-center">
                  <p className="text-3xl font-black">100%</p>
                  <p className="text-xs uppercase font-bold">{t('activities.highlights.engagement')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
