'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'What is the actual cost to the general contractor or site management?',
    a: 'There is zero cost, zero risk, and zero financial obligation for your project. We provide, install, stock, and maintain the entire micro-market and smart-vending setup completely free of charge. Your only requirement is providing a dedicated space and standard power connections.',
  },
  {
    q: 'Construction sites have strict security protocols. How do your delivery drivers access the site?',
    a: 'We understand that large-scale builds demand enterprise-grade security compliance. All of our operations and inventory staff undergo rigorous background checks, are fully badged, and are strictly trained on site-specific safety and PPE protocols. We coordinate seamlessly with your gate security to ensure logistics never interfere with facility protocols.',
  },
  {
    q: 'How do you handle theft or inventory loss without on-site staff?',
    a: 'Our markets are 100% automated and protected by the Panoptyc AI Smart Camera infrastructure. This provides 24/7 intelligent video monitoring and automated loss-detection analytics. It ensures complete operational integrity and inventory security without requiring a single minute of oversight, monitoring, or intervention from your site team.',
  },
  {
    q: 'What happens when our construction phases change and the active work zone shifts?',
    a: 'We build our micro-markets for mobility. As your project evolves from the initial shell structure to the final interior tech fit-out, our modular setups can be rapidly relocated. We coordinate with your team to safely move our footprint to optimal high-traffic break areas as the workforce shifts.',
  },
  {
    q: 'Construction crews have demanding shifts. How do you ensure the market stays stocked with substantial food?',
    a: "We don't guess on inventory. Our systems utilize real-time data tracking to monitor sales patterns as they happen. We focus heavily on premium, high-protein nutrition, hearty deli meals, and energy essentials specifically curated for crews burning high calories. Because we see stock levels remotely, we replenish the market before shelves ever run empty.",
  },
  {
    q: 'Who handles worker issues like machine maintenance or refund requests?',
    a: 'Your site supervisors will never have to manage market logistics. Every smart cooler, Mashgin checkout kiosk, and snack rack features direct QR code support. Workers scan the code to instantly file a refund request, report a machine issue, or request specific inventory directly to our team. We handle everything autonomously.',
  },
  {
    q: 'We\'re based in [X state]. Do you operate in our area?',
    a: 'Yes — Canyon Markets deploys nationwide with no geographic restrictions. Whether your project is in Texas, the Pacific Northwest, the Midwest, the Southeast, or anywhere in between, if your site is large enough to support a market, we will build it out for you. We are actively developing an operational infrastructure that allows us to place a fully stocked, fully managed micro-market on any qualifying large-scale construction site across the country. Submit a request and let us handle the logistics from there.',
  },
] as const;

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section id="faq" className="bg-zinc-800 px-6 py-24">
      <div className="max-w-4xl mx-auto">

        {/* ── Section header ─────────────────────────────────────────────── */}
        <div className="text-center mb-16">
          <p className="text-ember-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">
            Common Questions
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl uppercase tracking-wide text-steel-50">
            Frequently Asked Questions
          </h2>
        </div>

        {/* ── Accordion ──────────────────────────────────────────────────── */}
        <div className="flex flex-col border-t border-steel-500/10">
          {FAQS.map(({ q, a }, i) => (
            <div key={i} className="border-b border-steel-500/10">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-start justify-between py-7 text-left gap-6 group"
                aria-expanded={open === i}
              >
                <span className="font-display font-bold text-lg uppercase tracking-wide text-steel-100 group-hover:text-ember-500 transition-colors duration-200 leading-snug">
                  {q}
                </span>
                <ChevronDown
                  size={20}
                  strokeWidth={1.5}
                  className={[
                    'flex-shrink-0 mt-1 text-ember-500 transition-transform duration-300',
                    open === i ? 'rotate-180' : '',
                  ].join(' ')}
                  aria-hidden="true"
                />
              </button>

              <div
                className={[
                  'overflow-hidden transition-all duration-300 ease-in-out',
                  open === i ? 'max-h-[400px] pb-8' : 'max-h-0',
                ].join(' ')}
              >
                <p className="text-steel-300 text-sm leading-relaxed max-w-3xl">
                  {a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
