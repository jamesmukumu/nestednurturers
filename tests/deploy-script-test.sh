#!/usr/bin/env bash
set -euo pipefail

root=$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)
tmp=$(mktemp -d)
trap 'rm -rf -- "$tmp"' EXIT
mkdir -p "$tmp/app"
sha=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
export sha TEST_LOG="$tmp/commands"

git() {
    echo "git $*" >> "$TEST_LOG"
    case "$1" in
        rev-parse)
            if [[ ${TEST_FAILURE:-} == stale ]]; then echo wrong; else echo "$sha"; fi
            ;;
    esac
}
docker() {
echo "docker $*" >> "$TEST_LOG"
while IFS= read -r _; do :; done
if [[ "$*" == *"exec -T db sh -c"* ]]; then
    [[ ${TEST_FAILURE:-} != backup ]] || exit 1
    echo 'CREATE TABLE example (id int);'
elif [[ "$*" == *"migrate:status --pending=1"* && ${TEST_FAILURE:-} == pending ]]; then
    exit 1
elif [[ "$*" == *"exec -T queue pgrep"* && ${TEST_FAILURE:-} == process ]]; then
    exit 1
elif [[ "$*" == *"php -r "* ]]; then
    echo cache-fingerprint
elif [[ "$*" == "compose ps -q "* ]]; then
    echo "${*: -1}-container"
elif [[ "$*" == *"com.docker.compose.project"* ]]; then
    echo project
elif [[ "$*" == *"inspect --format"*".State.Running"* ]]; then
    echo true
elif [[ "$*" == *"inspect --format"*".State.Health.Status"* ]]; then
    echo healthy
elif [[ "$*" == "image inspect "* ]]; then
    echo expected-image-id
elif [[ "$*" == *"inspect --format"*".Image"* ]]; then
    if [[ ${TEST_FAILURE:-} == image ]]; then echo old-image-id; else echo expected-image-id; fi
fi
}
curl() {
    echo "curl $*" >> "$TEST_LOG"
    [[ ${TEST_FAILURE:-} != health ]]
}
sleep() { :; }
export -f git docker curl sleep

run_case() {
    local failure=$1
    : > "$TEST_LOG"
    if TEST_FAILURE="$failure" bash -s -- "$tmp/app" "$sha" < "$root/scripts/deploy.sh" > "$tmp/output" 2>&1; then
        [[ "$failure" == success ]] || { echo "Expected failure: $failure" >&2; exit 1; }
        grep -q 'Deployment and health checks completed' "$tmp/output"
        grep -q 'docker compose up -d --no-deps --force-recreate --remove-orphans' "$TEST_LOG"
        grep -q 'docker image prune -f' "$TEST_LOG"
    else
        [[ "$failure" != success ]] || { cat "$tmp/output" >&2; exit 1; }
        grep -q 'Deployment failed' "$tmp/output"
        grep -q 'docker compose logs --tail=80' "$TEST_LOG"
        if grep -q 'docker image prune -f' "$TEST_LOG"; then
            echo "Pruned images after failure: $failure" >&2
            exit 1
        fi
    fi
    echo "PASS: $failure"
}

if [[ $# -eq 0 ]]; then
    set -- success stale backup pending process image health
fi
for case_name in "$@"; do
    run_case "$case_name"
done
