import { useState } from 'react'
import{BrowserRouter,Routes, Route, useNavigate}from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Dashboard } from './Components/Dashboard'
import { Landing } from './Components/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
  
    <BrowserRouter>
    <Appbar></Appbar>
    <Routes>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/" element={<Landing></Landing>}></Route>
    </Routes>
    
    </BrowserRouter> 
    </div>
     )
}
function Appbar(){
  const navigate=useNavigate()
  return(
    <div>
      <button onClick={function(){
        navigate("/")
      }}>Landing</button>
      <button onClick={function(){
        navigate("/dashboard")
      }}>Dashboard</button>
    </div>
  )
}

export default App
