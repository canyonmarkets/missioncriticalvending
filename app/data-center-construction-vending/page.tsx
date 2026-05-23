import { Metadata } from 'next';
import ConstructionServicePage from '@/components/ConstructionServicePage';

export const metadata: Metadata = {
  title: 'Data Center Construction Vending | Mission Critical Vending',
  description: 'Free micro-market installation for data center and hyperscale construction sites. 400+ workers, rotating shifts, zero food infrastructure — fully stocked, fully managed, zero cost to the GC.',
  alternates: { canonical: '/data-center-construction-vending' },
};

export default function Page() {
  return (
    <ConstructionServicePage
      eyebrow="Hyperscale & Colocation"
      heading="Data Center Construction Vending"
      intro="Rotating shifts. 300 to 600 workers. A massive footprint and zero food infrastructure. We deploy fully stocked micro-markets inside your construction tent — free of charge, fully managed, 24/7."
      challenges={[
        '400+ workers across rotating shifts with no break room and no food truck access on a secured site',
        'Traditional vending machines hold 300 items — less than one per worker. They run empty and stay that way.',
        'Workers burning 3,000+ calories in 10-hour shifts need real protein and hydration, not chips and soda',
        'Vendors who can\'t navigate site badging and security protocols fail on a mission-critical build',
      ]}
      blogSlug="vending-for-data-center-construction"
      blogTitle="Vending for Data Center Construction Sites: What Actually Works"
      relatedPages={[
        { href: '/semiconductor-fab-construction-vending', label: 'Semiconductor Fabs' },
        { href: '/hospital-construction-vending', label: 'Hospital Construction' },
        { href: '/industrial-plant-construction-vending', label: 'Industrial Plants' },
      ]}
    />
  );
}
