import { Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-[var(--app-primary)] text-[var(--app-text)] focus:border-[var(--app-primary-hover)]'
                    : 'border-transparent text-[var(--app-text-secondary)] hover:border-[var(--app-border)] hover:text-[var(--app-text)] focus:border-[var(--app-border)] focus:text-[var(--app-text)]') +
                className
            }
        >
            {children}
        </Link>
    );
}
