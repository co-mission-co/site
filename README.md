# Co-Mission Website

Hugo static site for [co-mission.co](https://co-mission.co) - True Missions Happen in Connection.

## 🚀 Quick Start

```bash
# Clone repository with theme
git clone --recurse-submodules https://github.com/YOUR-USERNAME/co-mission-co.git
cd co-mission-co/site

# Start development server
hugo server

# Visit http://localhost:1313
```

## 📋 Requirements

- **Hugo**: v0.155.1+extended ([Download](https://gohugo.io/installation/))
- **Git**: For theme submodule

## 🛠️ Development

### Local Server

```bash
# Development mode (with live reload)
hugo server

# Include draft content
hugo server -D

# Bind to all interfaces
hugo server --bind 0.0.0.0
```

### Production Build

```bash
# Build for production
hugo --minify

# Output in public/ directory
```

## 🎨 Theme

**Blowfish** - Modern Hugo theme  
- Version: v2.97.0+
- Repository: https://github.com/nunocoracao/blowfish
- Docs: https://blowfish.page/docs/
- Installed as: Git submodule

### Custom Styling

- **Color Scheme**: Sunset Orange (#FF6B35)
- **Background**: Sunrise Yellow (#FFF4E6) or Light Gray (#F5F5F5)
- **Custom CSS**: `assets/css/custom.css`
- **Color Scheme**: `assets/css/schemes/comission.css`

## 📦 Deployment

### Automatic via GitHub Actions

Pushes to `main` branch automatically deploy to GitHub Pages.

**Workflow:** `.github/workflows/hugo.yml`  
**Live Site:** https://co-mission.co  
**Build Time:** ~60-90 seconds

### Manual Deployment

```bash
# Build production site
hugo --minify --baseURL "https://co-mission.co/"

# Deploy public/ directory to hosting
```

## ⚙️ Configuration

**Main Config:** `hugo.toml`

```toml
baseURL = "https://co-mission.co/"
title = "Co-Mission"
theme = "blowfish"
colorScheme = "comission"
```

**Key Features:**
- Single-page layout with anchor navigation
- Fixed header with mobile hamburger menu
- Custom sunset orange color scheme
- Typing animation on hero section
- Card-based content layout

## 📁 Project Structure

```
site/
├── .github/workflows/  # GitHub Actions
├── assets/css/         # Custom styles
├── content/            # Site content
├── layouts/            # Template overrides
├── static/             # Static files (JS, CNAME)
├── themes/blowfish/    # Theme (git submodule)
└── hugo.toml           # Configuration
```

## ⚠️ Hugo Version Warning

You may see this warning:

```
WARN  Module "blowfish" is not compatible with this Hugo version: 0.141.0/0.154.5 extended
```

**This is safe to ignore.** We're using Hugo 0.155.1, which is newer than Blowfish's tested max (0.154.5). Everything works perfectly. See [HUGO-VERSION.md](HUGO-VERSION.md) for details.

## 📚 Documentation

- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deployment guide and troubleshooting
- **[HUGO-VERSION.md](HUGO-VERSION.md)** - Hugo version compatibility info
- **[BACKGROUND-OPTIONS.md](BACKGROUND-OPTIONS.md)** - Background color switching
- **[AGENTS.md](AGENTS.md)** - Development guidelines for AI assistants

## 🔧 Maintenance

### Update Theme

```bash
git submodule update --remote themes/blowfish
git add themes/blowfish
git commit -m "Update Blowfish theme"
git push
```

### Update Hugo

1. Update local Hugo version
2. Test: `hugo server` and `hugo --minify`
3. Update `.github/workflows/hugo.yml`:
   ```yaml
   HUGO_VERSION: 0.XXX.X
   ```
4. Push and verify deployment

## 🌐 Custom Domain

**Domain:** co-mission.co  
**Configuration:** `static/CNAME`

**DNS Setup** (at your domain registrar):
- A records → GitHub Pages IPs
- CNAME www → YOUR-USERNAME.github.io

See [DEPLOYMENT.md](DEPLOYMENT.md#custom-domain-setup) for details.

## 🎯 Features

### Content
- Dynamic typing effect on hero slogan
- Card-based sections with hover effects
- Anchor-link navigation
- Mobile-responsive design

### Styling
- Sunset orange theme (#FF6B35)
- White cards on warm background
- Modern minimalist shadows
- Smooth transitions and animations

### Navigation
- Fixed header with sticky menu
- Mobile hamburger menu (auto-closes)
- Anchor links to page sections
- Orange accent colors

### Technical
- Hugo asset pipeline (minification, fingerprinting)
- Custom JavaScript (typing animation, menu fix)
- Git submodule for theme management
- GitHub Actions CI/CD

## 🐛 Troubleshooting

### Build Fails

```bash
# Check Hugo version
hugo version
# Should be v0.155.1+extended

# Verify theme
git submodule status
# Should show commit hash

# Reinitialize if needed
git submodule init
git submodule update
```

### Theme Not Loading

```bash
# Update submodule
git submodule update --init --recursive
```

### Custom Domain Not Working

```bash
# Verify CNAME files
cat static/CNAME     # Should have: co-mission.co
cat public/CNAME     # After build, should match

# Rebuild
hugo --minify
```

## 📝 License

Copyright © 2024 Co-Mission

## 🤝 Contributing

This is a private project for co-mission.co. For questions or suggestions, contact hello@co-mission.co.

---

**Built with:**
- [Hugo](https://gohugo.io/) - Static site generator
- [Blowfish](https://blowfish.page/) - Hugo theme
- [GitHub Pages](https://pages.github.com/) - Hosting
- [GitHub Actions](https://github.com/features/actions) - CI/CD
