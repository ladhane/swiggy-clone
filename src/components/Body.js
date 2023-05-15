import React, { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer/Shimmer";
import ShimmerCard from "./Shimmer/ShimmerCard";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [totalOpenRestaurants, setTotalOpenRestaurants] = useState();
  const [sortBy, setSortBy] = useState("RELEVANCE");
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const isOnline = useOnline();

  useEffect(() => {
    fetchRestaurantData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset, sortBy]);

  const fetchRestaurantData = async () => {
    if (offset === 0) {
      const data = await fetch(
        `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.655381&lng=73.761024&sortBy=${sortBy}&page_type=DESKTOP_WEB_LISTING`
      );
      const jsonData = await data.json();
      const data2 = jsonData?.data?.cards?.find(
        (item) => item.cardType === "seeAllRestaurants"
      );
      const modifiedData = data2?.data?.data?.cards;
      setTotalOpenRestaurants(data2?.data?.data?.totalOpenRestaurants);
      setAllRestaurants(modifiedData);
    } else {
      //api call is diff on infinite scroll
      let FETCH_MORE_RESTAURANT_DATA_URL = `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.655381&lng=73.761024&offset=${offset}&sortBy=${sortBy}&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`;
      const data = await fetch(FETCH_MORE_RESTAURANT_DATA_URL);
      const jsonData = await data.json();
      const data2 = jsonData?.data?.cards;
      const modifiedData = data2.map((card) => card.data);
      setAllRestaurants((prev) => prev.concat(modifiedData));
    }
    setLoading(false);
  };

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setOffset((prev) => prev + 16);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function updateSortBy(val) {
    setAllRestaurants([]);
    setOffset(0);
    setSortBy(val);
  }

  if(!isOnline){
    return <h1 className="text-center m-5 p-5" > Looks like you are offline. Please connect to internet!</h1>
  }

  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer numberOfCards={12} />
  ) : (
    <>
    <div className="px-8 2xl:px-60 mt-4 2xl:m-16">
      <div className="flex justify-between h-12 items-center  border-b-2">
        <h1 className="font-bold text-lg">
          {totalOpenRestaurants} Restaurants
        </h1>
        <ul className=" hidden md:flex justify-between text-gray-500">
          <li
            className={`px-3 cursor-pointer ${
              sortBy === "RELEVANCE"
                ? "text-black underline"
                : "hover:text-black "
            }`}
            onClick={() => updateSortBy("RELEVANCE")}
          >
            Relevance
          </li>

          <li
            className={`px-3 cursor-pointer ${
              sortBy === "DELIVERY_TIME"
                ? "text-black underline"
                : "hover:text-black "
            }`}
            onClick={() => updateSortBy("DELIVERY_TIME")}
          >
            Delivery Time
          </li>
          <li
            className={`px-3 cursor-pointer ${
              sortBy === "RATING" ? "text-black underline" : "hover:text-black "
            }`}
            onClick={() => updateSortBy("RATING")}
          >
            Rating
          </li>
          <li
            className={`px-3 cursor-pointer ${
              sortBy === "COST_FOR_TWO"
                ? "text-black underline"
                : "hover:text-black "
            }`}
            onClick={() => updateSortBy("COST_FOR_TWO")}
          >
            Cost:Low to High
          </li>
          <li
            className={`px-3 cursor-pointer ${
              sortBy === "COST_FOR_TWO_H2L"
                ? "text-black underline"
                : "hover:text-black "
            }`}
            onClick={() => updateSortBy("COST_FOR_TWO_H2L")}
          >
            Cost:High to Low
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap ">
        {allRestaurants &&
          allRestaurants.map((restaurant) => {
            return (
              <Link
              className="flex md:w-1/3 lg:w-1/4 max-w-xs"
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant?.data?.id}
              >
                <Card {...restaurant.data} />
              </Link>
            );
          })}
        {loading && <ShimmerCard />}
      </div>
    </div>
    </>
  );
};

export default Body;
