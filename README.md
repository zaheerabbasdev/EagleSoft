# EagleSoft — Corporate Website

The marketing website for **EagleSoft Pvt Ltd**, a software development company based in Islamabad, Pakistan. Built with Next.js (App Router), React, TypeScript, and Tailwind CSS.

The site covers the company's services, industry solutions, portfolio/projects, careers, FAQ, and contact/quote-request flow.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **UI:** React 19, TypeScript, Tailwind CSS 4
- **Icons:** Font Awesome (`@fortawesome/react-fontawesome`)
- **Fonts:** Inter (via `next/font/google`)
- **Images:** `next/image` with local static assets (no external image CDN configured)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The dev server uses Turbopack and supports hot reload.

### Other scripts

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint     # run ESLint
```

## Project Structure

```
app/                        Next.js App Router pages
  page.tsx                  Home
  about/                    About page
  services/                 Services listing
  services/[slug]/          Individual service detail pages
  solutions/                Industry solutions listing
  projects/                 Projects/portfolio listing
  projects/[slug]/          Individual project detail pages
  careers/                  Careers page
  contact/                  Contact page
  faq/                      FAQ page
  privacy-policy/, terms/   Legal pages
  layout.tsx                Root layout (Navbar, Footer, QuoteModal, fonts, metadata)
  sitemap.ts, robots.ts     SEO route handlers

src/
  components/
    common/                 Reusable UI: Button, Container, Icon, Logo, SectionHeading, QuoteModal
    layout/                 Navbar, Footer
    home/                   Homepage sections (Hero, ServicesPreview, SolutionsPreview,
                             ProjectsPreview, WhyEagleSoft, ProcessSection, CtaSection, CompanyIntro)
  config/                   All site content lives here as typed data (see below)
  context/                  QuoteModalContext — global "Request a Quote" modal state
  lib/                      Font Awesome icon registration

public/
  hero/                     Homepage hero carousel background photos
  images/                   Brand logo source files + processed logo/icon assets
  images/projects/          Processed images used on real portfolio project cards
```

## Content Model (`src/config/`)

The site is data-driven — page copy and listings are defined as typed arrays/objects in `src/config/`, not hardcoded in JSX. To update site content, edit these files rather than the page components:

| File | Controls |
|---|---|
| `site.ts` | Company name, tagline, contact info, address, business hours, social links, copyright |
| `navigation.ts` | Main nav links and footer link groups |
| `theme.ts` | Centralized color palette / design tokens |
| `services.ts` | The 8 core services (features, capabilities, technologies, deliverables) — powers `/services` and `/services/[slug]` |
| `solutions.ts` | The 7 industry solution verticals (problem/solution/outcomes) — powers `/solutions` |
| `projects.ts` | Portfolio project entries — powers `/projects` and `/projects/[slug]` (see below) |
| `home.ts` | Homepage-specific content: hero slides, "why choose us" reasons, process steps, friendly service/benefit summaries |
| `faq.ts` | FAQ page questions & answers |

### Projects (`projects.ts`)

Each `ProjectItem` supports two kinds of entries, distinguished by the `kind` field:

- **`kind: "software"`** (default) — fictional/illustrative software architecture case studies (POS platform, ERP, B2B commerce, mobile field service, logistics engine, healthcare portal). Detail pages use architecture-flavored copy ("System Architecture & Data Strategy", "Technology Stack", etc.).
- **`kind: "design"`** — real client deliverables (logo & app icon design work: Graphix Online, Hussain Mobile, Synonyms app icon, Scanner app icon, ET & FT brand identities). Detail pages use design-flavored copy ("The Creative Brief", "Tools & Software", etc.).

An optional `image` field (path under `public/`) makes the project card show that image filling the top of the card:
- `design` cards show the logo centered (`object-contain`) on a soft tinted background, since these are transparent-background logo files.
- `software` cards show the image as a full-bleed cover photo with a dark gradient overlay and white text, for screenshot-style imagery.

Cards with no `image` fall back to the original plain gradient header.

To add a real project screenshot later: drop the file under `public/images/projects/`, then set `image: "/images/projects/your-file.png"` on that project's entry in `projectsData`.

## Brand Assets

The canonical logo source is `public/images/Eagle Soft (LGT).png`. From it, the following derived assets were generated (via `sharp`) and are consumed by the `Logo` component (`src/components/common/Logo.tsx`):

- `eaglesoft-icon.png` / `eaglesoft-icon-white.png` — the eagle mark, trimmed and keyed to transparency (color and white-silhouette variants)
- `eaglesoft-wordmark.png` / `eaglesoft-wordmark-white.png` — the "EAGLE SOFT" wordmark, trimmed and keyed to transparency

`Logo` renders the icon + wordmark side-by-side and picks the `light` (color) or `dark` (white) variant depending on background, with `sm`/`md`/`lg` size presets. Used in the Navbar (light, on white) and Footer (dark, on brand blue).

## Deployment (GoDaddy Shared/cPanel Hosting)

GoDaddy's shared hosting plans have no ability to run a persistent Node.js process, so `next.config.ts` is configured for a **static export**:

```ts
const nextConfig: NextConfig = {
  output: "export",           // build produces static HTML/CSS/JS in out/
  images: { unoptimized: true }, // no image-optimization server on static hosting
  trailingSlash: true,        // emits /about/index.html so Apache serves it correctly
};
```

`app/sitemap.ts` and `app/robots.ts` each need `export const dynamic = "force-static";` for the same reason — they're already set.

### Steps

1. **Build locally:**
   ```bash
   npm run build
   ```
   This produces a self-contained `out/` folder with the entire static site (~13MB).

2. **Zip the contents of `out/`** (zip the files inside it, not the `out` folder itself, so `index.html` sits at the zip's root).

3. **Log into GoDaddy → My Products → Web Hosting → Manage → cPanel.**

4. **Open File Manager** and navigate to `public_html` (or the specific subfolder cPanel created if this is an addon domain, not the primary domain on the account).

5. **Back up / remove** any existing placeholder files in that folder, then upload the zip and use File Manager's **Extract** option to unpack it directly into `public_html`.

6. Confirm `index.html`, `_next/`, `about/`, `services/`, etc. end up directly inside `public_html` — not nested inside an extra folder.

7. Visit your domain — the site should now be live. If the domain isn't resolving yet, check **My Products → Domains** to make sure it's pointed at this hosting account.

### Updating the live site

Whenever content changes, repeat: `npm run build` → re-zip `out/` → re-upload/extract over `public_html` via File Manager (or FTP, using the credentials under cPanel → FTP Accounts).

### Known limitation: contact & quote forms

The "Request a Quote" modal and the `/contact` form (`src/components/common/QuoteModal.tsx`, `app/contact/page.tsx`) currently only *simulate* a submission client-side — there's no backend wired up, so inquiries aren't actually sent anywhere yet. This is unrelated to static hosting (it was already a placeholder). To make these work on static hosting, wire the `fetch(...)` calls (already stubbed in both files) to a third-party form endpoint such as Formspree or EmailJS, since there's no Node server here to run a mailer script.
