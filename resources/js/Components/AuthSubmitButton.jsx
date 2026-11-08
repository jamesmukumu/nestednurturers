export default function AuthSubmitButton({ processing, label = 'Register' }) {
    return (
        <button
            type="submit"
            disabled={processing}
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ed69c2] to-[#a94f9c] px-6 py-3.5 text-sm font-semibold tracking-wide text-white shadow-[0_8px_20px_rgba(169,79,156,0.28)] transition duration-200 hover:-translate-y-0.5 hover:from-[#e357b5] hover:to-[#98418b] hover:shadow-[0_12px_24px_rgba(169,79,156,0.35)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#d98ac8]/40 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
        >
            {processing ? (
                <>
                    <svg
                        className="h-4 w-4 shrink-0 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="9"
                            stroke="currentColor"
                            strokeWidth="3"
                        />
                        <path
                            className="opacity-90"
                            fill="currentColor"
                            d="M12 3a9 9 0 0 1 9 9h-3a6 6 0 0 0-6-6V3Z"
                        />
                    </svg>
                    <span>Creating account…</span>
                </>
            ) : (
                <>
                    <span>{label}</span>
                    <i
                        className="pi pi-arrow-right text-xs transition-transform duration-200 group-hover:translate-x-0.5"
                        aria-hidden="true"
                    />
                </>
            )}
        </button>
    );
}
