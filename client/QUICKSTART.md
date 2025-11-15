# 🚀 Quick Start Guide - ADRS Technology Website

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## Installation & Setup

### 1. Install Dependencies

```bash
cd client
npm install
```

This will install:
- React 19
- React Router DOM
- TailwindCSS 4
- Framer Motion
- Vite

### 2. Start Development Server

```bash
npm run dev
```

The website will be available at: **http://localhost:5173**

### 3. Build for Production

```bash
npm run build
```

Production files will be in the `dist/` folder.

### 4. Preview Production Build

```bash
npm run preview
```

## 📄 Available Pages

Once the dev server is running, you can navigate to:

- **Home**: http://localhost:5173/
- **About**: http://localhost:5173/about
- **Services**: http://localhost:5173/services
- **Products**: http://localhost:5173/products
- **Contact**: http://localhost:5173/contact

## 🎨 Customization Guide

### Change Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Modify Content

All page content is in `src/pages/`:
- `Home.jsx` - Landing page content
- `About.jsx` - Company information
- `Services.jsx` - Service offerings
- `Products.jsx` - Product showcase
- `Contact.jsx` - Contact information

### Update Branding

1. **Logo**: Update in `src/components/Navbar.jsx` and `src/components/Footer.jsx`
2. **Company Name**: Search and replace "ADRS Technology"
3. **Contact Info**: Update in `src/pages/Contact.jsx`

### Add New Components

1. Create file in `src/components/YourComponent.jsx`
2. Import and use in your pages

```jsx
import YourComponent from '../components/YourComponent';

// Use in page
<YourComponent />
```

### Add New Pages

1. Create page in `src/pages/NewPage.jsx`
2. Add route in `src/router/index.jsx`:

```jsx
{
  path: 'new-page',
  element: <NewPage />,
}
```

3. Add link in `src/components/Navbar.jsx`

## 🎯 Key Features

### Animations
All animations use Framer Motion. Example:

```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  Your content
</motion.div>
```

### Responsive Design
Uses Tailwind breakpoints:
- `sm:` - 640px+
- `md:` - 768px+
- `lg:` - 1024px+
- `xl:` - 1280px+

Example:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

### Gradient Text
Use the `gradient-text` utility class:

```jsx
<span className="gradient-text">Your Text</span>
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Check for TypeScript/ESLint errors
npm run lint
```

## 📦 Project Structure

```
client/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── layouts/        # Layout wrapper
│   ├── router/         # Routing config
│   ├── App.jsx         # Root component
│   └── main.jsx        # Entry point
├── public/             # Static assets
└── package.json        # Dependencies
```

## 🔧 Common Tasks

### Update Navigation Links
Edit `src/components/Navbar.jsx` - modify the `navLinks` array

### Change Footer Content
Edit `src/components/Footer.jsx` - modify the `footerLinks` object

### Update Hero Section
Edit `src/components/Hero.jsx` - modify text and stats

### Modify Contact Form
Edit `src/components/ContactForm.jsx` - add/remove fields

### Change Testimonials
Edit `src/components/Testimonials.jsx` - modify the `testimonials` array

## 🎨 Design Tokens

### Colors
- Primary Blue: `#2563eb`
- Secondary Purple: `#8b5cf6`
- Text Dark: `#1a1a1a`
- Text Light: `#6b7280`

### Spacing
- Section: `py-24` (96px)
- Container: `max-w-7xl mx-auto px-4`
- Grid Gap: `gap-8` (32px)

### Typography
- Heading: `text-4xl md:text-5xl font-bold`
- Subheading: `text-xl text-gray-600`
- Body: `text-base text-gray-700`

## 📱 Testing Responsive Design

### Browser DevTools
1. Open DevTools (F12)
2. Click device toolbar icon
3. Test different screen sizes

### Common Breakpoints to Test
- Mobile: 375px (iPhone)
- Tablet: 768px (iPad)
- Desktop: 1440px (Laptop)
- Large: 1920px (Desktop)

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

### Custom Server
```bash
npm run build
# Upload 'dist' folder to your server
```

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [TailwindCSS Docs](https://tailwindcss.com)
- [Framer Motion Docs](https://www.framer.com/motion)
- [React Router Docs](https://reactrouter.com)

## 💡 Tips

1. **Hot Reload**: Changes auto-refresh in dev mode
2. **Component Reuse**: Use existing components when possible
3. **Tailwind Classes**: Use Tailwind utilities instead of custom CSS
4. **Animations**: Keep animations subtle and performant
5. **Images**: Optimize images before adding to project

## 🆘 Need Help?

- Check `README.md` for detailed documentation
- Review `PROJECT_STRUCTURE.md` for architecture
- Inspect existing components for examples
- Use browser DevTools for debugging

---

**Ready to build something amazing! 🎉**
