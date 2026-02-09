# Pre-Push Checklist

Before pushing to GitHub and triggering deployment:

## ✅ Local Verification

```bash
# 1. Clean build test
hugo --minify

# 2. Check for errors
# Should say: "Total in XXX ms" with no errors

# 3. Verify CNAME
cat public/CNAME
# Should output: co-mission.co

# 4. Test local server
hugo server
# Visit: http://localhost:1313
```

## ✅ Visual Checks

**Desktop (http://localhost:1313):**
- [ ] Hero slogan typing animation works
- [ ] All cards same width and styling
- [ ] Navigation menu works
- [ ] Orange colors display correctly
- [ ] No console errors (F12)

**Mobile (resize browser or DevTools):**
- [ ] Hamburger menu opens
- [ ] Clicking section links closes menu automatically
- [ ] Menu text size matches card titles
- [ ] Cards stack properly
- [ ] All content readable

## ✅ Content Verification

- [ ] All section links work: Home, Our Story, How We Co-Mission, Our Co-Missions, Connect
- [ ] Email link: hello@co-mission.co
- [ ] No broken links
- [ ] No placeholder text ("Coming Soon" is OK)

## ✅ Files to Commit

```bash
# Check git status
git status

# Should include:
# - .github/workflows/hugo.yml (updated)
# - static/CNAME (domain)
# - assets/css/custom.css (styling)
# - content/_index.md (content)
# - layouts/partials/extend-head.html (scripts)
# - static/js/*.js (custom scripts)
# - hugo.toml (configuration)
```

## ✅ Git Commands

```bash
# Stage all changes
git add .

# Commit with meaningful message
git commit -m "Update site: [describe changes]"

# Push to GitHub (triggers deployment)
git push origin main
```

## ✅ Post-Push Monitoring

1. **Go to GitHub:** https://github.com/YOUR-USERNAME/co-mission-co/actions
2. **Watch the workflow:** Click on the latest run
3. **Wait for completion:** Usually 60-90 seconds
4. **Check deployment:** Visit https://co-mission.co
5. **Clear cache if needed:** Ctrl+Shift+R or Cmd+Shift+R

## ⚠️ If Build Fails

1. **Check Actions tab** for error logs
2. **Common issues:**
   - Submodule not initialized
   - Hugo version mismatch
   - CNAME file missing
   - Syntax error in config

3. **Fix and push again:**
   ```bash
   # Fix the issue
   git add .
   git commit -m "Fix: [issue]"
   git push origin main
   ```

## 📊 Expected Results

**Build logs should show:**
```
✓ Checkout
✓ Setup Hugo
✓ Setup Pages
✓ Build with Hugo
  Pages: 9
  Static files: 10
✓ Upload artifact
✓ Deploy to GitHub Pages
```

**Live site should have:**
- ✓ Custom domain: co-mission.co
- ✓ HTTPS enabled
- ✓ All styling applied
- ✓ Typing animation working
- ✓ Mobile menu functioning

## 🎉 Success Indicators

- [ ] GitHub Actions shows green checkmark
- [ ] https://co-mission.co loads correctly
- [ ] No 404 errors
- [ ] Custom CSS applied (orange colors)
- [ ] JavaScript working (typing, menu)
- [ ] Mobile responsive

---

**Ready to deploy?** Run through this checklist, then `git push origin main`!
