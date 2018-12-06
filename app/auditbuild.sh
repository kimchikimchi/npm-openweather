#!/usr/bin/env bash

npm audit
if [ $? == 0 ]; then
    echo "No vulnerabilities found"
    npm run build
else
    echo "Vulnerabilities found.  Do not build"
fi
