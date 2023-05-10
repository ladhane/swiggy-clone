import React,{useState} from 'react'
import { addItem,reduceItem } from '../utils/CartSlice';
import { useSelector, useDispatch } from 'react-redux';
import useQuantity from '../utils/useQuantity';

const QuantityButton = ({data}) => {
  
 console.log(data,"data from quantity button");
 const [showAddBtn, setShowAddBtn] = useState(true);

  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const index = useQuantity(cartItems,data.name);

  const addItemsToCart = (name, quantity) => {
    console.log(name,quantity);
    setShowAddBtn(false);
    dispatch(addItem({ item: name, quantity: quantity }));
  };

  const reduceItemsToCart = (name,quantity) => {
    dispatch(reduceItem({ item: name, quantity: quantity }));
  };

  return showAddBtn ? (
        <button
          className="font-semibold text-lg border-4 border-green-600 w-28 ml-2"
          onClick={() => addItemsToCart(data.name, 1)}
        >
          Add
        </button>
      ) : (
        <div className="flex">
          <button
            className="font-semibold text-lg border-4 border-green-600 px-2 ml-2"
            onClick={() => reduceItemsToCart(data.name,1)}
          >
            -
          </button> 
          {console.log(cartItems,"cartIyte,")}
          <h1 className="px-2 border-y-4 border-green-600">{index > -1 ? cartItems[index].quantity : 0}</h1>
          <button
            className="font-semibold text-lg px-2 border-4 border-green-600"
            onClick={() => addItemsToCart(data.name,1)}
          >
            +
          </button>
        </div>
      )
}

export default QuantityButton