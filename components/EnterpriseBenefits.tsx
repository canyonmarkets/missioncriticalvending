import { PackageCheck, ShieldCheck, Handshake, BarChart3 } from 'lucide-react';
import Reveal from '@/components/Reveal';

const CARDS = [
  {
    icon: PackageCheck,
    title: '100% Turnkey & Free',
    body: 'No equipment costs, installation fees, or operational overhead — ever. We handle every aspect of setup and ongoing operations at zero expense to the general contractor.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Insured',
    body: 'Full comprehensive liability coverage purpose-built to meet the strict vendor and compliance requirements of enterprise project owners and large-scale construction programs.',
  },
  {
    icon: Handshake,
    title: 'Zero-Contract Flexibility',
    body: 'Our relationship is built entirely on performance and service quality. No restrictive agreements, no long-term commitments — just results that keep us on-site.',
  },
  {
    icon: BarChart3,
    title: 'Intelligent Restocking',
    body: 'Data-driven inventory management synced to your shift patterns. High-protein meals, hydration, and site essentials — always stocked, never guessed.',
  },
] as const;

export default function EnterpriseBenefits() {
  return (
    <section
      id="enterprise-benefits"
      className="bg-charcoal-900 px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ─────────────────────────────────────────────── */}
        <Reveal className="text-center mb-16">
          <p className="text-ember-500 font-mono text-base tracking-[0.3em] uppercase mb-4">
            Built for Enterprise
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl uppercase tracking-wide text-steel-50">
            Why Project Managers Choose Us
          </h2>
        </Reveal>

        {/* ── 4-card grid ────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 80} className="h-full">
            <div
              className="group relative flex h-full flex-col gap-5 rounded-xl border border-steel-500/20 bg-charcoal-800 p-7 transition-all duration-300 hover:border-ember-500/50 hover:bg-charcoal-700 hover:shadow-lg hover:shadow-ember-500/5 hover:-translate-y-1"
            >
              {/* Icon container */}
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-ember-500/10 text-ember-500 transition-colors duration-300 group-hover:bg-ember-500/20">
                <Icon size={24} strokeWidth={1.5} />
              </div>

              {/* Copy */}
              <div className="flex flex-col gap-2">
                <h3 className="font-display font-bold text-lg uppercase tracking-wide text-steel-50">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-steel-100">
                  {body}
                </p>
              </div>

              {/* Subtle ember accent line on hover */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-7 right-7 h-px bg-ember-500/0 transition-all duration-300 group-hover:bg-ember-500/40"
              />
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
