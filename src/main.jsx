import React from "react";
import { createRoot } from "react-dom/client";
import {
  Github, Linkedin, Mail, Download, ExternalLink,
  Code2, BrainCircuit, Database, Smartphone, Menu, X,
  Terminal, Layers3, ChevronRight, Sun, Moon, Copy, ArrowRight
} from "lucide-react";
import "./styles.css";

const GITHUB = "https://github.com/Pranchal003";
const LINKEDIN = "https://www.linkedin.com/in/pranchal-singh-6a32a7265";
const MOBILE_REPO = "https://github.com/Pranchal003/Mobile_APP";

const projects = [
  {
    title: "Autonomous Data Engineer Agent Platform",
    category: "AI / Data Engineering",
    description:
      "An AI-powered multi-agent platform designed to automate data ingestion, cleaning, validation, SQL generation, and ETL workflows.",
    stack: ["Python", "LangGraph", "LLMs", "FastAPI", "PostgreSQL"],
    icon: BrainCircuit,
    featured: true,
    note: "Resume project",
  },
  {
    title: "Diabetes Prediction System",
    category: "Machine Learning",
    description:
      "A classification-based ML system with data preprocessing, feature scaling, exploratory analysis, model training, evaluation, and visualized insights.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    icon: Database,
    featured: true,
    note: "Resume project",
  },
  {
    title: "Voice-Enabled Mobile Application",
    category: "Mobile Development",
    description:
      "A cross-platform React Native + Expo application with voice recognition, file-based routing, reusable components, and Context API state management.",
    stack: ["React Native", "Expo", "Expo Router", "TypeScript", "Context API"],
    icon: Smartphone,
    featured: true,
    link: MOBILE_REPO,
    note: "GitHub repository",
  },
];

const skillGroups = [
  {
    icon: Terminal,
    title: "Programming",
    items: ["Python", "SQL", "JavaScript", "TypeScript"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    items: ["Scikit-learn", "Pandas", "NumPy", "TensorFlow (Basic)", "Keras (Basic)", "Prompt Engineering", "LLMs", "AI Agents"],
  },
  {
    icon: Layers3,
    title: "AI & Backend",
    items: ["LangGraph", "Ollama", "FastAPI", "Workflow Automation"],
  },
  {
    icon: Database,
    title: "Databases & Tools",
    items: ["PostgreSQL", "MySQL", "Git", "GitHub", "VS Code", "Jupyter Notebook", "AWS (Basic)", "GCP (Basic)"],
  },
];

function App() {
  const [open, setOpen] = React.useState(false);
  const [dark, setDark] = React.useState(true);

  React.useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="app">
      <header className="nav-wrap">
        <nav className="nav container">
          <button className="brand" onClick={() => go("home")} aria-label="Go to home">
            <span className="brand-mark"><Code2 size={28} strokeWidth={2.4}/></span>
            <span>Pranchal Singh</span>
          </button>

          <div className={`nav-links ${open ? "show" : ""}`}>
            {["home", "about", "skills", "projects", "education", "contact"].map((item) => (
              <button key={item} onClick={() => go(item)}>
                {item[0].toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <button className="theme-switch" onClick={() => setDark(!dark)} aria-label="Toggle theme">
              <Sun size={17}/>
              <span className={`switch-track ${dark ? "is-dark" : ""}`}><span className="switch-knob"></span></span>
              <Moon size={17}/>
            </button>
            <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X/> : <Menu/>}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-glow glow-one"></div>
          <div className="hero-glow glow-two"></div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="pulse"></span> Available for opportunities</div>
              <h1>
                <span className="hero-intro">Hello, I’m</span>
                <span className="hero-name">Pranchal Singh.</span>
              </h1>
              <div className="hero-role-row">
                <span>AI/ML Engineer</span><i>•</i><span>Python</span><i>•</i><span>AI Applications</span>
              </div>
              <p className="hero-text">
                I’m passionate about building intelligent solutions using Python and AI technologies
                to solve real-world problems and create meaningful impact.
              </p>
              <div className="hero-buttons">
                <button className="primary-btn" onClick={() => go("projects")}>
                  <span className="btn-icon"><Code2 size={19}/></span> View Projects <ArrowRight size={18}/>
                </button>
                <a className="secondary-btn" href="/Pranchal_Singh_Resume.pdf" download>
                  <Download size={18}/> Download Resume
                </a>
              </div>
              <div className="social-row">
                <a href={GITHUB} target="_blank" rel="noreferrer"><Github size={21}/> GitHub</a>
                <a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={21}/> LinkedIn</a>
                <a href="mailto:spranchal423@qmail.com"><Mail size={21}/> Email</a>
              </div>
            </div>

            <div className="hero-card">
              <div className="code-top">
                <div className="window-dots"><span className="dot-red"></span><span className="dot-yellow"></span><span className="dot-green"></span></div>
                <b>pranchal.py</b>
                <Copy className="copy-icon" size={19}/>
              </div>
              <div className="code-body">
                <div className="line"><span>1</span><code><em className="kw">class</em> <strong className="name">Engineer</strong>:</code></div>
                <div className="line"><span>2</span><code>&nbsp;&nbsp;&nbsp;&nbsp;<em className="kw">def</em> <strong className="fn">__init__</strong>(self):</code></div>
                <div className="line"><span>3</span><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.focus = [</code></div>
                <div className="line"><span>4</span><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark>"Python"</mark>,</code></div>
                <div className="line"><span>5</span><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark>"AI Applications"</mark>,</code></div>
                <div className="line"><span>6</span><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<mark>"Problem Solving"</mark></code></div>
                <div className="line"><span>7</span><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]</code></div>
                <div className="line"><span>8</span><code></code></div>
                <div className="line"><span>9</span><code>&nbsp;&nbsp;&nbsp;&nbsp;<em className="kw">def</em> <strong className="fn">build</strong>(self):</code></div>
                <div className="line"><span>10</span><code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em className="kw">return</em> <mark>"Learn → Build → Improve"</mark></code></div>
              </div>
              <div className="code-footer">
                <span><span className="tiny-dot"></span> Building practical systems</span>
                <span>01 / 04</span>
              </div>
            </div>
          </div>
          <div className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></div>
        </section>

        <section id="about" className="section">
          <div className="container about-grid">
            <div>
              <p className="section-kicker">01 — ABOUT</p>
              <h2>Turning curiosity into <span>working systems.</span></h2>
            </div>
            <div className="about-copy">
              <p>
                I'm an aspiring AI/ML Engineer with a B.Sc. background in Mathematics,
                interested in building intelligent applications and learning by solving
                practical problems.
              </p>
              <p>
                My current technical focus includes Python, machine learning,
                data preprocessing, LLM applications, AI agent development,
                backend APIs, and databases.
              </p>
              <div className="stats">
                <div><strong>03</strong><span>featured projects</span></div>
                <div><strong>AI</strong><span>core direction</span></div>
                <div><strong>∞</strong><span>things to learn</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-alt">
          <div className="container">
            <p className="section-kicker">02 — SKILLS</p>
            <div className="section-heading">
              <h2>Tools I use to <span>build.</span></h2>
              <p>Grouped by the kind of work they help me do.</p>
            </div>
            <div className="skill-grid">
              {skillGroups.map(({ icon: Icon, title, items }) => (
                <article className="skill-card" key={title}>
                  <div className="skill-icon"><Icon size={21}/></div>
                  <h3>{title}</h3>
                  <div className="chips">{items.map(x => <span key={x}>{x}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <p className="section-kicker">03 — PROJECTS</p>
            <div className="section-heading">
              <h2>Selected <span>work.</span></h2>
              <p>A few projects that show how I apply AI, ML, backend, and mobile development.</p>
            </div>
            <div className="project-grid">
              {projects.map((p, i) => {
                const Icon = p.icon;
                return (
                  <article className={`project-card ${p.featured ? "featured" : ""}`} key={p.title}>
                    <div className="project-top">
                      <div className="project-icon"><Icon size={25}/></div>
                      <span className="project-number">0{i + 1}</span>
                    </div>
                    <p className="project-category">{p.category}</p>
                    <h3>{p.title}</h3>
                    <p className="project-desc">{p.description}</p>
                    <div className="chips project-chips">{p.stack.map(x => <span key={x}>{x}</span>)}</div>
                    <div className="project-bottom">
                      <span>{p.note}</span>
                      {p.link ? (
                        <a href={p.link} target="_blank" rel="noreferrer" aria-label={`Open ${p.title}`}>
                          View on GitHub <ExternalLink size={15}/>
                        </a>
                      ) : (
                        <span className="planned">Case study ready</span>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="education" className="section section-alt">
          <div className="container">
            <p className="section-kicker">04 — EDUCATION</p>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div><span className="time">2020 — 2023</span><h3>B.Sc. — Mathematics</h3><p>Chaudhary Charan Singh University, Hapur</p></div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div><span className="time">2026 — Present</span><h3>MCA — AI/ML Specialization</h3><p>Amity University, Noida</p></div>
              </div>
            </div>
            <div className="certs">
              <h3>Learning & accomplishments</h3>
              <div className="cert-list">
                <span>Python Programming Language — Udemy</span>
                <span>Python for Machine Learning — Udemy</span>
                <span>Python for Data Science Pro — Udemy</span>
                <span>Building the Future of Computing — Amity University</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-box">
            <div>
              <p className="section-kicker">05 — CONTACT</p>
              <h2>Let's build something <span>useful.</span></h2>
              <p>
                Open to opportunities where I can contribute, learn, and grow
                through real-world engineering work.
              </p>
            </div>
            <div className="contact-actions">
              <a className="primary-btn" href="mailto:spranchal423@qmail.com"><Mail size={18}/> Email me</a>
              <a className="secondary-btn" href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={18}/> Connect on LinkedIn</a>
              <a className="secondary-btn" href={GITHUB} target="_blank" rel="noreferrer"><Github size={18}/> View GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} Pranchal Singh</span>
          <span>Built with React + curiosity.</span>
          <button onClick={() => go("home")}>Back to top ↑</button>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
