# Security Policy

## Supported Versions

This project is pre-1.0. Only the latest published version on npm receives
security fixes.

| Version | Supported |
| ------- | --------- |
| latest 0.x | ✅ |
| older 0.x  | ❌ |

## Reporting a Vulnerability

Please do **not** open a public GitHub issue for security vulnerabilities.

Instead, email **qesekhar@gmail.com** with:

- A description of the vulnerability and its potential impact
- Steps to reproduce (a minimal repro is ideal)
- Any suggested fix, if you have one

You should expect an initial response within a few days. Once a fix is
available, it will be released as a patch version and the reporter credited
(unless anonymity is requested).

## Scope

This library sends Chrome DevTools Protocol commands through Cypress's browser
automation hatch to modify emulated browser signals (viewport, user agent,
touch, locale, geolocation) for testing purposes. It does not handle
credentials, make network requests on your behalf beyond what Cypress itself
does, or execute arbitrary remote code. Reports about the device-catalog data
itself (an incorrect viewport value, a stale user-agent string) are regular bugs
— please file those as normal GitHub issues, not security reports.
