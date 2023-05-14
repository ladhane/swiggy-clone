import React from "react";
import logo from "../assets/Annapurna.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Header = () => {

  const cartItems = useSelector(store => store.cart.items);
  
  const count = cartItems.reduce((total, item) => total + item.quantity, 0);


  return (
    <div className="h-24 justify-between items-center shadow-md flex">
      <div className="flex items-center lg:pl-64">
      <a href="/"><img className="h-16 px-2 cursor-pointer" src={logo} alt="logo"></img></a>
        <p className="font-bold uppercase underline px-2">
          Home
        </p>
        <span className="px-2 text-gray-500">Address</span>
      </div>
      <ul className="hidden list-none md:flex py-8 lg:pr-64">
        <li className="px-2"><Link to="/search">Search</Link></li>
        <li className="px-2">Offers</li>
        <li className="px-2">Help</li>
        <li className="px-2">Profile</li>
        <li className="px-2"><Link to="/cart">cart- {count}</Link></li>
      </ul>
    </div>
  );
};

export default Header;
