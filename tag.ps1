$version = jq -r .version package.json
git tag -a "v$version" -m"$version release"