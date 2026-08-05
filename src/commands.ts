import { sendCdpCommand, sendOptionalCdpCommand } from './cdp'
import { devices } from './devices'
import type { DeviceDescriptor } from './types'

type Orientation = 'portrait' | 'landscape'

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Emulate a device by name (see `devices` catalog) or a custom DeviceDescriptor.
       * Sets viewport, devicePixelRatio, the mobile flag (so hover/pointer media
       * queries flip correctly), touch support, user agent, and screen orientation.
       */
      emulate(device: string | DeviceDescriptor): Chainable<DeviceDescriptor>
      /**
       * Rotate the currently emulated device to `'portrait'` or `'landscape'`,
       * firing a real `orientationchange` event and updating `screen.orientation`
       * — not just resizing the viewport. Requires `cy.emulate()` to have been
       * called first in the same test. For a named catalog device, uses that
       * device's real landscape/portrait counterpart from `devices` (not a naive
       * width/height swap) whenever one exists; for a custom descriptor, swaps
       * width/height since there's no catalog entry to look up.
       */
      rotate(orientation: Orientation): Chainable<DeviceDescriptor>
      /**
       * Clear all emulation overrides and restore the configured desktop viewport.
       * Called automatically after every test unless auto-reset is disabled — see README.
       */
      resetEmulation(): Chainable<null>
    }
  }
}

function resolveDescriptor(device: string | DeviceDescriptor): DeviceDescriptor {
  if (typeof device !== 'string') {
    return device
  }

  const descriptor = devices[device]
  if (!descriptor) {
    const available = Object.keys(devices)
      .filter((name) => !name.endsWith(' landscape'))
      .join(', ')
    throw new Error(
      `cy-device-emulate: unknown device "${device}". Available devices: ${available}. ` +
        'Import { devices } from "cy-device-emulate" for the full list (including " landscape" variants), ' +
        'or pass a custom DeviceDescriptor object instead of a name.'
    )
  }
  return descriptor
}

function assertChromiumFamily(command: string): void {
  const family = Cypress.browser.family
  if (family !== 'chromium') {
    throw new Error(
      `cy-device-emulate: ${command}() requires a Chromium-family browser (Chrome, Edge, or Electron). ` +
        `Detected "${Cypress.browser.name}" (family "${family}"). Firefox dropped Chrome DevTools Protocol ` +
        'support, so this library has no equivalent emulation path there — see the README for details.'
    )
  }
}

/** CDP's screen.orientation enum + angle, derived from the viewport's own aspect
 * ratio. Without this, Emulation.setDeviceMetricsOverride leaves screen.orientation
 * at whatever Chrome's internal default is — verified empirically that this is
 * "landscape-primary" even for a portrait device, which is simply wrong for any
 * code that reads window.screen.orientation.type. */
function screenOrientationFor(width: number, height: number) {
  return width > height
    ? { type: 'landscapePrimary' as const, angle: 90 }
    : { type: 'portraitPrimary' as const, angle: 0 }
}

// Tracks whatever was last passed to cy.emulate() (name or custom descriptor) so
// cy.rotate() knows what to rotate — Cypress commands are otherwise stateless, so
// without this rotate() would have no way to know the current device. Set only by
// emulate(), never mutated by rotate() itself: rotate() always recomputes from this
// canonical value, so calling it repeatedly is idempotent rather than drifting.
let lastEmulatedDevice: string | DeviceDescriptor | null = null

function applyDescriptor(descriptor: DeviceDescriptor) {
  cy.viewport(descriptor.viewport.width, descriptor.viewport.height, { log: false })

  sendCdpCommand('Emulation.setDeviceMetricsOverride', {
    width: descriptor.viewport.width,
    height: descriptor.viewport.height,
    deviceScaleFactor: descriptor.deviceScaleFactor,
    mobile: descriptor.isMobile,
    screenOrientation: screenOrientationFor(descriptor.viewport.width, descriptor.viewport.height),
  })

  sendCdpCommand('Emulation.setTouchEmulationEnabled', {
    enabled: descriptor.hasTouch,
    // CDP requires 1-16 regardless of `enabled` — 0 is rejected even when touch
    // emulation is being turned off, so a non-touch custom descriptor (no catalog
    // entry currently sets hasTouch: false — this library is mobile-only) still
    // needs a valid placeholder here.
    maxTouchPoints: descriptor.hasTouch ? (descriptor.maxTouchPoints ?? 5) : 1,
  })

  sendCdpCommand('Emulation.setEmitTouchEventsForMouse', {
    enabled: descriptor.hasTouch,
    configuration: descriptor.isMobile ? 'mobile' : 'desktop',
  })

  sendCdpCommand('Network.setUserAgentOverride', {
    userAgent: descriptor.userAgent,
    // `Emulation.setLocaleOverride` below only affects Intl-driven formatting
    // (Intl.NumberFormat, Date#toLocaleString, ...) — it does NOT change
    // navigator.language/navigator.languages. That's controlled by this
    // acceptLanguage param instead (verified empirically: setLocaleOverride
    // alone left navigator.language at 'en-US').
    ...(descriptor.locale ? { acceptLanguage: descriptor.locale } : {}),
  })

  if (descriptor.locale) {
    sendCdpCommand('Emulation.setLocaleOverride', { locale: descriptor.locale })
  }

  if (descriptor.timezoneId) {
    sendCdpCommand('Emulation.setTimezoneOverride', { timezoneId: descriptor.timezoneId })
  }

  if (descriptor.geolocation) {
    // Emulation.setGeolocationOverride alone isn't enough: navigator.geolocation
    // .getCurrentPosition() still goes through the Permissions API, and without
    // this grant it hangs indefinitely (no success, no error, no timeout) rather
    // than doing anything visibly wrong — verified empirically. Omitting `origin`
    // grants for the whole browser context, since the target site isn't known yet
    // at emulate()-time (this typically runs before cy.visit()). Best-effort: the
    // `Browser.*` domain isn't supported in Cypress's Electron browser, so this
    // silently no-ops there instead of failing the test — see cdp.ts.
    sendOptionalCdpCommand('Browser.grantPermissions', { permissions: ['geolocation'] })
    sendCdpCommand('Emulation.setGeolocationOverride', {
      // CDP requires `accuracy` even though it's optional on Geolocation — omitting
      // it doesn't error, it silently makes getCurrentPosition() fail with
      // POSITION_UNAVAILABLE instead of returning a position (verified empirically).
      accuracy: 1,
      ...descriptor.geolocation,
    })
  }

  return cy.wrap(descriptor, { log: false })
}

Cypress.Commands.add('emulate', (device: string | DeviceDescriptor) => {
  // Fail fast with an actionable message instead of letting a raw, opaque CDP
  // protocol error surface from deep inside Cypress's automation layer — verified
  // that without this guard, Firefox produces "An unknown error has occurred:
  // [object Object]" with no indication of what's actually wrong.
  assertChromiumFamily('cy.emulate')

  const descriptor = resolveDescriptor(device)
  lastEmulatedDevice = device

  Cypress.log({
    name: 'emulate',
    displayName: 'emulate',
    message: typeof device === 'string' ? device : 'custom device',
    consoleProps: () => ({ descriptor }),
  })

  return applyDescriptor(descriptor)
})

Cypress.Commands.add('rotate', (orientation: Orientation) => {
  assertChromiumFamily('cy.rotate')

  if (lastEmulatedDevice === null) {
    throw new Error('cy-device-emulate: cy.rotate() requires cy.emulate() to have been called first in this test.')
  }

  let descriptor: DeviceDescriptor
  if (typeof lastEmulatedDevice === 'string') {
    const portraitName = lastEmulatedDevice.endsWith(' landscape')
      ? lastEmulatedDevice.slice(0, -' landscape'.length)
      : lastEmulatedDevice
    const targetName = orientation === 'landscape' ? `${portraitName} landscape` : portraitName
    // Should always exist: every mobile catalog entry has a ' landscape' sibling
    // (real per-orientation data where available, naive-swap fallback otherwise —
    // see src/devices.ts), merged into `devices` at module load time. Guarded
    // explicitly anyway rather than trusting that invariant blindly — a future
    // data change that breaks it should surface as a clear error here, not a
    // cryptic "Cannot read properties of undefined" inside applyDescriptor().
    const found = devices[targetName]
    if (!found) {
      throw new Error(
        `cy-device-emulate: cy.rotate('${orientation}') could not find "${targetName}" in the device catalog. ` +
          'This should not happen for a built-in device — please file an issue.'
      )
    }
    descriptor = found
  } else {
    // No catalog to consult for a custom descriptor — swap width/height instead.
    // Always computed from the ORIGINAL descriptor passed to emulate(), not the
    // current live viewport, so repeated cy.rotate() calls are idempotent rather
    // than drifting.
    const [short, long] = [lastEmulatedDevice.viewport.width, lastEmulatedDevice.viewport.height].sort((a, b) => a - b)
    descriptor = {
      ...lastEmulatedDevice,
      viewport: orientation === 'portrait' ? { width: short, height: long } : { width: long, height: short },
    }
  }

  Cypress.log({
    name: 'rotate',
    displayName: 'rotate',
    message: orientation,
    consoleProps: () => ({ descriptor }),
  })

  return applyDescriptor(descriptor)
})

Cypress.Commands.add('resetEmulation', () => {
  Cypress.log({ name: 'resetEmulation', displayName: 'reset emulation' })

  lastEmulatedDevice = null

  // resetEmulation() runs automatically after EVERY test via the afterEach hook
  // in src/index.ts — including specs that never call cy.emulate() at all. On a
  // non-Chromium browser this must no-op quietly rather than throw: otherwise
  // merely importing this library breaks every test in a Firefox run, even ones
  // that don't use it (verified: this was happening before this guard existed).
  if (Cypress.browser.family !== 'chromium') {
    return cy.wrap(null, { log: false })
  }

  sendCdpCommand('Emulation.clearDeviceMetricsOverride', {})
  sendCdpCommand('Emulation.setTouchEmulationEnabled', { enabled: false })
  sendCdpCommand('Emulation.setEmitTouchEventsForMouse', { enabled: false })
  sendCdpCommand('Network.setUserAgentOverride', { userAgent: '' })
  sendCdpCommand('Emulation.clearGeolocationOverride', {})
  // Also revokes the geolocation permission grant made in cy.emulate() — without
  // this, a device with `geolocation` set leaves the permission granted globally
  // for every later test in the run, not just device signals like UA/viewport.
  // Best-effort (see cdp.ts): must not throw here, since this runs in the global
  // afterEach for every test, including ones on browsers where `Browser.*` isn't
  // supported (Electron) and ones that never touched geolocation at all — a hard
  // failure here would break every single test's cleanup, not just geolocation's.
  sendOptionalCdpCommand('Browser.resetPermissions', {})
  sendCdpCommand('Emulation.setLocaleOverride', {})
  sendCdpCommand('Emulation.setTimezoneOverride', { timezoneId: '' })

  return cy.viewport(Cypress.config('viewportWidth'), Cypress.config('viewportHeight'), { log: false })
})

export {}
