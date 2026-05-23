import { Metadata } from 'next';
import ConstructionServicePage from '@/components/ConstructionServicePage';

export const metadata: Metadata = {
  title: 'Solar Farm Construction Vending | Mission Critical Vending',
  description: 'Micro-markets for solar and wind farm construction crews working in remote locations. 30+ miles from the nearest food. Desert heat. Large installation crews. We bring the market to the site.',
  alternates: { canonical: '/solar-farm-construction-vending' },
};

export default function Page() {
  return (
    <ConstructionServicePage
      eyebrow="Renewable Energy"
      heading="Solar Farm Construction Vending"
      intro="Remote desert sites. 30+ miles from the nearest food option. Crews working in triple-digit heat with serious hydration requirements. We bring a fully stocked market to the site — wherever that site happens to be."
      challenges={[
        'Remote locations with no nearby restaurants, gas stations, or food options within a reasonable drive',
        'Desert heat makes hydration a safety requirement, not a preference — crews need electrolytes in volume',
        'Large panel installation crews at peak can run 600-800 workers across a massive open-land footprint',
        'Workforce scales from civil grading crews to panel installers to commissioning teams — the vendor has to scale with it',
      ]}
      blogSlug="vending-for-solar-farm-construction"
      blogTitle="Vending for Solar Farm Construction: Feeding Remote Crews in the Middle of Nowhere"
      relatedPages={[
        { href: '/highway-construction-vending', label: 'Highway & Bridge' },
        { href: '/industrial-plant-construction-vending', label: 'Industrial Plants' },
        { href: '/data-center-construction-vending', label: 'Data Centers' },
      ]}
    />
  );
}
