import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PatientProfile from './components/PatientProfile/PatientProfile'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/patients/:id" element={<PatientProfile />} />
        <Route path="/" element={<PatientProfile />} />
      </Routes>
    </Router>
  )
}

export default App