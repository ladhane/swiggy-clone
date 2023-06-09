import React from "react";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../utils/CartSlice";
import { MdDelete } from "react-icons/md";
import { addItem, reduceItem } from "../utils/CartSlice";

const CartCard = ({ data }) => {
  const dispatch = useDispatch();
  const deleteItem = (name) => {

    dispatch(deleteFromCart(name));
  };

  const addItemsToCart = (data, quantity) => {
    const newItem = {
      ...data,
    };
    dispatch(addItem({ item: newItem, quantity: quantity }));
  };

  const reduceItemsToCart = (data, quantity) => {
    dispatch(reduceItem({ item: data, quantity: quantity }));
  };
  return (
    <>
      <div className="flex border-b-2 justify-between m-3">
        <div className="flex justify-between">
          <h1 className="p-2">{data.item.name}</h1>
        </div>
        <div className="flex justify-between h-8">
        <h1 className=" mr-8 md:mr-16"> {(data.item.price|| data.item.defaultPrice) / 100}</h1>
          <div className="flex">
            <button
              className="font-semibold text-sm border border-gray-300 px-3 ml-2 hover:bg-gray-300"
              onClick={() => reduceItemsToCart(data.item, 1)}
            >
              -
            </button>
            <h1 className="px-3 border-y border-gray-300 ">{data.quantity}</h1>
            <button
              className="font-semibold text-sm px-3 border border-gray-300 hover:bg-gray-300"
              onClick={() => addItemsToCart(data.item, 1)}
            >
              +
            </button>
          </div>
          <button className=" hidden md:block ml-16" onClick={() => deleteItem(data.item.name)}>
            <MdDelete />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCard;
