<?php

test('the health endpoint reports that the application is available', function () {
    $this->get('/health')
        ->assertOk()
        ->assertJson(['status' => 'ok']);
});
