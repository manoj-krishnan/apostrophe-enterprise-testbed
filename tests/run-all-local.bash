#!/bin/bash

mkdir -p screenshots/latest
npx nightwatch tests/scenarios/* --config nightwatch.js --env local --verbose &&
node visual-regression-test.js &&

# Separate nightwatch invocations to stomp out disparities in behavior

# for scenario in tests/scenarios/*; do
#   npx nightwatch $scenario --config nightwatch.js --env local --verbose || exit 1
#   # Let sockets go away? Sleeping dogs lie? Something?
#   sleep 5
# done

echo "Nightwatch functional tests PASSED" &&
echo "(Please review visual regression test results manually)"
