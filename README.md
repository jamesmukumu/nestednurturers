# Nested Nurturers

Nested Nurturers is the website and operations hub for a postpartum doula and sleep-support practice serving growing families in the SF Bay Area. It helps prospective clients learn about care options, request a free consultation, and gives the care team a private workspace for managing enquiries and publishing resources.

## What it does

### Public website

- Introduces Nested Nurturers' prenatal, birth, postpartum, overnight, and sleep-support offerings.
- Presents services, pricing, FAQs, testimonials, and practice information.
- Publishes search-friendly blog articles and a sitemap.
- Renders the primary public pages server-side for a faster first load and better search indexing.

### Consultation intake

- Lets families choose a weekday consultation time in their own time zone.
- Collects contact details, location, desired support, expected due date, preferred start date, desired nights, and referral source.
- Stores each request with a unique consultation ID and sends an email notification.
- Supports queued follow-up reminders for outstanding enquiries.

### Admin workspace

- Uses a separate, verified admin login.
- Lets the team review, search, filter, and paginate consultation requests.
- Tracks whether an enquiry is pending or addressed, including who handled it and when.
- Provides blog and category management, plus profile and settings pages.

## Technology

- **Backend:** PHP 8.2+, Laravel 11, MySQL 8.4
- **Frontend:** React 18, Inertia.js, Vite, Tailwind CSS, Redux Toolkit, PrimeReact
- **Content and SEO:** public blog, JSON-LD metadata, sitemap generation
- **Background work:** Laravel database queue for mail and follow-up work
- **Deployment:** Docker Compose with PHP-FPM, Nginx, Node-based Inertia SSR, MySQL, and a queue worker

## Local development

### Prerequisites

- PHP 8.2 or newer with Composer
- Node.js 22 or newer with npm
- MySQL 8.4 (or a compatible MySQL server)

### Set up the application

```sh
git clone <repository-url>
cd nestednurturers
composer setup
```

`composer setup` installs PHP and JavaScript dependencies, creates `.env` when needed, generates an application key, runs migrations, and builds the frontend.

Before running the app, review `.env` and configure at least the database connection and mail transport. For local development, `MAIL_MAILER=log` writes outgoing messages to the Laravel log; use a real mail provider when testing email delivery.

### Run the development services

```sh
composer dev
```

This starts the Laravel server, Vite development server, and database queue listener together. Visit the address shown by Laravel, normally [http://localhost:8000](http://localhost:8000).

Alternatively, run the services separately:

```sh
php artisan serve
npm run dev
php artisan queue:work
```

## Docker deployment

The production Compose stack includes these services:

| Service | Responsibility |
| --- | --- |
| `web` | Nginx web server, exposed on `APP_PORT` (default `8080`) |
| `app` | Laravel PHP-FPM application |
| `ssr` | Inertia React server-side rendering service |
| `queue` | Persistent Laravel database queue worker |
| `db` | MySQL 8.4 database |

1. Copy `.env.example` to `.env`.
2. Set a strong, unique `APP_KEY` and `DB_PASSWORD`. Set `APP_PORT` if port `8080` is unavailable.
3. Configure a production `APP_URL` and a working mail transport.
4. Build and start the stack:

```sh
docker compose up --build -d
docker compose exec app php artisan migrate --force
```

Open [http://localhost:8080](http://localhost:8080), or the port configured in `APP_PORT`.

Application storage and MySQL data use named Docker volumes. Rebuild the `app`, `ssr`, and `queue` services after backend or frontend deployment changes:

```sh
docker compose up --build -d app ssr queue
```

Follow background processing with:

```sh
docker compose logs -f queue
```

### Scheduled follow-ups

The application schedules `app:consultations-follow-up` every minute. Docker Compose does not currently define a scheduler service, so run one alongside the stack if those reminders are required:

```sh
docker compose exec app php artisan schedule:work
```

For a long-running production deployment, run that command under your process manager or add a dedicated scheduler service.

## Useful commands

```sh
# Run the test suite
composer test

# Build browser and SSR bundles
npm run build

# Apply outstanding database migrations
php artisan migrate

# Process queued work locally
php artisan queue:work
```

## Key routes

| Area | Routes |
| --- | --- |
| Public site | `/`, `/about`, `/services`, `/pricing`, `/faq`, `/contact` |
| Resources | `/blogs`, `/blog/{slug}`, `/sitemap` |
| Consultation intake | `POST /api/submit/enquiry` |
| Admin | `/dashboard`, `/enquiries`, `/dashboard/blogs` |

Admin routes require an authenticated, verified admin account. Do not commit `.env` or production credentials.

## Project structure

```text
app/                    Laravel actions, controllers, jobs, mail, and models
database/               Migrations, factories, and seeders
resources/js/           Inertia pages, React components, layouts, and state
resources/views/        Blade application and email templates
routes/                 Public, admin, auth, API, and scheduled routes
docker/                 Nginx configuration
tests/                  Pest feature and unit tests
```

## License

This is a private application for Nested Nurturers. All rights reserved.
