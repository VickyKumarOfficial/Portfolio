import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'

function App() {
  useEffect(() => {
    // Create TV scan lines
    const scanLines = document.createElement('div')
    scanLines.className = 'scan-lines'
    document.body.appendChild(scanLines)

    // Create glitch layer
    const glitchLayer = document.createElement('div')
    glitchLayer.className = 'glitch-layer'
    document.body.appendChild(glitchLayer)

    // Create noise overlay
    const noiseOverlay = document.createElement('div')
    noiseOverlay.className = 'noise-overlay'
    document.body.appendChild(noiseOverlay)

    return () => {
      scanLines.remove()
      glitchLayer.remove()
      noiseOverlay.remove()
    }
  }, [])

  return (
    <div className="content">
      <Navbar />
      <HeroSection />
      <ServicesSection />
    </div>
  )
}

export default App
