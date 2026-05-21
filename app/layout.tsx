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
  title: 'Canyon Markets | Premium Workforce Amenities for Large Construction Sites',
  description:
    'Canyon Markets installs premium micro-markets and automated vending solutions built for large-scale construction projects — data centers, industrial facilities, and major infrastructure builds. Zero operational burden. Always stocked.',
  keywords: [
    'micro-market',
    'vending',
    'construction site food service',
    'data center',
    'industrial site',
    'workforce amenities',
    'Canyon Markets',
  ],
};

export const viewport: Viewport = {
  themeColor: '#0D1017',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable}`}
    >
      <body className="min-h-screen bg-charcoal-900 text-steel-100 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
