#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 2 || "$1" != /* || ! "$2" =~ ^[0-9a-f]{40}$ ]]; then
    echo "Usage: deploy.sh /absolute/app/directory 40-character-commit-sha" >&2
    exit 1
fi

app_dir=$1
deploy_sha=$2
cd "$app_dir"

on_failure() {
    local status=$?
    trap - EXIT
    if [[ "$status" -eq 0 ]]; then
        return
    fi
    echo "==> Deployment failed (exit $status); container diagnostics follow" >&2
    docker compose ps < /dev/null >&2 || true
    docker compose logs --tail=80 app web queue scheduler ssr < /dev/null >&2 || true
    exit "$status"
}
trap on_failure EXIT

echo "==> Fetching and verifying master"
git fetch --prune origin master < /dev/null
test "$(git rev-parse FETCH_HEAD)" = "$deploy_sha"
test "$(git rev-parse origin/master)" = "$deploy_sha"
git checkout --detach "$deploy_sha" < /dev/null

echo "==> Building application images"
docker compose build app queue scheduler web ssr < /dev/null

echo "==> Backing up database"
backup_dir="storage/backups/database"
mkdir -p "$backup_dir"
backup_file="$backup_dir/$(date -u +%Y%m%dT%H%M%SZ)-before-${deploy_sha}.sql.gz"
docker compose exec -T db sh -c \
    'exec mysqldump --single-transaction --quick --routines --triggers -u"$MYSQL_USER" -p"$MYSQL_PASSWORD" "$MYSQL_DATABASE"' \
    < /dev/null | gzip > "$backup_file"
test -s "$backup_file"
gzip -t "$backup_file"
test "$(gzip -cd "$backup_file" | wc -c)" -gt 0
find "$backup_dir" -type f -name '*-before-*.sql.gz' -mtime +7 -delete

echo "==> Applying migrations"
docker compose run --rm -T --no-deps app \
    php artisan migrate --force --no-interaction < /dev/null

echo "==> Recreating application containers"
docker compose up -d --no-deps --force-recreate --remove-orphans \
    app queue scheduler web ssr < /dev/null

wait_for_exec() {
    local service=$1
    shift
    local attempt
    for attempt in {1..30}; do
        if docker compose exec -T "$service" "$@" < /dev/null; then
            return 0
        fi
        sleep 2
    done
    echo "Timed out waiting for $service" >&2
    return 1
}

echo "==> Waiting for app and linking public storage"
wait_for_exec app php artisan --version
docker compose exec -T app php artisan storage:link --force --no-interaction < /dev/null
docker compose exec -T app sh -c 'test -L public/storage && test -d public/storage' < /dev/null
docker compose exec -T web sh -c 'test -L /var/www/html/public/storage && test -d /var/www/html/public/storage' < /dev/null

echo "==> Refreshing Laravel caches and queue workers"
docker compose exec -T app php artisan optimize:clear --no-interaction < /dev/null
docker compose exec -T app php artisan optimize --no-interaction < /dev/null
wait_for_exec queue php artisan --version
# PHP variables must not be expanded by the shell.
# shellcheck disable=SC2016
runtime_check='require "vendor/autoload.php"; $app = require "bootstrap/app.php"; $app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap(); $store = config("cache.default"); $cache = config("cache.stores.".$store); if (!in_array($cache["driver"] ?? null, ["file", "database", "redis"], true) || config("queue.default") !== "database" || config("queue.connections.database.queue") !== "default") { fwrite(STDERR, "Unsupported cache or queue configuration\n"); exit(1); } echo hash("sha256", serialize([$store, $cache, config("cache.prefix")]));'
app_cache=$(docker compose exec -T app php -r "$runtime_check" < /dev/null)
queue_cache=$(docker compose exec -T queue php -r "$runtime_check" < /dev/null)
if [[ -z "$app_cache" || "$app_cache" != "$queue_cache" ]]; then
    echo "App and queue do not share the same cache configuration" >&2
    exit 1
fi
docker compose exec -T app php artisan queue:restart --no-interaction < /dev/null
docker compose exec -T app php artisan migrate:status --no-interaction < /dev/null
docker compose exec -T app php artisan migrate:status --pending=1 --no-interaction < /dev/null

echo "==> Verifying services and rebuilt image IDs"
for service in app queue scheduler web ssr db; do
    wait_for_exec "$service" true
    container_id=$(docker compose ps -q "$service" < /dev/null)
    test -n "$container_id"
    test "$(docker inspect --format '{{.State.Running}}' "$container_id" < /dev/null)" = true
done
for service in app queue scheduler web ssr; do
    container_id=$(docker compose ps -q "$service" < /dev/null)
    project=$(docker inspect --format '{{index .Config.Labels "com.docker.compose.project"}}' "$container_id" < /dev/null)
    test -n "$project"
    image_name="${project}-${service}"
    expected_image=$(docker image inspect --format '{{.Id}}' "$image_name" < /dev/null)
    actual_image=$(docker inspect --format '{{.Image}}' "$container_id" < /dev/null)
    if [[ "$actual_image" != "$expected_image" ]]; then
        echo "Container image mismatch for $service" >&2
        exit 1
    fi
done
wait_for_exec queue pgrep -f '[a]rtisan queue:work'
wait_for_exec scheduler pgrep -f '[a]rtisan schedule:work'
ssr_id=$(docker compose ps -q ssr < /dev/null)
for attempt in {1..30}; do
    if [[ "$(docker inspect --format '{{.State.Health.Status}}' "$ssr_id" < /dev/null)" == healthy ]]; then
        break
    fi
    if [[ "$attempt" -eq 30 ]]; then
        echo "SSR service did not become healthy" >&2
        exit 1
    fi
    sleep 2
done
curl --fail --retry 12 --retry-delay 5 http://127.0.0.1:8080/health > /dev/null < /dev/null

echo "==> Pruning dangling images"
docker image prune -f < /dev/null
echo "==> Deployment and health checks completed"
