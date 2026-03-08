import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb,
  SiSpring, SiPostgresql, SiFigma, SiNextdotjs,
  SiSupabase, SiAdobeillustrator, SiAdobeaftereffects, SiAdobepremierepro,
  SiVite, SiVercel, SiGit,
  SiHtml5, SiCss3, SiBootstrap, SiExpress, SiThreedotjs, SiCanva,
} from 'react-icons/si'
import CustomCursor from '../components/CustomCursor'
import { projects } from '../data/projects'
import { StickyScroll } from '../ui/sticky-scroll-reveal'
import './ProjectDetailPage.css'

/* ── Inline custom icons for techs without an si entry ── */
const JavaIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0 0-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.749-.89 1.254-.998.527-.114.828-.93.828-.93-1.453-.968-8.094.867-3.474 1.242C9.858 22.29 22.026 21.12 19.33 20.504M9.292 13.21s-6.659 1.582-2.358 2.155c1.819.243 5.443.187 8.823-.096 2.761-.233 5.533-.73 5.533-.73s-.974.417-1.68.898c-6.779 1.782-19.875.951-16.098-.869 3.184-1.558 5.78-1.358 5.78-1.358M17.116 17.584c6.893-3.582 3.704-7.022 1.482-6.561-.546.115-.79.215-.79.215s.203-.317.59-.454c4.407-1.549 7.796 4.57-1.422 6.994 0-.001.106-.094.14-.194M13.401 0s3.806 3.806-3.612 9.66c-5.946 4.7-1.355 7.383-.003 10.44-3.474-3.133-6.022-5.889-4.31-8.455 2.512-3.773 9.47-5.606 7.925-11.645M9.734 23.924c6.614.423 16.772-.235 17.017-3.365 0 0-.462 1.187-5.473 2.126-5.652 1.059-12.623.936-16.75.257 0-.001.847.7 5.206.982" />
  </svg>
)
const GeminiIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M12 2C10.5 6.5 6.5 10.5 2 12c4.5 1.5 8.5 5.5 10 10 1.5-4.5 5.5-8.5 10-10-4.5-1.5-8.5-5.5-10-10z" />
  </svg>
)
const MavenIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M20.205 2.094c-1.579 1.578-2.365 4.065-2.365 4.065s-1.551-1.024-3.1-.959c-2.008.085-3.338 1.713-3.338 3.722 0 1.68.983 3.088 2.427 3.685-.553.48-1.054 1.045-1.383 1.72-.5 1.022-.5 2.15 0 3.173.828 1.693 2.73 2.508 4.55 1.938.02-.006.04-.015.06-.022-.427.805-.69 1.713-.69 2.584h1.5c0-1.45.79-2.686 1.97-3.37a4.54 4.54 0 0 0 .74-7.338 4.54 4.54 0 0 0-.16-7.448c.59-.74 1.01-1.63 1.15-2.6l-1.361-.15z"/>
  </svg>
)
const RestIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"/>
    <path d="M3 12h18M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18"/>
  </svg>
)
const FramerMotionIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
  </svg>
)

const TECH_ICON_MAP: Record<string, React.ReactNode> = {
  'React':             <SiReact />,
  'React 18':          <SiReact />,
  'Gemini AI':         <GeminiIcon />,
  'TypeScript':        <SiTypescript />,
  'Tailwind CSS':      <SiTailwindcss />,
  'Node.js':           <SiNodedotjs />,
  'MongoDB':           <SiMongodb />,
  'Java':              <JavaIcon />,
  'Spring Boot':       <SiSpring />,
  'PostgreSQL':        <SiPostgresql />,
  'Maven':             <MavenIcon />,
  'REST API':          <RestIcon />,
  'Figma':             <SiFigma />,
  'Next.js':           <SiNextdotjs />,
  'Framer Motion':     <FramerMotionIcon />,
  'Supabase':          <SiSupabase />,
  'Adobe Illustrator': <SiAdobeillustrator />,
  'After Effects':     <SiAdobeaftereffects />,
  'Premiere Pro':      <SiAdobepremierepro />,
  'Vite':              <SiVite />,
  'Vercel':            <SiVercel />,
  'Git':               <SiGit />,
  'HTML':              <SiHtml5 />,
  'CSS':               <SiCss3 />,
  'Bootstrap':         <SiBootstrap />,
  'Express.js':        <SiExpress />,
  'Three.js':          <SiThreedotjs />,
  'Canva':             <SiCanva />,
}

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const project = projects.find(p => p.id === Number(id))
  const currentIndex = projects.findIndex(p => p.id === Number(id))
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  useEffect(() => { window.scrollTo(0, 0) }, [id])

  if (!project) {
    return (
      <div className="pdp-not-found">
        <CustomCursor />
        <p>Project not found.</p>
        <button onClick={() => navigate('/projects')}>← Back to Projects</button>
      </div>
    )
  }

  return (
    <div className="pdp">
      <CustomCursor />

      {/* ── Fixed Nav ── */}
      <nav className="pdp-nav">
        <button className="pdp-back-btn" onClick={() => navigate('/projects')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          All Projects
        </button>

        <span className="pdp-nav-title">{project.title.toUpperCase()}</span>

        {project.link && (
          <a
            className="pdp-live-btn"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Site
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        )}
      </nav>

      {/* ── Hero ── */}
      <header className="pdp-hero">
        <div className="pdp-hero-img-wrap">
          <img src={project.image} alt={project.title} className="pdp-hero-img" />
          <div className="pdp-hero-overlay" />
        </div>

        {/* Diagonal blur shape — follows the red-line triangle */}
        <div className="pdp-hero-blur-shape" />

        <div className="pdp-hero-content">
          <div className="pdp-hero-meta-top">
            {project.tags.map(tag => (
              <span key={tag} className="pdp-tag">{tag}</span>
            ))}
          </div>
          <h1 className="pdp-hero-title">{project.title}</h1>
          <p className="pdp-hero-desc">{project.description}</p>
          <div className="pdp-hero-meta-bottom">
            {project.year && <span className="pdp-meta-pill">{project.year}</span>}
            {project.role && <span className="pdp-meta-pill">{project.role}</span>}
          </div>
        </div>
      </header>

      {/* ── Tech Stack ── */}
      {project.techStack && project.techStack.length > 0 && (
        <section className="pdp-section pdp-techstack">
          <p className="pdp-section-eyebrow">BUILT WITH</p>
          <div className="pdp-tech-icons">
            {project.techStack.map(tech => (
              <div key={tech} className="pdp-tech-icon-item">
                <div className="pdp-tech-icon-wrap">
                  {TECH_ICON_MAP[tech] ?? <span className="pdp-tech-icon-fallback">{tech[0]}</span>}
                </div>
                <span className="pdp-tech-icon-name">{tech}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Project Breakdown — sticky scroll ── */}
      {project.sections && project.sections.length > 0 && (
        <section className="pdp-breakdown-sticky">
          <div className="pdp-breakdown-sticky-header">
            <p className="pdp-section-eyebrow">PROJECT BREAKDOWN</p>
          </div>
          <StickyScroll
            contentClassName="pdp-ss-right"
            content={project.sections.map((sec, i) => ({
              title: `${String(i + 1).padStart(2, '0')} — ${sec.title}`,
              description: <p className="pdp-ss-desc">{sec.description}</p>,
              content: sec.image ? (
                <div className="pdp-ss-img-wrap">
                  <img src={sec.image} alt={sec.title} className="pdp-ss-img" />
                </div>
              ) : (
                <div className="pdp-ss-no-img">
                  <span>{sec.title}</span>
                </div>
              ),
            }))}
          />
        </section>
      )}

      {/* ── Prev / Next ── */}
      <footer className="pdp-footer">
        <div className="pdp-nav-projects">
          {prevProject ? (
            <button
              className="pdp-nav-proj-btn pdp-nav-proj-btn--prev"
              onClick={() => navigate(`/projects/${prevProject.id}`)}
            >
              <span className="pdp-nav-proj-label">← Previous</span>
              <span className="pdp-nav-proj-name">{prevProject.title}</span>
            </button>
          ) : <div />}

          {nextProject ? (
            <button
              className="pdp-nav-proj-btn pdp-nav-proj-btn--next"
              onClick={() => navigate(`/projects/${nextProject.id}`)}
            >
              <span className="pdp-nav-proj-label">Next →</span>
              <span className="pdp-nav-proj-name">{nextProject.title}</span>
            </button>
          ) : <div />}
        </div>
      </footer>
    </div>
  )
}
