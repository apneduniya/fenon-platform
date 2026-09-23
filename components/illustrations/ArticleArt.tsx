import type { Article } from "@/lib/schemas/content"

// Hand-built from the design PNG (not exported from Figma; decision #27). Coordinates are measured from the
// full-resolution 1440 frame; all colours are tokens.
const line = { fill: "none", strokeLinecap: "round", strokeLinejoin: "round" } as const

function ArchitectureArt() {
  return (
    <>
      <g {...line} stroke="var(--border)" strokeWidth="1">
        <path d="M43 143.7 89 125.9M72 167.7 133 144.3M221 105.5l20 8M221 118.4l20 8M327 145.7 366 160.5M307 150l27 11" />
      </g>
      <g {...line} stroke="var(--foreground)" strokeWidth="1.1">
        <path d="M84.3 74 153 48.4 219.6 74 152 100.4ZM84.3 74v50l67.7 25.6 67.6-25.6V74M152 100.4v49.2" />
        <path d="M241.4 107 284 90.6l42.7 16.4-42.7 17ZM241.4 107v36l42.6 17 42.7-17v-36M284 124v36" />
      </g>
      <path d="m106 82 47-18 43 16-45 18Z" fill="var(--primary)" />
      <path d="m185 137 38 14 36-14" {...line} stroke="var(--primary)" strokeWidth="1" />
      <circle cx="223" cy="151" r="2.6" fill="var(--primary)" />
    </>
  )
}

function LoopArt() {
  return (
    <>
      <circle cx="205" cy="100.75" r="59.7" fill="none" stroke="var(--border)" strokeWidth="1" />
      <path d="M157.34 62.64A59.76 59.76 0 0 1 258.83 113.5" {...line} stroke="var(--primary)" strokeWidth="1.8" />
      <g {...line} stroke="var(--primary)" strokeWidth="1">
        <path d="M205 26v15M205 161v15M102 101h40M270 101h39" />
      </g>
      <circle cx="266" cy="101" r="3.6" fill="var(--primary)" />
      <rect x="174.38" y="70.4" width="62.5" height="60.6" rx="7.3" fill="none" stroke="var(--foreground)" strokeWidth="1" />
      <circle cx="198.2" cy="100.75" r="11.6" fill="var(--foreground)" />
      <circle cx="210.25" cy="100.7" r="10.1" fill="none" stroke="var(--brand-mark)" strokeWidth="3.9" />
    </>
  )
}

const RAW = [[55, 140.9], [80, 133], [105, 139.1], [131, 108.1], [155, 117], [181, 87.4], [204, 92.4], [229, 67.8], [254, 80.4], [279, 55.5], [304, 64.6], [330, 39.3], [357, 52.4]]
const SMOOTHED = [[55, 152], [80, 152], [105, 148.5], [131, 133.8], [155, 131.9], [181, 116.6], [204, 109], [229, 93.4], [254, 92.4], [279, 75.5], [304, 73.3], [330, 58.5], [357, 56.8]]
const points = (pts: number[][]) => pts.map((p) => p.join(",")).join(" ")

function EvaluationArt() {
  return (
    <>
      <g stroke="var(--border)" strokeWidth="1">
        {[50.1, 84.1, 118.1, 152.1].map((y) => (
          <line key={y} x1="55" x2="357" y1={y} y2={y} />
        ))}
      </g>
      <polyline points={points(RAW)} {...line} stroke="var(--foreground)" strokeWidth="1.1" />
      <polyline points={points(SMOOTHED)} {...line} stroke="var(--primary)" strokeWidth="2" />
      <circle cx="330" cy="58.5" r="3.6" fill="var(--primary)" />
    </>
  )
}

const art = { architecture: ArchitectureArt, loop: LoopArt, evaluation: EvaluationArt }

export function ArticleArt({ kind, className }: { kind: Article["illustration"]; className?: string }) {
  const Art = art[kind]
  return (
    <svg viewBox="0 0 406 202" aria-hidden="true" className={className}>
      <Art />
    </svg>
  )
}
