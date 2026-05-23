import { Metadata } from 'next';
import ConstructionServicePage from '@/components/ConstructionServicePage';

export const metadata: Metadata = {
  title: 'Highway and Bridge Construction Vending | Mission Critical Vending',
  description: 'Mobile vending solutions for highway, bridge, and infrastructure construction. Crews spread across miles of right-of-way, night shift operations, no fixed break room — we put the market where the crew is.',
  alternates: { canonical: '/highway-construction-vending' },
};

export default function Page() {
  return (
    <ConstructionServicePage
      eyebrow="Infrastructure & Transportation"
      heading="Highway & Bridge Construction Vending"
      intro="Workers distributed across miles of active right-of-way. Night shifts with zero food access nearby. A work zone that migrates as the project advances. We position the market close to the crew and move it as the work moves."
      challenges={[
        'Crews spread across miles of corridor with no central break room — a single fixed market serves nobody well',
        'Night shift highway work runs when nothing is open and leaving the active work zone is often a safety violation',
        'The active work zone advances along the corridor — a market anchored at the original staging area becomes useless by month 6',
        'Paving and concrete crews working in extreme heat or cold need weather-appropriate hydration and nutrition',
      ]}
      blogSlug="vending-for-highway-construction"
      blogTitle="Vending for Highway and Bridge Construction: Mobile Solutions for Distributed Crews"
      relatedPages={[
        { href: '/solar-farm-construction-vending', label: 'Solar Farm Construction' },
        { href: '/industrial-plant-construction-vending', label: 'Industrial Plants' },
        { href: '/refinery-construction-vending', label: 'Refinery & Petrochemical' },
      ]}
    />
  );
}
