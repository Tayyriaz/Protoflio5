# Vercel Deployment Guide - Portfolio

## ✅ Pre-Deployment Checklist

### Files Verified:
- ✅ `index.html` - Main HTML file
- ✅ `styles.css` - CSS file (absolute path: `/styles.css`)
- ✅ `script.js` - JavaScript file (absolute path: `/script.js`)
- ✅ `vercel.json` - Vercel configuration
- ✅ `.vercelignore` - Files to ignore

### Path Configuration:
- ✅ CSS: `/styles.css` (absolute path - works on Vercel)
- ✅ JS: `/script.js` (absolute path - works on Vercel)
- ✅ All assets use root-relative paths

## 🚀 Deployment Methods

### Method 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI (if not installed)
npm install -g vercel

# Navigate to portfolio folder
cd portfolio

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Method 2: Vercel Dashboard

1. Go to https://vercel.com
2. Sign in/up
3. Click "Add New Project"
4. Choose one:
   - **Drag & Drop:** Drag `portfolio` folder
   - **GitHub:** Connect GitHub repo and select portfolio folder
5. Click "Deploy"

### Method 3: GitHub Integration

1. Push portfolio to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Portfolio website"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. In Vercel:
   - Import GitHub repository
   - Select portfolio folder
   - Deploy

## 🔍 Post-Deployment Verification

After deployment, check:

1. **CSS Loading:**
   - Open deployed site
   - Press F12 (Developer Tools)
   - Check Console tab for errors
   - Verify styles are applied

2. **JavaScript Loading:**
   - Test interactive elements
   - Check Console for errors
   - Verify navigation works

3. **File Paths:**
   - All assets should load from root (`/styles.css`, `/script.js`)
   - No 404 errors in Network tab

## 🐛 Troubleshooting

### Issue: CSS Not Loading

**Symptoms:**
- Page loads but no styling
- Console shows 404 for styles.css

**Solutions:**
1. Verify `styles.css` is in root directory
2. Check path is `/styles.css` (not `./styles.css`)
3. Clear browser cache (Ctrl+F5)
4. Check Vercel deployment logs

### Issue: JavaScript Not Working

**Symptoms:**
- Page loads but interactions don't work
- Console shows errors

**Solutions:**
1. Verify `script.js` is in root directory
2. Check path is `/script.js` (not `./script.js`)
3. Check browser console for specific errors
4. Verify script.js is loaded in Network tab

### Issue: 404 Errors

**Solutions:**
1. Ensure all files are in same directory
2. Check `vercel.json` configuration
3. Verify file names match exactly (case-sensitive)
4. Check Vercel build logs

## 📝 Important Notes

1. **Absolute Paths:** Use `/file.css` not `./file.css` for Vercel
2. **File Location:** All files should be in root directory
3. **Case Sensitivity:** File names are case-sensitive
4. **Cache:** Clear browser cache if changes don't appear
5. **Build Time:** First deployment may take 1-2 minutes

## ✅ Success Indicators

When deployment is successful:
- ✅ Site loads without errors
- ✅ CSS styles are applied
- ✅ JavaScript interactions work
- ✅ No console errors
- ✅ Responsive design works
- ✅ All links work

## 🔗 Quick Links

- Vercel Dashboard: https://vercel.com/dashboard
- Vercel Docs: https://vercel.com/docs
- Support: https://vercel.com/support

---

**Your portfolio is ready for Vercel deployment!** 🎉
