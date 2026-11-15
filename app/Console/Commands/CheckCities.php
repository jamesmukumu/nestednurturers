<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use JsonException;
use ZipArchive;

class CheckCities extends Command
{
    protected $signature = 'cities:check';

    protected $description = 'Validate the city data used by the contact form';

    public function handle(): int
    {
        $path = config('cities.path');
        $json = $path.'/us_cities_states.json';
        $xlsx = $path.'/uscities.xlsx';

        foreach ([$json, $xlsx] as $file) {
            if (!is_file($file) || !is_readable($file) || filesize($file) === 0) {
                $this->error("City data file is missing, empty, or unreadable: {$file}");

                return self::FAILURE;
            }
        }

        try {
            $cities = json_decode(file_get_contents($json), true, 512, JSON_THROW_ON_ERROR);
        } catch (JsonException $exception) {
            $this->error('Invalid city JSON: '.$exception->getMessage());

            return self::FAILURE;
        }

        if (!is_array($cities) || $cities === []) {
            $this->error('City JSON must contain a non-empty array.');

            return self::FAILURE;
        }

        foreach ($cities as $city) {
            if (!is_array($city) || !is_string($city['city'] ?? null) || trim($city['city']) === ''
                || !is_string($city['state'] ?? null) || trim($city['state']) === '') {
                $this->error('City JSON contains a row without a city or state.');

                return self::FAILURE;
            }
        }

        $archive = new ZipArchive;
        if ($archive->open($xlsx, ZipArchive::CHECKCONS) !== true) {
            $this->error("City spreadsheet is not a valid XLSX archive: {$xlsx}");

            return self::FAILURE;
        }
        $valid = $archive->locateName('xl/workbook.xml') !== false;
        $archive->close();
        if (!$valid) {
            $this->error("City spreadsheet is missing its workbook: {$xlsx}");

            return self::FAILURE;
        }

        $this->info('City data is valid: '.count($cities).' cities.');

        return self::SUCCESS;
    }
}
