# Deployment Guide - Co-Mission Site

## Overview

This Hugo site automatically deploys to **co-mission.co** via GitHub Pages when pushed to the `main` branch.

---

## GitHub Actions Workflow

**File:** `.github/workflows/hugo.yml`

**Triggers:**
- Push to `main` branch
- Manual workflow dispatch

**Hugo Version:** 0.155.1 (matches local development)

**Process:**
1. Checkout code with submodules (Blowfish theme)
2. Setup Hugo with extended version
3. Build site with `--gc --minify`
4. Upload artifact to GitHub Pages
5. Deploy to custom domain: co-mission.co

---

## Local Development

### Requirements
- Hugo v0.155.1+extended
- Git

### Commands

```bash
# Development server
hugo server

# Development with drafts
hugo server -D

# Production build
hugo --minify

# Update Blowfish theme
git submodule update --remote themes/blowfish
```

---

## Custom Domain Setup

**Domain:** co-mission.co

**CNAME File:** `static/CNAME`
- Contains: `co-mission.co`
- Hugo copies to `public/CNAME` during build
- GitHub Pages reads this for custom domain

**DNS Configuration:**
Ensure your DNS has these records:
- **A Record** → GitHub Pages IPs:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- **CNAME Record** (www) → `your-username.github.io`

---

## Deployment Checklist

Before pushing to `main`:

- [ ] Test locally: `hugo server`
- [ ] Verify build: `hugo --minify`
- [ ] Check `public/CNAME` exists
- [ ] Verify custom CSS/JS loaded
- [ ] Test responsive design
- [ ] Check all menu links work

---

## GitHub Repository Settings

### Pages Configuration

1. Go to: **Settings → Pages**
2. Source: **GitHub Actions**
3. Custom domain: `co-mission.co`
4. Enforce HTTPS: **Enabled**

### Required Secrets/Permissions

The workflow requires these permissions (already configured):
- `contents: read` - Read repository
- `pages: write` - Deploy to Pages
- `id-token: write` - OIDC token

---

## File Structure for Deployment

```
site/
├── .github/workflows/
│   └── hugo.yml           # Deployment workflow
├── static/
│   ├── CNAME              # Custom domain
│   └── js/                # Custom scripts
├── themes/blowfish/       # Git submodule
├── hugo.toml              # Site configuration
└── public/                # Build output (ignored)
```

---

## Troubleshooting

### Build Fails

**Check Hugo version:**
```bash
hugo version
```
Should be: `v0.155.1+extended`

**Update workflow if needed:**
Edit `.github/workflows/hugo.yml` line 23:
```yaml
HUGO_VERSION: 0.155.1
```

### Theme Not Found

**Initialize submodule:**
```bash
git submodule init
git submodule update
```

### Custom Domain Not Working

**Verify CNAME:**
```bash
cat static/CNAME
# Should output: co-mission.co

hugo --minify
cat public/CNAME
# Should also output: co-mission.co
```

**Check DNS:**
```bash
nslookup co-mission.co
# Should point to GitHub Pages IPs
```

### Assets Not Loading

**Check baseURL in hugo.toml:**
```toml
baseURL = "https://co-mission.co/"
```

**Verify build:**
```bash
hugo --minify --baseURL "https://co-mission.co/"
```

---

## Viewing Deployment Status

1. Go to: **Actions** tab in GitHub
2. Click on latest workflow run
3. View build logs
4. Check deployment URL

**Live site:** https://co-mission.co

---

## Making Changes

### Workflow

1. **Develop locally:**
   ```bash
   hugo server
   ```

2. **Test build:**
   ```bash
   hugo --minify
   ```

3. **Commit changes:**
   ```bash
   git add .
   git commit -m "Your message"
   ```

4. **Push to deploy:**
   ```bash
   git push origin main
   ```

5. **Monitor deployment:**
   - Check GitHub Actions tab
   - Wait ~2-3 minutes
   - Visit https://co-mission.co

### Hot Reload During Development

Hugo server watches for changes:
- Content files (`content/`)
- CSS (`assets/css/`)
- Templates (`layouts/`)
- Config (`hugo.toml`)

Browser auto-refreshes on save.

---

## Performance Optimizations

Enabled in build:
- `--minify` - Minify HTML/CSS/JS
- `--gc` - Garbage collection
- Asset fingerprinting (CSS/JS)
- Image optimization (future)

---

## Maintenance

### Update Hugo

**Local:**
```bash
# Check current version
hugo version

# Update (via package manager)
# Chocolatey (Windows)
choco upgrade hugo-extended

# Update workflow
# Edit .github/workflows/hugo.yml
```

### Update Blowfish Theme

```bash
git submodule update --remote themes/blowfish
git add themes/blowfish
git commit -m "Update Blowfish theme"
git push
```

### Monitor Build Times

Typical build time: **60-90 seconds**
- Checkout: ~10s
- Setup Hugo: ~5s
- Build: ~30s
- Deploy: ~30s

---

## Support

**Hugo Documentation:** https://gohugo.io/documentation/  
**Blowfish Docs:** https://blowfish.page/docs/  
**GitHub Actions:** https://docs.github.com/en/actions  
**GitHub Pages:** https://docs.github.com/en/pages
