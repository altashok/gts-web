"use client";

import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, History, Target, Heart, Quote, Globe, BookOpen, Award, Star, Eye, MapPin, Calendar, Sparkles } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

export default function AboutPage() {
  const { t } = useLanguage();
  
  const values = [
    { title: t('about.values.heritage.title'), desc: t('about.values.heritage.desc'), icon: History },
    { title: t('about.values.excellence.title'), desc: t('about.values.excellence.desc'), icon: Target },
    { title: t('about.values.inclusion.title'), desc: t('about.values.inclusion.desc'), icon: Heart },
    { title: t('about.values.future.title'), desc: t('about.values.future.desc'), icon: GraduationCap },
  ];

  const reviews = [
    { name: t('reviews.1.name'), text: t('reviews.1.text'), rating: Number(t('reviews.1.rating')) || 5 },
    { name: t('reviews.2.name'), text: t('reviews.2.text'), rating: Number(t('reviews.2.rating')) || 5 },
    { name: t('reviews.3.name'), text: t('reviews.3.text'), rating: Number(t('reviews.3.rating')) || 5 },
    { name: t('reviews.4.name'), text: t('reviews.4.text'), rating: Number(t('reviews.4.rating')) || 5 },
    { name: t('reviews.5.name'), text: t('reviews.5.text'), rating: Number(t('reviews.5.rating')) || 5 }
  ];

  const founderImage = PlaceHolderImages.find(img => img.id === 'founder-image')?.imageUrl || "https://picsum.photos/seed/founder/800/1000";

  return (
    <div className="pb-24">
      {/* Header - Reduced Height */}
      <section className="bg-primary py-8 mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid-about" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid-about)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal animation="fade-in">
            <h1 className="font-headline text-[29px] md:text-4xl font-black text-primary-foreground mb-2">{t('about.story.title')}</h1>
            <p className="text-[21px] md:text-base text-primary-foreground/80 max-w-2xl mx-auto font-medium">{t('about.story.subtitle')}</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Founder's Message Section */}
        <section className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-white shadow-xl">
          <div className="absolute inset-x-0 top-0 h-2 bg-primary" />
          <div className="absolute right-0 top-0 h-64 w-64 bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-56 w-56 bg-secondary/15 blur-3xl" />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-5 sm:p-8 lg:p-10">
          <div className="lg:col-span-5 relative">
            <ScrollReveal animation="slide-in-left">
              <div className="relative overflow-hidden rounded-2xl bg-foreground p-2 shadow-2xl">
                <div className="relative aspect-[3/5] overflow-hidden rounded-xl">
                  <Image 
                    src={founderImage} 
                    alt={t('about.founder.name')} 
                    fill
                    className="object-cover"
                    data-ai-hint="founder London"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/90 via-foreground/35 to-transparent p-5 pt-24">
                    <div className="max-w-sm">
                      <h3 className="font-headline text-2xl font-black leading-tight text-white">{t('about.founder.name')}</h3>
                      <p className="mt-2 inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-black uppercase tracking-widest text-primary-foreground">
                        {t('about.founder.role')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  { icon: Calendar, label: "2020" },
                  { icon: MapPin, label: "London" },
                  { icon: Globe, label: "Global" }
                ].map((item) => (
                  <div key={item.label} className="flex min-h-20 flex-col items-center justify-center rounded-xl border border-primary/20 bg-primary/5 px-2 text-center">
                    <item.icon className="mb-2 h-5 w-5 text-primary" />
                    <span className="text-sm font-black text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
          
          <div className="lg:col-span-7">
            <ScrollReveal animation="slide-in-right">
              <div className="flex h-full flex-col justify-center rounded-2xl bg-background/80 p-6 sm:p-8 lg:p-10">
                <div className="mb-8 flex flex-wrap items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md">
                    <Quote className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground">
                      <Sparkles className="h-4 w-4 text-primary" />
                      Global Tamil School
                    </p>
                    <h2 className="font-headline text-3xl font-black tracking-tight text-foreground md:text-5xl">{t('about.message.title')}</h2>
                  </div>
                </div>
                
                <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  <p className="border-l-4 border-primary pl-5 text-xl font-black leading-relaxed text-foreground sm:text-2xl">
                    {t('about.message.p1')}
                  </p>
                  <p>{t('about.message.p2')}</p>
                  <p>{t('about.message.p3')}</p>
                </div>
                
                <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-headline text-2xl font-black italic text-secondary">
                      {t('about.message.closing')}
                    </p>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15">
                    <Heart className="h-7 w-7 fill-primary text-primary" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          </div>
        </section>

        {/* Pioneer and Global Reach Section */}
        <ScrollReveal animation="fade-up">
          <section className="bg-primary/5 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden border border-primary/20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
            <div className="relative z-10 space-y-16">
              <div className="text-center max-w-4xl mx-auto space-y-6">
                 <p className="font-back font-headline text-2xl md:text-4xl font-black text-secondary italic leading-snug">
                   {t('about.pioneer.quote')}
                 </p>
                 <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {[
                  { icon: Globe, title: t('about.pioneer.h1'), text: t('about.pioneer.p1') },
                  { icon: BookOpen, title: t('about.pioneer.h2'), text: t('about.pioneer.p2') },
                  { icon: Award, title: t('about.pioneer.h3'), text: t('about.pioneer.p3') }
                ].map((item, idx) => (
                  <ScrollReveal key={idx} delay={item.icon === Globe ? 0 : item.icon === BookOpen ? 150 : 300} animation="fade-up">
                    <div className="space-y-6">
                      <div className="bg-white p-4 rounded-2xl w-fit shadow-md">
                         <item.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-headline text-2xl font-black text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed font-medium">
                        {item.text}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Vision/Mission Banner */}
        <ScrollReveal animation="scale-in">
          <section className="bg-foreground text-background rounded-[3rem] overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="p-12 lg:p-20 space-y-6">
                <div className="flex items-center gap-4">
                  <Eye className="h-10 w-10 text-primary shrink-0" />
                  <h2 className="font-headline text-3xl md:text-4xl font-black text-primary">{t('about.vision.title')}</h2>
                </div>
                <p className="text-xl opacity-90 italic font-medium leading-relaxed">
                  {t('about.vision.text')}
                </p>
              </div>
              <div className="p-12 lg:p-20 bg-white/5 space-y-6">
                <div className="flex items-center gap-4">
                  <Target className="h-10 w-10 text-primary shrink-0" />
                  <h2 className="font-headline text-3xl md:text-4xl font-black text-primary">{t('about.mission.title')}</h2>
                </div>
                <p className="text-lg opacity-80 leading-relaxed font-medium">
                  {t('about.mission.text')}
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Our Values */}
        <section>
          <ScrollReveal animation="fade-up" className="text-center mb-16 space-y-4">
            <h2 className="font-headline text-3xl md:text-5xl font-black">{t('about.values.title')}</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto font-medium">{t('about.values.subtitle')}</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 100} animation="scale-in">
                <Card className="border-none bg-primary/5 hover:bg-primary/10 transition-all group p-4 rounded-[2rem] shadow-sm hover:shadow-lg h-full">
                  <CardContent className="pt-6 space-y-4 text-center">
                    <div className="bg-white p-5 rounded-2xl w-fit mx-auto shadow-md group-hover:scale-110 transition-transform">
                      <v.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-black text-xl text-foreground">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mb-16">
          <ScrollReveal animation="fade-up">
            <div className="mx-auto w-full max-w-[40rem] overflow-hidden rounded-[2rem] border border-primary/10 shadow-xl bg-white">
              <div className="relative aspect-[16/6] w-full overflow-hidden">
                <Image
                  src="/gallery/GTSBanner.png"
                  alt="GTS Banner"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </section>
        
        {/* Reviews Section */}
        <section className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-primary/10 px-4 py-14 shadow-inner sm:px-8 lg:px-12">
          <div className="absolute inset-x-0 top-0 h-2 bg-primary" />
          <div className="absolute -right-20 top-12 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

          <div className="relative">
            <ScrollReveal animation="fade-up" className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-primary/20 shadow-sm">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm font-black text-foreground">{t('reviews.rating')}</span>
                <span className="h-4 w-px bg-border"></span>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{t('reviews.total')}</span>
              </div>
              <h2 className="font-headline text-3xl md:text-5xl font-black">{t('reviews.title')}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto font-medium">{t('reviews.subtitle')}</p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="relative px-0 sm:px-12">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 4000,
                    }),
                  ]}
                  className="w-full max-w-5xl mx-auto"
                >
                  <CarouselContent>
                    {reviews.map((rev, i) => (
                      <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3 p-4">
                        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border relative h-full flex flex-col group hover:border-primary transition-colors">
                          <div className="flex items-center space-x-1 mb-6">
                            {[1, 2, 3, 4, 5].map(j => (
                              <Star key={j} className="h-5 w-5 fill-primary text-primary" />
                            ))}
                          </div>
                          <div className="mb-8 flex-grow max-h-36 overflow-y-auto pr-2">
                            <p className="text-muted-foreground leading-relaxed italic text-sm">
                              "{rev.text}"
                            </p>
                          </div>
                          <div className="flex items-center space-x-4 border-t pt-6 mt-auto">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-black text-primary text-sm shrink-0">
                              {rev.name.charAt(0)}
                            </div>
                            <div className="min-w-0">
                              <h4 className="font-black text-foreground text-sm truncate">{rev.name}</h4>
                              <p className="text-[8px] text-muted-foreground uppercase tracking-widest font-bold">Verified Reviewer</p>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="hidden md:block">
                    <CarouselPrevious className="-left-12 h-10 w-10" />
                    <CarouselNext className="-right-12 h-10 w-10" />
                  </div>
                </Carousel>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </div>
  );
}
