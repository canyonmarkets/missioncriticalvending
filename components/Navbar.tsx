'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'Benefits',   href: '#enterprise-benefits' },
  { label: 'Solutions',  href: '#solutions' },
  { label: 'Technology', href: '#operations' },
  { label: 'FAQ',        href: '#faq' },
  { label: 'Contact',    href: '#contact' },
] as const;

/* SVG fallback shown if logo.png fails to load */
function PeaksLogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 34" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <path d="M0 29 L11 3 L22 29 Z"  fill="#6B6B6B" />
      <path d="M9 29 L11 18 L13 29 Z" fill="white" />
      <path d="M10 29 L24 0 L38 29 Z" fill="#C94B0C" />
      <path d="M21 29 L24 15 L27 29 Z" fill="white" />
      <path d="M26 29 L37 7 L48 29 Z" fill="#6B6B6B" />
      <path d="M35 29 L37 20 L39 29 Z" fill="white" />
      <path d="M0 31.5 C14 28.5 34 28 48 31.5" stroke="#E5E7EB" strokeWidth="1" fill="none" strokeLinecap="round" />
      <path d="M0 32   C14 29.5 34 29 48 32"   stroke="#C94B0C" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return open ? (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ) : (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar() {
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const [logoError, setLogoError] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    if (isHome) {
      scrollTo(href);
    } else {
      window.location.href = `/${href}`;
    }
  };

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 bg-white transition-all duration-300',
        scrolled ? 'shadow-md shadow-black/10' : 'border-b border-black/8',
      ].join(' ')}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">

        {/* ── Brand ─────────────────────────────────────────────────────── */}
        <a
          href={isHome ? '#home' : '/'}
          onClick={(e) => { e.preventDefault(); handleLink('#home'); }}
          className="flex items-center gap-3 group select-none"
          aria-label="Canyon Markets — go to top"
        >
          {logoError ? (
            <PeaksLogoMark className="w-10 h-auto shrink-0" />
          ) : (
            <Image
              src="/logo.png"
              alt="Canyon Markets"
              width={56}
              height={48}
              priority
              className="h-12 w-auto object-contain"
              onError={() => setLogoError(true)}
            />
          )}
          <span className="font-display font-bold text-lg tracking-widest uppercase text-iron-700 group-hover:text-ember-500 transition-colors duration-200">
            Canyon Markets
          </span>

        </a>

        {/* ── Desktop nav links ─────────────────────────────────────────── */}
        <ul className="hidden lg:flex items-center gap-7" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => { e.preventDefault(); handleLink(href); }}
                className="relative text-sm font-medium tracking-wide text-iron-600 hover:text-ember-500 transition-colors duration-200 group py-1"
              >
                {label}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-0.5 left-0 h-px w-0 bg-ember-500 group-hover:w-full transition-all duration-300"
                />
              </a>
            </li>
          ))}
          <li>
            <Link
              href="/blog"
              className="relative text-sm font-medium tracking-wide text-iron-600 hover:text-ember-500 transition-colors duration-200 group py-1"
            >
              Field Guides
              <span aria-hidden="true" className="absolute -bottom-0.5 left-0 h-px w-0 bg-ember-500 group-hover:w-full transition-all duration-300" />
            </Link>
          </li>
        </ul>

        {/* ── Mobile hamburger ──────────────────────────────────────────── */}
        <button
          className="lg:hidden p-2 -mr-2 text-iron-500 hover:text-ember-500 transition-colors duration-200"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </nav>

      {/* ── Mobile dropdown ───────────────────────────────────────────────── */}
      <div
        className={[
          'lg:hidden overflow-hidden transition-all duration-300',
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
        aria-hidden={!menuOpen}
      >
        <ul
          className="bg-white border-t border-black/8 px-6 pb-4 pt-2 flex flex-col"
          role="list"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => { e.preventDefault(); handleLink(href); }}
                className="flex items-center gap-3 py-3.5 text-sm font-medium text-iron-600 hover:text-ember-500 border-b border-black/6 transition-colors duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-ember-500 shrink-0" aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
          <li>
            <Link
              href="/blog"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 py-3.5 text-sm font-medium text-iron-600 hover:text-ember-500 transition-colors duration-200"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-ember-500 shrink-0" aria-hidden="true" />
              Field Guides
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
