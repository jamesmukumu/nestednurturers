<?php

namespace App\Console\Commands;

use App\Jobs\AcknowledgeInquiries;
use App\Models\consultations;
use Illuminate\Console\Command;

class ConsultationsFollowUp extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:consultations-follow-up';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This Command Will Be For Following Up On InActive Consultations';

    /**
     * Execute the console command.
     */
    public function handle(){
    $pending_consultations = consultations::where("is_acknowledged",false)->get();
    AcknowledgeInquiries::dispatch($pending_consultations);
    }
}
