import type { Metadata } from 'next';

const siteUrl = 'https://globaltamilschool.co.uk';

export const metadata: Metadata = {
  title: 'Tamil Courses, GCSE & Cambridge Qualifications',
  description:
    'Study Tamil online with Global Tamil School. Explore UK-recognised BTEB, Cambridge O-Level and A-Level, Pearson Edexcel GCSE, and Tamil Virtual Academy qualifications.',
  alternates: {
    canonical: `${siteUrl}/courses/tamil`,
  },
  openGraph: {
    title: 'Tamil Courses, GCSE & Cambridge Qualifications | Global Tamil School',
    description:
      'Explore structured online Tamil courses and UK-recognised GCSE, Cambridge, Pearson Edexcel, and BTEB qualifications.',
    url: `${siteUrl}/courses/tamil`,
    siteName: 'Global Tamil School',
    type: 'website',
    locale: 'en_GB',
  },
};

export default function TamilCoursesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
