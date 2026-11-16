const messages = [
    "Ready to make good things happen?",
    "A little focus. A meaningful difference.",
    "Your next great story starts here.",
    "Ready to rock? Your workspace is waiting.",
    "Small steps, thoughtful care, beautiful progress.",
    "Let’s turn today’s plans into something lovely.",
    "A fresh perspective looks good on you.",
    "Here’s to a day of meaningful connections.",
    "A little inspiration. A lot of possibility.",
    "Make room for your next good idea.",
    "Your care makes all the difference.",
    "Let’s make this a day worth remembering.",
    "The next chapter is yours to write.",
    "Take a breath. You’ve got this.",
    "Good work starts with a little heart.",
    "Something wonderful starts with showing up.",
];

export function dashboardGreeting(date, name) {
    const hour = date.getHours();
    const period =
        hour >= 5 && hour < 12
            ? "morning"
            : hour >= 12 && hour < 17
              ? "afternoon"
              : "evening";
    const firstName = name?.trim().split(/\s+/)[0] || "Admin";
    const index =
        (date.getDate() * 7 + date.getMonth() + hour) % messages.length;
    return { title: `Good ${period}, ${firstName}.`, message: messages[index] };
}
