import type { SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement>
const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.2, strokeLinecap: "round", strokeLinejoin: "round" } as const

export function CameraIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 28 24" aria-hidden="true" {...props}>
      <g {...stroke}>
        <rect x="1" y="4" width="26" height="19" rx="3" />
        <path d="M9 4 10.5 1h7L19 4" />
        <circle cx="14" cy="13.5" r="5" />
      </g>
    </svg>
  )
}

export function ChipIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 28 28" aria-hidden="true" {...props}>
      <g {...stroke}>
        <rect x="6" y="6" width="16" height="16" rx="1.5" />
        <path d="M10 1v5M14 1v5M18 1v5M10 22v5M14 22v5M18 22v5M1 10h5M1 14h5M1 18h5M22 10h5M22 14h5M22 18h5" />
      </g>
    </svg>
  )
}

export function ArmIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 26" aria-hidden="true" {...props}>
      <g {...stroke}>
        <path d="M3 25h10M8 25V15" />
        <circle cx="6" cy="13" r="2.5" />
        <path d="m7.5 11 6-7M15 3l4 4" />
        <circle cx="14.5" cy="3.5" r="2" />
        <path d="m19 7 1.5 3M17.5 8.5l3 1" />
      </g>
    </svg>
  )
}
