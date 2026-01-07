# Engineering Project Pages - Integration Guide

## 📁 What You Have

I've created **7 detailed HTML project pages** extracted from your documents:

### Extracurricular Projects (4):
1. **project-microg.html** - NASA Micro-G NExT EVA Tool (ASTROID)
2. **project-aiaa.html** - AIAA Design-Build-Fly Competition
3. **project-cubesat.html** - Columbia Space Initiative CubeSat
4. **project-blueskies.html** - NASA Gateways to Blue Skies (PH-LORA)

### Personal Projects (2):
5. **project-engine-restoration.html** - Antique Nitromethane Engine Restoration
6. **project-autonomous-landing.html** - Autonomous Self-Landing UAV

### Curriculum Projects (1):
7. **project-rocket-glider.html** - Rocket-Powered Glider (Art of Engineering)

Each page is a complete, standalone HTML file with:
- ✅ Professional styling matching your portfolio
- ✅ Detailed project descriptions from your documents
- ✅ Technical specifications and achievements
- ✅ Technologies used
- ✅ Your specific contributions
- ✅ Results and impact
- ✅ Back button to return to portfolio

---

## 🎯 How to Add These to Your Portfolio

### Option 1: Upload to GitHub (Recommended)

1. **Upload the project files:**
   - Go to your GitHub repository
   - Upload all 4 `project-*.html` files to the **root directory** (same place as `index.html`)

2. **Update your `config.js`:**
   - Open `config.js`
   - Find the `projects` array
   - Replace the placeholder projects with these 4 projects:

```javascript
projects: [
  {
    id: 1,
    title: "NASA Micro-G NExT EVA Tool",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    shortDescription: "ASTROID: Competition-winning mechanical tool for orientation-preserving lunar regolith sampling. Selected as 1 of 6 teams nationally for NASA testing.",
    link: "project-microg.html"
  },
  {
    id: 2,
    title: "AIAA Design-Build-Fly Competition",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    shortDescription: "Aerodynamics subteam member conducting CFD analysis and designing optimized aircraft components. Design report ranked 14th out of 112 teams.",
    link: "project-aiaa.html"
  },
  {
    id: 3,
    title: "Columbia Space Initiative CubeSat",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    shortDescription: "Structures subteam designing satellite components and conducting thermal analysis for 1U launch (April 2026) and 6U satellite (2027).",
    link: "project-cubesat.html"
  },
  {
    id: 4,
    title: "NASA Gateways to Blue Skies",
    thumbnail: "https://images.unsplash.com/photo-1473773386757-42efa7b94e6e?w=800&h=600&fit=crop",
    shortDescription: "PH-LORA: Autonomous UAV-based pheromone delivery system for sustainable agriculture. Selected as 1 of 8 teams, awarded $9,000.",
    link: "project-blueskies.html"
  },
  {
    id: 5,
    title: "Antique Engine Restoration",
    thumbnail: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop",
    shortDescription: "Restored 30+ year old nitromethane model airplane engines through troubleshooting, disassembly, and precision refinishing. Successfully brought one of three engines back to operational condition.",
    link: "project-engine-restoration.html"
  },
  {
    id: 6,
    title: "Autonomous Self-Landing UAV",
    thumbnail: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop",
    shortDescription: "Vision-based autonomous landing system using YOLO object detection on Raspberry Pi with ESP32 flight controller. First flight test planned for Summer 2026.",
    link: "project-autonomous-landing.html"
  },
  {
    id: 7,
    title: "Rocket-Powered Glider",
    thumbnail: "https://images.unsplash.com/photo-1568889311144-c9db6b9c875a?w=800&h=600&fit=crop",
    shortDescription: "Designed and manufactured rocket-powered glider with sliding wing mechanism for Art of Engineering Lab. Conducted CFD analysis and earned A+ grade.",
    link: "project-rocket-glider.html"
  }
]
```

3. **Save and commit changes**

4. **Your engineering page will now show these 4 projects!**

---

### Option 2: Local Testing First

1. **Place all files in the same folder:**
   ```
   your-portfolio/
   ├── index.html
   ├── config.js
   ├── components.js
   ├── app.js
   ├── project-microg.html
   ├── project-aiaa.html
   ├── project-cubesat.html
   └── project-blueskies.html
   ```

2. **Open `index.html` in your browser**

3. **Navigate to Engineering page**

4. **Click on a project to test the detail pages**

5. **Once verified, upload to GitHub**

---

## ✏️ Customization

### Adding Your Own Photos

Each project page currently uses placeholder images. To add your photos:

1. **Upload photos to GitHub** (create an `images` folder)

2. **Edit each `project-*.html` file:**
   - Find the `<img>` tag
   - Replace the `src` with your image URL
   - Example: `src="images/microg-poster.jpg"`

3. **Your poster image** (`Micro-g_Spaceposium_Poster_2025__1_.jpg`) is perfect for the Micro-G project!

### Updating Content

To update any project details:

1. **Open the `project-*.html` file**
2. **Find the section you want to edit**
3. **Update the text**
4. **Save and re-upload to GitHub**

All text is clearly labeled with section titles like:
- `<div class="content-section">`
- `<h2 class="section-title">Project Overview</h2>`
- `<p class="section-text">Your text here</p>`

---

## 🎨 Styling

All project pages match your portfolio's color scheme:
- **Primary Accent:** #9BCBEB (Columbia Blue)
- **Text:** Black on white background
- **Links:** Columbia Blue with hover effect

The styling is consistent with your main portfolio for a professional, cohesive look.

---

## 📋 Content Extracted From Your Documents

### NASA Micro-G NExT (from proposal and portfolio PDF):
- Full ASTROID system description
- Your specific contributions to lock mechanisms, base, stamp cap
- Technical specifications and compliance
- Testing at NBL
- Team structure and results

### AIAA DBF (from resume and portfolio PDF):
- Aerodynamics work with CFD tools
- Wing design and fabrication
- Wheel fairing optimization
- 14th place design report ranking

### CubeSat (from proposal):
- Structures subteam work
- Deployable mechanisms
- Thermal analysis requirements
- Launch timelines and missions

### Blue Skies (from research PDF):
- Complete PH-LORA system architecture
- Technical and regulatory contributions
- Oracle + drone integration
- $9,000 award and selection

### Engine Restoration (from portfolio PDF):
- Three antique nitromethane engines
- Last run in 1992
- Restoration process and challenges
- One engine successfully operational

### Autonomous Landing UAV (from portfolio PDF):
- YOLO visual recognition model
- Raspberry Pi + ESP32 + Arduino architecture
- Real-time decision framework
- Summer 2026 first flight test goal

### Rocket-Powered Glider (from portfolio PDF):
- Art of Engineering Lab project
- Wing design and CFD analysis
- Laser cutting manufacturing
- A+ grade achievement

---

## 🚀 Next Steps

1. **Review each HTML file** to make sure descriptions match your experience
2. **Add real project images** where you have them
3. **Upload to GitHub**
4. **Update `config.js` with the 4 projects**
5. **Test on your live site**
6. **Celebrate!** 🎉

---

## ❓ Questions?

If you need to:
- Add more projects
- Change the layout
- Update specific sections
- Add more images

Just let me know and I'll help!

---

**Note:** These are standalone HTML pages, not React components. They work alongside your React portfolio by being separate pages that link from the main portfolio. This approach keeps them simple to edit and maintain.
