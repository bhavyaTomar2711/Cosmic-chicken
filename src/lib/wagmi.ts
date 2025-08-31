import { http, createConfig } from 'wagmi'
import { defineChain } from 'viem'

// Define Flow EVM Testnet
export const flowTestnet = defineChain({
  id: 545,
  name: 'Flow EVM Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'FLOW',
    symbol: 'FLOW',
  },
  rpcUrls: {
    default: {
      http: ['https://testnet.evm.nodes.onflow.org'],
    },
  },
  blockExplorers: {
    default: { name: 'Flowscan', url: 'https://evm-testnet.flowscan.io' },
  },
  testnet: true,
})

export const config = createConfig({
  chains: [flowTestnet],
  transports: {
    [flowTestnet.id]: http(),
  },
})