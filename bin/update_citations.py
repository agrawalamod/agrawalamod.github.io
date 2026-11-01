#!/usr/bin/env python3
"""Refresh Google Scholar citation counts in _data/citations.yml.

Google Scholar blocks GitHub's build servers, so the site reads citation counts
from this cache instead of fetching them at build time. Run this from a machine
Scholar allows (Amod's Mac) before pushing a site update, or any time manually:

    python3 bin/update_citations.py

It fetches the Scholar profile once, keeps counts only for papers that have a
google_scholar_id in papers.bib, and rewrites the cache only when a count changes.
"""

import datetime
import pathlib
import re
import sys
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
BIB = ROOT / "_bibliography" / "papers.bib"
SOCIALS = ROOT / "_data" / "socials.yml"
CACHE = ROOT / "_data" / "citations.yml"

HEADER = """\
# Google Scholar citation counts, keyed by each paper's google_scholar_id in papers.bib.
# Google Scholar blocks GitHub's build servers, so the site reads counts from this file.
# Refresh with `python3 bin/update_citations.py` before pushing a site update, or manually.
"""


def scholar_user_id():
    match = re.search(r"^scholar_userid:\s*(\S+)", SOCIALS.read_text(), re.M)
    if not match:
        sys.exit(f"No scholar_userid in {SOCIALS}")
    return match.group(1)


def bib_ids():
    return re.findall(r"google_scholar_id\s*=\s*\{([^}]+)\}", BIB.read_text())


def fetch_profile_counts(user_id):
    url = f"https://scholar.google.com/citations?user={user_id}&hl=en&cstart=0&pagesize=100"
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(request, timeout=30) as response:
        page = response.read().decode("utf-8", "replace")
    counts = {}
    for row in re.findall(r'<tr class="gsc_a_tr">(.*?)</tr>', page, re.S):
        article = re.search(rf"citation_for_view={re.escape(user_id)}:([^\"&]+)", row)
        cited = re.search(r'class="gsc_a_ac[^"]*">([^<]*)<', row)
        if article:
            counts[article.group(1)] = int(cited.group(1)) if cited and cited.group(1).strip() else 0
    return counts


def read_cache():
    if not CACHE.exists():
        return {}
    return {k: int(v) for k, v in re.findall(r'^\s+"([^"]+)":\s*(\d+)', CACHE.read_text(), re.M)}


def main():
    try:
        live = fetch_profile_counts(scholar_user_id())
    except Exception as error:
        sys.exit(f"Could not fetch Google Scholar profile: {error}")
    if not live:
        sys.exit("Google Scholar returned no articles (possibly blocked). Cache left unchanged.")

    old = read_cache()
    new = {}
    for article_id in bib_ids():
        if article_id in live:
            new[article_id] = live[article_id]
        elif article_id in old:
            print(f"warning: {article_id} not on Scholar profile; keeping cached count")
            new[article_id] = old[article_id]
        else:
            print(f"warning: {article_id} not on Scholar profile and not cached; skipping")

    if new == old:
        print("Citation counts unchanged.")
        return

    for article_id, count in new.items():
        if old.get(article_id) != count:
            print(f"{article_id}: {old.get(article_id, '-')} -> {count}")
    lines = [HEADER, f"updated: {datetime.date.today().isoformat()}", "counts:"]
    lines += [f'  "{article_id}": {count}' for article_id, count in new.items()]
    CACHE.write_text("\n".join(lines) + "\n")
    print(f"Wrote {CACHE.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
