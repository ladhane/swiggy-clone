import React from "react";
import MenuShimmerCard from "./MenuShimmerCard";

const MenuShimmer = ({ numberOfCards }) => {
  return (
    <div className="m-5 mx-auto max-w-4xl px-8">
      {Array(numberOfCards)
        .fill("")
        .map((e, index) => (
          <MenuShimmerCard key={index} />
        ))}
    </div>
  );
};

export default MenuShimmer;
