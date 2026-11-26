export const navigation = [
    {
        heading: 'Overview',
        items: [
            {
                label: 'Dashboard',
                href: '/dashboard',
                exact: true,
                icon: 'pi pi-th-large',
            },
            {
                label: 'Website consultations',
                href: '/enquiries',
                icon: 'pi pi-inbox',
                badge: true,
            },
        ],
    },
    {
        heading: 'Content',
        items: [
            {
                label: 'Blogs',
                href: '/dashboard/blogs',
                icon: 'pi pi-file-edit',
            },
            {
                label: 'Article categories',
                href: '/dashboard/blog-categories',
                icon: 'pi pi-tags',
            },
            {
                label: 'Services',
                href: '/dashboard/services',
                icon: 'pi pi-briefcase',
            },
        ],
    },
    {
        heading: 'Settings',
        items: [
            {
                label: 'Profile',
                href: '/dashboard/profile',
                icon: 'pi pi-user',
                emailVerificationIndicator: true,
            },
            {
                label: 'Settings',
                href: '/dashboard/settings',
                icon: 'pi pi-cog',
            },
            {
                label: 'See admins',
                href: '/dashboard/admins',
                icon: 'pi pi-users',
                requiresAdmin: true,
            },
        ],
    },
];
