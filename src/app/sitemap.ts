import type { MetadataRoute } from 'next';

const baseUrl = 'https://globaltamilschool.co.uk';

const staticPages: MetadataRoute.Sitemap = [
  {
    url: `${baseUrl}/`,
    lastModified: new Date(),
  },
  {
    url: `${baseUrl}/about`,
    lastModified: new Date(),
  },
  {
    url: `${baseUrl}/activities`,
    lastModified: new Date(),
  },
  {
    url: `${baseUrl}/team`,
    lastModified: new Date(),
  },
  {
    url: `${baseUrl}/affiliations`,
    lastModified: new Date(),
  },
  {
    url: `${baseUrl}/enroll`,
    lastModified: new Date(),
  },
  {
    url: `${baseUrl}/contact`,
    lastModified: new Date(),
  },
  {
    url: `${baseUrl}/shop`,
    lastModified: new Date(),
  },
  {
    url: `${baseUrl}/privacy`,
    lastModified: new Date(),
  },
  {
    url: `${baseUrl}/terms`,
    lastModified: new Date(),
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticPages;
}
