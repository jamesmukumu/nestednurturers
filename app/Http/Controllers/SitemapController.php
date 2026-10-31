<?php

namespace App\Http\Controllers;

use App\Models\consultations;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class SitemapController extends Controller{

public function SiteMapGenerator(Request $request){
$now = Carbon::now();
$baseUrl = "https://nestednurturers.com";
$sitemap = Sitemap::create();

$pages = [
"/"=>1.0,
"/services"=>0.9,
"/about"=>0.9,
"/contact"=>0.8,
"/faq"=>0.7,
"/pricing"=>0.7
];

foreach($pages as $page=>$p){
$sitemap->add(
Url::create($baseUrl.$page)->setPriority($p)->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)->setLastModificationDate($now)
);
}
$sitemap->writeToFile(public_path("sitemap.xml"));
return "SiteMap Added";
}



}


