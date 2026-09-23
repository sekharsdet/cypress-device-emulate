import '../../dist/index.js'

describe('cy.throttleNetwork / cy.throttleCpu', () => {
  it('flips navigator.onLine under the offline preset', () => {
    cy.visit('/')
    cy.throttleNetwork('offline')

    cy.window().should((win) => {
      expect(win.navigator.onLine).to.eq(false)
    })
  })

  it('accepts a custom network conditions object', () => {
    cy.visit('/')
    cy.throttleNetwork({ offline: false, latency: 400, downloadThroughput: 50000, uploadThroughput: 50000 })

    cy.window().should((win) => {
      expect(win.navigator.onLine).to.eq(true)
    })
  })

  it('resolves cy.throttleCpu() without error', () => {
    // CPU throttling has no directly observable JS property to assert against —
    // same limitation this library already accepts for other write-only CDP
    // overrides (e.g. Emulation.setTimezoneOverride). Just confirm the command
    // completes cleanly.
    cy.visit('/')
    cy.throttleCpu(4)
  })

  it('restores navigator.onLine after cy.resetEmulation()', () => {
    cy.visit('/')
    cy.throttleNetwork('offline')
    cy.resetEmulation()

    cy.window().should((win) => {
      expect(win.navigator.onLine).to.eq(true)
    })
  })

  it('throws a clear, actionable error for an unknown network preset', (done) => {
    cy.on('fail', (err) => {
      expect(err.message).to.include('unknown network preset')
      expect(err.message).to.include('carrier-pigeon')
      done()
    })
    cy.throttleNetwork('carrier-pigeon')
  })

  it('throws a clear error on a non-Chromium browser instead of a raw CDP failure', (done) => {
    cy.stub(Cypress, 'browser').value({ name: 'firefox', family: 'firefox' })
    cy.on('fail', (err) => {
      expect(err.message).to.include('cy.throttleNetwork() requires a Chromium-family browser')
      expect(err.message).to.include('firefox')
      done()
    })
    cy.throttleNetwork('offline')
  })
})
