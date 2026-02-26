"use client";

import { useLanguage } from "@/context/LanguageContext";

const content = {
  ta: {
    title: "விதிமுறைகள் & நிபந்தனைகள்",
    updated: "கடைசியாக புதுப்பிக்கப்பட்டது: 26 பிப்ரவரி 2026",
    intro:
      "Global Tamil School இணையதளம் மற்றும் தொடர்புடைய சேவைகளை பயன்படுத்தும் போது கீழ்கண்ட விதிமுறைகள் பொருந்தும்.",
    sections: [
      {
        heading: "சேவை பயன்பாடு",
        text: "இணையதள உள்ளடக்கத்தை சட்டப்படி மற்றும் கல்வி நோக்கத்திற்கே பயன்படுத்த வேண்டும்.",
      },
      {
        heading: "சேர்க்கை & கட்டணம்",
        text: "சேர்க்கை, கட்டணம், வகுப்பு அட்டவணை உள்ளிட்ட தகவல்கள் காலக்காலமாக புதுப்பிக்கப்படலாம்.",
      },
      {
        heading: "அறிவுசார் சொத்து உரிமை",
        text: "பாடப்பொருள், வடிவமைப்பு, உள்ளடக்கம் போன்றவை Global Tamil School-இன் உரிமையில் இருக்கும்; அனுமதியின்றி நகலெடுக்கக் கூடாது.",
      },
      {
        heading: "பொறுப்பு வரம்பு",
        text: "தற்காலிக தொழில்நுட்ப தடைகள் அல்லது மூன்றாம் தரப்பு சேவை சிக்கல்களுக்கு முழுப் பொறுப்பு ஏற்க இயலாது.",
      },
      {
        heading: "விதிமுறை மாற்றங்கள்",
        text: "இந்த விதிமுறைகள் முன்னறிவிப்பின்றி மாற்றப்படலாம். சமீபத்திய பதிப்பு இந்தப் பக்கத்தில் வெளியிடப்படும்.",
      },
      {
        heading: "தொடர்பு",
        text: "விதிமுறைகள் தொடர்பான கேள்விகளுக்கு: globaltamilschool@gmail.com",
      },
    ],
  },
  en: {
    title: "Terms & Conditions",
    updated: "Last updated: February 26, 2026",
    intro:
      "The following terms apply when using the Global Tamil School website and related services.",
    sections: [
      {
        heading: "Use of Services",
        text: "You must use the website content lawfully and for educational purposes only.",
      },
      {
        heading: "Admissions & Fees",
        text: "Admissions, fee structures, and class schedules may be updated from time to time.",
      },
      {
        heading: "Intellectual Property",
        text: "Course materials, design, and website content belong to Global Tamil School and may not be copied without permission.",
      },
      {
        heading: "Limitation of Liability",
        text: "We are not fully liable for temporary technical interruptions or issues from third-party platforms.",
      },
      {
        heading: "Changes to Terms",
        text: "These terms may be updated without prior notice. The latest version will be posted on this page.",
      },
      {
        heading: "Contact",
        text: "For terms-related questions: globaltamilschool@gmail.com",
      },
    ],
  },
} as const;

export default function TermsPage() {
  const { language } = useLanguage();
  const c = content[language];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <div className="space-y-2">
        <h1 className="font-headline text-3xl md:text-5xl font-black">{c.title}</h1>
        <p className="text-sm text-muted-foreground">{c.updated}</p>
      </div>
      <p className="text-muted-foreground leading-relaxed">{c.intro}</p>
      <div className="space-y-6">
        {c.sections.map((section) => (
          <section key={section.heading} className="space-y-2">
            <h2 className="text-xl font-bold">{section.heading}</h2>
            <p className="text-muted-foreground leading-relaxed">{section.text}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
