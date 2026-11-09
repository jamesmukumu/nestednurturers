import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setResolved } from '@/store/themeSlice';

export default function ThemeManager({ themeUrls }) {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.theme.mode);
    const resolved = useSelector((state) => state.theme.resolved);

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle('dark', resolved === 'dark');
        root.dataset.theme = resolved;
        root.style.colorScheme = resolved;

        const stylesheet = document.getElementById('primereact-theme');
        const nextHref = themeUrls[resolved];
        if (stylesheet && stylesheet.getAttribute('href') !== nextHref) {
            stylesheet.setAttribute('href', nextHref);
        }
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
