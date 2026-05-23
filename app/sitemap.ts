import { MetadataRoute } from 'next';

const BASE = 'https://missioncriticalvending.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    // ── Service pages ─────────────────────────────────────────────────
    { url: `${BASE}/data-center-construction-vending`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/hospital-construction-vending`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/solar-farm-construction-vending`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/airport-construction-vending`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/semiconductor-fab-construction-vending`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/stadium-construction-vending`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/highway-construction-vending`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/industrial-plant-construction-vending`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/refinery-construction-vending`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/military-construction-vending`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    // ── Blog index + posts ────────────────────────────────────────────
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
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
