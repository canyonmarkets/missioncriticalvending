import { Metadata } from 'next';
import ConstructionServicePage from '@/components/ConstructionServicePage';

export const metadata: Metadata = {
  title: 'Semiconductor Fab Construction Vending | Mission Critical Vending',
  description: 'Micro-markets for semiconductor fab and chip plant construction. Billion-dollar projects, 1,000+ workers, aggressive timelines — multi-location market deployment at enterprise scale.',
  alternates: { canonical: '/semiconductor-fab-construction-vending' },
};

export default function Page() {
  return (
    <ConstructionServicePage
      eyebrow="Semiconductor & Advanced Manufacturing"
      heading="Semiconductor Fab Construction Vending"
      intro="Billion-dollar builds. Aggressive timelines. Workforces in the thousands. On a project where every hour of lost productivity has a real dollar cost, food service cannot be a problem. We eliminate it."
      challenges={[
        'Peak workforces of 1,000 to 10,000 workers across a large campus require multiple market locations, not one machine',
        'Project-owner prequalification and compliance requirements add a layer beyond what the GC manages',
        'Cleanroom-adjacent environments require careful market placement and vendor staff awareness of contamination controls',
        'Multi-building campuses with parallel construction phases need distributed food service that moves with the work',
      ]}
      blogSlug="vending-for-semiconductor-fab-construction"
      blogTitle="Vending for Semiconductor Fab Construction: Feeding the Workforce Building America's Chip Plants"
      relatedPages={[
        { href: '/data-center-construction-vending', label: 'Data Centers' },
        { href: '/industrial-plant-construction-vending', label: 'Industrial Plants' },
        { href: '/hospital-construction-vending', label: 'Hospital Construction' },
      ]}
    />
  );
}
