# Design tokens

Source of truth: `styles/palette.css` → `styles/tokens.css` → `styles/theme.css`, imported by `app/globals.css`. This file documents those files and must match them.
Values come from the Figma exports (hero, footer, logo system; see `docs/figma-extract.md`) and from pixel-sampling the design PNGs at full resolution (4× for 1440, ≈3.98× for 390).

## Layer 1: palette (`styles/palette.css`)
The only place raw colours live. `lib/brand-colors.ts` mirrors a subset for non-CSS contexts (viewport `themeColor`, OG images).

| Primitive | Hex | Source |
|---|---|---|
| `--fenon-orange` | #FF5402 | Figma (hero, footer, logo). Brand accent; the logo system says never recolour it. |
| `--fenon-orange-soft` | #FF8853 | Dark-mode code strings (PNG) |
| `--fenon-rust` | #A1370A | Light-mode code strings and keywords (PNG) |
| `--fenon-ink` | #090A09 | Figma hero; light text, headline, progress fill |
| `--fenon-black` | #000000 | Dark page background (PNG) |
| `--fenon-paper` | #FFFFFF | Light page background |
| `--fenon-stone-50` | #F5F5F1 | Light code windows, concept/lifecycle/article-art cards (PNG) |
| `--fenon-stone-100` | #EDEDE7 | Light nav pill (PNG) |
| `--fenon-stone-200` | #D9D9D0 | Light borders, grid cells, progress track (PNG, 4× sampled) |
| `--fenon-stone-400` | #979A8E | Figma hero line colour; chart "requests" line |
| `--fenon-stone-600` | #5E605A | Light muted text (PNG and Figma hero) |
| `--fenon-graphite-300` | #A4A19C | Dark muted text (PNG) |
| `--fenon-graphite-700` | #292B28 | Dark borders and grid cells (PNG) |
| `--fenon-graphite-800` | #1B1D1B | Dark nav pill (PNG) |
| `--fenon-graphite-900` | #101110 | Dark code windows and cards (PNG) |
| `--fenon-grey-300` | #D1D1D1 | Light footer wordmark (PNG) |
| `--fenon-grey-500` | #828282 | Dark footer wordmark (PNG) |

## Layer 2: semantic tokens (`styles/tokens.css`)
| Token | Used for | Light | Dark |
|---|---|---|---|
| `background` / `foreground` | Page and default text | paper / ink | black / paper |
| `card` / `card-foreground` | Outlined cards on the page | paper / ink | black / paper |
| `popover` / `popover-foreground` | Menus, dialogs | paper / ink | graphite-900 / paper |
| `primary` / `primary-foreground` | CTAs (dark text on orange) | orange / ink | orange / ink |
| `secondary` / `secondary-foreground` | Subtle filled controls | stone-100 / ink | graphite-800 / paper |
| `muted` / `muted-foreground` | Inset surfaces / secondary text | stone-50 / stone-600 | graphite-900 / graphite-300 |
| `accent` / `accent-foreground` | Hover/active fills | stone-100 / ink | graphite-800 / paper |
| `destructive` | Form errors | rust | orange-soft |
| `border`, `input` | Dividers, outlines, inputs | stone-200 | graphite-700 |
| `ring` | Focus ring | orange | orange |
| `chart-1..5` | Charts (1 = compute orange, 2 = requests dashes) | orange, stone-400 @55%, ink, stone-200, rust | orange, paper @80%, paper, graphite-700, orange-soft |
| `announcement` / `announcement-foreground` | Top bar | orange / ink | orange / ink |
| `nav` / `nav-foreground` | Header pill and mobile menu | stone-100 / ink | graphite-800 / paper |
| `code` / `code-foreground` | Code windows | stone-50 / ink | graphite-900 / paper |
| `syntax-accent` | Code keys, keywords, strings | rust | orange-soft |
| `syntax-comment` | Code comments | stone-600 | graphite-300 |
| `grid-cell` / `grid-cell-active` | Workload concept grid | stone-200 / orange | graphite-700 / orange |
| `wordmark` | Giant footer "fenon" | grey-300 | grey-500 |
| `eyebrow` | Section eyebrows | ink | orange |
| `dot-grid` | Footer dot texture (used at 47%) | stone-200 | graphite-700 |
| `brand-mark` | Logo ring (fixed orange) | orange | orange |

Scopes: `:root`/`.light` = light and `.dark` = dark. Any subtree can force a theme with those classes (the tokens page does).

## Layer 3: type scale (`styles/theme.css`)
Font sizes and line heights are fluid: linear between the 390px and 1440px frames and clamped at both ends, so each frame matches exactly. The Figma file was "No_Fonts" (all text outlined), so these values were measured, not read:
- **Size**: from cap height (Inter cap = 0.727em).
- **Line height**: from the baseline-to-baseline pitch.
- **Weight**: 400 everywhere. The design's stem/size ratio of 0.084–0.088 matches Inter Regular.
- **Tracking**: solved so the rendered width of real design lines matches the measured width. Verified in the browser to within about 1%.

| Utility | Size (390 → 1440) | Line height | Tracking | Weight | Used for |
|---|---|---|---|---|---|
| `text-display-hero` | 42 → 88px (fluid) | 46 → 93px (fluid) | -0.063em | 400 | Hero H1 |
| `text-display-cta` | 46 → 84px (fluid) | 52 → 96px (fluid) | -0.063em | 400 | Final CTA headline |
| `text-display` | 38 → 60px (fluid) | 42.5 → 66.5px (fluid) | -0.047em | 400 | Section H2 |
| `text-display-sm` | 32 → 36.6px (fluid) | 1.1 | -0.047em | 400 | Contact/article H1 |
| `text-heading-lg` | 26 → 30px (fluid) | 30 → 34.75px (fluid) | -0.038em | 400 | Workload panel title, integration H3 |
| `text-heading` | 24 → 28px (fluid) | 28 → 32.25px (fluid) | -0.045em | 400 | Card titles |
| `text-heading-sm` | 24px | 28.8px | -0.045em | 400 | Article section headings |
| `text-title` | 26px | 30.75px | -0.045em | 400 | Article card titles |
| `text-tab` | 16 → 22px (fluid) | 20 → 26.5px (fluid) | -0.04em | 400 | Workload tab labels |
| `text-lede-lg` | 16 → 18px (fluid) | 24 → 28.5px (fluid) | -0.01em | 400 | Hero lead-in, model names |
| `text-lede-md` | 15px | 25px | -0.027em | 400 | Workload/CTA/modal body, form controls |
| `text-lede` | 14 → 16px (fluid) | 23.4 → 27px (fluid) | -0.027em | 400 | Section ledes, mobile menu |
| `text-body` | 13 → 14px (fluid) | 22px | -0.034em | 400 | Body copy, nav, buttons |
| `text-body-xs` | 11 → 12px (fluid) | 18px | -0.02em | 400 | Facets, notes, article links |
| `text-body-sm` | 13px | 20px | -0.03em | 400 | Form labels |
| `text-caption` | 10.7 → 13px (fluid) | 1.4 | -0.03em | 400 | Announcement bar |
| `text-mono-figure` | 7.8 → 13px (fluid) | 12 → 18px (fluid) | — | 400 | Hero caption + motion toggle |
| `text-mono-md` | 10 → 13px (fluid) | 14 → 18px (fluid) | 0em | 400 | Eyebrows |
| `text-mono-sm` | 10.7 → 11.5px (fluid) | 16px | 0em | 400 | Card eyebrows |
| `text-mono-code` | 8.6 → 10.8px (fluid) | 18 → 20.75px (fluid) | — | 400 | deployment.yaml |
| `text-mono-code-lg` | 8.7 → 11.7px (fluid) | 19 → 24px (fluid) | — | 400 | robot_loop.py |
| `text-mono-caption` | 10.3px | 14px | 0.04em | 400 | Uppercase captions (article category, card labels) |
| `text-mono-link` | 10.8 → 11.7px (fluid) | 24px | — | 400 | Footer links |
| `text-mono-xs` | 8 → 9.5px (fluid) | 13px | — | 400 | Notes, legends, statuses, IN/OUT |
| `text-mono-micro` | 5.2 → 9.5px (fluid) | 1.3 | — | 400 | Chart captions |
| `text-display-wordmark` | 96 → 244px (fluid) | 0.8 | 0.05em | 700 | Footer wordmark (Inter Bold, md+) |
| `text-mono-label` | 10.6 → 13px (fluid) | 18px | 0 → 0.78px (fluid) | 400 | Footer column titles |
| `text-mono-ruler` | 9.4 → 11.2px (fluid) | 16px | — | 400 | Footer ruler, Appearance label |
| `text-mono-artwork` | 8 → 11.1px (fluid) | 13px | — | 400 | Footer artwork row |
| `text-mono-bar` | 8.4 → 10.3px (fluid) | 16px | — | 400 | Footer bottom bar |
| `text-mono-switch` | 8.9 → 10.4px (fluid) | 14px | — | 400 | Appearance switch |
| `text-mono-tagline` | 9.75 → 11.7px (fluid) | 19.1px | — | 400 | Footer tagline |

Every custom size is registered in `lib/utils.ts` (`cn` font-size class group), so `cn()` never mistakes a size for a colour. The container widths (`page`, `content`) and `gutter` spacing are registered there too. This table is generated from `styles/theme.css`; regenerate it whenever tokens change.

## Radius, layout, motion
| Token | Value | Notes |
|---|---|---|
| `rounded-sm` | 6px | Small buttons (Copy, Replay) |
| `rounded-md` | 8px | Code windows, flow tiles (measured 8) |
| `rounded-lg` | 12px | Concept cards, large code card (measured 12); also shadcn `--radius` |
| `rounded-xl` | 16px | Section cards (measured 16) |
| `rounded-2xl` … `4xl` | 20 / 24 / 32px | Mobile menu panel (2xl) |
| `rounded-full` | — | Nav pill, pill buttons |
| `px-gutter` | 20 → 72px fluid | Page side padding (1440 frame: 72px gutters → 1296px content) |
| `max-w-page` / `max-w-content` | 1440 / 1296px | Page and content widths |
| `ease-fenon` | cubic-bezier(0.22, 1, 0.36, 1) | Default easing |
| `animate-float` / `animate-fill` | 7s float / 1.6s scaleX fill | Hero motion; lifecycle bars (transform only) |
| `bg-dot-grid-pattern` | 2px dot / 20px grid, 47% | Footer texture (CSS rebuild of Figma `dotgrid.png`) |

## Breakpoints
The design frames are 390 (mobile) and 1440 (desktop). Fluid tokens cover everything in between. Layout switches use Tailwind's default `md` (768) and `lg` (1024).
