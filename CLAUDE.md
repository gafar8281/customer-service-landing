# Project Architecture & Technical Documentation

> **Mainline Next.js Template** — Complete technical reference for the customer-mainline-project.  
> Generated: 2026-06-19 | Version: 1.2.0

---

## Table of Contents

1. [Project Overview & Purpose](#1-project-overview--purpose)
2. [Folder & File Structure](#2-folder--file-structure)
3. [Technology Stack](#3-technology-stack)
4. [UI Library & Component Library](#4-ui-library--component-library)
5. [State Management](#5-state-management)
6. [Routing & Navigation Structure](#6-routing--navigation-structure)
7. [Data Models & Entity Relationships](#7-data-models--entity-relationships)
8. [Design Patterns & Architectural Decisions](#8-design-patterns--architectural-decisions)
9. [Styling Framework](#9-styling-framework)
10. [Build Tools & Package Management](#10-build-tools--package-management)
11. [Environment Configuration](#11-environment-configuration)
12. [Key Features & Modules](#12-key-features--modules)
13. [Reusable Components & Utilities](#13-reusable-components--utilities)
14. [Application Workflow & User Flow](#14-application-workflow--user-flow)
15. [Coding Conventions & Project Standards](#15-coding-conventions--project-standards)

---

## 1. Project Overview & Purpose

### What It Is

This is a **marketing / SaaS landing-page website** called **Mainline**, built on the Mainline Next.js Template (v1.2.0) created by [shadcnblocks.com](https://shadcnblocks.com). It presents a fictional project-management / resource-allocation SaaS product targeted at Saudi businesses.

### Business Purpose

The site serves as a public-facing marketing presence with:
- A conversion-focused homepage (hero → social proof → features → testimonials → FAQ)
- An About page (company story, stats, investors)
- A FAQ page (categorized Q&A with accordion UI)
- A Contact page (contact form + office/email/social info)
- A Privacy Policy page (MDX content)

### Current Implementation State

| Area | Status |
|------|--------|
| UI / pages | Complete and production-ready |
| Dark/light theme | Implemented |
| Contact form (frontend) | Complete with validation |
| Contact form (backend) | Stub — logs to console, no database |
| Authentication | Not implemented |
| Database | Not implemented |
| External integrations | Not implemented (Stripe, Supabase, etc.) |

### Origin

Base template from **shadcnblocks.com** — a commercial Next.js + shadcn/ui template library. The project was customized with brand copy targeting Saudi-based technology businesses.

---

## 2. Folder & File Structure

```
customer-mainline-project/
├── fonts/
│   └── dm-sans/                    # Local DM Sans font files (8 TTF variants)
│       ├── DMSans-Regular.ttf
│       ├── DMSans-Italic.ttf
│       ├── DMSans-Medium.ttf
│       ├── DMSans-MediumItalic.ttf
│       ├── DMSans-SemiBold.ttf
│       ├── DMSans-SemiBoldItalic.ttf
│       ├── DMSans-Bold.ttf
│       └── DMSans-BoldItalic.ttf
│
├── public/                         # Static assets served at root URL
│   ├── logo.svg                    # Brand logo (used in Navbar, Footer)
│   ├── hero.webp                   # Main homepage hero image
│   ├── footer.svg                  # Footer decorative SVG with gradient
│   ├── og-image.jpg                # Open Graph social preview image
│   ├── favicon/                    # All favicon/PWA icon variants
│   │   ├── favicon.ico
│   │   ├── favicon.svg
│   │   ├── favicon-96x96.png
│   │   ├── apple-touch-icon.png
│   │   ├── web-app-manifest-192x192.png
│   │   ├── web-app-manifest-512x512.png
│   │   └── site.webmanifest
│   ├── about/                      # About page images
│   │   ├── 1.webp, 2.webp, 3.webp, 4.webp
│   ├── features/                   # SVG cards for features section
│   │   ├── triage-card.svg
│   │   ├── cycle-card.svg
│   │   └── overview-card.svg
│   ├── logos/                      # Partner/client logos (SVG)
│   │   ├── mercury.svg, watershed.svg, retool.svg, descript.svg
│   │   ├── perplexity.svg, monzo.svg, ramp.svg, raycast.svg, arc.svg
│   │   ├── jira.svg, excel.svg, notion.svg, word.svg, monday.svg
│   │   ├── drive.svg, asana.svg, confluence.svg, openai.svg, claude.svg
│   │   └── [additional logo SVGs]
│   ├── testimonials/               # Author portrait photos
│   │   ├── amy-chase.webp
│   │   ├── jonas-kotara.webp
│   │   ├── kevin-yam.webp
│   │   └── kundo-marta.webp
│   ├── investors/                  # Investor profile photos
│   │   └── 1.webp – 5.webp
│   └── resource-allocation/        # Images for resource-allocation feature section
│       ├── templates.webp
│       ├── graveyard.webp
│       ├── discussions.webp
│       └── notifications.webp
│
├── src/
│   ├── actions/                    # Next.js server actions
│   │   ├── safe-action.ts          # Creates next-safe-action client
│   │   └── server-action.ts        # Contact form submission handler
│   │
│   ├── app/                        # Next.js App Router (pages & layouts)
│   │   ├── layout.tsx              # Root layout — fonts, providers, Navbar, Footer
│   │   ├── page.tsx                # Home page (/)
│   │   ├── not-found.tsx           # 404 page
│   │   ├── about/
│   │   │   └── page.tsx            # About page (/about)
│   │   ├── contact/
│   │   │   └── page.tsx            # Contact page (/contact)
│   │   ├── faq/
│   │   │   └── page.tsx            # FAQ page (/faq)
│   │   └── privacy/
│   │       ├── page.tsx            # Privacy policy page (/privacy)
│   │       └── privacy.mdx         # Privacy policy content (MDX)
│   │
│   ├── components/
│   │   ├── background.tsx          # Decorative gradient wrapper
│   │   ├── dashed-line.tsx         # CSS dashed divider (horizontal/vertical)
│   │   ├── theme-provider.tsx      # next-themes ThemeProvider wrapper
│   │   ├── theme-toggle.tsx        # Sun/Moon dark-mode toggle button
│   │   ├── styleglide-provider.tsx # @styleglide/kit-view-provider wrapper
│   │   │
│   │   ├── blocks/                 # Full page-section components
│   │   │   ├── navbar.tsx          # Site navigation header
│   │   │   ├── footer.tsx          # Site footer with CTA and links
│   │   │   ├── hero.tsx            # Homepage hero section
│   │   │   ├── features.tsx        # Feature cards section
│   │   │   ├── logos.tsx           # Partner logo grid/marquee
│   │   │   ├── resource-allocation.tsx  # Resource allocation feature section
│   │   │   ├── testimonials.tsx    # Customer testimonial carousel
│   │   │   ├── faq.tsx             # Accordion FAQ section
│   │   │   ├── contact.tsx         # Contact info + form wrapper
│   │   │   ├── contact-form.tsx    # Contact form (RHF + Zod + server action)
│   │   │   ├── about.tsx           # Company story section
│   │   │   ├── about-hero.tsx      # About page hero with stats
│   │   │   └── investors.tsx       # Investor profile grid
│   │   │
│   │   └── ui/                     # shadcn/ui primitive components
│   │       ├── accordion.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── checkbox.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── select.tsx
│   │       └── textarea.tsx
│   │
│   ├── lib/
│   │   ├── utils.ts                # cn() class-merging utility
│   │   └── form-schema.ts          # Zod schema + ActionResponse type
│   │
│   └── styles/
│       └── globals.css             # Global CSS, Tailwind imports, design tokens
│
├── components.json                 # shadcn/ui CLI configuration
├── eslint.config.mjs               # ESLint flat config
├── next.config.ts                  # Next.js configuration (MDX, image options)
├── next-env.d.ts                   # Next.js TypeScript declarations
├── package.json                    # Dependencies and scripts
├── package-lock.json
├── postcss.config.mjs              # PostCSS with Tailwind v4 plugin
├── tsconfig.json                   # TypeScript configuration
├── .prettierrc                     # Prettier formatting config
├── .prettierignore
├── .gitignore
└── LICENSE
```

---

## 3. Technology Stack

### Core Framework

| Technology | Version | Role |
|-----------|---------|------|
| Next.js | 15.5.5 | Full-stack React framework (App Router) |
| React | 19.2.0 | UI library |
| React DOM | 19.2.0 | DOM renderer |
| TypeScript | 5.9.x | Static typing |
| Node.js | 18+ | Runtime (implied by Next.js 15) |

### Styling

| Technology | Version | Role |
|-----------|---------|------|
| Tailwind CSS | 4.1.14 | Utility-first CSS framework |
| @tailwindcss/postcss | 4.1.14 | PostCSS integration for Tailwind v4 |
| @tailwindcss/typography | 0.5.16 | Prose styling for MDX content |
| tw-animate-css | — | Additional Tailwind animation utilities |
| prettier-plugin-tailwindcss | — | Auto-sort Tailwind class names |

### UI Components

| Technology | Version | Role |
|-----------|---------|------|
| @radix-ui/react-accordion | latest | Headless accordion primitive |
| @radix-ui/react-checkbox | latest | Headless checkbox primitive |
| @radix-ui/react-label | latest | Headless label primitive |
| @radix-ui/react-navigation-menu | latest | Headless navigation menu |
| @radix-ui/react-select | latest | Headless select/dropdown |
| @radix-ui/react-slot | latest | Polymorphic slot utility |
| class-variance-authority | 0.7.x | Type-safe component variant system |
| clsx | 2.1.1 | Conditional class name utility |
| tailwind-merge | 3.3.1 | Merge conflicting Tailwind classes |

### Form Handling

| Technology | Version | Role |
|-----------|---------|------|
| react-hook-form | 7.65.0 | Form state management |
| @hookform/resolvers | 5.2.2 | Zod resolver bridge for RHF |
| zod | 4.1.12 | TypeScript-first schema validation |
| next-safe-action | 8.0.11 | Type-safe Next.js server actions |

### Animation & Motion

| Technology | Version | Role |
|-----------|---------|------|
| motion | 12.23.24 | Animation library (Framer Motion fork) |
| embla-carousel-react | 8.6.0 | Testimonials carousel |
| react-fast-marquee | 1.6.5 | Scrolling logo marquee on mobile |

### Typography & Icons

| Technology | Version | Role |
|-----------|---------|------|
| DM Sans | local TTF | Display/heading font (weights 400–700) |
| Inter | Google Fonts | Body/text font |
| lucide-react | 0.545.0 | Icon library (SVG icons as React components) |

### Content & Theme

| Technology | Version | Role |
|-----------|---------|------|
| next-themes | 0.4.6 | Light/dark theme management |
| @next/mdx | 15.5.5 | MDX support in Next.js |
| @mdx-js/loader | 3.1.1 | Webpack MDX loader |
| @mdx-js/react | 3.1.1 | MDX React component renderer |
| @styleglide/kit-view-provider | 0.0.8 | Brand font preview system |

### Development Tools

| Technology | Version | Role |
|-----------|---------|------|
| ESLint | 9.x | Linting (flat config) |
| Prettier | latest | Code formatting |
| eslint-plugin-import | — | Import ordering rules |
| eslint-plugin-jsx-a11y | — | Accessibility linting |
| @typescript-eslint | — | TypeScript-aware ESLint rules |

---

## 4. UI Library & Component Library

### shadcn/ui

The project uses **shadcn/ui** with the **New York** style variant. shadcn/ui is not a traditional dependency — it's a code-generation CLI that copies component source files directly into `src/components/ui/`. Each component is owned by the project and can be freely modified.

**Configuration** (`components.json`):

```json
{
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "src/app/styles/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

### UI Primitives (`src/components/ui/`)

All primitives wrap **Radix UI** headless components with Tailwind CSS styling:

#### `accordion.tsx`
Wraps `@radix-ui/react-accordion`. Exports: `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`. Used in the FAQ section. Trigger animates ChevronDown icon on open/close.

#### `button.tsx`
Uses **class-variance-authority (CVA)** for type-safe variants.
- **Variants:** `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
- **Sizes:** `default`, `sm`, `lg`, `icon`, `icon-sm`, `icon-lg`
- Supports `asChild` via `@radix-ui/react-slot` (renders as any element)

#### `card.tsx`
Compound component: `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`. Styled with `border`, `shadow-sm`, `rounded-xl`.

#### `carousel.tsx`
Wraps **embla-carousel-react**. Exports: `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext`, `useCarousel`. Supports horizontal/vertical orientations. Internal `useCarousel` context hook provides scroll state to navigation buttons.

#### `checkbox.tsx`
Wraps `@radix-ui/react-checkbox`. Renders `Check` icon from lucide-react when checked.

#### `form.tsx`
Integrates `react-hook-form` with context-based field management. Exports: `Form`, `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormDescription`, `FormMessage`, `useFormField`. Error states styled with destructive color.

#### `input.tsx`
Styled HTML input. Supports file upload, focus ring, disabled state, invalid state styling.

#### `label.tsx`
Wraps `@radix-ui/react-label`. Disables text selection when parent is disabled.

#### `navigation-menu.tsx`
Wraps `@radix-ui/react-navigation-menu`. Exports full set of sub-components. Used in desktop Navbar for dropdown menus.

#### `select.tsx`
Wraps `@radix-ui/react-select`. Full component set including scroll buttons. Used in the contact form for "Number of employees" field.

#### `textarea.tsx`
Styled HTML textarea. Uses `field-sizing-content` for dynamic height expansion. Minimum height `min-h-16`.

---

## 5. State Management

The project has **no global state management library**. All state is local to individual components via React's `useState` hook.

### State Locations

#### `src/components/blocks/navbar.tsx` (Client Component)
```typescript
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [openDropdown, setOpenDropdown] = useState<string | null>(null);
```
Also uses `usePathname()` from `next/navigation` for active route highlighting.

#### `src/components/blocks/contact-form.tsx` (Client Component)
Uses `react-hook-form` for form state management:
```typescript
const form = useForm<FormValues>({
  resolver: zodResolver(formSchema),
  defaultValues: { name: "", email: "", company: "", employees: "", message: "", agree: false }
});
```
Uses `useAction()` from `next-safe-action` which provides:
- `execute()` — triggers the server action
- `isExecuting` — loading state boolean
- `hasSucceeded` — success state boolean

#### `src/components/theme-toggle.tsx` (Client Component)
```typescript
const { setTheme, theme } = useTheme(); // from next-themes
```

#### `src/components/ui/carousel.tsx`
Internal `CarouselContext` for sharing carousel API between `Carousel` and its navigation buttons. Not exposed as application state.

#### `src/components/ui/form.tsx`
Internal `FormFieldContext` and `FormItemContext` for passing field names and IDs through the form component tree. Not exposed as application state.

### Summary

No Zustand, Redux, Jotai, Recoil, or React Context (beyond what's bundled inside next-themes, react-hook-form, and shadcn/ui internals). If global state is needed in the future, Zustand would be the natural fit given the project's lightweight nature.

---

## 6. Routing & Navigation Structure

### App Router Layout

Next.js 15 App Router. All routes are under `src/app/`.

```
src/app/
├── layout.tsx          ← Root layout (wraps ALL pages)
├── page.tsx            ← Route: /
├── not-found.tsx       ← Route: /* (404 catch-all)
├── about/
│   └── page.tsx        ← Route: /about
├── contact/
│   └── page.tsx        ← Route: /contact
├── faq/
│   └── page.tsx        ← Route: /faq
└── privacy/
    ├── page.tsx        ← Route: /privacy
    └── privacy.mdx     ← Content imported by page.tsx
```

### Route Reference

| URL | File | Type | Purpose |
|-----|------|------|---------|
| `/` | `app/page.tsx` | Server Component | Homepage |
| `/about` | `app/about/page.tsx` | Server Component | Company info |
| `/contact` | `app/contact/page.tsx` | Server Component | Contact form |
| `/faq` | `app/faq/page.tsx` | Server Component | FAQ accordion |
| `/privacy` | `app/privacy/page.tsx` | Client Component | Privacy policy (MDX) |
| `/*` | `app/not-found.tsx` | Server Component | 404 error page |

### Root Layout (`src/app/layout.tsx`)

Wraps every page. Responsibilities:
1. Load and apply fonts (DM Sans local + Inter Google)
2. Apply CSS variable font classes to `<body>`
3. Configure `<head>` metadata (title, description, OG tags, favicons)
4. Mount `ThemeProvider` (next-themes)
5. Mount `StyleGlideProvider`
6. Render persistent `<Navbar>` and `<Footer>`
7. Render `{children}` between Navbar and Footer

### Navigation Items (Navbar)

```
Features (dropdown)
  ├── Hero → /#hero
  └── Resource Allocation → /#resource-allocation
About Us → /about
FAQ → /faq
Contact → /contact
```

### Active Route Highlighting

The Navbar reads the current path via `usePathname()` and applies an active style class to matching nav links.

### MDX Support

The privacy page (`app/privacy/page.tsx`) is a Client Component (`"use client"`) that imports and renders `privacy.mdx` directly. The MDX file contains the full privacy policy in Markdown. Tailwind's `@tailwindcss/typography` plugin styles the rendered content via the `prose` class.

---

## 7. Data Models & Entity Relationships

The project has no database, so "data models" are TypeScript types/interfaces and static data arrays embedded in components.

### TypeScript Interfaces & Types

#### `ActionResponse<T>` — `src/lib/form-schema.ts`
Generic response envelope for server actions:
```typescript
interface ActionResponse<T = unknown> {
  success: boolean;
  message: string;
  errors?: { [K in keyof T]?: string[] };
  inputs?: T;
}
```

#### `BackgroundProps` — `src/components/background.tsx`
```typescript
interface BackgroundProps {
  children: React.ReactNode;
  variant?: "top" | "bottom";
  className?: string;
}
```

#### `DashedLineProps` — `src/components/dashed-line.tsx`
```typescript
interface DashedLineProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}
```

#### `Company` — `src/components/blocks/logos.tsx`
```typescript
type Company = {
  name: string;
  logo: string;    // path to SVG in /public/logos/
  width: number;
  height: number;
  href: string;
}
```

### Zod Schema — `src/lib/form-schema.ts`

```typescript
const formSchema = z.object({
  name:      z.string().min(1),           // required
  email:     z.string().email(),          // required, valid email
  company:   z.string().optional(),       // optional
  employees: z.string().optional(),       // optional; values: "1" | "2-10" | "11-50" | "51-500"
  message:   z.string().min(1),           // required
  agree:     z.literal(true),             // must check terms checkbox
});
```

### Inline Static Data Shapes

These are not formal types but describe the shape of data arrays embedded in components:

**Testimonial** (8 items in `testimonials.tsx`):
```typescript
{ quote: string; author: string; role: string; company: string; image: string }
```

**FAQ Category** (3 categories, 2–3 items each in `faq.tsx`):
```typescript
{ category: string; items: { question: string; answer: string }[] }
```

**Navigation Item** (4 items in `navbar.tsx`):
```typescript
{
  label: string;
  href: string;
  dropdownItems?: { title: string; href: string; description: string }[]
}
```

**Feature Card** (3 items in `features.tsx`):
```typescript
{ title: string; description: string; image: string; href: string }
```

**Stat** (4 items in `about-hero.tsx`):
```typescript
{ value: string; label: string }
```

**Investor** (5 items in `investors.tsx`):
```typescript
{ name: string; company: string; image: string }
```

**Resource Allocation Item** (top: 2 items, bottom: 3 items):
```typescript
// Top items
{ title: string; description: string; image?: string; logos?: string[] }
// Bottom items
{ title: string; description: string; image: string }
```

---

## 8. Design Patterns & Architectural Decisions

### React Server Components (RSC)

All pages and most components are **Server Components** by default (Next.js App Router). Client-side interactivity is isolated with `"use client"` directive at the top of the file.

**Client Components** (require `"use client"`):
- `navbar.tsx` — mobile menu state, usePathname hook
- `contact-form.tsx` — form state, server action integration
- `theme-toggle.tsx` — useTheme hook
- `privacy/page.tsx` — MDX rendering
- `carousel.tsx` — embla carousel hooks
- `logos.tsx` — react-fast-marquee (client-only)

### Server Actions

Contact form submission uses **next-safe-action** for type-safe server actions:

```
ContactForm (client)
  → useAction(serverAction)
  → serverAction ["use server"]
      → actionClient.inputSchema(formSchema).action(({ parsedInput }) => {
          // TODO: persist to database
          return { success: true, message: "Form submitted successfully" }
        })
```

This avoids creating an `/api/` route and provides full type inference from Zod schema to action result.

### Compound Component Pattern

All shadcn/ui components use the compound component pattern:
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```
Sub-components are exported from the same file and compose via DOM nesting.

### Class Variance Authority (CVA)

The `Button` component uses CVA for type-safe variant definitions:
```typescript
const buttonVariants = cva("base-classes", {
  variants: {
    variant: { default: "...", destructive: "...", outline: "..." },
    size: { default: "...", sm: "...", lg: "..." }
  },
  defaultVariants: { variant: "default", size: "default" }
});
```
This produces a fully typed function: `buttonVariants({ variant: "outline", size: "sm" })`.

### Provider Pattern

Multiple providers are stacked in the root layout:
```tsx
<ThemeProvider>        ← next-themes (dark/light)
  <StyleGlideProvider> ← brand font system
    <Navbar />
    {children}
    <Footer />
  </StyleGlideProvider>
</ThemeProvider>
```

### Polymorphic Component (asChild)

The `Button` component supports `asChild` via `@radix-ui/react-slot`, allowing it to render as any element (e.g., a Next.js `<Link>`):
```tsx
<Button asChild>
  <Link href="/contact">Get Started</Link>
</Button>
```

### Context Hook Pattern

Both `carousel.tsx` and `form.tsx` use the context-then-hook pattern:
1. Create a React context
2. Wrap the compound root component in a context provider
3. Export a custom hook (`useCarousel`, `useFormField`) that reads the context with an invariant check

### Responsive Component Strategy

Rather than separate components for mobile/desktop, a single component uses Tailwind responsive prefixes with conditional rendering:
- `max-lg:hidden` — hidden on mobile
- `lg:flex` — flex only on desktop
- `lg:grid-cols-5` — 5-column grid only on large screens
- Some elements render twice with different classes and `hidden`/`block` toggling

---

## 9. Styling Framework

### Tailwind CSS v4

This project uses **Tailwind CSS v4** (not v3). Key differences from v3:
- No `tailwind.config.js` file — all configuration lives in `globals.css`
- `@import "tailwindcss"` instead of `@tailwind base/components/utilities`
- Plugin imported as `@tailwindcss/postcss` in PostCSS config
- Theme tokens defined with CSS variables

### Design Token System (`src/styles/globals.css`)

All design tokens are CSS custom properties on `:root` using the **OKLch color space** (modern, perceptually uniform):

```css
:root {
  --background:    oklch(1 0 0);              /* white */
  --foreground:    oklch(0.145 0 0);          /* near-black */
  --primary:       oklch(0.92 0.04 86.47);   /* warm yellow */
  --destructive:   oklch(0.577 0.245 27.325); /* red/orange */
  --radius:        8px;                       /* base border radius */
}
```

Dark mode overrides are scoped to `.dark`:
```css
.dark {
  --background:  oklch(0.145 0 0);   /* near-black */
  --foreground:  oklch(0.985 0 0);   /* near-white */
  /* ... all tokens redefined */
}
```

### Color Tokens

| Token | Purpose |
|-------|---------|
| `--background` | Page background |
| `--foreground` | Default text |
| `--card` | Card surface |
| `--primary` / `--primary-foreground` | Brand accent (yellow) |
| `--secondary` / `--secondary-foreground` | Secondary elements |
| `--muted` / `--muted-foreground` | Subdued backgrounds/text |
| `--accent` / `--accent-foreground` | Hover/focus accents |
| `--destructive` | Error/danger states |
| `--border` | Border color |
| `--input` | Input background |
| `--ring` | Focus ring |
| `--chart-1` … `--chart-5` | Data visualization colors |
| `--sidebar-*` | Sidebar-specific tokens (reserved) |

### Radius Tokens

```css
--radius: 8px;  /* base */
/* Derived: --radius-xs, --radius-sm, --radius-md, --radius-lg,
            --radius-xl, --radius-2xl, --radius-3xl, --radius-4xl */
```

### Shadow Tokens

Eight shadow levels: `--shadow-2xs` through `--shadow-2xl`. All use `rgba()` with opacity scaling.

### Breakpoints

| Name | Width |
|------|-------|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1400px (custom; Tailwind default is 1536px) |

### Typography System

**Display font (headings):** DM Sans  
**Text font (body):** Inter

```css
/* Font variables set in layout.tsx and applied to body */
--font-dm-sans: "DM Sans", sans-serif;
--font-inter:   "Inter", sans-serif;

/* Applied in globals.css */
h1, h2, .font-display { font-family: var(--font-dm-sans); font-weight: 600; }
body, p, .font-text    { font-family: var(--font-inter);   font-weight: 400; }
```

**Font feature settings** on display text:
- `ss02` — alternate digit style
- `ss03` — alternate letter forms
- `ss04` — additional alternates (specifically the stylized lowercase 'a' in DM Sans)

### Container

```css
.container {
  max-width: 1220px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  margin-left: auto;
  margin-right: auto;
}
```

### Dark Mode Strategy

1. `next-themes` sets `class="dark"` on `<html>` when dark mode is active
2. All color tokens are redefined under `.dark` in `globals.css`
3. Components use semantic token names (`bg-background`, `text-foreground`) not literal colors, so they update automatically on theme switch
4. Images with `dark:invert` class are inverted for dark mode (logos, brand mark)
5. No JavaScript required for color switching — pure CSS variables

### Animation

**CSS Keyframes** (defined in `globals.css`):
- `accordion-down` / `accordion-up` — 0.2s ease-out height animation for accordion open/close

**Motion library** (`motion` package — Framer Motion fork):
- ContactForm success state: fade-in + slide-up + scale animation
- Usage: `import { motion } from "motion/react"`

**CSS Transitions** (Tailwind utilities):
- `transition-opacity` — hover opacity on logos, links
- `transition-all` / `duration-300` — general transitions
- `rotate-45` on hamburger icon lines

---

## 10. Build Tools & Package Management

### Package Manager

**npm** (package-lock.json present). No Yarn or pnpm.

### Scripts (`package.json`)

```json
{
  "scripts": {
    "dev":    "next dev --turbopack",
    "build":  "next build",
    "start":  "next start",
    "lint":   "next lint --fix",
    "format": "prettier --write ."
  }
}
```

- `dev` — Development server with **Turbopack** (Next.js 15's fast bundler)
- `build` — Production build
- `start` — Starts the compiled production server
- `lint` — ESLint with auto-fix enabled
- `format` — Prettier formats all files

### PostCSS (`postcss.config.mjs`)

```javascript
export default {
  plugins: { "@tailwindcss/postcss": {} }
}
```

Single plugin: `@tailwindcss/postcss` handles Tailwind CSS v4 transformation.

### ESLint (`eslint.config.mjs`)

Flat config format (ESLint 9+). Rule sets:
- `eslint:recommended`
- `@typescript-eslint/recommended` — TypeScript-aware rules
- `next/core-web-vitals`, `next/typescript` — Next.js rules
- `plugin:import/recommended`, `plugin:import/typescript` — Import ordering
- `plugin:jsx-a11y/recommended` — Accessibility

**Import ordering rule** enforces this sequence:
1. `react` / `react-dom`
2. `next/*`
3. Internal `@/*` aliases
4. Relative `./` and `../` imports

**Notable disabled rules:**
- `@next/next/no-html-link-for-pages` — disabled (using App Router)
- `react/jsx-key` — disabled
- `react/display-name` — disabled

**Console rule:** `no-console: warn` — console.log triggers a warning (the server action currently uses `console.log`).

### Prettier (`.prettierrc`)

```json
{
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": false,
  "printWidth": 80,
  "plugins": ["prettier-plugin-tailwindcss"],
  "overrides": [
    { "files": "globals.css", "options": { "printWidth": 180 } }
  ]
}
```

- Double quotes for strings
- 2-space indentation
- Trailing commas everywhere
- Tailwind class auto-sorting via `prettier-plugin-tailwindcss`

### TypeScript (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "paths": { "@/*": ["./src/*"] },
    "plugins": [{ "name": "next" }]
  }
}
```

Key decisions:
- `"strict": true` — full strict mode (null checks, implicit any, etc.)
- `"moduleResolution": "bundler"` — modern resolution without `.js` extension requirements
- `@/*` maps to `./src/*` — single path alias for all internal imports

---

## 11. Environment Configuration

### Path Aliases

All internal imports use the `@/` prefix mapping to `src/`:

```typescript
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/blocks/navbar";
import { Button } from "@/components/ui/button";
import { formSchema } from "@/lib/form-schema";
```

### Next.js Config (`next.config.ts`)

```typescript
import createMDX from "@next/mdx";

const withMDX = createMDX({});

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: { unoptimized: true },
};

export default withMDX(nextConfig);
```

- **`pageExtensions`** — allows `.mdx` files to be treated as pages/imports
- **`images.unoptimized: true`** — disables Next.js Image Optimization API (suitable for static export or CDN-handled images)
- **`withMDX`** — wraps config to enable MDX compilation

### Environment Variables

No `.env` file found. The project currently has no environment-specific configuration. When database/API keys are added, they should follow Next.js conventions:
- `NEXT_PUBLIC_*` — exposed to the browser
- All others — server-only

### shadcn/ui Config (`components.json`)

Controls the shadcn CLI behavior when adding new components:
- New components are added to `src/components/ui/`
- Uses `@/lib/utils` for the `cn()` import
- Icons come from `lucide-react`
- CSS variables mode enabled (no hardcoded colors in components)

### Metadata & SEO (configured in `layout.tsx`)

```typescript
export const metadata: Metadata = {
  title: "Mainline",
  description: "...",
  openGraph: { title, description, images: ["/og-image.jpg"] },
  twitter: { card: "summary_large_image", ... },
  icons: {
    icon: ["/favicon/favicon.svg", "/favicon/favicon-96x96.png"],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};
```

### External Script

The root layout includes a CDN script tag:
```html
<script src="https://tweakcn.com/live-preview.min.js" />
```
This is the tweakcn.com live preview integration — used during design/development and may be removed in production.

---

## 12. Key Features & Modules

### 12.1 Navbar (`src/components/blocks/navbar.tsx`)

**Type:** Client Component  
**Behavior:** Floating pill-shaped navbar (backdrop-blur, rounded, centered). Positioned `top-5` (mobile) / `top-12` (desktop). Max width 700px.

**Desktop:** Radix UI `NavigationMenu` with hover-triggered dropdown for "Features".  
**Mobile:** Hamburger icon toggles a vertical menu. Dropdowns expand inline with ChevronDown rotation.

**Features:**
- Logo image with `dark:invert` for dark mode compatibility
- Active route detection via `usePathname()`
- `ThemeToggle` button in nav
- "Get Started" CTA button (links to `/contact`)

---

### 12.2 Hero (`src/components/blocks/hero.tsx`)

**Type:** Server Component  
**Content:** Large two-column layout.
- Left: H1 headline, subtitle, paragraph, 4 feature bullets with Lucide icons (CircleDot, Blend, Diamond, ChartNoAxesColumn)
- Right: Hero image (`/hero.webp`, full-width, rounded, shadow)

DashedLine separators between columns on desktop, horizontal on mobile.

---

### 12.3 Logos (`src/components/blocks/logos.tsx`)

**Type:** Client Component (for Marquee)  
**Content:** 9 partner/client logos.
- **Desktop:** 2-row static grid (4 top, 5 bottom). Logos have `opacity-50 hover:opacity-100` transition and `dark:invert`.
- **Mobile:** `react-fast-marquee` scrolling carousel.

---

### 12.4 Features (`src/components/blocks/features.tsx`)

**Type:** Server Component  
**Content:** Section label "MEASURE TWICE. CUT ONCE." + 3 feature cards.  
Each card: image (SVG), title, description, ChevronRight CTA.  
Cards separated by DashedLine dividers. Responsive: stacks on mobile, row on desktop.

---

### 12.5 Resource Allocation (`src/components/blocks/resource-allocation.tsx`)

**Type:** Server Component  
**Content:** "Mainline your resource allocation and execution" heading + 5 feature items split into top (2) and bottom (3) rows.
- Top: Reusable issue templates (image), Simplify your stack (grid of 8 integration logos)
- Bottom: Graveyard it, Task discussions, Notifications (each with image and fade mask)

Complex DashedLine grid layout. Helper `Item` component for consistent item rendering.

---

### 12.6 Testimonials (`src/components/blocks/testimonials.tsx`)

**Type:** Client Component (Carousel)  
**Content:** 8 testimonial cards in an Embla carousel. Each card: author photo, quote, name, role, company.  
Navigation: Previous/Next arrow buttons. Responsive card width:
- `basis-4/5` (mobile) → `sm:basis-1/2` → `lg:basis-1/3` → `xl:basis-1/4` → `2xl:basis-1/5`

Props: `className`, `dashedLineClassName` (allows FAQ page to hide the bottom dashed line).

---

### 12.7 FAQ (`src/components/blocks/faq.tsx`)

**Type:** Server Component  
**Content:** Two-column layout. Left: heading + description + link to /contact. Right: Radix UI `Accordion` (type="single", collapsible).  
3 categories with 2–3 questions each. Accordion animates with `accordion-down` / `accordion-up` keyframes.  
Props: `headerTag` ("h1" | "h2") — FAQ standalone page uses h1, homepage reuse uses h2.

---

### 12.8 Contact (`src/components/blocks/contact.tsx` + `contact-form.tsx`)

**Type:** Server Component wrapping a Client Component form  
**Content:**
- Heading + intro
- 3 info boxes: Corporate office (address), Email us (careers/press emails), Follow us (social icons)
- DashedLine separator
- `ContactForm` component

**ContactForm** (Client Component):
- Fields: name, email, company, employees (select), message (textarea), agree (checkbox)
- Validation: Zod schema via `@hookform/resolvers/zod`
- Submission: `useAction(serverAction)` — calls Next.js server action
- Loading state: Button shows "Submitting..." with `isExecuting` flag
- Success state: Animated success panel with checkmark (motion library fade + scale)

---

### 12.9 About Hero (`src/components/blocks/about-hero.tsx`)

**Type:** Server Component  
**Content:** "Democratising quality software" heading + 4 stat cards:
- $150M Raised, 20K Companies, 1.3B Monthly transactions, 1.5K Connections per minute

DashedLine separators between stats. Responsive: horizontal on desktop, vertical on mobile.

---

### 12.10 About (`src/components/blocks/about.tsx`)

**Type:** Server Component  
**Content:** 2 sections alternating between image and text:
- Section 1: Mission/customer focus text + 2 images (about/1.webp, about/2.webp)
- Section 2: Team section with CTA button + 2 images (about/3.webp, about/4.webp)

Helper components: `ImageSection` (image grid), `TextSection` (heading, paragraphs, optional CTA).

---

### 12.11 Investors (`src/components/blocks/investors.tsx`)

**Type:** Server Component  
**Content:** "Our investors" heading + 5 investor profile cards. Each card: photo, name, company.  
Grid: 2 columns (mobile) → 5 columns (desktop).

---

### 12.12 Footer (`src/components/blocks/footer.tsx`)

**Type:** Server Component  
**Content:**
- CTA section: "Start your free trial today" + description
- Navigation grid: Product, About Us, FAQ, Contact links
- Social links: Twitter, LinkedIn (with ArrowUpRight icon)
- Legal: Privacy Policy
- Large decorative SVG gradient brand mark at bottom

---

### 12.13 Not Found (`src/app/not-found.tsx`)

**Type:** Server Component  
**Content:** Background wrapper + centered error message with gradient text "404 – Page Not Found" + two buttons: "Back to Home" and "Contact Support".

---

## 13. Reusable Components & Utilities

### `cn()` — `src/lib/utils.ts`

The single most-used utility in the project. Merges Tailwind CSS class names intelligently:

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- `clsx` handles conditional/array class names
- `twMerge` resolves Tailwind conflicts (e.g., `p-4 p-6` → `p-6`)
- Used in virtually every component

### `formSchema` — `src/lib/form-schema.ts`

Shared Zod schema for contact form. Imported by both `contact-form.tsx` (frontend validation) and `server-action.ts` (server-side validation via next-safe-action).

### `Background` — `src/components/background.tsx`

Decorative section wrapper with gradient background. Props:
- `variant?: "top" | "bottom"` — controls which corners are rounded
- `className?` — additional classes
- `children` — page content to wrap

Usage pattern:
```tsx
<Background variant="top">
  <Hero />
  <Logos />
</Background>
```

### `DashedLine` — `src/components/dashed-line.tsx`

CSS-only dashed divider with fade-out ends (using `mask-image` gradient). Props:
- `orientation?: "horizontal" | "vertical"` (default: "horizontal")
- `className?`

Vertical orientation is hidden on mobile (`hidden lg:block`). Used extensively between sections as visual separators.

### `ThemeToggle` — `src/components/theme-toggle.tsx`

Sun/Moon icon button that calls `setTheme()` from `next-themes`. Icons transition with scale and rotation CSS transforms. Used in Navbar.

### `ThemeProvider` — `src/components/theme-provider.tsx`

Thin wrapper around `next-themes` `ThemeProvider`. Accepts and forwards all ThemeProvider props. Mounted in root layout.

### `StyleGlideProvider` — `src/components/styleglide-provider.tsx`

Thin wrapper around `@styleglide/kit-view-provider`. Enables brand font preview system in Styleglide design tool. Mounted in root layout.

### `actionClient` — `src/actions/safe-action.ts`

Base client for `next-safe-action`. All server actions are created using this client to ensure type-safe input validation.

---

## 14. Application Workflow & User Flow

### Homepage Flow (`/`)

```
User arrives at /
  ↓
Root Layout (layout.tsx)
  → Mounts ThemeProvider + StyleGlideProvider
  → Renders Navbar (floating, sticky-like)
  ↓
Home page (page.tsx) renders sections in order:
  1. Background (top) wrapping:
     a. Hero               — headline, feature bullets, hero image
     b. Logos              — partner logos / scrolling marquee
     c. Features           — 3 feature cards
     d. ResourceAllocation — 5 feature sub-sections
  2. Testimonials          — Embla carousel, 8 customer quotes
  3. Background (bottom) wrapping:
     a. FAQ                — accordion, 3 categories
  ↓
Footer (persistent in layout)
```

### About Page Flow (`/about`)

```
User navigates to /about
  ↓
About page renders:
  1. Background (top) wrapping:
     a. AboutHero  — headline + 4 stat cards
     b. About      — 2 alternating image/text sections
  2. DashedLine separator
  3. Investors     — 5 investor profile cards
```

### Contact Page Flow (`/contact`)

```
User navigates to /contact
  ↓
Contact page renders:
  1. Background (top) wrapping:
     a. Contact section:
        - Heading + intro
        - 3 info boxes (office, email, social)
        - DashedLine separator
        - ContactForm (Client Component)

User fills out form:
  → React Hook Form validates fields on change/blur (Zod schema)
  → User submits
  → useAction(serverAction) executes
  → isExecuting = true → Button shows "Submitting..."
  → Server action receives validated parsedInput
  → Returns { success: true, message: "..." }
  → hasSucceeded = true → Success panel animates in (motion library)
```

### FAQ Page Flow (`/faq`)

```
User navigates to /faq
  ↓
FAQ page renders:
  1. Background (top) wrapping:
     a. FAQ (headerTag="h1") — full FAQ accordion
  2. DashedLine separator
  3. Testimonials (dashedLineClassName="hidden")
```

### Privacy Page Flow (`/privacy`)

```
User navigates to /privacy
  ↓
Privacy page (Client Component) renders:
  → Imports privacy.mdx directly
  → Wraps in <div className="prose dark:prose-invert">
  → MDX content rendered as HTML with typography styles
```

### 404 Flow (`/*`)

```
User navigates to unknown route
  ↓
Next.js routes to not-found.tsx
  → Background wrapper + error message + action buttons
  → "Back to Home" links to /
  → "Contact Support" links to /contact
```

---

## 15. Coding Conventions & Project Standards

### File Naming

- **Components:** PascalCase for the component, kebab-case for the file: `ContactForm` → `contact-form.tsx`
- **Utilities:** camelCase: `utils.ts`, `form-schema.ts`
- **Pages:** Next.js convention: `page.tsx`, `layout.tsx`, `not-found.tsx`
- **MDX content:** kebab-case: `privacy.mdx`

### Component Structure

```typescript
// 1. Imports (ordered by ESLint import rule)
import type { ... } from "react";    // react types first
import { ... } from "react";         // react core
import { ... } from "next/...";      // next.js
import { ... } from "@/lib/utils";   // @/ internal
import { ... } from "./relative";    // relative imports last

// 2. TypeScript types/interfaces
interface Props { ... }

// 3. Component function (named export, not anonymous default)
export function MyComponent({ prop }: Props) {
  return <div />;
}

// 4. Sub-components or helper components (in same file)
function HelperComponent() { ... }
```

### TypeScript Conventions

- Strict mode enabled — no implicit `any`, all nulls handled
- Prefer `interface` for props (shadcn/ui convention)
- Use `type` for union types, utility types, and type aliases
- `React.ReactNode` for children prop type
- Import types separately: `import type { Foo } from "foo"`

### Import Alias

Always use `@/` for internal imports — never relative paths for cross-directory imports:
```typescript
// Correct
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// Avoid
import { cn } from "../../lib/utils";
```

### Tailwind Class Ordering

Enforced by `prettier-plugin-tailwindcss` (runs automatically on `npm run format`). Classes are sorted in the canonical Tailwind order (layout → spacing → typography → colors → etc.).

### Styling Conventions

- Use `cn()` for all className composition — never string concatenation
- Responsive classes use Tailwind prefixes (`sm:`, `md:`, `lg:`, `xl:`, `2xl:`)
- Mobile-first: base classes apply to mobile, responsive prefixes override for larger screens
- Dark mode: use `dark:` prefix with semantic token classes (`bg-background`, `text-muted-foreground`)
- Avoid hardcoded color values — always use CSS variable tokens

### No Comments Policy

Source files have minimal to no comments. Code is self-documenting via:
- Descriptive component and variable names
- Clear prop interface names
- Logical section ordering within files

### Server vs Client Components

- Default to Server Components (no `"use client"` directive)
- Add `"use client"` only when component uses: hooks (`useState`, `useEffect`), browser APIs, event handlers requiring interactivity, or client-only third-party libraries
- Place `"use client"` as the very first line of the file (before all imports)

### Image Usage

Always use `next/image` `<Image>` component — never `<img>` tags. Key props:
- `fill` — for images in relative-positioned containers
- `priority` — for above-the-fold images (hero image)
- `sizes` — always provide for responsive images
- `alt` — always provide descriptive alt text

### Data Co-location

Static data (navigation items, testimonials, FAQ items, logos, etc.) is co-located with the component that uses it — defined as `const` arrays at the top of the component file. There is no centralized data store or CMS.

### Adding New Components with shadcn/ui CLI

```bash
npx shadcn@latest add <component-name>
```

This copies the component source into `src/components/ui/`. Manually edit the file after adding to match project conventions.

---

*This document covers the complete architecture of the customer-mainline-project as of version 1.2.0 (2026-06-19). For questions about the template origin, see [shadcnblocks.com](https://shadcnblocks.com).*
