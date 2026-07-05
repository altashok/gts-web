import type { MetadataRoute } from 'next';

const baseUrl = 'https://globaltamilschool.co.uk';
const lastModified = new Date('2026-07-05');

const staticPages: MetadataRoute.Sitemap = [
  {
    url: `${baseUrl}/`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 1,
  },
  {
    url: `${baseUrl}/courses/tamil`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.95,
  },
  {
    url: `${baseUrl}/enroll`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.9,
  },
  {
    url: `${baseUrl}/affiliations`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.85,
  },
  {
    url: `${baseUrl}/whoweare/about`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${baseUrl}/whoweare/activities`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    url: `${baseUrl}/whoweare/team`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.75,
  },
  {
    url: `${baseUrl}/contact`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.75,
  },
  {
    url: `${baseUrl}/summerclassuk`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: `${baseUrl}/summerclassscotland`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  },
  {
    url: `${baseUrl}/shop`,
    lastModified,
    changeFrequency: 'yearly',
    priority: 0.3,
  },
  {
    url: `${baseUrl}/privacy`,
    lastModified,
    changeFrequency: 'yearly',
    priority: 0.2,
  },
  {
    url: `${baseUrl}/terms`,
    lastModified,
    changeFrequency: 'yearly',
    priority: 0.2,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticPages;
}
