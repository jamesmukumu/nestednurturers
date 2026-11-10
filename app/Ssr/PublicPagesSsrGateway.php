<?php

namespace App\Ssr;

use Inertia\Ssr\HttpGateway;
use Inertia\Ssr\Response;

class PublicPagesSsrGateway extends HttpGateway
{
    /**
     * Only send public website pages to the SSR server.
     *
     * @param  array<string, mixed>  $page
     */
    public function dispatch(array $page): ?Response
    {
        $component = $page['component'] ?? '';

        if (! in_array($component, config('inertia.ssr.pages', []), true)) {
            return null;
        }

        return parent::dispatch($page);
    }
}
