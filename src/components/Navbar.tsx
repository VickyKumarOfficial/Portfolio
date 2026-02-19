import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
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
      </div>
    </nav>
  )
}

export default Navbar
