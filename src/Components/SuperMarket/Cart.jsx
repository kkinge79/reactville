import React from 'react'
import CartItem from './CartItem'


const Cart = (props) => {
  return (
    <div className="cart">
      <h3>Cart</h3>
        {props.cart.map((item) => (
          <CartItem 
            item={item}
          />
        ))}
      
      Use the map function to manipulate cart state and pass props to CartItem here
      <div className="cart-total">
        <p>Total:</p>
        <p>$ Display Amount Here</p>
      </div>

      <button>CHECKOUT</button>
      <button>CLEAR CART</button>
    </div>
  )
}

export default Cart