import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const[inputvalue, setinput]=useState(1)
  const [counter ,setcounter]=useState(0)
  let count=useMemo(()=>{
    let count=0
    for (let i=1;i<=inputvalue;i++)
    {
      count =count+i 
    }
    return count
  },[inputvalue])

  
  return <div>
   
   <input onChange={function(e){
    setinput(e.target.value)
   }} placeholder={'Find the sum '}></input>
   <br />
   sum from 1 to {inputvalue} is {count}
   <br />
    <button onClick={function(){
      setcounter(counter +1)
    }}>Counter  {counter}</button>
    
  </div>
}

export default App
