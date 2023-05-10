import React from "react";
import { IMAGE_ID } from "../utils/constants";

const Card = (data) => {
  const {
    name,
    cloudinaryImageId,
    deliveryTime,
    costForTwoString,
    avgRating,
    cuisines,
    aggregatedDiscountInfo,
  } = data;
  // console.log(data,"---->data that i get in card");
  return (
    <div className="w-[17rem] hover:shadow-2xl p-4 m-4">
      <img src={IMAGE_ID + cloudinaryImageId} alt="restaurant"></img>
      <h1 className="pt-2 font-semibold">{name}</h1>
      <h2 className="pt-2 text-gray-500 text-sm">{cuisines?.join(", ")}</h2>
      <div className="py-4 flex justify-between items-center border-b-2 text-gray-500 text-sm">
        {avgRating && avgRating >= 4 ? (
          <div className="flex p-1 bg-green-700 text-xs text-white items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.0}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            {avgRating}
          </div>
        ) : (
          <div className="flex p-1 bg-orange-300 text-xs text-white items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            {avgRating}
          </div>
        )}
        <div>.</div>
        <h1>{deliveryTime}</h1>
        <div>.</div>
        <h1>{costForTwoString}</h1>
      </div>
      <h2 className="pt-2 text-amber-900 text-sm font-bold text-center">{aggregatedDiscountInfo?.header}</h2>
    </div>
  );
};

export default Card;
