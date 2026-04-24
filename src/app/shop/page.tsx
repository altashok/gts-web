
"use client";

import React from 'react';
import Script from 'next/script';
import { useLanguage } from '@/context/LanguageContext';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { ShoppingCart } from 'lucide-react';

export default function ShopPage() {
  const { t } = useLanguage();

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-primary py-12 mb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid-shop" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="black" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid-shop)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal animation="fade-in">
            <h1 className="font-headline text-[35px] md:text-5xl font-black text-primary-foreground mb-4">{t('nav.shop')}</h1>
            <p className="text-[23px] md:text-lg text-primary-foreground/80 max-w-2xl mx-auto font-medium">Explore our educational materials and resources.</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="scale-in">
          <div className="bg-white rounded-[3rem] p-12 md:p-24 shadow-2xl border flex flex-col items-center text-center space-y-8">
            <div className="bg-primary/10 p-6 rounded-full mb-4">
              <ShoppingCart className="h-16 w-16 text-primary" />
            </div>
            <h2 className="text-3xl font-black">Official School Store</h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              Securely purchase your course materials, textbooks, and school supplies through our official Stripe payment portal.
            </p>
            
            <div className="pt-8 w-full flex justify-center">
              {/* Stripe Buy Button Integration */}
              <Script 
                async
                src="https://js.stripe.com/v3/buy-button.js" 
              />
              
              {/* Using dangerouslySetInnerHTML to ensure the custom element is rendered exactly as provided */}
              <div 
                dangerouslySetInnerHTML={{
                  __html: `
                    <stripe-buy-button
                      buy-button-id="buy_btn_1T1WHxRuhBn5BSIy5dG2rOgL"
                      publishable-key="pk_live_51RrZVbRuhBn5BSIyjxEAF2NVScGNvkw1MBSKgKVttsHWGqGi3YLRdDUEItOKpUj8Un8PD7jF5Lgdv27NrPbySPD700CqyGP29K"
                    >
                    </stripe-buy-button>
                  `
                }}
              />
            </div>

            <div className="pt-16 border-t w-full opacity-60">
              <p className="text-xs uppercase tracking-widest font-black">Secure Payment Powered by Stripe</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
