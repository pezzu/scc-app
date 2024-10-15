#!/usr/bin/env bash

version=`jq -r .version package.json`
git tag -a "v$version" -m"$version release"

echo "v$version tagged"
