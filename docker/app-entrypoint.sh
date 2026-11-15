#!/bin/sh
set -eu

if [ "${1:-}" = "php-fpm" ]; then
    php artisan storage:link --force --no-interaction
    test -L public/storage
    test -d public/storage
fi

exec docker-php-entrypoint "$@"
