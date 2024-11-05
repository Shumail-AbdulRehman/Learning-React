import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(8)

  let addValue= ()=>
    {
      if (count<25)
      {
        setCount(count+1);

      }
    };
    
    let decValue= ()=>
    {
      if (count>0)
      {
        setCount(count-1);
      }
    }


  return (
    <>
    <h1>Chai aur code with Shumail</h1>
    <h2>Counter value :{count}</h2>
    <button onClick={addValue}>Click to add value</button>
    <button onClick={decValue}>Click to decrease value
    </button>
    </>
  )
}

export default App
