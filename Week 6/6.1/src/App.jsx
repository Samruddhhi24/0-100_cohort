

function App() {


  return (
    <div>
      <Header tittle="hithere" ></Header>
      <Header tittle="hi there 2"></Header>
    </div>
  )
}
function Header(props){
  return (
    <div>
      {props.tittle}
    </div>
  )
}

export default App
