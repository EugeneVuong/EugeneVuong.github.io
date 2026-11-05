# Eugene Vuong — personal website

Built on the [Academic Pages](https://github.com/academicpages/academicpages.github.io) Jekyll template (MIT, see `LICENSE`).
The earlier hand-built design lives on the `custom-design` branch.

## Where things are

| What | File |
| --- | --- |
| Name, sidebar, links | `_config.yml` (`author:` block) |
| Header menu | `_data/navigation.yml` |
| Home page (bio, news, experience) | `_pages/about.md` |
| Publications | `_publications/*.md` (one file per paper; `category: conferences` or `preprints`) |
| Research projects | `_portfolio/*.md` (shown at `/research/`, sorted by `order`) |
| CV (linked in the menu) | `files/Eugene-Vuong-CV.pdf` |
| Images | `images/` |

To add a talk later, add `_talks/*.md` (see the template's examples) plus a `_pages/talks.html` page and a menu entry.

## Preview locally

```sh
bundle install
bundle exec jekyll serve -l -H localhost   # http://localhost:4000
```

Needs Ruby 3.x (`brew install ruby`). Docker also works: `docker compose up`.

## Deploy

`.github/workflows/jekyll.yml` builds and deploys to GitHub Pages on every push to `main`.
Live at https://eugenevuong.github.io (Settings → Pages → Source: GitHub Actions).

## Privacy

The CV is `files/Eugene-Vuong-CV.pdf`, a public copy with the phone number removed. Keep the phone number, home address and transcripts out of this repo; other PDFs are gitignored.
