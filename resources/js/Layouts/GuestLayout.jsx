import { Link } from '@inertiajs/react';
import { Card } from 'primereact/card';
import ThemeToggle from '@/Components/ThemeToggle';
import './GuestLayout.css';

const heroImage = '/images/services/mom-and-baby-transparent-smaller-white-outline.png';

export default function GuestLayout({ children, title, subtitle, footer }) {
    return (
        <main className="auth-page">
            <aside className="auth-page__visual">
                <img
                    className="auth-page__image"
                    src={heroImage}
                    alt="Parent holding baby"
                    loading="lazy"
                />
                <Link
                    href="/"
                    className="auth-page__brand"
                    aria-label="Nested Nurturers home"
                >
                    Nested Nurturers
                </Link>
            </aside>
            <section className="auth-page__content" aria-label="Account access">
                <ThemeToggle className="auth-page__theme-toggle" />
                <Card className="auth-page__card">
                    <header className="auth-card-content__header">
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                    </header>
                    <div className="auth-card-content">{children}</div>
                    {footer && <div className="auth-card-content__footer">{footer}</div>}
                </Card>
            </section>
        </main>
    );
}
