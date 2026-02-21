import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiTailwindcss,
  SiCplusplus, SiDocker, SiPycharm, SiEclipseide, SiIntellijidea,
  SiAdobepremierepro, SiAdobeaftereffects, SiCanva, SiWordpress,
  SiGit, SiFigma,
} from 'react-icons/si'
import { StickyScroll, type StickyScrollItem } from '../ui/sticky-scroll-reveal'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import CustomCursor from '../components/CustomCursor'
import './MyStoryPage.css'

/*  Custom Icons  */
const VsCodeIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
  </svg>
)
const JavaIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0 0-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.749-.89 1.254-.998.527-.114.828-.93.828-.93-1.453-.968-8.094.867-3.474 1.242C9.858 22.29 22.026 21.12 19.33 20.504M9.292 13.21s-6.659 1.582-2.358 2.155c1.819.243 5.443.187 8.823-.096 2.761-.233 5.533-.73 5.533-.73s-.974.417-1.68.898c-6.779 1.782-19.875.951-16.098-.869 3.184-1.558 5.78-1.358 5.78-1.358M17.116 17.584c6.893-3.582 3.704-7.022 1.482-6.561-.546.115-.79.215-.79.215s.203-.317.59-.454c4.407-1.549 7.796 4.57-1.422 6.994 0-.001.106-.094.14-.194M13.401 0s3.806 3.806-3.612 9.66c-5.946 4.7-1.355 7.383-.003 10.44-3.474-3.133-6.022-5.889-4.31-8.455 2.512-3.773 9.47-5.606 7.925-11.645M9.734 23.924c6.614.423 16.772-.235 17.017-3.365 0 0-.462 1.187-5.473 2.126-5.652 1.059-12.623.936-16.75.257 0-.001.847.7 5.206.982" />
  </svg>
)

/*  Data  */
const services = [
  { id: 1, title: 'UI/UX DESIGN',      items: ['User research and personas', 'Wireframing and prototyping', 'Interaction design and micro-animations', 'Usability testing and iteration'] },
  { id: 2, title: 'WEB DESIGN',        items: ['Responsive layouts and design systems', 'Landing page and portfolio design', 'Component-based UI design', 'Design-to-code handoff'] },
  { id: 3, title: 'BRANDING',          items: ['Brand strategy and guidelines', 'Typography and color palette', 'Brand collateral and stationery', 'Brand storytelling and identity'] },
  { id: 4, title: 'GRAPHIC DESIGNING', items: ['Print and digital media design', 'Poster, banner and flyer design', 'Packaging and label design', 'Editorial and layout design'] },
  { id: 5, title: 'VIDEO EDITING',     items: ['Cinematic cuts and color grading', 'Motion graphics and transitions', 'Reels, shorts and social media videos', 'Subtitle, titles and caption design'] },
]

const journey = [
  { role: 'CO-FOUNDER & CORE TEAM', org: 'Aiforkids (EdTech Startup)', period: 'Jan 2023 – Present' },
  { role: 'FULL STACK DEVELOPER & LEAD', org: 'Drivacy – National Hackathon Winner', period: '2025' },
  { role: 'CREATOR & STRATEGIST', org: 'Aiforkids Content & Design', period: 'Jan 2023 – Present' },
  { role: 'HEAD OF DEPARTMENT', org: 'Wielearn (Video Editing)', period: '2023 – Present' },
]

const techStack = [
  { icon: <SiHtml5 />,                  name: 'HTML5',        desc: 'Semantic markup and accessible, standards-compliant web structure.' },
  { icon: <SiCss3 />,                   name: 'CSS3',         desc: 'Animations, custom properties, flexbox, and grid-driven layouts.' },
  { icon: <SiJavascript />,             name: 'JavaScript',   desc: 'ES6+ scripting, async/await, DOM manipulation and event handling.' },
  { icon: <SiTypescript />,             name: 'TypeScript',   desc: 'Type-safe code, interfaces, and scalable front-end architecture.' },
  { icon: <SiTailwindcss />,            name: 'Tailwind CSS', desc: 'Utility-first styling for rapid, consistent UI development.' },
  { icon: <JavaIcon />,                 name: 'Java',         desc: 'OOP fundamentals, data structures and backend logic.' },
  { icon: <SiCplusplus />,              name: 'C++',          desc: 'Competitive programming and algorithm design foundations.' },
  { icon: <SiGit />,                    name: 'Git',          desc: 'Version control, branching strategies and collaborative workflows.' },
  { icon: <SiDocker />,                 name: 'Docker',       desc: 'Containerising apps for consistent, reproducible deployments.' },
  { icon: <VsCodeIcon />,               name: 'VS Code',      desc: 'Primary editor with custom extensions, themes and workflows.' },
  { icon: <SiFigma />,                  name: 'Figma',        desc: 'UI/UX design, prototyping, components and design systems.' },
  { icon: <SiPycharm />,                name: 'PyCharm',      desc: 'Python development, debugging and virtual environment management.' },
  { icon: <SiIntellijidea />,           name: 'IntelliJ',     desc: 'Java development with smart code assistance and refactoring tools.' },
  { icon: <SiAdobepremierepro />,       name: 'Premiere Pro', desc: 'Professional video editing, color grading and cinematic cuts.' },
  { icon: <SiAdobeaftereffects />,      name: 'After Effects', desc: 'Motion graphics, visual effects and animated content creation.' },
  { icon: <SiCanva />,                  name: 'Canva',        desc: 'Fast social media graphics, thumbnails and presentation design.' },
  { icon: <SiWordpress />,              name: 'WordPress',    desc: 'SEO-optimised web pages with custom themes and content strategy.' },
  { icon: <SiEclipseide />,             name: 'Eclipse',      desc: 'Java IDE for academic projects and enterprise-level development.' },
]

export default function MyStoryPage() {
  const [openId, setOpenId] = useState<number | null>(null)
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const toggle = (id: number) => setOpenId(prev => prev === id ? null : id)

  /*  StickyScroll content  */
  const stickyContent: StickyScrollItem[] = [
    {
      title: 'WHAT I CAN DO FOR YOU',
      description: (
        <>
          <p className="ss-sub">
            I build functional, beautiful digital products — from interfaces to
            content to full-stack systems. Here is what I bring to the table.
          </p>
          <div className="story-accordion">
            {services.map(s => {
              const isOpen = openId === s.id
              return (
                <div key={s.id} className={`story-acc-item${isOpen ? ' open' : ''}`}>
                  <button className="story-acc-trigger" onClick={() => toggle(s.id)} aria-expanded={isOpen}>
                    <span className="story-acc-label">
                      <span className="story-acc-num">{s.id}.</span>
                      <span className="story-acc-title">{s.title}</span>
                    </span>
                    <svg className={`story-acc-chevron${isOpen ? ' flipped' : ''}`} width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div className="story-acc-body" style={{ '--max-h': `${s.items.length * 3.5 + 2}rem` } as React.CSSProperties}>
                    <ul className="story-acc-list">
                      {s.items.map((item, i) => (
                        <li key={i} className="story-acc-list-item">
                          <span className="story-acc-dot" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </>
      ),
      content: <img src="/scroll-1.avif" alt="Services" className="ss-img" />,
    },
    {
      title: 'DISCOVER MY JOURNEY',
      description: (
        <>
          <p className="ss-sub">
            From curious creator to full-stack developer, my path has been shaped
            by a passion for building impactful, user-first digital experiences.
          </p>
          <div className="story-journey-list">
            {journey.map((j, i) => (
              <div key={i} className="story-journey-item">
                <div className="story-journey-role">{j.role}</div>
                <div className="story-journey-meta">
                  <span className="story-journey-org">{j.org}</span>
                  <span className="story-journey-period">{j.period}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      ),
      content: <img src="/scroll-2.avif" alt="Journey" className="ss-img" />,
    },
    {
      title: 'MY TECH STACK',
      description: (
        <>
          <p className="ss-sub">
            I build with intention — each tool chosen to bring ideas to life with
            speed, precision, and creativity.
          </p>
          <div className="story-tech-list">
            {techStack.map((t, i) => (
              <div key={i} className="story-tech-item">
                <div className="story-tech-icon">{t.icon}</div>
                <div className="story-tech-info">
                  <p className="story-tech-name">{t.name}</p>
                  <p className="story-tech-desc">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      ),
      content: <img src="/image.png" alt="Tech Stack" className="ss-img" />,
    },
  ]

  return (
    <div className="story-page">
      <CustomCursor />
      <Navbar basePath="/" />

      {/* Hero */}
      <section className="story-hero">
        <div className="story-hero-inner">
          <div className="story-hero-text">
            <p className="story-hero-eyebrow">ABOUT ME</p>
            <h1 className="story-hero-name">NICKY KUMAR</h1>
            <p className="story-hero-desc">
              I am a full-stack developer, EdTech co-founder, and creative
              technologist currently pursuing B.Tech Computer Science at KL
              University, Hyderabad. I build products that scale — from YouTube
              channels with millions of views to fintech apps that win national
              hackathons.
            </p>
            <div className="story-hero-meta">
              <span>+91 8875660473</span>
              <span className="story-meta-sep"></span>
              <span>vickykofficial890@gmail.com</span>
            </div>
            <div className="story-hero-socials">
              <a href="https://github.com/VickyKumarOfficial" target="_blank" rel="noreferrer" className="story-social-link" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/nicky-kumar" target="_blank" rel="noreferrer" className="story-social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" /></svg>
              </a>
              <a href="/Resume (2).pdf" download className="story-resume-btn">
                Download Resume
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
              </a>
            </div>
          </div>

          <div className="story-hero-photo">
            <img src="/nicky.webp" alt="Nicky Kumar" className="story-photo-img" />
            <div className="story-photo-badge">
              <div className="badge-flip-container">
                <div className="badge-face badge-front">
                  <svg width="72" height="72" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="38" fill="#d0ff71" />
                    <text x="40" y="47" textAnchor="middle" fontSize="22" fontFamily="Antonio, sans-serif" fontWeight="700" fill="#0a0a0a">Hi</text>
                  </svg>
                </div>
                <div className="badge-face badge-back">
                  <svg width="72" height="72" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="38" fill="#d0ff71" />
                    <text x="40" y="50" textAnchor="middle" fontSize="28" fill="#0a0a0a"></text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Sticky Scroll Reveal  */}
      <section className="story-sticky-section">
        <StickyScroll content={stickyContent} />
      </section>

      {/* ══════════════════════════════════════
          PROCESS GRID
      ══════════════════════════════════════ */}
      <section className="pg-section">
        <div className="pg-header">
          <h2 className="pg-heading">DESIGN WITH STRATEGY AND CREATIVITY</h2>
          <p className="pg-sub">
            My process blends strategy and creativity to address challenges,
            craft solutions, and deliver designs that effectively communicate
            your message.
          </p>
        </div>

        <div className="pg-grid">

          {/* Row 1 — 01 light | 1.avif pure image | 02 green */}
          <div className="pg-card pg-card--light">
            <div className="pg-card-body">
              <span className="pg-num">01.</span>
              <h3 className="pg-title">RESEARCH &amp; STRATEGY</h3>
              <p className="pg-desc">In this phase, I dive deep into understanding your business, target audience, and project goals. Through research and strategic planning, I create a clear roadmap to guide the entire design process.</p>
            </div>
          </div>

          <div className="pg-card pg-card--img">
            <img src="/1.avif" alt="Research visual" />
          </div>

          <div className="pg-card pg-card--green">
            <div className="pg-card-body">
              <span className="pg-num">02.</span>
              <h3 className="pg-title">CONCEPT &amp; IDEATION</h3>
              <p className="pg-desc">Here, I brainstorm and develop creative concepts that align with your vision. Initial sketches and ideas are refined into tangible wireframes, setting the direction for design and functionality.</p>
            </div>
          </div>

          {/* Row 2 — 2.avif image | 03 text spans 2 cols */}
          <div className="pg-card pg-card--img">
            <img src="/2.avif" alt="Feedback visual" />
          </div>

          <div className="pg-card pg-card--span2">
            <div className="pg-card-body">
              <span className="pg-num">03.</span>
              <h3 className="pg-title">FEEDBACK &amp; REFINEMENT</h3>
              <p className="pg-desc">Collaboration is key. I review the design with you, gather feedback, and refine the work to align with your expectations and goals. This ensures the design reflects your vision.</p>
            </div>
          </div>

          {/* Row 3 — 04 green | 05 white | 3.avif pure image */}
          <div className="pg-card pg-card--green">
            <div className="pg-card-body">
              <span className="pg-num">04.</span>
              <h3 className="pg-title">TESTING &amp; OPTIMISATION</h3>
              <p className="pg-desc">I conduct thorough testing to identify and resolve any performance or usability issues. This phase ensures the design works seamlessly across devices and meets user experience standards.</p>
            </div>
          </div>

          <div className="pg-card pg-card--light">
            <div className="pg-card-body">
              <span className="pg-num">05.</span>
              <h3 className="pg-title">LAUNCH &amp; DELIVERY</h3>
              <p className="pg-desc">Once everything is finished, the project is launched and delivered to you. I also provide guidance or support for ongoing maintenance to ensure long-term success.</p>
            </div>
          </div>

          <div className="pg-card pg-card--img">
            <img src="/3.avif" alt="Launch visual" />
          </div>

        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  )
}
