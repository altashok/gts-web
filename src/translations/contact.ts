export type FaqItem = { q: string; a: string };

const buildFaqTranslations = (items: FaqItem[]) =>
  items.reduce((acc, item, index) => {
    const i = index + 1;
    acc[`contact.faq.${i}.q`] = item.q;
    acc[`contact.faq.${i}.a`] = item.a;
    return acc;
  }, {} as Record<string, string>);

const taFaq: FaqItem[] = [
  {
    q: 'சேர்க்கை எப்போது திறக்கப்படும்?',
    a: 'வருடத்தில் பல கட்டங்களாக சேர்க்கை நடைபெறும். சமீபத்திய சேர்க்கை தேதிகளுக்கு எங்களைத் தொடர்புகொள்ளவும்.',
  },
  {
    q: 'வகுப்புகள் ஆன்லைனிலா அல்லது நேரடியாகவா?',
    a: 'எங்கள் முக்கிய வகுப்புகள் ஆன்லைன் முறையில் நடைபெறுகின்றன. சில நிகழ்வுகள் நேரடி முறையிலும் ஏற்பாடு செய்யப்படுகின்றன.',
  },
  {
    q: 'மாணவர்களுக்கு எந்த வயது முதல் சேர்க்கை?',
    a: 'பொதுவாக 5 வயதிற்கு மேற்பட்ட மாணவர்கள் சேரலாம். தகுந்த நிலைக்கு ஏற்ப வகுப்புகள் ஒதுக்கப்படும்.',
  },
  {
    q: 'சான்றிதழ் தேர்வுகள் உள்ளதா?',
    a: 'ஆம். எங்கள் இணைப்பு அமைப்புகளின் மூலம் பல நிலைகளில் தமிழ் மொழி சான்றிதழ் தேர்வுகள் வழங்கப்படுகின்றன.',
  },
  {
    q: 'ஆன்லைன் தமிழ் வகுப்புகள் எப்படி நடைபெறுகின்றன?',
    a: 'நேரடி ஆசிரியர் வழிகாட்டலுடன் இணையவழி வகுப்புகள் நடைபெறும். ஒவ்வொரு நிலைக்கும் பொருத்தமான பாடத்திட்டம் மற்றும் பயிற்சிகள் வழங்கப்படும்.',
  },
  {
    q: 'கலை (Arts) வகுப்புகளில் என்ன கற்பிக்கப்படுகிறது?',
    a: 'வரைவியல், கைவினை மற்றும் தமிழ் கலாச்சார கலைச்சார்ந்த செயற்பாடுகள் வயதுக்கேற்ற முறையில் கற்பிக்கப்படுகின்றன.',
  },
  {
    q: 'சதுரங்க (Chess) வகுப்புகள் தொடக்கநிலைக்கு உண்டா?',
    a: 'ஆம். தொடக்கநிலை மாணவர்களுக்கும் மேம்பட்ட மாணவர்களுக்கும் தனித்த பயிற்சி பாதை உள்ளது. தந்திரம், நடைமுறை போட்டி பயிற்சியும் வழங்கப்படும்.',
  },
  {
    q: 'மார்ஷியல் ஆர்ட்ஸ் (Martial Arts) ஆன்லைனில் பாதுகாப்பாக கற்றுக்கொள்ள முடியுமா?',
    a: 'ஆம். பாதுகாப்பு வழிமுறைகளுடன் ஆசிரியர் கண்காணிப்பில் அடிப்படை உடற்பயிற்சி, ஒழுக்கம் மற்றும் தற்காப்புத் திறன்கள் கற்பிக்கப்படுகின்றன.',
  },
];

const enFaq: FaqItem[] = [
  {
    q: 'When does admission open?',
    a: 'Admissions are opened in multiple phases during the year. Please contact us for current intake dates.',
  },
  {
    q: 'Are classes online or in-person?',
    a: 'Our core classes are conducted online. Selected events and programs may be held in person.',
  },
  {
    q: 'What is the minimum age to enroll?',
    a: 'Generally, students aged 5 and above can enroll. Class level is assigned based on readiness.',
  },
  {
    q: 'Do you offer certificate examinations?',
    a: 'Yes. We provide Tamil language certificate examinations at multiple levels through our affiliated boards.',
  },
  {
    q: 'How are your online Tamil classes conducted?',
    a: 'Classes are delivered live online with teacher guidance, level-based curriculum, and structured practice activities.',
  },
  {
    q: 'What is covered in the Arts classes?',
    a: 'Students learn age-appropriate drawing, craft, and Tamil culture-based creative activities through guided sessions.',
  },
  {
    q: 'Do you offer Chess training for beginners?',
    a: 'Yes. We provide separate pathways for beginners and advanced learners, including strategy and practical game training.',
  },
  {
    q: 'Can Martial Arts be learned safely online?',
    a: 'Yes. Sessions are instructor-led with safety guidelines, focusing on discipline, fitness, and foundational self-defense skills.',
  },
];

export const contactTranslations = {
  ta: {
    'contact.title': 'எங்களைத் தொடர்பு கொள்ள',
    'contact.subtitle': 'உங்கள் கேள்விகள் மற்றும் கருத்துக்களை வரவேற்கிறோம்.',
    'contact.info.title': 'தொடர்பு விவரங்கள்',
    'contact.info.desc': 'எங்களுடன் பேச விரும்பினால் கீழ்க்கண்ட முறைகளில் தொடர்பு கொள்ளலாம்.',
    'contact.info.location': 'முகவரி',
    'contact.info.call': 'அழைக்கவும் / WhatsApp',
    'contact.info.email': 'மின்னஞ்சல்',
    'contact.info.hours': 'நேரம்',
    'contact.info.hours.days': 'திங்கள் - வெள்ளி: 9:00 AM - 6:00 PM',
    'contact.form.name': 'பெயர்',
    'contact.form.email': 'மின்னஞ்சல்',
    'contact.form.subject': 'பொருள்',
    'contact.form.message': 'செய்தி',
    'contact.form.placeholder.message': 'உங்கள் செய்தியை இங்கே உள்ளிடவும்...',
    'contact.form.submit': 'செய்தியை அனுப்பு',
    'contact.faq.title': 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
    'contact.faq.subtitle': 'பெற்றோர் மற்றும் மாணவர்கள் அடிக்கடி கேட்கும் கேள்விகளுக்கான பதில்கள்.',
    ...buildFaqTranslations(taFaq),
  },
  en: {
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We welcome your questions and feedback.',
    'contact.info.title': 'Contact Information',
    'contact.info.desc': 'Get in touch with us through any of the following channels.',
    'contact.info.location': 'Address',
    'contact.info.call': 'Call / WhatsApp',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Office Hours',
    'contact.info.hours.days': 'Mon - Fri: 9:00 AM - 6:00 PM',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.placeholder.message': 'Type your message here...',
    'contact.form.submit': 'Send Message',
    'contact.faq.title': 'Frequently Asked Questions',
    'contact.faq.subtitle': 'Quick answers to common questions from parents and students.',
    ...buildFaqTranslations(enFaq),
  }
};


export const contactFaqItems: Record<'ta' | 'en', FaqItem[]> = {
  ta: taFaq,
  en: enFaq,
};

