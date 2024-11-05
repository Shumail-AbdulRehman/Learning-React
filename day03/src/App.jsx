import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Components/Card'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Card heading= 'My photography'
    para= "Check out my photography"/>
      <Card 
      heading= 'Todays Weather'
    para= "Todays weather is very good"
      />

    </>
  )
}

export default App
