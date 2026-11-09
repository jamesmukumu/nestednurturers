import Button from '@/Components/Button';

export default function AuthSubmitButton({
    processing,
    label = 'Register',
    processingLabel = 'Creating account…',
}) {
    return (
        <Button
            type="submit"
            fullWidth
            loading={processing}
            loadingLabel={processingLabel}
            rightIcon={<i className="pi pi-arrow-right text-xs app-button__arrow" aria-hidden="true" />}
        >
            <span>{label}</span>
        </Button>
    );
}
