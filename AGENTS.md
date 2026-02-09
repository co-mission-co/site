# Custom Instructions for Co-Mission Hugo Site

## Quick Start

**Project:** Hugo static site with Blowfish theme | Single-page anchor navigation | Config-first approach

**Critical Rules:**
1. Check https://blowfish.page/docs/ BEFORE any change
2. Use `hugo.toml` config first, custom code last
3. NEVER edit `themes/blowfish/` files (use overrides instead)
4. Always explain approach with documentation links

**Key Files:**
- Config: `hugo.toml` | Content: `content/_index.md` | Test: `hugo server`

---

## Project Info

- **Hugo**: v0.155.1+extended
- **Theme**: Blowfish (git submodule at `themes/blowfish`)
- **Site**: https://co-mission.co/
- **Layout**: Single-page with anchor-based navigation

---

## Decision Flow (Follow This Order)

```
1. Can this be done via hugo.toml config?
   YES → Update hugo.toml
   Docs: https://blowfish.page/docs/configuration/

2. Does Blowfish have a built-in feature?
   YES → Enable in hugo.toml
   Docs: https://blowfish.page/docs/

3. Can this use Blowfish extension points?
   YES → Use extend-head.html, extend-footer.html, or custom CSS
   Docs: https://blowfish.page/docs/advanced-customisation/

4. Custom implementation needed?
   → assets/css/custom.css for styling
   → layouts/ for template overrides (document why)
   → layouts/shortcodes/ for custom shortcodes
```

---

## File Structure

```
site/
├── hugo.toml              # Main config (EDIT)
├── content/
│   └── _index.md          # Homepage content (EDIT)
├── assets/css/            # Custom styles (EDIT when config isn't enough)
│   ├── custom.css
│   └── schemes/custom.css
├── layouts/               # Template overrides (USE SPARINGLY)
│   ├── partials/
│   │   ├── extend-head.html
│   │   └── extend-footer.html
│   └── shortcodes/
├── static/                # Static assets (EDIT)
│   ├── images/
│   ├── fonts/
│   └── files/
└── themes/blowfish/       # Theme submodule (NEVER EDIT!)
```

---

## Configuration Examples

### Basic hugo.toml Structure
```toml
baseURL = "https://co-mission.co/"
theme = "blowfish"
defaultContentLanguage = "en"

[params]
  colorScheme = "custom"
  defaultAppearance = "light"
  
  [params.homepage]
    layout = "custom"
    
  [params.header]
    layout = "basic"
    
  [params.footer]
    showCopyright = true
    showThemeAttribution = false

[[menus.main]]
  name = "Home"
  url = "#home"
  weight = 10
```

### Common Config Tasks

**Enable dark mode toggle:**
```toml
[params]
  defaultAppearance = "auto"
  autoSwitchAppearance = true
```
Docs: https://blowfish.page/docs/configuration/#appearance

**Change homepage layout:**
```toml
[params.homepage]
  layout = "profile"  # Options: page, profile, hero, card, background, custom
```
Docs: https://blowfish.page/docs/homepage-layout/

**Enable search:**
```toml
[params]
  enableSearch = true

[outputs]
  home = ["HTML", "RSS", "JSON"]
```
Docs: https://blowfish.page/docs/search/

---

## Customization Patterns

### CSS Customization
Create `assets/css/custom.css` for style overrides:
```css
:root {
  --color-primary: #your-color;
  --color-secondary: #your-color;
}
```

For color schemes, create `assets/css/schemes/custom.css`:
```css
:root {
  --color-neutral: 255, 255, 255;
  --color-primary-600: 37, 99, 235;
}
```
Docs: https://blowfish.page/docs/advanced-customisation/#colour-schemes

### Template Extensions
Use `layouts/partials/extend-head.html` for custom head content:
```html
<meta name="custom-tag" content="value">
<script src="/js/custom.js"></script>
```
Docs: https://blowfish.page/docs/advanced-customisation/#extending-templates

### Custom Shortcodes
Create `layouts/shortcodes/[name].html`:
```html
<div class="custom-component">
  {{ .Inner }}
</div>
```
Use in markdown: `{{< name >}}content{{< /name >}}`

---

## Common Tasks

**Add new section (single-page layout):**
1. Add content to `content/_index.md` with section ID
2. Add menu item in `hugo.toml`: `[[menus.main]]` with `url = "#section-id"`
3. Add custom styling in `assets/css/custom.css` if needed

**Add custom fonts:**
1. Place fonts in `static/fonts/`
2. Define `@font-face` in `assets/css/custom.css`
3. Apply to elements or override CSS variables

**Override theme template:**
1. Find template in `themes/blowfish/layouts/`
2. Copy to same path in root `layouts/`
3. Modify the copy (document why in comments)

---

## Content Guidelines

**Front Matter Format (content/_index.md):**
```yaml
---
title: "Page Title"
date: 2024-01-01
draft: false
description: "SEO description"
tags: ["tag1", "tag2"]
---
```

**Built-in Shortcodes:**
- `{{< alert >}}` - Contextual alerts
- `{{< button >}}` - Styled buttons
- `{{< badge >}}` - Inline badges
- `{{< lead >}}` - Lead paragraph text
- `{{< figure >}}` - Enhanced images

Full list: https://blowfish.page/docs/shortcodes/

---

## Development Commands

```bash
# Development
hugo server              # Start dev server
hugo server -D           # Include drafts

# Building
hugo --minify            # Production build (output: public/)

# Theme management
git submodule init
git submodule update
git submodule update --remote themes/blowfish  # Update theme

# Cleaning
rm -rf public/ resources/
```

---

## Testing Checklist

Before completing a task:

**Functionality:**
- [ ] `hugo server` runs without errors
- [ ] Page renders at http://localhost:1313
- [ ] No broken links or missing assets
- [ ] `hugo --minify` succeeds

**Responsive:**
- [ ] Desktop (1920px, 1440px, 1280px)
- [ ] Tablet (768px, 1024px)
- [ ] Mobile (375px, 414px)

**Theme Integrity:**
- [ ] NO edits to `themes/blowfish/`
- [ ] Custom files in correct override locations
- [ ] Used Blowfish extension points when possible

---

## Response Format

When suggesting changes, always:

1. **Explain the approach** - State which files you'll modify and why
2. **Reference docs** - Link to relevant Blowfish/Hugo documentation
3. **Show exact config** - Provide complete TOML/YAML/code with comments
4. **Justify custom code** - If not using config, explain why

**Example:**
```
To enable dark mode toggle, we'll use Blowfish's built-in appearance system
by modifying hugo.toml.

Add to hugo.toml:
[params]
  defaultAppearance = "auto"      # Auto-detect system preference
  autoSwitchAppearance = true     # Allow user switching

This uses the theme's native feature - no custom code needed.
Docs: https://blowfish.page/docs/configuration/#appearance
```

---

## Essential Resources

**Always check these first:**
- **Blowfish Docs**: https://blowfish.page/docs/
- **Configuration**: https://blowfish.page/docs/configuration/
- **Homepage Layouts**: https://blowfish.page/docs/homepage-layout/
- **Shortcodes**: https://blowfish.page/docs/shortcodes/
- **Advanced Customisation**: https://blowfish.page/docs/advanced-customisation/
- **Hugo Docs**: https://gohugo.io/documentation/

**Quick lookup:**
- Colors/appearance: https://blowfish.page/docs/configuration/#appearance
- Navigation menus: https://blowfish.page/docs/configuration/#menus
- Custom styling: https://blowfish.page/docs/advanced-customisation/#overriding-the-stylesheet
- Template extensions: https://blowfish.page/docs/advanced-customisation/#extending-templates

---

## Troubleshooting

**Build fails:**
- Check `hugo.toml` syntax
- Verify all referenced files exist
- Check Hugo version: `hugo version`

**Styles not applying:**
- Custom CSS must be in `assets/css/`
- Clear browser cache
- Restart Hugo server

**Theme changes not visible:**
- Verify override file location matches theme structure
- Check for syntax errors
- Ensure file is processed by Hugo (in `assets/` or `layouts/`)

**Submodule issues:**
```bash
git submodule init
git submodule update
```
