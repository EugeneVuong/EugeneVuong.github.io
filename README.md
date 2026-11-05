# eugenevuong — personal website

Static personal site for Eugene Vuong (Ph.D. student, UCSB Systems and Networking Lab). Plain HTML, CSS and a little JS, with no build step.

```
index.html               the whole page
assets/css/style.css     styles (tokens follow the eugene.pen portfolio design)
assets/js/main.js        Pacific-time clock, reveal-on-scroll
assets/img/              headshot, paper figures, hackathon images
```

## Preview locally

```sh
python3 -m http.server 8000   # then open http://localhost:8000
```

## Update

- **News:** edit the `life.log` list near the top of `index.html`.
- **Papers / experience:** edit the matching section in `index.html`, then bump "Last updated" in the footer.

## Deploy

GitHub Pages: Settings → Pages → Deploy from branch → `main` / root. `.nojekyll` is included so files are served as-is.

## Privacy

Keep the CV/resume and personal details (phone number, home address, transcripts) out of this repo.
