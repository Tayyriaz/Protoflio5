# Vercel Deployment Guide

## Method 1: Vercel CLI (Easiest & Fastest)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
cd portfolio
vercel
```

### Step 4: Production Deploy
```bash
vercel --prod
```

**Done!** Aapko ek URL milega jaise: `https://your-portfolio.vercel.app`

---

## Method 2: Vercel Dashboard (No CLI Needed)

### Step 1: GitHub par push karo
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### Step 2: Vercel Dashboard
1. https://vercel.com par jao
2. "Add New Project" click karo
3. GitHub repository select karo
4. "Deploy" button click karo

**Auto-deploy ho jayega!**

---

## Method 3: Drag & Drop (Simplest)

1. https://vercel.com par jao
2. Login karo
3. Dashboard mein "Add New Project" click karo
4. "Deploy" tab mein "Browse" click karo
5. `portfolio` folder select karo
6. Deploy!

---

## Important Notes

- ✅ Static site hai, koi build command nahi chahiye
- ✅ `vercel.json` already configured hai
- ✅ Free hosting unlimited
- ✅ Custom domain add kar sakte ho
- ✅ Auto HTTPS included

## After Deployment

1. **Custom Domain:** Vercel dashboard se add kar sakte ho
2. **Environment Variables:** Agar chahiye ho to dashboard se add karo
3. **Analytics:** Vercel Analytics free mein available hai

## Troubleshooting

**Issue:** Deploy nahi ho raha
**Solution:** Check karo ki `index.html` portfolio folder ke root mein hai

**Issue:** CSS/JS load nahi ho raha
**Solution:** Check karo ki file paths correct hain (relative paths use kiye hain)

---

**Deployment time: 1-2 minutes!** 🚀
