# SEO Action Plan — rv-portfolio-olive.vercel.app

Prioritized by impact vs. effort. See `FULL-AUDIT-REPORT.md` for full evidence.

## 🔴 Critical — fix first (high impact, low–medium effort)

1. **Add `robots.txt`**
   - Create `public/robots.txt` (Next.js serves anything in `public/` at the root) allowing all crawlers and pointing to the sitemap:
     ```
     User-agent: *
     Allow: /

     Sitemap: https://rv-portfolio-olive.vercel.app/sitemap.xml
     ```
   - Optionally add explicit `Allow:`/`Disallow:` rules for `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended` depending on whether AI training/answer-engine crawling is desired.
   - Effort: ~15 min.

2. **Add `sitemap.xml`**
   - Next.js App Router supports a generated sitemap via `app/sitemap.ts` (returns the 5 known URLs: `/`, `/proyectos/23-rios`, `/proyectos/arq-alonso`, `/proyectos/cache-bistro`, `/proyectos/la-casona`).
   - Effort: ~20 min.

3. **Add structured data (JSON-LD)**
   - Add `Person` schema for Ramiro (name, jobTitle, url, image, sameAs if social profiles exist) and `ProfessionalService`/`Organization` schema for RV Studio on the homepage, via `<script type="application/ld+json">` in the root layout or page metadata.
   - Do **not** add `FAQPage` (restricted to gov/healthcare) or `HowTo` (deprecated) schema.
   - Effort: ~1–2 hrs (including validation).

## ⚠️ Warning — fix within 1 month

4. **Shorten the homepage meta description** from 186 → ≤155 characters so it isn't truncated in SERPs. Suggested trim:
   > "RV Studio: diseño y desarrollo de sitios web a medida para restaurantes, estudios y marcas. Landing pages modernas, rápidas y con animaciones."
   (143 chars)

5. **Add canonical tags** (`<link rel="canonical">`) to the homepage and all `/proyectos/*` pages via Next.js `metadata.alternates.canonical`.

6. **Add missing security headers** via `next.config` headers or `vercel.json`: `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`. HSTS is already correctly set — keep it.

7. **Add `og:url`** to the Open Graph tag set on every page (currently missing).

8. **Strengthen E-E-A-T / trust signals**:
   - State years of experience / founding date.
   - If/when real client work exists, name real clients with permission and add testimonials.
   - Add a public email address and/or LinkedIn/GitHub link near the "Sobre mí" section.
   - Clarify in copy that the 4 showcased projects are concept/demo builds (if that's the case) to keep trust signals honest — ambiguity here can itself hurt E-E-A-T if a reader assumes they're live client sites.

9. **Add `llms.txt`** at the site root summarizing what RV Studio is, who it serves, and links to key pages — improves GEO/AEO readiness for AI answer engines.

10. **Expand homepage content depth** beyond the current ~350–400 words — e.g. a short "process" or "how I work" section, or a services breakdown — to better compete for "diseño web" / "desarrollo web" commercial-intent queries.

## ℹ️ Info / low priority

11. `manifest.json` is missing (404) — only relevant if PWA/installable-app behavior is wanted. Skip unless needed.

## Blocked / needs follow-up

- **Core Web Vitals (LCP/INP/CLS):** could not be measured — PageSpeed Insights API returned `429` (no API key, keyless quota = 0). Add a `PAGESPEED_API_KEY` to `.env` (see `Agentic-SEO-Skill/.env.example`) and re-run `python3 Agentic-SEO-Skill/scripts/pagespeed.py <url> --strategy mobile` once a key is configured, or run Lighthouse manually in Chrome DevTools.
- **Script-backed checks (robots/security-headers/broken-links scripts):** this environment has no working Python interpreter (`python3`/`python` resolve to the Windows Store stub). Install a real Python 3.8+ to run the skill's bundled scripts for deeper/automated re-checks after the fixes above are deployed.
