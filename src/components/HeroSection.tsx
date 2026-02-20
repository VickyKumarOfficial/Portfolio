import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ServicesSection from './ServicesSection'
import AboutSection from './AboutSection'
import ProjectsSection from './ProjectsSection'
import './HeroSection.css'

gsap.registerPlugin(ScrollTrigger)

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const imageWrapperRef = useRef<HTMLDivElement>(null)
  const pinnedWrapperRef = useRef<HTMLDivElement>(null)
  const servicesRightRef = useRef<HTMLDivElement>(null)
  const servicesSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const imageWrapper = imageWrapperRef.current
    const pinnedWrapper = pinnedWrapperRef.current
    if (!imageWrapper || !pinnedWrapper) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 969px)', () => {
        const getEndX = () => {
          const right = document.querySelector('.services-right')
          if (!right || !imageWrapper) return window.innerWidth * 0.25
          const rightRect = right.getBoundingClientRect()
          const imgRect = imageWrapper.getBoundingClientRect()
          return rightRect.left + rightRect.width / 2 - (imgRect.left + imgRect.width / 2)
        }

        const getEndY = () => {
          const right = document.querySelector('.services-right')
          const hero = document.querySelector('.hero-section')
          if (!right || !hero) return 300
          const rightRect = right.getBoundingClientRect()
          const heroRect = hero.getBoundingClientRect()
          return rightRect.top - heroRect.top - heroRect.height / 2 + 328
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinnedWrapper,
            start: 'top top',
            end: 'bottom bottom',
            pin: imageWrapper,
            pinSpacing: false,
            scrub: 2,
          },
        })

        tl.to(imageWrapper, {
          rotateY: '+=360',
          scale: 0.75,
          x: getEndX,
          y: getEndY,
          ease: 'none',
          duration: 1,
        })
      })
    }, pinnedWrapper)

    return () => ctx.revert()
  }, [])

  return (
    <>
    <div className="pinned-scroll-wrapper" ref={pinnedWrapperRef}>
      <section className="hero-section" ref={sectionRef}>
        <div className="hero-container">
          {/* Left side text */}
          <div className="hero-text hero-text-left">
            <p className="hero-subtitle ">NICKY KUMAR</p>
            <h1 className="hero-title">
              <span className="title-line large">Code.Content</span>
            </h1>
          </div>

          {/* Center image — 3D flip card */}
          <div className="hero-image-wrapper" ref={imageWrapperRef}>
            <div className="card-3d-flip">
              {/* Front face — profile photo */}
              <div className="card-face card-front">
                <img 
                  src="/nicky.webp" 
                  alt="Profile" 
                  className="hero-image"
                />
              </div>
              {/* Back face — workspace / random image */}
              <div className="card-face card-back">
                <img
                  src="/image.png"
                  alt="Workspace"
                  className="hero-image"
                />
              </div>
            </div>

            {/* Animated Hi badge - Flip Card */}
            <div className="hi-badge">
              <div className="badge-flip-container">
                <div className="badge-face badge-front">
                  <svg width="80" height="80" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="38" fill="#d0ff71" stroke="rgba(208, 255, 113, 0.5)" strokeWidth="2"/>
                    <text x="40" y="52" textAnchor="middle" fontSize="24" fontWeight="700" fill="#1a1a1a" fontFamily="Nunito, system-ui, sans-serif">Hi</text>
                  </svg>
                </div>
                <div className="badge-face badge-back">
                  <svg width="80" height="80" viewBox="0 0 80 80">
                    <circle cx="40" cy="40" r="38" fill="#d0ff71" stroke="rgba(208, 255, 113, 0.5)" strokeWidth="2"/>
                    <text x="40" y="52" textAnchor="middle" fontSize="36" fill="#1a1a1a" className="hand-emoji">👋</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right side text */}
          <div className="hero-text hero-text-right">
            <h1 className="hero-title">
              <span className="title-line large">Impact</span>
            </h1>
            <p className="hero-subtitle">I'm a B.Tech Student. Love to explore Tech<br />and creative innovations</p>
          </div>
        </div>
      </section>

      <ServicesSection servicesRightRef={servicesRightRef} servicesSectionRef={servicesSectionRef} />
    </div>
    <AboutSection />
    <ProjectsSection />
    </>
  )
}

export default HeroSection
