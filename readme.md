# Mayank Kumar | Interactive Developer Portfolio

> A cinematic, motion-rich portfolio experience for **Mayank Kumar**, a full-stack developer and UI/UX designer.

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.15-FF0055?style=flat-square&logo=framer&logoColor=white)](https://motion.dev/)

## Overview

This portfolio is designed as a focused, interactive personal brand experience rather than a static resume. It combines a dark developer-centric visual language with cyan, violet, and neon-green accents, glassmorphism surfaces, animated gradients, and subtle ambient motion.

The experience guides visitors through:

- A branded loading screen with animated progress feedback
- An animated hero section with rotating professional roles
- A browsable technology stack explorer
- About, skills, projects, experience, testimonials, and contact sections
- Responsive layouts for desktop, tablet, and mobile screens
- Scroll-linked and entrance animations powered by Framer Motion
- Particle and ambient background effects that keep the page visually alive

## Design Direction

The interface uses a high-contrast futuristic aesthetic built around a small set of reusable visual rules:

| Element | Direction |
| --- | --- |
| Color system | Deep near-black foundation with cyan, violet, and neon-green accents |
| Surfaces | Transparent glass panels, soft borders, blur, and controlled glow |
| Typography | Inter for interface copy and JetBrains Mono for technical details |
| Motion | Entrance reveals, animated gradients, loading transitions, hover states, and floating effects |
| Layout | Single-page navigation with anchored sections and strong visual rhythm |
| Background | Particle field, grid texture, gradient lighting, and subtle noise |

## Featured Projects

### Gyan-Setu

An end-to-end e-learning and coding education platform with authentication, course management, coding practice, progress tracking, and responsive interfaces.

**Stack:** React, Node.js, Redux, MongoDB

### FreshMart

A full-stack grocery e-commerce platform with JWT authentication, role-based access control, product filtering, shopping cart, checkout, order tracking, and an admin dashboard.

**Stack:** React, Vite, Tailwind CSS, Node.js, Express, MongoDB

### Mern-Shop

A grocery delivery platform concept focused on a streamlined shopping experience and a modern full-stack architecture.

**Stack:** React, Express, MongoDB, Node.js

## Tech Stack

### Frontend

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- React Intersection Observer

### Development and tooling

- JavaScript / JSX
- PostCSS
- Autoprefixer
- ESLint-ready Vite workflow

### Portfolio content highlights

- React, TypeScript, Next.js, Vue.js, Redux, and Tailwind CSS
- Node.js, Python, Express, MongoDB, PostgreSQL, and Firebase
- Git, Docker, AWS, Figma, Flutter, and JavaScript

## Project Structure

```text
Portfolio/
├── index.html                  # HTML entry point and page metadata
├── package.json                # Scripts and dependencies
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Theme tokens, fonts, animations, and colors
├── vite.config.js              # Vite and development server configuration
└── src/
    ├── App.jsx                 # Application shell and section composition
    ├── index.css               # Global styles, effects, and utility classes
    ├── main.jsx                # React entry point
    ├── assets/                 # Profile and project imagery
    ├── components/             # Section and visual-effect components
    │   ├── About.jsx
    │   ├── Contact.jsx
    │   ├── Experience.jsx
    │   ├── Footer.jsx
    │   ├── Hero.jsx
    │   ├── Navbar.jsx
    │   ├── ParticleBackground.jsx
    │   ├── Projects.jsx
    │   ├── Skills.jsx
    │   ├── TechStackExplorer.jsx
    │   └── Testimonials.jsx
    └── data/
        └── portfolioData.js    # Navigation, profile, skills, projects, and social data
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm 9 or newer

### Installation

```bash
git clone <your-repository-url>
cd Portfolio
npm install
```

### Run locally

```bash
npm run dev
```

The Vite development server runs at [http://localhost:3000](http://localhost:3000).

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Customization

Most portfolio content can be updated without changing the component layout. Edit [`src/data/portfolioData.js`](src/data/portfolioData.js) to change:

- Name, introduction, rotating hero titles, and social links
- About copy, profile image, and portfolio statistics
- Skill groups, technology icons, and proficiency values
- Project descriptions, categories, tags, images, GitHub links, and live demos
- Experience timeline entries
- Testimonials and contact information

For visual changes, use [`tailwind.config.js`](tailwind.config.js) for theme tokens and animations, and [`src/index.css`](src/index.css) for global effects such as glass panels, glow utilities, grid textures, and animated borders.

## Deployment

This is a standard Vite single-page application and can be deployed to any static hosting provider. A typical deployment configuration is:

```text
Build command: npm run build
Output directory: dist
```

The project is ready for platforms such as Vercel, Netlify, GitHub Pages, or any server that can serve the generated `dist` directory.

## Recommended Content Checklist

Before publishing a personalized version, update:

- Social profile URLs in `portfolioData.js`
- Resume link in the hero section
- Project repository and live-demo URLs
- Experience and testimonial content
- Contact form handling or backend integration
- Page metadata and favicon in `index.html`
- Any placeholder project links that still use `#`

## License

No license has been specified for this project yet. Add a license file before redistributing the source publicly.
