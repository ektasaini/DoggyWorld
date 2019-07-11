import React from 'react';
import './Cart.css';

const Cart=()=>{

  return (
      <div >
      <div className="heading b"> Your Cart</div>
      <div className="cart-container">
          <div className="cartitems">
           <div className="cartitme">item</div>
           <div className="cartprice">price</div>
           <div className="cartquantity">quantity</div>
           
          </div>
        
      </div>
      <div className="center">
      <div className="total b">Total :  &#8377;100 </div>
      <div><button className="btn grow">BUY NOW</button></div>
     </div>
        </div>
  );
}

export default Cart;