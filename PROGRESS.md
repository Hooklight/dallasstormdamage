# DallasStormDamage.com — Build Progress

> Last updated: 2026-03-18

---

## Current Status: MVP Phase 1 — BUILT, awaiting deploy credentials

### ✅ Done (this session)

| Area | Status | Notes |
|------|--------|-------|
| Next.js 16 scaffold | ✅ | App Router, TypeScript strict, Tailwind v4 |
| Design tokens | ✅ | Brand colors, fonts, spacing in `tailwind.config.ts` |
| Header + Footer | ✅ | Sticky header, mobile hamburger, sticky bottom call button |
| UI component library | ✅ | Button, Card, Badge, Container, Section, TrackedPhone |
| Intake form | ✅ | react-hook-form + zod v4, honeypot, validation |
| Server action | ✅ | `submitLead` — validation, sanitization, DB insert, email |
| Rate limiting | ✅ | 5 req/IP/hour in-memory |
| DB schema | ✅ | `leads` + `partners` tables (Drizzle/Neon) |
| Homepage | ✅ | Hero + form + service cards + how it works + trust blocks |
| /contact page | ✅ | Form + trust sidebar |
| /emergency-roof-leak | ✅ | Priority 1 — pre-checked emergency flag |
| /hail-damage-dallas | ✅ | Full content, 4 FAQs, related links |
| /wind-damage-roof-repair | ✅ | Full content, 3 FAQs, related links |
| /storm-damage-inspection | ✅ | Full content, 4 FAQs, related links |
| /insurance-claim-help | ✅ | Full content, 4 FAQs, regulatory language careful |
| /how-it-works | ✅ | Custom layout, disclosure banner, 4-step flow |
| /first-24-hours-after-storm | ✅ | Printable checklist, emergency contacts |
| SEO: robots.txt | ✅ | Disallows /admin, /api |
| SEO: sitemap.xml | ✅ | 14 routes with priorities |
| JSON-LD: LocalBusiness | ✅ | All pages via root layout |
| JSON-LD: FAQPage | ✅ | All service pages |
| TrackedPhone | ✅ | GA4 dataLayer event on click |
| Email notifications | ✅ | Resend integration, fire-and-forget |
| Build check | ✅ | 14 static routes, 0 TS errors, 0 lint errors |
| Git commit | ✅ | Initial commit on `main` branch |

---

### 🔴 Blocked (needs credentials)

| Task | Needs | Notes |
|------|-------|-------|
| GitHub repo creation | GitHub PAT with `repo` scope | Repo: `dallasstormdamage` under jsimon@hooklightventures.com |
| Vercel deployment | Vercel token (or push to GitHub + connect in Vercel UI) | Team: john-simons-projects-9a0014ed |
| Database setup | `DATABASE_URL` (Neon or Vercel Postgres) | Run `npm run db:migrate` after setting |
| Email notifications | Resend API key + `ADMIN_EMAIL` | Sign up at resend.com |

---

### ⏳ Next up (Phase 2 — after first leads)

| Task | Sprint ref | Priority |
|------|-----------|----------|
| Admin auth + login | Phase 2 | High |
| Lead list page | Phase 2 | High |
| Lead detail + status update | Phase 2 | High |
| Partner table CRUD | Phase 2 | Medium |
| Basic GA4 integration | Phase 2 | Medium |
| Google Search Console setup | Phase 2 | Medium |
| UTM parameter capture | Phase 2 | Medium |

---

### 📋 Environment Variables Required

See `.env.local.example` for all variables. Key ones:

```bash
DATABASE_URL=postgresql://...              # Neon or Vercel Postgres
NEXT_PUBLIC_PHONE_NUMBER=(214) 555-0100   # Your actual tracking number
NEXT_PUBLIC_SITE_URL=https://dallasstormdamage.com
RESEND_API_KEY=re_...                      # resend.com
ADMIN_EMAIL=jsimon@hooklightventures.com
ADMIN_SECRET=...                           # Long random string for admin auth
```

---

### 🏗️ File Structure

```
src/
  app/
    actions/leads.ts          ← Server action: form submission
    contact/page.tsx
    emergency-roof-leak/page.tsx
    first-24-hours-after-storm/page.tsx
    hail-damage-dallas/page.tsx
    how-it-works/page.tsx
    insurance-claim-help/page.tsx
    layout.tsx                ← Root layout with Header/Footer
    page.tsx                  ← Homepage
    robots.ts
    sitemap.ts
    storm-damage-inspection/page.tsx
    wind-damage-roof-repair/page.tsx
  components/
    forms/IntakeForm.tsx      ← The business core
    layout/Header.tsx
    layout/Footer.tsx
    templates/ServicePageLayout.tsx  ← Reusable service page
    ui/                       ← Button, Card, Badge, Container, Section, TrackedPhone, StructuredData
  db/
    schema.ts                 ← leads + partners tables
    index.ts                  ← Drizzle/Neon connection
  lib/
    design-tokens.ts
    email.ts                  ← Resend notification
    rate-limit.ts
    utils.ts
```

---

### 📅 Revised Build Timeline (per feedback)

**Phase 1 — Capture and credibility (DONE)**
Build: 7 days → ✅ Completed

**Phase 2 — Admin + learn (this week)**
- Admin auth (login page, session cookie, middleware)
- Lead list (table, filters, status badges)
- Lead detail (update status, notes, partner assign)
- Partner table CRUD
- Simple GA4 events
- Search Console setup

**Phase 3 — Scale what's working (after proof)**
Only after: which pages produce calls, which leads close, which partner closes best
- Storm rapid response engine
- Dashboard summaries
- CSV export
- Second-wave content pages
- Security hardening pass

---

### 📊 KPIs to Track (per feedback)

- Total leads / week
- Qualified leads / week
- Call answer rate
- Inspection scheduled rate
- Partner response time (median)
- Close rate
- Average job value
- Top landing pages (Search Console)
- Emergency vs non-emergency mix
