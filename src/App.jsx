import { Routes, Route } from "react-router-dom"
import "normalize.css"
import './App.css'
import "./css/header.css"
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Imprint from './components/Imprint'
import About from './components/About'
import Footer from './components/Footer'

function App() {

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/imprint" element={<Imprint />} />
        <Route path="/about-me" element={<About />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
