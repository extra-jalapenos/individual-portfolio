import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import "normalize.css"
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route to="/about" element={}/> */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App
