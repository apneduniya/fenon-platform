import type { SectionHeadingContent } from "@/lib/schemas/content"
import { cn } from "@/lib/utils"
import { Eyebrow } from "./Eyebrow"
import { Lines } from "./Lines"

interface SectionHeadingProps {
  heading: SectionHeadingContent
  className?: string
  titleClassName?: string
}

// Eyebrow and H2 on the left, lede bottom-aligned in the right column (x 988 on the 1440 frame).
export function SectionHeading({ heading, className, titleClassName }: SectionHeadingProps) {
  const titleId = `${heading.id}-title`
  return (
    <div className={cn("grid gap-6 lg:grid-cols-[1fr_374px] lg:items-end lg:gap-10", className)}>
      <div>
        <Eyebrow className="text-eyebrow">{heading.eyebrow}</Eyebrow>
        <h2 id={titleId} className={cn("mt-[7px] text-display lg:mt-[18px]", titleClassName)}>
          <Lines lines={heading.title} />
        </h2>
      </div>
      <p className="text-lede text-muted-foreground lg:pb-1">{heading.lede}</p>
    </div>
  )
}
