
"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ta' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
  ta: {
    // Navbar
    'nav.home': 'முகப்பு',
    'nav.about': 'எங்களைப் பற்றி',
    'nav.team': 'குழு',
    'nav.activities': 'செயல்பாடுகள்',
    'nav.affiliations': 'இணைப்புகள்',
    'nav.enrollment': 'சேர்க்கை',
    'nav.contact': 'தொடர்பு',
    'nav.login': 'உள்நுழைக',
    'nav.brand': 'உலகளாவிய தமிழ்ப் பள்ளி',
    'nav.tagline': 'தமிழ்மொழி நமது அடையாளம்',
    
    // Banner
    'banner.text': '2024-25 கல்வியாண்டிற்கான சேர்க்கை இப்போது நடைபெறுகிறது! தொடர்புக்கு: +44 74597 13276 • இப்போதே உங்கள் இடத்தை முன்பதிவு செய்யுங்கள்! • உலகளாவிய தமிழ்ப் பள்ளி - அறிவு மற்றும் கலாச்சாரத்தின் சங்கமம் • ',

    // Hero
    'hero.welcome': 'உலகளாவிய தமிழ்ப் பள்ளிக்கு உங்களை வரவேற்கிறோம்',
    'hero.title': 'அறிவை வளர்ப்போம், ',
    'hero.titleAccent': 'கலாச்சாரத்தை போற்றுவோம்',
    'hero.description': 'தமிழ் மொழி, பாரம்பரியம் and கல்விச் சிறப்பிற்காக அர்ப்பணிக்கப்பட்ட எமது துடிப்பான சமூகத்தில் இணையுங்கள்.',
    'hero.enroll': 'இப்போதே சேருங்கள்',
    'hero.learnMore': 'மேலும் அறிய',
    
    // Welcome Section
    'welcome.tag': '2014 முதல் நிறுவப்பட்டது',
    'welcome.title': 'உலகளாவிய தமிழ் பள்ளிக்கு வருக',
    'welcome.description': 'உலகளாவிய தமிழ் பள்ளியில், மொழி என்பது கலாச்சாரத்திற்கான வாசல் என்று நாங்கள் நாங்கள் நம்புகிறோம். எமது நோக்கம் தமிழ் மொழியில் உலகத்தரம் வாய்ந்த கல்வியை வழங்குவதோடு, எமது பாரம்பரியம் மற்றும் விழுமியங்கள் மீதான ஆழ்ந்த மதிப்பையும் வளர்ப்பதாகும்.',
    'welcome.feat1': 'தரப்படுத்தப்பட்ட உலகளாவிய பாடத்திட்டம்',
    'welcome.feat2': 'அனுபவம் வாய்ந்த தாய்மொழி ஆசிரியர்கள்',
    'welcome.feat3': 'சமூகம் சார்ந்த கற்றல்',
    'welcome.discover': 'எங்கள் கதையைக் கண்டறியுங்கள்',

    // Features (Home Page Grid)
    'feat.lang.title': 'தமிழ் மொழி',
    'feat.lang.desc': 'நமது தாய்மொழியின் இனிமையையும் ஆழத்தையும் கற்றுக் கொள்ளுங்கள்.',
    'feat.culture.title': 'கலாச்சாரம்',
    'feat.culture.desc': 'நமது பாரம்பரிய விழுமியங்கள் மற்றும் கலைகளைப் போற்றுங்கள்.',
    'feat.community.title': 'சமூகம்',
    'feat.community.desc': 'ஒரு துடிப்பான தமிழ் கற்றல் சமூகத்தில் இணையுங்கள்.',
    
    // About Us Content
    'about.story.title': 'எங்கள் கதை',
    'about.story.subtitle': 'இலண்டனைத் தலைமையிடமாகக் கொண்ட உலகளாவிய தமிழ் கல்வி தளம்.',
    'about.founder.name': 'திருமதி. உமா அசோக் M.Sc., M.Ed.',
    'about.founder.role': 'நிறுவனர்',
    'about.message.title': 'நிறுவனரின் செய்தி',
    'about.message.p1': 'தமிழ் என்பது ஒரு மொழி மட்டுமல்ல; அது நமது அடையாளம், பண்பாடு மற்றும் தலைமுறைகளை இணைக்கும் ஒரு உயிரோட்டம். அந்தத் தமிழை உலகெங்கும் வாழும் தமிழர்களுக்கு எளிதாகவும், தரமாகவும் கொண்டு சேர்க்க வேண்டும் என்ற ஆவலுடன் உலகளாவிய தமிழ்ப் பள்ளி (Global Tamil School) தொடங்கப்பட்டது.',
    'about.message.p2': '2021ஆம் ஆண்டு தொடங்கப்பட்ட இந்தப் பயணம், இலண்டனைத் தலைமையிடமாகக் கொண்டு, இன்று பல நாடுகளிலிருந்து மாணவர்களை இணைக்கும் ஒரு உலகளாவிய கல்வி மேடையாக வளர்ந்துள்ளளது. காலம், நாடு, நேர மண்டலம் என எந்தத் தடையும் இன்றி, ஒவ்வொரு மாணவரும் தங்களுக்கேற்ற முறையில் தமிழ் கற்றுக்கொள்ள வேண்டும் என்பதே எங்களது முதன்மை நோக்கம். அதே சமயம், மாணவர்களுக்குள் தமிழ் மொழி மற்றும் பண்பாட்டின் மீது பற்று, பெருமை மற்றும் ஆர்வம் வளர வேண்டும் என்பதையும் முக்கியமாகக் கருதுகிறோம்.',
    'about.message.p3': 'தகுதியான, அர்ப்பணிப்புடன் செயல்படும் ஆசிரியர்கள், ஒழுங்கமைக்கப்பட்ட பாடத்திட்டம், மற்றும் மாணவர்களை மையமாகக் கொண்ட கற்றல் முறைகள் ஆகியவை எங்கள் பள்ளியின் வலிமை. உலகில் எங்கு இருந்தாலும், தமிழ் மொழியுடன் மாணவர்கள் இணைந்திருக்க உலகளாவிய தமிழ்ப் பள்ளி ஒரு நம்பகமான கல்வித் தளமாக இருப்பதில் நான் பெருமை கொள்கிறேன்.',
    'about.message.closing': 'வாழிய தமிழ் மொழி !',
    
    // About Us Pioneer Section
    'about.pioneer.quote': '"தேமதுரத் தமிழோசை உலகமெல்லாம் பரவும் வகை செய்தல் வேண்டும்."',
    'about.pioneer.p1': 'தமிழ்மொழியை உலகம் முழுவதும் அதிகமான மாணவர்களுக்கு இணையவழி மூலம் கற்பிக்கும் முன்னோடி நிறுவனமாக உலகளாவிய தமிழ்ப் பள்ளி திகழ்வதில் நாங்கள் பெருமிதம் கொள்கிறோம். மாணவர்களின் முழுமையான வளர்ச்சியை கருத்தில் கொண்டு, பயனளிக்கும் வகையில் பாடத்திட்டங்களை மிகுந்த கவனத்துடன் தேர்வு செய்து கற்பித்து வருகிறோம்.',
    'about.pioneer.p2': 'உயர்தரமான பாடநூல்கள், பணித்தாள்கள் மற்றும் மதிப்பீட்டுத் தாள்களைப் பயன்படுத்தி, தமிழ் மொழிக் கற்றலை முறையாகவும் பயனுள்ளதாகவும் வழங்குகிறோம். ஐக்கிய இராச்சியம், அமெரிக்கா, கனடா, ஐரோப்பிய நாடுகள், வளைகுடா நாடுகள், இந்தியா, சிங்கப்பூர், மலேசியா, ஆத்திரேலியா உள்ளிட்ட பல நாடுகளிலிருந்து நூற்றுக்கணக்கான மாணவர்கள் எங்களிடம் தமிழ் மொழிக்கற்றலை முறையாகப் பயின்று வருகின்றனர்.',
    'about.pioneer.p3': 'மேலும், தமிழ் மொழியுடன் இணைந்து தமிழ்க் கலைகளையும் வளர்க்கும் நோக்கில், இந்திய நிகழ்த்துக் கலைகளுக்கான வகுப்புகளும் நடத்தப்படுகின்றன. இவ்வகுப்புகளின் மூலம், சர்வதேச தேர்வு மையங்களின் மூலம் இணையவழி தேர்வுகள் நடத்தப்பட்டு சான்றிதழ்களும் வழங்கப்படுகின்றன.',
    
    // Mission & Vision
    'about.mission.title': 'பணி நோக்கம்',
    'about.mission.text': 'உலகளாவிய தமிழ்ப் பள்ளியின் பணி நோக்கம், உலகம் முழுவதும் வாழும் மாணவர்களுக்கு இணையவழி மூலம் தரமான, எளிதாக அணுகக்கூடிய தமிழ் மொழிக் கல்வியை வழங்குவதாகும். ஒழுங்கமைக்கப்பட்ட பாடத்திட்டங்கள், தகுதியான ஆசிரியர்கள் மற்றும் சர்வதேச அங்கீகாரம் பெற்ற கல்வி வாய்ப்புகள் மூலம், தமிழ் மொழித் திறனையும் தமிழ்ப் பண்பாட்டின் மீது ஆழமான மதிப்பையும் மாணவர்களிடையே வளர்ப்பதே எங்களது இலக்காகும்.',
    'about.vision.title': 'தொலைநோக்குப் பார்வை',
    'about.vision.text': 'உலகம் முழுவதும் தமிழ் மொழி மற்றும் தமிழ்ப் பண்பாட்டுக் கல்வியில் முன்னணியான மற்றும் நம்பகமான கல்வி நிறுவனமாக விளங்குவதோடு, எதிர்காலத் தலைமுறைகளுக்கு தமிழ் மொழியை உறுதியுடன் கொண்டு செல்லும் வகையில் மாணவர்களை உருவாக்குவதே உலகளாவிய தமிழ்ப் பள்ளியின் தொலைநோக்குப் பார்வையாகும்.',

    // Affiliations
    'affil.title': 'இணைப்புகள்',
    'affil.subtitle': 'எமது மாணவர்களுக்குச் சிறந்ததை வழங்க முன்னணி நிறுவனங்களுடன் இணைந்து பணியாற்றுகிறோம்.',
    'affil.partner1.name': 'உலகளாவிய தமிழ் கல்வி அறக்கட்டளை',
    'affil.partner1.role': 'முக்கிய பாடத்திட்ட கூட்டாளர்',
    'affil.partner1.desc': 'எமது தமிழ் பாடத்திட்டத்திற்கான தரப்படுத்தப்பட்ட கல்வி ஆதாரங்கள் மற்றும் உலகளாவிய தர அளவீடுகளை வழங்குதல்.',
    'affil.partner2.name': 'லண்டன் கலாச்சாரக் குழு',
    'affil.partner2.role': 'சமூக ஆதரவு',
    'affil.partner2.desc': 'லண்டன் பகுதியில் எமது உள்ளூர் சமூக நலத்திட்டங்கள் மற்றும் இட நிர்வாகத்தை ஆதரித்தல்.',
    'affil.partner3.name': 'தமிழ் மொழி அகாடமி',
    'affil.partner3.role': 'சான்றிதழ் வழங்கும் அமைப்பு',
    'affil.partner3.desc': 'அங்கீகரிக்கப்பட்ட சான்றிதழ் வழிகள் மூலம் எமது மாணவர்களின் சாதனைகளை அங்கீகரித்தல்.',
    'affil.acc.title': 'தரப்படுத்தப்பட்ட மேன்மை',
    'affil.acc.desc': 'எமது பாடத்திட்டம் பாரம்பரிய மொழி கற்றலுக்கான சர்வதேச தரத்துடன் ஒத்துப்போகிறது. ஐக்கிய இராச்சியம் மற்றும் உலகெங்கிலும் உள்ள பல கலாச்சார மற்றும் கல்வி அமைப்புகளால் அங்கீகரிக்கப்பட்டதில் நாங்கள் பெருமிதம் கொள்கிறோம்.',
    'affil.visit': 'இணையதளத்தைப் பார்வையிடவும்',

    // Activities Page
    'activities.title': 'எமது செயல்பாடுகள்',
    'activities.subtitle': 'மாணவர்களை கல்விக்கு அப்பால் ஈர்க்கும் வகையில் முழுமையான கலாச்சார அடையாளத்தை வளர்ப்பது.',
    'activities.lang.title': 'தமிழ் மொழி வகுப்புகள்',
    'activities.lang.desc': '1 முதல் 10 ஆம் வகுப்பு வரை விரிவான பாடத்திட்டம், வாசிப்பு, எழுதுதல் மற்றும் உரையாடல் சரளத்தை மையமாகக் கொண்டது.',
    'activities.arts.title': 'பாரம்பரிய கலை மற்றும் கைவினை',
    'activities.arts.desc': 'மாணவர்கள் பாரம்பரிய வடிவங்கள், கோலம் மற்றும் தமிழ் அடையாளத்தை கொண்டாடும் பிற படைப்புக் கலைகளைக் கற்றுக்கொள்கிறார்கள்.',
    'activities.music.title': 'இசை மரபுகள்',
    'activities.music.desc': 'கர்நாடக இசையின் அடிப்படை மற்றும் தமிழ்நாட்டின் பாரம்பரிய நாட்டுப்புறப் பாடல்கள் அறிமுகம்.',
    'activities.feature.instructors': 'ஆழ்ந்த கலாச்சார அறிவு கொண்ட நிபுணத்துவ ஆசிரியர்கள்',
    'activities.feature.allages': 'அனைத்து வயதினருக்கும் கிடைக்கிறது',
    'activities.events.title': 'சிறப்பு நிகழ்வுகள்',
    'activities.events.desc': 'ஒவ்வொரு ஆண்டும் பொங்கல், தமிழ்ப் புத்தாண்டு மற்றும் எமது ஆண்டு விழா கொண்டாட்டங்களை பிரம்மாண்டமாக ஏற்பாடு செய்கிறோம்.',
    'activities.events.pongal': 'பொங்கல் திருவிழா',
    'activities.events.annual': 'ஆண்டு விழா',
    'activities.events.poetry': 'கவிதை ஒப்பித்தல்',
    'activities.highlights.awards': 'விருதுகள்',
    'activities.highlights.community': 'சமூகம்',
    'activities.highlights.engagement': 'ஈடுபாடு',

    // Team Page
    'team.title': 'எமது கல்வியாளர்களைச் சந்திக்கவும்',
    'team.subtitle': 'பாரம்பரியத்தைப் பாதுகாப்பதற்கும் அடுத்த தலைமுறைக்கு அதிகாரம் அளிப்பதற்கும் அர்ப்பணிப்புடன் செயல்படும் நிபுணத்துவக் குழு.',
    'team.member1.name': 'திருமதி. தமிழ்செல்வி ஆர்.',
    'team.member1.role': 'தலைமை ஆசிரியை மற்றும் நிறுவனர்',
    'team.member1.bio': 'கல்வித் துறையில் 20 ஆண்டுகளுக்கும் மேலான அனுபவம் கொண்ட இவர், தமிழ் மொழி மீதான ஆர்வத்துடன் வழிநடத்துகிறார்.',
    'team.member2.name': 'டாக்டர். அருள் குமரன்',
    'team.member2.role': 'கல்வி இயக்குனர்',
    'team.member2.bio': 'மொழியியல் மற்றும் பாடத்திட்ட வடிவமைப்பில் நிபுணர், கற்றலின் மிக உயர்ந்த தரத்தை உறுதி செய்கிறார்.',
    'team.member3.name': 'செல்வி. அஞ்சலி தேவி',
    'team.member3.role': 'மூத்த தமிழ் ஆசிரியர்',
    'team.member3.bio': 'ஆரம்பக் கல்வி மற்றும் இசை மூலம் கலாச்சார ஈடுபாட்டில் நிபுணத்துவம் பெற்றவர்.',
    'team.volunteer.title': 'தாக்கத்தை ஏற்படுத்த வேண்டுமா?',
    'team.volunteer.desc': 'தமிழ் மொழி மற்றும் கலாச்சாரத்தைப் பாதுகாக்கும் எமது பணியில் பங்களிக்க விரும்பும் ஆர்வமுள்ள கல்வியாளர்கள் மற்றும் தன்னார்வலர்களை நாங்கள் எப்போதும் எதிர்பார்க்கிறோம்.',
    'team.volunteer.button': 'தன்னார்வலராக விண்ணப்பிக்கவும்',

    // Enrollment Page
    'enroll.title': 'பாடநெறி சேர்க்கை',
    'enroll.subtitle': 'உலகளாவிய தமிழ்ப் பள்ளியுடன் உங்கள் பயணத்தைத் தொடங்குங்கள். ஆர்வத்தைப் பதிவு செய்ய கீழே உள்ள படிவத்தை நிரப்பவும்.',
    'enroll.nextSemester.title': 'அடுத்த பருவம்',
    'enroll.nextSemester.desc': 'வகுப்புகள் விரைவில் தொடங்கும்! ஆரம்பகால சேர்க்கைக்கு முதல் மாத கட்டணத்தில் 10% தள்ளுபடி கிடைக்கும்.',
    'enroll.requirements.title': 'நுழைவுத் தேவைகள்',
    'enroll.requirements.age': '5 வயது மற்றும் அதற்கு மேற்பட்டவர்கள்',
    'enroll.requirements.interest': 'தமிழ் மொழியில் ஆர்வம்',
    'enroll.requirements.weekend': 'வார இறுதி நாட்களில் கிடைக்கு நேரம்',
    'enroll.form.studentName': 'மாணவர் பெயர்',
    'enroll.form.age': 'வயது',
    'enroll.form.parentName': 'பெற்றோர்/பாதுகாவலர் பெயர்',
    'enroll.form.email': 'மின்னஞ்சல் முகவரி',
    'enroll.form.phone': 'தொலைபேசி எண்',
    'enroll.form.level': 'எதிர்பார்க்கப்படும் தேர்ச்சி நிலை',
    'enroll.form.level.beginner': 'தொடக்கநிலை (முன்னறிவு இல்லை)',
    'enroll.form.level.intermediate': 'இடைநிலை (அடிப்படை தமிழைப் புரிந்து கொள்ள முடியும்)',
    'enroll.form.level.advanced': 'மேம்பட்ட நிலை (சரளமாக பேச/படிக்க முடியும்)',
    'enroll.form.level.desc': 'இது மாணவரை சரியான வகுப்பில் சேர்க்க உதவுகிறது.',
    'enroll.form.notes': 'கூடுதல் தகவல்',
    'enroll.form.submit': 'சேர்க்கை கோரிக்கையைச் சமர்ப்பிக்கவும்',
    'enroll.form.disclaimer': 'சமர்ப்பிப்பதன் மூலம், இந்தத் தகவலை globaltamilschool@gmail.com க்கு அனுப்ப ஒப்புக்கொள்கிறீர்கள்',

    // Contact Page
    'contact.title': 'எங்களைத் தொடர்பு கொள்ள',
    'contact.subtitle': 'கேள்விகள் உள்ளதா? உங்கள் கலாச்சார மற்றும் மொழிப் பயணத்தில் உங்களுக்கு உதவ நாங்கள் இங்கே இருக்கிறோம்.',
    'contact.info.title': 'தொடர்பில் இருங்கள்',
    'contact.info.desc': 'நீங்கள் சேர்க்கை, தன்னார்வத் தொண்டு ஆகியவற்றில் ஆர்வமாக இருந்தாலும் அல்லது எங்கள் பள்ளியைப் பற்றி மேலும் அறிய விரும்பினாலும், எங்களுக்கு ஒரு செய்தியை அனுப்ப தயங்க வேண்டாம்.',
    'contact.info.location': 'எமது இருப்பிடம்',
    'contact.info.call': 'எங்களை அழையுங்கள்',
    'contact.info.email': 'எங்களுக்கு மின்னஞ்சல் அனுப்புங்கள்',
    'contact.info.hours': 'பள்ளி நேரம்',
    'contact.info.hours.days': 'சனி - ஞாயிறு: காலை 9:00 - மாலை 4:00',
    'contact.form.name': 'உங்கள் பெயர்',
    'contact.form.email': 'மின்னஞ்சல் முகவரி',
    'contact.form.subject': 'பொருள்',
    'contact.form.message': 'செய்தி',
    'contact.form.placeholder.message': 'இன்று நாங்கள் உங்களுக்கு எப்படி உதவலாம்?',
    'contact.form.submit': 'செய்தியை அனுப்பு',

    // Stats
    'stats.students': 'மாணவர்கள்',
    'stats.years': 'கல்விச் சிறப்பு ஆண்டுகள்',
    'stats.teachers': 'நிபுணத்துவ ஆசிரியர்கள்',
    'stats.courses': 'படிப்புகள்',
    
    // Gallery
    'gallery.tag': 'எங்கள் தருணங்கள்',
    'gallery.title': 'பள்ளி வாழ்க்கை',
    'gallery.desc': 'எமது கற்றல் பயணத்தை சிறப்பாக்கும் தருணங்களை படம்பிடித்தல்.',
    
    // Activities Home
    'act.title': 'ஈர்க்கும் செயல்பாடுகள்',
    'act.desc': 'வகுப்பறைக்கு அப்பாற்பட்டு, நமது கலாச்சாரத்தை உயிர்ப்பிக்கும் பலவிதமான செயல்பாடுகளை நாங்கள் வழங்கமிக்கிறோம்.',
    'act.art': 'கலை மற்றும் கைவினை',
    'act.artDesc': 'பாரம்பரிய தமிழ் கலைகள் and நவீன படைப்புத் திட்டங்கள்.',
    'act.music': 'இசை மற்றும் நடனம்',
    'act.musicDesc': 'பரதநாட்டியம் and பாரம்பரிய இசை மரபுகளைக் கற்றல்.',
    'act.fest': 'கலாச்சார விழாக்கள்',
    'act.festDesc': 'பொங்கல், தீபாவளி மற்றும் பல விழாக்களின் பிரம்மாண்டமான கொண்டாட்டங்கள்.',
    'act.readMore': 'மேலும் படிக்க',
    
    // CTA
    'cta.title': 'உங்கள் பயணத்தைத் தொடங்கத் தயாரா?',
    'cta.desc': 'நடப்பு கல்வியாண்டிற்கான சேர்க்கை இப்போது நடைபெறுகிறது. இன்று எமது கற்றல் சமூகத்தில் இணைந்து தமிழ்க் கலாச்சாரத்தின் செழுமையைத் தழுவுங்கள்.',
    'cta.enroll': 'இப்போதே சேருங்கள்',
    'cta.enquire': 'விசாரிக்க',

    // Footer
    'footer.brand': 'உலகளாவிய தமிழ்ப் பள்ளி',
    'footer.aboutDesc': 'நமது சமூகத்தின் அடுத்த தலைமுறைக்கு தரமான கல்வியை வழங்குவதோடு, தமிழ் பாரம்பரியத்தின் செழுமையைப் பாதுகாத்தல்.',
    'footer.quickLinks': 'விரைவான இணைப்புகள்',
    'footer.contactUs': 'எங்களைத் தொடர்பு கொள்ள',
    'footer.newsletter': 'செய்திமடல்',
    'footer.newsletterDesc': 'எமது சமீபத்திய நிகழ்வுகள் மற்றும் செய்திகளுடன் உடனுக்குடன் இணைந்திருங்கள்.',
    'footer.newsletterPlaceholder': 'உங்கள் மின்னஞ்சல்',
    'footer.newsletterJoin': 'சேருங்கள்',
    'footer.privacy': 'தனியுரிமைக் கொள்கை',
    'footer.terms': 'சேவை விதிமுறைகள்',
    'footer.rights': 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.'
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.team': 'Team',
    'nav.activities': 'Activities',
    'nav.affiliations': 'Affiliations',
    'nav.enrollment': 'Enrollment',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.brand': 'Global Tamil School',
    'nav.tagline': 'Tamil is our identity',
    
    // Banner
    'banner.text': 'Admissions for 2024-25 Academic Year are now open! Contact: +44 74597 13276 • Book your place now! • Global Tamil School - Where Wisdom Meets Heritage • ',

    // Hero
    'hero.welcome': 'Welcome to Global Tamil School',
    'hero.title': 'Enriching Minds, ',
    'hero.titleAccent': 'Embracing Culture',
    'hero.description': 'Join our vibrant community dedicated to the Tamil language, tradition, and academic excellence.',
    'hero.enroll': 'Enroll Today',
    'hero.learnMore': 'Learn More',
    
    // Welcome Section
    'welcome.tag': 'Established Since 2014',
    'welcome.title': 'Welcome to Global Tamil School',
    'welcome.description': 'At Global Tamil School, we believe that language is the gateway to culture. Our mission is to provide a world-class education in the Tamil language, while fostering a deep appreciation for our traditions and values.',
    'welcome.feat1': 'Standardized Global Curriculum',
    'welcome.feat2': 'Experienced Native Educators',
    'welcome.feat3': 'Community-Centric Learning',
    'welcome.discover': 'Discover Our Story',

    // Features (Home Page Grid)
    'feat.lang.title': 'Tamil Language',
    'feat.lang.desc': 'Learn the sweetness and depth of our mother tongue.',
    'feat.culture.title': 'Culture',
    'feat.culture.desc': 'Cherish our traditional values and performing arts.',
    'feat.community.title': 'Community',
    'feat.community.desc': 'Join a vibrant community of Tamil learners.',

    // About Us Content
    'about.story.title': 'Our Story',
    'about.story.subtitle': 'A global Tamil educational platform headquartered in London.',
    'about.founder.name': 'Mrs. Uma Ashok M.Sc., M.Ed.',
    'about.founder.role': 'Founder',
    'about.message.title': "Founder's Message",
    'about.message.p1': 'Tamil is not just a language; it is our identity, culture, and a life force that connects generations. Global Tamil School was established with a passion to provide easy access to high-quality Tamil education for Tamils living all over the world.',
    'about.message.p2': 'Beginning in 2021 and headquartered in London, this journey has evolved into a global educational platform connecting students from numerous countries. Our primary mission is to enable every student to learn Tamil in a personalized way, free from the constraints of geography or time zones. We strive to foster deep-rooted pride and interest in the Tamil language and heritage.',
    'about.message.p3': 'Our strength lies in our qualified, dedicated educators, structured curriculum, and student-centric learning approach. I am proud that Global Tamil School serves as a reliable educational hub for students worldwide to stay connected with their Tamil roots.',
    'about.message.closing': 'Long live the Tamil language!',

    // About Us Pioneer Section
    'about.pioneer.quote': '"Let the honey-sweet sound of Tamil spread across the entire world."',
    'about.pioneer.p1': 'We take pride in being Global Tamil School, a pioneering institution that delivers Tamil language education online to a large number of students across the world. With a strong focus on the holistic development of learners, we carefully select and implement effective curricula that support meaningful and structured learning.',
    'about.pioneer.p2': 'Using high-quality textbooks, worksheets, and assessment materials, we provide systematic and impactful Tamil language instruction. Hundreds of students from the United Kingdom, United States, Canada, European countries, Gulf nations, India, Singapore, Malaysia, and Australia are currently learning Tamil with us.',
    'about.pioneer.p3': 'In addition to Tamil language education, we also offer classes in Indian performing arts with the aim of nurturing Tamil arts and culture. Through these programmes, online examinations are conducted via international examination boards, and successful candidates are awarded recognised certificates.',
    
    // Mission & Vision
    'about.mission.title': 'MISSION',
    'about.mission.text': 'Our mission at Global Tamil School is to provide accessible, high-quality Tamil language education to learners across the world through innovative online teaching. We are committed to nurturing strong language skills, cultural awareness, and a lifelong appreciation for Tamil heritage by offering structured curricula, qualified educators, and globally recognised learning pathways.',
    'about.vision.title': 'VISION',
    'about.vision.text': 'To be a globally recognised centre of excellence in Tamil language and cultural education, empowering learners worldwide to connect with Tamil heritage, achieve academic success, and carry the language forward to future generations.',

    // Affiliations
    'affil.title': 'Affiliations',
    'affil.subtitle': 'Working together with leading organizations to provide the best for our students.',
    'affil.partner1.name': 'Global Tamil Educational Foundation',
    'affil.partner1.role': 'Core Curriculum Partner',
    'affil.partner1.desc': 'Providing standardized educational resources and global benchmarking for our Tamil curriculum.',
    'affil.partner2.name': 'London Cultural Council',
    'affil.partner2.role': 'Community Support',
    'affil.partner2.desc': 'Supporting our local community outreach and venue management in the London area.',
    'affil.partner3.name': 'Tamil Language Academy',
    'affil.partner3.role': 'Certification Body',
    'affil.partner3.desc': 'Recognizing our student achievements through accredited certification pathways.',
    'affil.acc.title': 'Standardized Excellence',
    'affil.acc.desc': 'Our curriculum is aligned with international standards for heritage language learning. We are proud to be recognized by multiple cultural and educational bodies in the UK and globally.',
    'affil.visit': 'Visit Website',

    // Activities Page
    'activities.title': 'Our Activities',
    'activities.subtitle': 'Engaging students beyond academics to foster a holistic cultural identity.',
    'activities.lang.title': 'Tamil Language Classes',
    'activities.lang.desc': 'Comprehensive curriculum from Grade 1 to Grade 10, focusing on reading, writing, and conversational fluency.',
    'activities.arts.title': 'Traditional Arts & Crafts',
    'activities.arts.desc': 'Students learn traditional patterns, Rangoli (Kolam), and other creative arts that celebrate Tamil identity.',
    'activities.music.title': 'Musical Traditions',
    'activities.music.desc': 'Introduction to Carnatic music basics and traditional folk songs of Tamil Nadu.',
    'activities.feature.instructors': 'Expert instructors with deep cultural knowledge',
    'activities.feature.allages': 'Available for all age groups',
    'activities.events.title': 'Special Events',
    'activities.events.desc': 'Every year we organize grand celebrations for Pongal, Tamil New Year, and our Annual Day performance.',
    'activities.events.pongal': 'Pongal Festival',
    'activities.events.annual': 'Annual Day',
    'activities.events.poetry': 'Poetry Recital',
    'activities.highlights.awards': 'Awards',
    'activities.highlights.community': 'Community',
    'activities.highlights.engagement': 'Engagement',

    // Team Page
    'team.title': 'Meet Our Educators',
    'team.subtitle': 'A dedicated team of professionals committed to preserving heritage and empowering the next generation.',
    'team.member1.name': 'Mrs. Tamilselvi R.',
    'team.member1.role': 'Headmistress & Founder',
    'team.member1.bio': 'With over 20 years of experience in education, she leads with passion for the Tamil language.',
    'team.member2.name': 'Dr. Arul Kumaran',
    'team.member2.role': 'Academic Director',
    'team.member2.bio': 'Expert in linguistics and curriculum design, ensuring the highest standards of learning.',
    'team.member3.name': 'Ms. Anjali Devi',
    'team.member3.role': 'Senior Teacher',
    'team.member3.bio': 'Specializes in primary education and cultural engagement through music.',
    'team.volunteer.title': 'Want to make an impact?',
    'team.volunteer.desc': 'We are always looking for passionate educators and volunteers who want to contribute to our mission of Tamil language and culture preservation.',
    'team.volunteer.button': 'Apply to Volunteer',

    // Enrollment Page
    'enroll.title': 'Course Enrollment',
    'enroll.subtitle': 'Start your journey with Global Tamil School. Fill out the form below to register interest.',
    'enroll.nextSemester.title': 'Next Semester',
    'enroll.nextSemester.desc': 'Classes start soon! Early bird enrollment gets a 10% discount on first month fees.',
    'enroll.requirements.title': 'Entry Requirements',
    'enroll.requirements.age': 'Age 5 and above',
    'enroll.requirements.interest': 'Interest in Tamil language',
    'enroll.requirements.weekend': 'Weekend availability',
    'enroll.form.studentName': 'Student Name',
    'enroll.form.age': 'Age',
    'enroll.form.parentName': 'Parent/Guardian Name',
    'enroll.form.email': 'Email Address',
    'enroll.form.phone': 'Phone Number',
    'enroll.form.level': 'Expected Proficiency Level',
    'enroll.form.level.beginner': 'Beginner (No prior knowledge)',
    'enroll.form.level.intermediate': 'Intermediate (Can understand basic Tamil)',
    'enroll.form.level.advanced': 'Advanced (Can speak/read fluently)',
    'enroll.form.level.desc': 'This helps us place the student in the right class.',
    'enroll.form.notes': 'Additional Information',
    'enroll.form.submit': 'Submit Enrollment Request',
    'enroll.form.disclaimer': 'By submitting, you agree to send this information to globaltamilschool@gmail.com',

    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': "Have questions? We're here to help you on your cultural and linguistic journey.",
    'contact.info.title': 'Get In Touch',
    'contact.info.desc': "Whether you're interested in enrollment, volunteering, or just want to learn more about our school, feel free to drop us a message.",
    'contact.info.location': 'Our Location',
    'contact.info.call': 'Call Us',
    'contact.info.email': 'Email Us',
    'contact.info.hours': 'School Hours',
    'contact.info.hours.days': 'Sat - Sun: 9:00 AM - 4:00 PM',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.placeholder.message': 'How can we help you today?',
    'contact.form.submit': 'Send Message',

    // Stats
    'stats.students': 'Students',
    'stats.years': 'Years Excellence',
    'stats.teachers': 'Expert Teachers',
    'stats.courses': 'Courses',
    
    // Gallery
    'gallery.tag': 'Our Moments',
    'gallery.title': 'Life at School',
    'gallery.desc': 'Capturing the moments that make our learning journey special.',
    
    // Activities Home
    'act.title': 'Engaging Activities',
    'act.desc': 'Beyond the classroom, we offer a range of activities that bring our culture to life.',
    'act.art': 'Art & Crafts',
    'act.artDesc': 'Traditional Tamil arts and modern creative projects.',
    'act.music': 'Music & Dance',
    'act.musicDesc': 'Learning Bharatnatyam and classical vocal traditions.',
    'act.fest': 'Cultural Festivals',
    'act.festDesc': 'Grand celebrations of Pongal, Deepavali, and more.',
    'act.readMore': 'Read more',
    
    // CTA
    'cta.title': 'Ready to Start Your Journey?',
    'cta.desc': 'Enrollment for the current academic year is now open. Join our vibrant community of learners today and embrace the richness of Tamil culture.',
    'cta.enroll': 'Enroll Now',
    'cta.enquire': 'Enquire',

    // Footer
    'footer.brand': 'Global Tamil School',
    'footer.aboutDesc': 'Preserving the richness of Tamil heritage and providing quality education to the next generation in our community.',
    'footer.quickLinks': 'Quick Links',
    'footer.contactUs': 'Contact Us',
    'footer.newsletter': 'Newsletter',
    'footer.newsletterDesc': 'Stay updated with our latest events and news.',
    'footer.newsletterPlaceholder': 'Your email',
    'footer.newsletterJoin': 'Join',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': 'All rights reserved.'
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ta');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'ta' || savedLang === 'en')) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
