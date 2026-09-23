import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Eyebrow } from "./Eyebrow"

interface DocumentCardProps {
  eyebrow: string
  title: string
  titleId: string
  /** Close control: a link on full pages, a dialog close inside the route modal. */
  close: ReactNode
  children: ReactNode
  className?: string
}

// Card shell shared by the contact and article routes (page and intercepted modal), per the 808px design frames.
export function DocumentCard({ eyebrow, title, titleId, close, children, className }: DocumentCardProps) {
  return (
    <article className={cn("relative rounded-xl border border-border bg-card px-6 pt-8 pb-10 lg:px-10 lg:pt-[39px] lg:pb-[51px]", className)}>
      <div className="absolute top-6 right-6 lg:top-10 lg:right-10">{close}</div>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 id={titleId} className="mt-[14px] pr-12 text-display-sm">
        {title}
      </h1>
      {children}
    </article>
  )
}
