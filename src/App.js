import React from 'react'
import Admin from './Components/Admin.js'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home.js'
import About from './Components/About.js'
import Score from './Components/Score.js'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
        <Route path="/score" element={<Score />} />

      </Routes>
    </div>
  )
}

export default App