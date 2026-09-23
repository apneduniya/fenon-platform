import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"

interface EyebrowProps extends ComponentProps<"p"> {
  dot?: boolean
}

export function Eyebrow({ dot, className, children, ...props }: EyebrowProps) {
  return (
    <p className={cn("flex items-center gap-3 font-mono text-mono-md uppercase", className)} {...props}>
      {dot && <span aria-hidden="true" className="size-[5px] rounded-full bg-primary" />}
      {children}
    </p>
  )
}
