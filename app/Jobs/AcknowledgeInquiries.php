<?php

namespace App\Jobs;

use App\Mail\ReminderAlerts;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Support\Facades\Mail;

class AcknowledgeInquiries implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public $consultations;
    public function __construct($consultations){
    $this->consultations = $consultations;
    }

    /**
     * Execute the job.
     */
    public function handle(): void {
     Mail::to('jamesmukumu03@gmail.com')->send(new ReminderAlerts($this->consultations));
    }
}
