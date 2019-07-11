import React from 'react';
import logo from './logo.png';
import {NavLink} from "react-router-dom";
import { FaUserCircle} from 'react-icons/fa';
import { IoIosArrowDown} from 'react-icons/io';
import { FaShoppingCart} from 'react-icons/fa';

const Navbar=()=>{

  return (
  	<div >

        <ul className = "navbar-container">
        <li className="navbar-title"><img alt='logo' src={logo} className="navbar-logo "/>DOGGY   WORLD</li>
         <li className="lii"> 
         <div className="dropdown" >
              <div className="dropbtn"><FaUserCircle className="logo"/><IoIosArrowDown className="logo2"/>Welcome Ekta</div>
                 <div className="dropdown-content ">
                 <NavLink to="" style={{ textDecoration: 'none' }}>Sign out</NavLink>
                 <NavLink to="/Main" style={{ textDecoration: 'none' }}>Home</NavLink>
                  </div>
         </div>

          

           </li>
        </ul>
    
 </div>
     
  );
}

export default Navbar;