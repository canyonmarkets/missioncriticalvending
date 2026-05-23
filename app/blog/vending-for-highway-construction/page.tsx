import { Metadata } from 'next';
import Link from 'next/link';
import { CalendarDays, Clock, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vending for Highway and Bridge Construction | Mission Critical Vending',
  description: 'Highway and bridge construction crews are distributed across miles of active right-of-way with no fixed break room and no food access. Here\'s how smart mobile vending solves it.',
  alternates: { canonical: '/blog/vending-for-highway-construction' },
  openGraph: {
    title: 'Vending for Highway and Bridge Construction',
    description: 'Highway and bridge construction crews are distributed across miles of active right-of-way with no fixed break room and no food access. Here\'s how smart mobile vending solves it.',
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
          Vending for Highway and Bridge Construction: Mobile Solutions for Distributed Crews
        </h1>
        <div className="flex items-center gap-6 text-xs text-steel-400 font-mono mb-10 border-b border-steel-500/10 pb-8">
          <span className="flex items-center gap-1.5"><CalendarDays size={13} strokeWidth={1.5} />May 2026</span>
          <span className="flex items-center gap-1.5"><Clock size={13} strokeWidth={1.5} />6 min read</span>
          <span>Canyon Markets Field Team</span>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 pb-24">
        <div className="prose prose-invert prose-sm max-w-none text-steel-200 leading-relaxed space-y-6">

          <p>
            Highway and bridge construction has a food service problem that no other project
            type shares: the workforce is spread across miles of active corridor, there&apos;s
            no fixed break room, and the nearest restaurant might be accessible — but getting
            there and back burns half of a worker&apos;s 30-minute break.
          </p>

          <p>
            A standard construction site has a clear center of gravity — a general contractor
            trailer, a break room, a defined work zone. A highway project has a staging area,
            but the active work can be anywhere along a 10-mile stretch of right-of-way on
            any given day. Crews move constantly. The work zone shifts. And the workers who
            are furthest from the staging area are the ones who lose the most break time
            trying to get food.
          </p>

          <p>
            <strong>Vending for highway construction</strong> has to be mobile, flexible, and
            positioned closer to the active work than any fixed installation can be. Here&apos;s
            what that looks like in practice.
          </p>

          <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mt-10 mb-4">
            The Distributed Crew Problem
          </h2>

          <p>
            On a large highway project — a major interstate expansion, a bridge replacement,
            a tunnel rehabilitation — the workforce doesn&apos;t congregate in one place.
            Grading crews work the furthest points of the active corridor. Paving crews
            follow behind. Bridge crews work at fixed structures that may be miles from the
            main staging area. Drainage and utility crews work in between.
          </p>

          <p>
            At any given moment, a project with 300 total workers might have them split
            across 4 or 5 active work areas. A single centrally located micro-market serves
            the workers closest to it well and serves everyone else poorly. The workers who
            most need convenient food access — the ones doing the hardest physical work
            furthest from the staging area — are the ones who get the worst service from
            a fixed central installation.
          </p>

          <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mt-10 mb-4">
            Night Shift Work and the Food Access Blackout
          </h2>

          <p>
            Highway construction often runs at night — lane closures that can&apos;t happen
            during peak traffic hours, bridge work that has to stop before morning rush.
            Night crews face a food access problem that day crews don&apos;t: at 2am on a
            highway project, there is nothing open within a reasonable distance. Gas stations
            and 24-hour fast food may exist somewhere along the corridor, but leaving the
            active work zone to reach them is often prohibited by project safety protocols.
          </p>

          <p>
            A properly stocked micro-market positioned at the staging area solves the night
            shift food access problem completely. Workers have access to real food — deli
            meals, protein-rich snacks, hot beverages — at any hour, without leaving the
            work zone.
          </p>

          <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mt-10 mb-4">
            The Right Setup for a Highway Project
          </h2>

          <p>
            Highway and bridge projects typically don&apos;t have permanent break room
            structures at the start of the project. The staging area usually includes
            contractor trailers, equipment storage, and temporary facilities. That&apos;s
            where the micro-market goes — inside the largest trailer or a dedicated
            temporary structure at the main staging area.
          </p>

          <p>
            For a corridor project with crews spread across a long stretch, the more
            effective solution is a combination: a main market at the central staging area
            and mobile vending units — fully stocked smart coolers or compact kiosk setups
            — positioned closer to remote work zones and moved as the active work advances.
          </p>

          <p>
            The key operational requirements for a highway project:
          </p>

          <ul className="list-none space-y-3 pl-0">
            {[
              'Portability — equipment that can be moved as the work zone advances along the corridor',
              'Night-shift stocking — inventory restocked before the overnight crew arrives, not after they\'ve been working for six hours on an empty market',
              'Weather-appropriate inventory — crews working in heat need hydration in volume; crews working in winter conditions need hot beverages and calorie-dense food',
              'Cashless payment — highway workers don\'t carry cash to active work zones. Tap-to-pay is the only option that works at scale.',
              'Durability — equipment in a staging area trailer or temporary structure takes more abuse than equipment in a climate-controlled office break room',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-ember-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mt-10 mb-4">
            What Highway Construction Crews Need
          </h2>

          <p>
            Road and bridge construction is among the most physically demanding work in
            the industry. Paving crews working in extreme heat, ironworkers on bridge
            structures, concrete finishers on deck pours — these workers burn enormous
            calories and need nutrition that matches the output.
          </p>

          <p>
            The inventory on a highway project micro-market skews toward:
          </p>

          <ul className="list-none space-y-3 pl-0">
            {[
              'High-calorie, high-protein portable food — jerky, protein bars, hard-boiled eggs, deli sandwiches that hold at temperature',
              'Electrolyte drinks in volume — paving crews in summer heat need serious hydration support',
              'Hot beverages — night crews and winter crews need coffee and hot drinks that aren\'t available at a cold vending machine',
              'Energy drinks and pre-workout options — sustained energy across a 10-hour overnight shift requires real support',
              'Quick-grab options — workers often don\'t have time to browse; high-turnover staples need to be in obvious, accessible locations',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-ember-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mt-10 mb-4">
            Repositioning as the Work Advances
          </h2>

          <p>
            A major highway project moves. The active work zone at month 3 is not the same as
            the active work zone at month 8. Crews advance along the corridor, staging areas
            shift, and the heaviest concentration of workers migrates with the work.
          </p>

          <p>
            A smart vending setup on a highway project repositions to follow that movement.
            Modular equipment — compact shelving, portable coolers, and Mashgin kiosk units —
            can be relocated to new staging areas as the project advances, keeping the market
            within a short walk of wherever the majority of the crew is working at any given phase.
          </p>

          <p>
            This isn&apos;t optional on a multi-year corridor project. A market positioned
            at the original staging area that&apos;s now 8 miles behind the active work zone
            serves nobody. The ability to move is as important as the initial deployment.
          </p>

          <h2 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mt-10 mb-4">
            Questions to Ask Before Bringing a Vendor Onto a Highway Project
          </h2>

          <ol className="list-none space-y-4 pl-0">
            {[
              { q: 'Can your equipment be moved as the project advances?', a: 'This is non-negotiable on a corridor project. If the equipment is fixed-installation, it doesn\'t work for a highway build.' },
              { q: 'Do you service night shifts?', a: 'Highway projects run overnight. The market has to be stocked before night crews arrive, not after they\'ve been working for hours on an empty market.' },
              { q: 'How do you handle inventory monitoring on a remote or distributed site?', a: 'Real-time data is the only answer. A vendor relying on weekly route visits will constantly be restocking after the market is already empty.' },
              { q: 'Can you supply satellite locations along the corridor?', a: 'For long corridor projects, a single staging area market doesn\'t serve the full crew. Ask about mobile or satellite vending options for remote work zones.' },
              { q: 'What\'s your weather contingency for equipment in temporary structures?', a: 'Trailer-based equipment in Arizona summer heat or Minnesota winter cold faces conditions office vending equipment wasn\'t designed for. Ask about their approach.' },
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
            Highway and bridge construction presents a food service challenge that fixed vending
            installations can&apos;t solve alone — a mobile, distributed workforce that moves
            with the work, often at night, often in weather extremes, with no access to nearby
            food options. The right solution combines a well-stocked main market at the staging
            area with the flexibility to extend service toward active work zones as the project advances.
          </p>

          <p>
            If you&apos;re running a major highway or infrastructure project and food service
            is a recurring problem — we build setups specifically for distributed, mobile
            construction environments.
          </p>

        </div>

        <div className="mt-16 rounded-2xl border border-ember-500/20 bg-charcoal-800 p-8 text-center">
          <p className="text-ember-500 font-mono text-xs tracking-[0.3em] uppercase mb-3">Get Started</p>
          <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wide text-steel-50 mb-4">Request a Market Layout for Your Infrastructure Project</h3>
          <p className="text-steel-300 text-sm leading-relaxed mb-6 max-w-lg mx-auto">
            Tell us about your project — corridor length, crew size, staging area setup — and we&apos;ll design a zero-cost mobile vending solution for your specific environment.
          </p>
          <a href="/#contact" className="inline-flex items-center gap-2 rounded-lg bg-ember-500 px-8 py-4 text-sm font-semibold text-white uppercase tracking-wide hover:bg-ember-400 transition-colors duration-200">
            Request a Layout
          </a>
        </div>

        <div className="mt-10 pt-8 border-t border-steel-500/10">
          <p className="text-steel-500 text-xs font-mono uppercase tracking-wide mb-4">More From Mission Critical Vending</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="px-4 py-2 rounded-lg border border-steel-500/20 text-sm text-steel-400 hover:border-ember-500/50 hover:text-ember-400 transition-colors duration-200">← Home</Link>
            <Link href="/blog/vending-for-solar-farm-construction" className="px-4 py-2 rounded-lg border border-steel-500/20 text-sm text-steel-400 hover:border-ember-500/50 hover:text-ember-400 transition-colors duration-200">Solar Farm Construction</Link>
            <Link href="/blog/vending-for-industrial-plant-construction" className="px-4 py-2 rounded-lg border border-steel-500/20 text-sm text-steel-400 hover:border-ember-500/50 hover:text-ember-400 transition-colors duration-200">Industrial Plant Construction</Link>
            <Link href="/#contact" className="px-4 py-2 rounded-lg border border-steel-500/20 text-sm text-steel-400 hover:border-ember-500/50 hover:text-ember-400 transition-colors duration-200">Request a Layout</Link>
          </div>
        </div>
      </article>
    </div>
  );
}
