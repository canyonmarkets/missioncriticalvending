import { Metadata } from 'next';
import Link from 'next/link';
import { CalendarDays, Clock, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vending for Airport Construction Sites | Mission Critical Vending',
  description: 'Airport construction crews face food service challenges no other job site has — airside security clearances, 24/7 operational terminals, and no room for a food truck. Here\'s what works.',
  alternates: { canonical: '/blog/vending-for-airport-construction' },
  openGraph: {
    title: 'Vending for Airport Construction Sites',
    description: 'Airport construction crews face food service challenges no other job site has — airside security clearances, 24/7 operational terminals, and no room for a food truck.',
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
          Vending for Airport Construction Sites: Feeding Crews in Airside Environments
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
            Airport construction is unlike any other job site in the industry. You&apos;re building
            — or expanding — a facility that never stops operating. Flights are landing 50 feet
            from your active work zone. TSA checkpoints are live. Passengers are moving through
            concourses that share walls with your construction hoarding. And your crew of 400
            construction workers still needs to eat three times during a 10-hour shift.
          </p>

          <p>
            The food service problem on an airport build isn&apos;t just logistics — it&apos;s
            compliance. Most food vendors cannot get airside access. Most food trucks cannot
            park within an airport security perimeter. And most vending operators have never
            dealt with an airport authority&apos;s vendor credentialing process.
          </p>

          <p>
            <strong>Vending for airport construction sites</strong> requires a vendor who has
            done this before. Here&apos;s what the challenge actually looks like — and how the
            right setup solves it.
          </p>

          <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mt-10 mb-4">
            Airside vs. Landside: Two Completely Different Access Problems
          </h2>

          <p>
            Every airport construction project involves at least one, and often both, of the
            two physical zones of an airport: landside and airside. Landside is the public area
            before security — terminals, ticketing, parking structures, ground transportation
            facilities. Airside is everything past the security checkpoint — concourses, gates,
            tarmac, maintenance facilities, and the operational areas that directly support aircraft.
          </p>

          <p>
            Landside construction access is controlled but manageable. Vendors need to be vetted
            by the airport authority and the general contractor, but the process is similar to
            other large commercial projects. Airside is different. Airside access requires federal
            security threat assessment clearance, airport-issued identification media (typically
            a SIDA badge), and in many cases TSA-mandated training before any employee can enter
            the secured area.
          </p>

          <p>
            A vending operator who can&apos;t get their entire operations team SIDA-badged cannot
            service an airside construction project. Period. The restocking driver who shows up at
            the security checkpoint without proper credentials doesn&apos;t get in — and the market
            goes empty.
          </p>

          <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mt-10 mb-4">
            Airport Authority Compliance and Vendor Credentialing
          </h2>

          <p>
            Every major airport operates under the authority of an airport authority — a government
            or quasi-governmental body that controls vendor access, facility use, and operational
            standards within the airport&apos;s footprint. Before any vendor can operate on an
            airport construction site, they typically must:
          </p>

          <ul className="list-none space-y-3 pl-0">
            {[
              'Complete the airport authority\'s vendor application and registration process',
              'Carry liability insurance that meets airport authority minimums — often $5M or more',
              'Submit to background checks and security threat assessments for all operations staff',
              'Complete airport-specific safety and security training for any employee who will access the site',
              'Coordinate all vehicle access through the airport\'s ground transportation or airfield operations office',
              'Comply with the airport\'s specific rules around equipment, deliveries, and operational hours',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-ember-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p>
            For a vending company that has never operated in an airport environment, this process
            is a barrier they cannot clear. For one that has, it&apos;s standard procedure.
          </p>

          <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mt-10 mb-4">
            Why Food Trucks Don&apos;t Work at Airport Construction Sites
          </h2>

          <p>
            The standard fallback for large construction crews — food trucks at the gate — fails
            completely at airports. There is no &quot;gate&quot; in the traditional sense.
            Food trucks cannot park anywhere near an active terminal or airside construction zone.
            Ground transportation regulations, security perimeters, and airport authority rules
            eliminate them as an option for anything past the outermost landside perimeter.
          </p>

          <p>
            Even on landside projects, food trucks face restrictions that make consistent service
            impossible. They can&apos;t access loading docks. They can&apos;t park in areas that
            interfere with passenger drop-off or ground transportation. And airport authorities
            are not inclined to create workarounds for construction food service — that&apos;s
            not their problem.
          </p>

          <p>
            The result: without a proper on-site food service solution, airport construction crews
            either leave the site entirely during breaks (burning 30 to 60 minutes of productive
            time per worker per day) or eat whatever they packed from home and supplement with
            airport retail food — which is priced for travelers, not construction budgets.
          </p>

          <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mt-10 mb-4">
            What Airport Construction Crews Need
          </h2>

          <p>
            Airport construction is physically demanding work. Structural crews, MEP installers,
            specialty systems teams (security systems, gate infrastructure, jetbridge installation,
            baggage handling), and finishing trades all work long shifts in a high-pressure
            environment. Their nutritional needs are consistent with any heavy construction
            workforce — high protein, real calories, sustained energy.
          </p>

          <p>
            But airport builds add specific inventory considerations:
          </p>

          <ul className="list-none space-y-3 pl-0">
            {[
              'Night shift nutrition — terminal expansions and airside projects often run overnight when flight traffic is lowest. Night crews need the same quality food options as day crews.',
              'Fast checkout — airport construction workers often have compressed break windows. A self-checkout kiosk that processes a transaction in under two seconds is not a luxury, it\'s a requirement.',
              'Hydration — indoor terminal environments with active HVAC systems under construction can be hot, dusty, and physically taxing. Electrolyte options matter.',
              'Convenience — workers cannot leave the secured area to get food. The market has to function as their only option, which means inventory has to be comprehensive.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-ember-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mt-10 mb-4">
            Zero Disruption to Airport Operations
          </h2>

          <p>
            The general contractor&apos;s primary obligation on an airport project — beyond
            building the work — is to not disrupt airport operations. Every delivery, every
            vendor movement, every restocking run has to be coordinated and timed to avoid
            interference with terminal operations, passenger flow, and aircraft movements.
          </p>

          <p>
            A smart vending operator handles this by scheduling restocking around the airport&apos;s
            operational windows. Many airports have designated low-traffic periods — typically
            late night into early morning — when construction activity and vendor access is
            permitted at higher volumes. Real-time inventory monitoring makes it possible to
            plan restocking proactively around those windows, rather than reactively after
            a stockout occurs at an inconvenient time.
          </p>

          <p>
            The modular equipment setup also helps: compact shelving, smart coolers, and
            Mashgin checkout kiosks that fit within the space constraints of a construction
            tent or temporary break room without requiring permanent installation or utility
            modifications beyond a standard power connection.
          </p>

          <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mt-10 mb-4">
            Questions to Ask Before Bringing a Vendor Onto an Airport Build
          </h2>

          <ol className="list-none space-y-4 pl-0">
            {[
              { q: 'Have your operations staff completed SIDA badging or equivalent airport credentialing before?', a: 'If the answer is no, or they don\'t know what SIDA stands for, stop the conversation there.' },
              { q: 'What liability coverage do you carry?', a: 'Airport authorities typically require $5M+ in general liability. Get the certificate before any further discussion.' },
              { q: 'How do you coordinate restocking with airport operations?', a: 'Look for a vendor who has a process — scheduled delivery windows, airport ops coordination, advance notice protocols. Not one who figures it out on arrival.' },
              { q: 'Can you operate 24/7?', a: 'Night shift crews on airport builds need food at 2am. The market has to be stocked and the checkout system has to work at all hours without on-site staff.' },
              { q: 'How do you handle the credentialing renewal process?', a: 'Airport credentials expire. Badge renewals, background check updates, and training refreshers are ongoing. A vendor without a system for managing this will create access problems mid-project.' },
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
            Airport construction is one of the most compliance-intensive environments in the
            industry. The vendors who can operate in it have done the work to get credentialed,
            insured, and trained for the specific demands of airport authority oversight. Most
            haven&apos;t. The ones who have are equipped to run a food service operation inside
            a secured airport construction zone without adding a single item to the GC&apos;s
            management burden.
          </p>

          <p>
            If you&apos;re running a major terminal expansion, airside infrastructure project,
            or airport facility build and you need food service that can actually get on-site —
            that&apos;s exactly what we&apos;re built for.
          </p>

        </div>

        <div className="mt-16 rounded-2xl border border-ember-500/20 bg-charcoal-800 p-8 text-center">
          <p className="text-ember-500 font-mono text-xs tracking-[0.3em] uppercase mb-3">Get Started</p>
          <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mb-4">Request a Market Layout for Your Airport Project</h3>
          <p className="text-steel-300 text-sm leading-relaxed mb-6 max-w-lg mx-auto">
            Tell us about your project — crew size, airside or landside, construction phase — and we&apos;ll design a compliant, zero-cost micro-market solution for your site.
          </p>
          <a href="/#contact" className="inline-flex items-center gap-2 rounded-lg bg-ember-500 px-8 py-4 text-sm font-semibold text-white uppercase tracking-wide hover:bg-ember-400 transition-colors duration-200">
            Request a Layout
          </a>
        </div>

        <div className="mt-10 pt-8 border-t border-steel-500/10">
          <p className="text-steel-500 text-xs font-mono uppercase tracking-wide mb-4">More From Mission Critical Vending</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="px-4 py-2 rounded-lg border border-steel-500/20 text-sm text-steel-400 hover:border-ember-500/50 hover:text-ember-400 transition-colors duration-200">← Home</Link>
            <Link href="/blog/vending-for-hospital-construction" className="px-4 py-2 rounded-lg border border-steel-500/20 text-sm text-steel-400 hover:border-ember-500/50 hover:text-ember-400 transition-colors duration-200">Hospital Construction</Link>
            <Link href="/blog/vending-for-data-center-construction" className="px-4 py-2 rounded-lg border border-steel-500/20 text-sm text-steel-400 hover:border-ember-500/50 hover:text-ember-400 transition-colors duration-200">Data Center Construction</Link>
            <Link href="/#contact" className="px-4 py-2 rounded-lg border border-steel-500/20 text-sm text-steel-400 hover:border-ember-500/50 hover:text-ember-400 transition-colors duration-200">Request a Layout</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
