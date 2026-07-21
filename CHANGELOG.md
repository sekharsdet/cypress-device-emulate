# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/) (though
it hasn't reached 1.0.0 yet, so breaking changes may land in a 0.x release).

## [Unreleased]

## [0.1.0] - 2026-07-20

### Added

- `cy.emulate(device)` — sets viewport, device pixel ratio, the mobile flag,
  touch support, and user agent via the Chrome DevTools Protocol, correctly
  cascading through `hover`/`pointer`/`max-width` CSS media queries.
- `cy.resetEmulation()` — clears all emulation overrides, called automatically
  after every test to prevent state leaking across tests.
- `devices` catalog: ~83 phones and tablets (Android phones/tablets/foldables,
  iPhone, iPad), each with a ` landscape` variant.
- Optional `locale`, `timezoneId`, and `geolocation` overrides on a custom
  `DeviceDescriptor`.
- Full TypeScript types for `DeviceDescriptor`, `DeviceName`, and `Geolocation`.

[Unreleased]: https://github.com/qesekhar/cypress-device-emulate/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/qesekhar/cypress-device-emulate/releases/tag/v0.1.0
