#!/bin/bash
# Weekly Google Scholar citation refresh for agrawalamod.github.io.
#
# Google Scholar blocks GitHub's build servers, so this runs on Amod's Mac. macOS
# blocks background jobs from reading ~/Documents, so it works in its own small
# sparse clone outside ~/Documents and never touches the main working copy.
# It pushes to main only when a citation count changed.
#
# Install: copy to ~/.local/bin/agrawalamod-citations.sh and load the LaunchAgent
# ~/Library/LaunchAgents/com.agrawalamod.citations.plist (runs Mondays 09:00).
# Log: ~/Library/Logs/agrawalamod-citations.log

main() {
  set -euo pipefail
  export PATH="/usr/bin:/bin:/usr/sbin:/sbin:/opt/homebrew/bin"
  local clone="$HOME/.local/share/agrawalamod-citations"
  local remote="git@github.com:agrawalamod/agrawalamod.github.io.git"

  echo "=== $(date '+%Y-%m-%d %H:%M:%S') ==="
  if [ ! -d "$clone/.git" ]; then
    git clone --depth 1 --filter=blob:none --sparse "$remote" "$clone"
    git -C "$clone" sparse-checkout set --no-cone \
      /_data/citations.yml /_data/socials.yml /_bibliography/papers.bib /bin/update_citations.py
  fi

  git -C "$clone" fetch --depth 1 origin main
  git -C "$clone" reset --hard origin/main
  python3 "$clone/bin/update_citations.py"

  if git -C "$clone" diff --quiet -- _data/citations.yml; then
    git -C "$clone" push --dry-run origin HEAD:main
    echo "No changes to push."
    return 0
  fi

  git -C "$clone" commit -m "Update Google Scholar citation counts" -- _data/citations.yml
  git -C "$clone" push origin HEAD:main
  echo "Pushed updated citation counts."
}

main "$@"
