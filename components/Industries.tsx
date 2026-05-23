import Link from 'next/link';
import { Server, HeartPulse, Plane, Cpu, Sun, Factory, Trophy, Route, Flame, Shield } from 'lucide-react';

const INDUSTRIES = [
  {
    icon: Server,
    name: 'Data Centers',
    sub: 'Hyperscale and colocation builds. Rotating shifts, massive footprints, zero break room infrastructure.',
    href: '/data-center-construction-vending',
  },
  {
    icon: HeartPulse,
    name: 'Hospital & Healthcare',
    sub: 'Mission-critical medical construction. Strict badging requirements with crews that need real fuel.',
    href: '/hospital-construction-vending',
  },
  {
    icon: Plane,
    name: 'Airport & Terminal',
    sub: 'Airside and landside construction programs with security-controlled access and 24/7 shift demands.',
    href: '/airport-construction-vending',
  },
  {
    icon: Cpu,
    name: 'Semiconductor Fabs',
    sub: 'Cleanroom-adjacent mega-builds running aggressive timelines with large specialized crews.',
    href: '/semiconductor-fab-construction-vending',
  },
  {
    icon: Sun,
    name: 'Solar & Wind Farms',
    sub: 'Remote renewable energy builds — often miles from the nearest food option in open desert or farmland.',
    href: '/solar-farm-construction-vending',
  },
  {
    icon: Factory,
    name: 'Industrial & Manufacturing',
    sub: 'Large-scale plant and process facility construction with MEP and structural crews across wide footprints.',
    href: '/industrial-plant-construction-vending',
  },
  {
    icon: Trophy,
    name: 'Stadium & Arena',
    sub: 'High-visibility venue construction programs with rotating crews and hard completion deadlines.',
    href: '/stadium-construction-vending',
  },
  {
    icon: Route,
    name: 'Highway & Bridge',
    sub: 'Distributed corridor construction with crews spread across long stretches of active right-of-way.',
    href: '/highway-construction-vending',
  },
  {
    icon: Flame,
    name: 'Refinery & Petrochemical',
    sub: 'Controlled-access industrial sites with specialized safety protocols and large turnaround crews.',
    href: '/refinery-construction-vending',
  },
  {
    icon: Shield,
    name: 'Military & Government',
    sub: 'Federally contracted builds requiring background-cleared vendor access and strict compliance standards.',
    href: '/military-construction-vending',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="bg-charcoal-800 px-6 py-24">
      <div className="max-w-7xl mx-auto">

        {/* ── Section header ─────────────────────────────────────────────── */}
        <div className="text-center mb-16">
          <p className="text-ember-500 font-mono text-base tracking-[0.3em] uppercase mb-4">
            Nationwide Coverage
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl uppercase tracking-wide text-steel-50 mb-5">
            Industries We Serve
          </h2>
          <p className="text-steel-300 text-base leading-relaxed max-w-2xl mx-auto">
            If your project has 200+ workers on-site and no convenient food option nearby, we can solve it.
            We operate across every major large-scale construction vertical — nationwide.
          </p>
        </div>

        {/* ── Industry grid ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {INDUSTRIES.map(({ icon: Icon, name, sub, href }) => (
            <Link
              key={name}
              href={href}
              className="group flex flex-col gap-3 rounded-xl border border-steel-500/15 bg-charcoal-900 p-4 transition-all duration-300 hover:border-ember-500/40 hover:bg-charcoal-800 hover:-translate-y-0.5"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-ember-500/10 text-ember-500 transition-colors duration-300 group-hover:bg-ember-500/20">
                <Icon size={16} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-display font-bold text-xs uppercase tracking-wide text-steel-50 mb-1">
                  {name}
                </p>
                <p className="text-steel-400 text-xs leading-relaxed hidden sm:block">
                  {sub}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Bottom note ────────────────────────────────────────────────── */}
        <p className="text-center text-steel-500 text-xs font-mono tracking-wide mt-10 uppercase">
          If your build qualifies, we&apos;ll deploy — regardless of location or project type
        </p>

      </div>
    </section>
  );
}
