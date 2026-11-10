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
        ],
    },
];
