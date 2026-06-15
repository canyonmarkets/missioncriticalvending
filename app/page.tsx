import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import CapabilityStrip from '@/components/CapabilityStrip';
import EnterpriseBenefits from '@/components/EnterpriseBenefits';
import Industries from '@/components/Industries';
import Solutions from '@/components/Solutions';
import Operations from '@/components/Operations';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 overflow-hidden"
      >
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="/ConstructionVideo.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-charcoal-900/75" aria-hidden="true" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* eyebrow rises in, then carries a slow continuous ember sheen */}
          <div className="hero-rise" style={{ animationDelay: '0.1s' }}>
            <p className="text-ember-sheen font-mono text-base tracking-[0.3em] uppercase mb-6">
              Large Project Workforce Solutions
            </p>
          </div>
          <h1
            className="hero-rise font-display font-extrabold text-4xl sm:text-5xl tracking-wide uppercase text-steel-50 leading-none sm:whitespace-nowrap"
            style={{ animationDelay: '0.25s' }}
          >
            Canyon Markets
          </h1>
          <span
            aria-hidden="true"
            className="hero-line mt-6 block h-px w-40 bg-gradient-to-r from-transparent via-ember-500 to-transparent"
          />
          <p
            className="hero-rise mt-6 text-steel-300 text-lg sm:text-xl max-w-2xl leading-relaxed"
            style={{ animationDelay: '0.5s' }}
          >
            Premium micro-markets and smart vending for the nation&apos;s largest construction projects —
            data centers, hospitals, airports, semiconductor fabs, solar farms, and beyond.
          </p>
        </div>

        {/* Scroll cue */}
        <a
          href="#enterprise-benefits"
          aria-label="Scroll to learn more"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1 text-steel-300 hover:text-ember-500 transition-colors duration-200"
        >
          <span className="font-mono text-[0.65rem] tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown size={22} strokeWidth={2} className="float-bob" />
        </a>
      </section>

      {/* ── Capability Strip ─────────────────────────────────────────── */}
      <CapabilityStrip />

      {/* ── Enterprise Benefits ──────────────────────────────────────── */}
      <EnterpriseBenefits />

      {/* ── Solutions ────────────────────────────────────────────────── */}
      <Solutions />

      {/* ── Operations ───────────────────────────────────────────────── */}
      <Operations />

      {/* ── From The Field ───────────────────────────────────────────── */}
      <div className="bg-zinc-800 px-6 lg:px-10 py-24">
        <Reveal className="max-w-2xl mx-auto">
          <p className="text-ember-500 font-mono text-sm tracking-[0.3em] uppercase mb-6 text-center">
            On the Job Site
          </p>
          <div className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-steel-500/10">
            <Image
              src="/3.png"
              alt="Construction crew member grabbing food at a Canyon Markets micro-market kiosk on an active data center build site"
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* gradient + corner accents */}
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-charcoal-950/50 via-transparent to-transparent" />
            <span aria-hidden="true" className="absolute top-0 left-0 h-12 w-12 border-t-2 border-l-2 border-ember-500/60 rounded-tl-2xl" />
            <span aria-hidden="true" className="absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-ember-500/60 rounded-br-2xl" />
          </div>
        </Reveal>
      </div>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <FAQ />

      {/* ── Industries We Serve ─────────────────────────────────────── */}
      <Industries />

      {/* ── Contact ──────────────────────────────────────────────────── */}
      <ContactForm />
    </>
  );
}
