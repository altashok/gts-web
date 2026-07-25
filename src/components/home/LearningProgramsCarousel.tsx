"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

type Program = {
  id: string;
  image: string;
  category: string;
  title: string;
  link: string;
};

export default function LearningProgramsCarousel({ items }: { items?: Program[] }) {
  const { t } = useLanguage();
  const translated = (t('learningPrograms') as any) || null;

  const programs: Program[] = items || (Array.isArray(translated) ? translated : []);

  const autoplay = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <div className="py-8 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Carousel plugins={[autoplay.current]} opts={{ loop: true }} className="relative">
          <CarouselContent className="items-stretch pb-10">
            {programs.map((p: any) => (
              <CarouselItem key={p.id} className="md:basis-1/3 lg:basis-1/4">
                <div className="mx-2 rounded-2xl overflow-hidden border border-primary/10 bg-white shadow-xl hover:shadow-2xl transition-shadow">
                  <div className="relative h-60 md:h-60 lg:h-60 w-full">
                      <Image
                       src={p.image}
                       alt={String(p.title ?? '')?.replace(/\s+/g, ' ').trim()}
                       fill
                       className="object-cover"
                      />
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-bold text-orange-600 mb-2">{p.category}</div>
                    <h3 className="font-headline text-lg font-black text-foreground mb-4">{p.title}</h3>
                    <Link href={p.link} className="inline-flex items-center text-yellow-600  font-black">
                      {t('activities.readMore') || 'Read more'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="hidden md:block">
            <CarouselPrevious className="left-4 h-10 w-10 bg-white/90" />
            <CarouselNext className="right-4 h-10 w-10 bg-white/90" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
