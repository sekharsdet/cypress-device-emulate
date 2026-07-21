# Contributing

## Adding or updating a device

Devices live in `src/devices.ts` as plain data — no code changes needed elsewhere.

```ts
'Device Name': {
  viewport: { width, height },       // CSS pixels, i.e. what window.innerWidth reports
  deviceScaleFactor: number,         // window.devicePixelRatio
  isMobile: true,
  hasTouch: true,
  userAgent: '...',
}
```

Please cite a source for viewport/deviceScaleFactor in the PR description (a spec
page, a known viewport-reference site, or your own measurement on a real device).

`viewport` should be the browser **content** area (`window.innerWidth`/`innerHeight`),
not the raw device screen resolution — mobile browsers reserve space for a
persistent toolbar, so this is smaller than the marketing spec sheet. Look for a
reference that documents the content-area viewport specifically, not just the
device's screen resolution — the two are different, sometimes by a lot.

User-agent strings age — they embed OS and browser version numbers that go stale.
PRs that only refresh an existing entry's UA string to a current version are
welcome and don't need much justification beyond "this is what the device reports
today."

Landscape variants auto-generate from the portrait entry by swapping width/height
**only if you don't provide one** — and that swap is a rough approximation, not
real device behavior (the toolbar takes a different amount of space in landscape).
If your source has real per-orientation data, add an explicit `'Device landscape'`
entry yourself rather than relying on the swap — see any multi-word entry (e.g.
`'iPhone 16 landscape'`) in `src/devices.ts` for the pattern.

This library covers phones and tablets only — desktop browser profiles are out of
scope.

## Adding a new CDP-backed capability (geolocation, timezone, locale, ...)

`DeviceDescriptor` in `src/types.ts` already has optional `locale`, `timezoneId`,
and `geolocation` fields wired through `cy.emulate()` in `src/commands.ts`. If
you're adding a new override, make sure `cy.resetEmulation()` in the same file also
clears it — the auto-reset behavior in `src/index.ts` is the whole point of this
library; an override that isn't reset is a bug, not a feature.

Two non-obvious CDP traps found while verifying `locale`/`geolocation` (both fixed,
but worth knowing if you touch this code):

- **A CDP override "succeeding" (no error) doesn't mean it did what you think.**
  `Emulation.setLocaleOverride` only affects `Intl`-driven formatting
  (`Intl.NumberFormat`, `Date#toLocaleString`) — it does **not** change
  `navigator.language`. That needs `Network.setUserAgentOverride`'s
  `acceptLanguage` param instead. Verify what a new override actually changes by
  reading it back from `window` in a real test, not just by confirming the CDP
  call didn't throw.
- **Permission-gated APIs need `Browser.grantPermissions`, not just the override.**
  `Emulation.setGeolocationOverride` alone leaves `getCurrentPosition()` hanging
  indefinitely (no success or error callback ever fires) because the Permissions
  API still gates it. Match it with `Browser.grantPermissions` in `cy.emulate()`
  and `Browser.resetPermissions` in `cy.resetEmulation()` — same pattern applies
  to any future capability that goes through a browser permission (camera, clipboard,
  notifications, ...).
- **`Emulation.setDeviceMetricsOverride` doesn't infer `screen.orientation` from
  width vs. height — you must pass `screenOrientation` explicitly.** Without it,
  Chrome defaults to `landscape-primary` regardless of the actual viewport shape —
  verified a *portrait* device reporting `landscape-primary` before this was added.
  `commands.ts`'s `screenOrientationFor()` derives the correct value from the
  viewport being applied; any new code path that calls
  `Emulation.setDeviceMetricsOverride` directly (rather than going through
  `applyDescriptor()`) needs to include it too, or this regresses silently.

Both `cy.emulate()` and `cy.rotate()` go through the same `applyDescriptor()`
function in `src/commands.ts` — add new CDP-backed capabilities there, not by
duplicating logic in one or the other, or they'll drift apart.

## Running the test suite

```bash
npm install
npm run build
npm run cy:run   # requires Google Chrome installed locally
```
