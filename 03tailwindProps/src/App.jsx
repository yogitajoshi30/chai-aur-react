import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  /*Step 1- Passing Props: We can pass props to a component by adding attributes to the component tag when we use it. Card me jo attributes likhe hai vo  props hote hai mtlb properties.*/  let myArr = [1, 2, 3];
  return (
    <>
      <h1 className='bg-blue-600 text-sky-300 p-4 rounded-xl mb-4'>Tailwind and Props</h1>
      <Card userName="YoJo" text="This is my fun channel." />
      <Card userName="Yogita Joshi" text="This is my beauty channel." btnText="Click Here" />
    </>
  )
}

export default App
