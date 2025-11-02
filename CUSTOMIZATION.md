# 🎨 Customization Guide

This guide will help you customize FreelanceSphere to match your brand and preferences.

## 📝 Basic Information

### 1. Update Developer Information

Edit `src/components/Hero.jsx`:

```jsx
// Lines 16-17: Name
<span className="text-white">I'm </span>
<span className="gradient-text">Muhammad Mansoor</span>

// Lines 23-28: Role and Title
<h2 className="text-3xl md:text-4xl font-bold text-white/90">
  MERN Stack Developer
</h2>
<h2 className="text-3xl md:text-4xl font-bold gradient-text">
  & Freelancer
</h2>

// Lines 34-36: Tagline
<p className="text-xl md:text-2xl text-white/70 max-w-2xl lg:max-w-none animate-fade-in-delay">
  I build scalable, elegant full-stack web solutions for modern businesses.
</p>
```

### 2. Update WhatsApp Number

Edit these files to replace the placeholder number:

**`src/components/Navigation.jsx`** (line 26):
```jsx
const phoneNumber = '1234567890' // Your WhatsApp number here
```

**`src/components/Hero.jsx`** (line 9):
```jsx
const phoneNumber = '1234567890' // Your WhatsApp number here
```

**Format**: Country code + number (no + or spaces)
- Example: US number `(555) 123-4567` → `15551234567`
- Example: Pakistan number → `923001234567`

### 3. Add Your Photo

In `src/components/Hero.jsx`, replace the placeholder (lines 70-81) with your image:

```jsx
<div className="relative w-96 h-96 rounded-full overflow-hidden glass border-4 border-primary/20">
  <img 
    src="/your-photo.jpg" 
    alt="Muhammad Mansoor" 
    className="w-full h-full object-cover"
  />
</div>
```

Or use an external URL:
```jsx
<img 
  src="https://your-image-host.com/photo.jpg" 
  alt="Muhammad Mansoor" 
  className="w-full h-full object-cover"
/>
```

## 🎨 Design Customization

### 1. Change Color Scheme

Edit `tailwind.config.js`:

```js
colors: {
  primary: '#6C63FF',    // Main brand color
  accent: '#00C9A7',     // Accent/highlight color
},
```

**Suggested Color Palettes:**

**Tech Blue**:
```js
primary: '#2563EB',  // Blue
accent: '#06B6D4',   // Cyan
```

**Green Theme**:
```js
primary: '#10B981',  // Green
accent: '#34D399',   // Light Green
```

**Purple Dream**:
```js
primary: '#8B5CF6',  // Purple
accent: '#EC4899',   // Pink
```

### 2. Change Fonts

Edit `tailwind.config.js`:

```js
fontFamily: {
  heading: ['Poppins', 'Inter', 'sans-serif'],  // For titles
  body: ['Open Sans', 'Manrope', 'sans-serif'], // For body text
},
```

Add your Google Fonts in `index.html` and update the config above.

### 3. Adjust Background Gradient

Edit `src/index.css` (lines 19-26):

```css
.animated-gradient {
  background: linear-gradient(-45deg, #6C63FF, #8B5CF6, #6366F1, #00C9A7);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
```

Change the color stops to your preferred gradient colors.

### 4. Modify Glass Effects

Edit `src/index.css` (lines 11-15):

```css
.glass {
  background: rgba(255, 255, 255, 0.05);  /* Opacity */
  backdrop-filter: blur(10px);             /* Blur amount */
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

- Increase opacity for more visible glass
- Increase blur for more frosted effect

## 🔗 Update Navigation Links

Edit `src/components/Navigation.jsx` (lines 17-22):

```jsx
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Blog', href: '#blog' },           // Add custom links
  { label: 'Resume', href: '/resume.pdf' },  // External links
]
```

## 📱 Adjust Responsive Breakpoints

All responsive classes use Tailwind's default breakpoints:

- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

Edit `tailwind.config.js` to customize these breakpoints.

## ✨ Customize Animations

### Particle Count
Edit `src/components/Home.jsx` (line 30):
```jsx
for (let i = 0; i < 50; i++) {  // Change 50 to desired count
```

### Animation Speed
Edit `src/components/Hero.jsx` - Floating animation (bottom of file):
```jsx
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);  // Change -20px for different amplitude
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;  // Change 6s for speed
}
```

### Gradient Animation Speed
Edit `src/index.css` (line 22):
```css
animation: gradient 15s ease infinite;  // Change 15s for speed
```

## 🎯 Add New Sections

To add more sections (Projects, Services, etc.), create new components:

1. Create `src/components/Projects.jsx`
2. Import in `src/components/Home.jsx`
3. Add the section below Hero

Example:
```jsx
import Projects from './Projects'

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* ... existing code ... */}
      <Hero />
      <Projects />  {/* Add new section */}
    </div>
  )
}
```

## 🚀 Performance Optimization

### Reduce Bundle Size
If you don't need certain fonts, remove them from `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

### Optimize Images
- Compress images before adding
- Use WebP format when possible
- Add `loading="lazy"` for below-fold images

### Disable Animations
Comment out particle system in `src/components/Home.jsx` for lower-end devices.

## 📦 Add Dependencies

### For Icons
```bash
npm install react-icons
```

Usage:
```jsx
import { FaGithub, FaLinkedin } from 'react-icons/fa'

<FaGithub className="w-6 h-6" />
```

### For Animations
```bash
npm install framer-motion
```

### For Type Effects
```bash
npm install react-type-animation
```

## 🎬 Next Steps

1. ✅ Replace all placeholder text with your information
2. ✅ Add your professional photo
3. ✅ Update WhatsApp number
4. ✅ Choose your color scheme
5. ✅ Add your logo (optional)
6. ✅ Create Projects, Services, About sections
7. ✅ Build and deploy!

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)
- [Glassmorphism Guide](https://glassmorphism.com)

---

Need help? Feel free to customize as you see fit! 🎨

