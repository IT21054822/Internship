import './App.css';
import Navbar from './Components/Navbar';
import UseContextHook from './Components/UseContextHook';
import UseEffectHook from './Components/UseEffectHook';
import UseStateHook from './Components/UseStateHook';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

import { LoginContext } from './Components/UseContextHook';
import { useContext, useState } from 'react';
function App() {
  const [loggedin,setLoggedin] = useState(false);
  
  return (
    <LoginContext.Provider value={{loggedin,setLoggedin}}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<UseStateHook/>}/>
        <Route path='/useEffect' element={<UseEffectHook/>}/>
        <Route path='/useContext' element={<UseContextHook/>}/>
      </Routes>

      </BrowserRouter>
     
    </LoginContext.Provider>
  );
}

export default App;
