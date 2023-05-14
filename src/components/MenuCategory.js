import React from "react";
import MenuItem from "./MenuItem";
import Shimmer from "./Shimmer/Shimmer";

const MenuCategory = ({ data, restInfo }) => {
  return !data ? (
    <Shimmer />
  ) : (
    <div>
      <h1 className="font-extrabold text-lg my-4">
        {data.title} {data.itemCards && `(${data.itemCards?.length})`}
      </h1>
      {data.itemCards?.map((itemCard) => {
        return (
          <MenuItem
            key={itemCard?.card?.info.id}
            data={itemCard?.card?.info}
            restInfo={restInfo}
          ></MenuItem>
        );
      })}
      {data.categories &&
        data.categories.map((category) => (
          <MenuCategory data={category} key={category.id} />
        ))}
    </div>
  );
};

export default MenuCategory;
