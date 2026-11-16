<?php

use App\Models\Admin;
use App\Models\Blog;
use App\Models\BlogCategory;
use App\Models\Consultation;
use Inertia\Testing\AssertableInertia as Assert;

test('public homepage remains available', function () {
    $this->get('/')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('Home'));
});

test('css layer order is declared before the theme and vite assets', function () {
    $response = $this->get('/login')
        ->assertOk()
        ->assertSeeInOrder([
            '<style>@layer tailwind-base, primereact, tailwind-utilities;</style>',
            '<meta id="primereact-theme-insertion-point">',
        ], false);

    $this->assertMatchesRegularExpression(
        '~id="primereact-theme-insertion-point".*?(?:/build/assets/|/resources/js/app\.jsx)~s',
        $response->getContent(),
    );
});

test('dashboard routes require authentication', function () {
    $this->get('/dashboard')->assertRedirect(route('login'));
    $this->get('/dashboard/editor')->assertRedirect('/dashboard/blogs');
    $this->get('/dashboard/settings')->assertRedirect(route('login'));
});

test('authenticated users can open dashboard pages', function () {
    $this->actingAs(Admin::factory()->create(), 'admin');

    $this->get('/dashboard')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('Admin/Dashboard'));

    $this->get('/dashboard/editor')->assertRedirect('/dashboard/blogs');

    $this->get('/dashboard/settings')
        ->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('Admin/Settings'));
});

test('unknown dashboard pages return an inertia 404 page', function () {
    $this->actingAs(Admin::factory()->create(), 'admin')
        ->get('/dashboard/unknown')
        ->assertNotFound()
        ->assertInertia(fn (Assert $page) => $page->component('Admin/NotFound'));
});

function dashboardConsultation(array $attributes = []): Consultation
{
    $consultation = new Consultation;
    $consultation->forceFill(array_merge([
        'name' => 'Test Family', 'email' => 'family@example.test', 'phonenumber' => '+14155550123',
        'consultationDate' => '2026-12-01 10:00:00', 'consultationID' => (string) Illuminate\Support\Str::uuid(),
        'location' => 'Oakland', 'expected_due_time' => '2026-12-01',
        'preferred_douala_services_start' => '2026-12-01', 'duration_of_support' => 'Six weeks',
        'no_nights_per_week' => '[]',
    ], $attributes))->save();

    return $consultation;
}

test('dashboard shows live workspace statistics and scopes articles to the signed in admin', function () {
    $this->travelTo(now()->setDate(2026, 11, 16)->setTime(9, 0));
    $admin = Admin::factory()->create();
    $other = Admin::factory()->create();
    $category = BlogCategory::factory()->create(['admins_id' => $admin->id]);
    Blog::factory()->count(2)->create(['admins_id' => $admin->id, 'blog_categories_id' => $category->id, 'is_published' => true]);
    Blog::factory()->create(['admins_id' => $admin->id, 'blog_categories_id' => $category->id]);
    Blog::factory()->create(['admins_id' => $other->id, 'blog_categories_id' => $category->id, 'is_published' => true]);
    $newest = dashboardConsultation();
    dashboardConsultation(['created_at' => now()->subDays(2), 'addressed_at' => now(), 'addressed_by' => $admin->id]);
    dashboardConsultation(['created_at' => now()->subDays(10)]);
    dashboardConsultation(['created_at' => '2026-05-31 23:59:59']);

    $this->actingAs($admin, 'admin')->get('/dashboard')->assertOk()
        ->assertInertia(fn (Assert $page) => $page->component('Admin/Dashboard')
            ->where('dashboard.admins', 2)
            ->where('dashboard.articles', ['total' => 3, 'published' => 2, 'drafts' => 1])
            ->where('dashboard.consultations', ['total' => 4, 'pending' => 3, 'addressed' => 1, 'newThisWeek' => 2])
            ->has('dashboard.activity', 6)
            ->where('dashboard.activity.0.month', '2026-06')
            ->where('dashboard.activity.0.consultations', 0)
            ->where('dashboard.activity.5.consultations', 3)
            ->where('dashboard.activity.5.articles', 3)
            ->has('dashboard.pendingConsultations', 3)
            ->where('dashboard.pendingConsultations.0.id', $newest->id)
            ->missing('dashboard.pendingConsultations.0.email'));
});

test('dashboard returns usable zero states for a new workspace', function () {
    $admin = Admin::factory()->create();
    $this->actingAs($admin, 'admin')->get('/dashboard')->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->where('dashboard.admins', 1)
            ->where('dashboard.articles', ['total' => 0, 'published' => 0, 'drafts' => 0])
            ->where('dashboard.consultations', ['total' => 0, 'pending' => 0, 'addressed' => 0, 'newThisWeek' => 0])
            ->has('dashboard.activity', 6)
            ->where('dashboard.activity', fn ($months) => collect($months)->every(fn ($month) => $month['consultations'] === 0 && $month['articles'] === 0))
            ->has('dashboard.pendingConsultations', 0));
});

test('dashboard reporting handles year rollover and exact seven day and month boundaries', function () {
    $this->travelTo(now()->setDate(2026, 1, 15)->setTime(12, 0));
    $admin = Admin::factory()->create();
    foreach (['2025-07-31 23:59:59', '2025-08-01 00:00:00', '2025-12-31 23:59:59',
        '2026-01-01 00:00:00', '2026-01-08 11:59:59', '2026-01-08 12:00:00', '2026-01-16 00:00:00'] as $created) {
        dashboardConsultation(['created_at' => $created]);
    }
    $this->actingAs($admin, 'admin')->get('/dashboard')->assertOk()
        ->assertInertia(fn (Assert $page) => $page
            ->where('dashboard.consultations.newThisWeek', 1)
            ->where('dashboard.activity.0.month', '2025-08')
            ->where('dashboard.activity.0.consultations', 1)
            ->where('dashboard.activity.4.month', '2025-12')
            ->where('dashboard.activity.4.consultations', 1)
            ->where('dashboard.activity.5.month', '2026-01')
            ->where('dashboard.activity.5.consultations', 3)
            ->has('dashboard.pendingConsultations', 4));
});

test('dashboard pending counts and queue update after a consultation is addressed', function () {
    $admin = Admin::factory()->create();
    $consultation = dashboardConsultation();
    $this->actingAs($admin, 'admin')->get('/dashboard')
        ->assertInertia(fn (Assert $page) => $page->where('dashboard.consultations.pending', 1));
    $consultation->update(['addressed_at' => now(), 'addressed_by' => $admin->id]);
    $this->get('/dashboard')->assertInertia(fn (Assert $page) => $page
        ->where('dashboard.consultations.pending', 0)
        ->where('dashboard.consultations.addressed', 1)
        ->has('dashboard.pendingConsultations', 0));
});
