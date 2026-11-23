#!/bin/bash
# Pushes this folder to https://github.com/<you>/droveumad-site (create the empty repo first)
set -e
cd "$(dirname "$0")"
read -p "Your GitHub username: " U
git init -q 2>/dev/null || true
git add -A
git -c user.name="Dhruv Mehta" -c user.email="droveumad@gmail.com" commit -qm "DROVEUMAD studio site" || true
git branch -M main
git remote remove origin 2>/dev/null || true
git remote add origin "https://github.com/$U/droveumad-site.git"
git push -u origin main
echo; echo "Done: https://github.com/$U/droveumad-site"
