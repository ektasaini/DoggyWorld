import React from 'react';
import {NavLink} from "react-router-dom";


const Food=()=>{

  return (
  	<div >
    
      <div className="heading b"> Showing results for Food</div>
     <div className="list-container">
       <article className="product-container  grow">
            <img src="https://n3.sdlcdn.com/imgs/h/f/c/Pedigree-Adult-Dog-Food-Chicken-SDL341488033-1-e6905.jpg" className="product-image" alt="Photo of a kitten looking menacing."/>
            <div className="">
                 <div className="product-info">
                     
                    Pedigree Adult Dry Dog Food, Chicken & Vegetables – 3 kg Pack - &#8377;580/-

                 </div>
                        <p className="f6 lh-copy measure mt2 mid-gray">
                        Contains 20% crude protein, 10% crude fat, and 5% crude fiber
              
                       </p>

             </div>
             <button className="buybtn">Buy </button>
              </article>

               <article className="product-container grow ">
            <img src="https://images-na.ssl-images-amazon.com/images/I/61WyChxXXbL._SY355_.jpg" className="product-image" alt="Photo of a kitten looking menacing."/>
            <div className="">
                 <div className="product-info">
                     
                   Royal Canin Maxi Adult, 4 Kg - &#8377;1889/-
                 </div>
                        <p className="f6 lh-copy measure mt2 mid-gray">
                        B1 and joint support : Helps support large breed dogs’ b1s and joints placed under stress.
                       </p>

             </div>
             <button className="buybtn">Buy </button>
              </article>
          




           <article className="product-container grow">
            <img src="https://images-na.ssl-images-amazon.com/images/I/716xOsq1KSL._SX425_.jpg" className="product-image" alt="Photo of a kitten looking menacing."/>
            <div className="">
                 <div className="product-info">
                     
                   Drools Chicken and Egg Adult Dog Food, 3kg- &#8377;447/-
                 </div>
                        <p className="f6 lh-copy measure mt2 mid-gray">
                       Healthy skin and coat
Better digestibility
Helps maintain joint health
Tartar control
                       </p>

             </div>
             <button className="buybtn">Buy </button>
         </article>
   </div>
  </div>
     
  );
}

export default Food;