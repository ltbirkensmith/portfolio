# Portfolio Website

A modern, professional portfolio website built with HTML, CSS, and JavaScript, featuring smooth animations, responsive design, and multiple content sections.

## Features

- **Hero Section**: Full-screen landing with your name overlaid on an animated background
- **About Me**: Bio section with portfolio photo and personal introduction
- **Featured Projects**: Showcase of your top engineering projects
- **Resume**: Bilingual (English/German) resume with seamless web integration
- **Engineering Projects**: Detailed project sections with "Learn More" modals for in-depth information
- **Photography Gallery**: Masonry-style photo grid with modal viewing and descriptions
- **Writing & Reading**: Placeholder sections for future content
- **Contact**: Full contact form with social media links
- **Smooth Animations**: Professional scroll effects and hover interactions
- **Responsive Design**: Mobile-friendly layout that works on all devices

## File Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## Customization Guide

### 1. Personal Information

**In `index.html`:**
- Line 55: Replace `"Your Name"` with your actual name
- Line 56: Update the tagline with your professional titles
- Lines 66-73: Update the About Me text
- Lines 64-66: Replace the placeholder image with your photo
- Resume sections (lines 140-240): Add your experience, education, and skills
- Contact information (lines 462-478): Update with your actual email, phone, and location
- Social media links (lines 481-497): Update with your profiles

### 2. Featured Projects

**In `index.html` (lines 83-119):**
- Update the three featured project cards with your actual projects
- Replace placeholder images with your project screenshots

### 3. Engineering Projects

**In `index.html` (lines 250-297):**
- Add your project titles, descriptions, and images
- Each project has a "Learn More" button that opens a detailed modal

**In `script.js` (lines 42-124):**
- Update the `projectDetails` object with your detailed project information
- Add more projects by creating new entries (project4, project5, etc.)

### 4. Photography Gallery

**In `script.js` (lines 2-40):**
- Replace the `photographyData` array with your actual photos
- Update image URLs and descriptions
- The gallery automatically creates a masonry layout

### 5. Resume Content

**In `index.html` (lines 140-240):**
- Update both English and German resume sections
- Add your work experience, education, and skills
- Customize the layout to match your career

### 6. Colors and Styling

**In `styles.css` (lines 1-11):**
```css
:root {
    --primary-color: #1a1a2e;      /* Main dark color */
    --secondary-color: #16213e;     /* Secondary dark */
    --accent-color: #0f3460;        /* Accent blue */
    --highlight-color: #e94560;     /* Pink/red highlight */
    /* ... modify these to change the entire color scheme */
}
```

## Deploying to GitHub Pages with WordPress Domain

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in (or create an account)
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository: `yourusername.github.io` (replace `yourusername` with your GitHub username)
   - If you use this exact naming convention, your site will be at `yourusername.github.io`
   - Otherwise, name it anything (e.g., `portfolio`) and it will be at `yourusername.github.io/portfolio`
4. Select "Public" (required for free GitHub Pages)
5. Initialize with a README (optional)
6. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface (Easiest)**

1. In your repository, click "uploading an existing file"
2. Drag and drop all three files: `index.html`, `styles.css`, and `script.js`
3. Add a commit message (e.g., "Initial portfolio upload")
4. Click "Commit changes"

**Option B: Using Git Command Line**

```bash
# Navigate to your portfolio folder
cd /path/to/your/portfolio

# Initialize git repository
git init

# Add all files
git add index.html styles.css script.js README.md

# Commit the files
git commit -m "Initial portfolio upload"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, go to "Settings"
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait 1-2 minutes, then your site will be live at `yourusername.github.io`

### Step 4: Connect Your WordPress Domain

Since you own a domain through WordPress, you need to configure it to point to GitHub Pages:

**In WordPress/Domain Provider:**

1. Log in to your WordPress account
2. Go to "My Sites" → "Manage" → "Domains"
3. Find your domain and click "DNS" or "Name Servers"
4. Add the following DNS records:

**For Apex Domain (example.com):**
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

**For WWW Subdomain (www.example.com):**
```
Type: CNAME
Name: www
Value: yourusername.github.io
```

**In GitHub:**

1. Go to your repository Settings → Pages
2. Under "Custom domain", enter your domain (e.g., `example.com`)
3. Click "Save"
4. Check "Enforce HTTPS" (wait 24 hours after adding the domain)

### Step 5: Create CNAME File

Create a file named `CNAME` (no extension) in your repository with just your domain:

```
example.com
```

Upload this file to your repository alongside `index.html`.

### DNS Propagation

- DNS changes can take 24-48 hours to propagate globally
- You can check the status at [whatsmydns.net](https://www.whatsmydns.net/)
- Your site will first be available at `yourusername.github.io`, then at your custom domain once DNS propagates

## Troubleshooting

### Site Not Loading

1. Check that files are in the root directory of the repository
2. Ensure `index.html` is named exactly that (case-sensitive)
3. Wait 5-10 minutes after pushing changes for GitHub Pages to rebuild
4. Check Settings → Pages to see if there are any errors

### Custom Domain Not Working

1. Verify DNS records are correct (no typos in GitHub IPs)
2. Make sure CNAME file contains only your domain (no http://, no trailing slash)
3. Wait 24-48 hours for DNS propagation
4. Try visiting with and without `www` prefix
5. Clear your browser cache

### Images Not Loading

1. Check that image URLs are correct
2. Replace placeholder images with your actual images
3. Host images on a CDN or image hosting service (Imgur, Cloudinary, etc.)
4. Update the `src` attributes in HTML

### Mobile Menu Not Working

The basic mobile menu is included in `script.js`. For a more advanced mobile menu, you may want to enhance the functionality.

## Updating Your Portfolio

To update your portfolio after deployment:

1. Edit your files locally
2. Commit and push changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
3. GitHub Pages will automatically rebuild your site (takes 1-2 minutes)

## Future Enhancements

- Add a blog section for writing
- Integrate a backend for the contact form (using services like Formspree or EmailJS)
- Add a projects filter/search functionality
- Implement a dark mode toggle
- Add more animations and interactions
- Include a CMS for easier content updates

## Browser Support

This portfolio works on all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized CSS with minimal dependencies
- Vanilla JavaScript (no heavy frameworks)
- Lazy loading for images (can be added)
- Minimal external resources (only Google Fonts)

## License

This is your personal portfolio - feel free to modify it as needed!

## Support

If you encounter any issues:
1. Check the browser console for errors (F12 → Console)
2. Verify all files are properly uploaded to GitHub
3. Ensure DNS settings are correct
4. Wait for DNS propagation if using a custom domain

---

**Need Help?**
- GitHub Pages Documentation: https://docs.github.com/en/pages
- WordPress Domain DNS Guide: https://wordpress.com/support/domains/custom-dns/
- Git Basics: https://git-scm.com/doc

Good luck with your portfolio! 🚀
