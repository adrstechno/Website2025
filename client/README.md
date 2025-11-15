# ADRS Technology - Modern SaaS & PaaS Website

A complete, modern website built with React, TailwindCSS, and Framer Motion for ADRS Technology, showcasing enterprise-grade SaaS and PaaS solutions.

## 🚀 Features

- **Modern Design**: Clean, premium UI inspired by leading tech companies
- **Smooth Animations**: Framer Motion animations throughout (fade-up, stagger, slide-in)
- **Fully Responsive**: Works perfectly on all devices
- **Multiple Pages**: Home, About, Services, Products, Contact
- **Component-Based**: Reusable components for maintainability
- **TailwindCSS**: Utility-first CSS framework for rapid development
- **React Router**: Client-side routing for seamless navigation

## 📁 Project Structure

```
client/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Testimonials.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── ContactForm.jsx
│   │   └── AnimatedButton.jsx
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Products.jsx
│   │   └── Contact.jsx
│   ├── layouts/             # Layout wrapper
│   │   └── Layout.jsx
│   ├── router/              # Router configuration
│   │   └── index.jsx
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── package.json
```

## 🛠️ Tech Stack

- **React 19** - UI library
- **React Router DOM** - Routing
- **TailwindCSS 4** - Styling
- **Framer Motion** - Animations
- **Vite** - Build tool

## 📦 Installation

```bash
cd client
npm install
```

## 🚀 Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Build

```bash
npm run build
```

## 📄 Pages

### Home
- Hero section with animated background
- Core solutions showcase
- Why Choose Us section
- Client logos
- Testimonials
- CTA section

### About
- Company story
- Mission & Vision
- Timeline of growth
- Leadership team
- Awards & Recognition

### Services
- SaaS Solutions (Dashboard, CRM, Workflow, Analytics)
- PaaS Infrastructure (Cloud, DevOps, Containers, CI/CD)
- Industry-specific solutions
- Why ADRS is different
- Pricing highlights

### Products
- Product showcase with filtering
- Detailed product cards
- Comparison table
- FAQ section
- Free trial CTA

### Contact
- Contact form
- Contact information cards
- Map placeholder
- Global offices
- Social links

## 🎨 Design Features

- **Color Scheme**: Blues, blacks, grays, whites with soft gradients
- **Typography**: Inter font family for professional look
- **Animations**: Smooth transitions and hover effects
- **Glass Effects**: Modern glassmorphism design elements
- **Gradient Text**: Eye-catching gradient text effects

## 🔑 Key Components

### AnimatedButton
Reusable button component with hover animations and multiple variants (primary, secondary, outline).

### ProductCard
Displays product information with features, badges, and CTAs.

### ServiceCard
Showcases services with icons, descriptions, and highlights.

### ContactForm
Fully functional contact form with validation.

### Testimonials
Slider component for customer testimonials.

## 🌟 Brand Values

- Reliable
- Enterprise-Ready
- Scalable
- Modern
- Secure
- Cloud-Driven
- Innovation First

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎯 Performance

- Optimized animations with Framer Motion
- Lazy loading for images
- Code splitting with React Router
- Minimal bundle size with Vite

## 📝 License

© 2024 ADRS Technology. All rights reserved.
