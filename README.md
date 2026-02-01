# Co-Mission Hugo Site

This is a Hugo static site using the LoveIt theme and a single-page layout with
section anchors for navigation.

## Local tooling

You need:
- Git
- Hugo Extended (required for theme assets)

Install Hugo Extended:
- Windows (scoop): `scoop install hugo-extended`
- Windows (choco): `choco install hugo-extended -y`
- macOS (brew): `brew install hugo`
- Linux: use your package manager or download from https://gohugo.io/getting-started/installing/

Verify:
`hugo version`

## Run locally

`hugo server -D`

Open: http://localhost:1313

## Build

`hugo --minify`

## Theme

Theme: LoveIt (git submodule at `themes/LoveIt`).

## Customize sections

Edit the homepage sections in `content/_index.md` and styles in
`static/css/custom.css`.

## GitHub Pages

The workflow in `.github/workflows/hugo.yml` builds and deploys on push to `main`.
In the repo settings, set Pages > Build and deployment to GitHub Actions.
