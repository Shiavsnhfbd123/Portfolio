import type { Metadata } from "next";
import { headers } from "next/headers";
import PortfolioEffects from "./PortfolioEffects";

const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "Python", "C", "C++", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks",
    items: ["React.js", "Tailwind CSS", "FastAPI", "Django", "Django REST Framework"],
  },
  {
    title: "Developer tools",
    items: ["Git", "GitHub", "VS Code", "Netlify", "Render"],
  },
  {
    title: "Data & AI",
    items: ["MongoDB", "SQLite", "LLM API integration", "RAG pipelines", "Agile workflows"],
  },
];

const projects = [
  {
    number: "02",
    label: "CODSOFT TASK 02",
    title: "Canvas Landing Page",
    summary:
      "A responsive, creative landing page for a learning-focused Canvas experience, shaped around a clear hero, feature cards, learning content, process steps, testimonials, and a focused call to action.",
    tags: ["HTML5", "CSS3", "CSS Grid", "Flexbox"],
    codeUrl: "https://github.com/Shiavsnhfbd123/CODSOFT_TASKSNO2",
    demoUrl: "https://pagelandingtask2.netlify.app/",
    visual: "canvas",
  },
  {
    number: "03",
    label: "CODSOFT TASK 03",
    title: "Calculator Web Application",
    summary:
      "A keyboard-friendly calculator for everyday arithmetic, with percentage, sign toggle, decimals, backspace, clear controls, and division-by-zero handling.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
    codeUrl: "https://github.com/Shiavsnhfbd123/CODSOFT_TASKSNO3",
    demoUrl: "https://calculatortask03.netlify.app/",
    visual: "calculator",
  },
  {
    number: "04",
    label: "COLLABORATIVE BUILD",
    title: "Internship Matcher — India 2025",
    summary:
      "An explainable internship recommender for India that ranks opportunities around a student’s skills and preferences. Collaborative project · built with three teammates.",
    tags: ["Python", "Streamlit", "scikit-learn", "TF-IDF"],
    codeUrl: "https://github.com/Vaishnavi071103/internship_finder",
    demoUrl: "https://internshipfinder-fsistxjp6qdzqkfvdymcyn.streamlit.app/",
    visual: "internship",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const title = "Shivansh Aggarwal | Full-Stack Developer";
  const description =
    "Computer Science student building secure, useful web applications with React, Python, and Django REST Framework.";

  return {
    title,
    description,
    metadataBase: new URL(origin),
    openGraph: {
      title,
      description,
      url: origin,
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og.png`],
    },
  };
}

export default function Home() {
  return (
    <main className="portfolio">
      <PortfolioEffects />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <header className="site-header" data-site-header>
        <a className="monogram" href="#top" aria-label="Go to top">
          SA<span>.</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#about" data-nav-link="about">About</a>
          <a href="#work" data-nav-link="work">Work</a>
          <a href="#projects" data-nav-link="projects">Projects</a>
          <a href="#stack" data-nav-link="stack">Stack</a>
          <a href="#education" data-nav-link="education">Education</a>
        </nav>
        <a className="status" href="#contact">
          <i aria-hidden="true" /> Let&apos;s connect
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">FULL-STACK DEVELOPER · CSE STUDENT</p>
          <h1>
            <span className="hero-name">Shivansh Aggarwal</span>
            <span className="hero-message">Systems with purpose.<em> Experiences with ease.</em></span>
          </h1>
          <div className="hero-snapshot" aria-label="Professional profile">
            <div><b>BASED IN</b><span>Faridabad, India</span></div>
            <div><b>WORKING WITH</b><span>React · Python · Django REST</span></div>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#work" data-magnetic>
              Explore my work <span aria-hidden="true">↘</span>
            </a>
            <a className="button button-ghost" href="mailto:Shivanshfbd123@gmail.com">
              Let&apos;s build together
            </a>
          </div>
          <div className="social-row" aria-label="Social links">
            <a href="https://github.com/Shiavsnhfbd123" target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a href="https://www.linkedin.com/in/shivanshhr123/" target="_blank" rel="noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a href="mailto:Shivanshfbd123@gmail.com">Email <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="hero-art" aria-label="Full-stack development showcase" data-reveal>
          <div className="orbit orbit-a" aria-hidden="true" />
          <div className="orbit orbit-b" aria-hidden="true" />
          <div className="art-core">
            <p>BUILD / SHIP / LEARN</p>
            <strong>SA</strong>
            <span>React · Python · APIs</span>
          </div>
          <article className="floating-card card-project">
            <span className="card-label">FEATURED BUILD</span>
            <h2>Library<br />Management<br />System</h2>
            <div className="card-tags"><span>React</span><span>DRF</span><span>JWT</span></div>
          </article>
          <div className="floating-card card-signal">
            <span className="pulse-dot" aria-hidden="true" />
            <p>Current focus</p>
            <strong>Reliable, human-centered products</strong>
          </div>
        </div>
      </section>

      <section className="intro-band" id="about" data-section data-reveal>
        <p className="section-kicker">01 — ABOUT</p>
        <div>
          <p className="statement">
            A builder who cares about the code <em>and</em> the people using it.
          </p>
          <p className="about-copy">
            I&apos;m a Computer Science undergraduate with hands-on experience
            building and deploying web applications using React, Python, FastAPI,
            Django REST Framework, and Tailwind CSS. I enjoy turning complex flows
            into clear interfaces, secure APIs, and practical systems.
          </p>
          <div className="about-signals">
            <span><b>BUILD</b>Full-stack web apps</span>
            <span><b>SHIP</b>Deployment-ready products</span>
            <span><b>EXPLORE</b>AI and RAG workflows</span>
          </div>
        </div>
      </section>

      <section className="case-study" id="work" data-section>
        <div className="case-study-head" data-reveal>
          <div>
            <p className="section-kicker">02 — SELECTED WORK</p>
            <h2>One strong system.<br />Many thoughtful details.</h2>
          </div>
          <p>
            A practical web platform designed around real inventory, permissions,
            lending workflows, and the people who depend on them.
          </p>
        </div>

        <article className="case-card tilt-card" data-reveal data-tilt>
          <div className="case-visual" aria-label="Abstract library platform interface">
            <div className="case-visual-top">
              <span className="live-chip"><i aria-hidden="true" /> SYSTEM ONLINE</span>
              <span>LIBRARY / 01</span>
            </div>
            <div className="shelf shelf-one"><i /><i /><i /><i /><i /></div>
            <div className="shelf shelf-two"><i /><i /><i /><i /></div>
            <div className="borrow-flow">
              <span>Student</span><b>→</b><span>Loan</span><b>→</b><span>Inventory</span>
            </div>
            <div className="metrics-card"><b>8</b><span>API tests</span></div>
            <div className="security-card">JWT<br /><span>Protected routes</span></div>
          </div>

          <div className="case-copy">
            <p className="project-type">FULL-STACK WEB APPLICATION</p>
            <h3>Library Management System</h3>
            <p className="case-summary">
              A role-based library management application with distinct librarian
              and student portals, built to make everyday library operations safer
              and easier to manage.
            </p>
            <div className="case-stack" aria-label="Project technology stack">
              <span>React</span><span>Vite</span><span>Tailwind CSS</span><span>Django REST</span><span>JWT</span><span>SQLite</span>
            </div>
            <a className="text-link" href="https://github.com/Shiavsnhfbd123" target="_blank" rel="noreferrer">
              View GitHub profile <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>

        <div className="project-details">
          <article className="tilt-card" data-reveal data-tilt>
            <span>01</span>
            <h3>Structured data, built for discovery</h3>
            <p>Designed REST APIs and relational models for books, authors, categories, students, and loan records—then added search, ISBN inventory, cover uploads, dashboards, and borrowing history.</p>
          </article>
          <article className="tilt-card" data-reveal data-tilt>
            <span>02</span>
            <h3>Security at the centre</h3>
            <p>Implemented JWT token refresh, protected React routes, and server-enforced role-based permissions for administrators and active student accounts.</p>
          </article>
          <article className="tilt-card" data-reveal data-tilt>
            <span>03</span>
            <h3>Real-world lending logic</h3>
            <p>Engineered transactional issue and return workflows that prevent duplicate or out-of-stock loans, update inventory automatically, and calculate configurable overdue fines.</p>
          </article>
          <article className="tilt-card" data-reveal data-tilt>
            <span>04</span>
            <h3>Tested where it counts</h3>
            <p>Added 8 Django API tests covering authentication, validation, permissions, protected deletion, and demo-account safeguards.</p>
          </article>
        </div>
      </section>

      <section className="projects-section" id="projects" data-section>
        <div className="projects-head" data-reveal>
          <div>
            <p className="section-kicker">03 — MORE PROJECTS</p>
            <h2>Useful interfaces,<br /><span>made with intent.</span></h2>
          </div>
          <p>
            A compact collection of front-end and collaborative builds, each with a
            clear purpose and a live code trail.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card tilt-card" key={project.title} data-reveal data-tilt>
              <div className={`project-art ${project.visual}`} aria-hidden="true">
                <span>{project.number}</span>
                {project.visual === "canvas" && <><i /><i /><i /></>}
                {project.visual === "calculator" && <div className="calculator-keys"><i /><i /><i /><i /><i /><i /></div>}
                {project.visual === "internship" && <div className="finder-lines"><i /><i /><i /></div>}
              </div>
              <div className="project-card-copy">
                <p className="project-type">{project.label}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="project-tags" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="project-links">
                  <a href={project.codeUrl} target="_blank" rel="noreferrer">Code <span aria-hidden="true">↗</span></a>
                  {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">Live site <span aria-hidden="true">↗</span></a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section" id="stack" data-section>
        <div className="skills-intro" data-reveal>
          <div>
            <p className="section-kicker">04 — MODERN STACK</p>
            <h2>Comfortable across<br /><span>the whole build.</span></h2>
          </div>
          <p>From the browser to the database—and into AI-assisted products—I choose tools for the job, then use them with intent.</p>
        </div>
        <div className="tech-ribbon" aria-label="Core technologies" data-reveal>
          <span>React</span><i>✦</i><span>Python</span><i>✦</i><span>FastAPI</span><i>✦</i><span>Django</span><i>✦</i><span>Tailwind CSS</span><i>✦</i><span>MongoDB</span><i>✦</i>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card tilt-card" key={group.title} data-reveal data-tilt>
              <p>{group.title}</p>
              <div>
                {group.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="education-section" id="education" data-section>
        <div className="education-head" data-reveal>
          <p className="section-kicker">05 — EDUCATION</p>
          <h2>Learning across<br />two frontiers.</h2>
        </div>
        <div className="education-grid">
          <article className="education-card degree-card tilt-card" data-reveal data-tilt>
            <div><span>01</span><span>2025 — 2029</span></div>
            <h3>B.Tech in Computer Science Engineering</h3>
            <p>Shri Vishwakarma Skill University (SVSU)</p>
            <small>Village Dudhola, District Palwal, Haryana 121102, India</small>
            <i>Core computer science, systems thinking, and software development.</i>
          </article>
          <article className="education-card degree-card tilt-card" data-reveal data-tilt>
            <div><span>02</span><span>2025 — 2029</span></div>
            <h3>Bachelor of Science in Artificial Intelligence and Cyber Security</h3>
            <p>Indian Institute of Technology Patna (IIT Patna)</p>
            <small>Bihta, Patna, Bihar 801106, India</small>
            <i>Hybrid programme focused on AI and cybersecurity.</i>
          </article>
          <article className="education-card school-card tilt-card" data-reveal data-tilt>
            <div><span>03</span><span>2024 — 2025</span></div>
            <h3>Class XII · Science Stream</h3>
            <p>Government Senior Model Sanskriti Secondary School</p>
            <small>Faridabad, Haryana</small>
            <i>65%</i>
          </article>
        </div>
      </section>

      <footer id="contact" data-section>
        <div data-reveal>
          <p className="section-kicker">06 — CONTACT</p>
          <h2>Have an idea worth<br /><span>building?</span></h2>
          <div className="contact-lines">
            <a className="email-link" href="mailto:Shivanshfbd123@gmail.com">Shivanshfbd123@gmail.com <span>↗</span></a>
            <a className="phone-link" href="tel:+918287481181">+91 8287481181 <span>Call</span></a>
          </div>
        </div>
        <div className="footer-bottom" data-reveal>
          <span>Faridabad, Haryana · India</span>
          <span>Built with React 19 · TypeScript · Tailwind CSS v4</span>
          <span>© {new Date().getFullYear()} Shivansh Aggarwal</span>
        </div>
      </footer>
    </main>
  );
}
