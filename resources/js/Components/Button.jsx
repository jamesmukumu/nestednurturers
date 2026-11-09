import { Link } from '@inertiajs/react';
import { Children, cloneElement, forwardRef } from 'react';

const Button = forwardRef(function Button({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    loading = false,
    loadingLabel = 'Loading…',
    disabled = false,
    leftIcon,
    rightIcon,
    iconOnly = false,
    type = 'button',
    href,
    asChild = false,
    className = '',
    children,
    onClick,
    ...props
}, ref) {
    const isDisabled = disabled || loading;
    const classes = [
        'app-button',
        `app-button--${variant}`,
        `app-button--${size}`,
        fullWidth && 'app-button--full-width',
        iconOnly && 'app-button--icon-only',
        className,
    ].filter(Boolean).join(' ');

    const content = (
        <>
            <span className="app-button__content">
                {leftIcon && <span className="app-button__icon" aria-hidden="true">{leftIcon}</span>}
                {children}
                {rightIcon && <span className="app-button__icon" aria-hidden="true">{rightIcon}</span>}
            </span>
            {loading && (
                <>
                    <span className="app-button__spinner" aria-hidden="true" />
                    <span className="sr-only" role="status">{loadingLabel}</span>
                </>
            )}
        </>
    );

    const handleClick = (event) => {
        if (isDisabled) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        onClick?.(event);
    };

    if (asChild) {
        const child = Children.only(children);
        const childClick = child.props.onClick;

        return cloneElement(child, {
            ...props,
            ref,
            className: `${classes} ${child.props.className || ''}`.trim(),
            'aria-disabled': isDisabled || undefined,
            'aria-busy': loading || undefined,
            onClick: (event) => {
                if (isDisabled) {
                    handleClick(event);
                    return;
                }

                childClick?.(event);
                if (!event.defaultPrevented) {
                    handleClick(event);
                }
            },
            children: content,
        });
    }

    if (href) {
        return (
            <Link
                {...props}
                href={href}
                ref={ref}
                type={props.as === 'button' ? type : undefined}
                className={classes}
                aria-disabled={isDisabled || undefined}
                aria-busy={loading || undefined}
                tabIndex={isDisabled ? -1 : props.tabIndex}
                onClick={handleClick}
            >
                {content}
            </Link>
        );
    }

    return (
        <button
            {...props}
            ref={ref}
            type={type}
            disabled={isDisabled}
            aria-busy={loading || undefined}
            className={classes}
            onClick={handleClick}
        >
            {content}
        </button>
    );
});

export default Button;
