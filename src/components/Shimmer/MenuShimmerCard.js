import React from "react";

const MenuShimmerCard = () => {
  return (
    <div className="border-2 border-gray-200 rounded m-5 animate-gradient-x bg-gradient-to-r from-gray-300 to-transparent">
      <div className="bg-gray-200 h-5 max-w-xs m-5"></div>
      <div className="bg-gray-200 h-5 w-8 m-5 mt-1"></div>
      <div className="bg-gray-200 h-10 max-w-xl m-5"></div>
    </div>
  );
};

export default MenuShimmerCard;
