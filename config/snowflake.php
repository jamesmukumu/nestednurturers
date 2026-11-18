<?php

return [
    // Use a Unix timestamp. The package casts this value to an integer.
    'epoch' => (int) env('SNOWFLAKE_EPOCH', 1704067200),
    'worker_id' => (int) env('SNOWFLAKE_WORKER_ID', 1),
    'datacenter_id' => (int) env('SNOWFLAKE_DATACENTER_ID', 1),
];
