import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CustomCursor from './components/CustomCursor'
import MyStoryPage from './pages/MyStoryPage'

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
    <BrowserRouter>
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CustomCursor />
                <Navbar />
                <HeroSection />
              </>
            }
          />
          <Route path="/story" element={<MyStoryPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
