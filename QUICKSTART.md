# 🚀 QUICK START GUIDE

## Step 1: Create GitHub Account
1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Follow the steps to create your account

## Step 2: Create Repository
1. Click the "+" in the top-right corner
2. Select "New repository"
3. **Repository name:** `portfolio` (or anything you like)
4. Make it **Public**
5. ✅ Check "Add a README file"
6. Click **"Create repository"**

## Step 3: Upload Files
1. In your new repository, click **"Add file" → "Upload files"**
2. Drag and drop these files:
   - `index.html`
   - `portfolio.js`
   - `CNAME` (for custom domain)
3. Click **"Commit changes"**

## Step 4: Enable GitHub Pages
1. Click **"Settings"** (top of your repository)
2. In left sidebar, click **"Pages"**
3. Under "Source":
   - Branch: Select **`main`**
   - Folder: **`/ (root)`**
4. Click **"Save"**
5. Wait 1-2 minutes
6. Your site is live at: `https://your-username.github.io/portfolio/`

## Step 5: Connect Your Domain (liamtsmith.com)

### In GitHub:
1. Still in Settings → Pages
2. Under "Custom domain", type: **`liamtsmith.com`**
3. Click **"Save"**
4. Wait for the DNS check (may take a few minutes)

### Update Your Domain DNS:

You need to point your domain to GitHub. Here's how:

#### **If your domain is at WordPress.com:**
1. Go to your domain settings at WordPress.com
2. Find "DNS records" or "Name servers"
3. Add these DNS records:

**A Records** (point to GitHub's servers):
```
Type: A
Name: @
Value: 185.199.108.153

Type: A  
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**CNAME Record** (for www):
```
Type: CNAME
Name: www
Value: your-github-username.github.io
```

4. Save changes
5. Wait 24-48 hours for DNS to propagate

#### **If your domain is at Namecheap:**
1. Log into Namecheap
2. Domain List → Manage domain
3. Advanced DNS tab
4. Add the same A and CNAME records as above
5. Save

## Step 6: Verify It's Working

After DNS propagates:
1. Go to `liamtsmith.com`
2. You should see your portfolio!
3. GitHub will automatically add HTTPS (secure connection)

---

## 🎯 You're Done!

Your portfolio is now live at **liamtsmith.com**

To make changes:
1. Edit `portfolio.js` (see README.md for what to edit)
2. Upload the new version to GitHub
3. Changes appear in 1-2 minutes automatically!

---

## 🆘 Need Help?

- **DNS not working?** Wait 24-48 hours, then check [whatsmydns.net](https://whatsmydns.net)
- **Site not loading?** Make sure GitHub Pages is enabled (Settings → Pages)
- **Errors?** Press F12 in browser to see console errors

---

## 📧 Common Issues

**"Page not found"**
→ Make sure `index.html` is in the root (not in a subfolder)

**"DNS not configured"**  
→ Wait longer (up to 48 hours) or check DNS settings

**Changes not showing**
→ Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
