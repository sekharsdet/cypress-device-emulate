/**
 * Cypress has no first-class device-emulation API. This sends raw Chrome DevTools
 * Protocol commands through Cypress's undocumented-but-stable automation hatch —
 * the same mechanism community tools like cypress-cdp use. Chrome/Edge/Electron
 * only: Firefox dropped CDP support and Cypress talks to it over Marionette instead,
 * so there is no equivalent path there.
 */
export function sendCdpCommand(command: string, params: Record<string, unknown> = {}) {
  return cy.then(() => Cypress.automation('remote:debugger:protocol', { command, params }))
}

/**
 * Same as sendCdpCommand, but for commands that aren't supported everywhere and
 * shouldn't fail the whole test/afterEach hook when unavailable — currently only
 * the `Browser.*` permission commands, which throw "Browser context management is
 * not supported" in Cypress's bundled Electron browser (verified empirically;
 * everything under `Emulation.*`/`Network.*` works fine there). Swallowing this
 * is harmless in practice: Electron doesn't gate navigator.geolocation behind the
 * Permissions API the way real Chrome does, so getCurrentPosition() works fine
 * even when the grant itself silently no-ops (verified empirically).
 */
export function sendOptionalCdpCommand(command: string, params: Record<string, unknown> = {}) {
  return cy.then(() =>
    Cypress.automation('remote:debugger:protocol', { command, params }).catch(() => {
      // Best-effort: unsupported in this browser (e.g. Electron's `Browser.*`
      // domain). Not a real failure — nothing here is load-bearing for the core
      // viewport/UA/touch emulation this library exists for.
    })
  )
}
