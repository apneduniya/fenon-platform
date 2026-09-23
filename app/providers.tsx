import type { ReactNode } from "react"
import { StoreProvider } from "@/components/providers/StoreProvider"

// Client providers live below this server boundary. Add QueryClientProvider here when client fetching is needed.
export function Providers({ children }: { children: ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>
}
