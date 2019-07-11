import React from 'react';
import {NavLink} from "react-router-dom";
import { IoIosArrowDown} from 'react-icons/io';
import { FaShoppingCart} from 'react-icons/fa';



const Main=()=>{


  return (
      
     <div className="con">

        <ul className = "navbar2-container">
        <li > <NavLink to="/Main/Food" className="navbar2-content">Food </NavLink></li>
        <li><NavLink to="/Main/Toys" className="navbar2-content">Toys </NavLink></li>
         <li className="lii"> 
               <NavLink to="/Main/Cart" style={{ textDecoration: 'none' }}>Cart<FaShoppingCart className="cart-logo grow"/></NavLink>

           </li>
        </ul>
    
 </div>

  
   
  );
}

export default Main