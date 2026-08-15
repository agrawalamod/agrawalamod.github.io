# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Amod Agrawal's personal academic website (`agrawalamod.github.io`), built on the **al-folio** Jekyll theme. It is a static site published to GitHub Pages. Most "work" here is editing content (Markdown, BibTeX, YAML data) rather than writing code — the theme's layouts, SCSS, and Ruby plugins are upstream machinery that rarely needs changing.

## Local development

Two supported ways to preview locally; both serve on **port 8080** with livereload (35729).

- **Devcontainer (primary):** Open in VSCode → "Reopen in Container". The `postAttachCommand` runs `./bin/entry_point.sh`, which starts `bundle exec jekyll serve --watch --livereload --force_polling` on `0.0.0.0:8080`. `--force_polling` is deliberate: it lets edits made on the host (Mac) propagate into the container. The devcontainer builds from `.devcontainer/Dockerfile` (the stock MS Jekyll image plus a one-line `rm` of a broken yarn apt source).
- **Docker Compose:** `docker compose up` (uses prebuilt `amirpourmand/al-folio` image, mounts repo at `/srv/jekyll`).

Claude Code runs on the **host**, not inside the container. Edit/commit from the host terminal; the container is only a preview server. The two share files via bind mount.

Bare-metal alternative (needs Ruby + bundler): `bundle exec jekyll serve`.

## Build / lint

- **Build:** `bundle exec jekyll build` (set `JEKYLL_ENV=production` for prod minification). `bin/cibuild` is just this command.
- **Format (lint):** Prettier with the Liquid plugin — `npx prettier --write .`. Config in `.prettierrc` / `.prettierignore`. Pre-commit hooks (`.pre-commit-config.yaml`) handle trailing whitespace, EOF, YAML check, large files.
- There is **no test suite** — "CI" is a successful Jekyll build plus link/accessibility/lighthouse checks (see `.github/workflows/`).

## Deployment

**Do not run `bin/deploy` manually for routine updates.** Pushing content to `main` triggers `.github/workflows/deploy.yml`, which builds with Jekyll, purges unused CSS, and publishes the rendered site to the `gh-pages` branch via `github-pages-deploy-action`. The `main` branch holds **source**; `gh-pages` holds **generated output** — never edit `gh-pages` by hand. Deploy runs on Ruby 3.3.5 / Python 3.13.

The trigger is a **path allowlist**, not an exclusion list: a push to `main` deploys only if it touches `assets/**`, `_sass/**`, `Gemfile`, `Gemfile.lock`, or a file matching `**.bib`, `**.html`, `**.js`, `**.liquid`, `**/*.md`, or `**.yml`. So `.devcontainer/`, READMEs, and other docs don't trigger a build — but neither does a `.scss` edited outside `_sass/` or a `.json`/`.csv` data file. If a content change doesn't redeploy, check it matches one of these globs.

## Content architecture

Content lives in Jekyll collections and data files, consumed by upstream layouts/includes. The high-value editing surfaces:

- **`_pages/`** — top-level pages (`about.md`, `cv.md`, `publications.md`, `teaching.md`, etc.). `teaching.md` contains hand-written HTML tables (e.g. the service/conference list).
- **`_news/`** — one file per news/announcement item (the "news" collection).
- **`_projects/`**, **`_books/`** — output collections for the projects and books pages.
- **`_posts/`** — blog posts.
- **`_bibliography/papers.bib`** — publications are driven by this BibTeX file via `jekyll-scholar`; the publications page renders from it. Edit the `.bib` to change publications, not HTML.
- **`_data/`** — structured YAML: `cv.yml`, `coauthors.yml`, `venues.yml`, `socials.yml`, `repositories.yml`. CV and bibliography rendering pull from these.
- **`_config.yml`** — site-wide settings, collection definitions, theme/plugin config. Changing it requires a Jekyll server restart (the entry-point script watches `_config.yml` and auto-restarts).

Theme internals (edit only when intentionally customizing the theme): `_layouts/`, `_includes/`, `_sass/`, `assets/`.

## Custom plugins (`_plugins/`)

Ruby plugins that run at build time and add behavior beyond stock Jekyll. Notably: `google-scholar-citations.rb` and `inspirehep-citations.rb` (fetch live citation counts), `external-posts.rb` (pull external blog posts), `details.rb` (collapsible blocks), `cache-bust.rb`, `hide-custom-bibtex.rb`. Network-fetching plugins cache results in `.tweet-cache/` and similar; a clean build may hit external services.

## Conventions

- Inclusive-language and most content edits are surgical — match the existing HTML/Markdown style in the file (e.g. the year-list cells in `teaching.md` are plain `<td>2025, 2026</td>`).
- `Gemfile.lock` behavior in the container is managed by `bin/entry_point.sh`: it is restored if git-tracked, removed if not.
- Upstream theme docs live in `INSTALL.md`, `CUSTOMIZE.md`, `FAQ.md`, `README.md` — consult these for theme features rather than reverse-engineering layouts.
