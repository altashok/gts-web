
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const logoImage = PlaceHolderImages.find(img => img.id === 'school-logo')?.imageUrl || "/logo.png";

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.team'), href: '/team' },
    { name: t('nav.activities'), href: '/activities' },
    { name: t('nav.affiliations'), href: '/affiliations' },
    { name: t('nav.enrollment'), href: '/enroll' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  return (
    <>
      <div className="h-1.5 w-full bg-primary sticky top-0 z-[60]"></div>
      <nav className="bg-white/95 backdrop-blur-sm sticky top-1.5 z-50 border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="relative h-16 w-16 md:h-20 md:w-20 shrink-0 flex items-center justify-center p-1">
                  <Image 
                    src={logoImage} 
                    alt="Global Tamil School Logo" 
                    width={80}
                    height={80}
                    className="object-contain w-full h-full"
                    priority
                    data-ai-hint="school logo"
                  />
                </div>
                <div className={cn(
                  "hidden sm:block transition-all",
                  "min-w-[120px] md:min-w-[140px]"
                )}>
                  <span className={cn(
                    "font-headline font-black block leading-none text-foreground tracking-tight uppercase transition-all",
                    language === 'ta' ? "text-base md:text-lg" : "text-lg md:text-xl"
                  )}>
                    {t('nav.brand')}
                  </span>
                  <span className="text-[9px] md:text-[10px] font-bold text-primary uppercase tracking-[0.1em] mt-1 block">
                    {t('nav.tagline')}
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "font-bold text-muted-foreground hover:text-primary transition-colors whitespace-nowrap",
                    language === 'ta' ? 'text-[12px] tracking-tight' : 'text-[13px]'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="flex items-center border-l pl-2 lg:pl-4 space-x-1">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setLanguage(language === 'ta' ? 'en' : 'ta')}
                  className="font-bold flex items-center gap-1 px-2"
                >
                  <Globe className="h-3.5 w-3.5" />
                  <span className="text-[12px]">{language === 'ta' ? 'English' : 'தமிழ்'}</span>
                </Button>
                
                <Button asChild className="bg-primary text-primary-foreground font-black hover:shadow-lg transition-all h-9 px-4 text-xs">
                  <a href="https://portal.globaltamilschool.co.uk" target="_blank" rel="noopener noreferrer">
                    {t('nav.login')}
                  </a>
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
               <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setLanguage(language === 'ta' ? 'en' : 'ta')}
                  className="font-bold p-2"
                >
                  <Globe className="h-5 w-5" />
                  <span className="ml-1 text-xs">{language === 'ta' ? 'EN' : 'TA'}</span>
                </Button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background border-b animate-in slide-in-from-top-4 duration-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "block px-3 py-2 rounded-md font-bold text-foreground hover:bg-primary/10 hover:text-primary",
                    language === 'ta' ? 'text-sm' : 'text-base'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Button asChild className="w-full bg-primary text-primary-foreground font-black">
                  <a 
                    href="https://portal.globaltamilschool.co.uk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    {t('nav.login')}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
