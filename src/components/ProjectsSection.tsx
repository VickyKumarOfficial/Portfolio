import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ProjectsSection.css'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { id: 1, title: 'Arcade',     image: '/arcade .png'  },
  { id: 2, title: 'Nexity 60',  image: '/nexity60.png'  },
  { id: 3, title: 'WiELearn',   image: '/wielearn.png'  },
  { id: 4, title: 'AI for Kids',image: '/aiforkids.png' },
]

export default function ProjectsSection() {
  const stackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!stackRef.current) return

    const ctx = gsap.context(() => {
      const cards = Array.from(
        stackRef.current!.querySelectorAll<HTMLElement>('.project-card')
      )
      const N = cards.length

      // Cards 2..N start completely below the container
      gsap.set(cards.slice(1), { yPercent: 100 })

      // Single timeline — each transition occupies equal scroll distance.
      // The whole stack is pinned for (N-1) × 100vh of scroll.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stackRef.current,
          pin: true,
          start: 'top top',
          end: () => `+=${(N - 1) * window.innerHeight}`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })

      cards.forEach((card, i) => {
        if (i === 0) return
        // Slide next card up from below while previous card scales down
        tl.to(cards[i - 1], { scale: 0.88, ease: 'none' })
          .to(card,         { yPercent: 0,  ease: 'none' }, '<')
      })
    }, stackRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="projects-section">

      <div className="projects-header">
        <h2 className="projects-heading">FEATURED PROJECTS</h2>
        <p className="projects-subtext">
          Selected projects reflecting my passion for blending
          strategy with creativity — solving real problems through
          thoughtful design and impactful storytelling.
        </p>
      </div>

      {/* Single pinned container — all cards stacked at the same position */}
      <div className="projects-stack" ref={stackRef}>
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="project-card"
            style={{ zIndex: i + 1 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="card-img"
            />
          </div>
        ))}
      </div>

    </section>
  )
}
