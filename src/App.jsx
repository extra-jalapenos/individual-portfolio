import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Header />
      <Home />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
