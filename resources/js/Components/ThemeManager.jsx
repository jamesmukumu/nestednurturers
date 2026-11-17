import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setResolved } from '@/store/themeSlice';

export default function ThemeManager({ themeUrls }) {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.theme.mode);
    const resolved = useSelector((state) => state.theme.resolved);

    useEffect(() => {
        const root = document.documentElement;
        const stylesheet = document.getElementById('primereact-theme');
        const applyTheme = () => {
            const isAdmin = document.querySelector('.admin-shell') !== null;
            const nextTheme = isAdmin ? resolved : 'light';

            root.classList.toggle('dark', nextTheme === 'dark');
            root.dataset.theme = nextTheme;
            root.style.colorScheme = nextTheme;

            const nextHref = themeUrls[nextTheme];
            if (stylesheet && stylesheet.getAttribute('href') !== nextHref) {
                stylesheet.setAttribute('href', nextHref);
            }
        };

        applyTheme();

        const observer = new MutationObserver(applyTheme);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => observer.disconnect();
    }, [resolved, themeUrls]);

    useEffect(() => {
        if (mode !== 'system' || typeof window.matchMedia !== 'function') return undefined;

        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const updateResolved = (event) => dispatch(setResolved(event.matches ? 'dark' : 'light'));
        updateResolved(media);

        if (typeof media.addEventListener === 'function') {
            media.addEventListener('change', updateResolved);
            return () => media.removeEventListener('change', updateResolved);
        }

        media.addListener(updateResolved);
        return () => media.removeListener(updateResolved);
    }, [dispatch, mode]);

    return null;
}
