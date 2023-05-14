import React from "react";
import ShimmerCard from "./ShimmerCard";

const Shimmer = ({numberOfCards}) => {
  return (
    <div className="md:px-72 m-8 flex flex-wrap">
      {Array(numberOfCards)
        .fill("")
        .map((e,index) => (
          <ShimmerCard key={index}/>
        ))}
    </div>
  );
};

export default Shimmer;
