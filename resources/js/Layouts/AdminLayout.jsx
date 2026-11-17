import { useEffect, useMemo, useRef } from "react";
import { Link, router, usePage } from "@inertiajs/react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "primereact/avatar";
import { Menu } from "primereact/menu";
import { Sidebar } from "primereact/sidebar";
import { Tooltip } from "primereact/tooltip";
import Button from "@/Components/Button";
import ThemeToggle from "@/Components/ThemeToggle";
import { setMobileSidebarOpen, toggleSidebarCollapsed } from "../store/uiSlice";
import { navigation } from "./navigation";
import { useMediaQuery } from "../hooks/useMediaQuery";

function initials(name = "") {
    return (
        name
            .trim()
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part[0].toUpperCase())
            .join("") || "A"
    );
}

function pageTitle(path) {
    if (path === "/dashboard") return "Overview";
    if (path === "/dashboard/blogs") return "Articles";
    if (path === "/dashboard/blogs/create") return "Create Article";
    if (/^\/dashboard\/blogs\/[^/]+\/edit$/.test(path)) return "Edit Article";
    if (/^\/dashboard\/blogs\/[^/]+$/.test(path)) return "Article";
    if (path === "/dashboard/profile") return "Your profile";
    if (path === "/dashboard/settings") return "Settings";
    if (path === "/enquiries") return "Consultations";
    if (/^\/enquiries\/[^/]+$/.test(path)) return "Consultation details";
    return "Page not found";
}

function accountAction(item, options) {
    return (
        <Button
            href={item.url}
            variant="ghost"
            size="sm"
            fullWidth
            className="p-menuitem-link admin-shell__menu-action"
            aria-label={item.label}
            leftIcon={<i className={item.icon} aria-hidden="true" />}
            tabIndex={options.tabIndex}
            onMouseMove={options.onMouseMove}
            onClick={(event) => {
                event.stopPropagation();
                options.onClick(event);
            }}
        >
            {item.label}
        </Button>
    );
}

function Navigation({ collapsed, path, onNavigate, pending, emailVerified }) {
    return (
        <nav className="admin-shell__navigation" aria-label="Admin navigation">
            {navigation.map((section) => (
                <section
                    className="admin-shell__nav-section"
                    key={section.heading}
                >
                    {!collapsed && (
                        <h2 className="admin-shell__nav-heading">
                            {section.heading}
                        </h2>
                    )}
                    {section.items.map((item) => {
                        const active = item.exact
                            ? path === item.href
                            : path === item.href ||
                              path.startsWith(`${item.href}/`);
                        const count = item.badge ? pending : 0;
                        const unverified =
                            item.emailVerificationIndicator && !emailVerified;
                        const label = [
                            item.label,
                            count > 0 ? `${count} pending enquiries` : "",
                            unverified ? "email not verified" : "",
                        ]
                            .filter(Boolean)
                            .join(", ");
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={onNavigate}
                                className={`admin-shell__nav-link${active ? " is-active" : ""}${collapsed ? " is-collapsed admin-shell__tooltip-target" : ""}`}
                                aria-label={
                                    collapsed || unverified ? label : undefined
                                }
                                aria-current={active ? "page" : undefined}
                                data-pr-tooltip={collapsed ? label : undefined}
                                data-pr-position="right"
                            >
                                <i
                                    className={`admin-shell__nav-icon ${item.icon}`}
                                    aria-hidden="true"
                                />
                                {!collapsed && (
                                    <span className="admin-shell__nav-label">
                                        {item.label}
                                    </span>
                                )}
                                {!collapsed && count > 0 && (
                                    <span
                                        className="admin-shell__nav-badge"
                                        aria-hidden="true"
                                    >
                                        {count > 99 ? "99+" : count}
                                    </span>
                                )}
                                {unverified && (
                                    <span
                                        className="admin-shell__verification-dot"
                                        aria-hidden="true"
                                    />
                                )}
                            </Link>
                        );
                    })}
                </section>
            ))}
        </nav>
    );
}

function SidebarContents({
    collapsed = false,
    mobile = false,
    onNavigate,
    onClose,
    user,
    menuRef,
    path,
    pending,
    emailVerified,
}) {
    return (
        <div className="admin-shell__sidebar-inner">
            <div className="admin-shell__brand-row">
                <Link
                    href="/dashboard"
                    onClick={onNavigate}
                    className="admin-shell__brand"
                    aria-label="Nested Nurturers dashboard"
                >
                    {collapsed ? (
                        <span
                            className="admin-shell__brand-icon"
                            aria-hidden="true"
                        >
                            NN
                        </span>
                    ) : (
                        <img
                            className="admin-shell__logo"
                            src="/images/updates-logo.jpeg"
                            alt="Nested Nurturers Doulas"
                        />
                    )}
                </Link>
                {mobile && (
                    <Button
                        variant="ghost"
                        size="sm"
                        iconOnly
                        aria-label="Close navigation menu"
                        onClick={onClose}
                    >
                        <i className="pi pi-times" aria-hidden="true" />
                    </Button>
                )}
            </div>
            <Navigation
                collapsed={collapsed}
                path={path}
                onNavigate={onNavigate}
                pending={pending}
                emailVerified={emailVerified}
            />
            <div className="admin-shell__sidebar-footer">
                {mobile && (
                    <ThemeToggle className="admin-shell__mobile-theme-toggle" />
                )}
                <button
                    type="button"
                    className={`admin-shell__account-trigger${collapsed ? " is-collapsed" : ""}`}
                    aria-label="Open account settings and logout menu"
                    aria-haspopup="menu"
                    onClick={(event) => menuRef.current?.toggle(event)}
                >
                    <Avatar
                        label={initials(user?.name)}
                        shape="circle"
                        className="admin-shell__avatar"
                    />
                    {!collapsed && (
                        <>
                            <span className="admin-shell__user-copy">
                                <strong>{user?.name || "Administrator"}</strong>
                                <small>{user?.email || "Admin account"}</small>
                            </span>
                            <i
                                className="pi pi-ellipsis-h"
                                aria-hidden="true"
                            />
                        </>
                    )}
                </button>
            </div>
        </div>
    );
}

export default function AdminLayout({ children }) {
    const dispatch = useDispatch();
    const collapsed = useSelector((state) => state.ui.sidebarCollapsed);
    const mobileOpen = useSelector((state) => state.ui.mobileSidebarOpen);
    const { url, props } = usePage();
    const path = url.split(/[?#]/)[0].replace(/\/+$/, "") || "/";
    const user = props.auth?.user;
    const pending = Number(props.pendingEnquiriesCount || 0);
    const desktop = useMediaQuery("(min-width: 992px)");
    const menuRef = useRef(null);
    const menuItems = useMemo(
        () => [
            {
                label: "Your profile",
                icon: "pi pi-user",
                url: "/dashboard/profile",
                template: accountAction,
            },
            {
                label: "Settings",
                icon: "pi pi-cog",
                url: "/dashboard/settings",
                template: accountAction,
            },
            { separator: true },
            {
                label: "Log out",
                icon: "pi pi-sign-out",
                command: () => router.post("/logout"),
                template: accountAction,
            },
        ],
        [],
    );

    useEffect(() => {
        dispatch(setMobileSidebarOpen(false));
    }, [dispatch, desktop, url]);
    useEffect(() => {
        if (desktop || !mobileOpen) return undefined;
        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = previous;
        };
    }, [desktop, mobileOpen]);

    const close = () => dispatch(setMobileSidebarOpen(false));
    const sidebarProps = {
        onNavigate: close,
        onClose: close,
        user,
        menuRef,
        path,
        pending,
        emailVerified: Boolean(props.auth?.emailVerified),
    };

    return (
        <div className={`admin-shell${collapsed ? " is-collapsed" : ""}`}>
            <aside
                className={`admin-shell__sidebar${collapsed ? " is-collapsed" : ""}`}
            >
                <SidebarContents {...sidebarProps} collapsed={collapsed} />
            </aside>
            <Sidebar
                visible={!desktop && mobileOpen}
                onHide={close}
                position="left"
                modal
                dismissable
                closeOnEscape
                blockScroll={false}
                showCloseIcon={false}
                className="admin-shell__mobile-sidebar"
                aria-label="Admin navigation drawer"
            >
                <SidebarContents {...sidebarProps} mobile />
            </Sidebar>
            <div className="admin-shell__workspace">
                <header className="admin-shell__topbar">
                    <div className="admin-shell__topbar-start">
                        <Button
                            variant="ghost"
                            size="sm"
                            iconOnly
                            className="admin-shell__icon-button"
                            aria-label={
                                desktop
                                    ? "Toggle sidebar"
                                    : "Open navigation menu"
                            }
                            aria-expanded={desktop ? !collapsed : mobileOpen}
                            onClick={() =>
                                desktop
                                    ? dispatch(toggleSidebarCollapsed())
                                    : dispatch(setMobileSidebarOpen(true))
                            }
                        >
                            <i className="pi pi-bars" aria-hidden="true" />
                        </Button>
                        <nav
                            className="admin-shell__breadcrumb"
                            aria-label="Breadcrumb"
                        >
                            <Link href="/dashboard">Workspace</Link>
                            <span aria-hidden="true">/</span>
                            <span aria-current="page">{pageTitle(path)}</span>
                        </nav>
                    </div>
                    <div className="admin-shell__topbar-actions">
                        <ThemeToggle className="admin-shell__theme-toggle" />
                        <Link
                            href="/enquiries?status=pending"
                            className="admin-shell__inbox"
                            aria-label={`Consultations, ${pending} pending`}
                        >
                            <i className="pi pi-inbox" aria-hidden="true" />
                            <span className="admin-shell__inbox-label">
                                Consultations
                            </span>
                            <span
                                className="admin-shell__inbox-count"
                                aria-hidden="true"
                            >
                                {pending > 99 ? "99+" : pending}
                            </span>
                        </Link>
                        <button
                            type="button"
                            className="admin-shell__avatar-button"
                            aria-label="Open account settings and logout menu"
                            aria-haspopup="menu"
                            onClick={(event) => menuRef.current?.toggle(event)}
                        >
                            <Avatar
                                label={initials(user?.name)}
                                shape="circle"
                                className="admin-shell__avatar"
                            />
                        </button>
                    </div>
                    <Menu
                        model={menuItems}
                        popup
                        ref={menuRef}
                        className="admin-shell__account-menu"
                    />
                </header>
                <main className="admin-shell__content-scroll">
                    <div className="admin-shell__content">
                        {collapsed && (
                            <Tooltip
                                target=".admin-shell__tooltip-target"
                                position="right"
                                showDelay={300}
                            />
                        )}
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
