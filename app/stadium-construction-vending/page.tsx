import { Metadata } from 'next';
import ConstructionServicePage from '@/components/ConstructionServicePage';

export const metadata: Metadata = {
  title: 'Stadium and Arena Construction Vending | Mission Critical Vending',
  description: 'Micro-markets for stadium and arena construction projects. Hard deadlines, urban sites, workforce surges — we scale with the crew and run completely off the GC\'s plate.',
  alternates: { canonical: '/stadium-construction-vending' },
};

export default function Page() {
  return (
    <ConstructionServicePage
      eyebrow="Stadium & Arena"
      heading="Stadium & Arena Construction Vending"
      intro="Hard deadlines. Urban sites with no room for food trucks. A workforce that can double in the final push toward opening day. We scale with the project and keep food service completely off the GC's plate."
      challenges={[
        'Opening day is public knowledge — there are no extensions. The food service vendor has to keep pace with that schedule.',
        'Urban sites leave no room for food trucks, and workers can\'t lose 30 minutes of a break navigating city streets for food',
        'The workforce surges 2-3x in the final months as specialty trades stack up — vendors who can\'t scale create problems at the worst moment',
        'High-visibility projects mean management problems have an audience — food service has to be invisible to the GC',
      ]}
      blogSlug="vending-for-stadium-construction"
      blogTitle="Vending for Stadium and Arena Construction: Feeding Large Crews on High-Stakes Deadline Builds"
      relatedPages={[
        { href: '/airport-construction-vending', label: 'Airport Construction' },
        { href: '/data-center-construction-vending', label: 'Data Centers' },
        { href: '/industrial-plant-construction-vending', label: 'Industrial Plants' },
      ]}
    />
  );
}
