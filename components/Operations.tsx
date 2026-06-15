import { BarChart2, QrCode, MoveRight } from 'lucide-react';
import Reveal from '@/components/Reveal';

const FEATURES = [
  {
    step: '01',
    icon: BarChart2,
    heading: 'Data-Driven Inventory',
    body: 'Every unit we place on-site feeds real-time sales data back to our operations team. We track velocity by SKU, by shift, and by location — so we know exactly what to stock before a machine ever runs empty. No guesswork. No shortfalls. No complaints routed through your management team.',
    tags: ['Real-Time Analytics', 'Predictive Restocking', 'Zero Stockouts'],
  },
  {
    step: '02',
    icon: QrCode,
    heading: 'Instant QR Support',
    body: 'Every kiosk, cooler, and market unit carries a localized QR code that connects workers directly to our team. They can request specific inventory additions, submit instant refund requests, or report a technical issue — all without involving site management. Issues are triaged and resolved fast, completely off your plate.',
    tags: ['Direct Worker Access', 'Self-Service Refunds', 'Instant Issue Reporting'],
  },
  {
    step: '03',
    icon: MoveRight,
    heading: 'Rapid Footprint Mobility',
    body: 'Large-scale builds evolve quickly — from concrete shell to MEP rough-in to interior fit-out, your workforce concentrations shift constantly. Our modular setups are designed to move with them. We reposition units to optimal locations as construction phases change, keeping service exactly where your crews are working.',
    tags: ['Phase-Adaptive Placement', 'Modular Equipment', 'No Site Downtime'],
  },
] as const;

export default function Operations() {
  return (
    <section id="operations" className="bg-charcoal-900 px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ─────────────────────────────────────────────── */}
        <Reveal className="mb-20">
          <p className="text-ember-500 font-mono text-base tracking-[0.3em] uppercase mb-4">
            Smart Site Technology
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display font-bold text-3xl sm:text-4xl uppercase tracking-wide text-steel-50 max-w-xl leading-tight">
              Operations That Run Themselves
            </h2>
            <p className="text-steel-200 text-sm leading-relaxed max-w-sm lg:text-right">
              Our technology stack handles inventory, support, and logistics automatically — so your team stays focused on the build.
            </p>
          </div>
          <div className="mt-8 h-px bg-gradient-to-r from-ember-500/60 via-ember-500/20 to-transparent" />
        </Reveal>

        {/* ── Numbered features ──────────────────────────────────────────── */}
        <div className="flex flex-col gap-0">
          {FEATURES.map(({ step, icon: Icon, heading, body, tags }, i) => (
            <Reveal key={step} delay={i * 80}>
            <div
              className={[
                'group relative grid grid-cols-1 lg:grid-cols-[120px_1fr_auto] gap-6 lg:gap-10 py-12',
                i < FEATURES.length - 1 ? 'border-b border-steel-500/10' : '',
              ].join(' ')}
            >
              {/* Step number */}
              <div className="flex items-start">
                <span className="font-mono text-6xl font-bold leading-none text-steel-500/20 group-hover:text-ember-500/30 transition-colors duration-300 select-none">
                  {step}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-ember-500/10 text-ember-500 group-hover:bg-ember-500/20 transition-colors duration-300">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-bold text-lg uppercase tracking-wide text-steel-50">
                    {heading}
                  </h3>
                </div>

                <p className="text-steel-100 text-sm leading-relaxed max-w-2xl">
                  {body}
                </p>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full border border-ember-500/20 bg-ember-500/5 text-ember-400 font-mono text-xs tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover accent line */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 bottom-0 w-px bg-ember-500/0 group-hover:bg-ember-500/50 transition-all duration-300"
              />
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
