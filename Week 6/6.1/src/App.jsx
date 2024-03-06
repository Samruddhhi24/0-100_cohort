import { useState } from "react"


function App() {
    return <div >
         <CardWrapper innercomponent={<Textcomponent/>} />
    </div>
   
}
function CardWrapper({innercomponent}){
  return <div style={{border : "2px solid black"}}>
    {innercomponent}
  </div>
}
function Textcomponent(){
    return <div>
        hi there 
    </div>
}




export default App
