"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { teamTranslations } from "@/translations/team";

export default function TeamPage() {
  const { t, language } = useLanguage();

  const currentTeam = (teamTranslations[language]['team.people'] as any) || {
    leadership: [],
    faculty: [],
    arts: [],
    admin: [],
  };

  const groups = [
    { title: t('team.groups.leadership'), members: currentTeam.leadership, grid: "lg:grid-cols-4" },
    { title: t('team.groups.faculty'), members: currentTeam.faculty, grid: "lg:grid-cols-4" },
    { title: t('team.groups.arts'), members: currentTeam.arts, grid: "lg:grid-cols-4" },
    { title: t('team.groups.admin'), members: currentTeam.admin, grid: "lg:grid-cols-4" },
  ];

  const headerImage = PlaceHolderImages.find(img => img.id === 'hero-2')?.imageUrl || "/people/Placeholder.jpg";

  return (
    <div className="pb-24">
      {/* Header Banner */}
      <section className="relative h-[160px] md:h-[220px] flex items-center justify-center overflow-hidden mb-12">
        <Image 
          src={headerImage}
          alt="Team Banner"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <ScrollReveal animation="fade-in">
            <h1 className="font-headline text-2xl md:text-4xl font-black mb-2 drop-shadow-lg">{t('team.title')}</h1>
            <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto font-medium drop-shadow-md">
              {t('team.subtitle')}
            </p>
          </ScrollReveal>
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
                  {group.members.length} {t('stats.teachers')}
                </div>
              </div>
            </ScrollReveal>

            <div className={`grid grid-cols-1 md:grid-cols-2 ${group.grid} gap-8`}>
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
                          <h3 className="font-headline text-xl font-bold text-foreground leading-tight break-words">{member.name}</h3>
                          <p className="text-primary font-bold text-[10px] uppercase tracking-widest mt-1 line-clamp-1">{member.role}</p>
                        </div>
                        <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2 italic">
                          "{member.bio}"
                        </p>
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
          <section className="relative rounded-[32px] overflow-hidden p-12 md:p-20 text-center shadow-2xl bg-foreground text-background">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] -ml-32 -mb-32"></div>
            
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

