import React from "react";
import MenuItem from "./MenuItem";
import Shimmer from "./Shimmer/Shimmer";

const MenuCategory = ({ data, restInfo }) => {
  return !data ? (
    <Shimmer />
  ) : (
    <div>
      {data.itemCards?.length > 0 && 
      <h1 className="font-extrabold text-lg my-4">
        {data.title} {data.itemCards && `(${data.itemCards?.length})`}
      </h1>}
      {data.itemCards?.map((itemCard) => {
        return (
          <MenuItem
            key={itemCard?.card?.info.name}
            data={itemCard?.card?.info}
            restInfo={restInfo}
          ></MenuItem>
        );
      })}
    </div>
  );
};

export default MenuCategory;
