import { useEffect, useRef, useState } from 'react'
import './CustomCursor.css'

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    let mouseX = 0
    let mouseY = 0
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    // rAF loop for smooth lag-free following
    const loop = () => {
      // Offset: bottom-right of cursor tip
      dot.style.transform = `translate(${mouseX + 20}px, ${mouseY + 20}px)`
      rafId = requestAnimationFrame(loop)
    }

    rafId = requestAnimationFrame(loop)
    window.addEventListener('mousemove', onMouseMove)

    // Hover detection on interactive elements
    const handleEnter = () => setHovered(true)
    const handleLeave = () => setHovered(false)

    const addListeners = () => {
      const targets = document.querySelectorAll('a, button, [role="button"], .accordion-item')
      targets.forEach((el) => {
        el.addEventListener('mouseenter', handleEnter)
        el.addEventListener('mouseleave', handleLeave)
      })
    }

    addListeners()

    // Re-scan when DOM changes (e.g. accordion opens)
    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={dotRef}
      className={`cursor-dot${hovered ? ' cursor-dot--hovered' : ''}`}
      aria-hidden="true"
    >
      {hovered && (
        <svg
          className="cursor-arrow"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Northeast arrow ↗ */}
          <line x1="4" y1="14" x2="14" y2="4" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round"/>
          <polyline points="7,4 14,4 14,11" fill="none" stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </div>
  )
}

export default CustomCursor
