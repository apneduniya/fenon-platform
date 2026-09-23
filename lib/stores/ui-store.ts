import { createStore } from "zustand/vanilla"
import { applyTheme, type Theme } from "@/lib/theme"

export interface UiState {
  theme: Theme
  motionPlaying: boolean
}

export interface UiActions {
  syncTheme: (theme: Theme) => void
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  toggleMotion: () => void
}

export type UiStore = UiState & UiActions

const defaultState: UiState = { theme: "light", motionPlaying: true }

// One store per provider instance (Zustand's Next.js guidance), never a module singleton.
export function createUiStore(initState: Partial<UiState> = {}) {
  return createStore<UiStore>()((set, get) => ({
    ...defaultState,
    ...initState,
    syncTheme: (theme) => set({ theme }),
    setTheme: (theme) => {
      applyTheme(theme)
      set({ theme })
    },
    toggleTheme: () => get().setTheme(get().theme === "dark" ? "light" : "dark"),
    toggleMotion: () => set((state) => ({ motionPlaying: !state.motionPlaying })),
  }))
}
