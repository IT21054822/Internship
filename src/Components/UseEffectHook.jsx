import React, { useEffect, useState } from 'react'
import './UseEffectHook.css'

const UseEffectHook = () => {
  const [count,setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(()=> {
    setTimeout(()=> {
      setCount((count) => count + 1);
    },1000);
  },[]);

  useEffect(()=> {
    setCalculation(()=> count*2);
  },[count]);


  return (
    <div className="container">
      <h1>useEffect</h1>
      <ul>
        <li>useEffect Hook allows to perform side effects in the components</li>
        <li>eg for side effects:- fetching data, directly updating the dom, timers</li>
        <li>useEffect accepts two arguments - function, dependency. Anyway the second one is optional. </li>
      </ul> 
      <div className="header">
        Server rendered {count} times!!!!
      </div>
      <div className="header2">
        {count} <button onClick={()=>setCount((c)=>c+1)}>INCREASE</button>{calculation}
      </div>
    </div>
    
  )
}

export default UseEffectHook
