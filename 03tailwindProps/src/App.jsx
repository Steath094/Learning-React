import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    name: "Sameer",
    age: 30
  }
  return (
    <>
      <h1 className='text-green-600 p-4 bg-orange-200'>Tailwind test</h1>
      <Card channel ="Sameer khan"  />
      <Card channel="chaiaurcode" btnText="View Me"/>

    </>
  )
}

export default App
