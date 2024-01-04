import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { LoginContext } from './UseContextHook';

const Navbar = () => {
    const [menu,setMenu] = useState("useState");
    const {loggedin,setLoggedin} = useContext(LoginContext);
  return (
    <div className="navbar">
        <ul className="nav-menu">
            <li onClick={()=>setMenu("useState")}><Link style={{textDecoration:'none'}} to='/'>useState</Link>{menu===("useState")?<hr/>:<></>}</li>
            <li onClick={()=>setMenu("useEffect")}><Link style={{textDecoration:'none'}} to='/useEffect'>useEffect</Link>{menu===("useEffect")?<hr/>:<></>}</li>
            <li onClick={()=>setMenu("useContext")}><Link style={{textDecoration:'none'}} to='/useContext'>useContext</Link>{menu===("useContext")?<hr/>:<></>}</li>
        </ul>
        
        <div className="message">
        {loggedin? "You Are Logged In": "You Are Not Logged In"}

        </div>
    </div>
  )
}

export default Navbar
