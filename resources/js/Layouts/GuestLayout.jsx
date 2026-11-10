import { Link } from '@inertiajs/react';
import { Card } from 'primereact/card';
import './GuestLayout.css';

const heroImage = '/images/services/mature-doula-providing-inhome-blood-pressure-monitoring-support-expectant-mothers_209190-192189.jpg';

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
                    <img
                        className="auth-page__logo"
                        src="/images/updates-logo.jpeg"
                        alt=""
                        loading="lazy"
                    />
                </Link>
            </aside>
            <section className="auth-page__content" aria-label="Account access">
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
