import { useState } from 'react'
import{BrowserRouter,Routes, Route}from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Dashboard } from './Components/Dashboard'
import { Landing } from './Components/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
<div>
      Hi there this is top bar
    </div>
    <BrowserRouter>
<Routes>
  <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
  <Route path="/" element={<Landing></Landing>}></Route>
</Routes>
    
    </BrowserRouter> 
    </div>
     )
}

export default App
