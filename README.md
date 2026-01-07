# Professional Portfolio Website

A modern, clean portfolio website with separate pages for engineering projects, photography, writing, and reading. Built with HTML, CSS, and vanilla JavaScript. Features a white, black, and cornflower blue color scheme with square buttons and subtle animated geometric shapes.

## 🎨 Design Features

- **Tri-color scheme**: White, black, cornflower blue, with grey accents
- **Square buttons**: Clean, modern button design
- **Animated background**: Slow-moving geometric shapes on hero section
- **Professional typography**: Cormorant Garamond for headings, IBM Plex Sans for body text
- **Responsive design**: Works beautifully on all devices
- **Smooth animations**: Subtle scroll effects and hover states

## 📁 File Structure

```
portfolio/
├── index.html              # Homepage (About, Featured Projects, Resume, Explore)
├── engineering.html        # Engineering projects listing
├── project1.html          # Individual project page (template)
├── project2.html          # Individual project page (template)
├── project3.html          # Individual project page (template)
├── project4.html          # Individual project page (template)
├── project5.html          # Individual project page (template)
├── photography.html       # Photography gallery with masonry layout
├── writing.html           # Blog-style writing page
├── reading.html           # Book reviews and recommendations
├── styles.css             # All CSS styles
├── script.js              # All JavaScript functionality
├── README.md              # This file
└── CNAME                  # Custom domain configuration
```

## 🚀 Quick Start

1. **Download all files** to a folder on your computer
2. **Open index.html** in a web browser to preview
3. **Customize content** (see Customization Guide below)
4. **Deploy to GitHub Pages** (see Deployment Guide below)

## ✏️ Customization Guide

### 1. Personal Information

**Update your name and details:**
- Open each HTML file
- Search for "Your Name" and replace with your actual name
- Update email, phone, location in footer sections
- Update social media links (LinkedIn, GitHub, Twitter)

### 2. Homepage (index.html)

**Hero Section:**
- Line 52-54: Update name and tagline

**About Me:**
- Lines 64-72: Replace portfolio photo and bio text

**Featured Projects:**
- Lines 81-116: Update three featured project cards
- Change titles, descriptions, and images
- Update links to point to your project pages

**Resume:**
- Lines 131-280: Update work experience, education, and skills
- Edit both English and German sections

### 3. Engineering Page (engineering.html)

**Add/Remove Projects:**
- Each project is in an `<article class="project-card">` block
- Copy/paste to add more projects
- Update titles, descriptions, tags, and images
- Change links to point to your project detail pages

### 4. Individual Project Pages (project1.html, etc.)

**These are templates you can duplicate:**

1. **Copy project1.html** for new projects
2. **Rename** to match your project (e.g., project6.html)
3. **Update content:**
   - Project title and metadata
   - Overview section
   - Technical details
   - Challenges and solutions
   - Results
   - Technologies used
4. **Update navigation arrows:**
   - Change previous/next project links at bottom
   - Update project titles in navigation

**Adding More Projects:**
```bash
# Copy template
cp project1.html project6.html

# Edit project6.html and update:
# - Title
# - All content sections
# - Previous/next navigation
# - Update engineering.html to link to it
```

### 5. Photography Gallery (photography.html)

**In script.js (lines 2-99), update photographyData array:**
```javascript
const photographyData = [
    {
        src: 'your-image-url.jpg',
        title: 'Photo Title',
        description: 'Photo description',
        camera: 'Camera model',
        location: 'Location',
        date: 'Date'
    },
    // Add more photos...
];
```

**Tips:**
- Use high-quality images (1200px+ wide)
- Compress images for web (use TinyPNG or similar)
- Varying dimensions create better masonry layout
- Host images on Imgur, Cloudinary, or GitHub

### 6. Writing Page (writing.html)

**Add blog posts:**
- Each post is an `<article class="blog-post">` block
- Copy/paste the structure
- Update date, category, title, and excerpt
- Link to full articles (create separate HTML pages if needed)

### 7. Reading Page (reading.html)

**Add books:**
- Organized by "Currently Reading", "Recently Finished", "All-Time Favorites"
- Each book is a `<div class="book-card">` block
- Update book covers, titles, authors, descriptions
- Add star ratings (★★★★★)

### 8. Color Scheme (Optional)

**In styles.css (lines 1-11), change colors:**
```css
:root {
    --primary-black: #000000;
    --cornflower-blue: #6495ED;  /* Change this to your blue */
    --light-grey: #f5f5f5;
    --medium-grey: #999999;
    --dark-grey: #333333;
    --white: #ffffff;
}
```

## 🌐 Deploying to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click "+" → "New repository"
3. Name it `yourusername.github.io` (replace with your actual GitHub username)
4. Make it Public
5. Click "Create repository"

### Step 2: Upload Files

**Option A: Web Interface (Easiest)**
1. Click "uploading an existing file"
2. Drag all HTML, CSS, JS files
3. Commit changes

**Option B: Git Command Line**
```bash
cd /path/to/your/portfolio/folder
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to repository Settings
2. Click "Pages" in sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait 2-3 minutes
6. Your site is live at `https://yourusername.github.io`

### Step 4: Connect WordPress Domain

**In WordPress Domain Settings:**

1. Log in to WordPress.com
2. Go to "My Sites" → "Manage" → "Domains"
3. Select your domain
4. Go to "DNS" or "Name Servers"

**Add these DNS records:**

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

Type: CNAME
Name: www
Value: yourusername.github.io
```

**In GitHub:**

1. Go to Settings → Pages
2. Under "Custom domain", enter your domain (e.g., `yourdomian.com`)
3. Click "Save"
4. Wait 24 hours
5. Check "Enforce HTTPS"

**Update CNAME file:**
- Edit the `CNAME` file
- Replace `yourdomain.com` with your actual domain
- Upload to GitHub

### DNS Propagation

- Changes take 24-48 hours to propagate worldwide
- Check status at [whatsmydns.net](https://www.whatsmydns.net/)
- Site will work at `yourusername.github.io` immediately
- Custom domain will work after DNS propagates

## 🔧 Maintenance & Updates

### Updating Your Portfolio

1. Edit files locally
2. Commit and push:
```bash
git add .
git commit -m "Update project details"
git push
```
3. GitHub Pages rebuilds automatically (1-2 minutes)

### Adding New Projects

1. Copy `project1.html` → `projectN.html`
2. Update all content in new file
3. Add project card to `engineering.html`
4. Update navigation arrows on adjacent projects
5. Push to GitHub

### Adding Photos

1. Update `photographyData` array in `script.js`
2. Upload images to image host
3. Add image URLs and descriptions
4. Push to GitHub

## 📱 Testing

**Before deploying, test:**
- All navigation links work
- Project navigation arrows work correctly
- Photography modal opens and displays info
- Resume language toggle works
- Mobile menu functions
- All images load
- Forms work (if you add backend)

**Test on multiple devices:**
- Desktop (Chrome, Firefox, Safari)
- Tablet
- Mobile (iPhone and Android)

## 🎯 Project Navigation Setup

Each project should link to the next/previous:
```
project5 ← project1 ← project2 ← project3 ← project4 ← project5
     ↓                                            ↓
  (loops back)                              (loops back)
```

Update the navigation section at the bottom of each project page to maintain this flow.

## 💡 Tips for Success

1. **Images are Key**: Use high-quality images, properly compressed
2. **Content First**: Write your content before adding to site
3. **Test Locally**: Always test in browser before deploying
4. **Backup**: Keep a local copy of all files
5. **Version Control**: Commit regularly with descriptive messages
6. **SEO**: Add meta descriptions and alt tags to images
7. **Performance**: Compress images, minimize CSS/JS if needed
8. **Accessibility**: Ensure good color contrast and keyboard navigation

## 🐛 Troubleshooting

**Site not loading:**
- Check if files are in repository root
- Wait 5-10 minutes after pushing
- Check Settings → Pages for errors

**Custom domain not working:**
- Verify DNS records (no typos)
- Wait full 24-48 hours
- Check CNAME file content
- Try both with/without www

**Images not loading:**
- Check image URLs are correct
- Ensure images are publicly accessible
- Try different image host

**Mobile menu not working:**
- Check JavaScript console for errors
- Verify script.js is loaded

**Photography gallery not showing:**
- Check photographyData in script.js
- Verify image URLs are valid
- Check browser console for errors

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [WordPress DNS Guide](https://wordpress.com/support/domains/custom-dns/)
- [Git Basics](https://git-scm.com/doc)
- [HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)

## 📝 License

This is your personal portfolio - modify it however you like!

## 🎉 You're All Set!

Your portfolio is ready to showcase your work. Remember to keep it updated with new projects, photos, and writing. Good luck!

---

**Need help?** Check browser console (F12) for errors, verify all files are uploaded correctly, and ensure DNS settings are accurate.
