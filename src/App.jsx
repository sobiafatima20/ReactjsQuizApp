import React from "react"
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Quiz from "./Components/Quiz/Quiz"
import './App.css'
import Home from "./Components/Quiz/Home"
import About from "./Components/Quiz/About"
import Leaderboard from "./Components/Quiz/Leaderboard";
import Contact from "./Components/Quiz/Contact"
import Layout from "./Components/Quiz/Layout"


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="about" element={<About />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
