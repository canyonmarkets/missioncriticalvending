import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Field Guides | Mission Critical Vending',
  description: 'In-depth field guides on construction site vending and micro-market operations across every major large-scale construction vertical — from data centers to refineries to military builds.',
  alternates: { canonical: '/blog' },
};

const POSTS = [
  {
    slug: 'vending-for-data-center-construction',
    title: 'Vending for Data Center Construction Sites: What Actually Works',
    category: 'Data Centers',
    excerpt: 'How do you feed 400 construction workers on a hyperscale build with no break room? Smart micro-markets engineered for mission-critical construction environments.',
    read: '7 min',
  },
  {
    slug: 'vending-for-hospital-construction',
    title: 'Vending for Hospital Construction Sites: Feeding Crews in Security-Controlled Environments',
    category: 'Hospital & Healthcare',
    excerpt: 'Strict badging requirements, security-controlled campuses, and physically demanding work. Here\'s what it takes to run food service on a major hospital build.',
    read: '7 min',
  },
  {
    slug: 'vending-for-solar-farm-construction',
    title: 'Vending for Solar Farm Construction: Feeding Remote Crews in the Middle of Nowhere',
    category: 'Solar & Wind',
    excerpt: 'Remote desert sites, 30 miles from the nearest food option, crews working in triple-digit heat. How a micro-market solves the problem food trucks can\'t.',
    read: '7 min',
  },
  {
    slug: 'vending-for-airport-construction',
    title: 'Vending for Airport Construction Sites: Feeding Crews in Airside Environments',
    category: 'Airport & Terminal',
    excerpt: 'SIDA badging, airport authority compliance, no food trucks past security. Most vendors can\'t clear the access requirements. Here\'s what does work.',
    read: '7 min',
  },
  {
    slug: 'vending-for-semiconductor-fab-construction',
    title: 'Vending for Semiconductor Fab Construction: Feeding the Workforce Building America\'s Chip Plants',
    category: 'Semiconductor Fabs',
    excerpt: 'Billion-dollar projects. Aggressive timelines. Workforces in the thousands across multi-building campuses. Food service at fab scale.',
    read: '7 min',
  },
  {
    slug: 'vending-for-stadium-construction',
    title: 'Vending for Stadium and Arena Construction: Feeding Large Crews on High-Stakes Deadline Builds',
    category: 'Stadium & Arena',
    excerpt: 'Hard opening-day deadlines. Urban sites. Workforce surges in the final push. What actually works when the schedule never moves.',
    read: '6 min',
  },
  {
    slug: 'vending-for-highway-construction',
    title: 'Vending for Highway and Bridge Construction: Mobile Solutions for Distributed Crews',
    category: 'Highway & Bridge',
    excerpt: 'Workers spread across miles of active right-of-way, night shift operations, no fixed break room. Mobile vending that follows the work.',
    read: '6 min',
  },
  {
    slug: 'vending-for-industrial-plant-construction',
    title: 'Vending for Industrial Plant Construction: Feeding Large MEP Crews Across Massive Footprints',
    category: 'Industrial Plants',
    excerpt: 'Large MEP crews, massive campus footprints, remote or suburban sites with nothing nearby. Multi-location micro-market deployment at scale.',
    read: '7 min',
  },
  {
    slug: 'vending-for-refinery-construction',
    title: 'Vending for Refinery and Petrochemical Construction: Food Service in Controlled Industrial Environments',
    category: 'Refinery & Petrochemical',
    excerpt: 'Turnarounds, process safety compliance, controlled-access environments — and crews that need food around the clock. The refinery vending challenge.',
    read: '7 min',
  },
  {
    slug: 'vending-for-military-construction',
    title: 'Vending for Military and Government Construction: Cleared Vendors for Secure Federal Build Sites',
    category: 'Military & Government',
    excerpt: 'DBIDS enrollment, federal insurance requirements, installation security coordination. Federal construction vending for vendors who\'ve done it before.',
    read: '7 min',
  },
];

export default function BlogIndexPage() {
  return (
    <div className="bg-charcoal-900 min-h-screen">

      {/* ── Header ── */}
      <div className="max-w-5xl mx-auto px-6 pt-24 pb-12">
        <p className="text-ember-500 font-mono text-sm tracking-[0.3em] uppercase mb-4 text-center">
          Mission Critical Vending
        </p>
        <h1 className="font-display font-bold text-3xl sm:text-5xl uppercase tracking-wide text-steel-50 text-center leading-tight mb-6">
          Field Guides
        </h1>
        <p className="text-steel-300 text-base leading-relaxed max-w-2xl mx-auto text-center">
          In-depth operational guides on construction site vending across every major large-scale
          construction vertical. Written by the Canyon Markets field team.
        </p>
      </div>

      {/* ── Post grid ── */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {POSTS.map(({ slug, title, category, excerpt, read }) => (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className="group flex flex-col gap-4 rounded-xl border border-steel-500/15 bg-charcoal-800 p-7 transition-all duration-300 hover:border-ember-500/40 hover:bg-charcoal-700 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-ember-500 font-mono text-xs tracking-[0.2em] uppercase">{category}</span>
                <span className="text-steel-500 font-mono text-xs">{read} read</span>
              </div>
              <h2 className="font-display font-bold text-base uppercase tracking-wide text-steel-50 leading-snug group-hover:text-ember-400 transition-colors duration-200">
                {title}
              </h2>
              <p className="text-steel-300 text-sm leading-relaxed flex-1">
                {excerpt}
              </p>
              <span className="text-ember-500 text-xs font-mono tracking-wide group-hover:text-ember-400 transition-colors duration-200">
                Read the guide →
              </span>
            </Link>
          ))}
        </div>

        {/* ── Back home ── */}
        <div className="mt-12 pt-8 border-t border-steel-500/10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-steel-400 hover:text-ember-500 transition-colors duration-200 font-mono tracking-wide"
          >
            ← Back to Mission Critical Vending
          </Link>
        </div>
      </div>

    </div>
  );
}
