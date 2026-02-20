import { useState, useEffect, useRef } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY > lastScrollY.current && currentY > 80) {
        // scrolling down
        setCollapsed(true)
      } else if (currentY < lastScrollY.current) {
        // scrolling up
        setCollapsed(false)
      }
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar${collapsed ? ' collapsed' : ''}`}>
      <div className="navbar-container">
        {/* Profile Image */}
        <div className="navbar-profile">
          <img
            src="/nicky.webp"
            alt="Profile"
            className="navbar-avatar"
          />
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#blogs" className="nav-link">Blogs</a>
        </div>

        {/* Contact Button */}
        <div className="navbar-cta">
          <a href="#contact" className="contact-btn">Contact</a>
        </div>

        {/* Collapsed badge */}
        <div className="navbar-available">
          <span className="available-text">Available for work</span>
          <span className="available-dot" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
