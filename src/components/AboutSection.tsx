import { useEffect, useRef, useState } from 'react'
import './AboutSection.css'

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
    <section className="about-section">
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
            <AnimatedStat target={1}  label="Years of Experience"  duration={1600} />
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
            <a href="#" className="about-social-icon" aria-label="X">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.25 2.25h6.963l4.259 5.631 5.772-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="about-social-icon" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4.5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="about-social-icon" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"/>
              </svg>
            </a>
          </div>

          {/* Footer row */}
          <div className="about-footer">
            <a href="#" className="about-story-btn">MY STORY</a>
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
    </section>
  )
}
