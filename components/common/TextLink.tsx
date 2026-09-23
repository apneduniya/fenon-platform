import Link from "next/link"
import type { Link as LinkContent } from "@/lib/schemas/content"
import { cn } from "@/lib/utils"
import { ArrowIcon } from "./icons"

interface TextLinkProps {
  link: LinkContent
  className?: string
  iconClassName?: string
}

// Inline "Label ↗" link used across sections.
export function TextLink({ link, className, iconClassName }: TextLinkProps) {
  const Component = link.external ? "a" : Link
  return (
    <Component
      href={link.href}
      className={cn("group/link inline-flex items-center gap-[19px] text-body text-foreground", className)}
    >
      <span className="underline-offset-4 group-hover/link:underline">{link.label}</span>
      <ArrowIcon
        className={cn(
          "size-3 transition-transform duration-300 ease-fenon group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5",
          iconClassName,
        )}
      />
    </Component>
  )
}
