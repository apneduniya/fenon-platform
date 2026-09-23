import Link from "next/link"
import { cn } from "@/lib/utils"
import { CloseIcon } from "./icons"

export const closeButtonClass =
  "grid size-8 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent"

export function CloseLink({ href = "/", className }: { href?: string; className?: string }) {
  return (
    <Link href={href} aria-label="Close" className={cn(closeButtonClass, className)}>
      <CloseIcon className="size-3" />
    </Link>
  )
}
