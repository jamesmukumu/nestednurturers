# Admin browser regressions

## Admin portal design system

The admin foundation in `resources/css/admin.css` is loaded after shared button
styles and shell styles in the application entry. Its document tokens and
PrimeReact overlay rules depend on `.admin-shell` being present. They stop
applying when navigating to authentication or public pages. Jodit keeps its
stylesheet inside each editor's shadow root.

The sidebar regression now expects 272px expanded and 72px collapsed widths,
13px navigation text, and the real pending-consultation shortcut. The old
notification badge and unwired header search are absent.

With the disposable account and browser settings below, run:

```powershell
node tests/browser/admin-sidebar.cjs
$env:PORTAL_TEST_ALLOW_WRITES = '1'
$env:PORTAL_TEST_ARTIFACTS = Join-Path $env:TEMP 'admin-portal-previews'
node tests/browser/admin-portal.cjs
```

The portal check requires a disposable database with an owned article, at least
one pending consultation, and enough consultations to fill two pages. It creates
categories and creates, updates and
deletes a temporary article; it also changes a consultation status and undoes
that change. Never point it at production. The explicit write flag is required.

Coverage includes every admin page in Light, Dark and System modes, 390px and
768px layouts, drawer dismissal/focus, real counts, typography, white surfaces,
pink action contrast, Profile tabs/error recovery, consultation pagination/filters/status
undo, category/delete dialogs, image preview, both isolated editors and their
source/fullscreen modes. It checks that settled auth/public styles match before
and after admin navigation. Theme loading is awaited before comparing styles.

The overhaul was verified against production assets on a local Laravel server
with disposable SQLite data: 59 PHP tests (610 assertions), two JavaScript tests,
all three browser scripts, client/SSR builds, formatting and whitespace checks.
Desktop and phone screenshots cover all ten admin routes, with additional dark
screenshots and dialog, drawer, empty-state and error-state previews. External
fonts/widgets are excluded from browser runs for repeatability; no uncaught
browser exceptions occurred. Existing Browserslist-data and Inertia SSR
sourcemap warnings remain in the build.

## Dashboard and public mobile menu checks

`node --test tests/browser/dashboard-greeting.test.mjs` checks time-of-day
greetings, first-name fallback, and varied encouragement messages without a browser.

With the disposable local account and `SIDEBAR_TEST_*` / `NODE_PATH` settings
described below, run `node tests/browser/dashboard-overview.cjs` to verify real
dashboard counts, chart metric switching and keyboard access, theme modes, quick
links, phone/tablet layouts, and the public mobile Blogs link. Set
`DASHBOARD_TEST_ARTIFACTS` to a local directory to capture preview screenshots.
Run `php artisan test` with the project's test database settings for the backend
statistics, empty-state, ownership, status-change and date-boundary coverage.

Articles on the dashboard belong to the signed-in admin, matching article
management permissions. Consultation statistics cover the shared inbox. New
consultations means the last seven days; six-month activity uses the application's
reporting timezone. Greeting and date display use the browser's local time.

## Historical Create Article investigation

The following records the earlier sidebar repair. Its original dimensions,
button-based navigation and fabricated notification badge have since been
replaced by the portal design system described above.

### Root cause

The Create Article page could overwrite the persistent sidebar's appearance when
its dynamic editor dependencies loaded. This reproduced both with the old local
bundle and with a fresh production build of the current sources.

The browser inserted a second copy of `app-*.css` **after** the separately loaded
`AdminLayout-*.css`. The Vite preload helper checks relative `href` attributes,
whereas Laravel's initial asset links use absolute URLs. The duplicate application
stylesheet brought the shared button rules after the layout overrides. All the
following selectors have the same specificity, so the later declaration won:

| Property | Winning rule before fix | Source | Dashboard / broken Create Article |
| --- | --- | --- | --- |
| `display` | `.app-button` | `resources/css/buttons.css:1` | `flex` / `inline-flex` |
| `text-align` | `.app-button` | `resources/css/buttons.css:1` | `left` / `center` |
| `font-weight` | `.app-button` | `resources/css/buttons.css:1` | `400` / `600` |
| `line-height` | `.app-button` | `resources/css/buttons.css:1` | `24px` / `20px` |
| `gap` | `.app-button` | `resources/css/buttons.css:1` | `12px` / `8px` |
| `font-size` | `.app-button--sm` | `resources/css/buttons.css:27` | `16px` / `13px` |
| `padding` | `.app-button--sm` | `resources/css/buttons.css:27` | `10px 8px` / `12px 20px` |
| `color` | `.app-button--ghost` | `resources/css/buttons.css:96` | `rgb(82, 96, 109)` / `rgb(73, 104, 130)` |

These overrode `.admin-shell__nav-link` in `AdminLayout.css:116`. The inner label
inherited the changed typography and alignment. Its horizontal position moved
from 50px to 62px. The more specific expanded-navigation rules at lines 134 and
138 still won `justify-content: flex-start`, demonstrating why adjusting only
flex alignment would not fix this bug. `align-items: center`, the inherited font
family, and `box-sizing: border-box` were unchanged.

The reported top offset did not reproduce: `html` and `body` had zero margin,
padding, and top border; the sidebar and topbar both began at y=0. No offset reset
was added.

### Elimination evidence

Checks were performed in Chrome against a local Laravel instance using an
isolated SQLite database and a verified test admin. Sidebar styles were measured
on an inactive navigation item so active-link styling did not affect comparison.
Bundled vendor rules were disabled temporarily through the browser CSSOM and
restored separately between checks; these were not persistent import edits.

| Disabled temporarily | Sidebar restored? | Form consequence |
| --- | --- | --- |
| BlogForm CSS bundle (including Jodit in the old build) | No | Form/editor styling lost |
| PrimeReact theme stylesheet | No | PrimeReact controls lost theme styling |
| PrimeReact `.p-*` rule groups | No | Component styling affected |
| Relevant PrimeFlex utility rule groups | No | No repair of sidebar typography |
| PrimeIcons rule groups | No | Icon glyph styling lost |
| Second application stylesheet | Yes | Form and isolated editor remained usable |

The old build used `jodit-react` and a global Jodit stylesheet. The current source
already injects Jodit CSS only into each editor's shadow root. Rebuilding corrected
that stale-asset mismatch but still reproduced the shared-button override.

### Fix

Load `AdminLayout.css` from the application entry immediately after `buttons.css`,
instead of importing it from the lazy layout component. Vite emits the shared
button rules and their existing layout overrides together, in that order. A
subsequent copy of this stylesheet has the same stable ordering.

No CSS declarations, editor configuration, package versions, backend behavior, or
theme configuration were changed. Screenshots before and after confirmed the
Create Article form and toolbar retained their appearance.

### Verification performed

- Fresh Dashboard, Create Article, and populated Edit Article pages.
- Forward and reverse Inertia navigation through Dashboard, Create Article,
  Blogs, Profile, and Settings.
- Light, Dark, and System modes, including light and dark OS preferences.
- Expanded and collapsed sidebar; consultation badge `2` and notification badge
  `3`, with badge bounds checked against their containers.
- Both editor instances accepted text; bold formatting, font popup, About dialog,
  fullscreen on/off, and source-mode roundtrip worked. The source textarea
  fallback worked with external editor CDN loading excluded.
- Category dropdown, category creation dialog and success toast, and image preview.
- Production client and SSR builds passed. Existing Browserslist-data and Inertia
  sourcemap warnings appeared both before and after the change.
- PHP suite passed: 55 tests, 509 assertions.
- No uncaught browser exceptions during the regression and editor checks.

External widgets/fonts were excluded from browser tests to keep the comparison
local. The supplied GOOD/BAD screenshot files were unavailable; the current
working Dashboard was the agreed baseline. The unused local `public/hot` marker
pointed to a stopped Vite server and was preserved outside the repository while
testing the production assets.

## Running the repeatable browser check

Use a disposable local database with a verified admin and an installed Chrome.
Build assets and start Laravel before running the script. Install Playwright into
a temporary directory to avoid changing the project's package files:

```powershell
$browserTools = Join-Path $env:TEMP ('sidebar-browser-' + [guid]::NewGuid().ToString('N'))
npm install --prefix $browserTools playwright --no-package-lock --no-audit --no-fund
$env:NODE_PATH = Join-Path $browserTools 'node_modules'
$env:SIDEBAR_TEST_URL = 'http://127.0.0.1:8000'
$env:SIDEBAR_TEST_EMAIL = 'your-disposable-admin@example.test'
$env:SIDEBAR_TEST_PASSWORD = 'your-disposable-test-password'
node tests/browser/admin-sidebar.cjs
```

The script checks sidebar computed styles, top positions, theme modes, badge
placement, and navigation ordering. It logs in and changes only browser state.

## Recurrence risks

Edit Article shares the same form/editor and was susceptible to the same issue.
Other dynamically imported modules can also request entry CSS again. Keep shell
overrides alongside shared button styles in the entry stylesheet; do not rely on
page-chunk injection order. Keep the existing Jodit shadow-root isolation.
