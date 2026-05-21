# Mission Critical Vending — SEO Checklist
**Site:** https://missioncriticalvending.com  
**Last Updated:** May 2026

---

## STEP 1 — Verify DNS & SSL Are Live
Mission Critical Vending is already deployed to Netlify.

- [ ] Visit https://missioncriticalvending.com — confirm it loads over HTTPS
- [ ] Visit https://www.missioncriticalvending.com — confirm redirect to root domain
- [ ] If SSL error: Netlify → Domain settings → HTTPS → **Verify DNS configuration**

---

## STEP 2 — Google Search Console
- [ ] Go to https://search.google.com/search-console
- [ ] Add property → `https://missioncriticalvending.com`
- [ ] Verify ownership via HTML meta tag in `app/layout.tsx` under `verification: { google: 'YOUR_CODE' }`
- [ ] Submit sitemap: `https://missioncriticalvending.com/sitemap.xml`
- [ ] Confirm pages indexed within 3–5 days

---

## STEP 3 — Google Business Profile
- [ ] Go to https://business.google.com
- [ ] Business name: **Mission Critical Vending**
- [ ] Category: **Vending Machine Supplier** or **Food & Beverage Services**
- [ ] Phone: your business number
- [ ] Website: https://missioncriticalvending.com
- [ ] Service area: Phoenix metro + any other markets you serve
- [ ] Verify via phone or postcard
- [ ] After verification:
  - [ ] Add photos (job site vending, machines on construction sites)
  - [ ] Write description: "Mission Critical Vending serves large-scale construction sites, data centers, and industrial facilities across the Phoenix metro. 24/7 service, bulk purchase pricing, no-hassle installation. We keep your workforce fueled on the job site."
  - [ ] Add services: Construction Site Vending, Industrial Vending, Data Center Vending, Bulk Vending Supply, 24/7 Vending Service
  - [ ] Add business hours

---

## STEP 4 — Google Analytics 4
- [ ] Create GA4 property at https://analytics.google.com
- [ ] Get Measurement ID (`G-XXXXXXXXXX`)
- [ ] Add to `app/layout.tsx` via `@next/third-parties`
- [ ] Set up conversion tracking for contact form submissions

---

## STEP 5 — Business Directories & Listings

### Critical
- [ ] **Yelp for Business** — https://biz.yelp.com  
  Category: Vending Machines / Food & Beverage Services
- [ ] **BBB** — https://www.bbb.org/accreditation
- [ ] **Bing Places** — https://www.bingplaces.com
- [ ] **Google Maps** — Verify your Google Business Profile appears correctly on Maps

### Construction & Industry Specific (Highest Value for This Site)
- [ ] **NAMA (National Automatic Merchandising Association)** — https://www.namanow.org  
  Industry directory — great credibility signal and backlink
- [ ] **AGC Arizona (Associated General Contractors)** — https://www.agcaz.org  
  List as a vendor/supplier. Facilities and project managers find vendors here.
- [ ] **Arizona Contractor & Community Magazine** — Look for vendor directory listings
- [ ] **iSqFt / ConstructConnect** — https://www.constructconnect.com  
  Construction project database — vendors listed here get found by GCs
- [ ] **Subcontractors USA** — Vendor listing directory for construction trades
- [ ] **Angi** — https://www.angi.com/companylist/add  
  Facilities and site managers use this

### Supplemental
- [ ] **LinkedIn Company Page** — Mission Critical Vending  
  Post photos of job site installs, tag general contractors and project managers
- [ ] **Thumbtack** — Good for smaller inbound leads
- [ ] **Facebook Business Page**

---

## STEP 6 — Review Strategy
Construction is relationship-driven. Reviews close deals with new GCs who don't know you yet.

- [ ] After every successful site setup, ask the project manager or site super for a Google review
- [ ] Suggested text: *"Glad we could keep the crew fueled up on [project name]! If you have 60 seconds, a Google review really helps us grow — here's the link: [link]"*
- [ ] Target: 5 reviews in first 6 months
- [ ] Respond to every review

---

## STEP 7 — Rich Results Verification
- [ ] Go to https://search.google.com/test/rich-results
- [ ] Enter `https://missioncriticalvending.com`
- [ ] Confirm **LocalBusiness / Organization** schema detected
- [ ] Fix any warnings

---

## STEP 8 — Outreach Strategy (Beyond SEO)
MCV's best leads will come from direct relationships, not just organic search. Do both.

- [ ] Build a list of the top 20 active construction projects in Phoenix metro (use Dodge Data, iSqFt, or just drive around)
- [ ] Contact the GC or site super directly with a one-page capabilities sheet
- [ ] Attend: **Arizona Builders Alliance** events, **AGC Arizona** dinners
- [ ] Get listed as an approved vendor with 2–3 large GCs in the area

---

## STEP 9 — Ongoing (Monthly)
- [ ] Check Search Console for crawl errors
- [ ] Update Google Business Profile with new job site photos
- [ ] Respond to any new reviews
- [ ] Post LinkedIn updates tagging project completions

---

## Keywords to Target
- `construction site vending Phoenix AZ`
- `job site vending machines Phoenix`
- `vending for construction crews Arizona`
- `24 hour vending construction site Phoenix`
- `data center vending services Phoenix`
- `industrial vending machine supplier Arizona`
- `mission critical vending Phoenix`
- `bulk vending supply construction Phoenix`
- `large construction project vending Arizona`
