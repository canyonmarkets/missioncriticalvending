import { MetadataRoute } from 'next';

const BASE = 'https://missioncriticalvending.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${BASE}/blog/vending-for-data-center-construction`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/blog/vending-for-hospital-construction`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/blog/vending-for-solar-farm-construction`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/blog/vending-for-airport-construction`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/blog/vending-for-semiconductor-fab-construction`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/blog/vending-for-stadium-construction`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/blog/vending-for-highway-construction`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/blog/vending-for-industrial-plant-construction`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/blog/vending-for-refinery-construction`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/blog/vending-for-military-construction`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ];
}
