# Shivansh Aggarwal — Portfolio

A modern, responsive personal portfolio presenting my skills, education, projects, and contact information in a clear and professional way.

## What I Used to Build This Portfolio

- **Next.js** and **React 19** for the application and user interface
- **TypeScript** for structured, reliable code
- **Tailwind CSS v4** and custom CSS for the visual design
- **CSS Grid** and **Flexbox** for responsive layouts
- **Intersection Observer** for lightweight scroll-reveal effects
- **Git** for source control

## How I Made This Portfolio

1. I organized my resume information into clear About, Work, Projects, Skills, Education, and Contact sections.
2. I designed a premium visual system with violet, cyan, and lime accent colors.
3. I created reusable cards and responsive layouts for projects, skills, and education.
4. I added smooth scrolling, active navigation highlighting, a scroll-progress bar, and subtle reveal effects.
5. I kept interactions lightweight, including focused hover states, a limited card tilt effect, and reduced-motion support.
6. I verified the production build so the portfolio is ready for Vercel deployment.

## Main Features

- Responsive desktop, tablet, and mobile design
- Sticky navigation with active-section highlighting
- Smooth scrolling and subtle scroll-reveal transitions
- Professional project-card previews and hover interactions
- Downloadable PDF resume with detailed project descriptions
- Accessible keyboard focus styles and reduced-motion support
- No database, server API, or external environment variables required

## Run Locally

**Requirement:** Node.js 22.x.

```bash
npm install
npm run dev
```

Open the local address shown in the terminal.

## Create a Production Build

```bash
npm run build
```

## Project Structure

```text
app/
  page.tsx              # Portfolio content and layout
  PortfolioEffects.tsx  # Scroll, reveal, navigation, and hover interactions
  globals.css           # Responsive visual design and animations
public/
  og.png                # Social sharing preview image
  Shivansh_Aggarwal_Resume.pdf  # Downloadable resume
```
