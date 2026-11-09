import { useDispatch, useSelector } from 'react-redux';
import Button from '@/Components/Button';
import { selectThemeMode, setMode } from '@/store/themeSlice';

const modes = [
    { value: 'light', label: 'Light', icon: 'pi pi-sun' },
    { value: 'dark', label: 'Dark', icon: 'pi pi-moon' },
    { value: 'system', label: 'System', icon: 'pi pi-desktop' },
];

export default function ThemeToggle({ className = '' }) {
    const dispatch = useDispatch();
    const mode = useSelector(selectThemeMode);

    return (
        <div className={`theme-toggle ${className}`.trim()} role="group" aria-label="Color theme">
            {modes.map((option) => (
                <Button
                    key={option.value}
                    type="button"
                    variant={mode === option.value ? 'secondary' : 'ghost'}
                    size="sm"
                    className="theme-toggle__option"
                    aria-label={`${option.label} theme`}
                    aria-pressed={mode === option.value}
                    title={`${option.label} theme`}
                    onClick={() => dispatch(setMode(option.value))}
                >
                    <i className={option.icon} aria-hidden="true" />
                    <span>{option.label}</span>
                </Button>
            ))}
        </div>
    );
}
