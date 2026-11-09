import { Link } from '@inertiajs/react';
import Button from '@/Components/Button';

export default function ResponsiveNavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    if (props.as === 'button') {
        return (
            <Button
                {...props}
                variant="ghost"
                size="sm"
                fullWidth
                className={`justify-start ${className}`}
            >
                {children}
            </Button>
        );
    }

    return (
        <Link
            {...props}
            className={`flex w-full items-start border-l-4 py-2 pe-4 ps-3 ${
                active
                    ? 'border-[var(--app-primary)] bg-[var(--surface-hover)] text-[var(--app-text)] focus:border-[var(--app-primary-hover)]'
                    : 'border-transparent text-[var(--app-text-secondary)] hover:border-[var(--app-border)] hover:bg-[var(--surface-hover)] hover:text-[var(--app-text)] focus:border-[var(--app-border)] focus:bg-[var(--surface-hover)] focus:text-[var(--app-text)]'
            } text-base font-medium transition duration-150 ease-in-out focus:outline-none ${className}`}
        >
            {children}
        </Link>
    );
}
