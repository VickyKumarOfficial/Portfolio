import './HeroSection.css'

const HeroSection = () => {

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left side text */}
        <div className="hero-text hero-text-left">
          <p className="hero-label ">NICKY KUMAR</p>
          <h1 className="hero-title">
            <span className="title-line large">Code.Content</span>
          </h1>
        </div>

        {/* Center image with Hi badge */}
        <div className="hero-image-wrapper">
          <div className="image-container">
            <img 
              src="/nicky.webp" 
              alt="Profile" 
              className="hero-image"
            />
          </div>
          
          {/* Animated Hi badge - Flip Card */}
          <div className="hi-badge">
            <div className="badge-flip-container">
              {/* Front side - Hi text */}
              <div className="badge-face badge-front">
                <svg 
                  width="80" 
                  height="80" 
                  viewBox="0 0 80 80"
                >
                  <circle 
                    cx="40" 
                    cy="40" 
                    r="38" 
                    fill="#d0ff71"
                    stroke="rgba(208, 255, 113, 0.5)"
                    strokeWidth="2"
                  />
                  <text 
                    x="40" 
                    y="52" 
                    textAnchor="middle" 
                    fontSize="24"
                    fontWeight="700"
                    fill="#1a1a1a"
                    fontFamily="Nunito, system-ui, sans-serif"
                  >
                    Hi
                  </text>
                </svg>
              </div>

              {/* Back side - Hand emoji */}
              <div className="badge-face badge-back">
                <svg 
                  width="80" 
                  height="80" 
                  viewBox="0 0 80 80"
                >
                  <circle 
                    cx="40" 
                    cy="40" 
                    r="38" 
                    fill="#d0ff71"
                    stroke="rgba(208, 255, 113, 0.5)"
                    strokeWidth="2"
                  />
                  <text 
                    x="40" 
                    y="52" 
                    textAnchor="middle" 
                    fontSize="36"
                    fill="#1a1a1a"
                    className="hand-emoji"
                  >
                    👋
                  </text>
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
  )
}

export default HeroSection
