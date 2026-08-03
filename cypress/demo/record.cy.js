// Demo-only spec, not part of the test suite (lives outside cypress/e2e so it's
// excluded from the default specPattern and CI). Run via `npm run demo:record`
// to produce a video for the README. cy.wait() calls here exist purely for
// visual pacing on the recording — not something a real test should do.
describe('cypress-device-emulate demo', () => {
  const login = () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="open-menu"]').should('be.visible')
    cy.wait(600)
    cy.get('#react-burger-menu-btn').click()
    cy.wait(900)
  }

  it('iPhone 16 (portrait)', () => {
    cy.emulate('iPhone 16')
    cy.visit('/')
    cy.wait(400)
    login()
  })

  it('iPhone 16 (rotated to landscape live, mid-session)', () => {
    cy.emulate('iPhone 16')
    cy.visit('/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.wait(500)
    cy.rotate('landscape')
    cy.wait(900)
    cy.get('#react-burger-menu-btn').click()
    cy.wait(900)
  })

  it('Galaxy S25 (Android)', () => {
    cy.emulate('Galaxy S25')
    cy.visit('/')
    cy.wait(400)
    login()
  })

  it('iPad Pro 11 (tablet)', () => {
    cy.emulate('iPad Pro 11')
    cy.visit('/')
    cy.wait(400)
    login()
  })
})
