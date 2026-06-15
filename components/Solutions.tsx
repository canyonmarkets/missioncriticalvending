import Image from 'next/image';
import { Beef, Zap, Droplets, Scan, Camera } from 'lucide-react';
import Reveal from '@/components/Reveal';

type Feature = {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  label: string;
  detail: string;
};

type Section = {
  id: string;
  eyebrow: string;
  heading: string;
  subheading?: string;
  body: string;
  features: Feature[];
  imageAlt: string;
  imageBg: string;
  imageLabel: string;
  photo?: string;
  flip: boolean;
};

const SECTIONS: Section[] = [
  {
    id: 'micro-markets',
    eyebrow: 'On-Site Nutrition',
    heading: 'Premium Micro-Markets & Smart Coolers',
    body: 'Large-scale construction projects run 24/7 across rotating shifts. We equip your site with fully stocked micro-markets and smart coolers engineered around the physical demands of heavy-duty construction work — not vending machine afterthoughts.',
    features: [
      {
        icon: Beef,
        label: 'High-Protein & Carnivore-Friendly',
        detail: 'Beef jerky, premium deli meals, and high-protein bars curated for workers burning serious calories on demanding builds.',
      },
      {
        icon: Zap,
        label: 'Premium Meal Replacements & Energy',
        detail: 'Shakes, energy boosters, and functional nutrition options that keep crews sharp across long shifts without a cafeteria on-site.',
      },
      {
        icon: Droplets,
        label: 'Hydration Station',
        detail: 'Electrolyte drinks, sports beverages, and premium water options — always within reach, always cold.',
      },
    ],
    imageAlt: 'Premium micro-market installation',
    imageBg: 'from-charcoal-700 to-charcoal-800',
    imageLabel: 'Micro-Market / Smart Cooler',
    photo: '/2.png',
    flip: false,
  },
  {
    id: 'smart-vending',
    eyebrow: 'Site-Wide Convenience',
    heading: 'Smart Vending & Site Essentials',
    subheading: 'Enterprise-Grade Tech. Seamless Operations.',
    body: 'Lost time costs money. Our smart kiosks deploy directly near active work zones — providing contactless access to nutrition, hydration, PPE, and site essentials around the clock. Backed by enterprise-class hardware purpose-built for demanding field environments.',
    features: [
      {
        icon: Scan,
        label: 'Mashgin 3D Vision Checkout',
        detail: 'Speed is critical on a massive job site. Our micro-markets feature Mashgin self-checkout kiosks with advanced 3D computer vision — scanning multiple items simultaneously, no barcodes required, checkouts completed in under two seconds. Workers refuel and return to the line instantly.',
      },
      {
        icon: Camera,
        label: 'Panoptyc Smart Security System',
        detail: 'Large-scale job sites demand strict oversight. We protect our inventory and your facility with Panoptyc AI-powered smart cameras — 24/7 autonomous monitoring, intelligent loss-detection analytics, and proactive security alerts. Complete operational integrity with zero burden on site management.',
      },
    ],
    imageAlt: 'Canyon Markets micro-market setup inside a data center construction tent',
    imageBg: 'from-charcoal-600 to-charcoal-700',
    imageLabel: 'Smart Vending / POS Kiosk',
    photo: '/1.png',
    flip: true,
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="bg-zinc-800">
      {SECTIONS.map(({ id, eyebrow, heading, subheading, body, features, imageAlt, imageBg, imageLabel, photo, flip }) => (
        <Reveal key={id} className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <div
            className={[
              'flex flex-col gap-12 lg:gap-20 lg:items-center',
              flip ? 'lg:flex-row-reverse' : 'lg:flex-row',
            ].join(' ')}
          >
            {/* ── Text column ───────────────────────────────────────────── */}
            <div className="flex flex-col gap-8 lg:w-1/2">
              <div>
                <p className="text-ember-500 font-mono text-base tracking-[0.3em] uppercase mb-4">
                  {eyebrow}
                </p>
                <h2 className="font-display font-bold text-3xl sm:text-4xl uppercase tracking-wide text-steel-50 leading-tight">
                  {heading}
                </h2>
                {subheading && (
                  <p className="mt-3 font-display font-bold text-lg uppercase tracking-wide text-ember-500/80">
                    {subheading}
                  </p>
                )}
                <p className="mt-5 text-steel-100 text-base leading-relaxed max-w-lg">
                  {body}
                </p>
              </div>

              <ul className="flex flex-col gap-7">
                {features.map(({ icon: Icon, label, detail }) => (
                  <li key={label} className="flex gap-4">
                    <div className="flex-shrink-0 mt-0.5 flex h-10 w-10 items-center justify-center rounded-lg bg-ember-500/10 text-ember-500">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-display font-bold text-lg uppercase tracking-wide text-steel-100">
                        {label}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-steel-200">
                        {detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Image / placeholder column ─────────────────────────────── */}
            <div className="lg:w-1/2">
              {photo ? (
                <div className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-steel-500/10">
                  <Image
                    src={photo}
                    alt={imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-charcoal-950/40 via-transparent to-transparent" />
                  <span aria-hidden="true" className="absolute top-0 left-0 h-12 w-12 border-t-2 border-l-2 border-ember-500/60 rounded-tl-2xl" />
                  <span aria-hidden="true" className="absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-ember-500/60 rounded-br-2xl" />
                </div>
              ) : (
                <div
                  className={[
                    'relative w-full aspect-[4/3] rounded-2xl overflow-hidden',
                    'bg-gradient-to-br',
                    imageBg,
                    'border border-steel-500/10',
                  ].join(' ')}
                  aria-label={imageAlt}
                >
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, #A0B4CA 1px, transparent 1px), linear-gradient(to bottom, #A0B4CA 1px, transparent 1px)',
                      backgroundSize: '48px 48px',
                    }}
                  />
                  <span aria-hidden="true" className="absolute top-0 left-0 h-16 w-16 border-t-2 border-l-2 border-ember-500/60 rounded-tl-2xl" />
                  <span aria-hidden="true" className="absolute bottom-0 right-0 h-16 w-16 border-b-2 border-r-2 border-ember-500/60 rounded-br-2xl" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="h-px w-12 bg-ember-500/50" />
                    <p className="font-mono text-xs tracking-[0.2em] uppercase text-steel-400">{imageLabel}</p>
                    <p className="font-mono text-xs tracking-[0.15em] uppercase text-steel-500/60">Project Photography</p>
                    <div className="h-px w-12 bg-ember-500/50" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
