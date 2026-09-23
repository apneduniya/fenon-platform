import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

export function Card({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("rounded-xl border border-border bg-card text-card-foreground", className)} {...props} />
}

export function CardEyebrow({ className, ...props }: ComponentProps<"p">) {
  return <p className={cn("font-mono text-mono-sm text-muted-foreground uppercase", className)} {...props} />
}
