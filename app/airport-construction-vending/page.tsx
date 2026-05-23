import { Metadata } from 'next';
import ConstructionServicePage from '@/components/ConstructionServicePage';

export const metadata: Metadata = {
  title: 'Airport Construction Vending | Mission Critical Vending',
  description: 'Micro-markets for airport and terminal construction projects. SIDA badging, airport authority compliance, airside access — we\'re credentialed to operate where most vendors can\'t go.',
  alternates: { canonical: '/airport-construction-vending' },
};

export default function Page() {
  return (
    <ConstructionServicePage
      eyebrow="Airport & Terminal"
      heading="Airport Construction Vending"
      intro="Airside construction means no food trucks, no leaving the security perimeter, and a credentialing process most vendors have never dealt with. We have. We get badged, get on-site, and keep the market stocked around the clock."
      challenges={[
        'SIDA badging and airport authority vendor credentialing eliminates the majority of the vending industry',
        'No food trucks inside the security perimeter — workers who can\'t leave have no food without an on-site market',
        '24/7 flight operations mean restocking must be pre-scheduled through airport operations — not a drop-in visit',
        'Night shift construction crews need the same quality food access as day shift, at 2am, in an operational terminal',
      ]}
      blogSlug="vending-for-airport-construction"
      blogTitle="Vending for Airport Construction Sites: Feeding Crews in Airside Environments"
      relatedPages={[
        { href: '/hospital-construction-vending', label: 'Hospital Construction' },
        { href: '/military-construction-vending', label: 'Military & Government' },
        { href: '/stadium-construction-vending', label: 'Stadium & Arena' },
      ]}
    />
  );
}
