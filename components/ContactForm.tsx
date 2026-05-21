'use client';

import { useState } from 'react';
import { CheckCircle, Mail } from 'lucide-react';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  details: string;
};

const EMPTY: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  location: '',
  details: '',
};

const PITCH_POINTS = [
  'Zero cost, zero contracts, zero financial obligation',
  'Custom layout designed for your site footprint and crew size',
  'Response within one business day',
  'Nationwide deployment — no geographic boundaries',
];

function Field({
  label,
  id,
  type = 'text',
  value,
  onChange,
  required,
  placeholder,
}: {
  label: string;
  id: keyof FormState;
  type?: string;
  value: string;
  onChange: (id: keyof FormState, val: string) => void;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-mono tracking-[0.15em] uppercase text-steel-400">
        {label}{required && <span className="text-ember-500 ml-0.5">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(id, e.target.value)}
        className="w-full rounded-lg border border-steel-500/20 bg-charcoal-900 px-4 py-3 text-sm text-steel-100 placeholder-steel-500/40 outline-none transition-all duration-200 focus:border-ember-500/60 focus:ring-1 focus:ring-ember-500/30"
      />
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState(false);

  const handleChange = (id: keyof FormState, val: string) =>
    setForm((prev) => ({ ...prev, [id]: val }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSendError(false);

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setSubmitted(true);
    } else {
      setSendError(true);
    }
  };

  return (
    <section id="contact" className="bg-charcoal-900 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 lg:items-start">

          {/* ── Left: pitch column ─────────────────────────────────────── */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-ember-500 font-mono text-sm tracking-[0.3em] uppercase mb-4">
                Get Started
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl uppercase tracking-wide text-steel-50 leading-tight">
                Request a Market Layout
              </h2>
              <p className="mt-5 text-steel-400 text-sm leading-relaxed">
                Tell us about your project and we'll design a zero-cost micro-market and vending solution tailored to your site footprint and crew size.
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {PITCH_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-ember-500/10">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M1.5 5L4 7.5L8.5 2.5" stroke="#C94B0C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-steel-300 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-steel-500/10 pt-8">
              <p className="text-xs font-mono tracking-[0.2em] uppercase text-steel-500 mb-3">
                Direct Contact
              </p>
              <a
                href="mailto:info@canyon-markets.com"
                className="inline-flex items-center gap-2 text-sm text-steel-400 hover:text-ember-500 transition-colors duration-200"
              >
                <Mail size={14} strokeWidth={1.5} />
                info@canyon-markets.com
              </a>
            </div>
          </div>

          {/* ── Right: form / success ──────────────────────────────────── */}
          {submitted ? (
            <div className="flex flex-col items-center gap-5 rounded-2xl border border-ember-500/30 bg-charcoal-800 px-10 py-16 text-center">
              <CheckCircle size={48} strokeWidth={1.5} className="text-ember-500" />
              <h3 className="font-display font-bold text-2xl uppercase tracking-wide text-steel-50">
                Request Received
              </h3>
              <p className="text-steel-300 text-sm leading-relaxed max-w-sm">
                Thank you, {form.firstName}. Our team will review your project details and reach out within one business day with a custom layout proposal.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm(EMPTY); }}
                className="mt-2 text-xs font-mono tracking-widest uppercase text-ember-500 hover:text-ember-400 transition-colors duration-200"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-steel-500/15 bg-charcoal-800 px-8 py-10 flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Field label="First Name" id="firstName" value={form.firstName} onChange={handleChange} required placeholder="Jane" />
                <Field label="Last Name"  id="lastName"  value={form.lastName}  onChange={handleChange} required placeholder="Smith" />
              </div>

              <Field label="Professional Email" id="email" type="email" value={form.email} onChange={handleChange} required placeholder="jane.smith@contractor.com" />

              <Field label="Project Location / City" id="location" value={form.location} onChange={handleChange} required placeholder="Austin, TX" />

              <div className="flex flex-col gap-1.5">
                <label htmlFor="details" className="text-xs font-mono tracking-[0.15em] uppercase text-steel-400">
                  Project Details / Estimated Crew Size<span className="text-ember-500 ml-0.5">*</span>
                </label>
                <textarea
                  id="details"
                  name="details"
                  required
                  rows={5}
                  value={form.details}
                  placeholder="e.g. Data center hyperscale build, approx. 400 workers across two shifts. Looking for micro-market near the staging area and vending near the MEP corridor."
                  onChange={(e) => handleChange('details', e.target.value)}
                  className="w-full rounded-lg border border-steel-500/20 bg-charcoal-900 px-4 py-3 text-sm text-steel-100 placeholder-steel-500/40 outline-none transition-all duration-200 focus:border-ember-500/60 focus:ring-1 focus:ring-ember-500/30 resize-none"
                />
              </div>

              <div className="h-px bg-steel-500/10" />

              {sendError && (
                <p className="text-sm text-red-400 text-center">
                  Something went wrong. Please try again or email us at{' '}
                  <a href="mailto:info@canyon-markets.com" className="underline hover:text-red-300">
                    info@canyon-markets.com
                  </a>
                  .
                </p>
              )}

              <div className="flex items-center justify-between gap-4">
                <p className="text-xs text-steel-500 leading-relaxed max-w-xs">
                  No commitment required. We'll respond within one business day.
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-shrink-0 rounded-lg bg-ember-500 px-8 py-3 text-sm font-semibold tracking-wide text-white uppercase transition-all duration-200 hover:bg-ember-400 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-ember-400"
                >
                  {loading ? 'Sending…' : 'Submit Request'}
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}
