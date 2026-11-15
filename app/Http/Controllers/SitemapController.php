<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class SitemapController extends Controller
{
    private const STATIC_PAGES = [
        '/' => 1.0,
        '/services' => 0.9,
        '/about' => 0.9,
        '/contact' => 0.8,
        '/faq' => 0.7,
        '/pricing' => 0.7,
        '/blogs' => 0.8,
    ];

    public function index(): Response
    {
        return $this->respond(1, true);
    }

    public function page(int $page): Response
    {
        return $this->respond($page, false);
    }

    private function respond(int $page, bool $index): Response
    {
        $limit = max(1, min(49993, (int) config('sitemap.blogs_per_page', 49993)));
        $includeBlogs = config('sitemap.include_blogs', true);
        $version = Cache::rememberForever('sitemap:version', fn () => Str::uuid()->toString());
        $key = "sitemap:{$version}:".(int) $includeBlogs.":{$limit}:".(int) $index.":{$page}";
        $xml = Cache::remember($key, now()->addHour(), function () use ($page, $index, $limit, $includeBlogs) {
            $count = $includeBlogs ? $this->blogs()->count() : 0;
            $pages = max(1, (int) ceil($count / $limit));
            abort_if(!$index && ($pages === 1 || $page < 1 || $page > $pages), 404);

            if ($index && $pages > 1) {
                $xml = '<?xml version="1.0" encoding="UTF-8"?>'
                    .'<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
                for ($number = 1; $number <= $pages; $number++) {
                    $url = $this->canonical(route('sitemap.page', ['page' => $number], false));
                    $xml .= '<sitemap><loc>'.$this->escape($url).'</loc></sitemap>';
                }

                return $xml.'</sitemapindex>';
            }

            $xml = '<?xml version="1.0" encoding="UTF-8"?>'
                .'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
            if ($page === 1) {
                foreach (self::STATIC_PAGES as $path => $priority) {
                    $url = $path === '/blogs' ? route('public.blogs.index', [], false) : $path;
                    $xml .= '<url><loc>'.$this->escape($this->canonical($url)).'</loc>'
                        .'<changefreq>weekly</changefreq><priority>'.$priority.'</priority></url>';
                }
            }
            if ($includeBlogs) {
                $blogs = $this->blogs()->orderBy('id')->offset(($page - 1) * $limit)
                    ->limit($limit)->cursor(['slug', 'updated_at']);
                foreach ($blogs as $blog) {
                    $url = $this->canonical(route('public.blogs.show', ['slug' => $blog->slug], false));
                    $xml .= '<url><loc>'.$this->escape($url).'</loc>';
                    if ($blog->updated_at) {
                        $xml .= '<lastmod>'.$blog->updated_at->toW3cString().'</lastmod>';
                    }
                    $xml .= '<changefreq>weekly</changefreq><priority>0.7</priority></url>';
                }
            }

            return $xml.'</urlset>';
        });

        return response($xml, 200, ['Content-Type' => 'application/xml; charset=UTF-8']);
    }

    private function blogs(): Builder
    {
        return Blog::query()->where('is_published', true)
            ->whereNotNull('slug')->where('slug', '!=', '');
    }

    private function canonical(string $path): string
    {
        return rtrim(config('sitemap.base_url'), '/').$path;
    }

    private function escape(string $value): string
    {
        return htmlspecialchars($value, ENT_XML1 | ENT_QUOTES, 'UTF-8');
    }
}
