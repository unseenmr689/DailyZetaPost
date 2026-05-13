# CryptoScope - Static Cryptocurrency Review Website

A modern, minimalist, professional dark-theme website for cryptocurrency reviews and insights. Built with plain HTML, CSS, and vanilla JavaScript.

## 🚀 Deployment Instructions

### Option 1: GitHub + Vercel (Recommended)

1. **Create a GitHub Repository:**
   - Go to GitHub and create a new repository (e.g., `crypto-review-site`).
   - Push all the files in this folder to your new repository.

2. **Deploy to Vercel:**
   - Log in to your [Vercel account](https://vercel.com).
   - Click "Add New" -> "Project".
   - Import your GitHub repository.
   - Vercel will automatically detect the static project. 
   - Click **Deploy**.
   - Your site will be live at `https://your-project-name.vercel.app`.

### Option 2: Local Preview

To preview the site locally, you can use any static file server:

- **Using Python:** `python -m http.server 3000`
- **Using Node.js:** `npx serve .`
- **Using VS Code:** Install the "Live Server" extension and click "Go Live".

## 📁 Project Structure

```text
/
├── index.html           # Homepage
├── reviews.html         # Reviews Listing
├── blog.html            # Blog Listing
├── about.html           # About Us
├── contact.html         # Contact Page
├── css/
│   └── style.css        # Global Styles (Dark Theme)
├── js/
│   └── script.js        # Animations & Interactions
└── posts/
    ├── bitcoin-review.html
    └── ethereum-review.html
```

## 🛠 Features

- **Dark Mode Design:** Premium crypto-style interface.
- **Responsive Layout:** Fully optimized for Mobile, Tablet, and Desktop.
- **SEO Ready:** Meta tags, Open Graph, and Structured Data (JSON-LD) included.
- **Ad Friendly:** Pre-defined ad placeholders for easy monetization.
- **Smooth Animations:** Typing effect and fade-in scroll transitions.

## 📝 Editing Manual Content

- **Adding a Review:** Copy `posts/bitcoin-review.html`, rename it, and update the content.
- **Ad Slots:** Look for `<!-- AdSense / Adsterra / Monetag placement -->` comments in the HTML to insert your ad codes.
- **Images:** All images use external links. You can swap them by changing the `src` attribute in the `<img>` tags.
