import Button from '@/Components/Button';

export default function DangerButton({
    className = '',
    children,
    type = 'submit',
    ...props
}) {
    return (
        <Button
            {...props}
            type={type}
            variant="danger"
            className={className}
        >
            {children}
        </Button>
    );
}
