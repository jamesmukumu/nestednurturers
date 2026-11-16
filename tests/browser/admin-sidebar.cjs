// Run against a disposable local test account with Playwright available in NODE_PATH.
// SIDEBAR_TEST_URL, SIDEBAR_TEST_EMAIL and SIDEBAR_TEST_PASSWORD are required.
const assert = require('node:assert/strict');
const { chromium } = require('playwright');

async function sidebarState(page) {
    return page.evaluate(() => {
        const link = document.querySelector('.admin-shell__sidebar a[href="/enquiries"]');
        const content = link.querySelector('.app-button__content');
        const properties = ['display', 'textAlign', 'fontSize', 'fontWeight', 'fontFamily',
            'color', 'padding', 'gap', 'lineHeight', 'boxSizing', 'justifyContent'];
        const styles = (element) => {
            const computed = getComputedStyle(element);
            return Object.fromEntries(properties.map((property) => [property, computed[property]]));
        };
        return {
            link: styles(link),
            content: styles(content),
            bodyMargin: getComputedStyle(document.body).margin,
            sidebarTop: document.querySelector('.admin-shell__sidebar').getBoundingClientRect().top,
            headerTop: document.querySelector('.admin-shell__topbar').getBoundingClientRect().top,
        };
    });
}

async function navigate(page, pathname) {
    if (pathname === '/dashboard/blogs/create') {
        await navigate(page, '/dashboard/blogs');
    }
    await page.locator(`a[href="${pathname}"]`).first().click();
    await page.waitForURL((url) => url.pathname === pathname);
    await page.getByRole('heading', { level: 1 }).waitFor();
    if (pathname === '/dashboard/blogs/create') {
        await page.locator('.jodit-wysiwyg').first().waitFor();
    }
}

(async () => {
    const { SIDEBAR_TEST_URL: url, SIDEBAR_TEST_EMAIL: email, SIDEBAR_TEST_PASSWORD: password } = process.env;
    assert.ok(url && email && password, 'Set the three SIDEBAR_TEST_* environment variables.');
    const browser = await chromium.launch({ channel: process.env.SIDEBAR_TEST_BROWSER || 'chrome' });
    try {
        const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
        const errors = [];
        page.on('pageerror', (error) => errors.push(error.message));
        // External widgets and font services are outside this local CSS regression.
        await page.route('**/*', (route) => new URL(route.request().url()).origin === new URL(url).origin
            ? route.continue() : route.abort());
        await page.goto(`${url}/login`);
        await page.locator('#login-email').fill(email);
        await page.locator('#login-password').fill(password);
        await page.getByRole('button', { name: 'Log in', exact: true }).click();
        await page.waitForURL('**/dashboard');
        await page.locator('.admin-shell__sidebar').waitFor();

        for (const [mode, osTheme] of [['Light', 'light'], ['Dark', 'dark'], ['System', 'light'], ['System', 'dark']]) {
            await page.emulateMedia({ colorScheme: osTheme });
            await page.getByRole('button', { name: `${mode} theme`, exact: true }).first().click();
            await page.locator('#primereact-theme').evaluate((link) => link.sheet
                ? Promise.resolve() : new Promise((resolve) => link.addEventListener('load', resolve, { once: true })));
            await page.waitForTimeout(250);
            const expected = await sidebarState(page);
            assert.equal(expected.link.textAlign, 'left');
            assert.equal(expected.link.fontSize, '16px');
            assert.equal(expected.link.fontWeight, '400');
            assert.equal(expected.sidebarTop, 0);
            assert.equal(expected.headerTop, 0);
            for (const route of ['/dashboard/blogs/create', '/dashboard', '/dashboard/blogs',
                '/dashboard/profile', '/dashboard/settings']) {
                await navigate(page, route);
                assert.deepEqual(await sidebarState(page), expected, `${mode}: ${route}`);
            }
            await page.goto(`${url}/dashboard/blogs/create`);
            await page.locator('.jodit-wysiwyg').first().waitFor();
            assert.deepEqual(await sidebarState(page), expected, `${mode}: direct Create Article`);
            for (const route of ['/dashboard', '/dashboard/blogs', '/dashboard/profile', '/dashboard/settings']) {
                await navigate(page, route);
                assert.deepEqual(await sidebarState(page), expected, `${mode}: reverse ${route}`);
            }
            await page.getByRole('button', { name: 'Toggle sidebar', exact: true }).click();
            await page.waitForFunction(() => document.querySelector('.admin-shell__sidebar').getBoundingClientRect().width === 64);
            await navigate(page, '/dashboard/blogs/create');
            assert.equal(await page.locator('.admin-shell__sidebar').evaluate((el) => el.getBoundingClientRect().width), 64);
            await page.getByRole('button', { name: 'Toggle sidebar', exact: true }).click();
            await page.waitForFunction(() => document.querySelector('.admin-shell__sidebar').getBoundingClientRect().width === 256);
            assert.deepEqual(await sidebarState(page), expected, `${mode}: expanded after editor load`);
            assert.equal(await page.locator('.admin-shell__notification-badge').innerText(), '3');
            const badgePositions = await page.evaluate(() => {
                const badge = document.querySelector('.admin-shell__sidebar .admin-shell__nav-badge');
                const notification = document.querySelector('.admin-shell__notification-badge');
                const inside = (element, container) => {
                    const a = element.getBoundingClientRect(), b = container.getBoundingClientRect();
                    return a.left >= b.left && a.right <= b.right && a.top >= b.top && a.bottom <= b.bottom;
                };
                return {
                    enquiry: !badge || inside(badge, badge.closest('.admin-shell__nav-link')),
                    notification: inside(notification, notification.closest('button')),
                };
            });
            assert.deepEqual(badgePositions, { enquiry: true, notification: true });
            await navigate(page, '/dashboard');
            await page.reload();
            await page.locator('.admin-shell__sidebar').waitFor();
            assert.deepEqual(await sidebarState(page), expected, `${mode}: direct Dashboard`);
            console.log(`PASS ${mode} (OS ${osTheme}): direct/forward/reverse navigation, collapsed/expanded sidebar, header and badges`);
        }
        assert.deepEqual(errors, [], 'Unexpected browser exceptions');
    } finally {
        await browser.close();
    }
})().catch((error) => { console.error(error); process.exitCode = 1; });
