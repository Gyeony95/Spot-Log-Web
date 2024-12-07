import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landing/page'
import PrivacyPage from './pages/privacy/page'

function App() {
  return (
    <Router>
      <div className="h-screen w-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
