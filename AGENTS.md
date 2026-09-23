<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Fenon platform — agent guide

Marketing site for Fenon (inference infrastructure for robotics), built from the design exports in `fenon_full_web_design/`.

Priority order when guidance conflicts: **Next.js docs (`node_modules/next/dist/docs/`) → this file → user preferences**. If you find a conflict, flag it to the user and record the outcome in `docs/decisions.md`.

## Docs you must keep in sync

| File | Holds |
| --- | --- |
| `docs/decisions.md` | Every decision, why, alternatives rejected. Append; never silently rewrite. |
| `docs/design-tokens.md` | Palette, semantic tokens, type scale, radius, spacing, breakpoints. |
| `docs/components.md` | Component inventory and which design PNG each maps to. |
| `docs/figma-extract.md` | Raw Figma MCP responses (free plan — never re-fetch what is recorded here). |

**Rule:** any new or changed decision, convention, dependency, token or folder is written to the relevant doc in the same change. At the end of each step, check the docs against the code.

## Stack

- Next.js 16 App Router, React 19, TypeScript strict, bun.
- Tailwind CSS v4 (CSS-first config, no `tailwind.config`).
- shadcn/ui on **Base UI** primitives (not Radix), generated into `components/ui/`.
- Zustand (shared client state), TanStack Form + Zod (forms and validation), Zod (content typing).
- TanStack Query is **not installed yet**. Add it only when data must be fetched on the client.
- Fonts: Inter (sans/display) + JetBrains Mono via `next/font/google`.

## Folder structure

`app/` is for routing only. Shared project code lives in top-level folders.

```
app/
  layout.tsx, page.tsx, providers.tsx, globals.css
  contact/page.tsx
  engineering/[slug]/page.tsx
  @modal/default.tsx, @modal/[...catchAll], @modal/(.)contact, @modal/(.)engineering/[slug]
  (dev)/tokens/page.tsx   dev-only token board (404 in production)
components/
  ui/             shadcn (generated). Edit only to restyle via tokens.
  common/         small reusable building blocks (Container, Eyebrow, SectionHeading, Card, CodeWindow, CtaLink, TextLink, ThemeToggle, ThemeImage, DocumentCard, RouteModal, CloseButton, CopyButton, Lines, icons)
  layout/         AnnouncementBar, SiteHeader, MobileMenu, SiteFooter
  sections/       one file per homepage section
  illustrations/  inline SVG React components
  forms/          ContactForm
  panels/         ContactPanel, ArticlePanel (shared by full pages and intercepted modals)
  providers/      StoreProvider
content/          typed copy and data (site, home, contact, articles, code-samples)
lib/              utils.ts (cn), theme.ts, brand-colors.ts, stores/ (zustand), schemas/ (zod)
styles/           palette.css → tokens.css → theme.css (the only theme source, imported by app/globals.css)
public/images/    local image assets only
scripts/          repo tooling (check-tokens.ts)
docs/             agent docs (see table above)
```

## Components

- Server Components by default. Add `"use client"` only to the interactive leaf, never to a whole section. Pass server-rendered children into client components where possible.
- One component per file, PascalCase filename, named export (`export function Hero()`). Route files (`page.tsx`, `layout.tsx`) use default exports, as Next requires.
- Sections read copy from `content/` and never hardcode strings. Content objects are validated by Zod schemas in `lib/schemas/`.
- Compose primitives rather than duplicating markup. If a pattern appears twice, extract it into `components/common/`.
- Props are typed with explicit interfaces. Use `cn()` from `lib/utils.ts` to merge classes.
- Add comments only where the intent is not obvious from the code.

## State and data

- **Server data:** fetch in Server Components (async functions or `fetch`). Do not add TanStack Query for server-renderable data.
- **Shared client state:** Zustand, with the store created per provider (`createStore` + React context in `components/providers/StoreProvider.tsx`). Never use a module-level singleton store.
- **Local UI state** (menu open, active tab, copied flag): `useState`.
- **Theme:** an inline pre-hydration script sets `.dark` on `<html>` from localStorage or the system setting. The Zustand theme store mirrors and updates that class. Do not rely on `persist` for the theme, because it flashes on load.
- **Forms:** TanStack Form + a Zod schema from `lib/schemas/`. Types are inferred with `z.infer`. Any future server submission is a Server Action that re-validates with the same schema.

## Theming (strict)

Tokens come in three layers. Only layer 3 utilities appear in components.

1. `styles/palette.css`: brand primitives (`--fenon-*`) in OKLCH. **The only file allowed to contain raw colour values.**
2. `styles/tokens.css`: semantic tokens in `:root` and `.dark`, in shadcn surface/`-foreground` pairs. They reference `var(--fenon-*)` only.
3. `styles/theme.css`: `@theme inline` maps each semantic token to a `--color-*` utility. It also holds the type scale, radius, fonts and motion.

Rules:
- Use semantic utilities only: `bg-card`, `text-muted-foreground`, `border-border`, `bg-primary`, `text-display-hero`.
- Never write hex, rgb or oklch values, arbitrary colour classes (`bg-[#…]`) or Tailwind default palette classes (`bg-orange-500`) in components. `bun run lint:tokens` fails on them.
- Type sizes are tokens set at the exact Figma values. Never round to a generic scale (don't swap a 15px design size for `text-sm`).
- Arbitrary values are allowed only for one-off layout measurements (a specific width or offset).
- Need a new colour? Add a semantic token first (and a primitive only if the brand genuinely adds one), then document it in `docs/design-tokens.md`.
- Hand-built SVGs (icons, charts, logo) use `currentColor` or `var(--token)` fills, so one asset serves both themes.
- Exception: complex Figma illustration exports (e.g. the hero) are used unedited, one file per theme, and swapped with `dark:hidden` / `hidden dark:block` (decision #21). They live in `public/images/` and are outside `lint:tokens`.
- The theme's token files live in root `styles/`, not `app/styles/` (decision #15).

## Images, motion and accessibility

- Use `next/image` with explicit `width`/`height`, or `fill` inside a parent with a fixed aspect ratio, to protect against layout shift. Only the hero's largest visual gets `priority`.
- All images are local, so there are no `images.remotePatterns`. If a remote source is ever added, allow-list its exact host in `next.config.ts` and record the decision.
- Alt text describes what the image shows. Decorative SVGs get `aria-hidden="true"`.
- Animate only `transform` and `opacity`, never width, height, margin or top/left. Every animation respects `prefers-reduced-motion`.
- Keep one `h1` per page, with headings in order. Interactive widgets are keyboard operable and have visible focus rings (`ring` token).

## Design deviations (intentional)

- Section eyebrows drop the numeric prefix ("THE PLATFORM", not "01 / THE PLATFORM"). All other numbering in the design is kept.

## shadcn/ui

- Add components with `bunx --bun shadcn@latest add <name>`. If it prompts to overwrite `button.tsx`, answer **no**: it holds the Fenon `cta` variants.
- After adding, run `bun run lint`. `lint:tokens` flags palette colours (e.g. `bg-black/10`) and `import { cn } from "cn"`. Replace them with tokens and `@/lib/utils`.
- Known fixes in generated files are listed in decision #31. Re-apply them if you ever overwrite.

## Workflow

- Commands: `bun dev`, `bun run build`, `bun run lint` (includes `lint:tokens`).
- If newly added Tailwind classes don't apply in dev, restart `bun dev` (Turbopack can miss files replaced in place; decision #34).
- Design measurements: crop the PNGs at full resolution (4× for 1440) and compare glyph bands and DOM landmarks. Don't eyeball.
- Build order: theme foundation → setup → primitives → sections one by one → routes/modals.
- Verify each section live with the `agent-browser` skill at 1440px and 390px, in light and dark, against the matching crop of the design PNG.
