export interface Geolocation {
  latitude: number
  longitude: number
  /** Meters. Defaults to 1 if omitted — CDP requires a value, and without one
   * navigator.geolocation.getCurrentPosition() fails with POSITION_UNAVAILABLE
   * instead of returning a position. */
  accuracy?: number
}

export interface DeviceDescriptor {
  /** CSS pixel viewport, i.e. what `window.innerWidth`/`innerHeight` report. */
  viewport: {
    width: number
    height: number
  }
  /** Ratio of physical pixels to CSS pixels (`window.devicePixelRatio`). */
  deviceScaleFactor: number
  /** Chromium's "mobile" flag: enables the mobile viewport meta-tag behavior. */
  isMobile: boolean
  /** Whether the Touch API is exposed (`'ontouchstart' in window`, `navigator.maxTouchPoints`). */
  hasTouch: boolean
  /** Only meaningful when hasTouch is true. Defaults to 5 if omitted. */
  maxTouchPoints?: number
  userAgent: string
  locale?: string
  timezoneId?: string
  geolocation?: Geolocation
  /** `prefers-color-scheme`. */
  colorScheme?: 'light' | 'dark' | 'no-preference'
  /** `prefers-reduced-motion`. */
  reducedMotion?: 'reduce' | 'no-preference'
  /** `forced-colors`. */
  forcedColors?: 'active' | 'none'
}

export type DeviceName = string
