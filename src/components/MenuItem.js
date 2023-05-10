import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign, faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addItem, reduceItem } from "../utils/CartSlice";
import useQuantity from "../utils/useQuantity";

const MenuItem = ({ data,restInfo }) => {
  //console.log(data, "data2");

  const [showAddBtn, setShowAddBtn] = useState(true);

  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const index = useQuantity(cartItems,data.name);

  const addItemsToCart = (data, quantity) => {
    console.log(data,quantity);
    const newItem = {
      ...data,
      restaurantName: restInfo
    };
    data.restaurantName = restInfo
    setShowAddBtn(false);
    dispatch(addItem({ item: newItem, quantity: quantity }));
  };

  const reduceItemsToCart = (data,quantity) => {
    dispatch(reduceItem({ item: data, quantity: quantity }));
  };
  return (
    <>
      <div className="my-4 py-4 border-gray-600 flex justify-between">
        <div className="max-w-2xl">
          <div className="flex items-center">
            {data.isVeg ? (
              <svg
                fill="green"
                stroke="green"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-4 h-4 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            ) : (
              <svg
                fill="red"
                stroke="red"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-4 h-4 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
            )}
            {data.ribbon?.text && (
              <>
                <FontAwesomeIcon
                  icon={faStar}
                  size="xs"
                  style={{ color: "#f29d26" }}
                />
                <h1 className="text-orange-400 text-xs">{data.ribbon?.text}</h1>{" "}
              </>
            )}
          </div>
          <h1 className=" text-base font-bold text-gray-700">{data.name}</h1>
          {data.price ? (
            <div className="flex items-center text-sm text-gray-600">
              <FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />
              <h1>{data.price / 100}</h1>
            </div>
          ) : (
            <div className="flex items-center text-sm text-gray-600">
              <FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />
              <h1>{data.defaultPrice / 100}</h1>
            </div>
          )}
          <h1 className="text-sm text-gray-400 my-4">{data.description}</h1>
        </div>
        <div>
          {data.imageId && (
            <div className="h-24">
              <img
                className="h-24 w-32 rounded-2xl border-gray-700 shadow-md"
                src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${data.imageId}`}
                alt="img"
              ></img>
            </div>
          )}
          {/* {<QuantityButton data={data.name}/>} */}
          {showAddBtn ? (
            <button
              className="font-semibold text-lg border-4 border-green-600 w-28 ml-2"
              onClick={() => addItemsToCart(data, 1)}
            >
              Add
            </button>
          ) : (
            <div className="flex">
              <button
                className="font-semibold text-lg border-4 border-green-600 px-3 ml-2"
                onClick={() => reduceItemsToCart(data,1)}
              >
                -
              </button> 
              {console.log(cartItems,"cartIyte,")}
              <h1 className="px-3 border-y-4 border-green-600">{index > -1 ? cartItems[index].quantity : 0}</h1>
              <button
                className="font-semibold text-lg px-3 border-4 border-green-600"
                onClick={() => addItemsToCart(data,1)}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="border-b-2"></div>
    </>
  );
};

export default MenuItem;
