import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiTailwindcss,
  SiCplusplus,
  SiDocker, SiPycharm, SiEclipseide, SiIntellijidea,
  SiAdobepremierepro, SiAdobeaftereffects, SiCanva, SiWordpress,
  SiGit, SiFigma,
} from 'react-icons/si'

/* Custom VS Code icon — react-icons doesn't include it */
const VsCodeIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
  </svg>
)

/* Java official logo */
const JavaIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0 0-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.749-.89 1.254-.998.527-.114.828-.93.828-.93-1.453-.968-8.094.867-3.474 1.242C9.858 22.29 22.026 21.12 19.33 20.504M9.292 13.21s-6.659 1.582-2.358 2.155c1.819.243 5.443.187 8.823-.096 2.761-.233 5.533-.73 5.533-.73s-.974.417-1.68.898c-6.779 1.782-19.875.951-16.098-.869 3.184-1.558 5.78-1.358 5.78-1.358M17.116 17.584c6.893-3.582 3.704-7.022 1.482-6.561-.546.115-.79.215-.79.215s.203-.317.59-.454c4.407-1.549 7.796 4.57-1.422 6.994 0-.001.106-.094.14-.194M13.401 0s3.806 3.806-3.612 9.66c-5.946 4.7-1.355 7.383-.003 10.44-3.474-3.133-6.022-5.889-4.31-8.455 2.512-3.773 9.47-5.606 7.925-11.645M9.734 23.924c6.614.423 16.772-.235 17.017-3.365 0 0-.462 1.187-5.473 2.126-5.652 1.059-12.623.936-16.75.257 0-.001.847.7 5.206.982" />
  </svg>
)
import LogoLoop from './LogoLoop'
import './AboutSection.css'

/* ── Tech stack rows ── */
const row1 = [
  { node: <SiHtml5 />,        title: 'HTML5'        },
  { node: <SiCss3 />,         title: 'CSS3'         },
  { node: <SiJavascript />,   title: 'JavaScript'   },
  { node: <SiTypescript />,   title: 'TypeScript'   },
  { node: <SiTailwindcss />,  title: 'Tailwind CSS' },
  { node: <JavaIcon />,       title: 'Java'         },
  { node: <SiCplusplus />,    title: 'C++'          },
  { node: <SiGit />,          title: 'Git'          },
  { node: <SiDocker />,       title: 'Docker'       },
]

const row2 = [
  { node: <VsCodeIcon />,          title: 'VS Code'       },
  { node: <SiPycharm />,           title: 'PyCharm'       },
  { node: <SiEclipseide />,        title: 'Eclipse'       },
  { node: <SiIntellijidea />,      title: 'IntelliJ'      },
  { node: <SiFigma />,             title: 'Figma'         },
  { node: <SiAdobepremierepro />,  title: 'Premiere Pro'  },
  { node: <SiAdobeaftereffects />, title: 'After Effects' },
  { node: <SiCanva />,             title: 'Canva'         },
  { node: <SiWordpress />,         title: 'WordPress'     },
]

/* ── Eased count-up hook ── */
function useCountUp(target: number, duration = 2000, decimals = 0) {
  const [value, setValue] = useState(0)
  const rafRef = useRef<number | null>(null)

  const start = () => {
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      // easeOutExpo — fast start, slow finish
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setValue(parseFloat((eased * target).toFixed(decimals)))
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
  }

  useEffect(() => () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }, [])

  return { value, start }
}

/* ── Stat item with individual observer ── */
interface StatProps {
  target: number
  suffix?: string
  label: string
  duration?: number
}

function AnimatedStat({ target, suffix = '', label, duration = 1800 }: StatProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)
  const { value, start } = useCountUp(target, duration)

  useEffect(() => {
    if (triggered) return
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true)
          start()
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [triggered, start])

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-number">
        {Math.round(value)}{suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

/* ── Main component ── */
export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* Left: text + stats + contact + socials + CTA */}
        <div className="about-left">
          <h2 className="about-heading">ABOUT ME</h2>
          <p className="about-text">
            Hi, I'm Nicky Kumar — a B.Tech student passionate about code, content,
            and crafting meaningful digital experiences that connect deeply and spark creativity.
          </p>

          {/* Stats */}
          <div className="about-stats">
            <AnimatedStat target={1}  label="Year of Experience"  duration={1600} />
            <AnimatedStat target={12} suffix="+" label="Completed Projects"   duration={2000} />
            <AnimatedStat target={1}  suffix="+" label="Clients on Worldwide" duration={1400} />
          </div>

          {/* Contact */}
          <div className="about-contact">
            <div className="contact-item">
              <span className="contact-label">Call:</span>
              <span className="contact-value">+91 8875660473</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Email :</span>
              <span className="contact-value">vickykofficial890@gmail.com</span>
            </div>
          </div>

          {/* Socials */}
          <div className="about-socials">
            {/* X / Twitter */}
            <a href="https://x.com/VICKY150Z" className="about-social-icon" aria-label="X">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.25 2.25h6.963l4.259 5.631 5.772-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/vickyk_890/" className="about-social-icon" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4.5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/nicky-kumar-b810a9318/#" className="about-social-icon" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"/>
              </svg>
            </a>
          </div>

          {/* Footer row */}
          <div className="about-footer">
            <Link to="/story" className="about-story-btn">MY STORY</Link>
            <button className="about-toggle" aria-label="Toggle theme">
              <span className="toggle-thumb" />
            </button>
          </div>
        </div>

        {/* Right: decorative / image placeholder */}
        <div className="about-right">
          <div className="about-image-frame">
            <iframe
              src="/Resume%20(2).pdf#toolbar=0&navpanes=0&scrollbar=0"
              className="about-resume-pdf"
              title="Resume"
            />
          </div>
        </div>

      </div>

      {/* ── Tech stack marquee ── */}
      <div className="about-techstack">
        <p className="techstack-label">TECH STACK &amp; TOOLS</p>

        {/* Row 1 — scrolls left */}
        <div className="techstack-row">
          <span className="techstack-row-label">Languages &amp; Frameworks</span>
          <LogoLoop
            logos={row1}
            speed={35}
            direction="left"
            logoHeight={38}
            gap={52}
            hoverSpeed={0}
            fadeOut
            fadeOutColor="#0a0a0a"
            ariaLabel="Languages and dev tools"
          />
        </div>

        {/* Row 2 — scrolls right */}
        <div className="techstack-row">
          <span className="techstack-row-label">Tools &amp; Software</span>
          <LogoLoop
            logos={row2}
            speed={35}
            direction="right"
            logoHeight={38}
            gap={52}
            hoverSpeed={0}
            fadeOut
            fadeOutColor="#0a0a0a"
            ariaLabel="Design and productivity tools"
          />
        </div>
      </div>

    </section>
  )
}
