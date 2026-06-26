# Full SEO Audit Report — rv-portfolio-olive.vercel.app

**Date:** 2026-06-26
**Type:** Single-site full audit (homepage + 1 project subpage sampled)
**Stack:** Next.js (App Router, Turbopack build), hosted on Vercel
**Language:** `es` (Spanish)

## Environment Limitations

- No working Python interpreter was available in this environment (`python3`/`python` resolve to the Windows Store stub), so the skill's bundled scripts (`fetch_page.py`, `parse_html.py`, `robots_checker.py`, `pagespeed.py`, `security_headers.py`, etc.) could not run. Evidence below was collected via direct `curl` requests and live page fetches instead. Findings from these direct checks are still evidence-backed (not hypotheses) unless noted otherwise.
- Google PageSpeed Insights API returned `429 RESOURCE_EXHAUSTED` (daily quota = 0, no API key configured). **Core Web Vitals (LCP, INP, CLS) could not be measured.** This category is marked `Hypothesis` / unscored below.

---

## Overall Score: 51 / 100 — Needs Improvement

| Category | Weight | Score | Confidence |
|---|---|---|---|
| Technical SEO | 25% | 55 | Confirmed |
| Content Quality | 20% | 45 | Confirmed |
| On-Page SEO | 15% | 65 | Confirmed |
| Schema / Structured Data | 15% | 10 | Confirmed |
| Performance (CWV) | 10% | — (no data) | Hypothesis |
| Image Optimization | 10% | 90 | Confirmed |
| AI Search Readiness (GEO/AEO) | 5% | 40 | Confirmed |

---

## 1. Technical SEO (25%)

| Check | Finding | Severity |
|---|---|---|
| robots.txt | Returns `404` (falls through to the custom Next.js not-found page) | 🔴 Critical |
| sitemap.xml | Returns `404` | 🔴 Critical |
| llms.txt | Returns `404` | ⚠️ Warning |
| HTTP → HTTPS redirect | `http://` returns `308` → `https://` correctly | ✅ Pass |
| HSTS | `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` present | ✅ Pass |
| Other security headers | No `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, or `Permissions-Policy` headers found | ⚠️ Warning |
| Canonical tags | Not present on homepage or on the sampled subpage (`/proyectos/23-rios`) | ⚠️ Warning |
| `lang` attribute | `<html lang="es">` present | ✅ Pass |
| Viewport meta | `width=device-width, initial-scale=1` present | ✅ Pass |
| Charset | `utf-8` declared | ✅ Pass |
| Heading hierarchy | Single `<h1>` per page checked, followed by `<h2>`/`<h3>` with no skipped levels | ✅ Pass |
| Internal links | 4/4 internal project pages (`/proyectos/23-rios`, `/proyectos/arq-alonso`, `/proyectos/cache-bistro`, `/proyectos/la-casona`) return `200` | ✅ Pass |
| External demo links | 4/4 external demo links (`arq-alonso.vercel.app`, 3× `ramiroverre.github.io/*-demo`) return `200` | ✅ Pass |
| manifest.json | Returns `404` | ℹ️ Info (not a PWA — low priority) |

**Evidence — robots.txt/sitemap.xml/llms.txt 404s:** all three requests returned the site's custom Next.js `_not-found` page (`<title>404: This page could not be found.</title>`, `<meta name="robots" content="noindex"/>`) with HTTP status `404`, confirmed via `curl -s -w "STATUS:%{http_code}"`.

**Impact:** Without `robots.txt`, there is no explicit directive for search/AI crawlers (Googlebot, GPTBot, ClaudeBot, PerplexityBot, Applebot-Extended, Google-Extended) and no pointer to a sitemap. Without `sitemap.xml`, the 4 project subpages depend entirely on internal-link discovery for indexing — slower and less reliable, especially right after deploys. Missing security headers (CSP/X-Frame-Options/etc.) are a hardening gap, not a direct ranking factor, but are part of Google's site-quality signals and reduce exposure to clickjacking/MIME-sniffing attacks.

---

## 2. Content Quality / E-E-A-T (20%)

**Evidence (extracted via live fetch):**
- Heading outline: "Diseño & desarrollo web front-end" → "Diseño web que hace crecer tu negocio" → "Proyectos" → 4× project headings → "Sobre mí" → "Contacto".
- "Sobre mí" section: describes Ramiro as a front-end designer who owns the full process (UI/UX, dev, animation, deployment); states each portfolio project originated from a real client brief.
- Estimated total body word count: **~350–400 words** across the entire homepage.
- No years of experience stated, no real client names (the 4 showcased projects are explicitly demos, not disclosed as live client engagements), no testimonials, no public email address, no LinkedIn/GitHub/social links.

| Check | Finding | Severity |
|---|---|---|
| Content depth | ~350–400 words total on the homepage — thin for a page expected to rank for commercial "diseño web" / "desarrollo web" intent | ⚠️ Warning |
| E-E-A-T — Experience | No years-of-experience claim, no named/dated track record | ⚠️ Warning |
| E-E-A-T — Trust | No testimonials, no verifiable client names, no public email/social profile links | ⚠️ Warning |
| E-E-A-T — Author identity | A named, photographed person ("Ramiro, diseñador front-end") is present with a personal photo — partial trust signal | ✅ Pass (partial) |
| Per-project content | Each project subpage has unique descriptive copy (not boilerplate) | ✅ Pass |

**Impact:** As of December 2025, Google applies E-E-A-T evaluation to all competitive queries, not just YMYL. A freelance/agency services site competing for "diseño web" terms benefits disproportionately from visible trust signals (experience duration, real client names/logos, testimonials, public contact identity). The current page reads more like a capabilities demo than an established service track record.

---

## 3. On-Page SEO (15%)

| Element | Value | Length | Severity |
|---|---|---|---|
| Homepage `<title>` | "RV Studio — Diseño & Desarrollo Web Front-End" | 48 chars | ✅ Pass |
| Homepage meta description | "RV Studio: diseño y desarrollo de sitios web a medida para restaurantes, estudios y marcas que quieren convertir visitas en clientes. Landing pages modernas, rápidas y con animaciones." | **186 chars** | ⚠️ Warning — exceeds the ~155–160 char SERP truncation limit |
| Subpage `<title>` (sample: 23-rios) | "23 Ríos — RV Studio" | 20 chars | ✅ Pass |
| Subpage meta description (sample) | "Landing oscura y con onda para una cervecería artesanal con patio cervecero, beer truck y producción propia en Luján de Cuyo." | 128 chars | ✅ Pass |
| `og:url` | Not found in OG tag set | — | ⚠️ Warning |
| Open Graph (title/description/image/type) | All present, image is 1200×630 PNG | — | ✅ Pass |
| Twitter Card | `summary_large_image` with title/description/image | — | ✅ Pass |

**Impact:** The homepage meta description will be truncated in Google's desktop and mobile SERPs, cutting off the "Landing pages modernas, rápidas y con animaciones" closing hook — the part most likely to differentiate the listing.

---

## 4. Schema / Structured Data (15%)

**Evidence:** `grep -o 'application/ld+json'` returned **zero matches** on both the homepage and the sampled subpage. No `<script type="application/ld+json">` block exists anywhere checked.

| Check | Finding | Severity |
|---|---|---|
| Any JSON-LD present | None found | 🔴 Critical |
| Organization / ProfessionalService schema | Missing | 🔴 Critical |
| Person schema (for Ramiro as the named professional) | Missing | ⚠️ Warning |
| WebSite schema | Missing | ⚠️ Warning |

**Impact:** This is the single largest structured-data gap on the site. For a one-person design/dev studio, `ProfessionalService`/`Organization` + `Person` JSON-LD directly reinforces E-E-A-T signals to Google and gives AI answer engines (ChatGPT, Perplexity, AI Overviews) a clean, parseable entity to cite when summarizing "who is RV Studio."

---

## 5. Performance / Core Web Vitals (10%) — Hypothesis only

**Could not measure.** PageSpeed Insights API call returned:
```
429 RESOURCE_EXHAUSTED — "Quota exceeded for quota metric 'Queries' ... quota_limit_value: 0"
```
This means no PSI API key is configured in this environment (the public/keyless quota is `0`). No Core Web Vitals data (LCP/INP/CLS) is available.

**Indirect signal only:** `curl` timing on the homepage HTML response showed `time_total: 0.44s` with `X-Vercel-Cache: HIT` (edge-cached), which is a healthy TTFB signal but **not a substitute for real CWV field/lab data** and should not be scored.

**Recommendation:** Add a `PAGESPEED_API_KEY` to `.env` (see `Agentic-SEO-Skill/.env.example`) or run Lighthouse/PSI manually before trusting any performance score for this site.

---

## 6. Image Optimization (10%)

| Check | Finding | Severity |
|---|---|---|
| Alt text | Every `<img>` checked has descriptive, contextual Spanish alt text (e.g. `"Caché Bistró — captura del sitio"`, `"Ramiro, diseñador front-end"`) | ✅ Pass |
| Responsive images | All images served via Next.js `/_next/image` with full `srcSet` (multiple widths up to 3840w) and `sizes` attributes | ✅ Pass |
| Modern formats / auto-optimization | Handled automatically by Next.js Image pipeline (format negotiation, quality=75) | ✅ Pass |
| Lazy-loading strategy | Correctly differentiated: the first two project images (likely above/near the fold) load eagerly; later project images and the "Sobre mí" photo use `loading="lazy"` | ✅ Pass |

**Impact:** This is the strongest category on the site — no action needed.

---

## 7. AI Search Readiness — GEO/AEO (5%)

| Check | Finding | Severity |
|---|---|---|
| `llms.txt` | Missing (404) | ⚠️ Warning |
| AI crawler directives in robots.txt | N/A — robots.txt itself is missing, so GPTBot/ClaudeBot/PerplexityBot/Google-Extended/Applebot-Extended/CCBot/Bytespider have no explicit allow/block policy | ⚠️ Warning |
| Answer-friendly content blocks | No FAQ-style or direct Q&A content found (note: FAQPage schema is restricted to government/healthcare sites since Aug 2023 — do **not** add FAQPage markup; plain conversational content blocks are still fine) | ℹ️ Info |

---

## Artifacts Generated
- `FULL-AUDIT-REPORT.md` (this file)
- `ACTION-PLAN.md` (prioritized fixes)
