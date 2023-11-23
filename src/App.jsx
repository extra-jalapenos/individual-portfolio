import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import "normalize.css"
import './App.css'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route to="/about" element={}/> */}
      </Routes>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
