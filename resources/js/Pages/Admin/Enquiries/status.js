export async function updateEnquiryStatus(id, status) {
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    const response = await fetch(`/enquiries/${encodeURIComponent(id)}/status`, {
        method: 'PATCH',
        credentials: 'same-origin',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRF-TOKEN': csrfToken || '',
        },
        body: JSON.stringify({ status }),
    });

    let result = null;
    try {
        result = await response.json();
    } catch {
        if (response.ok) {
            throw new Error('The server returned an invalid response. Please try again.');
        }
    }

    if (response.status === 429) {
        throw new Error('Too many status changes. Please wait a moment, then try again.');
    }
    if (response.status === 419) {
        throw new Error('Your session expired. Refresh the page, then try again.');
    }
    if (response.status === 403) {
        throw new Error('You don’t have permission to change this enquiry.');
    }
    if (!response.ok) {
        throw new Error(result?.message || 'We couldn’t update this enquiry. Please try again.');
    }
    if (!result?.enquiry) {
        throw new Error('The server could not confirm the status change. Please try again.');
    }

    return result.enquiry;
}
