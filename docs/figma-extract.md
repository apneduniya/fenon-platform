# Figma extraction log

The account is on the Figma free plan, so every MCP call is logged here with what it returned. Check this file before making a new call.

Files:
- Website: `LwX0TXzOk3NqNdQWAzA5hO` ("Fenon_Full_Website_No_Fonts"). All text is converted to outlines, so it has no font data.
- Brand: `Mz0d9CIQ0Wknp7c0qnJUbU` ("Fenon-Logo-Exploration")

Nodes supplied by the user:
| What | File | Node |
|---|---|---|
| Homepage 1440 light frame | website | `0:6709` |
| Hero isometric illustration | website | `0:7286` |
| Footer | website | `0:12888` |
| Logo system | brand | `12:4` |
| Brand overview | brand | `12:2` (not fetched) |
| Hero isometric, dark frame | website | `0:580` |
| Mobile footer artwork, light | website | `0:26248` |
| Mobile footer artwork, dark | website | `0:19812` |

## Calls made (2026-09-23)
| # | Tool | Node | Result |
|---|---|---|---|
| 1 | `get_variable_defs` | `0:6709` | `{}`: the file defines no variables. Colours came from assets and PNG sampling. |
| 2 | `get_design_context` | `0:7286` | ~80 masked vector fragments with absolute positions; output truncated. Not usable as code. It confirmed the node is 1332 × 536.77 at left 54, top 524.78 in the 1440 frame. |
| 3 | `download_assets` (svg) | `0:7286` | A single-file export saved as `public/images/hero-isometric-light.svg` (1332×537, 85 KB). Callout text is outlined inside the SVG. |
| 4 | `get_design_context` | `0:12888` | Footer geometry and small SVG assets (see below). Text outlined. |
| 5 | `download_assets` (svg) | `12:4` | Logo system sheet plus 3 logomark SVGs (saved in the scratchpad; paths used for `components/illustrations/Logo*`). |
| 6 | `download_assets` (svg) | `0:580` | Dark hero export saved as `public/images/hero-isometric-dark.svg` (1332×537, 85 KB). Same geometry as the light file; the page-background rect is black. |
| 7 | `download_assets` | `0:26248` | 390×250 PNG export saved as `public/images/footer-artwork-light.png` (the raw source image is 390×251 RGB and wasn't used). |
| 8 | `download_assets` | `0:19812` | 390×250 PNG export saved as `public/images/footer-artwork-dark.png`. |

Both hero SVGs include an opaque page-background rect (white or black) that matches `--background` in each theme, so they sit seamlessly on the page.

## Extracted facts

### Colours from assets
- Hero: `#FF5402` orange; warm greys `#EFEFE5`, `#D6D6C9`, `#B4B5A6`, `#979A8E`, `#A7AA9C`, `#5E605A`; ink `#090A09`, `#141B10`; tile gradient stops `#FFB078` → `#FF6C25` → `#FF5402` → `#A23406` → `#73320F` → `#3D1B0E` → `#21120B`.
- Footer: text `#151713`, links `#3C4037`, muted `#676D5F`, lines `#D9DDD4`, decorative `#E4E7DF`, selected option `#EFF1EB`. These differ from the rest of the page by a tiny ΔE, so they were unified with the main palette (decision #19).

### Footer geometry (1440 frame, footer top y = 5750.47)
- Top rule spans the full width. The main frame box is x 72 → 1368 (1296 wide), y +47 → +377 (330 tall), with 9px registration crosses at the 4 corners.
- Column dividers at x = 504.33, 791.88, 1079.44, so the columns are 432.3 / 287.55 / 287.55 / 288.56 wide.
- Column content starts 31px after each divider. Labels (PLATFORM, …) at y +93; links at +142, +181, +220 (39px pitch).
- Ruler row at y +18 (5px orange square, then mono label); tagline row at y +403.
- Appearance switch: 155.2 × 42 group with a 1px border and a 74.1 × 32 selected option inset 5px. The label "APPEARANCE" is at y +251.
- Bottom bar: 65px tall, top rule, starting at y +812.4.
- Logo mark: ≈ 230 × 133 at x 173, centred in column 1, with decorative faint circles and lines (`#E4E7DF`) behind it.
- Dot grid: 2px dots on a 20px grid, colour `#D4D8CD` at alpha 119/255.

### Logo system (`12:4`)
- Mark: a crescent (ink on light, white on dark) plus the orange ring `#FF5402`. "Never distort, rotate, recolor the orange, or alter the overlap." Clear space is at least 1× the ring stroke.
- Header lockup uses the "fenon" wordmark from the reversed lockup. The Figma layer name is "Fenon — CHANGE THIS FONT", which suggests the wordmark font isn't final. Lockup bounds are x 133.5–595.6, y 735.8–845.8 (462 × 110).
