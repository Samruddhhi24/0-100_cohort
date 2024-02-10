import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [count,inc]=useState(0)
  function onclickListner(){
    inc(count+1)
  }
  return (
    
      <div>
       
        <button onClick={onclickListner}>counter {count}</button>
       
      </div>)
      
}

export default App
