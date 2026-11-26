// Run only against a disposable local database; this exercises article CRUD.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("playwright");
const { assertAdminPalette, assertAdminControlStates, withoutPinkActions } = require('./admin-palette.cjs');

function contrast(first, second) {
    const luminance = (color) => {
        const rgb = color
            .match(/[\d.]+/g)
            .slice(0, 3)
            .map(Number)
            .map((v) => {
                const c = v / 255;
                return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
            });
        return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722;
    };
    const a = luminance(first),
        b = luminance(second);
    return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

async function authStyles(page) {
    return page.evaluate(() => {
        const style = (element) => {
            const value = getComputedStyle(element);
            return Object.fromEntries(
                [
                    "fontFamily",
                    "fontSize",
                    "fontWeight",
                    "backgroundColor",
                    "color",
                    "padding",
                ].map((name) => [name, value[name]]),
            );
        };
        return {
            heading: style(document.querySelector("h1")),
            button: style(document.querySelector("button[type=submit]")),
            card: style(document.querySelector(".auth-page__card")),
        };
    });
}

(async () => {
    const {
        SIDEBAR_TEST_URL: url,
        SIDEBAR_TEST_EMAIL: email,
        SIDEBAR_TEST_PASSWORD: password,
        PORTAL_TEST_ARTIFACTS: artifacts,
    } = process.env;
    assert.ok(
        url && email && password,
        "Set the SIDEBAR_TEST_* variables for a disposable local test server.",
    );
    assert.ok(
        process.env.PORTAL_TEST_ALLOW_WRITES === "1",
        "Set PORTAL_TEST_ALLOW_WRITES=1 to enable disposable test-data CRUD.",
    );
    const browser = await chromium.launch({
        channel: process.env.SIDEBAR_TEST_BROWSER || "chrome",
    });
    try {
        const page = await browser.newPage({
            viewport: { width: 1440, height: 1000 },
        });
        page.setDefaultTimeout(Number(process.env.PORTAL_TEST_TIMEOUT || 30000));
        page.setDefaultNavigationTimeout(Number(process.env.PORTAL_TEST_TIMEOUT || 30000));
        const errors = [];
        page.on("pageerror", (error) => errors.push(error.message));
        await page.route("**/*", (route) =>
            new URL(route.request().url()).origin === new URL(url).origin
                ? route.continue()
                : route.abort(),
        );
        if (artifacts) fs.mkdirSync(artifacts, { recursive: true });
        const shot = async (name) => {
            // Focus and theme transitions can briefly produce interpolated colors.
            await page.waitForTimeout(250);
            await assertAdminPalette(page);
            if (artifacts)
                await page.screenshot({
                    path: path.join(artifacts, `${name}.png`),
                });
            if (artifacts && await page.locator('.admin-shell').count())
                await withoutPinkActions(page, () => page.screenshot({
                    path: path.join(artifacts, `${name}-without-actions.png`),
                }));
        };
        const goto = async (route) => {
            const link = page.locator(`a[href="${route}"]`).filter({ visible: true }).first();
            if (new URL(page.url()).pathname !== route && await link.count()) {
                await link.click();
                await page.waitForURL(url + route);
            } else {
                await page.goto(url + route);
            }
            await page.locator("h1").first().waitFor();
            await page.waitForFunction(() =>
                Boolean(document.getElementById("primereact-theme")?.sheet),
            );
            if (/\/create$|\/edit$/.test(route))
                await page.locator(".jodit-wysiwyg").first().waitFor();
            if (route === "/dashboard/profile")
                await page.locator(".profile-card").first().waitFor();
            await assertAdminPalette(page);
        };
        await goto("/login");
        const loginBefore = await authStyles(page);
        await goto("/register");
        const registerBefore = await authStyles(page);
        await goto("/blogs");
        const publicBefore = await page.locator("body").evaluate((element) => {
            const css = getComputedStyle(element);
            return {
                color: css.color,
                background: css.backgroundColor,
                font: css.fontFamily,
            };
        });
        await goto("/login");
        await page.locator("#login-email").fill(email);
        await page.locator("#login-password").fill(password);
        await page.getByRole("button", { name: "Log in", exact: true }).click();
        await page.waitForURL("**/dashboard");
        await goto("/dashboard");
        const initialPage = await page
            .locator("#app")
            .evaluate((element) => JSON.parse(element.dataset.page));
        const initial = initialPage.props;
        const inertiaHeaders = {
            "X-Inertia": "true",
            "X-Requested-With": "XMLHttpRequest",
            "X-Inertia-Version": initialPage.version || "",
        };
        const count = String(
            initial.pendingEnquiriesCount > 99
                ? "99+"
                : initial.pendingEnquiriesCount,
        );
        assert.equal(
            await page.locator(".admin-shell__inbox-count").innerText(),
            count,
        );
        assert.equal(
            await page.getByLabel("Search dashboard", { exact: true }).count(),
            0,
        );
        const blogs = await page.request.get(`${url}/dashboard/blogs`, {
            headers: inertiaHeaders,
        });
        const blog = (await blogs.json()).props.blogs.data[0];
        const enquiries = await page.request.get(
            `${url}/enquiries?status=pending`,
            { headers: inertiaHeaders },
        );
        const enquiry = (await enquiries.json()).props.enquiries[0];
        assert.ok(
            blog && enquiry,
            "Seed at least one owned article and one pending consultation.",
        );
        const routes = [
            "/dashboard",
            "/enquiries",
            `/enquiries/${enquiry.id}`,
            "/dashboard/blogs",
            `/dashboard/blogs/${blog.id}`,
            "/dashboard/blogs/create",
            `/dashboard/blogs/${blog.id}/edit`,
            "/dashboard/profile",
            "/dashboard/settings",
            "/dashboard/no-such-page",
        ];
        for (const mode of (process.env.PORTAL_TEST_INTERACTIONS_ONLY === '1' ? [] : ["Light", "Dark", "System"])) {
            await page.setViewportSize({ width: 1440, height: 1000 });
            await goto("/dashboard");
            await page
                .getByRole("button", { name: `${mode} theme`, exact: true })
                .first()
                .click();
            await page.waitForTimeout(250);
            for (const width of [1440, 390, 768]) {
                await page.setViewportSize({ width, height: 1000 });
                for (const route of routes) {
                    await goto(route);
                    if (width === 1440) await assertAdminControlStates(page);
                    const metrics = await page.evaluate(() => {
                        const h = getComputedStyle(document.querySelector("h1"));
                        const shell = getComputedStyle(
                            document.querySelector(".admin-shell"),
                        );
                        const link = getComputedStyle(
                            document.querySelector(".admin-shell__nav-link"),
                        );
                        return {
                            heading: h.fontFamily,
                            weight: h.fontWeight,
                            body: shell.fontFamily,
                            size: shell.fontSize,
                            nav: link.fontSize,
                            background: shell.backgroundColor,
                            overflow:
                                document.documentElement.scrollWidth > innerWidth,
                            top: document
                                .querySelector(".admin-shell__topbar")
                                .getBoundingClientRect().top,
                        };
                    });
                    assert.ok(
                        metrics.heading.startsWith("Georgia"),
                        `${mode} ${route}: headline font`,
                    );
                    assert.equal(metrics.weight, "400");
                    assert.ok(metrics.body.includes("Figtree"));
                    assert.equal(metrics.size, "14px");
                    assert.equal(metrics.nav, "13px");
                    assert.equal(metrics.overflow, false);
                    assert.equal(metrics.top, 0);
                    if (mode === "Light")
                        assert.equal(metrics.background, "rgb(255, 255, 255)");
                    await shot(`${mode.toLowerCase()}-${width}-${route.replace(/[^a-z0-9]/gi, "-")}`);
                }
                console.log(`PASS ${mode} ${width}px: all ten pages have no non-button pink`);
            }
            console.log(
                `PASS ${mode}: all admin pages share typography, surfaces and stable layout`,
            );
        }
        await page.setViewportSize({ width: 1440, height: 1000 });
        await goto("/dashboard");
        await page
            .getByRole("button", { name: "Light theme", exact: true })
            .first()
            .click();
        const colors = await page
            .locator(".dashboard-primary-action")
            .evaluate((element) => {
                const c = getComputedStyle(element);
                return { background: c.backgroundColor, text: c.color };
            });
        assert.equal(colors.background, "rgb(255, 118, 220)");
        assert.ok(
            contrast(colors.text, colors.background) >= 4.5,
            "Primary pink action text contrast",
        );
        const primaryAction = page.locator('.dashboard-primary-action');
        await primaryAction.hover();
        await page.waitForTimeout(200);
        assert.equal(await primaryAction.evaluate(el => getComputedStyle(el).backgroundColor), 'rgb(244, 95, 203)');
        await page.keyboard.press('Tab');
        await primaryAction.focus();
        assert.equal(await primaryAction.evaluate(el => getComputedStyle(el).outlineColor), 'rgb(173, 39, 127)');
        await primaryAction.evaluate(el => el.setAttribute('aria-disabled', 'true'));
        assert.equal(await primaryAction.evaluate(el => getComputedStyle(el).opacity), '0.5');
        await primaryAction.evaluate(el => el.removeAttribute('aria-disabled'));
        await page
            .locator(".admin-shell__sidebar .admin-shell__user-copy strong")
            .evaluate((element) => {
                element.textContent =
                    "A very long administrator name that must stay inside the sidebar";
            });
        assert.equal(
            await page
                .locator(".admin-shell__sidebar")
                .evaluate(
                    (element) => element.scrollWidth <= element.clientWidth + 1,
                ),
            true,
        );
        await page
            .locator(".admin-shell__nav-label")
            .first()
            .evaluate((element) => {
                element.textContent =
                    "An unusually long navigation label that should wrap comfortably";
            });
        assert.equal(
            await page
                .locator(".admin-shell__sidebar")
                .evaluate(
                    (element) => element.scrollWidth <= element.clientWidth + 1,
                ),
            true,
        );
        const toggle = page.getByRole("button", {
            name: "Toggle sidebar",
            exact: true,
        });
        await toggle.focus();
        await page.keyboard.press("Tab");
        await page.keyboard.press("Shift+Tab");
        assert.ok(
            await toggle.evaluate(
                (element) => document.activeElement === element,
            ),
        );
        assert.equal(
            await toggle.evaluate(
                (element) => getComputedStyle(element).outlineStyle,
            ),
            "solid",
            "Keyboard focus stays visible",
        );
        for (const width of [390, 768]) {
            await page.setViewportSize({ width, height: 900 });
            for (const route of routes) {
                await goto(route);
                await shot(`${width}-${route.replace(/[^a-z0-9]/gi, "-")}`);
                assert.equal(
                    await page.evaluate(
                        () =>
                            document.documentElement.scrollWidth <= innerWidth,
                    ),
                    true,
                    `${width}: ${route}`,
                );
            }
            await page
                .getByRole("button", {
                    name: "Open navigation menu",
                    exact: true,
                })
                .click();
            await page.locator(".admin-shell__mobile-sidebar").waitFor();
            await shot(`drawer-${width}`);
            await page.keyboard.press("Escape");
            await page
                .locator(".admin-shell__mobile-sidebar")
                .waitFor({ state: "hidden" });
            assert.equal(
                await page.evaluate(() => document.body.style.overflow),
                "",
            );
            assert.ok(
                await page
                    .getByRole("button", {
                        name: "Open navigation menu",
                        exact: true,
                    })
                    .evaluate((el) => document.activeElement === el),
            );
        }
        await page.setViewportSize({ width: 1440, height: 1000 });
        await goto("/dashboard/profile");
        await page.getByRole("tab", { name: "Activity", exact: true }).click();
        assert.equal(
            await page
                .getByRole("tab", { name: "Activity", exact: true })
                .getAttribute("aria-selected"),
            "true",
        );
        await page.keyboard.press("ArrowLeft");
        assert.equal(
            await page
                .getByRole("tab", { name: "Overview", exact: true })
                .getAttribute("aria-selected"),
            "true",
        );
        await page.route("**/dashboard/profile/data", (route) =>
            route.fulfill({
                status: 503,
                contentType: "application/json",
                body: "{}",
            }),
        );
        await page.reload();
        await page.getByText("Profile unavailable", { exact: true }).waitFor();
        await shot("profile-error");
        await page.unroute("**/dashboard/profile/data");
        await page
            .getByRole("button", { name: "Try again", exact: true })
            .click();
        await page.locator(".profile-card").first().waitFor();
        await goto("/enquiries");
        const nextPage = page.getByRole("button", {
            name: "Page 2",
            exact: true,
        });
        assert.ok(
            await nextPage.isVisible(),
            "Seed enough consultations to exercise pagination",
        );
        await nextPage.click();
        await page.waitForURL(/page=2/);
        await page
            .locator(
                '.enquiries-pagination__button[aria-label="Page 2"][aria-current="page"]',
            )
            .waitFor();
        assert.equal(await nextPage.getAttribute("aria-current"), "page");
        await page.getByRole("button", { name: "Page 1", exact: true }).click();
        await page.waitForURL(/page=1/);
        await page
            .getByRole("button", { name: "Pending", exact: true })
            .click();
        await page.waitForURL(/status=pending/);
        await page
            .getByRole("searchbox", { name: "Search enquiries", exact: true })
            .fill(`no-results-${Date.now()}`);
        await page.locator(".enquiries-empty").waitFor();
        await shot("consultations-empty");
        await goto(`/enquiries/${enquiry.id}`);
        await page
            .getByRole("button", { name: "Mark as addressed", exact: true })
            .click();
        await page.getByRole("button", { name: "Undo", exact: true }).waitFor();
        await shot("consultation-toast");
        await page.getByRole("button", { name: "Undo", exact: true }).click();
        await page
            .getByRole("button", { name: "Mark as addressed", exact: true })
            .waitFor();

        // Both rich-text instances and native source mode remain isolated.
        await goto("/dashboard/blogs/create");
        const secondaryAction = page.getByRole('link', { name: 'Cancel', exact: true });
        assert.equal(await secondaryAction.evaluate(el => getComputedStyle(el).color), 'rgb(150, 36, 110)');
        assert.equal(await secondaryAction.evaluate(el => getComputedStyle(el).borderTopColor), 'rgb(242, 204, 229)');
        await secondaryAction.hover();
        await page.waitForTimeout(200);
        assert.equal(await secondaryAction.evaluate(el => getComputedStyle(el).backgroundColor), 'rgb(255, 242, 250)');
        await secondaryAction.evaluate(el => el.setAttribute('aria-disabled', 'true'));
        assert.equal(await secondaryAction.evaluate(el => getComputedStyle(el).opacity), '0.5');
        await secondaryAction.evaluate(el => el.removeAttribute('aria-disabled'));
        for (let index = 0; index < 2; index++)
            await page
                .locator(".rich-text-editor")
                .nth(index)
                .locator(".jodit-wysiwyg")
                .fill(`Portal article text ${index}`);
        const editor = page.locator(".rich-text-editor").first();
        await editor.locator(".jodit-wysiwyg").click();
        await page.keyboard.press("Control+a");
        await editor.getByRole("button", { name: "Bold", exact: true }).click();
        assert.ok(
            await editor
                .locator(".jodit-wysiwyg strong,.jodit-wysiwyg b")
                .count(),
        );
        await editor
            .getByRole("button", { name: "Font family", exact: true })
            .last()
            .click();
        await editor.locator(".jodit-popup").first().waitFor();
        await page.keyboard.press("Escape");
        await editor
            .getByRole("button", { name: "About Jodit", exact: true })
            .click();
        await shot("editor-dialog");
        await page.keyboard.press("Escape");
        await editor.locator(".jodit-toolbar-button_fullsize button").click();
        await shot("editor-fullscreen");
        await editor.locator(".jodit-toolbar-button_fullsize button").click();
        await editor
            .getByRole("button", { name: "Change mode", exact: true })
            .click();
        assert.ok(await editor.locator(".jodit-source__mirror").isVisible());
        await shot("editor-source");
        await editor
            .getByRole("button", { name: "Change mode", exact: true })
            .click();
        await page.locator('.p-dropdown-trigger').click();
        await page.locator('.p-dropdown-panel').waitFor();
        await page.locator('.p-dropdown-item').first().hover();
        await shot('category-dropdown');
        await page.keyboard.press('Escape');
        await page
            .getByRole("button", { name: "Create Category", exact: true })
            .click();
        await shot("category-dialog");
        await page
            .locator("#blog-category-title")
            .fill(`Portal category ${Date.now()}`);
        await page
            .getByRole("button", { name: "Save category", exact: true })
            .click();
        await page.getByText("Category created", { exact: true }).waitFor();
        const title = `Portal browser regression ${Date.now()}`;
        await page.locator("#blog-title").fill(title);
        await page.locator("#blog-image-input").setInputFiles({
            name: "pixel.png",
            mimeType: "image/png",
            buffer: Buffer.from(
                "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+a1ZkAAAAASUVORK5CYII=",
                "base64",
            ),
        });
        await page.locator(".blog-form__image-preview img").waitFor();
        await page
            .getByRole("button", { name: "Create Article", exact: true })
            .click();
        await page.waitForURL(
            (current) => current.pathname === "/dashboard/blogs",
        );
        const row = page
            .locator(".p-datatable-tbody tr")
            .filter({ hasText: title });
        await row
            .getByRole("link", { name: `Edit ${title}`, exact: true })
            .click();
        await page.locator("#blog-title").fill(`${title} edited`);
        await page
            .getByRole("button", { name: "Save changes", exact: true })
            .click();
        await page.waitForURL(
            (current) => current.pathname === "/dashboard/blogs",
        );
        await page
            .locator(".p-datatable-tbody tr")
            .filter({ hasText: `${title} edited` })
            .getByRole("button", {
                name: `Delete ${title} edited`,
                exact: true,
            })
            .click();
        await shot("delete-dialog");
        await page
            .getByRole("dialog")
            .getByRole("button", { name: "Cancel", exact: true })
            .click();
        assert.ok(
            await page
                .getByText(`${title} edited`, { exact: true })
                .isVisible(),
        );
        await page
            .locator(".p-datatable-tbody tr")
            .filter({ hasText: `${title} edited` })
            .getByRole("button", {
                name: `Delete ${title} edited`,
                exact: true,
            })
            .click();
        await page
            .getByRole("dialog")
            .getByRole("button", { name: "Delete", exact: true })
            .click();
        await page
            .getByText(`${title} edited`, { exact: true })
            .waitFor({ state: "hidden" });

        await goto("/dashboard");
        await page
            .getByRole("button", {
                name: "Open account settings and logout menu",
                exact: true,
            })
            .last()
            .click();
        await page
            .getByRole("button", { name: "Log out", exact: true })
            .click();
        await page.waitForURL("**/login");
        await page.locator("h1").waitFor();
        await page.waitForFunction(() =>
            Boolean(document.getElementById("primereact-theme")?.sheet),
        );
        assert.deepEqual(
            await authStyles(page),
            loginBefore,
            "Auth styling after all admin CSS was loaded",
        );
        await goto("/register");
        assert.deepEqual(await authStyles(page), registerBefore);
        await goto("/blogs");
        const publicAfter = await page.locator("body").evaluate((element) => {
            const css = getComputedStyle(element);
            return {
                color: css.color,
                background: css.backgroundColor,
                font: css.fontFamily,
            };
        });
        assert.deepEqual(
            publicAfter,
            publicBefore,
            "Public page styling after leaving admin",
        );
        assert.deepEqual(errors, [], "Unexpected browser exceptions");
        console.log(
            "PASS portal typography, pink contrast, responsive drawer/focus, overlays, consultation undo, article CRUD/editor, Profile recovery, logout and auth/public isolation",
        );
    } finally {
        await browser.close();
    }
})().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
