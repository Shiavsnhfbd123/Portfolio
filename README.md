<div align="center">

# Shivansh Aggarwal

### Full-Stack Developer · Computer Science Student

<p>
  A refined, responsive portfolio built to present my work, technical skills, education, and contact details with clarity and personality.
</p>

<p>
  <img src="https://img.shields.io/badge/Next.js-16.2.6-0b1020?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-151a31?style=for-the-badge&logo=react&logoColor=61dafb" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-172554?style=for-the-badge&logo=typescript&logoColor=3178c6" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-083344?style=for-the-badge&logo=tailwindcss&logoColor=38bdf8" alt="Tailwind CSS" />
</p>

</div>

![Portfolio social preview](./public/og.png)

## Overview

This is my personal developer portfolio: a single-page experience designed around thoughtful storytelling, useful project context, and an approachable visual system. It balances expressive motion with strong performance, accessibility, and responsive behaviour.

## Highlights

| Experience | Details |
| :-- | :-- |
| **Responsive by design** | Crafted for desktop, tablet, and mobile screens. |
| **Polished interaction** | Smooth scrolling, active navigation, subtle reveals, hover states, and focused card tilt. |
| **Project-focused** | Showcases a full-stack Library Management System, a Canvas landing page, a calculator, and an internship matcher. |
| **Accessible** | Keyboard focus styles and reduced-motion support are included. |
| **Ready to share** | Includes Open Graph metadata, a social preview image, and a downloadable PDF resume. |

## Built With

- **Next.js 16** — application framework and production build tooling
- **React 19** — component-based user interface
- **TypeScript** — reliable, typed application code
- **Tailwind CSS v4** and custom CSS — responsive layouts, visual design, and animation
- **Intersection Observer** — lightweight scroll-reveal and active-section interactions
- **CSS Grid & Flexbox** — adaptive page structure
- **Git & GitHub** — source control and version history
- **Vercel** — production deployment

## Design Approach

The portfolio uses a dark, editorial visual language with violet, cyan, and lime accents. Rather than adding heavy visual effects, the interface uses a carefully selected set of lightweight interactions:

- Sticky navigation with active-section highlighting
- Smooth anchor scrolling and a reading-progress indicator
- Scroll-triggered reveal animations with reduced-motion support
- Professional project-card hover, lift, and limited 3D tilt effects
- Soft gradients, ambient glows, and refined section transitions
- A downloadable PDF resume directly from the hero section

## Run Locally

### Prerequisites

- [Node.js](https://nodejs.org/) **22.x** or later
- npm (included with Node.js)

### Installation

```bash
git clone <your-repository-url>
cd Portfolio
npm install
npm run dev
```

Open the local address printed in your terminal, usually `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

The production build is configured for a standard Next.js deployment.

## Deploy on Vercel

1. Import the GitHub repository into Vercel.
2. Keep the framework preset as **Next.js**.
3. Use the project root (`./`) as the Root Directory.
4. Keep the default install command: `npm install`.
5. Use `npm run build` as the Build Command.
6. Leave Output Directory set to the **Next.js default**.
7. Deploy from the `main` branch.

No environment variables, database configuration, or additional server setup are required.

## Project Structure

```text
app/
├── page.tsx                 # Portfolio content, metadata, and page layout
├── PortfolioEffects.tsx     # Scroll, navigation, reveal, and hover interactions
├── globals.css              # Visual system, responsive styling, and animations
└── layout.tsx               # Root layout and font configuration

public/
├── og.png                           # Social-sharing preview image
└── Shivansh_Aggarwal_Resume.pdf     # Downloadable resume
```

## Portfolio Content

The site presents:

- Full-stack skills across React, Python, FastAPI, Django REST Framework, Tailwind CSS, MongoDB, and AI/RAG workflows
- A role-based Library Management System built with React, Django REST, JWT, and SQLite
- Additional front-end and collaborative projects
- Educational background in Computer Science, AI, and Cyber Security
- Direct contact details and professional social links

## Contact

- **Email:** Shivanshfbd123@gmail.com
- **LinkedIn:** [shivanshhr123](https://www.linkedin.com/in/shivanshhr123/)
- **GitHub:** [Shiavsnhfbd123](https://github.com/Shiavsnhfbd123)

<div align="center">

Built with care by **Shivansh Aggarwal**

</div>
