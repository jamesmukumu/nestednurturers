export const navigation = [
    {
        heading: 'Overview',
        items: [
            {
                label: 'Dashboard',
                href: '/dashboard',
                icon: 'pi pi-th-large',
            },
        ],
    },
    {
        heading: 'Content',
        items: [
            {
                label: 'Editor',
                icon: 'pi pi-file-edit',
                children: [
                    {
                        label: 'Rich text editor',
                        href: '/dashboard/editor',
                        icon: 'pi pi-pencil',
                    },
                ],
            },
        ],
    },
    {
        heading: 'Settings',
        items: [
            {
                label: 'Settings',
                href: '/dashboard/settings',
                icon: 'pi pi-cog',
            },
        ],
    },
];
