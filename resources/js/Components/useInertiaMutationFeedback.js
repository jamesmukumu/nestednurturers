import { useEffect, useRef } from "react";
import { router } from "@inertiajs/react";

// Inertia 2 reports transport failures through router events, not visit callbacks.
export default function useInertiaMutationFeedback(setError) {
    const active = useRef(false);
    useEffect(() => {
        const stopInvalid = router.on("invalid", (event) => {
            if (!active.current) return;
            event.preventDefault();
            setError(
                "The server could not complete this request. Refresh the page and try again.",
            );
        });
        const stopException = router.on("exception", (event) => {
            if (!active.current) return;
            event.preventDefault();
            setError(
                "A network error interrupted the request. Please try again.",
            );
        });
        return () => {
            stopInvalid();
            stopException();
            active.current = false;
        };
    }, [setError]);
    return {
        startMutation: () => {
            active.current = true;
        },
        finishMutation: () => {
            active.current = false;
        },
    };
}
