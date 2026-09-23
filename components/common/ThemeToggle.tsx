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
    // Sizes measured from the 390 frame (126×38) and the Figma footer export (155×42).
    <div role="group" aria-label={label} className="inline-flex gap-1 rounded-md border border-border bg-background p-[2px] md:p-1">
      {options.map(({ value, label: optionLabel, Icon, active }) => (
        <button
          key={value}
          type="button"
          aria-pressed={theme === value}
          onClick={() => setTheme(value)}
          className={cn(
            "inline-flex h-8 items-center gap-[6.6px] rounded-sm pr-2 pl-[8.8px] font-mono text-mono-switch transition-colors hover:text-foreground md:gap-[8.3px] md:pr-[10px] md:pl-[12.3px]",
            active,
          )}
        >
          <Icon className="size-[10px] md:size-[12.45px]" />
          {optionLabel}
        </button>
      ))}
    </div>
  )
}
