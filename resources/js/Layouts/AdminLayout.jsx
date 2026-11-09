import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, router, usePage } from '@inertiajs/react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar } from 'primereact/avatar';
import { BreadCrumb } from 'primereact/breadcrumb';
import { InputText } from 'primereact/inputtext';
import { Menu } from 'primereact/menu';
import { Sidebar } from 'primereact/sidebar';
import { Tooltip } from 'primereact/tooltip';
import Button from '@/Components/Button';
import ThemeToggle from '@/Components/ThemeToggle';
import { setMobileSidebarOpen, toggleSidebarCollapsed } from '../store/uiSlice';
import { navigation } from './navigation';
import { useMediaQuery } from '../hooks/useMediaQuery';
import './AdminLayout.css';

function getInitials(name = '') {
    return name
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0].toUpperCase())
        .join('') || 'U';
}

function getCurrentPage(url) {
    const path = url.split('?')[0];

    if (path === '/dashboard/blogs') return 'Blogs';
    if (path === '/dashboard/blogs/create') return 'Create Article';
    if (/^\/dashboard\/blogs\/[^/]+\/edit$/.test(path)) return 'Edit Article';
    if (/^\/dashboard\/blogs\/[^/]+$/.test(path)) return 'Blog';
    if (path === '/dashboard/settings') return 'Settings';
    if (path === '/dashboard') return 'Dashboard';
    return 'Not found';
}

function menuActionTemplate(item, options) {
    return (
        <Button
            href={item.url}
            type="button"
            variant="ghost"
            size="sm"
            fullWidth
            leftIcon={item.icon ? <i className={item.icon} aria-hidden="true" /> : undefined}
            className="p-menuitem-link admin-shell__menu-action"
            aria-label={item.label}
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

function SidebarNavigation({ collapsed, url, onNavigate }) {
    const [expandedItems, setExpandedItems] = useState(['Blogs']);
    const path = url.split('?')[0];

    const toggleItem = (label) => {
        setExpandedItems((current) =>
            current.includes(label)
                ? current.filter((item) => item !== label)
                : [...current, label],
        );
    };

    return (
        <nav className="admin-shell__navigation" role="navigation" aria-label="Admin navigation">
            {navigation.map((section) => (
                <section className="admin-shell__nav-section" key={section.heading}>
                    {!collapsed && (
                        <h2 className="admin-shell__nav-heading">{section.heading}</h2>
                    )}
                    {section.items.map((item) => {
                        const active = item.href
                            ? path === item.href || path.startsWith(`${item.href}/`)
                            : item.children?.some((child) => child.href === path);

                        if (item.children) {
                            const expanded = expandedItems.includes(item.label);

                            return (
                                <div className="admin-shell__nav-group" key={item.label}>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className={`admin-shell__nav-link${active ? ' is-active' : ''}${collapsed ? ' is-collapsed admin-shell__tooltip-target' : ''}`}
                                        aria-label={collapsed ? item.label : undefined}
                                        aria-expanded={expanded}
                                        data-pr-tooltip={collapsed ? item.label : undefined}
                                        data-pr-position="right"
                                        onClick={() => toggleItem(item.label)}
                                    >
                                        <i className={`admin-shell__nav-icon ${item.icon}`} aria-hidden="true" />
                                        {!collapsed && <span className="admin-shell__nav-label">{item.label}</span>}
                                        {!collapsed && (
                                            <i
                                                className={`admin-shell__nav-chevron pi ${expanded ? 'pi-chevron-down' : 'pi-chevron-right'}`}
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Button>
                                    {expanded && (
                                        <div className={`admin-shell__subnav${collapsed ? ' is-collapsed' : ''}`}>
                                            {item.children.map((child) => {
                                                const childActive = path === child.href;

                                                return (
                                                    <Button
                                                        key={child.href}
                                                        href={child.href}
                                                        variant="ghost"
                                                        size="sm"
                                                        className={`admin-shell__nav-link admin-shell__subnav-link${childActive ? ' is-active' : ''}${collapsed ? ' is-collapsed admin-shell__tooltip-target' : ''}`}
                                                        aria-label={collapsed ? child.label : undefined}
                                                        aria-current={childActive ? 'page' : undefined}
                                                        data-pr-tooltip={collapsed ? child.label : undefined}
                                                        data-pr-position="right"
                                                        onClick={onNavigate}
                                                    >
                                                        <i className={`admin-shell__nav-icon ${child.icon}`} aria-hidden="true" />
                                                        {!collapsed && <span className="admin-shell__nav-label">{child.label}</span>}
                                                    </Button>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        }

                        const itemActive = path === item.href || path.startsWith(`${item.href}/`);

                        return (
                            <Button
                                key={item.href}
                                href={item.href}
                                variant="ghost"
                                size="sm"
                                className={`admin-shell__nav-link${itemActive ? ' is-active' : ''}${collapsed ? ' is-collapsed admin-shell__tooltip-target' : ''}`}
                                aria-label={collapsed ? item.label : undefined}
                                aria-current={itemActive ? 'page' : undefined}
                                data-pr-tooltip={collapsed ? item.label : undefined}
                                data-pr-position="right"
                                onClick={onNavigate}
                            >
                                <i className={`admin-shell__nav-icon ${item.icon}`} aria-hidden="true" />
                                {!collapsed && <span className="admin-shell__nav-label">{item.label}</span>}
                            </Button>
                        );
                    })}
                </section>
            ))}
        </nav>
    );
}

function SidebarContents({ collapsed, onNavigate, user, menuRef, url }) {
    return (
        <div className="admin-shell__sidebar-inner">
            <Link href="/dashboard" className="admin-shell__brand" aria-label="Nested Nurturers dashboard">
                <span className="admin-shell__brand-icon" aria-hidden="true">
                    <i className="pi pi-cloud" />
                </span>
                {!collapsed && (
                    <span className="admin-shell__brand-copy">
                        <strong>Nested Nurturers</strong>
                        <small>Admin console</small>
                    </span>
                )}
            </Link>

            <SidebarNavigation
                collapsed={collapsed}
                url={url}
                onNavigate={onNavigate}
            />

            <div className={`admin-shell__user${collapsed ? ' is-collapsed' : ''}`}>
                <Avatar label={getInitials(user?.name)} shape="circle" className="admin-shell__avatar" />
                {!collapsed && (
                    <div className="admin-shell__user-copy">
                        <strong>{user?.name || 'Administrator'}</strong>
                        <small>{user?.email || 'Admin account'}</small>
                    </div>
                )}
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    iconOnly
                    className="admin-shell__user-menu-button"
                    aria-label="Open account settings and logout menu"
                    onClick={(event) => menuRef.current?.toggle(event)}
                >
                    <i className="pi pi-ellipsis-v" aria-hidden="true" />
                </Button>
            </div>
        </div>
    );
}

export default function AdminLayout({ children }) {
    const dispatch = useDispatch();
    const collapsed = useSelector((state) => state.ui.sidebarCollapsed);
    const mobileSidebarOpen = useSelector((state) => state.ui.mobileSidebarOpen);
    const { url, props } = usePage();
    const user = props.auth?.user;
    const isDesktop = useMediaQuery('(min-width: 992px)');
    const menuRef = useRef(null);
    const pageTitle = getCurrentPage(url);
    const breadcrumbItems = useMemo(
        () => (pageTitle === 'Dashboard' ? [] : [{ label: pageTitle }]),
        [pageTitle],
    );

    const menuItems = useMemo(
        () => [
            {
                label: 'Settings',
                icon: 'pi pi-cog',
                url: '/dashboard/settings',
                template: menuActionTemplate,
            },
            { separator: true },
            {
                label: 'Log out',
                icon: 'pi pi-sign-out',
                command: () => router.post('/logout'),
                template: menuActionTemplate,
            },
        ],
        [],
    );

    useEffect(() => {
        if (!isDesktop) {
            dispatch(setMobileSidebarOpen(false));
        }
    }, [dispatch, isDesktop, url]);

    useEffect(() => {
        if (isDesktop || !mobileSidebarOpen) return undefined;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [isDesktop, mobileSidebarOpen]);

    const handleNavigation = () => dispatch(setMobileSidebarOpen(false));
    const handleMenuToggle = () => {
        if (isDesktop) {
            dispatch(toggleSidebarCollapsed());
            return;
        }
        dispatch(setMobileSidebarOpen(true));
    };

    return (
        <div className={`admin-shell${collapsed ? ' is-collapsed' : ''}`}>
            <aside className={`admin-shell__sidebar${collapsed ? ' is-collapsed' : ''}`}>
                <SidebarContents
                    collapsed={collapsed}
                    onNavigate={handleNavigation}
                    user={user}
                    menuRef={menuRef}
                    url={url}
                />
            </aside>

            <Sidebar
                visible={!isDesktop && mobileSidebarOpen}
                position="left"
                modal
                dismissable
                closeOnEscape
                blockScroll={false}
                showCloseIcon={false}
                className="admin-shell__mobile-sidebar"
                onHide={() => dispatch(setMobileSidebarOpen(false))}
            >
                <div className="admin-shell__mobile-sidebar-content">
                    <div className="admin-shell__mobile-sidebar-header">
                        <span className="admin-shell__brand-icon" aria-hidden="true">
                            <i className="pi pi-cloud" />
                        </span>
                        <strong>Nested Nurturers</strong>
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            iconOnly
                            aria-label="Close navigation menu"
                            onClick={() => dispatch(setMobileSidebarOpen(false))}
                        >
                            <i className="pi pi-times" aria-hidden="true" />
                        </Button>
                    </div>
                    <ThemeToggle className="admin-shell__mobile-theme-toggle" />
                    <SidebarNavigation
                        collapsed={false}
                        url={url}
                        onNavigate={handleNavigation}
                    />
                    <div className="admin-shell__mobile-user">
                        <Avatar label={getInitials(user?.name)} shape="circle" className="admin-shell__avatar" />
                        <div className="admin-shell__user-copy">
                            <strong>{user?.name || 'Administrator'}</strong>
                            <small>{user?.email || 'Admin account'}</small>
                        </div>
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            iconOnly
                            className="admin-shell__user-menu-button"
                            aria-label="Open account settings and logout menu"
                            onClick={(event) => menuRef.current?.toggle(event)}
                        >
                            <i className="pi pi-ellipsis-v" aria-hidden="true" />
                        </Button>
                    </div>
                </div>
            </Sidebar>

            <div className="admin-shell__workspace">
                <header className="admin-shell__topbar">
                    <div className="admin-shell__topbar-start">
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            iconOnly
                            className="admin-shell__icon-button"
                            aria-label={isDesktop ? 'Toggle sidebar' : 'Open navigation menu'}
                            aria-expanded={!isDesktop ? mobileSidebarOpen : undefined}
                            onClick={handleMenuToggle}
                        >
                            <i className="pi pi-bars" aria-hidden="true" />
                        </Button>
                        <BreadCrumb
                            aria-label="Breadcrumb"
                            className="admin-shell__breadcrumb"
                            home={{ icon: 'pi pi-home', url: '/dashboard', ariaLabel: 'Dashboard' }}
                            model={breadcrumbItems}
                        />
                    </div>

                    <div className="admin-shell__topbar-actions">
                        <ThemeToggle className="admin-shell__theme-toggle" />
                        <label className="admin-shell__search">
                            <i className="pi pi-search" aria-hidden="true" />
                            <InputText placeholder="Search" aria-label="Search dashboard" />
                            <kbd>Ctrl K</kbd>
                        </label>
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            iconOnly
                            className="admin-shell__icon-button admin-shell__search-trigger"
                            aria-label="Search dashboard"
                        >
                            <i className="pi pi-search" aria-hidden="true" />
                        </Button>
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            iconOnly
                            className="admin-shell__icon-button"
                            aria-label="Notifications, 3 unread"
                        >
                            <i className="pi pi-bell" aria-hidden="true" />
                            <span className="admin-shell__notification-badge" aria-hidden="true">3</span>
                        </Button>
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="admin-shell__avatar-button"
                            aria-label="Open account settings and logout menu"
                            aria-haspopup="true"
                            onClick={(event) => menuRef.current?.toggle(event)}
                        >
                            <Avatar label={getInitials(user?.name)} shape="circle" className="admin-shell__avatar" />
                        </Button>
                    </div>
                    <Menu model={menuItems} popup ref={menuRef} className="admin-shell__account-menu" />
                </header>

                <main className="admin-shell__content-scroll" role="main">
                    <div className="admin-shell__content">
                        {collapsed && (
                            <Tooltip target=".admin-shell__tooltip-target" position="right" showDelay={300} />
                        )}
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
