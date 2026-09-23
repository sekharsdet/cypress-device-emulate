import { assertChromiumFamily } from './commands'
import { sendCdpCommand } from './cdp'

export interface NetworkConditions {
  offline: boolean
  latency: number
  downloadThroughput: number
  uploadThroughput: number
}

// Matches Chrome DevTools' own Network throttling presets (values in ms / bytes-per-
// second), so behavior here matches what a developer sees when they pick "Slow 3G"
// or "Fast 3G" in DevTools by hand.
const NETWORK_PRESETS: Record<string, NetworkConditions> = {
  offline: { offline: true, latency: 0, downloadThroughput: 0, uploadThroughput: 0 },
  'slow-3g': {
    offline: false,
    latency: 400,
    downloadThroughput: ((500 * 1000) / 8) * 0.8,
    uploadThroughput: ((500 * 1000) / 8) * 0.8,
  },
  'fast-3g': {
    offline: false,
    latency: 150,
    downloadThroughput: ((1.6 * 1000 * 1000) / 8) * 0.9,
    uploadThroughput: ((750 * 1000) / 8) * 0.9,
  },
}

type NetworkPreset = keyof typeof NETWORK_PRESETS

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Throttle network conditions for the current test via
       * `Network.emulateNetworkConditions` — a named preset (`'offline'`,
       * `'slow-3g'`, `'fast-3g'`) or a custom conditions object. Cleared
       * automatically by `cy.resetEmulation()`, same as every other override this
       * library applies. Deliberately not part of `DeviceDescriptor`/`cy.emulate()`:
       * network conditions are a test-environment concern, not a device-identity
       * property — a real iPhone isn't inherently "3G".
       */
      throttleNetwork(conditions: NetworkPreset | NetworkConditions): Chainable<null>
      /**
       * Throttle CPU for the current test via `Emulation.setCPUThrottlingRate` — a
       * slowdown multiplier (`4` means 4x slower than the host machine). Cleared
       * automatically by `cy.resetEmulation()`.
       */
      throttleCpu(rate: number): Chainable<null>
    }
  }
}

function resolveNetworkConditions(conditions: NetworkPreset | NetworkConditions): NetworkConditions {
  if (typeof conditions !== 'string') {
    return conditions
  }

  const preset = NETWORK_PRESETS[conditions]
  if (!preset) {
    throw new Error(
      `cy-device-emulate: unknown network preset "${conditions}". Available presets: ` +
        `${Object.keys(NETWORK_PRESETS).join(', ')}, or pass a custom conditions object.`
    )
  }
  return preset
}

Cypress.Commands.add('throttleNetwork', (conditions: NetworkPreset | NetworkConditions) => {
  assertChromiumFamily('cy.throttleNetwork')

  const resolved = resolveNetworkConditions(conditions)

  Cypress.log({
    name: 'throttleNetwork',
    displayName: 'throttle network',
    message: typeof conditions === 'string' ? conditions : 'custom conditions',
    consoleProps: () => ({ conditions: resolved }),
  })

  return sendCdpCommand('Network.emulateNetworkConditions', { ...resolved })
})

Cypress.Commands.add('throttleCpu', (rate: number) => {
  assertChromiumFamily('cy.throttleCpu')

  Cypress.log({ name: 'throttleCpu', displayName: 'throttle cpu', message: `${rate}x` })

  return sendCdpCommand('Emulation.setCPUThrottlingRate', { rate })
})

export {}
