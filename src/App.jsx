import { Routes, Route } from "react-router-dom"
import { createContext, useContext, useState } from "react"
import "normalize.css"
import './App.css'
import "../src/css/Header.css"
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Imprint from './components/Imprint'
import ContactForm from "./components/Contact"
import About from './components/About'
import Footer from './components/Footer'

const languageContext = createContext()

function App() {

  const [language, setLanguage] = useState("EN")

  return (
    <div className="container">
      <languageContext.Provider value={{language, setLanguage}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/about-me" element={<About />}/>
        </Routes>
        <Footer />
      </languageContext.Provider>
    </div>
  )
}

export { App, languageContext }
