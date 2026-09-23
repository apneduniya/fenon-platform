"use client"

import { useState } from "react"
import type { TraceStep } from "@/lib/schemas/content"
import { cn } from "@/lib/utils"

interface TraceBarsProps {
  steps: readonly TraceStep[]
  cardLabel: string
  replayLabel: string
}

// Bars grow with scaleX from the left (transform only). Replay remounts the list to restart the animation.
export function TraceBars({ steps, cardLabel, replayLabel }: TraceBarsProps) {
  const [run, setRun] = useState(0)
  return (
    <>
      <div className="flex items-center justify-between pb-5 lg:pb-[26px]">
        <p className="font-mono text-mono-caption text-muted-foreground uppercase">{cardLabel}</p>
        <button
          type="button"
          onClick={() => setRun((n) => n + 1)}
          className="inline-flex h-[31px] items-center gap-[9px] rounded-sm border border-border bg-background px-[8px] font-mono text-mono-sm transition-colors hover:bg-accent"
        >
          {replayLabel}
          <svg viewBox="0 0 12 12" aria-hidden="true" className="size-3" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round">
            <path d="M2.2 4.2A4.3 4.3 0 1 1 1.9 7.5" />
            <path d="M1.6 1.8v2.7h2.7" />
          </svg>
        </button>
      </div>
      <ol key={run} className="border-t border-border">
        {steps.map((step, i) => (
          <li
            key={step.label}
            className="grid h-[51px] grid-cols-[19px_106px_1fr] items-center lg:h-[57px] border-b border-border md:grid-cols-[28px_174px_1fr_130px]"
          >
            <span className="font-mono text-mono-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-body">{step.label}</span>
            <span className="relative h-[10px] bg-grid-cell md:mr-[21px]">
              <span
                className={cn("absolute inset-0 origin-left animate-fill", step.highlight ? "bg-primary" : "bg-foreground")}
                style={{ transform: `scaleX(${step.progress})`, animationDelay: `${i * 180}ms` }}
              />
            </span>
            <span className="hidden font-mono text-mono-xs text-muted-foreground md:block">{step.status}</span>
          </li>
        ))}
      </ol>
    </>
  )
}
