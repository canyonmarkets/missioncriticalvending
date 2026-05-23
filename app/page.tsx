import Image from 'next/image';
import EnterpriseBenefits from '@/components/EnterpriseBenefits';
import Solutions from '@/components/Solutions';
import Operations from '@/components/Operations';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';

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
          <p className="text-ember-500 font-mono text-base tracking-[0.3em] uppercase mb-6">
            Large Project Workforce Solutions
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl tracking-wide uppercase text-steel-50 leading-none sm:whitespace-nowrap">
            Canyon Markets
          </h1>
          <p className="mt-6 text-steel-300 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Premium micro-markets vending engineered for large-scale construction:
            data centers, industrial complexes, and major infrastructure.
          </p>
        </div>
      </section>

      {/* ── Enterprise Benefits ──────────────────────────────────────── */}
      <EnterpriseBenefits />

      {/* ── Solutions ────────────────────────────────────────────────── */}
      <Solutions />

      {/* ── Operations ───────────────────────────────────────────────── */}
      <Operations />

      {/* ── From The Field ───────────────────────────────────────────── */}
      <div className="relative w-full h-[480px] sm:h-[560px] overflow-hidden">
        <Image
          src="/3.png"
          alt="Construction crew member grabbing food at a Canyon Markets micro-market kiosk on an active data center build site"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <FAQ />

      {/* ── Contact ──────────────────────────────────────────────────── */}
      <ContactForm />
    </>
  );
}
