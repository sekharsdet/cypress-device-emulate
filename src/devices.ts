import type { DeviceDescriptor } from './types'

/**
 * Seed catalog. Every entry's viewport/deviceScaleFactor was cross-checked against
 * public device-spec references at the time it was added — see CONTRIBUTING.md
 * for how to submit or correct an entry. User-agent strings age (they embed OS/
 * browser version numbers), so treat these as "current as of last update", not
 * eternally accurate — PRs to refresh them are welcome and expected.
 *
 * `viewport` is the *content* area — window.innerWidth/innerHeight — not the raw
 * device screen resolution. Mobile browsers reserve part of the screen for a
 * persistent UI (bottom toolbar, address bar), so this is smaller than the
 * marketing spec sheet for phones/tablets. Landscape variants use real
 * per-orientation reference data where available, not a naive width/height swap
 * of the portrait entry — the toolbar takes a different amount of space in
 * landscape, so swapping would be wrong.
 *
 * Mobile only: this library emulates phones and tablets, not desktop browsers.
 */
const baseDevices: Record<string, DeviceDescriptor> = {
  // --- Android phones (Chromium-native, full fidelity) ---
  'Pixel 2': {
    viewport: { width: 411, height: 731 },
    deviceScaleFactor: 2.625,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 2 landscape': {
    viewport: { width: 731, height: 411 },
    deviceScaleFactor: 2.625,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 2 XL': {
    viewport: { width: 411, height: 823 },
    deviceScaleFactor: 3.5,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 2 XL landscape': {
    viewport: { width: 823, height: 411 },
    deviceScaleFactor: 3.5,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 3': {
    viewport: { width: 393, height: 786 },
    deviceScaleFactor: 2.75,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 9; Pixel 3 Build/PQ1A.181105.017.A1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 3 landscape': {
    viewport: { width: 786, height: 393 },
    deviceScaleFactor: 2.75,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 9; Pixel 3 Build/PQ1A.181105.017.A1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 4': {
    viewport: { width: 353, height: 745 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 4 landscape': {
    viewport: { width: 745, height: 353 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 10; Pixel 4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 4a (5G)': {
    viewport: { width: 412, height: 765 },
    deviceScaleFactor: 2.63,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 11; Pixel 4a (5G)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 4a (5G) landscape': {
    viewport: { width: 840, height: 312 },
    deviceScaleFactor: 2.63,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 11; Pixel 4a (5G)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 5': {
    viewport: { width: 393, height: 727 },
    deviceScaleFactor: 2.75,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 5 landscape': {
    viewport: { width: 802, height: 293 },
    deviceScaleFactor: 2.75,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 6': {
    viewport: { width: 412, height: 839 },
    deviceScaleFactor: 2.625,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 12; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 6 landscape': {
    viewport: { width: 863, height: 360 },
    deviceScaleFactor: 2.625,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 12; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 6 Pro': {
    viewport: { width: 412, height: 816 },
    deviceScaleFactor: 3.5,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 12; Pixel 6 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 6 Pro landscape': {
    viewport: { width: 840, height: 360 },
    deviceScaleFactor: 3.5,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 12; Pixel 6 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 6a': {
    viewport: { width: 412, height: 839 },
    deviceScaleFactor: 2.625,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 12; Pixel 6a) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 6a landscape': {
    viewport: { width: 863, height: 360 },
    deviceScaleFactor: 2.625,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 12; Pixel 6a) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 7': {
    viewport: { width: 412, height: 839 },
    deviceScaleFactor: 2.625,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 14; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 7 landscape': {
    viewport: { width: 863, height: 360 },
    deviceScaleFactor: 2.625,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 14; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 7 Pro': {
    viewport: { width: 412, height: 816 },
    deviceScaleFactor: 3.5,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 13; Pixel 7 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 7 Pro landscape': {
    viewport: { width: 840, height: 360 },
    deviceScaleFactor: 3.5,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 13; Pixel 7 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 7a': {
    viewport: { width: 412, height: 839 },
    deviceScaleFactor: 2.625,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 13; Pixel 7a) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 7a landscape': {
    viewport: { width: 863, height: 360 },
    deviceScaleFactor: 2.625,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 13; Pixel 7a) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 8': {
    viewport: { width: 412, height: 839 },
    deviceScaleFactor: 2.625,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 8 landscape': {
    viewport: { width: 863, height: 360 },
    deviceScaleFactor: 2.625,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 8 Pro': {
    viewport: { width: 448, height: 921 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 8 Pro landscape': {
    viewport: { width: 945, height: 396 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 14; Pixel 8 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 8a': {
    viewport: { width: 412, height: 839 },
    deviceScaleFactor: 2.625,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 14; Pixel 8a) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 8a landscape': {
    viewport: { width: 863, height: 360 },
    deviceScaleFactor: 2.625,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 14; Pixel 8a) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 9': {
    viewport: { width: 360, height: 732 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 14; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 9 landscape': {
    viewport: { width: 756, height: 308 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 14; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 9 Pro': {
    viewport: { width: 427, height: 876 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 14; Pixel 9 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 9 Pro landscape': {
    viewport: { width: 900, height: 375 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 14; Pixel 9 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 9 Pro XL': {
    viewport: { width: 448, height: 921 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 14; Pixel 9 Pro XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 9 Pro XL landscape': {
    viewport: { width: 945, height: 396 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 14; Pixel 9 Pro XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 10': {
    viewport: { width: 360, height: 732 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 16; Pixel 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 10 landscape': {
    viewport: { width: 756, height: 308 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 16; Pixel 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 10 Pro': {
    viewport: { width: 427, height: 876 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 16; Pixel 10 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 10 Pro landscape': {
    viewport: { width: 900, height: 375 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 16; Pixel 10 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 10 Pro XL': {
    viewport: { width: 448, height: 921 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 16; Pixel 10 Pro XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Pixel 10 Pro XL landscape': {
    viewport: { width: 945, height: 396 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 16; Pixel 10 Pro XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Galaxy S5': {
    viewport: { width: 360, height: 640 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Galaxy S5 landscape': {
    viewport: { width: 640, height: 360 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Galaxy S8': {
    viewport: { width: 360, height: 740 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 7.0; SM-G950U Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Galaxy S8 landscape': {
    viewport: { width: 740, height: 360 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 7.0; SM-G950U Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Galaxy S9+': {
    viewport: { width: 320, height: 658 },
    deviceScaleFactor: 4.5,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 8.0.0; SM-G965U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Galaxy S9+ landscape': {
    viewport: { width: 658, height: 320 },
    deviceScaleFactor: 4.5,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 8.0.0; SM-G965U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Galaxy S24': {
    viewport: { width: 360, height: 780 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 14; SM-S921U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Galaxy S24 landscape': {
    viewport: { width: 780, height: 360 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 14; SM-S921U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Galaxy A55': {
    viewport: { width: 480, height: 1040 },
    deviceScaleFactor: 2.25,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 14; SM-A556B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Galaxy A55 landscape': {
    viewport: { width: 1040, height: 480 },
    deviceScaleFactor: 2.25,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 14; SM-A556B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },

  // --- Android tablets & foldables (Chromium-native, full fidelity) ---
  'Galaxy Tab S4': {
    viewport: { width: 712, height: 1138 },
    deviceScaleFactor: 2.25,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 8.1.0; SM-T837A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36',
  },
  'Galaxy Tab S4 landscape': {
    viewport: { width: 1138, height: 712 },
    deviceScaleFactor: 2.25,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 8.1.0; SM-T837A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36',
  },
  'Galaxy Tab S9': {
    viewport: { width: 640, height: 1024 },
    deviceScaleFactor: 2.5,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 14; SM-X710) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36',
  },
  'Galaxy Tab S9 landscape': {
    viewport: { width: 1024, height: 640 },
    deviceScaleFactor: 2.5,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 14; SM-X710) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36',
  },
  'Galaxy Z Flip 6': {
    viewport: { width: 360, height: 804 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 10; SM-F741U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Galaxy Z Flip 6 landscape': {
    viewport: { width: 828, height: 308 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 10; SM-F741U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  // Cover-screen entries (below, and 'Galaxy Z Flip 7 Cover') are wider than tall
  // in BOTH their portrait and landscape catalog entries — the small external
  // display on a folded flip phone doesn't have a conventional portrait "home"
  // shape the way a full phone screen does. This is real upstream data, not a
  // transcription error, but it means cy.rotate('portrait') on one of these
  // still reports screen.orientation.type as landscape-primary (derived purely
  // from width > height in commands.ts) — a known, inherent quirk of these two
  // specific devices, not a bug to "fix" by inventing data that doesn't exist.
  'Galaxy Z Flip 6 Cover': {
    viewport: { width: 360, height: 298 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 10; SM-F741U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Galaxy Z Flip 6 Cover landscape': {
    viewport: { width: 322, height: 308 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 10; SM-F741U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Galaxy Z Flip 7': {
    viewport: { width: 360, height: 764 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 10; SM-F761U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Galaxy Z Flip 7 landscape': {
    viewport: { width: 788, height: 308 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 10; SM-F761U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Galaxy Z Flip 7 Cover': {
    viewport: { width: 474, height: 448 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 10; SM-F761U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Galaxy Z Flip 7 Cover landscape': {
    viewport: { width: 472, height: 422 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 10; SM-F761U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Galaxy Z Fold 6': {
    viewport: { width: 928, height: 1004 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 10; SM-F956U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Galaxy Z Fold 6 landscape': {
    viewport: { width: 1028, height: 876 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 10; SM-F956U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Galaxy Z Fold 6 Cover': {
    viewport: { width: 484, height: 1112 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 10; SM-F956U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Galaxy Z Fold 6 Cover landscape': {
    viewport: { width: 1136, height: 432 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 10; SM-F956U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Galaxy Z Fold 7': {
    viewport: { width: 984, height: 1016 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 10; SM-F966U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Galaxy Z Fold 7 landscape': {
    viewport: { width: 1040, height: 932 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 10; SM-F966U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Galaxy Z Fold 7 Cover': {
    viewport: { width: 360, height: 764 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 10; SM-F966U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },
  'Galaxy Z Fold 7 Cover landscape': {
    viewport: { width: 788, height: 308 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 10; SM-F966U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Mobile Safari/537.36',
  },

  // --- iPhone (UA + viewport spoofed on Chromium, not real WebKit — see README) ---
  'iPhone 6': {
    viewport: { width: 375, height: 667 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/26.5 Mobile/15A372 Safari/604.1',
  },
  'iPhone 6 landscape': {
    viewport: { width: 667, height: 375 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/26.5 Mobile/15A372 Safari/604.1',
  },
  'iPhone 6 Plus': {
    viewport: { width: 414, height: 736 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/26.5 Mobile/15A372 Safari/604.1',
  },
  'iPhone 6 Plus landscape': {
    viewport: { width: 736, height: 414 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/26.5 Mobile/15A372 Safari/604.1',
  },
  'iPhone 7': {
    viewport: { width: 375, height: 667 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/26.5 Mobile/15A372 Safari/604.1',
  },
  'iPhone 7 landscape': {
    viewport: { width: 667, height: 375 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/26.5 Mobile/15A372 Safari/604.1',
  },
  'iPhone 7 Plus': {
    viewport: { width: 414, height: 736 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/26.5 Mobile/15A372 Safari/604.1',
  },
  'iPhone 7 Plus landscape': {
    viewport: { width: 736, height: 414 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/26.5 Mobile/15A372 Safari/604.1',
  },
  'iPhone 8': {
    viewport: { width: 375, height: 667 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/26.5 Mobile/15A372 Safari/604.1',
  },
  'iPhone 8 landscape': {
    viewport: { width: 667, height: 375 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/26.5 Mobile/15A372 Safari/604.1',
  },
  'iPhone 8 Plus': {
    viewport: { width: 414, height: 736 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/26.5 Mobile/15A372 Safari/604.1',
  },
  'iPhone 8 Plus landscape': {
    viewport: { width: 736, height: 414 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/26.5 Mobile/15A372 Safari/604.1',
  },
  'iPhone X': {
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/26.5 Mobile/15A372 Safari/604.1',
  },
  'iPhone X landscape': {
    viewport: { width: 812, height: 375 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/26.5 Mobile/15A372 Safari/604.1',
  },
  'iPhone XR': {
    viewport: { width: 414, height: 896 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone XR landscape': {
    viewport: { width: 896, height: 414 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone SE': {
    viewport: { width: 320, height: 568 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/26.5 Mobile/14E304 Safari/602.1',
  },
  'iPhone SE landscape': {
    viewport: { width: 568, height: 320 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/26.5 Mobile/14E304 Safari/602.1',
  },
  'iPhone 11': {
    viewport: { width: 414, height: 715 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 11 landscape': {
    viewport: { width: 800, height: 364 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 11 Pro': {
    viewport: { width: 375, height: 635 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 11 Pro landscape': {
    viewport: { width: 724, height: 325 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 11 Pro Max': {
    viewport: { width: 414, height: 715 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 11 Pro Max landscape': {
    viewport: { width: 808, height: 364 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 12': {
    viewport: { width: 390, height: 664 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 12 landscape': {
    viewport: { width: 750, height: 340 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 12 Mini': {
    viewport: { width: 375, height: 629 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 12 Mini landscape': {
    viewport: { width: 712, height: 325 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 12 Pro': {
    viewport: { width: 390, height: 664 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 12 Pro landscape': {
    viewport: { width: 750, height: 340 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 12 Pro Max': {
    viewport: { width: 428, height: 746 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 12 Pro Max landscape': {
    viewport: { width: 832, height: 378 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 13': {
    viewport: { width: 390, height: 664 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 13 landscape': {
    viewport: { width: 750, height: 342 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 13 Mini': {
    viewport: { width: 375, height: 629 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 13 Mini landscape': {
    viewport: { width: 712, height: 327 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 13 Pro': {
    viewport: { width: 390, height: 664 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 13 Pro landscape': {
    viewport: { width: 750, height: 342 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 13 Pro Max': {
    viewport: { width: 428, height: 746 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 13 Pro Max landscape': {
    viewport: { width: 832, height: 380 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone SE (3rd gen)': {
    viewport: { width: 375, height: 667 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/26.5 Mobile/19E241 Safari/602.1',
  },
  'iPhone SE (3rd gen) landscape': {
    viewport: { width: 667, height: 375 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 18_5 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/26.5 Mobile/19E241 Safari/602.1',
  },
  'iPhone 14': {
    viewport: { width: 390, height: 664 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 14 landscape': {
    viewport: { width: 750, height: 340 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 14 Plus': {
    viewport: { width: 428, height: 746 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 14 Plus landscape': {
    viewport: { width: 832, height: 378 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 14 Pro': {
    viewport: { width: 393, height: 660 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 14 Pro landscape': {
    viewport: { width: 734, height: 343 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 14 Pro Max': {
    viewport: { width: 430, height: 740 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 14 Pro Max landscape': {
    viewport: { width: 814, height: 380 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 15': {
    viewport: { width: 393, height: 659 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 15 landscape': {
    viewport: { width: 734, height: 343 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 15 Plus': {
    viewport: { width: 430, height: 739 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 15 Plus landscape': {
    viewport: { width: 814, height: 380 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 15 Pro': {
    viewport: { width: 393, height: 659 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 15 Pro landscape': {
    viewport: { width: 734, height: 343 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 15 Pro Max': {
    viewport: { width: 430, height: 739 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 15 Pro Max landscape': {
    viewport: { width: 814, height: 380 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 16': {
    viewport: { width: 393, height: 659 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 16 landscape': {
    viewport: { width: 734, height: 343 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 16 Plus': {
    viewport: { width: 430, height: 739 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 16 Plus landscape': {
    viewport: { width: 814, height: 380 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 16 Pro': {
    viewport: { width: 402, height: 681 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 16 Pro landscape': {
    viewport: { width: 756, height: 352 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 16 Pro Max': {
    viewport: { width: 440, height: 763 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 16 Pro Max landscape': {
    viewport: { width: 838, height: 390 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 16e': {
    viewport: { width: 390, height: 651 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 16e landscape': {
    viewport: { width: 726, height: 340 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 17': {
    viewport: { width: 402, height: 681 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 17 landscape': {
    viewport: { width: 756, height: 352 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 17 Pro': {
    viewport: { width: 402, height: 681 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 17 Pro landscape': {
    viewport: { width: 756, height: 352 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 17 Pro Max': {
    viewport: { width: 440, height: 763 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 17 Pro Max landscape': {
    viewport: { width: 838, height: 390 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 17e': {
    viewport: { width: 390, height: 651 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone 17e landscape': {
    viewport: { width: 726, height: 340 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone Air': {
    viewport: { width: 420, height: 719 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPhone Air landscape': {
    viewport: { width: 794, height: 370 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },

  // --- iPad (UA + viewport spoofed on Chromium, not real WebKit — see README) ---
  'iPad (gen 5)': {
    viewport: { width: 768, height: 1024 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPad (gen 5) landscape': {
    viewport: { width: 1024, height: 768 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPad (gen 6)': {
    viewport: { width: 768, height: 1024 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPad (gen 6) landscape': {
    viewport: { width: 1024, height: 768 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPad (gen 7)': {
    viewport: { width: 810, height: 1080 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPad (gen 7) landscape': {
    viewport: { width: 1080, height: 810 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPad (gen 11)': {
    viewport: { width: 656, height: 944 },
    deviceScaleFactor: 2.5,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/19E241 Safari/604.1',
  },
  'iPad (gen 11) landscape': {
    viewport: { width: 944, height: 656 },
    deviceScaleFactor: 2.5,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 18_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/19E241 Safari/604.1',
  },
  'iPad Mini': {
    viewport: { width: 768, height: 1024 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPad Mini landscape': {
    viewport: { width: 1024, height: 768 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPad Pro 11': {
    viewport: { width: 834, height: 1194 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },
  'iPad Pro 11 landscape': {
    viewport: { width: 1194, height: 834 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 12_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Mobile/15E148 Safari/604.1',
  },

  // --- Android phones (community-added, ahead of public reference data) ---
  // No public device-spec reference lists the Galaxy S25 line yet as of this
  // writing. These two entries use full device-screen dimensions (cross-checked
  // against manufacturer spec sheets), not the toolbar-reduced viewport convention
  // used elsewhere in this file — no toolbar-reduction number exists to cite yet.
  // Update these once an authoritative viewport reference is available.
  'Galaxy S25': {
    viewport: { width: 360, height: 780 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 15; SM-S931B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36',
  },
  'Galaxy S25 Ultra': {
    viewport: { width: 384, height: 824 },
    deviceScaleFactor: 3.75,
    isMobile: true,
    hasTouch: true,
    userAgent:
      'Mozilla/5.0 (Linux; Android 15; SM-S938B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36',
  },
}

/**
 * Auto-generates a ` landscape` sibling for every entry that doesn't already have
 * one of its own in `source`. Devices with real per-orientation reference data
 * (see the header comment above) already ship it directly and are skipped here;
 * this fallback only fires for community-added entries — like the Galaxy S25 pair
 * above — that don't have a cited landscape source yet.
 */
function withLandscapeVariants(source: Record<string, DeviceDescriptor>): Record<string, DeviceDescriptor> {
  const result: Record<string, DeviceDescriptor> = { ...source }
  for (const [name, descriptor] of Object.entries(source)) {
    if (name.endsWith(' landscape') || !descriptor.isMobile) {
      continue
    }
    const landscapeName = `${name} landscape`
    if (result[landscapeName]) {
      continue
    }
    result[landscapeName] = {
      ...descriptor,
      viewport: { width: descriptor.viewport.height, height: descriptor.viewport.width },
    }
  }
  return result
}

export const devices: Record<string, DeviceDescriptor> = withLandscapeVariants(baseDevices)
