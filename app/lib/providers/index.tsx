"use client"

import { farcasterMiniApp as miniAppConnector } from "@farcaster/miniapp-wagmi-connector"
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi"
import { base, mainnet } from "@reown/appkit/networks"
import { createAppKit } from "@reown/appkit/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { CreateConnectorFn, WagmiProvider } from "wagmi"

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "YOUR_PROJECT_ID"

const connectors: CreateConnectorFn[] = [miniAppConnector()]
const networks = [mainnet, base]
const wagmiAdapter = new WagmiAdapter({ networks, projectId, ssr: false, connectors })

createAppKit({
  adapters: [wagmiAdapter],
  // @ts-ignore
  networks,
  projectId,
  features: { analytics: false },
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 30,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
})

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
