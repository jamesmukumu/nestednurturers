// Use the same disposable server/account and NODE_PATH setup as admin-sidebar.cjs.
const assert = require("node:assert/strict");
const { mkdirSync } = require("node:fs");
const { join } = require("node:path");
const { chromium } = require("playwright");

(async () => {
    const {
        SIDEBAR_TEST_URL: url,
        SIDEBAR_TEST_EMAIL: email,
        SIDEBAR_TEST_PASSWORD: password,
        DASHBOARD_TEST_ARTIFACTS: artifacts,
    } = process.env;
    assert.ok(
        url && email && password,
        "Set SIDEBAR_TEST_URL, SIDEBAR_TEST_EMAIL and SIDEBAR_TEST_PASSWORD.",
    );
    if (artifacts) mkdirSync(artifacts, { recursive: true });
    const browser = await chromium.launch({
        channel: process.env.SIDEBAR_TEST_BROWSER || "chrome",
    });
    try {
        const page = await browser.newPage({
            viewport: { width: 1440, height: 1100 },
        });
        const errors = [];
        page.on("pageerror", (error) => errors.push(error.message));
        await page.route("**/*", (route) =>
            new URL(route.request().url()).origin === new URL(url).origin
                ? route.continue()
                : route.abort(),
        );
        await page.goto(`${url}/login`);
        await page.locator("#login-email").fill(email);
        await page.locator("#login-password").fill(password);
        await page.getByRole("button", { name: "Log in", exact: true }).click();
        await page.waitForURL("**/dashboard");
        await page.goto(`${url}/dashboard`);
        await page.locator(".dashboard-stats").waitFor();
        const data = await page
            .locator("#app")
            .evaluate(
                (element) => JSON.parse(element.dataset.page).props.dashboard,
            );
        assert.deepEqual(
            await page.locator(".dashboard-stat > strong").allTextContents(),
            [
                data.admins,
                data.articles.total,
                data.services.total,
                data.consultations.total,
                data.consultations.newThisWeek,
                data.consultations.pending,
            ].map((value) => new Intl.NumberFormat().format(value)),
        );
        assert.match(
            await page.locator("h1").innerText(),
            /^Good (morning|afternoon|evening), .+\.$/,
        );
        assert.equal(await page.locator(".dashboard-chart__column").count(), 6);
        assert.equal(
            await page.locator(".dashboard-inbox__row").count(),
            data.pendingConsultations.length,
        );
        const original = await page
            .locator(".dashboard-activity__summary > strong")
            .innerText();
        await page
            .getByRole("button", { name: "Your articles", exact: true })
            .click();
        assert.equal(
            await page
                .locator(".dashboard-activity__summary > strong")
                .innerText(),
            new Intl.NumberFormat().format(
                data.activity.reduce((sum, month) => sum + month.articles, 0),
            ),
        );
        await page.locator(".dashboard-chart__column").first().focus();
        assert.equal(
            await page.locator(".dashboard-chart__value").textContent(),
            new Intl.NumberFormat().format(data.activity[0].articles),
        );
        await page
            .getByRole("button", { name: "Consultations", exact: true })
            .click();
        assert.equal(
            await page
                .locator(".dashboard-activity__summary > strong")
                .innerText(),
            original,
        );
        for (const theme of ["Light", "Dark", "System"]) {
            await page
                .getByRole("button", { name: `${theme} theme`, exact: true })
                .first()
                .click();
            await page.waitForTimeout(300);
            assert.ok(await page.locator(".dashboard-page").isVisible());
            if (artifacts)
                await page.screenshot({
                    path: join(
                        artifacts,
                        `dashboard-${theme.toLowerCase()}.png`,
                    ),
                    fullPage: true,
                });
        }
        await page
            .getByRole("button", { name: "Light theme", exact: true })
            .first()
            .click();
        const shortcuts = [
            ["View consultations", "/enquiries"],
            ["View blogs", "/dashboard/blogs"],
            ["Write an article", "/dashboard/blogs/create"],
            ["Your profile", "/dashboard/profile"],
        ];
        for (const [label, path] of shortcuts) {
            await page
                .locator(".dashboard-shortcuts")
                .getByRole("link", { name: new RegExp(label) })
                .click();
            await page.waitForURL((current) => current.pathname === path);
            await page.getByRole("heading", { level: 1 }).waitFor();
            await page.goto(`${url}/dashboard`);
            await page.locator(".dashboard-stats").waitFor();
        }
        for (const width of [390, 768]) {
            await page.setViewportSize({ width, height: 844 });
            assert.equal(
                await page.evaluate(
                    () => document.documentElement.scrollWidth <= innerWidth,
                ),
                true,
            );
            assert.equal(
                await page
                    .locator(".dashboard-page")
                    .evaluate(
                        (element) =>
                            element.scrollWidth <= element.clientWidth + 1,
                    ),
                true,
            );
            if (artifacts)
                await page.screenshot({
                    path: join(artifacts, `dashboard-${width}.png`),
                    fullPage: true,
                });
            await page
                .locator(".admin-shell__content-scroll")
                .evaluate((element) => {
                    element.scrollTop = element.scrollHeight;
                });
            assert.ok(
                await page
                    .locator(".dashboard-footer")
                    .evaluate(
                        (element) =>
                            element.getBoundingClientRect().bottom <=
                            innerHeight + 1,
                    ),
            );
            if (artifacts)
                await page.screenshot({
                    path: join(artifacts, `dashboard-${width}-bottom.png`),
                });
            await page
                .locator(".admin-shell__content-scroll")
                .evaluate((element) => {
                    element.scrollTop = 0;
                });
        }
        await page.setViewportSize({ width: 390, height: 844 });
        await page.goto(`${url}/blogs`);
        await page
            .getByRole("button", { name: "Open navigation menu", exact: true })
            .click();
        const menu = page.getByRole("navigation", {
            name: "Mobile navigation",
            exact: true,
        });
        await menu.waitFor();
        assert.deepEqual(await menu.locator("a").allTextContents(), [
            "Home",
            "Services",
            "About",
            "FAQ",
            "Blogs",
            "Pricing",
            "Contact Us",
        ]);
        assert.equal(await menu.locator("i, svg").count(), 0);
        const leftEdges = await menu
            .locator("a")
            .evaluateAll((links) =>
                links.map((link) => link.getBoundingClientRect().left),
            );
        assert.equal(new Set(leftEdges).size, 1);
        assert.equal(
            await menu
                .getByRole("link", { name: "Blogs", exact: true })
                .getAttribute("aria-current"),
            "page",
        );
        if (artifacts)
            await page.screenshot({
                path: join(artifacts, "public-mobile-menu.png"),
            });
        await menu.getByRole("link", { name: "Blogs", exact: true }).click();
        await page.waitForURL("**/blogs");
        assert.deepEqual(errors, [], "Unexpected browser exceptions");
        console.log(
            "PASS dashboard counts, chart switching/keyboard access, themes, quick links, mobile/tablet layout and public mobile navigation",
        );
    } finally {
        await browser.close();
    }
})().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
