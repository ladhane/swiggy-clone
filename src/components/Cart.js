import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Shimmer from "./Shimmer/Shimmer";
import CartCard from "./CartCard";
import { Link } from "react-router-dom";
import { clearCart } from "../utils/CartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [toastMsg, setToastMsg] = useState();
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const dispatch = useDispatch();
  let count = 0;
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const addToastMessage = () => {
    setToastMsg("Order Placed");
    setIsOrderPlaced(true);
  };


  return !cartItems ? (
    <Shimmer />
  ) : (
    <>
      {toastMsg && (
        <div className="flex max-w-xl border-spacing-x-64 border-gray-600 shadow-xl shadow-gray-600 items-center rounded-lg mx-auto mt-5 bg-green-100">
        <FontAwesomeIcon className="p-5" icon={faCheckCircle} size="2xl" style={{color: "#03a50e",}} />
        <h1 className="p-3 m-3 uppercase font-extrabold mx-auto">{toastMsg}</h1>  
        </div>
      )}
      <div className="border-1 border-gray-500 shadow-md mt-3 max-w-sm p-5 items-center mx-auto md:max-w-3xl">
        <h1 className="font-semibold pb-2">
          {cartItems[0] && cartItems[0].item.restaurantName}
        </h1>
        {cartItems &&
          cartItems.map((item) => {
            count = count + ((item.item.price || item.item.defaultPrice) * item.quantity) / 100;
            return <CartCard key={item.item.id} data={item} />;
          })}
        {(count !== 0) ? (
          <>
            <div className="flex justify-between m-5 font-extrabold">
              <h1>Total Bill</h1>
              <h1>{count}</h1>
            </div>
            { !isOrderPlaced && <div className="flex justify-around">
              <button
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold uppercase p-3 md:px-28"
                onClick={() => addToastMessage()}
              >
                Place Order
              </button>
              <button
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold uppercase p-3 md:px-28"
                onClick={() => handleClearCart()}
              >
                ClearCart
              </button>
            </div>}
          </>
        ) : (
          <div className="text-center m-2">
            <h1 className="font-extrabold text-2xl m-2">
              No Items in the cart
            </h1>
            <h1 className="text-gray-600">
              You can go to home page to view more restaurants
            </h1>
            <button className="bg-orange-500 text-white uppercase p-3 font-bold m-3">
              <Link to="/">See Restaurants Near You</Link>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
