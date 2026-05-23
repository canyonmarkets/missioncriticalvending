import { Metadata } from 'next';
import ConstructionServicePage from '@/components/ConstructionServicePage';

export const metadata: Metadata = {
  title: 'Military and Government Construction Vending | Mission Critical Vending',
  description: 'Micro-markets for military base and federal government construction projects. DBIDS enrollment, cleared vendor staff, federal compliance — we\'ve done this before.',
  alternates: { canonical: '/military-construction-vending' },
};

export default function Page() {
  return (
    <ConstructionServicePage
      eyebrow="Military & Federal Government"
      heading="Military & Government Construction Vending"
      intro="Federal construction requires cleared vendors, installation-specific badging, and compliance with the prime's contract requirements. We've navigated DBIDS enrollment, federal insurance documentation, and installation security coordination before. We know what it takes."
      challenges={[
        'DBIDS enrollment and federal installation access requires lead time — vendors who haven\'t done it before slow down your project start',
        'Workers on a military installation cannot leave freely during breaks — without an on-site market, they have no food options',
        'Federal liability documentation, additional insured certificates, and subcontractor compliance plans require specific setup',
        'Every restocking visit must be pre-coordinated with installation security — not a drop-in like a commercial route',
      ]}
      blogSlug="vending-for-military-construction"
      blogTitle="Vending for Military and Government Construction: Cleared Vendors for Secure Federal Build Sites"
      relatedPages={[
        { href: '/hospital-construction-vending', label: 'Hospital Construction' },
        { href: '/airport-construction-vending', label: 'Airport Construction' },
        { href: '/refinery-construction-vending', label: 'Refinery & Petrochemical' },
      ]}
    />
  );
}
