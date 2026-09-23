"use client"

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import { useRouter } from "next/navigation"
import type { ReactNode } from "react"
import { closeButtonClass } from "./CloseButton"
import { CloseIcon } from "./icons"

// Wraps an intercepted route in a Base UI dialog: focus trap, Esc and scroll lock come from Base UI; closing goes back in history.
export function RouteModal({ children, labelledBy }: { children: ReactNode; labelledBy: string }) {
  const router = useRouter()
  return (
    <DialogPrimitive.Root open onOpenChange={(open) => !open && router.back()}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Backdrop className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity duration-300 ease-fenon data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
        <DialogPrimitive.Popup
          aria-labelledby={labelledBy}
          className="fixed top-1/2 left-1/2 z-50 max-h-[calc(100dvh-48px)] w-[min(760px,calc(100vw-2*var(--spacing-gutter)))] -translate-x-1/2 -translate-y-1/2 overflow-y-auto overscroll-contain outline-none transition-[opacity,scale] duration-300 ease-fenon data-[ending-style]:scale-[0.98] data-[ending-style]:opacity-0 data-[starting-style]:scale-[0.98] data-[starting-style]:opacity-0"
        >
          {children}
        </DialogPrimitive.Popup>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

export function ModalClose() {
  return (
    <DialogPrimitive.Close aria-label="Close" className={closeButtonClass}>
      <CloseIcon className="size-3" />
    </DialogPrimitive.Close>
  )
}
