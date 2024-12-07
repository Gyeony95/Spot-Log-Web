import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landing/page'

function App() {
  return (
    <Router>
      <div className="h-screen w-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
