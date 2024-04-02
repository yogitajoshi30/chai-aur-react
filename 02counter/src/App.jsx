import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(1);
  //let counter = 1;
  const addValue = () => {
    setCount(count + 1);
  }
  const removeValue = () => {
    setCount(count - 1);
  }

  return (
    <><h1>This is counter project</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={addValue}>Increase: {count}</button>
      <br />
      <button onClick={removeValue}>Decrease: {count}</button></>

  )
}

export default App
