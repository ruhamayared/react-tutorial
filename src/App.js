import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Profile from "./pages/Profile"
import Navbar from "./Navbar"
import { useState } from "react"

function App() {
  const [username, setUsername] = useState("PedroTech")

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home username={username} />} />
          <Route
            path="/profile"
            element={<Profile username={username} setUsername={setUsername} />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Page not found :(</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
