import React from 'react';
import logo from './logo.png';
import {NavLink} from "react-router-dom";

const Navigation=()=>{

  return (
      <div >
      <nav  style={{display:'flex',justifyContent:'flex-end'}}>
      <NavLink to="/Signin"style={{ textDecoration: 'none' }} className ='f3 link dim black underline pa3 pointer' >Sign in  </NavLink>
       <NavLink to="/Register" style={{ textDecoration: 'none' }}className ='f3 link dim black underline pa3 pointer' >Register  </NavLink>
       </nav>
    
       <div className="nav-container">
       <img alt='logo' src={logo} className="nav-logo grow"/>
        <p>
        <div className="nav-title">DOGGY   WORLD </div>
        <div className="nav-subtitle">~ for the Love of dog</div>
        </p>
        </div>
        </div>
  );
}

export default Navigation;