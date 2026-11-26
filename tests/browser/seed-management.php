<?php

// Seed a fresh, disposable SQLite database only. Never use an existing workspace database.
require __DIR__.'/../../vendor/autoload.php';
$app = require __DIR__.'/../../bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

if (! app()->environment(['local', 'testing']) || config('database.default') !== 'sqlite'
    || getenv('PORTAL_TEST_ALLOW_WRITES') !== '1' || App\Models\Admin::query()->exists()) {
    throw new RuntimeException('Requires local/testing, SQLite, PORTAL_TEST_ALLOW_WRITES=1, and a fresh database with no admins.');
}

$actor = App\Models\Admin::factory()->create([
    'name' => 'QA Manager', 'email' => 'qa.manager@example.test', 'password' => 'password', 'phonenumber' => '+14155551000',
]);
$target = App\Models\Admin::factory()->create([
    'name' => 'QA Writer', 'email' => 'qa.writer@example.test', 'password' => 'password', 'phonenumber' => '+14155551001', 'isAdmin' => false,
]);
$category = App\Models\BlogCategory::factory()->create(['admins_id' => $actor->id, 'title' => 'QA Used Category']);
$blog = App\Models\Blog::factory()->create(['admins_id' => $actor->id, 'blog_categories_id' => $category->id, 'title' => 'QA Article']);
$service = App\Models\Services::factory()->create(['admins_id' => $actor->id, 'title' => 'QA Service']);
$targetCategory = App\Models\BlogCategory::factory()->create(['admins_id' => $target->id, 'title' => 'QA Transfer Category']);
App\Models\Blog::factory()->create(['admins_id' => $target->id, 'blog_categories_id' => $targetCategory->id, 'title' => 'QA Transfer Article']);
App\Models\Services::factory()->create(['admins_id' => $target->id, 'title' => 'QA Transfer Service']);
for ($index = 0; $index < 20; $index++) {
    App\Models\Consultation::create([
        'name' => 'QA Family '.$index, 'email' => 'family'.$index.'@example.test', 'phonenumber' => '+14155550123',
        'consultationDate' => now()->addDays($index + 1), 'timezone' => 'America/Los_Angeles',
        'consultationID' => (string) Illuminate\Support\Str::uuid(), 'location' => 'Oakland',
        'expected_due_time' => now()->addMonths(2), 'preferred_douala_services_start' => now()->addMonth(),
        'services_seeked' => 'Postpartum doula', 'duration_of_support' => 'Six weeks', 'no_nights_per_week' => '2',
        'howHeard' => 'Referral', 'is_acknowledged' => true,
    ]);
}
echo json_encode(['articleId' => $blog->id, 'serviceId' => $service->id, 'targetId' => $target->id], JSON_PRETTY_PRINT).PHP_EOL;
