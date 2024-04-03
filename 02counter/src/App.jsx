import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(1);
  //let counter = 1;
  const addValue = () => {
    if (count < 20) setCount(count + 1);
    else setCount(count);
    //INTERVIEW QUESTION: WHAT WILL HAPPEN WHEN THE SAME OPERATION IS PERFORMED 3-4 TIMES CONTINUOUSLY ?
    /*
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
    */
    //useState updates are asynchronous, calling setCount multiple times in succession with the same state value (count) may not behave as expected. 
    //Instead, you should use the functional update form of setCount when the new state depends on the previous state.
    /*
     setCount(count=> count+1)
     setCount(count=> count+1)
     setCount(count=> count+1)
     setCount(count=> count+1)
 */
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
