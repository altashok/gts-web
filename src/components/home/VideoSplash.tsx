"use client";

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

const STORAGE_KEY = 'gts-video-splash-seen';
const VIDEO_URL = 'https://www.youtube.com/embed/uexsWoEjC6c?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&playsinline=1';

export default function VideoSplash() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const seen = window.sessionStorage.getItem(STORAGE_KEY);
    if (!seen) {
      setIsVisible(true);
      window.sessionStorage.setItem(STORAGE_KEY, 'true');
    }
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          aria-label="Close splash video"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative aspect-video w-full bg-black">
          <iframe
            className="h-full w-full"
            src={VIDEO_URL}
            title="Global Tamil School Promo Video"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 text-white text-center sm:px-8">
          <p className="text-sm sm:text-base font-medium">
            Promotional video plays automatically with audio muted.
          </p>
        </div>
      </div>
    </div>
  );
}
