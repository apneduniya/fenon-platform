import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import type { Link as LinkContent } from "@/lib/schemas/content"
import { cn } from "@/lib/utils"
import { ArrowIcon } from "./icons"

interface CtaLinkProps {
  link: LinkContent
  variant?: "cta" | "ctaOutline"
  className?: string
}

export function CtaLink({ link, variant = "cta", className }: CtaLinkProps) {
  return (
    <Link href={link.href} className={cn(buttonVariants({ variant, size: "cta" }), "group/cta", className)}>
      {link.label}
      <ArrowIcon className="transition-transform duration-300 ease-fenon group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
    </Link>
  )
}
