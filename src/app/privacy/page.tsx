"use client";

import { useLanguage } from "@/context/LanguageContext";

const content = {
  ta: {
    title: "தனியுரிமைக் கொள்கை",
    updated: "கடைசியாக புதுப்பிக்கப்பட்டது: 26 பிப்ரவரி 2026",
    intro:
      "Global Tamil School ஒரு ஆன்லைன் தமிழ் பள்ளி. மாணவர்கள், பெற்றோர் மற்றும் பார்வையாளர்களின் தனியுரிமையை நாங்கள் மிகுந்த முக்கியத்துவத்துடன் கையாள்கிறோம். இந்தக் கொள்கை, எங்கள் இணையதளம், சேர்க்கைப் படிவங்கள், ஆன்லைன் வகுப்புகள் மற்றும் தொடர்புடைய டிஜிட்டல் சேவைகள் வழியாக சேகரிக்கப்படும் தரவை எவ்வாறு பயன்படுத்துகிறோம் என்பதை விளக்குகிறது.",
    sections: [
      {
        heading: "1. நாங்கள் சேகரிக்கும் தகவல்கள்",
        text: "நாங்கள் சேகரிக்கும் தகவல்களில்: மாணவர் மற்றும் பெற்றோர் பெயர், மின்னஞ்சல், தொலைபேசி எண், நாடு/நேர மண்டலம், சேர்க்கைத் தகவல்கள், கல்வி முன்னேற்றம், வருகைப் பதிவுகள் மற்றும் ஆதரவு தொடர்புகள் அடங்கும்.",
      },
      {
        heading: "2. ஆன்லைன் வகுப்புகள் மற்றும் பதிவுகள்",
        text: "லைவ் வகுப்புகள் போது கற்றல் தரத்தை மேம்படுத்த மற்றும் தவறவிட்ட பாடங்களை மீண்டும் பார்க்க உதவ சில அமர்வுகள் பதிவு செய்யப்படலாம். பதிவு செய்யப்பட்ட உள்ளடக்கம் கல்வி நோக்கத்திற்காக மட்டுமே பயன்படுத்தப்படும்.",
      },
      {
        heading: "3. தகவல் பயன்படுத்தப்படும் நோக்கங்கள்",
        text: "சேர்க்கை செயல்முறை, வகுப்பு ஒதுக்கீடு, பாடத்திட்ட தகவல் பகிர்வு, முன்னேற்ற கண்காணிப்பு, பெற்றோர் தொடர்பு, அட்டவணை/அறிவிப்புகள் அனுப்புதல் மற்றும் சேவை மேம்பாடு ஆகியவற்றிற்காக இந்தத் தரவை பயன்படுத்துகிறோம்.",
      },
      {
        heading: "4. சிறார் தரவு பாதுகாப்பு",
        text: "எங்கள் சேவைகள் பெரும்பாலும் சிறார்களை உள்ளடக்குவதால், பெற்றோர்/பாதுகாவலர் மூலம் வழங்கப்படும் தகவல்களுக்கு முன்னுரிமை அளிக்கிறோம். தேவையான இடங்களில் பெற்றோர் ஒப்புதல் நடைமுறைகள் பின்பற்றப்படுகின்றன.",
      },
      {
        heading: "5. கட்டணம் மற்றும் பரிவர்த்தனை தகவல்",
        text: "கட்டண செயலாக்கத்திற்கு நம்பகமான மூன்றாம் தரப்பு பணப்பரிவர்த்தனை தளங்களைப் பயன்படுத்தலாம். முழு கார்டு விவரங்கள் போன்ற அதிவிசேஷ கட்டணத் தகவல்களை நாங்கள் நேரடியாக சேமிக்கமாட்டோம்.",
      },
      {
        heading: "6. Cookies மற்றும் பயன்பாட்டு தரவு",
        text: "இணையதள செயல்திறன், பாதுகாப்பு, மொழித் தேர்வு மற்றும் பயனர் அனுபவத்தை மேம்படுத்த Cookies அல்லது ஒத்த தொழில்நுட்பங்களை பயன்படுத்தலாம். உங்கள் உலாவியில் இவற்றை நிர்வகிக்க முடியும்.",
      },
      {
        heading: "7. தரவு பகிர்வு",
        text: "சட்டப்பூர்வ தேவைகள் அல்லது சேவை வழங்கல் அவசியம் இல்லாவிட்டால் உங்கள் தனிப்பட்ட தரவை விற்பனை செய்யமாட்டோம். சேவை வழங்குநர்களுடன் பகிரப்படும் போது, தேவையான பாதுகாப்பு ஒப்பந்தங்கள் பின்பற்றப்படும்.",
      },
      {
        heading: "8. சர்வதேச தரவு பரிமாற்றம்",
        text: "நாங்கள் உலகளாவிய மாணவர்களுக்கு சேவை செய்வதால், தரவு பல நாடுகளிலுள்ள சேவையகங்கள் அல்லது வழங்குநர்களின் மூலம் செயலாக்கப்படலாம். எப்போதும் நியாயமான பாதுகாப்பு கட்டுப்பாடுகள் நடைமுறையில் இருக்கும்.",
      },
      {
        heading: "9. தரவு பாதுகாப்பு நடவடிக்கைகள்",
        text: "அங்கீகரிக்கப்பட்ட அணுகல் கட்டுப்பாடு, கடவுச்சொல் பாதுகாப்பு, சேவை வழங்குநர் பாதுகாப்பு மதிப்பீடு போன்ற நிர்வாக மற்றும் தொழில்நுட்ப கட்டுப்பாடுகள் மூலம் தரவு பாதுகாக்கப்படுகிறது.",
      },
      {
        heading: "10. தரவு சேமிப்பு காலம்",
        text: "சேவை வழங்க அவசியமான காலத்திலும், சட்ட/கணக்குப் பொறுப்புகள் நிறைவேறும் அளவிலும் தரவு சேமிக்கப்படும். தேவையற்ற பிறகு தரவு நீக்கம் அல்லது அடையாளமற்றதாக்கல் நடைமுறைகள் பின்பற்றப்படும்.",
      },
      {
        heading: "11. உங்கள் உரிமைகள்",
        text: "உங்கள் தனிப்பட்ட தகவலை அணுகுதல், திருத்துதல், சில சூழல்களில் நீக்கம் கோருதல் மற்றும் தொடர்பு விருப்பங்களை மாற்றுதல் போன்ற உரிமைகள் உங்களுக்கு உண்டு. கோரிக்கைகளை மின்னஞ்சல் மூலம் அனுப்பலாம்.",
      },
      {
        heading: "12. கொள்கை மாற்றங்கள்",
        text: "இந்த தனியுரிமைக் கொள்கை காலந்தோறும் புதுப்பிக்கப்படலாம். புதுப்பிக்கப்பட்ட பதிப்பு இந்தப் பக்கத்தில் வெளியிடப்பட்டதும் அமலுக்கு வரும்.",
      },
      {
        heading: "13. தொடர்புக்கு",
        text: "தனியுரிமை தொடர்பான கேள்விகள்: globaltamilschool@gmail.com",
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: February 26, 2026",
    intro:
      "Global Tamil School is an online Tamil school. We take the privacy of students, parents, and visitors seriously. This policy explains how we collect, use, store, and protect data when you use our website, enrollment forms, live classes, and related digital services.",
    sections: [
      {
        heading: "1. Information We Collect",
        text: "We may collect student and parent details such as names, email addresses, phone numbers, country/time zone, enrollment records, attendance, academic progress, and communication history.",
      },
      {
        heading: "2. Online Classes and Recordings",
        text: "To support learning quality and revision, some live sessions may be recorded. Recorded content is used for educational continuity, teacher quality review, and student learning support.",
      },
      {
        heading: "3. How We Use Information",
        text: "We use information for admissions, class allocation, timetable communication, academic support, progress tracking, parent updates, safety monitoring, and service improvement.",
      },
      {
        heading: "4. Children’s Privacy",
        text: "Because our services involve minors, we prioritize parent/guardian-provided data and apply age-appropriate safeguards. Where required, we rely on parental consent and supervision controls.",
      },
      {
        heading: "5. Payments and Billing",
        text: "Payments may be processed through trusted third-party providers. We do not intentionally store full card details on our own systems when secure payment processors are used.",
      },
      {
        heading: "6. Cookies and Website Usage Data",
        text: "We may use cookies or similar technologies to improve functionality, language preference, security, and analytics. You can manage cookie settings through your browser.",
      },
      {
        heading: "7. Sharing of Data",
        text: "We do not sell personal information. We only share data when needed for legitimate service operations, legal compliance, or with authorized vendors under appropriate confidentiality obligations.",
      },
      {
        heading: "8. International Data Transfers",
        text: "As we serve learners globally, data may be processed across different regions. We apply reasonable safeguards and vendor controls for cross-border data handling.",
      },
      {
        heading: "9. Security Measures",
        text: "We use practical administrative and technical controls including access restrictions, account protections, and provider-level security practices to reduce unauthorized access risks.",
      },
      {
        heading: "10. Data Retention",
        text: "We keep data for as long as necessary to deliver services, maintain academic/admin records, and meet legal obligations. Data is deleted or anonymized when no longer needed.",
      },
      {
        heading: "11. Your Rights",
        text: "You may request access, correction, or deletion of personal data in applicable situations, and may update communication preferences by contacting us.",
      },
      {
        heading: "12. Policy Updates",
        text: "This policy may be updated from time to time. The latest version posted on this page will apply from the update date.",
      },
      {
        heading: "13. Contact",
        text: "For privacy-related queries: globaltamilschool@gmail.com",
      },
    ],
  },
} as const;

export default function PrivacyPage() {
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
