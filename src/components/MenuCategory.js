import React from "react";
import MenuItem from "./MenuItem";
import Shimmer from "./Shimmer";

const MenuCategory = ({ data, restInfo }) => {
  //console.log(data, "data");
  return !data ? (
    <Shimmer />
  ) : (
    <div>
      <h1 className="font-extrabold text-lg my-4">
        {data.title} {data.itemCards && `(${data.itemCards?.length})`}
      </h1>
      {data.itemCards?.map((itemCard) => {
        //console.log(itemCard?.card?.info.name, "item");
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
