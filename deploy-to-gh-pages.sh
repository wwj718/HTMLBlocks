#!/bin/bash
# See https://medium.com/@nthgergo/publishing-gh-pages-with-travis-ci-53a8270e87db
set -o errexit

# config
git config --global user.name "Travis CI"

# build (CHANGE THIS)
npm run build

# deploy
cd build
git init
git add .
git commit -m "Deploy to Github Pages"
git push --force --quiet "https://${GITHUB_TOKEN}@github.com/${GITHUB_REPO}.git" master:gh-pages
