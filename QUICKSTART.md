# ⚡ Quick Start Guide

Get FreelanceSphere up and running in 5 minutes!

## 🎯 Step 1: Install Dependencies

```bash
npm install
```

## 🎯 Step 2: Start Development Server

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

## 🎯 Step 3: Customize Your Info

### Update WhatsApp Number

Edit `src/components/Navigation.jsx` (line 26) and `src/components/Hero.jsx` (line 11):

```jsx
const phoneNumber = 'YOUR_NUMBER_HERE' // Format: country code + number
```

Example: `923001234567` (Pakistan) or `15551234567` (USA)

### Add Your Photo

In `src/components/Hero.jsx` (around line 70), replace the placeholder with your image URL.

### Personalize Text

Edit `src/components/Hero.jsx`:
- Line 31: Your name
- Lines 37-41: Your role
- Line 46: Your tagline

## 🎯 Step 4: Choose Your Colors

Edit `tailwind.config.js` (lines 6-9):

```js
colors: {
  primary: '#6C63FF',    // Change to your brand color
  accent: '#00C9A7',     // Change to your accent color
},
```

## 🎯 Step 5: Deploy!

Build for production:
```bash
npm run build
```

Deploy to Vercel:
1. Push to GitHub
2. Import to Vercel
3. Click Deploy

Done! 🎉

---

**Need more details?** See `README.md` and `CUSTOMIZATION.md`.

**Questions?** All documentation is in the project files!

