import { useEffect, useState } from "react";

const useQuantity = (cartItems, name) => {
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const i = cartItems.findIndex((item) => {
     return item.item.name === name;
    });
    setIndex(i);
  }, [cartItems, name]);

  return index;
};

export default useQuantity;
