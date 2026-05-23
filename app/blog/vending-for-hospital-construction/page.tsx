import { Metadata } from 'next';
import Link from 'next/link';
import { CalendarDays, Clock, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vending for Hospital Construction Sites | Mission Critical Vending',
  description: 'Hospital construction projects face food service challenges most vendors can\'t handle — strict badging, security-controlled access, and crews burning calories across 10-hour shifts. Here\'s what actually works.',
  alternates: { canonical: '/blog/vending-for-hospital-construction' },
  openGraph: {
    title: 'Vending for Hospital Construction Sites',
    description: 'Hospital construction projects face food service challenges most vendors can\'t handle — strict badging, security-controlled access, and crews burning calories across 10-hour shifts.',
    type: 'article',
  },
};

export default function BlogPostPage() {
  return (
    <div className="bg-charcoal-900 min-h-screen">

      {/* ── Header ── */}
      <div className="max-w-3xl mx-auto px-6 pt-16 pb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-steel-400 hover:text-ember-500 transition-colors duration-200 mb-10"
        >
          <ArrowLeft size={14} strokeWidth={2} />
          Back to Mission Critical Vending
        </Link>

        <p className="text-ember-500 font-mono text-xs tracking-[0.3em] uppercase mb-4">
          Field Operations
        </p>

        <h1 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-wide text-steel-50 leading-tight mb-6">
          Vending for Hospital Construction Sites: Feeding Crews in Security-Controlled Environments
        </h1>

        <div className="flex items-center gap-6 text-xs text-steel-400 font-mono mb-10 border-b border-steel-500/10 pb-8">
          <span className="flex items-center gap-1.5"><CalendarDays size={13} strokeWidth={1.5} />May 2026</span>
          <span className="flex items-center gap-1.5"><Clock size={13} strokeWidth={1.5} />7 min read</span>
          <span>Canyon Markets Field Team</span>
        </div>
      </div>

      {/* ── Body ── */}
      <article className="max-w-3xl mx-auto px-6 pb-24">
        <div className="prose prose-invert prose-sm max-w-none text-steel-200 leading-relaxed space-y-6">

          <p>
            Hospital construction is some of the most complex work in the industry. You&apos;re
            building — or expanding — a functioning medical facility. Security access is tight.
            Vendor badging requirements are strict. The general contractor is running multiple
            subcontractor crews simultaneously, often across an active campus where patients
            are still receiving care fifty feet away.
          </p>

          <p>
            And in the middle of all of that: 300 to 600 construction workers who need to eat.
          </p>

          <p>
            Most food service vendors can&apos;t navigate a hospital construction environment.
            They can&apos;t get badged, can&apos;t meet the compliance requirements, and can&apos;t
            maintain a restocking operation inside a security-controlled perimeter. So crews end
            up with two options: leave the site during breaks (lost productivity) or eat whatever
            the gas station a mile away has in stock (which isn&apos;t much).
          </p>

          <p>
            <strong>Vending for hospital construction sites</strong> has to be built differently
            from the ground up. Here&apos;s what that actually looks like.
          </p>

          <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mt-10 mb-4">
            The Unique Challenges of Hospital Construction Food Service
          </h2>

          <p>
            Standard construction site vending problems — stockouts, cash-only equipment, vendors
            who can&apos;t find the site — all apply on a hospital build. But hospital projects add a
            second layer of complexity that eliminates most vending operators right from the start.
          </p>

          <p>
            The access issue is real. Hospital campuses, especially active ones with ongoing patient
            care, require every vendor who sets foot on the property to be badged, background-checked,
            and trained on HIPAA-adjacent protocols. A vending company that runs a suburban office
            park route isn&apos;t equipped to meet those requirements. Their drivers don&apos;t have
            the clearances. Their operations teams aren&apos;t set up for the paperwork.
          </p>

          <p>
            The physical environment adds another constraint. Hospital construction zones are often
            separated from the main facility by temporary hoardings, controlled access points, and
            security checkpoints. Every restocking visit requires coordination with the GC&apos;s
            badging office and site security. A vendor that operates on a weekly drop-by schedule
            cannot function in that environment. The logistics require active management, not a route driver.
          </p>

          <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mt-10 mb-4">
            Security Clearances, Badging, and Compliance
          </h2>

          <p>
            The first question any hospital construction project manager should ask a vending vendor
            is: &quot;Can your team get badged on this site?&quot; If the answer involves any hesitation,
            the conversation is over.
          </p>

          <p>
            A vendor equipped to operate on hospital construction sites will already have:
          </p>

          <ul className="list-none space-y-3 pl-0">
            {[
              'Background checks and fingerprinting on all operations staff — standard, not on request',
              'Experience navigating the vendor credentialing process with hospital systems and large GCs',
              'Liability insurance that meets hospital-grade vendor requirements (often $5M+ general liability)',
              'Established protocols for scheduling restocking visits through site security — not just showing up',
              'Trained staff who understand controlled-access environments and know how to work quietly within them',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-ember-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p>
            If a vending company can&apos;t demonstrate experience with compliance-heavy environments,
            they&apos;re going to create headaches for your site management from day one.
          </p>

          <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mt-10 mb-4">
            What Crews on Hospital Builds Actually Need to Eat
          </h2>

          <p>
            The workforce on a major hospital construction project is doing hard physical labor —
            concrete work, structural steel, MEP rough-in, medical gas piping, specialty equipment
            installation. These are not desk workers. They&apos;re burning 3,000 to 5,000 calories
            a day in some cases.
          </p>

          <p>
            Standard hospital vending machine fare — the machines inside the hospital itself,
            stocked for patients and visitors — is completely wrong for construction crews.
            Low-calorie snacks, pudding cups, and diet beverages are not what ironworkers need
            on a 10-hour shift.
          </p>

          <p>
            A construction-specific micro-market on a hospital build stocks for the actual workforce:
          </p>

          <ul className="list-none space-y-3 pl-0">
            {[
              'High-protein deli sandwiches, wraps, and ready-to-eat meals — real food, not vending machine afterthoughts',
              'Beef jerky, hard-boiled eggs, protein bars, and high-calorie snacks that sustain heavy labor',
              'Electrolyte drinks, sports beverages, and premium water — hydration matters even more on indoor builds where HVAC isn\'t fully operational',
              'Energy drinks and coffee options for crews pulling early morning or late-shift work',
              'Hot food options where possible — burritos, breakfast sandwiches, items that actually function as a meal',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-ember-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mt-10 mb-4">
            How Smart Vending Replaces the Food Truck That Can&apos;t Get On-Site
          </h2>

          <p>
            The typical fallback on a large construction site — food trucks lined up at the gate —
            doesn&apos;t work on a hospital campus. Food trucks can&apos;t get through the security
            perimeter. They can&apos;t park on an active medical campus. The GC doesn&apos;t want
            them there, and the hospital system definitely doesn&apos;t.
          </p>

          <p>
            A properly deployed micro-market replaces the food truck entirely — and does it better.
            Instead of a 30-minute wait in a lunch line, crews walk to a market inside the
            construction tent, grab what they need, tap their card at a self-checkout kiosk, and
            are back to work in two minutes. No line. No cash. No waiting.
          </p>

          <p>
            The technology makes this possible. Mashgin self-checkout kiosks use 3D computer vision
            to scan multiple items at once — no barcodes, no manual entry. Checkout takes under two
            seconds. For a crew of 400 workers with a 30-minute break window, that speed matters
            enormously. A machine that processes one transaction every 15 seconds can serve 120
            workers in the break period. A traditional vending machine serving the same crew
            would have people queuing and leaving before they get served.
          </p>

          <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mt-10 mb-4">
            Flexibility Across a Multi-Year Hospital Build
          </h2>

          <p>
            Major hospital construction projects don&apos;t take six months. A new hospital tower,
            a major patient care wing expansion, or a full campus modernization project can run
            three to five years. The workforce concentration, the active work zones, and the
            physical layout of the construction site change dramatically across that timeline.
          </p>

          <p>
            During foundation and structural work, crews are spread across the full footprint.
            During interior rough-in, they concentrate by floor and wing. During medical equipment
            installation and commissioning, the crew composition changes — different specialty
            trades move in, general laborers scale back.
          </p>

          <p>
            A good vending partner repositions equipment as the project evolves. Modular shelving,
            smart coolers, and kiosks can be moved to follow the active work zone — keeping the
            market within a short walk of wherever the majority of the crew is working at any given
            phase. This isn&apos;t optional. A market that&apos;s a 10-minute walk from the work zone
            gets half the utilization of one that&apos;s a two-minute walk.
          </p>

          <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mt-10 mb-4">
            Questions to Ask Before Bringing a Vendor Onto a Healthcare Construction Project
          </h2>

          <ol className="list-none space-y-4 pl-0">
            {[
              { q: 'Can your entire operations team pass a background check and get badged?', a: 'This is non-negotiable. If any part of the answer is uncertain, move on.' },
              { q: 'What liability coverage do you carry?', a: 'Hospital systems and large GCs often require $5M or more in general liability. Get the certificate before any conversation goes further.' },
              { q: 'How do you coordinate restocking with controlled-access sites?', a: 'Look for a vendor who schedules through site security proactively — not one who shows up and figures it out at the gate.' },
              { q: 'What\'s your restocking frequency on a 400-person site?', a: 'A site this size can burn through a market in two to three days. You need a vendor who\'s monitoring inventory in real time, not visiting once a week.' },
              { q: 'Can your equipment move as the project phases change?', a: 'Ask directly. Modular setup is the standard for large multi-year builds — make sure they can execute it.' },
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
            Hospital construction is not a typical job site, and it shouldn&apos;t be served by a
            typical vending operator. The compliance requirements alone eliminate most of the
            industry. What remains is a short list of vendors who can actually badge onto a
            security-controlled campus, maintain a restocking operation within a controlled
            perimeter, and serve the specific nutritional needs of a heavy-labor construction workforce.
          </p>

          <p>
            If you&apos;re a GC or project owner managing a major hospital build and you&apos;re tired
            of food service being a problem — there&apos;s a purpose-built solution for your site.
          </p>

        </div>

        {/* ── CTA ── */}
        <div className="mt-16 rounded-2xl border border-ember-500/20 bg-charcoal-800 p-8 text-center">
          <p className="text-ember-500 font-mono text-xs tracking-[0.3em] uppercase mb-3">Get Started</p>
          <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mb-4">
            Request a Market Layout for Your Hospital Build
          </h3>
          <p className="text-steel-300 text-sm leading-relaxed mb-6 max-w-lg mx-auto">
            Tell us about your project — crew size, construction phase, site access requirements — and
            we&apos;ll design a compliant, zero-cost micro-market solution for your specific environment.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-ember-500 px-8 py-4 text-sm font-semibold text-white uppercase tracking-wide hover:bg-ember-400 transition-colors duration-200"
          >
            Request a Layout
          </a>
        </div>

        {/* ── Internal links ── */}
        <div className="mt-10 pt-8 border-t border-steel-500/10">
          <p className="text-steel-500 text-xs font-mono uppercase tracking-wide mb-4">More From Mission Critical Vending</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="px-4 py-2 rounded-lg border border-steel-500/20 text-sm text-steel-400 hover:border-ember-500/50 hover:text-ember-400 transition-colors duration-200">
              ← Home
            </Link>
            <Link href="/blog/vending-for-data-center-construction" className="px-4 py-2 rounded-lg border border-steel-500/20 text-sm text-steel-400 hover:border-ember-500/50 hover:text-ember-400 transition-colors duration-200">
              Data Center Construction
            </Link>
            <Link href="/blog/vending-for-solar-farm-construction" className="px-4 py-2 rounded-lg border border-steel-500/20 text-sm text-steel-400 hover:border-ember-500/50 hover:text-ember-400 transition-colors duration-200">
              Solar Farm Construction
            </Link>
            <Link href="/#contact" className="px-4 py-2 rounded-lg border border-steel-500/20 text-sm text-steel-400 hover:border-ember-500/50 hover:text-ember-400 transition-colors duration-200">
              Request a Layout
            </Link>
          </div>
        </div>

      </article>
    </div>
  );
}
