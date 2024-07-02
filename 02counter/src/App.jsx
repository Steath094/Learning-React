import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] =useState(0);
  const addValue = () =>{
    // counter =counter+1;
    if (counter<20) {
      console.log("Value added", counter);
      setCounter((prevCounter)=> prevCounter+1);
      setCounter((prevCounter)=> prevCounter+1);
      setCounter((prevCounter)=> prevCounter+1);
      setCounter((prevCounter)=> prevCounter+1);
    }
  }
  const remValue = () =>{
    // counter =counter+1;
    if (counter>0) {
      console.log("Value added", counter);
      setCounter(--counter);
    }
  }
    return (
    <>
     <h1>chai aur react</h1>
     <h2>counter value: {counter}</h2>

     <button onClick={addValue}>Add value {counter}</button><br />
     <button onClick={remValue}>Remove value{counter}</button>
    </>
  )
}

export default App
