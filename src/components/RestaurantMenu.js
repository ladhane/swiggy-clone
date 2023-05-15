import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MenuCategory from "./MenuCategory";
import { useSelector } from "react-redux";
import MenuShimmer from "./Shimmer/MenuShimmer";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [restaurantInfo, setRestaurantInfo] = useState();
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const cartItems = useSelector((store) => store.cart.items);
  const count = cartItems.reduce((total, item) => total + item.quantity, 0);
  //   const [categoryType, setCategoryType] = useState([]);

  useEffect(() => {
    getRestaurantMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const getRestaurantMenu = async () => {
    const data = await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.655381&lng=73.761024&restaurantId=${id}&submitAction=ENTER`
    );
    const restaurant = await data.json();
    const data2 =
      restaurant.data?.cards?.find((card) => card.groupedCard)?.groupedCard
        ?.cardGroupMap?.REGULAR?.cards || [];

    const cardsWithTitle = data2
      .filter((card) => card.card.card.title)
      .map((card) => card.card.card);
    setRestaurantInfo(restaurant.data.cards[0].card.card.info);
    setRestaurantMenu(cardsWithTitle);
  };
  return !restaurantInfo ? (
    <MenuShimmer numberOfCards={10} />
  ) : (
    <div className="max-w-4xl mt-2 mx-auto px-6">
      <div className=" flex justify-between mb-4">
        <div>
          <h1 className="font-extrabold text-2xl my-2">
            {restaurantInfo.name}
          </h1>
          <h1 className="text-xs text-gray-500">
            {restaurantInfo.cuisines.join(", ")}
          </h1>
          <h1 className="text-xs text-gray-500">
            {restaurantInfo.areaName},{restaurantInfo.sla.lastMileTravelString}
          </h1>
        </div>
        <div className="border rounded-xl items-center p-2 mt-5">
          <div className="flex pb-3 mb-3 justify-center border-b-2 text-green-700 font-extrabold items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="green"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="green"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            {restaurantInfo.avgRatingString}
          </div>
          <h1 className="text-xs text-gray-500">
            {restaurantInfo.totalRatingsString}
          </h1>
        </div>
      </div>
      <h1 className=" text-xs text-gray-500  pb-4 border-dashed border-b-2">
        {restaurantInfo.feeDetails.message}
      </h1>
      <div className="flex items-center mt-4 pb-4 border-b-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 mr-3"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
            clipRule="evenodd"
          />
        </svg>
        <h1 className="mr-3 font-extrabold">
          {restaurantInfo.sla.maxDeliveryTime} MINS
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h1 className="font-extrabold">{restaurantInfo.costForTwoMessage}</h1>
      </div>
      {restaurantMenu && (
        <div className="mb-8">
          {restaurantMenu.map((category, index) => (
            <MenuCategory
              key={index}
              data={category}
              restInfo={restaurantInfo.name}
            />
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="bg-green-700 text-xl px-6 text-white text-center fixed inset-x-0 lg:inset-x-96 bottom-12 rounded-md  border-b-4 mx-auto">
          <Link to="/cart">
            <h1 className="m-3">Your cart has - {count} items</h1>
          </Link>
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
