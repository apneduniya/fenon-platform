import type { Article } from "@/lib/schemas/content"

// Hand-built from the design PNG (these weren't exported from Figma); all colours are tokens.
const line = { fill: "none", strokeLinecap: "round", strokeLinejoin: "round" } as const

function ArchitectureArt() {
  return (
    <>
      <g {...line} stroke="var(--border)" strokeWidth="1">
        <path d="M43 144 89 127M72 167l61-22M221 106l20 8M221 119l20 8M327 145l39 16M307 150l27 11" />
      </g>
      <g {...line} stroke="var(--foreground)" strokeWidth="1.1">
        <path d="M84 74 153 48l67 26-68 26ZM84 74v50l68 26 68-26V74M152 100v50" />
        <path d="M241 107 284 90l43 17-43 17ZM241 107v36l43 17 43-17v-36M284 124v36" />
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
      <circle cx="205" cy="101" r="60" fill="none" stroke="var(--border)" strokeWidth="1" />
      <path d="M158 62A60 60 0 0 1 259 112" {...line} stroke="var(--primary)" strokeWidth="1.8" />
      <g {...line} stroke="var(--primary)" strokeWidth="1">
        <path d="M205 26v15M205 161v15M102 101h40M270 101h39" />
      </g>
      <circle cx="266" cy="101" r="3.6" fill="var(--primary)" />
      <rect x="174.5" y="70.5" width="62" height="61" rx="8" fill="none" stroke="var(--foreground)" strokeWidth="1" />
      <circle cx="198" cy="101" r="11.6" fill="var(--foreground)" />
      <circle cx="210.5" cy="101" r="9.8" fill="none" stroke="var(--brand-mark)" strokeWidth="3.9" />
    </>
  )
}

const RAW = [[55, 141], [80, 133], [105, 139], [131, 108], [155, 117], [181, 87], [204, 92], [229, 67], [254, 80], [279, 55], [304, 65], [330, 39], [357, 52]]
const SMOOTHED = [[55, 152], [80, 152], [105, 148], [131, 133], [155, 131], [181, 116], [204, 108], [229, 93], [254, 92], [279, 75], [304, 73], [330, 58], [357, 56]]
const points = (pts: number[][]) => pts.map((p) => p.join(",")).join(" ")

function EvaluationArt() {
  return (
    <>
      <g stroke="var(--border)" strokeWidth="1">
        {[50, 84, 118, 152].map((y) => (
          <line key={y} x1="55" x2="357" y1={y} y2={y} />
        ))}
      </g>
      <polyline points={points(RAW)} {...line} stroke="var(--foreground)" strokeWidth="1.1" />
      <polyline points={points(SMOOTHED)} {...line} stroke="var(--primary)" strokeWidth="2" />
      <circle cx="330" cy="58" r="3.6" fill="var(--primary)" />
    </>
  )
}

const art = { architecture: ArchitectureArt, loop: LoopArt, evaluation: EvaluationArt }

export function ArticleArt({ kind }: { kind: Article["illustration"] }) {
  const Art = art[kind]
  return (
    <svg viewBox="0 0 406 202" aria-hidden="true" className="h-full w-full">
      <Art />
    </svg>
  )
}
