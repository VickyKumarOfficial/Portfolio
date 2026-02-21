import './Footer.css'
import { SiGithub, SiLinkedin, SiInstagram } from 'react-icons/si'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* ── Top row: 3 columns ── */}
        <div className="footer-top">
          <div className="footer-col">
            <span className="footer-label">Email :</span>
            <a href="mailto:vickykofficial890@gmail.com" className="footer-value">
              vickykofficial890@gmail.com
            </a>
          </div>

          <div className="footer-col footer-col--center">
            <span className="footer-label">Call Today :</span>
            <a href="tel:+918875660473" className="footer-value">
              +91 88756 60473
            </a>
          </div>

          <div className="footer-col footer-col--right">
            <span className="footer-label">Social :</span>
            <div className="footer-socials">
              <a href="https://x.com/" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="X / Twitter">
                <FaXTwitter />
              </a>
              <a href="https://github.com/VickyKumarOfficial" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="GitHub">
                <SiGithub />
              </a>
              <a href="https://www.linkedin.com/in/nicky-kumar" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                <SiLinkedin />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="Instagram">
                <SiInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="footer-divider" />

        {/* ── Bottom row ── */}
        <div className="footer-bottom">
          <div className="footer-credit">
            <span className="footer-credit-text">Designed &amp; Built by</span>
            <div className="footer-credit-avatar">
              <img src="/nicky.webp" alt="Nicky Kumar" />
            </div>
            <a href="https://github.com/VickyKumarOfficial" target="_blank" rel="noreferrer" className="footer-credit-name">
              Nicky Kumar
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
