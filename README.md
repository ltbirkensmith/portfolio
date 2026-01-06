# Liam Smith - Engineering Portfolio

A modern, responsive portfolio website showcasing engineering projects, photography, writing, and resume.

## 🌐 Live Site
[liamtsmith.com](https://liamtsmith.com)

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file (rarely needs editing)
├── portfolio.js        # Portfolio content and code (EDIT THIS for content changes)
└── README.md          # This file
```

## ✏️ How to Edit Your Portfolio

### **Editing Your Personal Information**

Open `portfolio.js` and find these sections:

#### 1. **Your Name & Subtitle**
Search for: `<h1 className="hero-name">Your Name</h1>`

Change to:
```javascript
<h1 className="hero-name">Liam Smith</h1>
<p className="hero-subtitle">Mechanical Engineer · Photographer · Writer</p>
```

#### 2. **Navigation Logo (Your Initials)**
Search for: `YN`

Change to your initials:
```javascript
<button className="nav-logo" onClick={() => setCurrentPage('home')}>
  LS
</button>
```

#### 3. **Bio Section**
Search for: `I'm a passionate engineer`

Replace with your own bio text.

#### 4. **Contact Information**
Search for and replace:
- `your.email@example.com` → Your actual email
- `+1 (555) 123-4567` → Your phone number
- `Atlanta, Georgia, USA` → Your location
- Social media URLs (LinkedIn, GitHub, Twitter)

---

### **Adding/Editing Projects**

Find this section in `portfolio.js`:

```javascript
const projects = [
  {
    id: 1,
    title: "Project Name",
    thumbnail: "https://your-image-url.jpg",
    shortDescription: "Brief description...",
    fullDescription: "Detailed description...",
    technologies: ["Python", "TensorFlow", "AWS"],
    outcomes: ["Result 1", "Result 2", "Result 3"]
  },
  // Add more projects here
];
```

**To add a new project:**
1. Copy an existing project object
2. Change the `id` to a unique number
3. Update all the fields with your project info
4. Save the file

**Image URLs:**
- Upload images to GitHub in an `images/` folder
- Or use external hosting (Imgur, etc.)
- Reference like: `"./images/project1.jpg"` or `"https://imgur.com/your-image.jpg"`

---

### **Adding/Editing Photos**

Find the `photos` array:

```javascript
const photos = [
  { 
    id: 1, 
    url: "https://your-photo-url.jpg", 
    description: "Photo description" 
  },
  // Add more photos
];
```

Same process as projects - just copy, paste, and edit!

---

### **Updating Your Resume**

Find the resume sections (search for "Professional Summary", "Experience", "Education"):

**English Resume:**
- Search for: `resumeLanguage === 'english'`
- Update the content in that section

**German Resume:**
- Search for: `resumeLanguage === 'german'`
- Update the content in that section

---

### **Changing Colors**

Search for these hex color codes in `portfolio.js`:

- **Background**: `#ffffff` (white)
- **Text**: `#000000` (black)
- **Accent**: `#9BCBEB` (Columbia Blue)

Replace with your preferred colors using find & replace.

---

## 🚀 Deploying to GitHub Pages

### **First Time Setup:**

1. **Create a GitHub account** (if you don't have one)
   - Go to [github.com](https://github.com)
   - Click "Sign up"

2. **Create a new repository:**
   - Click the "+" in top-right → "New repository"
   - Repository name: `portfolio` (or any name you want)
   - Set to "Public"
   - ✅ Check "Add a README file"
   - Click "Create repository"

3. **Upload your files:**
   - Click "Add file" → "Upload files"
   - Drag and drop: `index.html` and `portfolio.js`
   - Click "Commit changes"

4. **Enable GitHub Pages:**
   - Go to Settings (gear icon at top)
   - Scroll down to "Pages" in left sidebar
   - Under "Source", select: `main` branch
   - Click "Save"
   - Your site will be live at: `https://yourusername.github.io/portfolio/`

5. **Connect your custom domain (liamtsmith.com):**
   - Still in Pages settings
   - Under "Custom domain", enter: `liamtsmith.com`
   - Click "Save"
   - Follow the DNS instructions shown
   - Wait for DNS to propagate (24-48 hours)

---

## 🔄 Updating Your Site

After initial setup, to make changes:

1. **Edit files locally** on your computer
2. **Go to your GitHub repository**
3. **Click on the file** you want to update (e.g., `portfolio.js`)
4. **Click the pencil icon** (Edit)
5. **Make your changes**
6. **Scroll down and click "Commit changes"**
7. **Wait 1-2 minutes** - your site updates automatically!

---

## 📷 Adding Images

### **Option 1: Store in GitHub**

1. Create an `images` folder in your repository
2. Upload images there
3. Reference like: `./images/project1.jpg`

### **Option 2: Use External Hosting**

1. Upload to [Imgur](https://imgur.com)
2. Right-click image → "Copy image address"
3. Use that URL in your code

---

## 🆘 Troubleshooting

### **Site not loading?**
- Make sure GitHub Pages is enabled in Settings → Pages
- Check that `index.html` is in the root of your repository
- Wait a few minutes after pushing changes

### **Images not showing?**
- Make sure image URLs are correct and accessible
- Use full URLs (starting with `https://`)
- Check browser console (F12) for errors

### **Changes not appearing?**
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache
- Wait 1-2 minutes for GitHub to rebuild

---

## 🎨 Color Reference

Current theme:
- White background (#ffffff)
- Black text (#000000)  
- Columbia Blue accent (#9BCBEB)
- Darker blue shades (#6BA3C3, #4A8BAA)

---

## 📱 Features

✅ Fully responsive (mobile, tablet, desktop)  
✅ Hero section with animated gradient background  
✅ About Me with portfolio photo  
✅ Featured Projects showcase  
✅ Resume with English/German toggle  
✅ Engineering projects page  
✅ Photography gallery (masonry grid)  
✅ Contact section with social links  
✅ Copyright footer  

---

## 💡 Tips

- **Test locally**: Open `index.html` in your browser before uploading
- **Backup**: Keep a copy of your files before making major changes
- **Git**: Learn basic Git commands for easier updates
- **Images**: Optimize images before uploading (use TinyPNG.com)

---

## 📧 Need Help?

If you get stuck, check:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [React Documentation](https://react.dev)
- GitHub Issues in this repository

---

**Built with:** React, Lucide Icons, love, and caffeine ☕
