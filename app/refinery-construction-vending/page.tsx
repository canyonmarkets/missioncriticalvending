import { Metadata } from 'next';
import ConstructionServicePage from '@/components/ConstructionServicePage';

export const metadata: Metadata = {
  title: 'Refinery and Petrochemical Construction Vending | Mission Critical Vending',
  description: 'Micro-markets for refinery construction and petrochemical plant turnarounds. Process industry safety compliance, controlled-access environments, 48-hour deployment — we\'re built for it.',
  alternates: { canonical: '/refinery-construction-vending' },
};

export default function Page() {
  return (
    <ConstructionServicePage
      eyebrow="Refinery & Petrochemical"
      heading="Refinery & Petrochemical Construction Vending"
      intro="Controlled-access industrial environments. Process industry safety compliance. Turnaround crews running 24/7 on a schedule where every hour of downtime costs money. We get qualified, deploy in 48 hours, and run around the clock."
      challenges={[
        'Process industry safety orientation, site-specific PPE compliance, and controlled-access protocols eliminate most vendors on day one',
        'Turnaround workforces surge from zero to 2,000+ workers in days — food service has to be operational from the first shift',
        'Around-the-clock operations mean night shift crews need the same stocked market as day shift — at 3am',
        'Facility operators typically require $10M+ in general liability coverage — most vending operators don\'t carry it',
      ]}
      blogSlug="vending-for-refinery-construction"
      blogTitle="Vending for Refinery and Petrochemical Construction: Food Service in Controlled Industrial Environments"
      relatedPages={[
        { href: '/industrial-plant-construction-vending', label: 'Industrial Plants' },
        { href: '/military-construction-vending', label: 'Military & Government' },
        { href: '/highway-construction-vending', label: 'Highway & Bridge' },
      ]}
    />
  );
}
