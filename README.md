# 🚀 FreelanceSphere

A modern, sleek, and visually appealing personal portfolio website for **Muhammad Mansoor**, a MERN Stack Developer & Freelancer.

## ✨ Features

- **Modern UI/UX**: Clean, minimalist, futuristic design with smooth transitions and micro-interactions
- **Glassmorphism Effects**: Beautiful frosted glass navigation bar
- **Animated Background**: Soft gradient blobs with particle effects
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Scrolling**: Seamless navigation between sections
- **WhatsApp Integration**: Direct "Let's Talk" button for instant communication
- **Professional Aesthetics**: Gradient text, rounded corners, and balanced whitespace

## 🎨 Design

### Color Palette
- **Primary**: `#6C63FF` (Indigo Violet)
- **Accent**: `#00C9A7` (Teal)
- **Background**: Gradient of soft blues and purples

### Typography
- **Headings**: Poppins / Inter (Bold)
- **Body**: Open Sans / Manrope (Regular)

## 🛠️ Tech Stack

- **React** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **React Hooks** - State Management

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd freelance-sphere
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 🚢 Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📝 Configuration

### Update WhatsApp Number

Edit the following files to add your WhatsApp number:

1. `src/components/Navigation.jsx` (line 21)
2. `src/components/Hero.jsx` (line 5)

Replace `'1234567890'` with your actual WhatsApp number (format: country code + number).

Example: For US number `(555) 123-4567`, use `15551234567`.

### Add Your Photo

In `src/components/Hero.jsx`, replace the placeholder image section (lines 70-81) with your actual photo.

## 📂 Project Structure

```
freelancesphere/
├── src/
│   ├── components/
│   │   ├── Home.jsx          # Main homepage component
│   │   ├── Navigation.jsx    # Glassmorphic navigation bar
│   │   └── Hero.jsx          # Hero section with CTA buttons
│   ├── App.jsx               # Root app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles with Tailwind
├── index.html                # HTML template
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js            # Vite configuration
└── package.json              # Dependencies

```

## 🎯 Sections

### 1️⃣ Hero Section
- Large headline with developer name
- Role subtitle (MERN Stack Developer & Freelancer)
- Tagline
- Two prominent CTA buttons:
  - **View My Work** - Smooth scroll to projects
  - **Hire Me** - Opens WhatsApp chat
- Animated background with gradient blobs

### 2️⃣ Navigation Bar
- Sticky transparent glass effect
- Navigation links: Home | Projects | Services | About | Contact
- **Let's Talk** button with WhatsApp integration

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

ISC

## 👤 Author

**Muhammad Mansoor** - MERN Stack Developer & Freelancer

---

Built with ❤️ using React + Tailwind CSS

