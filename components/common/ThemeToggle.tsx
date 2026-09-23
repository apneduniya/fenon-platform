"use client"

import { useUiStore } from "@/components/providers/StoreProvider"
import { cn } from "@/lib/utils"
import { ContrastIcon, MoonIcon, SunIcon } from "./icons"

// Labels switch through the `dark:` variant so the first paint is correct before hydration.
export function ThemeToggle({ className }: { className?: string }) {
  const toggleTheme = useUiStore((s) => s.toggleTheme)
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn("inline-flex items-center gap-[10px] text-body text-muted-foreground transition-colors hover:text-foreground", className)}
    >
      <ContrastIcon className="size-3" />
      <span className="dark:hidden">Dark</span>
      <span className="hidden dark:inline">Light</span>
      <span className="sr-only">mode</span>
    </button>
  )
}

export function AppearanceSwitch({ label }: { label: string }) {
  const theme = useUiStore((s) => s.theme)
  const setTheme = useUiStore((s) => s.setTheme)
  const options = [
    { value: "light", label: "Light", Icon: SunIcon, active: "bg-muted text-foreground dark:bg-transparent dark:text-muted-foreground" },
    { value: "dark", label: "Dark", Icon: MoonIcon, active: "text-muted-foreground dark:bg-muted dark:text-foreground" },
  ] as const

  return (
    <div role="group" aria-label={label} className="inline-flex gap-1 rounded-md border border-border bg-background p-[4px]">
      {options.map(({ value, label: optionLabel, Icon, active }) => (
        <button
          key={value}
          type="button"
          aria-pressed={theme === value}
          onClick={() => setTheme(value)}
          className={cn(
            "inline-flex h-8 items-center gap-2 rounded-sm px-3 font-mono text-mono-sm transition-colors hover:text-foreground",
            active,
          )}
        >
          <Icon className="size-3.5" />
          {optionLabel}
        </button>
      ))}
    </div>
  )
}
