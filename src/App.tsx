import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landing/page'
import PrivacyPage from './pages/privacy/page'
import PrivacyHowDayPage from './pages/privacy_how_day/page'
import TemplatesPage from './pages/templates/page'

function App() {
  return (
    <Router>
      <div className="h-screen w-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/privacy_how_day" element={<PrivacyHowDayPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
