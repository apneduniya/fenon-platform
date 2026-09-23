import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Logo, LogoMark } from "@/components/illustrations/Logo"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Design tokens",
  robots: { index: false, follow: false },
}

const colorTokens = [
  ["background", "bg-background"],
  ["foreground", "bg-foreground"],
  ["card", "bg-card"],
  ["muted", "bg-muted"],
  ["muted-foreground", "bg-muted-foreground"],
  ["secondary", "bg-secondary"],
  ["accent", "bg-accent"],
  ["primary", "bg-primary"],
  ["primary-foreground", "bg-primary-foreground"],
  ["destructive", "bg-destructive"],
  ["border", "bg-border"],
  ["ring", "bg-ring"],
  ["announcement", "bg-announcement"],
  ["nav", "bg-nav"],
  ["code", "bg-code"],
  ["syntax-accent", "bg-syntax-accent"],
  ["syntax-comment", "bg-syntax-comment"],
  ["grid-cell", "bg-grid-cell"],
  ["grid-cell-active", "bg-grid-cell-active"],
  ["wordmark", "bg-wordmark"],
  ["dot-grid", "bg-dot-grid"],
  ["dot-grid-pattern", "bg-dot-grid-pattern"],
  ["brand-mark", "bg-brand-mark"],
  ["chart-1", "bg-chart-1"],
  ["chart-2", "bg-chart-2"],
  ["chart-3", "bg-chart-3"],
  ["chart-4", "bg-chart-4"],
  ["chart-5", "bg-chart-5"],
] as const

const typeTokens = [
  ["display-hero", "text-display-hero", "Your models."],
  ["display-cta", "text-display-cta", "Build what"],
  ["display", "text-display", "The cloud layer behind"],
  ["heading-lg", "text-heading-lg", "Give observations"],
  ["heading", "text-heading", "Bring the intelligence."],
  ["title", "text-title", "Where should robot"],
  ["tab", "text-tab", "Reasoning"],
  ["lede-lg", "text-lede-lg", "Run the models that move the"],
  ["lede", "text-lede", "Your model is one part of the system. Fenon focuses"],
  ["body", "text-body", "Define the model, its inputs and its runtime. Keep the integration visible"],
  ["body-sm", "text-body-sm", "Send the task and the context your model needs."],
  ["mono-md", "text-mono-md font-mono uppercase", "The inference layer for robotics"],
  ["mono-sm", "text-mono-sm font-mono uppercase", "Model-first development"],
  ["mono-code", "text-mono-code font-mono", "# Integration concept"],
] as const

function TokenBoard({ dark }: { dark?: boolean }) {
  return (
    <section className={cn(dark ? "dark" : "light", "bg-background p-8 text-foreground")}>
      <h2 className="mb-6 font-mono text-mono-md uppercase text-muted-foreground">{dark ? "Dark" : "Light"}</h2>
      <div className="mb-10 flex items-center gap-8">
        <Logo className="w-[131px]" />
        <LogoMark className="w-[115px]" />
      </div>
      <ul className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {colorTokens.map(([name, className]) => (
          <li key={name} className="flex items-center gap-3">
            <span className={cn("size-10 shrink-0 rounded-md border border-border", className)} />
            <span className="font-mono text-mono-sm">{name}</span>
          </li>
        ))}
      </ul>
      <ul className="space-y-6">
        {typeTokens.map(([name, className, sample]) => (
          <li key={name}>
            <p className="mb-1 font-mono text-mono-sm text-muted-foreground">{name}</p>
            <p className={className}>{sample}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default function TokensPage() {
  if (process.env.NODE_ENV === "production") notFound()

  return (
    <main className="grid lg:grid-cols-2">
      <TokenBoard />
      <TokenBoard dark />
    </main>
  )
}
