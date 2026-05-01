# WebFlow - Dark UI Template

A modern, responsive dark UI template designed for agencies and creative professionals. WebFlow combines contemporary design with clean, accessible code for a premium web experience.

## Features

- **Modern Dark Design** - Contemporary aesthetic with purple-to-cyan gradient
- **Fully Responsive** - Desktop, tablet, and mobile optimization with hamburger menu
- **User Authentication** - Sign up, sign in, and logout with localStorage persistence
- **Dynamic Service Modals** - Single reusable modal system with data attributes
- **Project Management** - Comprehensive Get Started page for client inquiries
- **8 Professional Pages** - Home, About, Services, Pricing, Get Started, Contact, Sign Up, Sign In
- **Separated Architecture** - Page-specific CSS and JavaScript files for maintainability
- **Mobile-First Navigation** - Animated hamburger menu with integrated logout button

## Project Structure

```
├── index.html, about.html, services.html, pricing.html
├── get-started.html, contact.html, signin.html, signup.html
├── index.css (main styles)
├── css/ (about.css, contact.css, pricing.css, services.css)
├── js/ (about.js, contact.js, pricing.js, services.js)
└── image/ (avatars, backgrounds, icons)
```

## Key Pages

- **Services** - 6 service cards with dynamic modal details
- **Pricing** - 3 tiers (Starter, Professional, Enterprise) with FAQ
- **Get Started** - Project inquiry form with service selection, budget, timeline
- **Authentication** - Secure sign up/sign in with session management

## Getting Started

1. Open `index.html` in your browser
2. Navigate using the menu or hamburger icon
3. Test authentication on Sign Up/Sign In pages
4. Submit project details on Get Started page

No build tools required. All data persists via localStorage.

---

**Version**: 2.0.0 | **Last Updated**: May 2026
