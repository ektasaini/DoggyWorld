import React from 'react';
import {NavLink} from "react-router-dom";


const Toys=()=>{

  return (
  	<div>
    
      <div >
    
      <div className="heading b"> Showing results for Food</div>
     <div className="list-container">
      

               <article className="product-container grow ">
            <img src="https://images-na.ssl-images-amazon.com/images/I/517er2KBGEL._SX466_.jpg" className="product-image" alt="Photo of a kitten looking menacing."/>
            <div className="">
                 <div className="product-info">
                   HUFT Dog Toys - Twistee Collection Chew Toys-  &#8377;399/-
                 </div>
                        <p className="f6 lh-copy measure mt2 mid-gray">
                        100 % Non Toxic Flexible and Elastic .Chew Toy for Dogs.Durable and Strong.
                       </p>

             </div>
             <button className="buybtn">Buy </button>
              </article>
          
              <article className="product-container grow ">
            <img src="https://images-na.ssl-images-amazon.com/images/I/61aB-mCtGfL._SX425_.jpg" className="product-image" alt="Photo of a kitten looking menacing."/>
            <div className="">
                 <div className="product-info">
                     
                PetSutra Dog Ball Squeaky Latex Toy (Multicolour, Pack of 3 Balls)  - &#8377;449/-

                 </div>
                        <p className="f6 lh-copy measure mt2 mid-gray">
                       Unique fun sound makes it entertaining to keep dogs 
              
                       </p>

             </div>
             <button className="buybtn">Buy </button>
              </article>



           <article className="product-container grow">
            <img src="https://www.dogspot.in/imgthumb/300x280-1427437884435.jpg" className="product-image" alt="Photo of a kitten looking menacing."/>
            <div className="">
                 <div className="product-info">
                     
                   DogSpot Super Flyer Dog Toy- &#8377;350/-
                 </div>
                        <p className="f6 lh-copy measure mt2 mid-gray">
                   Vibrant color.Interactive toy.Participate in game of fetch with your toy.Suitable for - Medium and large breed
                       </p>

             </div>
             <button className="buybtn">Buy </button>
         </article>
   </div>
  </div>
   
  </div>
     
  );
}

export default Toys;