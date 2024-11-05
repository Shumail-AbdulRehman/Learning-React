import { useState } from 'react'
import './App.css'
function App() {
  const [color, setColor] = useState("olive")
  function changeColor(event)
  {
    let inner=event.target.innerText;
    setColor(inner);

  }
  return (
    
    <div className="w-full h-screen"style={{backgroundColor:color}}>
      <button id='yellow' onClick={changeColor}>yellow</button>
      <br></br>
      <button id='green' onClick={changeColor}>green</button>
      <br></br>
      <button id='purple' onClick={changeColor}>purple</button>
      <br></br>
      <button id='black' onClick={changeColor}>black</button>
      <br />
      <button id='orange' onClick={changeColor}>orange</button>
      <br />
      <button id='brown' onClick={changeColor}>brown</button>

    </div>
  )
}

export default App
