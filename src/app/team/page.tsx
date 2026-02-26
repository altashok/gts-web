"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useLanguage } from "@/context/LanguageContext";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function TeamPage() {
  const { t, language } = useLanguage();

  const teamMembers = {
    ta: {
      leadership: [
        { name: "திருமதி. உமா அசோக் M.Sc., M.Ed.", role: "நிறுவனர் & முதல்வர்", bio: "தமிழ்க் கல்வியில் 20 ஆண்டுகளுக்கு மேலான அனுபவம் கொண்டவர்.", image: 'founder-image', seed: 'uma' },
        { name: "திரு. சு. ரத்தினம்", role: "கல்வி இயக்குநர்", bio: "பாடத்திட்ட வடிவமைப்பு மற்றும் கல்வி மேலாண்மையில் நிபுணர்.", image: 'team-member-2', seed: 'ratnam' },
        { name: "திருமதி. ப. செல்வி", role: "கலாச்சார ஒருங்கிணைப்பாளர்", bio: "கலை மற்றும் கலாச்சார நிகழ்வுகளை முன்னின்று நடத்துபவர்.", image: 'team-member-3', seed: 'selvi' },
        { name: "திரு. கி. ராஜன்", role: "நிர்வாக அதிகாரி", bio: "பள்ளியின் அன்றாட செயல்பாடுகளை திறம்பட நிர்வகிப்பவர்.", image: 'team-member-4', seed: 'rajan' },
      ],
      faculty: [
        { name: "திரு. அருள் குமார்", role: "முதலாம் நிலை ஆசிரியர்", bio: "குழந்தைகளுக்கு தமிழை எளிமையாகக் கற்றுத்தருவதில் வல்லவர்.", seed: 'f1' },
        { name: "திருமதி. மீனா செல்வம்", role: "இரண்டாம் நிலை ஆசிரியர்", bio: "இலக்கணத்தை எளிய முறையில் கற்பிப்பதில் சிறந்தவர்.", seed: 'f2' },
        { name: "திருமதி. ராஜேஸ்வரி வி.", role: "மூன்றாம் நிலை ஆசிரியர்", bio: "கதைகள் வழியாகத் தமிழை ஆர்வத்துடன் கற்றுத்தருகிறார்.", seed: 'f3' },
        { name: "திரு. தியாகு எஸ்.", role: "நான்காம் நிலை ஆசிரியர்", bio: "தமிழ் இலக்கியம் மற்றும் கவிதைகளில் அதிக ஆர்வம் கொண்டவர்.", seed: 'f4' },
        { name: "திருமதி. கவிதா ஆர்.", role: "ஐந்தாம் நிலை ஆசிரியர்", bio: "மாணவர்களின் எழுத்துத் திறனை மேம்படுத்துவதில் கவனம் செலுத்துகிறார்.", seed: 'f5' },
        { name: "திரு. முரளி டி.", role: "ஆறாம் நிலை ஆசிரியர்", bio: "நவீன தொழில்நுட்பத்தைப் பயன்படுத்தித் தமிழ் கற்றுத்தருகிறார்.", seed: 'f6' },
        { name: "திருமதி. பிரியா ஜே.", role: "ஏழாம் நிலை ஆசிரியர்", bio: "பேச்சுப் போட்டிகளுக்கான சிறப்புப் பயிற்சி அளிக்கிறார்.", seed: 'f7' },
        { name: "திரு. ஆனந்த் பி.", role: "எட்டாம் நிலை ஆசிரியர்", bio: "தமிழ் வரலாறு மற்றும் பண்பாட்டைத் தெளிவுபடுத்துகிறார்.", seed: 'f8' },
        { name: "திருமதி. சத்யா எம்.", role: "மேம்பட்ட நிலை ஆசிரியர்", bio: "உயர்தரத் தமிழ் இலக்கியங்களை ஆழமாகப் பயிற்றுவிக்கிறார்.", seed: 'f9' },
        { name: "திரு. விக்ரம் கே.", role: "இலக்கண நிபுணர்", bio: "பிழையில்லாத் தமிழ் எழுத மாணவர்களை ஊக்குவிக்கிறார்.", seed: 'f10' },
        { name: "திருமதி. தீபா எல்.", role: "உரையாடல் பயிற்சி", bio: "மாணவர்களின் சரளமான பேச்சுத் திறனை வளர்க்கிறார்.", seed: 'f11' },
        { name: "திரு. கோபிநாத் எஸ்.", role: "இலக்கிய ஆசிரியர்", bio: "சங்க இலக்கியங்களின் சிறப்புகளை எளிமையாக விளக்குகிறார்.", seed: 'f12' },
      ],
      arts: [
        { name: "திரு. பரத்", role: "நடன ஆசிரியர்", bio: "பரதநாட்டியக் கலையை முறையாகப் பயிற்றுவிக்கிறார்.", seed: 'a1' },
        { name: "திருமதி. வாணி", role: "இசை ஆசிரியர்", bio: "கர்நாடக இசையின் அடிப்படைகளை அழகாகக் கற்றுத்தருகிறார்.", seed: 'a2' },
        { name: "திரு. ரவி", role: "மிருதங்க ஆசிரியர்", bio: "தாளக் கலைகளில் மாணவர்களுக்குப் பயிற்சி அளிக்கிறார்.", seed: 'a3' },
        { name: "செல்வி. இஷா", role: "ஓவிய ஆசிரியர்", bio: "தமிழ்ச் சூழல் சார்ந்த ஓவியக் கலைகளைக் கற்பிக்கிறார்.", seed: 'a4' },
      ],
      admin: [
        { name: "திருமதி. சாரா ஜே.", role: "சேர்க்கை அதிகாரி", bio: "புதிய மாணவர் சேர்க்கை மற்றும் விவரங்களை கையாள்பவர்.", seed: 'ad1' },
        { name: "திரு. ராபர்ட் எம்.", role: "தொழில்நுட்ப ஆதரவு", bio: "இணைய வழி கற்றல் கருவிகளைச் சீராகப் பராமரிப்பவர்.", seed: 'ad2' },
        { name: "திருமதி. லட்சுமி என்.", role: "பெற்றோர் தொடர்பு", bio: "பெற்றோர்களுக்கும் பள்ளிக்கும் இடையே பாலமாகச் செயல்படுபவர்.", seed: 'ad3' },
        { name: "திரு. டேவிட் டபிள்யூ.", role: "நிதி மேலாளர்", bio: "பள்ளியின் நிதி விவகாரங்களை நேர்மையாக நிர்வகிப்பவர்.", seed: 'ad4' },
      ]
    },
    en: {
      leadership: [
        { name: "Mrs. Uma Ashok M.Sc., M.Ed.", role: "Founder & Principal", bio: "Over 20 years of experience in Tamil education and school management.", image: 'founder-image', seed: 'uma' },
        { name: "Mr. S. Ratnam", role: "Academic Director", bio: "Expert in curriculum design and global educational standards.", image: 'team-member-2', seed: 'ratnam' },
        { name: "Mrs. P. Selvi", role: "Cultural Coordinator", bio: "Organizes and oversees all cultural festivals and art events.", image: 'team-member-3', seed: 'ratnam' },
        { name: "Mr. K. Rajan", role: "Administrative Officer", bio: "Ensures smooth day-to-day operations and institutional growth.", image: 'team-member-4', seed: 'rajan' },
      ],
      faculty: [
        { name: "Mr. Arul Kumar", role: "Grade 1 Teacher", bio: "Passionate about introducing children to their first Tamil words.", seed: 'f1' },
        { name: "Mrs. Meena Selvam", role: "Grade 2 Teacher", bio: "Focuses on building strong foundational grammar skills.", seed: 'f2' },
        { name: "Mrs. Rajeshwari V.", role: "Grade 3 Teacher", bio: "Engages students through interactive storytelling and games.", seed: 'f3' },
        { name: "Mr. Thiyagu S.", role: "Grade 4 Teacher", bio: "Specialist in Tamil poetry and creative writing.", seed: 'f4' },
        { name: "Mrs. Kavitha R.", role: "Grade 5 Teacher", bio: "Dedicated to enhancing students' reading comprehension.", seed: 'f5' },
        { name: "Mr. Murali D.", role: "Grade 6 Teacher", bio: "Integrates modern digital tools into Tamil language learning.", seed: 'f6' },
        { name: "Mrs. Priya J.", role: "Grade 7 Teacher", bio: "Mentors students for public speaking and debate competitions.", seed: 'f7' },
        { name: "Mr. Anand B.", role: "Grade 8 Teacher", bio: "Connects language learning with Tamil history and heritage.", seed: 'f8' },
        { name: "Mrs. Sathya M.", role: "Advanced Level Teacher", bio: "Prepares senior students for advanced literature and exams.", seed: 'f9' },
        { name: "Mr. Vikram K.", role: "Grammar Specialist", bio: "Expert in linguistic nuances and flawless written Tamil.", seed: 'f10' },
        { name: "Mrs. Deepa L.", role: "Conversational Coach", bio: "Helps students gain confidence in spoken Tamil.", seed: 'f11' },
        { name: "Mr. Gopinath S.", role: "Literature Instructor", bio: "Brings ancient Sangam literature to life for modern students.", seed: 'f12' },
      ],
      arts: [
        { name: "Mr. Bharath", role: "Dance Instructor", bio: "Teaching the grace and discipline of Bharatanatyam.", seed: 'a1' },
        { name: "Mrs. Vani", role: "Music Teacher", bio: "Instructing classical Carnatic vocal music and bhajans.", seed: 'a2' },
        { name: "Mr. Ravi", role: "Mridangam Artist", bio: "Specialist in percussion and traditional rhythm patterns.", seed: 'a3' },
        { name: "Ms. Isha", role: "Visual Arts Teacher", bio: "Focuses on folk arts and traditional Tamil painting styles.", seed: 'a4' },
      ],
      admin: [
        { name: "Mrs. Sarah J.", role: "Admissions Officer", bio: "Handles student inquiries and enrollment processes.", seed: 'ad1' },
        { name: "Mr. Robert M.", role: "IT Support Specialist", bio: "Maintains our secure virtual learning environments.", seed: 'ad2' },
        { name: "Mrs. Lakshmi N.", role: "Parent Relations", bio: "Facilitates communication between families and faculty.", seed: 'ad3' },
        { name: "Mr. David W.", role: "Finance Manager", bio: "Oversees financial planning and school accounts.", seed: 'ad4' },
      ]
    }
  };

  const currentTeam = teamMembers[language];

  const groups = [
    { title: t('team.groups.leadership'), members: currentTeam.leadership, grid: "lg:grid-cols-4" },
    { title: t('team.groups.faculty'), members: currentTeam.faculty, grid: "lg:grid-cols-4" },
    { title: t('team.groups.arts'), members: currentTeam.arts, grid: "lg:grid-cols-4" },
    { title: t('team.groups.admin'), members: currentTeam.admin, grid: "lg:grid-cols-4" },
  ];

  const headerImage = PlaceHolderImages.find(img => img.id === 'hero-2')?.imageUrl || "https://picsum.photos/seed/teambanner/1200/400";

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
                const imageUrl = member.image 
                  ? (PlaceHolderImages.find(img => img.id === member.image)?.imageUrl || `https://picsum.photos/seed/${member.seed}/400/400`)
                  : `https://picsum.photos/seed/${member.seed}/400/400`;

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
                          <h3 className="font-headline text-xl font-bold text-foreground line-clamp-1">{member.name}</h3>
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
