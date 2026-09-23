"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { useStore } from "zustand"
import { createUiStore, type UiStore } from "@/lib/stores/ui-store"
import { readTheme } from "@/lib/theme"

type UiStoreApi = ReturnType<typeof createUiStore>

const UiStoreContext = createContext<UiStoreApi | null>(null)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [store] = useState(() => createUiStore())

  useEffect(() => {
    // The pre-hydration script already set the theme class; mirror it into the store.
    const { syncTheme } = store.getState()
    syncTheme(readTheme())
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (reducedMotion.matches) store.setState({ motionPlaying: false })
  }, [store])

  return <UiStoreContext value={store}>{children}</UiStoreContext>
}

export function useUiStore<T>(selector: (state: UiStore) => T): T {
  const store = useContext(UiStoreContext)
  if (!store) throw new Error("useUiStore must be used within StoreProvider")
  return useStore(store, selector)
}
