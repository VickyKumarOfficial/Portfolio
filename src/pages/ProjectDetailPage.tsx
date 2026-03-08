import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CustomCursor from '../components/CustomCursor'
import { projects } from '../data/projects'
import './ProjectDetailPage.css'

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
          <div className="pdp-tech-chips">
            {project.techStack.map(tech => (
              <span key={tech} className="pdp-tech-chip">{tech}</span>
            ))}
          </div>
        </section>
      )}

      {/* ── Project Sections ── */}
      {project.sections && project.sections.length > 0 && (
        <section className="pdp-sections">
          <p className="pdp-section-eyebrow pdp-sections-label">PROJECT BREAKDOWN</p>

          {project.sections.map((sec, i) => (
            <article key={i} className="pdp-breakdown-item">
              <div className="pdp-breakdown-number">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="pdp-breakdown-body">
                <h3 className="pdp-breakdown-title">{sec.title}</h3>
                <p className="pdp-breakdown-desc">{sec.description}</p>
              </div>
              {sec.image && (
                <div className="pdp-breakdown-img-wrap">
                  <img src={sec.image} alt={sec.title} className="pdp-breakdown-img" />
                </div>
              )}
            </article>
          ))}
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
