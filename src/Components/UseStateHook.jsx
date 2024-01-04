import React, { useState } from 'react'
import './UseStateHook.css'

const UseStateHook = () => {
  const [color,setColor] = useState("Red");
  const [type,setType] = useState("Car");
  const [brand,setBrand] = useState("BMW");
  const [color2,setColor2] = useState("White");
  const [count,setCount] = useState(0);



  
  return (
    <div className="container">
      <h1>useState Hook</h1>
      <ul>
        <li>useState hook allows us track state in a function</li>
        <li>There are two states;
          <ol>
            <li>Current State</li>
          <li>A function that updates the state</li>
          </ol>
        </li>
        <li>useState hook accepts the initial value and return two values</li>
        <li>Also we can include the state anywhere in a component</li>
      </ul>
      
    <div className="header">
      My Favourite Color is {color}
      <div><button onClick={() => setColor("Red and Blue")}>Blue</button></div>
    </div>
    <div className="header2">
      I'm going to buy {brand} {type} in {color2} next year.
      <div><button onClick={() => setBrand("Mercedez")}>Mercedez</button>
      <button onClick={()=> setType("Van")}>Van</button>
      <button onClick={()=> setColor2("Black")}>Black</button></div>
    </div>
    <div className='buttonss'>
      <button onClick={()=> setCount(count-1)}>Decrease</button>
      {count}
       <button onClick={()=>setCount((c)=>c+1)}>Increase</button></div>
    </div>
  )
}

export default UseStateHook

