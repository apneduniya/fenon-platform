import type { ReactNode } from "react"
import type { CodeSample, CodeTokenKind } from "@/content/code-samples"
import { cn } from "@/lib/utils"

const tokenClass: Record<CodeTokenKind, string> = {
  plain: "",
  accent: "text-syntax-accent",
  comment: "text-syntax-comment",
}

interface CodeWindowProps {
  sample: CodeSample
  footer: string
  /** Traffic-light dots before the filename (deployment.yaml). */
  dots?: boolean
  /** Right side of the header, e.g. a Copy button. */
  action?: ReactNode
  className?: string
  headerClassName?: string
  bodyClassName?: string
  footerClassName?: string
}

export function CodeWindow({
  sample,
  footer,
  dots,
  action,
  className,
  headerClassName,
  bodyClassName,
  footerClassName,
}: CodeWindowProps) {
  return (
    <figure className={cn("overflow-hidden rounded-md border border-border bg-code text-code-foreground", className)}>
      <figcaption className={cn("flex h-9 items-center gap-[10px] border-b border-border px-4 font-mono text-mono-xs text-muted-foreground lg:h-10 lg:text-mono-sm", headerClassName)}>
        {dots && (
          <span aria-hidden="true" className="mr-[14px] flex gap-[6px]">
            {[0, 1, 2].map((i) => (
              <span key={i} className="size-[6px] rounded-full border border-current" />
            ))}
          </span>
        )}
        <span>{sample.filename}</span>
        {action && <span className="ml-auto">{action}</span>}
      </figcaption>
      <pre className={cn("overflow-x-auto px-4 py-5 font-mono text-mono-code lg:px-6", bodyClassName)}>
        <code>
          {sample.lines.map((line, i) => (
            <span key={i} className="block min-h-[1lh]">
              {line.map((token, j) => (
                <span key={j} className={tokenClass[token.kind ?? "plain"]}>
                  {token.text}
                </span>
              ))}
            </span>
          ))}
        </code>
      </pre>
      <p className={cn("flex items-center gap-[10px] border-t border-border px-4 py-[19px] font-mono text-mono-xs text-muted-foreground", footerClassName)}>
        <span aria-hidden="true" className="size-[5px] rounded-full bg-primary" />
        {footer}
      </p>
    </figure>
  )
}
