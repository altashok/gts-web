"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Autoplay from "embla-carousel-autoplay";
import { cn } from '@/lib/utils';
import { Pause, Play } from 'lucide-react';

export default function HeroCarousel() {
  const heroImages = PlaceHolderImages.filter(img => img.id.startsWith('hero-'));
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const toggleAutoplay = useCallback(() => {
    const autoplay = api?.plugins()?.autoplay;
    if (!autoplay) return;

    if (autoplay.isPlaying()) {
      autoplay.stop();
      setIsPlaying(false);
    } else {
      autoplay.play();
      setIsPlaying(true);
    }
  }, [api]);

  return (
    <div className="relative w-full overflow-hidden">
      <Carousel 
        setApi={setApi}
        plugins={[autoplayPlugin.current]}
        opts={{ loop: true }} 
        className="w-full"
      >
        <CarouselContent>
          {heroImages.map((image) => {
            // Unique keys for each slide
            const welcomeKey = `hero.welcome.${image.id}`;
            const titleKey = `hero.title.${image.id}`;
            const descKey = `hero.desc.${image.id}`;
            const enrollKey = `hero.enroll.${image.id}`;
            const learnMoreKey = `hero.learnMore.${image.id}`;
            
            // Translations
            const welcomeText = t(welcomeKey);
            const slideTitle = t(titleKey);
            const slideDesc = t(descKey);
            const enrollText = t(enrollKey);
            const learnMoreText = t(learnMoreKey);
            const hasText = (text: string, key: string) => text !== key && text.trim().length > 0;
            
            // Checks
            const hasWelcomeSpecific = welcomeText !== welcomeKey;
            const hasTitleSpecific = slideTitle !== titleKey;
            const hasDescSpecific = slideDesc !== descKey;
            const hasEnrollSpecific = hasText(enrollText, enrollKey);
            const hasLearnMoreSpecific = hasText(learnMoreText, learnMoreKey);

            return (
              <CarouselItem key={image.id}>
                <div className="relative h-[500px] md:h-[750px] w-full">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover brightness-[0.65]"
                    priority
                    data-ai-hint={image.imageHint}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="max-w-4xl px-4 text-center text-white">
                      {/* Optional Welcome Tag */}
                      <div className="inline-block px-6 py-2 bg-primary text-primary-foreground font-black rounded-full text-[10px] md:text-xs uppercase tracking-[0.3em] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        {hasWelcomeSpecific ? welcomeText : t('hero.welcome')}
                      </div>

                      {/* Title */}
                      <h1 className="font-headline text-2xl md:text-5xl font-black mb-6 drop-shadow-2xl leading-[1.1] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                        {hasTitleSpecific ? (
                          slideTitle
                        ) : (
                          <>
                            {t('hero.title')}<span className="text-primary drop-shadow-[0_0_15px_rgba(255,191,0,0.4)]">{t('hero.titleAccent')}</span>
                          </>
                        )}
                      </h1>

                      {/* Description */}
                      <p className="text-sm md:text-xl font-bold mb-10 max-w-2xl mx-auto drop-shadow-lg opacity-90 leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
                        {hasDescSpecific ? slideDesc : t('hero.description')}
                      </p>

                      {/* Optional Buttons Container */}
                      {(hasEnrollSpecific || hasLearnMoreSpecific) && (
                        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
                          {/* Optional Enroll Button */}
                          {hasEnrollSpecific && (
                            <Button asChild size="lg" className="bg-primary text-primary-foreground font-black text-lg md:text-xl px-10 md:px-12 py-6 md:py-8 rounded-2xl shadow-[0_10px_40px_-10px_rgba(255,191,0,0.5)] hover:shadow-primary/40 hover:scale-105 transition-all w-full sm:w-auto">
                              <Link href="/enroll">{enrollText}</Link>
                            </Button>
                          )}

                          {/* Optional Learn More Button */}
                          {hasLearnMoreSpecific && (
                            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-md text-white border-2 border-white hover:bg-white hover:text-foreground font-black text-lg md:text-xl px-10 md:px-12 py-6 md:py-8 rounded-2xl transition-all w-full sm:w-auto">
                              <Link href="/about">{learnMoreText}</Link>
                            </Button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        
        <div className="hidden md:block">
          <CarouselPrevious className="left-12 h-14 w-14 bg-white/10 border-white/20 text-white hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" />
          <CarouselNext className="right-12 h-14 w-14 bg-white/10 border-white/20 text-white hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" />
        </div>

        <div className="absolute bottom-12 left-0 right-0 flex justify-center items-center gap-3 z-20">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                i === current 
                  ? "bg-primary w-8" 
                  : "bg-white/40 w-2.5 hover:bg-white/70"
              )}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
          
          <Button 
            variant="outline" 
            size="icon" 
            onClick={toggleAutoplay}
            className="ml-4 rounded-full bg-white/10 border-white/20 text-white hover:bg-primary hover:text-primary-foreground transition-all h-8 w-8 md:h-10 md:w-10"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
        </div>
      </Carousel>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </div>
  );
}
