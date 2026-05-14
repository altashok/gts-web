"use client";

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

export default function BlinkingBanner() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(true);

  const messages = t('banner2.messages') as string[] | string;
  const safeMessages = Array.isArray(messages) && messages.length > 0 ? messages : [t('banner2.messages')];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % safeMessages.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [safeMessages.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + safeMessages.length) % safeMessages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % safeMessages.length);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-red-600 text-white py-1 border-b border-black/10 relative">
      <div className="flex items-center justify-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={goToPrevious}
          disabled={safeMessages.length <= 1}
          className="text-white hover:bg-white/20 p-1 h-6 w-6 mr-2"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <span className="text-lg font-black animate-pulse text-center flex-1">
          {safeMessages[currentIndex]}
        </span>

        <Button
          variant="ghost"
          size="sm"
          onClick={goToNext}
          disabled={safeMessages.length <= 1}
          className="text-white hover:bg-white/20 p-1 h-6 w-6 ml-2"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsVisible(false)}
          className="text-white hover:bg-white/20 p-1 h-6 w-6 ml-2"
          aria-label="Close banner"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}