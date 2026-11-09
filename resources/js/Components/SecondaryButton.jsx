import Button from '@/Components/Button';

export default function SecondaryButton({
    type = 'button',
    className = '',
    children,
    ...props
}) {
    return (
        <Button
            {...props}
            type={type}
            variant="secondary"
            className={className}
        >
            {children}
        </Button>
    );
}
