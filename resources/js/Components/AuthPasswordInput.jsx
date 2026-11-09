import { Password } from 'primereact/password';
import Button from '@/Components/Button';

function PasswordToggle({ iconProps, label, hidden, props }) {
    return (
        <Button
            variant="ghost"
            size="sm"
            iconOnly
            type="button"
            tabIndex={iconProps.tabIndex}
            onClick={iconProps.onClick}
            disabled={props.disabled}
            aria-label={label}
            className="auth-form__password-toggle"
        >
            <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
                <circle cx="12" cy="12" r="2.5" />
                {hidden && <path d="m4 20 16-16" />}
            </svg>
        </Button>
    );
}

export default function AuthPasswordInput(props) {
    return (
        <Password
            {...props}
            className="auth-form__password"
            inputClassName="auth-form__input auth-form__password-input"
            toggleMask
            showIcon={(options) => (
                <PasswordToggle {...options} label="Show password" hidden={false} />
            )}
            hideIcon={(options) => (
                <PasswordToggle {...options} label="Hide password" hidden />
            )}
        />
    );
}
