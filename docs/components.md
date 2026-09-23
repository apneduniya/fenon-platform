# Component inventory

Open item: the mobile footer artwork (decision #33).

The status column tracks build progress: `planned` → `built` → `verified` (checked in the browser against the design PNG at 1440 and 390, light and dark).

## Layout
| Component | Path | Client? | Design reference | Status |
|---|---|---|---|---|
| AnnouncementBar | `components/layout/AnnouncementBar.tsx` | no | `Fenon/*/1440px/Full homepage.png` (top) | built |
| SiteHeader | `components/layout/SiteHeader.tsx` | no (children are client) | homepage top | built |
| MobileMenu | `components/layout/MobileMenu.tsx` | yes | `Navigation/Mobile expanded/*.png` | built |
| SiteFooter | `components/layout/SiteFooter.tsx` | no | homepage bottom | built |

## Sections (homepage, in order)
| Component | Path | Client? | Design reference | Status |
|---|---|---|---|---|
| Hero | `components/sections/Hero.tsx` | motion toggle only | homepage 0–1150px | built |
| Platform | `components/sections/Platform.tsx` | no | "The Platform" | built |
| Workloads | `components/sections/Workloads.tsx` | tabs | `Workloads/{Reasoning,World models,Policies}/*.png` | built |
| ModelToMachine | `components/sections/ModelToMachine.tsx` | Copy button | "Model to machine" | built |
| InferenceLifecycle | `components/sections/InferenceLifecycle.tsx` | Replay | "Follow the work" | built |
| EngineeringNotes | `components/sections/EngineeringNotes.tsx` | no | "Engineering notes" | built |
| FinalCta | `components/sections/FinalCta.tsx` | no | "Build what moves next." | built |

## Common
| Component | Purpose | Status |
|---|---|---|
| Container | Max-width and page gutters | built |
| Eyebrow | Mono uppercase label, optional dot | built |
| SectionHeading | Eyebrow + H2 + right-hand lede (no index number, decision #13) | built |
| Card | Rounded bordered surface (`bg-card`) | built |
| CodeWindow | Filename header, code body, footer note, optional Copy button | built |
| ArrowIcon | ↗ arrow used in links and CTAs | built |
| ThemeToggle | Header toggle and footer Appearance switch, via the Zustand theme store | built |
| RouteModal | Base UI Dialog wrapper for intercepted routes | built |

## Illustrations
| Component | Path | Notes | Status |
|---|---|---|---|
| Logo / LogoMark | `components/illustrations/Logo.tsx` | Exact logo-system paths; crescent and wordmark use `currentColor`, ring uses `brand-mark` (decision #22) | built |
| Hero isometric | `public/images/hero-isometric-{light,dark}.svg` | Unedited Figma exports (decision #21), light and dark | assets ready |

## Dev
| Route | Purpose | Status |
|---|---|---|
| `/tokens` | Every semantic swatch, the type scale and the logo in light and dark; returns 404 in production | verified |

## Panels and forms
| Component | Path | Client? | Notes | Status |
|---|---|---|---|---|
| DocumentCard | `components/common/DocumentCard.tsx` | no | Card shell for contact/article pages and modals (808px frames) | built |
| RouteModal / ModalClose | `components/common/RouteModal.tsx` | yes | Base UI Dialog; closing calls `router.back()` | verified |
| CloseLink | `components/common/CloseButton.tsx` | no | Close control on full pages | built |
| ContactPanel / ArticlePanel | `components/panels/*` | no | Shared by pages and intercepted modals | verified |
| ContactForm | `components/forms/ContactForm.tsx` | yes | TanStack Form + Zod (`lib/schemas/contact.ts`), builds a mailto link (`lib/mailto.ts`) | verified |
| CopyButton | `components/common/CopyButton.tsx` | yes | Clipboard copy for robot_loop.py | verified |
| CtaLink / TextLink | `components/common/*` | no | Pill CTA and inline "Label ↗" links | built |
| Lines | `components/common/Lines.tsx` | no | Deliberate heading line breaks from content arrays | built |

## Routes
| Route | Design reference | Status |
|---|---|---|
| `/` | `Fenon/*` | verified (1440 and 390, light and dark; landmarks within ~3px desktop and ~15px mobile) |
| `/contact` (+ modal) | `Contact form/{Desktop,Mobile}/*.png` | verified |
| `/engineering/[slug]` (+ modal) | `Engineering article/*/*.png` | verified |
