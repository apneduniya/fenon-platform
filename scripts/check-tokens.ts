// Fails when colours bypass the token system, or when cn() bypasses the token-aware config (see AGENTS.md → Theming).
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs"
import { join, relative } from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = fileURLToPath(new URL("..", import.meta.url))
const SCAN_DIRS = ["app", "components", "content", "lib", "styles"]
const EXTENSIONS = /\.(tsx?|css|mdx?)$/
// palette.css (and its TS mirror for non-CSS contexts) are the only files allowed to hold raw colour values.
const RAW_VALUE_ALLOWED = new Set(["styles/palette.css", "lib/brand-colors.ts"])
const PRIMITIVE_ALLOWED_DIR = "styles/"

const UTILITY =
  "(?:bg|text|border(?:-[trblxy])?|fill|stroke|ring|ring-offset|outline|from|via|to|shadow|decoration|accent|caret|divide|placeholder)"
const PALETTE =
  "(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)"

const rules: { name: string; pattern: RegExp; applies: (file: string) => boolean }[] = [
  {
    name: "raw hex colour",
    pattern: /(?<![\w&/-])#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3,4})\b/g,
    applies: (f) => !RAW_VALUE_ALLOWED.has(f),
  },
  {
    name: "raw colour function",
    pattern: /\b(?:rgba?|hsla?|oklch|oklab|lab|lch|hwb)\(/g,
    applies: (f) => !RAW_VALUE_ALLOWED.has(f),
  },
  {
    name: "arbitrary colour utility",
    pattern: new RegExp(`\\b${UTILITY}-\\[(?:#|rgb|hsl|oklch|oklab|color:|var\\(--)`, "g"),
    applies: () => true,
  },
  {
    name: "Tailwind default palette utility",
    pattern: new RegExp(`\\b${UTILITY}-(?:${PALETTE}-\\d{2,3}|black|white)\\b`, "g"),
    applies: () => true,
  },
  {
    // shadcn's CLI imports the bare `cn` package; ours (lib/utils.ts) knows the Fenon font-size tokens.
    name: "cn imported from the bare package instead of @/lib/utils",
    pattern: /from ["']cn["']/g,
    applies: (f) => f !== "lib/utils.ts",
  },
  {
    name: "brand primitive used outside styles/",
    pattern: /--fenon-[\w-]+/g,
    applies: (f) => !f.startsWith(PRIMITIVE_ALLOWED_DIR),
  },
]

function walk(dir: string): string[] {
  if (!existsSync(dir)) return []
  return readdirSync(dir).flatMap((entry) => {
    const path = join(dir, entry)
    if (statSync(path).isDirectory()) return walk(path)
    return EXTENSIONS.test(entry) ? [path] : []
  })
}

const violations: string[] = []

for (const dir of SCAN_DIRS) {
  for (const path of walk(join(ROOT, dir))) {
    const file = relative(ROOT, path)
    const lines = readFileSync(path, "utf8").split("\n")
    for (const rule of rules) {
      if (!rule.applies(file)) continue
      lines.forEach((line, i) => {
        for (const match of line.matchAll(rule.pattern)) {
          violations.push(`${file}:${i + 1}  ${rule.name}: ${match[0]}`)
        }
      })
    }
  }
}

if (violations.length > 0) {
  console.error(`lint:tokens found ${violations.length} violation(s):\n${violations.join("\n")}`)
  console.error("\nUse semantic tokens (bg-card, text-muted-foreground, …). See docs/design-tokens.md.")
  process.exit(1)
}

console.log("lint:tokens passed")
