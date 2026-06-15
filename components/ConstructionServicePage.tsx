import Link from 'next/link';
import { Phone, PackageCheck, ShieldCheck, BarChart3, MoveRight, Clock, QrCode } from 'lucide-react';
import Reveal from '@/components/Reveal';

const BENEFITS = [
  { icon: PackageCheck, title: '100% Free',          body: 'Equipment, installation, restocking, and maintenance — all at zero cost to the GC or project owner.' },
  { icon: ShieldCheck,  title: 'Enterprise Insured', body: 'Full liability coverage built to meet the requirements of large GCs, project owners, and regulated environments.' },
  { icon: BarChart3,    title: 'Real-Time Restocking', body: 'Inventory monitored continuously — we restock before shelves run empty, not after your crew finds nothing.' },
  { icon: MoveRight,    title: 'Modular & Mobile',   body: 'Equipment moves as your work zones shift across construction phases. The market follows the crew.' },
  { icon: Clock,        title: '24/7 Operation',      body: 'Every shift covered — day, swing, and overnight. No staff required on-site from our team.' },
  { icon: QrCode,       title: 'Direct Worker Support', body: 'QR code on every unit connects workers straight to us. Issues, refunds, requests — handled without involving your team.' },
] as const;

export type ServicePageProps = {
  eyebrow: string;
  heading: string;
  intro: string;
  challenges: string[];
  blogSlug: string;
  blogTitle: string;
  relatedPages: Array<{ href: string; label: string }>;
};

export default function ConstructionServicePage({
  eyebrow,
  heading,
  intro,
  challenges,
  blogSlug,
  blogTitle,
  relatedPages,
}: ServicePageProps) {
  return (
    <div className="bg-charcoal-900 min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="bg-charcoal-900 px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="hero-rise text-ember-sheen font-mono text-sm tracking-[0.3em] uppercase mb-4" style={{ animationDelay: '0.1s' }}>{eyebrow}</p>
          <h1 className="hero-rise font-display font-bold text-3xl sm:text-5xl uppercase tracking-wide text-steel-50 leading-tight mb-6" style={{ animationDelay: '0.2s' }}>
            {heading}
          </h1>
          <p className="hero-rise text-steel-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10" style={{ animationDelay: '0.35s' }}>
            {intro}
          </p>
          <div className="hero-rise flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.5s' }}>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ember-500 px-8 py-4 text-sm font-semibold text-white uppercase tracking-wide hover:bg-ember-400 transition-colors duration-200"
            >
              Request a Free Layout
            </a>
            <a
              href="tel:+16029356830"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-steel-500/30 px-8 py-4 text-sm font-semibold text-steel-200 uppercase tracking-wide hover:border-ember-500/50 hover:text-ember-400 transition-colors duration-200"
            >
              <Phone size={16} strokeWidth={1.5} />(602) 935-6830
            </a>
          </div>
        </div>
      </section>

      {/* ── The Challenge ─────────────────────────────────────────────────── */}
      <section className="bg-zinc-800 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="text-ember-500 font-mono text-sm tracking-[0.3em] uppercase mb-3 text-center">Why Standard Vending Fails</p>
            <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-wide text-steel-50 text-center mb-12">
              The Challenge on Your Site
            </h2>
          </Reveal>
          <ul className="flex flex-col gap-4 max-w-2xl mx-auto">
            {challenges.map((item, i) => (
              <Reveal key={item} delay={i * 60}>
                <li className="flex items-start gap-4 bg-charcoal-900/50 rounded-xl border border-steel-500/10 px-6 py-4">
                  <span className="flex-shrink-0 mt-1.5 h-2 w-2 rounded-full bg-ember-500" />
                  <span className="text-steel-200 text-sm leading-relaxed">{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── What You Get ─────────────────────────────────────────────────── */}
      <section className="bg-charcoal-900 px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-ember-500 font-mono text-sm tracking-[0.3em] uppercase mb-3 text-center">Our Solution</p>
            <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-wide text-steel-50 text-center mb-4">
              Zero Cost. Full Service. Zero Burden.
            </h2>
            <p className="text-steel-300 text-sm text-center max-w-xl mx-auto mb-12 leading-relaxed">
              We provide, install, stock, and manage the entire micro-market setup at no charge to your project.
              Your only requirement: a dedicated space and a standard power connection.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 70} className="h-full">
                <div className="group flex h-full flex-col gap-4 rounded-xl border border-steel-500/15 bg-charcoal-800 p-6 transition-all duration-300 hover:border-ember-500/40 hover:bg-charcoal-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-ember-500/5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ember-500/10 text-ember-500 transition-colors duration-300 group-hover:bg-ember-500/20">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm uppercase tracking-wide text-steel-50 mb-1">{title}</p>
                    <p className="text-steel-300 text-xs leading-relaxed">{body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog teaser ──────────────────────────────────────────────────── */}
      <section className="bg-zinc-800 px-6 py-12">
        <Reveal className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 rounded-xl border border-steel-500/15 bg-charcoal-900/60 px-8 py-6">
          <div>
            <p className="text-ember-500 font-mono text-xs tracking-[0.2em] uppercase mb-1">Field Guide</p>
            <p className="text-steel-200 text-sm font-semibold leading-snug">{blogTitle}</p>
          </div>
          <Link
            href={`/blog/${blogSlug}`}
            className="flex-shrink-0 inline-flex items-center gap-2 rounded-lg border border-ember-500/30 px-5 py-2.5 text-sm text-ember-400 hover:border-ember-500 hover:text-ember-300 transition-colors duration-200 font-mono tracking-wide"
          >
            Read the Full Guide →
          </Link>
        </Reveal>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-charcoal-900 px-6 py-20">
        <Reveal className="max-w-2xl mx-auto text-center flex flex-col gap-6">
          <h2 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-wide text-steel-50">
            Ready to Talk?
          </h2>
          <p className="text-steel-300 text-sm leading-relaxed">
            Tell us your crew size, site location, and construction phase. We&apos;ll design a market layout specific to your project — at no cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-ember-500 px-8 py-4 text-sm font-semibold text-white uppercase tracking-wide hover:bg-ember-400 transition-colors duration-200"
            >
              Request a Layout
            </a>
            <a
              href="tel:+16029356830"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-steel-500/30 px-8 py-4 text-sm font-semibold text-steel-200 uppercase tracking-wide hover:border-ember-500/50 hover:text-ember-400 transition-colors duration-200"
            >
              <Phone size={16} strokeWidth={1.5} />(602) 935-6830
            </a>
          </div>
        </Reveal>
      </section>

      {/* ── Internal links ───────────────────────────────────────────────── */}
      <div className="bg-zinc-800 px-6 py-8 border-t border-steel-500/10">
        <div className="max-w-4xl mx-auto">
          <p className="text-steel-500 text-xs font-mono uppercase tracking-wide mb-4">More Industries We Serve</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="px-4 py-2 rounded-lg border border-steel-500/20 text-sm text-steel-400 hover:border-ember-500/50 hover:text-ember-400 transition-colors duration-200">
              ← Home
            </Link>
            {relatedPages.map(({ href, label }) => (
              <Link key={href} href={href} className="px-4 py-2 rounded-lg border border-steel-500/20 text-sm text-steel-400 hover:border-ember-500/50 hover:text-ember-400 transition-colors duration-200">
                {label}
              </Link>
            ))}
            <Link href="/blog" className="px-4 py-2 rounded-lg border border-steel-500/20 text-sm text-steel-400 hover:border-ember-500/50 hover:text-ember-400 transition-colors duration-200">
              All Field Guides
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}
