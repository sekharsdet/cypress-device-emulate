import './commands'

/**
 * CDP emulation overrides are session-level in Chrome, not per-test — a test that
 * never calls cy.emulate() will otherwise inherit mobile UA/viewport/touch state
 * left over from a previous test in the same run. Reset automatically by default;
 * opt out per-project with `Cypress.env('cyDeviceEmulateAutoReset', false)` in
 * cypress.config.js if you want to manage resets yourself.
 */
afterEach(function cyDeviceEmulateAutoReset() {
  if (Cypress.env('cyDeviceEmulateAutoReset') === false) {
    return
  }
  cy.resetEmulation()
})

export { devices } from './devices'
export type { DeviceDescriptor, DeviceName, Geolocation } from './types'
