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
    dispatch(addItem({ item: newItem, quantity: quantity }));
  };

  const reduceItemsToCart = (data, quantity) => {
    dispatch(reduceItem({ item: data, quantity: quantity }));
  };
  return cartItems.length <= 0 || index < 0 ? (
    <button
      className="font-semibold text-lg border-2 border-gray-300 rounded hover:bg-gray-300 shadow-lg w-20 "
      onClick={() => {
        addItemsToCart(data, 1);
      }}
    >
      Add
    </button>
  ) : (
    <div className="flex shadow-lg">
      <button
        className="font-semibold text-lg border-2 border-gray-300 px-2 border-r-0 hover:bg-gray-300"
        onClick={() => reduceItemsToCart(data, 1)}
      >
        -
      </button>
      <h1 className="px-2 border-y-2 border-gray-300">
        {index > -1 ? cartItems[index] && cartItems[index].quantity : 0}
      </h1>
      <button
        className="font-semibold text-lg px-2  border-2 border-gray-300 border-l-0 hover:bg-gray-300"
        onClick={() => addItemsToCart(data, 1)}
      >
        +
      </button>
    </div>
  );
};

export default QuantityButton;
