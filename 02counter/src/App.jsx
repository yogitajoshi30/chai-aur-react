import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(1);
  //let counter = 1;
  const addValue = () => {
    if (count < 20) setCount(count + 1);
    else setCount(count);
  }
  const removeValue = () => {
    if (count > 0) setCount(count - 1);
    else setCount(count);
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
