import { useState, useEffect, useRef } from 'react'
import './Navbar.css'

const Navbar = ({ basePath = '' }: { basePath?: string }) => {
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
          <a href={`${basePath}#home`} className="nav-link active">Home</a>
          <a href={`${basePath}#about`} className="nav-link">About</a>
          <a href={`${basePath}#projects`} className="nav-link">Projects</a>
          <a href={`${basePath}#blogs`} className="nav-link">Blogs</a>
        </div>

        {/* Contact Button */}
        <div className="navbar-cta">
          <a href={`${basePath}#contact`} className="contact-btn">Contact</a>
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
