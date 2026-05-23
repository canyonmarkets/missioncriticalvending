import { Metadata } from 'next';
import Link from 'next/link';
import { CalendarDays, Clock, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vending for Refinery and Petrochemical Construction | Mission Critical Vending',
  description: 'Refinery construction and petrochemical plant turnarounds concentrate thousands of specialized workers in controlled-access industrial environments. Here\'s how smart vending serves them.',
  alternates: { canonical: '/blog/vending-for-refinery-construction' },
  openGraph: {
    title: 'Vending for Refinery and Petrochemical Construction',
    description: 'Refinery construction and petrochemical plant turnarounds concentrate thousands of specialized workers in controlled-access industrial environments.',
    type: 'article',
  },
};

export default function BlogPostPage() {
  return (
    <div className="bg-charcoal-900 min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-16 pb-4">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-steel-400 hover:text-ember-500 transition-colors duration-200 mb-10">
          <ArrowLeft size={14} strokeWidth={2} />
          Back to Mission Critical Vending
        </Link>
        <p className="text-ember-500 font-mono text-xs tracking-[0.3em] uppercase mb-4">Field Operations</p>
        <h1 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-wide text-steel-50 leading-tight mb-6">
          Vending for Refinery and Petrochemical Construction: Food Service in Controlled Industrial Environments
        </h1>
        <div className="flex items-center gap-6 text-xs text-steel-400 font-mono mb-10 border-b border-steel-500/10 pb-8">
          <span className="flex items-center gap-1.5"><CalendarDays size={13} strokeWidth={1.5} />May 2026</span>
          <span className="flex items-center gap-1.5"><Clock size={13} strokeWidth={1.5} />7 min read</span>
          <span>Canyon Markets Field Team</span>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 pb-24">
        <div className="prose prose-invert prose-sm max-w-none text-steel-200 leading-relaxed space-y-6">

          <p>
            Refinery and petrochemical construction is some of the most demanding work in the
            industry — and some of the most compliance-intensive. Whether it&apos;s a major
            capital project building new processing units, or a turnaround that shuts down
            a refinery unit for weeks of intensive maintenance and upgrade work, these projects
            concentrate large numbers of highly specialized workers inside a controlled industrial
            perimeter with strict access, strict safety protocols, and no tolerance for operational
            disruptions.
          </p>

          <p>
            Feeding that workforce is a real problem. Refinery sites are often located in
            industrial corridors with limited nearby food options. The security perimeter means
            workers can&apos;t freely leave during breaks without re-badging through access
            control. And turnaround crews — which can number in the thousands at peak — work
            around the clock on compressed timelines where every hour of downtime costs the
            facility owner significant money.
          </p>

          <p>
            <strong>Vending for refinery construction</strong> has to operate inside one of
            the most demanding vendor compliance environments in the industry. Here&apos;s
            what that requires.
          </p>

          <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mt-10 mb-4">
            The Refinery Construction Environment
          </h2>

          <p>
            An operating refinery or petrochemical facility is not a construction site you
            wander into. Every person, vehicle, and piece of equipment that enters the facility
            perimeter goes through a controlled access process. There are designated safe areas
            and designated hazardous areas. Hot work permits. Confined space protocols. OSHA
            Process Safety Management regulations that govern how work is done in environments
            with flammable or toxic materials.
          </p>

          <p>
            During a construction project or turnaround, these protocols extend to every vendor
            operating on-site. A food service provider cannot simply drive a restocking truck
            to a gate and expect access. The vendor&apos;s operations staff must:
          </p>

          <ul className="list-none space-y-3 pl-0">
            {[
              'Complete the facility\'s vendor registration and safety orientation — often a multi-hour process',
              'Pass background checks aligned with the facility operator\'s requirements',
              'Carry site-specific PPE at all times — hard hat, safety glasses, steel-toe boots, hi-vis vest at minimum',
              'Understand and comply with the facility\'s hot work, confined space, and permit-required access protocols',
              'Have vehicles inspected before access — spark arrestors, proper marking, approved routing',
              'Carry liability coverage that meets the facility operator\'s vendor requirements — often $10M or more',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-ember-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p>
            A vending company without experience in process industry environments is not
            equipped to navigate this. The compliance burden is real and non-negotiable.
          </p>

          <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mt-10 mb-4">
            Turnarounds vs. New Capital Projects: Two Different Scales
          </h2>

          <p>
            Refinery and petrochemical food service comes in two distinct project types,
            each with its own demands.
          </p>

          <p>
            A <strong>turnaround</strong> is a planned shutdown of a processing unit for
            inspection, maintenance, and upgrade work. Turnarounds are intense — they typically
            run 24 hours a day, 7 days a week, for 3 to 8 weeks. The workforce surges rapidly
            as the shutdown begins and scales back down as units come back online. At peak, a
            major refinery turnaround can bring 2,000 to 4,000 craft workers on-site
            simultaneously. The timeline is fixed — every day of extended shutdown costs the
            facility hundreds of thousands of dollars in lost production. Food service has to
            keep up with that pace without adding any operational complexity.
          </p>

          <p>
            A <strong>capital project</strong> — a new processing unit, a capacity expansion,
            a new storage facility — runs on a longer timeline but at sustained scale. These
            projects can run one to five years with a stable workforce of 300 to 1,000 workers
            in the active construction phase.
          </p>

          <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mt-10 mb-4">
            What Refinery and Petrochemical Crews Need
          </h2>

          <p>
            The craft workers on a refinery project — pipefitters, boilermakers, vessel entry
            specialists, insulation crews, electrical crews, instrumentation technicians — are
            highly skilled tradespeople doing physically demanding work in a hazardous environment.
            Their nutritional needs during a compressed turnaround schedule are substantial.
          </p>

          <p>
            In a turnaround environment running around the clock:
          </p>

          <ul className="list-none space-y-3 pl-0">
            {[
              'Night shift workers need the same quality food options as day shift workers — and often better, since they\'re working the hardest hours',
              'Hydration is critical in process environments where ambient heat from operating equipment can be extreme even during maintenance shutdowns',
              'High-protein, high-calorie options sustain workers through compressed 12-hour shifts without adequate sleep',
              'Quick checkout matters enormously — turnaround break windows are short, and workers who spend their break in a food line are not resting',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-ember-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mt-10 mb-4">
            Rapid Deployment for Turnaround Timelines
          </h2>

          <p>
            Turnarounds don&apos;t give you weeks to set up food service. The shutdown starts,
            the workforce surges, and the market needs to be operational from day one. A vendor
            who can deploy a fully stocked micro-market in 24 to 48 hours — inside an existing
            break structure within the facility perimeter — is the only option that works for
            a turnaround schedule.
          </p>

          <p>
            Modular equipment is critical for turnaround deployments: shelving units, smart
            coolers, and Mashgin kiosks that can be loaded onto a delivery truck, moved through
            a security checkpoint, and set up inside a break room trailer in a few hours.
            No permanent installation. No utility modifications beyond a standard power connection.
            The market is operational the same day equipment arrives.
          </p>

          <p>
            When the turnaround ends and the workforce demobilizes, the equipment comes out the
            same way it went in — quickly, cleanly, without leaving a trace in the facility.
          </p>

          <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mt-10 mb-4">
            Questions to Ask Before Bringing a Vendor Into a Process Industry Environment
          </h2>

          <ol className="list-none space-y-4 pl-0">
            {[
              { q: 'Have your staff completed process industry safety orientation before?', a: 'Refinery and petrochemical safety orientation is not a one-page handout. It\'s a substantive program. Vendors who haven\'t done it before will slow down your onboarding process.' },
              { q: 'What liability coverage do you carry?', a: 'Process industry facility operators routinely require $10M or more in general liability. Verify before any further conversation.' },
              { q: 'Can you deploy rapidly for a turnaround startup?', a: 'If the answer involves more than 48 hours from decision to operational market, they won\'t work for a turnaround schedule.' },
              { q: 'How do you handle 24/7 operations on a compressed turnaround timeline?', a: 'Night shifts need food. Markets need restocking around the clock on a peak turnaround with 3,000 workers. Ask specifically about overnight restocking capability.' },
              { q: 'Can your vehicles meet the facility\'s access requirements?', a: 'Spark arrestors, vehicle inspections, approved routing — a vendor who has never serviced a process industry site will not have their fleet ready for this.' },
            ].map(({ q, a }, i) => (
              <li key={q}>
                <p className="text-steel-50 font-semibold mb-1">{i + 1}. {q}</p>
                <p className="text-steel-300 text-sm leading-relaxed">{a}</p>
              </li>
            ))}
          </ol>

          <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mt-10 mb-4">
            The Bottom Line
          </h2>

          <p>
            Refinery and petrochemical construction is the most compliance-intensive environment
            in the construction vending industry. The access requirements, safety protocols,
            liability thresholds, and operational demands eliminate most vendors before the
            conversation gets started. What remains is a short list of operators who have
            done this before, can get their people badged and PPE-qualified, and can deploy
            a fully stocked market inside a controlled industrial perimeter without adding
            any burden to the GC or facility owner.
          </p>

          <p>
            If you&apos;re managing a refinery capital project or a major turnaround and
            food service is a problem you need to solve fast — we&apos;re built for this environment.
          </p>

        </div>

        <div className="mt-16 rounded-2xl border border-ember-500/20 bg-charcoal-800 p-8 text-center">
          <p className="text-ember-500 font-mono text-xs tracking-[0.3em] uppercase mb-3">Get Started</p>
          <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mb-4">Request a Market Layout for Your Refinery Project</h3>
          <p className="text-steel-300 text-sm leading-relaxed mb-6 max-w-lg mx-auto">
            Tell us about your project — turnaround or capital, crew size, timeline — and we&apos;ll design a compliant, zero-cost micro-market solution ready to deploy fast.
          </p>
          <a href="/#contact" className="inline-flex items-center gap-2 rounded-lg bg-ember-500 px-8 py-4 text-sm font-semibold text-white uppercase tracking-wide hover:bg-ember-400 transition-colors duration-200">
            Request a Layout
          </a>
        </div>

        <div className="mt-10 pt-8 border-t border-steel-500/10">
          <p className="text-steel-500 text-xs font-mono uppercase tracking-wide mb-4">More From Mission Critical Vending</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="px-4 py-2 rounded-lg border border-steel-500/20 text-sm text-steel-400 hover:border-ember-500/50 hover:text-ember-400 transition-colors duration-200">← Home</Link>
            <Link href="/blog/vending-for-industrial-plant-construction" className="px-4 py-2 rounded-lg border border-steel-500/20 text-sm text-steel-400 hover:border-ember-500/50 hover:text-ember-400 transition-colors duration-200">Industrial Plant Construction</Link>
            <Link href="/blog/vending-for-military-construction" className="px-4 py-2 rounded-lg border border-steel-500/20 text-sm text-steel-400 hover:border-ember-500/50 hover:text-ember-400 transition-colors duration-200">Military & Government Construction</Link>
            <Link href="/#contact" className="px-4 py-2 rounded-lg border border-steel-500/20 text-sm text-steel-400 hover:border-ember-500/50 hover:text-ember-400 transition-colors duration-200">Request a Layout</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
