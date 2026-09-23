"use client"

import { ThemeImage } from "@/components/common/ThemeImage"
import { useUiStore } from "@/components/providers/StoreProvider"
import { cn } from "@/lib/utils"
import heroDark from "@/public/images/hero-isometric-dark.svg"
import heroLight from "@/public/images/hero-isometric-light.svg"

export function HeroIllustration({ alt }: { alt: string }) {
  const playing = useUiStore((s) => s.motionPlaying)
  return (
    // Fixed aspect ratio from the SVG viewBox (1332×537) reserves space before load (no CLS).
    <div className="relative aspect-[1332/537] w-full">
      <div className={cn("absolute inset-0 animate-float", !playing && "[animation-play-state:paused]")}>
        <ThemeImage
          srcLight={heroLight}
          srcDark={heroDark}
          alt={alt}
          fill
          sizes="(min-width: 1440px) 1332px, 100vw"
          fetchPriority="high"
          className="object-contain"
        />
      </div>
    </div>
  )
}

// Visible label stays "Play motion" (design); aria-pressed carries the on/off state.
export function MotionToggle({ label }: { label: string }) {
  const playing = useUiStore((s) => s.motionPlaying)
  const toggleMotion = useUiStore((s) => s.toggleMotion)
  return (
    <button
      type="button"
      onClick={toggleMotion}
      aria-pressed={playing}
      className="inline-flex shrink-0 items-center gap-[10px] font-mono text-mono-figure text-foreground lg:gap-[14px]"
    >
      {label}
      <span aria-hidden="true" className="flex h-[10px] w-[7px] justify-between">
        {playing ? (
          <>
            <span className="w-[2px] bg-current" />
            <span className="w-[2px] bg-current" />
          </>
        ) : (
          <span className="size-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-current" />
        )}
      </span>
    </button>
  )
}
