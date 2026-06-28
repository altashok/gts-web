import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const logos = [
  {
    name: 'BTEB',
    src: '/logo/bteb-logo.png',
    alt: 'BTEB logo',
    isImage: true,
  },
  {
    name: 'TVU',
    src: '/logo/tvu.png',
    alt: 'TVU logo',
    isImage: true,
  },
  {
    name: 'Cambridge',
    src: '/logo/cambridge.png',
    alt: 'Cambridge logo',
    isImage: true,
    label: 'Cambridge',
  },
  {
    name: 'Pearson Edexcel',
    src: '/logo/edexcel.png',
    alt: 'Pearson Edexcel logo',
    isImage: true,
    label: 'Pearson Edexcel',
  },
  {
    name: 'GIFA UK',
    src: '/logo/gifa-uk.png',
    alt: 'GIFA UK logo',
    isImage: true,
  },
  {
    name: 'WFKA',
    src: '/logo/wfka.png',
    alt: 'WFKA logo',
    isImage: true,
  },
];

export default function PartnerLogoStrip() {
  const { t } = useLanguage();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 lg:mt-8">
      <div className="rounded-[2rem] border border-primary/10 bg-white/80 p-4 shadow-sm backdrop-blur-sm sm:p-6">
        <div className="mb-4 flex flex-col items-center gap-2 text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-primary">{t('partnerStrip.tag')}</p>
          <h3 className="font-headline text-3xl md:text-5xl font-black text-foreground">{t('partnerStrip.title')}</h3>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-32 items-center justify-center rounded-2xl border border-primary/10 bg-background/80 p-5 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              {logo.isImage ? (
                <div className="relative h-20 w-full">
                  <Image
                    src={logo.src!}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, 16vw"
                  />
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-base font-black uppercase tracking-[0.2em] text-foreground">{logo.label}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
