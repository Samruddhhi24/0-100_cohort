import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [count,inc]=useState(0)
 
  return (
    
      <div>
       <Custombutton count={count} inc={inc}></Custombutton>
       
       
      </div>)

      
}
function Custombutton(props){
  function onclicklistner(){
    props.inc(props.count+1)
    
  }
  return <button onClick={onclicklistner}>counter {props.count}</button>
}

export default App
