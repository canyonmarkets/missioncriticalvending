import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono, Oswald } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

/* Oswald Bold — closest freely available match to the GMC Canyon truck badge lettering.
   Heavy condensed strokes, clean geometric letterforms, strong automotive presence. */
const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  // ── Titles ──────────────────────────────────────────────────────────
  title: {
    default: 'Mission Critical Vending | Micro-Markets for Large-Scale Construction Sites',
    template: '%s | Mission Critical Vending',
  },

  // ── Core description ─────────────────────────────────────────────────
  description:
    'Canyon Markets deploys premium micro-markets and smart vending for large-scale construction sites nationwide — data centers, hospitals, airports, semiconductor fabs, solar farms, stadiums, and industrial plants. Zero cost to the GC. Fully stocked, fully managed, 24/7.',

  // ── Keywords ────────────────────────────────────────────────────────
  keywords: [
    'construction site vending',
    'micro-market construction site',
    'large construction site food service',
    'data center construction food service',
    'hospital construction vending',
    'airport construction food service',
    'semiconductor fab construction vending',
    'solar farm construction food service',
    'industrial plant construction vending',
    'stadium construction food service',
    'large project workforce vending',
    'mission critical vending',
    'industrial site micro-market',
    'job site vending machines',
    'large scale construction workforce amenities',
    'smart vending construction',
    'workforce nutrition construction',
    'Canyon Markets vending',
  ],

  // ── Authorship ───────────────────────────────────────────────────────
  authors: [{ name: 'Canyon Markets', url: 'https://missioncriticalvending.com' }],
  creator: 'Canyon Markets',
  publisher: 'Canyon Markets',

  // ── Canonical base URL ───────────────────────────────────────────────
  metadataBase: new URL('https://missioncriticalvending.com'),
  alternates: { canonical: '/' },

  // ── Open Graph ───────────────────────────────────────────────────────
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://missioncriticalvending.com',
    siteName: 'Mission Critical Vending by Canyon Markets',
    title: 'Mission Critical Vending | Micro-Markets for Large-Scale Construction Sites',
    description:
      'Premium micro-markets and smart vending engineered for data centers, industrial complexes, and major construction projects. Fully stocked, fully managed, zero burden.',
    images: [
      {
        url: '/2.png',
        width: 1200,
        height: 630,
        alt: 'Canyon Markets — Mission Critical Vending micro-market installation',
      },
    ],
  },

  // ── Twitter / X Card ────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'Mission Critical Vending | Micro-Markets for Large-Scale Construction Sites',
    description:
      'Premium micro-markets and smart vending for data centers, industrial sites, and large construction projects. Zero operational burden.',
    images: ['/2.png'],
  },

  // ── Crawling & indexing ──────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#0D1017',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Canyon Markets — Mission Critical Vending',
  alternateName: 'Mission Critical Vending',
  description:
    'Canyon Markets deploys premium micro-markets and smart vending solutions engineered for large-scale construction sites including data centers, industrial complexes, and major infrastructure builds.',
  url: 'https://missioncriticalvending.com',
  telephone: '+16029356830',
  email: 'info@canyon-markets.com',
  logo: 'https://missioncriticalvending.com/logo.png',
  image: 'https://missioncriticalvending.com/Snacks Drinks.png',
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Construction Site Vending Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Premium Micro-Markets & Smart Coolers',
          description:
            'Fully stocked micro-markets with open shelving, smart coolers, and self-checkout kiosks engineered for 24/7 large-scale construction environments.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Smart Vending & Site Essentials',
          description:
            'Enterprise-grade smart vending kiosks deployed near active work zones with contactless payment, PPE, and site essentials around the clock.',
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-US"
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable}`}
    >
      <body className="min-h-screen bg-charcoal-900 text-steel-100 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
