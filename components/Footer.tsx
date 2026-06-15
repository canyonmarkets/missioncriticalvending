import Image from 'next/image';
import { Mail } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'Benefits',   href: '#enterprise-benefits' },
  { label: 'Solutions',  href: '#solutions' },
  { label: 'Technology', href: '#operations' },
  { label: 'FAQ',        href: '#faq' },
  { label: 'Contact',    href: '#contact' },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 border-t border-steel-500/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-steel-500/10">

          {/* ── Brand ──────────────────────────────────────────────────── */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Canyon Markets"
                width={56}
                height={48}
                className="h-10 w-auto object-contain"
              />
              <span className="font-display font-bold text-base tracking-widest uppercase text-steel-200">
                Canyon Markets
              </span>
            </div>
            <p className="text-xs leading-relaxed text-steel-300 max-w-xs">
              Premium micro-markets and smart vending solutions deployed nationwide across large-scale construction sites and enterprise workforce environments.
            </p>
          </div>

          {/* ── Site links ─────────────────────────────────────────────── */}
          <div>
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-steel-300 mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-steel-200 hover:text-ember-500 transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact ────────────────────────────────────────────────── */}
          <div>
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-steel-300 mb-4">
              Contact
            </p>
            <a
              href="mailto:info@canyon-markets.com"
              className="inline-flex items-center gap-2 text-sm text-steel-200 hover:text-ember-500 transition-colors duration-200"
            >
              <Mail size={14} strokeWidth={1.5} />
              info@canyon-markets.com
            </a>
          </div>
        </div>

        {/* ── Bottom bar ─────────────────────────────────────────────────── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-steel-600">
            &copy; {year} Canyon Markets LLC. All rights reserved.
          </p>
          <p className="text-xs text-steel-700 font-mono tracking-wide">
            Large Project Workforce Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
