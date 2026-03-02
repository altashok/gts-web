
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Footer() {
  const { t } = useLanguage();

  const logoImage = PlaceHolderImages.find(img => img.id === 'school-logo')?.imageUrl || "/logo.png";

  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-4">
              <div className="relative h-16 w-16 bg-white rounded-2xl p-2 shadow-inner flex items-center justify-center">
                <Image 
                  src={logoImage} 
                  alt="Global Tamil School Logo" 
                  width={60}
                  height={60}
                  className="object-contain"
                  data-ai-hint="school logo"
                />
              </div>
              <h3 className="font-headline text-2xl font-bold text-primary">{t('footer.brand')}</h3>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('footer.aboutDesc')}
            </p>
            <div className="flex space-x-4 pt-4">
              <a 
                href="https://www.facebook.com/globaltamilschool" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors p-2 bg-white/5 rounded-lg"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/globaltamilschool" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors p-2 bg-white/5 rounded-lg"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.youtube.com/globaltamilschool" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors p-2 bg-white/5 rounded-lg"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="https://x.com/GlobalTamilSchl" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors p-2 bg-white/5 rounded-lg"
                aria-label="Twitter (X)"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-muted w-fit pb-1">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm hover:text-primary transition-colors">{t('nav.about')}</Link></li>
              <li><Link href="/activities" className="text-sm hover:text-primary transition-colors">{t('nav.activities')}</Link></li>
              <li><Link href="/team" className="text-sm hover:text-primary transition-colors">{t('nav.team')}</Link></li>
              <li><Link href="/affiliations" className="text-sm hover:text-primary transition-colors">{t('nav.affiliations')}</Link></li>
              <li><Link href="/enroll" className="text-sm hover:text-primary transition-colors">{t('nav.enrollment')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-muted w-fit pb-1">{t('footer.importantLinks')}</h4>
            <ul className="space-y-3">
              <li><Link href="https://tamilarivu.org/" className="text-sm hover:text-primary transition-colors">{t('footer.tamilarivu')}</Link></li>
              <li><Link href="http://tamiltextbooks.com/book/St01-I-TM-1#" className="text-sm hover:text-primary transition-colors">{t('footer.tntextbooks')}</Link></li>
              <li><Link href="https://www.cambridgeinternational.org/" className="text-sm hover:text-primary transition-colors">{t('footer.cambridge')}</Link></li>
              <li><Link href="https://qualifications.pearson.com/" className="text-sm hover:text-primary transition-colors">{t('footer.edexcel')}</Link></li>
              <li><Link href="https://system.bteb.org.uk/" className="text-sm hover:text-primary transition-colors">{t('footer.bteb')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-muted w-fit pb-1">{t('footer.contactUs')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm">
                  12 Belmont Avenue<br />
                  New Malden<br />
                  London KT3 6QD, UK
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <div className="text-sm flex flex-col">
                  <span>+44 74597 13276</span>
                  <span>+44 7424 566744</span>
                  <span>+91 86829 01099</span>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm">globaltamilschool@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/CTA */}
          {/* <div>
            <h4 className="font-bold text-lg mb-6 border-b border-muted w-fit pb-1">{t('footer.newsletter')}</h4>
            <p className="text-sm text-muted-foreground mb-4">{t('footer.newsletterDesc')}</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder={t('footer.newsletterPlaceholder')} 
                className="bg-muted/10 border border-muted/20 px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-primary text-sm text-white"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md font-bold text-sm">{t('footer.newsletterJoin')}</button>
            </div>
          </div> */}
        </div>

        <div className="border-t border-muted/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {t('footer.brand')}. {t('footer.rights')}</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-primary">{t('footer.privacy')}</Link>
            <Link href="/terms" className="hover:text-primary">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
