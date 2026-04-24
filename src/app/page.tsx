"use client";

import HeroCarousel from '@/components/home/HeroCarousel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Book, Globe, Users, Award, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollingBanner from '@/components/ui/scrolling-banner';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { CountUpText } from '@/components/ui/count-up';

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      title: t('feat.lang.title'),
      description: t('feat.lang.desc'),
      icon: Book,
    },
    {
      title: t('feat.culture.title'),
      description: t('feat.culture.desc'),
      icon: Globe,
    },
    {
      title: t('feat.community.title'),
      description: t('feat.community.desc'),
      icon: Users,
    },
  ];

  const statistics = [
    { label: t('stats.students'), value: "500+" },
    { label: t('stats.years'), value: "5+" },
    { label: t('stats.teachers'), value: "50+" },
    { label: t('stats.courses'), value: "30+" },
    { label: t('stats.countries'), value: "20+" },
  ];

  const galleryImages = [
    {
      id: 'gallery-4',
      imageUrl: '/gallery/Teaching_materials.jpg',
      description: 'Teaching materials and resources',
      imageHint: 'teaching materials',
    },
    {
      id: 'gallery-1',
      imageUrl: '/gallery/StudentsWork1.jpg',
      description: 'Students work display',
      imageHint: 'students artwork',
    },
    {
      id: 'gallery-2',
      imageUrl: '/gallery/StudentsWork2.jpg',
      description: 'Classroom student activities',
      imageHint: 'students activity',
    },
    {
      id: 'gallery-3',
      imageUrl: '/gallery/Students_writing.jpg',
      description: 'Students writing session',
      imageHint: 'students writing',
    },
  ];

  return (
    <div className="space-y-0 pb-24 overflow-x-hidden">
      {/* Scrolling Information Banner */}
      <ScrollingBanner />

      {/* Hero Section */}
      <HeroCarousel />

      <div className="space-y-32 mt-24">
        {/* Welcome Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal animation="slide-in-left" className="space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-black uppercase tracking-widest text-sm bg-primary/10 px-4 py-1.5 rounded-full">{t('welcome.tag')}</span>
                <h2 className="font-headline text-4xl md:text-5xl font-black leading-tight">
                  {t('welcome.title')}
                </h2>
                <div className="w-24 h-2 bg-primary rounded-full"></div>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                {t('welcome.description')}
              </p>
              
              <ul className="space-y-4">
                {[t('welcome.feat1'), t('welcome.feat2'), t('welcome.feat3')].map((text, i) => (
                  <ScrollReveal key={i} animation="fade-in" delay={300 + (i * 100)}>
                    <li className="flex items-center space-x-3 text-foreground font-bold">
                      <CheckCircle2 className="text-primary h-6 w-6" />
                      <span>{text}</span>
                    </li>
                  </ScrollReveal>
                ))}
              </ul>

              <div className="pt-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground font-black px-8 py-6 text-lg hover:shadow-xl hover:shadow-primary/20 transition-all hover:-translate-y-1">
                  <Link href="/about">{t('welcome.discover')}</Link>
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-in-right" delay={200} className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-3xl opacity-50"></div>
              <div className="relative bg-white border-2 border-primary/20 rounded-[2rem] p-8 lg:p-12 shadow-2xl space-y-8 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
                  {features.map((feature, idx) => (
                    <ScrollReveal key={idx} animation="fade-up" delay={400 + (idx * 150)}>
                      <div className="flex items-start space-x-5 group">
                        <div className="bg-primary p-4 rounded-2xl shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform shrink-0">
                          <feature.icon className="h-7 w-7 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-black text-2xl mb-1 text-foreground">{feature.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Stats Section with Theme Color */}
        <section className="bg-primary py-24 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
              {statistics.map((stat, idx) => (
                <ScrollReveal key={idx} animation="scale-in" delay={idx * 150}>
                  <div className="space-y-2 p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors group">
                    <div className="text-5xl md:text-6xl font-black text-primary-foreground font-headline drop-shadow-md group-hover:scale-110 transition-transform duration-500">
                      <CountUpText text={stat.value} durationMs={5000} delayMs={250} respectReducedMotion={false} />
                    </div>
                    <div className="text-lg uppercase tracking-[0.3em] font-black text-primary-foreground/90">{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-black text-xs uppercase tracking-widest mb-2">{t('gallery.tag')}</div>
            <h2 className="font-headline text-3xl md:text-5xl font-black">{t('gallery.title')}</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto font-medium">{t('gallery.desc')}</p>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, idx) => (
              <ScrollReveal 
                key={image.id} 
                animation="scale-in" 
                delay={idx * 100}
                className={`relative overflow-hidden rounded-3xl group border-4 border-transparent hover:border-primary transition-all duration-500 ${idx === 0 ? 'col-span-2 row-span-2' : 'aspect-square shadow-lg'}`}
              >
                <Image 
                  src={image.imageUrl} 
                  alt={image.description}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-115"
                  data-ai-hint={image.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="text-white text-base font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{image.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Engaging Activities Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-black">{t('act.title')}</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto font-medium">{t('act.desc')}</p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t('act.art'), icon: Award, desc: t('act.artDesc') },
              { title: t('act.music'), icon: GraduationCap, desc: t('act.musicDesc') },
              { title: t('act.fest'), icon: Calendar, desc: t('act.festDesc') }
            ].map((item, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 200}>
                <div className="bg-card border-2 border-primary/10 p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:border-primary transition-all group relative h-full flex flex-col overflow-hidden hover:-translate-y-2">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <item.icon className="h-28 w-28 text-primary" />
                  </div>
                  <div className="bg-primary p-4 rounded-2xl w-fit mb-8 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <item.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground mb-10 leading-relaxed flex-grow">{item.desc}</p>
                  <Link href="/activities" className="text-primary font-black inline-flex items-center group-hover:translate-x-2 transition-transform mt-auto">
                    {t('act.readMore')} <span className="ml-2">→</span>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Enrollment CTA - Ultra Attractive Version */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal animation="scale-in">
            <div className="bg-primary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-[0_20px_60px_-15px_rgba(255,191,0,0.4)] group">
              {/* Animated Background Blobs */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-[100px] -mr-32 -mt-32 group-hover:scale-150 transition-transform duration-1000 ease-in-out"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-[100px] -ml-32 -mb-32 group-hover:scale-150 transition-transform duration-1000 ease-in-out"></div>
              
              {/* Floating Icons Background */}
              <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                 <div className="absolute top-10 left-10 rotate-12 animate-bounce" style={{ animationDuration: '5000ms' }}>
                    <Book className="w-24 h-24" />
                 </div>
                 <div className="absolute bottom-10 right-20 -rotate-12 animate-pulse">
                    <GraduationCap className="w-32 h-32" />
                 </div>
                 <div className="absolute top-1/2 left-1/4 -translate-y-1/2 opacity-50">
                    <Users className="w-20 h-20" />
                 </div>
              </div>

              <div className="relative z-10 space-y-10 max-w-3xl mx-auto">
                <ScrollReveal animation="fade-up" delay={200} className="space-y-4">
                  <h2 className="font-headline text-4xl md:text-7xl font-black text-primary-foreground leading-tight drop-shadow-sm">
                    {t('cta.title')}
                  </h2>
                  <div className="w-24 h-1.5 bg-white/50 mx-auto rounded-full"></div>
                </ScrollReveal>
                
                <ScrollReveal animation="fade-up" delay={400}>
                  <p className="text-lg md:text-2xl text-primary-foreground/90 font-medium leading-relaxed">
                    {t('cta.desc')}
                  </p>
                </ScrollReveal>
                
                <ScrollReveal animation="fade-up" delay={600} className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6">
                  <Button asChild size="lg" className="bg-white text-foreground font-black text-xl px-12 py-8 rounded-2xl shadow-2xl hover:scale-110 active:scale-95 transition-all hover:bg-white/90">
                    <Link href="/enroll">{t('cta.enroll')}</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-4 border-white/40 text-primary-foreground bg-white/10 backdrop-blur-sm font-black text-xl px-12 py-8 rounded-2xl hover:bg-white hover:text-primary transition-all active:scale-95">
                    <Link href="/contact">{t('cta.enquire')}</Link>
                  </Button>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
