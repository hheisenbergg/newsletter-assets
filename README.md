# The AI Dispatch 📡
**Noise canceling headphones for your career.**

A brutalist, anti-hype AI newsletter platform. Built with raw HTML/CSS/JS to reflect the "no-nonsense" ethos of the content.

## 🎨 Design Philosophy
- **Anti-Minimalist / High Energy**: Uses a "Highlighter" theme with Acid Lime, Hot Pink, and stark black/white contrast.
- **Interactive Branding**: Features multiple interactive 2D pixel-art mascots (The Glitch Cat, The TV Head, The Guardian).
- **Responsive**: Fully optimized for mobile with a "Linear Flow" layout that transforms floating widgets into a clean vertical stack.

## 🛠 Tech Stack
- **Core**: Vanilla HTML5, CSS3, JavaScript (ES6+).
- **Animation**: HTML5 Canvas (no external libraries) for pixel art and physics.
- **Backend (API)**: Vercel Serverless Functions (Node.js) for email collection.
- **Storage**: (Planned) Google Sheets or Database integration via API.

## 📂 Project Structure
```bash
/
├── index.html          # Landing Page (Glitch Mascot, Video Widget)
├── style.css           # (Integrated into HTML) Global styles
├── /signup
│   └── index.html      # Signup Form (TV Head Mascot, Bento Grid)
├── /api
│   └── subscribe.js    # Serverless function for form submission
└── /animation          # Static assets (videos, gifs)
```

## 🚀 Development
1. **Local Run**: 
   Since it's vanilla, you can just open `index.html` in a browser.
   For API testing, use `vercel dev` or a local server.

2. **Deployment**:
   Ready for **Vercel**. Connect the repo and deploy. 
   Ensure environment variables for email storage are set in Vercel.

## 👾 Mascots
- **The Glitch (Homepage)**: Follows mouse cursor, glitches on click.
- **The Guardian (Homepage)**: Sits on the CTA button, stands up on hover.
- **TV Head (Signup)**: Reacts to input focus (Idle -> Typing -> Success Party).

## 📱 Mobile Behavior
- **Floating Widgets**: On screens < 850px, widgets unpin from corners and stack vertically to preserve readability.
- **Touch**: Hover effects are disabled or adapted for touch interactions.

---
*Hypeless since 2026.*
