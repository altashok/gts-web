
import type {Metadata} from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/whatsapp-button';
import EnrollFloatButton from '@/components/ui/enroll-float-button';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: 'Global Tamil School | Excellence in Tamil Education',
  description: 'Preserving and promoting Tamil language and culture through education and excellence. Serving the global Tamil community from London.',
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
