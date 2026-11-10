export function formatDate(value, withTime = false) {
    if (!value) return '';

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;

    return new Intl.DateTimeFormat(undefined, withTime
        ? { dateStyle: 'medium', timeStyle: 'short' }
        : { dateStyle: 'medium' }).format(date);
}

export function formatServices(value) {
    if (!value) return '';

    try {
        const parsed = JSON.parse(value);
        if (Array.isArray(parsed)) {
            return parsed.filter((item) => typeof item === 'string' && item.trim()).join(', ');
        }
    } catch {
        return value;
    }

    return value;
}

export function formatPreview(enquiry) {
    return [
        enquiry.location && `Location: ${enquiry.location}`,
        enquiry.expectedDueTime && `Due: ${formatDate(enquiry.expectedDueTime)}`,
        enquiry.durationOfSupport && `Support: ${enquiry.durationOfSupport}`,
        enquiry.noNightsPerWeek && `Nights per week: ${enquiry.noNightsPerWeek}`,
    ].filter(Boolean).join(' · ');
}

export function EnquiryStatusBadge({ isAddressed }) {
    return (
        <span className={`enquiries-status${isAddressed ? ' is-addressed' : ' is-pending'}`}>
            <i className={`pi ${isAddressed ? 'pi-check-circle' : 'pi-clock'}`} aria-hidden="true" />
            {isAddressed ? 'Addressed' : 'Pending'}
        </span>
    );
}

export function EnquiryStatusButton({ isAddressed, disabled, onClick }) {
    return (
        <button
            type="button"
            className="enquiries-button enquiries-button--secondary"
            disabled={disabled}
            onClick={onClick}
        >
            {disabled ? 'Saving…' : isAddressed ? 'Reopen' : 'Mark as addressed'}
        </button>
    );
}
