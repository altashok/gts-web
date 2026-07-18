import type {Metadata} from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import EnrollFloatButton from '@/components/ui/enroll-float-button';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/context/LanguageContext';

const siteUrl = 'https://globaltamilschool.co.uk';
const siteNavigationItems = [
  {
    name: 'Tamil Courses',
    description: 'Explore online Tamil courses, GCSE Tamil preparation, and Cambridge Tamil qualifications.',
    url: `${siteUrl}/courses/tamil`,
  },
  {
    name: 'Admission',
    description: 'Enroll for online Tamil classes, group lessons, and Tamil language qualifications.',
    url: `${siteUrl}/enroll`,
  },
  {
    name: 'Affiliations',
    description: 'View Global Tamil School affiliations, exam boards, and education partners.',
    url: `${siteUrl}/affiliations`,
  },
  {
    name: 'Activities',
    description: 'Discover Tamil language, culture, music, dance, and arts activities for students.',
    url: `${siteUrl}/whoweare/activities`,
  },
  {
    name: 'About',
    description: 'Learn about Global Tamil School and our international Tamil education mission.',
    url: `${siteUrl}/whoweare/about`,
  },
  {
    name: 'Contact',
    description: 'Contact Global Tamil School for Tamil classes, admissions, and course enquiries.',
    url: `${siteUrl}/contact`,
  },
  {
    name: 'Shop',
    description: 'Browse Tamil learning resources, books, and school merchandise.',
    url: `${siteUrl}/shop`,
  },
  {
    name: 'Summer Class UK',
    description: 'Join our UK summer Tamil classes for learners across the world.',
    url: `${siteUrl}/summerclassuk`,
  },
  {
    name: 'Summer Class Scotland',
    description: 'Find Tamil summer programs in Scotland for language and cultural learning.',
    url: `${siteUrl}/summerclassscotland`,
  },
  {
    name: 'Terms & Conditions',
    description: 'Read the terms and conditions for Global Tamil School services.',
    url: `${siteUrl}/terms`,
  },
  {
    name: 'Privacy Policy',
    description: 'Review our privacy policy and data protection practices.',
    url: `${siteUrl}/privacy`,
  },
];

const pageStructuredData = [
  {
    '@type': 'WebPage',
    '@id': `${siteUrl}/courses/tamil`,
    url: `${siteUrl}/courses/tamil`,
    name: 'Tamil Courses & Qualifications',
    description: 'Explore online Tamil courses, GCSE Tamil preparation, and Cambridge Tamil qualifications with Global Tamil School.',
  },
  {
    '@type': 'WebPage',
    '@id': `${siteUrl}/enroll`,
    url: `${siteUrl}/enroll`,
    name: 'Enroll in Tamil Classes',
    description: 'Start your Tamil journey with our online classes, group lessons, and international language qualifications.',
  },
  {
    '@type': 'WebPage',
    '@id': `${siteUrl}/affiliations`,
    url: `${siteUrl}/affiliations`,
    name: 'Global Tamil School Affiliations',
    description: 'Learn about our education partners, exam boards, and Tamil curriculum accreditations.',
  },
  {
    '@type': 'WebPage',
    '@id': `${siteUrl}/whoweare/about`,
    url: `${siteUrl}/whoweare/about`,
    name: 'About Global Tamil School',
    description: 'Discover our mission, team, and international Tamil education story.',
  },
  {
    '@type': 'WebPage',
    '@id': `${siteUrl}/whoweare/activities`,
    url: `${siteUrl}/whoweare/activities`,
    name: 'Tamil Culture & Activities',
    description: 'Explore our Tamil culture, music, dance, arts, and community learning programs.',
  },
  {
    '@type': 'WebPage',
    '@id': `${siteUrl}/contact`,
    url: `${siteUrl}/contact`,
    name: 'Contact Global Tamil School',
    description: 'Get in touch with Global Tamil School for admissions, courses, and enquiries.',
  },
  {
    '@type': 'WebPage',
    '@id': `${siteUrl}/shop`,
    url: `${siteUrl}/shop`,
    name: 'Global Tamil School Shop',
    description: 'Shop Tamil learning materials, resources, and school merchandise.',
  },
  {
    '@type': 'WebPage',
    '@id': `${siteUrl}/summerclassuk`,
    url: `${siteUrl}/summerclassuk`,
    name: 'UK Summer Tamil Classes',
    description: 'Join our summer Tamil classes in the UK for students looking to improve their language skills.',
  },
  {
    '@type': 'WebPage',
    '@id': `${siteUrl}/summerclassscotland`,
    url: `${siteUrl}/summerclassscotland`,
    name: 'Scotland Summer Tamil Classes',
    description: 'Discover our Scotland summer Tamil programs for language learning and cultural experiences.',
  },
  {
    '@type': 'WebPage',
    '@id': `${siteUrl}/terms`,
    url: `${siteUrl}/terms`,
    name: 'Terms & Conditions',
    description: 'Read the terms and conditions for Global Tamil School services and website usage.',
  },
  {
    '@type': 'WebPage',
    '@id': `${siteUrl}/privacy`,
    url: `${siteUrl}/privacy`,
    name: 'Privacy Policy',
    description: 'Review Global Tamil School privacy practices and data handling policies.',
  },
];

export const metadata: Metadata = {
  title: {
    default: 'Global Tamil School | Best Online Tamil School & Tamil Language Classes',
    template: '%s | Global Tamil School',
  },
  description:
    'Global Tamil School is the best online Tamil school offering live Tamil classes, GCSE Tamil preparation, and international Tamil language education from London.',
  metadataBase: new URL('https://globaltamilschool.co.uk'),
  openGraph: {
    title: 'Global Tamil School | Online Tamil School & Tamil Classes',
    description:
      'Global Tamil School is the best online Tamil school offering live Tamil classes, GCSE Tamil preparation, and international Tamil language education from London.',
    url: 'https://globaltamilschool.co.uk',
    siteName: 'Global Tamil School',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'Global Tamil School Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Tamil School | Best Online Tamil School & Tamil Classes',
    description:
      'Global Tamil School is the best online Tamil school offering live Tamil classes, GCSE Tamil preparation, and international Tamil language education from London.',
    images: ['/logo.png'],
  },
  keywords: [
    'Online Tamil School',
    'Tamil School UK',
    'Tamil classes online',
    'Tamil language education',
    'GCSE Tamil',
    'London Tamil school',
    'online Tamil tuition',
    'international Tamil education',
  ],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  themeColor: '#0f172a',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ta">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Mukta+Malar:wght@400;500;600;700;800&family=PT+Sans:wght@400;700&family=Playfair+Display:wght@400;700;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'EducationalOrganization',
                  '@id': `${siteUrl}/#organization`,
                  name: 'Global Tamil School',
                  url: siteUrl,
                  logo: `${siteUrl}/logo.png`,
                  description:
                    'Global Tamil School is the best online Tamil school offering live Tamil classes, GCSE Tamil preparation, and international Tamil language education from London.',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'London',
                    addressRegion: 'United Kingdom',
                    postalCode: 'KT3 6QD',
                    addressCountry: 'GB',
                  },
                  contactPoint: [
                    {
                      '@type': 'ContactPoint',
                      contactType: 'customer support',
                      email: 'globaltamilschool@gmail.com',
                      telephone: '+44 74597 13276',
                    },
                  ],
                  sameAs: [
                    'https://www.facebook.com/globaltamilschool',
                    'https://www.instagram.com/globaltamilschool',
                    'https://www.youtube.com/@globaltamilschool',
                    'https://x.com/GlobalTamilSchl',
                  ],
                },
                {
                  '@type': 'WebSite',
                  '@id': `${siteUrl}/#website`,
                  name: 'Global Tamil School',
                  url: siteUrl,
                  publisher: {
                    '@id': `${siteUrl}/#organization`,
                  },
                },
                {
                  '@type': 'ItemList',
                  '@id': `${siteUrl}/#site-navigation`,
                  name: 'Global Tamil School main navigation',
                  itemListElement: siteNavigationItems.map((item, index) => ({
                    '@type': 'SiteNavigationElement',
                    position: index + 1,
                    name: item.name,
                    description: item.description,
                    url: item.url,
                  })),
                },
                ...pageStructuredData,
              ],
            }),
          }}
        />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <EnrollFloatButton />
          <WhatsAppButton />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
