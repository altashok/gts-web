
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, History, Target, Heart, Quote, Globe, BookOpen, Award } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function AboutPage() {
  const { t } = useLanguage();
  
  const values = [
    { title: "Heritage", desc: "Preserving ancient Tamil traditions in a modern world.", icon: History },
    { title: "Excellence", desc: "Striving for the highest standards in education.", icon: Target },
    { title: "Inclusion", desc: "Welcoming all who wish to learn Tamil culture.", icon: Heart },
    { title: "Future", desc: "Empowering the next generation of global citizens.", icon: GraduationCap },
  ];

  const founderImage = PlaceHolderImages.find(img => img.id === 'founder-image')?.imageUrl || "https://picsum.photos/seed/founder/800/1000";

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-primary py-24 mb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid-about" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid-about)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-headline text-4xl md:text-6xl font-black text-primary-foreground mb-6">{t('about.story.title')}</h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto font-medium">{t('about.story.subtitle')}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Founder's Message Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-2xl"></div>
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
              <Image 
                src={founderImage} 
                alt={t('about.founder.name')} 
                fill 
                className="object-cover"
                data-ai-hint="founder London"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border-l-4 border-primary max-w-[280px]">
              <h3 className="font-black text-lg leading-tight">{t('about.founder.name')}</h3>
              <p className="text-primary font-bold text-xs uppercase tracking-widest mt-1">{t('about.founder.role')}</p>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-8 pt-4">
            <div className="inline-flex items-center space-x-2 text-primary">
              <Quote className="h-8 w-8 fill-primary/10" />
              <h2 className="font-headline text-3xl md:text-4xl font-bold">{t('about.message.title')}</h2>
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="font-medium text-foreground">{t('about.message.p1')}</p>
              <p>{t('about.message.p2')}</p>
              <p>{t('about.message.p3')}</p>
              
              <div className="pt-8">
                <p className="font-headline text-2xl font-black text-primary italic">
                  {t('about.message.closing')}
                </p>
                <div className="mt-4 flex flex-col">
                  <span className="font-black text-foreground">{t('about.founder.name')}</span>
                  <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">{t('about.founder.role')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pioneer and Global Reach Section */}
        <section className="bg-primary/5 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden border border-primary/20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          <div className="relative z-10 space-y-16">
            <div className="text-center max-w-4xl mx-auto space-y-6">
               <p className="font-headline text-2xl md:text-4xl font-black text-primary italic leading-snug">
                 {t('about.pioneer.quote')}
               </p>
               <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-2xl w-fit shadow-md">
                   <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-headline text-2xl font-black text-foreground">Global Pioneer</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  {t('about.pioneer.p1')}
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-2xl w-fit shadow-md">
                   <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-headline text-2xl font-black text-foreground">Structured Excellence</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  {t('about.pioneer.p2')}
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-2xl w-fit shadow-md">
                   <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-headline text-2xl font-black text-foreground">Arts & Certification</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  {t('about.pioneer.p3')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision/Mission Banner */}
        <section className="bg-foreground text-background rounded-[3rem] overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="p-12 lg:p-20 space-y-6">
              <h2 className="font-headline text-3xl md:text-4xl font-black text-primary">{t('about.vision.title')}</h2>
              <p className="text-xl opacity-90 italic font-medium leading-relaxed">
                {t('about.vision.text')}
              </p>
            </div>
            <div className="p-12 lg:p-20 bg-white/5 space-y-6">
              <h2 className="font-headline text-3xl md:text-4xl font-black text-primary">{t('about.mission.title')}</h2>
              <p className="text-lg opacity-80 leading-relaxed font-medium">
                {t('about.mission.text')}
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="pt-16 pb-16">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline text-3xl md:text-5xl font-black">Our Core Values</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto font-medium">The principles that guide our school and empower our students every day.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <Card key={i} className="border-none bg-primary/5 hover:bg-primary/10 transition-all group p-4 rounded-[2rem] shadow-sm hover:shadow-lg">
                <CardContent className="pt-6 space-y-4 text-center">
                  <div className="bg-white p-5 rounded-2xl w-fit mx-auto shadow-md group-hover:scale-110 transition-transform">
                    <v.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-black text-xl text-foreground">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
