<?php

namespace App\Http\Middleware;

use App\Models\Admin;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureAdminCanViewDirectory
{
    public function handle(Request $request, Closure $next): Response
    {
        $admin = $request->user('admin');

        abort_unless($admin instanceof Admin && $admin->isAdmin, 403);

        return $next($request);
    }
}
