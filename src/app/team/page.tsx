
"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useLanguage } from "@/context/LanguageContext";

export default function TeamPage() {
  const { t } = useLanguage();

  const team = [
    {
      name: t('team.member1.name'),
      role: t('team.member1.role'),
      bio: t('team.member1.bio'),
      image: PlaceHolderImages.find(img => img.id === 'team-member-1')?.imageUrl || "https://picsum.photos/seed/leader1/400/400",
      hint: PlaceHolderImages.find(img => img.id === 'team-member-1')?.imageHint || "teacher portrait"
    },
    {
      name: t('team.member2.name'),
      role: t('team.member2.role'),
      bio: t('team.member2.bio'),
      image: PlaceHolderImages.find(img => img.id === 'team-member-2')?.imageUrl || "https://picsum.photos/seed/leader2/400/400",
      hint: PlaceHolderImages.find(img => img.id === 'team-member-2')?.imageHint || "professional man"
    },
    {
      name: t('team.member3.name'),
      role: t('team.member3.role'),
      bio: t('team.member3.bio'),
      image: PlaceHolderImages.find(img => img.id === 'team-member-3')?.imageUrl || "https://picsum.photos/seed/leader3/400/400",
      hint: PlaceHolderImages.find(img => img.id === 'team-member-3')?.imageHint || "female professional"
    }
  ];

  const headerImage = PlaceHolderImages.find(img => img.id === 'hero-2')?.imageUrl || "https://picsum.photos/seed/teambanner/1200/400";

  return (
    <div className="pb-24">
      {/* Enhanced Header with Background Image */}
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden mb-24">
        <Image 
          src={headerImage}
          alt="Team Banner"
          fill
          className="object-cover brightness-50"
          priority
          data-ai-hint="cultural performance"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="font-headline text-4xl md:text-6xl font-black mb-6 drop-shadow-lg">{t('team.title')}</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-medium drop-shadow-md">
            {t('team.subtitle')}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, i) => (
            <Card key={i} className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-300 bg-white">
              <CardHeader className="p-0">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={member.hint}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
              </CardHeader>
              <CardContent className="p-8 text-center space-y-4">
                <div>
                  <h3 className="font-headline text-2xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary font-bold text-xs uppercase tracking-widest mt-1">{member.role}</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 italic">
                  "{member.bio}"
                </p>
                <div className="flex justify-center space-x-4 pt-4">
                  <button className="bg-primary/10 p-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                    <Linkedin size={18} />
                  </button>
                  <button className="bg-primary/10 p-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                    <Mail size={18} />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Volunteers section */}
        <section className="mt-32 relative rounded-[32px] overflow-hidden p-12 md:p-20 text-center shadow-2xl bg-foreground text-background">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] -ml-32 -mb-32"></div>
          
          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <h2 className="font-headline text-3xl md:text-5xl font-bold">{t('team.volunteer.title')}</h2>
            <p className="text-lg opacity-80 leading-relaxed">
              {t('team.volunteer.desc')}
            </p>
            <div className="pt-4">
              <button className="bg-primary text-primary-foreground px-12 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-lg hover:shadow-primary/20">
                {t('team.volunteer.button')}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
