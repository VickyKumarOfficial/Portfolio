import { useState } from 'react'
import './ServicesSection.css'

interface Service {
  id: number
  title: string
  items: string[]
}

const services: Service[] = [
  {
    id: 1,
    title: 'UI/UX DESIGN',
    items: [
      'User research and personas',
      'Wireframing and prototyping',
      'Interaction design and micro-animations',
      'Usability testing and iteration',
    ],
  },
  {
    id: 2,
    title: 'WEB DESIGN',
    items: [
      'Responsive layouts and design systems',
      'Landing page and portfolio design',
      'Component-based UI design',
      'Design-to-code handoff',
    ],
  },
  {
    id: 3,
    title: 'BRANDING',
    items: [
      'Brand strategy and guidelines',
      'Typography and color palette',
      'Brand collateral and stationery',
      'Brand storytelling and identity',
    ],
  },
  {
    id: 4,
    title: 'GRAPHIC DESIGNING',
    items: [
      'Print and digital media design',
      'Poster, banner and flyer design',
      'Packaging and label design',
      'Editorial and layout design',
    ],
  },
  {
    id: 5,
    title: 'VIDEO EDITING',
    items: [
      'Cinematic cuts and color grading',
      'Motion graphics and transitions',
      'Reels, shorts and social media videos',
      'Subtitle, titles and caption design',
    ],
  },
]

export default function ServicesSection() {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggle = (id: number) => {
    setOpenId(prev => (prev === id ? null : id))
  }

  return (
    <section className="services-section">
      <div className="services-container">

        {/* Left Column */}
        <div className="services-left">

          {/* Heading */}
          <div className="services-header">
            <h2 className="services-heading">WHAT I CAN DO FOR YOU</h2>
            <p className="services-subtext">
              As a digital designer, I am a visual storyteller, crafting
              experiences that connect deeply and spark creativity.
            </p>
          </div>

          {/* Accordion */}
          <div className="services-accordion">
          {services.map(service => {
            const isOpen = openId === service.id
            return (
              <div
                key={service.id}
                className={`accordion-item${isOpen ? ' open' : ''}`}
              >
                <button
                  className="accordion-trigger"
                  onClick={() => toggle(service.id)}
                  aria-expanded={isOpen}
                >
                  <span className="accordion-number-title">
                    <span className={`accordion-number${isOpen ? ' active' : ''}`}>
                      {service.id}.
                    </span>
                    <span className={`accordion-title${isOpen ? ' active' : ''}`}>
                      {service.title}
                    </span>
                  </span>
                  <span className={`accordion-icon${isOpen ? ' rotated' : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <div className="accordion-body" style={{ '--max-h': `${service.items.length * 3.5 + 2}rem` } as React.CSSProperties}>
                  <ul className="accordion-list">
                    {service.items.map((item, i) => (
                      <li key={i} className="accordion-list-item">
                        <span className="check-icon">
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <circle cx="9" cy="9" r="8.5" stroke="#d0ff71" />
                            <path
                              d="M5.5 9L7.8 11.5L12.5 6.5"
                              stroke="#d0ff71"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        </div>{/* end services-left */}

        {/* Right column — intentionally empty */}
        <div className="services-right" />

      </div>
    </section>
  )
}
