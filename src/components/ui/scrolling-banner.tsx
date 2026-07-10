"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function ScrollingBanner() {
  const { t } = useLanguage();
  const text = t('banner.text');

  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden whitespace-nowrap border-b border-black/20">
      <div className="flex animate-marquee-mobile md:animate-marquee"
         style={{
          animationDuration: "10s", // Lower value = Faster
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}>
        <span className="text-sm font-black px-4">{text}</span>
        <span className="text-sm font-black px-4">{text}</span>
        <span className="text-sm font-black px-4">{text}</span>
        <span className="text-sm font-black px-4">{text}</span>
      </div>
    </div>
  );
}