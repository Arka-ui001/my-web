// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Browse from './pages/Browse'
import Sell from './pages/Sell'
import Governance from './pages/Governance'
import Profile from './pages/Profile'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="/governance" element={<Governance />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}
