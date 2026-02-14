
"use client";

import HeroCarousel from '@/components/home/HeroCarousel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Book, Globe, Users, Award, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/context/LanguageContext';
import ScrollingBanner from '@/components/ui/scrolling-banner';

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
    { label: t('stats.students'), value: "200+" },
    { label: t('stats.years'), value: "10+" },
    { label: t('stats.teachers'), value: "15+" },
    { label: t('stats.courses'), value: "8" },
  ];

  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  return (
    <div className="space-y-0 pb-24">
      {/* Scrolling Information Banner */}
      <ScrollingBanner />

      {/* Hero Section */}
      <HeroCarousel />

      <div className="space-y-24 mt-24">
        {/* Welcome Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
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
                  <li key={i} className="flex items-center space-x-3 text-foreground font-bold">
                    <CheckCircle2 className="text-primary h-6 w-6" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground font-black px-8 py-6 text-lg hover:shadow-xl hover:shadow-primary/20 transition-all">
                  <Link href="/about">{t('welcome.discover')}</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-2xl"></div>
              <div className="relative bg-white border-2 border-primary/20 rounded-[2rem] p-8 lg:p-12 shadow-2xl space-y-8">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-5 group">
                      <div className="bg-primary p-4 rounded-2xl shadow-md group-hover:scale-110 transition-transform shrink-0">
                        <feature.icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-black text-2xl mb-1 text-foreground">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </section>

        {/* Stats Section with Theme Color */}
        <section className="bg-primary py-20 relative overflow-hidden">
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {statistics.map((stat, idx) => (
                <div key={idx} className="space-y-2 p-6 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="text-5xl md:text-6xl font-black text-primary-foreground font-headline drop-shadow-sm">{stat.value}</div>
                  <div className="text-xs uppercase tracking-[0.3em] font-black text-primary-foreground/90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-black text-xs uppercase tracking-widest mb-2">{t('gallery.tag')}</div>
            <h2 className="font-headline text-3xl md:text-5xl font-black">{t('gallery.title')}</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto font-medium">{t('gallery.desc')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, idx) => (
              <div key={image.id} className={`relative overflow-hidden rounded-3xl group border-4 border-transparent hover:border-primary transition-all duration-300 ${idx === 0 ? 'col-span-2 row-span-2' : 'aspect-square shadow-lg'}`}>
                <Image 
                  src={image.imageUrl} 
                  alt={image.description}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint={image.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white text-sm font-bold">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Engaging Activities Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-headline text-3xl md:text-5xl font-black">{t('act.title')}</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto font-medium">{t('act.desc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: t('act.art'), icon: Award, desc: t('act.artDesc') },
              { title: t('act.music'), icon: GraduationCap, desc: t('act.musicDesc') },
              { title: t('act.fest'), icon: Calendar, desc: t('act.festDesc') }
            ].map((item, i) => (
              <div key={i} className="bg-card border-2 border-primary/10 p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-primary transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <item.icon className="h-24 w-24 text-primary" />
                </div>
                <div className="bg-primary p-4 rounded-2xl w-fit mb-6 shadow-md group-hover:scale-110 transition-transform">
                  <item.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-black mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">{item.desc}</p>
                <Link href="/activities" className="text-primary font-black inline-flex items-center group-hover:translate-x-2 transition-transform">
                  {t('act.readMore')} <span className="ml-2">→</span>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Enrollment CTA - Enhanced Color */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-12 md:p-24 text-center space-y-8 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
              <h2 className="font-headline text-4xl md:text-6xl font-black text-primary-foreground">{t('cta.title')}</h2>
              <p className="text-xl text-primary-foreground/90 font-medium leading-relaxed">
                {t('cta.desc')}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                <Button asChild size="lg" variant="secondary" className="bg-white text-foreground font-black text-xl px-12 py-8 rounded-2xl shadow-xl hover:scale-105 transition-transform">
                  <Link href="/enroll">{t('cta.enroll')}</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground bg-transparent font-black text-xl px-12 py-8 rounded-2xl hover:bg-white/10 transition-all">
                  <Link href="/contact">{t('cta.enquire')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
