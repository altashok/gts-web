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
    src: '/logo/cambridge-univ.png',
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

const marqueeLogos = [...logos, ...logos];

export default function PartnerLogoStrip() {
  const { t } = useLanguage();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 lg:mt-8">
      <div className="rounded-[2rem] border border-primary/10 bg-white/80 p-4 shadow-sm backdrop-blur-sm sm:p-6">
        <div className="mb-4 flex flex-col items-center gap-2 text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-primary">{t('partnerStrip.tag')}</p>
          <h3 className="font-headline text-3xl md:text-5xl font-black text-foreground">{t('partnerStrip.title')}</h3>
        </div>

        <div className="logo-marquee overflow-hidden">
          <div className="logo-marquee-track flex w-max items-center gap-4 py-2">
            {marqueeLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex h-64 min-w-[260px] items-center justify-center rounded-2xl border border-primary/10 bg-background/80 p-8 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                {logo.isImage ? (
                  <div className="relative h-36 w-full">
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
      </div>

      <style jsx global>{`
        .logo-marquee-track {
          animation: marquee 22s linear infinite;
        }

        .logo-marquee:hover .logo-marquee-track {
          animation-play-state: paused;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
