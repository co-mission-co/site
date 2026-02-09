# Background Color Options

You have two background color options to choose from. Both are already coded into `assets/css/custom.css`.

## Current Active: Sunrise Yellow
**Color:** `#FFF4E6`  
**Description:** Soft, warm sunrise yellow  
**Effect:** Creates a warm, inviting atmosphere that complements the sunset orange theme  
**Best for:** Creative, friendly, approachable brand feel

## Alternative: Light Gray
**Color:** `#F5F5F5`  
**Description:** Professional light gray  
**Effect:** Clean, modern, professional appearance  
**Best for:** Corporate, minimalist, sophisticated brand feel

---

## How to Switch

Open `assets/css/custom.css` and find the section near the top (around lines 10-25):

### To Use Light Gray:
1. **Comment out** the "OPTION 2: Sunrise Yellow" section by adding `/*` before and `*/` after
2. **Uncomment** the "OPTION 1: Light Gray" section by removing `/*` and `*/`

```css
/* OPTION 1: Light Gray Background (Professional & Clean) */
body,
main,
article {
  background-color: #F5F5F5 !important;
}

/* OPTION 2: Sunrise Yellow Background (Warm & Vibrant) */
/*
body,
main,
article {
  background-color: #FFF4E6 !important;
}
*/
```

### To Use Sunrise Yellow (Current):
Keep the file as is - no changes needed!

---

## My Recommendation

**🌅 Sunrise Yellow (#FFF4E6)** - Currently Active

**Why:**
1. ✅ **Harmonizes with sunset orange** - The warm yellow background complements the #FF6B35 orange accents beautifully
2. ✅ **Creates visual hierarchy** - White cards pop nicely against the warm background
3. ✅ **Reinforces brand message** - The sunrise/sunset theme aligns with "Co-Mission" concept of new beginnings and collaboration
4. ✅ **Differentiates from competitors** - Most corporate sites use gray; yellow is distinctive without being overwhelming
5. ✅ **Warm and inviting** - Matches the friendly, collaborative tone of your content

The light gray is a solid professional choice, but the sunrise yellow creates a more unique and memorable visual identity that supports your brand story.

---

## Test Both Options

1. Start Hugo server: `hugo server`
2. Visit: http://localhost:1313
3. Change the CSS file
4. Refresh browser (server auto-reloads)
5. Compare the feel of both options

Choose whichever feels more aligned with your vision for Co-Mission! 🎨
