import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import Shimmer from './Shimmer';
import CartRestaurantContext from '../utils/CartRestaurantContext';

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    const {name} = useContext(CartRestaurantContext);
    console.log(name,"usecontext");
    
  return !cartItems ? <Shimmer/> : (
    <div>
       {cartItems.restaurantName}
       {cartItems.length}
       {cartItems && cartItems.map((item)=> <h1 key={item}>{item.item.name} - {item.quantity}</h1>)}
    </div>
  )
}

export default Cart
/* <h1>{item.item.name} - {item.quantity}</h1> */