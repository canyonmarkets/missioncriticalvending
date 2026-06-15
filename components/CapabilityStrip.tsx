import Reveal from '@/components/Reveal';

/**
 * Honest capability band — capability/spec claims, not track-record metrics
 * (we intentionally avoid fabricated "sites served" numbers).
 */
const STATS = [
  { value: '$0', label: 'Cost to the GC' },
  { value: '24/7', label: 'Every shift covered' },
  { value: '250+', label: 'Products stocked' },
  { value: 'Nationwide', label: 'Deployment reach' },
] as const;

export default function CapabilityStrip() {
  return (
    <section className="bg-charcoal-950 border-y border-steel-500/10 px-6 lg:px-10 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {STATS.map(({ value, label }, i) => (
          <Reveal key={label} delay={i * 90}>
            <div className="flex flex-col items-center text-center lg:border-l lg:first:border-l-0 border-steel-500/10 lg:px-4">
              <span className="font-display font-extrabold text-3xl sm:text-4xl uppercase tracking-wide text-ember-500 leading-none">
                {value}
              </span>
              <span className="mt-2 font-mono text-xs tracking-[0.2em] uppercase text-steel-300">
                {label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
