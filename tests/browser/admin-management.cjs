// Run only against disposable data. This edits content and deletes the supplied target admin.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { chromium } = require("playwright");

(async () => {
    const env = process.env;
    const url = env.SIDEBAR_TEST_URL;
    const articleId = env.MANAGEMENT_TEST_ARTICLE_ID;
    const serviceId = env.MANAGEMENT_TEST_SERVICE_ID;
    const targetId = env.MANAGEMENT_TEST_TARGET_ID;
    assert.ok(
        url &&
            env.SIDEBAR_TEST_EMAIL &&
            env.SIDEBAR_TEST_PASSWORD &&
            articleId &&
            serviceId &&
            targetId,
        "Set SIDEBAR_TEST_* and MANAGEMENT_TEST_ARTICLE_ID, SERVICE_ID, TARGET_ID for disposable fixtures.",
    );
    assert.equal(
        env.PORTAL_TEST_ALLOW_WRITES,
        "1",
        "Explicitly enable disposable data writes.",
    );
    const browser = await chromium.launch({
        channel: env.SIDEBAR_TEST_BROWSER || "chrome",
    });
    try {
        const page = await browser.newPage({
            viewport: { width: 1440, height: 1000 },
        });
        page.setDefaultTimeout(30000);
        const errors = [];
        page.on("pageerror", (error) => errors.push(error.message));
        await page.route("**/*", (route) =>
            new URL(route.request().url()).origin === new URL(url).origin
                ? route.continue()
                : route.abort(),
        );
        const artifacts = env.PORTAL_TEST_ARTIFACTS;
        if (artifacts) fs.mkdirSync(artifacts, { recursive: true });
        const shot = async (name) => {
            for (const close of await page
                .locator(".p-toast-icon-close")
                .all()) {
                if (await close.isVisible()) await close.click();
            }
            await page.waitForTimeout(300); // Allow dialog/theme transitions to settle.
            if (artifacts)
                await page.screenshot({
                    path: path.join(artifacts, `${name}.png`),
                });
        };
        await page.goto(`${url}/login`);
        await page.locator("#login-email").fill(env.SIDEBAR_TEST_EMAIL);
        await page.locator("#login-password").fill(env.SIDEBAR_TEST_PASSWORD);
        await page.getByRole("button", { name: "Log in", exact: true }).click();
        await page.waitForURL("**/dashboard");

        // Category CRUD, validation, cancel, and used-category protection.
        await page
            .getByRole("link", { name: "Article categories", exact: true })
            .click();
        await page.waitForURL("**/dashboard/blog-categories");
        await page
            .getByRole("button", { name: "Create category", exact: true })
            .click();
        await page
            .getByRole("button", { name: "Save category", exact: true })
            .click();
        await page.locator("#blog-category-title-error").waitFor();
        const title = `Browser category ${Date.now()}`;
        await page.locator("#blog-category-title").fill(title);
        await page
            .locator("#blog-category-description")
            .fill("Browser test description");
        await page
            .getByRole("button", { name: "Save category", exact: true })
            .click();
        await page.getByRole("dialog").waitFor({ state: "hidden" });
        await page
            .getByRole("textbox", { name: "Search categories" })
            .fill(title);
        await page
            .getByRole("button", { name: `Edit ${title}`, exact: true })
            .click();
        await page.locator("#blog-category-title").fill(`${title} edited`);
        await page
            .getByRole("button", { name: "Save category", exact: true })
            .click();
        await page.getByRole("dialog").waitFor({ state: "hidden" });
        await page
            .getByRole("button", {
                name: `Delete ${title} edited`,
                exact: true,
            })
            .click();
        await page.route("**/dashboard/blog-categories/*", (route) =>
            route.request().method() === "DELETE"
                ? route.abort()
                : route.continue(),
        );
        await page
            .getByRole("button", { name: "Delete category", exact: true })
            .click();
        await page.getByRole("dialog").getByRole("alert").waitFor();
        assert.match(
            await page.getByRole("dialog").innerText(),
            /network error/i,
        );
        await page.unroute("**/dashboard/blog-categories/*");
        await page.getByRole("button", { name: "Cancel", exact: true }).click();
        await page
            .getByRole("button", {
                name: `Delete ${title} edited`,
                exact: true,
            })
            .click();
        await page.getByRole("button", { name: "Cancel", exact: true }).click();
        assert.equal(
            await page
                .getByRole("button", {
                    name: `Edit ${title} edited`,
                    exact: true,
                })
                .count(),
            1,
        );
        await page
            .getByRole("button", {
                name: `Delete ${title} edited`,
                exact: true,
            })
            .click();
        await page
            .getByRole("button", { name: "Delete category", exact: true })
            .click();
        await page.getByRole("dialog").waitFor({ state: "hidden" });
        await page.getByRole("textbox", { name: "Search categories" }).fill("");
        await page.waitForFunction(
            () => !new URL(location.href).searchParams.has("search"),
        );
        const usedRow = page
            .locator("tbody tr")
            .filter({
                has: page.locator("td:nth-child(3)", { hasText: /^[1-9]\d*$/ }),
            })
            .first();
        await usedRow.getByRole("button", { name: /^Delete / }).click();
        await page
            .getByRole("dialog", { name: "Category is in use" })
            .waitFor();
        assert.match(
            await page.getByRole("dialog").innerText(),
            /Move or delete all articles/,
        );
        assert.equal(
            await page
                .getByRole("button", { name: "Delete category", exact: true })
                .count(),
            0,
        );
        await page
            .getByRole("button", { name: "Close", exact: true })
            .last()
            .click();
        await shot("categories-desktop");
        console.log(
            "PASS category CRUD, validation, cancel, and used-category protection",
        );

        // Every rich-text field retains the same complete toolbar at every breakpoint.
        let expectedButtons;
        for (const mode of ["Light", "Dark"]) {
            await page.setViewportSize({ width: 1440, height: 1000 });
            await page.goto(`${url}/dashboard`);
            await page
                .getByRole("button", { name: `${mode} theme`, exact: true })
                .first()
                .click();
            for (const width of [1440, 768, 390]) {
                await page.setViewportSize({ width, height: 1000 });
                for (const [kind, id] of [
                    ["blogs", articleId],
                    ["services", serviceId],
                ]) {
                    await page.goto(`${url}/dashboard/${kind}/${id}/edit`);
                    await page.locator(".jodit-wysiwyg").first().waitFor();
                    const hosts = page.locator(".rich-text-editor");
                    assert.equal(await hosts.count(), 2);
                    for (let index = 0; index < 2; index++) {
                        const host = hosts.nth(index);
                        await page.waitForFunction(
                            (el) =>
                                el.shadowRoot
                                    .querySelector(".jodit-workplace")
                                    .getBoundingClientRect().height >= 159,
                            await host.elementHandle(),
                        );
                        const buttons = await host
                            .locator(".jodit-toolbar-button")
                            .evaluateAll((els) =>
                                els.map((el) => el.dataset.ref),
                            );
                        expectedButtons ||= buttons;
                        assert.deepEqual(
                            buttons,
                            expectedButtons,
                            `${kind} field ${index}: complete toolbar at ${width}px in ${mode}`,
                        );
                        for (const name of [
                            "fullsize",
                            "source",
                            "table",
                            "image",
                            "link",
                            "undo",
                            "redo",
                            "print",
                            "preview",
                        ])
                            assert.ok(buttons.includes(name), name);
                        await host
                            .locator('[data-ref="fullsize"] button')
                            .first()
                            .scrollIntoViewIfNeeded();
                        const before = await page
                            .locator(".admin-shell__content-scroll")
                            .evaluate((el) => ({
                                top: el.scrollTop,
                                overflow: el.style.overflow,
                            }));
                        await host
                            .locator('[data-ref="fullsize"] button')
                            .first()
                            .click();
                        await page.waitForFunction(() =>
                            document.querySelector(
                                ".rich-text-editor--fullscreen",
                            ),
                        );
                        const rect = await host.evaluate((el) => {
                            const r = el.shadowRoot
                                .querySelector(".jodit-container")
                                .getBoundingClientRect();
                            return {
                                x: r.x,
                                y: r.y,
                                width: r.width,
                                height: r.height,
                                topmost: document.elementFromPoint(5, 5) === el,
                            };
                        });
                        assert.deepEqual(rect, {
                            x: 0,
                            y: 0,
                            width,
                            height: 1000,
                            topmost: true,
                        });
                        assert.equal(
                            await page
                                .locator("body")
                                .evaluate((el) => el.style.overflow),
                            "hidden",
                        );
                        await host
                            .locator('[data-ref="source"] button')
                            .first()
                            .click();
                        await host
                            .locator("textarea.jodit-source__mirror")
                            .waitFor({ state: "visible" });
                        await host
                            .locator('[data-ref="source"] button')
                            .first()
                            .click();
                        await host
                            .locator('[data-ref="fullsize"] button')
                            .first()
                            .click();
                        assert.equal(
                            await host.getAttribute("class"),
                            "rich-text-editor",
                        );
                        assert.equal(
                            await page
                                .locator(".admin-shell__content-scroll")
                                .evaluate((el) => el.style.overflow),
                            before.overflow,
                        );
                        assert.ok(
                            Math.abs(
                                (await page
                                    .locator(".admin-shell__content-scroll")
                                    .evaluate((el) => el.scrollTop)) -
                                    before.top,
                            ) <= 1,
                            "Fullscreen exit restores the form scroll position",
                        );
                        assert.equal(
                            await page.evaluate(
                                () =>
                                    document.documentElement.scrollWidth <=
                                    innerWidth,
                            ),
                            true,
                        );
                    }
                    await page
                        .locator(".admin-shell__content-scroll")
                        .evaluate((el) => {
                            el.scrollTop = 0;
                        });
                    await shot(`${kind}-${mode}-${width}`);
                }
            }
        }
        console.log(
            "PASS all four fields: complete toolbar, source/fullscreen, light/dark, desktop/tablet/mobile",
        );

        // Source changes survive submission and both editor instances remain independent.
        await page.setViewportSize({ width: 1440, height: 1000 });
        for (const [kind, id] of [
            ["blogs", articleId],
            ["services", serviceId],
        ]) {
            await page.goto(`${url}/dashboard/${kind}/${id}/edit`);
            await page.locator(".jodit-wysiwyg").first().waitFor();
            for (let index = 0; index < 2; index++) {
                const host = page.locator(".rich-text-editor").nth(index);
                await host
                    .locator('[data-ref="source"] button')
                    .first()
                    .click();
                await host
                    .locator("textarea.jodit-source__mirror")
                    .fill(`<p>Saved ${kind} field ${index} browser check.</p>`);
                await host
                    .locator('[data-ref="source"] button')
                    .first()
                    .click();
            }
            await page
                .getByRole("button", { name: "Save changes", exact: true })
                .click();
            await page.waitForURL(`${url}/dashboard/${kind}`);
            await page.goto(`${url}/dashboard/${kind}/${id}/edit`);
            await page.locator(".jodit-wysiwyg").first().waitFor();
            for (let index = 0; index < 2; index++)
                assert.match(
                    await page
                        .locator(".rich-text-editor")
                        .nth(index)
                        .locator(".jodit-wysiwyg")
                        .innerText(),
                    new RegExp(`Saved ${kind} field ${index}`),
                );
        }
        const firstHost = page.locator(".rich-text-editor").first();
        await firstHost.locator('[data-ref="fullsize"] button').first().click();
        await page.setViewportSize({ width: 390, height: 844 });
        assert.equal(
            await firstHost.evaluate(
                (el) =>
                    el.shadowRoot
                        .querySelector(".jodit-container")
                        .getBoundingClientRect().width,
            ),
            390,
        );
        await page.evaluate(() => window.history.back());
        await page.waitForFunction(
            () => !document.querySelector(".rich-text-editor--fullscreen"),
        );
        assert.equal(
            await page.locator("body").evaluate((el) => el.style.overflow),
            "",
        );
        console.log(
            "PASS saved content, independent editors, fullscreen resize and navigation cleanup",
        );

        // Elevated-only account editing, cancel, and content-preserving deletion.
        await page.setViewportSize({ width: 1440, height: 1000 });
        await page.goto(`${url}/dashboard/admins`);
        const targetRow = page.locator("tr").filter({
            has: page.locator(`a[href="/dashboard/admins/${targetId}/edit"]`),
        });
        const originalName = await targetRow.locator("td").first().innerText();
        await targetRow
            .getByRole("link", { name: `Edit ${originalName}`, exact: true })
            .click();
        await page.locator("#admin-name").fill("");
        await page
            .getByRole("button", { name: "Save changes", exact: true })
            .click();
        await page.locator("#admin-name-error").waitFor();
        const editedName = `${originalName} edited`;
        await page.locator("#admin-name").fill(editedName);
        await page.route(`**/dashboard/admins/${targetId}`, (route) =>
            route.fulfill({
                status: 500,
                contentType: "text/html",
                body: "Simulated server failure",
            }),
        );
        await page
            .getByRole("button", { name: "Save changes", exact: true })
            .click();
        await page.locator(".management-form").getByRole("alert").waitFor();
        assert.match(
            await page.locator(".management-form").innerText(),
            /server could not complete/i,
        );
        assert.equal(
            await page.locator("#admin-name").inputValue(),
            editedName,
        );
        await page.unroute(`**/dashboard/admins/${targetId}`);
        await page
            .getByRole("button", { name: "Save changes", exact: true })
            .click();
        await page.waitForURL("**/dashboard/admins");
        await shot("admins-desktop");
        await page
            .getByRole("button", { name: `Delete ${editedName}`, exact: true })
            .click();
        assert.match(
            await page.getByRole("dialog").innerText(),
            /transferred to you/,
        );
        await page.getByRole("button", { name: "Cancel", exact: true }).click();
        await page.setViewportSize({ width: 390, height: 844 });
        await shot("admins-mobile");
        await page
            .getByRole("button", { name: `Delete ${editedName}`, exact: true })
            .click();
        await page
            .getByRole("button", { name: "Delete admin", exact: true })
            .click();
        await page.getByRole("dialog").waitFor({ state: "hidden" });
        assert.equal(
            await page
                .locator(`a[href="/dashboard/admins/${targetId}/edit"]`)
                .count(),
            0,
        );
        await page.goto(`${url}/dashboard/blogs`);
        if (env.MANAGEMENT_TEST_TRANSFER_ARTICLE)
            await page
                .getByText(env.MANAGEMENT_TEST_TRANSFER_ARTICLE, {
                    exact: true,
                })
                .waitFor();
        await page.goto(`${url}/dashboard/services`);
        if (env.MANAGEMENT_TEST_TRANSFER_SERVICE)
            await page
                .getByText(env.MANAGEMENT_TEST_TRANSFER_SERVICE, {
                    exact: true,
                })
                .waitFor();
        assert.deepEqual(errors, [], "No uncaught browser exceptions");
        console.log(
            "PASS admin edit validation, delete cancellation, deletion, and transferred-content access",
        );
    } finally {
        await browser.close();
    }
})().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
