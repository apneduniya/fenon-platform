import { Moon, Sun, X } from "lucide-react"
import type { LucideProps } from "lucide-react"
import type { SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement>

// Arrow geometry from the Figma footer icons (0.84 stroke on a 7.84 box), stroked so it scales cleanly.
export function ArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 7.84 7.84" fill="none" stroke="currentColor" strokeWidth="0.84" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M.42 7.42 7.42.42M.42.42h7v7" />
    </svg>
  )
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 8.4 9.9" fill="none" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M4.2 9.45v-9M.45 4.2 4.2.45 7.95 4.2" />
    </svg>
  )
}

const base = { strokeWidth: 1.5, "aria-hidden": true } as const
export const SunIcon = (props: LucideProps) => <Sun {...base} {...props} />
export const MoonIcon = (props: LucideProps) => <Moon {...base} {...props} />
export const CloseIcon = (props: LucideProps) => <X {...base} {...props} />

export function ContrastIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" aria-hidden="true" className={className}>
      <circle cx="6" cy="6" r="5.25" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6 .75a5.25 5.25 0 0 1 0 10.5Z" fill="currentColor" />
    </svg>
  )
}
