import { devices } from '../../dist/index.js'

/**
 * Exercises every catalog entry through the real cy.emulate() -> CDP path, not
 * just a handful of hand-picked devices. Deliberately not de-duped against
 * emulate.cy.js's more detailed assertions on individual devices — this spec's
 * job is breadth (does every single entry actually apply without erroring and
 * land the right viewport), not depth.
 *
 * Visits the local fixture server, not the real site emulate.cy.js uses — this
 * loops over ~80 devices and shouldn't hammer a third-party site on every run.
 */
describe('cy.emulate catalog smoke test', () => {
  for (const [name, expected] of Object.entries(devices)) {
    it(`applies "${name}" without error and matches its viewport`, () => {
      cy.emulate(name)
      cy.visit('http://localhost:4599')

      cy.window().should((win) => {
        expect(win.innerWidth, 'innerWidth').to.eq(expected.viewport.width)
        expect(win.innerHeight, 'innerHeight').to.eq(expected.viewport.height)
        // Chrome stores deviceScaleFactor as a 32-bit float internally, so values
        // that aren't exactly representable (e.g. 2.63) round-trip with a tiny
        // drift (2.630000114440918) — a Chrome/CDP precision quirk, not a data bug.
        expect(win.devicePixelRatio, 'devicePixelRatio').to.be.closeTo(expected.deviceScaleFactor, 0.001)
        expect(win.navigator.userAgent, 'userAgent').to.eq(expected.userAgent)
        if (expected.hasTouch) {
          expect(win.navigator.maxTouchPoints, 'maxTouchPoints').to.be.greaterThan(0)
          expect('ontouchstart' in win, 'ontouchstart').to.eq(true)
        } else {
          expect('ontouchstart' in win, 'ontouchstart').to.eq(false)
        }
        // Every entry here is a phone/tablet (isMobile: true), so hover/pointer
        // must flip the same way a real touch device's browser would — this is
        // the actual reason this library exists over plain cy.viewport(), so it
        // needs to hold for every catalog entry, not just a couple of examples.
        expect(win.matchMedia('(hover: none)').matches, 'hover: none').to.eq(true)
        expect(win.matchMedia('(pointer: coarse)').matches, 'pointer: coarse').to.eq(true)
        expect(win.matchMedia(`(max-width: ${expected.viewport.width}px)`).matches, 'max-width matches viewport').to.eq(
          true
        )
        const expectedOrientation = expected.viewport.width > expected.viewport.height ? 'landscape-primary' : 'portrait-primary'
        expect(win.screen.orientation.type, 'screen.orientation.type').to.eq(expectedOrientation)
      })
    })
  }
})
