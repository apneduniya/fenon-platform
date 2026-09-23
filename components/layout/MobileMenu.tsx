"use client"

import Link from "next/link"
import { useEffect, useId, useState } from "react"
import type { Link as LinkContent } from "@/lib/schemas/content"

export function MobileMenu({ items }: { items: readonly LinkContent[] }) {
  const [open, setOpen] = useState(false)
  const panelId = useId()

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="text-body"
      >
        Menu
      </button>
      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-[calc(var(--spacing-gutter)+28px)] top-full z-40 mt-7 rounded-2xl bg-nav px-6 py-[10px] text-nav-foreground"
      >
        <ul className="flex flex-wrap gap-x-[22px] gap-y-[38px] py-[14px]">
          {items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setOpen(false)} className="text-lede">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
