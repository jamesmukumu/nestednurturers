import { useEffect, useId, useState } from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import AdminLayout from "../../Layouts/AdminLayout";
import Button from "@/Components/Button";
import { dashboardGreeting } from "./dashboardGreeting";
import "./dashboard.css";

const number = (value) => new Intl.NumberFormat().format(value);
const actions = [
    {
        href: "/enquiries",
        icon: "pi-inbox",
        title: "View consultations",
        detail: "Be there for the next family",
        tone: "blue",
    },
    {
        href: "/dashboard/blogs",
        icon: "pi-file-edit",
        title: "View blogs",
        detail: "Give your ideas a home",
        tone: "purple",
    },
    {
        href: "/dashboard/blogs/create",
        icon: "pi-plus",
        title: "Write an article",
        detail: "Share something worth reading",
        tone: "rose",
    },
    {
        href: "/dashboard/profile",
        icon: "pi-user",
        title: "Your profile",
        detail: "Keep your details up to date",
        tone: "green",
    },
];

function ActivityChart({ activity, timezone }) {
    const [metric, setMetric] = useState("consultations");
    const [focused, setFocused] = useState(null);
    const gradientId = useId().replace(/:/g, "");
    const total = activity.reduce((sum, month) => sum + month[metric], 0);
    const ceiling = Math.max(
        4,
        Math.ceil(Math.max(...activity.map((month) => month[metric]), 0) / 4) *
            4,
    );

    return (
        <section
            className="dashboard-panel dashboard-activity"
            aria-labelledby="activity-heading"
        >
            <div className="dashboard-panel__heading">
                <div>
                    <span className="dashboard-eyebrow">
                        THE BIGGER PICTURE
                    </span>
                    <h2 id="activity-heading">A little momentum.</h2>
                </div>
                <div
                    className="dashboard-segmented"
                    role="group"
                    aria-label="Activity metric"
                >
                    {["consultations", "articles"].map((value) => (
                        <button
                            key={value}
                            type="button"
                            aria-pressed={metric === value}
                            onClick={() => {
                                setMetric(value);
                                setFocused(null);
                            }}
                        >
                            {value === "consultations"
                                ? "Consultations"
                                : "Your articles"}
                        </button>
                    ))}
                </div>
            </div>
            <div className="dashboard-activity__summary">
                <strong>{number(total)}</strong>
                <span>
                    {metric === "consultations"
                        ? "consultations received"
                        : "articles created"}
                    <small>Last six months · {timezone}</small>
                </span>
                <span className="dashboard-activity__legend">
                    <i />{" "}
                    {metric === "consultations" ? "Consultations" : "Articles"}
                </span>
            </div>
            <svg
                className="dashboard-chart"
                viewBox="0 0 620 220"
                role="group"
                aria-label={`Monthly ${metric} for the last six months`}
            >
                <defs>
                    <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="0%"
                            stopColor="var(--dashboard-chart-top)"
                        />
                        <stop
                            offset="100%"
                            stopColor="var(--dashboard-chart-bottom)"
                        />
                    </linearGradient>
                </defs>
                {[0, 1, 2, 3, 4].map((tick) => (
                    <g key={tick} aria-hidden="true">
                        <line
                            x1="36"
                            x2="610"
                            y1={176 - tick * 38}
                            y2={176 - tick * 38}
                            className="dashboard-chart__grid"
                        />
                        <text x="23" y={180 - tick * 38} textAnchor="end">
                            {number((ceiling * tick) / 4)}
                        </text>
                    </g>
                ))}
                {activity.map((month, index) => {
                    const height = (month[metric] / ceiling) * 152;
                    const x = 58 + index * 94;
                    return (
                        <g
                            key={month.month}
                            tabIndex={0}
                            role="img"
                            aria-label={`${month.fullLabel}: ${month[metric]} ${metric}`}
                            onMouseEnter={() => setFocused(index)}
                            onMouseLeave={() => setFocused(null)}
                            onFocus={() => setFocused(index)}
                            onBlur={() => setFocused(null)}
                            className="dashboard-chart__column"
                        >
                            <title>
                                {month.fullLabel}: {month[metric]} {metric}
                            </title>
                            <rect
                                x={x - 8}
                                y="16"
                                width="68"
                                height="162"
                                fill="transparent"
                            />
                            <rect
                                x={x}
                                y={176 - height}
                                width="48"
                                height={height}
                                rx="7"
                                fill={`url(#${gradientId})`}
                                opacity={
                                    focused === null || focused === index
                                        ? 1
                                        : 0.5
                                }
                            />
                            {focused === index && (
                                <text
                                    x={x + 24}
                                    y={Math.max(14, 165 - height)}
                                    textAnchor="middle"
                                    className="dashboard-chart__value"
                                >
                                    {number(month[metric])}
                                </text>
                            )}
                            <text x={x + 24} y="205" textAnchor="middle">
                                {month.label}
                            </text>
                        </g>
                    );
                })}
            </svg>
            {total === 0 && (
                <p className="dashboard-chart__empty">
                    Your story is just getting started. Activity will appear
                    here as it comes in.
                </p>
            )}
            <table className="sr-only">
                <caption>Monthly activity</caption>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Consultations</th>
                        <th>Your articles</th>
                    </tr>
                </thead>
                <tbody>
                    {activity.map((month) => (
                        <tr key={month.month}>
                            <th>{month.fullLabel}</th>
                            <td>{month.consultations}</td>
                            <td>{month.articles}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

function PublishingStatus({ articles }) {
    const percent = articles.total
        ? Math.round((articles.published / articles.total) * 100)
        : 0;
    return (
        <section
            className="dashboard-panel dashboard-publishing"
            aria-labelledby="publishing-heading"
        >
            <span className="dashboard-eyebrow">WORDS THAT CONNECT</span>
            <h2 id="publishing-heading">Your publishing space.</h2>
            <div
                className={`dashboard-donut${articles.total === 0 ? " is-empty" : ""}`}
                style={{ "--published": `${percent}%` }}
                role="img"
                aria-label={`${articles.published} published articles, ${articles.drafts} drafts`}
            >
                <div>
                    <strong>{number(articles.total)}</strong>
                    <span>total articles</span>
                </div>
            </div>
            <div className="dashboard-publishing__legend">
                <span>
                    <i className="is-published" /> Published{" "}
                    <strong>{number(articles.published)}</strong>
                </span>
                <span>
                    <i /> Drafts <strong>{number(articles.drafts)}</strong>
                </span>
            </div>
            <p>
                {articles.total === 0
                    ? "Every great resource starts with a first draft."
                    : articles.drafts > 0
                      ? `${number(articles.drafts)} ${articles.drafts === 1 ? "idea is" : "ideas are"} waiting for your finishing touch.`
                      : "Your words are out there making a difference."}
            </p>
            <Link href="/dashboard/blogs" className="dashboard-text-link">
                Manage your articles{" "}
                <i className="pi pi-arrow-up-right" aria-hidden="true" />
            </Link>
        </section>
    );
}

function Dashboard({ dashboard }) {
    const { auth } = usePage().props;
    const [date, setDate] = useState(() => new Date());
    useEffect(() => {
        const timer = window.setInterval(() => setDate(new Date()), 60_000);
        return () => window.clearInterval(timer);
    }, []);
    const greeting = dashboardGreeting(date, auth?.user?.name);
    const { articles, consultations, pendingConsultations } = dashboard;
    const stats = [
        {
            label: "Team admins",
            value: dashboard.admins,
            icon: "pi-users",
            note: "Growing together",
            tone: "purple",
        },
        {
            label: "Your articles",
            value: articles.total,
            icon: "pi-file-edit",
            note: `${number(articles.published)} published`,
            tone: "blue",
            href: "/dashboard/blogs",
        },
        {
            label: "Consultations",
            value: consultations.total,
            icon: "pi-comments",
            note: `${number(consultations.addressed)} addressed`,
            tone: "green",
            href: "/enquiries",
        },
        {
            label: "New this week",
            value: consultations.newThisWeek,
            icon: "pi-bolt",
            note: "Received in the last 7 days",
            tone: "rose",
            href: "/enquiries?status=all&sort=-created_at",
        },
        {
            label: "Awaiting a reply",
            value: consultations.pending,
            icon: "pi-inbox",
            note: "Pending consultations",
            tone: "amber",
            href: "/enquiries?status=pending",
        },
    ];

    return (
        <>
            <Head title="Dashboard" />
            <div className="dashboard-page">
                <header className="dashboard-welcome">
                    <div className="dashboard-welcome__copy">
                        <span className="dashboard-eyebrow">
                            <i className="pi pi-sun" aria-hidden="true" /> A
                            LITTLE CARE GOES A LONG WAY
                        </span>
                        <h1>{greeting.title}</h1>
                        <p>{greeting.message}</p>
                        <Button
                            href="/dashboard/blogs/create"
                            className="dashboard-primary-action"
                            rightIcon={
                                <i
                                    className="pi pi-arrow-up-right"
                                    aria-hidden="true"
                                />
                            }
                        >
                            Create Article
                        </Button>
                    </div>
                    <div className="dashboard-welcome__aside">
                        <span
                            className="dashboard-welcome__flower"
                            aria-hidden="true"
                        >
                            ✳
                        </span>
                        <time dateTime={date.toISOString()}>
                            {new Intl.DateTimeFormat(undefined, {
                                weekday: "long",
                                month: "long",
                                day: "numeric",
                            }).format(date)}
                        </time>
                        <span className="dashboard-live">
                            <i /> Your workspace, in focus
                        </span>
                    </div>
                </header>

                <div className="dashboard-section-title">
                    <h2>Here’s where things stand</h2>
                    <span>
                        Updated{" "}
                        {new Intl.DateTimeFormat(undefined, {
                            hour: "numeric",
                            minute: "2-digit",
                        }).format(new Date(dashboard.generatedAt))}
                    </span>
                </div>
                <section
                    className="dashboard-stats"
                    aria-label="Workspace statistics"
                >
                    {stats.map((stat) => {
                        const Tag = stat.href ? Link : "div";
                        return (
                            <Tag
                                key={stat.label}
                                {...(stat.href ? { href: stat.href } : {})}
                                className={`dashboard-stat dashboard-tone--${stat.tone}`}
                            >
                                <div className="dashboard-stat__top">
                                    <span>{stat.label}</span>
                                    <i
                                        className={`dashboard-stat__icon pi ${stat.icon}`}
                                        aria-hidden="true"
                                    />
                                </div>
                                <strong>{number(stat.value)}</strong>
                                <small>{stat.note}</small>
                            </Tag>
                        );
                    })}
                </section>

                <div className="dashboard-charts">
                    <ActivityChart
                        activity={dashboard.activity}
                        timezone={dashboard.timezone}
                    />
                    <PublishingStatus articles={articles} />
                </div>

                <div className="dashboard-bottom">
                    <section
                        className="dashboard-panel dashboard-inbox"
                        aria-labelledby="inbox-heading"
                    >
                        <div className="dashboard-panel__heading">
                            <div>
                                <span className="dashboard-eyebrow">
                                    A HUMAN CONNECTION
                                </span>
                                <h2 id="inbox-heading">
                                    A little attention, a big difference.
                                </h2>
                            </div>
                            <Link
                                href="/enquiries?status=pending"
                                className="dashboard-text-link"
                            >
                                View all{" "}
                                <i
                                    className="pi pi-arrow-up-right"
                                    aria-hidden="true"
                                />
                            </Link>
                        </div>
                        {pendingConsultations.length > 0 ? (
                            <div className="dashboard-inbox__rows">
                                {pendingConsultations.map((consultation) => (
                                    <Link
                                        key={consultation.id}
                                        href={`/enquiries/${consultation.id}`}
                                        className="dashboard-inbox__row"
                                    >
                                        <span
                                            className="dashboard-inbox__avatar"
                                            aria-hidden="true"
                                        >
                                            {consultation.name
                                                .trim()
                                                .split(/\s+/)
                                                .slice(0, 2)
                                                .map((part) => part[0])
                                                .join("")
                                                .toUpperCase()}
                                        </span>
                                        <span className="dashboard-inbox__name">
                                            <strong>{consultation.name}</strong>
                                            <small>
                                                {consultation.location}
                                            </small>
                                        </span>
                                        <span className="dashboard-inbox__status">
                                            Pending
                                        </span>
                                        <i
                                            className="pi pi-arrow-up-right"
                                            aria-hidden="true"
                                        />
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="dashboard-inbox__empty">
                                <i
                                    className="pi pi-check-circle"
                                    aria-hidden="true"
                                />
                                <h3>You’re all caught up.</h3>
                                <p>
                                    No pending consultations. A little breathing
                                    room, well earned.
                                </p>
                            </div>
                        )}
                    </section>

                    <section
                        className="dashboard-panel dashboard-shortcuts"
                        aria-labelledby="shortcuts-heading"
                    >
                        <span className="dashboard-eyebrow">
                            MAKE YOUR NEXT MOVE
                        </span>
                        <h2 id="shortcuts-heading">
                            Right where you need to be.
                        </h2>
                        <div>
                            {actions.map((action) => (
                                <Link
                                    key={action.href}
                                    href={action.href}
                                    className={`dashboard-shortcut dashboard-tone--${action.tone}`}
                                >
                                    <i
                                        className={`dashboard-shortcut__icon pi ${action.icon}`}
                                        aria-hidden="true"
                                    />
                                    <span>
                                        <strong>{action.title}</strong>
                                        <small>{action.detail}</small>
                                    </span>
                                    <i
                                        className="pi pi-arrow-up-right"
                                        aria-hidden="true"
                                    />
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>
                <footer className="dashboard-footer">
                    <i className="pi pi-heart" aria-hidden="true" /> Thoughtful
                    care starts with the people behind it.
                </footer>
            </div>
        </>
    );
}

Dashboard.layout = (page) => <AdminLayout>{page}</AdminLayout>;

export default Dashboard;
