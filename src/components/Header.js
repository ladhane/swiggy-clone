import React from "react";
import logo from "../assets/Annapurna.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const count = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="h-24 justify-between items-center shadow-md flex sticky top-0 bg-white">
      <div className="flex items-center lg:pl-64 md:ml-6">
        <Link to="/">
          <img className="h-16 px-2 cursor-pointer" src={logo} alt="logo"></img>
        </Link>
        <Link to="/">
          <p className="font-bold uppercase underline px-2 hidden md:block cursor-pointer">
            Home
          </p>
        </Link>
        <span className="px-2 text-gray-500 hidden md:block">Pune</span>
      </div>
      <ul className="hidden list-none md:flex py-8 lg:pr-64 md:mr-6">
        <li className="px-2 cursor-pointer">
          <Link to="/search">Search</Link>
        </li>
        <li className="px-2">
          <Link to="/help">Help</Link>
        </li>
        <li className="px-2 cursor-pointer">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="px-2 cursor-pointer ">
          <Link to="/cart">Cart- {count}</Link>
        </li>
      </ul>
      <div className="fixed bottom-0 w-full font-bold flex justify-between bg-orange-500 text-white p-4 md:hidden">
        <Link to="/search">Search</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/cart">Cart- {count}</Link>
      </div>
    </div>
  );
};

export default Header;
