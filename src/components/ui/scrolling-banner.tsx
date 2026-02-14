
"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function ScrollingBanner() {
  const { t } = useLanguage();
  const text = t('banner.text');

  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden whitespace-nowrap border-b border-black/10">
      <div className="flex animate-marquee">
        <span className="text-sm font-black px-4">{text}</span>
        <span className="text-sm font-black px-4">{text}</span>
        <span className="text-sm font-black px-4">{text}</span>
        <span className="text-sm font-black px-4">{text}</span>
      </div>
    </div>
  );
}
