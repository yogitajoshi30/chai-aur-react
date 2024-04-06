import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  let myArr = [1, 2, 3];
  return (
    <>
      <h1 className='bg-blue-600 text-sky-300 p-4 rounded-xl mb-4'>Tailwind and Props</h1>
      <Card userName="YoJo" text="This is my fun channel." />
      <Card userName="Yogita Joshi" text="This is my beauty channel." btnText="Click Here" />
      //Card me jo username likha hai vo  props hote hai mtlb properties, Card component mein jo props hmne bnaye the unhe hm yha access kr skte hai, component k attributes mein unka name same hona chahiye, to hi vo yha pe properly access hote hai
    </>)
}

export default App
