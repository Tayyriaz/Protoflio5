# Vercel Deployment Checklist

## ✅ Pre-Deployment Checks

### 1. File Paths
- ✅ CSS: `/styles.css` (absolute path)
- ✅ JS: `/script.js` (absolute path)
- ✅ All assets use absolute paths from root

### 2. File Structure
```
portfolio/
├── index.html      ✅ Main file
├── styles.css      ✅ CSS file
├── script.js       ✅ JavaScript file
├── vercel.json     ✅ Vercel config
└── .vercelignore   ✅ Ignore unnecessary files
```

### 3. Vercel Configuration
- ✅ `vercel.json` configured for static files
- ✅ Routes properly set up
- ✅ Headers configured for CSS/JS

### 4. Testing Locally
Before deploying, test locally:
```bash
# Option 1: Python server
cd portfolio
python -m http.server 8000
# Visit http://localhost:8000

# Option 2: Node.js server
npx serve portfolio
```

## 🚀 Deployment Steps

### Method 1: Vercel CLI
```bash
cd portfolio
vercel --prod
```

### Method 2: Vercel Dashboard
1. Go to https://vercel.com
2. Click "Add New Project"
3. Import from GitHub or drag & drop portfolio folder
4. Deploy!

### Method 3: GitHub Integration
1. Push portfolio to GitHub
2. Connect GitHub repo to Vercel
3. Auto-deploy on push

## 🔍 Post-Deployment Checks

After deployment, verify:
1. ✅ CSS loads correctly (check browser console F12)
2. ✅ JavaScript works (test interactions)
3. ✅ All images/icons display
4. ✅ Responsive design works
5. ✅ No 404 errors in console

## 🐛 Troubleshooting

### Issue: CSS not loading
**Solution:**
- Check file path is `/styles.css` (absolute)
- Verify file exists in root directory
- Check browser console for errors

### Issue: JavaScript not working
**Solution:**
- Check file path is `/script.js` (absolute)
- Verify file exists in root directory
- Check browser console for errors

### Issue: 404 errors
**Solution:**
- Ensure all files are in root directory
- Check `vercel.json` routes configuration
- Verify file names match exactly (case-sensitive)

## 📝 Notes

- Vercel automatically serves static files from root
- Absolute paths (`/file.css`) work best
- Relative paths (`./file.css`) also work but absolute is safer
- All files should be in the same directory for static sites

---

**Ready for deployment!** 🎉
