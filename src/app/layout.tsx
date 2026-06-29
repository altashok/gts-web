import type {Metadata} from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import EnrollFloatButton from '@/components/ui/enroll-float-button';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: {
    default: 'Global Tamil School | Online Tamil School & Tamil Language Classes',
    template: '%s | Global Tamil School',
  },
  description:
    'Global Tamil School is an online Tamil school offering live Tamil classes, GCSE Tamil preparation, and international Tamil language education from London.',
  metadataBase: new URL('https://globaltamilschool.co.uk'),
  openGraph: {
    title: 'Global Tamil School | Online Tamil School & Tamil Classes',
    description:
      'Global Tamil School is an online Tamil school offering live Tamil classes, GCSE Tamil preparation, and international Tamil language education from London.',
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
    title: 'Global Tamil School | Online Tamil School & Tamil Classes',
    description:
      'Global Tamil School is an online Tamil school offering live Tamil classes, GCSE Tamil preparation, and international Tamil language education from London.',
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
              '@type': 'EducationalOrganization',
              name: 'Global Tamil School',
              url: 'https://globaltamilschool.co.uk',
              logo: 'https://globaltamilschool.co.uk/logo.png',
              description:
                'Global Tamil School is an online Tamil school offering live Tamil classes, GCSE Tamil preparation, and international Tamil language education from London.',
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
