import React from "react";
import { addItem, reduceItem } from "../utils/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import useQuantity from "../utils/useQuantity";

const QuantityButton = ({ data, restInfo }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const index = useQuantity(cartItems, data.name);

  const addItemsToCart = (data, quantity) => {
    let newItem = { data };
    if (restInfo) {
      newItem = {
        ...data,
        restaurantName: restInfo,
      };
    }
    console.log(newItem,"newItem");
    dispatch(addItem({ item: newItem, quantity: quantity }));
  };

  const reduceItemsToCart = (data, quantity) => {
    dispatch(reduceItem({ item: data, quantity: quantity }));
  };
  return cartItems.length <= 0 || index < 0 ? (
    <button
      className="font-semibold text-lg border-4 border-green-600 w-28 ml-2"
      onClick={() => {console.log(data,"dTd");addItemsToCart(data, 1)}}
    >
      Add
      {console.log(cartItems.length,index,"if of ternary")}
    </button>
  ) : (
    <div className="flex">
      {console.log("else of ternary")}
      <button
        className="font-semibold text-lg border-4 border-green-600 px-3 ml-2"
        onClick={() => reduceItemsToCart(data, 1)}
      >
        -
      </button>
      <h1 className="px-3 border-y-4 border-green-600">
        {index > -1 ? cartItems[index] && cartItems[index].quantity : 0}
      </h1>
      <button
        className="font-semibold text-lg px-3 border-4 border-green-600"
        onClick={() => addItemsToCart(data, 1)}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
