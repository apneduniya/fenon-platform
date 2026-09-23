"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function CopyButton({ text, className }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 1600)
    return () => clearTimeout(timer)
  }, [copied])

  return (
    <button
      type="button"
      onClick={() => navigator.clipboard.writeText(text).then(() => setCopied(true))}
      className={cn(
        "rounded-sm border border-border bg-background px-[9px] py-[3px] font-mono text-mono-xs text-foreground transition-colors hover:bg-accent",
        className,
      )}
    >
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  )
}
