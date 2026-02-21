import { useState } from 'react'
import './ContactSection.css'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire up form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* ── Left: photo ── */}
        <div className="contact-left">
          <div className="contact-img-frame">
            <img src="/nicky.webp" alt="Nicky Kumar" className="contact-img" />
          </div>
          {/* Hi / wave flip badge */}
          <div className="contact-badge">
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
                  <text x="40" y="52" textAnchor="middle" fontSize="36" fill="#1a1a1a">👋</text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: form ── */}
        <div className="contact-right">
          <h2 className="contact-heading">LET'S WORK<br />TOGETHER</h2>
          <p className="contact-subtext">
            Let's build something impactful together — whether it's your
            brand, your website, or your next big idea.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>

            {/* Name + Email row */}
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="johnsmith@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Service dropdown */}
            <div className="form-group">
              <label className="form-label" htmlFor="service">Service Needed?</label>
              <div className="select-wrapper">
                <select
                  id="service"
                  name="service"
                  className="form-select"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select...</option>
                  <option value="ui-ux">UI / UX Design</option>
                  <option value="web-design">Web Design</option>
                  <option value="branding">Branding</option>
                  <option value="graphic-design">Graphic Design</option>
                  <option value="other">Other</option>
                </select>
                <span className="select-chevron">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Message textarea */}
            <div className="form-group">
              <label className="form-label" htmlFor="message">What Can I Help You...</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Hello, I'd like to enquire about..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="form-submit">SUBMIT</button>
          </form>
        </div>

      </div>
    </section>
  )
}
