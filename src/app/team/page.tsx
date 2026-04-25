"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Linkedin, Mail, MapPin } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { teamTranslations } from "@/translations/team";

function BioWithTooltip({ bio }: { bio: string }) {
  const bioRef = useRef<HTMLParagraphElement>(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    const element = bioRef.current;
    if (!element) return;

    const checkTruncation = () => {
      setIsTruncated(element.scrollHeight > element.clientHeight + 1);
    };

    checkTruncation();

    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(checkTruncation);
      observer.observe(element);
    }

    window.addEventListener("resize", checkTruncation);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", checkTruncation);
    };
  }, [bio]);

  return (
    <p
      ref={bioRef}
      className="text-muted-foreground text-xs leading-relaxed line-clamp-3 italic"
      title={isTruncated ? bio : undefined}
    >
      "{bio}"
    </p>
  );
}

export default function TeamPage() {
  const { t, language } = useLanguage();

  const currentTeam = (teamTranslations[language]['team.people'] as any) || {
    group1: [],
    group2: [],
    group3: [],
    group4: [],
  };

  const groups = [
    { title: t('team.groups.group1'), members: currentTeam.group1, grid: "lg:grid-cols-4" },
    { title: t('team.groups.group2'), members: currentTeam.group2, grid: "lg:grid-cols-4" },
    { title: t('team.groups.group3'), members: currentTeam.group3, grid: "lg:grid-cols-4" },
    { title: t('team.groups.group4'), members: currentTeam.group4, grid: "lg:grid-cols-4" },
  ];

  const headerImage = PlaceHolderImages.find(img => img.id === 'hero-2')?.imageUrl || "/people/Placeholder.jpg";

  return (
    <div className="pb-24">
      {/* Header Banner */}
      <section className="relative h-[220px] md:h-[260px] flex items-center justify-center overflow-hidden mb-12">
        <Image 
          src={headerImage}
          alt="Team Banner"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-4">
          <div className="inline-block rounded-2xl bg-black/45 px-4 py-3 md:px-6 md:py-4 backdrop-blur-[1px]">
            <h1 className="font-headline text-[25px] sm:text-[29px] md:text-4xl font-black mb-2 drop-shadow-lg">{t('team.title')}</h1>
            <p className="text-[17px] sm:text-[19px] md:text-base text-white/95 max-w-2xl mx-auto font-medium drop-shadow-md">
              {t('team.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {groups.map((group, groupIdx) => (
          <section key={groupIdx} className="space-y-12">
            <ScrollReveal animation="slide-in-left">
              <div className="flex items-center gap-6">
                <h2 className="font-headline text-3xl md:text-4xl font-black text-foreground">{group.title}</h2>
                <div className="h-1 flex-grow bg-primary/20 rounded-full hidden md:block"></div>
                <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-black uppercase tracking-widest">
                  {group.members.length} {t('team.groups.label')}
                </div>
              </div>
            </ScrollReveal>

            <div className={`grid grid-cols-2 md:grid-cols-2 ${group.grid} gap-6 md:gap-8`}>
              {group.members.map((member: any, i: number) => {
                const imageUrl = member.photo
                  ? member.photo
                  : member.image 
                  ? (PlaceHolderImages.find(img => img.id === member.image)?.imageUrl || "/people/Placeholder.jpg")
                  : "/people/Placeholder.jpg";

                return (
                  <ScrollReveal key={i} delay={i * 50} animation="fade-up">
                    <Card className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white h-full border-t-4 border-transparent hover:border-primary">
                      <CardHeader className="p-0">
                        <div className="relative aspect-square w-full overflow-hidden bg-muted">
                          <Image 
                            src={imageUrl} 
                            alt={member.name} 
                            fill 
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6 text-center space-y-3">
                        <div>
                          <h3 className="font-headline text-[15px] md:text-xl font-bold text-foreground leading-tight break-words">{member.name}</h3>
                          <p className="inline-block bg-primary/15 text-foreground font-bold text-[10px] uppercase tracking-widest mt-2 px-3 py-1 rounded-full line-clamp-1">
                            {member.role}
                          </p>
                          {member.location && (
                            <p className="mt-2 flex w-full items-center justify-center gap-1.5 text-xs font-semibold text-muted-foreground">
                              <MapPin size={12} className="text-primary" aria-hidden="true" />
                              <span className="text-foreground">{member.location}</span>
                            </p>
                          )}
                        </div>
                        <BioWithTooltip bio={member.bio} />
                        <div className="flex justify-center space-x-3 pt-2">
                          <button className="bg-primary/5 p-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 text-muted-foreground">
                            <Linkedin size={14} />
                          </button>
                          <button className="bg-primary/5 p-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 text-muted-foreground">
                            <Mail size={14} />
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                );
              })}
            </div>
          </section>
        ))}

        {/* Volunteers section */}
        <ScrollReveal animation="scale-in" className="mt-32">
          <section className="relative rounded-[32px] overflow-hidden p-12 md:p-20 text-center shadow-2xl text-background border border-white/10 bg-gradient-to-br from-foreground via-foreground to-primary/25">
            <div className="absolute inset-0 opacity-15 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid-team-cta" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid-team-cta)" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,191,0,0.22),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.20),transparent_55%),radial-gradient(circle_at_50%_100%,rgba(34,197,94,0.18),transparent_60%)] pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('/logo.png')] bg-center bg-no-repeat bg-contain opacity-[0.04] mix-blend-soft-light pointer-events-none"></div>

            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/25 rounded-full blur-[110px] -mr-36 -mt-36"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-[110px] -ml-36 -mb-36"></div>
            <div className="absolute top-1/2 left-1/2 w-[28rem] h-[28rem] -translate-x-1/2 -translate-y-1/2 bg-white/5 rounded-full blur-[140px]"></div>
            
            <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
              <h2 className="font-headline text-3xl md:text-5xl font-bold">{t('team.volunteer.title')}</h2>
              <p className="text-lg opacity-80 leading-relaxed">
                {t('team.volunteer.desc')}
              </p>
              <div className="pt-4">
                <Link 
                  href="/contact"
                  className="inline-block bg-primary text-primary-foreground px-12 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-primary/20"
                >
                  {t('team.volunteer.button')}
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
