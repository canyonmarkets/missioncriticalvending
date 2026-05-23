import { Metadata } from 'next';
import ConstructionServicePage from '@/components/ConstructionServicePage';

export const metadata: Metadata = {
  title: 'Hospital Construction Vending | Mission Critical Vending',
  description: 'Micro-markets for hospital and healthcare construction sites. Strict badging, security-controlled access, large crews — we get credentialed and keep the market stocked. Zero cost to the GC.',
  alternates: { canonical: '/hospital-construction-vending' },
};

export default function Page() {
  return (
    <ConstructionServicePage
      eyebrow="Healthcare & Medical"
      heading="Hospital Construction Vending"
      intro="Strict badging. Security-controlled access. Large crews doing physically demanding work on an active medical campus. We get our team credentialed, deploy the market, and keep it stocked — you never touch it."
      challenges={[
        'Vendor badging and healthcare campus compliance eliminates most of the vending industry before the first conversation',
        'No food trucks through a hospital security perimeter — workers have no food access without an on-site market',
        'Multi-year builds across shifting work zones require a vendor who can reposition equipment as phases change',
        'Hospital authority liability requirements often exceed $5M — most vending operators don\'t carry it',
      ]}
      blogSlug="vending-for-hospital-construction"
      blogTitle="Vending for Hospital Construction Sites: Feeding Crews in Security-Controlled Environments"
      relatedPages={[
        { href: '/military-construction-vending', label: 'Military & Government' },
        { href: '/airport-construction-vending', label: 'Airport Construction' },
        { href: '/data-center-construction-vending', label: 'Data Centers' },
      ]}
    />
  );
}
