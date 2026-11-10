<?php

namespace App\Providers;

use App\Ssr\PublicPagesSsrGateway;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Inertia\Ssr\Gateway;
use Route;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(Gateway::class, PublicPagesSsrGateway::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
        $this->spinUpApi();
    }

    protected function spinUpApi(){
        Route::prefix("api")
        ->middleware("api")
        ->group(base_path("routes/api.php"));
    }
}
