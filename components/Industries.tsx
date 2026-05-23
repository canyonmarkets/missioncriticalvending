import { Server, HeartPulse, Plane, Cpu, Sun, Factory, Trophy, Route, Flame, Shield } from 'lucide-react';

const INDUSTRIES = [
  {
    icon: Server,
    name: 'Data Centers',
    sub: 'Hyperscale and colocation builds. Rotating shifts, massive footprints, zero break room infrastructure.',
  },
  {
    icon: HeartPulse,
    name: 'Hospital & Healthcare',
    sub: 'Mission-critical medical construction. Strict badging requirements with crews that need real fuel.',
  },
  {
    icon: Plane,
    name: 'Airport & Terminal',
    sub: 'Airside and landside construction programs with security-controlled access and 24/7 shift demands.',
  },
  {
    icon: Cpu,
    name: 'Semiconductor Fabs',
    sub: 'Cleanroom-adjacent mega-builds running aggressive timelines with large specialized crews.',
  },
  {
    icon: Sun,
    name: 'Solar & Wind Farms',
    sub: 'Remote renewable energy builds — often miles from the nearest food option in open desert or farmland.',
  },
  {
    icon: Factory,
    name: 'Industrial & Manufacturing',
    sub: 'Large-scale plant and process facility construction with MEP and structural crews across wide footprints.',
  },
  {
    icon: Trophy,
    name: 'Stadium & Arena',
    sub: 'High-visibility venue construction programs with rotating crews and hard completion deadlines.',
  },
  {
    icon: Route,
    name: 'Highway & Bridge',
    sub: 'Distributed corridor construction with crews spread across long stretches of active right-of-way.',
  },
  {
    icon: Flame,
    name: 'Refinery & Petrochemical',
    sub: 'Controlled-access industrial sites with specialized safety protocols and large turnaround crews.',
  },
  {
    icon: Shield,
    name: 'Military & Government',
    sub: 'Federally contracted builds requiring background-cleared vendor access and strict compliance standards.',
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {INDUSTRIES.map(({ icon: Icon, name, sub }) => (
            <div
              key={name}
              className="group flex flex-col gap-4 rounded-xl border border-steel-500/15 bg-charcoal-900 p-6 transition-all duration-300 hover:border-ember-500/40 hover:bg-charcoal-800 hover:-translate-y-0.5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ember-500/10 text-ember-500 transition-colors duration-300 group-hover:bg-ember-500/20">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-display font-bold text-sm uppercase tracking-wide text-steel-50 mb-1.5">
                  {name}
                </p>
                <p className="text-steel-300 text-xs leading-relaxed">
                  {sub}
                </p>
              </div>
            </div>
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
