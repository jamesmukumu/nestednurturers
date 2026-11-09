import Button from '@/Components/Button';

export default function PrimaryButton({
    className = '',
    children,
    type = 'submit',
    ...props
}) {
    return (
        <Button
            {...props}
            type={type}
            variant="primary"
            className={className}
        >
            {children}
        </Button>
    );
}
