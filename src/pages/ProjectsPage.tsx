import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomCursor from '../components/CustomCursor'
import { projects } from '../data/projects'
import './ProjectsPage.css'

export default function ProjectsPage() {
  const navigate = useNavigate()
  const [cols, setCols] = useState<2 | 3>(3)

  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="projects-page">
      <CustomCursor />

      {/* ── nav ── */}
      <nav className="pp-nav">
        <button className="pp-back-btn" onClick={() => navigate('/')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        <span className="pp-nav-name">NICKY.DEV</span>

        {/* column toggle */}
        <button
          className="pp-col-toggle"
          onClick={() => setCols(c => c === 2 ? 3 : 2)}
          title={`Switch to ${cols === 2 ? '3' : '2'} columns`}
        >
          {cols === 2 ? (
            /* 3-grid icon */
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
              <rect x="0" y="0" width="5" height="5" rx="1" />
              <rect x="6.5" y="0" width="5" height="5" rx="1" />
              <rect x="13" y="0" width="5" height="5" rx="1" />
              <rect x="0" y="6.5" width="5" height="5" rx="1" />
              <rect x="6.5" y="6.5" width="5" height="5" rx="1" />
              <rect x="13" y="6.5" width="5" height="5" rx="1" />
              <rect x="0" y="13" width="5" height="5" rx="1" />
              <rect x="6.5" y="13" width="5" height="5" rx="1" />
              <rect x="13" y="13" width="5" height="5" rx="1" />
            </svg>
          ) : (
            /* 2-grid icon */
            <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor">
              <rect x="0" y="0" width="8" height="8" rx="1" />
              <rect x="10" y="0" width="8" height="8" rx="1" />
              <rect x="0" y="10" width="8" height="8" rx="1" />
              <rect x="10" y="10" width="8" height="8" rx="1" />
            </svg>
          )}
        </button>
      </nav>

      {/* ── header ── */}
      <header className="pp-header">
        <p className="pp-eyebrow">SELECTED WORK</p>
        <h1 className="pp-title">ALL PROJECTS</h1>
        <p className="pp-subtitle">
          A curated collection of work spanning branding, UI/UX, web design,
          EdTech, and digital storytelling.
        </p>
      </header>

      {/* ── grid ── */}
      <main className={`pp-grid pp-grid--${cols}`}>
        {projects.map((project, i) => (
          <article
            key={project.id}
            className="pp-card"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="pp-card-img-wrap">
              <img
                src={project.image}
                alt={project.title}
                className="pp-card-img"
              />
            </div>

            <div className="pp-card-body">
              <div className="pp-card-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="pp-tag">{tag}</span>
                ))}
              </div>

              <h2 className="pp-card-title">
                <a
                  href={project.link ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pp-card-title-link"
                >
                  {project.title}
                  <svg
                    className="pp-link-icon"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </h2>

              <p className="pp-card-desc">{project.description}</p>
            </div>
          </article>
        ))}
      </main>
    </div>
  )
}
