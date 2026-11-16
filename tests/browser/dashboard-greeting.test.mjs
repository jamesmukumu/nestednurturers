import assert from "node:assert/strict";
import { test } from "node:test";
import { dashboardGreeting } from "../../resources/js/Pages/Admin/dashboardGreeting.js";

test("greetings follow the browser clock and use only the first name", () => {
    for (const [hour, period] of [
        [5, "morning"],
        [11, "morning"],
        [12, "afternoon"],
        [16, "afternoon"],
        [17, "evening"],
        [23, "evening"],
        [0, "evening"],
    ]) {
        assert.equal(
            dashboardGreeting(new Date(2026, 10, 16, hour), "  James Mukumu ")
                .title,
            `Good ${period}, James.`,
        );
    }
    assert.equal(
        dashboardGreeting(new Date(2026, 10, 16, 9), null).title,
        "Good morning, Admin.",
    );
});

test("encouragement is stable across rerenders and varies across visits", () => {
    const date = new Date(2026, 10, 16, 9);
    assert.deepEqual(
        dashboardGreeting(date, "James"),
        dashboardGreeting(date, "James"),
    );
    const messages = new Set(
        Array.from(
            { length: 24 },
            (_, hour) =>
                dashboardGreeting(new Date(2026, 10, 16, hour), "James")
                    .message,
        ),
    );
    assert.ok(messages.size >= 12);
});
