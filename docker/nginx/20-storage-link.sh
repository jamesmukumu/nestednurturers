#!/bin/sh
set -eu

ln -sfn ../storage/app/public /var/www/html/public/storage
test -L /var/www/html/public/storage
test -d /var/www/html/public/storage
