# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/) (though
it hasn't reached 1.0.0 yet, so breaking changes may land in a 0.x release).

## [Unreleased]

## [0.1.2] - 2026-08-03

### Added

- README: demo GIF recorded from a real Cypress run, showing the login flow
  across an iPhone 16 (portrait, then rotated live to landscape), a Galaxy
  S25, and an iPad Pro 11.

## [0.1.1] - 2026-08-02

### Changed

- README: added npm/CI/license badges and a `cy.viewport()` vs `cy.emulate()`
  comparison table.
- `package.json`: expanded `keywords` for better npm search discoverability.

## [0.1.0] - 2026-07-20

### Added

- `cy.emulate(device)` — sets viewport, device pixel ratio, the mobile flag,
  touch support, user agent, and screen orientation via the Chrome DevTools
  Protocol, correctly cascading through `hover`/`pointer`/`max-width` CSS media
  queries.
- `cy.rotate(orientation)` — rotates the currently emulated device to
  `'portrait'` or `'landscape'`, firing a real `orientationchange` event and
  updating `window.screen.orientation`, not just resizing.
- `cy.resetEmulation()` — clears all emulation overrides, called automatically
  after every test to prevent state leaking across tests.
- `devices` catalog: ~83 phones and tablets (Android phones/tablets/foldables,
  iPhone, iPad), each with a ` landscape` variant.
- Optional `locale`, `timezoneId`, and `geolocation` overrides on a custom
  `DeviceDescriptor`.
- Full TypeScript types for `DeviceDescriptor`, `DeviceName`, and `Geolocation`.

[Unreleased]: https://github.com/sekharsdet/cypress-device-emulate/compare/v0.1.2...HEAD
[0.1.2]: https://github.com/sekharsdet/cypress-device-emulate/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/sekharsdet/cypress-device-emulate/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/sekharsdet/cypress-device-emulate/releases/tag/v0.1.0
