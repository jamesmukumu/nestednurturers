const assert = require('node:assert/strict');

// Controls are classified by purpose, not by their HTML tag.
const actions = ':is(.app-button--primary,.app-button--secondary,.profile-button--primary,.profile-button--secondary,.enquiries-button--secondary):not(.app-button--icon-only,.theme-toggle__option)';

async function assertAdminPalette(page) {
    if (!await page.locator('.admin-shell').count()) return;
    const violations = await page.evaluate((actions) => {
        const excluded = `${actions},.app-button--danger,.p-tag-danger,.p-tag-success,.p-tag-warning,.p-tag-info,.profile-message--error,.profile-verification-alert,.profile-status,.enquiries-status,.jodit-wysiwyg,.jodit-color-picker,.jodit-color-picker__color-item,.blogs-show__card .p-card-content > div`;
        const properties = ['color','backgroundColor','backgroundImage','borderTopColor','borderRightColor','borderBottomColor','borderLeftColor','outlineColor','boxShadow','textShadow','fill','stroke','accentColor'];
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = 1;
        const context = canvas.getContext('2d', { willReadFrequently: true });
        const cache = new Map();
        function pink(color) {
            if (cache.has(color)) return cache.get(color);
            context.clearRect(0, 0, 1, 1);
            context.fillStyle = color;
            context.fillRect(0, 0, 1, 1);
            const [r,g,b,a] = context.getImageData(0,0,1,1).data;
            const max = Math.max(r,g,b), min = Math.min(r,g,b), delta = max-min;
            let hue = delta === 0 ? 0 : max === r ? 60*((g-b)/delta%6) : max === g ? 60*((b-r)/delta+2) : 60*((r-g)/delta+4);
            if (hue < 0) hue += 360;
            const result = a > 0 && ((delta >= 5 && hue >= 260 && hue <= 345)
                || (delta > 32 && hue >= 200 && hue < 260));
            cache.set(color, result);
            return result;
        }
        const found = [];
        function walk(root) {
            for (const el of root.querySelectorAll('*')) {
                if (el.closest(excluded)) continue;
                if (el.shadowRoot) walk(el.shadowRoot);
                if (!el.getClientRects().length || getComputedStyle(el).visibility === 'hidden') continue;
                for (const pseudo of [null,'::before','::after']) {
                    const css = getComputedStyle(el,pseudo);
                    if (pseudo && ['none','normal'].includes(css.content)) continue;
                    for (const property of properties) {
                        if (property === 'outlineColor' && css.outlineStyle === 'none') continue;
                        const colors = css[property]?.match(/(?:rgba?|hsla?|oklab|oklch|lab|lch|color)\([^)]*\)|#[\da-f]{3,8}\b/gi) || [];
                        if (colors.some(pink)) found.push({ element: el.tagName + '.' + String(el.className?.baseVal ?? el.className), pseudo, property, value: css[property] });
                    }
                }
            }
        }
        walk(document);
        return found.slice(0,30);
    }, actions);
    assert.deepEqual(violations, [], `Non-button pink on ${page.url()}`);
}

async function withoutPinkActions(page, callback) {
    const style = await page.addStyleTag({ content: `${actions} { visibility: hidden !important; }` });
    try {
        await assertAdminPalette(page);
        await callback();
    } finally {
        await style.evaluate(el => el.remove());
    }
}

async function assertAdminControlStates(page) {
    for (const selector of [
        '.admin-shell__nav-link', '.theme-toggle__option[aria-pressed="true"]',
        '.profile-tabs__tab', '.enquiries-filter', '.enquiries-pagination__button',
        '.p-inputtext', '.p-dropdown', '.blogs-list__actions .app-button',
        '.p-paginator-element', '.p-sortable-column', '.dashboard-segmented button',
        '.jodit-toolbar-button__button',
    ]) {
        const control = page.locator(selector).filter({ visible: true }).first();
        if (!await control.count() || !await control.isEnabled()) continue;
        await control.hover();
        await page.waitForTimeout(200);
        await assertAdminPalette(page);
        await page.mouse.down();
        try { await assertAdminPalette(page); }
        finally {
            await page.mouse.move(0, 0);
            await page.mouse.up();
        }
        await page.keyboard.press('Tab');
        await control.focus();
        await assertAdminPalette(page);
    }
}

module.exports = { assertAdminPalette, assertAdminControlStates, withoutPinkActions };
