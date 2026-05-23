import { Metadata } from 'next';
import ConstructionServicePage from '@/components/ConstructionServicePage';

export const metadata: Metadata = {
  title: 'Industrial Plant Construction Vending | Mission Critical Vending',
  description: 'Micro-markets for industrial plant and manufacturing facility construction. Large MEP crews across massive footprints, often miles from the nearest food. Multi-location deployment at any scale.',
  alternates: { canonical: '/industrial-plant-construction-vending' },
};

export default function Page() {
  return (
    <ConstructionServicePage
      eyebrow="Industrial & Manufacturing"
      heading="Industrial Plant Construction Vending"
      intro="Large MEP crews across a campus the size of several city blocks, often in a location with nothing nearby. We deploy market locations matched to your workforce concentration — and scale them as headcount changes across each phase."
      challenges={[
        '500 to 1,500 workers spread across a large campus need multiple market locations, not a single machine near the trailer',
        'Industrial sites are frequently remote or suburban — the nearest restaurant is a 15-minute drive workers can\'t take during a 30-minute break',
        'MEP rough-in is the most complex phase — dozens of specialty subcontractors running simultaneously, all needing food access',
        'A 3-year build goes from civil crews to MEP peak to commissioning — headcount swings dramatically and the vendor needs to match it',
      ]}
      blogSlug="vending-for-industrial-plant-construction"
      blogTitle="Vending for Industrial Plant Construction: Feeding Large MEP Crews Across Massive Footprints"
      relatedPages={[
        { href: '/semiconductor-fab-construction-vending', label: 'Semiconductor Fabs' },
        { href: '/refinery-construction-vending', label: 'Refinery & Petrochemical' },
        { href: '/data-center-construction-vending', label: 'Data Centers' },
      ]}
    />
  );
}
